System.register(["./p-c7b87c72.system.js"], (function(r, e) {
    "use strict";
    var t, n, o, s, i, c;
    return {
        setters: [function(r) {
            t = r.C;
            n = r.p;
            o = r.w;
            s = r.a;
            i = r.d;
            c = r.N
        }],
        execute: function() {
            var a = function() {};
            var u = typeof Deno !== "undefined";
            var f = !u && typeof global !== "undefined" && typeof require === "function" && !!global.process && typeof __filename === "string" && (!global.origin || typeof global.origin !== "string");
            var p = u && Deno.build.os === "windows";
            var l = f ? process.cwd : u ? Deno.cwd : function() {
                return "/"
            };
            var m = f ? process.exit : u ? Deno.exit : a;
            var d = function(r) {
                return "__sc_import_" + r.replace(/\s|-/g, "_")
            };
            var v = r("a", (function() {
                if (!(t && t.supports && t.supports("color", "var(--c)"))) {
                    return e.import("./p-03188b5b.system.js").then((function() {
                        if (n.$cssShim$ = o.__cssshim) {
                            return n.$cssShim$.i()
                        } else {
                            return 0
                        }
                    }))
                }
                return s()
            }));
            var w = r("p", (function() {
                {
                    n.$cssShim$ = o.__cssshim
                }
                var r = Array.from(i.querySelectorAll("script")).find((function(r) {
                    return new RegExp("/" + c + "(\\.esm)?\\.js($|\\?|#)").test(r.src) || r.getAttribute("data-stencil-namespace") === c
                }));
                var t = r["data-opts"] || {};
                if ("onbeforeload" in r && !history.scrollRestoration) {
                    return {
                        then: function() {}
                    }
                } {
                    t.resourcesUrl = new URL(".", new URL(r.getAttribute("data-resources-url") || r.src, o.location.href)).href; {
                        g(t.resourcesUrl, r)
                    }
                    if (!o.customElements) {
                        return e.import("./p-0b8ecd50.system.js").then((function() {
                            return t
                        }))
                    }
                }
                return s(t)
            }));
            var g = function(r, e) {
                var t = d(c);
                try {
                    o[t] = new Function("w", "return import(w);//" + Math.random())
                } catch (s) {
                    var n = new Map;
                    o[t] = function(s) {
                        var c = new URL(s, r).href;
                        var a = n.get(c);
                        if (!a) {
                            var u = i.createElement("script");
                            u.type = "module";
                            u.crossOrigin = e.crossOrigin;
                            u.src = URL.createObjectURL(new Blob(["import * as m from '" + c + "'; window." + t + ".m = m;"], {
                                type: "application/javascript"
                            }));
                            a = new Promise((function(r) {
                                u.onload = function() {
                                    r(o[t].m);
                                    u.remove()
                                }
                            }));
                            n.set(c, a);
                            i.head.appendChild(u)
                        }
                        return a
                    }
                }
            }
        }
    }
}));