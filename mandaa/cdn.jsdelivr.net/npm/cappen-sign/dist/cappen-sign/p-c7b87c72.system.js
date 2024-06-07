var __extends = this && this.__extends || function() {
    var e = function(t, n) {
        e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t)
                if (t.hasOwnProperty(n)) e[n] = t[n]
        };
        return e(t, n)
    };
    return function(t, n) {
        e(t, n);

        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
var __awaiter = this && this.__awaiter || function(e, t, n, r) {
    function a(e) {
        return e instanceof n ? e : new n((function(t) {
            t(e)
        }))
    }
    return new(n || (n = Promise))((function(n, i) {
        function o(e) {
            try {
                s(r.next(e))
            } catch (t) {
                i(t)
            }
        }

        function l(e) {
            try {
                s(r["throw"](e))
            } catch (t) {
                i(t)
            }
        }

        function s(e) {
            e.done ? n(e.value) : a(e.value).then(o, l)
        }
        s((r = r.apply(e, t || [])).next())
    }))
};
var __generator = this && this.__generator || function(e, t) {
    var n = {
            label: 0,
            sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        },
        r, a, i, o;
    return o = {
        next: l(0),
        throw: l(1),
        return: l(2)
    }, typeof Symbol === "function" && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function l(e) {
        return function(t) {
            return s([e, t])
        }
    }

    function s(o) {
        if (r) throw new TypeError("Generator is already executing.");
        while (n) try {
            if (r = 1, a && (i = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((i = a["return"]) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i;
            if (a = 0, i) o = [o[0] & 2, i.value];
            switch (o[0]) {
                case 0:
                case 1:
                    i = o;
                    break;
                case 4:
                    n.label++;
                    return {
                        value: o[1],
                        done: false
                    };
                case 5:
                    n.label++;
                    a = o[1];
                    o = [0];
                    continue;
                case 7:
                    o = n.ops.pop();
                    n.trys.pop();
                    continue;
                default:
                    if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                        n.label = o[1];
                        break
                    }
                    if (o[0] === 6 && n.label < i[1]) {
                        n.label = i[1];
                        i = o;
                        break
                    }
                    if (i && n.label < i[2]) {
                        n.label = i[2];
                        n.ops.push(o);
                        break
                    }
                    if (i[2]) n.ops.pop();
                    n.trys.pop();
                    continue
            }
            o = t.call(e, n)
        } catch (l) {
            o = [6, l];
            a = 0
        } finally {
            r = i = 0
        }
        if (o[0] & 5) throw o[1];
        return {
            value: o[0] ? o[1] : void 0,
            done: true
        }
    }
};
var __spreadArrays = this && this.__spreadArrays || function() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    for (var r = Array(e), a = 0, t = 0; t < n; t++)
        for (var i = arguments[t], o = 0, l = i.length; o < l; o++, a++) r[a] = i[o];
    return r
};
System.register([], (function(e, t) {
    "use strict";
    return {
        execute: function() {
            var n = this;
            var r = e("N", "cappen-sign");
            var a;
            var i;
            var o = false;
            var l = false;
            var s = e("w", typeof window !== "undefined" ? window : {});
            var f = e("C", s.CSS);
            var u = e("d", s.document || {
                head: {}
            });
            var $ = e("p", {
                $flags$: 0,
                $resourcesUrl$: "",
                jmp: function(e) {
                    return e()
                },
                raf: function(e) {
                    return requestAnimationFrame(e)
                },
                ael: function(e, t, n, r) {
                    return e.addEventListener(t, n, r)
                },
                rel: function(e, t, n, r) {
                    return e.removeEventListener(t, n, r)
                },
                ce: function(e, t) {
                    return new CustomEvent(e, t)
                }
            });
            var c = function() {
                return (u.head.attachShadow + "").indexOf("[native") > -1
            }();
            var v = e("a", (function(e) {
                return Promise.resolve(e)
            }));
            var d = function() {
                try {
                    new CSSStyleSheet;
                    return true
                } catch (e) {}
                return false
            }();
            var h = "{visibility:hidden}.hydrated{visibility:inherit}";
            var p = function(e, t) {
                if (t === void 0) {
                    t = ""
                } {
                    return function() {
                        return
                    }
                }
            };
            var m = function(e, t) {
                {
                    return function() {
                        return
                    }
                }
            };
            var g = new WeakMap;
            var y = function(e, t, n) {
                var r = ge.get(e);
                if (d && n) {
                    r = r || new CSSStyleSheet;
                    r.replace(t)
                } else {
                    r = t
                }
                ge.set(e, r)
            };
            var b = function(e, t, n, r) {
                var a = S(t);
                var i = ge.get(a);
                e = e.nodeType === 11 ? e : u;
                if (i) {
                    if (typeof i === "string") {
                        e = e.head || e;
                        var o = g.get(e);
                        var l = void 0;
                        if (!o) {
                            g.set(e, o = new Set)
                        }
                        if (!o.has(a)) {
                            {
                                if ($.$cssShim$) {
                                    l = $.$cssShim$.createHostStyle(r, a, i, !!(t.$flags$ & 10));
                                    var s = l["s-sc"];
                                    if (s) {
                                        a = s;
                                        o = null
                                    }
                                } else {
                                    l = u.createElement("style");
                                    l.innerHTML = i
                                }
                                e.insertBefore(l, e.querySelector("link"))
                            }
                            if (o) {
                                o.add(a)
                            }
                        }
                    } else if (!e.adoptedStyleSheets.includes(i)) {
                        e.adoptedStyleSheets = __spreadArrays(e.adoptedStyleSheets, [i])
                    }
                }
                return a
            };
            var w = function(e) {
                var t = e.$cmpMeta$;
                var n = e.$hostElement$;
                var r = t.$flags$;
                var a = p("attachStyles", t.$tagName$);
                var i = b(c && n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$, n);
                if (r & 10) {
                    n["s-sc"] = i;
                    n.classList.add(i + "-h")
                }
                a()
            };
            var S = function(e, t) {
                return "sc-" + e.$tagName$
            };
            var _ = {};
            var R = function(e) {
                return e != null
            };
            var x = function() {};
            var C = function(e) {
                e = typeof e;
                return e === "object" || e === "function"
            };
            var N = typeof Deno !== "undefined";
            var E = !N && typeof global !== "undefined" && typeof require === "function" && !!global.process && typeof __filename === "string" && (!global.origin || typeof global.origin !== "string");
            var M = N && Deno.build.os === "windows";
            var j = E ? process.cwd : N ? Deno.cwd : function() {
                return "/"
            };
            var k = E ? process.exit : N ? Deno.exit : x;
            var A = e("h", (function(e, t) {
                var n = [];
                for (var r = 2; r < arguments.length; r++) {
                    n[r - 2] = arguments[r]
                }
                var a = null;
                var i = false;
                var o = false;
                var l = [];
                var s = function(t) {
                    for (var n = 0; n < t.length; n++) {
                        a = t[n];
                        if (Array.isArray(a)) {
                            s(a)
                        } else if (a != null && typeof a !== "boolean") {
                            if (i = typeof e !== "function" && !C(a)) {
                                a = String(a)
                            }
                            if (i && o) {
                                l[l.length - 1].$text$ += a
                            } else {
                                l.push(i ? P(null, a) : a)
                            }
                            o = i
                        }
                    }
                };
                s(n);
                var f = P(e, null);
                f.$attrs$ = t;
                if (l.length > 0) {
                    f.$children$ = l
                }
                return f
            }));
            var P = function(e, t) {
                var n = {
                    $flags$: 0,
                    $tag$: e,
                    $text$: t,
                    $elm$: null,
                    $children$: null
                }; {
                    n.$attrs$ = null
                }
                return n
            };
            var O = {};
            var L = function(e) {
                return e && e.$tag$ === O
            };
            var T = function(e, t, n, r, a, i) {
                if (n !== r) {
                    var o = de(e, t);
                    var l = t.toLowerCase(); {
                        var s = C(r);
                        if ((o || s && r !== null) && !a) {
                            try {
                                if (!e.tagName.includes("-")) {
                                    var f = r == null ? "" : r;
                                    if (t === "list") {
                                        o = false
                                    } else if (n == null || e[t] != f) {
                                        e[t] = f
                                    }
                                } else {
                                    e[t] = r
                                }
                            } catch (u) {}
                        }
                        if (r == null || r === false) {
                            if (r !== false || e.getAttribute(t) === "") {
                                {
                                    e.removeAttribute(t)
                                }
                            }
                        } else if ((!o || i & 4 || a) && !s) {
                            r = r === true ? "" : r; {
                                e.setAttribute(t, r)
                            }
                        }
                    }
                }
            };
            var B = function(e, t, n, r) {
                var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
                var i = e && e.$attrs$ || _;
                var o = t.$attrs$ || _; {
                    for (r in i) {
                        if (!(r in o)) {
                            T(a, r, i[r], undefined, n, t.$flags$)
                        }
                    }
                }
                for (r in o) {
                    T(a, r, i[r], o[r], n, t.$flags$)
                }
            };
            var U = function(e, t, n, r) {
                var i = t.$children$[n];
                var l = 0;
                var s;
                var f;
                if (i.$text$ !== null) {
                    s = i.$elm$ = u.createTextNode(i.$text$)
                } else {
                    s = i.$elm$ = u.createElement(i.$tag$); {
                        B(null, i, o)
                    }
                    if (R(a) && s["s-si"] !== a) {
                        s.classList.add(s["s-si"] = a)
                    }
                    if (i.$children$) {
                        for (l = 0; l < i.$children$.length; ++l) {
                            f = U(e, i, l);
                            if (f) {
                                s.appendChild(f)
                            }
                        }
                    }
                }
                return s
            };
            var I = function(e, t, n, r, a, o) {
                var l = e;
                var s;
                if (l.shadowRoot && l.tagName === i) {
                    l = l.shadowRoot
                }
                for (; a <= o; ++a) {
                    if (r[a]) {
                        s = U(null, n, a);
                        if (s) {
                            r[a].$elm$ = s;
                            l.insertBefore(s, t)
                        }
                    }
                }
            };
            var H = function(e, t, n, r, a) {
                for (; t <= n; ++t) {
                    if (r = e[t]) {
                        a = r.$elm$;
                        a.remove()
                    }
                }
            };
            var z = function(e, t, n, r) {
                var a = 0;
                var i = 0;
                var o = t.length - 1;
                var l = t[0];
                var s = t[o];
                var f = r.length - 1;
                var u = r[0];
                var $ = r[f];
                var c;
                while (a <= o && i <= f) {
                    if (l == null) {
                        l = t[++a]
                    } else if (s == null) {
                        s = t[--o]
                    } else if (u == null) {
                        u = r[++i]
                    } else if ($ == null) {
                        $ = r[--f]
                    } else if (q(l, u)) {
                        D(l, u);
                        l = t[++a];
                        u = r[++i]
                    } else if (q(s, $)) {
                        D(s, $);
                        s = t[--o];
                        $ = r[--f]
                    } else if (q(l, $)) {
                        D(l, $);
                        e.insertBefore(l.$elm$, s.$elm$.nextSibling);
                        l = t[++a];
                        $ = r[--f]
                    } else if (q(s, u)) {
                        D(s, u);
                        e.insertBefore(s.$elm$, l.$elm$);
                        s = t[--o];
                        u = r[++i]
                    } else {
                        {
                            c = U(t && t[i], n, i);
                            u = r[++i]
                        }
                        if (c) {
                            {
                                l.$elm$.parentNode.insertBefore(c, l.$elm$)
                            }
                        }
                    }
                }
                if (a > o) {
                    I(e, r[f + 1] == null ? null : r[f + 1].$elm$, n, r, i, f)
                } else if (i > f) {
                    H(t, a, o)
                }
            };
            var q = function(e, t) {
                if (e.$tag$ === t.$tag$) {
                    return true
                }
                return false
            };
            var D = function(e, t) {
                var n = t.$elm$ = e.$elm$;
                var r = e.$children$;
                var a = t.$children$;
                var i = t.$text$;
                if (i === null) {
                    {
                        {
                            B(e, t, o)
                        }
                    }
                    if (r !== null && a !== null) {
                        z(n, r, t, a)
                    } else if (a !== null) {
                        if (e.$text$ !== null) {
                            n.textContent = ""
                        }
                        I(n, null, t, a, 0, a.length - 1)
                    } else if (r !== null) {
                        H(r, 0, r.length - 1)
                    }
                } else if (e.$text$ !== i) {
                    n.data = i
                }
            };
            var V = function(e, t) {
                var n = e.$hostElement$;
                var r = e.$vnode$ || P(null, null);
                var o = L(t) ? t : A(null, null, t);
                i = n.tagName;
                o.$tag$ = null;
                o.$flags$ |= 4;
                e.$vnode$ = o;
                o.$elm$ = r.$elm$ = n.shadowRoot || n; {
                    a = n["s-sc"]
                }
                D(r, o)
            };
            var W = function(e, t, n) {
                var r = $.ce(t, n);
                e.dispatchEvent(r);
                return r
            };
            var F = function(e, t) {
                if (t && !e.$onRenderResolve$ && t["s-p"]) {
                    t["s-p"].push(new Promise((function(t) {
                        return e.$onRenderResolve$ = t
                    })))
                }
            };
            var G = function(e, t) {
                {
                    e.$flags$ |= 16
                }
                if (e.$flags$ & 4) {
                    e.$flags$ |= 512;
                    return
                }
                F(e, e.$ancestorComponent$);
                var n = function() {
                    return J(e, t)
                };
                return xe(n)
            };
            var J = function(e, t) {
                var n = p("scheduleUpdate", e.$cmpMeta$.$tagName$);
                var r = e.$lazyInstance$;
                var a;
                n();
                return ee(a, (function() {
                    return K(e, r, t)
                }))
            };
            var K = function(e, t, n) {
                var r = e.$hostElement$;
                var a = p("update", e.$cmpMeta$.$tagName$);
                var i = r["s-rc"];
                if (n) {
                    w(e)
                }
                var o = p("render", e.$cmpMeta$.$tagName$); {
                    {
                        V(e, Q(e, t))
                    }
                }
                if ($.$cssShim$) {
                    $.$cssShim$.updateHost(r)
                }
                if (i) {
                    i.map((function(e) {
                        return e()
                    }));
                    r["s-rc"] = undefined
                }
                o();
                a(); {
                    var l = r["s-p"];
                    var s = function() {
                        return X(e)
                    };
                    if (l.length === 0) {
                        s()
                    } else {
                        Promise.all(l).then(s);
                        e.$flags$ |= 4;
                        l.length = 0
                    }
                }
            };
            var Q = function(e, t) {
                try {
                    t = t.render(); {
                        e.$flags$ &= ~16
                    } {
                        e.$flags$ |= 2
                    }
                } catch (n) {
                    he(n)
                }
                return t
            };
            var X = function(e) {
                var t = e.$cmpMeta$.$tagName$;
                var n = e.$hostElement$;
                var r = p("postUpdate", t);
                var a = e.$ancestorComponent$;
                if (!(e.$flags$ & 64)) {
                    e.$flags$ |= 64; {
                        te(n)
                    }
                    r(); {
                        e.$onReadyResolve$(n);
                        if (!a) {
                            Z()
                        }
                    }
                } else {
                    r()
                } {
                    if (e.$onRenderResolve$) {
                        e.$onRenderResolve$();
                        e.$onRenderResolve$ = undefined
                    }
                    if (e.$flags$ & 512) {
                        Re((function() {
                            return G(e, false)
                        }))
                    }
                    e.$flags$ &= ~(4 | 512)
                }
            };
            var Y = function(e) {
                {
                    var t = $e(e);
                    var n = t.$hostElement$.isConnected;
                    if (n && (t.$flags$ & (2 | 16)) === 2) {
                        G(t, false)
                    }
                    return n
                }
            };
            var Z = function(e) {
                {
                    te(u.documentElement)
                }
                Re((function() {
                    return W(s, "appload", {
                        detail: {
                            namespace: r
                        }
                    })
                }))
            };
            var ee = function(e, t) {
                return e && e.then ? e.then(t) : t()
            };
            var te = function(e) {
                return e.classList.add("hydrated")
            };
            var ne = function(e, t) {
                if (e != null && !C(e)) {
                    if (t & 1) {
                        return String(e)
                    }
                    return e
                }
                return e
            };
            var re = function(e, t) {
                return $e(e).$instanceValues$.get(t)
            };
            var ae = function(e, t, n, r) {
                var a = $e(e);
                var i = a.$instanceValues$.get(t);
                var o = a.$flags$;
                var l = a.$lazyInstance$;
                n = ne(n, r.$members$[t][0]);
                if ((!(o & 8) || i === undefined) && n !== i) {
                    a.$instanceValues$.set(t, n);
                    if (l) {
                        if ((o & (2 | 16)) === 2) {
                            G(a, false)
                        }
                    }
                }
            };
            var ie = function(e, t, n) {
                if (t.$members$) {
                    var r = Object.entries(t.$members$);
                    var a = e.prototype;
                    r.map((function(e) {
                        var r = e[0],
                            i = e[1][0];
                        if (i & 31 || n & 2 && i & 32) {
                            Object.defineProperty(a, r, {
                                get: function() {
                                    return re(this, r)
                                },
                                set: function(e) {
                                    ae(this, r, e, t)
                                },
                                configurable: true,
                                enumerable: true
                            })
                        }
                    }));
                    if (n & 1) {
                        var i = new Map;
                        a.attributeChangedCallback = function(e, t, n) {
                            var r = this;
                            $.jmp((function() {
                                var t = i.get(e);
                                r[t] = n === null && typeof r[t] === "boolean" ? false : n
                            }))
                        };
                        e.observedAttributes = r.filter((function(e) {
                            var t = e[0],
                                n = e[1];
                            return n[0] & 15
                        })).map((function(e) {
                            var t = e[0],
                                n = e[1];
                            var r = n[1] || t;
                            i.set(r, t);
                            return r
                        }))
                    }
                }
                return e
            };
            var oe = function(e, r, a, i, o) {
                return __awaiter(n, void 0, void 0, (function() {
                    var e, n, i, l, s, f, u;
                    return __generator(this, (function($) {
                        switch ($.label) {
                            case 0:
                                if (!((r.$flags$ & 32) === 0)) return [3, 5];
                                r.$flags$ |= 32;
                                o = me(a);
                                if (!o.then) return [3, 2];
                                e = m();
                                return [4, o];
                            case 1:
                                o = $.sent();
                                e();
                                $.label = 2;
                            case 2:
                                if (!o.isProxied) {
                                    ie(o, a, 2);
                                    o.isProxied = true
                                }
                                n = p("createInstance", a.$tagName$); {
                                    r.$flags$ |= 8
                                }
                                try {
                                    new o(r)
                                } catch (c) {
                                    he(c)
                                } {
                                    r.$flags$ &= ~8
                                }
                                n();
                                if (!o.style) return [3, 5];
                                i = o.style;
                                l = S(a);
                                if (!!ge.has(l)) return [3, 5];
                                s = p("registerStyles", a.$tagName$);
                                if (!(a.$flags$ & 8)) return [3, 4];
                                return [4, t.import("./p-7f0a8d9c.system.js").then((function(e) {
                                    return e.scopeCss(i, l, false)
                                }))];
                            case 3:
                                i = $.sent();
                                $.label = 4;
                            case 4:
                                y(l, i, !!(a.$flags$ & 1));
                                s();
                                $.label = 5;
                            case 5:
                                f = r.$ancestorComponent$;
                                u = function() {
                                    return G(r, true)
                                };
                                if (f && f["s-rc"]) {
                                    f["s-rc"].push(u)
                                } else {
                                    u()
                                }
                                return [2]
                        }
                    }))
                }))
            };
            var le = function(e) {
                if (($.$flags$ & 1) === 0) {
                    var t = $e(e);
                    var n = t.$cmpMeta$;
                    var r = p("connectedCallback", n.$tagName$);
                    if (!(t.$flags$ & 1)) {
                        t.$flags$ |= 1; {
                            var a = e;
                            while (a = a.parentNode || a.host) {
                                if (a["s-p"]) {
                                    F(t, t.$ancestorComponent$ = a);
                                    break
                                }
                            }
                        }
                        if (n.$members$) {
                            Object.entries(n.$members$).map((function(t) {
                                var n = t[0],
                                    r = t[1][0];
                                if (r & 31 && e.hasOwnProperty(n)) {
                                    var a = e[n];
                                    delete e[n];
                                    e[n] = a
                                }
                            }))
                        } {
                            Re((function() {
                                return oe(e, t, n)
                            }))
                        }
                    }
                    r()
                }
            };
            var se = function(e) {
                if (($.$flags$ & 1) === 0) {
                    var t = $e(e);
                    if ($.$cssShim$) {
                        $.$cssShim$.removeHost(e)
                    }
                }
            };
            var fe = e("b", (function(e, t) {
                if (t === void 0) {
                    t = {}
                }
                var n = p();
                var r = [];
                var a = t.exclude || [];
                var i = s.customElements;
                var o = u.head;
                var l = o.querySelector("meta[charset]");
                var f = u.createElement("style");
                var v = [];
                var d;
                var m = true;
                Object.assign($, t);
                $.$resourcesUrl$ = new URL(t.resourcesUrl || "./", u.baseURI).href;
                e.map((function(e) {
                    return e[1].map((function(t) {
                        var n = {
                            $flags$: t[0],
                            $tagName$: t[1],
                            $members$: t[2],
                            $listeners$: t[3]
                        }; {
                            n.$members$ = t[2]
                        }
                        if (!c && n.$flags$ & 1) {
                            n.$flags$ |= 8
                        }
                        var o = n.$tagName$;
                        var l = function(e) {
                            __extends(t, e);

                            function t(t) {
                                var r = e.call(this, t) || this;
                                t = r;
                                ve(t, n);
                                if (n.$flags$ & 1) {
                                    if (c) {
                                        {
                                            t.attachShadow({
                                                mode: "open"
                                            })
                                        }
                                    } else if (!("shadowRoot" in t)) {
                                        t.shadowRoot = t
                                    }
                                }
                                return r
                            }
                            t.prototype.connectedCallback = function() {
                                var e = this;
                                if (d) {
                                    clearTimeout(d);
                                    d = null
                                }
                                if (m) {
                                    v.push(this)
                                } else {
                                    $.jmp((function() {
                                        return le(e)
                                    }))
                                }
                            };
                            t.prototype.disconnectedCallback = function() {
                                var e = this;
                                $.jmp((function() {
                                    return se(e)
                                }))
                            };
                            t.prototype.forceUpdate = function() {
                                Y(this)
                            };
                            t.prototype.componentOnReady = function() {
                                return $e(this).$onReadyPromise$
                            };
                            return t
                        }(HTMLElement);
                        n.$lazyBundleId$ = e[0];
                        if (!a.includes(o) && !i.get(o)) {
                            r.push(o);
                            i.define(o, ie(l, n, 1))
                        }
                    }))
                })); {
                    f.innerHTML = r + h;
                    f.setAttribute("data-styles", "");
                    o.insertBefore(f, l ? l.nextSibling : o.firstChild)
                }
                m = false;
                if (v.length) {
                    v.map((function(e) {
                        return e.connectedCallback()
                    }))
                } else {
                    {
                        $.jmp((function() {
                            return d = setTimeout(Z, 30)
                        }))
                    }
                }
                n()
            }));
            var ue = new WeakMap;
            var $e = function(e) {
                return ue.get(e)
            };
            var ce = e("r", (function(e, t) {
                return ue.set(t.$lazyInstance$ = e, t)
            }));
            var ve = function(e, t) {
                var n = {
                    $flags$: 0,
                    $hostElement$: e,
                    $cmpMeta$: t,
                    $instanceValues$: new Map
                }; {
                    n.$onReadyPromise$ = new Promise((function(e) {
                        return n.$onReadyResolve$ = e
                    }));
                    e["s-p"] = [];
                    e["s-rc"] = []
                }
                return ue.set(e, n)
            };
            var de = function(e, t) {
                return t in e
            };
            var he = function(e) {
                return console.error(e)
            };
            var pe = new Map;
            var me = function(e, n, r) {
                var a = e.$tagName$.replace(/-/g, "_");
                var i = e.$lazyBundleId$;
                var o = pe.get(i);
                if (o) {
                    return o[a]
                }
                return t.import("./" + i + ".entry.js" + "").then((function(e) {
                    {
                        pe.set(i, e)
                    }
                    return e[a]
                }), he)
            };
            var ge = new Map;
            var ye = [];
            var be = [];
            var we = function(e, t) {
                return function(n) {
                    e.push(n);
                    if (!l) {
                        l = true;
                        if (t && $.$flags$ & 4) {
                            Re(_e)
                        } else {
                            $.raf(_e)
                        }
                    }
                }
            };
            var Se = function(e) {
                for (var t = 0; t < e.length; t++) {
                    try {
                        e[t](performance.now())
                    } catch (n) {
                        he(n)
                    }
                }
                e.length = 0
            };
            var _e = function() {
                Se(ye); {
                    Se(be);
                    if (l = ye.length > 0) {
                        $.raf(_e)
                    }
                }
            };
            var Re = function(e) {
                return v().then(e)
            };
            var xe = we(be, true)
        }
    }
}));