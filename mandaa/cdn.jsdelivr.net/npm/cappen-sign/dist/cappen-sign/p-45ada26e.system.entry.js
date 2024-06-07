System.register(["./p-c7b87c72.system.js"], (function(t) {
    "use strict";
    var n, e;
    return {
        setters: [function(t) {
            n = t.r;
            e = t.h
        }],
        execute: function() {
            var i = ":host{display:block}a{text-decoration:none;color:inherit}p{margin:0;font-family:'Rubik';font-size:13px;color:var(--sign-primary-color)}p a,p strong{font-weight:normal}p em{opacity:0.4;font-style:normal}p a{position:relative;display:inline-block;padding:0.3em 0.3em 0.3em 0.15em;margin-left:-0.15em;line-height:1}p a::before{content:'';position:absolute;width:100%;height:0.76em;left:0;bottom:0;opacity:0.1;-webkit-transform:scale3d(0, 1, 1);transform:scale3d(0, 1, 1);-webkit-transform-origin:0% 50%;transform-origin:0% 50%;-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s, -webkit-transform 1s;-webkit-transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);background-color:var(--sign-primary-color)}@media (min-width: 992px){p a:hover::before{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}";
            var r = t("cappen_sign", function() {
                function t(t) {
                    n(this, t)
                }
                t.prototype.getText = function() {
                    return this.feat
                };
                t.prototype.render = function() {
                    return e("p", null, e("em", null, "Site by"), " ", e("a", {
                        href: "http://cappen.com",
                        target: "_blank"
                    }, "Cappen", this.getText() != "" && this.getText() != undefined ? " & " + this.getText() : ""))
                };
                return t
            }());
            r.style = i
        }
    }
}));