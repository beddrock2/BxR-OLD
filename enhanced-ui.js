// Enhanced UI for Download Tab with CS2 Case Opening Effects (v1.0.1)

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
  syncGamesThemeColor();
  renderGamesTab();
  enhanceSortButtons();
  enhanceDiceButton();
  
  const genreObserver = new MutationObserver(enhanceGenreDropdown);
  genreObserver.observe(document.body, { childList: true, subtree: true });
  enhanceGenreDropdown();
  
  // Enhance poster cards
  setTimeout(enhancePosterCards, 3000);
});

function syncGamesThemeColor() {
  const colors = { orange: ['#F97316', '#FB923C'], blue: ['#DC2626', '#F4F4F5'], gray: ['#6366F1', '#A5B4FC'], green: ['#10B981', '#34D399'], red: ['#EF4444', '#F87171'] };
  const theme = localStorage.getItem('B×R-theme') || 'orange';
  const [accent, light] = colors[theme] || colors.orange;
  document.documentElement.style.setProperty('--games-accent', accent);
  document.documentElement.style.setProperty('--games-accent-light', light);
}

document.addEventListener('click', () => setTimeout(syncGamesThemeColor, 0));

const browserGames = [
  ['Call of Duty: Black Ops — Zombies', 'vel.gg/bo1z', 'BO1', 'Zombies'],
  ['Call of Duty: Black Ops — Moon', 'moon-zombies.pages.dev', 'MOON', 'Zombies'],
  ['Call of Duty: Black Ops — Kino der Toten', 'kino-der-toten.pages.dev', 'KINO', 'Zombies'],
  ['BO3 Cheese Cube', 'cheese-cube.pages.dev', 'CUBE', 'Challenge'],
  ['Black Ops 2', 'vibeslops.luckeysystems.com', 'BO2', 'Shooter'],
  ['Modern Warfare 2', 'ovz-game-production.up.railway.app', 'MW2', 'Shooter'],
  ['Skate 3', 'skate.aaddpp.lol', 'SK8', 'Sports'],
  ['CS Surf', 'surfd.net', 'SURF', 'Shooter'],
  ['Halo CE', 'mitchellhynes.com/halo', 'HALO', 'Shooter'],
  ['Halo CE Mobile', 'hcemobile.com', 'HALO', 'Shooter'],
  ['PES 6', 'pes6.optijuegos.net', 'PES', 'Sports'],
  ['GTA 5', 'web.archive.org/web/20261005232456/https://playgta5.com/', 'V', 'Open world'],
  ['GTA Vice City', 'joncodeofficial.github.io/gta-vice-city/', 'VC', 'Open world'],
  ['The Simpsons: Hit & Run', 'shar-wasm.cjoseph.workers.dev/?skipmovie', 'SPR', 'Open world'],
  ['Quake 1', 'q1.pieter.com', 'Q1', 'Classic FPS'],
  ['Quake 2', 'q2.pieter.com', 'Q2', 'Classic FPS'],
  ['Quake 3', 'q3.pieter.com', 'Q3', 'Arena FPS'],
  ['Return to Castle Wolfenstein', 'rtcw.pieter.com', 'RTCW', 'Classic FPS'],
  ['Unreal Tournament', 'ut.pieter.com', 'UT', 'Arena FPS'],
  ['Half Life', 'pixelsuft.github.io/hl/', 'HL', 'Classic FPS'],
  ['Half Life / CS 1.6', 'x8bitrain.github.io/webXash/', 'XASH', 'Classic FPS'],
  ['Diablo', 'johnimril.github.io/diablo_web/', 'DIA', 'Action RPG'],
  ['Hedgewars', 'webwars.link', 'HW', 'Strategy'],
  ['WASMARCADE', 'wasmarcade.com/Fan', 'ARCADE', 'Game collection', 'A larger browser arcade with GTA, Minecraft, and more.']
];
window.BROWSER_GAMES = browserGames;
window.GAME_STEAM_COVERS = {
  'Call of Duty: Black Ops — Zombies': 42700, 'Call of Duty: Black Ops — Moon': 42700, 'Call of Duty: Black Ops — Kino der Toten': 42700,
  'BO3 Cheese Cube': 311210, 'Black Ops 2': 202970, 'Modern Warfare 2': 10180, 'CS Surf': 240, 'Halo CE': 976730, 'Halo CE Mobile': 976730,
  'GTA 5': 271590, 'GTA Vice City': 12110, 'Quake 1': 2310, 'Quake 2': 2320, 'Quake 3': 2200, 'Return to Castle Wolfenstein': 9010,
  'Unreal Tournament': 13240, 'Half Life': 70, 'Half Life / CS 1.6': 70, 'Hedgewars': 22200, 'Skate 3': 3354750,
  'PES 6': 1665460, 'The Simpsons: Hit & Run': 213670, 'Diablo': 2344520
};
window.GAME_CUSTOM_COVERS = {
  'The Simpsons: Hit & Run': 'https://cdn2.steamgriddb.com/grid/090e09f6efa6202aa9f9d5f450aa8177.png',
  'Skate 3': 'https://img.succesone.fr/2025/09/Skate-SuccesOneFR-microsoft.jpg'
};

function renderGamesTab() {
  if (window.location.pathname !== '/games') return;

  const content = document.querySelector('nav')?.parentElement;
  if (!content || content.querySelector('#games-tab')) return;

  const page = document.createElement('section');
  page.id = 'games-tab';
  page.className = 'games-tab';

  const intro = document.createElement('header');
  intro.className = 'games-intro';
  intro.innerHTML = '<div><p class="games-eyebrow">B×R HUB</p><h1>Games</h1><p>Browser games picked by the community.</p></div><span class="games-count">25 games</span>';

  const grid = document.createElement('div');
  grid.className = 'games-grid';
  browserGames.forEach(([name, address, mark, genre, description], index) => {
    const card = document.createElement('a');
    card.className = `game-link-card${index === browserGames.length - 1 ? ' game-link-card--collection' : ''}`;
    card.href = /^https?:\/\//.test(address) ? address : `https://${address}`;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `Open ${name}`);

    const art = document.createElement('span');
    art.className = 'game-link-art';
    art.textContent = mark;
    const steamId = window.GAME_STEAM_COVERS[name];
    const customCover = window.GAME_CUSTOM_COVERS[name];
    if (steamId || customCover) {
      const cover = document.createElement('img');
      cover.className = 'game-link-cover'; cover.alt = ''; cover.src = customCover || `https://cdn.akamai.steamstatic.com/steam/apps/${steamId}/library_600x900.jpg`;
      cover.addEventListener('error', () => cover.remove()); art.appendChild(cover);
    }
    const details = document.createElement('span');
    details.className = 'game-link-details';
    const tag = document.createElement('span');
    tag.className = 'game-link-tag';
    tag.textContent = genre;
    const title = document.createElement('strong');
    title.textContent = name;
    const source = document.createElement('span');
    source.className = 'game-link-source';
    source.textContent = address.replace(/^www\./, '').split('/')[0];
    const action = document.createElement('span');
    action.className = 'game-link-action';
    action.textContent = index === browserGames.length - 1 ? 'Browse collection  →' : 'Open game  →';
    details.append(tag, title, description ? Object.assign(document.createElement('span'), { className: 'game-link-description', textContent: description }) : source, action);
    card.append(art, details);
    grid.appendChild(card);
  });

  page.append(intro, grid);
  content.appendChild(page);
}

// The React bundle has no Games route. Use a full navigation for this one tab so
// the server can return the same themed shell before this page is added.
document.addEventListener('click', event => {
  const gamesLink = event.target.closest('a[href="/games"]');
  if (!gamesLink || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  event.stopPropagation();
  window.location.assign('/games');
}, true);

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
