// Enhanced UI for Download Tab with CS2 Case Opening Effects

// Procedural CS2-style case-opening sounds
const cs2Sounds = {
  caseOpen: null,
  rollTick: null,
  reveal: null
};

let soundContext = null;

function loadCS2Sounds() {
  cs2Sounds.caseOpen = () => playCS2Sound('open');
  cs2Sounds.rollTick = () => playCS2Sound('tick');
  cs2Sounds.reveal = () => playCS2Sound('reveal');
}

function playCS2Sound(type) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    soundContext ||= new AudioContextClass();
    if (soundContext.state === 'suspended') soundContext.resume().catch(() => {});

    const context = soundContext;
    const now = context.currentTime;
    const master = context.createGain();
    master.gain.setValueAtTime(0.55, now);
    master.connect(context.destination);

    const playTone = (startFrequency, endFrequency, waveform, delay, duration, volume) => {
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      const start = now + delay;
      oscillator.type = waveform;
      oscillator.frequency.setValueAtTime(startFrequency, start);
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(1, endFrequency), start + duration);
      envelope.gain.setValueAtTime(0.0001, start);
      envelope.gain.exponentialRampToValueAtTime(volume, start + 0.008);
      envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.connect(envelope);
      envelope.connect(master);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.01);
      oscillator.onended = () => {
        oscillator.disconnect();
        envelope.disconnect();
      };
    };

    const playNoiseClick = () => {
      const duration = 0.07;
      const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index++) samples[index] = Math.random() * 2 - 1;
      const source = context.createBufferSource();
      const filter = context.createBiquadFilter();
      const envelope = context.createGain();
      source.buffer = buffer;
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1400, now);
      envelope.gain.setValueAtTime(0.0001, now);
      envelope.gain.exponentialRampToValueAtTime(0.09, now + 0.004);
      envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      source.connect(filter);
      filter.connect(envelope);
      envelope.connect(master);
      source.start(now);
      source.stop(now + duration);
      source.onended = () => {
        source.disconnect();
        filter.disconnect();
        envelope.disconnect();
      };
    };

    if (type === 'open') {
      playTone(150, 48, 'triangle', 0, 0.28, 0.22);
      playTone(390, 88, 'sawtooth', 0, 0.18, 0.055);
      playNoiseClick();
    } else if (type === 'tick') {
      playTone(980, 610, 'square', 0, 0.055, 0.035);
    } else {
      [523, 659, 784].forEach((frequency, index) => {
        playTone(frequency, frequency * 1.04, 'triangle', index * 0.055, 0.32, 0.08);
      });
    }

    const lifetime = type === 'open' ? 350 : type === 'tick' ? 100 : 500;
    setTimeout(() => master.disconnect(), lifetime);
  } catch (error) {
    console.debug('Dice sound unavailable:', error);
  }
}

// Initialize enhanced UI when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadCS2Sounds();
  enhanceSortButtons();
  enhanceDiceButton();
  
  const genreObserver = new MutationObserver(enhanceGenreDropdown);
  genreObserver.observe(document.body, { childList: true, subtree: true });
  enhanceGenreDropdown();
  
  // Enhance poster cards
  setTimeout(enhancePosterCards, 3000);
});

// Enhance poster cards to show cleaner info
function enhancePosterCards() {
  const posterCards = document.querySelectorAll('.poster-card');
  
  posterCards.forEach(card => {
    const posterCopy = card.querySelector('.poster-copy');
    if (!posterCopy) return;
    
    const gameName = card.dataset.game;
    
    // Hide description paragraph
    const paragraph = posterCopy.querySelector('p');
    if (paragraph) {
      paragraph.style.display = 'none';
    }
    
    // Clean up metadata section
    const metadata = posterCopy.querySelector('.metadata');
    if (metadata) {
      // Get existing metadata rows
      const rows = metadata.querySelectorAll('.metadata-row');
      
      // Keep only size info, remove hosts
      let size = 'Unknown';
      let genre = 'Unknown';
      
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        
        // Extract size
        if (text.includes('gb') || text.includes('mb') || text.includes('kb')) {
          const sizeMatch = row.textContent.match(/(\d+\.?\d*\s*(GB|MB|KB))/i);
          if (sizeMatch) {
            size = sizeMatch[1];
          }
        }
        
        // Hide all rows initially
        row.style.display = 'none';
      });
      
      // Try to get genre from the tag element (hidden by CSS)
      const tagElement = card.querySelector('.tag');
      if (tagElement) {
        genre = tagElement.textContent.trim();
      }
      
      // Create cleaner metadata display
      const cleanMetadata = document.createElement('div');
      cleanMetadata.className = 'clean-metadata';
      cleanMetadata.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 8px;
      `;
      
      // Create size display
      const sizeDisplay = document.createElement('div');
      sizeDisplay.className = 'metadata-item';
      sizeDisplay.innerHTML = `<span style="color: #888; font-size: 10px; text-transform: uppercase;">Size</span> <span style="color: #fff; font-size: 11px; font-weight: 500;">${size}</span>`;
      sizeDisplay.style.cssText = 'display: flex; align-items: center; gap: 8px;';
      
      // Create genre display
      const genreDisplay = document.createElement('div');
      genreDisplay.className = 'metadata-item';
      genreDisplay.innerHTML = `<span style="color: #888; font-size: 10px; text-transform: uppercase;">Genre</span> <span style="color: #ff5500; font-size: 11px; font-weight: 500;">${genre}</span>`;
      genreDisplay.style.cssText = 'display: flex; align-items: center; gap: 8px;';
      
      cleanMetadata.appendChild(sizeDisplay);
      cleanMetadata.appendChild(genreDisplay);
      
      // Replace original metadata
      metadata.innerHTML = '';
      metadata.appendChild(cleanMetadata);
    }
  });
}

// Enhance sort buttons with animations
function enhanceSortButtons() {
  const sortButtons = document.querySelectorAll('.sort-tabs button');
  
  sortButtons.forEach(button => {
    // Add ripple effect
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
      
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function renderGenreSelection(wrapper) {
  const select = wrapper.querySelector('select');
  const display = wrapper.querySelector('.genre-display-value');
  if (!select || !display) return;

  const selectedGenres = Array.from(select.selectedOptions).filter(option => option.value !== 'all');
  display.replaceChildren();
  if (!selectedGenres.length) {
    display.textContent = 'Genre';
    return;
  }

  selectedGenres.forEach(option => {
    const chip = document.createElement('span');
    chip.className = 'genre-selected-chip';
    const label = document.createElement('span');
    label.className = 'genre-chip-label';
    label.textContent = option.textContent;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'genre-chip-remove';
    remove.dataset.value = option.value;
    remove.setAttribute('aria-label', `Remove ${option.textContent}`);
    remove.textContent = '×';
    chip.append(label, remove);
    display.appendChild(chip);
  });
}

// Enhance genre dropdown with better UI
function enhanceGenreDropdown() {
  const genreSelect = document.querySelector('.genre-select');
  if (!genreSelect || genreSelect.dataset.genreDropdownEnhanced === 'true') return;
  
  const select = genreSelect.querySelector('select');
  const icon = genreSelect.querySelector('span');
  
  if (!select || !icon) return;

  genreSelect.dataset.genreDropdownEnhanced = 'true';
  select.multiple = true;

  if (!document.body.dataset.genreDropdownClickHandler) {
    document.body.dataset.genreDropdownClickHandler = 'true';
    document.addEventListener('click', function(e) {
      const removeChip = e.target.closest('.genre-chip-remove');
      if (removeChip) {
        const wrapper = removeChip.closest('.genre-select');
        const select = wrapper?.querySelector('select');
        if (!wrapper || !select) return;
        e.preventDefault();
        e.stopPropagation();
        const nativeOption = Array.from(select.options).find(option => option.value === removeChip.dataset.value);
        if (nativeOption) nativeOption.selected = false;
        wrapper.querySelector(`.custom-genre-option[data-value="${removeChip.dataset.value}"]`)?.classList.remove('selected');
        const hasSelectedGenre = Array.from(select.selectedOptions).some(option => option.value !== 'all');
        if (!hasSelectedGenre) {
          select.querySelector('option[value="all"]').selected = true;
          wrapper.querySelector('.custom-genre-option[data-value="all"]')?.classList.add('selected');
        }
        renderGenreSelection(wrapper);
        select.dispatchEvent(new Event('change', { bubbles: true }));
        return;
      }

      const selectedOption = e.target.closest('.custom-genre-option');
      if (selectedOption) {
        const wrapper = selectedOption.closest('.genre-select');
        const menu = selectedOption.closest('.custom-genre-dropdown');
        const select = wrapper?.querySelector('select');
        if (!wrapper || !menu || !select) return;

        e.preventDefault();
        e.stopPropagation();
        const selectedValue = selectedOption.dataset.value;
        if (selectedValue === 'all') {
          Array.from(select.options).forEach(option => { option.selected = option.value === 'all'; });
          menu.querySelectorAll('.custom-genre-option').forEach(option => option.classList.toggle('selected', option.dataset.value === 'all'));
        } else {
          const nativeOption = Array.from(select.options).find(option => option.value === selectedValue);
          const wasSelected = nativeOption?.selected || selectedOption.classList.contains('selected');
          if (nativeOption) nativeOption.selected = !wasSelected;
          select.querySelector('option[value="all"]').selected = false;
          selectedOption.classList.toggle('selected', !wasSelected);
          const hasSelectedGenre = Array.from(select.selectedOptions).some(option => option.value !== 'all');
          if (!hasSelectedGenre) {
            select.querySelector('option[value="all"]').selected = true;
            menu.querySelector('.custom-genre-option[data-value="all"]')?.classList.add('selected');
          }
        }
        renderGenreSelection(wrapper);
        select.dispatchEvent(new Event('change', { bubbles: true }));
        return;
      }

      if (e.target.closest('.custom-genre-dropdown')) return;

      const targetWrapper = e.target.closest('.genre-select');
      if (targetWrapper) e.preventDefault();
      const targetMenu = targetWrapper?.querySelector('.custom-genre-dropdown');
      const shouldOpen = targetMenu && !targetMenu.classList.contains('active');

      document.querySelectorAll('.custom-genre-dropdown.active').forEach(menu => {
        menu.classList.remove('active');
        menu.parentElement.classList.remove('active');
      });

      if (shouldOpen) {
        targetMenu.classList.add('active');
        targetWrapper.classList.add('active');
      }
    }, true);
  }
  
  // Give the icon a specific class for CSS targeting
  icon.classList.add('genre-dropdown-icon');
  
  // Create display element for current selection
  const displayValue = document.createElement('span');
  displayValue.className = 'genre-display-value';
  displayValue.style.cssText = `
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
  `;
  
  // Insert display before icon
  genreSelect.insertBefore(displayValue, icon);
  renderGenreSelection(genreSelect);
  
  // Create custom dropdown
  const customDropdown = document.createElement('div');
  customDropdown.className = 'custom-genre-dropdown';
  const genreSearch = document.createElement('input');
  genreSearch.className = 'genre-filter-search';
  genreSearch.type = 'search';
  genreSearch.placeholder = 'Filter genre...';
  genreSearch.setAttribute('aria-label', 'Filter genre');
  const optionList = document.createElement('div');
  optionList.className = 'custom-genre-options';
  
  // Get options from select
  const options = Array.from(select.options);
  const genres = options.map(opt => ({
    value: opt.value,
    text: opt.textContent,
    selected: opt.selected
  }));
  
  // Create custom options
  genres.forEach(genre => {
    const option = document.createElement('div');
    option.className = `custom-genre-option ${genre.selected ? 'selected' : ''}`;
    option.textContent = genre.text;
    option.dataset.value = genre.value;
    
    optionList.appendChild(option);
  });

  genreSearch.addEventListener('input', function() {
    const query = genreSearch.value.trim().toLowerCase();
    optionList.querySelectorAll('.custom-genre-option').forEach(option => {
      option.hidden = !option.textContent.toLowerCase().includes(query);
    });
  });
  customDropdown.append(genreSearch, optionList);
  
  // Insert custom dropdown after genre select
  genreSelect.style.position = 'relative';
  genreSelect.appendChild(customDropdown);
  
  // Hide original select but keep it functional
  select.style.opacity = '0';
  select.style.position = 'absolute';
  select.style.pointerEvents = 'none';
  select.style.width = '0';
  select.style.height = '0';
}

// Enhance dice button with CS2 case opening effects
function enhanceDiceButton() {
  if (document.body.dataset.diceSoundClickHandler === 'true') return;
  document.body.dataset.diceSoundClickHandler = 'true';

  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.dice-roll');
    if (!btn) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    cs2Sounds.caseOpen?.();
    btn.style.animation = 'none';
    requestAnimationFrame(() => { btn.style.animation = 'diceSpin 0.5s ease-out'; });
    setTimeout(() => { btn.style.animation = ''; }, 500);
    runCaseRoll();
  }, true);
  
  // Add spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes diceSpin {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.2); }
      100% { transform: rotate(360deg) scale(1); }
    }
  `;
  document.head.appendChild(style);
}

function runCaseRoll() {
  const cards = [...document.querySelectorAll('#download-tab .poster-grid .poster-card:not([hidden])')];
  if (!cards.length) return;

  document.querySelector('.cs2-case-overlay')?.remove();
  const winner = cards[Math.floor(Math.random() * cards.length)];
  const reelItems = Array.from({ length: 36 }, () => cards[Math.floor(Math.random() * cards.length)]);
  const winnerIndex = 32;
  reelItems.splice(winnerIndex, 0, winner);

  const overlay = document.createElement('div');
  overlay.className = 'cs2-case-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Random game selection');

  const dialog = document.createElement('section');
  dialog.className = 'cs2-case-window';
  dialog.innerHTML = `<button class="cs2-case-close" type="button" aria-label="Close">×</button><p class="cs2-case-heading">OPENING CASE</p><div class="cs2-case-viewport"><div class="cs2-case-marker"></div><div class="cs2-case-track"></div></div><section class="cs2-case-result" aria-live="polite"><h2 class="cs2-case-title">Rolling...</h2><div class="cs2-case-actions" hidden><button class="cs2-open-game" type="button">OPEN GAME <span aria-hidden="true">→</span></button><button class="cs2-roll-again" type="button">↻ &nbsp; ROLL AGAIN</button></div></section>`;
  overlay.appendChild(dialog);

  const track = dialog.querySelector('.cs2-case-track');
  let selectedCard;
  reelItems.forEach((gameCard, index) => {
    const item = document.createElement('div');
    item.className = 'cs2-case-card';
    item.dataset.game = gameCard.dataset.game;
    const cover = document.createElement('span');
    cover.className = 'cs2-case-cover';
    cover.style.backgroundImage = gameCard.style.getPropertyValue('--cover');
    const name = document.createElement('span');
    name.className = 'cs2-case-card-name';
    name.textContent = gameCard.dataset.game;
    item.append(cover, name);
    if (index === winnerIndex) {
      item.classList.add('is-selected');
      selectedCard = item;
    }
    track.appendChild(item);
  });

  document.body.appendChild(overlay);

  const configuredDuration = Number(window.GAME_ROLL_DURATION_MS);
  const duration = Number.isFinite(configuredDuration) && configuredDuration > 0 ? configuredDuration : 8000;
  track.style.transitionDuration = `${duration}ms`;
  let tickTimeout;
  const startTime = performance.now();
  const playNextTick = () => {
    if (!overlay.isConnected) return;
    const progress = Math.min(1, (performance.now() - startTime) / duration);
    if (progress >= 1) return;
    cs2Sounds.rollTick?.();
    tickTimeout = setTimeout(playNextTick, 70 + 430 * progress ** 3);
  };
  playNextTick();

  let reelPositioned = false;
  const positionWinner = () => {
    if (reelPositioned || !selectedCard.isConnected) return;
    reelPositioned = true;
    const viewport = dialog.querySelector('.cs2-case-viewport');
    const destination = viewport.clientWidth / 2 - (selectedCard.offsetLeft + selectedCard.offsetWidth / 2);
    track.style.transform = `translateX(${destination}px)`;
  };
  requestAnimationFrame(positionWinner);
  setTimeout(positionWinner, 50);

  const closeOverlay = () => {
    clearTimeout(tickTimeout);
    document.removeEventListener('keydown', escapeHandler);
    overlay.remove();
  };
  dialog.querySelector('.cs2-case-close').addEventListener('click', closeOverlay);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeOverlay();
  });
  dialog.querySelector('.cs2-open-game').addEventListener('click', () => {
    closeOverlay();
    winner.click();
  });
  dialog.querySelector('.cs2-roll-again').addEventListener('click', () => {
    closeOverlay();
    cs2Sounds.caseOpen?.();
    runCaseRoll();
  });
  const escapeHandler = event => {
    if (event.key === 'Escape' && overlay.isConnected) closeOverlay();
  };
  document.addEventListener('keydown', escapeHandler);

  setTimeout(() => {
    if (!overlay.isConnected) return;
    clearTimeout(tickTimeout);
    cs2Sounds.reveal?.();
    dialog.classList.add('is-revealed');
    selectedCard.classList.add('winner');
    dialog.querySelector('.cs2-case-heading').textContent = 'YOUR PICK';
    dialog.querySelector('.cs2-case-title').textContent = winner.dataset.game;
    dialog.querySelector('.cs2-case-actions').hidden = false;
  }, duration);
}

// Enhance the existing roll overlay with CS2 effects
function enhanceRollOverlay() {
  // Use MutationObserver to detect when roll overlay is added
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.classList && node.classList.contains('roll-overlay')) {
          enhanceRollOverlayCS2(node);
        }
      });
    });
  });
  
  observer.observe(document.body, { childList: true });
}

// Add CS2 effects to roll overlay
function enhanceRollOverlayCS2(overlay) {
  const rollTrack = overlay.querySelector('.roll-track');
  const closeBtn = overlay.querySelector('.roll-close');
  
  if (!rollTrack || !closeBtn) return;
  
  // Play tick sounds during roll
  let tickInterval;
  let tickCount = 0;
  
  tickInterval = setInterval(() => {
    if (cs2Sounds.rollTick && tickCount < 25) {
      cs2Sounds.rollTick();
      tickCount++;
    } else {
      clearInterval(tickInterval);
    }
  }, 100);
  
  // Play reveal sound and highlight winner when animation ends
  setTimeout(() => {
    clearInterval(tickInterval);
    
    // Find the center card (winner)
    const cards = rollTrack.querySelectorAll('.roll-card');
    const centerIndex = Math.floor(cards.length / 2);
    
    if (cards[centerIndex]) {
      cards[centerIndex].classList.add('winner');
    }
    
    // Play reveal sound
    if (cs2Sounds.reveal) {
      cs2Sounds.reveal();
    }
    
    // Update button text
    closeBtn.textContent = 'OPEN GAME';
    
  }, 2300); // Match the CSS transition duration
}

// Start observing for roll overlays
setTimeout(enhanceRollOverlay, 2000);

// Load the enhanced CSS
const enhancedCSS = document.createElement('link');
enhancedCSS.rel = 'stylesheet';
enhancedCSS.href = 'enhanced-ui.css';
document.head.appendChild(enhancedCSS);