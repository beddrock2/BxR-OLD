function X0(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const s = Object.getOwnPropertyDescriptor(r, i);
					s && Object.defineProperty(e, i, s.get ? s : {
						enumerable: !0,
						get: () => r[i]
					})
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const s of i)
			if (s.type === "childList")
				for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(i) {
		const s = {};
		return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
	}

	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const s = n(i);
		fetch(i.href, s)
	}
})();

function Y0(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Wf = {
		exports: {}
	},
	Xs = {},
	Hf = {
		exports: {}
	},
	A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi = Symbol.for("react.element"),
	Q0 = Symbol.for("react.portal"),
	Z0 = Symbol.for("react.fragment"),
	q0 = Symbol.for("react.strict_mode"),
	J0 = Symbol.for("react.profiler"),
	ey = Symbol.for("react.provider"),
	ty = Symbol.for("react.context"),
	ny = Symbol.for("react.forward_ref"),
	ry = Symbol.for("react.suspense"),
	iy = Symbol.for("react.memo"),
	sy = Symbol.for("react.lazy"),
	sc = Symbol.iterator;

function oy(e) {
	return e === null || typeof e != "object" ? null : (e = sc && e[sc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Kf = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	Gf = Object.assign,
	Xf = {};

function ar(e, t, n) {
	this.props = e, this.context = t, this.refs = Xf, this.updater = n || Kf
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
ar.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Yf() {}
Yf.prototype = ar.prototype;

function Cl(e, t, n) {
	this.props = e, this.context = t, this.refs = Xf, this.updater = n || Kf
}
var Nl = Cl.prototype = new Yf;
Nl.constructor = Cl;
Gf(Nl, ar.prototype);
Nl.isPureReactComponent = !0;
var oc = Array.isArray,
	Qf = Object.prototype.hasOwnProperty,
	Tl = {
		current: null
	},
	Zf = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function qf(e, t, n) {
	var r, i = {},
		s = null,
		o = null;
	if (t != null)
		for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Qf.call(t, r) && !Zf.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
		i.children = u
	}
	if (e && e.defaultProps)
		for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: gi,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: Tl.current
	}
}

function ay(e, t) {
	return {
		$$typeof: gi,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function Pl(e) {
	return typeof e == "object" && e !== null && e.$$typeof === gi
}

function ly(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var ac = /\/+/g;

function xo(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? ly("" + e.key) : t.toString(36)
}

function Zi(e, t, n, r, i) {
	var s = typeof e;
	(s === "undefined" || s === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else switch (s) {
		case "string":
		case "number":
			o = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case gi:
				case Q0:
					o = !0
			}
	}
	if (o) return o = e, i = i(o), e = r === "" ? "." + xo(o, 0) : r, oc(i) ? (n = "", e != null && (n = e.replace(ac, "$&/") + "/"), Zi(i, t, n, "", function(c) {
		return c
	})) : i != null && (Pl(i) && (i = ay(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(ac, "$&/") + "/") + e)), t.push(i)), 1;
	if (o = 0, r = r === "" ? "." : r + ":", oc(e))
		for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = r + xo(s, l);
			o += Zi(s, t, n, u, i)
		} else if (u = oy(e), typeof u == "function")
			for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = r + xo(s, l++), o += Zi(s, t, n, u, i);
		else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return o
}

function $i(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return Zi(e, r, "", "", function(s) {
		return t.call(n, s, i++)
	}), r
}

function uy(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var ke = {
		current: null
	},
	qi = {
		transition: null
	},
	cy = {
		ReactCurrentDispatcher: ke,
		ReactCurrentBatchConfig: qi,
		ReactCurrentOwner: Tl
	};

function Jf() {
	throw Error("act(...) is not supported in production builds of React.")
}
A.Children = {
	map: $i,
	forEach: function(e, t, n) {
		$i(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return $i(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return $i(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!Pl(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
A.Component = ar;
A.Fragment = Z0;
A.Profiler = J0;
A.PureComponent = Cl;
A.StrictMode = q0;
A.Suspense = ry;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
A.act = Jf;
A.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = Gf({}, e.props),
		i = e.key,
		s = e.ref,
		o = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (s = t.ref, o = Tl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
		for (u in t) Qf.call(t, u) && !Zf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		l = Array(u);
		for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
		r.children = l
	}
	return {
		$$typeof: gi,
		type: e.type,
		key: i,
		ref: s,
		props: r,
		_owner: o
	}
};
A.createContext = function(e) {
	return e = {
		$$typeof: ty,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: ey,
		_context: e
	}, e.Consumer = e
};
A.createElement = qf;
A.createFactory = function(e) {
	var t = qf.bind(null, e);
	return t.type = e, t
};
A.createRef = function() {
	return {
		current: null
	}
};
A.forwardRef = function(e) {
	return {
		$$typeof: ny,
		render: e
	}
};
A.isValidElement = Pl;
A.lazy = function(e) {
	return {
		$$typeof: sy,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: uy
	}
};
A.memo = function(e, t) {
	return {
		$$typeof: iy,
		type: e,
		compare: t === void 0 ? null : t
	}
};
A.startTransition = function(e) {
	var t = qi.transition;
	qi.transition = {};
	try {
		e()
	} finally {
		qi.transition = t
	}
};
A.unstable_act = Jf;
A.useCallback = function(e, t) {
	return ke.current.useCallback(e, t)
};
A.useContext = function(e) {
	return ke.current.useContext(e)
};
A.useDebugValue = function() {};
A.useDeferredValue = function(e) {
	return ke.current.useDeferredValue(e)
};
A.useEffect = function(e, t) {
	return ke.current.useEffect(e, t)
};
A.useId = function() {
	return ke.current.useId()
};
A.useImperativeHandle = function(e, t, n) {
	return ke.current.useImperativeHandle(e, t, n)
};
A.useInsertionEffect = function(e, t) {
	return ke.current.useInsertionEffect(e, t)
};
A.useLayoutEffect = function(e, t) {
	return ke.current.useLayoutEffect(e, t)
};
A.useMemo = function(e, t) {
	return ke.current.useMemo(e, t)
};
A.useReducer = function(e, t, n) {
	return ke.current.useReducer(e, t, n)
};
A.useRef = function(e) {
	return ke.current.useRef(e)
};
A.useState = function(e) {
	return ke.current.useState(e)
};
A.useSyncExternalStore = function(e, t, n) {
	return ke.current.useSyncExternalStore(e, t, n)
};
A.useTransition = function() {
	return ke.current.useTransition()
};
A.version = "18.3.1";
Hf.exports = A;
var k = Hf.exports;
const Lt = Y0(k),
	dy = X0({
		__proto__: null,
		default: Lt
	}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fy = k,
	py = Symbol.for("react.element"),
	hy = Symbol.for("react.fragment"),
	my = Object.prototype.hasOwnProperty,
	yy = fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	gy = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function ep(e, t, n) {
	var r, i = {},
		s = null,
		o = null;
	n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
	for (r in t) my.call(t, r) && !gy.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: py,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: yy.current
	}
}
Xs.Fragment = hy;
Xs.jsx = ep;
Xs.jsxs = ep;
Wf.exports = Xs;
var a = Wf.exports,
	tp = {
		exports: {}
	},
	Ae = {},
	np = {
		exports: {}
	},
	rp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(P, L) {
		var R = P.length;
		P.push(L);
		e: for (; 0 < R;) {
			var Z = R - 1 >>> 1,
				ae = P[Z];
			if (0 < i(ae, L)) P[Z] = L, P[R] = ae, R = Z;
			else break e
		}
	}

	function n(P) {
		return P.length === 0 ? null : P[0]
	}

	function r(P) {
		if (P.length === 0) return null;
		var L = P[0],
			R = P.pop();
		if (R !== L) {
			P[0] = R;
			e: for (var Z = 0, ae = P.length, Pi = ae >>> 1; Z < Pi;) {
				var en = 2 * (Z + 1) - 1,
					go = P[en],
					tn = en + 1,
					Ei = P[tn];
				if (0 > i(go, R)) tn < ae && 0 > i(Ei, go) ? (P[Z] = Ei, P[tn] = R, Z = tn) : (P[Z] = go, P[en] = R, Z = en);
				else if (tn < ae && 0 > i(Ei, R)) P[Z] = Ei, P[tn] = R, Z = tn;
				else break e
			}
		}
		return L
	}

	function i(P, L) {
		var R = P.sortIndex - L.sortIndex;
		return R !== 0 ? R : P.id - L.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var s = performance;
		e.unstable_now = function() {
			return s.now()
		}
	} else {
		var o = Date,
			l = o.now();
		e.unstable_now = function() {
			return o.now() - l
		}
	}
	var u = [],
		c = [],
		d = 1,
		f = null,
		p = 3,
		g = !1,
		v = !1,
		y = !1,
		w = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		m = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function x(P) {
		for (var L = n(c); L !== null;) {
			if (L.callback === null) r(c);
			else if (L.startTime <= P) r(c), L.sortIndex = L.expirationTime, t(u, L);
			else break;
			L = n(c)
		}
	}

	function j(P) {
		if (y = !1, x(P), !v)
			if (n(u) !== null) v = !0, Ti(N);
			else {
				var L = n(c);
				L !== null && re(j, L.startTime - P)
			}
	}

	function N(P, L) {
		v = !1, y && (y = !1, h(S), S = -1), g = !0;
		var R = p;
		try {
			for (x(L), f = n(u); f !== null && (!(f.expirationTime > L) || P && !W());) {
				var Z = f.callback;
				if (typeof Z == "function") {
					f.callback = null, p = f.priorityLevel;
					var ae = Z(f.expirationTime <= L);
					L = e.unstable_now(), typeof ae == "function" ? f.callback = ae : f === n(u) && r(u), x(L)
				} else r(u);
				f = n(u)
			}
			if (f !== null) var Pi = !0;
			else {
				var en = n(c);
				en !== null && re(j, en.startTime - L), Pi = !1
			}
			return Pi
		} finally {
			f = null, p = R, g = !1
		}
	}
	var C = !1,
		b = null,
		S = -1,
		$ = 5,
		E = -1;

	function W() {
		return !(e.unstable_now() - E < $)
	}

	function oe() {
		if (b !== null) {
			var P = e.unstable_now();
			E = P;
			var L = !0;
			try {
				L = b(!0, P)
			} finally {
				L ? Jt() : (C = !1, b = null)
			}
		} else C = !1
	}
	var Jt;
	if (typeof m == "function") Jt = function() {
		m(oe)
	};
	else if (typeof MessageChannel < "u") {
		var pr = new MessageChannel,
			ic = pr.port2;
		pr.port1.onmessage = oe, Jt = function() {
			ic.postMessage(null)
		}
	} else Jt = function() {
		w(oe, 0)
	};

	function Ti(P) {
		b = P, C || (C = !0, Jt())
	}

	function re(P, L) {
		S = w(function() {
			P(e.unstable_now())
		}, L)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
		P.callback = null
	}, e.unstable_continueExecution = function() {
		v || g || (v = !0, Ti(N))
	}, e.unstable_forceFrameRate = function(P) {
		0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < P ? Math.floor(1e3 / P) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return p
	}, e.unstable_getFirstCallbackNode = function() {
		return n(u)
	}, e.unstable_next = function(P) {
		switch (p) {
			case 1:
			case 2:
			case 3:
				var L = 3;
				break;
			default:
				L = p
		}
		var R = p;
		p = L;
		try {
			return P()
		} finally {
			p = R
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, L) {
		switch (P) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				P = 3
		}
		var R = p;
		p = P;
		try {
			return L()
		} finally {
			p = R
		}
	}, e.unstable_scheduleCallback = function(P, L, R) {
		var Z = e.unstable_now();
		switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? Z + R : Z) : R = Z, P) {
			case 1:
				var ae = -1;
				break;
			case 2:
				ae = 250;
				break;
			case 5:
				ae = 1073741823;
				break;
			case 4:
				ae = 1e4;
				break;
			default:
				ae = 5e3
		}
		return ae = R + ae, P = {
			id: d++,
			callback: L,
			priorityLevel: P,
			startTime: R,
			expirationTime: ae,
			sortIndex: -1
		}, R > Z ? (P.sortIndex = R, t(c, P), n(u) === null && P === n(c) && (y ? (h(S), S = -1) : y = !0, re(j, R - Z))) : (P.sortIndex = ae, t(u, P), v || g || (v = !0, Ti(N))), P
	}, e.unstable_shouldYield = W, e.unstable_wrapCallback = function(P) {
		var L = p;
		return function() {
			var R = p;
			p = L;
			try {
				return P.apply(this, arguments)
			} finally {
				p = R
			}
		}
	}
})(rp);
np.exports = rp;
var xy = np.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vy = k,
	Re = xy;

function T(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ip = new Set,
	Wr = {};

function kn(e, t) {
	qn(e, t), qn(e + "Capture", t)
}

function qn(e, t) {
	for (Wr[e] = t, e = 0; e < t.length; e++) ip.add(t[e])
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	aa = Object.prototype.hasOwnProperty,
	wy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	lc = {},
	uc = {};

function by(e) {
	return aa.call(uc, e) ? !0 : aa.call(lc, e) ? !1 : wy.test(e) ? uc[e] = !0 : (lc[e] = !0, !1)
}

function ky(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function jy(e, t, n, r) {
	if (t === null || typeof t > "u" || ky(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function je(e, t, n, r, i, s, o) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	pe[e] = new je(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	pe[t] = new je(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	pe[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	pe[e] = new je(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	pe[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	pe[e] = new je(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	pe[e] = new je(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	pe[e] = new je(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	pe[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var El = /[\-:]([a-z])/g;

function $l(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(El, $l);
	pe[t] = new je(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(El, $l);
	pe[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(El, $l);
	pe[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	pe[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
pe.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	pe[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Dl(e, t, n, r) {
	var i = pe.hasOwnProperty(t) ? pe[t] : null;
	(i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jy(t, n, i, r) && (n = null), r || i === null ? by(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bt = vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Di = Symbol.for("react.element"),
	En = Symbol.for("react.portal"),
	$n = Symbol.for("react.fragment"),
	Ml = Symbol.for("react.strict_mode"),
	la = Symbol.for("react.profiler"),
	sp = Symbol.for("react.provider"),
	op = Symbol.for("react.context"),
	Ll = Symbol.for("react.forward_ref"),
	ua = Symbol.for("react.suspense"),
	ca = Symbol.for("react.suspense_list"),
	Rl = Symbol.for("react.memo"),
	St = Symbol.for("react.lazy"),
	ap = Symbol.for("react.offscreen"),
	cc = Symbol.iterator;

function hr(e) {
	return e === null || typeof e != "object" ? null : (e = cc && e[cc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var X = Object.assign,
	vo;

function jr(e) {
	if (vo === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		vo = t && t[1] || ""
	}
	return `
` + vo + e
}
var wo = !1;

function bo(e, t) {
	if (!e || wo) return "";
	wo = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (c) {
					var r = c
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (c) {
					r = c
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (c) {
				r = c
			}
			e()
		}
	} catch (c) {
		if (c && r && typeof c.stack == "string") {
			for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l];) l--;
			for (; 1 <= o && 0 <= l; o--, l--)
				if (i[o] !== s[l]) {
					if (o !== 1 || l !== 1)
						do
							if (o--, l--, 0 > l || i[o] !== s[l]) {
								var u = `
` + i[o].replace(" at new ", " at ");
								return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
							} while (1 <= o && 0 <= l);
					break
				}
		}
	} finally {
		wo = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? jr(e) : ""
}

function Sy(e) {
	switch (e.tag) {
		case 5:
			return jr(e.type);
		case 16:
			return jr("Lazy");
		case 13:
			return jr("Suspense");
		case 19:
			return jr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = bo(e.type, !1), e;
		case 11:
			return e = bo(e.type.render, !1), e;
		case 1:
			return e = bo(e.type, !0), e;
		default:
			return ""
	}
}

function da(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case $n:
			return "Fragment";
		case En:
			return "Portal";
		case la:
			return "Profiler";
		case Ml:
			return "StrictMode";
		case ua:
			return "Suspense";
		case ca:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case op:
			return (e.displayName || "Context") + ".Consumer";
		case sp:
			return (e._context.displayName || "Context") + ".Provider";
		case Ll:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case Rl:
			return t = e.displayName || null, t !== null ? t : da(e.type) || "Memo";
		case St:
			t = e._payload, e = e._init;
			try {
				return da(e(t))
			} catch {}
	}
	return null
}

function Cy(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return da(t);
		case 8:
			return t === Ml ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function Wt(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function lp(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Ny(e) {
	var t = lp(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var i = n.get,
			s = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return i.call(this)
			},
			set: function(o) {
				r = "" + o, s.call(this, o)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(o) {
				r = "" + o
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function Mi(e) {
	e._valueTracker || (e._valueTracker = Ny(e))
}

function up(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = lp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ps(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function fa(e, t) {
	var n = t.checked;
	return X({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function dc(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = Wt(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function cp(e, t) {
	t = t.checked, t != null && Dl(e, "checked", t, !1)
}

function pa(e, t) {
	cp(e, t);
	var n = Wt(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? ha(e, t.type, n) : t.hasOwnProperty("defaultValue") && ha(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function fc(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ha(e, t, n) {
	(t !== "number" || ps(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Sr = Array.isArray;

function Kn(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				e[i].selected = !0, r && (e[i].defaultSelected = !0);
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}

function ma(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
	return X({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function pc(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(T(92));
			if (Sr(n)) {
				if (1 < n.length) throw Error(T(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: Wt(n)
	}
}

function dp(e, t) {
	var n = Wt(t.value),
		r = Wt(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function hc(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function fp(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function ya(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? fp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Li, pp = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, i)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (Li = Li || document.createElement("div"), Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Li.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Hr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var Pr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	Ty = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
	Ty.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), Pr[t] = Pr[e]
	})
});

function hp(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px"
}

function mp(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = hp(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
		}
}
var Py = X({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function ga(e, t) {
	if (t) {
		if (Py[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(T(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(T(62))
	}
}

function xa(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0
	}
}
var va = null;

function Al(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var wa = null,
	Gn = null,
	Xn = null;

function mc(e) {
	if (e = wi(e)) {
		if (typeof wa != "function") throw Error(T(280));
		var t = e.stateNode;
		t && (t = Js(t), wa(e.stateNode, e.type, t))
	}
}

function yp(e) {
	Gn ? Xn ? Xn.push(e) : Xn = [e] : Gn = e
}

function gp() {
	if (Gn) {
		var e = Gn,
			t = Xn;
		if (Xn = Gn = null, mc(e), t)
			for (e = 0; e < t.length; e++) mc(t[e])
	}
}

function xp(e, t) {
	return e(t)
}

function vp() {}
var ko = !1;

function wp(e, t, n) {
	if (ko) return e(t, n);
	ko = !0;
	try {
		return xp(e, t, n)
	} finally {
		ko = !1, (Gn !== null || Xn !== null) && (vp(), gp())
	}
}

function Kr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Js(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(T(231, t, typeof n));
	return n
}
var ba = !1;
if (mt) try {
	var mr = {};
	Object.defineProperty(mr, "passive", {
		get: function() {
			ba = !0
		}
	}), window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr)
} catch {
	ba = !1
}

function Ey(e, t, n, r, i, s, o, l, u) {
	var c = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, c)
	} catch (d) {
		this.onError(d)
	}
}
var Er = !1,
	hs = null,
	ms = !1,
	ka = null,
	$y = {
		onError: function(e) {
			Er = !0, hs = e
		}
	};

function Dy(e, t, n, r, i, s, o, l, u) {
	Er = !1, hs = null, Ey.apply($y, arguments)
}

function My(e, t, n, r, i, s, o, l, u) {
	if (Dy.apply(this, arguments), Er) {
		if (Er) {
			var c = hs;
			Er = !1, hs = null
		} else throw Error(T(198));
		ms || (ms = !0, ka = c)
	}
}

function jn(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function bp(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function yc(e) {
	if (jn(e) !== e) throw Error(T(188))
}

function Ly(e) {
	var t = e.alternate;
	if (!t) {
		if (t = jn(e), t === null) throw Error(T(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var i = n.return;
		if (i === null) break;
		var s = i.alternate;
		if (s === null) {
			if (r = i.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (i.child === s.child) {
			for (s = i.child; s;) {
				if (s === n) return yc(i), e;
				if (s === r) return yc(i), t;
				s = s.sibling
			}
			throw Error(T(188))
		}
		if (n.return !== r.return) n = i, r = s;
		else {
			for (var o = !1, l = i.child; l;) {
				if (l === n) {
					o = !0, n = i, r = s;
					break
				}
				if (l === r) {
					o = !0, r = i, n = s;
					break
				}
				l = l.sibling
			}
			if (!o) {
				for (l = s.child; l;) {
					if (l === n) {
						o = !0, n = s, r = i;
						break
					}
					if (l === r) {
						o = !0, r = s, n = i;
						break
					}
					l = l.sibling
				}
				if (!o) throw Error(T(189))
			}
		}
		if (n.alternate !== r) throw Error(T(190))
	}
	if (n.tag !== 3) throw Error(T(188));
	return n.stateNode.current === n ? e : t
}

function kp(e) {
	return e = Ly(e), e !== null ? jp(e) : null
}

function jp(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = jp(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var Sp = Re.unstable_scheduleCallback,
	gc = Re.unstable_cancelCallback,
	Ry = Re.unstable_shouldYield,
	Ay = Re.unstable_requestPaint,
	J = Re.unstable_now,
	zy = Re.unstable_getCurrentPriorityLevel,
	zl = Re.unstable_ImmediatePriority,
	Cp = Re.unstable_UserBlockingPriority,
	ys = Re.unstable_NormalPriority,
	Vy = Re.unstable_LowPriority,
	Np = Re.unstable_IdlePriority,
	Ys = null,
	it = null;

function Fy(e) {
	if (it && typeof it.onCommitFiberRoot == "function") try {
		it.onCommitFiberRoot(Ys, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Oy,
	_y = Math.log,
	Iy = Math.LN2;

function Oy(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (_y(e) / Iy | 0) | 0
}
var Ri = 64,
	Ai = 4194304;

function Cr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function gs(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		s = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var l = o & ~i;
		l !== 0 ? r = Cr(l) : (s &= o, s !== 0 && (r = Cr(s)))
	} else o = n & ~i, o !== 0 ? r = Cr(o) : s !== 0 && (r = Cr(s));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ze(t), i = 1 << n, r |= e[n], t &= ~i;
	return r
}

function By(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function Uy(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
		var o = 31 - Ze(s),
			l = 1 << o,
			u = i[o];
		u === -1 ? (!(l & n) || l & r) && (i[o] = By(l, t)) : u <= t && (e.expiredLanes |= l), s &= ~l
	}
}

function ja(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Tp() {
	var e = Ri;
	return Ri <<= 1, !(Ri & 4194240) && (Ri = 64), e
}

function jo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function xi(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n
}

function Wy(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var i = 31 - Ze(n),
			s = 1 << i;
		t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
	}
}

function Vl(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - Ze(n),
			i = 1 << r;
		i & t | e[r] & t && (e[r] |= t), n &= ~i
	}
}
var F = 0;

function Pp(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ep, Fl, $p, Dp, Mp, Sa = !1,
	zi = [],
	Rt = null,
	At = null,
	zt = null,
	Gr = new Map,
	Xr = new Map,
	Tt = [],
	Hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function xc(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Rt = null;
			break;
		case "dragenter":
		case "dragleave":
			At = null;
			break;
		case "mouseover":
		case "mouseout":
			zt = null;
			break;
		case "pointerover":
		case "pointerout":
			Gr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Xr.delete(t.pointerId)
	}
}

function yr(e, t, n, r, i, s) {
	return e === null || e.nativeEvent !== s ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: s,
		targetContainers: [i]
	}, t !== null && (t = wi(t), t !== null && Fl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Ky(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return Rt = yr(Rt, e, t, n, r, i), !0;
		case "dragenter":
			return At = yr(At, e, t, n, r, i), !0;
		case "mouseover":
			return zt = yr(zt, e, t, n, r, i), !0;
		case "pointerover":
			var s = i.pointerId;
			return Gr.set(s, yr(Gr.get(s) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return s = i.pointerId, Xr.set(s, yr(Xr.get(s) || null, e, t, n, r, i)), !0
	}
	return !1
}

function Lp(e) {
	var t = ln(e.target);
	if (t !== null) {
		var n = jn(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = bp(n), t !== null) {
					e.blockedOn = t, Mp(e.priority, function() {
						$p(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function Ji(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			va = r, n.target.dispatchEvent(r), va = null
		} else return t = wi(n), t !== null && Fl(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function vc(e, t, n) {
	Ji(e) && n.delete(t)
}

function Gy() {
	Sa = !1, Rt !== null && Ji(Rt) && (Rt = null), At !== null && Ji(At) && (At = null), zt !== null && Ji(zt) && (zt = null), Gr.forEach(vc), Xr.forEach(vc)
}

function gr(e, t) {
	e.blockedOn === t && (e.blockedOn = null, Sa || (Sa = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Gy)))
}

function Yr(e) {
	function t(i) {
		return gr(i, e)
	}
	if (0 < zi.length) {
		gr(zi[0], e);
		for (var n = 1; n < zi.length; n++) {
			var r = zi[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (Rt !== null && gr(Rt, e), At !== null && gr(At, e), zt !== null && gr(zt, e), Gr.forEach(t), Xr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null);) Lp(n), n.blockedOn === null && Tt.shift()
}
var Yn = bt.ReactCurrentBatchConfig,
	xs = !0;

function Xy(e, t, n, r) {
	var i = F,
		s = Yn.transition;
	Yn.transition = null;
	try {
		F = 1, _l(e, t, n, r)
	} finally {
		F = i, Yn.transition = s
	}
}

function Yy(e, t, n, r) {
	var i = F,
		s = Yn.transition;
	Yn.transition = null;
	try {
		F = 4, _l(e, t, n, r)
	} finally {
		F = i, Yn.transition = s
	}
}

function _l(e, t, n, r) {
	if (xs) {
		var i = Ca(e, t, n, r);
		if (i === null) Lo(e, t, r, vs, n), xc(e, r);
		else if (Ky(i, e, t, n, r)) r.stopPropagation();
		else if (xc(e, r), t & 4 && -1 < Hy.indexOf(e)) {
			for (; i !== null;) {
				var s = wi(i);
				if (s !== null && Ep(s), s = Ca(e, t, n, r), s === null && Lo(e, t, r, vs, n), s === i) break;
				i = s
			}
			i !== null && r.stopPropagation()
		} else Lo(e, t, r, null, n)
	}
}
var vs = null;

function Ca(e, t, n, r) {
	if (vs = null, e = Al(r), e = ln(e), e !== null)
		if (t = jn(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = bp(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return vs = e, null
}

function Rp(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (zy()) {
				case zl:
					return 1;
				case Cp:
					return 4;
				case ys:
				case Vy:
					return 16;
				case Np:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var $t = null,
	Il = null,
	es = null;

function Ap() {
	if (es) return es;
	var e, t = Il,
		n = t.length,
		r, i = "value" in $t ? $t.value : $t.textContent,
		s = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
	return es = i.slice(e, 1 < r ? 1 - r : void 0)
}

function ts(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Vi() {
	return !0
}

function wc() {
	return !1
}

function ze(e) {
	function t(n, r, i, s, o) {
		this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
		for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
		return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Vi : wc, this.isPropagationStopped = wc, this
	}
	return X(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vi)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vi)
		},
		persist: function() {},
		isPersistent: Vi
	}), t
}
var lr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Ol = ze(lr),
	vi = X({}, lr, {
		view: 0,
		detail: 0
	}),
	Qy = ze(vi),
	So, Co, xr, Qs = X({}, vi, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Bl,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (So = e.screenX - xr.screenX, Co = e.screenY - xr.screenY) : Co = So = 0, xr = e), So)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Co
		}
	}),
	bc = ze(Qs),
	Zy = X({}, Qs, {
		dataTransfer: 0
	}),
	qy = ze(Zy),
	Jy = X({}, vi, {
		relatedTarget: 0
	}),
	No = ze(Jy),
	eg = X({}, lr, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	tg = ze(eg),
	ng = X({}, lr, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	rg = ze(ng),
	ig = X({}, lr, {
		data: 0
	}),
	kc = ze(ig),
	sg = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	},
	og = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	},
	ag = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function lg(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = ag[e]) ? !!t[e] : !1
}

function Bl() {
	return lg
}
var ug = X({}, vi, {
		key: function(e) {
			if (e.key) {
				var t = sg[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = ts(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? og[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Bl,
		charCode: function(e) {
			return e.type === "keypress" ? ts(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? ts(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	cg = ze(ug),
	dg = X({}, Qs, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	jc = ze(dg),
	fg = X({}, vi, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Bl
	}),
	pg = ze(fg),
	hg = X({}, lr, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	mg = ze(hg),
	yg = X({}, Qs, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	gg = ze(yg),
	xg = [9, 13, 27, 32],
	Ul = mt && "CompositionEvent" in window,
	$r = null;
mt && "documentMode" in document && ($r = document.documentMode);
var vg = mt && "TextEvent" in window && !$r,
	zp = mt && (!Ul || $r && 8 < $r && 11 >= $r),
	Sc = " ",
	Cc = !1;

function Vp(e, t) {
	switch (e) {
		case "keyup":
			return xg.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function Fp(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Dn = !1;

function wg(e, t) {
	switch (e) {
		case "compositionend":
			return Fp(t);
		case "keypress":
			return t.which !== 32 ? null : (Cc = !0, Sc);
		case "textInput":
			return e = t.data, e === Sc && Cc ? null : e;
		default:
			return null
	}
}

function bg(e, t) {
	if (Dn) return e === "compositionend" || !Ul && Vp(e, t) ? (e = Ap(), es = Il = $t = null, Dn = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return zp && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var kg = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};

function Nc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!kg[e.type] : t === "textarea"
}

function _p(e, t, n, r) {
	yp(r), t = ws(t, "onChange"), 0 < t.length && (n = new Ol("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var Dr = null,
	Qr = null;

function jg(e) {
	Qp(e, 0)
}

function Zs(e) {
	var t = Rn(e);
	if (up(t)) return e
}

function Sg(e, t) {
	if (e === "change") return t
}
var Ip = !1;
if (mt) {
	var To;
	if (mt) {
		var Po = "oninput" in document;
		if (!Po) {
			var Tc = document.createElement("div");
			Tc.setAttribute("oninput", "return;"), Po = typeof Tc.oninput == "function"
		}
		To = Po
	} else To = !1;
	Ip = To && (!document.documentMode || 9 < document.documentMode)
}

function Pc() {
	Dr && (Dr.detachEvent("onpropertychange", Op), Qr = Dr = null)
}

function Op(e) {
	if (e.propertyName === "value" && Zs(Qr)) {
		var t = [];
		_p(t, Qr, e, Al(e)), wp(jg, t)
	}
}

function Cg(e, t, n) {
	e === "focusin" ? (Pc(), Dr = t, Qr = n, Dr.attachEvent("onpropertychange", Op)) : e === "focusout" && Pc()
}

function Ng(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zs(Qr)
}

function Tg(e, t) {
	if (e === "click") return Zs(t)
}

function Pg(e, t) {
	if (e === "input" || e === "change") return Zs(t)
}

function Eg(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Je = typeof Object.is == "function" ? Object.is : Eg;

function Zr(e, t) {
	if (Je(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!aa.call(t, i) || !Je(e[i], t[i])) return !1
	}
	return !0
}

function Ec(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function $c(e, t) {
	var n = Ec(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Ec(n)
	}
}

function Bp(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Up() {
	for (var e = window, t = ps(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = ps(e.document)
	}
	return t
}

function Wl(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function $g(e) {
	var t = Up(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && Bp(n.ownerDocument.documentElement, n)) {
		if (r !== null && Wl(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var i = n.textContent.length,
					s = Math.min(r.start, i);
				r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = $c(n, s);
				var o = $c(n, r);
				i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var Dg = mt && "documentMode" in document && 11 >= document.documentMode,
	Mn = null,
	Na = null,
	Mr = null,
	Ta = !1;

function Dc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ta || Mn == null || Mn !== ps(r) || (r = Mn, "selectionStart" in r && Wl(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), Mr && Zr(Mr, r) || (Mr = r, r = ws(Na, "onSelect"), 0 < r.length && (t = new Ol("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = Mn)))
}

function Fi(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ln = {
		animationend: Fi("Animation", "AnimationEnd"),
		animationiteration: Fi("Animation", "AnimationIteration"),
		animationstart: Fi("Animation", "AnimationStart"),
		transitionend: Fi("Transition", "TransitionEnd")
	},
	Eo = {},
	Wp = {};
mt && (Wp = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);

function qs(e) {
	if (Eo[e]) return Eo[e];
	if (!Ln[e]) return e;
	var t = Ln[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in Wp) return Eo[e] = t[n];
	return e
}
var Hp = qs("animationend"),
	Kp = qs("animationiteration"),
	Gp = qs("animationstart"),
	Xp = qs("transitionend"),
	Yp = new Map,
	Mc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Xt(e, t) {
	Yp.set(e, t), kn(t, [e])
}
for (var $o = 0; $o < Mc.length; $o++) {
	var Do = Mc[$o],
		Mg = Do.toLowerCase(),
		Lg = Do[0].toUpperCase() + Do.slice(1);
	Xt(Mg, "on" + Lg)
}
Xt(Hp, "onAnimationEnd");
Xt(Kp, "onAnimationIteration");
Xt(Gp, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(Xp, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	Rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));

function Lc(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, My(r, t, void 0, e), e.currentTarget = null
}

function Qp(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var s = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var l = r[o],
						u = l.instance,
						c = l.currentTarget;
					if (l = l.listener, u !== s && i.isPropagationStopped()) break e;
					Lc(i, l, c), s = u
				} else
					for (o = 0; o < r.length; o++) {
						if (l = r[o], u = l.instance, c = l.currentTarget, l = l.listener, u !== s && i.isPropagationStopped()) break e;
						Lc(i, l, c), s = u
					}
		}
	}
	if (ms) throw e = ka, ms = !1, ka = null, e
}

function I(e, t) {
	var n = t[Ma];
	n === void 0 && (n = t[Ma] = new Set);
	var r = e + "__bubble";
	n.has(r) || (Zp(t, e, 2, !1), n.add(r))
}

function Mo(e, t, n) {
	var r = 0;
	t && (r |= 4), Zp(n, e, r, t)
}
var _i = "_reactListening" + Math.random().toString(36).slice(2);

function qr(e) {
	if (!e[_i]) {
		e[_i] = !0, ip.forEach(function(n) {
			n !== "selectionchange" && (Rg.has(n) || Mo(n, !1, e), Mo(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[_i] || (t[_i] = !0, Mo("selectionchange", !1, t))
	}
}

function Zp(e, t, n, r) {
	switch (Rp(t)) {
		case 1:
			var i = Xy;
			break;
		case 4:
			i = Yy;
			break;
		default:
			i = _l
	}
	n = i.bind(null, t, n, e), i = void 0, !ba || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: i
	}) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
		passive: i
	}) : e.addEventListener(t, n, !1)
}

function Lo(e, t, n, r, i) {
	var s = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var o = r.tag;
		if (o === 3 || o === 4) {
			var l = r.stateNode.containerInfo;
			if (l === i || l.nodeType === 8 && l.parentNode === i) break;
			if (o === 4)
				for (o = r.return; o !== null;) {
					var u = o.tag;
					if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
					o = o.return
				}
			for (; l !== null;) {
				if (o = ln(l), o === null) return;
				if (u = o.tag, u === 5 || u === 6) {
					r = s = o;
					continue e
				}
				l = l.parentNode
			}
		}
		r = r.return
	}
	wp(function() {
		var c = s,
			d = Al(n),
			f = [];
		e: {
			var p = Yp.get(e);
			if (p !== void 0) {
				var g = Ol,
					v = e;
				switch (e) {
					case "keypress":
						if (ts(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = cg;
						break;
					case "focusin":
						v = "focus", g = No;
						break;
					case "focusout":
						v = "blur", g = No;
						break;
					case "beforeblur":
					case "afterblur":
						g = No;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						g = bc;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = qy;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = pg;
						break;
					case Hp:
					case Kp:
					case Gp:
						g = tg;
						break;
					case Xp:
						g = mg;
						break;
					case "scroll":
						g = Qy;
						break;
					case "wheel":
						g = gg;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = rg;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = jc
				}
				var y = (t & 4) !== 0,
					w = !y && e === "scroll",
					h = y ? p !== null ? p + "Capture" : null : p;
				y = [];
				for (var m = c, x; m !== null;) {
					x = m;
					var j = x.stateNode;
					if (x.tag === 5 && j !== null && (x = j, h !== null && (j = Kr(m, h), j != null && y.push(Jr(m, j, x)))), w) break;
					m = m.return
				}
				0 < y.length && (p = new g(p, v, null, n, d), f.push({
					event: p,
					listeners: y
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== va && (v = n.relatedTarget || n.fromElement) && (ln(v) || v[yt])) break e;
				if ((g || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = c, v = v ? ln(v) : null, v !== null && (w = jn(v), v !== w || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = c), g !== v)) {
					if (y = bc, j = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (y = jc, j = "onPointerLeave", h = "onPointerEnter", m = "pointer"), w = g == null ? p : Rn(g), x = v == null ? p : Rn(v), p = new y(j, m + "leave", g, n, d), p.target = w, p.relatedTarget = x, j = null, ln(d) === c && (y = new y(h, m + "enter", v, n, d), y.target = x, y.relatedTarget = w, j = y), w = j, g && v) t: {
						for (y = g, h = v, m = 0, x = y; x; x = Pn(x)) m++;
						for (x = 0, j = h; j; j = Pn(j)) x++;
						for (; 0 < m - x;) y = Pn(y),
						m--;
						for (; 0 < x - m;) h = Pn(h),
						x--;
						for (; m--;) {
							if (y === h || h !== null && y === h.alternate) break t;
							y = Pn(y), h = Pn(h)
						}
						y = null
					}
					else y = null;
					g !== null && Rc(f, p, g, y, !1), v !== null && w !== null && Rc(f, w, v, y, !0)
				}
			}
			e: {
				if (p = c ? Rn(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var N = Sg;
				else if (Nc(p))
					if (Ip) N = Pg;
					else {
						N = Ng;
						var C = Cg
					}
				else(g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (N = Tg);
				if (N && (N = N(e, c))) {
					_p(f, N, n, d);
					break e
				}
				C && C(e, p, c),
				e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && ha(p, "number", p.value)
			}
			switch (C = c ? Rn(c) : window, e) {
				case "focusin":
					(Nc(C) || C.contentEditable === "true") && (Mn = C, Na = c, Mr = null);
					break;
				case "focusout":
					Mr = Na = Mn = null;
					break;
				case "mousedown":
					Ta = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					Ta = !1, Dc(f, n, d);
					break;
				case "selectionchange":
					if (Dg) break;
				case "keydown":
				case "keyup":
					Dc(f, n, d)
			}
			var b;
			if (Ul) e: {
				switch (e) {
					case "compositionstart":
						var S = "onCompositionStart";
						break e;
					case "compositionend":
						S = "onCompositionEnd";
						break e;
					case "compositionupdate":
						S = "onCompositionUpdate";
						break e
				}
				S = void 0
			}
			else Dn ? Vp(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");S && (zp && n.locale !== "ko" && (Dn || S !== "onCompositionStart" ? S === "onCompositionEnd" && Dn && (b = Ap()) : ($t = d, Il = "value" in $t ? $t.value : $t.textContent, Dn = !0)), C = ws(c, S), 0 < C.length && (S = new kc(S, e, null, n, d), f.push({
				event: S,
				listeners: C
			}), b ? S.data = b : (b = Fp(n), b !== null && (S.data = b)))),
			(b = vg ? wg(e, n) : bg(e, n)) && (c = ws(c, "onBeforeInput"), 0 < c.length && (d = new kc("onBeforeInput", "beforeinput", null, n, d), f.push({
				event: d,
				listeners: c
			}), d.data = b))
		}
		Qp(f, t)
	})
}

function Jr(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function ws(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var i = e,
			s = i.stateNode;
		i.tag === 5 && s !== null && (i = s, s = Kr(e, n), s != null && r.unshift(Jr(e, s, i)), s = Kr(e, t), s != null && r.push(Jr(e, s, i))), e = e.return
	}
	return r
}

function Pn(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function Rc(e, t, n, r, i) {
	for (var s = t._reactName, o = []; n !== null && n !== r;) {
		var l = n,
			u = l.alternate,
			c = l.stateNode;
		if (u !== null && u === r) break;
		l.tag === 5 && c !== null && (l = c, i ? (u = Kr(n, s), u != null && o.unshift(Jr(n, u, l))) : i || (u = Kr(n, s), u != null && o.push(Jr(n, u, l)))), n = n.return
	}
	o.length !== 0 && e.push({
		event: t,
		listeners: o
	})
}
var Ag = /\r\n?/g,
	zg = /\u0000|\uFFFD/g;

function Ac(e) {
	return (typeof e == "string" ? e : "" + e).replace(Ag, `
`).replace(zg, "")
}

function Ii(e, t, n) {
	if (t = Ac(t), Ac(e) !== t && n) throw Error(T(425))
}

function bs() {}
var Pa = null,
	Ea = null;

function $a(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Da = typeof setTimeout == "function" ? setTimeout : void 0,
	Vg = typeof clearTimeout == "function" ? clearTimeout : void 0,
	zc = typeof Promise == "function" ? Promise : void 0,
	Fg = typeof queueMicrotask == "function" ? queueMicrotask : typeof zc < "u" ? function(e) {
		return zc.resolve(null).then(e).catch(_g)
	} : Da;

function _g(e) {
	setTimeout(function() {
		throw e
	})
}

function Ro(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if (e.removeChild(n), i && i.nodeType === 8)
			if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), Yr(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = i
	} while (n);
	Yr(t)
}

function Vt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function Vc(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var ur = Math.random().toString(36).slice(2),
	nt = "__reactFiber$" + ur,
	ei = "__reactProps$" + ur,
	yt = "__reactContainer$" + ur,
	Ma = "__reactEvents$" + ur,
	Ig = "__reactListeners$" + ur,
	Og = "__reactHandles$" + ur;

function ln(e) {
	var t = e[nt];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[yt] || n[nt]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = Vc(e); e !== null;) {
					if (n = e[nt]) return n;
					e = Vc(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function wi(e) {
	return e = e[nt] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Rn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(T(33))
}

function Js(e) {
	return e[ei] || null
}
var La = [],
	An = -1;

function Yt(e) {
	return {
		current: e
	}
}

function O(e) {
	0 > An || (e.current = La[An], La[An] = null, An--)
}

function _(e, t) {
	An++, La[An] = e.current, e.current = t
}
var Ht = {},
	xe = Yt(Ht),
	Te = Yt(!1),
	gn = Ht;

function Jn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Ht;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		s;
	for (s in n) i[s] = t[s];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Pe(e) {
	return e = e.childContextTypes, e != null
}

function ks() {
	O(Te), O(xe)
}

function Fc(e, t, n) {
	if (xe.current !== Ht) throw Error(T(168));
	_(xe, t), _(Te, n)
}

function qp(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var i in r)
		if (!(i in t)) throw Error(T(108, Cy(e) || "Unknown", i));
	return X({}, n, r)
}

function js(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, gn = xe.current, _(xe, e), _(Te, Te.current), !0
}

function _c(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(T(169));
	n ? (e = qp(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, O(Te), O(xe), _(xe, e)) : O(Te), _(Te, n)
}
var ct = null,
	eo = !1,
	Ao = !1;

function Jp(e) {
	ct === null ? ct = [e] : ct.push(e)
}

function Bg(e) {
	eo = !0, Jp(e)
}

function Qt() {
	if (!Ao && ct !== null) {
		Ao = !0;
		var e = 0,
			t = F;
		try {
			var n = ct;
			for (F = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			ct = null, eo = !1
		} catch (i) {
			throw ct !== null && (ct = ct.slice(e + 1)), Sp(zl, Qt), i
		} finally {
			F = t, Ao = !1
		}
	}
	return null
}
var zn = [],
	Vn = 0,
	Ss = null,
	Cs = 0,
	_e = [],
	Ie = 0,
	xn = null,
	ft = 1,
	pt = "";

function rn(e, t) {
	zn[Vn++] = Cs, zn[Vn++] = Ss, Ss = e, Cs = t
}

function eh(e, t, n) {
	_e[Ie++] = ft, _e[Ie++] = pt, _e[Ie++] = xn, xn = e;
	var r = ft;
	e = pt;
	var i = 32 - Ze(r) - 1;
	r &= ~(1 << i), n += 1;
	var s = 32 - Ze(t) + i;
	if (30 < s) {
		var o = i - i % 5;
		s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ft = 1 << 32 - Ze(t) + i | n << i | r, pt = s + e
	} else ft = 1 << s | n << i | r, pt = e
}

function Hl(e) {
	e.return !== null && (rn(e, 1), eh(e, 1, 0))
}

function Kl(e) {
	for (; e === Ss;) Ss = zn[--Vn], zn[Vn] = null, Cs = zn[--Vn], zn[Vn] = null;
	for (; e === xn;) xn = _e[--Ie], _e[Ie] = null, pt = _e[--Ie], _e[Ie] = null, ft = _e[--Ie], _e[Ie] = null
}
var Le = null,
	Me = null,
	B = !1,
	Qe = null;

function th(e, t) {
	var n = Oe(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ic(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = Vt(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? {
				id: ft,
				overflow: pt
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, Me = null, !0) : !1;
		default:
			return !1
	}
}

function Ra(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Aa(e) {
	if (B) {
		var t = Me;
		if (t) {
			var n = t;
			if (!Ic(e, t)) {
				if (Ra(e)) throw Error(T(418));
				t = Vt(n.nextSibling);
				var r = Le;
				t && Ic(e, t) ? th(r, n) : (e.flags = e.flags & -4097 | 2, B = !1, Le = e)
			}
		} else {
			if (Ra(e)) throw Error(T(418));
			e.flags = e.flags & -4097 | 2, B = !1, Le = e
		}
	}
}

function Oc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	Le = e
}

function Oi(e) {
	if (e !== Le) return !1;
	if (!B) return Oc(e), B = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps)), t && (t = Me)) {
		if (Ra(e)) throw nh(), Error(T(418));
		for (; t;) th(e, t), t = Vt(t.nextSibling)
	}
	if (Oc(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Me = Vt(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			Me = null
		}
	} else Me = Le ? Vt(e.stateNode.nextSibling) : null;
	return !0
}

function nh() {
	for (var e = Me; e;) e = Vt(e.nextSibling)
}

function er() {
	Me = Le = null, B = !1
}

function Gl(e) {
	Qe === null ? Qe = [e] : Qe.push(e)
}
var Ug = bt.ReactCurrentBatchConfig;

function vr(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(T(309));
				var r = n.stateNode
			}
			if (!r) throw Error(T(147, e));
			var i = r,
				s = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
				var l = i.refs;
				o === null ? delete l[s] : l[s] = o
			}, t._stringRef = s, t)
		}
		if (typeof e != "string") throw Error(T(284));
		if (!n._owner) throw Error(T(290, e))
	}
	return e
}

function Bi(e, t) {
	throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Bc(e) {
	var t = e._init;
	return t(e._payload)
}

function rh(e) {
	function t(h, m) {
		if (e) {
			var x = h.deletions;
			x === null ? (h.deletions = [m], h.flags |= 16) : x.push(m)
		}
	}

	function n(h, m) {
		if (!e) return null;
		for (; m !== null;) t(h, m), m = m.sibling;
		return null
	}

	function r(h, m) {
		for (h = new Map; m !== null;) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
		return h
	}

	function i(h, m) {
		return h = Ot(h, m), h.index = 0, h.sibling = null, h
	}

	function s(h, m, x) {
		return h.index = x, e ? (x = h.alternate, x !== null ? (x = x.index, x < m ? (h.flags |= 2, m) : x) : (h.flags |= 2, m)) : (h.flags |= 1048576, m)
	}

	function o(h) {
		return e && h.alternate === null && (h.flags |= 2), h
	}

	function l(h, m, x, j) {
		return m === null || m.tag !== 6 ? (m = Bo(x, h.mode, j), m.return = h, m) : (m = i(m, x), m.return = h, m)
	}

	function u(h, m, x, j) {
		var N = x.type;
		return N === $n ? d(h, m, x.props.children, j, x.key) : m !== null && (m.elementType === N || typeof N == "object" && N !== null && N.$$typeof === St && Bc(N) === m.type) ? (j = i(m, x.props), j.ref = vr(h, m, x), j.return = h, j) : (j = ls(x.type, x.key, x.props, null, h.mode, j), j.ref = vr(h, m, x), j.return = h, j)
	}

	function c(h, m, x, j) {
		return m === null || m.tag !== 4 || m.stateNode.containerInfo !== x.containerInfo || m.stateNode.implementation !== x.implementation ? (m = Uo(x, h.mode, j), m.return = h, m) : (m = i(m, x.children || []), m.return = h, m)
	}

	function d(h, m, x, j, N) {
		return m === null || m.tag !== 7 ? (m = hn(x, h.mode, j, N), m.return = h, m) : (m = i(m, x), m.return = h, m)
	}

	function f(h, m, x) {
		if (typeof m == "string" && m !== "" || typeof m == "number") return m = Bo("" + m, h.mode, x), m.return = h, m;
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case Di:
					return x = ls(m.type, m.key, m.props, null, h.mode, x), x.ref = vr(h, null, m), x.return = h, x;
				case En:
					return m = Uo(m, h.mode, x), m.return = h, m;
				case St:
					var j = m._init;
					return f(h, j(m._payload), x)
			}
			if (Sr(m) || hr(m)) return m = hn(m, h.mode, x, null), m.return = h, m;
			Bi(h, m)
		}
		return null
	}

	function p(h, m, x, j) {
		var N = m !== null ? m.key : null;
		if (typeof x == "string" && x !== "" || typeof x == "number") return N !== null ? null : l(h, m, "" + x, j);
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case Di:
					return x.key === N ? u(h, m, x, j) : null;
				case En:
					return x.key === N ? c(h, m, x, j) : null;
				case St:
					return N = x._init, p(h, m, N(x._payload), j)
			}
			if (Sr(x) || hr(x)) return N !== null ? null : d(h, m, x, j, null);
			Bi(h, x)
		}
		return null
	}

	function g(h, m, x, j, N) {
		if (typeof j == "string" && j !== "" || typeof j == "number") return h = h.get(x) || null, l(m, h, "" + j, N);
		if (typeof j == "object" && j !== null) {
			switch (j.$$typeof) {
				case Di:
					return h = h.get(j.key === null ? x : j.key) || null, u(m, h, j, N);
				case En:
					return h = h.get(j.key === null ? x : j.key) || null, c(m, h, j, N);
				case St:
					var C = j._init;
					return g(h, m, x, C(j._payload), N)
			}
			if (Sr(j) || hr(j)) return h = h.get(x) || null, d(m, h, j, N, null);
			Bi(m, j)
		}
		return null
	}

	function v(h, m, x, j) {
		for (var N = null, C = null, b = m, S = m = 0, $ = null; b !== null && S < x.length; S++) {
			b.index > S ? ($ = b, b = null) : $ = b.sibling;
			var E = p(h, b, x[S], j);
			if (E === null) {
				b === null && (b = $);
				break
			}
			e && b && E.alternate === null && t(h, b), m = s(E, m, S), C === null ? N = E : C.sibling = E, C = E, b = $
		}
		if (S === x.length) return n(h, b), B && rn(h, S), N;
		if (b === null) {
			for (; S < x.length; S++) b = f(h, x[S], j), b !== null && (m = s(b, m, S), C === null ? N = b : C.sibling = b, C = b);
			return B && rn(h, S), N
		}
		for (b = r(h, b); S < x.length; S++) $ = g(b, h, S, x[S], j), $ !== null && (e && $.alternate !== null && b.delete($.key === null ? S : $.key), m = s($, m, S), C === null ? N = $ : C.sibling = $, C = $);
		return e && b.forEach(function(W) {
			return t(h, W)
		}), B && rn(h, S), N
	}

	function y(h, m, x, j) {
		var N = hr(x);
		if (typeof N != "function") throw Error(T(150));
		if (x = N.call(x), x == null) throw Error(T(151));
		for (var C = N = null, b = m, S = m = 0, $ = null, E = x.next(); b !== null && !E.done; S++, E = x.next()) {
			b.index > S ? ($ = b, b = null) : $ = b.sibling;
			var W = p(h, b, E.value, j);
			if (W === null) {
				b === null && (b = $);
				break
			}
			e && b && W.alternate === null && t(h, b), m = s(W, m, S), C === null ? N = W : C.sibling = W, C = W, b = $
		}
		if (E.done) return n(h, b), B && rn(h, S), N;
		if (b === null) {
			for (; !E.done; S++, E = x.next()) E = f(h, E.value, j), E !== null && (m = s(E, m, S), C === null ? N = E : C.sibling = E, C = E);
			return B && rn(h, S), N
		}
		for (b = r(h, b); !E.done; S++, E = x.next()) E = g(b, h, S, E.value, j), E !== null && (e && E.alternate !== null && b.delete(E.key === null ? S : E.key), m = s(E, m, S), C === null ? N = E : C.sibling = E, C = E);
		return e && b.forEach(function(oe) {
			return t(h, oe)
		}), B && rn(h, S), N
	}

	function w(h, m, x, j) {
		if (typeof x == "object" && x !== null && x.type === $n && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case Di:
					e: {
						for (var N = x.key, C = m; C !== null;) {
							if (C.key === N) {
								if (N = x.type, N === $n) {
									if (C.tag === 7) {
										n(h, C.sibling), m = i(C, x.props.children), m.return = h, h = m;
										break e
									}
								} else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === St && Bc(N) === C.type) {
									n(h, C.sibling), m = i(C, x.props), m.ref = vr(h, C, x), m.return = h, h = m;
									break e
								}
								n(h, C);
								break
							} else t(h, C);
							C = C.sibling
						}
						x.type === $n ? (m = hn(x.props.children, h.mode, j, x.key), m.return = h, h = m) : (j = ls(x.type, x.key, x.props, null, h.mode, j), j.ref = vr(h, m, x), j.return = h, h = j)
					}
					return o(h);
				case En:
					e: {
						for (C = x.key; m !== null;) {
							if (m.key === C)
								if (m.tag === 4 && m.stateNode.containerInfo === x.containerInfo && m.stateNode.implementation === x.implementation) {
									n(h, m.sibling), m = i(m, x.children || []), m.return = h, h = m;
									break e
								} else {
									n(h, m);
									break
								}
							else t(h, m);
							m = m.sibling
						}
						m = Uo(x, h.mode, j),
						m.return = h,
						h = m
					}
					return o(h);
				case St:
					return C = x._init, w(h, m, C(x._payload), j)
			}
			if (Sr(x)) return v(h, m, x, j);
			if (hr(x)) return y(h, m, x, j);
			Bi(h, x)
		}
		return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, m !== null && m.tag === 6 ? (n(h, m.sibling), m = i(m, x), m.return = h, h = m) : (n(h, m), m = Bo(x, h.mode, j), m.return = h, h = m), o(h)) : n(h, m)
	}
	return w
}
var tr = rh(!0),
	ih = rh(!1),
	Ns = Yt(null),
	Ts = null,
	Fn = null,
	Xl = null;

function Yl() {
	Xl = Fn = Ts = null
}

function Ql(e) {
	var t = Ns.current;
	O(Ns), e._currentValue = t
}

function za(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function Qn(e, t) {
	Ts = e, Xl = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null)
}

function We(e) {
	var t = e._currentValue;
	if (Xl !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Fn === null) {
			if (Ts === null) throw Error(T(308));
			Fn = e, Ts.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else Fn = Fn.next = e;
	return t
}
var un = null;

function Zl(e) {
	un === null ? un = [e] : un.push(e)
}

function sh(e, t, n, r) {
	var i = t.interleaved;
	return i === null ? (n.next = n, Zl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, gt(e, r)
}

function gt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;

function ql(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function oh(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function ht(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function Ft(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, z & 2) {
		var i = r.pending;
		return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, gt(e, n)
	}
	return i = r.interleaved, i === null ? (t.next = t, Zl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, gt(e, n)
}

function ns(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Vl(e, n)
	}
}

function Uc(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var i = null,
			s = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				s === null ? i = s = o : s = s.next = o, n = n.next
			} while (n !== null);
			s === null ? i = s = t : s = s.next = t
		} else i = s = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ps(e, t, n, r) {
	var i = e.updateQueue;
	Ct = !1;
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var u = l,
			c = u.next;
		u.next = null, o === null ? s = c : o.next = c, o = u;
		var d = e.alternate;
		d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = u))
	}
	if (s !== null) {
		var f = i.baseState;
		o = 0, d = c = u = null, l = s;
		do {
			var p = l.lane,
				g = l.eventTime;
			if ((r & p) === p) {
				d !== null && (d = d.next = {
					eventTime: g,
					lane: 0,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null
				});
				e: {
					var v = e,
						y = l;
					switch (p = t, g = n, y.tag) {
						case 1:
							if (v = y.payload, typeof v == "function") {
								f = v.call(g, f, p);
								break e
							}
							f = v;
							break e;
						case 3:
							v.flags = v.flags & -65537 | 128;
						case 0:
							if (v = y.payload, p = typeof v == "function" ? v.call(g, f, p) : v, p == null) break e;
							f = X({}, f, p);
							break e;
						case 2:
							Ct = !0
					}
				}
				l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [l] : p.push(l))
			} else g = {
				eventTime: g,
				lane: p,
				tag: l.tag,
				payload: l.payload,
				callback: l.callback,
				next: null
			}, d === null ? (c = d = g, u = f) : d = d.next = g, o |= p;
			if (l = l.next, l === null) {
				if (l = i.shared.pending, l === null) break;
				p = l, l = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
			}
		} while (!0);
		if (d === null && (u = f), i.baseState = u, i.firstBaseUpdate = c, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
			i = t;
			do o |= i.lane, i = i.next; while (i !== t)
		} else s === null && (i.shared.lanes = 0);
		wn |= o, e.lanes = o, e.memoizedState = f
	}
}

function Wc(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (r.callback = null, r = n, typeof i != "function") throw Error(T(191, i));
				i.call(r)
			}
		}
}
var bi = {},
	st = Yt(bi),
	ti = Yt(bi),
	ni = Yt(bi);

function cn(e) {
	if (e === bi) throw Error(T(174));
	return e
}

function Jl(e, t) {
	switch (_(ni, t), _(ti, e), _(st, bi), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : ya(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ya(t, e)
	}
	O(st), _(st, t)
}

function nr() {
	O(st), O(ti), O(ni)
}

function ah(e) {
	cn(ni.current);
	var t = cn(st.current),
		n = ya(t, e.type);
	t !== n && (_(ti, e), _(st, n))
}

function eu(e) {
	ti.current === e && (O(st), O(ti))
}
var H = Yt(0);

function Es(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var zo = [];

function tu() {
	for (var e = 0; e < zo.length; e++) zo[e]._workInProgressVersionPrimary = null;
	zo.length = 0
}
var rs = bt.ReactCurrentDispatcher,
	Vo = bt.ReactCurrentBatchConfig,
	vn = 0,
	G = null,
	ie = null,
	le = null,
	$s = !1,
	Lr = !1,
	ri = 0,
	Wg = 0;

function he() {
	throw Error(T(321))
}

function nu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Je(e[n], t[n])) return !1;
	return !0
}

function ru(e, t, n, r, i, s) {
	if (vn = s, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rs.current = e === null || e.memoizedState === null ? Xg : Yg, e = n(r, i), Lr) {
		s = 0;
		do {
			if (Lr = !1, ri = 0, 25 <= s) throw Error(T(301));
			s += 1, le = ie = null, t.updateQueue = null, rs.current = Qg, e = n(r, i)
		} while (Lr)
	}
	if (rs.current = Ds, t = ie !== null && ie.next !== null, vn = 0, le = ie = G = null, $s = !1, t) throw Error(T(300));
	return e
}

function iu() {
	var e = ri !== 0;
	return ri = 0, e
}

function tt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return le === null ? G.memoizedState = le = e : le = le.next = e, le
}

function He() {
	if (ie === null) {
		var e = G.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = ie.next;
	var t = le === null ? G.memoizedState : le.next;
	if (t !== null) le = t, ie = e;
	else {
		if (e === null) throw Error(T(310));
		ie = e, e = {
			memoizedState: ie.memoizedState,
			baseState: ie.baseState,
			baseQueue: ie.baseQueue,
			queue: ie.queue,
			next: null
		}, le === null ? G.memoizedState = le = e : le = le.next = e
	}
	return le
}

function ii(e, t) {
	return typeof t == "function" ? t(e) : t
}

function Fo(e) {
	var t = He(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = ie,
		i = r.baseQueue,
		s = n.pending;
	if (s !== null) {
		if (i !== null) {
			var o = i.next;
			i.next = s.next, s.next = o
		}
		r.baseQueue = i = s, n.pending = null
	}
	if (i !== null) {
		s = i.next, r = r.baseState;
		var l = o = null,
			u = null,
			c = s;
		do {
			var d = c.lane;
			if ((vn & d) === d) u !== null && (u = u.next = {
				lane: 0,
				action: c.action,
				hasEagerState: c.hasEagerState,
				eagerState: c.eagerState,
				next: null
			}), r = c.hasEagerState ? c.eagerState : e(r, c.action);
			else {
				var f = {
					lane: d,
					action: c.action,
					hasEagerState: c.hasEagerState,
					eagerState: c.eagerState,
					next: null
				};
				u === null ? (l = u = f, o = r) : u = u.next = f, G.lanes |= d, wn |= d
			}
			c = c.next
		} while (c !== null && c !== s);
		u === null ? o = r : u.next = l, Je(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		i = e;
		do s = i.lane, G.lanes |= s, wn |= s, i = i.next; while (i !== e)
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function _o(e) {
	var t = He(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		s = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = i = i.next;
		do s = e(s, o.action), o = o.next; while (o !== i);
		Je(s, t.memoizedState) || (Ce = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
	}
	return [s, r]
}

function lh() {}

function uh(e, t) {
	var n = G,
		r = He(),
		i = t(),
		s = !Je(r.memoizedState, i);
	if (s && (r.memoizedState = i, Ce = !0), r = r.queue, su(fh.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || le !== null && le.memoizedState.tag & 1) {
		if (n.flags |= 2048, si(9, dh.bind(null, n, r, i, t), void 0, null), ue === null) throw Error(T(349));
		vn & 30 || ch(n, t, i)
	}
	return i
}

function ch(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = G.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function dh(e, t, n, r) {
	t.value = n, t.getSnapshot = r, ph(t) && hh(e)
}

function fh(e, t, n) {
	return n(function() {
		ph(t) && hh(e)
	})
}

function ph(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Je(e, n)
	} catch {
		return !0
	}
}

function hh(e) {
	var t = gt(e, 1);
	t !== null && qe(t, e, 1, -1)
}

function Hc(e) {
	var t = tt();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: ii,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = Gg.bind(null, G, e), [t.memoizedState, e]
}

function si(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = G.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function mh() {
	return He().memoizedState
}

function is(e, t, n, r) {
	var i = tt();
	G.flags |= e, i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r)
}

function to(e, t, n, r) {
	var i = He();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (ie !== null) {
		var o = ie.memoizedState;
		if (s = o.destroy, r !== null && nu(r, o.deps)) {
			i.memoizedState = si(t, n, s, r);
			return
		}
	}
	G.flags |= e, i.memoizedState = si(1 | t, n, s, r)
}

function Kc(e, t) {
	return is(8390656, 8, e, t)
}

function su(e, t) {
	return to(2048, 8, e, t)
}

function yh(e, t) {
	return to(4, 2, e, t)
}

function gh(e, t) {
	return to(4, 4, e, t)
}

function xh(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function vh(e, t, n) {
	return n = n != null ? n.concat([e]) : null, to(4, 4, xh.bind(null, t, e), n)
}

function ou() {}

function wh(e, t) {
	var n = He();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function bh(e, t) {
	var n = He();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function kh(e, t, n) {
	return vn & 21 ? (Je(n, t) || (n = Tp(), G.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n)
}

function Hg(e, t) {
	var n = F;
	F = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = Vo.transition;
	Vo.transition = {};
	try {
		e(!1), t()
	} finally {
		F = n, Vo.transition = r
	}
}

function jh() {
	return He().memoizedState
}

function Kg(e, t, n) {
	var r = It(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Sh(e)) Ch(t, n);
	else if (n = sh(e, t, n, r), n !== null) {
		var i = be();
		qe(n, e, r, i), Nh(n, t, r)
	}
}

function Gg(e, t, n) {
	var r = It(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (Sh(e)) Ch(t, i);
	else {
		var s = e.alternate;
		if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
			var o = t.lastRenderedState,
				l = s(o, n);
			if (i.hasEagerState = !0, i.eagerState = l, Je(l, o)) {
				var u = t.interleaved;
				u === null ? (i.next = i, Zl(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
				return
			}
		} catch {} finally {}
		n = sh(e, t, i, r), n !== null && (i = be(), qe(n, e, r, i), Nh(n, t, r))
	}
}

function Sh(e) {
	var t = e.alternate;
	return e === G || t !== null && t === G
}

function Ch(e, t) {
	Lr = $s = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Nh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Vl(e, n)
	}
}
var Ds = {
		readContext: We,
		useCallback: he,
		useContext: he,
		useEffect: he,
		useImperativeHandle: he,
		useInsertionEffect: he,
		useLayoutEffect: he,
		useMemo: he,
		useReducer: he,
		useRef: he,
		useState: he,
		useDebugValue: he,
		useDeferredValue: he,
		useTransition: he,
		useMutableSource: he,
		useSyncExternalStore: he,
		useId: he,
		unstable_isNewReconciler: !1
	},
	Xg = {
		readContext: We,
		useCallback: function(e, t) {
			return tt().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: We,
		useEffect: Kc,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, is(4194308, 4, xh.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return is(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return is(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = tt();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = tt();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = Kg.bind(null, G, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = tt();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: Hc,
		useDebugValue: ou,
		useDeferredValue: function(e) {
			return tt().memoizedState = e
		},
		useTransition: function() {
			var e = Hc(!1),
				t = e[0];
			return e = Hg.bind(null, e[1]), tt().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = G,
				i = tt();
			if (B) {
				if (n === void 0) throw Error(T(407));
				n = n()
			} else {
				if (n = t(), ue === null) throw Error(T(349));
				vn & 30 || ch(r, t, n)
			}
			i.memoizedState = n;
			var s = {
				value: n,
				getSnapshot: t
			};
			return i.queue = s, Kc(fh.bind(null, r, s, e), [e]), r.flags |= 2048, si(9, dh.bind(null, r, s, n, t), void 0, null), n
		},
		useId: function() {
			var e = tt(),
				t = ue.identifierPrefix;
			if (B) {
				var n = pt,
					r = ft;
				n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ri++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = Wg++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	Yg = {
		readContext: We,
		useCallback: wh,
		useContext: We,
		useEffect: su,
		useImperativeHandle: vh,
		useInsertionEffect: yh,
		useLayoutEffect: gh,
		useMemo: bh,
		useReducer: Fo,
		useRef: mh,
		useState: function() {
			return Fo(ii)
		},
		useDebugValue: ou,
		useDeferredValue: function(e) {
			var t = He();
			return kh(t, ie.memoizedState, e)
		},
		useTransition: function() {
			var e = Fo(ii)[0],
				t = He().memoizedState;
			return [e, t]
		},
		useMutableSource: lh,
		useSyncExternalStore: uh,
		useId: jh,
		unstable_isNewReconciler: !1
	},
	Qg = {
		readContext: We,
		useCallback: wh,
		useContext: We,
		useEffect: su,
		useImperativeHandle: vh,
		useInsertionEffect: yh,
		useLayoutEffect: gh,
		useMemo: bh,
		useReducer: _o,
		useRef: mh,
		useState: function() {
			return _o(ii)
		},
		useDebugValue: ou,
		useDeferredValue: function(e) {
			var t = He();
			return ie === null ? t.memoizedState = e : kh(t, ie.memoizedState, e)
		},
		useTransition: function() {
			var e = _o(ii)[0],
				t = He().memoizedState;
			return [e, t]
		},
		useMutableSource: lh,
		useSyncExternalStore: uh,
		useId: jh,
		unstable_isNewReconciler: !1
	};

function Xe(e, t) {
	if (e && e.defaultProps) {
		t = X({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}

function Va(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var no = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? jn(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = be(),
			i = It(e),
			s = ht(r, i);
		s.payload = t, n != null && (s.callback = n), t = Ft(e, s, i), t !== null && (qe(t, e, i, r), ns(t, e, i))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = be(),
			i = It(e),
			s = ht(r, i);
		s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Ft(e, s, i), t !== null && (qe(t, e, i, r), ns(t, e, i))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = be(),
			r = It(e),
			i = ht(n, r);
		i.tag = 2, t != null && (i.callback = t), t = Ft(e, i, r), t !== null && (qe(t, e, r, n), ns(t, e, r))
	}
};

function Gc(e, t, n, r, i, s, o) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(i, s) : !0
}

function Th(e, t, n) {
	var r = !1,
		i = Ht,
		s = t.contextType;
	return typeof s == "object" && s !== null ? s = We(s) : (i = Pe(t) ? gn : xe.current, r = t.contextTypes, s = (r = r != null) ? Jn(e, i) : Ht), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = no, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function Xc(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && no.enqueueReplaceState(t, t.state, null)
}

function Fa(e, t, n, r) {
	var i = e.stateNode;
	i.props = n, i.state = e.memoizedState, i.refs = {}, ql(e);
	var s = t.contextType;
	typeof s == "object" && s !== null ? i.context = We(s) : (s = Pe(t) ? gn : xe.current, i.context = Jn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Va(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && no.enqueueReplaceState(i, i.state, null), Ps(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function rr(e, t) {
	try {
		var n = "",
			r = t;
		do n += Sy(r), r = r.return; while (r);
		var i = n
	} catch (s) {
		i = `
Error generating stack: ` + s.message + `
` + s.stack
	}
	return {
		value: e,
		source: t,
		stack: i,
		digest: null
	}
}

function Io(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function _a(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var Zg = typeof WeakMap == "function" ? WeakMap : Map;

function Ph(e, t, n) {
	n = ht(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		Ls || (Ls = !0, Ya = r), _a(e, t)
	}, n
}

function Eh(e, t, n) {
	n = ht(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		n.payload = function() {
			return r(i)
		}, n.callback = function() {
			_a(e, t)
		}
	}
	var s = e.stateNode;
	return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
		_a(e, t), typeof r != "function" && (_t === null ? _t = new Set([this]) : _t.add(this));
		var o = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: o !== null ? o : ""
		})
	}), n
}

function Yc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Zg;
		var i = new Set;
		r.set(t, i)
	} else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
	i.has(n) || (i.add(n), e = d1.bind(null, e, t, n), t.then(e, e))
}

function Qc(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function Zc(e, t, n, r, i) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ht(-1, 1), t.tag = 2, Ft(n, t, 1))), n.lanes |= 1), e)
}
var qg = bt.ReactCurrentOwner,
	Ce = !1;

function ve(e, t, n, r) {
	t.child = e === null ? ih(t, null, n, r) : tr(t, e.child, n, r)
}

function qc(e, t, n, r, i) {
	n = n.render;
	var s = t.ref;
	return Qn(t, i), r = ru(e, t, n, r, s, i), n = iu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, xt(e, t, i)) : (B && n && Hl(t), t.flags |= 1, ve(e, t, r, i), t.child)
}

function Jc(e, t, n, r, i) {
	if (e === null) {
		var s = n.type;
		return typeof s == "function" && !hu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, $h(e, t, s, r, i)) : (e = ls(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (s = e.child, !(e.lanes & i)) {
		var o = s.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Zr, n(o, r) && e.ref === t.ref) return xt(e, t, i)
	}
	return t.flags |= 1, e = Ot(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function $h(e, t, n, r, i) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (Zr(s, r) && e.ref === t.ref)
			if (Ce = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ce = !0);
			else return t.lanes = e.lanes, xt(e, t, i)
	}
	return Ia(e, t, n, r, i)
}

function Dh(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		s = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, _(In, De), De |= n;
		else {
			if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, _(In, De), De |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = s !== null ? s.baseLanes : n, _(In, De), De |= r
		}
	else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, _(In, De), De |= r;
	return ve(e, t, i, n), t.child
}

function Mh(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ia(e, t, n, r, i) {
	var s = Pe(n) ? gn : xe.current;
	return s = Jn(t, s), Qn(t, i), n = ru(e, t, n, r, s, i), r = iu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, xt(e, t, i)) : (B && r && Hl(t), t.flags |= 1, ve(e, t, n, i), t.child)
}

function ed(e, t, n, r, i) {
	if (Pe(n)) {
		var s = !0;
		js(t)
	} else s = !1;
	if (Qn(t, i), t.stateNode === null) ss(e, t), Th(t, n, r), Fa(t, n, r, i), r = !0;
	else if (e === null) {
		var o = t.stateNode,
			l = t.memoizedProps;
		o.props = l;
		var u = o.context,
			c = n.contextType;
		typeof c == "object" && c !== null ? c = We(c) : (c = Pe(n) ? gn : xe.current, c = Jn(t, c));
		var d = n.getDerivedStateFromProps,
			f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
		f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && Xc(t, o, r, c), Ct = !1;
		var p = t.memoizedState;
		o.state = p, Ps(t, r, o, i), u = t.memoizedState, l !== r || p !== u || Te.current || Ct ? (typeof d == "function" && (Va(t, n, d, r), u = t.memoizedState), (l = Ct || Gc(t, n, l, r, p, u, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = c, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		o = t.stateNode, oh(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Xe(t.type, l), o.props = c, f = t.pendingProps, p = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = We(u) : (u = Pe(n) ? gn : xe.current, u = Jn(t, u));
		var g = n.getDerivedStateFromProps;
		(d = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || p !== u) && Xc(t, o, r, u), Ct = !1, p = t.memoizedState, o.state = p, Ps(t, r, o, i);
		var v = t.memoizedState;
		l !== f || p !== v || Te.current || Ct ? (typeof g == "function" && (Va(t, n, g, r), v = t.memoizedState), (c = Ct || Gc(t, n, c, r, p, v, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = u, r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return Oa(e, t, n, r, s, i)
}

function Oa(e, t, n, r, i, s) {
	Mh(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && _c(t, n, !1), xt(e, t, s);
	r = t.stateNode, qg.current = t;
	var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && o ? (t.child = tr(t, e.child, null, s), t.child = tr(t, null, l, s)) : ve(e, t, l, s), t.memoizedState = r.state, i && _c(t, n, !0), t.child
}

function Lh(e) {
	var t = e.stateNode;
	t.pendingContext ? Fc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fc(e, t.context, !1), Jl(e, t.containerInfo)
}

function td(e, t, n, r, i) {
	return er(), Gl(i), t.flags |= 256, ve(e, t, n, r), t.child
}
var Ba = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function Ua(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function Rh(e, t, n) {
	var r = t.pendingProps,
		i = H.current,
		s = !1,
		o = (t.flags & 128) !== 0,
		l;
	if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), _(H, i & 1), e === null) return Aa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
		mode: "hidden",
		children: o
	}, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = so(o, r, 0, null), e = hn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ua(n), t.memoizedState = Ba, e) : au(t, o));
	if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Jg(e, t, o, r, l, i, n);
	if (s) {
		s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
		var u = {
			mode: "hidden",
			children: r.children
		};
		return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ot(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = Ot(l, s) : (s = hn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Ua(n) : {
			baseLanes: o.baseLanes | n,
			cachePool: null,
			transitions: o.transitions
		}, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Ba, r
	}
	return s = e.child, e = s.sibling, r = Ot(s, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function au(e, t) {
	return t = so({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Ui(e, t, n, r) {
	return r !== null && Gl(r), tr(t, e.child, null, n), e = au(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Jg(e, t, n, r, i, s, o) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = Io(Error(T(422))), Ui(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = so({
		mode: "visible",
		children: r.children
	}, i, 0, null), s = hn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && tr(t, e.child, null, o), t.child.memoizedState = Ua(o), t.memoizedState = Ba, s);
	if (!(t.mode & 1)) return Ui(e, t, o, null);
	if (i.data === "$!") {
		if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
		return r = l, s = Error(T(419)), r = Io(s, r, void 0), Ui(e, t, o, r)
	}
	if (l = (o & e.childLanes) !== 0, Ce || l) {
		if (r = ue, r !== null) {
			switch (o & -o) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0
			}
			i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, gt(e, i), qe(r, e, i, -1))
		}
		return pu(), r = Io(Error(T(421))), Ui(e, t, o, r)
	}
	return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = f1.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Me = Vt(i.nextSibling), Le = t, B = !0, Qe = null, e !== null && (_e[Ie++] = ft, _e[Ie++] = pt, _e[Ie++] = xn, ft = e.id, pt = e.overflow, xn = t), t = au(t, r.children), t.flags |= 4096, t)
}

function nd(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), za(e.return, t, n)
}

function Oo(e, t, n, r, i) {
	var s = e.memoizedState;
	s === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: i
	} : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Ah(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if (ve(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && nd(e, n, t);
			else if (e.tag === 19) nd(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (_(H, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (i) {
		case "forwards":
			for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Es(e) === null && (i = n), n = n.sibling;
			n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Oo(t, !1, i, n, s);
			break;
		case "backwards":
			for (n = null, i = t.child, t.child = null; i !== null;) {
				if (e = i.alternate, e !== null && Es(e) === null) {
					t.child = i;
					break
				}
				e = i.sibling, i.sibling = n, n = i, i = e
			}
			Oo(t, !0, n, null, s);
			break;
		case "together":
			Oo(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function ss(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function xt(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(T(153));
	if (t.child !== null) {
		for (e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ot(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function e1(e, t, n) {
	switch (t.tag) {
		case 3:
			Lh(t), er();
			break;
		case 5:
			ah(t);
			break;
		case 1:
			Pe(t.type) && js(t);
			break;
		case 4:
			Jl(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			_(Ns, r._currentValue), r._currentValue = i;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (_(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Rh(e, t, n) : (_(H, H.current & 1), e = xt(e, t, n), e !== null ? e.sibling : null);
			_(H, H.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return Ah(e, t, n);
				t.flags |= 128
			}
			if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), _(H, H.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, Dh(e, t, n)
	}
	return xt(e, t, n)
}
var zh, Wa, Vh, Fh;
zh = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
Wa = function() {};
Vh = function(e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		e = t.stateNode, cn(st.current);
		var s = null;
		switch (n) {
			case "input":
				i = fa(e, i), r = fa(e, r), s = [];
				break;
			case "select":
				i = X({}, i, {
					value: void 0
				}), r = X({}, r, {
					value: void 0
				}), s = [];
				break;
			case "textarea":
				i = ma(e, i), r = ma(e, r), s = [];
				break;
			default:
				typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bs)
		}
		ga(n, r);
		var o;
		n = null;
		for (c in i)
			if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
				if (c === "style") {
					var l = i[c];
					for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
				} else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Wr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
		for (c in r) {
			var u = r[c];
			if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (u != null || l != null))
				if (c === "style")
					if (l) {
						for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
						for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o])
					} else n || (s || (s = []), s.push(c, n)), n = u;
			else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Wr.hasOwnProperty(c) ? (u != null && c === "onScroll" && I("scroll", e), s || l === u || (s = [])) : (s = s || []).push(c, u))
		}
		n && (s = s || []).push("style", n);
		var c = s;
		(t.updateQueue = c) && (t.flags |= 4)
	}
};
Fh = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function wr(e, t) {
	if (!B) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function me(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
	else
		for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function t1(e, t, n) {
	var r = t.pendingProps;
	switch (Kl(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return me(t), null;
		case 1:
			return Pe(t.type) && ks(), me(t), null;
		case 3:
			return r = t.stateNode, nr(), O(Te), O(xe), tu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (qa(Qe), Qe = null))), Wa(e, t), me(t), null;
		case 5:
			eu(t);
			var i = cn(ni.current);
			if (n = t.type, e !== null && t.stateNode != null) Vh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166));
					return me(t), null
				}
				if (e = cn(st.current), Oi(t)) {
					r = t.stateNode, n = t.type;
					var s = t.memoizedProps;
					switch (r[nt] = t, r[ei] = s, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							I("cancel", r), I("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							I("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < Nr.length; i++) I(Nr[i], r);
							break;
						case "source":
							I("error", r);
							break;
						case "img":
						case "image":
						case "link":
							I("error", r), I("load", r);
							break;
						case "details":
							I("toggle", r);
							break;
						case "input":
							dc(r, s), I("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!s.multiple
							}, I("invalid", r);
							break;
						case "textarea":
							pc(r, s), I("invalid", r)
					}
					ga(n, s), i = null;
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var l = s[o];
							o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Ii(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Ii(r.textContent, l, e), i = ["children", "" + l]) : Wr.hasOwnProperty(o) && l != null && o === "onScroll" && I("scroll", r)
						} switch (n) {
						case "input":
							Mi(r), fc(r, s, !0);
							break;
						case "textarea":
							Mi(r), hc(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof s.onClick == "function" && (r.onclick = bs)
					}
					r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
						is: r.is
					}) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[nt] = t, e[ei] = r, zh(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (o = xa(n, r), n) {
							case "dialog":
								I("cancel", e), I("close", e), i = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								I("load", e), i = r;
								break;
							case "video":
							case "audio":
								for (i = 0; i < Nr.length; i++) I(Nr[i], e);
								i = r;
								break;
							case "source":
								I("error", e), i = r;
								break;
							case "img":
							case "image":
							case "link":
								I("error", e), I("load", e), i = r;
								break;
							case "details":
								I("toggle", e), i = r;
								break;
							case "input":
								dc(e, r), i = fa(e, r), I("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, i = X({}, r, {
									value: void 0
								}), I("invalid", e);
								break;
							case "textarea":
								pc(e, r), i = ma(e, r), I("invalid", e);
								break;
							default:
								i = r
						}
						ga(n, i),
						l = i;
						for (s in l)
							if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? mp(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && pp(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Hr(e, u) : typeof u == "number" && Hr(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Wr.hasOwnProperty(s) ? u != null && s === "onScroll" && I("scroll", e) : u != null && Dl(e, s, u, o))
							} switch (n) {
							case "input":
								Mi(e), fc(e, r, !1);
								break;
							case "textarea":
								Mi(e), hc(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Wt(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, s = r.value, s != null ? Kn(e, !!r.multiple, s, !1) : r.defaultValue != null && Kn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = bs)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return me(t), null;
		case 6:
			if (e && t.stateNode != null) Fh(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
				if (n = cn(ni.current), cn(st.current), Oi(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[nt] = t, (s = r.nodeValue !== n) && (e = Le, e !== null)) switch (e.tag) {
						case 3:
							Ii(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					s && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nt] = t, t.stateNode = r
			}
			return me(t), null;
		case 13:
			if (O(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (B && Me !== null && t.mode & 1 && !(t.flags & 128)) nh(), er(), t.flags |= 98560, s = !1;
				else if (s = Oi(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!s) throw Error(T(318));
						if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(T(317));
						s[nt] = t
					} else er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					me(t), s = !1
				} else Qe !== null && (qa(Qe), Qe = null), s = !0;
				if (!s) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? se === 0 && (se = 3) : pu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
		case 4:
			return nr(), Wa(e, t), e === null && qr(t.stateNode.containerInfo), me(t), null;
		case 10:
			return Ql(t.type._context), me(t), null;
		case 17:
			return Pe(t.type) && ks(), me(t), null;
		case 19:
			if (O(H), s = t.memoizedState, s === null) return me(t), null;
			if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
				if (r) wr(s, !1);
				else {
					if (se !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (o = Es(e), o !== null) {
								for (t.flags |= 128, wr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return _(H, H.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					s.tail !== null && J() > ir && (t.flags |= 128, r = !0, wr(s, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = Es(o), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !B) return me(t), null
					} else 2 * J() - s.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128, r = !0, wr(s, !1), t.lanes = 4194304);
				s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
			}
			return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = J(), t.sibling = null, n = H.current, _(H, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
		case 22:
		case 23:
			return fu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(T(156, t.tag))
}

function n1(e, t) {
	switch (Kl(t), t.tag) {
		case 1:
			return Pe(t.type) && ks(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return nr(), O(Te), O(xe), tu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return eu(t), null;
		case 13:
			if (O(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(T(340));
				er()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return O(H), null;
		case 4:
			return nr(), null;
		case 10:
			return Ql(t.type._context), null;
		case 22:
		case 23:
			return fu(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Wi = !1,
	ye = !1,
	r1 = typeof WeakSet == "function" ? WeakSet : Set,
	D = null;

function _n(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			Q(e, t, r)
		} else n.current = null
}

function Ha(e, t, n) {
	try {
		n()
	} catch (r) {
		Q(e, t, r)
	}
}
var rd = !1;

function i1(e, t) {
	if (Pa = xs, e = Up(), Wl(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var i = r.anchorOffset,
					s = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, s.nodeType
				} catch {
					n = null;
					break e
				}
				var o = 0,
					l = -1,
					u = -1,
					c = 0,
					d = 0,
					f = e,
					p = null;
				t: for (;;) {
					for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (u = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (g = f.firstChild) !== null;) p = f, f = g;
					for (;;) {
						if (f === e) break t;
						if (p === n && ++c === i && (l = o), p === s && ++d === r && (u = o), (g = f.nextSibling) !== null) break;
						f = p, p = f.parentNode
					}
					f = g
				}
				n = l === -1 || u === -1 ? null : {
					start: l,
					end: u
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (Ea = {
			focusedElem: e,
			selectionRange: n
		}, xs = !1, D = t; D !== null;)
		if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
		else
			for (; D !== null;) {
				t = D;
				try {
					var v = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (v !== null) {
								var y = v.memoizedProps,
									w = v.memoizedState,
									h = t.stateNode,
									m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), w);
								h.__reactInternalSnapshotBeforeUpdate = m
							}
							break;
						case 3:
							var x = t.stateNode.containerInfo;
							x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(T(163))
					}
				} catch (j) {
					Q(t, t.return, j)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, D = e;
					break
				}
				D = t.return
			}
	return v = rd, rd = !1, v
}

function Rr(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var i = r = r.next;
		do {
			if ((i.tag & e) === e) {
				var s = i.destroy;
				i.destroy = void 0, s !== void 0 && Ha(t, n, s)
			}
			i = i.next
		} while (i !== r)
	}
}

function ro(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function Ka(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function _h(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, _h(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[ei], delete t[Ma], delete t[Ig], delete t[Og])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ih(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function id(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || Ih(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function Ga(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bs));
	else if (r !== 4 && (e = e.child, e !== null))
		for (Ga(e, t, n), e = e.sibling; e !== null;) Ga(e, t, n), e = e.sibling
}

function Xa(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (Xa(e, t, n), e = e.sibling; e !== null;) Xa(e, t, n), e = e.sibling
}
var ce = null,
	Ye = !1;

function kt(e, t, n) {
	for (n = n.child; n !== null;) Oh(e, t, n), n = n.sibling
}

function Oh(e, t, n) {
	if (it && typeof it.onCommitFiberUnmount == "function") try {
		it.onCommitFiberUnmount(Ys, n)
	} catch {}
	switch (n.tag) {
		case 5:
			ye || _n(n, t);
		case 6:
			var r = ce,
				i = Ye;
			ce = null, kt(e, t, n), ce = r, Ye = i, ce !== null && (Ye ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
			break;
		case 18:
			ce !== null && (Ye ? (e = ce, n = n.stateNode, e.nodeType === 8 ? Ro(e.parentNode, n) : e.nodeType === 1 && Ro(e, n), Yr(e)) : Ro(ce, n.stateNode));
			break;
		case 4:
			r = ce, i = Ye, ce = n.stateNode.containerInfo, Ye = !0, kt(e, t, n), ce = r, Ye = i;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ha(n, t, o), i = i.next
				} while (i !== r)
			}
			kt(e, t, n);
			break;
		case 1:
			if (!ye && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (l) {
				Q(n, t, l)
			}
			kt(e, t, n);
			break;
		case 21:
			kt(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, kt(e, t, n), ye = r) : kt(e, t, n);
			break;
		default:
			kt(e, t, n)
	}
}

function sd(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new r1), t.forEach(function(r) {
			var i = p1.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(i, i))
		})
	}
}

function Ke(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var s = e,
					o = t,
					l = o;
				e: for (; l !== null;) {
					switch (l.tag) {
						case 5:
							ce = l.stateNode, Ye = !1;
							break e;
						case 3:
							ce = l.stateNode.containerInfo, Ye = !0;
							break e;
						case 4:
							ce = l.stateNode.containerInfo, Ye = !0;
							break e
					}
					l = l.return
				}
				if (ce === null) throw Error(T(160));
				Oh(s, o, i), ce = null, Ye = !1;
				var u = i.alternate;
				u !== null && (u.return = null), i.return = null
			} catch (c) {
				Q(i, t, c)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) Bh(t, e), t = t.sibling
}

function Bh(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (Ke(t, e), et(e), r & 4) {
				try {
					Rr(3, e, e.return), ro(3, e)
				} catch (y) {
					Q(e, e.return, y)
				}
				try {
					Rr(5, e, e.return)
				} catch (y) {
					Q(e, e.return, y)
				}
			}
			break;
		case 1:
			Ke(t, e), et(e), r & 512 && n !== null && _n(n, n.return);
			break;
		case 5:
			if (Ke(t, e), et(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
				var i = e.stateNode;
				try {
					Hr(i, "")
				} catch (y) {
					Q(e, e.return, y)
				}
			}
			if (r & 4 && (i = e.stateNode, i != null)) {
				var s = e.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					l = e.type,
					u = e.updateQueue;
				if (e.updateQueue = null, u !== null) try {
					l === "input" && s.type === "radio" && s.name != null && cp(i, s), xa(l, o);
					var c = xa(l, s);
					for (o = 0; o < u.length; o += 2) {
						var d = u[o],
							f = u[o + 1];
						d === "style" ? mp(i, f) : d === "dangerouslySetInnerHTML" ? pp(i, f) : d === "children" ? Hr(i, f) : Dl(i, d, f, c)
					}
					switch (l) {
						case "input":
							pa(i, s);
							break;
						case "textarea":
							dp(i, s);
							break;
						case "select":
							var p = i._wrapperState.wasMultiple;
							i._wrapperState.wasMultiple = !!s.multiple;
							var g = s.value;
							g != null ? Kn(i, !!s.multiple, g, !1) : p !== !!s.multiple && (s.defaultValue != null ? Kn(i, !!s.multiple, s.defaultValue, !0) : Kn(i, !!s.multiple, s.multiple ? [] : "", !1))
					}
					i[ei] = s
				} catch (y) {
					Q(e, e.return, y)
				}
			}
			break;
		case 6:
			if (Ke(t, e), et(e), r & 4) {
				if (e.stateNode === null) throw Error(T(162));
				i = e.stateNode, s = e.memoizedProps;
				try {
					i.nodeValue = s
				} catch (y) {
					Q(e, e.return, y)
				}
			}
			break;
		case 3:
			if (Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				Yr(t.containerInfo)
			} catch (y) {
				Q(e, e.return, y)
			}
			break;
		case 4:
			Ke(t, e), et(e);
			break;
		case 13:
			Ke(t, e), et(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (cu = J())), r & 4 && sd(e);
			break;
		case 22:
			if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (c = ye) || d, Ke(t, e), ye = c) : Ke(t, e), et(e), r & 8192) {
				if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
					for (D = e, d = e.child; d !== null;) {
						for (f = D = d; D !== null;) {
							switch (p = D, g = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Rr(4, p, p.return);
									break;
								case 1:
									_n(p, p.return);
									var v = p.stateNode;
									if (typeof v.componentWillUnmount == "function") {
										r = p, n = p.return;
										try {
											t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
										} catch (y) {
											Q(r, n, y)
										}
									}
									break;
								case 5:
									_n(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										ad(f);
										continue
									}
							}
							g !== null ? (g.return = p, D = g) : ad(f)
						}
						d = d.sibling
					}
				e: for (d = null, f = e;;) {
					if (f.tag === 5) {
						if (d === null) {
							d = f;
							try {
								i = f.stateNode, c ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, u = f.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = hp("display", o))
							} catch (y) {
								Q(e, e.return, y)
							}
						}
					} else if (f.tag === 6) {
						if (d === null) try {
							f.stateNode.nodeValue = c ? "" : f.memoizedProps
						} catch (y) {
							Q(e, e.return, y)
						}
					} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
						f.child.return = f, f = f.child;
						continue
					}
					if (f === e) break e;
					for (; f.sibling === null;) {
						if (f.return === null || f.return === e) break e;
						d === f && (d = null), f = f.return
					}
					d === f && (d = null), f.sibling.return = f.return, f = f.sibling
				}
			}
			break;
		case 19:
			Ke(t, e), et(e), r & 4 && sd(e);
			break;
		case 21:
			break;
		default:
			Ke(t, e), et(e)
	}
}

function et(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (Ih(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(T(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Hr(i, ""), r.flags &= -33);
					var s = id(e);
					Xa(e, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = id(e);
					Ga(e, l, o);
					break;
				default:
					throw Error(T(161))
			}
		}
		catch (u) {
			Q(e, e.return, u)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function s1(e, t, n) {
	D = e, Uh(e)
}

function Uh(e, t, n) {
	for (var r = (e.mode & 1) !== 0; D !== null;) {
		var i = D,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Wi;
			if (!o) {
				var l = i.alternate,
					u = l !== null && l.memoizedState !== null || ye;
				l = Wi;
				var c = ye;
				if (Wi = o, (ye = u) && !c)
					for (D = i; D !== null;) o = D, u = o.child, o.tag === 22 && o.memoizedState !== null ? ld(i) : u !== null ? (u.return = o, D = u) : ld(i);
				for (; s !== null;) D = s, Uh(s), s = s.sibling;
				D = i, Wi = l, ye = c
			}
			od(e)
		} else i.subtreeFlags & 8772 && s !== null ? (s.return = i, D = s) : od(e)
	}
}

function od(e) {
	for (; D !== null;) {
		var t = D;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						ye || ro(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !ye)
							if (n === null) r.componentDidMount();
							else {
								var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
								r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var s = t.updateQueue;
						s !== null && Wc(t, s, r);
						break;
					case 3:
						var o = t.updateQueue;
						if (o !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							Wc(t, o, n)
						}
						break;
					case 5:
						var l = t.stateNode;
						if (n === null && t.flags & 4) {
							n = l;
							var u = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									u.autoFocus && n.focus();
									break;
								case "img":
									u.src && (n.src = u.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var c = t.alternate;
							if (c !== null) {
								var d = c.memoizedState;
								if (d !== null) {
									var f = d.dehydrated;
									f !== null && Yr(f)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(T(163))
				}
				ye || t.flags & 512 && Ka(t)
			} catch (p) {
				Q(t, t.return, p)
			}
		}
		if (t === e) {
			D = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, D = n;
			break
		}
		D = t.return
	}
}

function ad(e) {
	for (; D !== null;) {
		var t = D;
		if (t === e) {
			D = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, D = n;
			break
		}
		D = t.return
	}
}

function ld(e) {
	for (; D !== null;) {
		var t = D;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						ro(4, t)
					} catch (u) {
						Q(t, n, u)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount()
						} catch (u) {
							Q(t, i, u)
						}
					}
					var s = t.return;
					try {
						Ka(t)
					} catch (u) {
						Q(t, s, u)
					}
					break;
				case 5:
					var o = t.return;
					try {
						Ka(t)
					} catch (u) {
						Q(t, o, u)
					}
			}
		} catch (u) {
			Q(t, t.return, u)
		}
		if (t === e) {
			D = null;
			break
		}
		var l = t.sibling;
		if (l !== null) {
			l.return = t.return, D = l;
			break
		}
		D = t.return
	}
}
var o1 = Math.ceil,
	Ms = bt.ReactCurrentDispatcher,
	lu = bt.ReactCurrentOwner,
	Be = bt.ReactCurrentBatchConfig,
	z = 0,
	ue = null,
	te = null,
	fe = 0,
	De = 0,
	In = Yt(0),
	se = 0,
	oi = null,
	wn = 0,
	io = 0,
	uu = 0,
	Ar = null,
	Se = null,
	cu = 0,
	ir = 1 / 0,
	ut = null,
	Ls = !1,
	Ya = null,
	_t = null,
	Hi = !1,
	Dt = null,
	Rs = 0,
	zr = 0,
	Qa = null,
	os = -1,
	as = 0;

function be() {
	return z & 6 ? J() : os !== -1 ? os : os = J()
}

function It(e) {
	return e.mode & 1 ? z & 2 && fe !== 0 ? fe & -fe : Ug.transition !== null ? (as === 0 && (as = Tp()), as) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Rp(e.type)), e) : 1
}

function qe(e, t, n, r) {
	if (50 < zr) throw zr = 0, Qa = null, Error(T(185));
	xi(e, n, r), (!(z & 2) || e !== ue) && (e === ue && (!(z & 2) && (io |= n), se === 4 && Pt(e, fe)), Ee(e, r), n === 1 && z === 0 && !(t.mode & 1) && (ir = J() + 500, eo && Qt()))
}

function Ee(e, t) {
	var n = e.callbackNode;
	Uy(e, t);
	var r = gs(e, e === ue ? fe : 0);
	if (r === 0) n !== null && gc(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && gc(n), t === 1) e.tag === 0 ? Bg(ud.bind(null, e)) : Jp(ud.bind(null, e)), Fg(function() {
			!(z & 6) && Qt()
		}), n = null;
		else {
			switch (Pp(r)) {
				case 1:
					n = zl;
					break;
				case 4:
					n = Cp;
					break;
				case 16:
					n = ys;
					break;
				case 536870912:
					n = Np;
					break;
				default:
					n = ys
			}
			n = Zh(n, Wh.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function Wh(e, t) {
	if (os = -1, as = 0, z & 6) throw Error(T(327));
	var n = e.callbackNode;
	if (Zn() && e.callbackNode !== n) return null;
	var r = gs(e, e === ue ? fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = As(e, r);
	else {
		t = r;
		var i = z;
		z |= 2;
		var s = Kh();
		(ue !== e || fe !== t) && (ut = null, ir = J() + 500, pn(e, t));
		do try {
			u1();
			break
		} catch (l) {
			Hh(e, l)
		}
		while (!0);
		Yl(), Ms.current = s, z = i, te !== null ? t = 0 : (ue = null, fe = 0, t = se)
	}
	if (t !== 0) {
		if (t === 2 && (i = ja(e), i !== 0 && (r = i, t = Za(e, i))), t === 1) throw n = oi, pn(e, 0), Pt(e, r), Ee(e, J()), n;
		if (t === 6) Pt(e, r);
		else {
			if (i = e.current.alternate, !(r & 30) && !a1(i) && (t = As(e, r), t === 2 && (s = ja(e), s !== 0 && (r = s, t = Za(e, s))), t === 1)) throw n = oi, pn(e, 0), Pt(e, r), Ee(e, J()), n;
			switch (e.finishedWork = i, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(T(345));
				case 2:
					sn(e, Se, ut);
					break;
				case 3:
					if (Pt(e, r), (r & 130023424) === r && (t = cu + 500 - J(), 10 < t)) {
						if (gs(e, 0) !== 0) break;
						if (i = e.suspendedLanes, (i & r) !== r) {
							be(), e.pingedLanes |= e.suspendedLanes & i;
							break
						}
						e.timeoutHandle = Da(sn.bind(null, e, Se, ut), t);
						break
					}
					sn(e, Se, ut);
					break;
				case 4:
					if (Pt(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, i = -1; 0 < r;) {
						var o = 31 - Ze(r);
						s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
					}
					if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * o1(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = Da(sn.bind(null, e, Se, ut), r);
						break
					}
					sn(e, Se, ut);
					break;
				case 5:
					sn(e, Se, ut);
					break;
				default:
					throw Error(T(329))
			}
		}
	}
	return Ee(e, J()), e.callbackNode === n ? Wh.bind(null, e) : null
}

function Za(e, t) {
	var n = Ar;
	return e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256), e = As(e, t), e !== 2 && (t = Se, Se = n, t !== null && qa(t)), e
}

function qa(e) {
	Se === null ? Se = e : Se.push.apply(Se, e)
}

function a1(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!Je(s(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function Pt(e, t) {
	for (t &= ~uu, t &= ~io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - Ze(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function ud(e) {
	if (z & 6) throw Error(T(327));
	Zn();
	var t = gs(e, 0);
	if (!(t & 1)) return Ee(e, J()), null;
	var n = As(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ja(e);
		r !== 0 && (t = r, n = Za(e, r))
	}
	if (n === 1) throw n = oi, pn(e, 0), Pt(e, t), Ee(e, J()), n;
	if (n === 6) throw Error(T(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Se, ut), Ee(e, J()), null
}

function du(e, t) {
	var n = z;
	z |= 1;
	try {
		return e(t)
	} finally {
		z = n, z === 0 && (ir = J() + 500, eo && Qt())
	}
}

function bn(e) {
	Dt !== null && Dt.tag === 0 && !(z & 6) && Zn();
	var t = z;
	z |= 1;
	var n = Be.transition,
		r = F;
	try {
		if (Be.transition = null, F = 1, e) return e()
	} finally {
		F = r, Be.transition = n, z = t, !(z & 6) && Qt()
	}
}

function fu() {
	De = In.current, O(In)
}

function pn(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, Vg(n)), te !== null)
		for (n = te.return; n !== null;) {
			var r = n;
			switch (Kl(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && ks();
					break;
				case 3:
					nr(), O(Te), O(xe), tu();
					break;
				case 5:
					eu(r);
					break;
				case 4:
					nr();
					break;
				case 13:
					O(H);
					break;
				case 19:
					O(H);
					break;
				case 10:
					Ql(r.type._context);
					break;
				case 22:
				case 23:
					fu()
			}
			n = n.return
		}
	if (ue = e, te = e = Ot(e.current, null), fe = De = t, se = 0, oi = null, uu = io = wn = 0, Se = Ar = null, un !== null) {
		for (t = 0; t < un.length; t++)
			if (n = un[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					s.next = i, r.next = o
				}
				n.pending = r
			} un = null
	}
	return e
}

function Hh(e, t) {
	do {
		var n = te;
		try {
			if (Yl(), rs.current = Ds, $s) {
				for (var r = G.memoizedState; r !== null;) {
					var i = r.queue;
					i !== null && (i.pending = null), r = r.next
				}
				$s = !1
			}
			if (vn = 0, le = ie = G = null, Lr = !1, ri = 0, lu.current = null, n === null || n.return === null) {
				se = 1, oi = t, te = null;
				break
			}
			e: {
				var s = e,
					o = n.return,
					l = n,
					u = t;
				if (t = fe, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
					var c = u,
						d = l,
						f = d.tag;
					if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var p = d.alternate;
						p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
					}
					var g = Qc(o);
					if (g !== null) {
						g.flags &= -257, Zc(g, o, l, s, t), g.mode & 1 && Yc(s, c, t), t = g, u = c;
						var v = t.updateQueue;
						if (v === null) {
							var y = new Set;
							y.add(u), t.updateQueue = y
						} else v.add(u);
						break e
					} else {
						if (!(t & 1)) {
							Yc(s, c, t), pu();
							break e
						}
						u = Error(T(426))
					}
				} else if (B && l.mode & 1) {
					var w = Qc(o);
					if (w !== null) {
						!(w.flags & 65536) && (w.flags |= 256), Zc(w, o, l, s, t), Gl(rr(u, l));
						break e
					}
				}
				s = u = rr(u, l),
				se !== 4 && (se = 2),
				Ar === null ? Ar = [s] : Ar.push(s),
				s = o;do {
					switch (s.tag) {
						case 3:
							s.flags |= 65536, t &= -t, s.lanes |= t;
							var h = Ph(s, u, t);
							Uc(s, h);
							break e;
						case 1:
							l = u;
							var m = s.type,
								x = s.stateNode;
							if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (_t === null || !_t.has(x)))) {
								s.flags |= 65536, t &= -t, s.lanes |= t;
								var j = Eh(s, l, t);
								Uc(s, j);
								break e
							}
					}
					s = s.return
				} while (s !== null)
			}
			Xh(n)
		} catch (N) {
			t = N, te === n && n !== null && (te = n = n.return);
			continue
		}
		break
	} while (!0)
}

function Kh() {
	var e = Ms.current;
	return Ms.current = Ds, e === null ? Ds : e
}

function pu() {
	(se === 0 || se === 3 || se === 2) && (se = 4), ue === null || !(wn & 268435455) && !(io & 268435455) || Pt(ue, fe)
}

function As(e, t) {
	var n = z;
	z |= 2;
	var r = Kh();
	(ue !== e || fe !== t) && (ut = null, pn(e, t));
	do try {
		l1();
		break
	} catch (i) {
		Hh(e, i)
	}
	while (!0);
	if (Yl(), z = n, Ms.current = r, te !== null) throw Error(T(261));
	return ue = null, fe = 0, se
}

function l1() {
	for (; te !== null;) Gh(te)
}

function u1() {
	for (; te !== null && !Ry();) Gh(te)
}

function Gh(e) {
	var t = Qh(e.alternate, e, De);
	e.memoizedProps = e.pendingProps, t === null ? Xh(e) : te = t, lu.current = null
}

function Xh(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = n1(n, t), n !== null) {
				n.flags &= 32767, te = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				se = 6, te = null;
				return
			}
		} else if (n = t1(n, t, De), n !== null) {
			te = n;
			return
		}
		if (t = t.sibling, t !== null) {
			te = t;
			return
		}
		te = t = e
	} while (t !== null);
	se === 0 && (se = 5)
}

function sn(e, t, n) {
	var r = F,
		i = Be.transition;
	try {
		Be.transition = null, F = 1, c1(e, t, n, r)
	} finally {
		Be.transition = i, F = r
	}
	return null
}

function c1(e, t, n, r) {
	do Zn(); while (Dt !== null);
	if (z & 6) throw Error(T(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var s = n.lanes | n.childLanes;
	if (Wy(e, s), e === ue && (te = ue = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hi || (Hi = !0, Zh(ys, function() {
			return Zn(), null
		})), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
		s = Be.transition, Be.transition = null;
		var o = F;
		F = 1;
		var l = z;
		z |= 4, lu.current = null, i1(e, n), Bh(n, e), $g(Ea), xs = !!Pa, Ea = Pa = null, e.current = n, s1(n), Ay(), z = l, F = o, Be.transition = s
	} else e.current = n;
	if (Hi && (Hi = !1, Dt = e, Rs = i), s = e.pendingLanes, s === 0 && (_t = null), Fy(n.stateNode), Ee(e, J()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
			componentStack: i.stack,
			digest: i.digest
		});
	if (Ls) throw Ls = !1, e = Ya, Ya = null, e;
	return Rs & 1 && e.tag !== 0 && Zn(), s = e.pendingLanes, s & 1 ? e === Qa ? zr++ : (zr = 0, Qa = e) : zr = 0, Qt(), null
}

function Zn() {
	if (Dt !== null) {
		var e = Pp(Rs),
			t = Be.transition,
			n = F;
		try {
			if (Be.transition = null, F = 16 > e ? 16 : e, Dt === null) var r = !1;
			else {
				if (e = Dt, Dt = null, Rs = 0, z & 6) throw Error(T(331));
				var i = z;
				for (z |= 4, D = e.current; D !== null;) {
					var s = D,
						o = s.child;
					if (D.flags & 16) {
						var l = s.deletions;
						if (l !== null) {
							for (var u = 0; u < l.length; u++) {
								var c = l[u];
								for (D = c; D !== null;) {
									var d = D;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Rr(8, d, s)
									}
									var f = d.child;
									if (f !== null) f.return = d, D = f;
									else
										for (; D !== null;) {
											d = D;
											var p = d.sibling,
												g = d.return;
											if (_h(d), d === c) {
												D = null;
												break
											}
											if (p !== null) {
												p.return = g, D = p;
												break
											}
											D = g
										}
								}
							}
							var v = s.alternate;
							if (v !== null) {
								var y = v.child;
								if (y !== null) {
									v.child = null;
									do {
										var w = y.sibling;
										y.sibling = null, y = w
									} while (y !== null)
								}
							}
							D = s
						}
					}
					if (s.subtreeFlags & 2064 && o !== null) o.return = s, D = o;
					else e: for (; D !== null;) {
						if (s = D, s.flags & 2048) switch (s.tag) {
							case 0:
							case 11:
							case 15:
								Rr(9, s, s.return)
						}
						var h = s.sibling;
						if (h !== null) {
							h.return = s.return, D = h;
							break e
						}
						D = s.return
					}
				}
				var m = e.current;
				for (D = m; D !== null;) {
					o = D;
					var x = o.child;
					if (o.subtreeFlags & 2064 && x !== null) x.return = o, D = x;
					else e: for (o = m; D !== null;) {
						if (l = D, l.flags & 2048) try {
							switch (l.tag) {
								case 0:
								case 11:
								case 15:
									ro(9, l)
							}
						} catch (N) {
							Q(l, l.return, N)
						}
						if (l === o) {
							D = null;
							break e
						}
						var j = l.sibling;
						if (j !== null) {
							j.return = l.return, D = j;
							break e
						}
						D = l.return
					}
				}
				if (z = i, Qt(), it && typeof it.onPostCommitFiberRoot == "function") try {
					it.onPostCommitFiberRoot(Ys, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			F = n, Be.transition = t
		}
	}
	return !1
}

function cd(e, t, n) {
	t = rr(n, t), t = Ph(e, t, 1), e = Ft(e, t, 1), t = be(), e !== null && (xi(e, 1, t), Ee(e, t))
}

function Q(e, t, n) {
	if (e.tag === 3) cd(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				cd(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_t === null || !_t.has(r))) {
					e = rr(n, e), e = Eh(t, e, 1), t = Ft(t, e, 1), e = be(), t !== null && (xi(t, 1, e), Ee(t, e));
					break
				}
			}
			t = t.return
		}
}

function d1(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (fe & n) === n && (se === 4 || se === 3 && (fe & 130023424) === fe && 500 > J() - cu ? pn(e, 0) : uu |= n), Ee(e, t)
}

function Yh(e, t) {
	t === 0 && (e.mode & 1 ? (t = Ai, Ai <<= 1, !(Ai & 130023424) && (Ai = 4194304)) : t = 1);
	var n = be();
	e = gt(e, t), e !== null && (xi(e, t, n), Ee(e, n))
}

function f1(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Yh(e, n)
}

function p1(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(T(314))
	}
	r !== null && r.delete(t), Yh(e, n)
}
var Qh;
Qh = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, e1(e, t, n);
			Ce = !!(e.flags & 131072)
		}
	else Ce = !1, B && t.flags & 1048576 && eh(t, Cs, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			ss(e, t), e = t.pendingProps;
			var i = Jn(t, xe.current);
			Qn(t, n), i = ru(null, t, r, e, i, n);
			var s = iu();
			return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (s = !0, js(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ql(t), i.updater = no, t.stateNode = i, i._reactInternals = t, Fa(t, r, e, n), t = Oa(null, t, r, !0, s, n)) : (t.tag = 0, B && s && Hl(t), ve(null, t, i, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (ss(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = m1(r), e = Xe(r, e), i) {
					case 0:
						t = Ia(null, t, r, e, n);
						break e;
					case 1:
						t = ed(null, t, r, e, n);
						break e;
					case 11:
						t = qc(null, t, r, e, n);
						break e;
					case 14:
						t = Jc(null, t, r, Xe(r.type, e), n);
						break e
				}
				throw Error(T(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Ia(e, t, r, i, n);
		case 1:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), ed(e, t, r, i, n);
		case 3:
			e: {
				if (Lh(t), e === null) throw Error(T(387));r = t.pendingProps,
				s = t.memoizedState,
				i = s.element,
				oh(e, t),
				Ps(t, r, null, n);
				var o = t.memoizedState;
				if (r = o.element, s.isDehydrated)
					if (s = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions
						}, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
						i = rr(Error(T(423)), t), t = td(e, t, r, n, i);
						break e
					} else if (r !== i) {
					i = rr(Error(T(424)), t), t = td(e, t, r, n, i);
					break e
				} else
					for (Me = Vt(t.stateNode.containerInfo.firstChild), Le = t, B = !0, Qe = null, n = ih(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (er(), r === i) {
						t = xt(e, t, n);
						break e
					}
					ve(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return ah(t), e === null && Aa(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, $a(r, i) ? o = null : s !== null && $a(r, s) && (t.flags |= 32), Mh(e, t), ve(e, t, o, n), t.child;
		case 6:
			return e === null && Aa(t), null;
		case 13:
			return Rh(e, t, n);
		case 4:
			return Jl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : ve(e, t, r, n), t.child;
		case 11:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), qc(e, t, r, i, n);
		case 7:
			return ve(e, t, t.pendingProps, n), t.child;
		case 8:
			return ve(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ve(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, _(Ns, r._currentValue), r._currentValue = o, s !== null)
					if (Je(s.value, o)) {
						if (s.children === i.children && !Te.current) {
							t = xt(e, t, n);
							break e
						}
					} else
						for (s = t.child, s !== null && (s.return = t); s !== null;) {
							var l = s.dependencies;
							if (l !== null) {
								o = s.child;
								for (var u = l.firstContext; u !== null;) {
									if (u.context === r) {
										if (s.tag === 1) {
											u = ht(-1, n & -n), u.tag = 2;
											var c = s.updateQueue;
											if (c !== null) {
												c = c.shared;
												var d = c.pending;
												d === null ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
											}
										}
										s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), za(s.return, n, t), l.lanes |= n;
										break
									}
									u = u.next
								}
							} else if (s.tag === 10) o = s.type === t.type ? null : s.child;
							else if (s.tag === 18) {
								if (o = s.return, o === null) throw Error(T(341));
								o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), za(o, n, t), o = s.sibling
							} else o = s.child;
							if (o !== null) o.return = s;
							else
								for (o = s; o !== null;) {
									if (o === t) {
										o = null;
										break
									}
									if (s = o.sibling, s !== null) {
										s.return = o.return, o = s;
										break
									}
									o = o.return
								}
							s = o
						}
				ve(e, t, i.children, n),
				t = t.child
			}
			return t;
		case 9:
			return i = t.type, r = t.pendingProps.children, Qn(t, n), i = We(i), r = r(i), t.flags |= 1, ve(e, t, r, n), t.child;
		case 14:
			return r = t.type, i = Xe(r, t.pendingProps), i = Xe(r.type, i), Jc(e, t, r, i, n);
		case 15:
			return $h(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), ss(e, t), t.tag = 1, Pe(r) ? (e = !0, js(t)) : e = !1, Qn(t, n), Th(t, r, i), Fa(t, r, i, n), Oa(null, t, r, !0, e, n);
		case 19:
			return Ah(e, t, n);
		case 22:
			return Dh(e, t, n)
	}
	throw Error(T(156, t.tag))
};

function Zh(e, t) {
	return Sp(e, t)
}

function h1(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Oe(e, t, n, r) {
	return new h1(e, t, n, r)
}

function hu(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function m1(e) {
	if (typeof e == "function") return hu(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === Ll) return 11;
		if (e === Rl) return 14
	}
	return 2
}

function Ot(e, t) {
	var n = e.alternate;
	return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ls(e, t, n, r, i, s) {
	var o = 2;
	if (r = e, typeof e == "function") hu(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else e: switch (e) {
		case $n:
			return hn(n.children, i, s, t);
		case Ml:
			o = 8, i |= 8;
			break;
		case la:
			return e = Oe(12, n, t, i | 2), e.elementType = la, e.lanes = s, e;
		case ua:
			return e = Oe(13, n, t, i), e.elementType = ua, e.lanes = s, e;
		case ca:
			return e = Oe(19, n, t, i), e.elementType = ca, e.lanes = s, e;
		case ap:
			return so(n, i, s, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case sp:
					o = 10;
					break e;
				case op:
					o = 9;
					break e;
				case Ll:
					o = 11;
					break e;
				case Rl:
					o = 14;
					break e;
				case St:
					o = 16, r = null;
					break e
			}
			throw Error(T(130, e == null ? e : typeof e, ""))
	}
	return t = Oe(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function hn(e, t, n, r) {
	return e = Oe(7, e, r, t), e.lanes = n, e
}

function so(e, t, n, r) {
	return e = Oe(22, e, r, t), e.elementType = ap, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function Bo(e, t, n) {
	return e = Oe(6, e, null, t), e.lanes = n, e
}

function Uo(e, t, n) {
	return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function y1(e, t, n, r, i) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jo(0), this.expirationTimes = jo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function mu(e, t, n, r, i, s, o, l, u) {
	return e = new y1(e, t, n, l, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Oe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, ql(s), e
}

function g1(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: En,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function qh(e) {
	if (!e) return Ht;
	e = e._reactInternals;
	e: {
		if (jn(e) !== e || e.tag !== 1) throw Error(T(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Pe(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(T(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Pe(n)) return qp(e, n, t)
	}
	return t
}

function Jh(e, t, n, r, i, s, o, l, u) {
	return e = mu(n, r, !0, e, i, s, o, l, u), e.context = qh(null), n = e.current, r = be(), i = It(n), s = ht(r, i), s.callback = t ?? null, Ft(n, s, i), e.current.lanes = i, xi(e, i, r), Ee(e, r), e
}

function oo(e, t, n, r) {
	var i = t.current,
		s = be(),
		o = It(i);
	return n = qh(n), t.context === null ? t.context = n : t.pendingContext = n, t = ht(s, o), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ft(i, t, o), e !== null && (qe(e, i, o, s), ns(e, i, o)), o
}

function zs(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function dd(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function yu(e, t) {
	dd(e, t), (e = e.alternate) && dd(e, t)
}

function x1() {
	return null
}
var em = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function gu(e) {
	this._internalRoot = e
}
ao.prototype.render = gu.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(T(409));
	oo(e, t, null, null)
};
ao.prototype.unmount = gu.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		bn(function() {
			oo(null, e, null, null)
		}), t[yt] = null
	}
};

function ao(e) {
	this._internalRoot = e
}
ao.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = Dp();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
		Tt.splice(n, 0, e), n === 0 && Lp(e)
	}
};

function xu(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function lo(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function fd() {}

function v1(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var s = r;
			r = function() {
				var c = zs(o);
				s.call(c)
			}
		}
		var o = Jh(t, r, e, 0, null, !1, !1, "", fd);
		return e._reactRootContainer = o, e[yt] = o.current, qr(e.nodeType === 8 ? e.parentNode : e), bn(), o
	}
	for (; i = e.lastChild;) e.removeChild(i);
	if (typeof r == "function") {
		var l = r;
		r = function() {
			var c = zs(u);
			l.call(c)
		}
	}
	var u = mu(e, 0, !1, null, null, !1, !1, "", fd);
	return e._reactRootContainer = u, e[yt] = u.current, qr(e.nodeType === 8 ? e.parentNode : e), bn(function() {
		oo(t, u, n, r)
	}), u
}

function uo(e, t, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == "function") {
			var l = i;
			i = function() {
				var u = zs(o);
				l.call(u)
			}
		}
		oo(t, o, e, i)
	} else o = v1(n, t, e, i, r);
	return zs(o)
}
Ep = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Cr(t.pendingLanes);
				n !== 0 && (Vl(t, n | 1), Ee(t, J()), !(z & 6) && (ir = J() + 500, Qt()))
			}
			break;
		case 13:
			bn(function() {
				var r = gt(e, 1);
				if (r !== null) {
					var i = be();
					qe(r, e, 1, i)
				}
			}), yu(e, 1)
	}
};
Fl = function(e) {
	if (e.tag === 13) {
		var t = gt(e, 134217728);
		if (t !== null) {
			var n = be();
			qe(t, e, 134217728, n)
		}
		yu(e, 134217728)
	}
};
$p = function(e) {
	if (e.tag === 13) {
		var t = It(e),
			n = gt(e, t);
		if (n !== null) {
			var r = be();
			qe(n, e, t, r)
		}
		yu(e, t)
	}
};
Dp = function() {
	return F
};
Mp = function(e, t) {
	var n = F;
	try {
		return F = e, t()
	} finally {
		F = n
	}
};
wa = function(e, t, n) {
	switch (t) {
		case "input":
			if (pa(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Js(r);
						if (!i) throw Error(T(90));
						up(r), pa(r, i)
					}
				}
			}
			break;
		case "textarea":
			dp(e, n);
			break;
		case "select":
			t = n.value, t != null && Kn(e, !!n.multiple, t, !1)
	}
};
xp = du;
vp = bn;
var w1 = {
		usingClientEntryPoint: !1,
		Events: [wi, Rn, Js, yp, gp, du]
	},
	br = {
		findFiberByHostInstance: ln,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	b1 = {
		bundleType: br.bundleType,
		version: br.version,
		rendererPackageName: br.rendererPackageName,
		rendererConfig: br.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: bt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = kp(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: br.findFiberByHostInstance || x1,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ki.isDisabled && Ki.supportsFiber) try {
		Ys = Ki.inject(b1), it = Ki
	} catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w1;
Ae.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!xu(t)) throw Error(T(200));
	return g1(e, t, null, n)
};
Ae.createRoot = function(e, t) {
	if (!xu(e)) throw Error(T(299));
	var n = !1,
		r = "",
		i = em;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = mu(e, 1, !1, null, null, n, !1, r, i), e[yt] = t.current, qr(e.nodeType === 8 ? e.parentNode : e), new gu(t)
};
Ae.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
	return e = kp(t), e = e === null ? null : e.stateNode, e
};
Ae.flushSync = function(e) {
	return bn(e)
};
Ae.hydrate = function(e, t, n) {
	if (!lo(t)) throw Error(T(200));
	return uo(null, e, t, !0, n)
};
Ae.hydrateRoot = function(e, t, n) {
	if (!xu(e)) throw Error(T(405));
	var r = n != null && n.hydratedSources || null,
		i = !1,
		s = "",
		o = em;
	if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Jh(t, null, e, 1, n ?? null, i, !1, s, o), e[yt] = t.current, qr(e), r)
		for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
	return new ao(t)
};
Ae.render = function(e, t, n) {
	if (!lo(t)) throw Error(T(200));
	return uo(null, e, t, !1, n)
};
Ae.unmountComponentAtNode = function(e) {
	if (!lo(e)) throw Error(T(40));
	return e._reactRootContainer ? (bn(function() {
		uo(null, null, e, !1, function() {
			e._reactRootContainer = null, e[yt] = null
		})
	}), !0) : !1
};
Ae.unstable_batchedUpdates = du;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!lo(n)) throw Error(T(200));
	if (e == null || e._reactInternals === void 0) throw Error(T(38));
	return uo(e, t, n, !1, r)
};
Ae.version = "18.3.1-next-f1338f8080-20240426";

function tm() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tm)
	} catch (e) {
		console.error(e)
	}
}
tm(), tp.exports = Ae;
var k1 = tp.exports,
	nm, pd = k1;
nm = pd.createRoot, pd.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ai() {
	return ai = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, ai.apply(this, arguments)
}
var Mt;
(function(e) {
	e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Mt || (Mt = {}));
const hd = "popstate";

function j1(e) {
	e === void 0 && (e = {});

	function t(i, s) {
		let {
			pathname: o = "/",
			search: l = "",
			hash: u = ""
		} = Sn(i.location.hash.substr(1));
		return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), Ja("", {
			pathname: o,
			search: l,
			hash: u
		}, s.state && s.state.usr || null, s.state && s.state.key || "default")
	}

	function n(i, s) {
		let o = i.document.querySelector("base"),
			l = "";
		if (o && o.getAttribute("href")) {
			let u = i.location.href,
				c = u.indexOf("#");
			l = c === -1 ? u : u.slice(0, c)
		}
		return l + "#" + (typeof s == "string" ? s : Vs(s))
	}

	function r(i, s) {
		vu(i.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")")
	}
	return C1(t, n, r, e)
}

function ne(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function vu(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t)
		} catch {}
	}
}

function S1() {
	return Math.random().toString(36).substr(2, 8)
}

function md(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t
	}
}

function Ja(e, t, n, r) {
	return n === void 0 && (n = null), ai({
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: ""
	}, typeof t == "string" ? Sn(t) : t, {
		state: n,
		key: t && t.key || r || S1()
	})
}

function Vs(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: r = ""
	} = e;
	return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Sn(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
	}
	return t
}

function C1(e, t, n, r) {
	r === void 0 && (r = {});
	let {
		window: i = document.defaultView,
		v5Compat: s = !1
	} = r, o = i.history, l = Mt.Pop, u = null, c = d();
	c == null && (c = 0, o.replaceState(ai({}, o.state, {
		idx: c
	}), ""));

	function d() {
		return (o.state || {
			idx: null
		}).idx
	}

	function f() {
		l = Mt.Pop;
		let w = d(),
			h = w == null ? null : w - c;
		c = w, u && u({
			action: l,
			location: y.location,
			delta: h
		})
	}

	function p(w, h) {
		l = Mt.Push;
		let m = Ja(y.location, w, h);
		n && n(m, w), c = d() + 1;
		let x = md(m, c),
			j = y.createHref(m);
		try {
			o.pushState(x, "", j)
		} catch (N) {
			if (N instanceof DOMException && N.name === "DataCloneError") throw N;
			i.location.assign(j)
		}
		s && u && u({
			action: l,
			location: y.location,
			delta: 1
		})
	}

	function g(w, h) {
		l = Mt.Replace;
		let m = Ja(y.location, w, h);
		n && n(m, w), c = d();
		let x = md(m, c),
			j = y.createHref(m);
		o.replaceState(x, "", j), s && u && u({
			action: l,
			location: y.location,
			delta: 0
		})
	}

	function v(w) {
		let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
			m = typeof w == "string" ? w : Vs(w);
		return m = m.replace(/ $/, "%20"), ne(h, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, h)
	}
	let y = {
		get action() {
			return l
		},
		get location() {
			return e(i, o)
		},
		listen(w) {
			if (u) throw new Error("A history only accepts one active listener");
			return i.addEventListener(hd, f), u = w, () => {
				i.removeEventListener(hd, f), u = null
			}
		},
		createHref(w) {
			return t(i, w)
		},
		createURL: v,
		encodeLocation(w) {
			let h = v(w);
			return {
				pathname: h.pathname,
				search: h.search,
				hash: h.hash
			}
		},
		push: p,
		replace: g,
		go(w) {
			return o.go(w)
		}
	};
	return y
}
var yd;
(function(e) {
	e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(yd || (yd = {}));

function N1(e, t, n) {
	return n === void 0 && (n = "/"), T1(e, t, n, !1)
}

function T1(e, t, n, r) {
	let i = typeof t == "string" ? Sn(t) : t,
		s = wu(i.pathname || "/", n);
	if (s == null) return null;
	let o = rm(e);
	P1(o);
	let l = null;
	for (let u = 0; l == null && u < o.length; ++u) {
		let c = _1(s);
		l = V1(o[u], c, r)
	}
	return l
}

function rm(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (s, o, l) => {
		let u = {
			relativePath: l === void 0 ? s.path || "" : l,
			caseSensitive: s.caseSensitive === !0,
			childrenIndex: o,
			route: s
		};
		u.relativePath.startsWith("/") && (ne(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
		let c = Bt([r, u.relativePath]),
			d = n.concat(u);
		s.children && s.children.length > 0 && (ne(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), rm(s.children, t, d, c)), !(s.path == null && !s.index) && t.push({
			path: c,
			score: A1(c, s.index),
			routesMeta: d
		})
	};
	return e.forEach((s, o) => {
		var l;
		if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
		else
			for (let u of im(s.path)) i(s, o, u)
	}), t
}

function im(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [s, ""] : [s];
	let o = im(r.join("/")),
		l = [];
	return l.push(...o.map(u => u === "" ? s : [s, u].join("/"))), i && l.push(...o), l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function P1(e) {
	e.sort((t, n) => t.score !== n.score ? n.score - t.score : z1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const E1 = /^:[\w-]+$/,
	$1 = 3,
	D1 = 2,
	M1 = 1,
	L1 = 10,
	R1 = -2,
	gd = e => e === "*";

function A1(e, t) {
	let n = e.split("/"),
		r = n.length;
	return n.some(gd) && (r += R1), t && (r += D1), n.filter(i => !gd(i)).reduce((i, s) => i + (E1.test(s) ? $1 : s === "" ? M1 : L1), r)
}

function z1(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function V1(e, t, n) {
	let {
		routesMeta: r
	} = e, i = {}, s = "/", o = [];
	for (let l = 0; l < r.length; ++l) {
		let u = r[l],
			c = l === r.length - 1,
			d = s === "/" ? t : t.slice(s.length) || "/",
			f = xd({
				path: u.relativePath,
				caseSensitive: u.caseSensitive,
				end: c
			}, d),
			p = u.route;
		if (!f && c && n && !r[r.length - 1].route.index && (f = xd({
				path: u.relativePath,
				caseSensitive: u.caseSensitive,
				end: !1
			}, d)), !f) return null;
		Object.assign(i, f.params), o.push({
			params: i,
			pathname: Bt([s, f.pathname]),
			pathnameBase: U1(Bt([s, f.pathnameBase])),
			route: p
		}), f.pathnameBase !== "/" && (s = Bt([s, f.pathnameBase]))
	}
	return o
}

function xd(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = F1(e.path, e.caseSensitive, e.end), i = t.match(n);
	if (!i) return null;
	let s = i[0],
		o = s.replace(/(.)\/+$/, "$1"),
		l = i.slice(1);
	return {
		params: r.reduce((c, d, f) => {
			let {
				paramName: p,
				isOptional: g
			} = d;
			if (p === "*") {
				let y = l[f] || "";
				o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1")
			}
			const v = l[f];
			return g && !v ? c[p] = void 0 : c[p] = (v || "").replace(/%2F/g, "/"), c
		}, {}),
		pathname: s,
		pathnameBase: o,
		pattern: e
	}
}

function F1(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0), vu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
	let r = [],
		i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, u) => (r.push({
			paramName: l,
			isOptional: u != null
		}), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
	return e.endsWith("*") ? (r.push({
		paramName: "*"
	}), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function _1(e) {
	try {
		return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
	} catch (t) {
		return vu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
	}
}

function wu(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/"
}

function I1(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = ""
	} = typeof e == "string" ? Sn(e) : e;
	return {
		pathname: n ? n.startsWith("/") ? n : O1(n, t) : t,
		search: W1(r),
		hash: H1(i)
	}
}

function O1(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach(i => {
		i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
	}), n.length > 1 ? n.join("/") : "/"
}

function Wo(e, t, n, r) {
	return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function B1(e) {
	return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function sm(e, t) {
	let n = B1(e);
	return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function om(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string" ? i = Sn(e) : (i = ai({}, e), ne(!i.pathname || !i.pathname.includes("?"), Wo("?", "pathname", "search", i)), ne(!i.pathname || !i.pathname.includes("#"), Wo("#", "pathname", "hash", i)), ne(!i.search || !i.search.includes("#"), Wo("#", "search", "hash", i)));
	let s = e === "" || i.pathname === "",
		o = s ? "/" : i.pathname,
		l;
	if (o == null) l = n;
	else {
		let f = t.length - 1;
		if (!r && o.startsWith("..")) {
			let p = o.split("/");
			for (; p[0] === "..";) p.shift(), f -= 1;
			i.pathname = p.join("/")
		}
		l = f >= 0 ? t[f] : "/"
	}
	let u = I1(i, l),
		c = o && o !== "/" && o.endsWith("/"),
		d = (s || o === ".") && n.endsWith("/");
	return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u
}
const Bt = e => e.join("/").replace(/\/\/+/g, "/"),
	U1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	W1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
	H1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function K1(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const am = ["post", "put", "patch", "delete"];
new Set(am);
const G1 = ["get", ...am];
new Set(G1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function li() {
	return li = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, li.apply(this, arguments)
}
const bu = k.createContext(null),
	X1 = k.createContext(null),
	Cn = k.createContext(null),
	co = k.createContext(null),
	Nn = k.createContext({
		outlet: null,
		matches: [],
		isDataRoute: !1
	}),
	lm = k.createContext(null);

function Y1(e, t) {
	let {
		relative: n
	} = t === void 0 ? {} : t;
	ki() || ne(!1);
	let {
		basename: r,
		navigator: i
	} = k.useContext(Cn), {
		hash: s,
		pathname: o,
		search: l
	} = cm(e, {
		relative: n
	}), u = o;
	return r !== "/" && (u = o === "/" ? r : Bt([r, o])), i.createHref({
		pathname: u,
		search: l,
		hash: s
	})
}

function ki() {
	return k.useContext(co) != null
}

function Zt() {
	return ki() || ne(!1), k.useContext(co).location
}

function um(e) {
	k.useContext(Cn).static || k.useLayoutEffect(e)
}

function fo() {
	let {
		isDataRoute: e
	} = k.useContext(Nn);
	return e ? lx() : Q1()
}

function Q1() {
	ki() || ne(!1);
	let e = k.useContext(bu),
		{
			basename: t,
			future: n,
			navigator: r
		} = k.useContext(Cn),
		{
			matches: i
		} = k.useContext(Nn),
		{
			pathname: s
		} = Zt(),
		o = JSON.stringify(sm(i, n.v7_relativeSplatPath)),
		l = k.useRef(!1);
	return um(() => {
		l.current = !0
	}), k.useCallback(function(c, d) {
		if (d === void 0 && (d = {}), !l.current) return;
		if (typeof c == "number") {
			r.go(c);
			return
		}
		let f = om(c, JSON.parse(o), s, d.relative === "path");
		e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Bt([t, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d)
	}, [t, r, o, s, e])
}

function cm(e, t) {
	let {
		relative: n
	} = t === void 0 ? {} : t, {
		future: r
	} = k.useContext(Cn), {
		matches: i
	} = k.useContext(Nn), {
		pathname: s
	} = Zt(), o = JSON.stringify(sm(i, r.v7_relativeSplatPath));
	return k.useMemo(() => om(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}

function Z1(e, t) {
	return q1(e, t)
}

function q1(e, t, n, r) {
	ki() || ne(!1);
	let {
		navigator: i
	} = k.useContext(Cn), {
		matches: s
	} = k.useContext(Nn), o = s[s.length - 1], l = o ? o.params : {};
	o && o.pathname;
	let u = o ? o.pathnameBase : "/";
	o && o.route;
	let c = Zt(),
		d;
	if (t) {
		var f;
		let w = typeof t == "string" ? Sn(t) : t;
		u === "/" || (f = w.pathname) != null && f.startsWith(u) || ne(!1), d = w
	} else d = c;
	let p = d.pathname || "/",
		g = p;
	if (u !== "/") {
		let w = u.replace(/^\//, "").split("/");
		g = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/")
	}
	let v = N1(e, {
			pathname: g
		}),
		y = rx(v && v.map(w => Object.assign({}, w, {
			params: Object.assign({}, l, w.params),
			pathname: Bt([u, i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname]),
			pathnameBase: w.pathnameBase === "/" ? u : Bt([u, i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
		})), s, n, r);
	return t && y ? k.createElement(co.Provider, {
		value: {
			location: li({
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default"
			}, d),
			navigationType: Mt.Pop
		}
	}, y) : y
}

function J1() {
	let e = ax(),
		t = K1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)"
		};
	return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, t), n ? k.createElement("pre", {
		style: i
	}, n) : null, null)
}
const ex = k.createElement(J1, null);
class tx extends k.Component {
	constructor(t) {
		super(t), this.state = {
			location: t.location,
			revalidation: t.revalidation,
			error: t.error
		}
	}
	static getDerivedStateFromError(t) {
		return {
			error: t
		}
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
			error: t.error,
			location: t.location,
			revalidation: t.revalidation
		} : {
			error: t.error !== void 0 ? t.error : n.error,
			location: n.location,
			revalidation: t.revalidation || n.revalidation
		}
	}
	componentDidCatch(t, n) {
		console.error("React Router caught the following error during render", t, n)
	}
	render() {
		return this.state.error !== void 0 ? k.createElement(Nn.Provider, {
			value: this.props.routeContext
		}, k.createElement(lm.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children
	}
}

function nx(e) {
	let {
		routeContext: t,
		match: n,
		children: r
	} = e, i = k.useContext(bu);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Nn.Provider, {
		value: t
	}, r)
}

function rx(e, t, n, r) {
	var i;
	if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
		var s;
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
		else return null
	}
	let o = e,
		l = (i = n) == null ? void 0 : i.errors;
	if (l != null) {
		let d = o.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
		d >= 0 || ne(!1), o = o.slice(0, Math.min(o.length, d + 1))
	}
	let u = !1,
		c = -1;
	if (n && r && r.v7_partialHydration)
		for (let d = 0; d < o.length; d++) {
			let f = o[d];
			if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d), f.route.id) {
				let {
					loaderData: p,
					errors: g
				} = n, v = f.route.loader && p[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
				if (f.route.lazy || v) {
					u = !0, c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
					break
				}
			}
		}
	return o.reduceRight((d, f, p) => {
		let g, v = !1,
			y = null,
			w = null;
		n && (g = l && f.route.id ? l[f.route.id] : void 0, y = f.route.errorElement || ex, u && (c < 0 && p === 0 ? (v = !0, w = null) : c === p && (v = !0, w = f.route.hydrateFallbackElement || null)));
		let h = t.concat(o.slice(0, p + 1)),
			m = () => {
				let x;
				return g ? x = y : v ? x = w : f.route.Component ? x = k.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = d, k.createElement(nx, {
					match: f,
					routeContext: {
						outlet: d,
						matches: h,
						isDataRoute: n != null
					},
					children: x
				})
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0) ? k.createElement(tx, {
			location: n.location,
			revalidation: n.revalidation,
			component: y,
			error: g,
			children: m(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			}
		}, null) : m()
	}, null)
	}
var dm = function(e) {
		return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
	}(dm || {}),
	Fs = function(e) {
		return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
	}(Fs || {});

function ix(e) {
	let t = k.useContext(bu);
	return t || ne(!1), t
}

function sx(e) {
	let t = k.useContext(X1);
	return t || ne(!1), t
}

function ox(e) {
	let t = k.useContext(Nn);
	return t || ne(!1), t
}

function fm(e) {
	let t = ox(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || ne(!1), n.route.id
}

function ax() {
	var e;
	let t = k.useContext(lm),
		n = sx(Fs.UseRouteError),
		r = fm(Fs.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function lx() {
	let {
		router: e
	} = ix(dm.UseNavigateStable), t = fm(Fs.UseNavigateStable), n = k.useRef(!1);
	return um(() => {
		n.current = !0
	}), k.useCallback(function(i, s) {
		s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, li({
			fromRouteId: t
		}, s)))
	}, [e, t])
}

function ux(e, t) {
	e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function on(e) {
	ne(!1)
}

function cx(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = Mt.Pop,
		navigator: s,
		static: o = !1,
		future: l
	} = e;
	ki() && ne(!1);
	let u = t.replace(/^\/*/, "/"),
		c = k.useMemo(() => ({
			basename: u,
			navigator: s,
			static: o,
			future: li({
				v7_relativeSplatPath: !1
			}, l)
		}), [u, l, s, o]);
	typeof r == "string" && (r = Sn(r));
	let {
		pathname: d = "/",
		search: f = "",
		hash: p = "",
		state: g = null,
		key: v = "default"
	} = r, y = k.useMemo(() => {
		let w = wu(d, u);
		return w == null ? null : {
			location: {
				pathname: w,
				search: f,
				hash: p,
				state: g,
				key: v
			},
			navigationType: i
		}
	}, [u, d, f, p, g, v, i]);
	return y == null ? null : k.createElement(Cn.Provider, {
		value: c
	}, k.createElement(co.Provider, {
		children: n,
		value: y
	}))
}

function dx(e) {
	let {
		children: t,
		location: n
	} = e;
	return Z1(el(t), n)
}
new Promise(() => {});

function el(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return k.Children.forEach(e, (r, i) => {
		if (!k.isValidElement(r)) return;
		let s = [...t, i];
		if (r.type === k.Fragment) {
			n.push.apply(n, el(r.props.children, s));
			return
		}
		r.type !== on && ne(!1), !r.props.index || !r.props.children || ne(!1);
		let o = {
			id: r.props.id || s.join("-"),
			caseSensitive: r.props.caseSensitive,
			element: r.props.element,
			Component: r.props.Component,
			index: r.props.index,
			path: r.props.path,
			loader: r.props.loader,
			action: r.props.action,
			errorElement: r.props.errorElement,
			ErrorBoundary: r.props.ErrorBoundary,
			hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
			shouldRevalidate: r.props.shouldRevalidate,
			handle: r.props.handle,
			lazy: r.props.lazy
		};
		r.props.children && (o.children = el(r.props.children, s)), n.push(o)
	}), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tl() {
	return tl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, tl.apply(this, arguments)
}

function fx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, s;
	for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}

function px(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function hx(e, t) {
	return e.button === 0 && (!t || t === "_self") && !px(e)
}

function nl(e) {
	return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t.concat(Array.isArray(r) ? r.map(i => [n, i]) : [
			[n, r]
		])
	}, []))
}

function mx(e, t) {
	let n = nl(e);
	return t && t.forEach((r, i) => {
		n.has(i) || t.getAll(i).forEach(s => {
			n.append(i, s)
		})
	}), n
}
const yx = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
	gx = "6";
try {
	window.__reactRouterVersion = gx
} catch {}
const xx = "startTransition",
	vd = dy[xx];

function vx(e) {
	let {
		basename: t,
		children: n,
		future: r,
		window: i
	} = e, s = k.useRef();
	s.current == null && (s.current = j1({
		window: i,
		v5Compat: !0
	}));
	let o = s.current,
		[l, u] = k.useState({
			action: o.action,
			location: o.location
		}),
		{
			v7_startTransition: c
		} = r || {},
		d = k.useCallback(f => {
			c && vd ? vd(() => u(f)) : u(f)
		}, [u, c]);
	return k.useLayoutEffect(() => o.listen(d), [o, d]), k.useEffect(() => ux(r), [r]), k.createElement(cx, {
		basename: t,
		children: n,
		location: l.location,
		navigationType: l.action,
		navigator: o,
		future: r
	})
}
const wx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	bx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Vr = k.forwardRef(function(t, n) {
		let {
			onClick: r,
			relative: i,
			reloadDocument: s,
			replace: o,
			state: l,
			target: u,
			to: c,
			preventScrollReset: d,
			viewTransition: f
		} = t, p = fx(t, yx), {
			basename: g
		} = k.useContext(Cn), v, y = !1;
		if (typeof c == "string" && bx.test(c) && (v = c, wx)) try {
			let x = new URL(window.location.href),
				j = c.startsWith("//") ? new URL(x.protocol + c) : new URL(c),
				N = wu(j.pathname, g);
			j.origin === x.origin && N != null ? c = N + j.search + j.hash : y = !0
		} catch {}
		let w = Y1(c, {
				relative: i
			}),
			h = kx(c, {
				replace: o,
				state: l,
				target: u,
				preventScrollReset: d,
				relative: i,
				viewTransition: f
			});

		function m(x) {
			r && r(x), x.defaultPrevented || h(x)
		}
		return k.createElement("a", tl({}, p, {
			href: v || w,
			onClick: y || s ? r : m,
			ref: n,
			target: u
		}))
	});
var wd;
(function(e) {
	e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(wd || (wd = {}));
var bd;
(function(e) {
	e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(bd || (bd = {}));

function kx(e, t) {
	let {
		target: n,
		replace: r,
		state: i,
		preventScrollReset: s,
		relative: o,
		viewTransition: l
	} = t === void 0 ? {} : t, u = fo(), c = Zt(), d = cm(e, {
		relative: o
	});
	return k.useCallback(f => {
		if (hx(f, n)) {
			f.preventDefault();
			let p = r !== void 0 ? r : Vs(c) === Vs(d);
			u(e, {
				replace: p,
				state: i,
				preventScrollReset: s,
				relative: o,
				viewTransition: l
			})
		}
	}, [c, u, d, r, i, n, e, s, o, l])
}

function jx(e) {
	let t = k.useRef(nl(e)),
		n = k.useRef(!1),
		r = Zt(),
		i = k.useMemo(() => mx(r.search, n.current ? null : t.current), [r.search]),
		s = fo(),
		o = k.useCallback((l, u) => {
			const c = nl(typeof l == "function" ? l(i) : l);
			n.current = !0, s("?" + c, u)
		}, [s, i]);
	return [i, o]
}
const ku = k.createContext({});

function ju(e) {
	const t = k.useRef(null);
	return t.current === null && (t.current = e()), t.current
}
const Su = typeof window < "u",
	pm = Su ? k.useLayoutEffect : k.useEffect,
	po = k.createContext(null);

function Cu(e, t) {
	e.indexOf(t) === -1 && e.push(t)
}

function Nu(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1)
}
const vt = (e, t, n) => n > t ? t : n < e ? e : n;
let _s = () => {};
const wt = {},
	hm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function mm(e) {
	return typeof e == "object" && e !== null
}
const ym = e => /^0[^.\s]+$/u.test(e);

function Tu(e) {
	let t;
	return () => (t === void 0 && (t = e()), t)
}
const Ue = e => e,
	Sx = (e, t) => n => t(e(n)),
	ji = (...e) => e.reduce(Sx),
	ui = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r
	};
class Pu {
	constructor() {
		this.subscriptions = []
	}
	add(t) {
		return Cu(this.subscriptions, t), () => Nu(this.subscriptions, t)
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let s = 0; s < i; s++) {
					const o = this.subscriptions[s];
					o && o(t, n, r)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}
const ot = e => e * 1e3,
	at = e => e / 1e3;

function gm(e, t) {
	return t ? e * (1e3 / t) : 0
}
const xm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	Cx = 1e-7,
	Nx = 12;

function Tx(e, t, n, r, i) {
	let s, o, l = 0;
	do o = t + (n - t) / 2, s = xm(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > Cx && ++l < Nx);
	return o
}

function Si(e, t, n, r) {
	if (e === t && n === r) return Ue;
	const i = s => Tx(s, 0, 1, e, n);
	return s => s === 0 || s === 1 ? s : xm(i(s), t, r)
}
const vm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	wm = e => t => 1 - e(1 - t),
	bm = Si(.33, 1.53, .69, .99),
	Eu = wm(bm),
	km = vm(Eu),
	jm = e => (e *= 2) < 1 ? .5 * Eu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
	$u = e => 1 - Math.sin(Math.acos(e)),
	Sm = wm($u),
	Cm = vm($u),
	Px = Si(.42, 0, 1, 1),
	Ex = Si(0, 0, .58, 1),
	Nm = Si(.42, 0, .58, 1),
	$x = e => Array.isArray(e) && typeof e[0] != "number",
	Tm = e => Array.isArray(e) && typeof e[0] == "number",
	kd = {
		linear: Ue,
		easeIn: Px,
		easeInOut: Nm,
		easeOut: Ex,
		circIn: $u,
		circInOut: Cm,
		circOut: Sm,
		backIn: Eu,
		backInOut: km,
		backOut: bm,
		anticipate: jm
	},
	Dx = e => typeof e == "string",
	jd = e => {
		if (Tm(e)) {
			_s(e.length === 4);
			const [t, n, r, i] = e;
			return Si(t, n, r, i)
		} else if (Dx(e)) return _s(kd[e] !== void 0), kd[e];
		return e
	},
	Gi = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
	Sd = {
		value: null,
		addProjectionMetrics: null
	};

function Mx(e, t) {
	let n = new Set,
		r = new Set,
		i = !1,
		s = !1;
	const o = new WeakSet;
	let l = {
			delta: 0,
			timestamp: 0,
			isProcessing: !1
		},
		u = 0;

	function c(f) {
		o.has(f) && (d.schedule(f), e()), u++, f(l)
	}
	const d = {
		schedule: (f, p = !1, g = !1) => {
			const y = g && i ? n : r;
			return p && o.add(f), y.has(f) || y.add(f), f
		},
		cancel: f => {
			r.delete(f), o.delete(f)
		},
		process: f => {
			if (l = f, i) {
				s = !0;
				return
			}
			i = !0, [n, r] = [r, n], n.forEach(c), t && Sd.value && Sd.value.frameloop[t].push(u), u = 0, n.clear(), i = !1, s && (s = !1, d.process(f))
		}
	};
	return d
}
const Lx = 40;

function Pm(e, t) {
	let n = !1,
		r = !0;
	const i = {
			delta: 0,
			timestamp: 0,
			isProcessing: !1
		},
		s = () => n = !0,
		o = Gi.reduce((x, j) => (x[j] = Mx(s, t ? j : void 0), x), {}),
		{
			setup: l,
			read: u,
			resolveKeyframes: c,
			preUpdate: d,
			update: f,
			preRender: p,
			render: g,
			postRender: v
		} = o,
		y = () => {
			const x = wt.useManualTiming ? i.timestamp : performance.now();
			n = !1, wt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Lx), 1)), i.timestamp = x, i.isProcessing = !0, l.process(i), u.process(i), c.process(i), d.process(i), f.process(i), p.process(i), g.process(i), v.process(i), i.isProcessing = !1, n && t && (r = !1, e(y))
		},
		w = () => {
			n = !0, r = !0, i.isProcessing || e(y)
		};
	return {
		schedule: Gi.reduce((x, j) => {
			const N = o[j];
			return x[j] = (C, b = !1, S = !1) => (n || w(), N.schedule(C, b, S)), x
		}, {}),
		cancel: x => {
			for (let j = 0; j < Gi.length; j++) o[Gi[j]].cancel(x)
		},
		state: i,
		steps: o
	}
}
const {
	schedule: U,
	cancel: Kt,
	state: de,
	steps: Ho
} = Pm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let us;

function Rx() {
	us = void 0
}
const Ne = {
		now: () => (us === void 0 && Ne.set(de.isProcessing || wt.useManualTiming ? de.timestamp : performance.now()), us),
		set: e => {
			us = e, queueMicrotask(Rx)
		}
	},
	Em = e => t => typeof t == "string" && t.startsWith(e),
	Du = Em("--"),
	Ax = Em("var(--"),
	Mu = e => Ax(e) ? zx.test(e.split("/*")[0].trim()) : !1,
	zx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	cr = {
		test: e => typeof e == "number",
		parse: parseFloat,
		transform: e => e
	},
	ci = {
		...cr,
		transform: e => vt(0, 1, e)
	},
	Xi = {
		...cr,
		default: 1
	},
	Fr = e => Math.round(e * 1e5) / 1e5,
	Lu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Vx(e) {
	return e == null
}
const Fx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	Ru = (e, t) => n => !!(typeof n == "string" && Fx.test(n) && n.startsWith(e) || t && !Vx(n) && Object.prototype.hasOwnProperty.call(n, t)),
	$m = (e, t, n) => r => {
		if (typeof r != "string") return r;
		const [i, s, o, l] = r.match(Lu);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(s),
			[n]: parseFloat(o),
			alpha: l !== void 0 ? parseFloat(l) : 1
		}
	},
	_x = e => vt(0, 255, e),
	Ko = {
		...cr,
		transform: e => Math.round(_x(e))
	},
	dn = {
		test: Ru("rgb", "red"),
		parse: $m("red", "green", "blue"),
		transform: ({
			red: e,
			green: t,
			blue: n,
			alpha: r = 1
		}) => "rgba(" + Ko.transform(e) + ", " + Ko.transform(t) + ", " + Ko.transform(n) + ", " + Fr(ci.transform(r)) + ")"
	};

function Ix(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	}
}
const rl = {
		test: Ru("#"),
		parse: Ix,
		transform: dn.transform
	},
	Ci = e => ({
		test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`
	}),
	jt = Ci("deg"),
	lt = Ci("%"),
	M = Ci("px"),
	Ox = Ci("vh"),
	Bx = Ci("vw"),
	Cd = {
		...lt,
		parse: e => lt.parse(e) / 100,
		transform: e => lt.transform(e * 100)
	},
	On = {
		test: Ru("hsl", "hue"),
		parse: $m("hue", "saturation", "lightness"),
		transform: ({
			hue: e,
			saturation: t,
			lightness: n,
			alpha: r = 1
		}) => "hsla(" + Math.round(e) + ", " + lt.transform(Fr(t)) + ", " + lt.transform(Fr(n)) + ", " + Fr(ci.transform(r)) + ")"
	},
	ee = {
		test: e => dn.test(e) || rl.test(e) || On.test(e),
		parse: e => dn.test(e) ? dn.parse(e) : On.test(e) ? On.parse(e) : rl.parse(e),
		transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? dn.transform(e) : On.transform(e),
		getAnimatableNone: e => {
			const t = ee.parse(e);
			return t.alpha = 0, ee.transform(t)
		}
	},
	Ux = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Wx(e) {
	var t, n;
	return isNaN(e) && typeof e == "string" && (((t = e.match(Lu)) == null ? void 0 : t.length) || 0) + (((n = e.match(Ux)) == null ? void 0 : n.length) || 0) > 0
}
const Dm = "number",
	Mm = "color",
	Hx = "var",
	Kx = "var(",
	Nd = "${}",
	Gx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function di(e) {
	const t = e.toString(),
		n = [],
		r = {
			color: [],
			number: [],
			var: []
		},
		i = [];
	let s = 0;
	const l = t.replace(Gx, u => (ee.test(u) ? (r.color.push(s), i.push(Mm), n.push(ee.parse(u))) : u.startsWith(Kx) ? (r.var.push(s), i.push(Hx), n.push(u)) : (r.number.push(s), i.push(Dm), n.push(parseFloat(u))), ++s, Nd)).split(Nd);
	return {
		values: n,
		split: l,
		indexes: r,
		types: i
	}
}

function Lm(e) {
	return di(e).values
}

function Rm(e) {
	const {
		split: t,
		types: n
	} = di(e), r = t.length;
	return i => {
		let s = "";
		for (let o = 0; o < r; o++)
			if (s += t[o], i[o] !== void 0) {
				const l = n[o];
				l === Dm ? s += Fr(i[o]) : l === Mm ? s += ee.transform(i[o]) : s += i[o]
			} return s
	}
}
const Xx = e => typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e;

function Yx(e) {
	const t = Lm(e);
	return Rm(e)(t.map(Xx))
}
const Gt = {
	test: Wx,
	parse: Lm,
	createTransformer: Rm,
	getAnimatableNone: Yx
};

function Go(e, t, n) {
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Qx({
	hue: e,
	saturation: t,
	lightness: n,
	alpha: r
}) {
	e /= 360, t /= 100, n /= 100;
	let i = 0,
		s = 0,
		o = 0;
	if (!t) i = s = o = n;
	else {
		const l = n < .5 ? n * (1 + t) : n + t - n * t,
			u = 2 * n - l;
		i = Go(u, l, e + 1 / 3), s = Go(u, l, e), o = Go(u, l, e - 1 / 3)
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(s * 255),
		blue: Math.round(o * 255),
		alpha: r
	}
}

function Is(e, t) {
	return n => n > 0 ? t : e
}
const K = (e, t, n) => e + (t - e) * n,
	Xo = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r;
		return i < 0 ? 0 : Math.sqrt(i)
	},
	Zx = [rl, dn, On],
	qx = e => Zx.find(t => t.test(e));

function Td(e) {
	const t = qx(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === On && (n = Qx(n)), n
}
const Pd = (e, t) => {
		const n = Td(e),
			r = Td(t);
		if (!n || !r) return Is(e, t);
		const i = {
			...n
		};
		return s => (i.red = Xo(n.red, r.red, s), i.green = Xo(n.green, r.green, s), i.blue = Xo(n.blue, r.blue, s), i.alpha = K(n.alpha, r.alpha, s), dn.transform(i))
	},
	il = new Set(["none", "hidden"]);

function Jx(e, t) {
	return il.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function ev(e, t) {
	return n => K(e, t, n)
}

function Au(e) {
	return typeof e == "number" ? ev : typeof e == "string" ? Mu(e) ? Is : ee.test(e) ? Pd : rv : Array.isArray(e) ? Am : typeof e == "object" ? ee.test(e) ? Pd : tv : Is
}

function Am(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((s, o) => Au(s)(s, t[o]));
	return s => {
		for (let o = 0; o < r; o++) n[o] = i[o](s);
		return n
	}
}

function tv(e, t) {
	const n = {
			...e,
			...t
		},
		r = {};
	for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Au(e[i])(e[i], t[i]));
	return i => {
		for (const s in r) n[s] = r[s](i);
		return n
	}
}

function nv(e, t) {
	const n = [],
		r = {
			color: 0,
			var: 0,
			number: 0
		};
	for (let i = 0; i < t.values.length; i++) {
		const s = t.types[i],
			o = e.indexes[s][r[s]],
			l = e.values[o] ?? 0;
		n[i] = l, r[s]++
	}
	return n
}
const rv = (e, t) => {
	const n = Gt.createTransformer(t),
		r = di(e),
		i = di(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? il.has(e) && !i.values.length || il.has(t) && !r.values.length ? Jx(e, t) : ji(Am(nv(r, i), i.values), n) : Is(e, t)
};

function zm(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? K(e, t, n) : Au(e)(e, t)
}
const iv = e => {
		const t = ({
			timestamp: n
		}) => e(n);
		return {
			start: (n = !0) => U.update(t, n),
			stop: () => Kt(t),
			now: () => de.isProcessing ? de.timestamp : Ne.now()
		}
	},
	Vm = (e, t, n = 10) => {
		let r = "";
		const i = Math.max(Math.round(t / n), 2);
		for (let s = 0; s < i; s++) r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
		return `linear(${r.substring(0,r.length-2)})`
	},
	Os = 2e4;

function zu(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < Os;) t += n, r = e.next(t);
	return t >= Os ? 1 / 0 : t
}

function sv(e, t = 100, n) {
	const r = n({
			...e,
			keyframes: [0, t]
		}),
		i = Math.min(zu(r), Os);
	return {
		type: "keyframes",
		ease: s => r.next(i * s).value / t,
		duration: at(i)
	}
}
const ov = 5;

function Fm(e, t, n) {
	const r = Math.max(t - ov, 0);
	return gm(n - e(r), t - r)
}
const Y = {
		stiffness: 100,
		damping: 10,
		mass: 1,
		velocity: 0,
		duration: 800,
		bounce: .3,
		visualDuration: .3,
		restSpeed: {
			granular: .01,
			default: 2
		},
		restDelta: {
			granular: .005,
			default: .5
		},
		minDuration: .01,
		maxDuration: 10,
		minDamping: .05,
		maxDamping: 1
	},
	Yo = .001;

function av({
	duration: e = Y.duration,
	bounce: t = Y.bounce,
	velocity: n = Y.velocity,
	mass: r = Y.mass
}) {
	let i, s, o = 1 - t;
	o = vt(Y.minDamping, Y.maxDamping, o), e = vt(Y.minDuration, Y.maxDuration, at(e)), o < 1 ? (i = c => {
		const d = c * o,
			f = d * e,
			p = d - n,
			g = sl(c, o),
			v = Math.exp(-f);
		return Yo - p / g * v
	}, s = c => {
		const f = c * o * e,
			p = f * n + n,
			g = Math.pow(o, 2) * Math.pow(c, 2) * e,
			v = Math.exp(-f),
			y = sl(Math.pow(c, 2), o);
		return (-i(c) + Yo > 0 ? -1 : 1) * ((p - g) * v) / y
	}) : (i = c => {
		const d = Math.exp(-c * e),
			f = (c - n) * e + 1;
		return -Yo + d * f
	}, s = c => {
		const d = Math.exp(-c * e),
			f = (n - c) * (e * e);
		return d * f
	});
	const l = 5 / e,
		u = uv(i, s, l);
	if (e = ot(e), isNaN(u)) return {
		stiffness: Y.stiffness,
		damping: Y.damping,
		duration: e
	};
	{
		const c = Math.pow(u, 2) * r;
		return {
			stiffness: c,
			damping: o * 2 * Math.sqrt(r * c),
			duration: e
		}
	}
}
const lv = 12;

function uv(e, t, n) {
	let r = n;
	for (let i = 1; i < lv; i++) r = r - e(r) / t(r);
	return r
}

function sl(e, t) {
	return e * Math.sqrt(1 - t * t)
}
const cv = ["duration", "bounce"],
	dv = ["stiffness", "damping", "mass"];

function Ed(e, t) {
	return t.some(n => e[n] !== void 0)
}

function fv(e) {
	let t = {
		velocity: Y.velocity,
		stiffness: Y.stiffness,
		damping: Y.damping,
		mass: Y.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Ed(e, dv) && Ed(e, cv))
		if (e.visualDuration) {
			const n = e.visualDuration,
				r = 2 * Math.PI / (n * 1.2),
				i = r * r,
				s = 2 * vt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = {
				...t,
				mass: Y.mass,
				stiffness: i,
				damping: s
			}
		} else {
			const n = av(e);
			t = {
				...t,
				...n,
				mass: Y.mass
			}, t.isResolvedFromDuration = !0
		} return t
}

function Bs(e = Y.visualDuration, t = Y.bounce) {
	const n = typeof e != "object" ? {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	} : e;
	let {
		restSpeed: r,
		restDelta: i
	} = n;
	const s = n.keyframes[0],
		o = n.keyframes[n.keyframes.length - 1],
		l = {
			done: !1,
			value: s
		},
		{
			stiffness: u,
			damping: c,
			mass: d,
			duration: f,
			velocity: p,
			isResolvedFromDuration: g
		} = fv({
			...n,
			velocity: -at(n.velocity || 0)
		}),
		v = p || 0,
		y = c / (2 * Math.sqrt(u * d)),
		w = o - s,
		h = at(Math.sqrt(u / d)),
		m = Math.abs(w) < 5;
	r || (r = m ? Y.restSpeed.granular : Y.restSpeed.default), i || (i = m ? Y.restDelta.granular : Y.restDelta.default);
	let x;
	if (y < 1) {
		const N = sl(h, y);
		x = C => {
			const b = Math.exp(-y * h * C);
			return o - b * ((v + y * h * w) / N * Math.sin(N * C) + w * Math.cos(N * C))
		}
	} else if (y === 1) x = N => o - Math.exp(-h * N) * (w + (v + h * w) * N);
	else {
		const N = h * Math.sqrt(y * y - 1);
		x = C => {
			const b = Math.exp(-y * h * C),
				S = Math.min(N * C, 300);
			return o - b * ((v + y * h * w) * Math.sinh(S) + N * w * Math.cosh(S)) / N
		}
	}
	const j = {
		calculatedDuration: g && f || null,
		next: N => {
			const C = x(N);
			if (g) l.done = N >= f;
			else {
				let b = N === 0 ? v : 0;
				y < 1 && (b = N === 0 ? ot(v) : Fm(x, N, C));
				const S = Math.abs(b) <= r,
					$ = Math.abs(o - C) <= i;
				l.done = S && $
			}
			return l.value = l.done ? o : C, l
		},
		toString: () => {
			const N = Math.min(zu(j), Os),
				C = Vm(b => j.next(N * b).value, N, 30);
			return N + "ms " + C
		},
		toTransition: () => {}
	};
	return j
}
Bs.applyToOptions = e => {
	const t = sv(e, 100, Bs);
	return e.ease = t.ease, e.duration = ot(t.duration), e.type = "keyframes", e
};

function ol({
	keyframes: e,
	velocity: t = 0,
	power: n = .8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: s = 500,
	modifyTarget: o,
	min: l,
	max: u,
	restDelta: c = .5,
	restSpeed: d
}) {
	const f = e[0],
		p = {
			done: !1,
			value: f
		},
		g = S => l !== void 0 && S < l || u !== void 0 && S > u,
		v = S => l === void 0 ? u : u === void 0 || Math.abs(l - S) < Math.abs(u - S) ? l : u;
	let y = n * t;
	const w = f + y,
		h = o === void 0 ? w : o(w);
	h !== w && (y = h - f);
	const m = S => -y * Math.exp(-S / r),
		x = S => h + m(S),
		j = S => {
			const $ = m(S),
				E = x(S);
			p.done = Math.abs($) <= c, p.value = p.done ? h : E
		};
	let N, C;
	const b = S => {
		g(p.value) && (N = S, C = Bs({
			keyframes: [p.value, v(p.value)],
			velocity: Fm(x, S, p.value),
			damping: i,
			stiffness: s,
			restDelta: c,
			restSpeed: d
		}))
	};
	return b(0), {
		calculatedDuration: null,
		next: S => {
			let $ = !1;
			return !C && N === void 0 && ($ = !0, j(S), b(S)), N !== void 0 && S >= N ? C.next(S - N) : (!$ && j(S), p)
		}
	}
}

function pv(e, t, n) {
	const r = [],
		i = n || wt.mix || zm,
		s = e.length - 1;
	for (let o = 0; o < s; o++) {
		let l = i(e[o], e[o + 1]);
		if (t) {
			const u = Array.isArray(t) ? t[o] || Ue : t;
			l = ji(u, l)
		}
		r.push(l)
	}
	return r
}

function hv(e, t, {
	clamp: n = !0,
	ease: r,
	mixer: i
} = {}) {
	const s = e.length;
	if (_s(s === t.length), s === 1) return () => t[0];
	if (s === 2 && t[0] === t[1]) return () => t[1];
	const o = e[0] === e[1];
	e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
	const l = pv(t, r, i),
		u = l.length,
		c = d => {
			if (o && d < e[0]) return t[0];
			let f = 0;
			if (u > 1)
				for (; f < e.length - 2 && !(d < e[f + 1]); f++);
			const p = ui(e[f], e[f + 1], d);
			return l[f](p)
		};
	return n ? d => c(vt(e[0], e[s - 1], d)) : c
}

function mv(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = ui(0, t, r);
		e.push(K(n, 1, i))
	}
}

function yv(e) {
	const t = [0];
	return mv(t, e.length - 1), t
}

function gv(e, t) {
	return e.map(n => n * t)
}

function xv(e, t) {
	return e.map(() => t || Nm).splice(0, e.length - 1)
}

function _r({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = "easeInOut"
}) {
	const i = $x(r) ? r.map(jd) : jd(r),
		s = {
			done: !1,
			value: t[0]
		},
		o = gv(n && n.length === t.length ? n : yv(t), e),
		l = hv(o, t, {
			ease: Array.isArray(i) ? i : xv(t, i)
		});
	return {
		calculatedDuration: e,
		next: u => (s.value = l(u), s.done = u >= e, s)
	}
}
const vv = e => e !== null;

function Vu(e, {
	repeat: t,
	repeatType: n = "loop"
}, r, i = 1) {
	const s = e.filter(vv),
		l = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
	return !l || r === void 0 ? s[l] : r
}
const wv = {
	decay: ol,
	inertia: ol,
	tween: _r,
	keyframes: _r,
	spring: Bs
};

function _m(e) {
	typeof e.type == "string" && (e.type = wv[e.type])
}
class Fu {
	constructor() {
		this.updateFinished()
	}
	get finished() {
		return this._finished
	}
	updateFinished() {
		this._finished = new Promise(t => {
			this.resolve = t
		})
	}
	notifyFinished() {
		this.resolve()
	}
	then(t, n) {
		return this.finished.then(t, n)
	}
}
const bv = e => e / 100;
class _u extends Fu {
	constructor(t) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			var r, i;
			const {
				motionValue: n
			} = this.options;
			n && n.updatedAt !== Ne.now() && this.tick(Ne.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r))
		}, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
	}
	initAnimation() {
		const {
			options: t
		} = this;
		_m(t);
		const {
			type: n = _r,
			repeat: r = 0,
			repeatDelay: i = 0,
			repeatType: s,
			velocity: o = 0
		} = t;
		let {
			keyframes: l
		} = t;
		const u = n || _r;
		u !== _r && typeof l[0] != "number" && (this.mixKeyframes = ji(bv, zm(l[0], l[1])), l = [0, 100]);
		const c = u({
			...t,
			keyframes: l
		});
		s === "mirror" && (this.mirroredGenerator = u({
			...t,
			keyframes: [...l].reverse(),
			velocity: -o
		})), c.calculatedDuration === null && (c.calculatedDuration = zu(c));
		const {
			calculatedDuration: d
		} = c;
		this.calculatedDuration = d, this.resolvedDuration = d + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = c
	}
	updateTime(t) {
		const n = Math.round(t - this.startTime) * this.playbackSpeed;
		this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
	}
	tick(t, n = !1) {
		const {
			generator: r,
			totalDuration: i,
			mixKeyframes: s,
			mirroredGenerator: o,
			resolvedDuration: l,
			calculatedDuration: u
		} = this;
		if (this.startTime === null) return r.next(0);
		const {
			delay: c = 0,
			keyframes: d,
			repeat: f,
			repeatType: p,
			repeatDelay: g,
			type: v,
			onUpdate: y,
			finalKeyframe: w
		} = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
		const h = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
			m = this.playbackSpeed >= 0 ? h < 0 : h > i;
		this.currentTime = Math.max(h, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
		let x = this.currentTime,
			j = r;
		if (f) {
			const S = Math.min(this.currentTime, i) / l;
			let $ = Math.floor(S),
				E = S % 1;
			!E && S >= 1 && (E = 1), E === 1 && $--, $ = Math.min($, f + 1), !!($ % 2) && (p === "reverse" ? (E = 1 - E, g && (E -= g / l)) : p === "mirror" && (j = o)), x = vt(0, 1, E) * l
		}
		const N = m ? {
			done: !1,
			value: d[0]
		} : j.next(x);
		s && (N.value = s(N.value));
		let {
			done: C
		} = N;
		!m && u !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
		const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
		return b && v !== ol && (N.value = Vu(d, this.options, w, this.speed)), y && y(N.value), b && this.finish(), N
	}
	then(t, n) {
		return this.finished.then(t, n)
	}
	get duration() {
		return at(this.calculatedDuration)
	}
	get time() {
		return at(this.currentTime)
	}
	set time(t) {
		var n;
		t = ot(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1)
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(t) {
		this.updateTime(Ne.now());
		const n = this.playbackSpeed !== t;
		this.playbackSpeed = t, n && (this.time = at(this.currentTime))
	}
	play() {
		var i, s;
		if (this.isStopped) return;
		const {
			driver: t = iv,
			startTime: n
		} = this.options;
		this.driver || (this.driver = t(o => this.tick(o))), (s = (i = this.options).onPlay) == null || s.call(i);
		const r = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
	}
	pause() {
		this.state = "paused", this.updateTime(Ne.now()), this.holdTime = this.currentTime
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
	}
	finish() {
		var t, n;
		this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t)
	}
	cancel() {
		var t, n;
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t)
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
	}
	stopDriver() {
		this.driver && (this.driver.stop(), this.driver = void 0)
	}
	sample(t) {
		return this.startTime = 0, this.tick(t, !0)
	}
	attachTimeline(t) {
		var n;
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this)
	}
}

function kv(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
}
const fn = e => e * 180 / Math.PI,
	al = e => {
		const t = fn(Math.atan2(e[1], e[0]));
		return ll(t)
	},
	jv = {
		x: 4,
		y: 5,
		translateX: 4,
		translateY: 5,
		scaleX: 0,
		scaleY: 3,
		scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
		rotate: al,
		rotateZ: al,
		skewX: e => fn(Math.atan(e[1])),
		skewY: e => fn(Math.atan(e[2])),
		skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
	},
	ll = e => (e = e % 360, e < 0 && (e += 360), e),
	$d = al,
	Dd = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
	Md = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
	Sv = {
		x: 12,
		y: 13,
		z: 14,
		translateX: 12,
		translateY: 13,
		translateZ: 14,
		scaleX: Dd,
		scaleY: Md,
		scale: e => (Dd(e) + Md(e)) / 2,
		rotateX: e => ll(fn(Math.atan2(e[6], e[5]))),
		rotateY: e => ll(fn(Math.atan2(-e[2], e[0]))),
		rotateZ: $d,
		rotate: $d,
		skewX: e => fn(Math.atan(e[4])),
		skewY: e => fn(Math.atan(e[1])),
		skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
	};

function ul(e) {
	return e.includes("scale") ? 1 : 0
}

function cl(e, t) {
	if (!e || e === "none") return ul(t);
	const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let r, i;
	if (n) r = Sv, i = n;
	else {
		const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = jv, i = l
	}
	if (!i) return ul(t);
	const s = r[t],
		o = i[1].split(",").map(Nv);
	return typeof s == "function" ? s(o) : o[s]
}
const Cv = (e, t) => {
	const {
		transform: n = "none"
	} = getComputedStyle(e);
	return cl(n, t)
};

function Nv(e) {
	return parseFloat(e.trim())
}
const dr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
	fr = new Set(dr),
	Ld = e => e === cr || e === M,
	Tv = new Set(["x", "y", "z"]),
	Pv = dr.filter(e => !Tv.has(e));

function Ev(e) {
	const t = [];
	return Pv.forEach(n => {
		const r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
	}), t
}
const mn = {
	width: ({
		x: e
	}, {
		paddingLeft: t = "0",
		paddingRight: n = "0"
	}) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({
		y: e
	}, {
		paddingTop: t = "0",
		paddingBottom: n = "0"
	}) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, {
		top: t
	}) => parseFloat(t),
	left: (e, {
		left: t
	}) => parseFloat(t),
	bottom: ({
		y: e
	}, {
		top: t
	}) => parseFloat(t) + (e.max - e.min),
	right: ({
		x: e
	}, {
		left: t
	}) => parseFloat(t) + (e.max - e.min),
	x: (e, {
		transform: t
	}) => cl(t, "x"),
	y: (e, {
		transform: t
	}) => cl(t, "y")
};
mn.translateX = mn.x;
mn.translateY = mn.y;
const yn = new Set;
let dl = !1,
	fl = !1,
	pl = !1;

function Im() {
	if (fl) {
		const e = Array.from(yn).filter(r => r.needsMeasurement),
			t = new Set(e.map(r => r.element)),
			n = new Map;
		t.forEach(r => {
			const i = Ev(r);
			i.length && (n.set(r, i), r.render())
		}), e.forEach(r => r.measureInitialState()), t.forEach(r => {
			r.render();
			const i = n.get(r);
			i && i.forEach(([s, o]) => {
				var l;
				(l = r.getValue(s)) == null || l.set(o)
			})
		}), e.forEach(r => r.measureEndState()), e.forEach(r => {
			r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
		})
	}
	fl = !1, dl = !1, yn.forEach(e => e.complete(pl)), yn.clear()
}

function Om() {
	yn.forEach(e => {
		e.readKeyframes(), e.needsMeasurement && (fl = !0)
	})
}

function $v() {
	pl = !0, Om(), Im(), pl = !1
}
class Iu {
	constructor(t, n, r, i, s, o = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (yn.add(this), dl || (dl = !0, U.read(Om), U.resolveKeyframes(Im))) : (this.readKeyframes(), this.complete())
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i
		} = this;
		if (t[0] === null) {
			const s = i == null ? void 0 : i.get(),
				o = t[t.length - 1];
			if (s !== void 0) t[0] = s;
			else if (r && n) {
				const l = r.readValue(n, o);
				l != null && (t[0] = l)
			}
			t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0])
		}
		kv(t)
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(t = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), yn.delete(this)
	}
	cancel() {
		this.state === "scheduled" && (yn.delete(this), this.state = "pending")
	}
	resume() {
		this.state === "pending" && this.scheduleResolve()
	}
}
const Dv = e => e.startsWith("--");

function Mv(e, t, n) {
	Dv(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const Lv = Tu(() => window.ScrollTimeline !== void 0),
	Rv = {};

function Av(e, t) {
	const n = Tu(e);
	return () => Rv[t] ?? n()
}
const Bm = Av(() => {
		try {
			document.createElement("div").animate({
				opacity: 0
			}, {
				easing: "linear(0, 1)"
			})
		} catch {
			return !1
		}
		return !0
	}, "linearEasing"),
	Tr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	Rd = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: Tr([0, .65, .55, 1]),
		circOut: Tr([.55, 0, 1, .45]),
		backIn: Tr([.31, .01, .66, -.59]),
		backOut: Tr([.33, 1.53, .69, .99])
	};

function Um(e, t) {
	if (e) return typeof e == "function" ? Bm() ? Vm(e, t) : "ease-out" : Tm(e) ? Tr(e) : Array.isArray(e) ? e.map(n => Um(n, t) || Rd.easeOut) : Rd[e]
}

function zv(e, t, n, {
	delay: r = 0,
	duration: i = 300,
	repeat: s = 0,
	repeatType: o = "loop",
	ease: l = "easeOut",
	times: u
} = {}, c = void 0) {
	const d = {
		[t]: n
	};
	u && (d.offset = u);
	const f = Um(l, i);
	Array.isArray(f) && (d.easing = f);
	const p = {
		delay: r,
		duration: i,
		easing: Array.isArray(f) ? "linear" : f,
		fill: "both",
		iterations: s + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return c && (p.pseudoElement = c), e.animate(d, p)
}

function Wm(e) {
	return typeof e == "function" && "applyToOptions" in e
}

function Vv({
	type: e,
	...t
}) {
	return Wm(e) && Bm() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
}
class Fv extends Fu {
	constructor(t) {
		if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
		const {
			element: n,
			name: r,
			keyframes: i,
			pseudoElement: s,
			allowFlatten: o = !1,
			finalKeyframe: l,
			onComplete: u
		} = t;
		this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, _s(typeof t.type != "string");
		const c = Vv(t);
		this.animation = zv(n, r, i, c, s), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !s) {
				const d = Vu(i, this.options, l, this.speed);
				this.updateMotionValue ? this.updateMotionValue(d) : Mv(n, r, d), this.animation.cancel()
			}
			u == null || u(), this.notifyFinished()
		}
	}
	play() {
		this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
	}
	pause() {
		this.animation.pause()
	}
	complete() {
		var t, n;
		(n = (t = this.animation).finish) == null || n.call(t)
	}
	cancel() {
		try {
			this.animation.cancel()
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		const {
			state: t
		} = this;
		t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
	}
	commitStyles() {
		var t, n;
		this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
	}
	get duration() {
		var n, r;
		const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
		return at(Number(t))
	}
	get time() {
		return at(Number(this.animation.currentTime) || 0)
	}
	set time(t) {
		this.finishedTime = null, this.animation.currentTime = ot(t)
	}
	get speed() {
		return this.animation.playbackRate
	}
	set speed(t) {
		t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState
	}
	get startTime() {
		return Number(this.animation.startTime)
	}
	set startTime(t) {
		this.animation.startTime = t
	}
	attachTimeline({
		timeline: t,
		observe: n
	}) {
		var r;
		return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
			easing: "linear"
		})), this.animation.onfinish = null, t && Lv() ? (this.animation.timeline = t, Ue) : n(this)
	}
}
const Hm = {
	anticipate: jm,
	backInOut: km,
	circInOut: Cm
};

function _v(e) {
	return e in Hm
}

function Iv(e) {
	typeof e.ease == "string" && _v(e.ease) && (e.ease = Hm[e.ease])
}
const Ad = 10;
class Ov extends Fv {
	constructor(t) {
		Iv(t), _m(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
	}
	updateMotionValue(t) {
		const {
			motionValue: n,
			onUpdate: r,
			onComplete: i,
			element: s,
			...o
		} = this.options;
		if (!n) return;
		if (t !== void 0) {
			n.set(t);
			return
		}
		const l = new _u({
				...o,
				autoplay: !1
			}),
			u = ot(this.finishedTime ?? this.time);
		n.setWithVelocity(l.sample(u - Ad).value, l.sample(u).value, Ad), l.stop()
	}
}
const zd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Gt.test(e) || e === "0") && !e.startsWith("url("));

function Bv(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++)
		if (e[n] !== t) return !0
}

function Uv(e, t, n, r) {
	const i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	const s = e[e.length - 1],
		o = zd(i, t),
		l = zd(s, t);
	return !o || !l ? !1 : Bv(e) || (n === "spring" || Wm(n)) && r
}

function Ou(e) {
	return mm(e) && "offsetHeight" in e
}
const Hv = Tu(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
const Wv = new Set(["opacity", "transform", "filter", "clipPath"]);

function Kv(e) {
	var c;
	const {
		motionValue: t,
		name: n,
		repeatDelay: r,
		repeatType: i,
		damping: s,
		type: o
	} = e;
	if (!Ou((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)) return !1;
	const {
		onUpdate: l,
		transformTemplate: u
	} = t.owner.getProps();
	return Hv() && n && Wv.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const Gv = 40;
class Xv extends Fu {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = "keyframes",
		repeat: i = 0,
		repeatDelay: s = 0,
		repeatType: o = "loop",
		keyframes: l,
		name: u,
		motionValue: c,
		element: d,
		...f
	}) {
		var v;
		super(), this.stop = () => {
			var y, w;
			this._animation && (this._animation.stop(), (y = this.stopTimeline) == null || y.call(this)), (w = this.keyframeResolver) == null || w.cancel()
		}, this.createdAt = Ne.now();
		const p = {
				autoplay: t,
				delay: n,
				type: r,
				repeat: i,
				repeatDelay: s,
				repeatType: o,
				name: u,
				motionValue: c,
				element: d,
				...f
			},
			g = (d == null ? void 0 : d.KeyframeResolver) || Iu;
		this.keyframeResolver = new g(l, (y, w, h) => this.onKeyframesResolved(y, w, p, !h), u, c, d), (v = this.keyframeResolver) == null || v.scheduleResolve()
	}
	onKeyframesResolved(t, n, r, i) {
		this.keyframeResolver = void 0;
		const {
			name: s,
			type: o,
			velocity: l,
			delay: u,
			isHandoff: c,
			onUpdate: d
		} = r;
		this.resolvedAt = Ne.now(), Uv(t, s, o, l) || ((wt.instantAnimations || !u) && (d == null || d(Vu(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
		const p = {
				startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Gv ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
				finalKeyframe: n,
				...r,
				keyframes: t
			},
			g = !c && Kv(p) ? new Ov({
				...p,
				element: p.motionValue.owner.current
			}) : new _u(p);
		g.finished.then(() => this.notifyFinished()).catch(Ue), this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = g
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished
	}
	then(t, n) {
		return this.finished.finally(t).then(() => {})
	}
	get animation() {
		var t;
		return this._animation || ((t = this.keyframeResolver) == null || t.resume(), $v()), this._animation
	}
	get duration() {
		return this.animation.duration
	}
	get time() {
		return this.animation.time
	}
	set time(t) {
		this.animation.time = t
	}
	get speed() {
		return this.animation.speed
	}
	get state() {
		return this.animation.state
	}
	set speed(t) {
		this.animation.speed = t
	}
	get startTime() {
		return this.animation.startTime
	}
	attachTimeline(t) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
	}
	play() {
		this.animation.play()
	}
	pause() {
		this.animation.pause()
	}
	complete() {
		this.animation.complete()
	}
	cancel() {
		var t;
		this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel()
	}
}
const Yv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Qv(e) {
	const t = Yv.exec(e);
	if (!t) return [, ];
	const [, n, r, i] = t;
	return [`--${n??r}`, i]
}

function Km(e, t, n = 1) {
	const [r, i] = Qv(e);
	if (!r) return;
	const s = window.getComputedStyle(t).getPropertyValue(r);
	if (s) {
		const o = s.trim();
		return hm(o) ? parseFloat(o) : o
	}
	return Mu(i) ? Km(i, t, n + 1) : i
}

function Bu(e, t) {
	return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const Gm = new Set(["width", "height", "top", "left", "right", "bottom", ...dr]),
	Zv = {
		test: e => e === "auto",
		parse: e => e
	},
	Xm = e => t => t.test(e),
	Ym = [cr, M, lt, jt, Bx, Ox, Zv],
	Vd = e => Ym.find(Xm(e));

function qv(e) {
	return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ym(e) : !0
}
const Jv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function e2(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(Lu) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let s = Jv.has(t) ? 1 : 0;
	return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const t2 = /\b([a-z-]*)\(.*?\)/gu,
	hl = {
		...Gt,
		getAnimatableNone: e => {
			const t = e.match(t2);
			return t ? t.map(e2).join(" ") : e
		}
	},
	Fd = {
		...cr,
		transform: Math.round
	},
	n2 = {
		rotate: jt,
		rotateX: jt,
		rotateY: jt,
		rotateZ: jt,
		scale: Xi,
		scaleX: Xi,
		scaleY: Xi,
		scaleZ: Xi,
		skew: jt,
		skewX: jt,
		skewY: jt,
		distance: M,
		translateX: M,
		translateY: M,
		translateZ: M,
		x: M,
		y: M,
		z: M,
		perspective: M,
		transformPerspective: M,
		opacity: ci,
		originX: Cd,
		originY: Cd,
		originZ: M
	},
	Uu = {
		borderWidth: M,
		borderTopWidth: M,
		borderRightWidth: M,
		borderBottomWidth: M,
		borderLeftWidth: M,
		borderRadius: M,
		radius: M,
		borderTopLeftRadius: M,
		borderTopRightRadius: M,
		borderBottomRightRadius: M,
		borderBottomLeftRadius: M,
		width: M,
		maxWidth: M,
		height: M,
		maxHeight: M,
		top: M,
		right: M,
		bottom: M,
		left: M,
		padding: M,
		paddingTop: M,
		paddingRight: M,
		paddingBottom: M,
		paddingLeft: M,
		margin: M,
		marginTop: M,
		marginRight: M,
		marginBottom: M,
		marginLeft: M,
		backgroundPositionX: M,
		backgroundPositionY: M,
		...n2,
		zIndex: Fd,
		fillOpacity: ci,
		strokeOpacity: ci,
		numOctaves: Fd
	},
	r2 = {
		...Uu,
		color: ee,
		backgroundColor: ee,
		outlineColor: ee,
		fill: ee,
		stroke: ee,
		borderColor: ee,
		borderTopColor: ee,
		borderRightColor: ee,
		borderBottomColor: ee,
		borderLeftColor: ee,
		filter: hl,
		WebkitFilter: hl
	},
	Qm = e => r2[e];

function Zm(e, t) {
	let n = Qm(e);
	return n !== hl && (n = Gt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const i2 = new Set(["auto", "none", "0"]);

function s2(e, t, n) {
	let r = 0,
		i;
	for (; r < e.length && !i;) {
		const s = e[r];
		typeof s == "string" && !i2.has(s) && di(s).values.length && (i = e[r]), r++
	}
	if (i && n)
		for (const s of t) e[s] = Zm(n, i)
}
class o2 extends Iu {
	constructor(t, n, r, i, s) {
		super(t, n, r, i, s, !0)
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			element: n,
			name: r
		} = this;
		if (!n || !n.current) return;
		super.readKeyframes();
		for (let u = 0; u < t.length; u++) {
			let c = t[u];
			if (typeof c == "string" && (c = c.trim(), Mu(c))) {
				const d = Km(c, n.current);
				d !== void 0 && (t[u] = d), u === t.length - 1 && (this.finalKeyframe = c)
			}
		}
		if (this.resolveNoneKeyframes(), !Gm.has(r) || t.length !== 2) return;
		const [i, s] = t, o = Vd(i), l = Vd(s);
		if (o !== l)
			if (Ld(o) && Ld(l))
				for (let u = 0; u < t.length; u++) {
					const c = t[u];
					typeof c == "string" && (t[u] = parseFloat(c))
				} else mn[r] && (this.needsMeasurement = !0)
	}
	resolveNoneKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n
		} = this, r = [];
		for (let i = 0; i < t.length; i++)(t[i] === null || qv(t[i])) && r.push(i);
		r.length && s2(t, r, n)
	}
	measureInitialState() {
		const {
			element: t,
			unresolvedKeyframes: n,
			name: r
		} = this;
		if (!t || !t.current) return;
		r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = mn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
		const i = n[n.length - 1];
		i !== void 0 && t.getValue(r, i).jump(i, !1)
	}
	measureEndState() {
		var l;
		const {
			element: t,
			name: n,
			unresolvedKeyframes: r
		} = this;
		if (!t || !t.current) return;
		const i = t.getValue(n);
		i && i.jump(this.measuredOrigin, !1);
		const s = r.length - 1,
			o = r[s];
		r[s] = mn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (l = this.removedTransforms) != null && l.length && this.removedTransforms.forEach(([u, c]) => {
			t.getValue(u).set(c)
		}), this.resolveNoneKeyframes()
	}
}

function a2(e, t, n) {
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		const i = document.querySelectorAll(e);
		return i ? Array.from(i) : []
	}
	return Array.from(e)
}
const qm = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
	_d = 30,
	l2 = e => !isNaN(parseFloat(e));
class u2 {
	constructor(t, n = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
			var o, l;
			const s = Ne.now();
			if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current), this.dependents))
				for (const u of this.dependents) u.dirty();
			i && ((l = this.events.renderRequest) == null || l.notify(this.current))
		}, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
	}
	setCurrent(t) {
		this.current = t, this.updatedAt = Ne.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = l2(this.current))
	}
	setPrevFrameValue(t = this.current) {
		this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
	}
	onChange(t) {
		return this.on("change", t)
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new Pu);
		const r = this.events[t].add(n);
		return t === "change" ? () => {
			r(), U.read(() => {
				this.events.change.getSize() || this.stop()
			})
		} : r
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear()
	}
	attach(t, n) {
		this.passiveEffect = t, this.stopPassiveEffect = n
	}
	set(t, n = !0) {
		!n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
	}
	setWithVelocity(t, n, r) {
		this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
	}
	jump(t, n = !0) {
		this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
	dirty() {
		var t;
		(t = this.events.change) == null || t.notify(this.current)
	}
	addDependent(t) {
		this.dependents || (this.dependents = new Set), this.dependents.add(t)
	}
	removeDependent(t) {
		this.dependents && this.dependents.delete(t)
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const t = Ne.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > _d) return 0;
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, _d);
		return gm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
	}
	start(t) {
		return this.stop(), new Promise(n => {
			this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
		})
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		var t, n;
		(t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
}

function sr(e, t) {
	return new u2(e, t)
}
const {
	schedule: Wu,
	cancel: Jb
} = Pm(queueMicrotask, !1), Ge = {
	x: !1,
	y: !1
};

function Jm() {
	return Ge.x || Ge.y
}

function c2(e) {
	return e === "x" || e === "y" ? Ge[e] ? null : (Ge[e] = !0, () => {
		Ge[e] = !1
	}) : Ge.x || Ge.y ? null : (Ge.x = Ge.y = !0, () => {
		Ge.x = Ge.y = !1
	})
}

function e0(e, t) {
	const n = a2(e),
		r = new AbortController,
		i = {
			passive: !0,
			...t,
			signal: r.signal
		};
	return [n, i, () => r.abort()]
}

function Id(e) {
	return !(e.pointerType === "touch" || Jm())
}

function d2(e, t, n = {}) {
	const [r, i, s] = e0(e, n), o = l => {
		if (!Id(l)) return;
		const {
			target: u
		} = l, c = t(u, l);
		if (typeof c != "function" || !u) return;
		const d = f => {
			Id(f) && (c(f), u.removeEventListener("pointerleave", d))
		};
		u.addEventListener("pointerleave", d, i)
	};
	return r.forEach(l => {
		l.addEventListener("pointerenter", o, i)
	}), s
}
const t0 = (e, t) => t ? e === t ? !0 : t0(e, t.parentElement) : !1,
	Hu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
	f2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function p2(e) {
	return f2.has(e.tagName) || e.tabIndex !== -1
}
const cs = new WeakSet;

function Od(e) {
	return t => {
		t.key === "Enter" && e(t)
	}
}

function Qo(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}))
}
const h2 = (e, t) => {
	const n = e.currentTarget;
	if (!n) return;
	const r = Od(() => {
		if (cs.has(n)) return;
		Qo(n, "down");
		const i = Od(() => {
				Qo(n, "up")
			}),
			s = () => Qo(n, "cancel");
		n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t)
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function Bd(e) {
	return Hu(e) && !Jm()
}

function m2(e, t, n = {}) {
	const [r, i, s] = e0(e, n), o = l => {
		const u = l.currentTarget;
		if (!Bd(l)) return;
		cs.add(u);
		const c = t(u, l),
			d = (g, v) => {
				window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", p), cs.has(u) && cs.delete(u), Bd(g) && typeof c == "function" && c(g, {
					success: v
				})
			},
			f = g => {
				d(g, u === window || u === document || n.useGlobalTarget || t0(u, g.target))
			},
			p = g => {
				d(g, !1)
			};
		window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", p, i)
	};
	return r.forEach(l => {
		(n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i), Ou(l) && (l.addEventListener("focus", c => h2(c, i)), !p2(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0))
	}), s
}

function n0(e) {
	return mm(e) && "ownerSVGElement" in e
}

function y2(e) {
	return n0(e) && e.tagName === "svg"
}
const ge = e => !!(e && e.getVelocity),
	g2 = [...Ym, ee, Gt],
	x2 = e => g2.find(Xm(e)),
	Ku = k.createContext({
		transformPagePoint: e => e,
		isStatic: !1,
		reducedMotion: "never"
	});
class v2 extends k.Component {
	getSnapshotBeforeUpdate(t) {
		const n = this.props.childRef.current;
		if (n && t.isPresent && !this.props.isPresent) {
			const r = n.offsetParent,
				i = Ou(r) && r.offsetWidth || 0,
				s = this.props.sizeRef.current;
			s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = i - s.width - s.left
		}
		return null
	}
	componentDidUpdate() {}
	render() {
		return this.props.children
	}
}

function w2({
	children: e,
	isPresent: t,
	anchorX: n,
	root: r
}) {
	const i = k.useId(),
		s = k.useRef(null),
		o = k.useRef({
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			right: 0
		}),
		{
			nonce: l
		} = k.useContext(Ku);
	return k.useInsertionEffect(() => {
		const {
			width: u,
			height: c,
			top: d,
			left: f,
			right: p
		} = o.current;
		if (t || !s.current || !u || !c) return;
		const g = n === "left" ? `left: ${f}` : `right: ${p}`;
		s.current.dataset.motionPopId = i;
		const v = document.createElement("style");
		l && (v.nonce = l);
		const y = r ?? document.head;
		return y.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${g}px !important;
            top: ${d}px !important;
          }
        `), () => {
			y.removeChild(v), y.contains(v) && y.removeChild(v)
		}
	}, [t]), a.jsx(v2, {
		isPresent: t,
		childRef: s,
		sizeRef: o,
		children: k.cloneElement(e, {
			ref: s
		})
	})
}
const b2 = ({
	children: e,
	initial: t,
	isPresent: n,
	onExitComplete: r,
	custom: i,
	presenceAffectsLayout: s,
	mode: o,
	anchorX: l,
	root: u
}) => {
	const c = ju(k2),
		d = k.useId();
	let f = !0,
		p = k.useMemo(() => (f = !1, {
			id: d,
			initial: t,
			isPresent: n,
			custom: i,
			onExitComplete: g => {
				c.set(g, !0);
				for (const v of c.values())
					if (!v) return;
				r && r()
			},
			register: g => (c.set(g, !1), () => c.delete(g))
		}), [n, c, r]);
	return s && f && (p = {
		...p
	}), k.useMemo(() => {
		c.forEach((g, v) => c.set(v, !1))
	}, [n]), k.useEffect(() => {
		!n && !c.size && r && r()
	}, [n]), o === "popLayout" && (e = a.jsx(w2, {
		isPresent: n,
		anchorX: l,
		root: u,
		children: e
	})), a.jsx(po.Provider, {
		value: p,
		children: e
	})
};

function k2() {
	return new Map
}

function r0(e = !0) {
	const t = k.useContext(po);
	if (t === null) return [!0, null];
	const {
		isPresent: n,
		onExitComplete: r,
		register: i
	} = t, s = k.useId();
	k.useEffect(() => {
		if (e) return i(s)
	}, [e]);
	const o = k.useCallback(() => e && r && r(s), [s, r, e]);
	return !n && r ? [!1, o] : [!0]
}
const Yi = e => e.key || "";

function Ud(e) {
	const t = [];
	return k.Children.forEach(e, n => {
		k.isValidElement(n) && t.push(n)
	}), t
}
const j2 = ({
		children: e,
		custom: t,
		initial: n = !0,
		onExitComplete: r,
		presenceAffectsLayout: i = !0,
		mode: s = "sync",
		propagate: o = !1,
		anchorX: l = "left",
		root: u
	}) => {
		const [c, d] = r0(o), f = k.useMemo(() => Ud(e), [e]), p = o && !c ? [] : f.map(Yi), g = k.useRef(!0), v = k.useRef(f), y = ju(() => new Map), [w, h] = k.useState(f), [m, x] = k.useState(f);
		pm(() => {
			g.current = !1, v.current = f;
			for (let C = 0; C < m.length; C++) {
				const b = Yi(m[C]);
				p.includes(b) ? y.delete(b) : y.get(b) !== !0 && y.set(b, !1)
			}
		}, [m, p.length, p.join("-")]);
		const j = [];
		if (f !== w) {
			let C = [...f];
			for (let b = 0; b < m.length; b++) {
				const S = m[b],
					$ = Yi(S);
				p.includes($) || (C.splice(b, 0, S), j.push(S))
			}
			return s === "wait" && j.length && (C = j), x(Ud(C)), h(f), null
		}
		const {
			forceRender: N
		} = k.useContext(ku);
		return a.jsx(a.Fragment, {
			children: m.map(C => {
				const b = Yi(C),
					S = o && !c ? !1 : f === m || p.includes(b),
					$ = () => {
						if (y.has(b)) y.set(b, !0);
						else return;
						let E = !0;
						y.forEach(W => {
							W || (E = !1)
						}), E && (N == null || N(), x(v.current), o && (d == null || d()), r && r())
					};
				return a.jsx(b2, {
					isPresent: S,
					initial: !g.current || n ? void 0 : !1,
					custom: t,
					presenceAffectsLayout: i,
					mode: s,
					root: u,
					onExitComplete: S ? void 0 : $,
					anchorX: l,
					children: C
				}, b)
			})
		})
	},
	i0 = k.createContext({
		strict: !1
	}),
	Wd = {
		animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"]
	},
	or = {};
for (const e in Wd) or[e] = {
	isEnabled: t => Wd[e].some(n => !!t[n])
};

function S2(e) {
	for (const t in e) or[t] = {
		...or[t],
		...e[t]
	}
}
const C2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Us(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || C2.has(e)
}
let s0 = e => !Us(e);

function N2(e) {
	typeof e == "function" && (s0 = t => t.startsWith("on") ? !Us(t) : e(t))
}
try {
	N2(require("@emotion/is-prop-valid").default)
} catch {}

function T2(e, t, n) {
	const r = {};
	for (const i in e) i === "values" && typeof e.values == "object" || (s0(i) || n === !0 && Us(i) || !t && !Us(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r
}

function P2(e) {
	if (typeof Proxy > "u") return e;
	const t = new Map,
		n = (...r) => e(...r);
	return new Proxy(n, {
		get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
	})
}
const ho = k.createContext({});

function mo(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function"
}

function fi(e) {
	return typeof e == "string" || Array.isArray(e)
}
const Gu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
	Xu = ["initial", ...Gu];

function yo(e) {
	return mo(e.animate) || Xu.some(t => fi(e[t]))
}

function o0(e) {
	return !!(yo(e) || e.variants)
}

function E2(e, t) {
	if (yo(e)) {
		const {
			initial: n,
			animate: r
		} = e;
		return {
			initial: n === !1 || fi(n) ? n : void 0,
			animate: fi(r) ? r : void 0
		}
	}
	return e.inherit !== !1 ? t : {}
}

function $2(e) {
	const {
		initial: t,
		animate: n
	} = E2(e, k.useContext(ho));
	return k.useMemo(() => ({
		initial: t,
		animate: n
	}), [Hd(t), Hd(n)])
}

function Hd(e) {
	return Array.isArray(e) ? e.join(" ") : e
}
const D2 = Symbol.for("motionComponentSymbol");

function Bn(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function M2(e, t, n) {
	return k.useCallback(r => {
		r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Bn(n) && (n.current = r))
	}, [t])
}
const Yu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	L2 = "framerAppearId",
	a0 = "data-" + Yu(L2),
	l0 = k.createContext({});

function R2(e, t, n, r, i) {
	var y, w;
	const {
		visualElement: s
	} = k.useContext(ho), o = k.useContext(i0), l = k.useContext(po), u = k.useContext(Ku).reducedMotion, c = k.useRef(null);
	r = r || o.renderer, !c.current && r && (c.current = r(e, {
		visualState: t,
		parent: s,
		props: n,
		presenceContext: l,
		blockInitialAnimation: l ? l.initial === !1 : !1,
		reducedMotionConfig: u
	}));
	const d = c.current,
		f = k.useContext(l0);
	d && !d.projection && i && (d.type === "html" || d.type === "svg") && A2(c.current, n, i, f);
	const p = k.useRef(!1);
	k.useInsertionEffect(() => {
		d && p.current && d.update(n, l)
	});
	const g = n[a0],
		v = k.useRef(!!g && !((y = window.MotionHandoffIsComplete) != null && y.call(window, g)) && ((w = window.MotionHasOptimisedAnimation) == null ? void 0 : w.call(window, g)));
	return pm(() => {
		d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Wu.render(d.render), v.current && d.animationState && d.animationState.animateChanges())
	}), k.useEffect(() => {
		d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => {
			var h;
			(h = window.MotionHandoffMarkAsComplete) == null || h.call(window, g)
		}), v.current = !1))
	}), d
}

function A2(e, t, n, r) {
	const {
		layoutId: i,
		layout: s,
		drag: o,
		dragConstraints: l,
		layoutScroll: u,
		layoutRoot: c,
		layoutCrossfade: d
	} = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : u0(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: s,
		alwaysMeasureLayout: !!o || l && Bn(l),
		visualElement: e,
		animationType: typeof s == "string" ? s : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: u,
		layoutRoot: c
	})
}

function u0(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : u0(e.parent)
}

function z2({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i
}) {
	e && S2(e);

	function s(l, u) {
		let c;
		const d = {
				...k.useContext(Ku),
				...l,
				layoutId: V2(l)
			},
			{
				isStatic: f
			} = d,
			p = $2(l),
			g = r(l, f);
		if (!f && Su) {
			F2();
			const v = _2(d);
			c = v.MeasureLayout, p.visualElement = R2(i, g, d, t, v.ProjectionNode)
		}
		return a.jsxs(ho.Provider, {
			value: p,
			children: [c && p.visualElement ? a.jsx(c, {
				visualElement: p.visualElement,
				...d
			}) : null, n(i, l, M2(g, p.visualElement, u), g, f, p.visualElement)]
		})
	}
	s.displayName = `motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;
	const o = k.forwardRef(s);
	return o[D2] = i, o
}

function V2({
	layoutId: e
}) {
	const t = k.useContext(ku).id;
	return t && e !== void 0 ? t + "-" + e : e
}

function F2(e, t) {
	k.useContext(i0).strict
}

function _2(e) {
	const {
		drag: t,
		layout: n
	} = or;
	if (!t && !n) return {};
	const r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	}
}
const pi = {};

function I2(e) {
	for (const t in e) pi[t] = e[t], Du(t) && (pi[t].isCSSVariable = !0)
}

function c0(e, {
	layout: t,
	layoutId: n
}) {
	return fr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!pi[e] || e === "opacity")
}
const O2 = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective"
	},
	B2 = dr.length;

function U2(e, t, n) {
	let r = "",
		i = !0;
	for (let s = 0; s < B2; s++) {
		const o = dr[s],
			l = e[o];
		if (l === void 0) continue;
		let u = !0;
		if (typeof l == "number" ? u = l === (o.startsWith("scale") ? 1 : 0) : u = parseFloat(l) === 0, !u || n) {
			const c = qm(l, Uu[o]);
			if (!u) {
				i = !1;
				const d = O2[o] || o;
				r += `${d}(${c}) `
			}
			n && (t[o] = c)
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Qu(e, t, n) {
	const {
		style: r,
		vars: i,
		transformOrigin: s
	} = e;
	let o = !1,
		l = !1;
	for (const u in t) {
		const c = t[u];
		if (fr.has(u)) {
			o = !0;
			continue
		} else if (Du(u)) {
			i[u] = c;
			continue
		} else {
			const d = qm(c, Uu[u]);
			u.startsWith("origin") ? (l = !0, s[u] = d) : r[u] = d
		}
	}
	if (t.transform || (o || n ? r.transform = U2(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
		const {
			originX: u = "50%",
			originY: c = "50%",
			originZ: d = 0
		} = s;
		r.transformOrigin = `${u} ${c} ${d}`
	}
}
const Zu = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});

function d0(e, t, n) {
	for (const r in t) !ge(t[r]) && !c0(r, n) && (e[r] = t[r])
}

function W2({
	transformTemplate: e
}, t) {
	return k.useMemo(() => {
		const n = Zu();
		return Qu(n, t, e), Object.assign({}, n.vars, n.style)
	}, [t])
}

function H2(e, t) {
	const n = e.style || {},
		r = {};
	return d0(r, n, e), Object.assign(r, W2(e, t)), r
}

function K2(e, t) {
	const n = {},
		r = H2(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const G2 = {
		offset: "stroke-dashoffset",
		array: "stroke-dasharray"
	},
	X2 = {
		offset: "strokeDashoffset",
		array: "strokeDasharray"
	};

function Y2(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const s = i ? G2 : X2;
	e[s.offset] = M.transform(-r);
	const o = M.transform(t),
		l = M.transform(n);
	e[s.array] = `${o} ${l}`
}

function f0(e, {
	attrX: t,
	attrY: n,
	attrScale: r,
	pathLength: i,
	pathSpacing: s = 1,
	pathOffset: o = 0,
	...l
}, u, c, d) {
	if (Qu(e, l, c), u) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return
	}
	e.attrs = e.style, e.style = {};
	const {
		attrs: f,
		style: p
	} = e;
	f.transform && (p.transform = f.transform, delete f.transform), (p.transform || f.transformOrigin) && (p.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), p.transform && (p.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && Y2(f, i, s, o, !1)
}
const p0 = () => ({
		...Zu(),
		attrs: {}
	}),
	h0 = e => typeof e == "string" && e.toLowerCase() === "svg";

function Q2(e, t, n, r) {
	const i = k.useMemo(() => {
		const s = p0();
		return f0(s, t, h0(r), e.transformTemplate, e.style), {
			...s.attrs,
			style: {
				...s.style
			}
		}
	}, [t]);
	if (e.style) {
		const s = {};
		d0(s, e.style, e), i.style = {
			...s,
			...i.style
		}
	}
	return i
}
const Z2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function qu(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Z2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function q2(e = !1) {
	return (n, r, i, {
		latestValues: s
	}, o) => {
		const u = (qu(n) ? Q2 : K2)(r, s, o, n),
			c = T2(r, typeof n == "string", e),
			d = n !== k.Fragment ? {
				...c,
				...u,
				ref: i
			} : {},
			{
				children: f
			} = r,
			p = k.useMemo(() => ge(f) ? f.get() : f, [f]);
		return k.createElement(n, {
			...d,
			children: p
		})
	}
}

function Kd(e) {
	const t = [{}, {}];
	return e == null || e.values.forEach((n, r) => {
		t[0][r] = n.get(), t[1][r] = n.getVelocity()
	}), t
}

function Ju(e, t, n, r) {
	if (typeof t == "function") {
		const [i, s] = Kd(r);
		t = t(n !== void 0 ? n : e.custom, i, s)
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		const [i, s] = Kd(r);
		t = t(n !== void 0 ? n : e.custom, i, s)
	}
	return t
}

function ds(e) {
	return ge(e) ? e.get() : e
}

function J2({
	scrapeMotionValuesFromProps: e,
	createRenderState: t
}, n, r, i) {
	return {
		latestValues: ew(n, r, i, e),
		renderState: t()
	}
}
const m0 = e => (t, n) => {
	const r = k.useContext(ho),
		i = k.useContext(po),
		s = () => J2(e, t, r, i);
	return n ? s() : ju(s)
};

function ew(e, t, n, r) {
	const i = {},
		s = r(e, {});
	for (const p in s) i[p] = ds(s[p]);
	let {
		initial: o,
		animate: l
	} = e;
	const u = yo(e),
		c = o0(e);
	t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
	let d = n ? n.initial === !1 : !1;
	d = d || o === !1;
	const f = d ? l : o;
	if (f && typeof f != "boolean" && !mo(f)) {
		const p = Array.isArray(f) ? f : [f];
		for (let g = 0; g < p.length; g++) {
			const v = Ju(e, p[g]);
			if (v) {
				const {
					transitionEnd: y,
					transition: w,
					...h
				} = v;
				for (const m in h) {
					let x = h[m];
					if (Array.isArray(x)) {
						const j = d ? x.length - 1 : 0;
						x = x[j]
					}
					x !== null && (i[m] = x)
				}
				for (const m in y) i[m] = y[m]
			}
		}
	}
	return i
}

function ec(e, t, n) {
	var s;
	const {
		style: r
	} = e, i = {};
	for (const o in r)(ge(r[o]) || t.style && ge(t.style[o]) || c0(o, e) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (i[o] = r[o]);
	return i
}
const tw = {
	useVisualState: m0({
		scrapeMotionValuesFromProps: ec,
		createRenderState: Zu
	})
};

function y0(e, t, n) {
	const r = ec(e, t, n);
	for (const i in e)
		if (ge(e[i]) || ge(t[i])) {
			const s = dr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
			r[s] = e[i]
		} return r
}
const nw = {
	useVisualState: m0({
		scrapeMotionValuesFromProps: y0,
		createRenderState: p0
	})
};

function rw(e, t) {
	return function(r, {
		forwardMotionProps: i
	} = {
		forwardMotionProps: !1
	}) {
		const o = {
			...qu(r) ? nw : tw,
			preloadedFeatures: e,
			useRender: q2(i),
			createVisualElement: t,
			Component: r
		};
		return z2(o)
	}
}

function hi(e, t, n) {
	const r = e.getProps();
	return Ju(r, t, n !== void 0 ? n : r.custom, e)
}
const ml = e => Array.isArray(e);

function iw(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, sr(n))
}

function sw(e) {
	return ml(e) ? e[e.length - 1] || 0 : e
}

function ow(e, t) {
	const n = hi(e, t);
	let {
		transitionEnd: r = {},
		transition: i = {},
		...s
	} = n || {};
	s = {
		...s,
		...r
	};
	for (const o in s) {
		const l = sw(s[o]);
		iw(e, o, l)
	}
}

function aw(e) {
	return !!(ge(e) && e.add)
}

function yl(e, t) {
	const n = e.getValue("willChange");
	if (aw(n)) return n.add(t);
	if (!n && wt.WillChange) {
		const r = new wt.WillChange("auto");
		e.addValue("willChange", r), r.add(t)
	}
}

function g0(e) {
	return e.props[a0]
}
const lw = e => e !== null;

function uw(e, {
	repeat: t,
	repeatType: n = "loop"
}, r) {
	const i = e.filter(lw),
		s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
	return !s || r === void 0 ? i[s] : r
}
const cw = {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restSpeed: 10
	},
	dw = e => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10
	}),
	fw = {
		type: "keyframes",
		duration: .8
	},
	pw = {
		type: "keyframes",
		ease: [.25, .1, .35, 1],
		duration: .3
	},
	hw = (e, {
		keyframes: t
	}) => t.length > 2 ? fw : fr.has(e) ? e.startsWith("scale") ? dw(t[1]) : cw : pw;

function mw({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: s,
	repeatType: o,
	repeatDelay: l,
	from: u,
	elapsed: c,
	...d
}) {
	return !!Object.keys(d).length
}
const tc = (e, t, n, r = {}, i, s) => o => {
	const l = Bu(r, e) || {},
		u = l.delay || r.delay || 0;
	let {
		elapsed: c = 0
	} = r;
	c = c - ot(u);
	const d = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...l,
		delay: -c,
		onUpdate: p => {
			t.set(p), l.onUpdate && l.onUpdate(p)
		},
		onComplete: () => {
			o(), l.onComplete && l.onComplete()
		},
		name: e,
		motionValue: t,
		element: s ? void 0 : i
	};
	mw(l) || Object.assign(d, hw(e, d)), d.duration && (d.duration = ot(d.duration)), d.repeatDelay && (d.repeatDelay = ot(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
	let f = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (f = !0)), (wt.instantAnimations || wt.skipAnimations) && (f = !0, d.duration = 0, d.delay = 0), d.allowFlatten = !l.type && !l.ease, f && !s && t.get() !== void 0) {
		const p = uw(d.keyframes, l);
		if (p !== void 0) {
			U.update(() => {
				d.onUpdate(p), d.onComplete()
			});
			return
		}
	}
	return l.isSync ? new _u(d) : new Xv(d)
};

function yw({
	protectedKeys: e,
	needsAnimating: t
}, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r
}

function x0(e, t, {
	delay: n = 0,
	transitionOverride: r,
	type: i
} = {}) {
	let {
		transition: s = e.getDefaultTransition(),
		transitionEnd: o,
		...l
	} = t;
	r && (s = r);
	const u = [],
		c = i && e.animationState && e.animationState.getState()[i];
	for (const d in l) {
		const f = e.getValue(d, e.latestValues[d] ?? null),
			p = l[d];
		if (p === void 0 || c && yw(c, d)) continue;
		const g = {
				delay: n,
				...Bu(s || {}, d)
			},
			v = f.get();
		if (v !== void 0 && !f.isAnimating && !Array.isArray(p) && p === v && !g.velocity) continue;
		let y = !1;
		if (window.MotionHandoffAnimation) {
			const h = g0(e);
			if (h) {
				const m = window.MotionHandoffAnimation(h, d, U);
				m !== null && (g.startTime = m, y = !0)
			}
		}
		yl(e, d), f.start(tc(d, f, p, e.shouldReduceMotion && Gm.has(d) ? {
			type: !1
		} : g, e, y));
		const w = f.animation;
		w && u.push(w)
	}
	return o && Promise.all(u).then(() => {
		U.update(() => {
			o && ow(e, o)
		})
	}), u
}

function gl(e, t, n = {}) {
	var u;
	const r = hi(e, t, n.type === "exit" ? (u = e.presenceContext) == null ? void 0 : u.custom : void 0);
	let {
		transition: i = e.getDefaultTransition() || {}
	} = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	const s = r ? () => Promise.all(x0(e, r, n)) : () => Promise.resolve(),
		o = e.variantChildren && e.variantChildren.size ? (c = 0) => {
			const {
				delayChildren: d = 0,
				staggerChildren: f,
				staggerDirection: p
			} = i;
			return gw(e, t, c, d, f, p, n)
		} : () => Promise.resolve(),
		{
			when: l
		} = i;
	if (l) {
		const [c, d] = l === "beforeChildren" ? [s, o] : [o, s];
		return c().then(() => d())
	} else return Promise.all([s(), o(n.delay)])
}

function gw(e, t, n = 0, r = 0, i = 0, s = 1, o) {
	const l = [],
		u = e.variantChildren.size,
		c = (u - 1) * i,
		d = typeof r == "function",
		f = d ? p => r(p, u) : s === 1 ? (p = 0) => p * i : (p = 0) => c - p * i;
	return Array.from(e.variantChildren).sort(xw).forEach((p, g) => {
		p.notify("AnimationStart", t), l.push(gl(p, t, {
			...o,
			delay: n + (d ? 0 : r) + f(g)
		}).then(() => p.notify("AnimationComplete", t)))
	}), Promise.all(l)
}

function xw(e, t) {
	return e.sortNodePosition(t)
}

function vw(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map(s => gl(e, s, n));
		r = Promise.all(i)
	} else if (typeof t == "string") r = gl(e, t, n);
	else {
		const i = typeof t == "function" ? hi(e, t, n.custom) : t;
		r = Promise.all(x0(e, i, n))
	}
	return r.then(() => {
		e.notify("AnimationComplete", t)
	})
}

function v0(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++)
		if (t[r] !== e[r]) return !1;
	return !0
}
const ww = Xu.length;

function w0(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		const n = e.parent ? w0(e.parent) || {} : {};
		return e.props.initial !== void 0 && (n.initial = e.props.initial), n
	}
	const t = {};
	for (let n = 0; n < ww; n++) {
		const r = Xu[n],
			i = e.props[r];
		(fi(i) || i === !1) && (t[r] = i)
	}
	return t
}
const bw = [...Gu].reverse(),
	kw = Gu.length;

function jw(e) {
	return t => Promise.all(t.map(({
		animation: n,
		options: r
	}) => vw(e, n, r)))
}

function Sw(e) {
	let t = jw(e),
		n = Gd(),
		r = !0;
	const i = u => (c, d) => {
		var p;
		const f = hi(e, d, u === "exit" ? (p = e.presenceContext) == null ? void 0 : p.custom : void 0);
		if (f) {
			const {
				transition: g,
				transitionEnd: v,
				...y
			} = f;
			c = {
				...c,
				...y,
				...v
			}
		}
		return c
	};

	function s(u) {
		t = u(e)
	}

	function o(u) {
		const {
			props: c
		} = e, d = w0(e.parent) || {}, f = [], p = new Set;
		let g = {},
			v = 1 / 0;
		for (let w = 0; w < kw; w++) {
			const h = bw[w],
				m = n[h],
				x = c[h] !== void 0 ? c[h] : d[h],
				j = fi(x),
				N = h === u ? m.isActive : null;
			N === !1 && (v = w);
			let C = x === d[h] && x !== c[h] && j;
			if (C && r && e.manuallyAnimateOnMount && (C = !1), m.protectedKeys = {
					...g
				}, !m.isActive && N === null || !x && !m.prevProp || mo(x) || typeof x == "boolean") continue;
			const b = Cw(m.prevProp, x);
			let S = b || h === u && m.isActive && !C && j || w > v && j,
				$ = !1;
			const E = Array.isArray(x) ? x : [x];
			let W = E.reduce(i(h), {});
			N === !1 && (W = {});
			const {
				prevResolvedValues: oe = {}
			} = m, Jt = {
				...oe,
				...W
			}, pr = re => {
				S = !0, p.has(re) && ($ = !0, p.delete(re)), m.needsAnimating[re] = !0;
				const P = e.getValue(re);
				P && (P.liveStyle = !1)
			};
			for (const re in Jt) {
				const P = W[re],
					L = oe[re];
				if (g.hasOwnProperty(re)) continue;
				let R = !1;
				ml(P) && ml(L) ? R = !v0(P, L) : R = P !== L, R ? P != null ? pr(re) : p.add(re) : P !== void 0 && p.has(re) ? pr(re) : m.protectedKeys[re] = !0
			}
			m.prevProp = x, m.prevResolvedValues = W, m.isActive && (g = {
				...g,
				...W
			}), r && e.blockInitialAnimation && (S = !1), S && (!(C && b) || $) && f.push(...E.map(re => ({
				animation: re,
				options: {
					type: h
				}
			})))
		}
		if (p.size) {
			const w = {};
			if (typeof c.initial != "boolean") {
				const h = hi(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
				h && h.transition && (w.transition = h.transition)
			}
			p.forEach(h => {
				const m = e.getBaseTarget(h),
					x = e.getValue(h);
				x && (x.liveStyle = !0), w[h] = m ?? null
			}), f.push({
				animation: w
			})
		}
		let y = !!f.length;
		return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(f) : Promise.resolve()
	}

	function l(u, c) {
		var f;
		if (n[u].isActive === c) return Promise.resolve();
		(f = e.variantChildren) == null || f.forEach(p => {
			var g;
			return (g = p.animationState) == null ? void 0 : g.setActive(u, c)
		}), n[u].isActive = c;
		const d = o(u);
		for (const p in n) n[p].protectedKeys = {};
		return d
	}
	return {
		animateChanges: o,
		setActive: l,
		setAnimateFunction: s,
		getState: () => n,
		reset: () => {
			n = Gd(), r = !0
		}
	}
}

function Cw(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !v0(t, e) : !1
}

function nn(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	}
}

function Gd() {
	return {
		animate: nn(!0),
		whileInView: nn(),
		whileHover: nn(),
		whileTap: nn(),
		whileDrag: nn(),
		whileFocus: nn(),
		exit: nn()
	}
}
class qt {
	constructor(t) {
		this.isMounted = !1, this.node = t
	}
	update() {}
}
class Nw extends qt {
	constructor(t) {
		super(t), t.animationState || (t.animationState = Sw(t))
	}
	updateAnimationControlsSubscription() {
		const {
			animate: t
		} = this.node.getProps();
		mo(t) && (this.unmountControls = t.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const {
			animate: t
		} = this.node.getProps(), {
			animate: n
		} = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription()
	}
	unmount() {
		var t;
		this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
	}
}
let Tw = 0;
class Pw extends qt {
	constructor() {
		super(...arguments), this.id = Tw++
	}
	update() {
		if (!this.node.presenceContext) return;
		const {
			isPresent: t,
			onExitComplete: n
		} = this.node.presenceContext, {
			isPresent: r
		} = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === r) return;
		const i = this.node.animationState.setActive("exit", !t);
		n && !t && i.then(() => {
			n(this.id)
		})
	}
	mount() {
		const {
			register: t,
			onExitComplete: n
		} = this.node.presenceContext || {};
		n && n(this.id), t && (this.unmount = t(this.id))
	}
	unmount() {}
}
const Ew = {
	animation: {
		Feature: Nw
	},
	exit: {
		Feature: Pw
	}
};

function mi(e, t, n, r = {
	passive: !0
}) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Ni(e) {
	return {
		point: {
			x: e.pageX,
			y: e.pageY
		}
	}
}
const $w = e => t => Hu(t) && e(t, Ni(t));

function Ir(e, t, n, r) {
	return mi(e, t, $w(n), r)
}

function b0({
	top: e,
	left: t,
	right: n,
	bottom: r
}) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	}
}

function Dw({
	x: e,
	y: t
}) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	}
}

function Mw(e, t) {
	if (!t) return e;
	const n = t({
			x: e.left,
			y: e.top
		}),
		r = t({
			x: e.right,
			y: e.bottom
		});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	}
}
const k0 = 1e-4,
	Lw = 1 - k0,
	Rw = 1 + k0,
	j0 = .01,
	Aw = 0 - j0,
	zw = 0 + j0;

function we(e) {
	return e.max - e.min
}

function Vw(e, t, n) {
	return Math.abs(e - t) <= n
}

function Xd(e, t, n, r = .5) {
	e.origin = r, e.originPoint = K(t.min, t.max, e.origin), e.scale = we(n) / we(t), e.translate = K(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Lw && e.scale <= Rw || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Aw && e.translate <= zw || isNaN(e.translate)) && (e.translate = 0)
}

function Or(e, t, n, r) {
	Xd(e.x, t.x, n.x, r ? r.originX : void 0), Xd(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Yd(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + we(t)
}

function Fw(e, t, n) {
	Yd(e.x, t.x, n.x), Yd(e.y, t.y, n.y)
}

function Qd(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + we(t)
}

function Br(e, t, n) {
	Qd(e.x, t.x, n.x), Qd(e.y, t.y, n.y)
}
const Zd = () => ({
		translate: 0,
		scale: 1,
		origin: 0,
		originPoint: 0
	}),
	Un = () => ({
		x: Zd(),
		y: Zd()
	}),
	qd = () => ({
		min: 0,
		max: 0
	}),
	q = () => ({
		x: qd(),
		y: qd()
	});

function Fe(e) {
	return [e("x"), e("y")]
}

function Zo(e) {
	return e === void 0 || e === 1
}

function xl({
	scale: e,
	scaleX: t,
	scaleY: n
}) {
	return !Zo(e) || !Zo(t) || !Zo(n)
}

function an(e) {
	return xl(e) || S0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function S0(e) {
	return Jd(e.x) || Jd(e.y)
}

function Jd(e) {
	return e && e !== "0%"
}

function Ws(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i
}

function ef(e, t, n, r, i) {
	return i !== void 0 && (e = Ws(e, i, r)), Ws(e, n, r) + t
}

function vl(e, t = 0, n = 1, r, i) {
	e.min = ef(e.min, t, n, r, i), e.max = ef(e.max, t, n, r, i)
}

function C0(e, {
	x: t,
	y: n
}) {
	vl(e.x, t.translate, t.scale, t.originPoint), vl(e.y, n.translate, n.scale, n.originPoint)
}
const tf = .999999999999,
	nf = 1.0000000000001;

function _w(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let s, o;
	for (let l = 0; l < i; l++) {
		s = n[l], o = s.projectionDelta;
		const {
			visualElement: u
		} = s.options;
		u && u.props.style && u.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Hn(e, {
			x: -s.scroll.offset.x,
			y: -s.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, C0(e, o)), r && an(s.latestValues) && Hn(e, s.latestValues))
	}
	t.x < nf && t.x > tf && (t.x = 1), t.y < nf && t.y > tf && (t.y = 1)
}

function Wn(e, t) {
	e.min = e.min + t, e.max = e.max + t
}

function rf(e, t, n, r, i = .5) {
	const s = K(e.min, e.max, i);
	vl(e, t, n, s, r)
}

function Hn(e, t) {
	rf(e.x, t.x, t.scaleX, t.scale, t.originX), rf(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function N0(e, t) {
	return b0(Mw(e.getBoundingClientRect(), t))
}

function Iw(e, t, n) {
	const r = N0(e, n),
		{
			scroll: i
		} = t;
	return i && (Wn(r.x, i.offset.x), Wn(r.y, i.offset.y)), r
}
const T0 = ({
		current: e
	}) => e ? e.ownerDocument.defaultView : null,
	sf = (e, t) => Math.abs(e - t);

function Ow(e, t) {
	const n = sf(e.x, t.x),
		r = sf(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2)
}
class P0 {
	constructor(t, n, {
		transformPagePoint: r,
		contextWindow: i = window,
		dragSnapToOrigin: s = !1,
		distanceThreshold: o = 3
	} = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const p = Jo(this.lastMoveEventInfo, this.history),
					g = this.startEvent !== null,
					v = Ow(p.offset, {
						x: 0,
						y: 0
					}) >= this.distanceThreshold;
				if (!g && !v) return;
				const {
					point: y
				} = p, {
					timestamp: w
				} = de;
				this.history.push({
					...y,
					timestamp: w
				});
				const {
					onStart: h,
					onMove: m
				} = this.handlers;
				g || (h && h(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, p)
			}, this.handlePointerMove = (p, g) => {
				this.lastMoveEvent = p, this.lastMoveEventInfo = qo(g, this.transformPagePoint), U.update(this.updatePoint, !0)
			}, this.handlePointerUp = (p, g) => {
				this.end();
				const {
					onEnd: v,
					onSessionEnd: y,
					resumeAnimation: w
				} = this.handlers;
				if (this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const h = Jo(p.type === "pointercancel" ? this.lastMoveEventInfo : qo(g, this.transformPagePoint), this.history);
				this.startEvent && v && v(p, h), y && y(p, h)
			}, !Hu(t)) return;
		this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
		const l = Ni(t),
			u = qo(l, this.transformPagePoint),
			{
				point: c
			} = u,
			{
				timestamp: d
			} = de;
		this.history = [{
			...c,
			timestamp: d
		}];
		const {
			onSessionStart: f
		} = n;
		f && f(t, Jo(u, this.history)), this.removeListeners = ji(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp))
	}
	updateHandlers(t) {
		this.handlers = t
	}
	end() {
		this.removeListeners && this.removeListeners(), Kt(this.updatePoint)
	}
}

function qo(e, t) {
	return t ? {
		point: t(e.point)
	} : e
}

function of(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	}
}

function Jo({
	point: e
}, t) {
	return {
		point: e,
		delta: of(e, E0(t)),
		offset: of(e, Bw(t)),
		velocity: Uw(t, .1)
	}
}

function Bw(e) {
	return e[0]
}

function E0(e) {
	return e[e.length - 1]
}

function Uw(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1,
		r = null;
	const i = E0(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > ot(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	const s = at(i.timestamp - r.timestamp);
	if (s === 0) return {
		x: 0,
		y: 0
	};
	const o = {
		x: (i.x - r.x) / s,
		y: (i.y - r.y) / s
	};
	return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function Ww(e, {
	min: t,
	max: n
}, r) {
	return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)), e
}

function af(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
	}
}

function Hw(e, {
	top: t,
	left: n,
	bottom: r,
	right: i
}) {
	return {
		x: af(e.x, n, i),
		y: af(e.y, t, r)
	}
}

function lf(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	}
}

function Kw(e, t) {
	return {
		x: lf(e.x, t.x),
		y: lf(e.y, t.y)
	}
}

function Gw(e, t) {
	let n = .5;
	const r = we(e),
		i = we(t);
	return i > r ? n = ui(t.min, t.max - r, e.min) : r > i && (n = ui(e.min, e.max - i, t.min)), vt(0, 1, n)
}

function Xw(e, t) {
	const n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const wl = .35;

function Yw(e = wl) {
	return e === !1 ? e = 0 : e === !0 && (e = wl), {
		x: uf(e, "left", "right"),
		y: uf(e, "top", "bottom")
	}
}

function uf(e, t, n) {
	return {
		min: cf(e, t),
		max: cf(e, n)
	}
}

function cf(e, t) {
	return typeof e == "number" ? e : e[t] || 0
}
const Qw = new WeakMap;
class Zw {
	constructor(t) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = q(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
	}
	start(t, {
		snapToCursor: n = !1,
		distanceThreshold: r
	} = {}) {
		const {
			presenceContext: i
		} = this.visualElement;
		if (i && i.isPresent === !1) return;
		const s = f => {
				const {
					dragSnapToOrigin: p
				} = this.getProps();
				p ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ni(f).point)
			},
			o = (f, p) => {
				const {
					drag: g,
					dragPropagation: v,
					onDragStart: y
				} = this.getProps();
				if (g && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = c2(g), !this.openDragLock)) return;
				this.latestPointerEvent = f, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe(h => {
					let m = this.getAxisMotionValue(h).get() || 0;
					if (lt.test(m)) {
						const {
							projection: x
						} = this.visualElement;
						if (x && x.layout) {
							const j = x.layout.layoutBox[h];
							j && (m = we(j) * (parseFloat(m) / 100))
						}
					}
					this.originPoint[h] = m
				}), y && U.postRender(() => y(f, p)), yl(this.visualElement, "transform");
				const {
					animationState: w
				} = this.visualElement;
				w && w.setActive("whileDrag", !0)
			},
			l = (f, p) => {
				this.latestPointerEvent = f, this.latestPanInfo = p;
				const {
					dragPropagation: g,
					dragDirectionLock: v,
					onDirectionLock: y,
					onDrag: w
				} = this.getProps();
				if (!g && !this.openDragLock) return;
				const {
					offset: h
				} = p;
				if (v && this.currentDirection === null) {
					this.currentDirection = qw(h), this.currentDirection !== null && y && y(this.currentDirection);
					return
				}
				this.updateAxis("x", p.point, h), this.updateAxis("y", p.point, h), this.visualElement.render(), w && w(f, p)
			},
			u = (f, p) => {
				this.latestPointerEvent = f, this.latestPanInfo = p, this.stop(f, p), this.latestPointerEvent = null, this.latestPanInfo = null
			},
			c = () => Fe(f => {
				var p;
				return this.getAnimationState(f) === "paused" && ((p = this.getAxisMotionValue(f).animation) == null ? void 0 : p.play())
			}),
			{
				dragSnapToOrigin: d
			} = this.getProps();
		this.panSession = new P0(t, {
			onSessionStart: s,
			onStart: o,
			onMove: l,
			onSessionEnd: u,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: d,
			distanceThreshold: r,
			contextWindow: T0(this.visualElement)
		})
	}
	stop(t, n) {
		const r = t || this.latestPointerEvent,
			i = n || this.latestPanInfo,
			s = this.isDragging;
		if (this.cancel(), !s || !i || !r) return;
		const {
			velocity: o
		} = i;
		this.startAnimation(o);
		const {
			onDragEnd: l
		} = this.getProps();
		l && U.postRender(() => l(r, i))
	}
	cancel() {
		this.isDragging = !1;
		const {
			projection: t,
			animationState: n
		} = this.visualElement;
		t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		const {
			dragPropagation: r
		} = this.getProps();
		!r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
	}
	updateAxis(t, n, r) {
		const {
			drag: i
		} = this.getProps();
		if (!r || !Qi(t, i, this.currentDirection)) return;
		const s = this.getAxisMotionValue(t);
		let o = this.originPoint[t] + r[t];
		this.constraints && this.constraints[t] && (o = Ww(o, this.constraints[t], this.elastic[t])), s.set(o)
	}
	resolveConstraints() {
		var s;
		const {
			dragConstraints: t,
			dragElastic: n
		} = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, i = this.constraints;
		t && Bn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Hw(r.layoutBox, t) : this.constraints = !1, this.elastic = Yw(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Fe(o => {
			this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Xw(r.layoutBox[o], this.constraints[o]))
		})
	}
	resolveRefConstraints() {
		const {
			dragConstraints: t,
			onMeasureDragConstraints: n
		} = this.getProps();
		if (!t || !Bn(t)) return !1;
		const r = t.current,
			{
				projection: i
			} = this.visualElement;
		if (!i || !i.layout) return !1;
		const s = Iw(r, i.root, this.visualElement.getTransformPagePoint());
		let o = Kw(i.layout.layoutBox, s);
		if (n) {
			const l = n(Dw(o));
			this.hasMutatedConstraints = !!l, l && (o = b0(l))
		}
		return o
	}
	startAnimation(t) {
		const {
			drag: n,
			dragMomentum: r,
			dragElastic: i,
			dragTransition: s,
			dragSnapToOrigin: o,
			onDragTransitionEnd: l
		} = this.getProps(), u = this.constraints || {}, c = Fe(d => {
			if (!Qi(d, n, this.currentDirection)) return;
			let f = u && u[d] || {};
			o && (f = {
				min: 0,
				max: 0
			});
			const p = i ? 200 : 1e6,
				g = i ? 40 : 1e7,
				v = {
					type: "inertia",
					velocity: r ? t[d] : 0,
					bounceStiffness: p,
					bounceDamping: g,
					timeConstant: 750,
					restDelta: 1,
					restSpeed: 10,
					...s,
					...f
				};
			return this.startAxisValueAnimation(d, v)
		});
		return Promise.all(c).then(l)
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return yl(this.visualElement, t), r.start(tc(t, r, 0, n, this.visualElement, !1))
	}
	stopAnimation() {
		Fe(t => this.getAxisMotionValue(t).stop())
	}
	pauseAnimation() {
		Fe(t => {
			var n;
			return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
		})
	}
	getAnimationState(t) {
		var n;
		return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			i = r[n];
		return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
	}
	snapToCursor(t) {
		Fe(n => {
			const {
				drag: r
			} = this.getProps();
			if (!Qi(n, r, this.currentDirection)) return;
			const {
				projection: i
			} = this.visualElement, s = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const {
					min: o,
					max: l
				} = i.layout.layoutBox[n];
				s.set(t[n] - K(o, l, .5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const {
			drag: t,
			dragConstraints: n
		} = this.getProps(), {
			projection: r
		} = this.visualElement;
		if (!Bn(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = {
			x: 0,
			y: 0
		};
		Fe(o => {
			const l = this.getAxisMotionValue(o);
			if (l && this.constraints !== !1) {
				const u = l.get();
				i[o] = Gw({
					min: u,
					max: u
				}, this.constraints[o])
			}
		});
		const {
			transformTemplate: s
		} = this.visualElement.getProps();
		this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe(o => {
			if (!Qi(o, t, null)) return;
			const l = this.getAxisMotionValue(o),
				{
					min: u,
					max: c
				} = this.constraints[o];
			l.set(K(u, c, i[o]))
		})
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Qw.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = Ir(t, "pointerdown", u => {
				const {
					drag: c,
					dragListener: d = !0
				} = this.getProps();
				c && d && this.start(u)
			}),
			r = () => {
				const {
					dragConstraints: u
				} = this.getProps();
				Bn(u) && u.current && (this.constraints = this.resolveRefConstraints())
			},
			{
				projection: i
			} = this.visualElement,
			s = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), U.read(r);
		const o = mi(window, "resize", () => this.scalePositionWithinConstraints()),
			l = i.addEventListener("didUpdate", ({
				delta: u,
				hasLayoutChanged: c
			}) => {
				this.isDragging && c && (Fe(d => {
					const f = this.getAxisMotionValue(d);
					f && (this.originPoint[d] += u[d].translate, f.set(f.get() + u[d].translate))
				}), this.visualElement.render())
			});
		return () => {
			o(), n(), s(), l && l()
		}
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: s = !1,
				dragElastic: o = wl,
				dragMomentum: l = !0
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: s,
			dragElastic: o,
			dragMomentum: l
		}
	}
}

function Qi(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e)
}

function qw(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class Jw extends qt {
	constructor(t) {
		super(t), this.removeGroupControls = Ue, this.removeListeners = Ue, this.controls = new Zw(t)
	}
	mount() {
		const {
			dragControls: t
		} = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ue
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners()
	}
}
const df = e => (t, n) => {
	e && U.postRender(() => e(t, n))
};
class e5 extends qt {
	constructor() {
		super(...arguments), this.removePointerDownListener = Ue
	}
	onPointerDown(t) {
		this.session = new P0(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: T0(this.node)
		})
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i
		} = this.node.getProps();
		return {
			onSessionStart: df(t),
			onStart: df(n),
			onMove: r,
			onEnd: (s, o) => {
				delete this.session, i && U.postRender(() => i(s, o))
			}
		}
	}
	mount() {
		this.removePointerDownListener = Ir(this.node.current, "pointerdown", t => this.onPointerDown(t))
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end()
	}
}
const fs = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};

function ff(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const kr = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (M.test(e)) e = parseFloat(e);
				else return e;
			const n = ff(e, t.target.x),
				r = ff(e, t.target.y);
			return `${n}% ${r}%`
		}
	},
	t5 = {
		correct: (e, {
			treeScale: t,
			projectionDelta: n
		}) => {
			const r = e,
				i = Gt.parse(e);
			if (i.length > 5) return r;
			const s = Gt.createTransformer(e),
				o = typeof i[0] != "number" ? 1 : 0,
				l = n.x.scale * t.x,
				u = n.y.scale * t.y;
			i[0 + o] /= l, i[1 + o] /= u;
			const c = K(l, u, .5);
			return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), s(i)
		}
	};
let pf = !1;
class n5 extends k.Component {
	componentDidMount() {
		const {
			visualElement: t,
			layoutGroup: n,
			switchLayoutGroup: r,
			layoutId: i
		} = this.props, {
			projection: s
		} = t;
		I2(r5), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), pf && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
			this.safeToRemove()
		}), s.setOptions({
			...s.options,
			onExitComplete: () => this.safeToRemove()
		})), fs.hasEverUpdated = !0
	}
	getSnapshotBeforeUpdate(t) {
		const {
			layoutDependency: n,
			visualElement: r,
			drag: i,
			isPresent: s
		} = this.props, {
			projection: o
		} = r;
		return o && (o.isPresent = s, pf = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || U.postRender(() => {
			const l = o.getStack();
			(!l || !l.members.length) && this.safeToRemove()
		}))), null
	}
	componentDidUpdate() {
		const {
			projection: t
		} = this.props.visualElement;
		t && (t.root.didUpdate(), Wu.postRender(() => {
			!t.currentAnimation && t.isLead() && this.safeToRemove()
		}))
	}
	componentWillUnmount() {
		const {
			visualElement: t,
			layoutGroup: n,
			switchLayoutGroup: r
		} = this.props, {
			projection: i
		} = t;
		i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
	}
	safeToRemove() {
		const {
			safeToRemove: t
		} = this.props;
		t && t()
	}
	render() {
		return null
	}
}

function $0(e) {
	const [t, n] = r0(), r = k.useContext(ku);
	return a.jsx(n5, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: k.useContext(l0),
		isPresent: t,
		safeToRemove: n
	})
}
const r5 = {
	borderRadius: {
		...kr,
		applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
	},
	borderTopLeftRadius: kr,
	borderTopRightRadius: kr,
	borderBottomLeftRadius: kr,
	borderBottomRightRadius: kr,
	boxShadow: t5
};

function i5(e, t, n) {
	const r = ge(e) ? e : sr(e);
	return r.start(tc("", r, t, n)), r.animation
}
const s5 = (e, t) => e.depth - t.depth;
class o5 {
	constructor() {
		this.children = [], this.isDirty = !1
	}
	add(t) {
		Cu(this.children, t), this.isDirty = !0
	}
	remove(t) {
		Nu(this.children, t), this.isDirty = !0
	}
	forEach(t) {
		this.isDirty && this.children.sort(s5), this.isDirty = !1, this.children.forEach(t)
	}
}

function a5(e, t) {
	const n = Ne.now(),
		r = ({
			timestamp: i
		}) => {
			const s = i - n;
			s >= t && (Kt(r), e(s - t))
		};
	return U.setup(r, !0), () => Kt(r)
}
const D0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	l5 = D0.length,
	hf = e => typeof e == "string" ? parseFloat(e) : e,
	mf = e => typeof e == "number" || M.test(e);

function u5(e, t, n, r, i, s) {
	i ? (e.opacity = K(0, n.opacity ?? 1, c5(r)), e.opacityExit = K(t.opacity ?? 1, 0, d5(r))) : s && (e.opacity = K(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let o = 0; o < l5; o++) {
		const l = `border${D0[o]}Radius`;
		let u = yf(t, l),
			c = yf(n, l);
		if (u === void 0 && c === void 0) continue;
		u || (u = 0), c || (c = 0), u === 0 || c === 0 || mf(u) === mf(c) ? (e[l] = Math.max(K(hf(u), hf(c), r), 0), (lt.test(c) || lt.test(u)) && (e[l] += "%")) : e[l] = c
	}(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}

function yf(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius
}
const c5 = M0(0, .5, Sm),
	d5 = M0(.5, .95, Ue);

function M0(e, t, n) {
	return r => r < e ? 0 : r > t ? 1 : n(ui(e, t, r))
}

function gf(e, t) {
	e.min = t.min, e.max = t.max
}

function Ve(e, t) {
	gf(e.x, t.x), gf(e.y, t.y)
}

function xf(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function vf(e, t, n, r, i) {
	return e -= t, e = Ws(e, 1 / n, r), i !== void 0 && (e = Ws(e, 1 / i, r)), e
}

function f5(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
	if (lt.test(t) && (t = parseFloat(t), t = K(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let l = K(s.min, s.max, r);
	e === s && (l -= t), e.min = vf(e.min, t, n, l, i), e.max = vf(e.max, t, n, l, i)
}

function wf(e, t, [n, r, i], s, o) {
	f5(e, t[n], t[r], t[i], t.scale, s, o)
}
const p5 = ["x", "scaleX", "originX"],
	h5 = ["y", "scaleY", "originY"];

function bf(e, t, n, r) {
	wf(e.x, t, p5, n ? n.x : void 0, r ? r.x : void 0), wf(e.y, t, h5, n ? n.y : void 0, r ? r.y : void 0)
}

function kf(e) {
	return e.translate === 0 && e.scale === 1
}

function L0(e) {
	return kf(e.x) && kf(e.y)
}

function jf(e, t) {
	return e.min === t.min && e.max === t.max
}

function m5(e, t) {
	return jf(e.x, t.x) && jf(e.y, t.y)
}

function Sf(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function R0(e, t) {
	return Sf(e.x, t.x) && Sf(e.y, t.y)
}

function Cf(e) {
	return we(e.x) / we(e.y)
}

function Nf(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class y5 {
	constructor() {
		this.members = []
	}
	add(t) {
		Cu(this.members, t), t.scheduleRender()
	}
	remove(t) {
		if (Nu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n)
		}
	}
	relegate(t) {
		const n = this.members.findIndex(i => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const s = this.members[i];
			if (s.isPresent !== !1) {
				r = s;
				break
			}
		}
		return r ? (this.promote(r), !0) : !1
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
			r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const {
				crossfade: i
			} = t.options;
			i === !1 && r.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach(t => {
			const {
				options: n,
				resumingFrom: r
			} = t;
			n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
		})
	}
	scheduleRender() {
		this.members.forEach(t => {
			t.instance && t.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}

function g5(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		s = e.y.translate / t.y,
		o = (n == null ? void 0 : n.z) || 0;
	if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
		const {
			transformPerspective: c,
			rotate: d,
			rotateX: f,
			rotateY: p,
			skewX: g,
			skewY: v
		} = n;
		c && (r = `perspective(${c}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), p && (r += `rotateY(${p}deg) `), g && (r += `skewX(${g}deg) `), v && (r += `skewY(${v}deg) `)
	}
	const l = e.x.scale * t.x,
		u = e.y.scale * t.y;
	return (l !== 1 || u !== 1) && (r += `scale(${l}, ${u})`), r || "none"
}
const ea = ["", "X", "Y", "Z"],
	x5 = 1e3;
let v5 = 0;

function ta(e, t, n, r) {
	const {
		latestValues: i
	} = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function A0(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	const {
		visualElement: t
	} = e.options;
	if (!t) return;
	const n = g0(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		const {
			layout: i,
			layoutId: s
		} = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s))
	}
	const {
		parent: r
	} = e;
	r && !r.hasCheckedOptimisedAppear && A0(r)
}

function z0({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i
}) {
	return class {
		constructor(o = {}, l = t == null ? void 0 : t()) {
			this.id = v5++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, this.nodes.forEach(k5), this.nodes.forEach(N5), this.nodes.forEach(T5), this.nodes.forEach(j5)
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
			for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
			this.root === this && (this.nodes = new o5)
		}
		addEventListener(o, l) {
			return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Pu), this.eventHandlers.get(o).add(l)
		}
		notifyListeners(o, ...l) {
			const u = this.eventHandlers.get(o);
			u && u.notify(...l)
		}
		hasListeners(o) {
			return this.eventHandlers.has(o)
		}
		mount(o) {
			if (this.instance) return;
			this.isSVG = n0(o) && !y2(o), this.instance = o;
			const {
				layoutId: l,
				layout: u,
				visualElement: c
			} = this.options;
			if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (u || l) && (this.isLayoutDirty = !0), e) {
				let d, f = 0;
				const p = () => this.root.updateBlockedByResize = !1;
				U.read(() => {
					f = window.innerWidth
				}), e(o, () => {
					const g = window.innerWidth;
					g !== f && (f = g, this.root.updateBlockedByResize = !0, d && d(), d = a5(p, 250), fs.hasAnimatedSinceResize && (fs.hasAnimatedSinceResize = !1, this.nodes.forEach(Ef)))
				})
			}
			l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
				delta: d,
				hasLayoutChanged: f,
				hasRelativeLayoutChanged: p,
				layout: g
			}) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return
				}
				const v = this.options.transition || c.getDefaultTransition() || M5,
					{
						onLayoutAnimationStart: y,
						onLayoutAnimationComplete: w
					} = c.getProps(),
					h = !this.targetLayout || !R0(this.targetLayout, g),
					m = !f && p;
				if (this.options.layoutRoot || this.resumeFrom || m || f && (h || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					const x = {
						...Bu(v, "layout"),
						onPlay: y,
						onComplete: w
					};
					(c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x), this.setAnimationOrigin(d, m)
				} else f || Ef(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = g
			})
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const o = this.getStack();
			o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Kt(this.updateProjection)
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(P5), this.animationId++)
		}
		getTransformTemplate() {
			const {
				visualElement: o
			} = this.options;
			return o && o.getProps().transformTemplate
		}
		willUpdate(o = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && A0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let d = 0; d < this.path.length; d++) {
				const f = this.path[d];
				f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
			}
			const {
				layoutId: l,
				layout: u
			} = this.options;
			if (l === void 0 && !u) return;
			const c = this.getTransformTemplate();
			this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Tf);
				return
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Pf);
				return
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(C5), this.nodes.forEach(w5), this.nodes.forEach(b5)) : this.nodes.forEach(Pf), this.clearAllSnapshots();
			const l = Ne.now();
			de.delta = vt(0, 1e3 / 60, l - de.timestamp), de.timestamp = l, de.isProcessing = !0, Ho.update.process(de), Ho.preRender.process(de), Ho.render.process(de), de.isProcessing = !1
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Wu.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			this.nodes.forEach(S5), this.sharedNodes.forEach(E5)
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, U.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			U.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !we(this.snapshot.measuredBox.x) && !we(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
			const o = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = q(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			const {
				visualElement: l
			} = this.options;
			l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
		}
		updateScroll(o = "measure") {
			let l = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1), l && this.instance) {
				const u = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: o,
					isRoot: u,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : u
				}
			}
		}
		resetTransform() {
			if (!i) return;
			const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
				l = this.projectionDelta && !L0(this.projectionDelta),
				u = this.getTransformTemplate(),
				c = u ? u(this.latestValues, "") : void 0,
				d = c !== this.prevTransformTemplateValue;
			o && this.instance && (l || an(this.latestValues) || d) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
		}
		measure(o = !0) {
			const l = this.measurePageBox();
			let u = this.removeElementScroll(l);
			return o && (u = this.removeTransform(u)), L5(u), {
				animationId: this.root.animationId,
				measuredBox: l,
				layoutBox: u,
				latestValues: {},
				source: this.id
			}
		}
		measurePageBox() {
			var c;
			const {
				visualElement: o
			} = this.options;
			if (!o) return q();
			const l = o.measureViewportBox();
			if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(R5))) {
				const {
					scroll: d
				} = this.root;
				d && (Wn(l.x, d.offset.x), Wn(l.y, d.offset.y))
			}
			return l
		}
		removeElementScroll(o) {
			var u;
			const l = q();
			if (Ve(l, o), (u = this.scroll) != null && u.wasRoot) return l;
			for (let c = 0; c < this.path.length; c++) {
				const d = this.path[c],
					{
						scroll: f,
						options: p
					} = d;
				d !== this.root && f && p.layoutScroll && (f.wasRoot && Ve(l, o), Wn(l.x, f.offset.x), Wn(l.y, f.offset.y))
			}
			return l
		}
		applyTransform(o, l = !1) {
			const u = q();
			Ve(u, o);
			for (let c = 0; c < this.path.length; c++) {
				const d = this.path[c];
				!l && d.options.layoutScroll && d.scroll && d !== d.root && Hn(u, {
					x: -d.scroll.offset.x,
					y: -d.scroll.offset.y
				}), an(d.latestValues) && Hn(u, d.latestValues)
			}
			return an(this.latestValues) && Hn(u, this.latestValues), u
		}
		removeTransform(o) {
			const l = q();
			Ve(l, o);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				if (!c.instance || !an(c.latestValues)) continue;
				xl(c.latestValues) && c.updateSnapshot();
				const d = q(),
					f = c.measurePageBox();
				Ve(d, f), bf(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
			}
			return an(this.latestValues) && bf(l, this.latestValues), l
		}
		setTargetDelta(o) {
			this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
		}
		setOptions(o) {
			this.options = {
				...this.options,
				...o,
				crossfade: o.crossfade !== void 0 ? o.crossfade : !0
			}
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== de.timestamp && this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(o = !1) {
			var p;
			const l = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== l;
			if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const {
				layout: d,
				layoutId: f
			} = this.options;
			if (!(!this.layout || !(d || f))) {
				if (this.resolvedRelativeTargetAt = de.timestamp, !this.targetDelta && !this.relativeTarget) {
					const g = this.getClosestProjectingParent();
					g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = q(), this.relativeTargetOrigin = q(), Br(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
				}
				if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Fw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), C0(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
					this.attemptToResolveRelativeTarget = !1;
					const g = this.getClosestProjectingParent();
					g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = q(), this.relativeTargetOrigin = q(), Br(this.relativeTargetOrigin, this.target, g.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || xl(this.parent.latestValues) || S0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
		}
		calcProjection() {
			var v;
			const o = this.getLead(),
				l = !!this.resumingFrom || this !== o;
			let u = !0;
			if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === de.timestamp && (u = !1), u) return;
			const {
				layout: c,
				layoutId: d
			} = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
			Ve(this.layoutCorrected, this.layout.layoutBox);
			const f = this.treeScale.x,
				p = this.treeScale.y;
			_w(this.layoutCorrected, this.treeScale, this.path, l), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = q());
			const {
				target: g
			} = o;
			if (!g) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return
			}!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xf(this.prevProjectionDelta.x, this.projectionDelta.x), xf(this.prevProjectionDelta.y, this.projectionDelta.y)), Or(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== p || !Nf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Nf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g))
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(o = !0) {
			var l;
			if ((l = this.options.visualElement) == null || l.scheduleRender(), o) {
				const u = this.getStack();
				u && u.scheduleRender()
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Un(), this.projectionDelta = Un(), this.projectionDeltaWithTransform = Un()
		}
		setAnimationOrigin(o, l = !1) {
			const u = this.snapshot,
				c = u ? u.latestValues : {},
				d = {
					...this.latestValues
				},
				f = Un();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
			const p = q(),
				g = u ? u.source : void 0,
				v = this.layout ? this.layout.source : void 0,
				y = g !== v,
				w = this.getStack(),
				h = !w || w.members.length <= 1,
				m = !!(y && !h && this.options.crossfade === !0 && !this.path.some(D5));
			this.animationProgress = 0;
			let x;
			this.mixTargetDelta = j => {
				const N = j / 1e3;
				$f(f.x, o.x, N), $f(f.y, o.y, N), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Br(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), $5(this.relativeTarget, this.relativeTargetOrigin, p, N), x && m5(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = q()), Ve(x, this.relativeTarget)), y && (this.animationValues = d, u5(d, c, this.latestValues, N, m, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
		}
		startAnimation(o) {
			var l, u, c;
			this.notifyListeners("animationStart"), (l = this.currentAnimation) == null || l.stop(), (c = (u = this.resumingFrom) == null ? void 0 : u.currentAnimation) == null || c.stop(), this.pendingAnimation && (Kt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
				fs.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = sr(0)), this.currentAnimation = i5(this.motionValue, [0, 1e3], {
					...o,
					velocity: 0,
					isSync: !0,
					onUpdate: d => {
						this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d)
					},
					onStop: () => {},
					onComplete: () => {
						o.onComplete && o.onComplete(), this.completeAnimation()
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
			})
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			const o = this.getStack();
			o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(x5), this.currentAnimation.stop()), this.completeAnimation()
		}
		applyTransformsToTarget() {
			const o = this.getLead();
			let {
				targetWithTransforms: l,
				target: u,
				layout: c,
				latestValues: d
			} = o;
			if (!(!l || !u || !c)) {
				if (this !== o && this.layout && c && V0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
					u = this.target || q();
					const f = we(this.layout.layoutBox.x);
					u.x.min = o.target.x.min, u.x.max = u.x.min + f;
					const p = we(this.layout.layoutBox.y);
					u.y.min = o.target.y.min, u.y.max = u.y.min + p
				}
				Ve(l, u), Hn(l, d), Or(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
			}
		}
		registerSharedNode(o, l) {
			this.sharedNodes.has(o) || this.sharedNodes.set(o, new y5), this.sharedNodes.get(o).add(l);
			const c = l.options.initialPromotionConfig;
			l.promote({
				transition: c ? c.transition : void 0,
				preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
			})
		}
		isLead() {
			const o = this.getStack();
			return o ? o.lead === this : !0
		}
		getLead() {
			var l;
			const {
				layoutId: o
			} = this.options;
			return o ? ((l = this.getStack()) == null ? void 0 : l.lead) || this : this
		}
		getPrevLead() {
			var l;
			const {
				layoutId: o
			} = this.options;
			return o ? (l = this.getStack()) == null ? void 0 : l.prevLead : void 0
		}
		getStack() {
			const {
				layoutId: o
			} = this.options;
			if (o) return this.root.sharedNodes.get(o)
		}
		promote({
			needsReset: o,
			transition: l,
			preserveFollowOpacity: u
		} = {}) {
			const c = this.getStack();
			c && c.promote(this, u), o && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
				transition: l
			})
		}
		relegate() {
			const o = this.getStack();
			return o ? o.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const {
				visualElement: o
			} = this.options;
			if (!o) return;
			let l = !1;
			const {
				latestValues: u
			} = o;
			if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (l = !0), !l) return;
			const c = {};
			u.z && ta("z", o, c, this.animationValues);
			for (let d = 0; d < ea.length; d++) ta(`rotate${ea[d]}`, o, c, this.animationValues), ta(`skew${ea[d]}`, o, c, this.animationValues);
			o.render();
			for (const d in c) o.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
			o.scheduleRender()
		}
		applyProjectionStyles(o, l) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				o.visibility = "hidden";
				return
			}
			const u = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = ds(l == null ? void 0 : l.pointerEvents) || "", o.transform = u ? u(this.latestValues, "") : "none";
				return
			}
			const c = this.getLead();
			if (!this.projectionDelta || !this.layout || !c.target) {
				this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = ds(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !an(this.latestValues) && (o.transform = u ? u({}, "") : "none", this.hasProjected = !1);
				return
			}
			o.visibility = "";
			const d = c.animationValues || c.latestValues;
			this.applyTransformsToTarget();
			let f = g5(this.projectionDeltaWithTransform, this.treeScale, d);
			u && (f = u(d, f)), o.transform = f;
			const {
				x: p,
				y: g
			} = this.projectionDelta;
			o.transformOrigin = `${p.origin*100}% ${g.origin*100}% 0`, c.animationValues ? o.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : o.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
			for (const v in pi) {
				if (d[v] === void 0) continue;
				const {
					correct: y,
					applyTo: w,
					isCSSVariable: h
				} = pi[v], m = f === "none" ? d[v] : y(d[v], c);
				if (w) {
					const x = w.length;
					for (let j = 0; j < x; j++) o[w[j]] = m
				} else h ? this.options.visualElement.renderState.vars[v] = m : o[v] = m
			}
			this.options.layoutId && (o.pointerEvents = c === this ? ds(l == null ? void 0 : l.pointerEvents) || "" : "none")
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			this.root.nodes.forEach(o => {
				var l;
				return (l = o.currentAnimation) == null ? void 0 : l.stop()
			}), this.root.nodes.forEach(Tf), this.root.sharedNodes.clear()
		}
	}
}

function w5(e) {
	e.updateLayout()
}

function b5(e) {
	var n;
	const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		const {
			layoutBox: r,
			measuredBox: i
		} = e.layout, {
			animationType: s
		} = e.options, o = t.source !== e.layout.source;
		s === "size" ? Fe(f => {
			const p = o ? t.measuredBox[f] : t.layoutBox[f],
				g = we(p);
			p.min = r[f].min, p.max = p.min + g
		}) : V0(s, t.layoutBox, r) && Fe(f => {
			const p = o ? t.measuredBox[f] : t.layoutBox[f],
				g = we(r[f]);
			p.max = p.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g)
		});
		const l = Un();
		Or(l, r, t.layoutBox);
		const u = Un();
		o ? Or(u, e.applyTransform(i, !0), t.measuredBox) : Or(u, r, t.layoutBox);
		const c = !L0(l);
		let d = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const {
					snapshot: p,
					layout: g
				} = f;
				if (p && g) {
					const v = q();
					Br(v, t.layoutBox, p.layoutBox);
					const y = q();
					Br(y, r, g.layoutBox), R0(v, y) || (d = !0), f.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = v, e.relativeParent = f)
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: t,
			delta: u,
			layoutDelta: l,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: d
		})
	} else if (e.isLead()) {
		const {
			onExitComplete: r
		} = e.options;
		r && r()
	}
	e.options.transition = void 0
}

function k5(e) {
	e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function j5(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function S5(e) {
	e.clearSnapshot()
}

function Tf(e) {
	e.clearMeasurements()
}

function Pf(e) {
	e.isLayoutDirty = !1
}

function C5(e) {
	const {
		visualElement: t
	} = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Ef(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function N5(e) {
	e.resolveTargetDelta()
}

function T5(e) {
	e.calcProjection()
}

function P5(e) {
	e.resetSkewAndRotation()
}

function E5(e) {
	e.removeLeadSnapshot()
}

function $f(e, t, n) {
	e.translate = K(t.translate, 0, n), e.scale = K(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Df(e, t, n, r) {
	e.min = K(t.min, n.min, r), e.max = K(t.max, n.max, r)
}

function $5(e, t, n, r) {
	Df(e.x, t.x, n.x, r), Df(e.y, t.y, n.y, r)
}

function D5(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0
}
const M5 = {
		duration: .45,
		ease: [.4, 0, .1, 1]
	},
	Mf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
	Lf = Mf("applewebkit/") && !Mf("chrome/") ? Math.round : Ue;

function Rf(e) {
	e.min = Lf(e.min), e.max = Lf(e.max)
}

function L5(e) {
	Rf(e.x), Rf(e.y)
}

function V0(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Vw(Cf(t), Cf(n), .2)
}

function R5(e) {
	var t;
	return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const A5 = z0({
		attachResizeListener: (e, t) => mi(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop
		}),
		checkIsScrollRoot: () => !0
	}),
	na = {
		current: void 0
	},
	F0 = z0({
		measureScroll: e => ({
			x: e.scrollLeft,
			y: e.scrollTop
		}),
		defaultParent: () => {
			if (!na.current) {
				const e = new A5({});
				e.mount(window), e.setOptions({
					layoutScroll: !0
				}), na.current = e
			}
			return na.current
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none"
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
	}),
	z5 = {
		pan: {
			Feature: e5
		},
		drag: {
			Feature: Jw,
			ProjectionNode: F0,
			MeasureLayout: $0
		}
	};

function Af(e, t, n) {
	const {
		props: r
	} = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	const i = "onHover" + n,
		s = r[i];
	s && U.postRender(() => s(t, Ni(t)))
}
class V5 extends qt {
	mount() {
		const {
			current: t
		} = this.node;
		t && (this.unmount = d2(t, (n, r) => (Af(this.node, r, "Start"), i => Af(this.node, i, "End"))))
	}
	unmount() {}
}
class F5 extends qt {
	constructor() {
		super(...arguments), this.isActive = !1
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible")
		} catch {
			t = !0
		}!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
	}
	mount() {
		this.unmount = ji(mi(this.node.current, "focus", () => this.onFocus()), mi(this.node.current, "blur", () => this.onBlur()))
	}
	unmount() {}
}

function zf(e, t, n) {
	const {
		props: r
	} = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	const i = "onTap" + (n === "End" ? "" : n),
		s = r[i];
	s && U.postRender(() => s(t, Ni(t)))
}
class _5 extends qt {
	mount() {
		const {
			current: t
		} = this.node;
		t && (this.unmount = m2(t, (n, r) => (zf(this.node, r, "Start"), (i, {
			success: s
		}) => zf(this.node, i, s ? "End" : "Cancel")), {
			useGlobalTarget: this.node.props.globalTapTarget
		}))
	}
	unmount() {}
}
const bl = new WeakMap,
	ra = new WeakMap,
	I5 = e => {
		const t = bl.get(e.target);
		t && t(e)
	},
	O5 = e => {
		e.forEach(I5)
	};

function B5({
	root: e,
	...t
}) {
	const n = e || document;
	ra.has(n) || ra.set(n, {});
	const r = ra.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(O5, {
		root: e,
		...t
	})), r[i]
}

function U5(e, t, n) {
	const r = B5(t);
	return bl.set(e, n), r.observe(e), () => {
		bl.delete(e), r.unobserve(e)
	}
}
const W5 = {
	some: 0,
	all: 1
};
class H5 extends qt {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1
	}
	startObserver() {
		this.unmount();
		const {
			viewport: t = {}
		} = this.node.getProps(), {
			root: n,
			margin: r,
			amount: i = "some",
			once: s
		} = t, o = {
			root: n ? n.current : void 0,
			rootMargin: r,
			threshold: typeof i == "number" ? i : W5[i]
		}, l = u => {
			const {
				isIntersecting: c
			} = u;
			if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView)) return;
			c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
			const {
				onViewportEnter: d,
				onViewportLeave: f
			} = this.node.getProps(), p = c ? d : f;
			p && p(u)
		};
		return U5(this.node.current, o, l)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const {
			props: t,
			prevProps: n
		} = this.node;
		["amount", "margin", "root"].some(K5(t, n)) && this.startObserver()
	}
	unmount() {}
}

function K5({
	viewport: e = {}
}, {
	viewport: t = {}
} = {}) {
	return n => e[n] !== t[n]
}
const G5 = {
		inView: {
			Feature: H5
		},
		tap: {
			Feature: _5
		},
		focus: {
			Feature: F5
		},
		hover: {
			Feature: V5
		}
	},
	X5 = {
		layout: {
			ProjectionNode: F0,
			MeasureLayout: $0
		}
	},
	kl = {
		current: null
	},
	_0 = {
		current: !1
	};

function Y5() {
	if (_0.current = !0, !!Su)
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => kl.current = e.matches;
			e.addEventListener("change", t), t()
		} else kl.current = !1
}
const Q5 = new WeakMap;

function Z5(e, t, n) {
	for (const r in t) {
		const i = t[r],
			s = n[r];
		if (ge(i)) e.addValue(r, i);
		else if (ge(s)) e.addValue(r, sr(i, {
			owner: e
		}));
		else if (s !== i)
			if (e.hasValue(r)) {
				const o = e.getValue(r);
				o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
			} else {
				const o = e.getStaticValue(r);
				e.addValue(r, sr(o !== void 0 ? o : i, {
					owner: e
				}))
			}
	}
	for (const r in n) t[r] === void 0 && e.removeValue(r);
	return t
}
const Vf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class q5 {
	scrapeMotionValuesFromProps(t, n, r) {
		return {}
	}
	constructor({
		parent: t,
		props: n,
		presenceContext: r,
		reducedMotionConfig: i,
		blockInitialAnimation: s,
		visualState: o
	}, l = {}) {
		this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Iu, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			const p = Ne.now();
			this.renderScheduledAt < p && (this.renderScheduledAt = p, U.render(this.render, !1, !0))
		};
		const {
			latestValues: u,
			renderState: c
		} = o;
		this.latestValues = u, this.baseTarget = {
			...u
		}, this.initialValues = n.initial ? {
			...u
		} : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = yo(n), this.isVariantNode = o0(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
		const {
			willChange: d,
			...f
		} = this.scrapeMotionValuesFromProps(n, {}, this);
		for (const p in f) {
			const g = f[p];
			u[p] !== void 0 && ge(g) && g.set(u[p], !1)
		}
	}
	mount(t) {
		this.current = t, Q5.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), _0.current || Y5(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : kl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
	}
	unmount() {
		this.projection && this.projection.unmount(), Kt(this.notifyUpdate), Kt(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) {
			const n = this.features[t];
			n && (n.unmount(), n.isMounted = !1)
		}
		this.current = null
	}
	bindToMotionValue(t, n) {
		this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
		const r = fr.has(t);
		r && this.onBindTransform && this.onBindTransform();
		const i = n.on("change", l => {
				this.latestValues[t] = l, this.props.onUpdate && U.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
			}),
			s = n.on("renderRequest", this.scheduleRender);
		let o;
		window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
			i(), s(), o && o(), n.owner && n.stop()
		})
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
	}
	updateFeatures() {
		let t = "animation";
		for (t in or) {
			const n = or[t];
			if (!n) continue;
			const {
				isEnabled: r,
				Feature: i
			} = n;
			if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
				const s = this.features[t];
				s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props)
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q()
	}
	getStaticValue(t) {
		return this.latestValues[t]
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
		for (let r = 0; r < Vf.length; r++) {
			const i = Vf[r];
			this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
			const s = "on" + i,
				o = t[s];
			o && (this.propEventSubscriptions[i] = this.on(i, o))
		}
		this.prevMotionValues = Z5(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
	}
	getProps() {
		return this.props
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
	}
	addValue(t, n) {
		const r = this.values.get(t);
		n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
	}
	hasValue(t) {
		return this.values.has(t)
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return r === void 0 && n !== void 0 && (r = sr(n === null ? void 0 : n, {
			owner: this
		}), this.addValue(t, r)), r
	}
	readValue(t, n) {
		let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
		return r != null && (typeof r == "string" && (hm(r) || ym(r)) ? r = parseFloat(r) : !x2(r) && Gt.test(n) && (r = Zm(t, n)), this.setBaseTarget(t, ge(r) ? r.get() : r)), ge(r) ? r.get() : r
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n
	}
	getBaseTarget(t) {
		var s;
		const {
			initial: n
		} = this.props;
		let r;
		if (typeof n == "string" || typeof n == "object") {
			const o = Ju(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
			o && (r = o[t])
		}
		if (n && r !== void 0) return r;
		const i = this.getBaseTargetFromProps(this.props, t);
		return i !== void 0 && !ge(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new Pu), this.events[t].add(n)
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n)
	}
}
class I0 extends q5 {
	constructor() {
		super(...arguments), this.KeyframeResolver = o2
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0
	}
	removeValueFromRenderState(t, {
		vars: n,
		style: r
	}) {
		delete n[t], delete r[t]
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const {
			children: t
		} = this.props;
		ge(t) && (this.childSubscription = t.on("change", n => {
			this.current && (this.current.textContent = `${n}`)
		}))
	}
}

function O0(e, {
	style: t,
	vars: n
}, r, i) {
	const s = e.style;
	let o;
	for (o in t) s[o] = t[o];
	i == null || i.applyProjectionStyles(s, r);
	for (o in n) s.setProperty(o, n[o])
}

function J5(e) {
	return window.getComputedStyle(e)
}
class eb extends I0 {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = O0
	}
	readValueFromInstance(t, n) {
		var r;
		if (fr.has(n)) return (r = this.projection) != null && r.isProjecting ? ul(n) : Cv(t, n);
		{
			const i = J5(t),
				s = (Du(n) ? i.getPropertyValue(n) : i[n]) || 0;
			return typeof s == "string" ? s.trim() : s
		}
	}
	measureInstanceViewportBox(t, {
		transformPagePoint: n
	}) {
		return N0(t, n)
	}
	build(t, n, r) {
		Qu(t, n, r.transformTemplate)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return ec(t, n, r)
	}
}
const B0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function tb(e, t, n, r) {
	O0(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(B0.has(i) ? i : Yu(i), t.attrs[i])
}
class nb extends I0 {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = q
	}
	getBaseTargetFromProps(t, n) {
		return t[n]
	}
	readValueFromInstance(t, n) {
		if (fr.has(n)) {
			const r = Qm(n);
			return r && r.default || 0
		}
		return n = B0.has(n) ? n : Yu(n), t.getAttribute(n)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return y0(t, n, r)
	}
	build(t, n, r) {
		f0(t, n, this.isSVGTag, r.transformTemplate, r.style)
	}
	renderInstance(t, n, r, i) {
		tb(t, n, r, i)
	}
	mount(t) {
		this.isSVGTag = h0(t.tagName), super.mount(t)
	}
}
const rb = (e, t) => qu(e) ? new nb(t) : new eb(t, {
		allowProjection: e !== k.Fragment
	}),
	ib = rw({
		...Ew,
		...G5,
		...z5,
		...X5
	}, rb),
	sb = P2(ib);
var U0 = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	Ff = Lt.createContext && Lt.createContext(U0),
	ob = ["attr", "size", "title"];

function ab(e, t) {
	if (e == null) return {};
	var n = lb(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (i = 0; i < s.length; i++) r = s[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
	}
	return n
}

function lb(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e)
		if (Object.prototype.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) >= 0) continue;
			n[r] = e[r]
		} return n
}

function Hs() {
	return Hs = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Hs.apply(this, arguments)
}

function _f(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(i) {
			return Object.getOwnPropertyDescriptor(e, i).enumerable
		})), n.push.apply(n, r)
	}
	return n
}

function Ks(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? _f(Object(n), !0).forEach(function(r) {
			ub(e, r, n[r])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _f(Object(n)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		})
	}
	return e
}

function ub(e, t, n) {
	return t = cb(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function cb(e) {
	var t = db(e, "string");
	return typeof t == "symbol" ? t : t + ""
}

function db(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (t === "string" ? String : Number)(e)
}

function W0(e) {
	return e && e.map((t, n) => Lt.createElement(t.tag, Ks({
		key: n
	}, t.attr), W0(t.child)))
}

function Tn(e) {
	return t => Lt.createElement(fb, Hs({
		attr: Ks({}, e.attr)
	}, t), W0(e.child))
}

function fb(e) {
	var t = n => {
		var {
			attr: r,
			size: i,
			title: s
		} = e, o = ab(e, ob), l = i || n.size || "1em", u;
		return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), Lt.createElement("svg", Hs({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: u,
			style: Ks(Ks({
				color: e.color || n.color
			}, n.style), e.style),
			height: l,
			width: l,
			xmlns: "http://www.w3.org/2000/svg"
		}), s && Lt.createElement("title", null, s), e.children)
	};
	return Ff !== void 0 ? Lt.createElement(Ff.Consumer, null, n => t(n)) : t(U0)
}

function ia(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 576 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
			},
			child: []
		}]
	})(e)
}

function Nt(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 384 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
			},
			child: []
		}]
	})(e)
}

function pb(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
			},
			child: []
		}]
	})(e)
}

function yi(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 640 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
			},
			child: []
		}]
	})(e)
}

function hb(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 496 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			},
			child: []
		}]
	})(e)
}

function mb(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 384 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
			},
			child: []
		}]
	})(e)
}

function sa(e) {
	return Tn({
		tag: "svg",
		attr: {
			viewBox: "0 0 448 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
			},
			child: []
		}]
	})(e)
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yb = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
	V = (e, t) => {
		const n = k.forwardRef(({
			color: r = "currentColor",
			size: i = 24,
			strokeWidth: s = 2,
			absoluteStrokeWidth: o,
			className: l = "",
			children: u,
			...c
		}, d) => k.createElement("svg", {
			ref: d,
			...yb,
			width: i,
			height: i,
			stroke: r,
			strokeWidth: o ? Number(s) * 24 / Number(i) : s,
			className: ["lucide", `lucide-${gb(e)}`, l].join(" "),
			...c
		}, [...t.map(([f, p]) => k.createElement(f, p)), ...Array.isArray(u) ? u : [u]]));
		return n.displayName = `${e}`, n
	};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = V("AlertCircle", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = V("AlertTriangle", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
		key: "c3ski4"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = V("CheckCircle", [
	["path", {
		d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
		key: "g774vq"
	}],
	["path", {
		d: "m9 11 3 3L22 4",
		key: "1pflzl"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = V("Check", [
	["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = V("ChevronDown", [
	["path", {
		d: "m6 9 6 6 6-6",
		key: "qrunsl"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = V("ChevronLeft", [
	["path", {
		d: "m15 18-6-6 6-6",
		key: "1wnfg3"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = V("ChevronRight", [
	["path", {
		d: "m9 18 6-6-6-6",
		key: "mthhwq"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = V("Code", [
	["polyline", {
		points: "16 18 22 12 16 6",
		key: "z7tu5w"
	}],
	["polyline", {
		points: "8 6 2 12 8 18",
		key: "1eg1df"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = V("Copy", [
	["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}],
	["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = V("Crown", [
	["path", {
		d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
		key: "zkxr6b"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = V("DollarSign", [
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "22",
		key: "7eqyqh"
	}],
	["path", {
		d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
		key: "1b0p4s"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = V("Download", [
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["polyline", {
		points: "7 10 12 15 17 10",
		key: "2ggqvy"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "15",
		y2: "3",
		key: "1vk2je"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = V("ExternalLink", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = V("Flame", [
	["path", {
		d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
		key: "96xj49"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = V("Gauge", [
	["path", {
		d: "m12 14 4-4",
		key: "9kzdfg"
	}],
	["path", {
		d: "M3.34 19a10 10 0 1 1 17.32 0",
		key: "19p75a"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = V("Ghost", [
	["path", {
		d: "M9 10h.01",
		key: "qbtxuw"
	}],
	["path", {
		d: "M15 10h.01",
		key: "1qmjsl"
	}],
	["path", {
		d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
		key: "uwwb07"
	}]
]);
const Jk = V("Tree", [
  ["path", { d: "M12 2l-3 5h6l-3-5z", key: "t1" }],
  ["path", { d: "M9 7l-4 6h14l-4-6H9z", key: "t2" }],
  ["path", { d: "M7 13l-3 5h16l-3-5H7z", key: "t3" }],
  ["rect", { x: "10", y: "18", width: "4", height: "4", rx: "1", key: "t4" }]
]);
const Heart = V("Heart", [
  ["path", {
    d: "M20.5 6.5c0-2-1.7-4-4-4-2 0-3.3 1.3-4.5 3-1.2-1.7-2.5-3-4.5-3-2.3 0-4 2-4 4 0 6.2 8.5 11 8.5 11s8.5-4.8 8.5-11z",
    key: "heart1"
  }]
]);
const Moon = V("Moon", [
  ["path", {
    d: "M21 12.5A9 9 0 1 1 11.5 3 7 7 0 0 0 21 12.5z",
    key: "moon"
  }]
]);
const Frog = V("Frog", [
  ["circle", { cx: "7", cy: "6", r: "2.3", key: "frog-eye1" }],
  ["circle", { cx: "17", cy: "6", r: "2.3", key: "frog-eye2" }],
  ["path", {
    d: "M4 12c2.5-4 13-4 16 0s-2.2 9-8 9-10.5-5-8-9z",
    key: "frog-head"
  }],
  ["path", {
    d: "M9 16c1.5 1.2 3.5 1.2 5 0",
    key: "frog-mouth"
  }]
]);
const Halo = V("Halo", [
  ["ellipse", {
    cx: "12",
    cy: "4",
    rx: "6",
    ry: "2.4",
    key: "halo-ring"
  }],
  ["path", {
    d: "M4 14c2-3 14-3 16 0s-2 8-8 8-10-5-8-8z",
    key: "angel-body"
  }]
]);
const Tower = V("Tower", [
  // Left building
  ["rect", {
    x: "4",
    y: "6",
    width: "5",
    height: "14",
    rx: "1",
    key: "b1"
  }],
  // Left windows
  ["rect", { x: "5", y: "8", width: "1", height: "1", key: "w1" }],
  ["rect", { x: "7", y: "10", width: "1", height: "1", key: "w2" }],
  ["rect", { x: "5", y: "12", width: "1", height: "1", key: "w3" }],

  // Center building (tallest)
  ["rect", {
    x: "10",
    y: "2",
    width: "4",
    height: "18",
    rx: "1",
    key: "b2"
  }],
  // Center windows
  ["rect", { x: "11", y: "5", width: "1", height: "1", key: "w4" }],
  ["rect", { x: "11", y: "8", width: "1", height: "1", key: "w5" }],
  ["rect", { x: "11", y: "11", width: "1", height: "1", key: "w6" }],
  ["rect", { x: "11", y: "14", width: "1", height: "1", key: "w7" }],

  // Right building
  ["rect", {
    x: "15",
    y: "8",
    width: "5",
    height: "12",
    rx: "1",
    key: "b3"
  }],
  // Right windows
  ["rect", { x: "16", y: "10", width: "1", height: "1", key: "w8" }],
  ["rect", { x: "18", y: "12", width: "1", height: "1", key: "w9" }],
  ["rect", { x: "16", y: "14", width: "1", height: "1", key: "w10" }]
]);
// 🎄 Christmas background (snowfall)
const ChristmasBackground = () => {
  // Create 50 snowflakes
  const snowflakes = Array(50).fill().map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: `${10 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
    fontSize: `${5 + Math.random() * 10}px`,
    opacity: 0.2 + Math.random() * 0.8
  }));

  return a.jsx("div", {
    className: "snowfall absolute inset-0 pointer-events-none overflow-hidden",
    children: snowflakes.map(flake => 
      a.jsx("div", {
        className: "snowflake",
        style: {
          position: 'absolute',
          left: `${flake.left}%`,
          top: '-20px',
          fontSize: flake.fontSize,
          animation: `fall ${flake.animationDuration} linear ${flake.animationDelay} infinite`,
          opacity: flake.opacity,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0
        },
        children: '❄'
      }, flake.id)
    )
  });
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = V("Gift", [
	["rect", {
		x: "3",
		y: "8",
		width: "18",
		height: "4",
		rx: "1",
		key: "bkv52"
	}],
	["path", {
		d: "M12 8v13",
		key: "1c76mn"
	}],
	["path", {
		d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
		key: "6wjy6b"
	}],
	["path", {
		d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
		key: "1ihvrl"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eb = V("Globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = V("Key", [
	["circle", {
		cx: "7.5",
		cy: "15.5",
		r: "5.5",
		key: "yqb3hr"
	}],
	["path", {
		d: "m21 2-9.6 9.6",
		key: "1j0ho8"
	}],
	["path", {
		d: "m15.5 7.5 3 3L22 7l-3-3",
		key: "1rn1fs"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = V("Lock", [
	["rect", {
		width: "18",
		height: "11",
		x: "3",
		y: "11",
		rx: "2",
		ry: "2",
		key: "1w4ew1"
	}],
	["path", {
		d: "M7 11V7a5 5 0 0 1 10 0v4",
		key: "fwvmzm"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = V("Menu", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "6",
		y2: "6",
		key: "1owob3"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "18",
		y2: "18",
		key: "yk5zj1"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = V("Minus", [
	["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = V("Palette", [
	["circle", {
		cx: "13.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "1okk4w"
	}],
	["circle", {
		cx: "17.5",
		cy: "10.5",
		r: ".5",
		fill: "currentColor",
		key: "f64h9f"
	}],
	["circle", {
		cx: "8.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "fotxhn"
	}],
	["circle", {
		cx: "6.5",
		cy: "12.5",
		r: ".5",
		fill: "currentColor",
		key: "qy21gx"
	}],
	["path", {
		d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
		key: "12rzf8"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = V("Plus", [
	["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}],
	["path", {
		d: "M12 5v14",
		key: "s699le"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = V("Shield", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lb = V("Smartphone", [
	["rect", {
		width: "14",
		height: "20",
		x: "5",
		y: "2",
		rx: "2",
		ry: "2",
		key: "1yt0o3"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = V("Sparkles", [
	["path", {
		d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
		key: "17u4zn"
	}],
	["path", {
		d: "M5 3v4",
		key: "bklmnn"
	}],
	["path", {
		d: "M19 17v4",
		key: "iiml17"
	}],
	["path", {
		d: "M3 5h4",
		key: "nem4j1"
	}],
	["path", {
		d: "M17 19h4",
		key: "lbex7p"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = V("Star", [
	["polygon", {
		points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
		key: "8f66p6"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = V("Users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["path", {
		d: "M16 3.13a4 4 0 0 1 0 7.75",
		key: "1da9ce"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = V("X", [
	["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}],
	["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = V("Zap", [
		["polygon", {
			points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
			key: "45s27k"
		}]
	]),
	G0 = k.createContext(void 0),
	oa = {
		orange: {
			primary: "#F97316",
			primaryLight: "#FB923C",
			primaryDark: "#C2410C",
			gradient: "from-orange-400 via-orange-500 to-orange-700",
			border: "border-orange-500/30",
			borderHover: "border-orange-500/80",
			glow: "shadow-orange-500/20",
			emojis: ["🎃", "🦇", "👻", "🕷️", "🕸️"],
    		titleEmoji: "🎃",
			icon: Tb
		},
		gray: {
			primary: "#6366F1",
			primaryLight: "#A5B4FC",
			primaryDark: "#2b287a",
			gradient: "from-indigo-400 via-indigo-600 to-slate-900",
			border: "border-indigo-500/30",
			borderHover: "border-indigo-500/80",
			glow: "shadow-indigo-500/30",
			emojis: ["🌙", "⭐", "✨", "🌃", "☁️"],
			titleEmoji: "🌙",
			icon: Moon
		},
		green: {
			primary: "#10B981",
			primaryLight: "#34D399",
			primaryDark: "#047857",
			gradient: "from-emerald-400 via-green-500 to-emerald-700",
			border: "border-emerald-500/30",
			borderHover: "border-emerald-500/80",
			glow: "shadow-emerald-500/20",
			emojis: ["🐸", "🌿", "🍃", "🌧️", "🪷"],
			titleEmoji: "🐸",
			icon: Frog

		},
		red: {
			primary: "#EF4444",
			primaryLight: "#F87171",
			primaryDark: "#B91C1C",
			gradient: "from-pink-400 via-red-500 to-rose-600",
			border: "border-rose-500/30",
			borderHover: "border-rose-500/80",
			glow: "shadow-rose-500/20",
			emojis: ["❤️", "💕", "💘", "💖", "💝"],
			titleEmoji: "❤️",
			icon: Heart

		},
		blue: {
  			primary: "#DC2626",     
			primaryLight: "#F4F4F5",   
			primaryDark: "#15803D",   
			primaryAccent: "#1D4ED8",
			gradient: "from-red-500 via-emerald-500 to-red-700",
			border: "border-red-500/40",
			borderHover: "border-red-500/80",
			glow: "shadow-red-500/30",
			emojis: ["🎄", "🎅", "🎁", "❄️", "⛄", "🍪"],
			titleEmoji: "🎄",
			icon: Jk,
			background: ChristmasBackground
		}
	};

const getRandomEmoji = (theme) => {
  const emojis = theme.emojis || [];
  return emojis.length > 0 ? emojis[Math.floor(Math.random() * emojis.length)] : "";
};
const Rb = ({
	children: e
	}) => {
		const [t, n] = k.useState(() => {
			const o = localStorage.getItem("B×R-theme");
			return o || "orange"
		}), r = o => {
			n(o), localStorage.setItem("B×R-theme", o), i(oa[o])
		}, i = o => {
			const l = document.createElement("style");
			l.textContent = `
      :root {
        --scrollbar-thumb-color: ${o.primary}80;
        --scrollbar-thumb-gradient: linear-gradient(135deg, ${o.primary}60, ${o.primaryLight}40);
        --scrollbar-thumb-border: ${o.primary}30;
        --scrollbar-thumb-hover-gradient: linear-gradient(135deg, ${o.primary}80, ${o.primaryLight}60);
        --scrollbar-thumb-glow: ${o.primary}40;
        --global-scrollbar-thumb: ${o.primary}30;
        --global-scrollbar-thumb-hover: ${o.primary}50;
      }
      ::-webkit-scrollbar-thumb {
        background: ${o.primary}50 !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${o.primary}80 !important;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1) !important;
      }
    `;
			const u = document.getElementById("scrollbar-theme");
			u && u.remove(), l.id = "scrollbar-theme", document.head.appendChild(l)
		};
		k.useEffect(() => {
			i(oa[t])
		}, [t]);
		const s = () => oa[t];
		return a.jsx(G0.Provider, {
			value: {
				theme: t,
				setTheme: r,
				getThemeColors: s
			},
			children: e
		})
	},
	$e = () => {
		const e = k.useContext(G0);
		if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
		return e
	},
	Ab = () => {
		var v;
		const [e, t] = k.useState(!1), [n, r] = k.useState(!1), [i, s] = k.useState(!1), {
			theme: o,
			setTheme: l,
			getThemeColors: u
		} = $e(), c = Zt(), d = u();
		k.useEffect(() => {
			const y = () => {
				t(window.scrollY > 20)
			};
			return window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y)
		}, []);
		const f = [{
				name: "Home",
				path: "/"
			}, {
				name: "Download",
				path: "/download"
			}, {
				name: "Contributors",
				path: "/contribution"
			}],
			p = [{
				name: "Halloween🎃",
				value: "orange",
				color: "#F97316"
			}, {
				name: "Christmas🎄",
				value: "blue",
				color: "#3B82F6"
			}, {
				name: "Tokyo Night",
				value: "gray",
				color: "#2d14bbff"
			}, {
				name: "Phrog",
				value: "green",
				color: "#10B981"
			}, {
				name: "Valentine",
				value: "red",
				color: "#EF4444"
			}],
			g = y => {
				if (y.includes("#")) {
					const w = document.querySelector(y.split("#")[1]);
					w && w.scrollIntoView({
						behavior: "smooth"
					})
				}
				s(!1)
			};
		return a.jsxs(a.Fragment, {
			children: [a.jsx("nav", {
				className: `fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${e?"glass-effect-nav shadow-2xl scale-[0.98]":"bg-black/40 border-2 backdrop-blur-xl"} rounded-3xl px-6 py-3`,
				style: {
					borderColor: e ? `${d.primary}50` : `${d.primary}25`,
					boxShadow: e ? `0 20px 60px -10px ${d.primary}30, 0 0 100px -20px ${d.primary}20, inset 0 1px 0 rgba(255,255,255,0.1)` : `0 8px 32px -8px ${d.primary}15, inset 0 1px 0 rgba(255,255,255,0.05)`,
					minWidth: "1000px",
					maxWidth: "1050px",
					background: e ? "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 100%)" : "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%)"
				},
				children: a.jsxs("div", {
					className: "flex items-center justify-between gap-6",
					children: [a.jsx(Vr, {
						to: "/",
						className: "flex items-center group",
						children: a.jsxs("div", {
							className: "relative",
							children: [a.jsx("h1", {
								className: "font-orbitron font-black text-2xl transition-all duration-300 cursor-pointer relative z-10",
								style: {
									color: d.primary,
									textShadow: `0 0 30px ${d.primary}60, 0 0 15px ${d.primary}40`
								},
								children: "B×R"
							}), a.jsx("div", {
								className: "absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10",
								style: {
									background: `radial-gradient(circle, ${d.primary}30, transparent 70%)`
								}
							})]
						})
					}), a.jsx("div", {
						className: "hidden sm:flex items-center space-x-2",
						children: f.map(y => a.jsxs(Vr, {
							to: y.path,
							onClick: () => g(y.path),
							className: `relative text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm tracking-wide group py-2.5 px-4 rounded-xl font-orbitron ${c.pathname===y.path?"text-white":""}`,
							style: {
								backgroundColor: c.pathname === y.path ? `${d.primary}20` : "transparent",
								border: c.pathname === y.path ? `1px solid ${d.primary}40` : "1px solid transparent",
								boxShadow: c.pathname === y.path ? `0 0 20px ${d.primary}20, inset 0 1px 0 rgba(255,255,255,0.1)` : "none"
							},
							children: [a.jsx("span", {
								className: "relative z-10",
								children: y.name
							}), c.pathname === y.path && a.jsx("div", {
								className: "absolute inset-0 rounded-xl opacity-50",
								style: {
									background: `linear-gradient(135deg, ${d.primary}15, transparent)`
								}
							}), a.jsx("span", {
								className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full",
								style: {
									background: `linear-gradient(90deg, transparent, ${d.primaryLight}, ${d.primary}, ${d.primaryLight}, transparent)`,
									boxShadow: `0 0 8px ${d.primary}60`
								}
							}), a.jsx("span", {
								className: "absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-1 transition-all duration-300 group-hover:w-3/4 rounded-full blur-sm opacity-0 group-hover:opacity-100",
								style: {
									background: `linear-gradient(90deg, transparent, ${d.primary}80, transparent)`
								}
							})]
						}, y.name))
					}), a.jsxs("div", {
						className: "flex items-center space-x-2",
						children: [a.jsxs("div", {
							className: "relative group",
							children: [a.jsxs("button", {
								onClick: () => r(!n),
								className: "flex items-center justify-center w-11 h-11 border-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden",
								style: {
									borderColor: n ? `${d.primary}60` : `${d.primary}30`,
									backgroundColor: n ? `${d.primary}20` : "rgba(0,0,0,0.4)",
									boxShadow: n ? `0 0 30px ${d.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)` : `0 0 15px ${d.primary}10`
								},
								children: [a.jsx("div", {
									className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300",
									style: {
										background: `radial-gradient(circle at center, ${d.primary}25, transparent 70%)`
									}
								}), a.jsx("div", {
									className: "relative z-10",
									children: a.jsx(Uf, {
										size: 18,
										style: {
											color: d.primaryLight
										}
									})
								})]
							}), n && a.jsxs("div", {
								className: "absolute top-12 right-0 bg-black/95 backdrop-blur-xl border rounded-2xl p-4 min-w-[160px] shadow-2xl",
								style: {
									borderColor: `${d.primary}40`,
									boxShadow: `0 25px 50px ${d.primary}30, 0 0 100px ${d.primary}20`,
									animation: "dropdown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
									maxheight: "140px",
  									overflowy: "auto"
								},
								children: [a.jsx("div", {
									className: "mb-3",
									children: a.jsx("h4", {
										className: "text-xs font-semibold uppercase tracking-wider font-orbitron",
										style: {
											color: d.primary
										},
										children: "Choose Theme"
									})
								}), p.map(y => a.jsxs("button", {
									onClick: () => {
										l(y.value), r(!1)
									},
									className: `w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-sm transition-all duration-300 font-orbitron group/theme relative overflow-hidden ${o===y.value?"scale-105":"hover:scale-102"}`,
									style: {
										background: o === y.value ? `linear-gradient(135deg, ${y.color}20, ${y.color}10)` : "transparent",
										border: o === y.value ? `1px solid ${y.color}40` : "1px solid transparent"
									},
									onMouseEnter: w => {
										o !== y.value && (w.currentTarget.style.background = `linear-gradient(135deg, ${y.color}15, ${y.color}05)`, w.currentTarget.style.border = `1px solid ${y.color}30`)
									},
									onMouseLeave: w => {
										o !== y.value && (w.currentTarget.style.background = "transparent", w.currentTarget.style.border = "1px solid transparent")
									},
									children: [a.jsx("div", {
										className: "absolute inset-0 opacity-0 group-hover/theme:opacity-100 transition-all duration-300",
										style: {
											background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
											transform: "translateX(-100%)"
										}
									}), a.jsx("div", {
										className: `w-4 h-4 rounded-full border-2 transition-all duration-300 relative ${o===y.value?"scale-110":"group-hover/theme:scale-105"}`,
										style: {
											backgroundColor: y.color,
											borderColor: o === y.value ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
											boxShadow: o === y.value ? `0 0 15px ${y.color}60, 0 0 30px ${y.color}30` : `0 0 8px ${y.color}40`
										},
										children: o === y.value && a.jsx("div", {
											className: "absolute inset-0 rounded-full animate-ping",
											style: {
												backgroundColor: y.color,
												animationDuration: "2s"
											}
										})
									}), a.jsx("span", {
										className: `transition-all duration-300 relative z-10 ${o===y.value?"text-white font-semibold":"text-gray-300"}`,
										children: y.name
									})]
								}, y.value))]
							})]
						}), a.jsxs("button", {
							onClick: () => window.open("https://discord.gg/BpGdmSrGuR", "_blank"),
							className: "flex items-center justify-center w-11 h-11 border-2 rounded-xl transition-all duration-300 hover:scale-110 group relative overflow-hidden",
							style: {
								borderColor: `${d.primary}30`,
								backgroundColor: "rgba(0,0,0,0.4)",
								boxShadow: `0 0 15px ${d.primary}10`
							},
							onMouseEnter: y => {
								y.currentTarget.style.backgroundColor = `${d.primary}20`, y.currentTarget.style.borderColor = `${d.primary}60`, y.currentTarget.style.boxShadow = `0 0 25px ${d.primary}30, inset 0 1px 0 rgba(255,255,255,0.1)`
							},
							onMouseLeave: y => {
								y.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)", y.currentTarget.style.borderColor = `${d.primary}30`, y.currentTarget.style.boxShadow = `0 0 15px ${d.primary}10`
							},
							children: [a.jsx("div", {
								className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300",
								style: {
									background: `radial-gradient(circle at center, ${d.primary}20, transparent 70%)`
								}
							}), a.jsx(yi, {
								className: "text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10",
								size: 18
							})]
						}), a.jsx("button", {
							onClick: () => s(!i),
							className: "sm:hidden flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200",
							style: {
								borderColor: `${d.primary}30`
							},
							children: i ? a.jsx(Gs, {
								size: 16,
								style: {
									color: d.primaryLight
								}
							}) : a.jsx($b, {
								size: 16,
								style: {
									color: d.primaryLight
								}
							})
						})]
					})]
				})
			}), i && a.jsxs("div", {
				className: "fixed inset-0 z-40 sm:hidden",
				children: [a.jsx("div", {
					className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
					onClick: () => s(!1)
				}), a.jsxs("div", {
					className: "absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-xl border rounded-2xl p-4 animate-slideDown shadow-2xl",
					style: {
						borderColor: `${d.primary}40`,
						boxShadow: `0 15px 30px ${d.primary}30, 0 0 60px ${d.primary}20`,
						background: "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.9))"
					},
					children: [a.jsxs("div", {
						className: "flex items-center justify-between mb-4",
						children: [a.jsx("h3", {
							className: "font-orbitron font-bold text-lg",
							style: {
								color: d.primary,
								textShadow: `0 0 20px ${d.primary}60`
							},
							children: "Navigation"
						}), a.jsx("button", {
							onClick: () => s(!1),
							className: "flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-300 hover:scale-110",
							style: {
								borderColor: `${d.primary}30`,
								backgroundColor: `${d.primary}10`
							},
							children: a.jsx(Gs, {
								size: 14,
								style: {
									color: d.primaryLight
								}
							})
						})]
					}), a.jsx("div", {
						className: "h-px mb-4 rounded-full",
						style: {
							background: `linear-gradient(to right, transparent, ${d.primary}60, ${d.primaryLight}40, ${d.primary}60, transparent)`,
							boxShadow: `0 0 10px ${d.primary}40`
						}
					}), a.jsx("div", {
						className: "space-y-2 mb-4",
						children: f.map(y => a.jsxs(Vr, {
							to: y.path,
							onClick: () => g(y.path),
							className: "flex items-center justify-between p-3 rounded-xl transition-all duration-300 group border font-orbitron relative overflow-hidden",
							style: {
								borderColor: c.pathname === y.path ? `${d.primary}60` : `${d.primary}25`,
								background: c.pathname === y.path ? `linear-gradient(135deg, ${d.primary}15, ${d.primaryLight}08)` : `linear-gradient(135deg, ${d.primary}08, rgba(0,0,0,0.2))`,
								boxShadow: c.pathname === y.path ? `0 4px 15px ${d.primary}20` : "none"
							},
							onMouseEnter: w => {
								c.pathname !== y.path && (w.currentTarget.style.borderColor = `${d.primary}50`, w.currentTarget.style.background = `linear-gradient(135deg, ${d.primary}12, ${d.primaryLight}06)`, w.currentTarget.style.boxShadow = `0 3px 10px ${d.primary}15`)
							},
							onMouseLeave: w => {
								c.pathname !== y.path && (w.currentTarget.style.borderColor = `${d.primary}25`, w.currentTarget.style.background = `linear-gradient(135deg, ${d.primary}08, rgba(0,0,0,0.2))`, w.currentTarget.style.boxShadow = "none")
							},
							children: [c.pathname === y.path && a.jsx("div", {
								className: "absolute inset-0 opacity-30",
								style: {
									background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
									animation: "shimmer 3s ease-in-out infinite"
								}
							}), a.jsxs("div", {
								className: "relative z-10 flex items-center gap-3",
								children: [a.jsx("div", {
									className: `w-2 h-2 rounded-full transition-all duration-300 ${c.pathname===y.path?"scale-125 animate-pulse":"group-hover:scale-110"}`,
									style: {
										backgroundColor: c.pathname === y.path ? d.primary : d.primaryLight,
										boxShadow: c.pathname === y.path ? `0 0 8px ${d.primary}60` : "none"
									}
								}), a.jsx("span", {
									className: `font-medium text-base transition-all duration-300 ${c.pathname===y.path?"text-white font-semibold":"text-gray-200 group-hover:text-white"}`,
									children: y.name
								})]
							}), a.jsx("div", {
								className: `w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-300 ${c.pathname===y.path?"scale-110":"group-hover:scale-105"}`,
								style: {
									borderColor: c.pathname === y.path ? d.primary : `${d.primary}40`,
									backgroundColor: c.pathname === y.path ? `${d.primary}20` : `${d.primary}10`
								},
								children: a.jsx("div", {
									className: "w-1 h-1 rounded-full",
									style: {
										backgroundColor: d.primaryLight
									}
								})
							})]
						}, y.name))
					}), a.jsxs("div", {
						className: "border-t pt-4",
						style: {
							borderColor: `${d.primary}30`,
							borderImage: `linear-gradient(to right, transparent, ${d.primary}60, transparent) 1`
						},
						children: [a.jsxs("div", {
							className: "flex items-center justify-center gap-2 mb-3",
							children: [a.jsx(Uf, {
								size: 16,
								style: {
									color: d.primary
								}
							}), a.jsx("h4", {
								className: "text-white font-semibold text-sm font-orbitron",
								style: {
									color: d.primaryLight
								},
								children: "Choose Theme"
							})]
						}), a.jsx("div", {
							className: "grid grid-cols-5 gap-2",
							children: p.map(y => a.jsxs("button", {
								onClick: () => {
									l(y.value), s(!1)
								},
								className: `flex flex-col items-center p-2 rounded-xl transition-all duration-300 border font-orbitron group relative overflow-hidden ${o===y.value?"scale-105":"hover:scale-105"}`,
								style: {
									borderColor: o === y.value ? `${y.color}60` : `${y.color}30`,
									background: o === y.value ? `linear-gradient(135deg, ${y.color}20, ${y.color}10)` : `linear-gradient(135deg, ${y.color}08, rgba(0,0,0,0.2))`,
									boxShadow: o === y.value ? `0 4px 15px ${y.color}25` : "none"
								},
								children: [o === y.value && a.jsx("div", {
									className: "absolute inset-0 opacity-40",
									style: {
										background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
										animation: "shimmer 2s ease-in-out infinite"
									}
								}), a.jsx("div", {
									className: `w-4 h-4 rounded-full mb-1 border-2 transition-all duration-300 relative ${o===y.value?"scale-110":"group-hover:scale-105"}`,
									style: {
										backgroundColor: y.color,
										borderColor: o === y.value ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
										boxShadow: o === y.value ? `0 0 8px ${y.color}50` : `0 0 8px ${y.color}40`
									},
									children: o === y.value && a.jsx("div", {
										className: "absolute inset-0 rounded-full animate-ping",
										style: {
											backgroundColor: y.color,
											animationDuration: "2s"
										}
									})
								}), a.jsx("span", {
									className: `text-xs font-medium transition-all duration-300 relative z-10 ${o===y.value?"text-white font-semibold":"text-gray-300 group-hover:text-white"}`,
									children: y.name
								})]
							}, y.value))
						}), a.jsx("div", {
							className: "mt-3 text-center",
							children: a.jsxs("div", {
								className: "inline-flex items-center gap-2 px-2 py-1 rounded-full border text-xs",
								style: {
									backgroundColor: `${d.primary}15`,
									borderColor: `${d.primary}40`,
									color: d.primaryLight
								},
								children: [a.jsx("div", {
									className: "w-2 h-2 rounded-full animate-pulse",
									style: {
										backgroundColor: d.primary
									}
								}), a.jsxs("span", {
									children: ["Current: ", (v = p.find(y => y.value === o)) == null ? void 0 : v.name]
								})]
							})
						})]
					})]
				})]
			})]
		})
	},
	zb = () => {
		const {
			getThemeColors: e
		} = $e(), t = e();
		return a.jsx("section", {
			id: "home",
			className: "min-h-screen flex items-center justify-center relative pt-32 px-4 sm:px-6",
			children: a.jsxs("div", {
				className: "text-center z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center",
				children: [a.jsxs("div", {
					className: "mb-10 relative",
					style: {
						paddingTop: "0.75rem",
						overflow: "visible"
					},
					children: [a.jsxs("div", {
						className: "inline-block relative group",
						style: {
							overflow: "visible",
							paddingTop: "0.35rem"
						},
						children: [a.jsx("div", {
							className: "absolute -inset-8 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700",
							style: {
								background: `radial-gradient(circle, ${t.primary}60, ${t.primaryLight}40, transparent)`
							}
						}), a.jsxs("h1", {
							className: "font-orbitron font-black text-6xl sm:text-7xl md:text-8xl mb-5 relative inline-block",
							style: {
								color: t.primary,
								textShadow: `0 0 40px ${t.primary}70, 0 0 80px ${t.primary}40, 0 5px 15px rgba(0,0,0,0.5)`,
								paddingTop: "2.25rem",
								overflow: "visible"
							},
							children: ["B×R", a.jsx("span", {
								className: "absolute -right-10 text-3xl opacity-70 pointer-events-none",
								style: {
									top: "8px",
									animationDelay: "0.5s",
									animationDuration: "2s",
									lineHeight: 1.2,
									display: "inline-block",
									padding: "0.15em"
								},
								children: t.titleEmoji  ||  "🎃"
							}), a.jsx("div", {
								className: "absolute -inset-2 opacity-20 blur-md -z-10 animate-pulse",
								style: {
									color: t.primaryLight,
									animationDuration: "3s"
								},
								children: a.jsx("span", {
									className: "font-orbitron font-black text-6xl sm:text-7xl md:text-8xl",
									children: "B×R"
								})
							})]
						})]
					}), a.jsxs("div", {
						className: "flex items-center justify-center gap-3 mt-4",
						children: [a.jsx("div", {
							className: "w-24 sm:w-32 h-1 rounded-full animate-pulse",
							style: {
								background: `linear-gradient(to right, transparent, ${t.primary}, ${t.primaryLight}, ${t.primary}, transparent)`,
								boxShadow: `0 0 20px ${t.primary}60`,
								animationDuration: "2s"
							}
						}), a.jsxs(t.icon || Tb, {
							className: "animate-bounce",
							style: {
								color: t.primaryLight,
								opacity: .6
							},
							size: 30
						}), a.jsx("div", {
							className: "w-24 sm:w-32 h-1 rounded-full animate-pulse",
							style: {
								background: `linear-gradient(to right, transparent, ${t.primary}, ${t.primaryLight}, ${t.primary}, transparent)`,
								boxShadow: `0 0 20px ${t.primary}60`,
								animationDuration: "2s",
								animationDelay: "1s"
							}
						})]
					})]
				}), a.jsx("h2", {
					className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 animate-fadeInUp leading-tight",
					children: "The Ultimate Game Hub"
				}), a.jsx("p", {
					className: "text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeInUp font-light",
					children: "The ultimate solution for free  safe games"
				}), a.jsxs("div", {
					className: "flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp",
					children: [a.jsxs(Vr, {
						to: "/download",
						className: "group relative flex items-center gap-3 text-white px-7 py-3.5 rounded-2xl font-semibold text-base transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl",
						style: {
							background: `linear-gradient(135deg, ${t.primary}, ${t.primaryDark})`,
							boxShadow: `0 10px 40px ${t.primary}50, inset 0 1px 0 rgba(255,255,255,0.2)`,
							border: `2px solid ${t.primary}80`
						},
						onMouseEnter: n => {
							n.currentTarget.style.background = `linear-gradient(135deg, ${t.primaryLight}, ${t.primary})`, n.currentTarget.style.boxShadow = `0 15px 50px ${t.primary}70, 0 0 60px ${t.primary}40, inset 0 1px 0 rgba(255,255,255,0.3)`, n.currentTarget.style.border = `2px solid ${t.primaryLight}`
						},
						onMouseLeave: n => {
							n.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}, ${t.primaryDark})`, n.currentTarget.style.boxShadow = `0 10px 40px ${t.primary}50, inset 0 1px 0 rgba(255,255,255,0.2)`, n.currentTarget.style.border = `2px solid ${t.primary}80`
						},
						children: [a.jsx("div", {
							className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
							style: {
								background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
								animation: "shimmer 2s ease-in-out infinite"
							}
						}), a.jsx("div", {
							className: "absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
							children: a.jsx(Sl, {
								size: 16,
								style: {
									color: "rgba(255,255,255,0.8)"
								},
								className: "animate-pulse"
							})
						}), a.jsxs("div", {
							className: "relative z-10 flex items-center gap-3",
							children: [a.jsx("div", {
								className: "flex items-center justify-center w-7 h-7 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12",
								style: {
									background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))",
									boxShadow: `0 0 20px ${t.primary}80, inset 0 1px 0 rgba(255,255,255,0.4)`,
									border: "1px solid rgba(255,255,255,0.3)"
								},
								children: a.jsx(jl, {
									size: 16,
									className: "text-white drop-shadow-lg"
								})
							}), a.jsx("span", {
								className: "font-bold tracking-wide",
								children: "Download Now"
							})]
						})]
					}), a.jsxs(Vr, {
						to: "/contribution",
						className: "group relative flex items-center gap-3 text-white px-7 py-3.5 rounded-2xl font-semibold text-base transition-all duration-500 hover:scale-105 overflow-hidden",
						style: {
							background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
							boxShadow: "0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
							border: `2px solid ${t.primary}40`
						},
						onMouseEnter: n => {
							n.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}20, rgba(0,0,0,0.5))`, n.currentTarget.style.boxShadow = `0 15px 40px ${t.primary}40, inset 0 1px 0 rgba(255,255,255,0.2)`, n.currentTarget.style.border = `2px solid ${t.primary}80`
						},
						onMouseLeave: n => {
							n.currentTarget.style.background = "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))", n.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)", n.currentTarget.style.border = `2px solid ${t.primary}40`
						},
						children: [a.jsx("div", {
							className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
							style: {
								background: `radial-gradient(circle at center, ${t.primary}10, transparent 70%)`
							}
						}), a.jsxs("div", {
							className: "relative z-10 flex items-center gap-3",
							children: [a.jsx(Sl, {
								size: 16,
								style: {
									color: t.primaryLight
								},
								className: "group-hover:animate-spin"
							}), a.jsx("span", {
								className: "font-bold tracking-wide",
								children: "View Contributors"
							})]
						})]
					})]
				}), a.jsx("div", {
					className: "mt-12 w-full max-w-2xl mx-auto animate-fadeInUp",
					children: a.jsxs("div", {
						className: "group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]",
						style: {
							background: `linear-gradient(135deg, ${t.primary}15, rgba(0,0,0,0.8))`,
							border: `1px solid ${t.primary}30`,
							boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${t.primary}20, inset 0 1px 0 rgba(255,255,255,0.05)`
						},
						children: [a.jsx("div", {
							className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
							style: {
								background: `linear-gradient(90deg, transparent, ${t.primary}40, transparent)`,
								animation: "shimmer 3s ease-in-out infinite"
							}
						}), a.jsx("div", {
							className: "absolute -inset-[1px] rounded-2xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500 -z-10",
							style: {
								background: `radial-gradient(circle at center, ${t.primary}30, transparent 70%)`
							}
						}), a.jsxs("div", {
							className: "relative px-6 py-4 flex items-center gap-4",
							children: [a.jsxs("div", {
								className: "relative flex-shrink-0",
								children: [a.jsx("div", {
									className: "absolute inset-0 rounded-full blur-lg opacity-60 animate-pulse",
									style: {
										background: t.primary,
										animationDuration: "2s"
									}
								}), a.jsx("div", {
									className: "relative w-10 h-10 rounded-full flex items-center justify-center",
									style: {
										background: `linear-gradient(135deg, ${t.primary}, ${t.primaryDark})`,
										boxShadow: `0 4px 20px ${t.primary}50, inset 0 1px 0 rgba(255,255,255,0.2)`
									},
									children: a.jsx(rt, {
										size: 20,
										className: "text-white"
									})
								})]
							}), a.jsxs("div", {
								className: "flex-1 text-left",
								children: [a.jsxs("div", {
									className: "flex items-center gap-2 mb-1",
									children: [a.jsx("span", {
										className: "text-white font-bold text-sm",
										children: "Official Discord Server"
									}), a.jsx("div", {
										className: "px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider",
										style: {
											background: `linear-gradient(135deg, ${t.primary}, ${t.primaryLight})`,
											boxShadow: `0 2px 10px ${t.primary}40`
										},
										children: "VERIFIED"
									})]
								}), a.jsxs("p", {
									className: "text-gray-300 text-xs leading-relaxed",
									children: ["Join us at ", a.jsx("span", {
										className: "font-mono font-semibold",
										style: {
											color: t.primaryLight
										},
										children: "B×R"
									}), " — Any other servers are not affiliated"]
								})]
							}), a.jsx("div", {
								className: "hidden sm:block flex-shrink-0",
								children: a.jsx(Cb, {
									size: 18,
									style: {
										color: t.primaryLight
									},
									className: "opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"
								})
							})]
						})]
					})
				})]
			})
		})
	},
	Vb = () => {
		const {
			getThemeColors: e
		} = $e(), t = e(), n = [{
			icon: a.jsx(dt, {
				size: 20
			}),
			title: "Safest",
			description: "We prioritize your security by rigorously verifying every torrent for authenticity, scanning all files for malware, and providing transparent information so you can download with complete peace of mind, knowing your device and personal data are fully protected."
		}, {
			icon: a.jsx(rt, {
				size: 20
			}),
			title: "Fast Downloading",
			description: "We guarantee you the fastest, ultra-reliable downloads by always connecting you to torrents with the highest number of seeders and peers available, optimizing speed through intelligent routing and stable connections so you get your games quickly and without interruption."
		}];
		const floatingEmojis = t.emojis || [];
        const titleEmoji = t.titleEmoji || "";
		return a.jsxs("section", {
			id: "features",
			className: "py-16 px-4 sm:px-6 relative overflow-hidden",
			children: [
				t.background && a.jsx(t.background, {}),
				a.jsx("div", {
					className: "absolute top-10 left-10 text-2xl opacity-10 animate-float",
					style: { animationDelay: "1s" },
					children: floatingEmojis[0]
				}),
				a.jsx("div", {
					className: "absolute bottom-16 left-1/4 text-2xl opacity-12 animate-float",
					style: { animationDelay: "2s" },
					children: floatingEmojis[1]
				}),
				a.jsx("div", {
					className: "absolute bottom-20 right-1/3 text-xl opacity-18 animate-float",
					style: { animationDelay: "4s" },
					children: floatingEmojis[2]
				}),
				a.jsxs("div", {
					className: "max-w-6xl mx-auto",
				children: [a.jsxs("div", {
					className: "text-center mb-12",
					children: [a.jsxs("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-orbitron",
						style: {
							color: t.primary,
							textShadow: `0 0 30px ${t.primary}50`
						},
						children: ["Why Choose B×R Hub?", a.jsx("span", {
							className: "inline-block ml-4 text-2xl animate-bounce opacity-50",
							children: getRandomEmoji(t)
						})]
					}), a.jsx("p", {
						className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto",
						children: "Here are some feautes, why you should choose B×R."
					})]
				}), a.jsx("div", {
					className: "flex justify-center",
					children: a.jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl",
						children: n.map((r, i) => a.jsxs("div", {
							className: "group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 border overflow-hidden hover:scale-[1.02]",
							style: {
								borderColor: `${t.primary}20`,
								background: "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))"
							},
							onMouseEnter: s => {
								s.currentTarget.style.borderColor = t.primary, s.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}08, rgba(0,0,0,0.3))`, s.currentTarget.style.boxShadow = `0 20px 40px ${t.primary}25`
							},
							onMouseLeave: s => {
								s.currentTarget.style.borderColor = `${t.primary}20`, s.currentTarget.style.background = "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))", s.currentTarget.style.boxShadow = "none"
							},
							children: [a.jsx("div", {
								className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
								style: {
									background: `linear-gradient(135deg, ${t.primary}10, transparent, ${t.primaryLight}10)`,
									filter: "blur(1px)"
								}
							}), a.jsxs("div", {
								className: "relative z-10",
								children: [a.jsx("div", {
									className: "relative mb-5",
									children: a.jsx("div", {
										className: "flex items-center justify-center w-12 h-12 border rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
										style: {
											backgroundColor: `${t.primary}10`,
											borderColor: `${t.primary}30`
										},
										onMouseEnter: s => {
											s.currentTarget.style.backgroundColor = `${t.primary}20`, s.currentTarget.style.borderColor = t.primary, s.currentTarget.style.boxShadow = `0 0 20px ${t.primary}40`
										},
										onMouseLeave: s => {
											s.currentTarget.style.backgroundColor = `${t.primary}10`, s.currentTarget.style.borderColor = `${t.primary}30`, s.currentTarget.style.boxShadow = "none"
										},
										children: a.jsx("div", {
											style: {
												color: t.primaryLight
											},
											className: "group-hover:text-white transition-colors duration-500",
											children: r.icon
										})
									})
								}), a.jsx("h3", {
									className: "text-lg font-bold text-white mb-3 transition-colors duration-500",
									children: r.title
								}), a.jsx("p", {
									className: "text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 text-sm",
									children: r.description
								})]
							}), a.jsx("div", {
								className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none",
								style: {
									boxShadow: `0 25px 50px ${t.primary}20`
								}
							})]
						}, i))
					})
				})]
			})]
		})
	},
	Fb = () => {
		const [e, t] = k.useState(null), {
			getThemeColors: n
		} = $e(), r = n(), i = [{
			question: "Is B×R Hub safe to use?",
			answer: "Yes, B×R ensures your safety by verifying all torrents for authenticity and security, scanning files for malware, and providing clear guidance so you can download games confidently and protect your device."
		}, {
			question: "Which platforms are supported?",
			answer: "B×R Hub supports Windows only for now. Download the appropriate version for your device from the download page."
		}, {
			question: "  How to download?",
			answer: "1. Download Qbittorrent from the official website. 2. Download the torrent links from our website. 3. After you have both Qbittorrent and the torrent, open the torrent file (double click), select Qbittorrent, and start the download. 4. When finished, you’ll see a folder with a setup file inside—run the setup and follow the instructions. 5. After setup, you’ll get the main game file; you can safely delete the setup folder and play!"
		}, {
			question: "What is B×R Hub?",
			answer: "B×R is the best free and safest hub for finding games! Join our Discord community for instant support, updates, and to connect with other users. Our team is active and ready to help!"
		}], s = o => {
			t(e === o ? null : o)
		};
		return a.jsxs("section", {
			id: "faq",
			className: "py-12 px-4 sm:px-6 relative",
			children: [a.jsx("div", {
				className: "absolute top-8 left-6 text-xl opacity-15 animate-float",
				style: {
					animationDelay: "0s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-12 right-10 text-lg opacity-20 animate-float",
				style: {
					animationDelay: "2s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute bottom-10 left-12 text-xl opacity-12 animate-float",
				style: {
					animationDelay: "4s"
				},
				children: getRandomEmoji(t)
			}), a.jsxs("div", {
				className: "max-w-3xl mx-auto",
				children: [a.jsxs("div", {
					className: "text-center mb-10",
					children: [a.jsxs("h2", {
						className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-orbitron",
						style: {
							color: r.primary,
							textShadow: `0 0 30px ${r.primary}50`
						},
						children: ["Frequently Asked Questions", a.jsx("span", {
							className: "inline-block ml-3 text-lg animate-pulse opacity-40",
							children: getRandomEmoji(t)
						})]
					}), a.jsx("p", {
						className: "text-base sm:text-lg text-gray-300",
						children: "Got questions? We've got answers. Find everything you need to know about B×R."
					})]
				}), a.jsx("div", {
					className: "space-y-3",
					children: i.map((o, l) => a.jsxs("div", {
						className: `group relative bg-black/30 backdrop-blur-sm rounded-xl border transition-all duration-500 overflow-hidden ${e===l?"shadow-lg":""}`,
						style: {
							borderColor: e === l ? r.primary : `${r.primary}20`,
							boxShadow: e === l ? `0 10px 25px ${r.primary}20` : void 0
						},
						children: [a.jsx("div", {
							className: `absolute inset-0 transition-all duration-500 ${e===l?"opacity-100":"opacity-0"}`,
							style: {
								background: `linear-gradient(135deg, ${r.primary}03, transparent, ${r.primaryLight}03)`
							}
						}), a.jsxs("button", {
							onClick: () => s(l),
							className: "relative w-full flex items-center justify-between p-4 text-left transition-all duration-300",
							children: [a.jsx("h3", {
								className: "text-sm sm:text-base font-semibold pr-4 text-white",
								children: o.question
							}), a.jsx("div", {
								className: `flex items-center justify-center w-7 h-7 rounded-lg border transition-all duration-500 flex-shrink-0 ${e===l?"rotate-180":""}`,
								style: {
									borderColor: e === l ? r.primary : `${r.primary}30`,
									backgroundColor: e === l ? `${r.primary}15` : "transparent"
								},
								children: e === l ? a.jsx(Db, {
									size: 14,
									style: {
										color: r.primary
									}
								}) : a.jsx(Mb, {
									size: 14,
									style: {
										color: r.primaryLight
									}
								})
							})]
						}), a.jsx("div", {
							className: `transition-all duration-500 ease-in-out overflow-hidden ${e===l?"max-h-40 opacity-100":"max-h-0 opacity-0"}`,
							children: a.jsx("div", {
								className: "px-4 pb-4",
								children: a.jsx("div", {
									className: "border-t pt-3",
									style: {
										borderColor: `${r.primary}15`
									},
									children: a.jsx("div", {
										className: `transform transition-all duration-500 ${e===l?"translate-y-0 scale-100":"translate-y-2 scale-95"}`,
										children: a.jsx("p", {
											className: "text-gray-300 leading-relaxed text-xs sm:text-sm",
											children: o.answer
										})
									})
								})
							})
						})]
					}, l))
				})]
			})]
		})
	},
	Ut = () => {
		const {
			getThemeColors: e
		} = $e(), t = e(), n = () => {
			window.open("https://discord.gg/BpGdmSrGuR", "_blank")
		}, r = {
			"Quick Links": ["Download","Contributors"]
		};
		return a.jsxs("footer", {
			className: "bg-black/95 border-t-2 py-10 px-4 sm:px-6 relative overflow-hidden",
			style: {
				borderColor: `${t.primary}30`,
				boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
			},
			children: [a.jsx("div", {
				className: "absolute top-8 left-[3%] text-xl opacity-8 animate-float",
				style: {
					animationDelay: "0s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-6 right-[4%] text-lg opacity-10 animate-float",
				style: {
					animationDelay: "2s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute bottom-6 left-[6%] text-base opacity-6 animate-float",
				style: {
					animationDelay: "4s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute inset-0 opacity-30",
				style: {
					background: `linear-gradient(135deg, ${t.primary}05, transparent, ${t.primaryLight}05)`
				}
			}), a.jsxs("div", {
				className: "max-w-6xl mx-auto relative z-10",
				children: [a.jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
					children: [a.jsxs("div", {
						className: "lg:col-span-1",
						children: [a.jsx("h3", {
							className: "font-orbitron font-black text-2xl sm:text-3xl mb-3",
							style: {
								color: t.primary,
								textShadow: `0 0 20px ${t.primary}50`
							},
							children: "B×R"
						}), a.jsx("p", {
							className: "text-gray-300 mb-4 leading-relaxed text-sm font-orbitron",
							children: "Game Hub"
						}), a.jsx("div", {
							className: "flex space-x-3",
							children: a.jsxs("button", {
								onClick: n,
								className: "flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 hover:scale-110 border-2 group relative overflow-hidden",
								style: {
									backgroundColor: `${t.primary}15`,
									borderColor: `${t.primary}35`,
									boxShadow: `0 0 15px ${t.primary}10`
								},
								onMouseEnter: i => {
									i.currentTarget.style.backgroundColor = t.primary, i.currentTarget.style.borderColor = t.primaryLight, i.currentTarget.style.boxShadow = `0 0 25px ${t.primary}60, inset 0 1px 0 rgba(255,255,255,0.2)`
								},
								onMouseLeave: i => {
									i.currentTarget.style.backgroundColor = `${t.primary}15`, i.currentTarget.style.borderColor = `${t.primary}35`, i.currentTarget.style.boxShadow = `0 0 15px ${t.primary}10`
								},
								children: [a.jsx("div", {
									className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
									style: {
										background: "radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)"
									}
								}), a.jsx(yi, {
									className: "text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10",
									size: 18
								})]
							})
						})]
					}), Object.entries(r).map(([i, s]) => a.jsxs("div", {
						children: [a.jsx("h4", {
							className: "text-white font-semibold mb-3 text-sm uppercase tracking-wide font-orbitron",
							style: {
								color: t.primaryLight
							},
							children: i
						}), a.jsx("ul", {
							className: "space-y-2",
							children: s.map(o => a.jsx("li", {
								children: a.jsxs("button", {
									onClick: o === "Discord" ? n : void 0,
									className: "text-gray-400 hover:text-white transition-all duration-500 text-sm relative group inline-block font-orbitron cursor-pointer",
									children: [a.jsx("span", {
										className: "relative z-10 transition-all duration-500",
										children: o
									}), a.jsx("span", {
										className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-500 group-hover:w-full rounded-full",
										style: {
											background: `linear-gradient(90deg, transparent, ${t.primaryLight}, ${t.primary}, ${t.primaryLight}, transparent)`,
											boxShadow: `0 0 8px ${t.primary}80, 0 0 16px ${t.primary}40`
										}
									}), a.jsx("span", {
										className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 transition-all duration-500 group-hover:w-3/4 rounded-full blur-sm opacity-0 group-hover:opacity-100",
										style: {
											background: `linear-gradient(90deg, transparent, ${t.primary}60, transparent)`
										}
									})]
								})
							}, o))
						})]
					}, i))]
				}), a.jsx("div", {
					className: "border-t pt-5 flex flex-col lg:flex-row justify-between items-center gap-3",
					style: {
						borderColor: `${t.primary}30`,
						boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)"
					},
					children: a.jsx("div", {
						className: "text-gray-400 text-sm font-orbitron text-center lg:text-left",
						children: "© 2025 B×R Hub. All rights reserved."
					})
				})]
			})]
		})
	},
	_b = ({
		message: e,
		isVisible: t,
		onClose: n
	}) => {
		const {
			getThemeColors: r
		} = $e(), i = r();
		return k.useEffect(() => {
			if (t) {
				const s = setTimeout(() => {
					n()
				}, 3e3);
				return () => clearTimeout(s)
			}
		}, [t, n]), t ? a.jsx("div", {
			className: "fixed top-60 right-4 z-50 animate-slideDown",
			children: a.jsxs("div", {
				className: "flex items-center gap-3 bg-black/90 backdrop-blur-sm border rounded-xl p-4 min-w-[300px] shadow-lg",
				style: {
					borderColor: `${i.primary}60`,
					boxShadow: `0 10px 30px ${i.primary}30`
				},
				children: [a.jsx("div", {
					className: "flex items-center justify-center w-8 h-8 rounded-full",
					style: {
						backgroundColor: `${i.primary}20`
					},
					children: a.jsx(nc, {
						size: 18,
						style: {
							color: i.primary
						}
					})
				}), a.jsx("div", {
					className: "flex-1",
					children: a.jsx("p", {
						className: "text-white font-medium text-sm",
						children: e
					})
				}), a.jsx("button", {
					onClick: n,
					className: "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 hover:bg-white/10",
					children: a.jsx(Gs, {
						size: 14,
						className: "text-gray-400 hover:text-white"
					})
				})]
			})
		}) : null
	},
	Ib = () => {
		const [e, t] = jx();
		fo();
		const [n, r] = k.useState("Windows"), [i, s] = k.useState(!1), [o, l] = k.useState(!1), [u, c] = k.useState(null), [d, f] = k.useState(!1), {
			getThemeColors: p
		} = $e(), g = p(), v = [{
			id: "Totally Accurate Battle Simulator",
			name: "Totally Accurate Battle Simulator",
			icon: "🤪",
			version: "v1.8.7",
			url: "https://bstshrt.com/beddrock/ww2",
			manualStatus: "Released",
			description: "Totally Accurate Battle Simulator"
		}, {
			id: "FNAF: Into the Pit",
			name: "FNAF: Into the Pit",
			icon: "🤖",
			version: "v1.0.9.0",
			url: "https://bstshrt.com/beddrock/nnn",
			manualStatus: "Released",
			description: "FNAF: Into the Pit"
		}, {
			id: "Assassin's Creed Rogue",
			name: "Assassin's Creed Rogue",
			icon: "🗡️",
			version: "v1.1.0",
			url: "",
			manualStatus: "Coming Soon",
			description: "Assassin's Creed Rogue"
		}, {
			id: "Assassin's Creed IV Black Flag",
			name: "Assassin's Creed IV Black Flag",
			icon: "🏴‍☠️",
			version: "v1.0.8",
			url: "",
			manualStatus: "Coming Soon",
			description: "Assassin's Creed IV Black Flag"
		}, {
			id: "Assassin's Creed III",
			name: "Assassin's Creed III",
			icon: "🏹",
			version: "v1.0.6",
			url: "",
			manualStatus: "Coming Soon",
			description: "Assassin's Creed III"
		}, {
			id: "Assassin's Creed Liberation",
			name: "Assassin's Creed Liberation",
			icon: "👒",
			version: "v1.0.2",
			url: "",
			manualStatus: "Coming Soon",
			description: "Assassin's Creed Liberation"
		}, {
			id: "Call of Duty's Modern Warfare 3 (2011)",
			name: "Call of Duty's Modern Warfare 3 (2011)",
			icon: "💣",
			version: "v1.9.461",
			url: "",
			manualStatus: "Coming Soon",
			description: "Call of Duty's Modern Warfare 3 (2011)"
		}], y = b => {
	const S = {
		Released: "#10B981",
		"W.I.P": "#F59E0B",
		Discontinued: "#EF4444",
		Beta: "#3B82F6",
		"Coming Soon": "#8B5CF6"
	};
	const status = (typeof b.manualStatus === "string" && b.manualStatus.trim() !== "")
		? b.manualStatus
		: "W.I.P";
	return {
		status,
		statusColor: S[status] || "#F59E0B"
	};
};
		k.useEffect(() => {
			const b = e.get("platform");
			b && v.some(S => S.id === b) ? r(b) : b || t({
				platform: "Windows"
			})
		}, [e, t]);
		const w = v.find(b => b.id === n),
			h = w ? y(w) : null,
			m = v.filter(b => b.id !== n),
			x = b => {
				l(!0), t({
					platform: b
				}), setTimeout(() => {
					r(b), s(!1), setTimeout(() => {
						l(!1)
					}, 150)
				}, 150)
			},
			j = () => {
				!w || !h || !(h.status === "Released") || w != null && w.url && window.open(w.url, "_blank")
			},
			C = (() => {
				switch (n) {
					case "Totally Accurate Battle Simulator":
						return [{
							icon: "📦",
							text: "Size: 5GB",
							color: "#e66f0eea"
						}, {
							icon: "👥",
							text: "Release: Igruha",
							color: "#ffffff"
						}, {
							icon: "🔑",
							text: "Crack: Yes (CODEX)",
							color: "#ffffffff"
						}, {
							icon: "🔓",
							text: `Seeders: ${Math.floor(Math.random() * 500 + 50)}`,
							color: "#e7b613ff"
						}];
					case "FNAF: Into the Pit":
						return [{
							icon:"📦",
							text: "Size: 3GB",
							color: "#6B7280"
						}, {
							icon: "👥",
							text: "Release: FitGirl",
							color: "#6B7280"
						}, {
							icon: "🔑",
							text: "Crack: Yes (TENOKE)",
							color: "#6B7280"
						}, {
							icon: "🔓",
							text: `Seeders: ${Math.floor(Math.random() * 500 + 50)}`,
							color: "#e7b613ff"
						}];
					case "Assassin's Creed Rogue":
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}];
					case "Assassin's Creed IV Black Flag":
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}];
					case "Assassin's Creed III":
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}];
					case "Assassin's Creed Liberation":
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}];
					case "Call of Duty's Modern Warfare 3":
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}];
					case "Assassin's Creed Liberation":
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}];
					default:
						return [{
							icon: a.jsx(dt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(rt, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Ur, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}, {
							icon: a.jsx(Et, {
								size: 16
							}),
							text: "N/A",
							color: "#6B7280"
						}]
				}
			})();
		return a.jsxs(a.Fragment, {
			children: [a.jsx(_b, {
				message: "Download link copied to clipboard!",
				isVisible: d,
				onClose: () => f(!1)
			}), a.jsxs("section", {
				className: "min-h-screen relative overflow-hidden pt-32 pb-16 px-4 sm:px-6",
				children: [a.jsx("div", {
					className: "absolute top-24 left-6 text-2xl opacity-20 animate-float",
					style: {
						animationDelay: "0s"
					},
					children: getRandomEmoji(t)
				}), a.jsx("div", {
					className: "absolute top-32 right-8 text-xl opacity-15 animate-float",
					style: {
						animationDelay: "2s"
					},
					children: getRandomEmoji(t)
				}), a.jsx("div", {
					className: "absolute bottom-32 left-12 text-lg opacity-25 animate-float",
					style: {
						animationDelay: "4s"
					},
					children: getRandomEmoji(t)
				}), a.jsx("div", {
					className: "absolute bottom-40 right-16 text-xl opacity-18 animate-float",
					style: {
						animationDelay: "1s"
					},
					children: getRandomEmoji(t)
				}), a.jsxs("div", {
					className: "max-w-4xl mx-auto",
					children: [a.jsxs("div", {
						className: "text-center mb-12",
						children: [a.jsx("div", {
							className: "flex items-center justify-center mb-6",
							children: a.jsxs("div", {
								className: "relative p-3 rounded-xl border group",
								style: {
									background: `linear-gradient(135deg, ${g.primary}15, rgba(0,0,0,0.4))`,
									borderColor: `${g.primary}40`,
									boxShadow: `0 10px 20px ${g.primary}20`
								},
								children: [a.jsx(jl, {
									size: 24,
									style: {
										color: g.primary
									},
									className: "group-hover:scale-110 transition-transform duration-500"
								}), a.jsx("span", {
									className: "absolute -top-2 -right-2 text-sm animate-bounce opacity-60",
									children: getRandomEmoji(t)
								}), a.jsx("div", {
									className: "absolute inset-0 rounded-xl opacity-30 blur-md animate-pulse",
									style: {
										background: `radial-gradient(circle, ${g.primary}40, transparent)`
									}
								})]
							})
						}), a.jsx("h1", {
							className: "font-orbitron font-black text-2xl sm:text-3xl md:text-4xl mb-6",
							style: {
								color: g.primary,
								textShadow: `0 0 25px ${g.primary}45`
							},
							children: "Download B×R"
						}), a.jsx("p", {
							className: "text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto",
							children: "Choose our games and download the game you want that is avaliable to you."
						}), a.jsx("div", {
							className: "mt-8 mb-8",
							children: a.jsx("img", {
								src: "/assets/logo.png",
								alt: "B×R Banner",
								className: "mx-auto rounded-2xl border shadow-2xl max-w-full h-auto",
								style: {
									borderColor: `${g.primary}40`,
									boxShadow: `0 20px 40px ${g.primary}25`,
									maxWidth: "600px",
									width: "100%"
								}
							})
						})]
					}), a.jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16",
						children: [a.jsx("div", {
							className: "space-y-8",
							children: a.jsxs("div", {
								className: "bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300",
								style: {
									borderColor: `${g.primary}30`,
									background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
									boxShadow: `0 15px 30px ${g.primary}12`
								},
								children: [a.jsxs("div", {
									className: "mb-8",
									children: [a.jsxs("h3", {
										className: "font-bold mb-6 text-lg font-orbitron flex items-center gap-2",
										style: {
											color: g.primary
										},
										children: ["🎮", 
											"Select Games"]
									}), a.jsxs("div", {
										className: "relative",
										children: [a.jsxs("button", {
											onClick: () => s(!i),
											className: "w-full flex items-center justify-between p-4 bg-black/60 border rounded-2xl text-left transition-all duration-300",
											style: {
												borderColor: `${g.primary}30`
											},
											children: [a.jsxs("div", {
												className: `flex items-center space-x-4 transition-all duration-300 ${o?"opacity-0 scale-95":"opacity-100 scale-100"}`,
												children: [a.jsx("div", {
													className: "flex items-center justify-center w-10 h-10 rounded-lg",
													style: {
														color: g.primaryLight,
														backgroundColor: `${g.primary}15`,
														border: `1px solid ${g.primary}30`
													},
													children: w == null ? void 0 : w.icon
												}), a.jsxs("div", {
													children: [a.jsxs("div", {
														className: "flex items-center gap-3",
														children: [a.jsx("span", {
															className: "text-white font-semibold text-base",
															children: w == null ? void 0 : w.name
														}), a.jsx("span", {
															className: "text-xs px-3 py-1 rounded-full font-medium",
															style: {
																backgroundColor: `${h==null?void 0:h.statusColor}20`,
																color: h == null ? void 0 : h.statusColor
															},
															children: h == null ? void 0 : h.status
														})]
													}), a.jsx("div", {
														className: "text-gray-400 text-sm mt-1",
														children: w == null ? void 0 : w.version
													})]
												})]
											}), a.jsx(bb, {
												className: `transform transition-transform duration-300 ${i?"rotate-180":""}`,
												style: {
													color: g.primaryLight
												},
												size: 20
											})]
										}), i && a.jsx("div", {
											className: "absolute bottom-full left-0 right-0 mb-2 bg-black/95 backdrop-blur-md border rounded-2xl overflow-hidden z-20 animate-dropdown",
											style: {
												borderColor: `${g.primary}30`
											},
											children: m.map(b => {
												const S = y(b);
												return a.jsxs("button", {
													onClick: () => x(b.id),
													className: "w-full flex items-center space-x-4 p-4 text-left transition-all duration-300 hover:bg-white/5",
													children: [a.jsx("div", {
														className: "flex items-center justify-center w-10 h-10 rounded-xl",
														style: {
															color: g.primaryLight,
															backgroundColor: `${g.primary}15`
														},
														children: b.icon
													}), a.jsxs("div", {
														className: "flex-1",
														children: [a.jsxs("div", {
															className: "flex items-center space-x-2",
															children: [a.jsx("span", {
																className: "text-white font-medium",
																children: b.name
															}), a.jsx("span", {
																className: "text-xs px-2 py-1 rounded-full font-medium",
																style: {
																	backgroundColor: `${S.statusColor}20`,
																	color: S.statusColor
																},
																children: S.status
															})]
														}), a.jsx("div", {
															className: "text-gray-400 text-sm",
															children: b.version
														})]
													})]
												}, b.id)
											})
										})]
									})]
								}), a.jsxs("button", {
									onClick: j,
									disabled: !h || h.status !== "Released",
									className: "download-button w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-700 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed",
									style: {
										background: !h || h.status !== "Released" ? "#6B7280" : `linear-gradient(135deg, ${g.primary}, ${g.primaryDark})`,
										boxShadow: !h || h.status !== "Released" ? "none" : `0 10px 30px ${g.primary}35`
									},
									children: [h && h.status === "Released" && a.jsxs(a.Fragment, {
										children: [a.jsx("div", {
											className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
											style: {
												background: `linear-gradient(135deg, ${g.primaryLight}90, ${g.primary}80, ${g.primaryLight}90)`
											}
										}), a.jsx("div", {
											className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000",
											style: {
												background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
												transform: "translateX(-100%)",
												animation: "shimmer 2s ease-in-out infinite"
											}
										}), a.jsx("div", {
											className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500",
											children: a.jsx("div", {
												className: "absolute inset-0 rounded-xl animate-ping",
												style: {
													background: `linear-gradient(135deg, ${g.primary}30, transparent)`,
													animationDuration: "2s"
												}
											})
										})]
									}), a.jsxs("div", {
										className: `relative z-10 flex items-center gap-3 transition-all duration-500 group-hover:scale-105 ${o?"opacity-0 scale-95":"opacity-100 scale-100"}`,
										children: [a.jsx("div", {
											className: "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 group-hover:rotate-12",
											style: {
												background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
												boxShadow: `0 0 15px ${g.primary}50`
											},
											children: a.jsx(jl, {
												size: 16,
												className: "text-white drop-shadow-lg"
											})
										}), a.jsx("span", {
											className: "font-bold tracking-wide",
											children: (h == null ? void 0 : h.status) === "Discontinued" ? "Discontinued" : (h == null ? void 0 : h.status) === "W.I.P" ? "In Development" : `Download for ${w==null?void 0:w.name}`
										})]
									}), a.jsx("div", {
										className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500",
										style: {
											background: `linear-gradient(to right, transparent, ${g.primaryLight}, ${g.primary}, ${g.primaryLight}, transparent)`,
											boxShadow: `0 0 10px ${g.primary}80`
										}
									})]
								})]
							})
						}), a.jsxs("div", {
							className: "space-y-8",
							children: [a.jsxs("div", {
								className: "bg-black/40 backdrop-blur-sm rounded-2xl p-6 border",
								style: {
									borderColor: `${g.primary}30`,
									background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
									boxShadow: `0 15px 30px ${g.primary}12`
								},
								children: [a.jsxs("h3", {
									className: "font-bold mb-6 text-lg font-orbitron flex items-center gap-2",
									style: {
										color: g.primary
									},
									children: [a.jsx(Et, {
										size: 18
									}), "Game Features"]
								}), a.jsx("div", {
									className: `space-y-4 transition-all duration-300 ${o?"opacity-0 scale-95":"opacity-100 scale-100"}`,
									children: C.map((b, S) => a.jsxs("div", {
										className: "flex items-center space-x-3 group p-3 rounded-lg transition-all duration-300 hover:bg-white/5",
										children: [a.jsx("div", {
											className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110",
											style: {
												backgroundColor: `${b.color}15`,
												color: b.color,
												border: `1px solid ${b.color}30`
											},
											children: b.icon
										}), a.jsx("span", {
											className: "text-gray-300 group-hover:text-white transition-colors duration-300 font-medium text-sm",
											children: b.text
										})]
									}, S))
								})]
							}), a.jsxs("div", {
								className: "bg-black/40 backdrop-blur-sm rounded-2xl p-6 border",
								style: {
									borderColor: `${g.primary}30`,
									background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
									boxShadow: `0 15px 30px ${g.primary}12`
								},
								children: [a.jsxs("h3", {
									className: "font-bold mb-6 text-lg font-orbitron flex items-center gap-2",
									style: {
										color: g.primary
									},
									children: [a.jsx(nc, {
										size: 18
									}), "Game Info"]
								}), a.jsxs("div", {
									className: `transition-all duration-300 ${o?"opacity-0 scale-95":"opacity-100 scale-100"}`,
									children: [a.jsx("p", {
										className: "text-gray-300 text-base leading-relaxed mb-4",
										children: w == null ? void 0 : w.description
									}), a.jsxs("div", {
										className: "flex items-center gap-2 text-sm",
										children: [a.jsx("div", {
											className: "w-2 h-2 rounded-full animate-pulse",
											style: {
												backgroundColor: h == null ? void 0 : h.statusColor
											}
										}), a.jsxs("span", {
											className: "text-gray-400",
											children: ["Status:", a.jsx("span", {
												style: {
													color: h == null ? void 0 : h.statusColor
												},
												children: h == null ? void 0 : h.status
											})]
										})]
									})]
								})]
							})]
						})]
					})]
				})]
			}), a.jsx(Ut, {})]
		})
	},
	Hb = () => {
		const [e, t] = k.useState(0), [n, r] = k.useState([]), [i, s] = k.useState(!0), [o, l] = k.useState(null), [u, c] = k.useState(!1), {
			getThemeColors: d
		} = $e(), f = d(), p = k.useRef(null), g = Zt(), v = fo(), [y, w] = k.useState(!1), h = [{
			id: "899630396461944912",
			name: "Bedd_Rock",
			role: "Ownerr",
			description: "The owner of B×R",
		}, {
			id: "1099917132373954672",
			name: "Miki_Real",
			role: "Developer",
			description: "Investor (50K$)"
		}];
		k.useEffect(() => {
			(async () => {
				s(!0), l(null);
				const S = await Promise.all(h.map(async $ => {
					try {
						if ($.customAvatar || $.customBanner) return {
							...$,
							avatarUrl: $.customAvatar,
							bannerUrl: $.customBanner
						};
						let E = {},
							W = {};
						try {
							const oe = await fetch(`https://avatar-cyan.vercel.app/api/${$.id}`);
							oe.ok && (E = await oe.json())
						} catch (oe) {
							console.warn(`Failed to fetch user data for ${$.name}:`, oe)
						}
						try {
							const oe = await fetch(`https://avatar-cyan.vercel.app/api/banner/${$.id}`);
							oe.ok && (W = await oe.json())
						} catch (oe) {
							console.warn(`Failed to fetch banner data for ${$.name}:`, oe)
						}
						return {
							...$,
							id: $.id,
							avatarUrl: E.avatarUrl,
							username: E.username,
							bannerUrl: W.bannerUrl
						}
					} catch (E) {
						return console.warn(`Failed to fetch data for ${$.name}:`, E), $
					}
				}));
				r(S), s(!1)
			})()
		}, []), k.useEffect(() => {
			var b, S;
			((b = n[e]) == null ? void 0 : b.id) === "custom-forevermoretogether" ? (S = p.current) == null || S.play().catch(() => {}): p.current && (p.current.pause(), p.current.currentTime = 0)
		}, [e]), k.useEffect(() => {
			let S = new URLSearchParams(g.search).get("con");
			if (!S && n.length > 0 && !y) {
				const $ = Math.floor(Math.random() * n.length);
				S = n[$].name, t($), w(!0), v(`?con=${encodeURIComponent(S)}`, {
					replace: !0
				});
				return
			}
			if (S && n.length > 0) {
				const $ = n.findIndex(E => E.name.toLowerCase() === S.toLowerCase());
				if ($ !== -1) t($), w(!0);
				else if (!y) {
					const E = Math.floor(Math.random() * n.length);
					t(E), w(!0), v(`?con=${encodeURIComponent(n[E].name)}`, {
						replace: !0
					})
				}
			}
		}, [n, g.search, v, y]);
		const m = () => {
				u || (c(!0), setTimeout(() => {
					const b = (e + 1) % n.length;
					t(b), v(`?con=${encodeURIComponent(n[b].name)}`, {
						replace: !0
					}), setTimeout(() => c(!1), 200)
				}, 200))
			},
			x = () => {
				u || (c(!0), setTimeout(() => {
					const b = (e - 1 + n.length) % n.length;
					t(b), v(`?con=${encodeURIComponent(n[b].name)}`, {
						replace: !0
					}), setTimeout(() => c(!1), 200)
				}, 200))
			},
			j = b => {
				u || b === e || (c(!0), setTimeout(() => {
					t(b), v(`?con=${encodeURIComponent(n[b].name)}`, {
						replace: !0
					}), setTimeout(() => c(!1), 200)
				}, 200))
			},
			N = (b, S) => {
				b === "discord" && n[e].id !== "custom-forevermoretogether" ? window.open(`https://discord.com/users/${n[e].id}`, "_blank") : b === "github" && S && window.open(S, "_blank")
			};
		if (i) return a.jsxs(a.Fragment, {
			children: [a.jsxs("section", {
				className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6",
				children: [a.jsx("div", {
					className: "absolute inset-0 bg-black/60"
				}), a.jsx("video", {
					autoPlay: !0,
					muted: !0,
					loop: !0,
					playsInline: !0,
					className: "absolute inset-0 w-full h-full object-cover",
					children: a.jsx("source", {
						src: "https://files.catbox.moe/2lht8i.mp4",
						type: "video/mp4"
					})
				}), a.jsxs("div", {
					className: "text-center relative z-10",
					children: [a.jsx("div", {
						className: "w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4",
						style: {
							borderColor: `${f.primary}40`,
							borderTopColor: "transparent"
						}
					}), a.jsx("p", {
						className: "text-gray-300",
						children: "Loading contributors..."
					})]
				})]
			}), a.jsx(Ut, {})]
		});
		if (o) return a.jsxs(a.Fragment, {
			children: [a.jsxs("section", {
				className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6",
				children: [a.jsx("div", {
					className: "absolute inset-0 bg-black/60"
				}), a.jsx("video", {
					autoPlay: !0,
					muted: !0,
					loop: !0,
					playsInline: !0,
					className: "absolute inset-0 w-full h-full object-cover",
					children: a.jsx("source", {
						src: "https://files.catbox.moe/2lht8i.mp4",
						type: "video/mp4"
					})
				}), a.jsxs("div", {
					className: "text-center relative z-10",
					children: [a.jsxs("p", {
						className: "text-red-400 mb-4",
						children: ["Error loading contributors: ", o]
					}), a.jsx("button", {
						onClick: () => window.location.reload(),
						className: "px-4 py-2 rounded-lg border",
						style: {
							borderColor: f.primary,
							color: f.primary
						},
						children: "Retry"
					})]
				})]
			}), a.jsx(Ut, {})]
		});
		const C = n[e];
		return a.jsxs(a.Fragment, {
			children: [a.jsx("audio", {
				ref: p,
				src: "https://files.catbox.moe/ny9lu8.mp4",
				preload: "auto"
			}), a.jsxs("section", {
				className: "min-h-screen relative overflow-hidden pt-24 pb-16 px-4 sm:px-6",
				children: [a.jsx("div", {
					className: "absolute top-16 left-6 text-xl opacity-15 animate-float",
					style: {
						animationDelay: "0s"
					},
					children: getRandomEmoji(t)
				}), a.jsx("div", {
					className: "absolute top-24 right-10 text-lg opacity-20 animate-float",
					style: {
						animationDelay: "2s"
					},
					children: getRandomEmoji(t)
				}), a.jsx("div", {
					className: "absolute bottom-20 left-12 text-base opacity-12 animate-float",
					style: {
						animationDelay: "4s"
					},
					children: getRandomEmoji(t)
				}), a.jsx("div", {
					className: "absolute bottom-28 right-16 text-xl opacity-18 animate-float",
					style: {
						animationDelay: "1s"
					},
					children: getRandomEmoji(t)
				}), a.jsxs("div", {
					className: "max-w-7xl mx-auto relative z-10",
					children: [a.jsxs("div", {
						className: "text-center mb-16 mt-8",
						children: [a.jsx("div", {
							className: "flex items-center justify-center mb-6",
							children: a.jsxs("div", {
								className: "relative p-4 rounded-2xl border group mt-8",
								style: {
									background: `linear-gradient(135deg, ${f.primary}15, rgba(0,0,0,0.4))`,
									borderColor: `${f.primary}40`,
									boxShadow: `0 15px 30px ${f.primary}25`
								},
								children: [a.jsx(Ur, {
									size: 32,
									style: {
										color: f.primary
									},
									className: "group-hover:scale-110 transition-transform duration-500"
								}), a.jsx("span", {
									className: "absolute -top-2 -right-2 text-sm animate-pulse opacity-50",
									children: getRandomEmoji(t)
								}), a.jsx("div", {
									className: "absolute inset-0 rounded-2xl opacity-40 blur-lg animate-pulse",
									style: {
										background: `radial-gradient(circle, ${f.primary}40, transparent)`
									}
								})]
							})
						}), a.jsx("h1", {
							className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-4",
							style: {
								color: f.primary,
								textShadow: `0 0 30px ${f.primary}50`
							},
							children: "Our Contributor"
						}), a.jsx("p", {
							className: "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
							children: "Meet the talented developers and contributors who make B×R possible"
						})]
					}), a.jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12",
						children: [a.jsx("div", {
							className: "lg:col-span-3 order-2 lg:order-1",
							children: a.jsx("div", {
								className: "h-full",
								children: a.jsxs("div", {
									className: "bg-black/60 backdrop-blur-xl rounded-3xl p-6 border h-full",
									style: {
										borderColor: `${f.primary}30`,
										boxShadow: `0 10px 30px ${f.primary}15`
									},
									children: [a.jsxs("div", {
										className: "flex items-center gap-2 mb-4",
										children: [a.jsx(Ur, {
											size: 16,
											style: {
												color: f.primary
											}
										}), a.jsx("span", {
											className: "text-sm font-semibold font-orbitron",
											style: {
												color: f.primaryLight
											},
											children: "Contributors"
										})]
									}), a.jsxs("div", {
										className: "text-xs text-gray-400 font-orbitron mb-4 text-center",
										children: [e + 1, " of ", n.length]
									}), a.jsx("div", {
										className: "lg:hidden mb-6",
										children: a.jsx("div", {
											className: "flex items-center justify-center gap-3 mb-4 flex-wrap",
											children: n.slice(Math.max(0, e - 2), Math.min(n.length, e + 3)).map((b, S) => {
												const $ = Math.max(0, e - 2) + S,
													E = $ === e;
												return a.jsxs("button", {
													onClick: () => j($),
													disabled: u,
													className: `relative transition-all duration-300 ${u?"opacity-50":""}`,
													style: {
														cursor: u ? "not-allowed" : "pointer"
													},
													children: [a.jsx("div", {
														className: `rounded-full border-2 transition-all duration-300 ${E?"w-8 h-3 scale-110":"w-3 h-3 hover:scale-125"}`,
														style: {
															background: E ? `linear-gradient(90deg, ${f.primary}, ${f.primaryLight})` : "transparent",
															borderColor: E ? f.primary : `${f.primary}50`,
															boxShadow: E ? `0 0 15px ${f.primary}70, 0 0 30px ${f.primary}40` : "none"
														}
													}), E && a.jsx("div", {
														className: "absolute inset-0 rounded-full animate-pulse",
														style: {
															background: `linear-gradient(90deg, ${f.primary}60, ${f.primaryLight}60)`,
															animationDuration: "2s"
														}
													})]
												}, $)
											})
										})
									}), a.jsx("div", {
										className: "hidden lg:block mb-6",
										children: a.jsx("div", {
											className: "grid grid-cols-3 gap-1.5 mb-4",
											children: n.map((b, S) => a.jsxs("button", {
												onClick: () => j(S),
												disabled: u,
												className: `group relative transition-all duration-300 ${u?"opacity-50":""}`,
												style: {
													cursor: u ? "not-allowed" : "pointer"
												},
												title: b.name,
												children: [a.jsxs("div", {
													className: `w-full aspect-square rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${S===e?"scale-110":"hover:scale-105"}`,
													style: {
														background: S === e ? `linear-gradient(135deg, ${f.primary}40, ${f.primaryLight}30)` : `linear-gradient(135deg, ${f.primary}15, rgba(0,0,0,0.3))`,
														borderColor: S === e ? f.primary : `${f.primary}40`,
														boxShadow: S === e ? `0 0 20px ${f.primary}60, 0 0 40px ${f.primary}30` : "none",
														transform: "scale(0.85)"
													},
													children: [b.avatarUrl ? a.jsx("img", {
														src: b.avatarUrl,
														alt: b.name,
														className: "w-full h-full object-cover rounded-lg",
														onError: $ => {
															const E = $.target;
															E.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(b.name)}&background=${f.primary.slice(1)}&color=ffffff&size=64`
														}
													}) : a.jsx("div", {
														className: "w-full h-full flex items-center justify-center text-xs font-bold",
														style: {
															color: f.primaryLight
														},
														children: b.name.charAt(0).toUpperCase()
													}), S === e && a.jsxs(a.Fragment, {
														children: [a.jsx("div", {
															className: "absolute inset-0 rounded-lg animate-ping",
															style: {
																background: `linear-gradient(135deg, ${f.primary}30, ${f.primaryLight}20)`,
																animationDuration: "2s"
															}
														}), a.jsx("div", {
															className: "absolute inset-0 rounded-lg",
															style: {
																background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
																animation: "shimmer 2s ease-in-out infinite"
															}
														})]
													})]
												}), a.jsx("div", {
													className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 border rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 pointer-events-none",
													style: {
														borderColor: `${f.primary}40`,
														color: f.primaryLight,
														boxShadow: `0 4px 15px ${f.primary}25`
													},
													children: b.name
												})]
											}, S))
										})
									}), a.jsx("div", {
										className: "text-center",
										children: a.jsxs("div", {
											className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium",
											style: {
												backgroundColor: `${f.primary}15`,
												borderColor: `${f.primary}40`,
												color: f.primaryLight
											},
											children: [a.jsx("div", {
												className: "w-2 h-2 rounded-full animate-pulse",
												style: {
													backgroundColor: f.primary
												}
											}), a.jsx("span", {
												className: "hidden lg:inline",
												children: "Click avatar"
											}), a.jsx("span", {
												className: "lg:hidden",
												children: "Navigate"
											})]
										})
									})]
								})
							})
						}), a.jsx("div", {
							className: "lg:col-span-6 order-1 lg:order-2",
							children: a.jsxs("div", {
								className: "relative",
								children: [a.jsxs("div", {
									className: `backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 overflow-hidden relative ${u?"opacity-0 scale-95 blur-sm":"opacity-100 scale-100 blur-0"}`,
									style: {
										borderColor: `${f.primary}40`,
										boxShadow: `0 15px 30px ${f.primary}20`,
										background: "rgba(0,0,0,0.6)",
										minHeight: "400px"
									},
									children: [(C == null ? void 0 : C.id) === "custom-forevermoretogether" ? a.jsxs("div", {
										className: "absolute inset-0 rounded-3xl overflow-hidden",
										children: [a.jsx("video", {
											autoPlay: !0,
											muted: !0,
											loop: !0,
											playsInline: !0,
											className: "absolute inset-0 w-full h-full object-cover",
											children: a.jsx("source", {
												src: "https://files.catbox.moe/ny9lu8.mp4",
												type: "video/mp4"
											})
										}, C.id), a.jsx("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 rounded-3xl"
										})]
									}) : C != null && C.bannerUrl ? a.jsx("div", {
										className: "absolute inset-0 rounded-3xl",
										style: {
											backgroundImage: `url(${C.bannerUrl})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat"
										},
										children: a.jsx("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 rounded-3xl"
										})
									}) : a.jsxs("div", {
										className: "absolute inset-0 rounded-3xl overflow-hidden",
										children: [a.jsx("video", {
											autoPlay: !0,
											muted: !0,
											loop: !0,
											playsInline: !0,
											className: "absolute inset-0 w-full h-full object-cover",
											children: a.jsx("source", {
												src: "https://files.catbox.moe/2lht8i.mp4",
												type: "video/mp4"
											})
										}), a.jsx("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"
										})]
									}), a.jsx("div", {
										className: "relative z-10 h-full flex flex-col justify-center",
										children: a.jsxs("div", {
											className: "text-center",
											children: [a.jsxs("div", {
												className: "relative mb-6",
												children: [a.jsx("div", {
													className: "absolute -inset-3 rounded-full opacity-50 animate-pulse-glow",
													style: {
														background: `radial-gradient(circle, ${f.primary}40, transparent)`,
														filter: "blur(8px)"
													}
												}), a.jsx("div", {
													className: "relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-3 overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm",
													style: {
														borderColor: f.primary,
														boxShadow: `0 0 25px ${f.primary}60, 0 0 50px ${f.primary}30, inset 0 0 20px rgba(0,0,0,0.4)`
													},
													children: C != null && C.avatarUrl ? a.jsx("img", {
														src: C.avatarUrl,
														alt: C.name,
														className: "w-full h-full object-cover",
														onError: b => {
															const S = b.target;
															S.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(C.name)}&background=${f.primary.slice(1)}&color=ffffff&size=256`
														}
													}) : a.jsx("div", {
														className: "w-full h-full flex items-center justify-center text-2xl font-bold",
														style: {
															backgroundColor: `${f.primary}20`,
															color: f.primary
														},
														children: C == null ? void 0 : C.name.charAt(0).toUpperCase()
													})
												})]
											}), a.jsx("h2", {
												className: "text-xl sm:text-2xl font-bold mb-3 font-orbitron drop-shadow-lg",
												style: {
													color: f.primary,
													textShadow: `0 0 20px ${f.primary}70, 0 2px 4px rgba(0,0,0,0.8), 0 0 40px ${f.primary}30`
												},
												children: C == null ? void 0 : C.name
											}), a.jsx("div", {
												className: "inline-block px-3 py-1.5 rounded-full border mb-4 text-xs backdrop-blur-md",
												style: {
													backgroundColor: `${f.primary}25`,
													borderColor: `${f.primary}60`,
													color: f.primaryLight,
													boxShadow: `0 6px 20px ${f.primary}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
													textShadow: "0 1px 2px rgba(0,0,0,0.8)"
												},
												children: a.jsx("span", {
													className: "font-semibold",
													children: C == null ? void 0 : C.role
												})
											}), a.jsx("p", {
												className: "text-white leading-relaxed mb-6 text-sm px-4 drop-shadow-lg font-medium",
												style: {
													textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.8)"
												},
												children: C == null ? void 0 : C.description
											}), a.jsxs("div", {
												className: "flex items-center justify-center gap-4",
												children: [(C == null ? void 0 : C.id) !== "custom-forevermoretogether" && a.jsxs("button", {
													onClick: () => N("discord"),
													className: "group relative flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-xs backdrop-blur-md overflow-hidden",
													style: {
														background: "linear-gradient(135deg, #5865F2, #4752C4)",
														boxShadow: "0 6px 20px #5865F230, inset 0 1px 0 rgba(255,255,255,0.2)",
														border: "1px solid rgba(255,255,255,0.1)"
													},
													children: [a.jsx("div", {
														className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"
													}), a.jsxs("div", {
														className: "relative z-10 flex items-center gap-2",
														children: [a.jsx(yi, {
															size: 16
														}), a.jsx("span", {
															children: "Discord"
														})]
													})]
												}), (C == null ? void 0 : C.github) && a.jsxs("button", {
													onClick: () => N("github", C.github),
													className: "group relative flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-xs backdrop-blur-md overflow-hidden",
													style: {
														background: "linear-gradient(135deg, #333, #24292e)",
														boxShadow: "0 6px 20px #33333330, inset 0 1px 0 rgba(255,255,255,0.1)",
														border: "1px solid rgba(255,255,255,0.1)"
													},
													children: [a.jsx("div", {
														className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"
													}), a.jsxs("div", {
														className: "relative z-10 flex items-center gap-2",
														children: [a.jsx(hb, {
															size: 16
														}), a.jsx("span", {
															children: "GitHub"
														})]
													})]
												})]
											})]
										})
									})]
								}), a.jsxs("div", {
									className: "flex items-center justify-center gap-8 mt-6",
									children: [a.jsxs("button", {
										onClick: x,
										disabled: u,
										className: "flex items-center justify-center w-14 h-14 rounded-2xl border-2 transition-all duration-500 hover:scale-110 group backdrop-blur-md relative overflow-hidden",
										style: {
											background: `linear-gradient(135deg, ${f.primary}15, rgba(0,0,0,0.4))`,
											borderColor: `${f.primary}50`,
											boxShadow: `0 8px 25px ${f.primary}20`,
											opacity: u ? .5 : 1,
											cursor: u ? "not-allowed" : "pointer"
										},
										onMouseEnter: b => {
											u || (b.currentTarget.style.background = `linear-gradient(135deg, ${f.primary}25, ${f.primaryLight}15)`, b.currentTarget.style.borderColor = f.primary, b.currentTarget.style.boxShadow = `0 12px 35px ${f.primary}40, 0 0 25px ${f.primary}30`)
										},
										onMouseLeave: b => {
											u || (b.currentTarget.style.background = `linear-gradient(135deg, ${f.primary}15, rgba(0,0,0,0.4))`, b.currentTarget.style.borderColor = `${f.primary}50`, b.currentTarget.style.boxShadow = `0 8px 25px ${f.primary}20`)
										},
										children: [a.jsx("div", {
											className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
											style: {
												background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
												transform: "translateX(-100%)",
												animation: "shimmer 2s ease-in-out infinite"
											}
										}), a.jsx(kb, {
											size: 24,
											style: {
												color: f.primaryLight
											},
											className: "relative z-10 group-hover:scale-110 transition-transform duration-300"
										})]
									}), a.jsxs("button", {
										onClick: m,
										disabled: u,
										className: "flex items-center justify-center w-14 h-14 rounded-2xl border-2 transition-all duration-500 hover:scale-110 group backdrop-blur-md relative overflow-hidden",
										style: {
											background: `linear-gradient(135deg, ${f.primary}15, rgba(0,0,0,0.4))`,
											borderColor: `${f.primary}50`,
											boxShadow: `0 8px 25px ${f.primary}20`,
											opacity: u ? .5 : 1,
											cursor: u ? "not-allowed" : "pointer"
										},
										onMouseEnter: b => {
											u || (b.currentTarget.style.background = `linear-gradient(135deg, ${f.primary}25, ${f.primaryLight}15)`, b.currentTarget.style.borderColor = f.primary, b.currentTarget.style.boxShadow = `0 12px 35px ${f.primary}40, 0 0 25px ${f.primary}30`)
										},
										onMouseLeave: b => {
											u || (b.currentTarget.style.background = `linear-gradient(135deg, ${f.primary}15, rgba(0,0,0,0.4))`, b.currentTarget.style.borderColor = `${f.primary}50`, b.currentTarget.style.boxShadow = `0 8px 25px ${f.primary}20`)
										},
										children: [a.jsx("div", {
											className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
											style: {
												background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
												transform: "translateX(-100%)",
												animation: "shimmer 2s ease-in-out infinite"
											}
										}), a.jsx(jb, {
											size: 24,
											style: {
												color: f.primaryLight
											},
											className: "relative z-10 group-hover:scale-110 transition-transform duration-300"
										})]
									})]
								})]
							})
						}), a.jsx("div", {
							className: "lg:col-span-3 order-3 lg:order-3",
							children: a.jsx("div", {
								className: "bg-black/50 backdrop-blur-xl rounded-2xl p-6 border relative overflow-hidden h-full",
								style: {
									borderColor: `${f.primary}40`,
									boxShadow: `0 10px 25px ${f.primary}15`
								},
								children: a.jsxs("div", {
									className: "text-center",
									children: [a.jsxs("div", {
										className: "flex items-center justify-center gap-2 mb-4",
										children: [a.jsx(Et, {
											size: 18,
											style: {
												color: f.primary
											}
										}), a.jsx("h3", {
											className: "text-lg font-bold font-orbitron",
											style: {
												color: f.primary
											},
											children: "Team Stats"
										})]
									}), a.jsx("div", {
										className: "text-3xl font-black mb-2 font-orbitron",
										style: {
											color: f.primaryLight,
											textShadow: `0 0 20px ${f.primaryLight}60`
										},
										children: n.length
									}), a.jsx("p", {
										className: "text-white text-sm font-medium mb-4",
										children: "Total Contributors"
									})]
								})
							})
						})]
					})]
				})]
			}), a.jsx(Ut, {})]
		})
	},
	Kb = () => {
		const {
			getThemeColors: e
		} = $e(), t = e();
		return a.jsxs("div", {
			className: "fixed inset-0 pointer-events-none overflow-hidden",
			children: [
				[...Array(3)].map((n, r) => a.jsx("div", {
					className: "absolute text-lg animate-shooting-star opacity-40",
					style: {
						left: `${Math.random()*100}%`,
						top: `${Math.random()*100}%`,
						animationDelay: `${r*2+1}s`,
						animationDuration: `${8+Math.random()*4}s`,
						color: "#8B4513"
					},
					children: getRandomEmoji(t)
				}, `bat-${r}`)), [...Array(2)].map((n, r) => a.jsx("div", {
					className: "absolute text-base animate-shooting-star opacity-30",
					style: {
						left: `${Math.random()*100}%`,
						top: `${Math.random()*100}%`,
						animationDelay: `${r*3+2}s`,
						animationDuration: `${10+Math.random()*3}s`,
						color: "#F8F8FF"
					},
					children: getRandomEmoji(t)
				}, `ghost-${r}`)), [...Array(3)].map((n, r) => a.jsx("div", {
					className: "absolute w-1 h-1 rounded-full animate-shooting-star opacity-60",
					style: {
						backgroundColor: t.primaryLight,
						left: `${Math.random()*100}%`,
						top: `${Math.random()*100}%`,
						animationDelay: `${r*1.2}s`,
						animationDuration: `${3+Math.random()*2}s`,
						boxShadow: `0 0 6px ${t.primaryLight}`
					},
					children: a.jsx("div", {
						className: "absolute inset-0 rounded-full blur-sm",
						style: {
							backgroundColor: t.primaryLight
						}
					})
				}, `regular-${r}`)), [...Array(4)].map((n, r) => a.jsxs("div", {
					className: "absolute w-1.5 h-1.5 rounded-full animate-shooting-star opacity-80",
					style: {
						backgroundColor: "#FFFFFF",
						left: `${Math.random()*100}%`,
						top: `${Math.random()*100}%`,
						animationDelay: `${r*.8+.5}s`,
						animationDuration: `${2.5+Math.random()*1.5}s`,
						boxShadow: `0 0 12px ${t.primary}, 0 0 24px ${t.primaryLight}, 0 0 36px #FFFFFF`,
						filter: "brightness(1.5)"
					},
					children: [a.jsx("div", {
						className: "absolute inset-0 rounded-full blur-sm animate-pulse",
						style: {
							backgroundColor: "#FFFFFF",
							animationDuration: "0.8s"
						}
					}), a.jsx("div", {
						className: "absolute -inset-2 rounded-full blur-md animate-pulse",
						style: {
							backgroundColor: t.primaryLight,
							opacity: .6,
							animationDuration: "1.2s",
							animationDelay: "0.3s"
						}
					})]
				}, `bright-${r}`)), [...Array(2)].map((n, r) => a.jsx("div", {
					className: "absolute w-0.5 h-0.5 rounded-full animate-shooting-star opacity-40",
					style: {
						backgroundColor: t.primary,
						left: `${Math.random()*100}%`,
						top: `${Math.random()*100}%`,
						animationDelay: `${r*2+1}s`,
						animationDuration: `${4+Math.random()*2}s`,
						boxShadow: `0 0 4px ${t.primary}`
					},
					children: a.jsx("div", {
						className: "absolute inset-0 rounded-full blur-xs",
						style: {
							backgroundColor: t.primary
						}
					})
				}, `faint-${r}`))
			]
		})
	},
	Gb = () => {
		const {
			getThemeColors: e
		} = $e(), t = e();
		return a.jsxs("div", {
			className: "fixed inset-0 pointer-events-none overflow-hidden",
			children: [a.jsx("div", {
				className: "absolute top-20 left-10 w-8 h-8 animate-float opacity-60",
				style: {
					animationDelay: "0s",
					animationDuration: "6s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-32 right-20 w-6 h-6 animate-float opacity-50",
				style: {
					animationDelay: "2s",
					animationDuration: "8s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-60 left-1/4 w-5 h-5 animate-float opacity-40",
				style: {
					animationDelay: "4s",
					animationDuration: "7s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute bottom-40 right-10 w-7 h-7 animate-float opacity-55",
				style: {
					animationDelay: "1s",
					animationDuration: "9s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-1/2 right-1/4 w-6 h-6 animate-float opacity-45",
				style: {
					animationDelay: "3s",
					animationDuration: "5s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute bottom-60 left-16 w-8 h-8 animate-float opacity-50",
				style: {
					animationDelay: "5s",
					animationDuration: "10s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-80 right-1/3 w-5 h-5 animate-float opacity-35",
				style: {
					animationDelay: "6s",
					animationDuration: "6s"
				},
				children: getRandomEmoji(t)
			}), a.jsx("div", {
				className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 rounded-full blur-3xl",
				style: {
					background: `radial-gradient(ellipse, ${t.primary}25, ${t.primaryLight}15, transparent)`,
					zIndex: 5
				}
			}), a.jsx("div", {
				className: "absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl animate-blob",
				style: {
					background: `radial-gradient(circle, ${t.primary}30, ${t.primary}20, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute -top-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 rounded-full blur-3xl animate-blob animation-delay-2000",
				style: {
					background: `radial-gradient(circle, ${t.primaryLight}25, ${t.primary}15, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute -bottom-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 rounded-full blur-3xl animate-blob animation-delay-4000",
				style: {
					background: `radial-gradient(circle, ${t.primaryDark}35, ${t.primary}25, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute -bottom-20 -left-20 w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-3xl animate-blob animation-delay-6000",
				style: {
					background: `radial-gradient(circle, ${t.primary}20, ${t.primaryLight}15, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 rounded-full blur-2xl animate-float-slow",
				style: {
					background: `radial-gradient(circle, ${t.primary}10, ${t.primaryLight}10, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl animate-float animation-delay-2000",
				style: {
					background: `radial-gradient(circle, ${t.primaryLight}15, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-xl animate-float-slow animation-delay-4000",
				style: {
					background: `radial-gradient(circle, ${t.primaryDark}20, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-lg animate-pulse",
				style: {
					background: `radial-gradient(circle, ${t.primary}25, transparent)`,
					animationDuration: "3s"
				}
			}), a.jsx("div", {
				className: "absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full blur-lg animate-pulse animation-delay-2000",
				style: {
					background: `radial-gradient(circle, ${t.primaryLight}20, transparent)`,
					animationDuration: "4s"
				}
			}), a.jsx("div", {
				className: "absolute top-1/2 -left-10 w-28 h-40 rounded-full blur-2xl animate-drift",
				style: {
					background: `linear-gradient(45deg, ${t.primary}15, ${t.primaryLight}10, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-1/2 -right-10 w-28 h-40 rounded-full blur-2xl animate-drift animation-delay-4000",
				style: {
					background: `linear-gradient(-45deg, ${t.primary}15, ${t.primaryLight}10, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-3/4 left-1/6 w-36 h-36 rounded-full blur-3xl animate-float animation-delay-6000",
				style: {
					background: `radial-gradient(circle, ${t.primary}12, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-1/6 right-1/6 w-44 h-44 rounded-full blur-3xl animate-blob animation-delay-8000",
				style: {
					background: `radial-gradient(circle, ${t.primaryLight}10, transparent)`
				}
			}), a.jsx("div", {
				className: "absolute top-10 left-10 w-20 h-20 rounded-full blur-xl animate-pulse",
				style: {
					background: `radial-gradient(circle, ${t.primary}18, transparent)`,
					animationDuration: "5s"
				}
			}), a.jsx("div", {
				className: "absolute bottom-10 right-10 w-24 h-24 rounded-full blur-xl animate-pulse animation-delay-3000",
				style: {
					background: `radial-gradient(circle, ${t.primaryLight}15, transparent)`,
					animationDuration: "6s"
				}
			})]
		})
	};

const downloadTextColors = {
	Halloween: {
		label: "#F97316",
		headingStart: "#FDBA74",
		headingEnd: "#C2410C",
		description: "#FED7AA",
		headingAngle: "100deg"
	},
	"Tokyo Night": {
		label: "#6366F1",
		headingStart: "#C7D2FE",
		headingEnd: "#312E81",
		description: "#E0E7FF",
		headingAngle: "100deg"
	},
	Phrog: {
		label: "#10B981",
		headingStart: "#6EE7B7",
		headingEnd: "#047857",
		description: "#D1FAE5",
		headingAngle: "100deg"
	},
	Valentine: {
		label: "#EF4444",
		headingStart: "#FDA4AF",
		headingEnd: "#B91C1C",
		description: "#FEE2E2",
		headingAngle: "100deg"
	},
	Christmas: {
		label: "#1523eb",
		headingStart: "#e9e4e4",
		headingEnd: "#d31616",
		description: "#4e8b07",
		headingAngle: "100deg"
	}
};

const downloadThemeNames = {
	orange: "Halloween",
	blue: "Christmas",
	gray: "Tokyo Night",
	green: "Phrog",
	red: "Valentine"
};

const downloadGameDetails = {
	"Totally Accurate Battle Simulator": {
		steamId: "508440",
		aboutHtml: `<h2>About This Game</h2><span class="bb_img_ctn"><video class="bb_img" autoplay muted loop playsinline poster="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/dfa2122b8f1c91435f6259a5fd685f70.poster.avif?t=1730715415" width="616" height="300"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/dfa2122b8f1c91435f6259a5fd685f70.webm?t=1730715415" type="video/webm"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/dfa2122b8f1c91435f6259a5fd685f70.mp4?t=1730715415" type="video/mp4"></video></span><br><br><strong>Be the leader of red and blue wobblers from ancient lands, spooky places, and fantasy worlds. Watch them fight in simulations made with the wobbliest physics system ever created.</strong><br><br>When you grow tired of the 100+ wobblers at your disposal you can make new ones in the unit creator.<br><br>You can also send wobblers to fight your friends or strangers in online multiplayer!<br><br><span class="bb_img_ctn"><video class="bb_img" autoplay muted loop playsinline poster="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/4f54450c7dc7f5443fe2968a49862407.poster.avif?t=1730715415" width="616" height="190"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/4f54450c7dc7f5443fe2968a49862407.webm?t=1730715415" type="video/webm"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/4f54450c7dc7f5443fe2968a49862407.mp4?t=1730715415" type="video/mp4"></video></span><h2 class="bb_tag">Features:</h2><ul class="bb_ul"><li>Campaigns</li><li>Multiplayer</li><li>Workshop</li><li>Unit, map and faction Creator</li><li>Campaign and battle creator</li><li>Sandbox mode</li><li>Unit Possession</li><li>A bunch of silly units</li></ul><br><span class="bb_img_ctn"><video class="bb_img" autoplay muted loop playsinline poster="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/4a59451ffa111c86225db768c55f285a.poster.avif?t=1730715415" width="616" height="226"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/4a59451ffa111c86225db768c55f285a.webm?t=1730715415" type="video/webm"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/4a59451ffa111c86225db768c55f285a.mp4?t=1730715415" type="video/mp4"></video></span><h2 class="bb_tag">Custom content and workshop:</h2><ul class="bb_ul"><li>Unit and faction Creator</li><li>Campaign and battle creator</li><li>In-game workshop</li></ul><br><span class="bb_img_ctn"><video class="bb_img" autoplay muted loop playsinline poster="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/c2ab27c1bc1cb9e1d42c4aaf39ebd61d.poster.avif?t=1730715415" width="600" height="338"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/c2ab27c1bc1cb9e1d42c4aaf39ebd61d.webm?t=1730715415" type="video/webm"><source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/508440/extras/c2ab27c1bc1cb9e1d42c4aaf39ebd61d.mp4?t=1730715415" type="video/mp4"></video></span>`,
		genre: "Physics sandbox",
		icon: "T",
		version: "Build 25012650",
		size: "5.0 GB",
		release: "May 20, 2025",
		posted: "May 21, 2025",
		credit: "BXR Repack",
		developer: "Landfall Games",
		publisher: "Landfall Games",
		proton: "Gold",
		reviews: "Very Positive",
		positive: "8,672",
		total: "12,158",
		percentage: 71,
		about: "Lead wobbly warriors into spectacularly unpredictable battles. Build your strategy, watch the physics take over, and enjoy a playful tactical sandbox.",
		minimum: ["Windows 10 64-bit", "Intel Core i5-2400", "8 GB RAM", "GTX 670 / HD 7870", "5 GB available space"],
		recommended: ["Windows 10 / 11 64-bit", "Intel Core i7-4790K", "16 GB RAM", "GTX 970 / R9 290", "5 GB available space"],
		hero: "linear-gradient(105deg,#171015,#3d2220 55%,#9b5427)"
	},
	"FNAF: Into the Pit": {
		steamId: "2638370",
		genre: "Adventure horror", icon: "F", version: "Build 1.0.9.0", size: "3.0 GB", release: "Aug 7, 2024", posted: "Aug 8, 2024", credit: "FitGirl Repack", developer: "Mega Cat Studios", publisher: "Mega Cat Studios", proton: "Platinum", reviews: "Overwhelmingly Positive", positive: "4,921", total: "5,218", percentage: 94, about: "Explore a haunting mystery packed with secrets, tension, and a story that will not stay buried.", minimum: ["Windows 10 64-bit", "Intel Core i3", "4 GB RAM", "GTX 650", "3 GB available space"], recommended: ["Windows 11 64-bit", "Intel Core i5", "8 GB RAM", "GTX 970", "3 GB available space"], hero: "linear-gradient(105deg,#170d14,#592336 55%,#b0524b)"
	},
	"Assassin's Creed Rogue": {
		steamId: "311560",
		genre: "Open-world action", icon: "R", version: "Build 1.1.0", size: "9.4 GB", release: "Mar 10, 2015", posted: "Jun 14, 2025", credit: "DODI Repack", developer: "Ubisoft Sofia", publisher: "Ubisoft", proton: "Gold", reviews: "Very Positive", positive: "3,642", total: "4,810", percentage: 76, about: "Sail the icy North Atlantic and discover a dangerous new chapter in the Assassin's Creed saga.", minimum: ["Windows 10 64-bit", "Core 2 Duo E8400", "2 GB RAM", "GTX 460", "12 GB available space"], recommended: ["Windows 11 64-bit", "Core i5", "4 GB RAM", "GTX 660", "12 GB available space"], hero: "linear-gradient(105deg,#0c1b26,#18526a 55%,#b66b31)"
	},
	"Assassin's Creed IV Black Flag": {
		steamId: "242050",
		genre: "Pirate adventure", icon: "B", version: "Build 1.0.8", size: "14.2 GB", release: "Nov 19, 2013", posted: "Jun 18, 2025", credit: "BXR Repack", developer: "Ubisoft Montreal", publisher: "Ubisoft", proton: "Platinum", reviews: "Very Positive", positive: "18,432", total: "24,210", percentage: 76, about: "Command your ship, explore islands, and hunt for treasure in the Golden Age of Piracy.", minimum: ["Windows 10 64-bit", "Intel Core2Quad Q8400", "4 GB RAM", "GTX 260", "30 GB available space"], recommended: ["Windows 11 64-bit", "Intel Core i5", "8 GB RAM", "GTX 660", "30 GB available space"], hero: "linear-gradient(105deg,#071721,#17607a 55%,#c18b41)"
	},
	"Assassin's Creed III": {
		steamId: "208480",
		genre: "Historical action", icon: "3", version: "Build 1.0.6", size: "12.8 GB", release: "Nov 20, 2012", posted: "Jun 21, 2025", credit: "FitGirl Repack", developer: "Ubisoft Montreal", publisher: "Ubisoft", proton: "Gold", reviews: "Mostly Positive", positive: "9,102", total: "12,590", percentage: 72, about: "Fight for freedom across a changing frontier during the American Revolution.", minimum: ["Windows 10 64-bit", "Intel Core2Duo", "2 GB RAM", "GTX 260", "17 GB available space"], recommended: ["Windows 11 64-bit", "Intel Core i5", "4 GB RAM", "GTX 660", "17 GB available space"], hero: "linear-gradient(105deg,#151719,#3f4a4d 55%,#9e3030)"
	},
	"Assassin's Creed Liberation": {
		steamId: "260210",
		genre: "Action adventure", icon: "L", version: "Build 1.0.2", size: "4.1 GB", release: "Jan 15, 2014", posted: "Jun 24, 2025", credit: "DODI Repack", developer: "Ubisoft Sofia", publisher: "Ubisoft", proton: "Gold", reviews: "Mostly Positive", positive: "2,486", total: "3,710", percentage: 67, about: "Follow an assassin navigating intrigue and rebellion in 18th-century New Orleans.", minimum: ["Windows 10 64-bit", "Intel Core2Duo", "2 GB RAM", "GTX 260", "4 GB available space"], recommended: ["Windows 11 64-bit", "Intel Core i5", "4 GB RAM", "GTX 660", "4 GB available space"], hero: "linear-gradient(105deg,#102019,#3b6b52 55%,#b1783d)"
	}
};

const renderLegacyDownloadDetails = game => `<div class="details-shell"><button id="details-back" class="back" type="button">← Back</button></div>`;

const steamFallbackDescriptions = {
	"FNAF: Into the Pit": `<h2>About This Game</h2><p>Jump into the pit and immerse yourself in a new chapter in the Five Nights at Freddy's universe. Oswald explores a rundown pizzeria and finds himself pulled into the past.</p><p>Survive five nights of terror. Travel between time periods, gather clues, solve puzzles, and outrun the threat relentlessly pursuing you.</p><h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li>Explore eerie environments and uncover hidden secrets.</li><li>Solve puzzles and gather clues across time periods.</li><li>Run, hide, and survive the horrors of the pit.</li><li>Discover a story connected to the Five Nights at Freddy's universe.</li></ul>`,
	"Assassin's Creed Rogue": `<h2>About This Game</h2><p>18th century, North America. Amid the chaos of the French and Indian War, Shay Patrick Cormac undergoes a transformation that will reshape the future of the colonies.</p><p>Play as Shay and experience the darkest chapter in the Assassin's Creed franchise as he turns from Assassin to Assassin Hunter.</p><h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li>Become the ultimate Assassin Hunter as a Templar.</li><li>Use an air rifle, specialized ammunition, and enhanced eagle vision.</li><li>Command the Morrigan through the North Atlantic and river valleys.</li><li>Explore New York City, the River Valley, and an arctic open world.</li></ul>`,
	"Assassin's Creed IV Black Flag": `<h2>About This Game</h2><p>Discover Assassin's Creed IV Black Flag, the classic pirate action-adventure game from 2013.</p><p>Become Edward Kenway, a charismatic pirate captain trained by Assassins. Command the Jackdaw, hunt Templars, plunder ships, and carve your legend across the Caribbean.</p><h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li>Live the gritty reality behind the pirate fantasy.</li><li>Command your ship and upgrade its weapons and equipment.</li><li>Explore an open world from Kingston to Nassau.</li><li>Loot shipwrecks, search for treasure, and assassinate Templars.</li><li>Put your assassination skills to the test in multiplayer.</li></ul>`,
	"Assassin's Creed III": `<h2>About This Game</h2><p>The American Colonies, 1775. As a Native American assassin fights to protect his land and his people, he will ignite the flames of a young nation's revolution.</p><h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li>Eliminate enemies with guns, bows, tomahawks, and more.</li><li>Experience legendary events of the American Revolution.</li><li>Explore city streets, wilderness, and chaotic battlefields.</li><li>Experience the Ubisoft-AnvilNext engine with advanced physics and combat.</li></ul>`,
	"Assassin's Creed Liberation": `<h2>About This Game</h2><p>Introducing Assassin's Creed Liberation HD, the striking chapter of the pre-American Revolution saga. With improved gameplay, a deeper story, and HD graphics, Liberation is a full Assassin's Creed experience.</p><p>The year is 1765. As Spanish forces plan to take control of Louisiana, Aveline uses every weapon and ability in her arsenal to fight for freedom.</p><h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li>Play as Aveline, an Assassin of mixed French and African heritage.</li><li>Use a machete, poison-dart blowpipe, whip, and duelling pistols.</li><li>Explore New Orleans, the Louisiana bayou, and ancient Mayan ruins.</li><li>Experience improved graphics, missions, cinematics, music, and sound.</li></ul>`
};

const steamImageUrls = steamId => ({
	poster: `https://cdn.akamai.steamstatic.com/steam/apps/${steamId}/library_600x900.jpg`,
	header: `https://cdn.akamai.steamstatic.com/steam/apps/${steamId}/header.jpg`,
	hero: `https://cdn.akamai.steamstatic.com/steam/apps/${steamId}/library_hero.jpg`
});

const parseSteamRequirements = (html, fallback) => {
	if (!html) return fallback.map((value, index) => ({ label: ["OS", "Processor", "Memory", "Graphics", "Storage"][index] || "Notes", value }));
	const rows = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(match => match[1].replace(/<br\s*\/?>(\s*)/gi, " ").replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/\s+/g, " ").trim()).filter(Boolean);
	return rows.map(row => {
		const separator = row.indexOf(":");
		return separator > -1 ? { label: row.slice(0, separator).trim(), value: row.slice(separator + 1).trim() } : { label: "Notes", value: row };
	});
};

const renderRequirementRows = rows => rows.map(row => `<span class="requirement-row"><span>${row.label}</span><b>${row.value}</b></span>`).join("");

const renderDownloadDetails = game => {
	const images = steamImageUrls(game.steamId), poster = game.capsule_image || images.poster, header = game.header_image || images.header, hero = game.background || images.hero;
	const description = game.about_the_game || game.aboutHtml || steamFallbackDescriptions[game.name] || game.short_description || game.about;
	const requirements = game.pc_requirements || {};
	const minimumRows = parseSteamRequirements(requirements.minimum, game.minimum), recommendedRows = parseSteamRequirements(requirements.recommended, game.recommended);
	const requirementText = renderRequirementRows(minimumRows), recommendedText = renderRequirementRows(recommendedRows);
	return `<div class="details-shell"><button id="details-back" class="back" type="button">← Back</button><header class="hero"><div class="hero-art" style="background-image:linear-gradient(105deg,rgba(8,8,10,.88),rgba(8,8,10,.2)),url('${hero}')"></div><div class="hero-content"><img class="game-icon-image" src="${header}" alt="${game.name} icon" onerror="this.src='${images.header}'"><div><p class="kicker">PC game / ${game.genre}</p><h1>${game.name}</h1><p class="hero-meta">${game.version} &nbsp;•&nbsp; ${game.size} &nbsp;•&nbsp; Windows</p></div></div></header><div class="detail-grid"><div class="detail-column"><section class="panel store-panel"><img class="store-poster" src="${poster}" alt="${game.name} cover" onerror="this.src='${images.poster}'"><div class="store-copy"><h2>${game.name}</h2><p>${game.short_description || game.about}</p><button class="read-more" type="button" data-read-more>Read more</button><div class="about hidden"><p>${description}</p></div></div></section><section class="panel"><h2 class="panel-title">System requirements</h2><div class="requirements"><section><h3>Minimum</h3><p class="requirement-copy">${requirementText}</p></section><section><h3>Recommended</h3><p class="requirement-copy">${recommendedText}</p></section></div></section></div><div class="detail-column"><section id="download-panel" class="panel mirrors"><div class="mirror-grid"><a class="mirror-btn bzzhr" href="https://example.com/bzzhr-link" target="_blank" rel="noopener">⚡ BZZHR Direct Download</a><a class="mirror-btn pixeldrain" href="https://example.com/pixeldrain-link" target="_blank" rel="noopener">📦 PixelDrain Mirror</a><div class="split-mirrors"><a class="mirror-btn torrent" href="https://example.com/torrent-file" target="_blank" rel="noopener">📄 .Torrent File</a><a class="mirror-btn magnet" href="https://example.com/magnet-link" target="_blank" rel="noopener">🧲 Magnet Link</a></div></div></section><section id="release-metadata" class="panel metadata-card"><h2 class="panel-title">Release</h2><div class="metadata-row"><span>RELEASE</span><b>${game.release}</b></div><div class="metadata-row"><span>FILE SIZE</span><b>${game.size}</b></div><div class="metadata-row"><span>CREDITS</span><b>${game.credit}</b></div><div class="metadata-row"><span>POSTED</span><b>${game.posted}</b></div></section><section class="panel metadata-card"><h2 class="panel-title">Steam rating</h2><div class="metadata-row"><span>DEVELOPER</span><b>${game.developer || "Steam data unavailable"}</b></div><div class="metadata-row"><span>PUBLISHER</span><b>${game.publisher || "Steam data unavailable"}</b></div><div class="metadata-row"><span>PROTONDB</span><b class="proton">● ${game.proton}</b></div><div class="review-summary"><strong>${game.reviews}</strong><b>${game.percentage}%</b></div><div class="review-bar"><span style="width:${game.percentage}%"></span></div><div class="review-counts"><span>♧ ${game.positive} positive</span><span>${game.total} total reviews</span></div></section></div></div></div>`;
};

function DownloadTabIsolated() {
	const {
		theme: themeName,
		getThemeColors: e
	} = $e(), t = e(), textColors = downloadTextColors[downloadThemeNames[themeName]] || downloadTextColors.Halloween;
	const labelColor = textColors.label || t.primary;
	const headingStartColor = textColors.headingStart || t.primaryLight;
	const headingEndColor = textColors.headingEnd || t.primary;
	const descriptionColor = textColors.description || t.primaryLight;
	k.useEffect(() => {
		const section = document.getElementById("download-tab");
		if (!section) return;
		const catalog = section.querySelector("#catalog-view"), details = section.querySelector("#details-view"), openButtons = section.querySelectorAll("[data-open-details]");
		openButtons.forEach(button => {
			const game = downloadGameDetails[button.dataset.game], images = game && steamImageUrls(game.steamId);
			if (!game || !images) return;
			const probe = new Image();
			probe.onerror = () => button.style.setProperty("--cover", `url('${images.header}')`);
			probe.src = images.poster;
		});
		const openDetails = async event => {
			const gameName = event.currentTarget.dataset.game, game = downloadGameDetails[gameName];
			if (!game) return;
			let steamData = {};
			try {
				const response = await fetch(`http://localhost:3000/api/steam/${game.steamId}`);
				const payload = await response.json();
				steamData = payload?.[game.steamId]?.data || {};
			} catch (error) {
				steamData = {};
			}
			details.innerHTML = renderDownloadDetails({ ...game, ...steamData, name: gameName });
			const heroArt = details.querySelector(".hero-art"), heroImage = `https://cdn.akamai.steamstatic.com/steam/apps/${game.steamId}/library_hero.jpg`, fallbackHero = steamData.background || steamData.header_image;
			if (heroArt) {
				const setHero = image => heroArt.style.backgroundImage = `linear-gradient(90deg,rgba(8,8,10,.68),rgba(8,8,10,.08) 62%),linear-gradient(to bottom,rgba(8,8,10,.08) 25%,rgba(8,8,10,.9) 100%),url('${image}')`;
				setHero(heroImage);
				const heroProbe = new Image();
				heroProbe.onload = () => {};
				heroProbe.onerror = () => fallbackHero && setHero(fallbackHero);
				heroProbe.src = heroImage;
			}
			const hero = details.querySelector(".hero");
			if (hero && game.steamId) {
				const logo = document.createElement("img");
				logo.className = "steam-hero-logo";
				const cdnLogo = `https://cdn.akamai.steamstatic.com/steam/apps/${game.steamId}/logo.png`;
				logo.src = cdnLogo;
				logo.alt = `${gameName} logo`;
				logo.onerror = () => {
					if (steamData.logo && logo.src !== steamData.logo) logo.src = steamData.logo;
					else logo.remove();
				};
				hero.appendChild(logo);
			}
			const storeCopy = details.querySelector(".store-copy");
			if (storeCopy) {
				details.querySelector(".store-poster")?.remove();
				details.querySelector(".store-panel")?.classList.add("steam-description-panel");
				const rawDescription = steamData.about_the_game || game.aboutHtml || steamFallbackDescriptions[gameName] || game.about;
				storeCopy.innerHTML = `<p class="description-notice">This text comes straight from the game's store page and is pulled in automatically. We don't write or edit it, so it may contain spoilers.</p><div id="description-wrapper">${rawDescription}</div><button id="read-more-btn" class="read-more-highlight" type="button">Read More ∨</button>`;
			}
			catalog.classList.add("hidden"), details.classList.remove("hidden"), window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		}, openCatalog = event => {
			if (event.target.closest("#details-back")) {
			details.classList.add("hidden"), catalog.classList.remove("hidden"), window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
			}
			if (event.target.closest("[data-watch]")) {
				const watchButton = event.target.closest("[data-watch]");
				watchButton.classList.toggle("is-watched"), watchButton.textContent = watchButton.classList.contains("is-watched") ? "✓ Watching for updates" : "♧ Watch for updates"
			}
			if (event.target.closest("#read-more-btn")) {
				const wrapper = details.querySelector("#description-wrapper"), button = details.querySelector("#read-more-btn");
				if (wrapper.classList.contains("expanded")) {
					wrapper.classList.remove("expanded"), wrapper.style.maxHeight = "250px", button.textContent = "Read More ∨";
				} else {
					wrapper.classList.add("expanded"), wrapper.style.maxHeight = `${wrapper.scrollHeight}px`, button.textContent = "Show Less ∧";
				}
			}
			if (event.target.closest(".primary-download")) details.querySelector(".mirror-grid")?.scrollIntoView({ behavior: "smooth", block: "center" });
		};
		return openButtons.forEach(button => button.addEventListener("click", openDetails)), details.addEventListener("click", openCatalog), () => {
			openButtons.forEach(button => button.removeEventListener("click", openDetails)), details.removeEventListener("click", openCatalog)
		}
	}, []);
	return a.jsxs(a.Fragment, {
		children: [a.jsx("section", {
			id: "download-tab",
			className: "relative z-10",
			dangerouslySetInnerHTML: {
				__html: `<style>
					#download-tab{--orange:${labelColor};--light:${descriptionColor};--heading-start:${headingStartColor};--heading-end:${headingEndColor};--heading-angle:${downloadTextColors.headingAngle};--bg:#0d0c0f;--panel:#1d1c22;--line:rgba(255,255,255,.1);min-height:100vh;background:transparent;color:#f7f4f1;font-family:Inter,system-ui,sans-serif}#download-tab *{box-sizing:border-box}#download-tab .hidden{display:none!important}#download-tab button,#download-tab input{font:inherit}#download-tab button{cursor:pointer}#download-tab a{color:inherit;text-decoration:none}
					#download-tab .catalog-shell{width:min(1500px,100%);margin:0 auto;padding:8rem 4vw 5rem}#download-tab .kicker{margin:0 0 10px;color:var(--orange);font-family:Orbitron,sans-serif;font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}#download-tab h1{margin:0;background:linear-gradient(var(--heading-angle),var(--heading-start),var(--heading-end),var(--heading-start));background-size:220% 220%;-webkit-background-clip:text;background-clip:text;color:transparent;font-family:Orbitron,sans-serif;font-size:clamp(30px,4.5vw,56px);font-weight:900;line-height:1.07;letter-spacing:-.05em;animation:download-heading-fade 5s ease-in-out infinite alternate}#download-tab .intro{max-width:640px;margin:15px 0 0;color:var(--light);font-size:14px;line-height:1.65;opacity:.7}@keyframes download-heading-fade{from{background-position:0% 50%}to{background-position:100% 50%}}#download-tab .catalog-tools{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:13px;margin:34px 0 19px}#download-tab .search{min-width:min(100%,320px);display:flex;align-items:center;gap:10px;padding:0 14px;border:1px solid var(--line);border-radius:9px;background:#16151a}.search span{color:var(--light);font-size:17px}.search input{width:100%;height:45px;border:0;outline:0;color:#fff;background:transparent;font-size:13px}.search input::placeholder{color:#76727a}#download-tab .filters{display:flex;flex-wrap:wrap;gap:7px}.filters button{padding:9px 12px;border:1px solid var(--line);border-radius:20px;color:#bbb6bd;background:#18171c;font-size:11px;font-weight:700}.filters button:first-child{border-color:var(--orange);color:#1d0c04;background:var(--orange);box-shadow:0 0 20px rgba(249,115,22,.25)}
                    #download-tab .poster-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(182px,1fr));gap:15px}#download-tab .poster-card{min-height:282px;position:relative;overflow:hidden;padding:0;border:1px solid var(--line);border-radius:12px;color:#fff;background:#19181d;text-align:left;isolation:isolate;transition:.25s}#download-tab .poster-card:hover,#download-tab .poster-card:focus-visible{outline:0;transform:translateY(-5px);border-color:var(--orange);box-shadow:0 18px 38px rgba(0,0,0,.55),0 0 22px rgba(249,115,22,.18)}#download-tab .cover{position:absolute;inset:0;background:var(--cover);background-size:cover;background-position:center;transition:.35s}.cover:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,transparent 20%,rgba(8,8,10,.12) 44%,#121116 96%)}.poster-card:hover .cover{transform:scale(1.08);filter:brightness(.77) saturate(1.1)}#download-tab .tag{position:absolute;z-index:1;top:13px;left:13px;padding:5px 7px;border:1px solid rgba(255,255,255,.22);border-radius:4px;background:rgba(8,8,10,.57);font-size:9px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}#download-tab .poster-copy{position:absolute;z-index:1;right:14px;bottom:14px;left:14px;transform:translateY(38px);transition:.28s}.poster-card:hover .poster-copy,.poster-card:focus-visible .poster-copy{transform:translateY(0)}.poster-copy h2{margin:0 0 7px;font-family:Orbitron,sans-serif;font-size:15px;font-weight:900;line-height:1.2}.poster-copy p{min-height:36px;margin:0;color:#d8d3d4;font-size:11px;line-height:1.45;opacity:0;transition:.2s}.poster-card:hover .poster-copy p,.poster-card:focus-visible .poster-copy p{opacity:1}.view-label{position:absolute;z-index:2;right:14px;bottom:17px;color:var(--light);font-size:11px;font-weight:800;opacity:0;transition:.2s}.poster-card:hover .view-label,.poster-card:focus-visible .view-label{opacity:1}
                    #download-tab .details-shell{padding-bottom:5rem}#download-tab .back{position:fixed;z-index:30;top:5.8rem;right:4vw;padding:11px 17px;border:1px solid rgba(255,255,255,.18);border-radius:8px;color:#fff;background:rgba(17,16,20,.88);box-shadow:0 10px 32px rgba(0,0,0,.45);font-size:13px;font-weight:800;backdrop-filter:blur(12px);transition:.2s}.back:hover{border-color:var(--orange);color:#1c0d04;background:var(--orange)}#download-tab .hero{height:min(540px,56vw);min-height:390px;position:relative;display:flex;align-items:flex-end;overflow:hidden;padding:6rem 4vw 4.3rem;background:#2c180e}.hero-art{position:absolute;inset:0;background:linear-gradient(105deg,rgba(12,10,12,.94),rgba(14,12,15,.38) 65%,rgba(12,10,13,.7)),linear-gradient(to bottom,transparent 48%,var(--bg) 97%),url('/assets/logo.png') center/cover}.hero-content{width:min(1380px,100%);position:relative;display:flex;align-items:flex-end;gap:20px}.game-icon{width:clamp(70px,9vw,118px);aspect-ratio:1;display:grid;place-items:center;border:2px solid rgba(255,255,255,.3);border-radius:13px;background:linear-gradient(135deg,var(--orange),#522008);box-shadow:0 14px 40px rgba(0,0,0,.55),0 0 24px rgba(249,115,22,.3);font-family:Orbitron,sans-serif;font-size:37px;font-weight:900}.hero h1{max-width:1000px;margin:3px 0 0;font-size:clamp(28px,5.5vw,70px);text-shadow:0 4px 22px #000}.hero-meta{margin:12px 0 0;color:#ded8d4;font-size:12px;font-weight:600}
                    #download-tab .detail-grid{width:min(1380px,92vw);margin:-7px auto 0;position:relative;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(330px,.9fr);gap:23px}.detail-column{display:grid;align-content:start;gap:23px}.panel{overflow:hidden;border:1px solid var(--line);border-radius:12px;background:linear-gradient(135deg,#232229,#18171d);box-shadow:0 15px 37px rgba(0,0,0,.2)}.panel-title{margin:0;padding:17px 19px 12px;color:var(--light);font-family:Orbitron,sans-serif;font-size:15px;font-weight:900;text-transform:uppercase}.media{aspect-ratio:16/9;position:relative;background:linear-gradient(120deg,rgba(249,115,22,.16),transparent 55%),url('/assets/images.jpeg') center/cover}.play{position:absolute;top:50%;left:50%;width:58px;height:58px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.6);border-radius:50%;color:#201005;background:var(--orange);box-shadow:0 0 35px rgba(249,115,22,.55);font-size:18px}.media-note{position:absolute;right:12px;bottom:11px;padding:6px 8px;border-radius:4px;background:rgba(8,8,10,.75);font-size:10px;font-weight:700}.about{padding:0 19px 20px;color:#d4cfd2;font-size:13px;line-height:1.7}.about p{margin:0}.mirrors{padding:19px}.mirrors h2{margin:0 0 14px;color:var(--light);font-family:Orbitron,sans-serif;font-size:16px;font-weight:900;text-transform:uppercase}.mirror-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.mirror{min-height:48px;display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.11);border-radius:8px;background:#474852;font-size:13px;font-weight:800;transition:.2s}.mirror:hover{transform:translateY(-2px);filter:brightness(1.13)}.mirror b{font-size:17px}.wide{grid-column:1/-1}.bzzhr{border:0;color:#281205;background:linear-gradient(105deg,#ff9a32,var(--orange));box-shadow:0 8px 20px rgba(249,115,22,.26)}.pixel{background:#535561}.link-note{margin:12px 0 0;color:#918c95;font-size:10px;line-height:1.5}.requirements{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:0 19px 20px}.requirements h3{margin:0 0 9px;color:#e9e4e7;font-size:11px;letter-spacing:.08em;text-transform:uppercase}.requirements dl{margin:0}.requirements dt{margin-top:8px;color:#929099;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.requirements dd{margin:2px 0 0;color:#ddd9dd;font-size:11px;line-height:1.4}.cards{display:grid;gap:12px;padding:0 19px 19px}.info-card{padding:16px;border:1px solid rgba(255,255,255,.075);border-radius:8px;background:rgba(8,8,10,.23)}.info-card h3{margin:0 0 12px;color:var(--light);font-family:Orbitron,sans-serif;font-size:13px;font-weight:900;text-transform:uppercase}.info-row{display:grid;grid-template-columns:1fr auto;gap:12px;padding:7px 0;border-top:1px solid rgba(255,255,255,.06);color:#9a969d;font-size:11px}.info-row:first-of-type{padding-top:0;border-top:0}.info-row strong{color:#f2edf0;text-align:right}.rating{margin-top:13px}.rating-label{display:flex;justify-content:space-between;margin-bottom:7px;color:#aaa6ac;font-size:11px}.rating-label strong{color:#7ce082}.meter{height:6px;overflow:hidden;border-radius:99px;background:#38373d}.meter i{display:block;width:95%;height:100%;border-radius:99px;background:linear-gradient(90deg,#34b66c,#96e56b);box-shadow:0 0 12px #42bf70}
                    @media(max-width:800px){#download-tab .catalog-shell{padding-top:7rem}.catalog-tools{align-items:stretch;flex-direction:column}.search{min-width:0!important}.detail-grid{grid-template-columns:1fr;width:min(92vw,620px)}.hero{height:400px!important;padding-bottom:38px!important}.back{top:5.2rem!important;right:15px!important}.hero-content{gap:14px}}@media(max-width:470px){#download-tab .poster-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.poster-card{min-height:230px}.poster-copy{right:12px;bottom:12px;left:12px;transform:translateY(0)}.poster-copy h2{font-size:13px}.poster-copy p,.view-label{display:none}.requirements{grid-template-columns:1fr;gap:16px}.hero h1{font-size:29px}.game-icon{font-size:25px}}
				  #download-tab h1{background:linear-gradient(90deg,var(--heading-start),var(--heading-end));background-size:100% 100%;animation:none;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:var(--heading-start)}
					#download-tab .primary-download{display:flex;align-items:center;justify-content:center;gap:10px;min-height:56px;margin-bottom:12px;border-radius:12px;color:#fff;background:#ff5500;font-size:16px;box-shadow:0 10px 24px rgba(255,85,0,.25);transition:.2s}#download-tab .primary-download:hover{transform:translateY(-2px);filter:brightness(1.08)}#download-tab .action-pills{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:14px}.action-pills button{min-height:38px;border:1px solid rgba(255,255,255,.12);border-radius:18px;color:#aaa;background:#151515;font-size:11px}.action-pills button:hover,.action-pills button.is-watched{border-color:var(--orange);color:var(--light)}#download-tab .mirror-btn{min-height:48px;display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#fff;font-size:12px;font-weight:800;transition:.2s}.mirror-btn:hover{transform:translateY(-2px);filter:brightness(1.14)}#download-tab .mirror-btn.bzzhr{background:#ff5500;border-color:#ff5500}.mirror-btn.pixeldrain{background:#2b5064}.mirror-btn.torrent{background:#3b3d46}.mirror-btn.magnet{background:#533b4b}.split-mirrors{display:grid;grid-template-columns:1fr 1fr;gap:9px;grid-column:1/-1}#download-tab .metadata-card{padding-bottom:7px;background:#121212}.metadata-card .panel-title{border-bottom:1px solid #222}.metadata-row{display:flex;justify-content:space-between;gap:15px;padding:13px 19px;border-bottom:1px solid #222;color:#777;font-size:10px;letter-spacing:.12em}.metadata-row b{color:#eee;font-size:11px;letter-spacing:0;text-align:right}.metadata-row .proton{color:#f5a400}.review-summary{display:flex;justify-content:space-between;padding:16px 19px 8px;color:var(--orange)}.review-summary strong{font-size:15px}.review-summary b{color:#aaa;font-size:12px}.review-bar{height:5px;margin:0 19px 10px;overflow:hidden;border-radius:4px;background:#2b2b2b}.review-bar span{display:block;height:100%;border-radius:4px;background:var(--orange)}.review-counts{display:flex;justify-content:space-between;padding:0 19px 14px;color:#777;font-size:10px}.review-counts span:first-child{color:#00d084}@media(max-width:470px){#download-tab .action-pills{grid-template-columns:1fr}.split-mirrors{grid-template-columns:1fr}}
					#download-tab .game-icon-image{width:clamp(70px,9vw,118px);aspect-ratio:1;object-fit:cover;border:2px solid rgba(255,255,255,.3);border-radius:13px;box-shadow:0 14px 40px rgba(0,0,0,.55)}#download-tab .store-panel{display:grid;grid-template-columns:minmax(180px,.72fr) minmax(0,1.28fr);align-items:stretch;background:transparent;border:0;border-radius:0;box-shadow:none;overflow:visible}#download-tab .store-poster{width:100%;height:100%;min-height:260px;display:block;object-fit:cover;background:#18181c}.store-copy{padding:22px}.store-copy h2{margin:0 0 12px;color:var(--light);font-family:Orbitron,sans-serif;font-size:18px}.store-copy>p,.store-copy .about p{margin:0;color:#d4cfd2;font-size:13px;line-height:1.7}.read-more{margin-top:18px;padding:10px 17px;border:1px solid var(--orange);border-radius:7px;color:#1d0c04;background:var(--orange);font-size:12px;font-weight:900;box-shadow:0 0 18px rgba(249,115,22,.22)}.store-copy .about{margin-top:16px;padding:14px;border-top:1px solid var(--line);background:rgba(0,0,0,.16)}.requirement-copy{margin:0;padding:0 19px 20px;color:#d4cfd2;font-size:12px;line-height:1.75}@media(max-width:800px){#download-tab .store-panel{grid-template-columns:1fr}#download-tab .store-poster{max-height:360px}}
					#download-tab .game-icon-image{width:clamp(70px,9vw,118px);aspect-ratio:1;object-fit:cover;border:2px solid rgba(255,255,255,.3);border-radius:13px;box-shadow:0 14px 40px rgba(0,0,0,.55)}#download-tab .hero-art{background-position:center;background-size:cover}#download-tab .hero-art:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(to bottom,transparent,rgba(8,8,10,.96))}#download-tab .store-poster{mask-image:linear-gradient(to bottom,#000 60%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,#000 60%,transparent 100%)}#download-tab .requirements{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:0 19px 20px}.requirements section{min-width:0}.requirements h3{margin:0 0 9px;color:var(--light);font-family:Orbitron,sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase}.requirements p.requirement-copy{margin:0;color:#d4cfd2;font-size:12px;line-height:1.75}.requirement-row{display:flex;gap:12px;padding:11px 0;border-top:1px solid rgba(255,255,255,.08)}.requirement-row span{min-width:82px;color:#8d8990;font-weight:700}.requirement-row b{color:#eee;font-weight:500}.requirements-head{display:grid;grid-template-columns:1fr 1fr 1fr;padding:14px 19px;border-bottom:1px solid var(--line);color:var(--light);font-size:10px;letter-spacing:.12em}.requirements-column{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:0 19px 20px}.requirements-column>div{min-width:0}.requirements-column .requirement-row{display:flex}.requirements-column .requirement-row>span{min-width:0;flex:0 0 32%;}.requirements-column .requirement-row>b{flex:1}.store-panel{background:#121212}.store-poster{position:relative}.store-copy{position:relative;z-index:1}@media(max-width:800px){#download-tab .store-panel{grid-template-columns:1fr}#download-tab .store-poster{max-height:360px}#download-tab .requirements-column{grid-template-columns:1fr}}
					#download-tab .hero-content{display:none!important}#download-tab .game-icon-image{width:clamp(70px,9vw,118px);aspect-ratio:1;object-fit:cover;border:2px solid rgba(255,255,255,.3);border-radius:13px;box-shadow:0 14px 40px rgba(0,0,0,.55)}#download-tab .hero-art{background-position:center;background-size:cover}#download-tab .hero-art:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(to bottom,transparent,rgba(8,8,10,.96))}#download-tab .store-poster{mask-image:linear-gradient(to bottom,#000 60%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,#000 60%,transparent 100%)}#download-tab .requirements{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:0 19px 20px}.requirements section{min-width:0}.requirements h3{margin:0 0 9px;color:var(--light);font-family:Orbitron,sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase}.requirements p.requirement-copy{margin:0;color:#d4cfd2;font-size:12px;line-height:1.75}.requirement-row{display:flex;gap:12px;padding:11px 0;border-top:1px solid rgba(255,255,255,.08)}.requirement-row span{min-width:82px;color:#8d8990;font-weight:700}.requirement-row b{color:#eee;font-weight:500}.requirements-head{display:grid;grid-template-columns:1fr 1fr 1fr;padding:14px 19px;border-bottom:1px solid var(--line);color:var(--light);font-size:10px;letter-spacing:.12em}.requirements-column{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:0 19px 20px}.requirements-column>div{min-width:0}.requirements-column .requirement-row{display:flex}.requirements-column .requirement-row>span{min-width:0;flex:0 0 32%;}.requirements-column .requirement-row>b{flex:1}.store-panel{background:#121212}.store-poster{position:relative}.store-copy{position:relative;z-index:1}@media(max-width:800px){#download-tab .store-panel{grid-template-columns:1fr}#download-tab .store-poster{max-height:360px}}
					#download-tab .primary-download{display:flex;align-items:center;justify-content:center;gap:10px;min-height:56px;margin-bottom:12px;border-radius:12px;color:#fff;background:#ff5500;font-size:16px;box-shadow:0 10px 24px rgba(255,85,0,.25);transition:.2s}#download-tab .primary-download:hover{transform:translateY(-2px);filter:brightness(1.08)}#download-tab .action-pills{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:14px}.action-pills button{min-height:38px;border:1px solid rgba(255,255,255,.12);border-radius:18px;color:#aaa;background:#151515;font-size:11px}.action-pills button:hover,.action-pills button.is-watched{border-color:var(--orange);color:var(--light)}#download-tab .mirror-btn{min-height:48px;display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#fff;font-size:12px;font-weight:800;transition:.2s}.mirror-btn:hover{transform:translateY(-2px);filter:brightness(1.14)}#download-tab .mirror-btn.bzzhr{background:#ff5500;border-color:#ff5500}.mirror-btn.pixeldrain{background:#2b5064}.mirror-btn.torrent{background:#3b3d46}.mirror-btn.magnet{background:#533b4b}.split-mirrors{display:grid;grid-template-columns:1fr 1fr;gap:9px;grid-column:1/-1}#download-tab .metadata-card{padding-bottom:7px;background:#121212}.metadata-card .panel-title{border-bottom:1px solid #222}.metadata-row{display:flex;justify-content:space-between;gap:15px;padding:13px 19px;border-bottom:1px solid #222;color:#777;font-size:10px;letter-spacing:.12em}.metadata-row b{color:#eee;font-size:11px;letter-spacing:0;text-align:right}.metadata-row .proton{color:#f5a400}.review-summary{display:flex;justify-content:space-between;padding:16px 19px 8px;color:var(--orange)}.review-summary strong{font-size:15px}.review-summary b{color:#aaa;font-size:12px}.review-bar{height:5px;margin:0 19px 10px;overflow:hidden;border-radius:4px;background:#2b2b2b}.review-bar span{display:block;height:100%;border-radius:4px;background:var(--orange)}.review-counts{display:flex;justify-content:space-between;padding:0 19px 14px;color:#777;font-size:10px}.review-counts span:first-child{color:#00d084}@media(max-width:470px){#download-tab .action-pills{grid-template-columns:1fr}.split-mirrors{grid-template-columns:1fr}}
					#download-tab #description-wrapper{max-height:250px;overflow:hidden;position:relative;transition:max-height .4s ease-in-out;color:#c6d4df}#download-tab #description-wrapper:after{content:"";position:absolute;right:0;bottom:0;left:0;height:100px;background:linear-gradient(to bottom,rgba(10,10,10,0),#0a0a0a);pointer-events:none;transition:opacity .3s ease}#download-tab #description-wrapper.expanded:after{opacity:0}#download-tab #description-wrapper h2,#download-tab #description-wrapper h2.bb_tag{color:#fff;font-size:1.1rem;margin:12px 0 6px}#download-tab #description-wrapper .bb_img_ctn,#download-tab #description-wrapper .bb_img_ctn video,#download-tab #description-wrapper .bb_img_ctn img,#download-tab #description-wrapper img{max-width:100%!important;height:auto!important;border-radius:6px;margin:8px 0;display:block}#download-tab #description-wrapper ul.bb_ul{padding-left:20px;margin:8px 0}.description-notice{margin:0 0 10px;color:#ffb37d;font-size:10px;line-height:1.5}.read-more-highlight{margin-top:10px;padding:8px 16px;border:0;border-radius:6px;color:#fff;background:#ff5500;font-weight:bold;cursor:pointer;box-shadow:0 0 18px rgba(255,85,0,.28)}#download-tab .steam-description-panel{display:block!important}
					#download-tab .steam-hero-logo{position:absolute;z-index:2;left:5vw;top:50%;transform:translateY(-50%);width:min(42vw,560px);max-height:240px;object-fit:contain;object-position:left center;filter:drop-shadow(0 6px 18px rgba(0,0,0,.8))}@media(max-width:800px){#download-tab .steam-hero-logo{left:7vw;width:62vw;max-height:145px}}
				  </style>
                  <div id="catalog-view"><div class="catalog-shell"><p class="kicker">Library / Select a game</p><h1>Choose your next adventure.</h1><p class="intro">Browse the collection, hover a cover to preview it, then open a game for its media, requirements, download mirrors, and release information.</p><div class="catalog-tools"><label class="search"><span>⌕</span><input type="search" placeholder="Search games"></label><div class="filters"><button type="button">All games</button><button type="button">Action</button><button type="button">Adventure</button><button type="button">Horror</button><button type="button">Recently added</button></div></div><div class="poster-grid">
					<button class="poster-card" type="button" data-open-details data-game="Totally Accurate Battle Simulator" style="--cover:url('https://cdn.akamai.steamstatic.com/steam/apps/508440/library_600x900.jpg')"><span class="tag">Physics sandbox</span><span class="cover"></span><span class="poster-copy"><h2>Totally Accurate Battle Simulator</h2><p>Lead wobbly warriors into spectacularly unpredictable battles in a playful tactical sandbox.</p></span><span class="view-label">View game →</span></button>
					<button class="poster-card" type="button" data-open-details data-game="FNAF: Into the Pit" style="--cover:url('https://cdn.akamai.steamstatic.com/steam/apps/2638370/library_600x900.jpg')"><span class="tag">Adventure horror</span><span class="cover"></span><span class="poster-copy"><h2>FNAF: Into the Pit</h2><p>Explore a haunting mystery packed with secrets, tension, and a story that will not stay buried.</p></span><span class="view-label">View game →</span></button>
					<button class="poster-card" type="button" data-open-details data-game="Assassin's Creed Rogue" style="--cover:url('https://cdn.akamai.steamstatic.com/steam/apps/311560/library_600x900.jpg')"><span class="tag">Open-world action</span><span class="cover"></span><span class="poster-copy"><h2>Assassin's Creed Rogue</h2><p>Sail the icy North Atlantic and discover a dangerous new chapter in the Assassin's Creed saga.</p></span><span class="view-label">View game →</span></button>
					<button class="poster-card" type="button" data-open-details data-game="Assassin's Creed IV Black Flag" style="--cover:url('https://cdn.akamai.steamstatic.com/steam/apps/242050/library_600x900.jpg')"><span class="tag">Pirate adventure</span><span class="cover"></span><span class="poster-copy"><h2>Assassin's Creed IV Black Flag</h2><p>Command your ship, explore islands, and hunt for treasure in the Golden Age of Piracy.</p></span><span class="view-label">View game →</span></button>
					<button class="poster-card" type="button" data-open-details data-game="Assassin's Creed III" style="--cover:url('https://cdn.akamai.steamstatic.com/steam/apps/208480/library_600x900.jpg')"><span class="tag">Historical action</span><span class="cover"></span><span class="poster-copy"><h2>Assassin's Creed III</h2><p>Fight for freedom across a changing frontier during the American Revolution.</p></span><span class="view-label">View game →</span></button>
					<button class="poster-card" type="button" data-open-details data-game="Assassin's Creed Liberation" style="--cover:url('https://cdn.akamai.steamstatic.com/steam/apps/260210/library_600x900.jpg')"><span class="tag">Action adventure</span><span class="cover"></span><span class="poster-copy"><h2>Assassin's Creed Liberation</h2><p>Follow an assassin navigating intrigue and rebellion in 18th-century New Orleans.</p></span><span class="view-label">View game →</span></button>
                  </div></div></div>
                  <div id="details-view" class="hidden"><div class="details-shell"><button id="details-back" class="back" type="button">← Back</button><header class="hero"><div class="hero-art"></div><div class="hero-content"><div class="game-icon">T</div><div><p class="kicker">PC game / Physics sandbox</p><h1>Totally Accurate Battle Simulator</h1><p class="hero-meta">Build 25012650 &nbsp;•&nbsp; 5.0 GB &nbsp;•&nbsp; Windows</p></div></div></header><div class="detail-grid"><div class="detail-column"><section class="panel"><h2 class="panel-title">Media</h2><div class="media"><button class="play" type="button" aria-label="Play trailer">▶</button><span class="media-note">Screenshot / trailer URL</span></div></section><section class="panel"><h2 class="panel-title">System requirements</h2><div class="requirements"><section><h3>Minimum</h3><dl><dt>OS</dt><dd>Windows 10 64-bit</dd><dt>CPU</dt><dd>Intel Core i5-2400</dd><dt>RAM</dt><dd>8 GB RAM</dd><dt>GPU</dt><dd>GTX 670 / HD 7870</dd><dt>Storage</dt><dd>5 GB available space</dd></dl></section><section><h3>Recommended</h3><dl><dt>OS</dt><dd>Windows 10 / 11 64-bit</dd><dt>CPU</dt><dd>Intel Core i7-4790K</dd><dt>RAM</dt><dd>16 GB RAM</dd><dt>GPU</dt><dd>GTX 970 / R9 290</dd><dt>Storage</dt><dd>5 GB available space</dd></dl></section></div></section></div><div class="detail-column"><section class="panel"><h2 class="panel-title">About the game</h2><div class="about"><p>Lead wobbly warriors into spectacularly unpredictable battles. Build your strategy, watch the physics take over, and enjoy a playful tactical sandbox.</p></div></section><section class="panel mirrors"><h2>Download mirrors</h2><div class="mirror-grid"><a class="mirror wide bzzhr" href="https://example.com/bzzhr-link" target="_blank" rel="noopener"><b>ϟ</b>BZZHR</a><a class="mirror wide pixel" href="https://example.com/pixeldrain-link" target="_blank" rel="noopener"><b>◇</b>PixelDrain</a><a class="mirror" href="https://example.com/torrent-file" target="_blank" rel="noopener"><b>▧</b>.Torrent File</a><a class="mirror" href="magnet:?xt=urn:btih:REPLACE_WITH_YOUR_HASH"><b>⌁</b>Magnet Link</a></div><p class="link-note">Replace these example <code>href</code> values with your own mirror URLs.</p></section><section class="panel"><h2 class="panel-title">Game information</h2><div class="cards"><article class="info-card"><h3>Release</h3><div class="info-row"><span>Version</span><strong>Build 25012650</strong></div><div class="info-row"><span>Compressed size</span><strong>5.0 GB</strong></div><div class="info-row"><span>Credits</span><strong>BXR Repack</strong></div><div class="info-row"><span>Posted</span><strong>Sep 06, 2026</strong></div></article><article class="info-card"><h3>Game stats</h3><div class="info-row"><span>Developer</span><strong>Landfall</strong></div><div class="info-row"><span>Publisher</span><strong>Landfall</strong></div><div class="info-row"><span>Steam release date</span><strong>Apr 1, 2021</strong></div><div class="rating"><div class="rating-label"><span>Review rating</span><strong>Positive 95%</strong></div><div class="meter"><i></i></div></div></article></div></section></div></div></div></div>`
			}
		}), a.jsx(Ut, {})]
	})
}
function Xb() {
	return a.jsxs(a.Fragment, {
		children: [a.jsx(zb, {}), a.jsx(Vb, {}), a.jsx(Fb, {}), a.jsx(Ut, {})]
	})
}
const Yb = {
		initial: {
			opacity: 0,
			y: 30,
			scale: .95
		},
		in: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		out: {
			opacity: 0,
			y: -30,
			scale: 1.05
		}
	},
	Qb = {
		type: "tween",
		ease: [.25, .46, .45, .94],
		duration: .8
	};

function Zb() {
	const e = Zt();
	return a.jsx(j2, {
		mode: "wait",
		children: a.jsx(sb.div, {
			initial: "initial",
			animate: "in",
			exit: "out",
			variants: Yb,
			transition: Qb,
			className: "will-change-transform",
			children: a.jsxs(dx, {
				location: e,
				children: [a.jsx(on, {
					path: "/",
					element: a.jsx(Xb, {})
				}), a.jsx(on, {
					path: "/download",
					element: a.jsx(DownloadTabIsolated, {})
				}), a.jsx(on, {
					path: "/contribution",
					element: a.jsx(Hb, {})
				})]
			})
		}, e.pathname)
	})
}
function ThemeBackground() {
  const { theme } = $e();
  return theme.background ? a.jsx(theme.background, {}) : null;
}
function qb() {
  return a.jsx(Rb, {
    children: a.jsx(vx, {
      children: a.jsxs("div", {
        className: "min-h-screen bg-black relative overflow-hidden bg-grid-pattern",
        children: [
          a.jsx(ThemeBackground, {}),
          a.jsx(Gb, {}), 
          a.jsx(Kb, {}), 
          a.jsxs("div", {
            className: "relative z-10",
            children: [a.jsx(Ab, {}), a.jsx(Zb, {})]
          })
        ]
      })
    })
  });
}
nm(document.getElementById("root")).render(a.jsx(k.StrictMode, {
	children: a.jsx(qb, {})
}));
