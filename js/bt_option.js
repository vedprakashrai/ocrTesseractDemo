(function(t) {
    var R = {};

    function n(A) {
        if (R[A]) {
            return R[A].exports
        }
        var e = R[A] = {
            i: A,
            l: false,
            exports: {}
        };
        t[A].call(e.exports, e, e.exports, n);
        e.l = true;
        return e.exports
    }
    n.m = t;
    n.c = R;
    n.d = function(A, e, t) {
        if (!n.o(A, e)) {
            Object.defineProperty(A, e, {
                enumerable: true,
                get: t
            })
        }
    };
    n.r = function(A) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(A, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(A, "__esModule", {
            value: true
        })
    };
    n.t = function(e, A) {
        if (A & 1) e = n(e);
        if (A & 8) return e;
        if (A & 4 && typeof e === "object" && e && e.__esModule) return e;
        var t = Object.create(null);
        n.r(t);
        Object.defineProperty(t, "default", {
            enumerable: true,
            value: e
        });
        if (A & 2 && typeof e != "string")
            for (var R in e) n.d(t, R, function(A) {
                return e[A]
            }.bind(null, R));
        return t
    };
    n.n = function(e) {
        var A = e && e.__esModule ? function A() {
            return e["default"]
        } : function A() {
            return e
        };
        n.d(A, "a", A);
        return A
    };
    n.o = function(A, e) {
        return Object.prototype.hasOwnProperty.call(A, e)
    };
    n.p = "";
    return n(n.s = 67)
})({
    0: function(it, rt, A) {
        var Nt, at;
        /*!
         * jQuery JavaScript Library v3.4.0
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2019-04-10T19:48Z
         */
        /*!
         * jQuery JavaScript Library v3.4.0
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2019-04-10T19:48Z
         */
        (function(A, e) {
            "use strict";
            if (true && typeof it.exports === "object") {
                it.exports = A.document ? e(A, true) : function(A) {
                    if (!A.document) {
                        throw new Error("jQuery requires a window with a document")
                    }
                    return e(A)
                }
            } else {
                e(A)
            }
        })(typeof window !== "undefined" ? window : this, function(P, A) {
            "use strict";
            var e = [];
            var B = P.document;
            var R = Object.getPrototypeOf;
            var N = e.slice;
            var l = e.concat;
            var a = e.push;
            var n = e.indexOf;
            var t = {};
            var i = t.toString;
            var U = t.hasOwnProperty;
            var r = U.toString;
            var o = r.call(Object);
            var K = {};
            var M = function A(e) {
                return typeof e === "function" && typeof e.nodeType !== "number"
            };
            var T = function A(e) {
                return e != null && e === e.window
            };
            var I = {
                type: true,
                src: true,
                nonce: true,
                noModule: true
            };

            function u(A, e, t) {
                t = t || B;
                var R, n, i = t.createElement("script");
                i.text = A;
                if (e) {
                    for (R in I) {
                        n = e[R] || e.getAttribute && e.getAttribute(R);
                        if (n) {
                            i.setAttribute(R, n)
                        }
                    }
                }
                t.head.appendChild(i).parentNode.removeChild(i)
            }

            function c(A) {
                if (A == null) {
                    return A + ""
                }
                return typeof A === "object" || typeof A === "function" ? t[i.call(A)] || "object" : typeof A
            }
            var s = "3.4.0",
                G = function(A, e) {
                    return new G.fn.init(A, e)
                },
                H = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            G.fn = G.prototype = {
                jquery: s,
                constructor: G,
                length: 0,
                toArray: function() {
                    return N.call(this)
                },
                get: function(A) {
                    if (A == null) {
                        return N.call(this)
                    }
                    return A < 0 ? this[A + this.length] : this[A]
                },
                pushStack: function(A) {
                    var e = G.merge(this.constructor(), A);
                    e.prevObject = this;
                    return e
                },
                each: function(A) {
                    return G.each(this, A)
                },
                map: function(t) {
                    return this.pushStack(G.map(this, function(A, e) {
                        return t.call(A, e, A)
                    }))
                },
                slice: function() {
                    return this.pushStack(N.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(A) {
                    var e = this.length,
                        t = +A + (A < 0 ? e : 0);
                    return this.pushStack(t >= 0 && t < e ? [this[t]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: e.sort,
                splice: e.splice
            };
            G.extend = G.fn.extend = function() {
                var A, e, t, R, n, i, r = arguments[0] || {},
                    N = 1,
                    a = arguments.length,
                    o = false;
                if (typeof r === "boolean") {
                    o = r;
                    r = arguments[N] || {};
                    N++
                }
                if (typeof r !== "object" && !M(r)) {
                    r = {}
                }
                if (N === a) {
                    r = this;
                    N--
                }
                for (; N < a; N++) {
                    if ((A = arguments[N]) != null) {
                        for (e in A) {
                            R = A[e];
                            if (e === "__proto__" || r === R) {
                                continue
                            }
                            if (o && R && (G.isPlainObject(R) || (n = Array.isArray(R)))) {
                                t = r[e];
                                if (n && !Array.isArray(t)) {
                                    i = []
                                } else if (!n && !G.isPlainObject(t)) {
                                    i = {}
                                } else {
                                    i = t
                                }
                                n = false;
                                r[e] = G.extend(o, i, R)
                            } else if (R !== undefined) {
                                r[e] = R
                            }
                        }
                    }
                }
                return r
            };
            G.extend({
                expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
                isReady: true,
                error: function(A) {
                    throw new Error(A)
                },
                noop: function() {},
                isPlainObject: function(A) {
                    var e, t;
                    if (!A || i.call(A) !== "[object Object]") {
                        return false
                    }
                    e = R(A);
                    if (!e) {
                        return true
                    }
                    t = U.call(e, "constructor") && e.constructor;
                    return typeof t === "function" && r.call(t) === o
                },
                isEmptyObject: function(A) {
                    var e;
                    for (e in A) {
                        return false
                    }
                    return true
                },
                globalEval: function(A, e) {
                    u(A, {
                        nonce: e && e.nonce
                    })
                },
                each: function(A, e) {
                    var t, R = 0;
                    if (D(A)) {
                        t = A.length;
                        for (; R < t; R++) {
                            if (e.call(A[R], R, A[R]) === false) {
                                break
                            }
                        }
                    } else {
                        for (R in A) {
                            if (e.call(A[R], R, A[R]) === false) {
                                break
                            }
                        }
                    }
                    return A
                },
                trim: function(A) {
                    return A == null ? "" : (A + "").replace(H, "")
                },
                makeArray: function(A, e) {
                    var t = e || [];
                    if (A != null) {
                        if (D(Object(A))) {
                            G.merge(t, typeof A === "string" ? [A] : A)
                        } else {
                            a.call(t, A)
                        }
                    }
                    return t
                },
                inArray: function(A, e, t) {
                    return e == null ? -1 : n.call(e, A, t)
                },
                merge: function(A, e) {
                    var t = +e.length,
                        R = 0,
                        n = A.length;
                    for (; R < t; R++) {
                        A[n++] = e[R]
                    }
                    A.length = n;
                    return A
                },
                grep: function(A, e, t) {
                    var R, n = [],
                        i = 0,
                        r = A.length,
                        N = !t;
                    for (; i < r; i++) {
                        R = !e(A[i], i);
                        if (R !== N) {
                            n.push(A[i])
                        }
                    }
                    return n
                },
                map: function(A, e, t) {
                    var R, n, i = 0,
                        r = [];
                    if (D(A)) {
                        R = A.length;
                        for (; i < R; i++) {
                            n = e(A[i], i, t);
                            if (n != null) {
                                r.push(n)
                            }
                        }
                    } else {
                        for (i in A) {
                            n = e(A[i], i, t);
                            if (n != null) {
                                r.push(n)
                            }
                        }
                    }
                    return l.apply([], r)
                },
                guid: 1,
                support: K
            });
            if (typeof Symbol === "function") {
                G.fn[Symbol.iterator] = e[Symbol.iterator]
            }
            G.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(A, e) {
                t["[object " + e + "]"] = e.toLowerCase()
            });

            function D(A) {
                var e = !!A && "length" in A && A.length,
                    t = c(A);
                if (M(A) || T(A)) {
                    return false
                }
                return t === "array" || e === 0 || typeof e === "number" && e > 0 && e - 1 in A
            }
            var L =
                /*!
                 * Sizzle CSS Selector Engine v2.3.4
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2019-04-08
                 */
                function(t) {
                    var A, D, u, i, n, L, s, l, c, a, o, S, P, r, B, U, N, I, K, G = "sizzle" + 1 * new Date,
                        M = t.document,
                        p = 0,
                        R = 0,
                        H = aA(),
                        T = aA(),
                        f = aA(),
                        h = aA(),
                        d = function(A, e) {
                            if (A === e) {
                                o = true
                            }
                            return 0
                        },
                        O = {}.hasOwnProperty,
                        e = [],
                        E = e.pop,
                        J = e.push,
                        C = e.push,
                        g = e.slice,
                        y = function(A, e) {
                            var t = 0,
                                R = A.length;
                            for (; t < R; t++) {
                                if (A[t] === e) {
                                    return t
                                }
                            }
                            return -1
                        },
                        v = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        m = "[\\x20\\t\\r\\n\\f]",
                        V = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        W = "\\[" + m + "*(" + V + ")(?:" + m + "*([*^$|!~]?=)" + m + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + V + "))|)" + m + "*\\]",
                        Y = ":(" + V + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|" + ".*" + ")\\)|)",
                        b = new RegExp(m + "+", "g"),
                        x = new RegExp("^" + m + "+|((?:^|[^\\\\])(?:\\\\.)*)" + m + "+$", "g"),
                        w = new RegExp("^" + m + "*," + m + "*"),
                        k = new RegExp("^" + m + "*([>+~]|" + m + ")" + m + "*"),
                        F = new RegExp(m + "|>"),
                        Z = new RegExp(Y),
                        X = new RegExp("^" + V + "$"),
                        Q = {
                            ID: new RegExp("^#(" + V + ")"),
                            CLASS: new RegExp("^\\.(" + V + ")"),
                            TAG: new RegExp("^(" + V + "|[*])"),
                            ATTR: new RegExp("^" + W),
                            PSEUDO: new RegExp("^" + Y),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + m + "*(even|odd|(([+-]|)(\\d*)n|)" + m + "*(?:([+-]|)" + m + "*(\\d+)|))" + m + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + v + ")$", "i"),
                            needsContext: new RegExp("^" + m + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + m + "*((?:-\\d)?\\d*)" + m + "*\\)|)(?=[^-]|$)", "i")
                        },
                        q = /HTML$/i,
                        _ = /^(?:input|select|textarea|button)$/i,
                        j = /^h\d$/i,
                        z = /^[^{]+\{\s*\[native \w/,
                        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        AA = /[+~]/,
                        eA = new RegExp("\\\\([\\da-f]{1,6}" + m + "?|(" + m + ")|.)", "ig"),
                        tA = function(A, e, t) {
                            var R = "0x" + e - 65536;
                            return R !== R || t ? e : R < 0 ? String.fromCharCode(R + 65536) : String.fromCharCode(R >> 10 | 55296, R & 1023 | 56320)
                        },
                        RA = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        nA = function(A, e) {
                            if (e) {
                                if (A === "\0") {
                                    return "�"
                                }
                                return A.slice(0, -1) + "\\" + A.charCodeAt(A.length - 1).toString(16) + " "
                            }
                            return "\\" + A
                        },
                        iA = function() {
                            S()
                        },
                        rA = uA(function(A) {
                            return A.disabled === true && A.nodeName.toLowerCase() === "fieldset"
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        C.apply(e = g.call(M.childNodes), M.childNodes);
                        e[M.childNodes.length].nodeType
                    } catch (A) {
                        C = {
                            apply: e.length ? function(A, e) {
                                J.apply(A, g.call(e))
                            } : function(A, e) {
                                var t = A.length,
                                    R = 0;
                                while (A[t++] = e[R++]) {}
                                A.length = t - 1
                            }
                        }
                    }

                    function NA(e, A, t, R) {
                        var n, i, r, N, a, o, I, s = A && A.ownerDocument,
                            H = A ? A.nodeType : 9;
                        t = t || [];
                        if (typeof e !== "string" || !e || H !== 1 && H !== 9 && H !== 11) {
                            return t
                        }
                        if (!R) {
                            if ((A ? A.ownerDocument || A : M) !== P) {
                                S(A)
                            }
                            A = A || P;
                            if (B) {
                                if (H !== 11 && (a = $.exec(e))) {
                                    if (n = a[1]) {
                                        if (H === 9) {
                                            if (r = A.getElementById(n)) {
                                                if (r.id === n) {
                                                    t.push(r);
                                                    return t
                                                }
                                            } else {
                                                return t
                                            }
                                        } else {
                                            if (s && (r = s.getElementById(n)) && K(A, r) && r.id === n) {
                                                t.push(r);
                                                return t
                                            }
                                        }
                                    } else if (a[2]) {
                                        C.apply(t, A.getElementsByTagName(e));
                                        return t
                                    } else if ((n = a[3]) && D.getElementsByClassName && A.getElementsByClassName) {
                                        C.apply(t, A.getElementsByClassName(n));
                                        return t
                                    }
                                }
                                if (D.qsa && !h[e + " "] && (!U || !U.test(e)) && (H !== 1 || A.nodeName.toLowerCase() !== "object")) {
                                    I = e;
                                    s = A;
                                    if (H === 1 && F.test(e)) {
                                        if (N = A.getAttribute("id")) {
                                            N = N.replace(RA, nA)
                                        } else {
                                            A.setAttribute("id", N = G)
                                        }
                                        o = L(e);
                                        i = o.length;
                                        while (i--) {
                                            o[i] = "#" + N + " " + TA(o[i])
                                        }
                                        I = o.join(",");
                                        s = AA.test(e) && KA(A.parentNode) || A
                                    }
                                    try {
                                        C.apply(t, s.querySelectorAll(I));
                                        return t
                                    } catch (A) {
                                        h(e, true)
                                    } finally {
                                        if (N === G) {
                                            A.removeAttribute("id")
                                        }
                                    }
                                }
                            }
                        }
                        return l(e.replace(x, "$1"), A, t, R)
                    }

                    function aA() {
                        var t = [];

                        function R(A, e) {
                            if (t.push(A + " ") > u.cacheLength) {
                                delete R[t.shift()]
                            }
                            return R[A + " "] = e
                        }
                        return R
                    }

                    function oA(A) {
                        A[G] = true;
                        return A
                    }

                    function IA(A) {
                        var e = P.createElement("fieldset");
                        try {
                            return !!A(e)
                        } catch (A) {
                            return false
                        } finally {
                            if (e.parentNode) {
                                e.parentNode.removeChild(e)
                            }
                            e = null
                        }
                    }

                    function sA(A, e) {
                        var t = A.split("|"),
                            R = t.length;
                        while (R--) {
                            u.attrHandle[t[R]] = e
                        }
                    }

                    function HA(A, e) {
                        var t = e && A,
                            R = t && A.nodeType === 1 && e.nodeType === 1 && A.sourceIndex - e.sourceIndex;
                        if (R) {
                            return R
                        }
                        if (t) {
                            while (t = t.nextSibling) {
                                if (t === e) {
                                    return -1
                                }
                            }
                        }
                        return A ? 1 : -1
                    }

                    function DA(t) {
                        return function(A) {
                            var e = A.nodeName.toLowerCase();
                            return e === "input" && A.type === t
                        }
                    }

                    function LA(t) {
                        return function(A) {
                            var e = A.nodeName.toLowerCase();
                            return (e === "input" || e === "button") && A.type === t
                        }
                    }

                    function lA(e) {
                        return function(A) {
                            if ("form" in A) {
                                if (A.parentNode && A.disabled === false) {
                                    if ("label" in A) {
                                        if ("label" in A.parentNode) {
                                            return A.parentNode.disabled === e
                                        } else {
                                            return A.disabled === e
                                        }
                                    }
                                    return A.isDisabled === e || A.isDisabled !== !e && rA(A) === e
                                }
                                return A.disabled === e
                            } else if ("label" in A) {
                                return A.disabled === e
                            }
                            return false
                        }
                    }

                    function UA(r) {
                        return oA(function(i) {
                            i = +i;
                            return oA(function(A, e) {
                                var t, R = r([], A.length, i),
                                    n = R.length;
                                while (n--) {
                                    if (A[t = R[n]]) {
                                        A[t] = !(e[t] = A[t])
                                    }
                                }
                            })
                        })
                    }

                    function KA(A) {
                        return A && typeof A.getElementsByTagName !== "undefined" && A
                    }
                    D = NA.support = {};
                    n = NA.isXML = function(A) {
                        var e = A.namespaceURI,
                            t = (A.ownerDocument || A).documentElement;
                        return !q.test(e || t && t.nodeName || "HTML")
                    };
                    S = NA.setDocument = function(A) {
                        var e, t, R = A ? A.ownerDocument || A : M;
                        if (R === P || R.nodeType !== 9 || !R.documentElement) {
                            return P
                        }
                        P = R;
                        r = P.documentElement;
                        B = !n(P);
                        if (M !== P && (t = P.defaultView) && t.top !== t) {
                            if (t.addEventListener) {
                                t.addEventListener("unload", iA, false)
                            } else if (t.attachEvent) {
                                t.attachEvent("onunload", iA)
                            }
                        }
                        D.attributes = IA(function(A) {
                            A.className = "i";
                            return !A.getAttribute("className")
                        });
                        D.getElementsByTagName = IA(function(A) {
                            A.appendChild(P.createComment(""));
                            return !A.getElementsByTagName("*").length
                        });
                        D.getElementsByClassName = z.test(P.getElementsByClassName);
                        D.getById = IA(function(A) {
                            r.appendChild(A).id = G;
                            return !P.getElementsByName || !P.getElementsByName(G).length
                        });
                        if (D.getById) {
                            u.filter["ID"] = function(A) {
                                var e = A.replace(eA, tA);
                                return function(A) {
                                    return A.getAttribute("id") === e
                                }
                            };
                            u.find["ID"] = function(A, e) {
                                if (typeof e.getElementById !== "undefined" && B) {
                                    var t = e.getElementById(A);
                                    return t ? [t] : []
                                }
                            }
                        } else {
                            u.filter["ID"] = function(A) {
                                var t = A.replace(eA, tA);
                                return function(A) {
                                    var e = typeof A.getAttributeNode !== "undefined" && A.getAttributeNode("id");
                                    return e && e.value === t
                                }
                            };
                            u.find["ID"] = function(A, e) {
                                if (typeof e.getElementById !== "undefined" && B) {
                                    var t, R, n, i = e.getElementById(A);
                                    if (i) {
                                        t = i.getAttributeNode("id");
                                        if (t && t.value === A) {
                                            return [i]
                                        }
                                        n = e.getElementsByName(A);
                                        R = 0;
                                        while (i = n[R++]) {
                                            t = i.getAttributeNode("id");
                                            if (t && t.value === A) {
                                                return [i]
                                            }
                                        }
                                    }
                                    return []
                                }
                            }
                        }
                        u.find["TAG"] = D.getElementsByTagName ? function(A, e) {
                            if (typeof e.getElementsByTagName !== "undefined") {
                                return e.getElementsByTagName(A)
                            } else if (D.qsa) {
                                return e.querySelectorAll(A)
                            }
                        } : function(A, e) {
                            var t, R = [],
                                n = 0,
                                i = e.getElementsByTagName(A);
                            if (A === "*") {
                                while (t = i[n++]) {
                                    if (t.nodeType === 1) {
                                        R.push(t)
                                    }
                                }
                                return R
                            }
                            return i
                        };
                        u.find["CLASS"] = D.getElementsByClassName && function(A, e) {
                            if (typeof e.getElementsByClassName !== "undefined" && B) {
                                return e.getElementsByClassName(A)
                            }
                        };
                        N = [];
                        U = [];
                        if (D.qsa = z.test(P.querySelectorAll)) {
                            IA(function(A) {
                                r.appendChild(A).innerHTML = "<a id='" + G + "'></a>" + "<select id='" + G + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                                if (A.querySelectorAll("[msallowcapture^='']").length) {
                                    U.push("[*^$]=" + m + "*(?:''|\"\")")
                                }
                                if (!A.querySelectorAll("[selected]").length) {
                                    U.push("\\[" + m + "*(?:value|" + v + ")")
                                }
                                if (!A.querySelectorAll("[id~=" + G + "-]").length) {
                                    U.push("~=")
                                }
                                if (!A.querySelectorAll(":checked").length) {
                                    U.push(":checked")
                                }
                                if (!A.querySelectorAll("a#" + G + "+*").length) {
                                    U.push(".#.+[+~]")
                                }
                            });
                            IA(function(A) {
                                A.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                                var e = P.createElement("input");
                                e.setAttribute("type", "hidden");
                                A.appendChild(e).setAttribute("name", "D");
                                if (A.querySelectorAll("[name=d]").length) {
                                    U.push("name" + m + "*[*^$|!~]?=")
                                }
                                if (A.querySelectorAll(":enabled").length !== 2) {
                                    U.push(":enabled", ":disabled")
                                }
                                r.appendChild(A).disabled = true;
                                if (A.querySelectorAll(":disabled").length !== 2) {
                                    U.push(":enabled", ":disabled")
                                }
                                A.querySelectorAll("*,:x");
                                U.push(",.*:")
                            })
                        }
                        if (D.matchesSelector = z.test(I = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) {
                            IA(function(A) {
                                D.disconnectedMatch = I.call(A, "*");
                                I.call(A, "[s!='']:x");
                                N.push("!=", Y)
                            })
                        }
                        U = U.length && new RegExp(U.join("|"));
                        N = N.length && new RegExp(N.join("|"));
                        e = z.test(r.compareDocumentPosition);
                        K = e || z.test(r.contains) ? function(A, e) {
                            var t = A.nodeType === 9 ? A.documentElement : A,
                                R = e && e.parentNode;
                            return A === R || !!(R && R.nodeType === 1 && (t.contains ? t.contains(R) : A.compareDocumentPosition && A.compareDocumentPosition(R) & 16))
                        } : function(A, e) {
                            if (e) {
                                while (e = e.parentNode) {
                                    if (e === A) {
                                        return true
                                    }
                                }
                            }
                            return false
                        };
                        d = e ? function(A, e) {
                            if (A === e) {
                                o = true;
                                return 0
                            }
                            var t = !A.compareDocumentPosition - !e.compareDocumentPosition;
                            if (t) {
                                return t
                            }
                            t = (A.ownerDocument || A) === (e.ownerDocument || e) ? A.compareDocumentPosition(e) : 1;
                            if (t & 1 || !D.sortDetached && e.compareDocumentPosition(A) === t) {
                                if (A === P || A.ownerDocument === M && K(M, A)) {
                                    return -1
                                }
                                if (e === P || e.ownerDocument === M && K(M, e)) {
                                    return 1
                                }
                                return a ? y(a, A) - y(a, e) : 0
                            }
                            return t & 4 ? -1 : 1
                        } : function(A, e) {
                            if (A === e) {
                                o = true;
                                return 0
                            }
                            var t, R = 0,
                                n = A.parentNode,
                                i = e.parentNode,
                                r = [A],
                                N = [e];
                            if (!n || !i) {
                                return A === P ? -1 : e === P ? 1 : n ? -1 : i ? 1 : a ? y(a, A) - y(a, e) : 0
                            } else if (n === i) {
                                return HA(A, e)
                            }
                            t = A;
                            while (t = t.parentNode) {
                                r.unshift(t)
                            }
                            t = e;
                            while (t = t.parentNode) {
                                N.unshift(t)
                            }
                            while (r[R] === N[R]) {
                                R++
                            }
                            return R ? HA(r[R], N[R]) : r[R] === M ? -1 : N[R] === M ? 1 : 0
                        };
                        return P
                    };
                    NA.matches = function(A, e) {
                        return NA(A, null, null, e)
                    };
                    NA.matchesSelector = function(A, e) {
                        if ((A.ownerDocument || A) !== P) {
                            S(A)
                        }
                        if (D.matchesSelector && B && !h[e + " "] && (!N || !N.test(e)) && (!U || !U.test(e))) {
                            try {
                                var t = I.call(A, e);
                                if (t || D.disconnectedMatch || A.document && A.document.nodeType !== 11) {
                                    return t
                                }
                            } catch (A) {
                                h(e, true)
                            }
                        }
                        return NA(e, P, null, [A]).length > 0
                    };
                    NA.contains = function(A, e) {
                        if ((A.ownerDocument || A) !== P) {
                            S(A)
                        }
                        return K(A, e)
                    };
                    NA.attr = function(A, e) {
                        if ((A.ownerDocument || A) !== P) {
                            S(A)
                        }
                        var t = u.attrHandle[e.toLowerCase()],
                            R = t && O.call(u.attrHandle, e.toLowerCase()) ? t(A, e, !B) : undefined;
                        return R !== undefined ? R : D.attributes || !B ? A.getAttribute(e) : (R = A.getAttributeNode(e)) && R.specified ? R.value : null
                    };
                    NA.escape = function(A) {
                        return (A + "").replace(RA, nA)
                    };
                    NA.error = function(A) {
                        throw new Error("Syntax error, unrecognized expression: " + A)
                    };
                    NA.uniqueSort = function(A) {
                        var e, t = [],
                            R = 0,
                            n = 0;
                        o = !D.detectDuplicates;
                        a = !D.sortStable && A.slice(0);
                        A.sort(d);
                        if (o) {
                            while (e = A[n++]) {
                                if (e === A[n]) {
                                    R = t.push(n)
                                }
                            }
                            while (R--) {
                                A.splice(t[R], 1)
                            }
                        }
                        a = null;
                        return A
                    };
                    i = NA.getText = function(A) {
                        var e, t = "",
                            R = 0,
                            n = A.nodeType;
                        if (!n) {
                            while (e = A[R++]) {
                                t += i(e)
                            }
                        } else if (n === 1 || n === 9 || n === 11) {
                            if (typeof A.textContent === "string") {
                                return A.textContent
                            } else {
                                for (A = A.firstChild; A; A = A.nextSibling) {
                                    t += i(A)
                                }
                            }
                        } else if (n === 3 || n === 4) {
                            return A.nodeValue
                        }
                        return t
                    };
                    u = NA.selectors = {
                        cacheLength: 50,
                        createPseudo: oA,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(A) {
                                A[1] = A[1].replace(eA, tA);
                                A[3] = (A[3] || A[4] || A[5] || "").replace(eA, tA);
                                if (A[2] === "~=") {
                                    A[3] = " " + A[3] + " "
                                }
                                return A.slice(0, 4)
                            },
                            CHILD: function(A) {
                                A[1] = A[1].toLowerCase();
                                if (A[1].slice(0, 3) === "nth") {
                                    if (!A[3]) {
                                        NA.error(A[0])
                                    }
                                    A[4] = +(A[4] ? A[5] + (A[6] || 1) : 2 * (A[3] === "even" || A[3] === "odd"));
                                    A[5] = +(A[7] + A[8] || A[3] === "odd")
                                } else if (A[3]) {
                                    NA.error(A[0])
                                }
                                return A
                            },
                            PSEUDO: function(A) {
                                var e, t = !A[6] && A[2];
                                if (Q["CHILD"].test(A[0])) {
                                    return null
                                }
                                if (A[3]) {
                                    A[2] = A[4] || A[5] || ""
                                } else if (t && Z.test(t) && (e = L(t, true)) && (e = t.indexOf(")", t.length - e) - t.length)) {
                                    A[0] = A[0].slice(0, e);
                                    A[2] = t.slice(0, e)
                                }
                                return A.slice(0, 3)
                            }
                        },
                        filter: {
                            TAG: function(A) {
                                var e = A.replace(eA, tA).toLowerCase();
                                return A === "*" ? function() {
                                    return true
                                } : function(A) {
                                    return A.nodeName && A.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(A) {
                                var e = H[A + " "];
                                return e || (e = new RegExp("(^|" + m + ")" + A + "(" + m + "|$)")) && H(A, function(A) {
                                    return e.test(typeof A.className === "string" && A.className || typeof A.getAttribute !== "undefined" && A.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, R, n) {
                                return function(A) {
                                    var e = NA.attr(A, t);
                                    if (e == null) {
                                        return R === "!="
                                    }
                                    if (!R) {
                                        return true
                                    }
                                    e += "";
                                    return R === "=" ? e === n : R === "!=" ? e !== n : R === "^=" ? n && e.indexOf(n) === 0 : R === "*=" ? n && e.indexOf(n) > -1 : R === "$=" ? n && e.slice(-n.length) === n : R === "~=" ? (" " + e.replace(b, " ") + " ").indexOf(n) > -1 : R === "|=" ? e === n || e.slice(0, n.length + 1) === n + "-" : false
                                }
                            },
                            CHILD: function(L, A, e, l, U) {
                                var K = L.slice(0, 3) !== "nth",
                                    M = L.slice(-4) !== "last",
                                    T = A === "of-type";
                                return l === 1 && U === 0 ? function(A) {
                                    return !!A.parentNode
                                } : function(A, e, t) {
                                    var R, n, i, r, N, a, o = K !== M ? "nextSibling" : "previousSibling",
                                        I = A.parentNode,
                                        s = T && A.nodeName.toLowerCase(),
                                        H = !t && !T,
                                        D = false;
                                    if (I) {
                                        if (K) {
                                            while (o) {
                                                r = A;
                                                while (r = r[o]) {
                                                    if (T ? r.nodeName.toLowerCase() === s : r.nodeType === 1) {
                                                        return false
                                                    }
                                                }
                                                a = o = L === "only" && !a && "nextSibling"
                                            }
                                            return true
                                        }
                                        a = [M ? I.firstChild : I.lastChild];
                                        if (M && H) {
                                            r = I;
                                            i = r[G] || (r[G] = {});
                                            n = i[r.uniqueID] || (i[r.uniqueID] = {});
                                            R = n[L] || [];
                                            N = R[0] === p && R[1];
                                            D = N && R[2];
                                            r = N && I.childNodes[N];
                                            while (r = ++N && r && r[o] || (D = N = 0) || a.pop()) {
                                                if (r.nodeType === 1 && ++D && r === A) {
                                                    n[L] = [p, N, D];
                                                    break
                                                }
                                            }
                                        } else {
                                            if (H) {
                                                r = A;
                                                i = r[G] || (r[G] = {});
                                                n = i[r.uniqueID] || (i[r.uniqueID] = {});
                                                R = n[L] || [];
                                                N = R[0] === p && R[1];
                                                D = N
                                            }
                                            if (D === false) {
                                                while (r = ++N && r && r[o] || (D = N = 0) || a.pop()) {
                                                    if ((T ? r.nodeName.toLowerCase() === s : r.nodeType === 1) && ++D) {
                                                        if (H) {
                                                            i = r[G] || (r[G] = {});
                                                            n = i[r.uniqueID] || (i[r.uniqueID] = {});
                                                            n[L] = [p, D]
                                                        }
                                                        if (r === A) {
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        D -= U;
                                        return D === l || D % l === 0 && D / l >= 0
                                    }
                                }
                            },
                            PSEUDO: function(A, i) {
                                var e, r = u.pseudos[A] || u.setFilters[A.toLowerCase()] || NA.error("unsupported pseudo: " + A);
                                if (r[G]) {
                                    return r(i)
                                }
                                if (r.length > 1) {
                                    e = [A, A, "", i];
                                    return u.setFilters.hasOwnProperty(A.toLowerCase()) ? oA(function(A, e) {
                                        var t, R = r(A, i),
                                            n = R.length;
                                        while (n--) {
                                            t = y(A, R[n]);
                                            A[t] = !(e[t] = R[n])
                                        }
                                    }) : function(A) {
                                        return r(A, 0, e)
                                    }
                                }
                                return r
                            }
                        },
                        pseudos: {
                            not: oA(function(A) {
                                var R = [],
                                    n = [],
                                    N = s(A.replace(x, "$1"));
                                return N[G] ? oA(function(A, e, t, R) {
                                    var n, i = N(A, null, R, []),
                                        r = A.length;
                                    while (r--) {
                                        if (n = i[r]) {
                                            A[r] = !(e[r] = n)
                                        }
                                    }
                                }) : function(A, e, t) {
                                    R[0] = A;
                                    N(R, null, t, n);
                                    R[0] = null;
                                    return !n.pop()
                                }
                            }),
                            has: oA(function(e) {
                                return function(A) {
                                    return NA(e, A).length > 0
                                }
                            }),
                            contains: oA(function(e) {
                                e = e.replace(eA, tA);
                                return function(A) {
                                    return (A.textContent || i(A)).indexOf(e) > -1
                                }
                            }),
                            lang: oA(function(t) {
                                if (!X.test(t || "")) {
                                    NA.error("unsupported lang: " + t)
                                }
                                t = t.replace(eA, tA).toLowerCase();
                                return function(A) {
                                    var e;
                                    do {
                                        if (e = B ? A.lang : A.getAttribute("xml:lang") || A.getAttribute("lang")) {
                                            e = e.toLowerCase();
                                            return e === t || e.indexOf(t + "-") === 0
                                        }
                                    } while ((A = A.parentNode) && A.nodeType === 1);
                                    return false
                                }
                            }),
                            target: function(A) {
                                var e = t.location && t.location.hash;
                                return e && e.slice(1) === A.id
                            },
                            root: function(A) {
                                return A === r
                            },
                            focus: function(A) {
                                return A === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(A.type || A.href || ~A.tabIndex)
                            },
                            enabled: lA(false),
                            disabled: lA(true),
                            checked: function(A) {
                                var e = A.nodeName.toLowerCase();
                                return e === "input" && !!A.checked || e === "option" && !!A.selected
                            },
                            selected: function(A) {
                                if (A.parentNode) {
                                    A.parentNode.selectedIndex
                                }
                                return A.selected === true
                            },
                            empty: function(A) {
                                for (A = A.firstChild; A; A = A.nextSibling) {
                                    if (A.nodeType < 6) {
                                        return false
                                    }
                                }
                                return true
                            },
                            parent: function(A) {
                                return !u.pseudos["empty"](A)
                            },
                            header: function(A) {
                                return j.test(A.nodeName)
                            },
                            input: function(A) {
                                return _.test(A.nodeName)
                            },
                            button: function(A) {
                                var e = A.nodeName.toLowerCase();
                                return e === "input" && A.type === "button" || e === "button"
                            },
                            text: function(A) {
                                var e;
                                return A.nodeName.toLowerCase() === "input" && A.type === "text" && ((e = A.getAttribute("type")) == null || e.toLowerCase() === "text")
                            },
                            first: UA(function() {
                                return [0]
                            }),
                            last: UA(function(A, e) {
                                return [e - 1]
                            }),
                            eq: UA(function(A, e, t) {
                                return [t < 0 ? t + e : t]
                            }),
                            even: UA(function(A, e) {
                                var t = 0;
                                for (; t < e; t += 2) {
                                    A.push(t)
                                }
                                return A
                            }),
                            odd: UA(function(A, e) {
                                var t = 1;
                                for (; t < e; t += 2) {
                                    A.push(t)
                                }
                                return A
                            }),
                            lt: UA(function(A, e, t) {
                                var R = t < 0 ? t + e : t > e ? e : t;
                                for (; --R >= 0;) {
                                    A.push(R)
                                }
                                return A
                            }),
                            gt: UA(function(A, e, t) {
                                var R = t < 0 ? t + e : t;
                                for (; ++R < e;) {
                                    A.push(R)
                                }
                                return A
                            })
                        }
                    };
                    u.pseudos["nth"] = u.pseudos["eq"];
                    for (A in {
                            radio: true,
                            checkbox: true,
                            file: true,
                            password: true,
                            image: true
                        }) {
                        u.pseudos[A] = DA(A)
                    }
                    for (A in {
                            submit: true,
                            reset: true
                        }) {
                        u.pseudos[A] = LA(A)
                    }

                    function MA() {}
                    MA.prototype = u.filters = u.pseudos;
                    u.setFilters = new MA;
                    L = NA.tokenize = function(A, e) {
                        var t, R, n, i, r, N, a, o = T[A + " "];
                        if (o) {
                            return e ? 0 : o.slice(0)
                        }
                        r = A;
                        N = [];
                        a = u.preFilter;
                        while (r) {
                            if (!t || (R = w.exec(r))) {
                                if (R) {
                                    r = r.slice(R[0].length) || r
                                }
                                N.push(n = [])
                            }
                            t = false;
                            if (R = k.exec(r)) {
                                t = R.shift();
                                n.push({
                                    value: t,
                                    type: R[0].replace(x, " ")
                                });
                                r = r.slice(t.length)
                            }
                            for (i in u.filter) {
                                if ((R = Q[i].exec(r)) && (!a[i] || (R = a[i](R)))) {
                                    t = R.shift();
                                    n.push({
                                        value: t,
                                        type: i,
                                        matches: R
                                    });
                                    r = r.slice(t.length)
                                }
                            }
                            if (!t) {
                                break
                            }
                        }
                        return e ? r.length : r ? NA.error(A) : T(A, N).slice(0)
                    };

                    function TA(A) {
                        var e = 0,
                            t = A.length,
                            R = "";
                        for (; e < t; e++) {
                            R += A[e].value
                        }
                        return R
                    }

                    function uA(N, A, e) {
                        var a = A.dir,
                            o = A.next,
                            I = o || a,
                            s = e && I === "parentNode",
                            H = R++;
                        return A.first ? function(A, e, t) {
                            while (A = A[a]) {
                                if (A.nodeType === 1 || s) {
                                    return N(A, e, t)
                                }
                            }
                            return false
                        } : function(A, e, t) {
                            var R, n, i, r = [p, H];
                            if (t) {
                                while (A = A[a]) {
                                    if (A.nodeType === 1 || s) {
                                        if (N(A, e, t)) {
                                            return true
                                        }
                                    }
                                }
                            } else {
                                while (A = A[a]) {
                                    if (A.nodeType === 1 || s) {
                                        i = A[G] || (A[G] = {});
                                        n = i[A.uniqueID] || (i[A.uniqueID] = {});
                                        if (o && o === A.nodeName.toLowerCase()) {
                                            A = A[a] || A
                                        } else if ((R = n[I]) && R[0] === p && R[1] === H) {
                                            return r[2] = R[2]
                                        } else {
                                            n[I] = r;
                                            if (r[2] = N(A, e, t)) {
                                                return true
                                            }
                                        }
                                    }
                                }
                            }
                            return false
                        }
                    }

                    function cA(n) {
                        return n.length > 1 ? function(A, e, t) {
                            var R = n.length;
                            while (R--) {
                                if (!n[R](A, e, t)) {
                                    return false
                                }
                            }
                            return true
                        } : n[0]
                    }

                    function SA(A, e, t) {
                        var R = 0,
                            n = e.length;
                        for (; R < n; R++) {
                            NA(A, e[R], t)
                        }
                        return t
                    }

                    function PA(A, e, t, R, n) {
                        var i, r = [],
                            N = 0,
                            a = A.length,
                            o = e != null;
                        for (; N < a; N++) {
                            if (i = A[N]) {
                                if (!t || t(i, R, n)) {
                                    r.push(i);
                                    if (o) {
                                        e.push(N)
                                    }
                                }
                            }
                        }
                        return r
                    }

                    function BA(D, L, l, U, K, A) {
                        if (U && !U[G]) {
                            U = BA(U)
                        }
                        if (K && !K[G]) {
                            K = BA(K, A)
                        }
                        return oA(function(A, e, t, R) {
                            var n, i, r, N = [],
                                a = [],
                                o = e.length,
                                I = A || SA(L || "*", t.nodeType ? [t] : t, []),
                                s = D && (A || !L) ? PA(I, N, D, t, R) : I,
                                H = l ? K || (A ? D : o || U) ? [] : e : s;
                            if (l) {
                                l(s, H, t, R)
                            }
                            if (U) {
                                n = PA(H, a);
                                U(n, [], t, R);
                                i = n.length;
                                while (i--) {
                                    if (r = n[i]) {
                                        H[a[i]] = !(s[a[i]] = r)
                                    }
                                }
                            }
                            if (A) {
                                if (K || D) {
                                    if (K) {
                                        n = [];
                                        i = H.length;
                                        while (i--) {
                                            if (r = H[i]) {
                                                n.push(s[i] = r)
                                            }
                                        }
                                        K(null, H = [], n, R)
                                    }
                                    i = H.length;
                                    while (i--) {
                                        if ((r = H[i]) && (n = K ? y(A, r) : N[i]) > -1) {
                                            A[n] = !(e[n] = r)
                                        }
                                    }
                                }
                            } else {
                                H = PA(H === e ? H.splice(o, H.length) : H);
                                if (K) {
                                    K(null, e, H, R)
                                } else {
                                    C.apply(e, H)
                                }
                            }
                        })
                    }

                    function GA(A) {
                        var n, e, t, R = A.length,
                            i = u.relative[A[0].type],
                            r = i || u.relative[" "],
                            N = i ? 1 : 0,
                            a = uA(function(A) {
                                return A === n
                            }, r, true),
                            o = uA(function(A) {
                                return y(n, A) > -1
                            }, r, true),
                            I = [function(A, e, t) {
                                var R = !i && (t || e !== c) || ((n = e).nodeType ? a(A, e, t) : o(A, e, t));
                                n = null;
                                return R
                            }];
                        for (; N < R; N++) {
                            if (e = u.relative[A[N].type]) {
                                I = [uA(cA(I), e)]
                            } else {
                                e = u.filter[A[N].type].apply(null, A[N].matches);
                                if (e[G]) {
                                    t = ++N;
                                    for (; t < R; t++) {
                                        if (u.relative[A[t].type]) {
                                            break
                                        }
                                    }
                                    return BA(N > 1 && cA(I), N > 1 && TA(A.slice(0, N - 1).concat({
                                        value: A[N - 2].type === " " ? "*" : ""
                                    })).replace(x, "$1"), e, N < t && GA(A.slice(N, t)), t < R && GA(A = A.slice(t)), t < R && TA(A))
                                }
                                I.push(e)
                            }
                        }
                        return cA(I)
                    }

                    function pA(U, K) {
                        var M = K.length > 0,
                            T = U.length > 0,
                            A = function(A, e, t, R, n) {
                                var i, r, N, a = 0,
                                    o = "0",
                                    I = A && [],
                                    s = [],
                                    H = c,
                                    D = A || T && u.find["TAG"]("*", n),
                                    L = p += H == null ? 1 : Math.random() || .1,
                                    l = D.length;
                                if (n) {
                                    c = e === P || e || n
                                }
                                for (; o !== l && (i = D[o]) != null; o++) {
                                    if (T && i) {
                                        r = 0;
                                        if (!e && i.ownerDocument !== P) {
                                            S(i);
                                            t = !B
                                        }
                                        while (N = U[r++]) {
                                            if (N(i, e || P, t)) {
                                                R.push(i);
                                                break
                                            }
                                        }
                                        if (n) {
                                            p = L
                                        }
                                    }
                                    if (M) {
                                        if (i = !N && i) {
                                            a--
                                        }
                                        if (A) {
                                            I.push(i)
                                        }
                                    }
                                }
                                a += o;
                                if (M && o !== a) {
                                    r = 0;
                                    while (N = K[r++]) {
                                        N(I, s, e, t)
                                    }
                                    if (A) {
                                        if (a > 0) {
                                            while (o--) {
                                                if (!(I[o] || s[o])) {
                                                    s[o] = E.call(R)
                                                }
                                            }
                                        }
                                        s = PA(s)
                                    }
                                    C.apply(R, s);
                                    if (n && !A && s.length > 0 && a + K.length > 1) {
                                        NA.uniqueSort(R)
                                    }
                                }
                                if (n) {
                                    p = L;
                                    c = H
                                }
                                return I
                            };
                        return M ? oA(A) : A
                    }
                    s = NA.compile = function(A, e) {
                        var t, R = [],
                            n = [],
                            i = f[A + " "];
                        if (!i) {
                            if (!e) {
                                e = L(A)
                            }
                            t = e.length;
                            while (t--) {
                                i = GA(e[t]);
                                if (i[G]) {
                                    R.push(i)
                                } else {
                                    n.push(i)
                                }
                            }
                            i = f(A, pA(n, R));
                            i.selector = A
                        }
                        return i
                    };
                    l = NA.select = function(A, e, t, R) {
                        var n, i, r, N, a, o = typeof A === "function" && A,
                            I = !R && L(A = o.selector || A);
                        t = t || [];
                        if (I.length === 1) {
                            i = I[0] = I[0].slice(0);
                            if (i.length > 2 && (r = i[0]).type === "ID" && e.nodeType === 9 && B && u.relative[i[1].type]) {
                                e = (u.find["ID"](r.matches[0].replace(eA, tA), e) || [])[0];
                                if (!e) {
                                    return t
                                } else if (o) {
                                    e = e.parentNode
                                }
                                A = A.slice(i.shift().value.length)
                            }
                            n = Q["needsContext"].test(A) ? 0 : i.length;
                            while (n--) {
                                r = i[n];
                                if (u.relative[N = r.type]) {
                                    break
                                }
                                if (a = u.find[N]) {
                                    if (R = a(r.matches[0].replace(eA, tA), AA.test(i[0].type) && KA(e.parentNode) || e)) {
                                        i.splice(n, 1);
                                        A = R.length && TA(i);
                                        if (!A) {
                                            C.apply(t, R);
                                            return t
                                        }
                                        break
                                    }
                                }
                            }
                        }(o || s(A, I))(R, e, !B, t, !e || AA.test(A) && KA(e.parentNode) || e);
                        return t
                    };
                    D.sortStable = G.split("").sort(d).join("") === G;
                    D.detectDuplicates = !!o;
                    S();
                    D.sortDetached = IA(function(A) {
                        return A.compareDocumentPosition(P.createElement("fieldset")) & 1
                    });
                    if (!IA(function(A) {
                            A.innerHTML = "<a href='#'></a>";
                            return A.firstChild.getAttribute("href") === "#"
                        })) {
                        sA("type|href|height|width", function(A, e, t) {
                            if (!t) {
                                return A.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
                            }
                        })
                    }
                    if (!D.attributes || !IA(function(A) {
                            A.innerHTML = "<input/>";
                            A.firstChild.setAttribute("value", "");
                            return A.firstChild.getAttribute("value") === ""
                        })) {
                        sA("value", function(A, e, t) {
                            if (!t && A.nodeName.toLowerCase() === "input") {
                                return A.defaultValue
                            }
                        })
                    }
                    if (!IA(function(A) {
                            return A.getAttribute("disabled") == null
                        })) {
                        sA(v, function(A, e, t) {
                            var R;
                            if (!t) {
                                return A[e] === true ? e.toLowerCase() : (R = A.getAttributeNode(e)) && R.specified ? R.value : null
                            }
                        })
                    }
                    return NA
                }(P);
            G.find = L;
            G.expr = L.selectors;
            G.expr[":"] = G.expr.pseudos;
            G.uniqueSort = G.unique = L.uniqueSort;
            G.text = L.getText;
            G.isXMLDoc = L.isXML;
            G.contains = L.contains;
            G.escapeSelector = L.escape;
            var S = function(A, e, t) {
                var R = [],
                    n = t !== undefined;
                while ((A = A[e]) && A.nodeType !== 9) {
                    if (A.nodeType === 1) {
                        if (n && G(A).is(t)) {
                            break
                        }
                        R.push(A)
                    }
                }
                return R
            };
            var p = function(A, e) {
                var t = [];
                for (; A; A = A.nextSibling) {
                    if (A.nodeType === 1 && A !== e) {
                        t.push(A)
                    }
                }
                return t
            };
            var f = G.expr.match.needsContext;

            function h(A, e) {
                return A.nodeName && A.nodeName.toLowerCase() === e.toLowerCase()
            }
            var d = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(A, t, R) {
                if (M(t)) {
                    return G.grep(A, function(A, e) {
                        return !!t.call(A, e, A) !== R
                    })
                }
                if (t.nodeType) {
                    return G.grep(A, function(A) {
                        return A === t !== R
                    })
                }
                if (typeof t !== "string") {
                    return G.grep(A, function(A) {
                        return n.call(t, A) > -1 !== R
                    })
                }
                return G.filter(t, A, R)
            }
            G.filter = function(A, e, t) {
                var R = e[0];
                if (t) {
                    A = ":not(" + A + ")"
                }
                if (e.length === 1 && R.nodeType === 1) {
                    return G.find.matchesSelector(R, A) ? [R] : []
                }
                return G.find.matches(A, G.grep(e, function(A) {
                    return A.nodeType === 1
                }))
            };
            G.fn.extend({
                find: function(A) {
                    var e, t, R = this.length,
                        n = this;
                    if (typeof A !== "string") {
                        return this.pushStack(G(A).filter(function() {
                            for (e = 0; e < R; e++) {
                                if (G.contains(n[e], this)) {
                                    return true
                                }
                            }
                        }))
                    }
                    t = this.pushStack([]);
                    for (e = 0; e < R; e++) {
                        G.find(A, n[e], t)
                    }
                    return R > 1 ? G.uniqueSort(t) : t
                },
                filter: function(A) {
                    return this.pushStack(O(this, A || [], false))
                },
                not: function(A) {
                    return this.pushStack(O(this, A || [], true))
                },
                is: function(A) {
                    return !!O(this, typeof A === "string" && f.test(A) ? G(A) : A || [], false).length
                }
            });
            var E, J = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                C = G.fn.init = function(A, e, t) {
                    var R, n;
                    if (!A) {
                        return this
                    }
                    t = t || E;
                    if (typeof A === "string") {
                        if (A[0] === "<" && A[A.length - 1] === ">" && A.length >= 3) {
                            R = [null, A, null]
                        } else {
                            R = J.exec(A)
                        }
                        if (R && (R[1] || !e)) {
                            if (R[1]) {
                                e = e instanceof G ? e[0] : e;
                                G.merge(this, G.parseHTML(R[1], e && e.nodeType ? e.ownerDocument || e : B, true));
                                if (d.test(R[1]) && G.isPlainObject(e)) {
                                    for (R in e) {
                                        if (M(this[R])) {
                                            this[R](e[R])
                                        } else {
                                            this.attr(R, e[R])
                                        }
                                    }
                                }
                                return this
                            } else {
                                n = B.getElementById(R[2]);
                                if (n) {
                                    this[0] = n;
                                    this.length = 1
                                }
                                return this
                            }
                        } else if (!e || e.jquery) {
                            return (e || t).find(A)
                        } else {
                            return this.constructor(e).find(A)
                        }
                    } else if (A.nodeType) {
                        this[0] = A;
                        this.length = 1;
                        return this
                    } else if (M(A)) {
                        return t.ready !== undefined ? t.ready(A) : A(G)
                    }
                    return G.makeArray(A, this)
                };
            C.prototype = G.fn;
            E = G(B);
            var g = /^(?:parents|prev(?:Until|All))/,
                y = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
            G.fn.extend({
                has: function(A) {
                    var e = G(A, this),
                        t = e.length;
                    return this.filter(function() {
                        var A = 0;
                        for (; A < t; A++) {
                            if (G.contains(this, e[A])) {
                                return true
                            }
                        }
                    })
                },
                closest: function(A, e) {
                    var t, R = 0,
                        n = this.length,
                        i = [],
                        r = typeof A !== "string" && G(A);
                    if (!f.test(A)) {
                        for (; R < n; R++) {
                            for (t = this[R]; t && t !== e; t = t.parentNode) {
                                if (t.nodeType < 11 && (r ? r.index(t) > -1 : t.nodeType === 1 && G.find.matchesSelector(t, A))) {
                                    i.push(t);
                                    break
                                }
                            }
                        }
                    }
                    return this.pushStack(i.length > 1 ? G.uniqueSort(i) : i)
                },
                index: function(A) {
                    if (!A) {
                        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    }
                    if (typeof A === "string") {
                        return n.call(G(A), this[0])
                    }
                    return n.call(this, A.jquery ? A[0] : A)
                },
                add: function(A, e) {
                    return this.pushStack(G.uniqueSort(G.merge(this.get(), G(A, e))))
                },
                addBack: function(A) {
                    return this.add(A == null ? this.prevObject : this.prevObject.filter(A))
                }
            });

            function v(A, e) {
                while ((A = A[e]) && A.nodeType !== 1) {}
                return A
            }
            G.each({
                parent: function(A) {
                    var e = A.parentNode;
                    return e && e.nodeType !== 11 ? e : null
                },
                parents: function(A) {
                    return S(A, "parentNode")
                },
                parentsUntil: function(A, e, t) {
                    return S(A, "parentNode", t)
                },
                next: function(A) {
                    return v(A, "nextSibling")
                },
                prev: function(A) {
                    return v(A, "previousSibling")
                },
                nextAll: function(A) {
                    return S(A, "nextSibling")
                },
                prevAll: function(A) {
                    return S(A, "previousSibling")
                },
                nextUntil: function(A, e, t) {
                    return S(A, "nextSibling", t)
                },
                prevUntil: function(A, e, t) {
                    return S(A, "previousSibling", t)
                },
                siblings: function(A) {
                    return p((A.parentNode || {}).firstChild, A)
                },
                children: function(A) {
                    return p(A.firstChild)
                },
                contents: function(A) {
                    if (typeof A.contentDocument !== "undefined") {
                        return A.contentDocument
                    }
                    if (h(A, "template")) {
                        A = A.content || A
                    }
                    return G.merge([], A.childNodes)
                }
            }, function(R, n) {
                G.fn[R] = function(A, e) {
                    var t = G.map(this, n, A);
                    if (R.slice(-5) !== "Until") {
                        e = A
                    }
                    if (e && typeof e === "string") {
                        t = G.filter(e, t)
                    }
                    if (this.length > 1) {
                        if (!y[R]) {
                            G.uniqueSort(t)
                        }
                        if (g.test(R)) {
                            t.reverse()
                        }
                    }
                    return this.pushStack(t)
                }
            });
            var m = /[^\x20\t\r\n\f]+/g;

            function V(A) {
                var t = {};
                G.each(A.match(m) || [], function(A, e) {
                    t[e] = true
                });
                return t
            }
            G.Callbacks = function(R) {
                R = typeof R === "string" ? V(R) : G.extend({}, R);
                var t, A, e, n, i = [],
                    r = [],
                    N = -1,
                    a = function() {
                        n = n || R.once;
                        e = t = true;
                        for (; r.length; N = -1) {
                            A = r.shift();
                            while (++N < i.length) {
                                if (i[N].apply(A[0], A[1]) === false && R.stopOnFalse) {
                                    N = i.length;
                                    A = false
                                }
                            }
                        }
                        if (!R.memory) {
                            A = false
                        }
                        t = false;
                        if (n) {
                            if (A) {
                                i = []
                            } else {
                                i = ""
                            }
                        }
                    },
                    o = {
                        add: function() {
                            if (i) {
                                if (A && !t) {
                                    N = i.length - 1;
                                    r.push(A)
                                }(function t(A) {
                                    G.each(A, function(A, e) {
                                        if (M(e)) {
                                            if (!R.unique || !o.has(e)) {
                                                i.push(e)
                                            }
                                        } else if (e && e.length && c(e) !== "string") {
                                            t(e)
                                        }
                                    })
                                })(arguments);
                                if (A && !t) {
                                    a()
                                }
                            }
                            return this
                        },
                        remove: function() {
                            G.each(arguments, function(A, e) {
                                var t;
                                while ((t = G.inArray(e, i, t)) > -1) {
                                    i.splice(t, 1);
                                    if (t <= N) {
                                        N--
                                    }
                                }
                            });
                            return this
                        },
                        has: function(A) {
                            return A ? G.inArray(A, i) > -1 : i.length > 0
                        },
                        empty: function() {
                            if (i) {
                                i = []
                            }
                            return this
                        },
                        disable: function() {
                            n = r = [];
                            i = A = "";
                            return this
                        },
                        disabled: function() {
                            return !i
                        },
                        lock: function() {
                            n = r = [];
                            if (!A && !t) {
                                i = A = ""
                            }
                            return this
                        },
                        locked: function() {
                            return !!n
                        },
                        fireWith: function(A, e) {
                            if (!n) {
                                e = e || [];
                                e = [A, e.slice ? e.slice() : e];
                                r.push(e);
                                if (!t) {
                                    a()
                                }
                            }
                            return this
                        },
                        fire: function() {
                            o.fireWith(this, arguments);
                            return this
                        },
                        fired: function() {
                            return !!e
                        }
                    };
                return o
            };

            function W(A) {
                return A
            }

            function Y(A) {
                throw A
            }

            function b(A, e, t, R) {
                var n;
                try {
                    if (A && M(n = A.promise)) {
                        n.call(A).done(e).fail(t)
                    } else if (A && M(n = A.then)) {
                        n.call(A, e, t)
                    } else {
                        e.apply(undefined, [A].slice(R))
                    }
                } catch (A) {
                    t.apply(undefined, [A])
                }
            }
            G.extend({
                Deferred: function(A) {
                    var i = [
                            ["notify", "progress", G.Callbacks("memory"), G.Callbacks("memory"), 2],
                            ["resolve", "done", G.Callbacks("once memory"), G.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", G.Callbacks("once memory"), G.Callbacks("once memory"), 1, "rejected"]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                N.done(arguments).fail(arguments);
                                return this
                            },
                            catch: function(A) {
                                return r.then(null, A)
                            },
                            pipe: function() {
                                var n = arguments;
                                return G.Deferred(function(R) {
                                    G.each(i, function(A, e) {
                                        var t = M(n[e[4]]) && n[e[4]];
                                        N[e[1]](function() {
                                            var A = t && t.apply(this, arguments);
                                            if (A && M(A.promise)) {
                                                A.promise().progress(R.notify).done(R.resolve).fail(R.reject)
                                            } else {
                                                R[e[0] + "With"](this, t ? [A] : arguments)
                                            }
                                        })
                                    });
                                    n = null
                                }).promise()
                            },
                            then: function(e, t, R) {
                                var a = 0;

                                function o(n, i, r, N) {
                                    return function() {
                                        var t = this,
                                            R = arguments,
                                            A = function() {
                                                var A, e;
                                                if (n < a) {
                                                    return
                                                }
                                                A = r.apply(t, R);
                                                if (A === i.promise()) {
                                                    throw new TypeError("Thenable self-resolution")
                                                }
                                                e = A && (typeof A === "object" || typeof A === "function") && A.then;
                                                if (M(e)) {
                                                    if (N) {
                                                        e.call(A, o(a, i, W, N), o(a, i, Y, N))
                                                    } else {
                                                        a++;
                                                        e.call(A, o(a, i, W, N), o(a, i, Y, N), o(a, i, W, i.notifyWith))
                                                    }
                                                } else {
                                                    if (r !== W) {
                                                        t = undefined;
                                                        R = [A]
                                                    }(N || i.resolveWith)(t, R)
                                                }
                                            },
                                            e = N ? A : function() {
                                                try {
                                                    A()
                                                } catch (A) {
                                                    if (G.Deferred.exceptionHook) {
                                                        G.Deferred.exceptionHook(A, e.stackTrace)
                                                    }
                                                    if (n + 1 >= a) {
                                                        if (r !== Y) {
                                                            t = undefined;
                                                            R = [A]
                                                        }
                                                        i.rejectWith(t, R)
                                                    }
                                                }
                                            };
                                        if (n) {
                                            e()
                                        } else {
                                            if (G.Deferred.getStackHook) {
                                                e.stackTrace = G.Deferred.getStackHook()
                                            }
                                            P.setTimeout(e)
                                        }
                                    }
                                }
                                return G.Deferred(function(A) {
                                    i[0][3].add(o(0, A, M(R) ? R : W, A.notifyWith));
                                    i[1][3].add(o(0, A, M(e) ? e : W));
                                    i[2][3].add(o(0, A, M(t) ? t : Y))
                                }).promise()
                            },
                            promise: function(A) {
                                return A != null ? G.extend(A, r) : r
                            }
                        },
                        N = {};
                    G.each(i, function(A, e) {
                        var t = e[2],
                            R = e[5];
                        r[e[1]] = t.add;
                        if (R) {
                            t.add(function() {
                                n = R
                            }, i[3 - A][2].disable, i[3 - A][3].disable, i[0][2].lock, i[0][3].lock)
                        }
                        t.add(e[3].fire);
                        N[e[0]] = function() {
                            N[e[0] + "With"](this === N ? undefined : this, arguments);
                            return this
                        };
                        N[e[0] + "With"] = t.fireWith
                    });
                    r.promise(N);
                    if (A) {
                        A.call(N, N)
                    }
                    return N
                },
                when: function(A) {
                    var t = arguments.length,
                        e = t,
                        R = Array(e),
                        n = N.call(arguments),
                        i = G.Deferred(),
                        r = function(e) {
                            return function(A) {
                                R[e] = this;
                                n[e] = arguments.length > 1 ? N.call(arguments) : A;
                                if (!--t) {
                                    i.resolveWith(R, n)
                                }
                            }
                        };
                    if (t <= 1) {
                        b(A, i.done(r(e)).resolve, i.reject, !t);
                        if (i.state() === "pending" || M(n[e] && n[e].then)) {
                            return i.then()
                        }
                    }
                    while (e--) {
                        b(n[e], r(e), i.reject)
                    }
                    return i.promise()
                }
            });
            var x = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            G.Deferred.exceptionHook = function(A, e) {
                if (P.console && P.console.warn && A && x.test(A.name)) {
                    P.console.warn("jQuery.Deferred exception: " + A.message, A.stack, e)
                }
            };
            G.readyException = function(A) {
                P.setTimeout(function() {
                    throw A
                })
            };
            var w = G.Deferred();
            G.fn.ready = function(A) {
                w.then(A).catch(function(A) {
                    G.readyException(A)
                });
                return this
            };
            G.extend({
                isReady: false,
                readyWait: 1,
                ready: function(A) {
                    if (A === true ? --G.readyWait : G.isReady) {
                        return
                    }
                    G.isReady = true;
                    if (A !== true && --G.readyWait > 0) {
                        return
                    }
                    w.resolveWith(B, [G])
                }
            });
            G.ready.then = w.then;

            function k() {
                B.removeEventListener("DOMContentLoaded", k);
                P.removeEventListener("load", k);
                G.ready()
            }
            if (B.readyState === "complete" || B.readyState !== "loading" && !B.documentElement.doScroll) {
                P.setTimeout(G.ready)
            } else {
                B.addEventListener("DOMContentLoaded", k);
                P.addEventListener("load", k)
            }
            var F = function(A, e, t, R, n, i, r) {
                var N = 0,
                    a = A.length,
                    o = t == null;
                if (c(t) === "object") {
                    n = true;
                    for (N in t) {
                        F(A, e, N, t[N], true, i, r)
                    }
                } else if (R !== undefined) {
                    n = true;
                    if (!M(R)) {
                        r = true
                    }
                    if (o) {
                        if (r) {
                            e.call(A, R);
                            e = null
                        } else {
                            o = e;
                            e = function(A, e, t) {
                                return o.call(G(A), t)
                            }
                        }
                    }
                    if (e) {
                        for (; N < a; N++) {
                            e(A[N], t, r ? R : R.call(A[N], N, e(A[N], t)))
                        }
                    }
                }
                if (n) {
                    return A
                }
                if (o) {
                    return e.call(A)
                }
                return a ? e(A[0], t) : i
            };
            var Z = /^-ms-/,
                X = /-([a-z])/g;

            function Q(A, e) {
                return e.toUpperCase()
            }

            function q(A) {
                return A.replace(Z, "ms-").replace(X, Q)
            }
            var _ = function(A) {
                return A.nodeType === 1 || A.nodeType === 9 || !+A.nodeType
            };

            function j() {
                this.expando = G.expando + j.uid++
            }
            j.uid = 1;
            j.prototype = {
                cache: function(A) {
                    var e = A[this.expando];
                    if (!e) {
                        e = {};
                        if (_(A)) {
                            if (A.nodeType) {
                                A[this.expando] = e
                            } else {
                                Object.defineProperty(A, this.expando, {
                                    value: e,
                                    configurable: true
                                })
                            }
                        }
                    }
                    return e
                },
                set: function(A, e, t) {
                    var R, n = this.cache(A);
                    if (typeof e === "string") {
                        n[q(e)] = t
                    } else {
                        for (R in e) {
                            n[q(R)] = e[R]
                        }
                    }
                    return n
                },
                get: function(A, e) {
                    return e === undefined ? this.cache(A) : A[this.expando] && A[this.expando][q(e)]
                },
                access: function(A, e, t) {
                    if (e === undefined || e && typeof e === "string" && t === undefined) {
                        return this.get(A, e)
                    }
                    this.set(A, e, t);
                    return t !== undefined ? t : e
                },
                remove: function(A, e) {
                    var t, R = A[this.expando];
                    if (R === undefined) {
                        return
                    }
                    if (e !== undefined) {
                        if (Array.isArray(e)) {
                            e = e.map(q)
                        } else {
                            e = q(e);
                            e = e in R ? [e] : e.match(m) || []
                        }
                        t = e.length;
                        while (t--) {
                            delete R[e[t]]
                        }
                    }
                    if (e === undefined || G.isEmptyObject(R)) {
                        if (A.nodeType) {
                            A[this.expando] = undefined
                        } else {
                            delete A[this.expando]
                        }
                    }
                },
                hasData: function(A) {
                    var e = A[this.expando];
                    return e !== undefined && !G.isEmptyObject(e)
                }
            };
            var z = new j;
            var $ = new j;
            var AA = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                eA = /[A-Z]/g;

            function tA(A) {
                if (A === "true") {
                    return true
                }
                if (A === "false") {
                    return false
                }
                if (A === "null") {
                    return null
                }
                if (A === +A + "") {
                    return +A
                }
                if (AA.test(A)) {
                    return JSON.parse(A)
                }
                return A
            }

            function RA(A, e, t) {
                var R;
                if (t === undefined && A.nodeType === 1) {
                    R = "data-" + e.replace(eA, "-$&").toLowerCase();
                    t = A.getAttribute(R);
                    if (typeof t === "string") {
                        try {
                            t = tA(t)
                        } catch (A) {}
                        $.set(A, e, t)
                    } else {
                        t = undefined
                    }
                }
                return t
            }
            G.extend({
                hasData: function(A) {
                    return $.hasData(A) || z.hasData(A)
                },
                data: function(A, e, t) {
                    return $.access(A, e, t)
                },
                removeData: function(A, e) {
                    $.remove(A, e)
                },
                _data: function(A, e, t) {
                    return z.access(A, e, t)
                },
                _removeData: function(A, e) {
                    z.remove(A, e)
                }
            });
            G.fn.extend({
                data: function(t, A) {
                    var e, R, n, i = this[0],
                        r = i && i.attributes;
                    if (t === undefined) {
                        if (this.length) {
                            n = $.get(i);
                            if (i.nodeType === 1 && !z.get(i, "hasDataAttrs")) {
                                e = r.length;
                                while (e--) {
                                    if (r[e]) {
                                        R = r[e].name;
                                        if (R.indexOf("data-") === 0) {
                                            R = q(R.slice(5));
                                            RA(i, R, n[R])
                                        }
                                    }
                                }
                                z.set(i, "hasDataAttrs", true)
                            }
                        }
                        return n
                    }
                    if (typeof t === "object") {
                        return this.each(function() {
                            $.set(this, t)
                        })
                    }
                    return F(this, function(A) {
                        var e;
                        if (i && A === undefined) {
                            e = $.get(i, t);
                            if (e !== undefined) {
                                return e
                            }
                            e = RA(i, t);
                            if (e !== undefined) {
                                return e
                            }
                            return
                        }
                        this.each(function() {
                            $.set(this, t, A)
                        })
                    }, null, A, arguments.length > 1, null, true)
                },
                removeData: function(A) {
                    return this.each(function() {
                        $.remove(this, A)
                    })
                }
            });
            G.extend({
                queue: function(A, e, t) {
                    var R;
                    if (A) {
                        e = (e || "fx") + "queue";
                        R = z.get(A, e);
                        if (t) {
                            if (!R || Array.isArray(t)) {
                                R = z.access(A, e, G.makeArray(t))
                            } else {
                                R.push(t)
                            }
                        }
                        return R || []
                    }
                },
                dequeue: function(A, e) {
                    e = e || "fx";
                    var t = G.queue(A, e),
                        R = t.length,
                        n = t.shift(),
                        i = G._queueHooks(A, e),
                        r = function() {
                            G.dequeue(A, e)
                        };
                    if (n === "inprogress") {
                        n = t.shift();
                        R--
                    }
                    if (n) {
                        if (e === "fx") {
                            t.unshift("inprogress")
                        }
                        delete i.stop;
                        n.call(A, r, i)
                    }
                    if (!R && i) {
                        i.empty.fire()
                    }
                },
                _queueHooks: function(A, e) {
                    var t = e + "queueHooks";
                    return z.get(A, t) || z.access(A, t, {
                        empty: G.Callbacks("once memory").add(function() {
                            z.remove(A, [e + "queue", t])
                        })
                    })
                }
            });
            G.fn.extend({
                queue: function(e, t) {
                    var A = 2;
                    if (typeof e !== "string") {
                        t = e;
                        e = "fx";
                        A--
                    }
                    if (arguments.length < A) {
                        return G.queue(this[0], e)
                    }
                    return t === undefined ? this : this.each(function() {
                        var A = G.queue(this, e, t);
                        G._queueHooks(this, e);
                        if (e === "fx" && A[0] !== "inprogress") {
                            G.dequeue(this, e)
                        }
                    })
                },
                dequeue: function(A) {
                    return this.each(function() {
                        G.dequeue(this, A)
                    })
                },
                clearQueue: function(A) {
                    return this.queue(A || "fx", [])
                },
                promise: function(A, e) {
                    var t, R = 1,
                        n = G.Deferred(),
                        i = this,
                        r = this.length,
                        N = function() {
                            if (!--R) {
                                n.resolveWith(i, [i])
                            }
                        };
                    if (typeof A !== "string") {
                        e = A;
                        A = undefined
                    }
                    A = A || "fx";
                    while (r--) {
                        t = z.get(i[r], A + "queueHooks");
                        if (t && t.empty) {
                            R++;
                            t.empty.add(N)
                        }
                    }
                    N();
                    return n.promise(e)
                }
            });
            var nA = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
            var iA = new RegExp("^(?:([+-])=|)(" + nA + ")([a-z%]*)$", "i");
            var rA = ["Top", "Right", "Bottom", "Left"];
            var NA = B.documentElement;
            var aA = function(A) {
                    return G.contains(A.ownerDocument, A)
                },
                oA = {
                    composed: true
                };
            if (NA.attachShadow) {
                aA = function(A) {
                    return G.contains(A.ownerDocument, A) || A.getRootNode(oA) === A.ownerDocument
                }
            }
            var IA = function(A, e) {
                A = e || A;
                return A.style.display === "none" || A.style.display === "" && aA(A) && G.css(A, "display") === "none"
            };
            var sA = function(A, e, t, R) {
                var n, i, r = {};
                for (i in e) {
                    r[i] = A.style[i];
                    A.style[i] = e[i]
                }
                n = t.apply(A, R || []);
                for (i in e) {
                    A.style[i] = r[i]
                }
                return n
            };

            function HA(A, e, t, R) {
                var n, i, r = 20,
                    N = R ? function() {
                        return R.cur()
                    } : function() {
                        return G.css(A, e, "")
                    },
                    a = N(),
                    o = t && t[3] || (G.cssNumber[e] ? "" : "px"),
                    I = A.nodeType && (G.cssNumber[e] || o !== "px" && +a) && iA.exec(G.css(A, e));
                if (I && I[3] !== o) {
                    a = a / 2;
                    o = o || I[3];
                    I = +a || 1;
                    while (r--) {
                        G.style(A, e, I + o);
                        if ((1 - i) * (1 - (i = N() / a || .5)) <= 0) {
                            r = 0
                        }
                        I = I / i
                    }
                    I = I * 2;
                    G.style(A, e, I + o);
                    t = t || []
                }
                if (t) {
                    I = +I || +a || 0;
                    n = t[1] ? I + (t[1] + 1) * t[2] : +t[2];
                    if (R) {
                        R.unit = o;
                        R.start = I;
                        R.end = n
                    }
                }
                return n
            }
            var DA = {};

            function LA(A) {
                var e, t = A.ownerDocument,
                    R = A.nodeName,
                    n = DA[R];
                if (n) {
                    return n
                }
                e = t.body.appendChild(t.createElement(R));
                n = G.css(e, "display");
                e.parentNode.removeChild(e);
                if (n === "none") {
                    n = "block"
                }
                DA[R] = n;
                return n
            }

            function lA(A, e) {
                var t, R, n = [],
                    i = 0,
                    r = A.length;
                for (; i < r; i++) {
                    R = A[i];
                    if (!R.style) {
                        continue
                    }
                    t = R.style.display;
                    if (e) {
                        if (t === "none") {
                            n[i] = z.get(R, "display") || null;
                            if (!n[i]) {
                                R.style.display = ""
                            }
                        }
                        if (R.style.display === "" && IA(R)) {
                            n[i] = LA(R)
                        }
                    } else {
                        if (t !== "none") {
                            n[i] = "none";
                            z.set(R, "display", t)
                        }
                    }
                }
                for (i = 0; i < r; i++) {
                    if (n[i] != null) {
                        A[i].style.display = n[i]
                    }
                }
                return A
            }
            G.fn.extend({
                show: function() {
                    return lA(this, true)
                },
                hide: function() {
                    return lA(this)
                },
                toggle: function(A) {
                    if (typeof A === "boolean") {
                        return A ? this.show() : this.hide()
                    }
                    return this.each(function() {
                        if (IA(this)) {
                            G(this).show()
                        } else {
                            G(this).hide()
                        }
                    })
                }
            });
            var UA = /^(?:checkbox|radio)$/i;
            var KA = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var MA = /^$|^module$|\/(?:java|ecma)script/i;
            var TA = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            TA.optgroup = TA.option;
            TA.tbody = TA.tfoot = TA.colgroup = TA.caption = TA.thead;
            TA.th = TA.td;

            function uA(A, e) {
                var t;
                if (typeof A.getElementsByTagName !== "undefined") {
                    t = A.getElementsByTagName(e || "*")
                } else if (typeof A.querySelectorAll !== "undefined") {
                    t = A.querySelectorAll(e || "*")
                } else {
                    t = []
                }
                if (e === undefined || e && h(A, e)) {
                    return G.merge([A], t)
                }
                return t
            }

            function cA(A, e) {
                var t = 0,
                    R = A.length;
                for (; t < R; t++) {
                    z.set(A[t], "globalEval", !e || z.get(e[t], "globalEval"))
                }
            }
            var SA = /<|&#?\w+;/;

            function PA(A, e, t, R, n) {
                var i, r, N, a, o, I, s = e.createDocumentFragment(),
                    H = [],
                    D = 0,
                    L = A.length;
                for (; D < L; D++) {
                    i = A[D];
                    if (i || i === 0) {
                        if (c(i) === "object") {
                            G.merge(H, i.nodeType ? [i] : i)
                        } else if (!SA.test(i)) {
                            H.push(e.createTextNode(i))
                        } else {
                            r = r || s.appendChild(e.createElement("div"));
                            N = (KA.exec(i) || ["", ""])[1].toLowerCase();
                            a = TA[N] || TA._default;
                            r.innerHTML = a[1] + G.htmlPrefilter(i) + a[2];
                            I = a[0];
                            while (I--) {
                                r = r.lastChild
                            }
                            G.merge(H, r.childNodes);
                            r = s.firstChild;
                            r.textContent = ""
                        }
                    }
                }
                s.textContent = "";
                D = 0;
                while (i = H[D++]) {
                    if (R && G.inArray(i, R) > -1) {
                        if (n) {
                            n.push(i)
                        }
                        continue
                    }
                    o = aA(i);
                    r = uA(s.appendChild(i), "script");
                    if (o) {
                        cA(r)
                    }
                    if (t) {
                        I = 0;
                        while (i = r[I++]) {
                            if (MA.test(i.type || "")) {
                                t.push(i)
                            }
                        }
                    }
                }
                return s
            }(function() {
                var A = B.createDocumentFragment(),
                    e = A.appendChild(B.createElement("div")),
                    t = B.createElement("input");
                t.setAttribute("type", "radio");
                t.setAttribute("checked", "checked");
                t.setAttribute("name", "t");
                e.appendChild(t);
                K.checkClone = e.cloneNode(true).cloneNode(true).lastChild.checked;
                e.innerHTML = "<textarea>x</textarea>";
                K.noCloneChecked = !!e.cloneNode(true).lastChild.defaultValue
            })();
            var BA = /^key/,
                GA = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                pA = /^([^.]*)(?:\.(.+)|)/;

            function fA() {
                return true
            }

            function hA() {
                return false
            }

            function dA(A, e) {
                return A === OA() === (e === "focus")
            }

            function OA() {
                try {
                    return B.activeElement
                } catch (A) {}
            }

            function EA(A, e, t, R, n, i) {
                var r, N;
                if (typeof e === "object") {
                    if (typeof t !== "string") {
                        R = R || t;
                        t = undefined
                    }
                    for (N in e) {
                        EA(A, N, t, R, e[N], i)
                    }
                    return A
                }
                if (R == null && n == null) {
                    n = t;
                    R = t = undefined
                } else if (n == null) {
                    if (typeof t === "string") {
                        n = R;
                        R = undefined
                    } else {
                        n = R;
                        R = t;
                        t = undefined
                    }
                }
                if (n === false) {
                    n = hA
                } else if (!n) {
                    return A
                }
                if (i === 1) {
                    r = n;
                    n = function(A) {
                        G().off(A);
                        return r.apply(this, arguments)
                    };
                    n.guid = r.guid || (r.guid = G.guid++)
                }
                return A.each(function() {
                    G.event.add(this, e, n, R, t)
                })
            }
            G.event = {
                global: {},
                add: function(e, A, t, R, n) {
                    var i, r, N, a, o, I, s, H, D, L, l, U = z.get(e);
                    if (!U) {
                        return
                    }
                    if (t.handler) {
                        i = t;
                        t = i.handler;
                        n = i.selector
                    }
                    if (n) {
                        G.find.matchesSelector(NA, n)
                    }
                    if (!t.guid) {
                        t.guid = G.guid++
                    }
                    if (!(a = U.events)) {
                        a = U.events = {}
                    }
                    if (!(r = U.handle)) {
                        r = U.handle = function(A) {
                            return typeof G !== "undefined" && G.event.triggered !== A.type ? G.event.dispatch.apply(e, arguments) : undefined
                        }
                    }
                    A = (A || "").match(m) || [""];
                    o = A.length;
                    while (o--) {
                        N = pA.exec(A[o]) || [];
                        D = l = N[1];
                        L = (N[2] || "").split(".").sort();
                        if (!D) {
                            continue
                        }
                        s = G.event.special[D] || {};
                        D = (n ? s.delegateType : s.bindType) || D;
                        s = G.event.special[D] || {};
                        I = G.extend({
                            type: D,
                            origType: l,
                            data: R,
                            handler: t,
                            guid: t.guid,
                            selector: n,
                            needsContext: n && G.expr.match.needsContext.test(n),
                            namespace: L.join(".")
                        }, i);
                        if (!(H = a[D])) {
                            H = a[D] = [];
                            H.delegateCount = 0;
                            if (!s.setup || s.setup.call(e, R, L, r) === false) {
                                if (e.addEventListener) {
                                    e.addEventListener(D, r)
                                }
                            }
                        }
                        if (s.add) {
                            s.add.call(e, I);
                            if (!I.handler.guid) {
                                I.handler.guid = t.guid
                            }
                        }
                        if (n) {
                            H.splice(H.delegateCount++, 0, I)
                        } else {
                            H.push(I)
                        }
                        G.event.global[D] = true
                    }
                },
                remove: function(A, e, t, R, n) {
                    var i, r, N, a, o, I, s, H, D, L, l, U = z.hasData(A) && z.get(A);
                    if (!U || !(a = U.events)) {
                        return
                    }
                    e = (e || "").match(m) || [""];
                    o = e.length;
                    while (o--) {
                        N = pA.exec(e[o]) || [];
                        D = l = N[1];
                        L = (N[2] || "").split(".").sort();
                        if (!D) {
                            for (D in a) {
                                G.event.remove(A, D + e[o], t, R, true)
                            }
                            continue
                        }
                        s = G.event.special[D] || {};
                        D = (R ? s.delegateType : s.bindType) || D;
                        H = a[D] || [];
                        N = N[2] && new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        r = i = H.length;
                        while (i--) {
                            I = H[i];
                            if ((n || l === I.origType) && (!t || t.guid === I.guid) && (!N || N.test(I.namespace)) && (!R || R === I.selector || R === "**" && I.selector)) {
                                H.splice(i, 1);
                                if (I.selector) {
                                    H.delegateCount--
                                }
                                if (s.remove) {
                                    s.remove.call(A, I)
                                }
                            }
                        }
                        if (r && !H.length) {
                            if (!s.teardown || s.teardown.call(A, L, U.handle) === false) {
                                G.removeEvent(A, D, U.handle)
                            }
                            delete a[D]
                        }
                    }
                    if (G.isEmptyObject(a)) {
                        z.remove(A, "handle events")
                    }
                },
                dispatch: function(A) {
                    var e = G.event.fix(A);
                    var t, R, n, i, r, N, a = new Array(arguments.length),
                        o = (z.get(this, "events") || {})[e.type] || [],
                        I = G.event.special[e.type] || {};
                    a[0] = e;
                    for (t = 1; t < arguments.length; t++) {
                        a[t] = arguments[t]
                    }
                    e.delegateTarget = this;
                    if (I.preDispatch && I.preDispatch.call(this, e) === false) {
                        return
                    }
                    N = G.event.handlers.call(this, e, o);
                    t = 0;
                    while ((i = N[t++]) && !e.isPropagationStopped()) {
                        e.currentTarget = i.elem;
                        R = 0;
                        while ((r = i.handlers[R++]) && !e.isImmediatePropagationStopped()) {
                            if (!e.rnamespace || r.namespace === false || e.rnamespace.test(r.namespace)) {
                                e.handleObj = r;
                                e.data = r.data;
                                n = ((G.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a);
                                if (n !== undefined) {
                                    if ((e.result = n) === false) {
                                        e.preventDefault();
                                        e.stopPropagation()
                                    }
                                }
                            }
                        }
                    }
                    if (I.postDispatch) {
                        I.postDispatch.call(this, e)
                    }
                    return e.result
                },
                handlers: function(A, e) {
                    var t, R, n, i, r, N = [],
                        a = e.delegateCount,
                        o = A.target;
                    if (a && o.nodeType && !(A.type === "click" && A.button >= 1)) {
                        for (; o !== this; o = o.parentNode || this) {
                            if (o.nodeType === 1 && !(A.type === "click" && o.disabled === true)) {
                                i = [];
                                r = {};
                                for (t = 0; t < a; t++) {
                                    R = e[t];
                                    n = R.selector + " ";
                                    if (r[n] === undefined) {
                                        r[n] = R.needsContext ? G(n, this).index(o) > -1 : G.find(n, this, null, [o]).length
                                    }
                                    if (r[n]) {
                                        i.push(R)
                                    }
                                }
                                if (i.length) {
                                    N.push({
                                        elem: o,
                                        handlers: i
                                    })
                                }
                            }
                        }
                    }
                    o = this;
                    if (a < e.length) {
                        N.push({
                            elem: o,
                            handlers: e.slice(a)
                        })
                    }
                    return N
                },
                addProp: function(e, A) {
                    Object.defineProperty(G.Event.prototype, e, {
                        enumerable: true,
                        configurable: true,
                        get: M(A) ? function() {
                            if (this.originalEvent) {
                                return A(this.originalEvent)
                            }
                        } : function() {
                            if (this.originalEvent) {
                                return this.originalEvent[e]
                            }
                        },
                        set: function(A) {
                            Object.defineProperty(this, e, {
                                enumerable: true,
                                configurable: true,
                                writable: true,
                                value: A
                            })
                        }
                    })
                },
                fix: function(A) {
                    return A[G.expando] ? A : new G.Event(A)
                },
                special: {
                    load: {
                        noBubble: true
                    },
                    click: {
                        setup: function(A) {
                            var e = this || A;
                            if (UA.test(e.type) && e.click && h(e, "input") && z.get(e, "click") === undefined) {
                                JA(e, "click", fA)
                            }
                            return false
                        },
                        trigger: function(A) {
                            var e = this || A;
                            if (UA.test(e.type) && e.click && h(e, "input") && z.get(e, "click") === undefined) {
                                JA(e, "click")
                            }
                            return true
                        },
                        _default: function(A) {
                            var e = A.target;
                            return UA.test(e.type) && e.click && h(e, "input") && z.get(e, "click") || h(e, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(A) {
                            if (A.result !== undefined && A.originalEvent) {
                                A.originalEvent.returnValue = A.result
                            }
                        }
                    }
                }
            };

            function JA(A, n, i) {
                if (!i) {
                    G.event.add(A, n, fA);
                    return
                }
                z.set(A, n, false);
                G.event.add(A, n, {
                    namespace: false,
                    handler: function(A) {
                        var e, t, R = z.get(this, n);
                        if (A.isTrigger & 1 && this[n]) {
                            if (!R) {
                                R = N.call(arguments);
                                z.set(this, n, R);
                                e = i(this, n);
                                this[n]();
                                t = z.get(this, n);
                                if (R !== t || e) {
                                    z.set(this, n, false)
                                } else {
                                    t = undefined
                                }
                                if (R !== t) {
                                    A.stopImmediatePropagation();
                                    A.preventDefault();
                                    return t
                                }
                            } else if ((G.event.special[n] || {}).delegateType) {
                                A.stopPropagation()
                            }
                        } else if (R) {
                            z.set(this, n, G.event.trigger(G.extend(R.shift(), G.Event.prototype), R, this));
                            A.stopImmediatePropagation()
                        }
                    }
                })
            }
            G.removeEvent = function(A, e, t) {
                if (A.removeEventListener) {
                    A.removeEventListener(e, t)
                }
            };
            G.Event = function(A, e) {
                if (!(this instanceof G.Event)) {
                    return new G.Event(A, e)
                }
                if (A && A.type) {
                    this.originalEvent = A;
                    this.type = A.type;
                    this.isDefaultPrevented = A.defaultPrevented || A.defaultPrevented === undefined && A.returnValue === false ? fA : hA;
                    this.target = A.target && A.target.nodeType === 3 ? A.target.parentNode : A.target;
                    this.currentTarget = A.currentTarget;
                    this.relatedTarget = A.relatedTarget
                } else {
                    this.type = A
                }
                if (e) {
                    G.extend(this, e)
                }
                this.timeStamp = A && A.timeStamp || Date.now();
                this[G.expando] = true
            };
            G.Event.prototype = {
                constructor: G.Event,
                isDefaultPrevented: hA,
                isPropagationStopped: hA,
                isImmediatePropagationStopped: hA,
                isSimulated: false,
                preventDefault: function() {
                    var A = this.originalEvent;
                    this.isDefaultPrevented = fA;
                    if (A && !this.isSimulated) {
                        A.preventDefault()
                    }
                },
                stopPropagation: function() {
                    var A = this.originalEvent;
                    this.isPropagationStopped = fA;
                    if (A && !this.isSimulated) {
                        A.stopPropagation()
                    }
                },
                stopImmediatePropagation: function() {
                    var A = this.originalEvent;
                    this.isImmediatePropagationStopped = fA;
                    if (A && !this.isSimulated) {
                        A.stopImmediatePropagation()
                    }
                    this.stopPropagation()
                }
            };
            G.each({
                altKey: true,
                bubbles: true,
                cancelable: true,
                changedTouches: true,
                ctrlKey: true,
                detail: true,
                eventPhase: true,
                metaKey: true,
                pageX: true,
                pageY: true,
                shiftKey: true,
                view: true,
                char: true,
                code: true,
                charCode: true,
                key: true,
                keyCode: true,
                button: true,
                buttons: true,
                clientX: true,
                clientY: true,
                offsetX: true,
                offsetY: true,
                pointerId: true,
                pointerType: true,
                screenX: true,
                screenY: true,
                targetTouches: true,
                toElement: true,
                touches: true,
                which: function(A) {
                    var e = A.button;
                    if (A.which == null && BA.test(A.type)) {
                        return A.charCode != null ? A.charCode : A.keyCode
                    }
                    if (!A.which && e !== undefined && GA.test(A.type)) {
                        if (e & 1) {
                            return 1
                        }
                        if (e & 2) {
                            return 3
                        }
                        if (e & 4) {
                            return 2
                        }
                        return 0
                    }
                    return A.which
                }
            }, G.event.addProp);
            G.each({
                focus: "focusin",
                blur: "focusout"
            }, function(A, e) {
                G.event.special[A] = {
                    setup: function() {
                        JA(this, A, dA);
                        return false
                    },
                    trigger: function() {
                        JA(this, A);
                        return true
                    },
                    delegateType: e
                }
            });
            G.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(A, i) {
                G.event.special[A] = {
                    delegateType: i,
                    bindType: i,
                    handle: function(A) {
                        var e, t = this,
                            R = A.relatedTarget,
                            n = A.handleObj;
                        if (!R || R !== t && !G.contains(t, R)) {
                            A.type = n.origType;
                            e = n.handler.apply(this, arguments);
                            A.type = i
                        }
                        return e
                    }
                }
            });
            G.fn.extend({
                on: function(A, e, t, R) {
                    return EA(this, A, e, t, R)
                },
                one: function(A, e, t, R) {
                    return EA(this, A, e, t, R, 1)
                },
                off: function(A, e, t) {
                    var R, n;
                    if (A && A.preventDefault && A.handleObj) {
                        R = A.handleObj;
                        G(A.delegateTarget).off(R.namespace ? R.origType + "." + R.namespace : R.origType, R.selector, R.handler);
                        return this
                    }
                    if (typeof A === "object") {
                        for (n in A) {
                            this.off(n, e, A[n])
                        }
                        return this
                    }
                    if (e === false || typeof e === "function") {
                        t = e;
                        e = undefined
                    }
                    if (t === false) {
                        t = hA
                    }
                    return this.each(function() {
                        G.event.remove(this, A, t, e)
                    })
                }
            });
            var CA = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                gA = /<script|<style|<link/i,
                yA = /checked\s*(?:[^=]|=\s*.checked.)/i,
                vA = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function mA(A, e) {
                if (h(A, "table") && h(e.nodeType !== 11 ? e : e.firstChild, "tr")) {
                    return G(A).children("tbody")[0] || A
                }
                return A
            }

            function VA(A) {
                A.type = (A.getAttribute("type") !== null) + "/" + A.type;
                return A
            }

            function WA(A) {
                if ((A.type || "").slice(0, 5) === "true/") {
                    A.type = A.type.slice(5)
                } else {
                    A.removeAttribute("type")
                }
                return A
            }

            function YA(A, e) {
                var t, R, n, i, r, N, a, o;
                if (e.nodeType !== 1) {
                    return
                }
                if (z.hasData(A)) {
                    i = z.access(A);
                    r = z.set(e, i);
                    o = i.events;
                    if (o) {
                        delete r.handle;
                        r.events = {};
                        for (n in o) {
                            for (t = 0, R = o[n].length; t < R; t++) {
                                G.event.add(e, n, o[n][t])
                            }
                        }
                    }
                }
                if ($.hasData(A)) {
                    N = $.access(A);
                    a = G.extend({}, N);
                    $.set(e, a)
                }
            }

            function bA(A, e) {
                var t = e.nodeName.toLowerCase();
                if (t === "input" && UA.test(A.type)) {
                    e.checked = A.checked
                } else if (t === "input" || t === "textarea") {
                    e.defaultValue = A.defaultValue
                }
            }

            function xA(t, R, n, i) {
                R = l.apply([], R);
                var A, e, r, N, a, o, I = 0,
                    s = t.length,
                    H = s - 1,
                    D = R[0],
                    L = M(D);
                if (L || s > 1 && typeof D === "string" && !K.checkClone && yA.test(D)) {
                    return t.each(function(A) {
                        var e = t.eq(A);
                        if (L) {
                            R[0] = D.call(this, A, e.html())
                        }
                        xA(e, R, n, i)
                    })
                }
                if (s) {
                    A = PA(R, t[0].ownerDocument, false, t, i);
                    e = A.firstChild;
                    if (A.childNodes.length === 1) {
                        A = e
                    }
                    if (e || i) {
                        r = G.map(uA(A, "script"), VA);
                        N = r.length;
                        for (; I < s; I++) {
                            a = A;
                            if (I !== H) {
                                a = G.clone(a, true, true);
                                if (N) {
                                    G.merge(r, uA(a, "script"))
                                }
                            }
                            n.call(t[I], a, I)
                        }
                        if (N) {
                            o = r[r.length - 1].ownerDocument;
                            G.map(r, WA);
                            for (I = 0; I < N; I++) {
                                a = r[I];
                                if (MA.test(a.type || "") && !z.access(a, "globalEval") && G.contains(o, a)) {
                                    if (a.src && (a.type || "").toLowerCase() !== "module") {
                                        if (G._evalUrl && !a.noModule) {
                                            G._evalUrl(a.src, {
                                                nonce: a.nonce || a.getAttribute("nonce")
                                            })
                                        }
                                    } else {
                                        u(a.textContent.replace(vA, ""), a, o)
                                    }
                                }
                            }
                        }
                    }
                }
                return t
            }

            function wA(A, e, t) {
                var R, n = e ? G.filter(e, A) : A,
                    i = 0;
                for (;
                    (R = n[i]) != null; i++) {
                    if (!t && R.nodeType === 1) {
                        G.cleanData(uA(R))
                    }
                    if (R.parentNode) {
                        if (t && aA(R)) {
                            cA(uA(R, "script"))
                        }
                        R.parentNode.removeChild(R)
                    }
                }
                return A
            }
            G.extend({
                htmlPrefilter: function(A) {
                    return A.replace(CA, "<$1></$2>")
                },
                clone: function(A, e, t) {
                    var R, n, i, r, N = A.cloneNode(true),
                        a = aA(A);
                    if (!K.noCloneChecked && (A.nodeType === 1 || A.nodeType === 11) && !G.isXMLDoc(A)) {
                        r = uA(N);
                        i = uA(A);
                        for (R = 0, n = i.length; R < n; R++) {
                            bA(i[R], r[R])
                        }
                    }
                    if (e) {
                        if (t) {
                            i = i || uA(A);
                            r = r || uA(N);
                            for (R = 0, n = i.length; R < n; R++) {
                                YA(i[R], r[R])
                            }
                        } else {
                            YA(A, N)
                        }
                    }
                    r = uA(N, "script");
                    if (r.length > 0) {
                        cA(r, !a && uA(A, "script"))
                    }
                    return N
                },
                cleanData: function(A) {
                    var e, t, R, n = G.event.special,
                        i = 0;
                    for (;
                        (t = A[i]) !== undefined; i++) {
                        if (_(t)) {
                            if (e = t[z.expando]) {
                                if (e.events) {
                                    for (R in e.events) {
                                        if (n[R]) {
                                            G.event.remove(t, R)
                                        } else {
                                            G.removeEvent(t, R, e.handle)
                                        }
                                    }
                                }
                                t[z.expando] = undefined
                            }
                            if (t[$.expando]) {
                                t[$.expando] = undefined
                            }
                        }
                    }
                }
            });
            G.fn.extend({
                detach: function(A) {
                    return wA(this, A, true)
                },
                remove: function(A) {
                    return wA(this, A)
                },
                text: function(A) {
                    return F(this, function(A) {
                        return A === undefined ? G.text(this) : this.empty().each(function() {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                this.textContent = A
                            }
                        })
                    }, null, A, arguments.length)
                },
                append: function() {
                    return xA(this, arguments, function(A) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var e = mA(this, A);
                            e.appendChild(A)
                        }
                    })
                },
                prepend: function() {
                    return xA(this, arguments, function(A) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var e = mA(this, A);
                            e.insertBefore(A, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return xA(this, arguments, function(A) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(A, this)
                        }
                    })
                },
                after: function() {
                    return xA(this, arguments, function(A) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(A, this.nextSibling)
                        }
                    })
                },
                empty: function() {
                    var A, e = 0;
                    for (;
                        (A = this[e]) != null; e++) {
                        if (A.nodeType === 1) {
                            G.cleanData(uA(A, false));
                            A.textContent = ""
                        }
                    }
                    return this
                },
                clone: function(A, e) {
                    A = A == null ? false : A;
                    e = e == null ? A : e;
                    return this.map(function() {
                        return G.clone(this, A, e)
                    })
                },
                html: function(A) {
                    return F(this, function(A) {
                        var e = this[0] || {},
                            t = 0,
                            R = this.length;
                        if (A === undefined && e.nodeType === 1) {
                            return e.innerHTML
                        }
                        if (typeof A === "string" && !gA.test(A) && !TA[(KA.exec(A) || ["", ""])[1].toLowerCase()]) {
                            A = G.htmlPrefilter(A);
                            try {
                                for (; t < R; t++) {
                                    e = this[t] || {};
                                    if (e.nodeType === 1) {
                                        G.cleanData(uA(e, false));
                                        e.innerHTML = A
                                    }
                                }
                                e = 0
                            } catch (A) {}
                        }
                        if (e) {
                            this.empty().append(A)
                        }
                    }, null, A, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return xA(this, arguments, function(A) {
                        var e = this.parentNode;
                        if (G.inArray(this, t) < 0) {
                            G.cleanData(uA(this));
                            if (e) {
                                e.replaceChild(A, this)
                            }
                        }
                    }, t)
                }
            });
            G.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(A, r) {
                G.fn[A] = function(A) {
                    var e, t = [],
                        R = G(A),
                        n = R.length - 1,
                        i = 0;
                    for (; i <= n; i++) {
                        e = i === n ? this : this.clone(true);
                        G(R[i])[r](e);
                        a.apply(t, e.get())
                    }
                    return this.pushStack(t)
                }
            });
            var kA = new RegExp("^(" + nA + ")(?!px)[a-z%]+$", "i");
            var FA = function(A) {
                var e = A.ownerDocument.defaultView;
                if (!e || !e.opener) {
                    e = P
                }
                return e.getComputedStyle(A)
            };
            var ZA = new RegExp(rA.join("|"), "i");
            (function() {
                function A() {
                    if (!a) {
                        return
                    }
                    N.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                    a.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                    NA.appendChild(N).appendChild(a);
                    var A = P.getComputedStyle(a);
                    t = A.top !== "1%";
                    r = e(A.marginLeft) === 12;
                    a.style.right = "60%";
                    i = e(A.right) === 36;
                    R = e(A.width) === 36;
                    a.style.position = "absolute";
                    n = e(a.offsetWidth / 3) === 12;
                    NA.removeChild(N);
                    a = null
                }

                function e(A) {
                    return Math.round(parseFloat(A))
                }
                var t, R, n, i, r, N = B.createElement("div"),
                    a = B.createElement("div");
                if (!a.style) {
                    return
                }
                a.style.backgroundClip = "content-box";
                a.cloneNode(true).style.backgroundClip = "";
                K.clearCloneStyle = a.style.backgroundClip === "content-box";
                G.extend(K, {
                    boxSizingReliable: function() {
                        A();
                        return R
                    },
                    pixelBoxStyles: function() {
                        A();
                        return i
                    },
                    pixelPosition: function() {
                        A();
                        return t
                    },
                    reliableMarginLeft: function() {
                        A();
                        return r
                    },
                    scrollboxSize: function() {
                        A();
                        return n
                    }
                })
            })();

            function XA(A, e, t) {
                var R, n, i, r, N = A.style;
                t = t || FA(A);
                if (t) {
                    r = t.getPropertyValue(e) || t[e];
                    if (r === "" && !aA(A)) {
                        r = G.style(A, e)
                    }
                    if (!K.pixelBoxStyles() && kA.test(r) && ZA.test(e)) {
                        R = N.width;
                        n = N.minWidth;
                        i = N.maxWidth;
                        N.minWidth = N.maxWidth = N.width = r;
                        r = t.width;
                        N.width = R;
                        N.minWidth = n;
                        N.maxWidth = i
                    }
                }
                return r !== undefined ? r + "" : r
            }

            function QA(A, e) {
                return {
                    get: function() {
                        if (A()) {
                            delete this.get;
                            return
                        }
                        return (this.get = e).apply(this, arguments)
                    }
                }
            }
            var qA = ["Webkit", "Moz", "ms"],
                _A = B.createElement("div").style,
                jA = {};

            function zA(A) {
                var e = A[0].toUpperCase() + A.slice(1),
                    t = qA.length;
                while (t--) {
                    A = qA[t] + e;
                    if (A in _A) {
                        return A
                    }
                }
            }

            function $A(A) {
                var e = G.cssProps[A] || jA[A];
                if (e) {
                    return e
                }
                if (A in _A) {
                    return A
                }
                return jA[A] = zA(A) || A
            }
            var Ae = /^(none|table(?!-c[ea]).+)/,
                ee = /^--/,
                te = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Re = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function ne(A, e, t) {
                var R = iA.exec(e);
                return R ? Math.max(0, R[2] - (t || 0)) + (R[3] || "px") : e
            }

            function ie(A, e, t, R, n, i) {
                var r = e === "width" ? 1 : 0,
                    N = 0,
                    a = 0;
                if (t === (R ? "border" : "content")) {
                    return 0
                }
                for (; r < 4; r += 2) {
                    if (t === "margin") {
                        a += G.css(A, t + rA[r], true, n)
                    }
                    if (!R) {
                        a += G.css(A, "padding" + rA[r], true, n);
                        if (t !== "padding") {
                            a += G.css(A, "border" + rA[r] + "Width", true, n)
                        } else {
                            N += G.css(A, "border" + rA[r] + "Width", true, n)
                        }
                    } else {
                        if (t === "content") {
                            a -= G.css(A, "padding" + rA[r], true, n)
                        }
                        if (t !== "margin") {
                            a -= G.css(A, "border" + rA[r] + "Width", true, n)
                        }
                    }
                }
                if (!R && i >= 0) {
                    a += Math.max(0, Math.ceil(A["offset" + e[0].toUpperCase() + e.slice(1)] - i - a - N - .5)) || 0
                }
                return a
            }

            function re(A, e, t) {
                var R = FA(A),
                    n = !K.boxSizingReliable() || t,
                    i = n && G.css(A, "boxSizing", false, R) === "border-box",
                    r = i,
                    N = XA(A, e, R),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (kA.test(N)) {
                    if (!t) {
                        return N
                    }
                    N = "auto"
                }
                if ((!K.boxSizingReliable() && i || N === "auto" || !parseFloat(N) && G.css(A, "display", false, R) === "inline") && A.getClientRects().length) {
                    i = G.css(A, "boxSizing", false, R) === "border-box";
                    r = a in A;
                    if (r) {
                        N = A[a]
                    }
                }
                N = parseFloat(N) || 0;
                return N + ie(A, e, t || (i ? "border" : "content"), r, R, N) + "px"
            }
            G.extend({
                cssHooks: {
                    opacity: {
                        get: function(A, e) {
                            if (e) {
                                var t = XA(A, "opacity");
                                return t === "" ? "1" : t
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: true,
                    columnCount: true,
                    fillOpacity: true,
                    flexGrow: true,
                    flexShrink: true,
                    fontWeight: true,
                    gridArea: true,
                    gridColumn: true,
                    gridColumnEnd: true,
                    gridColumnStart: true,
                    gridRow: true,
                    gridRowEnd: true,
                    gridRowStart: true,
                    lineHeight: true,
                    opacity: true,
                    order: true,
                    orphans: true,
                    widows: true,
                    zIndex: true,
                    zoom: true
                },
                cssProps: {},
                style: function(A, e, t, R) {
                    if (!A || A.nodeType === 3 || A.nodeType === 8 || !A.style) {
                        return
                    }
                    var n, i, r, N = q(e),
                        a = ee.test(e),
                        o = A.style;
                    if (!a) {
                        e = $A(N)
                    }
                    r = G.cssHooks[e] || G.cssHooks[N];
                    if (t !== undefined) {
                        i = typeof t;
                        if (i === "string" && (n = iA.exec(t)) && n[1]) {
                            t = HA(A, e, n);
                            i = "number"
                        }
                        if (t == null || t !== t) {
                            return
                        }
                        if (i === "number" && !a) {
                            t += n && n[3] || (G.cssNumber[N] ? "" : "px")
                        }
                        if (!K.clearCloneStyle && t === "" && e.indexOf("background") === 0) {
                            o[e] = "inherit"
                        }
                        if (!r || !("set" in r) || (t = r.set(A, t, R)) !== undefined) {
                            if (a) {
                                o.setProperty(e, t)
                            } else {
                                o[e] = t
                            }
                        }
                    } else {
                        if (r && "get" in r && (n = r.get(A, false, R)) !== undefined) {
                            return n
                        }
                        return o[e]
                    }
                },
                css: function(A, e, t, R) {
                    var n, i, r, N = q(e),
                        a = ee.test(e);
                    if (!a) {
                        e = $A(N)
                    }
                    r = G.cssHooks[e] || G.cssHooks[N];
                    if (r && "get" in r) {
                        n = r.get(A, true, t)
                    }
                    if (n === undefined) {
                        n = XA(A, e, R)
                    }
                    if (n === "normal" && e in Re) {
                        n = Re[e]
                    }
                    if (t === "" || t) {
                        i = parseFloat(n);
                        return t === true || isFinite(i) ? i || 0 : n
                    }
                    return n
                }
            });
            G.each(["height", "width"], function(A, o) {
                G.cssHooks[o] = {
                    get: function(A, e, t) {
                        if (e) {
                            return Ae.test(G.css(A, "display")) && (!A.getClientRects().length || !A.getBoundingClientRect().width) ? sA(A, te, function() {
                                return re(A, o, t)
                            }) : re(A, o, t)
                        }
                    },
                    set: function(A, e, t) {
                        var R, n = FA(A),
                            i = !K.scrollboxSize() && n.position === "absolute",
                            r = i || t,
                            N = r && G.css(A, "boxSizing", false, n) === "border-box",
                            a = t ? ie(A, o, t, N, n) : 0;
                        if (N && i) {
                            a -= Math.ceil(A["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(n[o]) - ie(A, o, "border", false, n) - .5)
                        }
                        if (a && (R = iA.exec(e)) && (R[3] || "px") !== "px") {
                            A.style[o] = e;
                            e = G.css(A, o)
                        }
                        return ne(A, e, a)
                    }
                }
            });
            G.cssHooks.marginLeft = QA(K.reliableMarginLeft, function(A, e) {
                if (e) {
                    return (parseFloat(XA(A, "marginLeft")) || A.getBoundingClientRect().left - sA(A, {
                        marginLeft: 0
                    }, function() {
                        return A.getBoundingClientRect().left
                    })) + "px"
                }
            });
            G.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(n, i) {
                G.cssHooks[n + i] = {
                    expand: function(A) {
                        var e = 0,
                            t = {},
                            R = typeof A === "string" ? A.split(" ") : [A];
                        for (; e < 4; e++) {
                            t[n + rA[e] + i] = R[e] || R[e - 2] || R[0]
                        }
                        return t
                    }
                };
                if (n !== "margin") {
                    G.cssHooks[n + i].set = ne
                }
            });
            G.fn.extend({
                css: function(A, e) {
                    return F(this, function(A, e, t) {
                        var R, n, i = {},
                            r = 0;
                        if (Array.isArray(e)) {
                            R = FA(A);
                            n = e.length;
                            for (; r < n; r++) {
                                i[e[r]] = G.css(A, e[r], false, R)
                            }
                            return i
                        }
                        return t !== undefined ? G.style(A, e, t) : G.css(A, e)
                    }, A, e, arguments.length > 1)
                }
            });

            function Ne(A, e, t, R, n) {
                return new Ne.prototype.init(A, e, t, R, n)
            }
            G.Tween = Ne;
            Ne.prototype = {
                constructor: Ne,
                init: function(A, e, t, R, n, i) {
                    this.elem = A;
                    this.prop = t;
                    this.easing = n || G.easing._default;
                    this.options = e;
                    this.start = this.now = this.cur();
                    this.end = R;
                    this.unit = i || (G.cssNumber[t] ? "" : "px")
                },
                cur: function() {
                    var A = Ne.propHooks[this.prop];
                    return A && A.get ? A.get(this) : Ne.propHooks._default.get(this)
                },
                run: function(A) {
                    var e, t = Ne.propHooks[this.prop];
                    if (this.options.duration) {
                        this.pos = e = G.easing[this.easing](A, this.options.duration * A, 0, 1, this.options.duration)
                    } else {
                        this.pos = e = A
                    }
                    this.now = (this.end - this.start) * e + this.start;
                    if (this.options.step) {
                        this.options.step.call(this.elem, this.now, this)
                    }
                    if (t && t.set) {
                        t.set(this)
                    } else {
                        Ne.propHooks._default.set(this)
                    }
                    return this
                }
            };
            Ne.prototype.init.prototype = Ne.prototype;
            Ne.propHooks = {
                _default: {
                    get: function(A) {
                        var e;
                        if (A.elem.nodeType !== 1 || A.elem[A.prop] != null && A.elem.style[A.prop] == null) {
                            return A.elem[A.prop]
                        }
                        e = G.css(A.elem, A.prop, "");
                        return !e || e === "auto" ? 0 : e
                    },
                    set: function(A) {
                        if (G.fx.step[A.prop]) {
                            G.fx.step[A.prop](A)
                        } else if (A.elem.nodeType === 1 && (G.cssHooks[A.prop] || A.elem.style[$A(A.prop)] != null)) {
                            G.style(A.elem, A.prop, A.now + A.unit)
                        } else {
                            A.elem[A.prop] = A.now
                        }
                    }
                }
            };
            Ne.propHooks.scrollTop = Ne.propHooks.scrollLeft = {
                set: function(A) {
                    if (A.elem.nodeType && A.elem.parentNode) {
                        A.elem[A.prop] = A.now
                    }
                }
            };
            G.easing = {
                linear: function(A) {
                    return A
                },
                swing: function(A) {
                    return .5 - Math.cos(A * Math.PI) / 2
                },
                _default: "swing"
            };
            G.fx = Ne.prototype.init;
            G.fx.step = {};
            var ae, oe, Ie = /^(?:toggle|show|hide)$/,
                se = /queueHooks$/;

            function He() {
                if (oe) {
                    if (B.hidden === false && P.requestAnimationFrame) {
                        P.requestAnimationFrame(He)
                    } else {
                        P.setTimeout(He, G.fx.interval)
                    }
                    G.fx.tick()
                }
            }

            function De() {
                P.setTimeout(function() {
                    ae = undefined
                });
                return ae = Date.now()
            }

            function Le(A, e) {
                var t, R = 0,
                    n = {
                        height: A
                    };
                e = e ? 1 : 0;
                for (; R < 4; R += 2 - e) {
                    t = rA[R];
                    n["margin" + t] = n["padding" + t] = A
                }
                if (e) {
                    n.opacity = n.width = A
                }
                return n
            }

            function le(A, e, t) {
                var R, n = (Me.tweeners[e] || []).concat(Me.tweeners["*"]),
                    i = 0,
                    r = n.length;
                for (; i < r; i++) {
                    if (R = n[i].call(t, e, A)) {
                        return R
                    }
                }
            }

            function Ue(A, e, t) {
                var R, n, i, r, N, a, o, I, s = "width" in e || "height" in e,
                    H = this,
                    D = {},
                    L = A.style,
                    l = A.nodeType && IA(A),
                    U = z.get(A, "fxshow");
                if (!t.queue) {
                    r = G._queueHooks(A, "fx");
                    if (r.unqueued == null) {
                        r.unqueued = 0;
                        N = r.empty.fire;
                        r.empty.fire = function() {
                            if (!r.unqueued) {
                                N()
                            }
                        }
                    }
                    r.unqueued++;
                    H.always(function() {
                        H.always(function() {
                            r.unqueued--;
                            if (!G.queue(A, "fx").length) {
                                r.empty.fire()
                            }
                        })
                    })
                }
                for (R in e) {
                    n = e[R];
                    if (Ie.test(n)) {
                        delete e[R];
                        i = i || n === "toggle";
                        if (n === (l ? "hide" : "show")) {
                            if (n === "show" && U && U[R] !== undefined) {
                                l = true
                            } else {
                                continue
                            }
                        }
                        D[R] = U && U[R] || G.style(A, R)
                    }
                }
                a = !G.isEmptyObject(e);
                if (!a && G.isEmptyObject(D)) {
                    return
                }
                if (s && A.nodeType === 1) {
                    t.overflow = [L.overflow, L.overflowX, L.overflowY];
                    o = U && U.display;
                    if (o == null) {
                        o = z.get(A, "display")
                    }
                    I = G.css(A, "display");
                    if (I === "none") {
                        if (o) {
                            I = o
                        } else {
                            lA([A], true);
                            o = A.style.display || o;
                            I = G.css(A, "display");
                            lA([A])
                        }
                    }
                    if (I === "inline" || I === "inline-block" && o != null) {
                        if (G.css(A, "float") === "none") {
                            if (!a) {
                                H.done(function() {
                                    L.display = o
                                });
                                if (o == null) {
                                    I = L.display;
                                    o = I === "none" ? "" : I
                                }
                            }
                            L.display = "inline-block"
                        }
                    }
                }
                if (t.overflow) {
                    L.overflow = "hidden";
                    H.always(function() {
                        L.overflow = t.overflow[0];
                        L.overflowX = t.overflow[1];
                        L.overflowY = t.overflow[2]
                    })
                }
                a = false;
                for (R in D) {
                    if (!a) {
                        if (U) {
                            if ("hidden" in U) {
                                l = U.hidden
                            }
                        } else {
                            U = z.access(A, "fxshow", {
                                display: o
                            })
                        }
                        if (i) {
                            U.hidden = !l
                        }
                        if (l) {
                            lA([A], true)
                        }
                        H.done(function() {
                            if (!l) {
                                lA([A])
                            }
                            z.remove(A, "fxshow");
                            for (R in D) {
                                G.style(A, R, D[R])
                            }
                        })
                    }
                    a = le(l ? U[R] : 0, R, H);
                    if (!(R in U)) {
                        U[R] = a.start;
                        if (l) {
                            a.end = a.start;
                            a.start = 0
                        }
                    }
                }
            }

            function Ke(A, e) {
                var t, R, n, i, r;
                for (t in A) {
                    R = q(t);
                    n = e[R];
                    i = A[t];
                    if (Array.isArray(i)) {
                        n = i[1];
                        i = A[t] = i[0]
                    }
                    if (t !== R) {
                        A[R] = i;
                        delete A[t]
                    }
                    r = G.cssHooks[R];
                    if (r && "expand" in r) {
                        i = r.expand(i);
                        delete A[R];
                        for (t in i) {
                            if (!(t in A)) {
                                A[t] = i[t];
                                e[t] = n
                            }
                        }
                    } else {
                        e[R] = n
                    }
                }
            }

            function Me(r, A, e) {
                var t, N, R = 0,
                    n = Me.prefilters.length,
                    a = G.Deferred().always(function() {
                        delete i.elem
                    }),
                    i = function() {
                        if (N) {
                            return false
                        }
                        var A = ae || De(),
                            e = Math.max(0, o.startTime + o.duration - A),
                            t = e / o.duration || 0,
                            R = 1 - t,
                            n = 0,
                            i = o.tweens.length;
                        for (; n < i; n++) {
                            o.tweens[n].run(R)
                        }
                        a.notifyWith(r, [o, R, e]);
                        if (R < 1 && i) {
                            return e
                        }
                        if (!i) {
                            a.notifyWith(r, [o, 1, 0])
                        }
                        a.resolveWith(r, [o]);
                        return false
                    },
                    o = a.promise({
                        elem: r,
                        props: G.extend({}, A),
                        opts: G.extend(true, {
                            specialEasing: {},
                            easing: G.easing._default
                        }, e),
                        originalProperties: A,
                        originalOptions: e,
                        startTime: ae || De(),
                        duration: e.duration,
                        tweens: [],
                        createTween: function(A, e) {
                            var t = G.Tween(r, o.opts, A, e, o.opts.specialEasing[A] || o.opts.easing);
                            o.tweens.push(t);
                            return t
                        },
                        stop: function(A) {
                            var e = 0,
                                t = A ? o.tweens.length : 0;
                            if (N) {
                                return this
                            }
                            N = true;
                            for (; e < t; e++) {
                                o.tweens[e].run(1)
                            }
                            if (A) {
                                a.notifyWith(r, [o, 1, 0]);
                                a.resolveWith(r, [o, A])
                            } else {
                                a.rejectWith(r, [o, A])
                            }
                            return this
                        }
                    }),
                    I = o.props;
                Ke(I, o.opts.specialEasing);
                for (; R < n; R++) {
                    t = Me.prefilters[R].call(o, r, I, o.opts);
                    if (t) {
                        if (M(t.stop)) {
                            G._queueHooks(o.elem, o.opts.queue).stop = t.stop.bind(t)
                        }
                        return t
                    }
                }
                G.map(I, le, o);
                if (M(o.opts.start)) {
                    o.opts.start.call(r, o)
                }
                o.progress(o.opts.progress).done(o.opts.done, o.opts.complete).fail(o.opts.fail).always(o.opts.always);
                G.fx.timer(G.extend(i, {
                    elem: r,
                    anim: o,
                    queue: o.opts.queue
                }));
                return o
            }
            G.Animation = G.extend(Me, {
                tweeners: {
                    "*": [function(A, e) {
                        var t = this.createTween(A, e);
                        HA(t.elem, A, iA.exec(e), t);
                        return t
                    }]
                },
                tweener: function(A, e) {
                    if (M(A)) {
                        e = A;
                        A = ["*"]
                    } else {
                        A = A.match(m)
                    }
                    var t, R = 0,
                        n = A.length;
                    for (; R < n; R++) {
                        t = A[R];
                        Me.tweeners[t] = Me.tweeners[t] || [];
                        Me.tweeners[t].unshift(e)
                    }
                },
                prefilters: [Ue],
                prefilter: function(A, e) {
                    if (e) {
                        Me.prefilters.unshift(A)
                    } else {
                        Me.prefilters.push(A)
                    }
                }
            });
            G.speed = function(A, e, t) {
                var R = A && typeof A === "object" ? G.extend({}, A) : {
                    complete: t || !t && e || M(A) && A,
                    duration: A,
                    easing: t && e || e && !M(e) && e
                };
                if (G.fx.off) {
                    R.duration = 0
                } else {
                    if (typeof R.duration !== "number") {
                        if (R.duration in G.fx.speeds) {
                            R.duration = G.fx.speeds[R.duration]
                        } else {
                            R.duration = G.fx.speeds._default
                        }
                    }
                }
                if (R.queue == null || R.queue === true) {
                    R.queue = "fx"
                }
                R.old = R.complete;
                R.complete = function() {
                    if (M(R.old)) {
                        R.old.call(this)
                    }
                    if (R.queue) {
                        G.dequeue(this, R.queue)
                    }
                };
                return R
            };
            G.fn.extend({
                fadeTo: function(A, e, t, R) {
                    return this.filter(IA).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, A, t, R)
                },
                animate: function(e, A, t, R) {
                    var n = G.isEmptyObject(e),
                        i = G.speed(A, t, R),
                        r = function() {
                            var A = Me(this, G.extend({}, e), i);
                            if (n || z.get(this, "finish")) {
                                A.stop(true)
                            }
                        };
                    r.finish = r;
                    return n || i.queue === false ? this.each(r) : this.queue(i.queue, r)
                },
                stop: function(n, A, i) {
                    var r = function(A) {
                        var e = A.stop;
                        delete A.stop;
                        e(i)
                    };
                    if (typeof n !== "string") {
                        i = A;
                        A = n;
                        n = undefined
                    }
                    if (A && n !== false) {
                        this.queue(n || "fx", [])
                    }
                    return this.each(function() {
                        var A = true,
                            e = n != null && n + "queueHooks",
                            t = G.timers,
                            R = z.get(this);
                        if (e) {
                            if (R[e] && R[e].stop) {
                                r(R[e])
                            }
                        } else {
                            for (e in R) {
                                if (R[e] && R[e].stop && se.test(e)) {
                                    r(R[e])
                                }
                            }
                        }
                        for (e = t.length; e--;) {
                            if (t[e].elem === this && (n == null || t[e].queue === n)) {
                                t[e].anim.stop(i);
                                A = false;
                                t.splice(e, 1)
                            }
                        }
                        if (A || !i) {
                            G.dequeue(this, n)
                        }
                    })
                },
                finish: function(r) {
                    if (r !== false) {
                        r = r || "fx"
                    }
                    return this.each(function() {
                        var A, e = z.get(this),
                            t = e[r + "queue"],
                            R = e[r + "queueHooks"],
                            n = G.timers,
                            i = t ? t.length : 0;
                        e.finish = true;
                        G.queue(this, r, []);
                        if (R && R.stop) {
                            R.stop.call(this, true)
                        }
                        for (A = n.length; A--;) {
                            if (n[A].elem === this && n[A].queue === r) {
                                n[A].anim.stop(true);
                                n.splice(A, 1)
                            }
                        }
                        for (A = 0; A < i; A++) {
                            if (t[A] && t[A].finish) {
                                t[A].finish.call(this)
                            }
                        }
                        delete e.finish
                    })
                }
            });
            G.each(["toggle", "show", "hide"], function(A, R) {
                var n = G.fn[R];
                G.fn[R] = function(A, e, t) {
                    return A == null || typeof A === "boolean" ? n.apply(this, arguments) : this.animate(Le(R, true), A, e, t)
                }
            });
            G.each({
                slideDown: Le("show"),
                slideUp: Le("hide"),
                slideToggle: Le("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(A, R) {
                G.fn[A] = function(A, e, t) {
                    return this.animate(R, A, e, t)
                }
            });
            G.timers = [];
            G.fx.tick = function() {
                var A, e = 0,
                    t = G.timers;
                ae = Date.now();
                for (; e < t.length; e++) {
                    A = t[e];
                    if (!A() && t[e] === A) {
                        t.splice(e--, 1)
                    }
                }
                if (!t.length) {
                    G.fx.stop()
                }
                ae = undefined
            };
            G.fx.timer = function(A) {
                G.timers.push(A);
                G.fx.start()
            };
            G.fx.interval = 13;
            G.fx.start = function() {
                if (oe) {
                    return
                }
                oe = true;
                He()
            };
            G.fx.stop = function() {
                oe = null
            };
            G.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            G.fn.delay = function(R, A) {
                R = G.fx ? G.fx.speeds[R] || R : R;
                A = A || "fx";
                return this.queue(A, function(A, e) {
                    var t = P.setTimeout(A, R);
                    e.stop = function() {
                        P.clearTimeout(t)
                    }
                })
            };
            (function() {
                var A = B.createElement("input"),
                    e = B.createElement("select"),
                    t = e.appendChild(B.createElement("option"));
                A.type = "checkbox";
                K.checkOn = A.value !== "";
                K.optSelected = t.selected;
                A = B.createElement("input");
                A.value = "t";
                A.type = "radio";
                K.radioValue = A.value === "t"
            })();
            var Te, ue = G.expr.attrHandle;
            G.fn.extend({
                attr: function(A, e) {
                    return F(this, G.attr, A, e, arguments.length > 1)
                },
                removeAttr: function(A) {
                    return this.each(function() {
                        G.removeAttr(this, A)
                    })
                }
            });
            G.extend({
                attr: function(A, e, t) {
                    var R, n, i = A.nodeType;
                    if (i === 3 || i === 8 || i === 2) {
                        return
                    }
                    if (typeof A.getAttribute === "undefined") {
                        return G.prop(A, e, t)
                    }
                    if (i !== 1 || !G.isXMLDoc(A)) {
                        n = G.attrHooks[e.toLowerCase()] || (G.expr.match.bool.test(e) ? Te : undefined)
                    }
                    if (t !== undefined) {
                        if (t === null) {
                            G.removeAttr(A, e);
                            return
                        }
                        if (n && "set" in n && (R = n.set(A, t, e)) !== undefined) {
                            return R
                        }
                        A.setAttribute(e, t + "");
                        return t
                    }
                    if (n && "get" in n && (R = n.get(A, e)) !== null) {
                        return R
                    }
                    R = G.find.attr(A, e);
                    return R == null ? undefined : R
                },
                attrHooks: {
                    type: {
                        set: function(A, e) {
                            if (!K.radioValue && e === "radio" && h(A, "input")) {
                                var t = A.value;
                                A.setAttribute("type", e);
                                if (t) {
                                    A.value = t
                                }
                                return e
                            }
                        }
                    }
                },
                removeAttr: function(A, e) {
                    var t, R = 0,
                        n = e && e.match(m);
                    if (n && A.nodeType === 1) {
                        while (t = n[R++]) {
                            A.removeAttribute(t)
                        }
                    }
                }
            });
            Te = {
                set: function(A, e, t) {
                    if (e === false) {
                        G.removeAttr(A, t)
                    } else {
                        A.setAttribute(t, t)
                    }
                    return t
                }
            };
            G.each(G.expr.match.bool.source.match(/\w+/g), function(A, e) {
                var r = ue[e] || G.find.attr;
                ue[e] = function(A, e, t) {
                    var R, n, i = e.toLowerCase();
                    if (!t) {
                        n = ue[i];
                        ue[i] = R;
                        R = r(A, e, t) != null ? i : null;
                        ue[i] = n
                    }
                    return R
                }
            });
            var ce = /^(?:input|select|textarea|button)$/i,
                Se = /^(?:a|area)$/i;
            G.fn.extend({
                prop: function(A, e) {
                    return F(this, G.prop, A, e, arguments.length > 1)
                },
                removeProp: function(A) {
                    return this.each(function() {
                        delete this[G.propFix[A] || A]
                    })
                }
            });
            G.extend({
                prop: function(A, e, t) {
                    var R, n, i = A.nodeType;
                    if (i === 3 || i === 8 || i === 2) {
                        return
                    }
                    if (i !== 1 || !G.isXMLDoc(A)) {
                        e = G.propFix[e] || e;
                        n = G.propHooks[e]
                    }
                    if (t !== undefined) {
                        if (n && "set" in n && (R = n.set(A, t, e)) !== undefined) {
                            return R
                        }
                        return A[e] = t
                    }
                    if (n && "get" in n && (R = n.get(A, e)) !== null) {
                        return R
                    }
                    return A[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(A) {
                            var e = G.find.attr(A, "tabindex");
                            if (e) {
                                return parseInt(e, 10)
                            }
                            if (ce.test(A.nodeName) || Se.test(A.nodeName) && A.href) {
                                return 0
                            }
                            return -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            });
            if (!K.optSelected) {
                G.propHooks.selected = {
                    get: function(A) {
                        var e = A.parentNode;
                        if (e && e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return null
                    },
                    set: function(A) {
                        var e = A.parentNode;
                        if (e) {
                            e.selectedIndex;
                            if (e.parentNode) {
                                e.parentNode.selectedIndex
                            }
                        }
                    }
                }
            }
            G.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                G.propFix[this.toLowerCase()] = this
            });

            function Pe(A) {
                var e = A.match(m) || [];
                return e.join(" ")
            }

            function Be(A) {
                return A.getAttribute && A.getAttribute("class") || ""
            }

            function Ge(A) {
                if (Array.isArray(A)) {
                    return A
                }
                if (typeof A === "string") {
                    return A.match(m) || []
                }
                return []
            }
            G.fn.extend({
                addClass: function(e) {
                    var A, t, R, n, i, r, N, a = 0;
                    if (M(e)) {
                        return this.each(function(A) {
                            G(this).addClass(e.call(this, A, Be(this)))
                        })
                    }
                    A = Ge(e);
                    if (A.length) {
                        while (t = this[a++]) {
                            n = Be(t);
                            R = t.nodeType === 1 && " " + Pe(n) + " ";
                            if (R) {
                                r = 0;
                                while (i = A[r++]) {
                                    if (R.indexOf(" " + i + " ") < 0) {
                                        R += i + " "
                                    }
                                }
                                N = Pe(R);
                                if (n !== N) {
                                    t.setAttribute("class", N)
                                }
                            }
                        }
                    }
                    return this
                },
                removeClass: function(e) {
                    var A, t, R, n, i, r, N, a = 0;
                    if (M(e)) {
                        return this.each(function(A) {
                            G(this).removeClass(e.call(this, A, Be(this)))
                        })
                    }
                    if (!arguments.length) {
                        return this.attr("class", "")
                    }
                    A = Ge(e);
                    if (A.length) {
                        while (t = this[a++]) {
                            n = Be(t);
                            R = t.nodeType === 1 && " " + Pe(n) + " ";
                            if (R) {
                                r = 0;
                                while (i = A[r++]) {
                                    while (R.indexOf(" " + i + " ") > -1) {
                                        R = R.replace(" " + i + " ", " ")
                                    }
                                }
                                N = Pe(R);
                                if (n !== N) {
                                    t.setAttribute("class", N)
                                }
                            }
                        }
                    }
                    return this
                },
                toggleClass: function(n, e) {
                    var i = typeof n,
                        r = i === "string" || Array.isArray(n);
                    if (typeof e === "boolean" && r) {
                        return e ? this.addClass(n) : this.removeClass(n)
                    }
                    if (M(n)) {
                        return this.each(function(A) {
                            G(this).toggleClass(n.call(this, A, Be(this), e), e)
                        })
                    }
                    return this.each(function() {
                        var A, e, t, R;
                        if (r) {
                            e = 0;
                            t = G(this);
                            R = Ge(n);
                            while (A = R[e++]) {
                                if (t.hasClass(A)) {
                                    t.removeClass(A)
                                } else {
                                    t.addClass(A)
                                }
                            }
                        } else if (n === undefined || i === "boolean") {
                            A = Be(this);
                            if (A) {
                                z.set(this, "__className__", A)
                            }
                            if (this.setAttribute) {
                                this.setAttribute("class", A || n === false ? "" : z.get(this, "__className__") || "")
                            }
                        }
                    })
                },
                hasClass: function(A) {
                    var e, t, R = 0;
                    e = " " + A + " ";
                    while (t = this[R++]) {
                        if (t.nodeType === 1 && (" " + Pe(Be(t)) + " ").indexOf(e) > -1) {
                            return true
                        }
                    }
                    return false
                }
            });
            var pe = /\r/g;
            G.fn.extend({
                val: function(t) {
                    var R, A, n, e = this[0];
                    if (!arguments.length) {
                        if (e) {
                            R = G.valHooks[e.type] || G.valHooks[e.nodeName.toLowerCase()];
                            if (R && "get" in R && (A = R.get(e, "value")) !== undefined) {
                                return A
                            }
                            A = e.value;
                            if (typeof A === "string") {
                                return A.replace(pe, "")
                            }
                            return A == null ? "" : A
                        }
                        return
                    }
                    n = M(t);
                    return this.each(function(A) {
                        var e;
                        if (this.nodeType !== 1) {
                            return
                        }
                        if (n) {
                            e = t.call(this, A, G(this).val())
                        } else {
                            e = t
                        }
                        if (e == null) {
                            e = ""
                        } else if (typeof e === "number") {
                            e += ""
                        } else if (Array.isArray(e)) {
                            e = G.map(e, function(A) {
                                return A == null ? "" : A + ""
                            })
                        }
                        R = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()];
                        if (!R || !("set" in R) || R.set(this, e, "value") === undefined) {
                            this.value = e
                        }
                    })
                }
            });
            G.extend({
                valHooks: {
                    option: {
                        get: function(A) {
                            var e = G.find.attr(A, "value");
                            return e != null ? e : Pe(G.text(A))
                        }
                    },
                    select: {
                        get: function(A) {
                            var e, t, R, n = A.options,
                                i = A.selectedIndex,
                                r = A.type === "select-one",
                                N = r ? null : [],
                                a = r ? i + 1 : n.length;
                            if (i < 0) {
                                R = a
                            } else {
                                R = r ? i : 0
                            }
                            for (; R < a; R++) {
                                t = n[R];
                                if ((t.selected || R === i) && !t.disabled && (!t.parentNode.disabled || !h(t.parentNode, "optgroup"))) {
                                    e = G(t).val();
                                    if (r) {
                                        return e
                                    }
                                    N.push(e)
                                }
                            }
                            return N
                        },
                        set: function(A, e) {
                            var t, R, n = A.options,
                                i = G.makeArray(e),
                                r = n.length;
                            while (r--) {
                                R = n[r];
                                if (R.selected = G.inArray(G.valHooks.option.get(R), i) > -1) {
                                    t = true
                                }
                            }
                            if (!t) {
                                A.selectedIndex = -1
                            }
                            return i
                        }
                    }
                }
            });
            G.each(["radio", "checkbox"], function() {
                G.valHooks[this] = {
                    set: function(A, e) {
                        if (Array.isArray(e)) {
                            return A.checked = G.inArray(G(A).val(), e) > -1
                        }
                    }
                };
                if (!K.checkOn) {
                    G.valHooks[this].get = function(A) {
                        return A.getAttribute("value") === null ? "on" : A.value
                    }
                }
            });
            K.focusin = "onfocusin" in P;
            var fe = /^(?:focusinfocus|focusoutblur)$/,
                he = function(A) {
                    A.stopPropagation()
                };
            G.extend(G.event, {
                trigger: function(A, e, t, R) {
                    var n, i, r, N, a, o, I, s, H = [t || B],
                        D = U.call(A, "type") ? A.type : A,
                        L = U.call(A, "namespace") ? A.namespace.split(".") : [];
                    i = s = r = t = t || B;
                    if (t.nodeType === 3 || t.nodeType === 8) {
                        return
                    }
                    if (fe.test(D + G.event.triggered)) {
                        return
                    }
                    if (D.indexOf(".") > -1) {
                        L = D.split(".");
                        D = L.shift();
                        L.sort()
                    }
                    a = D.indexOf(":") < 0 && "on" + D;
                    A = A[G.expando] ? A : new G.Event(D, typeof A === "object" && A);
                    A.isTrigger = R ? 2 : 3;
                    A.namespace = L.join(".");
                    A.rnamespace = A.namespace ? new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    A.result = undefined;
                    if (!A.target) {
                        A.target = t
                    }
                    e = e == null ? [A] : G.makeArray(e, [A]);
                    I = G.event.special[D] || {};
                    if (!R && I.trigger && I.trigger.apply(t, e) === false) {
                        return
                    }
                    if (!R && !I.noBubble && !T(t)) {
                        N = I.delegateType || D;
                        if (!fe.test(N + D)) {
                            i = i.parentNode
                        }
                        for (; i; i = i.parentNode) {
                            H.push(i);
                            r = i
                        }
                        if (r === (t.ownerDocument || B)) {
                            H.push(r.defaultView || r.parentWindow || P)
                        }
                    }
                    n = 0;
                    while ((i = H[n++]) && !A.isPropagationStopped()) {
                        s = i;
                        A.type = n > 1 ? N : I.bindType || D;
                        o = (z.get(i, "events") || {})[A.type] && z.get(i, "handle");
                        if (o) {
                            o.apply(i, e)
                        }
                        o = a && i[a];
                        if (o && o.apply && _(i)) {
                            A.result = o.apply(i, e);
                            if (A.result === false) {
                                A.preventDefault()
                            }
                        }
                    }
                    A.type = D;
                    if (!R && !A.isDefaultPrevented()) {
                        if ((!I._default || I._default.apply(H.pop(), e) === false) && _(t)) {
                            if (a && M(t[D]) && !T(t)) {
                                r = t[a];
                                if (r) {
                                    t[a] = null
                                }
                                G.event.triggered = D;
                                if (A.isPropagationStopped()) {
                                    s.addEventListener(D, he)
                                }
                                t[D]();
                                if (A.isPropagationStopped()) {
                                    s.removeEventListener(D, he)
                                }
                                G.event.triggered = undefined;
                                if (r) {
                                    t[a] = r
                                }
                            }
                        }
                    }
                    return A.result
                },
                simulate: function(A, e, t) {
                    var R = G.extend(new G.Event, t, {
                        type: A,
                        isSimulated: true
                    });
                    G.event.trigger(R, null, e)
                }
            });
            G.fn.extend({
                trigger: function(A, e) {
                    return this.each(function() {
                        G.event.trigger(A, e, this)
                    })
                },
                triggerHandler: function(A, e) {
                    var t = this[0];
                    if (t) {
                        return G.event.trigger(A, e, t, true)
                    }
                }
            });
            if (!K.focusin) {
                G.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(t, R) {
                    var n = function(A) {
                        G.event.simulate(R, A.target, G.event.fix(A))
                    };
                    G.event.special[R] = {
                        setup: function() {
                            var A = this.ownerDocument || this,
                                e = z.access(A, R);
                            if (!e) {
                                A.addEventListener(t, n, true)
                            }
                            z.access(A, R, (e || 0) + 1)
                        },
                        teardown: function() {
                            var A = this.ownerDocument || this,
                                e = z.access(A, R) - 1;
                            if (!e) {
                                A.removeEventListener(t, n, true);
                                z.remove(A, R)
                            } else {
                                z.access(A, R, e)
                            }
                        }
                    }
                })
            }
            var de = P.location;
            var Oe = Date.now();
            var Ee = /\?/;
            G.parseXML = function(A) {
                var e;
                if (!A || typeof A !== "string") {
                    return null
                }
                try {
                    e = (new P.DOMParser).parseFromString(A, "text/xml")
                } catch (A) {
                    e = undefined
                }
                if (!e || e.getElementsByTagName("parsererror").length) {
                    G.error("Invalid XML: " + A)
                }
                return e
            };
            var Je = /\[\]$/,
                Ce = /\r?\n/g,
                ge = /^(?:submit|button|image|reset|file)$/i,
                ye = /^(?:input|select|textarea|keygen)/i;

            function ve(t, A, R, n) {
                var e;
                if (Array.isArray(A)) {
                    G.each(A, function(A, e) {
                        if (R || Je.test(t)) {
                            n(t, e)
                        } else {
                            ve(t + "[" + (typeof e === "object" && e != null ? A : "") + "]", e, R, n)
                        }
                    })
                } else if (!R && c(A) === "object") {
                    for (e in A) {
                        ve(t + "[" + e + "]", A[e], R, n)
                    }
                } else {
                    n(t, A)
                }
            }
            G.param = function(A, e) {
                var t, R = [],
                    n = function(A, e) {
                        var t = M(e) ? e() : e;
                        R[R.length] = encodeURIComponent(A) + "=" + encodeURIComponent(t == null ? "" : t)
                    };
                if (A == null) {
                    return ""
                }
                if (Array.isArray(A) || A.jquery && !G.isPlainObject(A)) {
                    G.each(A, function() {
                        n(this.name, this.value)
                    })
                } else {
                    for (t in A) {
                        ve(t, A[t], e, n)
                    }
                }
                return R.join("&")
            };
            G.fn.extend({
                serialize: function() {
                    return G.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var A = G.prop(this, "elements");
                        return A ? G.makeArray(A) : this
                    }).filter(function() {
                        var A = this.type;
                        return this.name && !G(this).is(":disabled") && ye.test(this.nodeName) && !ge.test(A) && (this.checked || !UA.test(A))
                    }).map(function(A, e) {
                        var t = G(this).val();
                        if (t == null) {
                            return null
                        }
                        if (Array.isArray(t)) {
                            return G.map(t, function(A) {
                                return {
                                    name: e.name,
                                    value: A.replace(Ce, "\r\n")
                                }
                            })
                        }
                        return {
                            name: e.name,
                            value: t.replace(Ce, "\r\n")
                        }
                    }).get()
                }
            });
            var me = /%20/g,
                Ve = /#.*$/,
                We = /([?&])_=[^&]*/,
                Ye = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                xe = /^(?:GET|HEAD)$/,
                we = /^\/\//,
                ke = {},
                Fe = {},
                Ze = "*/".concat("*"),
                Xe = B.createElement("a");
            Xe.href = de.href;

            function Qe(i) {
                return function(A, e) {
                    if (typeof A !== "string") {
                        e = A;
                        A = "*"
                    }
                    var t, R = 0,
                        n = A.toLowerCase().match(m) || [];
                    if (M(e)) {
                        while (t = n[R++]) {
                            if (t[0] === "+") {
                                t = t.slice(1) || "*";
                                (i[t] = i[t] || []).unshift(e)
                            } else {
                                (i[t] = i[t] || []).push(e)
                            }
                        }
                    }
                }
            }

            function qe(e, n, i, r) {
                var N = {},
                    a = e === Fe;

                function o(A) {
                    var R;
                    N[A] = true;
                    G.each(e[A] || [], function(A, e) {
                        var t = e(n, i, r);
                        if (typeof t === "string" && !a && !N[t]) {
                            n.dataTypes.unshift(t);
                            o(t);
                            return false
                        } else if (a) {
                            return !(R = t)
                        }
                    });
                    return R
                }
                return o(n.dataTypes[0]) || !N["*"] && o("*")
            }

            function _e(A, e) {
                var t, R, n = G.ajaxSettings.flatOptions || {};
                for (t in e) {
                    if (e[t] !== undefined) {
                        (n[t] ? A : R || (R = {}))[t] = e[t]
                    }
                }
                if (R) {
                    G.extend(true, A, R)
                }
                return A
            }

            function je(A, e, t) {
                var R, n, i, r, N = A.contents,
                    a = A.dataTypes;
                while (a[0] === "*") {
                    a.shift();
                    if (R === undefined) {
                        R = A.mimeType || e.getResponseHeader("Content-Type")
                    }
                }
                if (R) {
                    for (n in N) {
                        if (N[n] && N[n].test(R)) {
                            a.unshift(n);
                            break
                        }
                    }
                }
                if (a[0] in t) {
                    i = a[0]
                } else {
                    for (n in t) {
                        if (!a[0] || A.converters[n + " " + a[0]]) {
                            i = n;
                            break
                        }
                        if (!r) {
                            r = n
                        }
                    }
                    i = i || r
                }
                if (i) {
                    if (i !== a[0]) {
                        a.unshift(i)
                    }
                    return t[i]
                }
            }

            function ze(A, e, t, R) {
                var n, i, r, N, a, o = {},
                    I = A.dataTypes.slice();
                if (I[1]) {
                    for (r in A.converters) {
                        o[r.toLowerCase()] = A.converters[r]
                    }
                }
                i = I.shift();
                while (i) {
                    if (A.responseFields[i]) {
                        t[A.responseFields[i]] = e
                    }
                    if (!a && R && A.dataFilter) {
                        e = A.dataFilter(e, A.dataType)
                    }
                    a = i;
                    i = I.shift();
                    if (i) {
                        if (i === "*") {
                            i = a
                        } else if (a !== "*" && a !== i) {
                            r = o[a + " " + i] || o["* " + i];
                            if (!r) {
                                for (n in o) {
                                    N = n.split(" ");
                                    if (N[1] === i) {
                                        r = o[a + " " + N[0]] || o["* " + N[0]];
                                        if (r) {
                                            if (r === true) {
                                                r = o[n]
                                            } else if (o[n] !== true) {
                                                i = N[0];
                                                I.unshift(N[1])
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            if (r !== true) {
                                if (r && A.throws) {
                                    e = r(e)
                                } else {
                                    try {
                                        e = r(e)
                                    } catch (A) {
                                        return {
                                            state: "parsererror",
                                            error: r ? A : "No conversion from " + a + " to " + i
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    state: "success",
                    data: e
                }
            }
            G.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: de.href,
                    type: "GET",
                    isLocal: be.test(de.protocol),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ze,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": true,
                        "text json": JSON.parse,
                        "text xml": G.parseXML
                    },
                    flatOptions: {
                        url: true,
                        context: true
                    }
                },
                ajaxSetup: function(A, e) {
                    return e ? _e(_e(A, G.ajaxSettings), e) : _e(G.ajaxSettings, A)
                },
                ajaxPrefilter: Qe(ke),
                ajaxTransport: Qe(Fe),
                ajax: function(A, e) {
                    if (typeof A === "object") {
                        e = A;
                        A = undefined
                    }
                    e = e || {};
                    var I, s, H, t, D, R, L, l, n, i, U = G.ajaxSetup({}, e),
                        K = U.context || U,
                        M = U.context && (K.nodeType || K.jquery) ? G(K) : G.event,
                        T = G.Deferred(),
                        u = G.Callbacks("once memory"),
                        c = U.statusCode || {},
                        r = {},
                        N = {},
                        a = "canceled",
                        S = {
                            readyState: 0,
                            getResponseHeader: function(A) {
                                var e;
                                if (L) {
                                    if (!t) {
                                        t = {};
                                        while (e = Ye.exec(H)) {
                                            t[e[1].toLowerCase() + " "] = (t[e[1].toLowerCase() + " "] || []).concat(e[2])
                                        }
                                    }
                                    e = t[A.toLowerCase() + " "]
                                }
                                return e == null ? null : e.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return L ? H : null
                            },
                            setRequestHeader: function(A, e) {
                                if (L == null) {
                                    A = N[A.toLowerCase()] = N[A.toLowerCase()] || A;
                                    r[A] = e
                                }
                                return this
                            },
                            overrideMimeType: function(A) {
                                if (L == null) {
                                    U.mimeType = A
                                }
                                return this
                            },
                            statusCode: function(A) {
                                var e;
                                if (A) {
                                    if (L) {
                                        S.always(A[S.status])
                                    } else {
                                        for (e in A) {
                                            c[e] = [c[e], A[e]]
                                        }
                                    }
                                }
                                return this
                            },
                            abort: function(A) {
                                var e = A || a;
                                if (I) {
                                    I.abort(e)
                                }
                                o(0, e);
                                return this
                            }
                        };
                    T.promise(S);
                    U.url = ((A || U.url || de.href) + "").replace(we, de.protocol + "//");
                    U.type = e.method || e.type || U.method || U.type;
                    U.dataTypes = (U.dataType || "*").toLowerCase().match(m) || [""];
                    if (U.crossDomain == null) {
                        R = B.createElement("a");
                        try {
                            R.href = U.url;
                            R.href = R.href;
                            U.crossDomain = Xe.protocol + "//" + Xe.host !== R.protocol + "//" + R.host
                        } catch (A) {
                            U.crossDomain = true
                        }
                    }
                    if (U.data && U.processData && typeof U.data !== "string") {
                        U.data = G.param(U.data, U.traditional)
                    }
                    qe(ke, U, e, S);
                    if (L) {
                        return S
                    }
                    l = G.event && U.global;
                    if (l && G.active++ === 0) {
                        G.event.trigger("ajaxStart")
                    }
                    U.type = U.type.toUpperCase();
                    U.hasContent = !xe.test(U.type);
                    s = U.url.replace(Ve, "");
                    if (!U.hasContent) {
                        i = U.url.slice(s.length);
                        if (U.data && (U.processData || typeof U.data === "string")) {
                            s += (Ee.test(s) ? "&" : "?") + U.data;
                            delete U.data
                        }
                        if (U.cache === false) {
                            s = s.replace(We, "$1");
                            i = (Ee.test(s) ? "&" : "?") + "_=" + Oe++ + i
                        }
                        U.url = s + i
                    } else if (U.data && U.processData && (U.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                        U.data = U.data.replace(me, "+")
                    }
                    if (U.ifModified) {
                        if (G.lastModified[s]) {
                            S.setRequestHeader("If-Modified-Since", G.lastModified[s])
                        }
                        if (G.etag[s]) {
                            S.setRequestHeader("If-None-Match", G.etag[s])
                        }
                    }
                    if (U.data && U.hasContent && U.contentType !== false || e.contentType) {
                        S.setRequestHeader("Content-Type", U.contentType)
                    }
                    S.setRequestHeader("Accept", U.dataTypes[0] && U.accepts[U.dataTypes[0]] ? U.accepts[U.dataTypes[0]] + (U.dataTypes[0] !== "*" ? ", " + Ze + "; q=0.01" : "") : U.accepts["*"]);
                    for (n in U.headers) {
                        S.setRequestHeader(n, U.headers[n])
                    }
                    if (U.beforeSend && (U.beforeSend.call(K, S, U) === false || L)) {
                        return S.abort()
                    }
                    a = "abort";
                    u.add(U.complete);
                    S.done(U.success);
                    S.fail(U.error);
                    I = qe(Fe, U, e, S);
                    if (!I) {
                        o(-1, "No Transport")
                    } else {
                        S.readyState = 1;
                        if (l) {
                            M.trigger("ajaxSend", [S, U])
                        }
                        if (L) {
                            return S
                        }
                        if (U.async && U.timeout > 0) {
                            D = P.setTimeout(function() {
                                S.abort("timeout")
                            }, U.timeout)
                        }
                        try {
                            L = false;
                            I.send(r, o)
                        } catch (A) {
                            if (L) {
                                throw A
                            }
                            o(-1, A)
                        }
                    }

                    function o(A, e, t, R) {
                        var n, i, r, N, a, o = e;
                        if (L) {
                            return
                        }
                        L = true;
                        if (D) {
                            P.clearTimeout(D)
                        }
                        I = undefined;
                        H = R || "";
                        S.readyState = A > 0 ? 4 : 0;
                        n = A >= 200 && A < 300 || A === 304;
                        if (t) {
                            N = je(U, S, t)
                        }
                        N = ze(U, N, S, n);
                        if (n) {
                            if (U.ifModified) {
                                a = S.getResponseHeader("Last-Modified");
                                if (a) {
                                    G.lastModified[s] = a
                                }
                                a = S.getResponseHeader("etag");
                                if (a) {
                                    G.etag[s] = a
                                }
                            }
                            if (A === 204 || U.type === "HEAD") {
                                o = "nocontent"
                            } else if (A === 304) {
                                o = "notmodified"
                            } else {
                                o = N.state;
                                i = N.data;
                                r = N.error;
                                n = !r
                            }
                        } else {
                            r = o;
                            if (A || !o) {
                                o = "error";
                                if (A < 0) {
                                    A = 0
                                }
                            }
                        }
                        S.status = A;
                        S.statusText = (e || o) + "";
                        if (n) {
                            T.resolveWith(K, [i, o, S])
                        } else {
                            T.rejectWith(K, [S, o, r])
                        }
                        S.statusCode(c);
                        c = undefined;
                        if (l) {
                            M.trigger(n ? "ajaxSuccess" : "ajaxError", [S, U, n ? i : r])
                        }
                        u.fireWith(K, [S, o]);
                        if (l) {
                            M.trigger("ajaxComplete", [S, U]);
                            if (!--G.active) {
                                G.event.trigger("ajaxStop")
                            }
                        }
                    }
                    return S
                },
                getJSON: function(A, e, t) {
                    return G.get(A, e, t, "json")
                },
                getScript: function(A, e) {
                    return G.get(A, undefined, e, "script")
                }
            });
            G.each(["get", "post"], function(A, n) {
                G[n] = function(A, e, t, R) {
                    if (M(e)) {
                        R = R || t;
                        t = e;
                        e = undefined
                    }
                    return G.ajax(G.extend({
                        url: A,
                        type: n,
                        dataType: R,
                        data: e,
                        success: t
                    }, G.isPlainObject(A) && A))
                }
            });
            G._evalUrl = function(A, e) {
                return G.ajax({
                    url: A,
                    type: "GET",
                    dataType: "script",
                    cache: true,
                    async: false,
                    global: false,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(A) {
                        G.globalEval(A, e)
                    }
                })
            };
            G.fn.extend({
                wrapAll: function(A) {
                    var e;
                    if (this[0]) {
                        if (M(A)) {
                            A = A.call(this[0])
                        }
                        e = G(A, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) {
                            e.insertBefore(this[0])
                        }
                        e.map(function() {
                            var A = this;
                            while (A.firstElementChild) {
                                A = A.firstElementChild
                            }
                            return A
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    if (M(t)) {
                        return this.each(function(A) {
                            G(this).wrapInner(t.call(this, A))
                        })
                    }
                    return this.each(function() {
                        var A = G(this),
                            e = A.contents();
                        if (e.length) {
                            e.wrapAll(t)
                        } else {
                            A.append(t)
                        }
                    })
                },
                wrap: function(e) {
                    var t = M(e);
                    return this.each(function(A) {
                        G(this).wrapAll(t ? e.call(this, A) : e)
                    })
                },
                unwrap: function(A) {
                    this.parent(A).not("body").each(function() {
                        G(this).replaceWith(this.childNodes)
                    });
                    return this
                }
            });
            G.expr.pseudos.hidden = function(A) {
                return !G.expr.pseudos.visible(A)
            };
            G.expr.pseudos.visible = function(A) {
                return !!(A.offsetWidth || A.offsetHeight || A.getClientRects().length)
            };
            G.ajaxSettings.xhr = function() {
                try {
                    return new P.XMLHttpRequest
                } catch (A) {}
            };
            var $e = {
                    0: 200,
                    1223: 204
                },
                At = G.ajaxSettings.xhr();
            K.cors = !!At && "withCredentials" in At;
            K.ajax = At = !!At;
            G.ajaxTransport(function(n) {
                var i, r;
                if (K.cors || At && !n.crossDomain) {
                    return {
                        send: function(A, e) {
                            var t, R = n.xhr();
                            R.open(n.type, n.url, n.async, n.username, n.password);
                            if (n.xhrFields) {
                                for (t in n.xhrFields) {
                                    R[t] = n.xhrFields[t]
                                }
                            }
                            if (n.mimeType && R.overrideMimeType) {
                                R.overrideMimeType(n.mimeType)
                            }
                            if (!n.crossDomain && !A["X-Requested-With"]) {
                                A["X-Requested-With"] = "XMLHttpRequest"
                            }
                            for (t in A) {
                                R.setRequestHeader(t, A[t])
                            }
                            i = function(A) {
                                return function() {
                                    if (i) {
                                        i = r = R.onload = R.onerror = R.onabort = R.ontimeout = R.onreadystatechange = null;
                                        if (A === "abort") {
                                            R.abort()
                                        } else if (A === "error") {
                                            if (typeof R.status !== "number") {
                                                e(0, "error")
                                            } else {
                                                e(R.status, R.statusText)
                                            }
                                        } else {
                                            e($e[R.status] || R.status, R.statusText, (R.responseType || "text") !== "text" || typeof R.responseText !== "string" ? {
                                                binary: R.response
                                            } : {
                                                text: R.responseText
                                            }, R.getAllResponseHeaders())
                                        }
                                    }
                                }
                            };
                            R.onload = i();
                            r = R.onerror = R.ontimeout = i("error");
                            if (R.onabort !== undefined) {
                                R.onabort = r
                            } else {
                                R.onreadystatechange = function() {
                                    if (R.readyState === 4) {
                                        P.setTimeout(function() {
                                            if (i) {
                                                r()
                                            }
                                        })
                                    }
                                }
                            }
                            i = i("abort");
                            try {
                                R.send(n.hasContent && n.data || null)
                            } catch (A) {
                                if (i) {
                                    throw A
                                }
                            }
                        },
                        abort: function() {
                            if (i) {
                                i()
                            }
                        }
                    }
                }
            });
            G.ajaxPrefilter(function(A) {
                if (A.crossDomain) {
                    A.contents.script = false
                }
            });
            G.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(A) {
                        G.globalEval(A);
                        return A
                    }
                }
            });
            G.ajaxPrefilter("script", function(A) {
                if (A.cache === undefined) {
                    A.cache = false
                }
                if (A.crossDomain) {
                    A.type = "GET"
                }
            });
            G.ajaxTransport("script", function(t) {
                if (t.crossDomain || t.scriptAttrs) {
                    var R, n;
                    return {
                        send: function(A, e) {
                            R = G("<script>").attr(t.scriptAttrs || {}).prop({
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function(A) {
                                R.remove();
                                n = null;
                                if (A) {
                                    e(A.type === "error" ? 404 : 200, A.type)
                                }
                            });
                            B.head.appendChild(R[0])
                        },
                        abort: function() {
                            if (n) {
                                n()
                            }
                        }
                    }
                }
            });
            var et = [],
                tt = /(=)\?(?=&|$)|\?\?/;
            G.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var A = et.pop() || G.expando + "_" + Oe++;
                    this[A] = true;
                    return A
                }
            });
            G.ajaxPrefilter("json jsonp", function(A, e, t) {
                var R, n, i, r = A.jsonp !== false && (tt.test(A.url) ? "url" : typeof A.data === "string" && (A.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && tt.test(A.data) && "data");
                if (r || A.dataTypes[0] === "jsonp") {
                    R = A.jsonpCallback = M(A.jsonpCallback) ? A.jsonpCallback() : A.jsonpCallback;
                    if (r) {
                        A[r] = A[r].replace(tt, "$1" + R)
                    } else if (A.jsonp !== false) {
                        A.url += (Ee.test(A.url) ? "&" : "?") + A.jsonp + "=" + R
                    }
                    A.converters["script json"] = function() {
                        if (!i) {
                            G.error(R + " was not called")
                        }
                        return i[0]
                    };
                    A.dataTypes[0] = "json";
                    n = P[R];
                    P[R] = function() {
                        i = arguments
                    };
                    t.always(function() {
                        if (n === undefined) {
                            G(P).removeProp(R)
                        } else {
                            P[R] = n
                        }
                        if (A[R]) {
                            A.jsonpCallback = e.jsonpCallback;
                            et.push(R)
                        }
                        if (i && M(n)) {
                            n(i[0])
                        }
                        i = n = undefined
                    });
                    return "script"
                }
            });
            K.createHTMLDocument = function() {
                var A = B.implementation.createHTMLDocument("").body;
                A.innerHTML = "<form></form><form></form>";
                return A.childNodes.length === 2
            }();
            G.parseHTML = function(A, e, t) {
                if (typeof A !== "string") {
                    return []
                }
                if (typeof e === "boolean") {
                    t = e;
                    e = false
                }
                var R, n, i;
                if (!e) {
                    if (K.createHTMLDocument) {
                        e = B.implementation.createHTMLDocument("");
                        R = e.createElement("base");
                        R.href = B.location.href;
                        e.head.appendChild(R)
                    } else {
                        e = B
                    }
                }
                n = d.exec(A);
                i = !t && [];
                if (n) {
                    return [e.createElement(n[1])]
                }
                n = PA([A], e, i);
                if (i && i.length) {
                    G(i).remove()
                }
                return G.merge([], n.childNodes)
            };
            G.fn.load = function(A, e, t) {
                var R, n, i, r = this,
                    N = A.indexOf(" ");
                if (N > -1) {
                    R = Pe(A.slice(N));
                    A = A.slice(0, N)
                }
                if (M(e)) {
                    t = e;
                    e = undefined
                } else if (e && typeof e === "object") {
                    n = "POST"
                }
                if (r.length > 0) {
                    G.ajax({
                        url: A,
                        type: n || "GET",
                        dataType: "html",
                        data: e
                    }).done(function(A) {
                        i = arguments;
                        r.html(R ? G("<div>").append(G.parseHTML(A)).find(R) : A)
                    }).always(t && function(A, e) {
                        r.each(function() {
                            t.apply(this, i || [A.responseText, e, A])
                        })
                    })
                }
                return this
            };
            G.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(A, e) {
                G.fn[e] = function(A) {
                    return this.on(e, A)
                }
            });
            G.expr.pseudos.animated = function(e) {
                return G.grep(G.timers, function(A) {
                    return e === A.elem
                }).length
            };
            G.offset = {
                setOffset: function(A, e, t) {
                    var R, n, i, r, N, a, o, I = G.css(A, "position"),
                        s = G(A),
                        H = {};
                    if (I === "static") {
                        A.style.position = "relative"
                    }
                    N = s.offset();
                    i = G.css(A, "top");
                    a = G.css(A, "left");
                    o = (I === "absolute" || I === "fixed") && (i + a).indexOf("auto") > -1;
                    if (o) {
                        R = s.position();
                        r = R.top;
                        n = R.left
                    } else {
                        r = parseFloat(i) || 0;
                        n = parseFloat(a) || 0
                    }
                    if (M(e)) {
                        e = e.call(A, t, G.extend({}, N))
                    }
                    if (e.top != null) {
                        H.top = e.top - N.top + r
                    }
                    if (e.left != null) {
                        H.left = e.left - N.left + n
                    }
                    if ("using" in e) {
                        e.using.call(A, H)
                    } else {
                        s.css(H)
                    }
                }
            };
            G.fn.extend({
                offset: function(e) {
                    if (arguments.length) {
                        return e === undefined ? this : this.each(function(A) {
                            G.offset.setOffset(this, e, A)
                        })
                    }
                    var A, t, R = this[0];
                    if (!R) {
                        return
                    }
                    if (!R.getClientRects().length) {
                        return {
                            top: 0,
                            left: 0
                        }
                    }
                    A = R.getBoundingClientRect();
                    t = R.ownerDocument.defaultView;
                    return {
                        top: A.top + t.pageYOffset,
                        left: A.left + t.pageXOffset
                    }
                },
                position: function() {
                    if (!this[0]) {
                        return
                    }
                    var A, e, t, R = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    if (G.css(R, "position") === "fixed") {
                        e = R.getBoundingClientRect()
                    } else {
                        e = this.offset();
                        t = R.ownerDocument;
                        A = R.offsetParent || t.documentElement;
                        while (A && (A === t.body || A === t.documentElement) && G.css(A, "position") === "static") {
                            A = A.parentNode
                        }
                        if (A && A !== R && A.nodeType === 1) {
                            n = G(A).offset();
                            n.top += G.css(A, "borderTopWidth", true);
                            n.left += G.css(A, "borderLeftWidth", true)
                        }
                    }
                    return {
                        top: e.top - n.top - G.css(R, "marginTop", true),
                        left: e.left - n.left - G.css(R, "marginLeft", true)
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var A = this.offsetParent;
                        while (A && G.css(A, "position") === "static") {
                            A = A.offsetParent
                        }
                        return A || NA
                    })
                }
            });
            G.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var i = "pageYOffset" === n;
                G.fn[e] = function(A) {
                    return F(this, function(A, e, t) {
                        var R;
                        if (T(A)) {
                            R = A
                        } else if (A.nodeType === 9) {
                            R = A.defaultView
                        }
                        if (t === undefined) {
                            return R ? R[n] : A[e]
                        }
                        if (R) {
                            R.scrollTo(!i ? t : R.pageXOffset, i ? t : R.pageYOffset)
                        } else {
                            A[e] = t
                        }
                    }, e, A, arguments.length)
                }
            });
            G.each(["top", "left"], function(A, t) {
                G.cssHooks[t] = QA(K.pixelPosition, function(A, e) {
                    if (e) {
                        e = XA(A, t);
                        return kA.test(e) ? G(A).position()[t] + "px" : e
                    }
                })
            });
            G.each({
                Height: "height",
                Width: "width"
            }, function(r, N) {
                G.each({
                    padding: "inner" + r,
                    content: N,
                    "": "outer" + r
                }, function(R, i) {
                    G.fn[i] = function(A, e) {
                        var t = arguments.length && (R || typeof A !== "boolean"),
                            n = R || (A === true || e === true ? "margin" : "border");
                        return F(this, function(A, e, t) {
                            var R;
                            if (T(A)) {
                                return i.indexOf("outer") === 0 ? A["inner" + r] : A.document.documentElement["client" + r]
                            }
                            if (A.nodeType === 9) {
                                R = A.documentElement;
                                return Math.max(A.body["scroll" + r], R["scroll" + r], A.body["offset" + r], R["offset" + r], R["client" + r])
                            }
                            return t === undefined ? G.css(A, e, n) : G.style(A, e, t, n)
                        }, N, t ? A : undefined, t)
                    }
                })
            });
            G.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(A, t) {
                G.fn[t] = function(A, e) {
                    return arguments.length > 0 ? this.on(t, null, A, e) : this.trigger(t)
                }
            });
            G.fn.extend({
                hover: function(A, e) {
                    return this.mouseenter(A).mouseleave(e || A)
                }
            });
            G.fn.extend({
                bind: function(A, e, t) {
                    return this.on(A, null, e, t)
                },
                unbind: function(A, e) {
                    return this.off(A, null, e)
                },
                delegate: function(A, e, t, R) {
                    return this.on(e, A, t, R)
                },
                undelegate: function(A, e, t) {
                    return arguments.length === 1 ? this.off(A, "**") : this.off(e, A || "**", t)
                }
            });
            G.proxy = function(A, e) {
                var t, R, n;
                if (typeof e === "string") {
                    t = A[e];
                    e = A;
                    A = t
                }
                if (!M(A)) {
                    return undefined
                }
                R = N.call(arguments, 2);
                n = function() {
                    return A.apply(e || this, R.concat(N.call(arguments)))
                };
                n.guid = A.guid = A.guid || G.guid++;
                return n
            };
            G.holdReady = function(A) {
                if (A) {
                    G.readyWait++
                } else {
                    G.ready(true)
                }
            };
            G.isArray = Array.isArray;
            G.parseJSON = JSON.parse;
            G.nodeName = h;
            G.isFunction = M;
            G.isWindow = T;
            G.camelCase = q;
            G.type = c;
            G.now = Date.now;
            G.isNumeric = function(A) {
                var e = G.type(A);
                return (e === "number" || e === "string") && !isNaN(A - parseFloat(A))
            };
            if (true) {
                !(Nt = [], at = function() {
                    return G
                }.apply(rt, Nt), at !== undefined && (it.exports = at))
            }
            var Rt = P.jQuery,
                nt = P.$;
            G.noConflict = function(A) {
                if (P.$ === G) {
                    P.$ = nt
                }
                if (A && P.jQuery === G) {
                    P.jQuery = Rt
                }
                return G
            };
            if (!A) {
                P.jQuery = P.$ = G
            }
            return G
        })
    },
    1: function(R, n, i) {
        (function(A, e, t) {
            if (true) {
                R.exports = n = e(i(3), i(12), i(13), i(8), i(16))
            } else {}
        })(this, function(i) {
            (function() {
                var A = i;
                var e = A.lib;
                var t = e.BlockCipher;
                var R = A.algo;
                var I = [];
                var o = [];
                var s = [];
                var H = [];
                var D = [];
                var L = [];
                var l = [];
                var U = [];
                var K = [];
                var M = [];
                (function() {
                    var A = [];
                    for (var e = 0; e < 256; e++) {
                        if (e < 128) {
                            A[e] = e << 1
                        } else {
                            A[e] = e << 1 ^ 283
                        }
                    }
                    var t = 0;
                    var R = 0;
                    for (var e = 0; e < 256; e++) {
                        var n = R ^ R << 1 ^ R << 2 ^ R << 3 ^ R << 4;
                        n = n >>> 8 ^ n & 255 ^ 99;
                        I[t] = n;
                        o[n] = t;
                        var i = A[t];
                        var r = A[i];
                        var N = A[r];
                        var a = A[n] * 257 ^ n * 16843008;
                        s[t] = a << 24 | a >>> 8;
                        H[t] = a << 16 | a >>> 16;
                        D[t] = a << 8 | a >>> 24;
                        L[t] = a;
                        var a = N * 16843009 ^ r * 65537 ^ i * 257 ^ t * 16843008;
                        l[n] = a << 24 | a >>> 8;
                        U[n] = a << 16 | a >>> 16;
                        K[n] = a << 8 | a >>> 24;
                        M[n] = a;
                        if (!t) {
                            t = R = 1
                        } else {
                            t = i ^ A[A[A[N ^ i]]];
                            R ^= A[A[R]]
                        }
                    }
                })();
                var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                var n = R.AES = t.extend({
                    _doReset: function() {
                        if (this._nRounds && this._keyPriorReset === this._key) {
                            return
                        }
                        var A = this._keyPriorReset = this._key;
                        var e = A.words;
                        var t = A.sigBytes / 4;
                        var R = this._nRounds = t + 6;
                        var n = (R + 1) * 4;
                        var i = this._keySchedule = [];
                        for (var r = 0; r < n; r++) {
                            if (r < t) {
                                i[r] = e[r]
                            } else {
                                var N = i[r - 1];
                                if (!(r % t)) {
                                    N = N << 8 | N >>> 24;
                                    N = I[N >>> 24] << 24 | I[N >>> 16 & 255] << 16 | I[N >>> 8 & 255] << 8 | I[N & 255];
                                    N ^= T[r / t | 0] << 24
                                } else if (t > 6 && r % t == 4) {
                                    N = I[N >>> 24] << 24 | I[N >>> 16 & 255] << 16 | I[N >>> 8 & 255] << 8 | I[N & 255]
                                }
                                i[r] = i[r - t] ^ N
                            }
                        }
                        var a = this._invKeySchedule = [];
                        for (var o = 0; o < n; o++) {
                            var r = n - o;
                            if (o % 4) {
                                var N = i[r]
                            } else {
                                var N = i[r - 4]
                            }
                            if (o < 4 || r <= 4) {
                                a[o] = N
                            } else {
                                a[o] = l[I[N >>> 24]] ^ U[I[N >>> 16 & 255]] ^ K[I[N >>> 8 & 255]] ^ M[I[N & 255]]
                            }
                        }
                    },
                    encryptBlock: function(A, e) {
                        this._doCryptBlock(A, e, this._keySchedule, s, H, D, L, I)
                    },
                    decryptBlock: function(A, e) {
                        var t = A[e + 1];
                        A[e + 1] = A[e + 3];
                        A[e + 3] = t;
                        this._doCryptBlock(A, e, this._invKeySchedule, l, U, K, M, o);
                        var t = A[e + 1];
                        A[e + 1] = A[e + 3];
                        A[e + 3] = t
                    },
                    _doCryptBlock: function(A, e, t, R, n, i, r, N) {
                        var a = this._nRounds;
                        var o = A[e] ^ t[0];
                        var I = A[e + 1] ^ t[1];
                        var s = A[e + 2] ^ t[2];
                        var H = A[e + 3] ^ t[3];
                        var D = 4;
                        for (var L = 1; L < a; L++) {
                            var l = R[o >>> 24] ^ n[I >>> 16 & 255] ^ i[s >>> 8 & 255] ^ r[H & 255] ^ t[D++];
                            var U = R[I >>> 24] ^ n[s >>> 16 & 255] ^ i[H >>> 8 & 255] ^ r[o & 255] ^ t[D++];
                            var K = R[s >>> 24] ^ n[H >>> 16 & 255] ^ i[o >>> 8 & 255] ^ r[I & 255] ^ t[D++];
                            var M = R[H >>> 24] ^ n[o >>> 16 & 255] ^ i[I >>> 8 & 255] ^ r[s & 255] ^ t[D++];
                            o = l;
                            I = U;
                            s = K;
                            H = M
                        }
                        var l = (N[o >>> 24] << 24 | N[I >>> 16 & 255] << 16 | N[s >>> 8 & 255] << 8 | N[H & 255]) ^ t[D++];
                        var U = (N[I >>> 24] << 24 | N[s >>> 16 & 255] << 16 | N[H >>> 8 & 255] << 8 | N[o & 255]) ^ t[D++];
                        var K = (N[s >>> 24] << 24 | N[H >>> 16 & 255] << 16 | N[o >>> 8 & 255] << 8 | N[I & 255]) ^ t[D++];
                        var M = (N[H >>> 24] << 24 | N[o >>> 16 & 255] << 16 | N[I >>> 8 & 255] << 8 | N[s & 255]) ^ t[D++];
                        A[e] = l;
                        A[e + 1] = U;
                        A[e + 2] = K;
                        A[e + 3] = M
                    },
                    keySize: 256 / 32
                });
                A.AES = t._createHelper(n)
            })();
            return i.AES
        })
    },
    12: function(t, R, n) {
        (function(A, e) {
            if (true) {
                t.exports = R = e(n(3))
            } else {}
        })(this, function(n) {
            (function() {
                var A = n;
                var e = A.lib;
                var a = e.WordArray;
                var t = A.enc;
                var R = t.Base64 = {
                    stringify: function(A) {
                        var e = A.words;
                        var t = A.sigBytes;
                        var R = this._map;
                        A.clamp();
                        var n = [];
                        for (var i = 0; i < t; i += 3) {
                            var r = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            var N = e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                            var a = e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                            var o = r << 16 | N << 8 | a;
                            for (var I = 0; I < 4 && i + I * .75 < t; I++) {
                                n.push(R.charAt(o >>> 6 * (3 - I) & 63))
                            }
                        }
                        var s = R.charAt(64);
                        if (s) {
                            while (n.length % 4) {
                                n.push(s)
                            }
                        }
                        return n.join("")
                    },
                    parse: function(A) {
                        var e = A.length;
                        var t = this._map;
                        var R = this._reverseMap;
                        if (!R) {
                            R = this._reverseMap = [];
                            for (var n = 0; n < t.length; n++) {
                                R[t.charCodeAt(n)] = n
                            }
                        }
                        var i = t.charAt(64);
                        if (i) {
                            var r = A.indexOf(i);
                            if (r !== -1) {
                                e = r
                            }
                        }
                        return N(A, e, R)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                };

                function N(A, e, t) {
                    var R = [];
                    var n = 0;
                    for (var i = 0; i < e; i++) {
                        if (i % 4) {
                            var r = t[A.charCodeAt(i - 1)] << i % 4 * 2;
                            var N = t[A.charCodeAt(i)] >>> 6 - i % 4 * 2;
                            R[n >>> 2] |= (r | N) << 24 - n % 4 * 8;
                            n++
                        }
                    }
                    return a.create(R, n)
                }
            })();
            return n.enc.Base64
        })
    },
    13: function(t, R, n) {
        (function(A, e) {
            if (true) {
                t.exports = R = e(n(3))
            } else {}
        })(this, function(r) {
            (function(I) {
                var A = r;
                var e = A.lib;
                var t = e.WordArray;
                var R = e.Hasher;
                var n = A.algo;
                var p = [];
                (function() {
                    for (var A = 0; A < 64; A++) {
                        p[A] = I.abs(I.sin(A + 1)) * 4294967296 | 0
                    }
                })();
                var i = n.MD5 = R.extend({
                    _doReset: function() {
                        this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(A, e) {
                        for (var t = 0; t < 16; t++) {
                            var R = e + t;
                            var n = A[R];
                            A[R] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360
                        }
                        var i = this._hash.words;
                        var r = A[e + 0];
                        var N = A[e + 1];
                        var a = A[e + 2];
                        var o = A[e + 3];
                        var I = A[e + 4];
                        var s = A[e + 5];
                        var H = A[e + 6];
                        var D = A[e + 7];
                        var L = A[e + 8];
                        var l = A[e + 9];
                        var U = A[e + 10];
                        var K = A[e + 11];
                        var M = A[e + 12];
                        var T = A[e + 13];
                        var u = A[e + 14];
                        var c = A[e + 15];
                        var S = i[0];
                        var P = i[1];
                        var B = i[2];
                        var G = i[3];
                        S = f(S, P, B, G, r, 7, p[0]);
                        G = f(G, S, P, B, N, 12, p[1]);
                        B = f(B, G, S, P, a, 17, p[2]);
                        P = f(P, B, G, S, o, 22, p[3]);
                        S = f(S, P, B, G, I, 7, p[4]);
                        G = f(G, S, P, B, s, 12, p[5]);
                        B = f(B, G, S, P, H, 17, p[6]);
                        P = f(P, B, G, S, D, 22, p[7]);
                        S = f(S, P, B, G, L, 7, p[8]);
                        G = f(G, S, P, B, l, 12, p[9]);
                        B = f(B, G, S, P, U, 17, p[10]);
                        P = f(P, B, G, S, K, 22, p[11]);
                        S = f(S, P, B, G, M, 7, p[12]);
                        G = f(G, S, P, B, T, 12, p[13]);
                        B = f(B, G, S, P, u, 17, p[14]);
                        P = f(P, B, G, S, c, 22, p[15]);
                        S = h(S, P, B, G, N, 5, p[16]);
                        G = h(G, S, P, B, H, 9, p[17]);
                        B = h(B, G, S, P, K, 14, p[18]);
                        P = h(P, B, G, S, r, 20, p[19]);
                        S = h(S, P, B, G, s, 5, p[20]);
                        G = h(G, S, P, B, U, 9, p[21]);
                        B = h(B, G, S, P, c, 14, p[22]);
                        P = h(P, B, G, S, I, 20, p[23]);
                        S = h(S, P, B, G, l, 5, p[24]);
                        G = h(G, S, P, B, u, 9, p[25]);
                        B = h(B, G, S, P, o, 14, p[26]);
                        P = h(P, B, G, S, L, 20, p[27]);
                        S = h(S, P, B, G, T, 5, p[28]);
                        G = h(G, S, P, B, a, 9, p[29]);
                        B = h(B, G, S, P, D, 14, p[30]);
                        P = h(P, B, G, S, M, 20, p[31]);
                        S = d(S, P, B, G, s, 4, p[32]);
                        G = d(G, S, P, B, L, 11, p[33]);
                        B = d(B, G, S, P, K, 16, p[34]);
                        P = d(P, B, G, S, u, 23, p[35]);
                        S = d(S, P, B, G, N, 4, p[36]);
                        G = d(G, S, P, B, I, 11, p[37]);
                        B = d(B, G, S, P, D, 16, p[38]);
                        P = d(P, B, G, S, U, 23, p[39]);
                        S = d(S, P, B, G, T, 4, p[40]);
                        G = d(G, S, P, B, r, 11, p[41]);
                        B = d(B, G, S, P, o, 16, p[42]);
                        P = d(P, B, G, S, H, 23, p[43]);
                        S = d(S, P, B, G, l, 4, p[44]);
                        G = d(G, S, P, B, M, 11, p[45]);
                        B = d(B, G, S, P, c, 16, p[46]);
                        P = d(P, B, G, S, a, 23, p[47]);
                        S = O(S, P, B, G, r, 6, p[48]);
                        G = O(G, S, P, B, D, 10, p[49]);
                        B = O(B, G, S, P, u, 15, p[50]);
                        P = O(P, B, G, S, s, 21, p[51]);
                        S = O(S, P, B, G, M, 6, p[52]);
                        G = O(G, S, P, B, o, 10, p[53]);
                        B = O(B, G, S, P, U, 15, p[54]);
                        P = O(P, B, G, S, N, 21, p[55]);
                        S = O(S, P, B, G, L, 6, p[56]);
                        G = O(G, S, P, B, c, 10, p[57]);
                        B = O(B, G, S, P, H, 15, p[58]);
                        P = O(P, B, G, S, T, 21, p[59]);
                        S = O(S, P, B, G, I, 6, p[60]);
                        G = O(G, S, P, B, K, 10, p[61]);
                        B = O(B, G, S, P, a, 15, p[62]);
                        P = O(P, B, G, S, l, 21, p[63]);
                        i[0] = i[0] + S | 0;
                        i[1] = i[1] + P | 0;
                        i[2] = i[2] + B | 0;
                        i[3] = i[3] + G | 0
                    },
                    _doFinalize: function() {
                        var A = this._data;
                        var e = A.words;
                        var t = this._nDataBytes * 8;
                        var R = A.sigBytes * 8;
                        e[R >>> 5] |= 128 << 24 - R % 32;
                        var n = I.floor(t / 4294967296);
                        var i = t;
                        e[(R + 64 >>> 9 << 4) + 15] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
                        e[(R + 64 >>> 9 << 4) + 14] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
                        A.sigBytes = (e.length + 1) * 4;
                        this._process();
                        var r = this._hash;
                        var N = r.words;
                        for (var a = 0; a < 4; a++) {
                            var o = N[a];
                            N[a] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360
                        }
                        return r
                    },
                    clone: function() {
                        var A = R.clone.call(this);
                        A._hash = this._hash.clone();
                        return A
                    }
                });

                function f(A, e, t, R, n, i, r) {
                    var N = A + (e & t | ~e & R) + n + r;
                    return (N << i | N >>> 32 - i) + e
                }

                function h(A, e, t, R, n, i, r) {
                    var N = A + (e & R | t & ~R) + n + r;
                    return (N << i | N >>> 32 - i) + e
                }

                function d(A, e, t, R, n, i, r) {
                    var N = A + (e ^ t ^ R) + n + r;
                    return (N << i | N >>> 32 - i) + e
                }

                function O(A, e, t, R, n, i, r) {
                    var N = A + (t ^ (e | ~R)) + n + r;
                    return (N << i | N >>> 32 - i) + e
                }
                A.MD5 = R._createHelper(i);
                A.HmacMD5 = R._createHmacHelper(i)
            })(Math);
            return r.MD5
        })
    },
    14: function(t, R, n) {
        (function(A, e) {
            if (true) {
                t.exports = R = e(n(3))
            } else {}
        })(this, function(r) {
            (function() {
                var A = r;
                var e = A.lib;
                var t = e.WordArray;
                var R = e.Hasher;
                var n = A.algo;
                var s = [];
                var i = n.SHA1 = R.extend({
                    _doReset: function() {
                        this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(A, e) {
                        var t = this._hash.words;
                        var R = t[0];
                        var n = t[1];
                        var i = t[2];
                        var r = t[3];
                        var N = t[4];
                        for (var a = 0; a < 80; a++) {
                            if (a < 16) {
                                s[a] = A[e + a] | 0
                            } else {
                                var o = s[a - 3] ^ s[a - 8] ^ s[a - 14] ^ s[a - 16];
                                s[a] = o << 1 | o >>> 31
                            }
                            var I = (R << 5 | R >>> 27) + N + s[a];
                            if (a < 20) {
                                I += (n & i | ~n & r) + 1518500249
                            } else if (a < 40) {
                                I += (n ^ i ^ r) + 1859775393
                            } else if (a < 60) {
                                I += (n & i | n & r | i & r) - 1894007588
                            } else {
                                I += (n ^ i ^ r) - 899497514
                            }
                            N = r;
                            r = i;
                            i = n << 30 | n >>> 2;
                            n = R;
                            R = I
                        }
                        t[0] = t[0] + R | 0;
                        t[1] = t[1] + n | 0;
                        t[2] = t[2] + i | 0;
                        t[3] = t[3] + r | 0;
                        t[4] = t[4] + N | 0
                    },
                    _doFinalize: function() {
                        var A = this._data;
                        var e = A.words;
                        var t = this._nDataBytes * 8;
                        var R = A.sigBytes * 8;
                        e[R >>> 5] |= 128 << 24 - R % 32;
                        e[(R + 64 >>> 9 << 4) + 14] = Math.floor(t / 4294967296);
                        e[(R + 64 >>> 9 << 4) + 15] = t;
                        A.sigBytes = e.length * 4;
                        this._process();
                        return this._hash
                    },
                    clone: function() {
                        var A = R.clone.call(this);
                        A._hash = this._hash.clone();
                        return A
                    }
                });
                A.SHA1 = R._createHelper(i);
                A.HmacSHA1 = R._createHmacHelper(i)
            })();
            return r.SHA1
        })
    },
    15: function(t, R, n) {
        (function(A, e) {
            if (true) {
                t.exports = R = e(n(3))
            } else {}
        })(this, function(r) {
            (function() {
                var A = r;
                var e = A.lib;
                var t = e.Base;
                var R = A.enc;
                var o = R.Utf8;
                var n = A.algo;
                var i = n.HMAC = t.extend({
                    init: function(A, e) {
                        A = this._hasher = new A.init;
                        if (typeof e == "string") {
                            e = o.parse(e)
                        }
                        var t = A.blockSize;
                        var R = t * 4;
                        if (e.sigBytes > R) {
                            e = A.finalize(e)
                        }
                        e.clamp();
                        var n = this._oKey = e.clone();
                        var i = this._iKey = e.clone();
                        var r = n.words;
                        var N = i.words;
                        for (var a = 0; a < t; a++) {
                            r[a] ^= 1549556828;
                            N[a] ^= 909522486
                        }
                        n.sigBytes = i.sigBytes = R;
                        this.reset()
                    },
                    reset: function() {
                        var A = this._hasher;
                        A.reset();
                        A.update(this._iKey)
                    },
                    update: function(A) {
                        this._hasher.update(A);
                        return this
                    },
                    finalize: function(A) {
                        var e = this._hasher;
                        var t = e.finalize(A);
                        e.reset();
                        var R = e.finalize(this._oKey.clone().concat(t));
                        return R
                    }
                })
            })()
        })
    },
    16: function(R, n, i) {
        (function(A, e, t) {
            if (true) {
                R.exports = n = e(i(3), i(8))
            } else {}
        })(this, function(p) {
            p.lib.Cipher || function(r) {
                var A = p;
                var e = A.lib;
                var t = e.Base;
                var a = e.WordArray;
                var R = e.BufferedBlockAlgorithm;
                var n = A.enc;
                var i = n.Utf8;
                var N = n.Base64;
                var o = A.algo;
                var I = o.EvpKDF;
                var s = e.Cipher = R.extend({
                    cfg: t.extend(),
                    createEncryptor: function(A, e) {
                        return this.create(this._ENC_XFORM_MODE, A, e)
                    },
                    createDecryptor: function(A, e) {
                        return this.create(this._DEC_XFORM_MODE, A, e)
                    },
                    init: function(A, e, t) {
                        this.cfg = this.cfg.extend(t);
                        this._xformMode = A;
                        this._key = e;
                        this.reset()
                    },
                    reset: function() {
                        R.reset.call(this);
                        this._doReset()
                    },
                    process: function(A) {
                        this._append(A);
                        return this._process()
                    },
                    finalize: function(A) {
                        if (A) {
                            this._append(A)
                        }
                        var e = this._doFinalize();
                        return e
                    },
                    keySize: 128 / 32,
                    ivSize: 128 / 32,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function n(A) {
                            if (typeof A == "string") {
                                return G
                            } else {
                                return S
                            }
                        }
                        return function(R) {
                            return {
                                encrypt: function(A, e, t) {
                                    return n(e).encrypt(R, A, e, t)
                                },
                                decrypt: function(A, e, t) {
                                    return n(e).decrypt(R, A, e, t)
                                }
                            }
                        }
                    }()
                });
                var H = e.StreamCipher = s.extend({
                    _doFinalize: function() {
                        var A = this._process(!!"flush");
                        return A
                    },
                    blockSize: 1
                });
                var D = A.mode = {};
                var L = e.BlockCipherMode = t.extend({
                    createEncryptor: function(A, e) {
                        return this.Encryptor.create(A, e)
                    },
                    createDecryptor: function(A, e) {
                        return this.Decryptor.create(A, e)
                    },
                    init: function(A, e) {
                        this._cipher = A;
                        this._iv = e
                    }
                });
                var l = D.CBC = function() {
                    var A = L.extend();
                    A.Encryptor = A.extend({
                        processBlock: function(A, e) {
                            var t = this._cipher;
                            var R = t.blockSize;
                            i.call(this, A, e, R);
                            t.encryptBlock(A, e);
                            this._prevBlock = A.slice(e, e + R)
                        }
                    });
                    A.Decryptor = A.extend({
                        processBlock: function(A, e) {
                            var t = this._cipher;
                            var R = t.blockSize;
                            var n = A.slice(e, e + R);
                            t.decryptBlock(A, e);
                            i.call(this, A, e, R);
                            this._prevBlock = n
                        }
                    });

                    function i(A, e, t) {
                        var R = this._iv;
                        if (R) {
                            var n = R;
                            this._iv = r
                        } else {
                            var n = this._prevBlock
                        }
                        for (var i = 0; i < t; i++) {
                            A[e + i] ^= n[i]
                        }
                    }
                    return A
                }();
                var U = A.pad = {};
                var K = U.Pkcs7 = {
                    pad: function(A, e) {
                        var t = e * 4;
                        var R = t - A.sigBytes % t;
                        var n = R << 24 | R << 16 | R << 8 | R;
                        var i = [];
                        for (var r = 0; r < R; r += 4) {
                            i.push(n)
                        }
                        var N = a.create(i, R);
                        A.concat(N)
                    },
                    unpad: function(A) {
                        var e = A.words[A.sigBytes - 1 >>> 2] & 255;
                        A.sigBytes -= e
                    }
                };
                var M = e.BlockCipher = s.extend({
                    cfg: s.cfg.extend({
                        mode: l,
                        padding: K
                    }),
                    reset: function() {
                        s.reset.call(this);
                        var A = this.cfg;
                        var e = A.iv;
                        var t = A.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            var R = t.createEncryptor
                        } else {
                            var R = t.createDecryptor;
                            this._minBufferSize = 1
                        }
                        if (this._mode && this._mode.__creator == R) {
                            this._mode.init(this, e && e.words)
                        } else {
                            this._mode = R.call(t, this, e && e.words);
                            this._mode.__creator = R
                        }
                    },
                    _doProcessBlock: function(A, e) {
                        this._mode.processBlock(A, e)
                    },
                    _doFinalize: function() {
                        var A = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            A.pad(this._data, this.blockSize);
                            var e = this._process(!!"flush")
                        } else {
                            var e = this._process(!!"flush");
                            A.unpad(e)
                        }
                        return e
                    },
                    blockSize: 128 / 32
                });
                var T = e.CipherParams = t.extend({
                    init: function(A) {
                        this.mixIn(A)
                    },
                    toString: function(A) {
                        return (A || this.formatter).stringify(this)
                    }
                });
                var u = A.format = {};
                var c = u.OpenSSL = {
                    stringify: function(A) {
                        var e = A.ciphertext;
                        var t = A.salt;
                        if (t) {
                            var R = a.create([1398893684, 1701076831]).concat(t).concat(e)
                        } else {
                            var R = e
                        }
                        return R.toString(N)
                    },
                    parse: function(A) {
                        var e = N.parse(A);
                        var t = e.words;
                        if (t[0] == 1398893684 && t[1] == 1701076831) {
                            var R = a.create(t.slice(2, 4));
                            t.splice(0, 4);
                            e.sigBytes -= 16
                        }
                        return T.create({
                            ciphertext: e,
                            salt: R
                        })
                    }
                };
                var S = e.SerializableCipher = t.extend({
                    cfg: t.extend({
                        format: c
                    }),
                    encrypt: function(A, e, t, R) {
                        R = this.cfg.extend(R);
                        var n = A.createEncryptor(t, R);
                        var i = n.finalize(e);
                        var r = n.cfg;
                        return T.create({
                            ciphertext: i,
                            key: t,
                            iv: r.iv,
                            algorithm: A,
                            mode: r.mode,
                            padding: r.padding,
                            blockSize: A.blockSize,
                            formatter: R.format
                        })
                    },
                    decrypt: function(A, e, t, R) {
                        R = this.cfg.extend(R);
                        e = this._parse(e, R.format);
                        var n = A.createDecryptor(t, R).finalize(e.ciphertext);
                        return n
                    },
                    _parse: function(A, e) {
                        if (typeof A == "string") {
                            return e.parse(A, this)
                        } else {
                            return A
                        }
                    }
                });
                var P = A.kdf = {};
                var B = P.OpenSSL = {
                    execute: function(A, e, t, R) {
                        if (!R) {
                            R = a.random(64 / 8)
                        }
                        var n = I.create({
                            keySize: e + t
                        }).compute(A, R);
                        var i = a.create(n.words.slice(e), t * 4);
                        n.sigBytes = e * 4;
                        return T.create({
                            key: n,
                            iv: i,
                            salt: R
                        })
                    }
                };
                var G = e.PasswordBasedCipher = S.extend({
                    cfg: S.cfg.extend({
                        kdf: B
                    }),
                    encrypt: function(A, e, t, R) {
                        R = this.cfg.extend(R);
                        var n = R.kdf.execute(t, A.keySize, A.ivSize);
                        R.iv = n.iv;
                        var i = S.encrypt.call(this, A, e, n.key, R);
                        i.mixIn(n);
                        return i
                    },
                    decrypt: function(A, e, t, R) {
                        R = this.cfg.extend(R);
                        e = this._parse(e, R.format);
                        var n = R.kdf.execute(t, A.keySize, A.ivSize, e.salt);
                        R.iv = n.iv;
                        var i = S.decrypt.call(this, A, e, n.key, R);
                        return i
                    }
                })
            }()
        })
    },
    2: function(t, R, n) {
        (function(A, e) {
            if (true) {
                t.exports = R = e(n(3))
            } else {}
        })(this, function(A) {
            return A.enc.Utf8
        })
    },
    3: function(t, R, A) {
        (function(A, e) {
            if (true) {
                t.exports = R = e()
            } else {}
        })(this, function() {
            var A = A || function(s, t) {
                var R = Object.create || function() {
                    function t() {}
                    return function(A) {
                        var e;
                        t.prototype = A;
                        e = new t;
                        t.prototype = null;
                        return e
                    }
                }();
                var A = {};
                var e = A.lib = {};
                var n = e.Base = function() {
                    return {
                        extend: function(A) {
                            var e = R(this);
                            if (A) {
                                e.mixIn(A)
                            }
                            if (!e.hasOwnProperty("init") || this.init === e.init) {
                                e.init = function() {
                                    e.$super.init.apply(this, arguments)
                                }
                            }
                            e.init.prototype = e;
                            e.$super = this;
                            return e
                        },
                        create: function() {
                            var A = this.extend();
                            A.init.apply(A, arguments);
                            return A
                        },
                        init: function() {},
                        mixIn: function(A) {
                            for (var e in A) {
                                if (A.hasOwnProperty(e)) {
                                    this[e] = A[e]
                                }
                            }
                            if (A.hasOwnProperty("toString")) {
                                this.toString = A.toString
                            }
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }();
                var H = e.WordArray = n.extend({
                    init: function(A, e) {
                        A = this.words = A || [];
                        if (e != t) {
                            this.sigBytes = e
                        } else {
                            this.sigBytes = A.length * 4
                        }
                    },
                    toString: function(A) {
                        return (A || r).stringify(this)
                    },
                    concat: function(A) {
                        var e = this.words;
                        var t = A.words;
                        var R = this.sigBytes;
                        var n = A.sigBytes;
                        this.clamp();
                        if (R % 4) {
                            for (var i = 0; i < n; i++) {
                                var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                e[R + i >>> 2] |= r << 24 - (R + i) % 4 * 8
                            }
                        } else {
                            for (var i = 0; i < n; i += 4) {
                                e[R + i >>> 2] = t[i >>> 2]
                            }
                        }
                        this.sigBytes += n;
                        return this
                    },
                    clamp: function() {
                        var A = this.words;
                        var e = this.sigBytes;
                        A[e >>> 2] &= 4294967295 << 32 - e % 4 * 8;
                        A.length = s.ceil(e / 4)
                    },
                    clone: function() {
                        var A = n.clone.call(this);
                        A.words = this.words.slice(0);
                        return A
                    },
                    random: function(A) {
                        var e = [];
                        var t = function(e) {
                            var e = e;
                            var t = 987654321;
                            var R = 4294967295;
                            return function() {
                                t = 36969 * (t & 65535) + (t >> 16) & R;
                                e = 18e3 * (e & 65535) + (e >> 16) & R;
                                var A = (t << 16) + e & R;
                                A /= 4294967296;
                                A += .5;
                                return A * (s.random() > .5 ? 1 : -1)
                            }
                        };
                        for (var R = 0, n; R < A; R += 4) {
                            var i = t((n || s.random()) * 4294967296);
                            n = i() * 987654071;
                            e.push(i() * 4294967296 | 0)
                        }
                        return new H.init(e, A)
                    }
                });
                var i = A.enc = {};
                var r = i.Hex = {
                    stringify: function(A) {
                        var e = A.words;
                        var t = A.sigBytes;
                        var R = [];
                        for (var n = 0; n < t; n++) {
                            var i = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                            R.push((i >>> 4).toString(16));
                            R.push((i & 15).toString(16))
                        }
                        return R.join("")
                    },
                    parse: function(A) {
                        var e = A.length;
                        var t = [];
                        for (var R = 0; R < e; R += 2) {
                            t[R >>> 3] |= parseInt(A.substr(R, 2), 16) << 24 - R % 8 * 4
                        }
                        return new H.init(t, e / 2)
                    }
                };
                var N = i.Latin1 = {
                    stringify: function(A) {
                        var e = A.words;
                        var t = A.sigBytes;
                        var R = [];
                        for (var n = 0; n < t; n++) {
                            var i = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                            R.push(String.fromCharCode(i))
                        }
                        return R.join("")
                    },
                    parse: function(A) {
                        var e = A.length;
                        var t = [];
                        for (var R = 0; R < e; R++) {
                            t[R >>> 2] |= (A.charCodeAt(R) & 255) << 24 - R % 4 * 8
                        }
                        return new H.init(t, e)
                    }
                };
                var a = i.Utf8 = {
                    stringify: function(A) {
                        try {
                            return decodeURIComponent(escape(N.stringify(A)))
                        } catch (A) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(A) {
                        return N.parse(unescape(encodeURIComponent(A)))
                    }
                };
                var o = e.BufferedBlockAlgorithm = n.extend({
                    reset: function() {
                        this._data = new H.init;
                        this._nDataBytes = 0
                    },
                    _append: function(A) {
                        if (typeof A == "string") {
                            A = a.parse(A)
                        }
                        this._data.concat(A);
                        this._nDataBytes += A.sigBytes
                    },
                    _process: function(A) {
                        var e = this._data;
                        var t = e.words;
                        var R = e.sigBytes;
                        var n = this.blockSize;
                        var i = n * 4;
                        var r = R / i;
                        if (A) {
                            r = s.ceil(r)
                        } else {
                            r = s.max((r | 0) - this._minBufferSize, 0)
                        }
                        var N = r * n;
                        var a = s.min(N * 4, R);
                        if (N) {
                            for (var o = 0; o < N; o += n) {
                                this._doProcessBlock(t, o)
                            }
                            var I = t.splice(0, N);
                            e.sigBytes -= a
                        }
                        return new H.init(I, a)
                    },
                    clone: function() {
                        var A = n.clone.call(this);
                        A._data = this._data.clone();
                        return A
                    },
                    _minBufferSize: 0
                });
                var I = e.Hasher = o.extend({
                    cfg: n.extend(),
                    init: function(A) {
                        this.cfg = this.cfg.extend(A);
                        this.reset()
                    },
                    reset: function() {
                        o.reset.call(this);
                        this._doReset()
                    },
                    update: function(A) {
                        this._append(A);
                        this._process();
                        return this
                    },
                    finalize: function(A) {
                        if (A) {
                            this._append(A)
                        }
                        var e = this._doFinalize();
                        return e
                    },
                    blockSize: 512 / 32,
                    _createHelper: function(t) {
                        return function(A, e) {
                            return new t.init(e).finalize(A)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(A, e) {
                            return new D.HMAC.init(t, e).finalize(A)
                        }
                    }
                });
                var D = A.algo = {};
                return A
            }(Math);
            return A
        })
    },
    67: function(A, e, t) {
        A.exports = t(71)
    },
    68: function(t, R, n) {
        var i, r;
        /*!
         * jQuery Typeahead
         * Copyright (C) 2018 RunningCoder.org
         * Licensed under the MIT license
         *
         * @author Tom Bertrand
         * @version 2.10.6 (2018-7-30)
         * @link http://www.runningcoder.org/jquerytypeahead/
         */
        ! function(e) {
            var A;
            true ? !(i = [n(0)], r = function(A) {
                return e(A)
            }.apply(R, i), r !== undefined && (t.exports = r)) : undefined
        }(function(E) {
            "use strict";
            var t, R = {
                    input: null,
                    minLength: 2,
                    maxLength: !(window.Typeahead = {
                        version: "2.10.6"
                    }),
                    maxItem: 8,
                    dynamic: !1,
                    delay: 300,
                    order: null,
                    offset: !1,
                    hint: !1,
                    accent: !1,
                    highlight: !0,
                    multiselect: null,
                    group: !1,
                    groupOrder: null,
                    maxItemPerGroup: null,
                    dropdownFilter: !1,
                    dynamicFilter: null,
                    backdrop: !1,
                    backdropOnFocus: !1,
                    cache: !1,
                    ttl: 36e5,
                    compression: !1,
                    searchOnFocus: !1,
                    blurOnTab: !0,
                    resultContainer: null,
                    generateOnLoad: null,
                    mustSelectItem: !1,
                    href: null,
                    display: ["display"],
                    template: null,
                    templateValue: null,
                    groupTemplate: null,
                    correlativeTemplate: !1,
                    emptyTemplate: !1,
                    cancelButton: !0,
                    loadingAnimation: !0,
                    filter: !0,
                    matcher: null,
                    source: null,
                    callback: {
                        onInit: null,
                        onReady: null,
                        onShowLayout: null,
                        onHideLayout: null,
                        onSearch: null,
                        onResult: null,
                        onLayoutBuiltBefore: null,
                        onLayoutBuiltAfter: null,
                        onNavigateBefore: null,
                        onNavigateAfter: null,
                        onEnter: null,
                        onLeave: null,
                        onClickBefore: null,
                        onClickAfter: null,
                        onDropdownFilter: null,
                        onSendRequest: null,
                        onReceiveRequest: null,
                        onPopulateSource: null,
                        onCacheSave: null,
                        onSubmit: null,
                        onCancel: null
                    },
                    selector: {
                        container: "typeahead__container",
                        result: "typeahead__result",
                        list: "typeahead__list",
                        group: "typeahead__group",
                        item: "typeahead__item",
                        empty: "typeahead__empty",
                        display: "typeahead__display",
                        query: "typeahead__query",
                        filter: "typeahead__filter",
                        filterButton: "typeahead__filter-button",
                        dropdown: "typeahead__dropdown",
                        dropdownItem: "typeahead__dropdown-item",
                        labelContainer: "typeahead__label-container",
                        label: "typeahead__label",
                        button: "typeahead__button",
                        backdrop: "typeahead__backdrop",
                        hint: "typeahead__hint",
                        cancelButton: "typeahead__cancel-button"
                    },
                    debug: !1
                },
                n = {
                    from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
                    to: "aaaaaeeeeeiiiiooooouuuunc"
                },
                i = ~window.navigator.appVersion.indexOf("MSIE 9."),
                r = ~window.navigator.appVersion.indexOf("MSIE 10"),
                N = !!~window.navigator.userAgent.indexOf("Trident") && ~window.navigator.userAgent.indexOf("rv:11"),
                a = function(A, e) {
                    this.rawQuery = A.val() || "", this.query = A.val() || "", this.selector = A[0].selector, this.deferred = null, this.tmpSource = {}, this.source = {}, this.dynamicGroups = [], this.hasDynamicGroups = !1, this.generatedGroupCount = 0, this.groupBy = "group", this.groups = [], this.searchGroups = [], this.generateGroups = [], this.requestGroups = [], this.result = [], this.tmpResult = {}, this.groupTemplate = "", this.resultHtml = null, this.resultCount = 0, this.resultCountPerGroup = {}, this.options = e, this.node = A, this.namespace = "." + this.helper.slugify.call(this, this.selector) + ".typeahead", this.isContentEditable = void 0 !== this.node.attr("contenteditable") && "false" !== this.node.attr("contenteditable"), this.container = null, this.resultContainer = null, this.item = null, this.items = null, this.comparedItems = null, this.xhr = {}, this.hintIndex = null, this.filters = {
                        dropdown: {},
                        dynamic: {}
                    }, this.dropdownFilter = {
                        static: [],
                        dynamic: []
                    }, this.dropdownFilterAll = null, this.isDropdownEvent = !1, this.requests = {}, this.backdrop = {}, this.hint = {}, this.label = {}, this.hasDragged = !1, this.focusOnly = !1, this.displayEmptyTemplate, this.__construct()
                };
            a.prototype = {
                _validateCacheMethod: function(A) {
                    var e;
                    if (!0 === A) A = "localStorage";
                    else if ("string" == typeof A && !~["localStorage", "sessionStorage"].indexOf(A)) return !1;
                    e = void 0 !== window[A];
                    try {
                        window[A].setItem("typeahead", "typeahead"), window[A].removeItem("typeahead")
                    } catch (A) {
                        e = !1
                    }
                    return e && A || !1
                },
                extendOptions: function() {
                    if (this.options.cache = this._validateCacheMethod(this.options.cache), this.options.compression && ("object" == typeof LZString && this.options.cache || (this.options.compression = !1)), this.options.maxLength && !isNaN(this.options.maxLength) || (this.options.maxLength = 1 / 0), void 0 !== this.options.maxItem && ~[0, !1].indexOf(this.options.maxItem) && (this.options.maxItem = 1 / 0), this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup) && (this.options.maxItemPerGroup = null), this.options.display && !Array.isArray(this.options.display) && (this.options.display = [this.options.display]), this.options.multiselect && (this.items = [], this.comparedItems = [], "string" == typeof this.options.multiselect.matchOn && (this.options.multiselect.matchOn = [this.options.multiselect.matchOn])), this.options.group && (Array.isArray(this.options.group) || ("string" == typeof this.options.group ? this.options.group = {
                            key: this.options.group
                        } : "boolean" == typeof this.options.group && (this.options.group = {
                            key: "group"
                        }), this.options.group.key = this.options.group.key || "group")), this.options.highlight && !~["any", !0].indexOf(this.options.highlight) && (this.options.highlight = !1), this.options.dropdownFilter && this.options.dropdownFilter instanceof Object) {
                        Array.isArray(this.options.dropdownFilter) || (this.options.dropdownFilter = [this.options.dropdownFilter]);
                        for (var A = 0, e = this.options.dropdownFilter.length; A < e; ++A) this.dropdownFilter[this.options.dropdownFilter[A].value ? "static" : "dynamic"].push(this.options.dropdownFilter[A])
                    }
                    this.options.dynamicFilter && !Array.isArray(this.options.dynamicFilter) && (this.options.dynamicFilter = [this.options.dynamicFilter]), this.options.accent && ("object" == typeof this.options.accent ? this.options.accent.from && this.options.accent.to && (this.options.accent.from.length, this.options.accent.to.length) : this.options.accent = n), this.options.groupTemplate && (this.groupTemplate = this.options.groupTemplate), this.options.resultContainer && ("string" == typeof this.options.resultContainer && (this.options.resultContainer = E(this.options.resultContainer)), this.options.resultContainer instanceof E && this.options.resultContainer[0] && (this.resultContainer = this.options.resultContainer)), this.options.group && this.options.group.key && (this.groupBy = this.options.group.key), this.options.callback && this.options.callback.onClick && (this.options.callback.onClickBefore = this.options.callback.onClick, delete this.options.callback.onClick), this.options.callback && this.options.callback.onNavigate && (this.options.callback.onNavigateBefore = this.options.callback.onNavigate, delete this.options.callback.onNavigate), this.options = E.extend(!0, {}, R, this.options)
                },
                unifySourceFormat: function() {
                    var A, e, t;
                    for (A in this.dynamicGroups = [], Array.isArray(this.options.source) && (this.options.source = {
                            group: {
                                data: this.options.source
                            }
                        }), "string" == typeof this.options.source && (this.options.source = {
                            group: {
                                ajax: {
                                    url: this.options.source
                                }
                            }
                        }), this.options.source.ajax && (this.options.source = {
                            group: {
                                ajax: this.options.source.ajax
                            }
                        }), (this.options.source.url || this.options.source.data) && (this.options.source = {
                            group: this.options.source
                        }), this.options.source)
                        if (this.options.source.hasOwnProperty(A)) {
                            if ("string" == typeof(e = this.options.source[A]) && (e = {
                                    ajax: {
                                        url: e
                                    }
                                }), t = e.url || e.ajax, Array.isArray(t) ? (e.ajax = "string" == typeof t[0] ? {
                                    url: t[0]
                                } : t[0], e.ajax.path = e.ajax.path || t[1] || null) : "object" == typeof e.url ? e.ajax = e.url : "string" == typeof e.url && (e.ajax = {
                                    url: e.url
                                }), delete e.url, !e.data && !e.ajax) return !1;
                            e.display && !Array.isArray(e.display) && (e.display = [e.display]), e.minLength = "number" == typeof e.minLength ? e.minLength : this.options.minLength, e.maxLength = "number" == typeof e.maxLength ? e.maxLength : this.options.maxLength, e.dynamic = "boolean" == typeof e.dynamic || this.options.dynamic, e.minLength > e.maxLength && (e.minLength = e.maxLength), this.options.source[A] = e, this.options.source[A].dynamic && this.dynamicGroups.push(A), e.cache = void 0 !== e.cache ? this._validateCacheMethod(e.cache) : this.options.cache, e.compression && ("object" == typeof LZString && e.cache || (e.compression = !1))
                        } return this.hasDynamicGroups = this.options.dynamic || !!this.dynamicGroups.length, !0
                },
                init: function() {
                    this.helper.executeCallback.call(this, this.options.callback.onInit, [this.node]), this.container = this.node.closest("." + this.options.selector.container)
                },
                delegateEvents: function() {
                    var t = this,
                        A = ["focus" + this.namespace, "input" + this.namespace, "propertychange" + this.namespace, "keydown" + this.namespace, "keyup" + this.namespace, "search" + this.namespace, "generate" + this.namespace];
                    E("html").on("touchmove", function() {
                        t.hasDragged = !0
                    }).on("touchstart", function() {
                        t.hasDragged = !1
                    }), this.node.closest("form").on("submit", function(A) {
                        if (!t.options.mustSelectItem || !t.helper.isEmpty(t.item)) return t.options.backdropOnFocus || t.hideLayout(), t.options.callback.onSubmit ? t.helper.executeCallback.call(t, t.options.callback.onSubmit, [t.node, this, t.item || t.items, A]) : void 0;
                        A.preventDefault()
                    }).on("reset", function() {
                        setTimeout(function() {
                            t.node.trigger("input" + t.namespace), t.hideLayout()
                        })
                    });
                    var R = !1;
                    if (this.node.attr("placeholder") && (r || N)) {
                        var e = !0;
                        this.node.on("focusin focusout", function() {
                            e = !(this.value || !this.placeholder)
                        }), this.node.on("input", function(A) {
                            e && (A.stopImmediatePropagation(), e = !1)
                        })
                    }
                    this.node.off(this.namespace).on(A.join(" "), function(A, e) {
                        switch (A.type) {
                            case "generate":
                                t.generateSource(Object.keys(t.options.source));
                                break;
                            case "focus":
                                if (t.focusOnly) {
                                    t.focusOnly = !1;
                                    break
                                }
                                t.options.backdropOnFocus && (t.buildBackdropLayout(), t.showLayout()), t.options.searchOnFocus && !t.item && (t.deferred = E.Deferred(), t.assignQuery(), t.generateSource());
                                break;
                            case "keydown":
                                8 === A.keyCode && t.options.multiselect && t.options.multiselect.cancelOnBackspace && "" === t.query && t.items.length ? t.cancelMultiselectItem(t.items.length - 1, null, A) : A.keyCode && ~[9, 13, 27, 38, 39, 40].indexOf(A.keyCode) && (R = !0, t.navigate(A));
                                break;
                            case "keyup":
                                i && t.node[0].value.replace(/^\s+/, "").toString().length < t.query.length && t.node.trigger("input" + t.namespace);
                                break;
                            case "propertychange":
                                if (R) {
                                    R = !1;
                                    break
                                }
                                case "input":
                                    t.deferred = E.Deferred(), t.assignQuery(), "" === t.rawQuery && "" === t.query && (A.originalEvent = e || {}, t.helper.executeCallback.call(t, t.options.callback.onCancel, [t.node, t.item, A]), t.item = null), t.options.cancelButton && t.toggleCancelButtonVisibility(), t.options.hint && t.hint.container && "" !== t.hint.container.val() && 0 !== t.hint.container.val().indexOf(t.rawQuery) && (t.hint.container.val(""), t.isContentEditable && t.hint.container.text("")), t.hasDynamicGroups ? t.helper.typeWatch(function() {
                                        t.generateSource()
                                    }, t.options.delay) : t.generateSource();
                                    break;
                                case "search":
                                    t.searchResult(), t.buildLayout(), t.result.length || t.searchGroups.length && t.displayEmptyTemplate ? t.showLayout() : t.hideLayout(), t.deferred && t.deferred.resolve()
                        }
                        return t.deferred && t.deferred.promise()
                    }), this.options.generateOnLoad && this.node.trigger("generate" + this.namespace)
                },
                assignQuery: function() {
                    this.isContentEditable ? this.rawQuery = this.node.text() : this.rawQuery = this.node.val().toString(), this.rawQuery = this.rawQuery.replace(/^\s+/, ""), this.rawQuery !== this.query && (this.query = this.rawQuery)
                },
                filterGenerateSource: function() {
                    if (this.searchGroups = [], this.generateGroups = [], !this.focusOnly || this.options.multiselect)
                        for (var A in this.options.source)
                            if (this.options.source.hasOwnProperty(A) && this.query.length >= this.options.source[A].minLength && this.query.length <= this.options.source[A].maxLength) {
                                if (this.filters.dropdown && "group" === this.filters.dropdown.key && this.filters.dropdown.value !== A) continue;
                                if (this.searchGroups.push(A), !this.options.source[A].dynamic && this.source[A]) continue;
                                this.generateGroups.push(A)
                            }
                },
                generateSource: function(A) {
                    if (this.filterGenerateSource(), Array.isArray(A) && A.length) this.generateGroups = A;
                    else if (!this.generateGroups.length) return void this.node.trigger("search" + this.namespace);
                    if (this.requestGroups = [], this.generatedGroupCount = 0, this.options.loadingAnimation && this.container.addClass("loading"), !this.helper.isEmpty(this.xhr)) {
                        for (var e in this.xhr) this.xhr.hasOwnProperty(e) && this.xhr[e].abort();
                        this.xhr = {}
                    }
                    for (var t, R, n, i, r, N, a, o = this, I = (e = 0, this.generateGroups.length); e < I; ++e) {
                        if (t = this.generateGroups[e], i = (n = this.options.source[t]).cache, r = n.compression, i && (N = window[i].getItem("TYPEAHEAD_" + this.selector + ":" + t))) {
                            r && (N = LZString.decompressFromUTF16(N)), a = !1;
                            try {
                                (N = JSON.parse(N + "")).data && N.ttl > (new Date).getTime() ? (this.populateSource(N.data, t), a = !0) : window[i].removeItem("TYPEAHEAD_" + this.selector + ":" + t)
                            } catch (A) {}
                            if (a) continue
                        }!n.data || n.ajax ? n.ajax && (this.requests[t] || (this.requests[t] = this.generateRequestObject(t)), this.requestGroups.push(t)) : "function" == typeof n.data ? (R = n.data.call(this), Array.isArray(R) ? o.populateSource(R, t) : "function" == typeof R.promise && function(e) {
                            E.when(R).then(function(A) {
                                A && Array.isArray(A) && o.populateSource(A, e)
                            })
                        }(t)) : this.populateSource(E.extend(!0, [], n.data), t)
                    }
                    return this.requestGroups.length && this.handleRequests(), !!this.generateGroups.length
                },
                generateRequestObject: function(R) {
                    var n = this,
                        i = this.options.source[R],
                        A = {
                            request: {
                                url: i.ajax.url || null,
                                dataType: "json",
                                beforeSend: function(A, e) {
                                    n.xhr[R] = A;
                                    var t = n.requests[R].callback.beforeSend || i.ajax.beforeSend;
                                    "function" == typeof t && t.apply(null, arguments)
                                }
                            },
                            callback: {
                                beforeSend: null,
                                done: null,
                                fail: null,
                                then: null,
                                always: null
                            },
                            extra: {
                                path: i.ajax.path || null,
                                group: R
                            },
                            validForGroup: [R]
                        };
                    if ("function" != typeof i.ajax && (i.ajax instanceof Object && (A = this.extendXhrObject(A, i.ajax)), 1 < Object.keys(this.options.source).length))
                        for (var e in this.requests) this.requests.hasOwnProperty(e) && (this.requests[e].isDuplicated || A.request.url && A.request.url === this.requests[e].request.url && (this.requests[e].validForGroup.push(R), A.isDuplicated = !0, delete A.validForGroup));
                    return A
                },
                extendXhrObject: function(A, e) {
                    return "object" == typeof e.callback && (A.callback = e.callback, delete e.callback), "function" == typeof e.beforeSend && (A.callback.beforeSend = e.beforeSend, delete e.beforeSend), A.request = E.extend(!0, A.request, e), "jsonp" !== A.request.dataType.toLowerCase() || A.request.jsonpCallback || (A.request.jsonpCallback = "callback_" + A.extra.group), A
                },
                handleRequests: function() {
                    var A, o = this,
                        I = this.requestGroups.length;
                    if (!1 !== this.helper.executeCallback.call(this, this.options.callback.onSendRequest, [this.node, this.query]))
                        for (var e = 0, t = this.requestGroups.length; e < t; ++e) A = this.requestGroups[e], this.requests[A].isDuplicated || function(A, r) {
                            if ("function" == typeof o.options.source[A].ajax) {
                                var e = o.options.source[A].ajax.call(o, o.query);
                                if ("object" != typeof(r = o.extendXhrObject(o.generateRequestObject(A), "object" == typeof e ? e : {})).request || !r.request.url) return o.populateSource([], A);
                                o.requests[A] = r
                            }
                            var N, t = !1,
                                a = {};
                            if (~r.request.url.indexOf("{{query}}") && (t || (r = E.extend(!0, {}, r), t = !0), r.request.url = r.request.url.replace("{{query}}", encodeURIComponent(o.query))), r.request.data)
                                for (var R in r.request.data)
                                    if (r.request.data.hasOwnProperty(R) && ~String(r.request.data[R]).indexOf("{{query}}")) {
                                        t || (r = E.extend(!0, {}, r), t = !0), r.request.data[R] = r.request.data[R].replace("{{query}}", o.query);
                                        break
                                    } E.ajax(r.request).done(function(A, e, t) {
                                for (var R, n = 0, i = r.validForGroup.length; n < i; n++) R = r.validForGroup[n], "function" == typeof(N = o.requests[R]).callback.done && (a[R] = N.callback.done.call(o, A, e, t))
                            }).fail(function(A, e, t) {
                                for (var R = 0, n = r.validForGroup.length; R < n; R++)(N = o.requests[r.validForGroup[R]]).callback.fail instanceof Function && N.callback.fail.call(o, A, e, t)
                            }).always(function(A, e, t) {
                                for (var R, n = 0, i = r.validForGroup.length; n < i; n++) {
                                    if (R = r.validForGroup[n], (N = o.requests[R]).callback.always instanceof Function && N.callback.always.call(o, A, e, t), "abort" === e) return;
                                    o.populateSource(null !== A && "function" == typeof A.promise && [] || a[R] || A, N.extra.group, N.extra.path || N.request.path), 0 === (I -= 1) && o.helper.executeCallback.call(o, o.options.callback.onReceiveRequest, [o.node, o.query])
                                }
                            }).then(function(A, e) {
                                for (var t = 0, R = r.validForGroup.length; t < R; t++)(N = o.requests[r.validForGroup[t]]).callback.then instanceof Function && N.callback.then.call(o, A, e)
                            })
                        }(A, this.requests[A])
                },
                populateSource: function(t, A, e) {
                    var R = this,
                        n = this.options.source[A],
                        i = n.ajax && n.data;
                    e && "string" == typeof e && (t = this.helper.namespace.call(this, e, t)), Array.isArray(t) || (t = []), i && ("function" == typeof i && (i = i()), Array.isArray(i) && (t = t.concat(i)));
                    for (var r, N = n.display ? "compiled" === n.display[0] ? n.display[1] : n.display[0] : "compiled" === this.options.display[0] ? this.options.display[1] : this.options.display[0], a = 0, o = t.length; a < o; a++) null !== t[a] && "boolean" != typeof t[a] && ("string" == typeof t[a] && ((r = {})[N] = t[a], t[a] = r), t[a].group = A);
                    if (!this.hasDynamicGroups && this.dropdownFilter.dynamic.length) {
                        var I, s, H = {};
                        for (a = 0, o = t.length; a < o; a++)
                            for (var D = 0, L = this.dropdownFilter.dynamic.length; D < L; D++) I = this.dropdownFilter.dynamic[D].key, (s = t[a][I]) && (this.dropdownFilter.dynamic[D].value || (this.dropdownFilter.dynamic[D].value = []), H[I] || (H[I] = []), ~H[I].indexOf(s.toLowerCase()) || (H[I].push(s.toLowerCase()), this.dropdownFilter.dynamic[D].value.push(s)))
                    }
                    if (this.options.correlativeTemplate) {
                        var l = n.template || this.options.template,
                            U = "";
                        if ("function" == typeof l && (l = l.call(this, "", {})), l) {
                            if (Array.isArray(this.options.correlativeTemplate))
                                for (a = 0, o = this.options.correlativeTemplate.length; a < o; a++) U += "{{" + this.options.correlativeTemplate[a] + "}} ";
                            else U = l.replace(/<.+?>/g, " ").replace(/\s{2,}/, " ").trim();
                            for (a = 0, o = t.length; a < o; a++) t[a].compiled = E("<textarea />").html(U.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function(A, e) {
                                return R.helper.namespace.call(R, e, t[a], "get", "")
                            }).trim()).text();
                            n.display ? ~n.display.indexOf("compiled") || n.display.unshift("compiled") : ~this.options.display.indexOf("compiled") || this.options.display.unshift("compiled")
                        } else;
                    }
                    this.options.callback.onPopulateSource && (t = this.helper.executeCallback.call(this, this.options.callback.onPopulateSource, [this.node, t, A, e])), this.tmpSource[A] = Array.isArray(t) && t || [];
                    var K = this.options.source[A].cache,
                        M = this.options.source[A].compression,
                        T = this.options.source[A].ttl || this.options.ttl;
                    if (K && !window[K].getItem("TYPEAHEAD_" + this.selector + ":" + A)) {
                        this.options.callback.onCacheSave && (t = this.helper.executeCallback.call(this, this.options.callback.onCacheSave, [this.node, t, A, e]));
                        var u = JSON.stringify({
                            data: t,
                            ttl: (new Date).getTime() + T
                        });
                        M && (u = LZString.compressToUTF16(u)), window[K].setItem("TYPEAHEAD_" + this.selector + ":" + A, u)
                    }
                    this.incrementGeneratedGroup()
                },
                incrementGeneratedGroup: function() {
                    if (this.generatedGroupCount++, this.generatedGroupCount === this.generateGroups.length) {
                        this.xhr = {};
                        for (var A = 0, e = this.generateGroups.length; A < e; A++) this.source[this.generateGroups[A]] = this.tmpSource[this.generateGroups[A]];
                        this.hasDynamicGroups || this.buildDropdownItemLayout("dynamic"), this.options.loadingAnimation && this.container.removeClass("loading"), this.node.trigger("search" + this.namespace)
                    }
                },
                navigate: function(A) {
                    if (this.helper.executeCallback.call(this, this.options.callback.onNavigateBefore, [this.node, this.query, A]), 27 === A.keyCode) return A.preventDefault(), void(this.query.length ? (this.resetInput(), this.node.trigger("input" + this.namespace, [A])) : (this.node.blur(), this.hideLayout()));
                    if (this.result.length) {
                        var e, t = this.resultContainer.find("." + this.options.selector.item).not("[disabled]"),
                            R = t.filter(".active"),
                            n = R[0] ? t.index(R) : null,
                            i = R[0] ? R.attr("data-index") : null,
                            r = null;
                        if (this.clearActiveItem(), this.helper.executeCallback.call(this, this.options.callback.onLeave, [this.node, null !== n && t.eq(n) || void 0, null !== i && this.result[i] || void 0, A]), 13 === A.keyCode) return A.preventDefault(), void(0 < R.length ? "javascript:;" === R.find("a:first")[0].href ? R.find("a:first").trigger("click", A) : R.find("a:first")[0].click() : this.node.closest("form").trigger("submit"));
                        if (39 !== A.keyCode) {
                            9 === A.keyCode ? this.options.blurOnTab ? this.hideLayout() : 0 < R.length ? n + 1 < t.length ? (A.preventDefault(), r = n + 1, this.addActiveItem(t.eq(r))) : this.hideLayout() : t.length ? (A.preventDefault(), r = 0, this.addActiveItem(t.first())) : this.hideLayout() : 38 === A.keyCode ? (A.preventDefault(), 0 < R.length ? 0 <= n - 1 && (r = n - 1, this.addActiveItem(t.eq(r))) : t.length && (r = t.length - 1, this.addActiveItem(t.last()))) : 40 === A.keyCode && (A.preventDefault(), 0 < R.length ? n + 1 < t.length && (r = n + 1, this.addActiveItem(t.eq(r))) : t.length && (r = 0, this.addActiveItem(t.first()))), e = null !== r ? t.eq(r).attr("data-index") : null, this.helper.executeCallback.call(this, this.options.callback.onEnter, [this.node, null !== r && t.eq(r) || void 0, null !== e && this.result[e] || void 0, A]), A.preventInputChange && ~[38, 40].indexOf(A.keyCode) && this.buildHintLayout(null !== e && e < this.result.length ? [this.result[e]] : null), this.options.hint && this.hint.container && this.hint.container.css("color", A.preventInputChange ? this.hint.css.color : null === e && this.hint.css.color || this.hint.container.css("background-color") || "fff");
                            var N = null === e || A.preventInputChange ? this.rawQuery : this.getTemplateValue.call(this, this.result[e]);
                            this.node.val(N), this.isContentEditable && this.node.text(N), this.helper.executeCallback.call(this, this.options.callback.onNavigateAfter, [this.node, t, null !== r && t.eq(r).find("a:first") || void 0, null !== e && this.result[e] || void 0, this.query, A])
                        } else null !== n ? t.eq(n).find("a:first")[0].click() : this.options.hint && "" !== this.hint.container.val() && this.helper.getCaret(this.node[0]) >= this.query.length && t.filter('[data-index="' + this.hintIndex + '"]').find("a:first")[0].click()
                    }
                },
                getTemplateValue: function(t) {
                    if (t) {
                        var A = t.group && this.options.source[t.group].templateValue || this.options.templateValue;
                        if ("function" == typeof A && (A = A.call(this)), !A) return this.helper.namespace.call(this, t.matchedKey, t).toString();
                        var R = this;
                        return A.replace(/\{\{([\w\-.]+)}}/gi, function(A, e) {
                            return R.helper.namespace.call(R, e, t, "get", "")
                        })
                    }
                },
                clearActiveItem: function() {
                    this.resultContainer.find("." + this.options.selector.item).removeClass("active")
                },
                addActiveItem: function(A) {
                    A.addClass("active")
                },
                searchResult: function() {
                    this.resetLayout(), !1 !== this.helper.executeCallback.call(this, this.options.callback.onSearch, [this.node, this.query]) && (!this.searchGroups.length || this.options.multiselect && this.options.multiselect.limit && this.items.length >= this.options.multiselect.limit || this.searchResultData(), this.helper.executeCallback.call(this, this.options.callback.onResult, [this.node, this.query, this.result, this.resultCount, this.resultCountPerGroup]), this.isDropdownEvent && (this.helper.executeCallback.call(this, this.options.callback.onDropdownFilter, [this.node, this.query, this.filters.dropdown, this.result]), this.isDropdownEvent = !1))
                },
                searchResultData: function() {
                    var A, e, t, R, n, i, r, N, a, o, I, s = this.groupBy,
                        H = null,
                        D = this.query.toLowerCase(),
                        L = this.options.maxItem,
                        l = this.options.maxItemPerGroup,
                        U = this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
                        K = "function" == typeof this.options.matcher && this.options.matcher;
                    this.options.accent && (D = this.helper.removeAccent.call(this, D));
                    for (var M = 0, T = this.searchGroups.length; M < T; ++M)
                        if (h = this.searchGroups[M], !this.filters.dropdown || "group" !== this.filters.dropdown.key || this.filters.dropdown.value === h) {
                            n = void 0 !== this.options.source[h].filter ? this.options.source[h].filter : this.options.filter, r = "function" == typeof this.options.source[h].matcher && this.options.source[h].matcher || K;
                            for (var u = 0, c = this.source[h].length; u < c && (!(this.resultItemCount >= L) || this.options.callback.onResult); u++)
                                if ((!U || this.dynamicFilter.validate.apply(this, [this.source[h][u]])) && null !== (A = this.source[h][u]) && "boolean" != typeof A && (!this.options.multiselect || this.isMultiselectUniqueData(A)) && (!this.filters.dropdown || (A[this.filters.dropdown.key] || "").toLowerCase() === (this.filters.dropdown.value || "").toLowerCase())) {
                                    if ((H = "group" === s ? h : A[s] ? A[s] : A.group) && !this.tmpResult[H] && (this.tmpResult[H] = [], this.resultCountPerGroup[H] = 0), l && "group" === s && this.tmpResult[H].length >= l && !this.options.callback.onResult) break;
                                    for (var S = 0, P = (f = this.options.source[h].display || this.options.display).length; S < P; ++S) {
                                        if (!1 !== n) {
                                            if (void 0 === (R = /\./.test(f[S]) ? this.helper.namespace.call(this, f[S], A) : A[f[S]]) || "" === R) continue;
                                            R = this.helper.cleanStringFromScript(R)
                                        }
                                        if ("function" == typeof n) {
                                            if (void 0 === (i = n.call(this, A, R))) break;
                                            if (!i) continue;
                                            "object" == typeof i && (A = i)
                                        }
                                        if (~[void 0, !0].indexOf(n)) {
                                            if (null === R) continue;
                                            if (t = (t = R).toString().toLowerCase(), this.options.accent && (t = this.helper.removeAccent.call(this, t)), e = t.indexOf(D), this.options.correlativeTemplate && "compiled" === f[S] && e < 0 && /\s/.test(D)) {
                                                a = !0, I = t;
                                                for (var B = 0, G = (o = D.split(" ")).length; B < G; B++)
                                                    if ("" !== o[B]) {
                                                        if (!~I.indexOf(o[B])) {
                                                            a = !1;
                                                            break
                                                        }
                                                        I = I.replace(o[B], "")
                                                    }
                                            }
                                            if (e < 0 && !a) continue;
                                            if (this.options.offset && 0 !== e) continue;
                                            if (r) {
                                                if (void 0 === (N = r.call(this, A, R))) break;
                                                if (!N) continue;
                                                "object" == typeof N && (A = N)
                                            }
                                        }
                                        if (this.resultCount++, this.resultCountPerGroup[H]++, this.resultItemCount < L) {
                                            if (l && this.tmpResult[H].length >= l) break;
                                            this.tmpResult[H].push(E.extend(!0, {
                                                matchedKey: f[S]
                                            }, A)), this.resultItemCount++
                                        }
                                        break
                                    }
                                    if (!this.options.callback.onResult) {
                                        if (this.resultItemCount >= L) break;
                                        if (l && this.tmpResult[H].length >= l && "group" === s) break
                                    }
                                }
                        } if (this.options.order) {
                        var p, f = [];
                        for (var h in this.tmpResult)
                            if (this.tmpResult.hasOwnProperty(h)) {
                                for (M = 0, T = this.tmpResult[h].length; M < T; M++) p = this.options.source[this.tmpResult[h][M].group].display || this.options.display, ~f.indexOf(p[0]) || f.push(p[0]);
                                this.tmpResult[h].sort(this.helper.sort(f, "asc" === this.options.order, function(A) {
                                    return A.toString().toUpperCase()
                                }))
                            }
                    }
                    var d = [],
                        O = [];
                    for (M = 0, T = (O = "function" == typeof this.options.groupOrder ? this.options.groupOrder.apply(this, [this.node, this.query, this.tmpResult, this.resultCount, this.resultCountPerGroup]) : Array.isArray(this.options.groupOrder) ? this.options.groupOrder : "string" == typeof this.options.groupOrder && ~["asc", "desc"].indexOf(this.options.groupOrder) ? Object.keys(this.tmpResult).sort(this.helper.sort([], "asc" === this.options.groupOrder, function(A) {
                            return A.toString().toUpperCase()
                        })) : Object.keys(this.tmpResult)).length; M < T; M++) d = d.concat(this.tmpResult[O[M]] || []);
                    this.groups = JSON.parse(JSON.stringify(O)), this.result = d
                },
                buildLayout: function() {
                    this.buildHtmlLayout(), this.buildBackdropLayout(), this.buildHintLayout(), this.options.callback.onLayoutBuiltBefore && (this.tmpResultHtml = this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltBefore, [this.node, this.query, this.result, this.resultHtml])), this.tmpResultHtml instanceof E ? this.resultContainer.html(this.tmpResultHtml) : this.resultHtml instanceof E && this.resultContainer.html(this.resultHtml), this.options.callback.onLayoutBuiltAfter && this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltAfter, [this.node, this.query, this.result])
                },
                buildHtmlLayout: function() {
                    if (!1 !== this.options.resultContainer) {
                        var o;
                        if (this.resultContainer || (this.resultContainer = E("<div/>", {
                                class: this.options.selector.result
                            }), this.container.append(this.resultContainer)), !this.result.length)
                            if (this.options.multiselect && this.options.multiselect.limit && this.items.length >= this.options.multiselect.limit) o = this.options.multiselect.limitTemplate ? "function" == typeof this.options.multiselect.limitTemplate ? this.options.multiselect.limitTemplate.call(this, this.query) : this.options.multiselect.limitTemplate.replace(/\{\{query}}/gi, E("<div>").text(this.helper.cleanStringFromScript(this.query)).html()) : "Can't select more than " + this.items.length + " items.";
                            else {
                                if (!this.options.emptyTemplate || "" === this.query) return;
                                o = "function" == typeof this.options.emptyTemplate ? this.options.emptyTemplate.call(this, this.query) : this.options.emptyTemplate.replace(/\{\{query}}/gi, E("<div>").text(this.helper.cleanStringFromScript(this.query)).html())
                            } this.displayEmptyTemplate = !!o;
                        var n = this.query.toLowerCase();
                        this.options.accent && (n = this.helper.removeAccent.call(this, n));
                        var I = this,
                            A = this.groupTemplate || "<ul></ul>",
                            s = !1;
                        this.groupTemplate ? A = E(A.replace(/<([^>]+)>\{\{(.+?)}}<\/[^>]+>/g, function(A, e, t, R, n) {
                            var i = "",
                                r = "group" === t ? I.groups : [t];
                            if (!I.result.length) return !0 === s ? "" : (s = !0, "<" + e + ' class="' + I.options.selector.empty + '">' + o + "</" + e + ">");
                            for (var N = 0, a = r.length; N < a; ++N) i += "<" + e + ' data-group-template="' + r[N] + '"><ul></ul></' + e + ">";
                            return i
                        })) : (A = E(A), this.result.length || A.append(o instanceof E ? o : '<li class="' + I.options.selector.empty + '">' + o + "</li>")), A.addClass(this.options.selector.list + (this.helper.isEmpty(this.result) ? " empty" : ""));
                        for (var e, t, i, R, r, N, a, H, D, L, l, U, K, M = this.groupTemplate && this.result.length && I.groups || [], T = 0, u = this.result.length; T < u; ++T) e = (i = this.result[T]).group, R = !this.options.multiselect && this.options.source[i.group].href || this.options.href, H = [], D = this.options.source[i.group].display || this.options.display, this.options.group && (e = i[this.options.group.key], this.options.group.template && ("function" == typeof this.options.group.template ? t = this.options.group.template.call(this, i) : "string" == typeof this.options.group.template && (t = this.options.group.template.replace(/\{\{([\w\-\.]+)}}/gi, function(A, e) {
                                return I.helper.namespace.call(I, e, i, "get", "")
                            }))), A.find('[data-search-group="' + e + '"]')[0] || (this.groupTemplate ? A.find('[data-group-template="' + e + '"] ul') : A).append(E("<li/>", {
                                class: I.options.selector.group,
                                html: E("<a/>", {
                                    href: "javascript:;",
                                    html: t || e,
                                    tabindex: -1
                                }),
                                "data-search-group": e
                            }))), this.groupTemplate && M.length && ~(l = M.indexOf(e || i.group)) && M.splice(l, 1), r = E("<li/>", {
                                class: I.options.selector.item + " " + I.options.selector.group + "-" + this.helper.slugify.call(this, e),
                                disabled: !!i.disabled,
                                "data-group": e,
                                "data-index": T,
                                html: E("<a/>", {
                                    href: R && !i.disabled ? (U = R, K = i, K.href = I.generateHref.call(I, U, K)) : "javascript:;",
                                    html: function() {
                                        if (N = i.group && I.options.source[i.group].template || I.options.template) "function" == typeof N && (N = N.call(I, I.query, i)), a = N.replace(/\{\{([^\|}]+)(?:\|([^}]+))*}}/gi, function(A, e, t) {
                                            var R = I.helper.cleanStringFromScript(String(I.helper.namespace.call(I, e, i, "get", "")));
                                            return ~(t = t && t.split("|") || []).indexOf("slugify") && (R = I.helper.slugify.call(I, R)), ~t.indexOf("raw") || !0 === I.options.highlight && n && ~D.indexOf(e) && (R = I.helper.highlight.call(I, R, n.split(" "), I.options.accent)), R
                                        });
                                        else {
                                            for (var A = 0, e = D.length; A < e; A++) void 0 !== (L = /\./.test(D[A]) ? I.helper.namespace.call(I, D[A], i, "get", "") : i[D[A]]) && "" !== L && H.push(L);
                                            a = '<span class="' + I.options.selector.display + '">' + I.helper.cleanStringFromScript(String(H.join(" "))) + "</span>"
                                        }(!0 === I.options.highlight && n && !N || "any" === I.options.highlight) && (a = I.helper.highlight.call(I, a, n.split(" "), I.options.accent)), E(this).append(a)
                                    }
                                })
                            }),
                            function(A, t, e) {
                                e.on("click", function(A, e) {
                                    t.disabled ? A.preventDefault() : (e && "object" == typeof e && (A.originalEvent = e), I.options.mustSelectItem && I.helper.isEmpty(t) ? A.preventDefault() : (I.options.multiselect || (I.item = t), !1 !== I.helper.executeCallback.call(I, I.options.callback.onClickBefore, [I.node, E(this), t, A]) && (A.originalEvent && A.originalEvent.defaultPrevented || A.isDefaultPrevented() || (I.options.multiselect ? (I.query = I.rawQuery = "", I.addMultiselectItemLayout(t)) : (I.focusOnly = !0, I.query = I.rawQuery = I.getTemplateValue.call(I, t), I.isContentEditable && (I.node.text(I.query), I.helper.setCaretAtEnd(I.node[0]))), I.hideLayout(), I.node.val(I.query).focus(), I.options.cancelButton && I.toggleCancelButtonVisibility(), I.helper.executeCallback.call(I, I.options.callback.onClickAfter, [I.node, E(this), t, A])))))
                                }), e.on("mouseenter", function(A) {
                                    t.disabled || (I.clearActiveItem(), I.addActiveItem(E(this))), I.helper.executeCallback.call(I, I.options.callback.onEnter, [I.node, E(this), t, A])
                                }), e.on("mouseleave", function(A) {
                                    t.disabled || I.clearActiveItem(), I.helper.executeCallback.call(I, I.options.callback.onLeave, [I.node, E(this), t, A])
                                })
                            }(0, i, r), (this.groupTemplate ? A.find('[data-group-template="' + e + '"] ul') : A).append(r);
                        if (this.result.length && M.length)
                            for (T = 0, u = M.length; T < u; ++T) A.find('[data-group-template="' + M[T] + '"]').remove();
                        this.resultHtml = A
                    }
                },
                generateHref: function(A, n) {
                    var i = this;
                    return "string" == typeof A ? A = A.replace(/\{\{([^\|}]+)(?:\|([^}]+))*}}/gi, function(A, e, t) {
                        var R = i.helper.namespace.call(i, e, n, "get", "");
                        return ~(t = t && t.split("|") || []).indexOf("slugify") && (R = i.helper.slugify.call(i, R)), R
                    }) : "function" == typeof A && (A = A.call(this, n)), A
                },
                getMultiselectComparedData: function(A) {
                    var e = "";
                    if (Array.isArray(this.options.multiselect.matchOn))
                        for (var t = 0, R = this.options.multiselect.matchOn.length; t < R; ++t) e += void 0 !== A[this.options.multiselect.matchOn[t]] ? A[this.options.multiselect.matchOn[t]] : "";
                    else {
                        var n = JSON.parse(JSON.stringify(A)),
                            i = ["group", "matchedKey", "compiled", "href"];
                        for (t = 0, R = i.length; t < R; ++t) delete n[i[t]];
                        e = JSON.stringify(n)
                    }
                    return e
                },
                buildBackdropLayout: function() {
                    this.options.backdrop && (this.backdrop.container || (this.backdrop.css = E.extend({
                        opacity: .6,
                        filter: "alpha(opacity=60)",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        "z-index": 1040,
                        "background-color": "#000"
                    }, this.options.backdrop), this.backdrop.container = E("<div/>", {
                        class: this.options.selector.backdrop,
                        css: this.backdrop.css
                    }).insertAfter(this.container)), this.container.addClass("backdrop").css({
                        "z-index": this.backdrop.css["z-index"] + 1,
                        position: "relative"
                    }))
                },
                buildHintLayout: function(A) {
                    if (this.options.hint)
                        if (this.node[0].scrollWidth > Math.ceil(this.node.innerWidth())) this.hint.container && this.hint.container.val("");
                        else {
                            var e = this,
                                t = "",
                                R = (A = A || this.result, this.query.toLowerCase());
                            if (this.options.accent && (R = this.helper.removeAccent.call(this, R)), this.hintIndex = null, this.searchGroups.length) {
                                if (this.hint.container || (this.hint.css = E.extend({
                                        "border-color": "transparent",
                                        position: "absolute",
                                        top: 0,
                                        display: "inline",
                                        "z-index": -1,
                                        float: "none",
                                        color: "silver",
                                        "box-shadow": "none",
                                        cursor: "default",
                                        "-webkit-user-select": "none",
                                        "-moz-user-select": "none",
                                        "-ms-user-select": "none",
                                        "user-select": "none"
                                    }, this.options.hint), this.hint.container = E("<" + this.node[0].nodeName + "/>", {
                                        type: this.node.attr("type"),
                                        class: this.node.attr("class"),
                                        readonly: !0,
                                        unselectable: "on",
                                        "aria-hidden": "true",
                                        tabindex: -1,
                                        click: function() {
                                            e.node.focus()
                                        }
                                    }).addClass(this.options.selector.hint).css(this.hint.css).insertAfter(this.node), this.node.parent().css({
                                        position: "relative"
                                    })), this.hint.container.css("color", this.hint.css.color), R)
                                    for (var n, i, r, N = 0, a = A.length; N < a; N++)
                                        if (!A[N].disabled) {
                                            i = A[N].group;
                                            for (var o = 0, I = (n = this.options.source[i].display || this.options.display).length; o < I; o++)
                                                if (r = String(A[N][n[o]]).toLowerCase(), this.options.accent && (r = this.helper.removeAccent.call(this, r)), 0 === r.indexOf(R)) {
                                                    t = String(A[N][n[o]]), this.hintIndex = N;
                                                    break
                                                } if (null !== this.hintIndex) break
                                        } var s = 0 < t.length && this.rawQuery + t.substring(this.query.length) || "";
                                this.hint.container.val(s), this.isContentEditable && this.hint.container.text(s)
                            }
                        }
                },
                buildDropdownLayout: function() {
                    if (this.options.dropdownFilter) {
                        var t = this;
                        E("<span/>", {
                            class: this.options.selector.filter,
                            html: function() {
                                E(this).append(E("<button/>", {
                                    type: "button",
                                    class: t.options.selector.filterButton,
                                    style: "display: none;",
                                    click: function() {
                                        t.container.toggleClass("filter");
                                        var e = t.namespace + "-dropdown-filter";
                                        E("html").off(e), t.container.hasClass("filter") && E("html").on("click" + e + " touchend" + e, function(A) {
                                            E(A.target).closest("." + t.options.selector.filter)[0] && E(A.target).closest(t.container)[0] || t.hasDragged || (t.container.removeClass("filter"), E("html").off(e))
                                        })
                                    }
                                })), E(this).append(E("<ul/>", {
                                    class: t.options.selector.dropdown
                                }))
                            }
                        }).insertAfter(t.container.find("." + t.options.selector.query))
                    }
                },
                buildDropdownItemLayout: function(A) {
                    if (this.options.dropdownFilter) {
                        var e, t, n = this,
                            i = "string" == typeof this.options.dropdownFilter && this.options.dropdownFilter || "All",
                            r = this.container.find("." + this.options.selector.dropdown);
                        "static" !== A || !0 !== this.options.dropdownFilter && "string" != typeof this.options.dropdownFilter || this.dropdownFilter.static.push({
                            key: "group",
                            template: "{{group}}",
                            all: i,
                            value: Object.keys(this.options.source)
                        });
                        for (var R = 0, N = this.dropdownFilter[A].length; R < N; R++) {
                            t = this.dropdownFilter[A][R], Array.isArray(t.value) || (t.value = [t.value]), t.all && (this.dropdownFilterAll = t.all);
                            for (var a = 0, o = t.value.length; a <= o; a++) a === o && R !== N - 1 || a === o && R === N - 1 && "static" === A && this.dropdownFilter.dynamic.length || (e = this.dropdownFilterAll || i, t.value[a] ? e = t.template ? t.template.replace(new RegExp("{{" + t.key + "}}", "gi"), t.value[a]) : t.value[a] : this.container.find("." + n.options.selector.filterButton).html(e), function(e, t, R) {
                                r.append(E("<li/>", {
                                    class: n.options.selector.dropdownItem + " " + n.helper.slugify.call(n, t.key + "-" + (t.value[e] || i)),
                                    html: E("<a/>", {
                                        href: "javascript:;",
                                        html: R,
                                        click: function(A) {
                                            A.preventDefault(), I.call(n, {
                                                key: t.key,
                                                value: t.value[e] || "*",
                                                template: R
                                            })
                                        }
                                    })
                                }))
                            }(a, t, e))
                        }
                        this.dropdownFilter[A].length && this.container.find("." + n.options.selector.filterButton).removeAttr("style")
                    }

                    function I(A) {
                        "*" === A.value ? delete this.filters.dropdown : this.filters.dropdown = A, this.container.removeClass("filter").find("." + this.options.selector.filterButton).html(A.template), this.isDropdownEvent = !0, this.node.trigger("input" + this.namespace), this.options.multiselect && this.adjustInputSize(), this.node.focus()
                    }
                },
                dynamicFilter: {
                    isEnabled: !1,
                    init: function() {
                        this.options.dynamicFilter && (this.dynamicFilter.bind.call(this), this.dynamicFilter.isEnabled = !0)
                    },
                    validate: function(A) {
                        var e, t, R = null,
                            n = null;
                        for (var i in this.filters.dynamic)
                            if (this.filters.dynamic.hasOwnProperty(i) && (t = ~i.indexOf(".") ? this.helper.namespace.call(this, i, A, "get") : A[i], "|" !== this.filters.dynamic[i].modifier || R || (R = t == this.filters.dynamic[i].value || !1), "&" === this.filters.dynamic[i].modifier)) {
                                if (t != this.filters.dynamic[i].value) {
                                    n = !1;
                                    break
                                }
                                n = !0
                            } return e = R, null !== n && !0 === (e = n) && null !== R && (e = R), !!e
                    },
                    set: function(A, e) {
                        var t = A.match(/^([|&])?(.+)/);
                        e ? this.filters.dynamic[t[2]] = {
                            modifier: t[1] || "|",
                            value: e
                        } : delete this.filters.dynamic[t[2]], this.dynamicFilter.isEnabled && this.generateSource()
                    },
                    bind: function() {
                        for (var A, e = this, t = 0, R = this.options.dynamicFilter.length; t < R; t++) "string" == typeof(A = this.options.dynamicFilter[t]).selector && (A.selector = E(A.selector)), A.selector instanceof E && A.selector[0] && A.key && function(A) {
                            A.selector.off(e.namespace).on("change" + e.namespace, function() {
                                e.dynamicFilter.set.apply(e, [A.key, e.dynamicFilter.getValue(this)])
                            }).trigger("change" + e.namespace)
                        }(A)
                    },
                    getValue: function(A) {
                        var e;
                        return "SELECT" === A.tagName ? e = A.value : "INPUT" === A.tagName && ("checkbox" === A.type ? e = A.checked && A.getAttribute("value") || A.checked || null : "radio" === A.type && A.checked && (e = A.value)), e
                    }
                },
                buildMultiselectLayout: function() {
                    if (this.options.multiselect) {
                        var A, e = this;
                        this.label.container = E("<span/>", {
                            class: this.options.selector.labelContainer,
                            "data-padding-left": parseFloat(this.node.css("padding-left")) || 0,
                            "data-padding-right": parseFloat(this.node.css("padding-right")) || 0,
                            "data-padding-top": parseFloat(this.node.css("padding-top")) || 0,
                            click: function(A) {
                                E(A.target).hasClass(e.options.selector.labelContainer) && e.node.focus()
                            }
                        }), this.node.closest("." + this.options.selector.query).prepend(this.label.container), this.options.multiselect.data && (Array.isArray(this.options.multiselect.data) ? this.populateMultiselectData(this.options.multiselect.data) : "function" == typeof this.options.multiselect.data && (A = this.options.multiselect.data.call(this), Array.isArray(A) ? this.populateMultiselectData(A) : "function" == typeof A.promise && E.when(A).then(function(A) {
                            A && Array.isArray(A) && e.populateMultiselectData(A)
                        })))
                    }
                },
                isMultiselectUniqueData: function(A) {
                    for (var e = !0, t = 0, R = this.comparedItems.length; t < R; ++t)
                        if (this.comparedItems[t] === this.getMultiselectComparedData(A)) {
                            e = !1;
                            break
                        } return e
                },
                populateMultiselectData: function(A) {
                    for (var e = 0, t = A.length; e < t; ++e) this.addMultiselectItemLayout(A[e]);
                    this.node.trigger("search" + this.namespace, {
                        origin: "populateMultiselectData"
                    })
                },
                addMultiselectItemLayout: function(A) {
                    if (this.isMultiselectUniqueData(A)) {
                        this.items.push(A), this.comparedItems.push(this.getMultiselectComparedData(A));
                        var e, t = this.getTemplateValue(A),
                            R = this,
                            n = this.options.multiselect.href ? "a" : "span",
                            i = E("<span/>", {
                                class: this.options.selector.label,
                                html: E("<" + n + "/>", {
                                    text: t,
                                    click: function(A) {
                                        var e = E(this).closest("." + R.options.selector.label),
                                            t = R.label.container.find("." + R.options.selector.label).index(e);
                                        R.options.multiselect.callback && R.helper.executeCallback.call(R, R.options.multiselect.callback.onClick, [R.node, R.items[t], A])
                                    },
                                    href: this.options.multiselect.href ? (e = R.items[R.items.length - 1], R.generateHref.call(R, R.options.multiselect.href, e)) : null
                                })
                            });
                        return i.append(E("<span/>", {
                            class: this.options.selector.cancelButton,
                            html: "×",
                            click: function(A) {
                                var e = E(this).closest("." + R.options.selector.label),
                                    t = R.label.container.find("." + R.options.selector.label).index(e);
                                R.cancelMultiselectItem(t, e, A)
                            }
                        })), this.label.container.append(i), this.adjustInputSize(), !0
                    }
                },
                cancelMultiselectItem: function(A, e, t) {
                    var R = this.items[A];
                    (e = e || this.label.container.find("." + this.options.selector.label).eq(A)).remove(), this.items.splice(A, 1), this.comparedItems.splice(A, 1), this.options.multiselect.callback && this.helper.executeCallback.call(this, this.options.multiselect.callback.onCancel, [this.node, R, t]), this.adjustInputSize(), this.focusOnly = !0, this.node.focus().trigger("input" + this.namespace, {
                        origin: "cancelMultiselectItem"
                    })
                },
                adjustInputSize: function() {
                    var t = this.node[0].getBoundingClientRect().width - (parseFloat(this.label.container.data("padding-right")) || 0) - (parseFloat(this.label.container.css("padding-left")) || 0),
                        R = 0,
                        n = 0,
                        i = 0,
                        r = !1,
                        N = 0;
                    this.label.container.find("." + this.options.selector.label).filter(function(A, e) {
                        0 === A && (N = E(e)[0].getBoundingClientRect().height + parseFloat(E(e).css("margin-bottom") || 0)), R = E(e)[0].getBoundingClientRect().width + parseFloat(E(e).css("margin-right") || 0), .7 * t < i + R && !r && (n++, r = !0), i + R < t ? i += R : (r = !1, i = R)
                    });
                    var A = parseFloat(this.label.container.data("padding-left") || 0) + (r ? 0 : i),
                        e = n * N + parseFloat(this.label.container.data("padding-top") || 0);
                    this.container.find("." + this.options.selector.query).find("input, textarea, [contenteditable], .typeahead__hint").css({
                        paddingLeft: A,
                        paddingTop: e
                    })
                },
                showLayout: function() {
                    !this.container.hasClass("result") && (this.result.length || this.displayEmptyTemplate || this.options.backdropOnFocus) && (function() {
                        var e = this;
                        E("html").off("keydown" + this.namespace).on("keydown" + this.namespace, function(A) {
                            A.keyCode && 9 === A.keyCode && setTimeout(function() {
                                E(":focus").closest(e.container).find(e.node)[0] || e.hideLayout()
                            }, 0)
                        }), E("html").off("click" + this.namespace + " touchend" + this.namespace).on("click" + this.namespace + " touchend" + this.namespace, function(A) {
                            E(A.target).closest(e.container)[0] || E(A.target).closest("." + e.options.selector.item)[0] || A.target.className === e.options.selector.cancelButton || e.hasDragged || e.hideLayout()
                        })
                    }.call(this), this.container.addClass([this.result.length || this.searchGroups.length && this.displayEmptyTemplate ? "result " : "", this.options.hint && this.searchGroups.length ? "hint" : "", this.options.backdrop || this.options.backdropOnFocus ? "backdrop" : ""].join(" ")), this.helper.executeCallback.call(this, this.options.callback.onShowLayout, [this.node, this.query]))
                },
                hideLayout: function() {
                    (this.container.hasClass("result") || this.container.hasClass("backdrop")) && (this.container.removeClass("result hint filter" + (this.options.backdropOnFocus && E(this.node).is(":focus") ? "" : " backdrop")), this.options.backdropOnFocus && this.container.hasClass("backdrop") || (E("html").off(this.namespace), this.helper.executeCallback.call(this, this.options.callback.onHideLayout, [this.node, this.query])))
                },
                resetLayout: function() {
                    this.result = [], this.tmpResult = {}, this.groups = [], this.resultCount = 0, this.resultCountPerGroup = {}, this.resultItemCount = 0, this.resultHtml = null, this.options.hint && this.hint.container && (this.hint.container.val(""), this.isContentEditable && this.hint.container.text(""))
                },
                resetInput: function() {
                    this.node.val(""), this.isContentEditable && this.node.text(""), this.query = "", this.rawQuery = ""
                },
                buildCancelButtonLayout: function() {
                    if (this.options.cancelButton) {
                        var e = this;
                        E("<span/>", {
                            class: this.options.selector.cancelButton,
                            html: "×",
                            mousedown: function(A) {
                                A.stopImmediatePropagation(), A.preventDefault(), e.resetInput(), e.node.trigger("input" + e.namespace, [A])
                            }
                        }).insertBefore(this.node)
                    }
                },
                toggleCancelButtonVisibility: function() {
                    this.container.toggleClass("cancel", !!this.query.length)
                },
                __construct: function() {
                    this.extendOptions(), this.unifySourceFormat() && (this.dynamicFilter.init.apply(this), this.init(), this.buildDropdownLayout(), this.buildDropdownItemLayout("static"), this.buildMultiselectLayout(), this.delegateEvents(), this.buildCancelButtonLayout(), this.helper.executeCallback.call(this, this.options.callback.onReady, [this.node]))
                },
                helper: {
                    isEmpty: function(A) {
                        for (var e in A)
                            if (A.hasOwnProperty(e)) return !1;
                        return !0
                    },
                    removeAccent: function(A) {
                        if ("string" == typeof A) {
                            var e = n;
                            return "object" == typeof this.options.accent && (e = this.options.accent), A = A.toLowerCase().replace(new RegExp("[" + e.from + "]", "g"), function(A) {
                                return e.to[e.from.indexOf(A)]
                            })
                        }
                    },
                    slugify: function(A) {
                        return "" !== (A = String(A)) && (A = (A = this.helper.removeAccent.call(this, A)).replace(/[^-a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")), A
                    },
                    sort: function(R, t, n) {
                        var i = function(A) {
                            for (var e = 0, t = R.length; e < t; e++)
                                if (void 0 !== A[R[e]]) return n(A[R[e]]);
                            return A
                        };
                        return t = [-1, 1][+!!t],
                            function(A, e) {
                                return A = i(A), e = i(e), t * ((e < A) - (A < e))
                            }
                    },
                    replaceAt: function(A, e, t, R) {
                        return A.substring(0, e) + R + A.substring(e + t)
                    },
                    highlight: function(A, e, t) {
                        A = String(A);
                        var R = t && this.helper.removeAccent.call(this, A) || A,
                            n = [];
                        Array.isArray(e) || (e = [e]), e.sort(function(A, e) {
                            return e.length - A.length
                        });
                        for (var i = e.length - 1; 0 <= i; i--) "" !== e[i].trim() ? e[i] = e[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e.splice(i, 1);
                        R.replace(new RegExp("(?:" + e.join("|") + ")(?!([^<]+)?>)", "gi"), function(A, e, t) {
                            n.push({
                                offset: t,
                                length: A.length
                            })
                        });
                        for (i = n.length - 1; 0 <= i; i--) A = this.helper.replaceAt(A, n[i].offset, n[i].length, "<strong>" + A.substr(n[i].offset, n[i].length) + "</strong>");
                        return A
                    },
                    getCaret: function(A) {
                        var e = 0;
                        if (A.selectionStart) return A.selectionStart;
                        if (document.selection) {
                            var t = document.selection.createRange();
                            if (null === t) return e;
                            var R = A.createTextRange(),
                                n = R.duplicate();
                            R.moveToBookmark(t.getBookmark()), n.setEndPoint("EndToStart", R), e = n.text.length
                        } else if (window.getSelection) {
                            var i = window.getSelection();
                            if (i.rangeCount) {
                                var r = i.getRangeAt(0);
                                r.commonAncestorContainer.parentNode == A && (e = r.endOffset)
                            }
                        }
                        return e
                    },
                    setCaretAtEnd: function(A) {
                        if (void 0 !== window.getSelection && void 0 !== document.createRange) {
                            var e = document.createRange();
                            e.selectNodeContents(A), e.collapse(!1);
                            var t = window.getSelection();
                            t.removeAllRanges(), t.addRange(e)
                        } else if (void 0 !== document.body.createTextRange) {
                            var R = document.body.createTextRange();
                            R.moveToElementText(A), R.collapse(!1), R.select()
                        }
                    },
                    cleanStringFromScript: function(A) {
                        return "string" == typeof A && A.replace(/<\/?(?:script|iframe)\b[^>]*>/gm, "") || A
                    },
                    executeCallback: function(A, e) {
                        if (A) {
                            var t;
                            if ("function" == typeof A) t = A;
                            else if (("string" == typeof A || Array.isArray(A)) && ("string" == typeof A && (A = [A, []]), "function" != typeof(t = this.helper.namespace.call(this, A[0], window)))) return;
                            return t.apply(this, (A[1] || []).concat(e || []))
                        }
                    },
                    namespace: function(A, e, t, R) {
                        if ("string" != typeof A || "" === A) return !1;
                        var n = void 0 !== R ? R : void 0;
                        if (!~A.indexOf(".")) return e[A] || n;
                        for (var i = A.split("."), r = e || window, N = (t = t || "get", ""), a = 0, o = i.length; a < o; a++) {
                            if (void 0 === r[N = i[a]]) {
                                if (~["get", "delete"].indexOf(t)) return void 0 !== R ? R : void 0;
                                r[N] = {}
                            }
                            if (~["set", "create", "delete"].indexOf(t) && a === o - 1) {
                                if ("set" !== t && "create" !== t) return delete r[N], !0;
                                r[N] = n
                            }
                            r = r[N]
                        }
                        return r
                    },
                    typeWatch: (t = 0, function(A, e) {
                        clearTimeout(t), t = setTimeout(A, e)
                    })
                }
            }, E.fn.typeahead = E.typeahead = function(A) {
                return e.typeahead(this, A)
            };
            var e = {
                typeahead: function(A, e) {
                    if (e && e.source && "object" == typeof e.source) {
                        if ("function" == typeof A) {
                            if (!e.input) return;
                            A = E(e.input)
                        }
                        if (void 0 === A[0].value && (A[0].value = A.text()), A.length) {
                            if (1 === A.length) return A[0].selector = A.selector || e.input || A[0].nodeName.toLowerCase(), window.Typeahead[A[0].selector] = new a(A, e);
                            for (var t, R = {}, n = 0, i = A.length; n < i; ++n) void 0 !== R[t = A[n].nodeName.toLowerCase()] && (t += n), A[n].selector = t, window.Typeahead[t] = R[t] = new a(A.eq(n), e);
                            return R
                        }
                    }
                }
            };
            return window.console = window.console || {
                log: function() {}
            }, Array.isArray || (Array.isArray = function(A) {
                return "[object Array]" === Object.prototype.toString.call(A)
            }), "trim" in String.prototype || (String.prototype.trim = function() {
                return this.replace(/^\s+/, "").replace(/\s+$/, "")
            }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(A, e) {
                void 0 === e && (e = 0), e < 0 && (e += this.length), e < 0 && (e = 0);
                for (var t = this.length; e < t; e++)
                    if (e in this && this[e] === A) return e;
                return -1
            }), Object.keys || (Object.keys = function(A) {
                var e, t = [];
                for (e in A) Object.prototype.hasOwnProperty.call(A, e) && t.push(e);
                return t
            }), a
        })
    },
    71: function(A, e, t) {
        "use strict";
        t.r(e);
        var R = t(1);
        var l = t.n(R);
        var n = t(2);
        var a = t.n(n);
        var i = ["KALABURAGI - KLBG", "DD UPADHYAYA JN - DDU", "LAKHPAT - LAA", "LACHHIPURA - LAC", "LOHARDAGA - LAD", "LAKHOLI - LAE", "LAKHO - LAK", "LUSHALA - LAL", "LOTANA - LAN", "LOHAPUR - LAP", "LALITPUR - LAR", "LATHI - LAT", "LADNUN - LAU", "LAUL - LAUL", "LABHA - LAV", "LAMBHUA - LBA", "LIMBODRA - LBD", "LIMBGAON - LBG", "LILABARI - LBI", "LABAN - LBN", "LABPUR - LBP", "LUCKNOW CITY - LC", "LALBAGH CRT RD - LCAE", "LINCH - LCH", "LACHMANPUR ROAD - LCME", "LALPUR CHANDRA - LCN", "LOKUR - LCR", "LANGCHOLIET - LCT", "LONDA JN - LD", "LIDHORA KHURD - LDA", "LODI COLONY - LDCY", "LADKHED - LDD", "LOKDHIKHERA - LDE", "LUDHIANA JN - LDH", "LADHUKA - LDK", "LEDARMER - LDM", "LODIPUR BISHNPR - LDP", "LANDAURA - LDR", "LUNIDHAR - LDU", "LADHOWAL - LDW", "LADDA - LDX", "LAKKITI - LDY", "LEDO - LEDO", "LEHRA - LER", "LOWER HAFLONG - LFG", "LOHGARH ABUB - LGB", "LAGARGAWAN - LGCE", "LALAGUDA GATE - LGDH", "LALGARH JN - LGH", "LANGAL - LGI", "LALGOLA - LGL", "LEHGAON - LGN", "LALGOPALGANJ - LGO", "LINGIRI - LGRE", "LANGTING - LGT", "LINGARAJ TMP RD - LGTR", "LAHING - LH", "LEHRA GAGA - LHA", "LAHABON - LHB", "LOTHAL BHURKHL - LHBK", "LOHOGAD - LHD", "LAIHRA KHANA - LHK", "LAHOAL - LHL", "LAHLI - LHLL", "LEHRA MUHABBAT - LHM", "MAU RANIPUR - MRPR", "MATARI - MRQ", "MURARAI - MRR", "MATHURA CANT - MRT", "MURAITHA - MRTA", "MIRTHAL - MRTL", "MURTI - MRTY", "BMBY MATUNGA RD - MRU", "MARSUL - MRV", "MARWAR RANAWAS - MRWS", "MURUD - MRX", "CHENNAI EGMORE - MS", "MASAGRAM - MSAE", "CHENNAI BEACH - MSB", "MUSAHIBPUR - MSBR", "CHENNAI CHETPAT - MSC", "BOMBAY MASJID - MSD", "MASNADIH - MSDH", "MAHISADAL - MSDL", "MASUDAN - MSDN", "MURSHADPUR - MSDR", "MASANI - MSE", "CHENNAI FORT - MSF", "MAHESHGANJ - MSGJ", "MAHESANA JN - MSH", "MAHES KHUNT - MSK", "MACHCHALANDAPUR - MSL", "MAHASAMUND - MSMD", "MISAMARI - MSMI", "MURSAN - MSN", "MISROD - MSO", "MASODHA - MSOD", "MANSURPUR - MSP", "MARWAR RATANPRA - MSQ", "MASUR - MSR", "MURHESI RAMPUR - MSRP", "MASARAHALLI - MSS", "MAHESHARI SNDHN - MSSD", "MAISHASHAN - MSSN", "MASIT - MST", "MISRIKH TIRATH - MSTH", "MOSUR - MSU", "MESWAN - MSVN", "MASKANWA - MSW", "MASANIWALA - MSWA", "MANSA - MSZ", "MATERA - MT", "MATHELA - MTA", "MATLABPUR - MTB", "MATHIA BARGHAT - MTBG", "MEERUT CITY - MTC", "MERTA ROAD JN - MTD", "METUR DAM - MTDM", "METTUR - MTE", "MUTHANI - MTGE", "MATAUNDH - MTH", "MITHAPUR - MTHP", "MITAWAL - MTI", "MATHURA JN - MTJ", "MOTIJHEEL - MTJL", "MOTI KHAWDI - MTKD", "MAILAM - MTL", "MITHILA DEEP - MTLP", "NABADWIP DHAM - NDAE", "NANDURBAR - NDB", "BARODA HOUSE - NDBH", "NANDPR BHATAULI - NDBT", "NIDADAVOLU JN - NDD", "NANDRE - NDE", "NABADWIP GHAT - NDF", "NADGAM - NDG", "NINDHAR BENAR - NDH", "NANDGANJ - NDJ", "NADIKUDI JN - NDKD", "NANDARKHA - NDKH", "NANDYAL - NDL", "NEW DELHI - NDLS", "NIDAMANURU - NDM", "NARDANA - NDN", "NIDUBROLU - NDO", "NANDAPUR - NDPR", "NUDURUPADU - NDPU", "NANDESARI - NDR", "NANGAL DEGROTA - NDRT", "NATHDWARA - NDT", "NADAUJ - NDU", "NIDVANDA - NDV", "NADWAN - NDW", "NIDIGALLU - NDZ", "NEYKKARAPATTI - NEA", "H SAHIB NANDED - NED", "NEOLI - NEI", "NEMEM - NEM", "NENPUR - NEP", "NERI - NERI", "NETRANG - NET", "NIVARI - NEW", "NEW FARAKKA JN - NFK", "NAGARI - NG", "NINGALA JN - NGA", "NAWABGANJ GONDA - NGB", "NAGARDEVLA - NGD", "NAGAR - NGE", "NAGARNABI - NGF", "NAGINA - NGG", "NAGARI - NGI", "NAGAL - NGL", "NAGLATULA - NGLT", "NAGASAMUDRAM - NGM", "NANDGAON - NGN", "NAGAUR - NGO", "NAGPUR - NGP", "ANNIGERI - NGR", "NILGIRI ROAD - NGRD", "NAGROTA SURIYAM - NGRS", "NAGROTA - NGRT", "MACHILIPATNAM - MTM", "MOTUMARI - MTMI", "BOMBAY MATUNGA - MTN", "MATTANCHERI HLT - MTNC", "MUTTARASANALLUR - MTNL", "MAITHA - MTO", "METUPALAIYAM - MTP", "MOTIPURA CHAUKI - MTPC", "MOTIPUR - MTR", "MATIGARA - MTRA", "MOTA SURKA - MTSK", "MUTUPET - MTT", "MATMARI - MTU", "MATHUR - MTUR", "MATALKUNTA - MTV", "MULTAI - MTY", "MAKANSAR - MU", "MUSRA - MUA", "MULLURCARAI - MUC", "MURADNAGAR - MUD", "MUDUDI - MUDI", "MUDKHED - MUE", "MAGRA - MUG", "MANUGURU - MUGR", "MURTHIHA - MUH", "MUNUMAKA - MUK", "MUKKALI - MUKE", "MANGAPATNAM - MUM", "MASANGAON - MUO", "MURHIPAR - MUP", "MUPA - MUPA", "MARUDUR - MUQ", "MANKAPUR JN - MUR", "MANDAWAR M RD - MURD", "MURI - MURI", "MEERUT CANT - MUT", "MANKUNDU - MUU", "MAHUAWA KHURD - MUUA", "MANDUADIH - MUV", "MUVAL TANK - MUVL", "MATHURAPUR - MUW", "MUGAIYUR - MUY", "MOHIUDDINPUR - MUZ", "MAYILADUTURAI J - MV", "MALAKAVEMULA H - MVA", "MAVINKERE - MVC", "MULVAD - MVD", "MUNDHEWADI - MVE", "MANABAR - MVF", "MALIGURA - MVG", "MANTATTI - MVH", "MORBI - MVI", "MAVLI JN - MVJ", "MALAVLI - MVL", "MEVLI - MVLI", "MAVELIKARA - MVLK", "MILAVITTAN - MVN", "MANWATH ROAD - MVO", "MOKHASA KALVPDI - MVP", "MAVELIPALAIYAM - MVPM", "MAIVADI ROAD - MVRD", "MALLAVARAM - MVRM", "MAHESHI - MVV", "MALLIVIDU - MVW", "MALAVI - MVY", "MAIRWA - MW", "MANDWA - MWA", "MHASAVAD - MWD", "MAGARDAHA - MWF", "MINDALA - MWG", "MALWAN - MWH", "MARWASGRAM - MWJ", "MORDAD TANDA - MWK", "MALLESWARAM - MWM", "MAHRANI PACHHIM - MWP", "MOTARI HALT - MWQ", "MAHANSAR - MWR", "MARWAR LOHWAT - MWT", "MAHRAWAL - MWUE", "MAHWA - MWW", "MALLANWALA KHAS - MWX", "MAILARAM - MWY", "MAHISHADAHARI - MWZ", "BBY MAHALAKSHMI - MX", "MARAUDA - MXA", "MASOR ROAD - MXD", "MAKHU - MXH", "MANDRAK - MXK", "MOKHOLI - MXL", "MINATCHIPURAM - MXM", "MARIANI JN - MXN", "MORTHALA - MXO", "MALUPOTA - MXP", "MAHUR - MXR", "MALAKPET - MXT", "MAHUARIYA - MXY", "MOHDARA HALT - MXZ", "MALLIYAM - MY", "MANDYA - MYA", "MANDERDISA - MYD", "MANDHALI - MYE", "MIYAGAM KARJAN - MYG", "MAYNAGURI ROAD - MYGD", "MIYAGAM K JN NG - MYGL", "MAHEJI - MYJ", "MAYAKONDA - MYK", "MALLIYALA - MYL", "MEMARI - MYM", "MUNDILYAMPAKKAM - MYP", "MAIHAR - MYR", "MYSURU JN - MYS", "MAYANOOR - MYU", "MAYYANAD - MYY", "MEZENGA S - MZA", "MAHULI HALT - MZB", "MIRZA CHEUKI - MZC", "MANZURGARHI - MZGI", "MAUHARI - MZH", "MIRZAPALLI - MZL", "MUZZAMPUR NRYN - MZM", "MAHMUDPUR SRYN - MZN", "MIRZAPUR - MZP", "MAJGAON ASSAM - MZQ", "MURTAJAPUR - MZR", "MURTAJAPUR TOWN - MZRT", "MURKONGSELEK - MZS", "MARANDAHALLI - MZU", "MANJHWE - MZW", "MATARILA - MZX", "MANJURI ROAD - MZZ", "NAGBHIR JN - NAB", "NAWA CITY - NAC", "NAGDA JN - NAD", "NADA - NADA", "NAGARGALI - NAG", "NAHIYER - NAH", "NANGI - NAI", "NAKSALBARI - NAK", "NAIK DIH - NAKD", "NALPUR - NALR", "NAMRUP - NAM", "NANA - NANA", "NAR - NAR", "NASRALA - NAS", "NARASINGAPALLI - NASP", "NATHNAGAR - NAT", "NADAPURAM ROAD - NAU", "NAWANDGI - NAW", "NAWAN - NAWN", "NAZIRGANJ - NAZJ", "NIMBHORA - NB", "NABHA - NBA", "NABAGRAM - NBAE", "NAJIBABAD JN - NBD", "NEW BARRACKPORE - NBE", "NABENAGAR ROAD - NBG", "NOWBAGH - NBGH", "NIMBAHERA - NBH", "NANA BHAMODRA - NBHM", "NADBAI - NBI", "NUNGAMBAKKAM - NBK", "NIMBAL - NBL", "NAVABPALEM - NBM", "NIBHAPUR - NBP", "NEW BONGAIGAON - NBQ", "NAMBURU - NBR", "NANI BARAL - NBRL", "NEW BANESWAR - NBS", "NAYABAGIRTHIPUR - NBT", "NARASAMBUDHI - NBU", "NIBKARORI - NBUE", "NIZBARGANJ - NBX", "NIZCHATIA - NCA", "NEW COOCH BEHAR - NCB", "NLACHRVURU EAST - NCE", "NAKACHARI - NCH", "NAGERCOIL JN - NCJ", "NAGORE - NCR", "NALLACHERUVU - NCU", "NADIAD JN - ND", "LOHARU - LHU", "LINGA - LIG", "LAKSHMIGANJ - LIJ", "LINGAMGUNTLA - LIN", "LING - LING", "LACHMIPUR - LIR", "LUCKNOW NE - LJN", "LANJIGARH ROAD - LJR", "LANKA - LKA", "LAKHABAWAL - LKBL", "LAKODARA - LKD", "LANKALAKODERU - LKDU", "LAKHERI - LKE", "LAMSAKHANG - LKG", "LYALLPUR KC HLT - LKK", "LOKMANYA NAGAR - LKMN", "LAKHMINIA - LKN", "LAKHNA - LKNA", "LAKHPAT NAGAR - LKNR", "LUCKNOW NR - LKO", "LAKSHMIKANTPUR - LKPR", "LAUKAHA BAZAR - LKQ", "LUCKEESARAI JN - LKR", "LUNKARANSAR - LKS", "L NARAYANAPURAM - LKSH", "HULKOTI - LKT", "LAKHEWALI - LKW", "LAKSHMIPUR - LKX", "LAKHMAPUR - LKY", "LAKADIYA - LKZ", "LALBAZAR - LLBR", "LILUAH - LLH", "LALGUDI - LLI", "LALGANJ - LLJ", "LALIT LAKSHMIPR - LLPR", "LALPUR - LLR", "LALRU - LLU", "LIMBDI - LM", "LAMBIYA - LMA", "LIMBARA - LMB", "LAKHAMANCHI - LMC", "LINGANENIDODDI - LMD", "LUMDING JN - LMG", "LIMKHEDA - LMK", "LAILAKH MAMLKHA - LMM", "LACHHMANPUR - LMN", "LAKSHMIBAI NGR - LMNR", "LILIYA MOTA - LMO", "LAKHIMPUR - LMP", "ALMATTI - LMT", "LIMARUA - LMU", "LAMANA - LNA", "LACHHMANGARH SK - LNH", "LANGHNA - LNJ", "LACHYAN - LHN", "LOHIAN KHAS JN - LNK", "LONAVALA - LNL", "LONAND - LNN", "LOHNA ROAD - LNO", "LANGARPETH - LNP", "LAKHNAURIA - LNQ", "LUNI RICHHA - LNR", "LUNAVADA - LNV", "LOLIYA - LO", "LORHA - LOA", "LEKODA - LOD", "LOHGARA - LOG", "LOHA - LOHA", "LOKNATH - LOK", "LODHMA - LOM", "LONI - LONI", "LOHRA - LOT", "LOVEDALE - LOV", "LALAPET - LP", "LATIPURA - LPA", "LAPANGA - LPG", "LOTAPAHAR - LPH", "LINGAMPALLI - LPI", "LALPUR JAM - LPJ", "LAOPANI - LPN", "LAJPAT NAGAR - LPNR", "LILAPUR ROAD - LPR", "LONGPATIA - LPTA", "LAKHPURI - LPU", "LOHARPURWA - LPW", "LADPURA - LR", "LODNA - LRA", "LAR ROAD - LRD", "LIHURI - LRI", "LAKSAR JN - LRJ", "LALPUR UMRI - LRU", "LASALGAON - LS", "LUSADIYA - LSD", "LASERI - LSE", "LAWA SARDARGARH - LSG", "LAHERIA SARAI - LSI", "LASINA - LSN", "LASUR - LSR", "LOISINGHA - LSX", "LAHAVIT - LT", "LAMTA - LTA", "LATHIDAD - LTD", "LATEHAR - LTHR", "LATTERI - LTI", "LATHIKATA - LTK", "LAKHTAR - LTR", "LATUR ROAD - LTRR", "LOTARVA - LTV", "LALURI KHERA - LUA", "LAVANPUR - LUN", "LUNI JN - LUNI", "LATUR - LUR", "LUSA - LUSA", "LOKVIDYAPTH NGR - LVR", "LORWADA - LW", "LOWJEE - LWJ", "ALNAVAR JN - LWR", "LAKSWA - LXA", "LAKSHANNATH RD - LXD", "LUNSERIYA - LXR", "LAYABAD - LYD", "MADHA - MA", "MAVAL - MAA", "MANDI BAMORA - MABA", "MAHBUBABAD - MABD", "MATANA BUZURG - MABG", "MACHIYALA - MAC", "MADDUR - MAD", "MAONDA - MADA", "MADHAPUR ROAD - MADP", "MATHERAN - MAE", "MANUR - MAF", "MANGALAGIRI - MAG", "MANIKGARH - MAGH", "MADHOGANJ - MAH", "MAHE - MAHE", "MAHOLI - MAHO", "MEHSI - MAI", "MAJHERGRAM - MAJ", "MALLIKPUR - MAK", "MALA - MALA", "MANTHRALAYAM RD - MALM", "MALIYA - MALX", "MANGAL MAHUDI - MAM", "MANINAGAR - MAN", "MANA - MANA", "MANDURAI - MAND", "MANWA - MANW", "MADGAON - MAO", "MORAPPUR - MAP", "MANGALURU CNTL - MAQ", "MULANUR - MAR", "MAVUR ROAD - MARD", "MGR CHENNAI CTL - MAS", "MAISAR KHANA - MASK", "MAU JN - MAU", "MAUR - MAUR", "MARIAMMANKOVIL - MAV", "MARIAHU - MAY", "MAKAKHAD - MAYA", "MAYAR - MAYR", "MANGRA - MAZ", "MORADABAD - MB", "MAHOBA - MBA", "MURSHIDABAD - MBB", "MAHANANDA BGE - MBC", "MUSTABADA - MBD", "MIRZAPUR BNKIPR - MBE", "MUNABAO - MBF", "MAIBONG - MBG", "MARWAR BAGRA - MBGA", "MOBHA ROAD - MBH", "MADHUBANI - MBI", "MANUBOLU - MBL", "MAMBALAM - MBM", "MARWAR BHINMAL - MBNL", "MAHBUBNAGAR - MBNR", "MOHIBULLAPUR - MBP", "MUMBRA - MBQ", "MADHOSINGH - MBS", "MARWAR BALIA - MBSK", "MARWAR BIRTHI - MBT", "MIRZAPUR BCHAUD - MBV", "MALWARA - MBW", "MANDI DABWALI - MBY", "MECHEDA - MCA", "MANIK CHAUREE H - MCF", "MANCHIRYAL - MCI", "MANJATTIDAL - MCJ", "MADIMANGALAM - MCL", "MACHERLA - MCLA", "MANCHILI - MCLE", "MUKUNDARAYAPURM - MCN", "MOTIHARI COURT - MCO", "MARWAR CHAPRI - MCPE", "MECHERI ROAD - MCRD", "MANCHESWAR - MCS", "MULACALACHERUVU - MCU", "MACHARYA - MCV", "MACHAVARAM - MCVM", "MACHHRIAWAN - MCY", "MAHABUANG - MCZ", "MADAR - MD", "MANDHANA JN - MDA", "MANDOR - MDB", "MADHABPUR - MDBP", "MALAD - MDD", "MANDI DIP - MDDP", "MAKHDUMPUR GAYA - MDE", "MURADI - MDF", "MANENDRAGARH - MDGR", "MANDHAR - MDH", "MADHADA - MDHA", "MUHAMMADGANJ - MDJ", "MADHUKUNDA - MDKD", "MADUKARAI - MDKI", "MODUKURU - MDKU", "MANDAL - MDL", "MUNDLANA - MDLA", "MANDAR HILL - MDLE", "MUDDALINGAHALLI - MDLL", "MUNDALARAM - MDLM", "MIDNAPORE - MDN", "MODINAGAR - MDNR", "MADHUPUR JN - MDP", "MADHOPUR PUNJAB - MDPB", "MANDAPADU - MDPD", "MODPUR - MDPR", "MADHIRA - MDR", "MEDRA - MDRA", "MANDASOR - MDS", "MADHU SUDANPUR - MDSE", "MADARIHAT - MDT", "MADURAI JN - MDU", "MANDAVAD - MDVD", "MANDAVALLI - MDVL", "MADHAVNAGAR - MDVR", "MARWAR MUNDWA - MDW", "MASAIPET - ME", "MERTA CITY - MEC", "MEDCHAL - MED", "METHAI - MEE", "MELALATHUR - MEH", "VANCHIMANIYACHI - MEJ", "MELAKKONNAKKULM - MEKM", "BMBY MARINE LNS - MEL", "MELUSAR - MELH", "MAU AIMMA - MEM", "MAHIDPUR ROAD - MEP", "MALETHU KANAK - MEQ", "METPANJRA - MER", "MADURAI EAST - MES", "MALERKOTLA - MET", "METHI TIKUR - METR", "MENDU - MEU", "MARHAURA - MEW", "MUKERIAN - MEX", "MUKURIA - MFA", "MUSTAFABAD - MFB", "MONABARI - MFC", "MAHRAULI - MFH", "MUFTIGANJ - MFJ", "MUSAFIR KHANA - MFKA", "MISRAULI - MFL", "MAHALAM - MFM", "MUZAFFARPUR JN - MFP", "MAHROI - MFQ", "MANDLA FORT - MFR", "MALAHAR - MFZ", "MODELGRAM - MG", "MORGRAM - MGAE", "MUDIGUBBA - MGB", "MUGAT - MGC", "MUGAD - MGD", "MIGRENDISA - MGE", "MANDAGERE - MGF", "MANGLIYA GAON - MGG", "MEGHPUR - MGHP", "MANIGACHI - MGI", "MULAGUNNATHUKVU - MGK", "MANGELA - MGL", "MANIGRAM - MGLE", "MANGOLPURI - MGLP", "MURAGACHA - MGM", "MCCLUSKIEGANJ - MGME", "MEGHNAGAR - MGN", "MAGNAD - MGND", "MAHISGAON - MGO", "MUNDA GOPAL ASH - MGPA", "MANGAPURAM - MGPM", "MONGHYR - MGR", "MANGROLLA - MGRL", "MEGH RAJ PURA - MGRP", "MUGHAL SARAI JN - MGS", "MAGRA HAT - MGT", "MOLAGAVALLI - MGV", "MALEGAON VYENKU - MGVK", "MAGARWARA - MGW", "MAHNGARWL DOABA - MGWD", "MAHARAJGANJ - MGZ", "MOHADI PRGN LNG - MHAD", "MAHADEVA BUZRUG - MHBG", "MASRAKH - MHC", "MHMDVD KHEDA RD - MHD", "MAHADEVPARA - MHDP", "MOHARI - MHF", "MAGHAR - MHH", "MAHESRA - MHHR", "MANIHARI - MHI", "MAHAJAN - MHJ", "MOHKHUTI - MHKT", "MAHWAL - MHL", "MAHIMBA - MHMB", "MAHANADI - MHN", "MAHPUR - MHO", "MHOW - MHOW", "MUHAMMADPUR - MHP", "MAHIYARPUR - MHPR", "MAHUDA - MHQ", "MAHENDRAGARH - MHRG", "MAHRAIL - MHRL", "MAHESPUR - MHSP", "MANJHI - MHT", "MALIHATI TBR RD - MHTR", "MANHERU - MHU", "MAHUDHA - MHUA", "MAHUVA JN - MHV", "MACHROWAR - MHWL", "MANIA - MIA", "MIANGRAM - MIAN", "MADHI - MID", "MIHRAWAN - MIH", "MAJHDIA - MIJ", "MANIKUL - MIK", "MILAK - MIL", "MANIRAM - MIM", "MIHINPURWA - MIN", "MAIKALGANJ - MINJ", "MOLISAR - MIO", "MIRHAKUR - MIQ", "MAIJAPUR - MIR", "MIRA ROAD - MIRA", "MITHA - MITA", "MARIPAT - MIU", "MIGHAUNA - MIW", "MARWAR JN - MJ", "MEJA ROAD - MJA", "MAJBAT - MJBT", "MUJNAL - MJE", "MALKAJGIRI - MJF", "MAJHAGAWAN - MJG", "MAJADA HALT - MJHL", "MAJHIARI - MJHR", "MAJRI KHADAN - MJKN", "MAKUM JN - MJN", "MAJRI NANGAL - MJNL", "MAJORDA - MJO", "MOHARAJPUR - MJP", "MANJHRA PURAB - MJPB", "MINJUR - MJR", "MAJRI JN - MJRI", "MANJROL - MJRL", "MANJESHWAR - MJS", "MAJERHAT - MJT", "MAJITHA - MJTA", "MANJHAGARH - MJV", "MARAMJHIRI - MJY", "MAJHOLA PAKARYA - MJZ", "MIRANPUR KATRA - MK", "MOKAMEH JN - MKA", "MANKATHA - MKB", "MANWALA KOT BAK - MKBH", "MAKSI - MKC", "MARKUNDI - MKD", "MAKUDI - MKDI", "MALAKHERA - MKH", "MAKHI - MKHI", "MARWAR KHARA - MKHR", "MAKKAJIPALLI - MKJ", "KODAMBAKAM - MKK", "MAKLIDRUG - MKL", "MAKRAULI - MKLI", "MARIKUPPAM - MKM", "MAKRANA JN - MKN", "MARKONA - MKO", "MANIKPUR - MKP", "MUKTAPUR - MKPR", "MALIKPETH - MKPT", "MADDIKERA - MKR", "MAKRERA - MKRA", "MACHHAKUNDA - MKRD", "MOTI KORAL - MKRL", "MAKRONIA - MKRN", "MUKTSAR - MKS", "MUKHASA PARUR - MKSP", "MOKALSAR - MKSR", "MUKHTIAR BALWAR - MKT", "MALKAPUR - MKU", "MORAK - MKX", "MEKKUDI - MKY", "MAHKEPAR ROAD - MKZ", "MALHOUR - ML", "MODNIMB - MLB", "MALKISAR - MLC", "MALIHABAD - MLD", "MADLAUDA - MLDE", "MALDA TOWN - MLDT", "MALDA COURT - MLFC", "MALHARGARH - MLG", "MALLAPPA GATE H - MLGT", "MALIYA HATINA - MLHA", "MANGALIYAWAS - MLI", "MOHANLALGANJ - MLJ", "MALKAPURAM - MLK", "MALUKA - MLKA", "MULEWAL KHAIHRA - MLKH", "MALIKPUR - MLKP", "MALTHAN - MLM", "MAILANI - MLN", "MULUND - MLND", "MALUR - MLO", "MALLAPUR - MLP", "MALIPUR - MLPR", "MALKERA JN - MLQ", "MALKHED - MLR", "MALASA - MLS", "MALLASANDRA - MLSA", "MALSAR - MLSR", "MALSAILU - MLSU", "MALATIPATPUR - MLT", "MALATAJ - MLTJ", "MELATTUR - MLTR", "MALUGUR - MLU", "MALLARPUR - MLV", "MALLANWAN - MLW", "MAULA ALI - MLY", "MELNARIYAPANUR - MLYR", "MALARNA - MLZ", "BMBY MAHIM JN - MM", "MUHAMMADABAD - MMA", "MAHMUDABAD AVDH - MMB", "MAHAMANDIR - MMC", "MAHESHMUNDA - MMD", "MUTHALAMADA - MMDA", "MUL MARORA - MME", "MADHYAMGRAM - MMG", "MAHADANAPURAM - MMH", "MARIYAMANAHALLI - MMI", "MADURANTAKAM - MMK", "MADAN MAHAL - MML", "MAHUAMILAN - MMLN", "MANDAPAM - MMM", "BMBY MAHIM CBO - MMO", "MAMBALAPPATTU - MMP", "MANTAPAMPALLE - MMPL", "MANMAD JN - MMR", "MANDASA ROAD - MMS", "MUGMA - MMU", "MAHALI MARUP - MMV", "MARWAR MATHANYA - MMY", "MANDAMARI - MMZ", "MINAMBAKKAM - MN", "MANKAR - MNAE", "MADANKATA - MNC", "MONACHERRA - MNCR", "MUNDERWA - MND", "MANDIR HASAUD - MNDH", "MENDIPATHAR - MNDP", "MANDI DHANAURA - MNDR", "MANDAWARIYA - MNDV", "MANSI JN - MNE", "MANDA ROAD - MNF", "MUNIGUDA - MNGD", "MOHAN NAGAR - MNGR", "MOTA MIYA MNGRL - MNGV", "MINDHA - MNHA", "MAJHAIRAN HMCHL - MNHL", "MANOHARGANJ - MNJ", "MANJHLEPUR - MNJR", "MIYONKA BARA - MNKB", "MANKHURD - MNKD", "MALLANKINAR - MNKR", "MINCHNAL - MNL", "MANAMADURAI JN - MNM", "MANI MAU - MNMU", "MEHNAR ROAD - MNO", "MANANPUR - MNP", "MINAPUR - MNPR", "MUNGILIPATTU - MNPT", "MAINPURI - MNQ", "MAKKHANPUR - MNR", "MANSHAHI - MNS", "MANAKSAR - MNSR", "MULANTURUTTI - MNTT", "MUNDIKOTA - MNU", "MANNANUR - MNUR", "MUNGAOLI - MNV", "MANGANALLUR - MNX", "MANKARAI - MNY", "MANANI - MNZ", "MOHOL - MO", "MANOPAD - MOA", "MANOHARABAD - MOB", "MOABUND - MOBD", "MORAMPUDI - MOD", "MONDH - MOF", "MOHIUDDINNAGAR - MOG", "MOGA - MOGA", "MORI BERA - MOI", "MULI ROAD - MOL", "MAMAN - MOM", "MUDDANURU - MOO", "MOHITNAGAR - MOP", "MOHANPURA - MOPR", "MOR - MOR", "MORAIYA - MORA", "BB MHDALI RD CB - MORD", "MALOUT - MOT", "MOTA - MOTA", "MOTICHUR - MOTC", "MOTIGANJ - MOTG", "MOTH - MOTH", "MANOHARPUR - MOU", "MANANWALA - MOW", "MORAN - MOX", "MOHRI - MOY", "MUZAFFARNAGAR - MOZ", "MANAPARAI - MPA", "MUTTAMPATTI - MPC", "MADPUR - MPD", "MALATIPUR - MPE", "MUIRPUR ROAD - MPF", "MANPUR NAGARIA - MPG", "MUNDHA PANDE - MPH", "MELPATTI - MPI", "MADANPUR - MPJ", "CHENNAI PARK - MPK", "MADANAPALLE RD - MPL", "MAHIPAL - MPLE", "MINNAMPALLI - MPLI", "MARTHIPALAYAM - MPLM", "MAHIPAL ROAD - MPLR", "MUKTAPURAM - MPM", "MADHYAMPUR - MPN", "MANPUR JN - MPO", "MATHURAPUR RD - MPRD", "MANGALAMPETA - MPT", "MEDAPADU - MPU", "MAINPURI KACHRI - MPUE", "MERPANAIKKADU - MPX", "MURARPUR - MPY", "MATODA - MQA", "MUNDKA - MQC", "MOHAMMADKHERA - MQE", "MILANGARH - MQG", "MARADAM HALT - MQJ", "MIRKHAL - MQL", "MANYAMKONDA - MQN", "MUNROTURUTTU - MQO", "MAKRANDPUR - MQP", "MARKAHANDI U HT - MQQ", "MALKHAID ROAD - MQR", "MALSIAN SHAHKHT - MQS", "MURUKKAMPUZHA - MQU", "MALLANNAGAR - MQW", "MERALGRAM - MQX", "MOTA JADRA - MQZ", "MARTUR - MR", "MORENA - MRA", "MUNIRABAD - MRB", "MURIBAHAL - MRBL", "MARICHETHAL - MRC", "MANUND - MRD", "MORDAR - MRDD", "MERAMANDOLIL - MRDL", "MANAURI - MRE", "MARPALLI - MRF", "MARGHERITA - MRG", "MIRYALAGUDA - MRGA", "MAURIGRAM - MRGM", "MARMAGAO - MRH", "MORANHAT - MRHT", "MURLIGANJ - MRIJ", "MIRAJ JN - MRJ", "MARKAPUR ROAD - MRK", "MAROLI - MRL", "MAMANDURU - MRM", "MORWANI - MRN", "MORINDA - MRND", "MARAMPALLI - MRPL", "MATHURAPUR MOR - MRPM", "NAGANSUR - NGS", "PAPPINISSERI - PPNS", "PANPOSH - PPO", "PIPAR ROAD JN - PPR", "PIPILIYA ROAD - PPS", "PIRPAINTI - PPT", "PUSHPATTUR - PPTR", "PIPARPUR - PPU", "PRATAPGANJ - PPV", "PACHPERWA - PPW", "PAPATAPALLI - PPY", "PEDDAMPET - PPZ", "PIPLA HALT - PQA", "PRANPUR ROAD - PQD", "PINDKEPAR HALT - PQH", "PINDIAL - PQL", "PAKKAM - PQM", "PARIAWAN K.K.RD - PQN", "PARK CIRCUS - PQS", "PUNIYAVANT - PQT", "PARHANA MAU - PQU", "PABLI KHAS - PQY", "PUNDIBARI - PQZ", "BOMBAY PAREL - PR", "PALLA ROAD - PRAE", "PAROR - PRAR", "PARBATI - PRB", "PRATAP BAGH - PRBG", "PARSA BAZAR - PRBZ", "PERECHERLA - PRCA", "PARADOL - PRDL", "PAHARA - PRE", "PARSIPUR - PRF", "PRAYAG - PRG", "PERUNGULATTUR - PRGL", "PARGOTHAN - PRGT", "POWERPET - PRH", "PATHRI - PRI", "PRANTIJ - PRJ", "PARKHAM - PRK", "PARIKHA - PRKA", "POWERKHEDA - PRKD", "PURUA KHERA - PRKE", "PARKANHATTI - PRKH", "PARIKKAL - PRKL", "POLUR - PRL", "PARLI VAIJNATH - PRLI", "PIRUMADARA - PRM", "PARAUNA - PRN", "PURNEA JN - PRNA", "PURNIA COURT - PRNC", "PERINAD - PRND", "PRITAM NAGAR - PRNG", "PAHARPUR - PRP", "PURULIA JN - PRR", "PANDRASALI - PRSL", "PARSA NAGAR - PRSN", "PRASADPUR - PRSP", "PAHARSAR - PRSR", "PANRUTI - PRT", "PIRTALA - PRTL", "PRATAPNAGAR - PRTN", "PARTAPUR - PRTP", "PARLU - PRU", "PRITHWIRAJPUR - PRUR", "PUKKIRIVARI - PRV", "PAREWADI - PRWD", "PARAIYA - PRY", "PARSA - PRZ", "PARAS - PS", "PALASA - PSA", "PURBASTHALI - PSAE", "PARSABAD - PSB", "PARSODA - PSD", "PASIVEDALA - PSDA", "PUSAULI - PSE", "PATRASAF - PSF", "PATASAHI - PSJ", "PARADSINGA HALT - PSK", "PARISAL - PSL", "PASALAPUDI - PSLP", "PALASTHALI - PSME", "PARSENDI - PSN", "PALSORA MAKRAWA - PSO", "PASRAHA - PSR", "PADSALI - PSS", "POSOTIA - PST", "PARSNEU - PSV", "PTNSNGI TWN HLT - PSX", "PARSAUNI - PSZ", "PATLI - PT", "PATIALA - PTA", "PATULI - PTAE", "PATTAMBI - PTB", "PETLAD JN - PTD", "PATIALA CANT - PTE", "PALTA - PTF", "PATRANGA - PTH", "PATIALI - PTI", "PODANUR JN - PTJ", "PATHANKOT - PTK", "PATHARKANDI - PTKD", "POTKAPALLI - PTKP", "PATILADAHA - PTLD", "PATHAULI - PTLI", "PADALAM - PTM", "PATAN - PTN", "PATELNAGAR - PTNR", "PATAL PANI - PTP", "PETRAPOL - PTPL", "PRATTIAPADU - PTPU", "PATDI - PTR", "PATAUDI ROAD - PTRD", "PATARA - PTRE", "PATHRALA - PTRL", "PATHROT - PTRT", "PATRATU - PTRU", "PATANSAONGI - PTS", "PUTALAPATTU - PTT", "PARTUR - PTU", "PATWARA - PTWA", "PATIYARA - PTYR", "PATSUL - PTZ", "PATCHUR - PU", "PULLA - PUA", "PUDUCHATIRAM - PUC", "PHANDA - PUD", "PUDI - PUDI", "PALARI - PUE", "PAUTA - PUF", "PUNGGUDI - PUG", "PUDUKAD - PUK", "RAMPURA PHUL - PUL", "PALLIPPURAM - PUM", "PENUMARRU - PUMU", "PUNDI - PUN", "PUNE JN - PUNE", "PIR UMROD - PUO", "PURANIGUDAM - PUQ", "PURI - PURI", "PHUSRO - PUS", "PUTTUR - PUT", "PUNALUR - PUU", "PATUWAS MEHRANA - PUW", "PARASIA - PUX", "PHULAGURI - PUY", "PALLAVARAM - PV", "PEDDAVADLAPUDI - PVD", "PAVAGARH - PVG", "PERAVURANI - PVI", "PASUPATIKOVIL - PVL", "PAVUNUR - PVN", "PARVATIPURAM - PVP", "PARVATIPURAM TN - PVPT", "PANDHARPUR - PVR", "PIRAVAM ROAD - PVRD", "PARAVUR - PVU", "PARVEZPUR - PVZ", "PIRWA - PW", "PADWANIYA - PWI", "PALWAL - PWL", "PILWAL ROAD - PWR", "PHULWARI SHARIF - PWS", "PALPARA - PXR", "PERUNDURAI - PY", "PEDAPARIYA - PYA", "PALLIYADI - PYD", "PRAYAG GHAT - PYG", "PANDIYAPURAM - PYM", "PAYYOLI - PYOL", "PRAYAGPURA - PYQ", "PALAYASIVARAM - PYV", "PEYANAPALLI - PYX", "PALAVANTHANGAL - PZA", "QUBARWALA - QBW", "QADIAN - QDN", "KOLAGHAT - QGT", "QUILANDI - QLD", "KULEM - QLM", "KOLLAM JN - QLN", "KAYAMSAR - QMRS", "KILA RAIPUR - QRP", "QUARRY SDG - QRS", "KANSRAO - QSR", "QUATABPUR - QTP", "KUCHESAR ROAD - QXR", "RAIPUR JN - R", "RAMPARDA - RA", "BARARA - RAA", "RAIGIR - RAG", "RAHA - RAHA", "RAIBHA - RAI", "RAJPIPLA - RAJ", "RAJUR - RAJR", "RAMKOT - RAK", "RETHORAKALAN - RAKL", "REPALLE - RAL", "RAMAPURAM - RAM", "RAMALPUR - RAMR", "RAMLING - RANG", "RANI - RANI", "RAS - RAS", "RAU - RAU", "RAY - RAY", "RAYA - RAYA", "RAMBHA - RBA", "RAHIMABAD - RBD", "RAYBAG - RBG", "ROBERTS GANJ - RBGJ", "RAJBANDH - RBH", "RAIBOJHA - RBJ", "REOTI B KHERA - RBK", "RAE BARELI JN - RBL", "RAGHUBANS NAGAR - RBN", "RAM BISHANPUR - RBQ", "RIBADA - RBR", "RUPBAS - RBS", "RAMBHADDARPUR - RBZ", "RAICHUR - RC", "RENTACHINTALA - RCA", "RAJCHANDRAPUR - RCD", "RACHAGUNNERI - RCG", "RICHUGHUTU - RCGT", "RAMACHANDRAPUR - RCP", "RATAR CHATTAR - RCR", "RAMCHAURA - RCRA", "RAIPUR CITY - RCT", "RAM DAYALU NAGR - RD", "RIKHABDEV ROAD - RDD", "RATHDHANA - RDDE", "RUNDHI - RDE", "RADHAGAON - RDF", "RAYADRUG - RDG", "RADHANPUR - RDHP", "KARDI - RDI", "RANDHEJA - RDJ", "RASHODPURA KHRI - RDK", "RUDAULI - RDL", "RAMAGUNDAM - RDM", "RUDAIN - RDN", "RADHIKAPUR - RDP", "RAMDEVRA - RDRA", "RAMDAS - RDS", "RAVTHA ROAD - RDT", "RADHAMOHANPUR - RDU", "RAMPUR DUMRA - RDUM", "RADHA BALAMPUR - RDV", "REDIPALAYAM - RDY", "REWARI - RE", "RECHNI ROAD - RECH", "REGUPALEM - REG", "RITHI - REI", "REJINAGAR - REJ", "REDDIGUDEM - REM", "REN - REN", "REDDIPALEM - REP", "RASULL - RES", "RENTIA - RET", "REWA - REWA", "RAFALESHWAR - RF", "RAFIGANJ - RFJ", "RAFINAGAR - RFR", "RAJGHAT NARORA - RG", "RAMGANGA - RGB", "RAJGIR - RGD", "RAYAGADA - RGDA", "RAMGARHWA - RGH", "RAMGIRI - RGI", "RAIGANJ - RGJ", "RENGALI - RGL", "RANGAPURAM - RGM", "ROTEGAON - RGO", "RAGHUNATHPALLI - RGP", "RAGHAVAPURAM - RGPM", "RAIGADH ROAD - RGQ", "RINGAS JN - RGS", "RAJGHAT - RGT", "RAGAUL - RGU", "RAGHOPUR - RGV", "RAGHUNATHBARI - RGX", "RANAGHAT JN - RHA", "RAKHA MINES - RHE", "RAJGARH - RHG", "RAKHI - RHI", "ROSHANPUR - RHN", "ROHINI - RHNE", "RAJHURA - RHR", "RAHON - RHU", "RHRA GHALUGHRA - RHW", "RIDHORE - RID", "RAIGARH - RIG", "RIGA - RIGA", "RAJIM - RIM", "NAGAPPATTINAM - NGT", "NEW GITLDADA JN - NGTG", "NAUGANWAN - NGW", "NOGANWAN - NGWN", "NIGAN - NGX", "S K NAGJIHARI - NGZ", "NAIHATI JN - NH", "NOH BACHHAMDI - NHB", "NIHASTA HALT - NHF", "NIHALGARH - NHH", "NAHARKATIYA - NHK", "NANDOL DEHEGAM - NHM", "NIGOHAN - NHN", "NOHAR - NHR", "NALHATI JN - NHT", "NARTHAR - NHX", "NAGANAHALLI - NHY", "NAYDONGRI - NI", "JANJGIR NAILA - NIA", "NIDUR - NID", "NAIGAON - NIG", "NILAMBUR ROAD - NIL", "NIMTITA - NILE", "NIMDIH - NIM", "NIZAMPUR - NIP", "NIGAURA - NIQ", "NAINPUR JN - NIR", "NIRA - NIRA", "NAIKOT - NIT", "NABIPUR - NIU", "NAGJUA - NJA", "N J RAMANAL - NJM", "NAOJAN - NJN", "NEW JALPAIGURI - NJP", "NAGER COIL TOWN - NJT", "NASIK ROAD - NK", "NAGRAKOTA - NKB", "NEKONDA - NKD", "NAKKANADODDI - NKDO", "NARKATIAGANJ JN - NKE", "NATHUKHERI - NKH", "NAIKHERI - NKI", "NEW KATNI JN - NKJ", "NARIKKUDI - NKK", "NALIKUL - NKL", "NAMKON - NKM", "NYOLI KALAN - NKN", "NIRAKARPUR - NKP", "NARKETPALLI - NKPL", "NIMAR KHERI - NKR", "NANCHERLA - NLA", "NILAMBAZAR - NLBR", "NALANDA - NLD", "NALGONDA - NLDA", "NANGAL DAM - NLDM", "NILESHWAR - NLE", "NAULTHA - NLH", "NAMLI - NLI", "NAVLAKHI - NLK", "NILOKHERI - NLKR", "NALLI - NLL", "NAILALUNG - NLN", "NULEMURU - NLNR", "NORTH LAKHIMPUR - NLP", "NALLAPADU - NLPD", "NELLORE - NLR", "NELLORE SOUTH - NLS", "NALBARI - NLV", "NAIMISHARANYA - NM", "NIRMALI - NMA", "N MAYURBHANJ RD - NMBR", "NOMODA - NMD", "NIMIAGHAT - NMG", "NMG TAMDALGE - NMGT", "NIMACH - NMH", "NIM KA THANA - NMK", "NELLIMARIA - NML", "NEW MISAMARI - NMM", "NAMANASAMUDRAM - NMN", "NEDI MOLLYANUR - NMO", "NIMPURA - NMP", "NAMTIALI - NMT", "NUMAISNGAH - NMUE", "NEW MAYNAGURI - NMX", "NEW MAL JN - NMZ", "NANDURA - NN", "NAUGACHIA - NNA", "NONERA - NNE", "NARANGI - NNGE", "NANAKSAR - NNKR", "NARNAUL - NNL", "NANNILAM - NNM", "NANDANI LAGUNIA - NNNL", "NANGLOI - NNO", "NANPARA JN - NNP", "NONAPAR - NNPR", "NARAYANPUR - NNR", "NANGAL MUNDI - NNU", "NRYNPUR TATWAR - NNW", "NANAUTA - NNX", "NOSARIA - NOA", "NOBANDA - NOB", "NIGOHI - NOH", "NARIAOLI - NOI", "NOKHA - NOK", "NIYOL - NOL", "NOLI - NOLI", "NOAMUNDI - NOMD", "NEW ALIPURDUAR - NOQ", "NOYAL - NOY", "NAWAPARA ROAD - NPD", "NURPURA - NPH", "NIPANIA - NPI", "NAGALAPALLE - NPL", "NELLAIKUPPAM - NPM", "NEPANAGAR - NPNR", "NEPALGANJ ROAD - NPR", "NAPASAR - NPS", "NARASINGAMPET - NPT", "NADIAPUR - NPU", "NIPANI VADGAON - NPW", "NARINDARPURA - NPX", "NEW DOMOHANI - NQH", "NARAJ MARTHAPUR - NQR", "NIPHAD - NR", "NUNKHAR - NRA", "NARODA - NRD", "NAGIREDDIPALLI - NRDP", "NANDALUR - NRE", "NERGUNDI - NRG", "NARANJIPUR - NRGR", "NAHARGARH - NRH", "NARAINA - NRI", "NARAIKKINAR - NRK", "NARI KHETRI - NRKE", "NARKOPI - NRKP", "NARKHER - NRKR", "NERAL - NRL", "NIROLGRAM - NRLM", "NORLA ROAD - NRLR", "NURMAHAL - NRM", "NARHAN - NRN", "NURNAGAR - NRNR", "NAKODAR JN - NRO", "NARI ROAD - NROD", "NARSIPATNAM RD - NRP", "NARAYNPUR ANANT - NRPA", "NARAYANPET ROAD - NRPD", "NRP MURLI HALT - NRPM", "NAGARUR - NRR", "NAGARIA SADAT - NRS", "NARASMHAPURA - NRSP", "NARASARAOPET - NRT", "NARESHWAR ROAD - NRUR", "NARIYAR - NRV", "NARAINA VIHAR - NRVR", "NARWANA JN - NRW", "NARWASI - NRWI", "NOADAR DHAL - NRX", "NOWROZABAD - NRZB", "NARASAPUR - NS", "NISHANGARA - NSA", "NASIRABAD - NSD", "NASIBPUR - NSF", "NIKURSINI - NSI", "NASKHAL - NSKL", "NAGARSOL - NSL", "NASIRPUR HALT - NSN", "NASHIPUR ROAD - NSO", "NALLA SOPARA - NSP", "N S DOABA JN - NSS", "NISUI - NSU", "NPA SHVRAMPALLI - NSVP", "NASWADI - NSW", "NARSIPURAM HALT - NSX", "NATHPURA - NT", "NETRA - NTA", "NARTHAMALAI - NTM", "NAR TOWN - NTN", "NITTUR - NTR", "NATHAPETTAI - NTT", "NIGATPUR - NTU", "NAUTANWA - NTV", "NANJANGUD TOWN - NTW", "NETAWAL - NTWL", "NATHWANA - NTZ", "NARSINGHPUR - NU", "NUA - NUA", "NURABAD - NUB", "NAVAGADH - NUD", "NAUGARH - NUH", "NUJELLA - NUJ", "NURPUR ROAD - NUPR", "NAGAR UNTARI - NUQ", "NARELA - NUR", "NAGALWANCHA - NVC", "NAVALGUND RD - NVD", "NAGAVANGALA - NVF", "NAWAGAON - NVG", "NEYVELI - NVL", "NAVALGAON - NVLN", "NAVSARI - NVS", "NAVIPET - NVT", "NAVALUR - NVU", "NALWAR - NW", "NAGARWARA - NWA", "NIWAS ROAD - NWB", "NAYA NAGAR - NWC", "NAWADAH - NWD", "NAWALGARH - NWH", "NANWAN - NWN", "NAUPADA JN - NWP", "NIWAR - NWR", "NAVAPUR - NWU", "NIROL - NXL", "NUAGAON - NXN", "NAGSAR - NXR", "NARAYANGARH - NYA", "NAYANDAHALLI - NYH", "NELLAYI - NYI", "NAYA KHARADIA - NYK", "NAINI - NYN", "NAYAGAON - NYO", "NAYUDUPETA - NYP", "NAYATOLA - NYT", "NEYYATTINKARA - NYY", "NIZAMABAD - NZB", "NUZVID - NZD", "NAZARBAG - NZG", "H NIZAMUDDIN - NZM", "NAZIRA - NZR", "NAZARETH - NZT", "OBALAPURAM - OBM", "OBRA DAM - OBR", "OBULAVARIPALLI - OBVP", "OBHANIYA CHACHE - OCH", "OCHIRA - OCR", "OD - OD", "OODLABARI - ODB", "ODDANCHATRAM - ODC", "OBAIDULLA GANJ - ODG", "ODHA - ODHA", "ONDAGRAM - ODM", "ODUR - ODUR", "ODELA - OEA", "OEL - OEL", "ONGOLE - OGL", "OORGAUM - OGM", "OKHLA - OKA", "OKHA MADHI - OKD", "OKHA - OKHA", "OTTAKKAL - OKL", "OLAKUR - OLA", "OLAPUR - OLP", "OLLUR - OLR", "OMKARESHWAR RD - OM", "OMALUR - OML", "OLD MALDA - OMLF", "UNNAO JN - ON", "AUNLAJORI JN - OND", "COONOOR - ONR", "UPPAL - OPL", "ORAI - ORAI", "ORCHHA - ORC", "ORGA - ORGA", "ODDARAHALLI - ORH", "ORKI - ORKI", "ORR - ORR", "ORWARA - ORW", "AUSA ROAD - OSA", "OSIYAN - OSN", "OSRA - OSRA", "OTTAKOVIL - OTK", "OATING - OTN", "OTTAPPALAM - OTP", "MOTURU - OTR", "OTIVAKKAM - OV", "WARIA - OYR", "PATAS - PAA", "PATTABIRAM - PAB", "PALIYARD ROAD - PAC", "PARDI - PAD", "PALANA - PAE", "PENNADA AGRHRM - PAGM", "PABAI - PAI", "PARAJ - PAJ", "PAKALA JN - PAK", "PALASNER - PAL", "PALI - PALI", "PALUR - PALR", "PANAPAKAM - PAM", "PANAGARH - PAN", "PANDAVAPURA - PANP", "PANOLI - PAO", "PITHAPURAM - PAP", "PADIYA NAGLA - PAQ", "PANDHURNA - PAR", "PATHRAD - PARD", "PASUR - PAS", "PARASHSHALA - PASA", "PATA - PATA", "PURNA JN - PAU", "PEDANA - PAV", "PAVI - PAVI", "P AVATAPALLE - PAVP", "PANDABESWAR - PAW", "PATTI - PAX", "PAYYANUR - PAY", "PAYANGADI - PAZ", "PUNTAMBA - PB", "PIARDOBA - PBA", "PARBATONIA - PBB", "PARVATSAR CITY - PBC", "P BRAHMADEVAM H - PBD", "PILIBHIT JN - PBE", "PARTAPGARH JN - PBH", "PBNWA JASMHNDAR - PBJM", "PMBAKVL SHANDY - PBKS", "PATHSALA - PBL", "PAMBAN JN - PBM", "PARBHANI JN - PBN", "PEMBARTI - PBP", "PORBANDAR - PBR", "PURAB SARAI - PBS", "PALIBA - PBV", "PANTNAGAR - PBW", "PORABAZAR - PBZ", "PACHORA JN - PC", "PRACHI ROAD JN - PCC", "PACHAGAON - PCGN", "PACHHAPUR - PCH", "PACHRUKHI - PCK", "PACHACHAKUPAM - PCKM", "PULICHERLA - PCL", "PANCHALAM - PCLM", "PAVURCHUTRAM - PCM", "PACHARMALIKPURA - PCMK", "PANCH PIPILA - PCN", "PALAYANKOTTAI - PCO", "PALSAP - PCP", "PICHKURIRDHAL - PCQ", "PANCHRA - PCR", "PANCHTALAVDA RD - PCT", "PUTLACHERUVU - PCU", "PALAKKODU - PCV", "PERAMBUR CRG WK - PCW", "PAGLA CHANDI - PCX", "PIPAR CITY - PCY", "POCHARAM - PCZ", "PHARADAHAN - PD", "PUNDOOAH - PDA", "PINDRAI - PDE", "PADAMPUR - PDF", "PARADGAON - PDG", "PONDUGULA - PDGL", "PUDUNAGARAM - PDGM", "PADHEGAON - PDGN", "PDGM GANESHPURA - PDGP", "BOMBAY GR - PDGR", "PADADHARI - PDH", "PALASHARI - PDI", "PHIDING - PDJ", "PEDANYKNPALAYAM - PDKM", "PUDUKKOTTAI - PDKT", "PENDEKALLU - PDL", "PANDIKANMOI - PDM", "PEDDADINNE - PDNA", "PADNUR - PDNR", "POODOOR - PDO", "PADSE - PDP", "PADMAPUKAR - PDPK", "PEDDAPALLI - PDPL", "PURANDARPUR - PDPR", "PADLA - PDQ", "PAYAGPUR - PDR", "PADRA - PDRA", "PINDRA ROAD - PDRD", "PINDARSI - PDS", "PEDDASANA - PDSN", "PENDURTI - PDT", "PONDURU - PDU", "PANDARAVADAI - PDV", "PANDAUL - PDW", "PAYRADANGA - PDX", "PUDUCHERRY - PDY", "PILIODA - PDZ", "PETTAI - PEA", "PIPARDAHI - PED", "PATERHI - PEE", "PATHARDIH JN - PEH", "PERANI - PEI", "POLIREDDIPALEM - PEL", "PERALAM JN - PEM", "PHEPHNA JN - PEP", "PERAMBUR - PER", "PHESAR - PES", "PERASHSHANNUR - PEU", "PERAMBUR LCO WK - PEW", "PHAPHAMAU JN - PFM", "PACHOR ROAD - PFR", "POTHAHI - PFT", "PADUA - PFU", "PERGAON - PG", "PAGARA - PGA", "PANCHGACHIA - PGC", "PAGIDIPALLI - PGDP", "PENGANGA - PGG", "PARPANANGADI - PGI", "PILI BANGAN - PGK", "PAGDHAL - PGL", "PERUGAMANI - PGN", "PUGALUR - PGR", "PIDUGURALLA - PGRL", "PALAKKAD JN - PGT", "PALGHAT TOWN - PGTN", "PADUGUPADU - PGU", "PHAGWARA JN - PGW", "PERUNGUZHI - PGZ", "PATHARIA - PHA", "PANCHOT - PHC", "PHAPHUND - PHD", "PAHALEJA HALT - PHE", "PANIKHAITI - PHI", "PUNARAKH - PHK", "PATAPATNAM - PHM", "POKHRAYAN - PHN", "PARDHANDE - PHQ", "PHILLAUR JN - PHR", "PANCH RUKHI - PHRH", "FEROZESHAH - PHS", "PAHUR - PHU", "PIRTHIGANJ - PHV", "PEHOWA ROAD - PHWR", "PATHAKPUR - PHX", "PHARIHA - PHY", "PIPRAIGAON - PIA", "PARICHA - PIC", "PIPARDI - PID", "PARHIHARA - PIH", "PIJ - PIJ", "PILER - PIL", "PILOL - PIO", "PIPLIA - PIP", "PISKA - PIS", "PALITANA - PIT", "PINGLI - PIZ", "PEPPEGANJ - PJ", "PAJIAN - PJA", "PANIAJOB - PJB", "PIRJHALAR - PJH", "PANJ KOSI - PJK", "PANJWARA ROAD - PJLE", "PANJHAN - PJN", "PANJIPARA - PJP", "PANGRI - PJR", "PAKNI - PK", "PRADHANKHUNTA - PKA", "PATHARKHOLA S - PKB", "PAKRA - PKC", "PENUKONDA - PKD", "PILU KHERA - PKDE", "PIMPAR KHED - PKE", "POKLA - PKF", "PHAKHOAGRAM - PKGM", "PAKKI - PKK", "PAPINAYAKNAHALI - PKL", "PRYANKNPALAYAM - PKM", "PAKHNA - PKNA", "POKHARNI NRSNHA - PKNS", "PALAKOLLU - PKO", "PEDDAKURAPADU - PKPU", "PATTIKKAD - PKQ", "PAKUR - PKR", "PARSA KHERA - PKRA", "PAKARA ROAD - PKRD", "PATTUKOTTAI - PKT", "PANSKURA - PKU", "PILKHUA - PKW", "PAKHRULI - PKX", "PILKHANI - PKY", "PPLI PKHI KALAN - PKZ", "BOMBAY L.PAREL - PL", "PALIA - PLA", "PALSIT - PLAE", "PALDHI - PLD", "PILUDRA - PLDR", "PIPLEE - PLE", "PIALI - PLF", "PALGHAR - PLG", "PALIGARH - PLGH", "PARLAKIMIDI - PLH", "PETTAIVAYATALAI - PLI", "PALEJ - PLJ", "PHULWARTANR - PLJE", "PALIA KALAN - PLK", "PALAKKANUTHU - PLKN", "PARLI - PLL", "PANELI MOTI - PLM", "PILAMEDU - PLMD", "PALAMPUR HMCHL - PLMX", "PALANI - PLNI", "PULGAON JN - PLO", "PHULPUR - PLP", "PALAPPURAM - PLPM", "PULAKURTHI - PLQ", "PIPALSANA - PLS", "PALASINGI - PLSG", "PALSANA - PLSN", "PIRTHALA LLAUDA - PLT", "PATAKOTTACHERU - PLU", "PALSI - PLV", "PALLEVADA - PLVA", "PALUVAYI - PLVI", "PINGLESHWAR - PLW", "PLASSEY - PLY", "PALAM - PM", "PULLAMBADI - PMB", "PAMIDI - PMD", "PANDU MAWAS - PME", "PIMPALGAON - PMGN", "PARAO MAHNA - PMH", "PAIMAR - PMI", "PARAMAKKUDI - PMK", "PAPANASAM - PML", "PARSEHRA MAL - PMM", "PAMAN - PMN", "PANDOLI - PMO", "PIMPRI - PMP", "PREMPUR - PMPR", "PARNA NAND - PMQ", "PITAMBARPUR - PMR", "PARMALKASA - PMS", "PULLAMPET - PMT", "PARMANANDPUR - PMU", "PALI MARWAR - PMY", "PANSAR - PN", "PANBARI - PNB", "PATNA JN - PNBE", "PATNA SAHEB - PNC", "PANCHEBERIA - PNCB", "PENDRA ROAD - PND", "PACHANDI - PNDI", "PENNADAM - PNDM", "PANDILLAPALLI - PNDP", "PRANTIK - PNE", "PANGAON - PNF", "PANANGUDI - PNGI", "PANCHGRAM - PNGM", "PINGORA - PNGR", "PANHAI - PNHI", "PURAINI - PNI", "PADRIGANJ - PNJ", "PANKI - PNK", "PANYAM - PNM", "PANJUM O A - PNMA", "PARASNATH - PNME", "PANI MINES - PNN", "PANIPAT JN - PNP", "PUNKUNNAM - PNQ", "PANIARA - PNRA", "PUNSIA - PNSA", "PANITOLA - PNT", "PALANPUR JN - PNU", "PANEVADI - PNV", "PANVEL - PNVL", "PUNDHAG - PNW", "PACHWAN - PNWN", "PANDI - PNY", "PARANGIPETTAI - PO", "PALLIKONA - POA", "PORDA BHATERA - POD", "PIPARSAND - POF", "POHE - POHE", "PONPADI - POI", "POKRAN - POK", "PEOKOL - POKL", "PINJRAPOL - POL", "PUNTHOTTAM - POM", "PONNERI - PON", "POTLAPADU - POO", "PIPALDA ROAD - POR", "POTHIA - POT", "PADRAUNA - POU", "POLLACHI JN - POY", "POTUL - POZ", "PURANPUR - PP", "PIPRA - PPA", "PARTABPURA - PPB", "PIPRAICH - PPC", "PIPLOD JN - PPD", "PANDU PINDARA - PPDE", "PAINTEPUR - PPE", "PAPRERA - PPEA", "PIPLAJ - PPF", "PIPLODA BAGLA - PPG", "PIPRI DIH - PPH", "PIPARIYA - PPI", "POPHLAJ - PPJ", "PACHPOKHARIA - PPK", "PIPLI - PPLI", "PHIRANGIPURAM - PPM", "PUNPUN - PPN", "RISHRA - RIS", "RAWAT GANJ - RJ", "RAJANAGAR - RJA", "RAJAPUR - RJAP", "RAJSITAPUR - RJC", "RAJ PARDI - RJD", "RAJGRAM - RJG", "RAJ ATHGARH - RJGR", "RAJAWARI - RJI", "RAJA KA SAHASPR - RJK", "RAJMAHAL - RJL", "RAJOMAJRA - RJMA", "RAJMALPUR ROAD - RJMP", "RAJ NANDGAON - RJN", "RAJENDRA PUL - RJO", "RAZAMPETA - RJP", "RAJAPALAYAM - RJPM", "RAJENDRANAGAR - RJQ", "RAJALDESAR - RJR", "RAJIYASAR - RJS", "RAJKOT JN - RJT", "RAJULA CITY - RJU", "RAJEVADI - RJW", "RAJAHMUNDRY - RJY", "ROORKEE - RK", "RAIKA BAGH - RKB", "RUKADI - RKD", "RATTOKE GUDWARA - RKG", "RAKHIYAL - RKH", "RAMKANALI JN - RKI", "RATANGRH KNKWAL - RKK", "RAMKOLA - RKL", "RAJA KI MANDI - RKM", "RATI KA NAGLA - RKN", "RMKRSHNAPRM GTE - RKO", "RANIKUND RARAH - RKR", "SARAI RANI - RKS", "RISHIKESH - RKSH", "RAJKHARSAWAN JN - RKSN", "RUKHI - RKX", "KOTHARIYA - RKY", "RAJKIAWAS - RKZ", "RAJULA JN - RLA", "RANDALA - RLD", "RELANGI - RLG", "ROHAL KHURD - RLK", "REGADIPALLI - RLL", "RAYALCHERUVU - RLO", "HARLAPUR - RLP", "RAILA ROAD - RLR", "RMNA ALBEL SNGH - RLS", "RAMANUJAMPALLI - RLX", "RAJMANE - RM", "RAMGANJ MANDI - RMA", "RAMPURA BERI - RMB", "SIRSAUL - SSL", "SASARAM - SSM", "SASON - SSN", "SANTOSHPUR - SSP", "SADASHIVAPET RD - SSPD", "SADASHIBAPUR - SSPR", "SARERI - SSR", "SHASAN ROAD - SSRD", "SASA MUSA - SSU", "SASVAD ROAD - SSV", "SARSAWA - SSW", "SADDA SINGHWALA - SSZ", "SURAT - ST", "SATNA - STA", "SHANTIPUR - STB", "SANTA CRUZ - STC", "SURAT CITY CB - STCB", "SATROD - STD", "SATADHAR - STDR", "SAGARKATTE - STE", "SIKTA - STF", "SETHAL - STH", "SATHAJAGAT - STJT", "SASTHANKOTTA - STKT", "SIMULTALA - STL", "SITHOULI - STLI", "ST THOMAS MOUNT - STM", "SITARAMPUR - STN", "SATNALI - STNL", "SITALNAGAR - STNR", "SITAPUR - STP", "SITAFAL MANDI - STPD", "SITAMPET - STPT", "SATARA - STR", "SHAITANSINGHNGR - STSN", "SATULUR - STUR", "SATYAVADA - STVA", "SAHATWAR - STW", "SATRAON - STZ", "SURAPUR - SU", "SARDIHA - SUA", "SUBHAGPUR - SUBR", "SUNAK - SUC", "SUDHANI - SUD", "SUMMADEVI - SUDV", "SULEHALLI - SUH", "SUI - SUI", "SURAINCHA - SUIA", "SARJU - SUJ", "SUJANGARH - SUJH", "SUJRA - SUJR", "SULADHAL - SUL", "SULHANI - SULH", "SUMMIT - SUM", "SUMER - SUMR", "SUNDARNA - SUND", "SURENDRANAGAR - SUNR", "SHRUNGAVARPUKTA - SUP", "SURAJPUR - SUPR", "SOLAPUR JN - SUR", "YELLAKARU - YLK", "ELLAMANCHILI - YLM", "YELHANKA JN - YNK", "ERRUPALEM - YP", "YERPEDU - YPD", "YESVANTPUR JN - YPR", "YERMARAS - YS", "YEDSHI - YSI", "YASANTAPUR - YSPM", "YEVAT - YT", "YESHWANTNAGAR - YTG", "YAVATMAL - YTL", "YAWARPURA - YVP", "JHAROLA - ZAR", "ZAHIRABAD - ZB", "ZAFARABAD JN - ZBD", "ZANKHAVAV - ZKV", "JANGAON - ZN", "ZAMANIA - ZNA", "ZINDPURA - ZNP", "ZERPUR PALI - ZP", "ZAMPANI HALT - ZPI", "ZANGALAPALLE - ZPL", "ZORAWARPURA - ZPR", "JHAJHPOR - ZR", "ZAWAR - ZW", "GOALDIH - GADH", "PORJANPUR - PRNR", "NAYAGARH - NYG", "BANSPANI - BSPX", "JAROLI - JRLI", "PEDAKAKANI HALT - PDKN", "AMB  ANDAURA - AADR", "SUKU - SUKU", "GHORMARA - GRMA", "YEULKHED - YAD", "JUCHANDRA - JCNR", "KAMAN ROAD - KARD", "KHARBAV - KHBV", "BABLAD - BBD", "GAUDGAON. - GDGN", "TARSOD - TRW", "BARGAON GUJAR - BRGJ", "SAGPHATA - SXA", "KASBE SUKENE - KBSN", "BANSINALA HALT - BNSL", "BASKATWA B. H. - BSCP", "LALBAGH - LBZ", "NATHGANJ - NGY", "CHAKARDAHA HALT - CRDA", "LALIT GRAM - LLP", "NANDLALEE HALT - NDLH", "NARPATGANJ - NPV", "SAHARSA KACHERI - SHKY", "BHOLIDIH - BLME", "CHEGRO - CEME", "SHAHAMATGANJ - SMG", "GAREA BIHAR - GRBH", "KARMABAD - KRMB", "LAL KUAN - LKU", "KHAMANON - KMNN", "PIPRALA - PFL", "BIDHAN NAGAR - BNXR", "MIRCHADHORI - MCQ", "KARAILA ROAD JN - KRLR", "SIURI - SURI", "SURELI - SURL", "SOLAPUR JN - SURM", "SURATPURA - SURP", "SURERA - SURR", "SUTLANA - SUT", "SULUR ROAD - SUU", "SUDIYUR - SUX", "SUBANSIRI - SUZ", "SIWAN JN - SV", "SUWASRA - SVA", "SAVNI - SVB", "SIWAN KACHARI - SVC", "SARWARI - SVD", "SIVADEVUNICHKLA - SVDC", "BOMBY SEWRI - SVE", "SAWALGI - SVG", "SIVAGANGA - SVGA", "SONADANGA - SVH", "SISVINHALLI - SVHE", "SAGARPALI - SVI", "SAJIYAVADAR - SVJ", "SHIVAJINAGAR - SVJR", "SIVARAKOTTAI - SVK", "SAVARKUNDLA - SVKD", "SIVAKASI - SVKS", "SEVALIYA - SVL", "SAVLI - SVLI", "SANVERDAM CHUCH - SVM", "SIVUNGAON - SVN", "SAVANUR - SVNR", "SANVRAD - SVO", "S VENKTESWRPALM - SVPM", "SRIVILLIPUTTUR - SVPR", "SIVOK - SVQ", "SEVVAPET ROAD - SVR", "SHIVANARAYANPUR - SVRP", "SHIVPURA - SVT", "SHIVATHAN - SVTN", "SHIVRAJPUR - SVU", "SEVUR - SVUR", "SRIVAIKUNTAM - SVV", "SHIVNI SHIVAPUR - SVW", "SARAI HARKHU - SVZ", "SEHRAMAU - SW", "SAHJANWA - SWA", "SEWAR - SWAR", "SANAWAD - SWD", "SIWAHA - SWDE", "SIWAITH - SWE", "SATHIN ROAD - SWF", "SIDHWAN - SWG", "SWAMIMALAI - SWI", "SIAJULI - SWJ", "SAWAI MADHOPUR - SWM", "SIWANI - SWNI", "SEWA NAGAR - SWNR", "SONWARA - SWO", "SEWAPURI - SWPR", "SANGWI - SWQ", "SONUA - SWR", "SAHAWAR TOWN - SWRT", "ANPARA - ANPR", "KRISHNASHILLA - KRSL", "SHAKTI NAGAR - SKTN", "SINGRAULI - SGRL", "RASULPURGOGAMAU - RPGU", "KESHWARI BH - KSHR", "HAMIRPUR ROAD - HAR", "SHIVRAMPUR - SWC", "SUKHISEWANIYAN - SUW", "BHADBHADAGHAT - BVB", "GUNERU BAMORI - GVB", "MAHUGARHA - MUGA", "SUNDLAK - SDLK", "SHRIKALYANPURA - SKPA", "BARCHI ROAD - BCRD", "BARELIPUR - BQM", "MORKADHANA - MKDN", "PALACHAURI - PCLI", "LARABAD BH - LRB", "YADUDIH - YDD", "NEW BALARAMPUR - NBPH", "SIRAJNAGAR  H - SRJN", "RAMKISTOPORE - RKAE", "CHOTI KHATU - CTKT", "CHITRAPUR (H) - CTTP", "RAIMEHATPUR - MTPR", "UNA HIMACHAL - UHL", "LOHARWARA - LHW", "NANDIKOOR - NAND", "FARIDAHA - FRDH", "CHERTHALA - SRTL", "ALLEPPEY - ALLP", "SANSARPUR - SNRR", "KALMITAR - KLTR", "SHEO SINGH PURA - SHNX", "MODRAN - MON", "RAMSAN - RXN", "JENAL - JNZ", "PIRDULESHA HALT - PRDH", "SHIVAJI BRIDGE - CSB", "RAM CHAURA ROAD - RMC", "DUMARIYA - DY", "DHOLBAZA - DLZ", "GOGI POTHIA - GPE", "LUCKNOW WEST (A - LNWT", "MEWA NAWADA - MWE", "BAGAHAI ROAD - BGHI", "TURKI ROAD - TZR", "BUNDI - BUDI", "MANDALGARH - MLGH", "NALIYA CANTT - NLC", "NALIYA - NLY", "NEW BHUJ - NBVJ", "BINJHOL - BNJL", "ROHAD NAGAR - ROHN", "CHAMRAURA - CHRU", "KEMRI - KEMR", "SAMAR GOPALPUR - SMF", "BUGIA - BUGY", "RATNAPUR - RNU", "HALDI ROAD - HLDD", "TIRUCHANUR - TCNR", "KHARIO P.H. - KARO", "SUWANSA - SWS", "SHIVWALA TEHU - SWT", "SANAURA - SWU", "SHAHNAGAR TMNS - SWW", "SAIDANWALA - SWX", "SAMBRE - SXB", "SONDALIA - SXC", "SIDULI - SXD", "SOBHAPUR - SXF", "SHINGATGERI - SXH", "SHAJAHANPURCORT - SXK", "SONAKHAN - SXN", "SRIKONA - SXO", "SANKOPARA - SXP", "SUAHERI - SXQ", "SERNDANUR - SXR", "SHOBHASAN - SXS", "SALEM TOWN - SXT", "SALBARI - SXX", "SIRKAZHI - SY", "SALAIA - SYA", "SARAI CHANDI - SYC", "SINDEWAHI - SYE", "SEMAI - SYF", "SAIYEDPUR BHTRI - SYH", "SINGARENI COLRS - SYI", "SAIDRAJA - SYJ", "SAIDKHANPUR - SYK", "SALPURA - SYL", "SAVALYAPURAM - SYM", "SAYAN - SYN", "SINHAN - SYQ", "SARAYAN - SYU", "SINDURWA - SYW", "SAIYID SARAWAN - SYWN", "SONAI - SYZ", "SALAWAS - SZ", "SAROTRA ROAD - SZA", "SONARDIH - SZE", "SATBAHINI - SZF", "SAONGA HALT - SZH", "SUBZI MANDI - SZM", "SHAHBAZNAGAR - SZN", "SHAHJAHANPUR - SZP", "SARUPATHAR - SZR", "SIVADI - SZV", "SILAK JHORI - SZY", "SABIRA - SZZ", "TANUR - TA", "TADLA PUSAPALLI - TAA", "TALABURU - TABU", "TATICHERLA - TAC", "TADA - TADA", "TADALI - TAE", "TARAKESWAR - TAK", "TAKAL - TAKL", "TAKU - TAKU", "TILAIVILAGAM - TAM", "TARANA ROAD - TAN", "TAMNA - TAO", "TAPANG - TAP", "TAPA - TAPA", "THARSA - TAR", "THASRA - TAS", "TUMMANAMGUTTA - TAT", "PANAMBURU - PNMB", "NISHATPURA - NSZ", "SAMRALA - SMRL", "KACHHPURA - KEQ", "GOLAPATTI - GTY", "PATOHAN - PTHD", "KARANWAS - KNWS", "PENCH - PCG", "RAGHOGARH - RGG", "SIROLIYA - SYO", "AJIT KHERI - AJKI", "DONTA - DON", "THAMLA MOGANA - TMGN", "THALLAK - THKU", "CHALLAKERE - CHKE", "JAKHALABANDHA - JKB", "MANNARGUDI - MQ", "MEGHPURTITODI - MGTD", "MHASODA DONGAR - MSDG", "LAL KALAN - LLKN", "NAGAON - NGAN", "AMONI - AONI", "RADHAKUND - RAKD", "DINA NAGAR - DNN", "SHRIDHAM - SRID", "MULLANPUR - MLX", "BEHAJ - BEHJ", "GODHA - GDHA", "PALAIYAM - PALM", "BARSANA - BARS", "JHAREDA - JREA", "C SHIVAJI MAH T - CSTM", "GAZIKA - GZKA", "ANJANI - ANO", "CHIPLUN - CHI", "MORA - MROA", "BANDRA TERMINUS - BDTS", "DESHAPRAN P.H. - DSPN", "KALYANADURGA - KYND", "VELLANKANNI - VLNK", "BURJ MOHAR - BJMA", "CHUHRIWALA DHAN - CWDA", "MAWAI - MWAI", "GHALLU - GHLU", "KHUI KHERA - KUKA", "JANDWALA KHARTA - JWKA", "BHAWANIPATNA - BWIP", "SARKANPUR - SKNP", "G.RAMACHANDRAPU - GRCP", "DEPUR PH - DPUR", "KARWAR - KAWR", "KUMTA - KT", "HONNAVAR - HNA", "BINA MALKHEDI - MAKR", "DUMKA - DUMK", "KUNDAPURA - KUDA", "UDUPI - UD", "SURATHKAL - SL", "NIVASAR - NIV", "BASUKINATH - BSKH", "RAJAPUR ROAD - RAJP", "VAIBHAVWADI RD - VBW", "NANDGAON ROAD - NAN", "SINDHUDURG - SNDD", "SAWANTWADI ROAD - SWV", "TATANAGAR JN - TATA", "TATI - TATI", "TALALA JN - TAV", "TALAIYUTHU - TAY", "TARGAON - TAZ", "THARBITIA - TB", "TIMBA ROAD - TBA", "TRIBENI - TBAE", "TILBHITA - TBB", "TUNGABHADRA DAM - TBDM", "TATIBAHAR - TBH", "TARCHERRA BRLRM - TBL", "TAMBARAM - TBM", "TAMBARAM SNTRM - TBMS", "TIMARNI - TBN", "TAIABPUR - TBR", "TALBAHAT - TBT", "THANA BHAWAN TN - TBTN", "THARBAN - TBU", "TIMBARVA - TBV", "TILBHUM - TBX", "TANCHHA - TCA", "TIRUCHCHULI - TCH", "TYAKAL - TCL", "TIRUCHENDUR - TCN", "THRISUR - TCR", "TIRUCHCHITRMBLM - TCT", "TANDA - TD", "TADEPALLIGUDEM - TDD", "TINDHARIA - TDH", "TADUKU - TDK", "TUNDLA JN - TDL", "TILDANGA - TDLE", "TIRUPARANKNDRM - TDN", "TANDA URMAR - TDO", "TODARPUR - TDP", "TIRUVIDALMARUDR - TDR", "TANDUR - TDU", "THONDEBHAVI - TDV", "TANDWAL - TDW", "TAREGNA - TEA", "TIRBEDIGANJ - TEG", "TEKKALI - TEK", "TENALI JN - TEL", "TELI - TELI", "TELO - TELO", "TIRUNELVELI - TEN", "TENI - TENI", "TEEGAON - TEO", "TEMPA - TEP", "THAIR - TER", "TETULMARI - TET", "TELTA - TETA", "TEGHRA - TGA", "TANGARBASULI - TGB", "THANGUNDI - TGDE", "VILAVADE - VID", "DEOGHAR - DGHR", "JAMA - JAMA", "N. PANAKUDI - NPK", "PATLIPUTRA - PPTA", "RATNAGIRI - RN", "DUMURIPUT - DMRT", "MALKAPUR ROAD - MALK", "ISARWARA - ISH", "KARHIYA BHADELI - KYX", "MARRIPALEM PH - MIPM", "VASHI - VSH", "ROHA - ROHA", "KOLAD - KOL", "MANGAON - MNI", "GOREGAON ROAD - GNO", "VEER - VEER", "KARANJADI - KFD", "DIWANKHAVATI - DWV", "KHED - KHED", "KAMATHE - KMAH", "SAVARDA - SVX", "ARAVALI ROAD - AVRD", "UKSHI - UKC", "BHOKE - BOKE", "SANGMESHWAR - SGR", "THIVIM - THVM", "DHAMALGAON - DMGN", "TURKAPALLI - TKPY", "GAUTAMSTHAN - GTST", "NAGESHWADI HALT - NGHW", "SUHSARAI - SOW", "BOMMIDI - BQI", "KOTTUR HALT - KOTT", "C RLY QUOTA - CRQ", "JAMMALAMADUGU - JMDG", "HBL NAGAR - HBLN", "MANDALGHAT - MDG", "BURGULA HALT - BRGL", "DUMRI BIHAR - DMBR", "MAHABUBNAGAR TO - MHBT", "TARAPITH ROAD - TPF", "SAMUDRAGARH - SMAE", "GOUR MALDA - GZM", "MALIYA MIYANA - MALB", "BARACHAK - BCQ", "GAISAL - GIL", "MANGURJAN - MXJ", "AJAKOLLU - AJK", "NIJBARI - NJB", "AREPALLI HALT - ARPL", "VELLACHERUVU - VLE", "BACHELI - BCHL", "KARANJGAON - KAJG", "MUKUNDAWADI HA - MKDD", "RAVALPALI KALAN - RPK", "GAJULAGUDEM - GLE", "PANDURANGAPURAM - PGP", "ASWAPURAM - AWM", "RAPARLA HALT - RPRL", "SBB JOGULAMBA H - SBBJ", "YENUGONDA - YNG", "GANDHIPURAM HAL - GHPU", "BADARWAS - BDWS", "RAMANATHAPURAM - RMD", "RAMNA - RMF", "RAMGAD - RMGD", "RAMGANJ - RMGJ", "RAMANAGARAM - RMGM", "RANGMAHAL - RMH", "RAMRAJATALA - RMJ", "ROMPALLE - RML", "RAMESWARAM - RMM", "RAMAN - RMN", "RAMANNAPETA - RMNP", "RAHMATNAGAR - RMNR", "RAMAKONA - RMO", "RAHIMATPUR - RMP", "RAMPAHARI - RMPH", "RAMPUR HALT - RMPR", "RAMRI - RMQ", "RAMNAGAR - RMR", "RAMSINGHPUR - RMSR", "RAMGARH CANT - RMT", "RAMPUR - RMU", "RAMAVARAPPADU - RMV", "ROSHAN MAU - RMW", "RAMSAR - RMX", "RUKMAPUR - RMY", "ROUTHPURAM HALT - RMZ", "ROHANA KALAN - RNA", "RANPURA - RNB", "RANA BORDI - RNBD", "RANCHI - RNC", "RANJANI - RNE", "RANIGANJ - RNG", "RANGALITING - RNGG", "RAINAGAR - RNGR", "RUNKHERA - RNH", "RANGAPANI - RNI", "RANOLISHISHU - RNIS", "RUNIJA - RNJ", "RANJANGAON RD - RNJD", "RUNKUTA - RNKA", "RANALA - RNL", "RAJANKUNTI - RNN", "RANOLI - RNO", "RUPNARAYANPUR - RNPR", "RENUKUT - RNQ", "RANIBENNUR - RNR", "RANIPUR ROAD - RNRD", "RANTHAMBHORE - RNT", "RANITAL - RNTL", "RANIWARA - RNV", "RENWAL - RNW", "RANIPATRA - RNX", "RANGIYA JN - RNY", "RUSERA GHAT - ROA", "ROBERTSON - ROB", "REOTI - ROI", "ROHTAK JN - ROK", "RAJULI - ROL", "RUPSA JN - ROP", "THEKERAGURI - TGE", "TITAGARH - TGH", "TUGGALI - TGL", "TALEGAON - TGN", "TULJAPUR - TGP", "TENGANMADA - TGQ", "TINAI GHAT - TGT", "TARIGOPPULA - TGU", "TINICH - TH", "TEHTA - THA", "THAN JN - THAN", "THANA BIHPUR JN - THB", "THANA BHAWAN - THBN", "THANDLA RD - THDR", "THAWE JN - THE", "TALHERI BUZURG - THJ", "THAKURLI - THK", "TIRUVALAM - THL", "THALYAT HAMIRA - THM", "THATHANA MITHRI - THMR", "TOLAHUNSE - THN", "TULIN - THO", "TAHERPUR - THP", "THURIA - THUR", "THERUBALI - THV", "THARWAI - THW", "THADI - THY", "TIRUNINRAVUR - TI", "TILAYA - TIA", "TIBI - TIBI", "TIMMACHIPURAM - TIC", "TAGDI - TID", "TITLAGARH - TIG", "TIHU - TIHU", "TINGRAI - TII", "TIK - TIK", "TILRATH - TIL", "TIMMANACHERLA - TIM", "TATTAPPARAI - TIP", "TIRUR - TIR", "TATISILWAI - TIS", "TISI - TISI", "TALIT - TIT", "TILARU - TIU", "TIVARI - TIW", "THANJAVUR - TJ", "TAJPUR DEHMA - TJD", "TAJGADH - TJH", "TURINJAPURAM - TJM", "TAJPUR - TJP", "TUMAKURU - TK", "TEHARKA - TKA", "TUPKADIH - TKB", "TSAKIBANDA - TKBN", "THAKURKUCHI - TKC", "TUGLAKABAD - TKD", "TARIKERE JN - TKE", "TAKI ROAD - TKF", "THAKURGANJ - TKG", "THAKURTOTA - TKH", "TAKHA - TKHA", "TAKARKHEDE - TKHE", "TAKLI - TKI", "TILAK BRIDGE - TKJ", "TAKLI BHANSALI - TKLB", "MALLUR - MALR", "RASIPURAM - RASP", "METYAL SOHAR - MYX", "TANGARMUNDA - TGM", "GODBHAGA - GBQ", "PUDUCHATRAM H - PCTM", "RAJABERA - RJB", "KUNKI - KZU", "NAMAKKAL - NMKL", "LADDIVADI HALT - LDVD", "MOHANUR - MONR", "KHARGAPUR - KHGP", "KALANGANI - KLGN", "GIRIMAIDAN - GMDN", "JAGANNATHPUR - JNP", "VANGAL HALT - VNGL", "BANIHAL - BAHL", "PARADIP - PRDP", "ANGUL - ANGL", "JHIMRI - JHMR", "VIDYAPATIDHAM - VPDA", "ARAND - ARN", "RAHENBATA - RNBT", "TUFANGANJ - TFGN", "CHANDANATTOP - CTPE", "KAWARGAON - KWGN", "KURI - KIF", "CHATTRIPUT - CTS", "AMBAGAON - AGB", "NYORIYA HUSENPU - NRY", "CHHAN ARORIAN - CHNR", "BATHINDA CANTT. - BTIC", "BAMANWALI - BMNL", "JETHI - JTY", "SURER - SRRG", "GOLANA HALT - GLNA", "DUNGRIPALI - DJX", "SALKAROAD - SLKR", "SARBAHARA - SBRA", "TUNIA - TUX", "MAHADEVSAL - MXW", "PANPALI - PNPL", "KAPAN - KPNA", "BAIKUNTH - BKTH", "CHAKROD - CKOD", "BAIHATOLA - BATL", "BORIDAND - BRND", "DEROWAN P. H. - DRWN", "SOGRA - SOGR", "PATHANKOT CANTT - PTKC", "W R S COLONY PH - WRC", "SARASWATINAGAR - SRWN", "SARONA - SZB", "KATNI SOUTH - KTES", "AGOMONI - AGMN", "BIRBANS - BRBS", "PRODDATUR - PRDT", "LAKKAVARAPUKOTA - LVK", "SILIGURI - SGUD", "DHACA RETURN - DHCZ", "CUDDALORE PORT - CUPJ", "ADITYAPUR - ADTP", "ADHARTAL - ADTL", "NEW MORINDA - NMDA", "RAJOSI - ROS", "ROURKELA - ROU", "ROZA JN - ROZA", "RANGAPARA NORTH - RPAN", "RUPNAGAR - RPAR", "RUPASIBARI - RPB", "RUPAUND - RPD", "RAMPUR HAT - RPH", "RUPAHELI - RPI", "RAJPURA JN - RPJ", "REDDIPALLE - RPL", "RUPAULI - RPLY", "ROYAPURAM - RPM", "RAWATPUR - RPO", "RANU PIPRI - RPP", "RAGHUNATHPUR - RPR", "RUPRA ROAD - RPRD", "RATANPUR - RPUR", "RAJAPATTI - RPV", "RUPAI - RPY", "RANAPRATAPNAGAR - RPZ", "RNINGR JLPAIGRI - RQJ", "RADHAKISHOREPUR - RQP", "RICHHA ROAD - RR", "RURE ASAL - RRAL", "BIRUR JN - RRB", "BOMBAY REAY RD - RRD", "RAHUL ROAD - RRE", "RANGAREDDY GUDA - RRGA", "RAHURI - RRI", "RAMARAJU PALLI - RRJ", "REWRAL - RRL", "RANCHI ROAD - RRME", "RAIRANGPUR - RRP", "RAGHURAJ SINGH - RRS", "RAYARU - RRU", "RORANWALA - RRW", "RISIA - RS", "RISAMA - RSA", "RAMGANAGA SC - RSC", "RAMSAGAR - RSG", "RATAN SHAHR - RSH", "RAISI - RSI", "RASULPUR - RSLR", "RASMARA - RSM", "RASWAN - RSME", "RASANA - RSNA", "RAI SINGH NAGAR - RSNR", "RASRA - RSR", "RMGRH SHEKHWATI - RSWT", "ROHAT - RT", "RUTHIYAI - RTA", "RAJA TALAB - RTB", "RATABARI - RTBR", "RANGTONG - RTG", "RATANGARH JN - RTGH", "RATANGAON - RTGN", "RAOTI - RTI", "RORA - RORA", "TIKANI - TKLE", "TANKUPPA - TKN", "THAKURNAGAR - TKNR", "TAKKOLAM - TKO", "TOKKOTTU - TKOT", "TAKIPUR - TKP", "TRIKARPUR - TKQ", "TAKARI - TKR", "TIKAULI RAWATPR - TKRP", "TOKISUD - TKS", "TIKKOTTI - TKT", "TANAKALLU - TKU", "TIKEKARWADI - TKWD", "TIKARIA - TKYR", "TILONIYA - TL", "TITVALA - TLA", "TULSI ASHRAM - TLAM", "TALCHHAPAR - TLC", "TILDA - TLD", "TALGARIA - TLE", "TALGUPPA - TLGP", "TULSI NAGAR - TLGR", "TILHAR - TLH", "TALCHER - TLHR", "TALWARA JHIL - TLI", "TALJHARI - TLJ", "TALAKHAJURI - TLKH", "TALAP - TLL", "TRILOCHAN MAHDO - TLMD", "TALMADUGU - TLMG", "TALNI - TLN", "TILAUNCHI - TLNH", "TALANALLUR - TLNR", "TALANDU - TLO", "TULSIPUR - TLR", "TALARA - TLRA", "BETTAHALSOOR - TLS", "TILATI - TLT", "TARLUPADU - TLU", "TALVADYA - TLV", "THALWARA - TLWA", "TALDI - TLX", "THALASSERY - TLY", "TALAVLI - TLZ", "TAMURIA - TMA", "TEMBURU - TMB", "TROMBAY - TMBY", "TALAMANCHI - TMC", "TALMADLA - TMD", "TUTI MELUR - TME", "TIN MILE HAT - TMH", "TENMALAI - TML", "TIRUMALPUR - TMLP", "TUMMALACHERUVU - TMLU", "TAMARAIPADI - TMP", "TIMMAPURAM - TMPM", "TIRUMANGALAM - TMQ", "TUMSAR ROAD - TMR", "KATAREAH - KTRH", "KATWAR BAZAR - KWBR", "KALANAD - KLAD", "KUDAL - KUDL", "SHIVPURI - SVPI", "ADAVALI - ADVI", "MADURE - MADR", "PERNEM - PERN", "UPARMAL - URML", "JALINDRI - JNRI", "VERNA - VEN", "BALLI - BLLI", "CANCONA - CNO", "ASNOTI - AT", "HARWADA - HAA", "ANKOLA - ANKL", "GOKARNA ROAD - GOK", "BHAROLI - BHRL", "SAMBALPUR CITY - SBPY", "MANESWAR - MANE", "HATIBARI - HATB", "JUJUMURA - JUJA", "CHARMAL - CHAR", "RAIRAKHOL - RAIR", "TALCHER ROAD - TLHD", "BAMUR - BAMR", "SARAGIPALI - SRGP", "HANDAPA - HNPA", "BOINDA - BONA", "JARAPADA - JRPD", "KEREJANGA - KPJG", "KAKIRIGUMMA - KKGM", "TIKIRI - TKRI", "RAULI - RUL", "LELIGUMA - LLGM", "BHALUMASKA - BLMK", "SIKARPAI - SKPI", "KEUTGUDA - KTGA", "SAIDAPUR - SADP", "MAKARPURA - MPR", "BISALEHALLI - BLHI", "JAMBUSAR - JMB", "ANKAI KILA - AAK", "CHHIDGAON - CGO", "SAKHARAYAPATNA - SHYP", "KANIVEHALLI - KNVH", "CHIKKAMAGALURU - CMGR", "PANJGAM - PJGM", "DEKARGAON - DKGN", "YEDEKUMERI - YDK", "SHRIVAGILU - SVGL", "SUBRAHMANYA RD - SBHR", "KABAKAPUTTUR - KBPR", "BANTAWALA - BNTL", "SHALASHAH THANA - SHLT", "KOTANA - KTOA", "SUR KHAND KA KH - SZK", "THIRUMAYILAI - MTMY", "SUKHPUR - SUKP", "DESHALPAR - DSLP", "SUKHPAR ROHA - SRHA", "MOTHALA HALT - MTHH", "DINKAR GRAM SIM - DKGS", "DHANAWALA WADA - DHVR", "KOTHARA - QTR", "SANOSARA NANDRA - SNSR", "SHMATA VD KATRA - SVDK", "MAKARWADI HALT - MKWI", "BUDHA PUSHKAR H - BPKH", "KHANDERI - KHDI", "RANTEJ - RTJ", "RAMTEK - RTK", "RATLAM JN - RTM", "RETANG - RTN", "RATANPURA - RTP", "RAMNATHPUR - RTR", "REHTA - RTS", "RATAN SARAI - RTU", "RENIGUNTA JN - RU", "RASULABAD - RUB", "RAJLU GARHI - RUG", "RUKNI - RUI", "RANUJ - RUJ", "RUPAMAU - RUM", "RANPUR - RUR", "RURA - RURA", "RATNAL - RUT", "RAVER - RV", "RAVIKAMPADU - RVD", "BOMBAY RAVLI JN - RVJ", "RAJA BHAT KHAWA - RVK", "RAVINDRAKHANI - RVKH", "RAVANASAMUDRAM - RVS", "RANKUA - RW", "RAUTARA - RWA", "ROWRIAH SDG - RWH", "RAWANIA DUNGAR - RWJ", "RAIWALA - RWL", "RANAVAV - RWO", "ROWTA BAGAN - RWTB", "RAXAUL JN - RXL", "RANGAPAHAR - RXR", "RANGAPAHAR CRS - RXRX", "RATANGARH WEST - RXW", "RAYAKA - RY", "RAYAKKOTTAI - RYC", "RAMIDI HALT - RYM", "RAYANAPADU - RYP", "RASURIYA - RYS", "RAZAGANJ - RZJ", "RAUZAGAON - RZN", "SHRIRANGAPATNA - S", "SALEM JN - SA", "SATHIAON - SAA", "SANTAMAGULUR - SAB", "SANICHARA - SAC", "SONADA - SAD", "SADLA - SADL", "SALKHAPUR - SAF", "SANGRUR - SAG", "SHRIRAJNAGAR - SAGR", "SAPHALE - SAH", "SATHI - SAHI", "SAHIJPUR - SAHP", "SAHERI - SAHR", "SARAI - SAI", "SAK BAHADURPUR - SAK", "SUPRAKANDI - SAKD", "SALWA - SAL", "SALAR - SALE", "SALI - SALI", "SALUR - SALR", "SALEM MARKET - SAMT", "SANDILA - SAN", "SANK - SANK", "TUMSAR TOWN - TMS", "TIMTALA - TMT", "TIRUMANTHIKUNAM - TMU", "TINDIVANAM - TMV", "TIMMAPUR - TMX", "TAMLUK - TMZ", "TUTICORIN - TN", "THANE - TNA", "TORANAGALLU - TNGL", "TONDALAGPAVARAM - TNGM", "THONGANUR - TNGR", "TINKHEDA - TNH", "TANDARAI - TNI", "TENTULLA - TNJE", "TIRUNELLIKAVAL - TNK", "TANKHALA - TNKA", "TANUKU - TNKU", "TANGLA - TNL", "TIRUVANNAMALAI - TNM", "TUNDU - TNO", "TONDIARPET - TNP", "TEJNARAYANPUR - TNPR", "TANGUTURU - TNR", "TENNERU - TNRU", "TINNAPPATTI - TNT", "TINDAULI - TNUE", "THAPAR NAGAR - TNW", "TONKARWAR - TNWR", "TARAK NAGAR - TNX", "TTIRUVALANGADU - TO", "TALOD - TOD", "TAMKUHI ROAD - TOI", "TONDAMANPATTI - TOM", "TAPASI - TOP", "TITUR - TOR", "TORNIYA - TORA", "TORI - TORI", "TELAPROLU - TOU", "TIRCHRPALI FORT - TP", "TRILOKPUR - TPB", "TIRUPPACHETTI - TPC", "TIRUCHRPLI PLKI - TPE", "TIPLING - TPG", "TINPAHAR JN - TPH", "TIRUCHCHIRAPALI - TPJ", "TIPKAI - TPK", "TIKIAPARA - TPKR", "TOTIYAPALAYAM - TPM", "TAPONA - TPN", "TALOJA PANCHAND - TPND", "TANTPUR - TPO", "TOPPUR - TPP", "THIPPARTHI - TPPI", "TOPOKAL - TPQ", "TIRUPATTUR JN - TPT", "PUSHKAR TERMINU - PUHT", "MADAR JN - MDJN", "DEEG - DEEG", "LOTTEGOLAHALI H - LOGH", "BAJALTA - BLA", "SOMESHWARA - SMWA", "DEVARAPALLI - DPE", "KAVARAIPPETTAI - KVP", "BISAPURKALAN - BRKH", "AKURDI - AKRD", "PRASANNAYANAPAL - PSPY", "RUNNI SAIDPUR - RUSD", "AMBALAPPUZHA - AMPA", "HARIPPAD - HAD", "VAGHPURA - VU", "GURUVAYUR - GUV", "NIMA GOPALPUR H - NIMG", "VALLIYUR - VLY", "APTA - APTA", "PEN - PEN", "KASU - KASU", "JUNAGARH ROAD - JNRD", "NAVADE ROAD - NVRD", "DEOJHAR - DJHR", "RASAYANI - RSYI", "HAMARPUR - HMPR", "NAGOTHANE - NGTN", "BARKUR - BKJ", "PADUBIDRI - PDD", "KALAMBOLI - KLMG", "MURGAMAHADEV RD - MMVR", "LOLIEM - LOL", "MANJARI BUDRUK - MJBK", "SADPR JALALABAD - SPJB", "KHADUR SAHIB - KDSB", "GOINDWAL SAHIB - GWSB", "KARMALI - KRMI", "MURDESHWAR - MRDW", "BHATKAL - BTJL", "MANKI - MANK", "SHIROOR - SHMI", "MOOKAMBIKA ROAD - BYNR", "BIJOOR - BIJR", "SENAPURA - SEN", "INNANJE - INJ", "MULKI - MULK", "THOKUR - TOK", "KHUTBAV - KTT", "KADETHAN - KDTN", "JITE - JITE", "LALAWADI - LLD", "NAHARLAGUN - NHLN", "BHIMRANA - BMRN", "WANKANER CITY - WKRC", "SANJALI - SNJL", "GANDHISMRITI - GNST", "BHATISUDA(HALT) - BTSD", "BAGWADA (HALT) - BAGD", "KHODIYAR - KHDB", "PAYLI - PYI", "BIGGABAS RAMSAR - BGRM", "DHAKA - DAKA", "AHMEDABAD MG - ADIJ", "KUDSAD - KDSD", "KANHE - KNHE", "SARDARNAGAR - SANR", "SAGONI - SAO", "SATTENAPALLE - SAP", "SARANGPUR ROAD - SAPR", "SHAHZAD NAGAR - SAR", "SHDSPRA PADMPRA - SAS", "SASAN GIR - SASG", "SAUSAR - SASR", "SANT ROAD - SAT", "SANAND - SAU", "SAVDA - SAV", "SURIAWAN - SAW", "SOHANSRA - SAWN", "SAYAMA - SAY", "SARAI BHOPAT - SB", "SAHIBABAD - SBB", "KSR BENGALURU - SBC", "SLEEMANABAD RD - SBD", "SORBHOG - SBE", "SAHIBGANJ JN - SBG", "SISIBARGAON - SBGN", "SUBHAS GRAM - SBGR", "SULEBHAVI - SBH", "SHRI BHAVNATH - SBHN", "SABARMATI JN - SBI", "SARAI BANJARA - SBJ", "SHAHBAZ KULI - SBK", "SABALGARH - SBL", "SHRI BALAJI - SBLJ", "SHRIBDRYA LATHI - SBLT", "SONBARSA KCHERI - SBM", "SUBARNAMRIGI - SBNM", "SHRI VIJAINAGAR - SBNR", "SABAUR - SBO", "SAMBALPUR - SBP", "SAMBALPUR ROAD - SBPD", "SAMBHAR LAKE - SBR", "SANGRANA SAHIB - SBS", "SABARMATI JN - SBT", "SAMBHETI - SBTI", "S BAKHTIYARPUR - SBV", "SBEWBABUDIH - SBW", "SOLAN BREWERY - SBY", "SISWA BAZAR - SBZ", "SECUNDERABAD JN - SC", "SALCHAPRA - SCA", "SITAPUR CANT - SCC", "SENCHOA JN - SCE", "SACHIN - SCH", "SANCHI - SCI", "SALICHAUKA ROAD - SCKR", "SILCHAR - SCL", "SIMHACHALAM - SCM", "SONDHA ROAD - SCN", "SATUNA - SCO", "SIRNAPALLI - SCP", "TIRUCHRPALI TWN - TPTN", "TIRUPATI - TPTY", "TANAKPUR - TPU", "TINPHERIA - TPV", "TIRUPATI W HLT - TPW", "TADAKALPUDI - TPY", "TAPRI - TPZ", "TAKIA - TQA", "THEH QALANDAR - TQL", "TELAM - TQM", "TIKUNIA - TQN", "TEKTAR - TQR", "TARUR - TR", "TANGRA - TRA", "TARANGA HILL - TRAH", "TORANG - TRAN", "TIRUVERUMBUR - TRB", "TIRODI - TRDI", "TIKRI - TRE", "TAROPA - TRF", "TARIGHAT - TRG", "TARIASUJAN - TRJ", "TIRUKOILUR - TRK", "TUREKALA ROAD - TRKR", "TIRUVALLUR - TRL", "TIRUNAGESVARAM - TRM", "TARAON - TRN", "TORNA - TRNA", "TIRORA - TRO", "TARAPUR JN - TRP", "TARAORI - TRR", "TARSARAI - TRS", "TARSAI - TRSR", "TIRUTTANI - TRT", "TRIUPUNITTURA - TRTR", "TARVA - TRV", "TIRUVALLA - TRVL", "TOLRA - TRZ", "TISUA - TSA", "TAHSIL BHADRA - TSD", "TAHSIL FATEHPUR - TSF", "TENKASI JN - TSI", "TINSUKIA JN - TSK", "TAKSAL - TSL", "TRAISAMADH - TSM", "TSUNDURU - TSR", "TALLI SAIDASAHU - TSS", "TITTE - TT", "TITABAR - TTB", "TIRUMLAI HLS OA - TTH", "TURTIPAR - TTI", "TIRUTTANGAL - TTL", "TETELIA - TTLA", "TARN TARAN - TTO", "TIRUTURAIPDI JN - TTP", "THATHANKULAM - TTQ", "TIPTUR - TTR", "TINTODA - TTRA", "TETTU - TTU", "MAMDAPUR HALT - MMPR", "TIKAMGARH - TKMG", "CHENNASANDRA - CSDR", "JHAJJAR - JHJ", "YADAVALLI - YADA", "ARALVAYMOZHI - AAY", "TOVALAI - THX", "AVULADATLA - ALAT", "BHARATHAPUZHA - BPZA", "DHANUVACHAPURAM - DAVM", "DONIGAL - DOGL", "KODIMBALA - KDBA", "YEDAMANGALA - YDM", "KANIURU - KNYR", "NARIMOGARU - NRJ", "NERALAKATTE - NRF", "KALLADAKA - KLKD", "FARINGAPETTA - FRG", "ASHTEGAON - ASTG", "KANDANUR P VAYA - KNPL", "MORSHI - MRSH", "PALA - PAAL", "BENODA - BNOD", "WARUD ORANGE CT - WOC", "PUSLA - PUSA", "MOWAD - MWAD", "MARARIKULAM - MAKM", "TURAVUR - TUVR", "KUMBALAM - KUMM", "BOXIRHAT - BXHT", "PAWAPURI ROAD H - POE", "NIDAMANGALAM - NMJ", "MOLAKALMURU - MOMU", "NIDI - NIDI", "RAJAGAMBIRAM - RAGM", "DATIVLI - DTVL", "MURAHARA - MRHA", "MELMARUVATTUR - MLMR", "MEKRA MEMERKHAB - MMKB", "PALI A - PAIL", "TIRUSULAM - TLM", "DIVINE NAGAR - DINR", "EKAMBARAKUPPAM - EKM", "MAGARDOH - MGRD", "GUMTO - GMTO", "HARINSING - HRNS", "GHAGHRA - GHAA", "TELIA HALT - TELY", "JETHA HALT - JDDA", "TO KURSEONG - KGND", "DRSKSN GARHPURA - DSKG", "CHINNA SALEM - CHSM", "BHALUKPONG - BHNG", "YAMUNANAGAR JUD - YJUD", "MANDAPAM CAMP - MC", "DIBOLONG - DBLG", "NANGUNERI - NNN", "TIRUPADRIPULYUR - TDPR", "TILA - TILA", "RUDRAPUR CITY - RUPC", "LOKMANYATILAK T - LTT", "JATINGA LUMPUR - JGLP", "NEW HARANGAJAO - NHGJ", "DURGACHAK TOWN - DZKT", "NEW HAFLONG - NHLG", "BADMAL - BUDM", "GOMATI NAGAR - GTNR", "GARHA GOODS SHE - GGGS", "ASWANI HALT - AWS", "MAJHOWLIA - MJL", "PIPARAHAN HALT - PPRH", "PANIAHWA - PNYA", "UMROLI - UOI", "SHAM CHAURASI - SCQ", "SENGOTTAI - SCT", "SUKHCHAIN - SCV", "SIDHAULI - SD", "SEALDAH - SDAH", "SUNDHIAMAU - SDAM", "SHAHABAD - SDB", "SHEDUBHAR - SDBR", "SAIDABAD - SDC", "SINDHAWADAR - SDD", "SADISOPUR - SDE", "SUDSAR - SDF", "SAHADAI BUZURG - SDG", "SRI DUNGARGARH - SDGH", "SARDARGRAM - SDGM", "SARADHNA - SDH", "SANDHANIDHAR - SDHR", "SAGARDIGHI - SDI", "SHAHDOL - SDL", "SWADINPUR - SDLE", "SADULPUR JN - SDLP", "SURAREDDIPALEM - SDM", "SUDAMDIH - SDMD", "SIDMUKH - SDMK", "SHOLAVANDAN - SDN", "SEYDUNGANALLUR - SDNR", "SINDPAN - SDPN", "SARDAR PATEL RD - SDPR", "SEDARAMPATTU - SDPT", "SUDHRANA - SDRA", "SHENDURNI - SDRN", "SADULSHAHR - SDS", "SANDASAL - SDSL", "SADAT - SDT", "SOMIDEVIPALLE - SDV", "SOLDEVANAHALLI - SDVL", "SADHOO GARH - SDY", "SINDHAR - SDZ", "SEMLA - SE", "SON NAGAR - SEB", "SHEDBAL - SED", "SONPUR JN - SEE", "SHEGAON - SEG", "SEVAGRAM - SEGM", "SEHORE - SEH", "SHENDRI - SEI", "SARKHEJ - SEJ", "SANKRALL - SEL", "SELU - SELU", "SERAM - SEM", "SEOHARA - SEO", "SODPUR - SEP", "SEPON - SEPN", "SHERPUR - SEPR", "SEKHA - SEQ", "SAMAYANALLUR - SER", "SEMARI - SES", "SETTIHALLY - SET", "SENDRA - SEU", "SITHALAVAI - SEV", "SEHAL - SEW", "SERONI ROAD - SEX", "SEONI - SEY", "TITWA - TTW", "TUKAITHAD - TTZ", "TADIPATRI - TU", "TIRUNNAVAYA - TUA", "TALODHI ROAD - TUD", "THALANGAI - TUG", "TANIJAN - TUJ", "TIRALDIH - TUL", "TULSIGAM - TUM", "TOHANA - TUN", "TUNG - TUNG", "TUNI - TUNI", "TIRUPPUR - TUP", "TURKI - TUR", "TUVVUR - TUV", "TUWA - TUWA", "THIRUTHURAIYUR - TUY", "TEN TALAV - TV", "TRIVANDRUM CNTL - TVC", "TAVARGATTI - TVG", "TARADEVI - TVI", "TADWAL - TVL", "TIRUPPUVANAM - TVN", "TIRVNLNLUR ROAD - TVNL", "TRIVANDRUM PETT - TVP", "THIRUVARUR JN - TVR", "TALAIVASAL - TVS", "TIRUVOTTIYUR - TVT", "TALWANDI - TWB", "TWINING GANJ - TWG", "TOTEWAHI HALT - TWI", "TILWARA - TWL", "THUWAVI - TWV", "TYADA - TXD", "TANDAVAPURA - TXM", "TULUKAPATI - TY", "TENYA - TYAE", "THABALKE - TYK", "TIRUMAYAM - TYM", "TIRUNELVELI TWN - TYT", "TOZHUPPEDU - TZD", "TEZPORE - TZTB", "UPLETA - UA", "UPPALA - UAA", "UPARIYALA - UAL", "UDAGAMANDALAM - UAM", "UNAWA AITHOR - UAR", "USKA BAZAR - UB", "AMBALA CITY - UBC", "HUBBALLI JN - UBL", "UBARNI - UBN", "UMBARGAM ROAD - UBR", "UCHANA - UCA", "UNCHI BASSI - UCB", "UNCHAULIA - UCH", "UCHIPPULI - UCP", "UNCHAHAR JN - UCR", "SAI P NILAYAM - SSPN", "KHADAPA - KDPA", "NAKTISEMRA - NKX", "MANAK NAGAR - MKG", "SATISH SAMNT HT - SSPH", "PAHLEJAGHAT JN - PHLG", "VERAVALI (H) - VRLI", "NARAYANAPURAM - NRYP", "DAMANJODI - DMNJ", "LAXMIPUR ROAD - LKMR", "SABDALPUR JN. - SBDP", "V O C NAGAR - VOC", "GUDUM - GUDM", "PENCHARTHAL - PEC", "KUMARGHAT - KUGT", "SHRI RAMGARH - SHRG", "HUMNABAD - HMBD", "FARAH TOWN - FHT", "JORAMOW - JRW", "BANCHARI - BNCR", "RAJENDRANAGAR T - RJPB", "BELAPUR CBD - BEPR", "KOTHACHERUVU - KTCR", "BASAMPALLE - BSPL", "JODHPUR CANTT - JUCT", "SINDRIBLOCK HUT - SDBH", "RAKHITPUR - RKJE", "KUDALNAGAR - KON", "BRIJ NAGAR - BINR", "NAYA NANGAL - NNGL", "BARABIL - BBN", "MADHURANAGAR - MDUN", "GODAMGURA - GDQ", "DEFENCE OS QT - DF", "MALANPUR - MLAR", "KHUDIRAM B PUSA - KRBP", "CHHADA - CHDX", "DANIYAWAN BZR H - DNWH", "KARPURIGRAM - KPGM", "DUMRI HALT - DMRX", "KACHNARA - KHNR", "MANWAL - MNVL", "UDHAMPUR - UHP", "RAM NAGAR J K - RMJK", "KANHAIPUR - KNHP", "TEKKABIGHA - TKBG", "SANGAR - SGRR", "JHARSUGUDA ROAD - JSGR", "SURGAON BANJARI - SGBJ", "CHHARKHERA KURD - CKKD", "CHHANERA - CAER", "BARUD - BRUD", "DAGARHKERI - DRHI", "KOLARAS - KLRS", "DANGIDHAR - DGD", "NEW TINSUKIA JN - NTSK", "SITALPUR BENGAL - STLB", "SUJALPUR - SJPA", "BADALPUR - BDPA", "RAMNAGAR BENGAL - RMRB", "TIKRA - TKRA", "DIGHA - DGHA", "KANTHI P H - KATI", "HENRYA P H - HEN", "NACHINDA P H - NCN", "AUNTA HALT - ANAH", "CHIKHLI - CKHS", "SETTIGUNTA - SF", "SANHERA HALT - SFA", "SAINTALA - SFC", "SAFIDON - SFDE", "SANODIYA - SFE", "SUNERA PIRKHERI - SFF", "SUBEDARGANJ - SFG", "SAFEDABAD - SFH", "SIKIR - SFK", "SUNAM - SFM", "SAFIPUR - SFPR", "SAFEDPURA - SFQ", "SAFRAI - SFR", "SAFIASARAI - SFS", "SARANGPUR - SFW", "SAFILGUDA - SFX", "SHAJAPUR - SFY", "SNDRYA KACHARI - SFZ", "SHAHGARH - SG", "SHERGARH - SGA", "SAREIGRAM - SGAM", "SAONGI - SGC", "SONGADH - SGD", "SIGADAM - SGDM", "SANKARIDURG - SGE", "SANGAT - SGF", "SULTANGANJ - SGG", "SAFDARGANJ - SGJ", "SRUNGAVRUKSHAM - SGKM", "SAGAULI JN - SGL", "SANGOLA - SGLA", "SOLGAMPATTI - SGM", "SHRIGONDA ROAD - SGND", "SHRI GANGANAGAR - SGNR", "SAUGOR - SGO", "SOHAGPUR - SGP", "SANGARIA - SGRA", "SARAGAON RD HLT - SGRD", "SULGARE - SGRE", "SINGARAM - SGRM", "SINGHIRAMPUR - SGRP", "SHOGHI - SGS", "SILIGURI JN - SGUJ", "SILIGURU TOWN - SGUT", "SARAGCHNI - SGV", "SINGWAL - SGW", "SHAMGARH - SGZ", "SHAHAD - SHAD", "SRINIVASA NAGAR - SHAN", "SIBAICHANDI - SHBC", "SHIBLUN - SHBL", "SAHARSA JN - SHC", "SHAHBAD MARKNDA - SHDM", "SHADHORAGAON - SHDR", "SEORAPHULI - SHE", "SHISHO - SHEO", "SHIRUD - SHF", "SHAHGANJ JN - SHG", "SHRI GHASINAGAR - SHGN", "SHAPUR JN - SHH", "SINGANALLUR - SHI", "SHINDAWANE - SHIV", "SAHASPUR ROAD - SHJ", "UDGIR - UDGR", "UDYAN KHERI - UDK", "ANDAL JN - UDL", "UNDASA MADHAWPU - UDM", "UDHNA JN - UDN", "AMDARA - UDR", "UDASAR - UDS", "UDUMALAIPPETTAI - UDT", "URDAULI - UDX", "UDAIPUR CITY - UDZ", "UPPUGUNDURU - UGD", "UGAON - UGN", "UGNA HALT - UGNA", "UGARPUR - UGP", "UGAR KHURD - UGR", "UGU - UGU", "UGWE - UGWE", "UNCHHERA - UHR", "UMARIA ISPA HLT - UIH", "UJALVAV - UJ", "UNJHA - UJA", "UJHANI - UJH", "UJJAIN JN - UJN", "UJIARPUR - UJP", "UKHRA - UKA", "ULINDAKONDA - UKD", "UTTARKATHANI - UKE", "UKHALI - UKH", "UTTUKULI - UKL", "UKLANA - UKN", "UDALKACHAR - UKR", "UTTAMARKOVIL - UKV", "UMRA NALA - ULA", "ULUBARIA - ULB", "ACHALDA - ULD", "UDALGURI - ULG", "ULLAL - ULL", "URLAM - ULM", "ULNA BHARI - ULN", "ULHASNAGAR - ULNR", "KULTI - ULT", "ULUNDURPET - ULU", "UMARDASHI - UM", "AMBALA CANT JN - UMB", "UMED - UMED", "UTTANGAL MANGLM - UMG", "UMRETH - UMH", "UMALLA - UML", "UMRAM - UMM", "AMBLIYASAN - UMN", "UMESHNAGAR - UMNR", "UMARPADA - UMPD", "UMARIA - UMR", "UMRA - UMRA", "UMRI - UMRI", "UDRAMSAR - UMS", "UNA - UNA", "URAN CITY - UNCT", "UNCHDIH - UND", "UNDI - UNDI", "UNAI VANSADA RD - UNI", "NEW GUNTUR - NGNT", "GOALPARA TOWN - GLPT", "MOHOPE - MHPE", "CHAUK - CHOK", "SAPE WAMNE - SAPE", "GAZOLE - GZO", "MAHANAGAR - MANG", "DEOTALA - DOTL", "DAULATPUR HAT - DLPH", "BUNIADPUR - BNDP", "GANGARAMPUR - GRMP", "MALANCHA - MLNH", "RAMPUR BAZAR - RMPB", "MALLICKPUR HAT - MKRH", "BALURGHAT - BLGT", "PANDORI - PNDR", "PANOH - PH", "CHURARU TAKARLA - CHTL", "CORAMANDAL - COL", "PADI HALT - PADI", "ANNA NAGAR - ANNG", "MANDAVELI - MNDY", "MATHABHANGA - MHBA", "KOTTURPURAM - KTPM", "KASTHURIBAI NGR - KTBR", "INDIRA NAGAR - INDR", "TIRUVANMIYUR - TYMR", "TARAMANI - TRMN", "PERUNGUDI - PRGD", "VELACHERI - VLCY", "KANJIYA - KXB", "KOLKATA - CP", "RATIKHEDA - RIKA", "BELKHERA - BELD", "ISHANAGAR - ISHN", "CHANDUR BAZAR - CNDB", "VIVEKNNDAPURI H - VVKP", "AMBIKAPUR - ABKP", "KAMALPURGRAM - KLPG", "SHANTIGRAMA - SIGA", "D SAMUDHRAVALLI - DSVS", "CHANNARAYAPATNA - CNPA", "SHRAVANBELAGOLA - SBGA", "SAKARIYA - SKAR", "BARUNDANI - BNDI", "THALERA - THEA", "TARAVATA - TRWT", "SITALPUR - STLR", "KURINIJIPADI - KJPD", "KALADEHI - KDHI", "RAISERJAGIR - RSJ", "BARAGOPAL - BAGL", "LUKWASA - LWS", "BIKRAM SHILA - BKSL", "ADRSH NGR DELHI - ANDI", "PIMPALKHUTI - PMKT", "KAYAR - KAYR", "LINGTI - LNT", "KATNI MURWARA - KMZ", "CHAK RAKHWAL - CRWL", "KHONKER - KCR", "QAZIGUND - QG", "SADURA - SDUA", "ANANTNAG - ANT", "SHEIKPURA - SHK", "SHANKRUL - SHKL", "SADHLI - SHL", "SHOLAKA - SHLK", "SHALIMAR - SHM", "SHYAMSUNDER - SHMR", "SUCHAN KOTLI - SHN", "SHIVNAGAR - SHNG", "SHADNAGAR - SHNR", "SIHORA ROAD - SHR", "SHAHERA - SHRA", "SAIJ SERTHA RD - SHRD", "SHARMA - SHRM", "SAHARSRAKUND - SHSK", "SAMBHAL HTM SAR - SHTS", "SILGHAT TOWN - SHTT", "SHOLINGHUR - SHU", "SHIVANI - SHV", "SAMHON - SHW", "SAHUWALA - SHWL", "SHUKARULLAHPUR - SHX", "SUMMER HILL - SHZ", "SONAILI - SI", "SHIVLANKHA - SIA", "SONIK - SIC", "SIDDHPUR - SID", "SIDDAMPALLI - SIE", "SIRLI - SIF", "SIHO - SIHO", "SITIMANI - SII", "SIKKA - SIKA", "SIKAR JN - SIKR", "SAKHI GOPAL - SIL", "SILAO - SILO", "SILARI - SILR", "SHRI AMIRGADH - SIM", "BOMBAY SION - SIN", "SINI JN - SINI", "SINOR - SINR", "SAMAKHIALI B G - SIOB", "SURAIMANPUR - SIP", "SINGHOOKHARIA - SIPA", "SIHAPAR - SIPR", "SARKONI - SIQ", "SIRHIND JN - SIR", "SIRHILTARA - SIRA", "SIRRAN - SIRN", "SISAUNA - SISN", "SINGUR - SIU", "SHIRRAVDE - SIW", "SIRRY - SIY", "SHRIKHANDA - SIZ", "SIJUA - SJA", "SALJADA - SJD", "SANJUJE DA AREY - SJDA", "UNKAL - UNK", "UNHEL - UNL", "UNAULA - UNLA", "UTTARPARA - UPA", "ULAVAPADU - UPD", "UPLAI - UPI", "UPPALUR - UPL", "URAPPAKKAM - UPM", "USMANPUR - UPR", "UPPALAVAI - UPW", "UMDANAGAR - UR", "UNTARE ROAD - URD", "UREN - UREN", "USARGAON - URG", "URULI - URI", "URKURA - URK", "UNJALUR - URL", "URMA - URMA", "UTRAN - URN", "UGRASENPUR - URPR", "UMRED - URR", "UMRALA - URT", "UKAI SONGADH - USD", "USALAPUR - USL", "USILAMPATTI - USLP", "USRA - USRA", "UMAR TALI - UTA", "UTARSANDA - UTD", "UTARLAI - UTL", "UTRIPURA - UTP", "UTRAHTIA - UTR", "UDVADA - UVD", "UNAWA VASAN - UVSN", "BHAGA JN - VAA", "VELAVADAR - VAD", "VADALI - VAE", "VARKALASIVAGIRI - VAK", "VADAL - VAL", "VADHVANA - VAN", "VAPI - VAPI", "VALAPATTANAM - VAPM", "VIDYANAGAR - VAR", "VAIKOM - VARD", "VASAI DABHLA - VAS", "VASO - VASO", "VATLUR - VAT", "VADARLAPADU - VAU", "VILLIYAMBAKKAM - VB", "BOBBILI - VBL", "VALLABHNAGAR - VBN", "VAMBORI - VBR", "VINCHIYA - VCA", "VIROCHANNAGAR - VCN", "VICTOR - VCT", "VAGDIYA - VD", "VASAD JN - VDA", "VENDODU - VDD", "VEDAYAPALEM - VDE", "VADNAGAR - VDG", "VADALA GRANTHIN - VDGT", "VEDCHHA - VDH", "VELDURTI - VDI", "VADAKANNIKAPURM - VDK", "BIJBIARA - BJBA", "KHAJURI - KAW", "AWANTIPURA - ATPA", "KAKAPORA - KAPE", "PAMPORE - PMPE", "SRINAGAR - SINA", "BUDGAM - BDGM", "PADARKHEDA - PARH", "PATTAN - PTTN", "HAMRE - HME", "SOPORE - SXZM", "BARAMULA - BRML", "NEW AMRAVATI - NAVI", "MOHANA - MOJ", "DIYATARA ROAD - DTRD", "GHATIGAON - GHAI", "SIRD - SIRD", "BAP - BAF", "MALHAR - MAAR", "NOKHRA - NKRA", "DHONE - DHNE", "MADWARANI - MWRN", "URGA - URGA", "KOPAR - KOPR", "USMANABAD - UMD", "NEORA - NEO", "RAMPUR MANIHARN - RPMN", "MANGALURU JN - MAJN", "NAGPUR ROAD - NPRD", "DEVRI P.H - DRPH", "SHEOPRASADNAGER - SPDR", "JEONARA PH - JONR", "TUIYA PANI - TPNI", "NIDHANI - NDNI", "CHANGOTOLA - CGLA", "KHAIR RANJI - KRRI", "MOHAPANI MAL - MPML", "BAIGUDA - BGUA", "PARSOLI - PSLI", "SHYAMPURA - SMPA", "BASUDEBPUR H - BDBP", "GEDE - GEDE", "PANIHAR - PNHR", "GHADELA - GELA", "SIKARPUR PH - SKPR", "CHITHARI HALT - CHTT", "RAGHOULI HALT - RGLI", "SINGHPUR DUMRA - SPDM", "RAJNAGAR K HALT - RJAK", "KHAJURAHO - KURJ", "MAHADEOKHEDI - MDVK", "BAREILLY CANTT - BRYC", "MADAVNAGAR ROAD - MDRR", "NUMALIGARH - NMGY", "BELDA - BLDA", "MONU - MANU", "S K PARA - SKAP", "JAWAHARNAGAR - JWNR", "AMBASA - ABSA", "MUNGAIAKAMI - MGKM", "TELIAMURA - TLMR", "JIRANIA - JRNA", "JOGENDRANAGAR - JGNR", "AGARTALA - AGTL", "EKMA - EKMA", "JIRADEI - ZRDE", "BILASPUR ROAD - BLQR", "SORON - SRNK", "SANJARPUR - SJER", "SAJANVAR ROAD - SJF", "SANJHA - SJJ", "SURJA KAMAL - SJKL", "SGM JAGARLAMUDI - SJL", "SAJUMA - SJM", "SANJAN - SJN", "SUJANPUR - SJNP", "SHUJALPUR - SJP", "SURJYAPUR - SJPR", "SURAJPUR ROAD - SJQ", "SHAMLAJI ROAD - SJS", "SALEMGARHMASANI - SJSM", "SHUJAATPUR - SJT", "SOJITRA - SJTR", "SAKHUN - SK", "SIKANDRA RAO - SKA", "SHIKOHABAD JN - SKB", "SAKHOTI TANDA - SKF", "SAKTIGARH - SKG", "SAKTESGARH - SKGH", "SAKRI JN - SKI", "SAHIBPUR KAMAL - SKJ", "SIKKAL - SKK", "SINGAPERUMLKOIL - SKL", "SUKLI - SKLI", "SHANKARPUR - SKLP", "SAKLESHPUR - SKLR", "SINGARAYAKONDA - SKM", "SRIKRISHN NAGAR - SKN", "SHAKAR NAGAR - SKNR", "SHANKARPALLI - SKP", "SOMANAYAKKANPTI - SKPT", "SIKANDARPUR - SKQ", "SAKHPUR - SKR", "SALEKASA - SKS", "SIKOSA - SKSO", "SAKTI - SKT", "SIKRODA - SKU", "SANKVAL - SKVL", "SHEIKHUPUR - SKW", "SARKARA - SKX", "SHIKARA - SKY", "SIRPUR KAGAZNGR - SKZR", "SALBONI - SLB", "SAKALDIHA - SLD", "SILLI - SLF", "SIMLAGARH - SLG", "SULERJAVALGE - SLGE", "SHELGAON - SLGH", "SANKARALINGAPRM - SLGM", "SIMALUGURI JN - SLGR", "SILIARI - SLH", "SALHANA - SLHA", "SULAH HMCHL PDH - SLHP", "SANGLI - SLI", "SAKRIGALI JN - SLJ", "SANDAL KALAN - SLKN", "SALAKATI - SLKX", "SOMALAPURAM - SLM", "SULTANPUR - SLN", "VITHISVARANKOL - VDL", "VADALA ROAD BBY - VDLR", "VADAMADURA - VDM", "VADGAON - VDN", "BAIJNATH ANDOLI - VDNP", "VADIPPATTI - VDP", "VANDALUR - VDR", "VIDYASAGAR - VDS", "VADIYA DEVLI - VDV", "VEDARANNIYAM - VDY", "VELLARAKKAD - VEK", "VELLANUR - VEL", "VELI - VELI", "VIRAMGAM JN - VG", "VEPAGUNTA - VGA", "VILANGUDI - VGD", "VALAPPADI G HLT - VGE", "VANGANI - VGI", "VAGHLI - VGL", "VINNAMANGALAM - VGM", "VANGAON - VGN", "VEGANPUR - VGP", "UNGUTURU - VGT", "WIHIRGAON - VHGN", "VAHLYAL - VHL", "VILLIANUR - VI", "VINA - VINA", "VIRINCHIPURAM - VJ", "VEJANDLA - VJA", "VIJPADI ROAD - VJD", "VIJAPUR - VJF", "VEJALKA - VJK", "VIJIYPUR JAMMU - VJPJ", "VIJAYANAGAR - VJR", "VAJIRABAD - VJRD", "VIKHROLI - VK", "VERKA JN - VKA", "VIKARABAD JN - VKB", "BAKHRABAD - VKD", "VAVADI KHURD - VKG", "VENKATAGIRI - VKI", "VANKAL - VKL", "VENKATESAPURAM - VKM", "VINUKONDA - VKN", "VALMIKINAGAR RD - VKNR", "VARAKALPATTU - VKP", "VENKATNAGRA - VKR", "VENKATACHALAM - VKT", "V N RAJUVARIPTA - VKZ", "VILAD - VL", "BAVLA - VLA", "VELACHHA - VLC", "VAYALPAD - VLD", "VALADI - VLDE", "VITHALWADI - VLDI", "VALADAR - VLDR", "VALIGONDA - VLG", "VALLIKUNNU - VLI", "VILLIVAKKAM - VLK", "VELLAYIL - VLL", "VILEGAON - VLN", "SUKINDA ROAD - SKND", "TOMKA - TMKA", "HARICHANDANPUR - HCNR", "SITABINJ - STBJ", "NARANPUR - NANR", "KENDUJHARGARH - KDJR", "KANDARPUR - KDRP", "RAGHUNATHPUR - RCTC", "RAHAMA - RHMA", "SOMNATH - SMNH", "SAHIBZADA ASNGR - SASN", "GORAKHNATH - GRKN", "BADABANDHA - BDBA", "AKSHAYWAT R NGR - AYRN", "SAINAGAR SHIRDI - SNSI", "KALAMBOLI - KLMC", "CARMELARAM - CRLM", "GONDWANAVISAPUR - GNVR", "HAMARAPUR - HMRR", "TAKLIMIYA - TKMY", "SAHELI - SAHL", "LAKKADKOT - LKKD", "BORDI ROAD - BRRD", "BASARI - BSRI", "CHORGHATPIPARIA - CRE", "DABPAL - DBF", "BANKA - BAKA", "DARIYAGANJ - DAYG", "KRISHNA BALLABH - KBSH", "NARGANJO - NRGO", "BIJULI HALT - BJIH", "JOGESWAR BIHAR - JGBR", "BEKAL FORT - BFR", "KUMHAR MARENGA - KMEZ", "SUGAPAHARI HALT - SGPA", "MIYANA - MINA", "BALLENAHALLI - BAHI", "SONUABARI - SNBR", "NAL HALT - NAL", "KUSHAL PURA - KLSP", "VIJAY PUR - VJP", "VIKHRAN ROAD - VKH", "KOLKATA - KOAA", "ANK MMR DIRECT - ANKX", "INDARGARH - IDGH", "BANAGANAPALLE - BGNP", "TO DARJEELING - DJRZ", "SRINAGAR - SNAR", "HATHIDAH UPPER - HTZU", "SOMTANE - SMNE", "NILAJE - NIIJ", "MARAHRA - MHA", "HANUMAN STATION - HNMN", "DIBRUGARH - DBRG", "NAMKHANA - NMKA", "BAPUDM MOTIHARI - BMKI", "MALLEMADUGU - MLMG", "PHALODI JN - PLCJ", "RAMACHANDRAPURM - RBCS", "ANAND VIHAR TRM - ANVT", "BAGHUAPAL - BGPL", "TANGIRIAPAL - TGRL", "SALAUNA - SLNA", "SAMALKOT JN - SLO", "SELOO ROAD - SLOR", "SALPA - SLP", "SHIVALINGAPURAM - SLPM", "SALOGRA - SLR", "SURLA ROAD - SLRD", "SALARPUR - SLRP", "SALANPUR - SLS", "SILAUT - SLT", "SILLAKKUDI - SLTH", "SASALU - SLU", "SANDALPUR - SLV", "SOHWAL - SLW", "SILAWAR - SLWR", "SELENG HAT - SLX", "SAMALPATTI - SLY", "SOLARI - SLZ", "SAMSI - SM", "SHRI MAHABIRJI - SMBJ", "SIMBHOOLI - SMBL", "SAMBA - SMBX", "SAMNAPUR - SMC", "SHYAM CHAK - SMCK", "SIMEN CHAPARI - SMCP", "CHARANMAHADEVI - SMD", "SAMUDRAM - SMDM", "SHAHABAD MD.PUR - SMDP", "SIMODARA - SMDR", "SHIVAMOGGA H - SME", "SHIVAMOGGA TOWN - SMET", "SAMAGURI - SMGR", "SIMRAHA - SMH", "SITAMARHI - SMI", "SAMALKHA - SMK", "SHAM KAURIA - SMKR", "SOMANKATTI - SMKT", "SIMLA - SML", "SAMLAYA JN - SMLA", "SHIMILIAGUDA - SMLG", "SWAMIHALLI - SMLI", "SAMLOTI - SMLT", "SALIYAMANGALAM - SMM", "SARMATANR - SMND", "SEMAPUR - SMO", "SHAMBHUPURA - SMP", "SHRI MADHOPUR - SMPR", "SHAMLI - SMQL", "SAMDHARI JN - SMR", "SUMRERI - SMRR", "SAMASWARA - SMSR", "SALAMATPUR - SMT", "SAMUKTALA ROAD - SMTA", "SOMTHAN - SMTN", "SAMBHU - SMU", "SIMURALI - SMX", "SARAI MIR - SMZ", "SUKNA - SN", "VILLE PARLE - VLP", "VELLORE CANT - VLR", "VALATHOOR - VLT", "VADALUR - VLU", "VALIVEDU HALT - VLV", "VALLABH VDYANGR - VLYN", "VILLUPURAM JN - VM", "VIKRAMGARH ALOT - VMA", "VADLAMANNADU - VMD", "VEMULAPADU - VML", "VEMULURIPADU - VMLD", "VALARAMANIKKAM - VMM", "VALLAMPADUGAI - VMP", "VEMAR - VMR", "VEMURU - VMU", "VANIYAMBADI - VN", "VARANGAON - VNA", "VANIYAMBALAM - VNB", "VENDRA - VND", "VISWANATH CHRLI - VNE", "VISNAGAR - VNG", "VANJIPALAIYAM - VNJ", "BINAIKI - VNK", "VANKIYA - VNKA", "VELANANDAL - VNL", "ONTIMITTA - VNM", "BHANAUR - VNN", "DEVANUR - VNR", "VANI ROAD - VNRD", "VYANKATPURA - VNT", "VISHNUPURAM - VNUP", "VELLODU - VO", "VIROL - VOL", "VIRAPUR - VP", "VENTRAPRAGADA - VPG", "VACHASPATINAGAR - VPH", "VAIYAMPATTI - VPJ", "VENKATAMPALLE - VPL", "BHUPIA MAU - VPO", "VISAPUR - VPR", "VIRUDUNAGAR JN - VPT", "VELPURU - VPU", "VAILAPUZHA - VPZ", "VIRAMDAD - VQD", "VIRAR - VR", "VALAVANUR - VRA", "VISHRAMBAG - VRB", "VRINDABAN ROAD - VRBD", "VIRDEL ROAD - VRD", "VAREDIYA - VRE", "VIKRAMNAGAR - VRG", "VIRBHADRA - VRH", "VRIDHACHALAM JN - VRI", "VADAJ - VRJ", "VIRKUDI - VRK", "VARKHEDI - VRKD", "VERAVAL - VRL", "VIRANI ALUR - VRLR", "VARNAMA - VRM", "VANGANUR - VRN", "SAGADAPATA - SGDP", "CHILIKIDARA - CLDR", "NILAKANTHESWAR - NKW", "BASANTAPUR - BSTP", "RANYAL JASMIYA - RCJ", "PANISAGAR - PASG", "NALKATA - NLKT", "DUDHNOI - DDNI", "CHAYGAON - CGON", "AZARA - AZA", "VINHERE - VINH", "ZARAP - ZARP", "KALISEN PH - KISN", "WALGAON - WLGN", "HAZARIBAGH TOWN - HZBN", "RENHAT - RENH", "KORATLA - KRLA", "METPALLI - MTPI", "MORTAD - MRTD", "KATLAKUNTA MEDI - KKMP", "BASSI BERISAL - BSSL", "CHINNAKOTE HALT - CNKH", "BAIDPUR - BPUR", "SAIPHAI - SIPI", "KARHAL - KAHL", "BHUJIA - BUJA", "KIRATPUR - KAPU", "N CHANGRABANDHA - NCBD", "MCS CHHATARPUR - MCSC", "ANKSAPUR - AKSP", "ARMUR - ARMU", "JAKLAIR - JKAR", "MARIKAL - MRKL", "MAMIDIPALLI - MIDP", "SOLUR - SOLR", "THIPPASANDRA - TASA", "KUNIGAL - KIGL", "SIDDAPUR H - SIDP", "YEDIYURU - YY", "ADICHUNCHANGIRI - ACCI", "B.G.NAGAR - BGNR", "HIRISAVE - HISE", "NELAMANGALA - NMGA", "BUDAGUMPA - BDGU", "JABBALGUDDA - JBGD", "CHIKKABENAKAL - CKBK", "GANGAVATHI - GGVT", "KADRIDEVARPALLI - KRYP", "SAUNDAL - SUAL", "ALAHABAD CHEOKI - ACOI", "SHAMSHABAD TOWN - SSDT", "KARAUNDHANA - KRDN", "DHIMSIRI - DMSR", "FATEHABAD - FAB", "MANIKPURA - MAKP", "BHADRAULI - BDRI", "BAH - HAB", "JAITPUR KALAN - JTKN", "JAITPURA - JATP", "MADARAHA - MFX", "BEVARA - BVAR", "MANISINGH K P - MGKP", "PHOOP - PHOP", "KOILAKUNTLA - KLKA", "MADDURU - MADU", "NOSSAM - NOSM", "SADANAPURA - SNA", "SANIYAD - SNAD", "SONA ARJUNPUR - SNAP", "SUNDERABAD - SNBD", "SNARAYAN CHAPIA - SNC", "SONDIMRA - SND", "SANDHIA - SNDA", "SENDURAI - SNDI", "SANDAI - SNDY", "SHENOLI - SNE", "SANAT NAGAR - SNF", "SINGHNALI - SNGI", "SANGANER - SNGN", "SINGHPUR - SNGP", "SANGANNAPUR - SNGR", "SAUNSHI - SNH", "SANKHAI - SNHR", "SINDI - SNI", "SATH NARAINI - SNIE", "SINDKHEDA - SNK", "SUNEHTI KHARKHR - SNKE", "SANKARANKOVIL - SNKL", "SANKHALPUR - SNKP", "SANKA - SNKR", "SANAHWAL - SNL", "SANTALPUR - SNLR", "SITANAGARAM - SNM", "SONEGAON - SNN", "SOMANUR - SNO", "SONIPAT - SNP", "SINGARPUR - SNPR", "SANKARPUR - SNQ", "SHYAMNAGAR - SNR", "SANWARA - SNRA", "BY SANDHURST RD - SNRD", "SASNI - SNS", "SONSHELU - SNSL", "SONASAN - SNSN", "SAINTHIA - SNT", "SANTALDIH - SNTD", "SONTHALIYA - SNTH", "SANATHAL - SNTL", "SANGRAMPUR - SNU", "SONDAD - SNV", "SANVATSAR - SNVR", "SANEH ROAD - SNX", "SHERGANJ - SNZ", "MAS SLT COTAURS - SO", "SANOSRA - SOA", "SOMRA BAZAR - SOAE", "SILANIBARI - SOB", "SHILLONG O A - SOC", "SOJAT ROAD - SOD", "SHEOPUR KALAN - SOE", "SAOTA - SOF", "SURATGARH JN - SOG", "SIROHI ROAD - SOH", "SOHAL - SOHL", "SONARIPUR - SOI", "SAROJINI NAGAR - SOJ", "SIHOR GUJARAT - SOJN", "SOLAN - SOL", "VAJDI ROAD - VRO", "VIRAPANDY ROAD - VRPD", "VIRARAKKIYAM - VRQ", "VIRPUR - VRR", "VIRSAD - VRS", "VRIDDHACHALM TN - VRT", "VALLIVERU - VRU", "VIRAVADA - VRV", "VIRAVALLI - VRVL", "VARAHI - VRX", "VISHVAMITRI - VS", "VASIND - VSD", "VASCO DA GAMA - VSG", "VISHVAMITRI - VSI", "VISAKHAPATNAM - VSKP", "WASANAPURA - VSP", "BIJAYSOTA - VST", "BISHNUPUR - VSU", "VASADVA - VSV", "VISAVADAR - VSW", "VELLORE TOWN - VT", "VATVA - VTA", "VARETHA - VTDI", "BHETAGURI - VTG", "VARTEJ - VTJ", "VALLATTOLNAGAR - VTK", "VADTAL SWAMNRYN - VTL", "VETAPALEM - VTM", "VAITARNA - VTN", "VASTRAPUR - VTP", "VALANTARAVAL - VTV", "VIRUL - VUL", "VALIVADE - VV", "VARVALA - VVA", "VIVEKA VIHAR - VVB", "VAVDI - VVD", "VIDYAVIHAR - VVH", "VADVIYALA - VVL", "VIRAVASARAM - VVM", "VIKRAVANDI - VVN", "VIRAVANALLUR - VVR", "VAVERA - VVV", "VIDURASWATTHA - VWA", "VISHWANATH PURI - VWP", "VADOD - VXD", "VELLPAPALYAM - VXM", "VYARA - VYA", "VILAYATKALAN RD - VYK", "VYASNAGAR - VYN", "VYASANAKERI - VYS", "VIJAYAMANGALAM - VZ", "VIZIANAGRAM JN - VZM", "BHANJPUR - VZR", "BALWA - WAB", "WADALI - WAD", "WADI - WADI", "WAIR - WAIR", "WANI - WANI", "WADHWAN CITY - WC", "WIMCO NAGAR - WCN", "SANJAMALA - SJMA", "S.UPPALAPADU - SUPP", "KESHOLI - KOLI", "PABBAPURAM HALT - PBAP", "GANGANAPALLE - GGNP", "PENDLIMARRI - PDMI", "NAVANAGAR HALT - NANH", "SULIKERI - SIKI", "KERAKALAMATTI - KKMI", "HIRE SHELLIKERI - HESK", "CHICKASHELIKERI - CASK", "KHAJJIDONI - KJDI", "DR AMBEDKAR NGR - DADN", "DEEN DAYAL DHAM - DDDM", "SOMNA - SOM", "SONAMUKHI - SONA", "SONI - SONI", "SAONER JN - SONR", "SHIUPUR - SOP", "SOMPUR ROAD - SOQ", "SONAGIR - SOR", "SUR ROAD - SORD", "SORO - SORO", "SOMESAR - SOS", "SHOHRATGARH - SOT", "SUPAUL - SOU", "SUKRIMANGELA - SOY", "SOLADI - SOZ", "SAIDAPET - SP", "S PANAMBAKKAM - SPAM", "SITAPUR CITY - SPC", "SUPEDI - SPD", "SAPDA - SPDA", "SULLURUPETA - SPE", "STUARTPURAM - SPF", "SARAI GOPAL - SPGL", "SRIPURIAGAON - SPGN", "SAMPIGE ROAD - SPGR", "SHAMPURHALLI - SPHL", "SAMASTIPUR JN - SPJ", "SAPEKHATI - SPK", "SUNDARAPRMLKOIL - SPL", "SUJNIPARA - SPLE", "SHAHJEHANPUR - SPN", "SURPURA - SPO", "SHAHPUR PATOREE - SPP", "SHUDNIPUR - SPPR", "SORUPETA - SPQ", "SONARPUR JN - SPR", "SILLIPUR - SPRA", "SINGAPURAM ROAD - SPRD", "SITAPURAM - SPRM", "SHRIPAT SHRKHND - SPS", "SOMPETA - SPT", "SILAPATHAR - SPTR", "SIVAPUR - SPV", "SAPATGRAM - SPX", "SARSONPURI - SPY", "SIPAYA - SPYA", "SAMPLA - SPZ", "SINGHABAD - SQB", "SATTIRAKKUDI - SQD", "SAMARALA HALT - SQE", "SUKRITIPUR - SQF", "SAILA KHURD - SQJ", "SHANKAR - SQK", "SONTALAI - SQL", "SARAI KANSRAI - SQN", "SALAGAON - SQQ", "SULTANPUR LODI - SQR", "SIGSIGI - SQS", "SIDHWALIA - SQW", "SABLI ROAD - SR", "SEMRA - SRA", "SIRAS - SRAS", "WADRENGDISA - WDA", "WADEGAON - WDG", "WANDERJATANA - WDJ", "WANDAL - WDL", "WADWAL NAGNATH - WDLN", "WYNDHAMGANJ - WDM", "VADGAON NILA - WDN", "WADIARAM - WDR", "WADSINGE - WDS", "WELLINGTON - WEL", "WENA - WENA", "WHITEFIELD - WFD", "WAGHODA - WGA", "WAGHAI - WGI", "WAGHANIYA - WGN", "WAGHORIYA - WGR", "WEST HILL - WH", "WASHIM - WHM", "WIRUR - WIRR", "WALAJABAD - WJ", "VEJPUR - WJP", "WALAJAH ROAD JN - WJR", "VAKAV - WKA", "WADAKANCHERI - WKI", "WANKANER JN - WKR", "WARANGAL - WL", "VALTOHA - WLA", "VALHA - WLH", "VISHRAMPURA - WMP", "WAN ROAD - WND", "WANEGAON - WNG", "WANGAPALLI - WP", "WANPARTI ROAD - WPR", "WARDHA JN - WR", "WALAYAR - WRA", "WARUDKHED - WRD", "WARIGAON NEWADA - WRGN", "WARASEONI - WRI", "WARORA - WRR", "WARIS ALEGANJ - WRS", "WADSA - WSA", "WASHIMBE - WSB", "WASUD - WSD", "VASAN IYAWA - WSE", "WANSJALIYA - WSJ", "WASHERMANPET - WST", "JAM WANTHALI - WTJ", "WATHAR - WTR", "SORATH VANTHIL - WTS", "VAVANIYA - WWA", "WAZERGANJ - WZJ", "BPT STATION - XXXX", "YELIYUR - Y", "YERRAGUNTLA - YA", "YAQUTGANJ - YAG", "YATALURU - YAL", "YADLAPUR - YDLP", "YEDAPALLI - YDP", "YADVENDRANAGAR - YDV", "YUSUFPUR - YFP", "YADGIR - YG", "YERAGOPPA - YGA", "YERRAGUDIPAD - YGD", "YELGUR - YGL", "YAKUTPURA KCG - YKA", "YEOLA - YL", "YALVIGI - YLG", "SARAGBUNDIA - SRBA", "SURBARI - SRBR", "SEHARA BAZAR - SRBZ", "SANTRAGACHI JN - SRC", "SARADIYA - SRDA", "SARSADH - SRDH", "SARDARSHAHR - SRDR", "SHRIMAD DWKPURI - SRDW", "SAHARANPUR - SRE", "SAGAR JAMBAGARU - SRF", "SURAJGARH - SRGH", "SRIRANGAM - SRGM", "SARAYGARH - SRGR", "SURENDRANAGAR G - SRGT", "SALMARI - SRI", "SHANKARGARH - SRJ", "SURAJ KUNDA - SRJK", "SIRJAM - SRJM", "SAMRAU - SRK", "SEMARKHERI - SRKI", "SHEREKAN - SRKN", "SAROLA - SRL", "SARNA - SRM", "SIRSI MUKHDUMPR - SRMP", "SRIRAMPURAM - SRMR", "SIRMUTTRA - SRMT", "SRIRAMNAGAR - SRNR", "SARNATH - SRNT", "SIRATHU - SRO", "SERAMPORE - SRP", "SRIRAMPUR ASSAM - SRPB", "SWARUPGANJ - SRPJ", "SIRIPURAM - SRPM", "SRIPANI - SRPN", "SARUPSAR JN - SRPR", "SHORANUR JN - SRR", "SARSI - SRSI", "SATUR - SRT", "SOOROTHEE - SRTE", "SIBSAGAR TOWN - SRTN", "SALEMPUR JN - SRU", "SIRPUR TOWN - SRUR", "SHIRVA - SRVA", "SRAVANUR - SRVN", "SIRUVATTUR - SRVT", "SURAVALI - SRVX", "SHRI KARANPUR - SRW", "SURA NUSSI - SRX", "SIRARI - SRY", "SARDARGARH - SRZ", "SHIRSOLI - SS", "SIRSA - SSA", "SHAKURBASTI - SSB", "SHAHI - SSC", "SHAMSABAD - SSD", "SIRSUPHAL - SSF", "SHIU SAGAR ROAD - SSG", "SUISA - SSIA", "SISARKA - SSKA", "SUSKAL - SSKL", "ANEKAL ROAD - AEK", "ATELI - AEL", "AMRELI PARA - AEP", "ADDERI - AEX", "AGRA FORT - AF", "ANGAMALI - AFK", "ASAFPUR - AFR", "ARANGHATA - AG", "AGRA CITY - AGA", "AGRADWIP - AGAE", "AGAS - AGAS", "AGRA CANTT - AGC", "ANGADI - AGCI", "AGASOD - AGD", "AGRAN DHULGAON - AGDL", "ANGAI - AGE", "AMGURI - AGI", "AMARGOL - AGL", "AGARAM SIBBANDI - AGM", "AMGAON - AGN", "AGARPARA - AGP", "ASIRGARH ROAD - AGQ", "AMARGARH - AGR", "AGTHORI - AGT", "AGASTIYAMPALLI - AGX", "AGORI KHAS - AGY", "AMAGURA - AGZ", "ACHHNERA JN - AH", "ABHAIPUR - AHA", "AHERWADI - AHD", "AHMADGARH - AHH", "ASHTI - AHI", "AHJU - AHJU", "AHALYAPUR - AHLR", "AHIMANPUR - AHM", "AHIRAN - AHN", "ADARSHNAGAR - AHO", "AHERA HALT - AHQ", "AMGHATA - AHT", "AHIRAULI - AHU", "ADHINPUR - AHZ", "ADIPUR - AI", "AJARAKA - AIA", "ALGAWAN - AIG", "ALAWALPUR I PUR - AIH", "AJMER JN - AII", "AILAM - AILM", "ATTIPPATTU - AIP", "ALINDRA ROAD - AIR", "AIT - AIT", "AJGAIN - AJ", "ANJAR - AJE", "AJHAI - AJH", "ANJHI SHAHABAD - AJI", "AJIT - AJIT", "ARAKKONAM JN - AJJ", "AJITWAL - AJL", "ADRAJ MOTI - AJM", "AJNOD - AJN", "AJNI - AJNI", "AJJAMPUR - AJP", "AJAIBPUR - AJR", "AUJARI - AJRE", "AJITGILL MATTA - AJTM", "ARJUNI - AJU", "AJWA - AJWA", "AKOLA JN - AK", "AKKAMPET - AKAT", "KUDNI - KUDN", "KURSELA - KUE", "KAURHA - KUF", "KUSUGALI - KUG", "KHACHROD - KUH", "KUHI - KUHI", "KULALI - KUI", "KORUKONDA - KUK", "KALLAYI - KUL", "KURAM - KUM", "KUMARBAGH - KUMB", "KARNAL - KUN", "KUND - KUND", "KUP - KUP", "KHURDPUR - KUPR", "KURETHA - KUQ", "KHURDA ROAD JN - KUR", "KORARI - KURO", "KANAUTA - KUT", "KHUMTAI - KUTI", "KUWANTHAL - KUTL", "KUHURI - KUU", "KUNDARA - KUV", "KANWAR - KUW", "KHIRSADOH JN - KUX", "KULIPALAIYAM - KUY", "KAYAVAROHAN - KV", "KAVAS - KVA", "KAPARPURA - KVC", "KADAVAKUDURU - KVDU", "KAVALANDE - KVE", "KUNEANGANJ - KVG", "KOLVAGRAM - KVGM", "KHAMBHEL - KVH", "KESHAVGANJ - KVJ", "KAVATHE MAHANKL - KVK", "KIZHVELUR - KVL", "KARUVALLI - KVLR", "KARAKAVALASA - KVLS", "KAVUTARAM - KVM", "KAVANUR - KVN", "KAPADVANJ - KVNJ", "KEVDI ROAD - KVO", "KOSIARA - KVQ", "KOVVUR - KVR", "KALSUR - KVS", "KUNKAVAV TOWN - KVT", "KADAKAVUR - KVU", "KUSUMBHI - KVX", "KAVALI - KVZ", "KHERVADI - KW", "KATWA - KWAE", "KANIWARA - KWB", "KUNDWA CHAINPUR - KWC", "KARWANDIA - KWD", "KHURIAL - KWE", "KATWA - KWF", "KACHHWA ROAD - KWH", "KIVARLI - KWI", "KHOJEWALA - KWJ", "KHERWA KOCHA - KWKC", "KAMPUR - KWM", "KACHEWANI - KWN", "KARAUTA - KWO", "BAIKUNTHPUR RD - BRH", "BARYAL HIMACHAL - BRHL", "BARHRAGRAM - BRHM", "BARAHU - BRHU", "BHIRINGI - BRI", "BRACE BRIDGE - BRJ", "BRAJRAJNAGAR - BRJN", "BAHRAICH - BRK", "BARKA KANA - BRKA", "BORAKI - BRKY", "BARWALA ROAD - BRL", "BRAYLA CHAURASI - BRLA", "BAR LANGFER S - BRLF", "BIROLIYA - BRLY", "BARABAMBO - BRM", "BIRAMDIH - BRMD", "BERMO - BRMO", "BIRMITRAPUR - BRMP", "BHARMAR - BRMR", "BARAMATI - BRMT", "BARMI - BRMX", "BARHAN - BRN", "BERAWANYA - BRNA", "BARUANAGAR - BRNR", "BARUIPUR JN - BRP", "BARUIPARA - BRPA", "BARPALI - BRPL", "BARIPUR MANDALA - BRPM", "BIRAPATTI - BRPT", "BAGRAKOT - BRQ", "BARAKAR - BRR", "BIYAVRA RAJGARH - BRRG", "BARARA BUZURG - BRRZ", "BIRSINGHPUR - BRS", "BARWA KALAN - BRSA", "BRAR SQUARE - BRSQ", "BIRPUSHATTAMPUR - BRST", "BRAHMAVART - BRT", "BARITHENGARH - BRTG", "BHORTEX - BRTK", "BHARTHALI - BRTL", "BHAIROGANJ - BRU", "BORVIHIR - BRVR", "BARIWALA - BRW", "BARWADIH JN - BRWD", "BAREILLY - BRY", "BARHIYA - BRYA", "BARETA - BRZ", "BANISAR - BS", "BHAINSA - BSA", "BANSH BARIA - BSAE", "BHAIYASAR - BSAR", "VARANASI JN - BSB", "BIR SHIBPUR - BSBP", "BANSHLAI BRIDGE - BSBR", "BULANDSHAHR - BSC", "BASULDANGA - BSD", "BANIYA SANDA DH - BSDA", "BHARSENDI - BSDL", "BHUSANDPUR - BSDP", "DASALWADA A RD - DTD", "DEULTI - DTE", "DANTLA - DTF", "DIGNAGAR - DTG", "DETROJ - DTJ", "DATTAPUKUR - DTK", "DARRITOLA - DTL", "DHAMTAN SAHIB - DTN", "DALTONGANJ - DTO", "DIVITI PALLI - DTP", "DHAMTARI - DTR", "DANTRA - DTRA", "DHUTRA - DTV", "DATEWAS - DTW", "DANGTAL - DTX", "DHAURA - DUA", "DABTARA - DUB", "DUBAHA - DUBH", "DUDHANI - DUD", "DUDAHI - DUE", "DHURI JN - DUI", "DUBRAJPUR - DUJ", "DUDIA - DUK", "DAULATPUR HRYNA - DULP", "DHAURMUI JAGHNA - DUM", "DUGANPUR - DUN", "DHAURSALAR - DUO", "DHULIPALLA - DUP", "DUKHNAWARAN - DUQ", "DESUR - DUR", "DUMRAON - DURE", "DURG - DURG", "DULRASAR - DUS", "DUSI - DUSI", "DUM DUMA TOWN - DUT", "DUPADU - DUU", "DUNGGARPUR QURY - DUV", "DUMIYANI - DUY", "DHUVA - DV", "DELVADA - DVA", "DUVVADA - DVD", "DAVANGERE - DVG", "DEVGAM - DVGM", "DEVI HALT - DVH", "DEVLALI - DVL", "DALBHUMGARH - DVM", "DEVTHANA - DVN", "DORAVART CHTRAM - DVR", "DEVALIYA - DVY", "DAILWARA - DWA", "DHEKVAD - DWD", "DIGHWA DUBAULI - DWDI", "D SAGAR WTR FLS - DWF", "DEWANGANJ - DWG", "DINGWAHI - DWI", "DWARKAGANJ - DWJ", "DWARKA - DWK", "DHUWALA - DWL", "DHAUNI - DWLE", "DARWHA M BGH JN - DWM", "DIWANA - DWNA", "DOIWALA - DWO", "DWARAPUDI - DWP", "DHARWAR - DWR", "DEWAN HAT - DWT", "DEWAS - DWX", "DANTEWARA - DWZ", "DIGOD - DXD", "JEJURI - JJR", "JAI JAI WANTI - JJT", "JOJWA - JJW", "JAKOLARI - JK", "JAKHVADA - JKA", "JANKIDAIPUR - JKDP", "JUKEHI - JKE", "JAHANIKHERA - JKH", "JAKHODLKHERA - JKHI", "KAURIAA JUNGLE - JKI", "JANKAMPET JN - JKM", "JAKHANIAN - JKN", "JHARKHANDI - JKNI", "JAKKALACHERUVU - JKO", "JHAREKAPUR - JKP", "JAKHAPURA - JKPR", "JAULKHERA - JKR", "JAKSI - JKS", "JEKOT - JKT", "JITAKHERI - JKZ", "JALGAON JN - JL", "JARWAL ROAD - JLD", "JULGAON DECCAN - JLG", "JHILAHI - JLHI", "JALALGANJ - JLL", "JHILO - JLLO", "JALIYA MATH - JLM", "JAKHALAUN - JLN", "JALPUR - JLQ", "JETALSAR JN - JLR", "JALESAR ROAD - JLS", "JHAMAT - JLT", "JHALWARA - JLW", "JHILMILI - JLY", "JALAMB JN - JM", "JAMURIA - JMA", "JAMBUSAR CITY - JMBC", "JAMDHA - JMD", "JAMSHER KHAS - JME", "JAMGA - JMG", "JAMGURI - JMI", "JAMUNAMUKH - JMK", "JAMUNIA KALAN - JMKL", "JAWLMUKHI ROAD - JMKR", "JAMIKUNTA - JMKT", "JUMNAL - JML", "JAIMURTINAGAR - JMM", "JAMUAWAN - JMN", "JAMNER - JMNR", "JAMALPUR JN - JMP", "JIMIDIPETA - JMPT", "JAMIRGHATA - JMQ", "JAMSAR - JMS", "JAMTARA - JMT", "JAMUI - JMU", "JAMBARA - JMV", "JAMUNI - JMX", "JHUND - JN", "JULANA - JNA", "JUNAGADH JN - JND", "JANIYANA - JNE", "KHATIPURA - KWP", "KOELWAR - KWR", "KHANALAMPURA WT - KWT", "KURDUVADI - KWV", "KUSWA - KWW", "KUANRIYA - KXA", "KOKALDA - KXD", "KALIAN CHAK - KXE", "KAMPIL ROAD - KXF", "KHARIA KHANGARH - KXG", "KAPURTHALA - KXH", "KURUMURTHI - KXI", "KARIMGANJ JN - KXJ", "KHARKHAUDA - KXK", "KAMARBANDHA ALI - KXL", "KITHAM - KXM", "KANSHBAHAL - KXN", "KUDIKADU - KXO", "KANIYAPURAM - KXP", "KETTI - KXT", "KATA ROAD - KXX", "KARIYAPATTINAM - KXY", "KESARIYA ROAD - KXZ", "KARELI - KY", "KAURIYA - KYA", "KALYAR - KYB", "KHAIRATIYA BH R - KYBR", "KHURAI - KYE", "KAJRAT NAWADIH - KYF", "KIDIYANAGA - KYG", "KHAIRAH - KYH", "KALYANI - KYI", "KAYANKULAM JN - KYJ", "KADIYAM - KYM", "KALYAN JN - KYN", "KALYANKOT - KYNT", "KHANDIKAR - KYO", "KOTTAPALLI - KYOP", "KALYANPUR - KYP", "KAMAKHYA - KYQ", "KARUPPATTI - KYR", "KUSUMKASA - KYS", "KAIYAL SEDHAVI - KYSD", "KAILAHAT - KYT", "KOYILVENNI - KYV", "KARCHHUE - KYW", "KARIHA - KYY", "KIZHA PULIYUR - KYZ", "KHADA - KZA", "KURUMBUR - KZB", "KULUKKALUR - KZC", "KANHANGAD - KZE", "KILA ZAFARGARH - KZH", "KHANDRAWALI - KZI", "KAZIPET JN - KZJ", "KAZHAKUTTAM - KZK", "KAZIPARA - KZPR", "KHIMEL - KZQ", "KULITTHURAI - KZT", "KULITTURAI WEST - KZTW", "KATAR SINGHWALA - KZW", "KHUDDA KORALA - KZX", "KAYALPATTINAM - KZY", "BADSHAHPUR - BSE", "BAIS GODAM - BSGD", "BASUGAON - BSGN", "BHAGSAR - BSGR", "BASIRHAT - BSHT", "BASBARI - BSI", "BHUPALSAGAR - BSJ", "BHESANA MANKNAJ - BSKN", "BANSKHO - BSKO", "BASI KIRATPUR - BSKR", "BHUSAVAL JN - BSL", "BHASILA - BSLA", "BATASPUR - BSLE", "BISANATTAM - BSM", "BANASANDRA - BSN", "BILASPUR JN - BSP", "BIASPIND - BSPD", "BISHANPUR HRYNA - BSPH", "BISPUR - BSPK", "BASSI PATHANAM - BSPN", "BISHRAMPUR - BSPR", "BARSI TAKLI - BSQ", "BANSIPUR - BSQP", "VASAI ROAD - BSR", "BESROLI - BSRL", "BAGEVADI RD - BSRX", "BAHADUR SINGH W - BSS", "BASTI - BST", "BISALPUR - BSUR", "BANESWAR - BSW", "BAISWARA - BSWA", "BHEMSWADI - BSWD", "BASAR - BSX", "BARSATHI - BSY", "BARKISALALYA - BSYA", "BHARWA SUMERPUR - BSZ", "BARASAT - BT", "BIHTA - BTA", "BUTI BORI - BTBR", "BALAGHAT JN - BTC", "BOTAD JN - BTD", "BHARATPUR JN - BTE", "BATHNAHA - BTF", "BASHARATGANJ - BTG", "BETTADNAGENHALI - BTGH", "BETTIAH - BTH", "BITHAULI - BTHL", "BHATINDA JN - BTI", "BHATINDA CBA - BTIA", "BISHNATHGANJ - BTJ", "BANKATA - BTK", "BHARATKUND - BTKD", "BHARAT KUP - BTKP", "BORTALAO - BTL", "BATTULAPURAM - BTM", "BHITAURA - BTO", "BABATPUR - BTP", "BETHAMPUDI - BTPD", "BHATPUR - BTPR", "BETNOTI - BTQ", "BANSADHARA - BSDR", "DHARANGAON - DXG", "DUHAI - DXH", "DHANA KHERLI - DXK", "DUDDHINAGAR - DXN", "DIGSAR - DXR", "DUHRU - DXU", "DARYABAD - DYD", "DAYANAND NAGAR - DYE", "DUDHIA KHURD - DYK", "DARYAPUR - DYP", "DIYURI - DYU", "DASUYA - DZA", "DAHINA ZAINABAD - DZB", "DURGACHAK - DZK", "DHANA LADANPUR - DZL", "DARAZPUR - DZP", "ERODE JN - ED", "EDDULADODDI - EDD", "EDAMANN - EDN", "ELURU - EE", "IRANAGALLU - EGU", "EKCHARI - EKC", "EKLAKHI - EKI", "EKDIL - EKL", "EZHUKONE - EKN", "EKANGARSARAI - EKR", "ELAMANUR - EL", "ERALIGU - ELL", "ELIMALA - ELM", "ACHALPUR - ELP", "ELAVUR - ELR", "ISAND - EN", "ELLENABAD - ENB", "ENNORE - ENR", "BB ELPHNSTNE RD - EPR", "ERICH ROAD - ERC", "ERANIEL - ERL", "ERNAKULAM TOWN - ERN", "ERNAKULAM JN - ERS", "ISIVI - ESV", "ITARSI JN - ET", "ETAH - ETAH", "ETAKKOT - ETK", "ETTUMANUR - ETM", "ETTIMADAI - ETMD", "ETTAPUR ROAD - ETP", "ELATTUR - ETR", "ETMADPUR - ETUE", "ETAWAH - ETW", "EDAVAI - EVA", "FALNA - FA", "FATEHNAGAR - FAN", "FAKHARPUR HALT - FAP", "FARAH - FAR", "FARRUKHABAD - FBD", "FORBESGANJ - FBG", "FAIZABAD JN - FD", "JANGHAI JN - JNH", "JHINKPANI - JNK", "JANAKINAGAR - JNKR", "JANDIALA - JNL", "JAYNGR MAJLIPUR - JNM", "JANUNIATNA - JNN", "JUNNOR DEO - JNO", "JANAKPUR ROAD - JNR", "JAINTIPURA - JNT", "JINTI ROAD - JNTR", "JAUNPUR JN - JNU", "JNPUR KUTCHERRY - JNUK", "JO JAGABOR - JO", "JANWAL - JOA", "ASALPUR JOBNER - JOB", "JOBA - JOBA", "JOYCHANDI PAHAR - JOC", "JUHARPURA - JOH", "JODHKA - JOK", "JOGAL - JOL", "JOGI MAGRA - JOM", "JONHA - JON", "JAMAI OSMANIA - JOO", "JAUNPUR CITY - JOP", "JORAI - JOQ", "JALOR - JOR", "JOGESHVARI - JOS", "JANAI ROAD - JOX", "JAIPUR - JP", "JALALPUR DHAI - JPD", "JALPAIGURI ROAD - JPE", "JALPAIGURI - JPG", "JHANTIPAHARI - JPH", "JHADUPUDI - JPI", "JAPLA - JPL", "JIYAPURAM - JPM", "JORA ALAPUR - JPO", "JLALPR PANWARA - JPP", "JHAPANDANGA - JPQ", "JAKPUR - JPR", "JMLPR SHAIKHAN - JPS", "JMTRA PARASWARA - JPV", "JOGIGHOPA - JPZ", "JARAIKELA - JRA", "JAUGRAM - JRAE", "JALANDHAR CANT - JRC", "JUGPURA - JRG", "JHARIA - JRI", "JARGAON - JRJ", "JERUWA KHERA - JRK", "JORKIAN - JRKN", "JHARILI - JRL", "JANGIPUR ROAD - JRLE", "JAIRAMNAGAR - JRMG", "JIRON - JRO", "JHAROKHAS - JRQ", "JUGAUR - JRR", "JORAVASAN - JRS", "JARTI - JRT", "CHIKJAJUR JN - JRU", "JUNA RAJUVADIYA - JRV", "JIRWAN - JRWN", "AKODIA - AKD", "AKANAPET - AKE", "ADARKI - AKI", "AKAIPUR HALT - AKIP", "AKBARGANJ - AKJ", "AKKIHEBBAIU - AKK", "ANAKHOL - AKL", "ARAMBAKKAM - AKM", "AKBARNAGAR - AKN", "ADHYATMIK NAGAR - AKNR", "AKALKOT ROAD - AKOR", "AKOT - AKOT", "ANAKAPALLE - AKP", "AKOLNER - AKR", "AKRA - AKRA", "ANKUSPUR - AKS", "AKALTARA - AKT", "ANGALAKUDURU - AKU", "ANKLESHWAR JN - AKV", "AKIVIDU - AKVD", "AKORA - AKW", "AKKURTI - AKY", "AKASHI - AKZ", "ATTILI - AL", "ALAI - ALAI", "ALAL - ALAL", "ALIA BADA - ALB", "ALLAHABAD JN - ALD", "AMLETHA - ALE", "ALER - ALER", "ALGAPUR - ALGP", "ALIGANJ - ALJ", "ALIGARH JN - ALJN", "ALAKKUDI - ALK", "ALAMANDA - ALM", "ALAMPUR - ALMR", "ALMAW - ALMW", "ALANDI - ALN", "ALNIYA - ALNI", "ALAPAKAM - ALP", "ALAMPUR ROAD - ALPR", "AMLORI SARSAR - ALS", "ARIYALUR - ALU", "ANKLAV - ALV", "ALWAL - ALW", "ALLAHABAD CITY - ALY", "ATAMANDA - AMA", "AMBODALA - AMB", "AMBIKA ROHINA - AMBR", "AMRITAPURA - AMC", "AMILA - AMD", "AMETHI - AME", "ALAMNAGAR - AMG", "AZAMGARH - AMH", "AMRAVATI - AMI", "AMIN - AMIN", "AMALSAD - AML", "BUTARI - BTR", "BANTHRA - BTRA", "BETUR - BTRB", "BHATAR - BTRH", "BITROI - BTRI", "BASTA - BTS", "BATASI - BTSI", "BHUTESHWAR - BTSR", "BHATNI JN - BTT", "BITRAGUNTA - BTTR", "BARAUT - BTU", "BAITARANI ROAD - BTV", "BATUVA - BTVA", "BARSI TOWN - BTW", "BELA TAL - BTX", "BETHUADAHARI - BTY", "BALIMARA - BTZ", "BASWA - BU", "BARADWAR - BUA", "BISSAU - BUB", "BHUTAKIA BHIMSA - BUBR", "BADLAPUR - BUD", "BAUDPUR - BUDR", "BARUNA - BUE", "BAGAHA - BUG", "BUGLANWALI - BUGL", "BHURJIHA BARAGN - BUGN", "BURHAR - BUH", "BALLIA - BUI", "BHALULATA - BUL", "BOMMASAMUDRAM - BUM", "BARIARPUR - BUP", "BABUPETH - BUPH", "BARGI - BUQ", "BINDAURA - BUR", "BURNPUR - BURN", "BADAUSA - BUS", "BAYTU - BUT", "BHADANPUR - BUU", "BURHWAL - BUW", "BHANDAK - BUX", "BABHNAN - BV", "BAURIA JN - BVA", "BHAVNAGAR TRMUS - BVC", "BALLABGARH - BVH", "BORIVALI - BVI", "BIKKAVOLU - BVL", "BAYYAVARAM - BVM", "BISWAN - BVN", "BHAVANI NAGAR - BVNR", "BOGOLU - BVO", "BHAVANAGAR PARA - BVP", "BHILAVDI - BVQ", "BANAVAR - BVR", "BHIMAVARAM JN - BVRM", "BHIMAVARAM TOWN - BVRT", "BHIVPURI ROAD - BVS", "BALIPARA - BVU", "BEDETTI - BVV", "BAHMINIWALA - BVW", "NALOI BARWA - BVZ", "FARIDABAD - FDB", "FARIDKOT - FDK", "FARIDABAD NW TN - FDN", "FETEHGARH CHURN - FGCN", "FATEHGARH HRYNA - FGH", "FATEHGARH - FGR", "FATEHGARH SAHIB - FGSB", "FEROK - FK", "FAZILKA - FKA", "FAKHRABAD - FKB", "FURKATING JN - FKG", "FAKIRAGRAM JN - FKM", "PHULERA JN - FL", "PHULAD - FLD", "FALAKATA - FLK", "FALIMARI - FLM", "PHULESWAR - FLR", "PHULIA - FLU", "FALAKNUMA - FM", "FARUKHNAGAR - FN", "FARIDNAGAR - FNG", "FATEHPUR SKHWTI - FPS", "FARHEDI - FRD", "FARHATNAGAR - FRH", "FARENI - FRN", "FARTIKUI - FRTK", "PHURSUNGI - FSG", "FATEH SINGHPURA - FSP", "FAQARSAR - FSR", "FATEH SINGHWALA - FSW", "FATEHPUR CHURSI - FTC", "FATEHABAD CH.JN - FTD", "FURSATGANJ - FTG", "FATUHI - FTH", "FATEHPUR - FTP", "FATEHPUR SIKRI - FTS", "FATWA - FUT", "FAIZULLAPUR - FYZ", "FIROZABAD - FZD", "FAZALPUR - FZL", "FIROZPUR CITY - FZP", "FIROZPUR CANT - FZR", "GONDIA JN - G", "GUDHA - GA", "GALAN - GAA", "GEVRA ROAD - GAD", "GANDHINAGAR JPR - GADJ", "GANGA DHAM - GADM", "GAIPURA - GAE", "GANGAGHAT - GAG", "GALGALIA - GAGA", "GAWNAHA - GAH", "JORANDA ROAD - JRZ", "JASAI - JSA", "YAMUNA SOUTH BK - JSB", "JALESAR CITY - JSC", "JAISINGDER - JSD", "JHARSUGUDA JN - JSG", "JASWANTGARH - JSH", "JASALI - JSI", "JATAULA SAMPHKA - JSKA", "JASSOWAL - JSL", "JAISALMER - JSM", "JASIDIH JN - JSME", "JAYASINGPUR - JSP", "JASPALON - JSPN", "JASRA - JSR", "JASIA - JSS", "JARANDESHWAR - JSV", "JAGATBELA - JTB", "JATINGA - JTG", "JHOKTAHAL SING - JTH", "JAITHARI - JTI", "JOLARPETTAI - JTJ", "JHITKIA - JTK", "JHAPATER DHAL - JTL", "JOTANA - JTN", "JUTOGH - JTO", "JETPUR - JTP", "JATKANHAR - JTR", "JATH ROAD - JTRD", "JATUSANA - JTS", "JORHAT TOWN - JTTN", "JAITIPUR - JTU", "JETALVAD - JTV", "JAITWAR - JTW", "JATPIPLI - JTX", "JODHPUR JN - JU", "JARAUNA - JUA", "JALANDHAR CITY - JUC", "JAGADHRI - JUD", "JAGADHRI WSHOP - JUDW", "JAULKA - JUK", "JHULASAN - JUL", "JHUNPA - JUP", "JUTURU - JUR", "JAVALE - JVA", "JAMWALA - JVL", "JORAVARNAGAR - JVN", "JIBANTI - JVT", "JATWARA - JW", "JAWAI BANDH - JWB", "JWHRPUR KAMSAN - JWK", "JAJIWAL - JWL", "JAWANWALA SHAHR - JWLS", "JIWA ARAIN - JWN", "JAWAD ROAD - JWO", "JWALAPUR - JWP", "JHARWASAA - JWS", "JIRONA - JXN", "JAYNAGAR - JYG", "JONE KARRANG - JYK", "JAI SAMAND ROAD - JYM", "AMLA JN - AMLA", "AMLI - AMLI", "AMALPUR - AMLP", "ATIRAMPATTINAM - AMM", "AMMANUR - AMNR", "AMOLWA - AMO", "AMOD - AMOD", "AHMADPUR JN - AMP", "AMARPURA RATHAN - AMPR", "AMMUGUDA - AMQ", "AMROHA - AMRO", "AMAUSI - AMS", "AMMASANDRA - AMSA", "AMMAPET - AMT", "LUCKNOW ALAMBGH - AMV", "AMAN VADI - AMW", "AMLAKHURD - AMX", "AKATHUMURI - AMY", "AMALNER - AN", "ASLANA - ANA", "ANAS - ANAS", "AMMANABROLU - ANB", "ANNECHAKANAHALI - ANC", "ANDAMPALIAM - AND", "ANAND NAGAR - ANDN", "ANANTARAJUPET - ANE", "ANANDAPURAM - ANF", "AHMADNAGAR - ANG", "ANKORAH AKORHA - ANH", "AJANTI - ANI", "ANJANGAON - ANJ", "ANKAI - ANK", "ANAKHI - ANKI", "ANTROLI - ANL", "ANAIMALAI ROAD - ANM", "ARANG MAHANADI - ANMD", "ANAND JN - ANND", "ANANDTANDAVPUR - ANP", "ANUPALEM - ANPM", "AMNAPUR - ANQ", "ANARA - ANR", "ANANDPUR SAHIB - ANSB", "ANTU - ANTU", "ANANGUR - ANU", "ANNAVARAM - ANV", "ANAND VIHAR - ANVR", "ANAWAL - ANW", "ARUMUGANERI - ANY", "AONLA - AO", "ARAON - AON", "ARGORA - AOR", "ASHOKAPURAM - AP", "AMARPURA - APA", "ANUPPAMBATTU - APB", "ALIPUR DUAR - APD", "ALIPUR DUAR CRT - APDC", "ALIPUR DUAR JN - APDJ", "ANDANAPPETTAI - APE", "ANUPGANJ - APG", "ANUPGARH - APH", "BIWAI - BW", "BHINWALIYA - BWA", "BAGWALI - BWB", "BEWAR BHOJAN - BWBN", "BANWALI - BWC", "BOWAICHANDI - BWCN", "BELVANDI - BWD", "BUTEWALA - BWF", "BHADAURA - BWH", "BILWAI - BWI", "BAWANI KHERA - BWK", "BAWAL - BWL", "BHAWANI MANDI - BWM", "BARDDHAMAN JN - BWN", "BHAWANIPUR KALN - BWP", "BARWA SAGAR - BWR", "BHARATWADA - BWRA", "BADWASI - BWS", "BIJWASAN - BWSN", "BANGARAPET - BWT", "BHIWAPUR - BWV", "BARWAHA - BWW", "BAHMAN DIWANA - BWX", "BADDOWAL - BWZ", "BALOD - BXA", "BANGA - BXB", "BARWALA - BXC", "BARSUAN - BXF", "BHANGA - BXG", "BOKAJAN - BXJ", "BANDARKHAL - BXK", "BHEDUASOL - BXL", "BILLI - BXLL", "BELRAYAN - BXM", "BAYANA JN - BXN", "BOPARAI - BXO", "BARPATHAR - BXP", "BRUNDAMAL - BXQ", "BUXAR - BXR", "PICHCHANDARKOVL - BXS", "BAMANHAT - BXT", "BORDHAI - BXY", "BYCULLA - BY", "BALLARI CANTT - BYC", "BYADGI - BYD", "BANSI BOHERA - BYE", "BHITI - BYH", "BARYA RAM - BYHA", "BURAKAYALAKOTA - BYKT", "BELHA - BYL", "BANAHI - BYN", "BAYALUVADDIGERI - BYO", "BAIJNATHPUR - BYP", "BAIYYAPPANAHALI - BYPL", "BAHAI - BYQ", "BHAYANDAR - BYR", "BARSALI - BYS", "BHATAPARA - BYT", "BETGARA - BYXA", "BYREE - BYY", "BHARUR - BZ", "VIJAYAWADA JN - BZA", "BELIATOR - BZC", "GANESHGANJ - GAJ", "GAJARA BAHARA - GAJB", "GHATLA - GAL", "GUNADALA - GALA", "GANKAR - GALE", "GANJAM - GAM", "GOGAMERI - GAMI", "GANGAGANJ - GANG", "GHANAULI - GANL", "GAIGAON - GAO", "GURPA - GAP", "GANJ KHAWAJA - GAQ", "GADARWARA - GAR", "GAUTAMDHARA - GATD", "GAUR - GAUR", "GAVADAKA - GAV", "GAINJAHWA - GAW", "GAGANAPOSH - GAX", "GAYA JN - GAYA", "GAURI BAZAR - GB", "GARHBETA - GBA", "GUBBI - GBB", "GAURIBIDANUR - GBD", "GAYABARI - GBE", "GOBARDANGA - GBG", "GOPALPUR BALKDA - GBK", "GARH BANAILI - GBN", "BMBY GIRGAUM CB - GBO", "GULABPURA - GBP", "GOBARWAHI - GBRI", "GOVINDPUR ROAD - GBX", "GHAT KOPAR - GC", "GACHHIPURA - GCH", "GHAZIPUR CITY - GCT", "GONDA JN - GD", "GODHRA JN - GDA", "GIDDARBAHA - GDB", "GADRA ROAD - GDD", "GARLADINNE - GDE", "GADAG JN - GDG", "GIDNAHALI - GDH", "GUDGERI - GDI", "GUNDA ROAD JN - GDJ", "GONDA KACHAHRI - GDK", "GONDAL - GDL", "GUDMA - GDM", "GANGAIKONDAN - GDN", "GOVERDHAN - GDO", "GUDUPULLI - GDP", "G POCHAMPALLI - GDPL", "GUDAPARTI - GDPT", "GUDUR JN - GDR", "GADHADA SWAMI - GDSN", "GUDRU HALT - GDU", "GUDIVADA JN - GDV", "GADHWALA - GDW", "GHOKSADANGA - GDX", "GUINDY - GDY", "GHORADONGRI - GDYA", "GUNDARDEHI - GDZ", "GHATERA - GEA", "JEYPORE - JYP", "KAURARA - KAA", "KHANDALA - KAD", "KADI - KADI", "KADIYADRA - KADR", "KODAGANUR - KAG", "KAGANGARH - KAGR", "KALHAR - KAH", "KAIRLA - KAI", "KALIYAGANJ - KAJ", "KHAKHI JALIYA - KAK", "KALLAL - KAL", "KAILI - KALI", "KALANA - KALN", "KAMAKHYAGURI - KAMG", "KAMALPUR - KAMP", "KHANA JN - KAN", "KANDLA - KAND", "KARAN NAGAR - KANG", "KANIL - KANJ", "KANOH - KANO", "KANSIYA NES - KANS", "KALUBATHAN - KAO", "KAOTHA - KAOT", "KALIANPUR - KAP", "KALUPARA GHAT - KAPG", "KOLANUKONDA - KAQ", "KARNA - KAR", "KAKRAHA RST HSE - KARH", "KARAIKKURICHI - KARK", "KIRATPUR SAHIB - KART", "KANAS ROAD - KASR", "KHATAULI - KAT", "KATILI - KATA", "KATOL - KATL", "KATARIYA - KATR", "KACHNA - KAU", "KALAMNA - KAV", "KAVI - KAVI", "KANWAT - KAWT", "KARAIMADAI - KAY", "KHAERTABAD - KB", "KURABALAKOTA - KBA", "KUREBHAR - KBE", "KAREA KDMBGACHI - KBGH", "KHUBAGAON - KBGN", "KHANDBAARA - KBH", "KAMBRGANVI - KBI", "KANTABANJI - KBJ", "KHAMIL GHAT - KBK", "KHABRA KALAN - KBKN", "KOPPAL - KBL", "KOTABOMMALI - KBM", "KARBIGWAN - KBN", "KUBERPUR - KBP", "KUMRABAD ROHINI - KBQ", "KABRAI - KBR", "KANJARI BORIYAV - KBRV", "KADAMBATTUR - KBT", "KASU BEGU - KBU", "KHAN BHANKRI - KBV", "KHOIRABARI - KBY", "AKKARAIPPATTI - API", "AMARPUR JORASI - APJ", "ARUPPUKKOTTAI - APK", "APPIKATLA - APL", "AYODHYAPATTANAM - APN", "ADITPARA - APQ", "ANUPPUR JN - APR", "ANAPARTI - APT", "ANIPUR - APU", "ASHAPURA GOMAT - AQG", "ARA - ARA", "ARAG - ARAG", "ARUNACHAL - ARCL", "AMARDA ROAD - ARD", "ARNETHA - ARE", "ANGAR GHAT - ARG", "ARIGADA - ARGD", "ARGUL - ARGL", "ARALAGUPPE - ARGP", "AMHERA - ARH", "ANTRI - ARI", "AUNRIHAR JN - ARJ", "ARAKKU - ARK", "ARAUL MAKANPUR - ARL", "ARNIA - ARNA", "AMARUN - ARNB", "ARJUNAHALLI - ARNH", "ATRAMPUR - ARP", "ARARIYA COURT - ARQ", "ARARIYA - ARR", "ARASALU - ARU", "ARNI ROAD - ARV", "ARVI - ARVI", "AHRAURA ROAD - ARW", "ARELI - ARX", "ARJANSAR - AS", "ASIFABAD ROAD - ASAF", "ASAN - ASAN", "ASANBONI - ASB", "ATHSARAI - ASCE", "AMBASAMUDRAM - ASD", "ASAUDAH - ASE", "AISHBAGH - ASH", "ARSENI - ASI", "ARSIKERE JN - ASK", "ASHOK NAGAR - ASKN", "ASHOK NAGAR RD - ASKR", "ASLAODA - ASL", "ASLU - ASLU", "ASARMA - ASM", "ASANSOL JN - ASN", "ASANGAON - ASO", "ASPARI - ASP", "AMRITSAR JN - ASR", "ASAOTI - AST", "ASARVA JN - ASV", "BILGA - BZG", "BAZURGHAT - BZGT", "BAZIDA JATAN - BZJT", "BHAINI KHURD - BZK", "BELANAGAR - BZL", "BAZARSAU - BZLE", "BHIMSEN - BZM", "BAGNAN - BZN", "BARSOLA - BZO", "BISRA - BZR", "BANSJORA - BZS", "BETUL - BZU", "BASAI - BZY", "CHAKIA - CAA", "CHANDA FORT - CAF", "CHHABRA GUGOR - CAG", "CHANPATIA - CAI", "CHAKRAJ MAL - CAJ", "CHHOTA AMBANA - CAM", "CHAMUA - CAMU", "KANNUR - CAN", "CHAURADANO - CAO", "CHATRAPUR - CAP", "CHATRAPUR COURT - CAPC", "KANYAKUMARI - CAPE", "CHUNAR - CAR", "CHAS ROAD - CAS", "CHHANSARA - CASA", "CHATTAR HAT - CAT", "CHHATA ASCHAURA - CATA", "CHAUHANI - CAZ", "CHANGRABANDHA - CBD", "COIMBATORE JN - CBE", "COIMBATORE NRTH - CBF", "CHARBHUJA ROAD - CBG", "CHAUBE - CBH", "CLUTTERBUCKGANJ - CBJ", "CHACHAURA BNGJ - CBK", "CUMBUM - CBM", "CHIT BARAGAON - CBN", "CHIK BALLAPUR - CBP", "CHAUBEPUR - CBR", "CHAIBASA - CBSA", "CHARBATIA - CBT", "C BABUSAMUDRAM - CBU", "CHAND BHAN - CBX", "KHAMBHAT - CBY", "CHURAIBARI - CBZ", "CHAURI CHAURA - CC", "CHIGICHERLA - CCA", "CHICHONDA - CCD", "BMBY CHURCH GTE - CCG", "CHINCHVAD - CCH", "CHHACHHAR - CCHR", "GARH BARUARI - GEB", "GULEDAGUDDA RD - GED", "GIR GADHARA - GEG", "GEGAL AKHRI - GEK", "GUNJARIA - GEOR", "GERATPUR - GER", "GARIFA - GFAE", "GANDHIGRAM - GG", "GHOGA - GGA", "GANGADHARA - GGAR", "GARHMUKTESAR BR - GGB", "GANGAPUR CITY - GGC", "GULLAGUDA - GGD", "GHOGARDIHA - GGH", "GOSHAINGANJ - GGJ", "GOVINDGARH KHKR - GGKR", "GANGATIKURI - GGLE", "GORA GHUMA - GGM", "GURGAON - GGN", "GORAM GHAT - GGO", "GANGNAPUR - GGP", "GANGRAR - GGR", "GHUGUS - GGS", "GHUNGHUTI - GGT", "GHORAGHATA - GGTA", "GAGARIYA - GGY", "GHUGHULI - GH", "GOLEHWALA - GHA", "GAHRI BHAGI - GHB", "GARWA ROAD - GHD", "GHEVRA - GHE", "GHAGGHAR - GHG", "GHAGWAL - GHGL", "GARHI HARSARU - GHH", "GAMBHIRPURA - GHI", "GURSAHAIGANJ - GHJ", "GOLHALLI - GHL", "GADADHARPUR - GHLE", "GOHANA - GHNA", "GHANTIKHAL NDPR - GHNH", "GARHWA - GHQ", "GIDHAUR - GHR", "GURU HARSAHAI - GHS", "GHAGHARA CHAT - GHT", "GHANTOLI - GHTI", "GHUM - GHUM", "GARHARA - GHX", "GUWAHATI - GHY", "GUDUVANCHERI - GI", "GARIA - GIA", "GIDDALUR - GID", "GIDNI - GII", "GHIALA - GILA", "GILL - GILL", "GANDHIDHAM BG - GIMB", "GINIGERA - GIN", "GORIYAN - GIO", "GAINSARI JN - GIR", "GARHI SANDRA - GIS", "GIRDHARPUR - GIW", "GIDAM - GIZ", "GANGAJHARI - GJ", "GUJHANDI - GJD", "KUSLAMB - KCB", "KRISHNA CANAL - KCC", "KURICHEDU - KCD", "BOMBAY KC - KCE", "KALCHINI - KCF", "KACHEGUDA - KCG", "KARCHIYA - KCHA", "KACHCHANVILAI - KCHV", "KALIKIRI - KCI", "KASIMPUR - KCJ", "KECKHI - KCKI", "KALASAMUDRAM - KCM", "KARCHANA - KCN", "KACHNARA ROAD - KCNR", "KACHHIA BRIDGE - KCO", "KALGUPUR - KCP", "KIRAKAT - KCT", "KACHHIAA - KCU", "KRISHNA CH PURA - KCV", "KOCHUVELI - KCVL", "KAICHAR - KCY", "KAIRON - KCZ", "KUNDARKHI - KD", "KHED BRAHMA - KDBM", "KOTDA BAVISHI - KDBS", "KORADACHERI - KDE", "KHUNDAUR - KDF", "KEDGAON - KDG", "KODIGEHALLI - KDGH", "KUDGI - KDGI", "KHARDAHA - KDH", "KARCHHA - KDHA", "KUNDHELA - KDHL", "KUNDLI - KDI", "KHUDAGANJ - KDJ", "KOHDAD - KDK", "KENDUKANA - KDKN", "KANKROLI - KDL", "KUNDALGARH - KDLG", "KANDLA PORT - KDLP", "KANDEL ROAD - KDLR", "KESAMUDRAM - KDM", "KANDAMBAKKAM - KDMD", "KODIYAR MANDIR - KDMR", "KUDATINI - KDN", "KADAYANALLUR - KDNL", "KADAKOLA - KDO", "KONDAPURAM - KDP", "KUMEDPUR - KDPR", "KADIPUR - KDQ", "KUDA SALT SDG - KDR", "KADAMPURA - KDRA", "KENDRI - KDRI", "KONDRAPOLE HALT - KDRL", "KUSUNDA JN - KDS", "KHADARPET - KDT", "KIRODIMALNAGAR - KDTR", "KADAMBUR - KDU", "KHADAVLI - KDV", "KETTANDAPATTI - KDY", "KUCHMAN - KCA", "ATA - ATA", "ALATTAMBADI - ATB", "ARTS COLLEGE - ATC", "ATLADARA - ATDA", "ATARRA - ATE", "ATGAON - ATG", "ANTAH - ATH", "ATWA KURSATH - ATKS", "ATHMAL GOLA - ATL", "ALTAGRAM - ATM", "AITHAL - ATMO", "AWATARNAGAR - ATNR", "ANANTAPUR - ATP", "ARANTANGI - ATQ", "ATTAR - ATR", "ATRAURA - ATRR", "ATRU - ATRU", "ATTABIRA - ATS", "ATARI - ATT", "ATTUR - ATU", "ATUL - ATUL", "ALINAGAR TOLA - ATX", "ALUABARI ROAD - AUB", "ANUGRAHA N ROAD - AUBR", "AURAHI - AUI", "AGSAULI - AUL", "AURANG NAGAR - AUN", "AUNG - AUNG", "ATRAULI ROAD - AUR", "ANUPSHAHR - AUS", "AUWA - AUWA", "ASVALI - AV", "AMBEWADI - AVA", "AVADI - AVD", "AVIDHA - AVH", "ARAVANKADU - AVK", "AMRITVEL - AVL", "ARAVALLI - AVLI", "ANAVARDIKHANPET - AVN", "ABHANPUR JN - AVP", "AUVANESWSAREM - AVS", "AVATIHALLI - AVT", "AURANGABAD - AWB", "AWA GARH - AWG", "ALEWAHI - AWH", "ALAWALPUR - AWL", "AGHWANPUR - AWP", "AWAPUR - AWPR", "ALWAR - AWR", "ALWAR TIRUNAGRI - AWT", "ALUVA - AWY", "AMARSAR - AXA", "ASOKHAR - AXK", "ALLURU ROAD - AXR", "AYODHYA - AY", "ALIYABAD - AYB", "AYANDUR - AYD", "AYINGUDI - AYI", "ADIYAKKAMUNGALM - AYM", "AIYANAPURAM - AYN", "AYYALUR - AYR", "ABHAYAPURI ASAM - AYU", "ARYANKAVU - AYV", "AZIMGANJ JN - AZ", "CHINNEKUNTAPALI - CCI", "CHICHAKI - CCK", "CHANCHELAV - CCL", "CHICHOLI - CCO", "CHHUCHHAPURA JN - CCP", "KAKINADA TOWN - CCT", "CHANDRAPUR - CD", "CHUDA - CDA", "CHANDANPUR - CDAE", "CHAUDHRIBANDH - CDB", "CHANDOD - CDD", "CHANDIGARH - CDG", "CHANDRAKONA RD - CDGR", "CHAKDAHA - CDH", "CHANDNI - CDI", "CHANDKHERA ROAD - CDK", "CHODIALA - CDL", "CHIDAMBARAM - CDM", "CHANDESHWAR STH - CDMA", "CHANDAULI MJHWR - CDMR", "CHANDPARA - CDP", "CHADOTAR - CDQ", "CHANDERA - CDRA", "CHHANDRAULI - CDRL", "CHANDISAR - CDS", "CHANDRESAL - CDSL", "CHANDARWA - CDV", "CHHARODI - CE", "CHEBROL - CEL", "CHEKATE G PALEM - CEM", "CHIHERU - CEU", "CHAKITING - CFG", "CANNING - CG", "CHENGEL - CGA", "CHARALI - CGF", "CHOLANG - CGH", "CHINNADAGUDIHDI - CGHD", "CHANDRAGIRI - CGI", "CHENGALPATTU - CGL", "CHIRGAON - CGN", "CHANDAN NAGAR - CGR", "CHANGSARI - CGS", "CHEGUNTA - CGTA", "CHINGAVANAM - CGV", "CHARGOLA - CGX", "CHANGANASERI - CGY", "CHANDAUSI JN - CH", "CHAWAPALL - CHA", "CHABUA - CHB", "CHANDKHIRABAGAN - CHBN", "CHAURE BAZAR - CHBR", "CHAKARBHATHA - CHBT", "CHACHER - CHCR", "CHANDIA ROAD - CHD", "SRIKAKULAM ROAD - CHE", "CHUNNABHATTI - CHF", "GOLDINGANJ - GJH", "GAJJELAKONDA - GJJ", "GAJRAULA JN - GJL", "GANJMURADABAD - GJMB", "GAJNER - GJN", "GOJHARIYA - GJR", "GAJSINGHPUR - GJS", "GANNAGHATTA - GJT", "GURUDIJHATIA - GJTA", "GANGSAR JAITU - GJUT", "GAJUWALA - GJW", "GOLA GOKARANATH - GK", "GHATAKA VARANA - GKB", "GORAKHPUR CANT - GKC", "GADHAKDA - GKD", "GUSKARA - GKH", "GOLAKGANJ - GKJ", "GOKAK ROAD - GKK", "GOKULPUR - GKL", "GUNDLA KAMMA - GKM", "GORAKHPUR JN - GKP", "GANKHERA HALT - GKT", "GHAI KALAN - GKX", "GARLA - GLA", "GOLABAI - GLBA", "GUJRAN BALWA - GLBN", "GHELDA - GLD", "GULABHGANJ - GLG", "GOLAGHAT - GLGT", "GULAOTHI - GLH", "GALSI - GLI", "GULMA - GLMA", "BOMBAY GO CB - GLOB", "GOLLAPROLU - GLP", "GAHLOTA - GLTA", "GULLIPADU - GLU", "GULVANCHI - GLV", "GOLLAPALLY - GLY", "GARMADI - GM", "GUDIMETTA - GMA", "GUMANI - GMAN", "GURAMKHEDI - GMD", "GUMADA - GMDA", "GUMMANDEV - GME", "GUMGAON - GMG", "GOMANGALAM - GMGM", "GAMHARIA - GMH", "GOND UMRI - GMI", "GUMIA - GMIA", "GUMMAN - GMM", "GOREGOAN - GMN", "NSC BOSE J GOMO - GMO", "GAHMAR - GMR", "GARHMUKTESAR - GMS", "GAURIYAMAU - GMU", "GURMURA - GMX", "GOPAL NAGAR - GN", "KADARPUR - KDYA", "KANDAGHAT - KDZ", "KHARDI - KE", "KATRA - KEA", "KARAMBELI - KEB", "KESIMPA - KEC", "KENDUAPADA - KED", "KASEETAR - KEE", "KRISHNAMMAKONA - KEF", "KARENGI - KEG", "KAPSETI - KEH", "KASHI - KEI", "KATHLEEGHAT - KEJ", "KARKHELI - KEK", "KEM - KEM", "KUKMA - KEMA", "KHEM KARAN - KEMK", "KOTALA - KEN", "KELANPUR - KEP", "KOIRIPUR - KEPR", "KIRIHRAPUR - KER", "KESRI - KES", "KESRI SINGHPUR - KESR", "KELA DEVI - KEV", "KHEKRA - KEX", "KAGANKARAI - KEY", "KELZAR - KEZ", "KOPARIA - KFA", "KALPATTICHATRAM - KFC", "KURIKAD - KFE", "KOLDA - KFF", "KATPHAL - KFH", "KAPPIL - KFI", "KATKA - KFK", "KANOR - KFN", "KUKRA KHAPA - KFP", "KAFURPUR - KFPR", "KUMARANALLUR - KFQ", "KAJRI - KFT", "KOHAND - KFU", "KUNDARA EAST - KFV", "KARAPGAON - KFY", "KHAGA - KGA", "KARGI ROAD - KGB", "KISHENGARH BLWS - KGBS", "KALLIGUDI - KGD", "KATANGI - KGE", "KATHGHAR - KGF", "KHAGARIA JN - KGG", "KENGERI - KGI", "KANG KHURD - KGKD", "KUPGAL - KGL", "KHAGRAGHAT ROAD - KGLE", "KATHGODAM - KGM", "KANGRA MANDIR - KGMR", "KURSEONG - KGN", "KHARAGPUR JN - KGP", "KHARAGPUR WKSHP - KGPW", "KASARAGOD - KGQ", "KANGRA - KGRA", "KHONGSARA - KGS", "KARIGANURU - KGW", "BELA BELA - BBHL", "AZHWARKURICHI - AZK", "AYYAMPET - AZP", "AZAMNAGAR ROAD - AZR", "BANDRA - BA", "BARALA - BAA", "BABINA - BAB", "BALANAGAR - BABR", "BAD - BAD", "BARKA - BADK", "BHADER - BADR", "BALIAKHERI - BAE", "BHAGEGA - BAGA", "BARHARAGANI - BAGJ", "BHABHAR - BAH", "BAND HAMIRPUR - BAHP", "BAHIR KHANDA - BAHW", "BASSI - BAI", "BHALEJ - BAJ", "BAJANA - BAJN", "BHAN KARI - BAK", "BAKAL - BAKL", "BARHARA KOTHI - BAKT", "BUDALUR - BAL", "BALE - BALE", "BHAILI - BALI", "BAITALPUR - BALR", "BALUGAON - BALU", "BRAHMAPUR - BAM", "BIRAMBAD - BAMA", "BANASWADI - BAND", "BASNI - BANE", "BANI - BANI", "BANO - BANO", "BHANER - BANR", "BANMOR - BAO", "BAOLI - BAOL", "BELAPUR - BAP", "BALLUPUR - BAPR", "GANJ BASODA - BAQ", "BAR - BAR", "BILARA - BARA", "DUVRI KALAN - BARD", "BARH - BARH", "BARI - BARI", "BHARATGARH - BARJ", "BARAL - BARL", "BARANAGAR ROAD - BARN", "BAHARU - BARU", "BANOSA - BASA", "BHAINSWAN - BASN", "BATALA JN - BAT", "BANTVA - BATA", "BATALA SUGAR ML - BATM", "BHATSAR - BATS", "BURHANPUR - BAU", "BARUVA - BAV", "CHIK BANAVAR - BAW", "BALWARA - BAWA", "BHADWAD - BAWD", "BALLARI JN - BAY", "BARAN - BAZ", "BABRALA - BBA", "BAIDYABATI - BBAE", "BHADBHUNJA - BBAI", "BHACHHBAR - BBC", "BULBULCHANDI - BBCE", "BABARPUR - BBDE", "BAGHI BARDIHA - BBE", "BARUA BAMUNGAON - BBGN", "BBY CHINCHPKILI - CHG", "CHAUKHANDI - CHH", "CHIRAI BG - CHIB", "CHATA - CHJ", "CHAKERI - CHK", "CHAKKI BANK - CHKB", "CHOLA - CHL", "CHITALDA - CHLD", "CHAVALKHEDE - CHLK", "CHHALESAR - CHLR", "CHALTHAN - CHM", "CHHINA - CHN", "CHANNANI - CHNN", "CHHAPI - CHP", "CHATRAPPATTI - CHPT", "CHILKAHAR - CHR", "CHHARRA - CHRA", "CHARODIYA - CHRD", "CHORGI - CHRG", "CHIRMIRI - CHRM", "CHAMPAHATI - CHT", "CHANETI - CHTI", "COCHIN HRBR TMS - CHTS", "CHAMPION - CHU", "CHARVATTUR - CHV", "CHARLAPALLI - CHZ", "CHHAPRA KACHERI - CI", "CHHEHARTA - CIA", "CHIRAIDONGRI - CID", "CHILHIA - CIH", "CHETTIYAPATTI - CII", "CHIKSANA - CIK", "CHILBILA JN - CIL", "CHIKHLI ROAD - CIO", "CHICHPALLI - CIP", "CHITALI - CIT", "CHINNARAVURU - CIV", "KANCHIPURAM - CJ", "CHONGAJAN - CJA", "CHAJLI - CJL", "CHINNA GANJAM - CJM", "CHHATNA - CJN", "CHAMPAJHARAM - CJQ", "CHAMARAJ - CJR", "CHARAMULA KUSUM - CJS", "CHAJAWA - CJW", "CHIKSUGAR - CK", "CHAK PAKHHEWALA - CKA", "CHAUTH KA BRWRA - CKB", "CHARKHI DADRI - CKD", "CHAKDAYALA - CKDL", "CHOKI SORATH - CKE", "CHOWKA GHAT - CKG", "CHAKAND - CKH", "CHALAKUDI - CKI", "CHAKARPUR - CKK", "CHAK KALAN - CKKN", "GONEANA B JAGTA - GNA", "GANDHINAGAR CAP - GNC", "GOVINDGARH MALK - GND", "GAURIGANJ - GNG", "GANGADHARPUR - GNGD", "GANGAULI - GNGL", "GUNGRANA - GNGR", "GANGATOLIA - GNGT", "GANGAKHER - GNH", "GOURANDI - GNI", "GUNJI - GNJ", "GONGLE - GNL", "GANGINENI - GNN", "GANGANI - GNNA", "GHANPUR - GNP", "GUNUPUR - GNPR", "GANPATPURA - GNPT", "GADIGANURU - GNR", "GHONSOR - GNS", "GUNTUR JN - GNT", "GANAUR - GNU", "GANDEVI - GNV", "GANGIWARA - GNW", "GAHNDRAN - GNZ", "GHOTI - GO", "GOHAD ROAD - GOA", "PONMLAI GLD RCK - GOC", "GIDARPINDI - GOD", "GHOGRAPUR - GOE", "GHUTIARI SHARIF - GOF", "GOSSAIGAON HAT - GOGH", "GAROT - GOH", "GEVARAI HALT - GOI", "GOILKERA - GOL", "GOLE - GOLE", "GOGAMUKH - GOM", "GOP JAM - GOP", "GHOSIPURA - GOPA", "GOPALGANJ - GOPG", "GOPINATHPUR - GOR", "GHOSRANA - GOS", "GOT - GOT", "GORINTADA - GOTD", "GOTAN - GOTN", "GOVINDNAGAR - GOVR", "GOBINDPUR DUGLI - GOX", "GOVINDPURI - GOY", "GOLSAR - GOZ", "RAJ GANGPUR - GP", "GHASPURA - GPA", "GUPTIPARA - GPAE", "GHATPRABHA - GPB", "GHATPINDRAI - GPC", "GUMMIDIPUNDI - GPD", "GUDIPUDI - GPDE", "GARPOS - GPH", "GAJAPATINAGARAM - GPI", "GORAPUR - GPJ", "GOPALPURGRAM - GPLG", "GOP MOTA - GPMA", "KAGWAD - KGWD", "KANGINHAL - KGX", "KULGACHIA - KGY", "KARUNGUZHI - KGZ", "KAHILIYA - KH", "KHAIGAON - KHA", "KHIRAI - KHAI", "KHAR - KHAR", "KHAT - KHAT", "KHANNA BANJARI - KHBJ", "KHORANA - KHC", "KHODIYAR - KHD", "KHANDIA - KHDA", "KHUDLAPUR - KHDP", "KANKATHER - KHE", "KHANTAPARA - KHF", "KICHHA - KHH", "KHATKAR KALAN J - KHHJ", "KURHANI - KHI", "KHAJRAHA - KHJ", "KHANJA HALT - KHJA", "KHERA KALAN - KHKN", "KHOTKHOTI - KHKT", "KETOHALLI - KHLL", "KUSMHI - KHM", "KHATIMA - KHMA", "KHANYAN - KHN", "KHUNVAD - KHND", "KUNDA HARNAMGNJ - KHNM", "KHOPOLI - KHPI", "KHALIPALI - KHPL", "KHARIK - KHQ", "KHACHERA - KHRA", "KHARKHARI - KHRI", "KUMBHRAJ - KHRJ", "KHARAK - KHRK", "KHARESHWAR ROAD - KHRS", "KHAIRAHI - KHRY", "KHARSIA - KHS", "KHHERA SANDHAN - KHSN", "KASHANATTI - KHST", "SRI KALAHASTI - KHT", "KHATGAON - KHTG", "KHUTAUNA - KHTN", "KHATU - KHTU", "KHED TEMPLE HLT - KHTX", "KHURHAND - KHU", "KARAINTHI - KHV", "KHERODA - KHW", "KHAKHRECHI BG - KHXB", "KONDAPALLI - KI", "KHARI AMRAPUR - KIA", "KYATSANDRA - KIAT", "KIZHA AMBUR - KIB", "KALLIDAIKURICHI - KIC", "KHAIRAR JN - KID", "KHIRIA KHURD - KIE", "KILLE - KII", "KULDIHA - KIJ", "KARAIKAL - KIK", "BABAGANJ - BBJ", "BARABANKI JN - BBK", "BABA BAKALARAYA - BBKR", "BALRAI - BBL", "B L DASPURI - BBLK", "BARABHUM - BBM", "BARI BRAHMAN - BBMN", "BABUGARH - BBO", "BALABHADRAPURAM - BBPM", "BABUPUR - BBPR", "BASIN BRIDGE JN - BBQ", "BHUBANESWAR - BBS", "BABA SODHALNAGR - BBSL", "BIRATI - BBT", "BARBATPUR - BBTR", "BHABUA ROAD - BBU", "BABHULGOAN - BBV", "BODARWAR - BBW", "BHADROLI - BBY", "BAREILLY CITY - BC", "BACHWARA JN - BCA", "BANSDIH ROAD - BCD", "BANKAPASI - BCF", "BAINCHIGRAM - BCGM", "BERCHHA - BCH", "BOCHASAN JN - BCHN", "BACHAR - BCHR", "BAGAHABISHUNPUR - BCJ", "BALICHAK - BCK", "BOMBAY CNTRL L - BCL", "BACHHRAWAN - BCN", "BHACHAU BG - BCOB", "BICHPURI - BCP", "MUMBAI CENTRAL - BCT", "BHUCHCHU - BCU", "BHAWI - BCW", "VARANASI CITY - BCY", "BADNERA JN - BD", "BONIDANGA - BDAG", "VRINDAVAN - BDB", "BADHAI BALAMGRH - BDBG", "BANDEL JN - BDC", "BHADRACHALAM RD - BDCR", "BADODAR - BDDR", "BODELI - BDE", "BHANDEGAON - BDGN", "BADANAGUPPE - BDGP", "BHEDIA - BDH", "BADHADA - BDHA", "BADHAL - BDHL", "BODHAN - BDHN", "BHUDPUR - BDHP", "BARDI HALT - BDHT", "BUDHI - BDHY", "BHADLI - BDI", "VADAKARA - BDJ", "BEDAG - BDK", "BHADSIVNI - BDKE", "BANDHUA KALAN - BDKN", "VINDHYACHAL - BDL", "BORDOLONI - BDLN", "BADAMI - BDM", "CHAK BANWALA - CKLA", "CHAK KALI LAIT - CKLT", "CHAUKI MAN - CKM", "CHINTA KANI - CKN", "CHIKNA - CKNA", "CHIKNI ROAD - CKNI", "CHAKRADHARPUR - CKP", "CHIKODI ROAD - CKR", "CHAKMAKRAND - CKRD", "CHAKSU - CKS", "CHITRAKUTDHAM K - CKTD", "CHAKULIA - CKU", "CHERUKUVADA - CKV", "CHIKKANDAWADI - CKVD", "CHALKHOA - CKW", "CHAKUR - CKX", "CHAKRA ROAD - CKYD", "KURLA JN - CLA", "CHALALA - CLC", "CHALSA JN - CLD", "CHANDLODIYA - CLDY", "CHINTALPALLI - CLE", "CHHULHA - CLF", "KAHALGAON - CLG", "CHALGERI - CLI", "COLONELGANJ - CLJ", "CHILKA - CLKA", "KOLLIDAM - CLN", "CHILO - CLO", "CHALLAVARIPALLE - CLPE", "CASTLE ROCK - CLR", "KOZHIKKODE - CLT", "CHILAKALAPUDI - CLU", "CHILUVUR - CLVR", "CHILWARIYA - CLW", "CHIRALA - CLX", "CAMPIERGANJ - CM", "CINNAMARA - CMA", "CHEMBUR - CMBR", "CHEMANCHERI - CMC", "CHIMIDIPALLI - CMDP", "CHAMARAJAPURAM - CMJ", "CHAMAK - CMK", "CHAMUNDA MARG - CMMG", "CHAMARAJANAGAR - CMNR", "CHROMEPET - CMP", "CHAMROLA - CMR", "CHAU MAHLA - CMU", "CHIMALPAHAD - CMW", "CHAMAGRAM - CMX", "CHALAMA - CMZ", "CHANDERIYA - CNA", "KANPUR CENTRAL - CNB", "CHANDARI - CNBI", "CHINCHLI - CNC", "CHANDUR - CND", "CHANDI MANDIR - CNDM", "CHANDRANATHPUR - CNE", "CHIANKI - CNF", "GOPALPUR - GPPR", "GHORPURI - GPR", "GOJAPUR SANKDHA - GPS", "GOPALAPATNAM - GPT", "GULAPALYAMU - GPU", "GHAUNSPUR - GPW", "GAUTAMPURA ROAD - GPX", "GANGAYAPALLE - GPY", "GOHPUR - GPZ", "GURLA - GQL", "GULBARGA - GR", "GHARAUNDA - GRA", "GURAP - GRAE", "GARKHA - GRAK", "GARH DHRUBESWAR - GRB", "GARUDUBILLI - GRBL", "GIRIDIH - GRD", "GOLA ROAD - GRE", "GAMBHIRI ROAD - GRF", "GUWARIGHAT - GRG", "GHORASAHAN - GRH", "GIR HADMATIYA - GRHM", "GARRA - GRHX", "GURIYA - GRI", "GATRA HALT - GRJ", "GORINJA - GRJA", "GURHA KEMLA - GRKA", "GORAUL - GRL", "GARHMAU - GRM", "GARHI MANIKPUR - GRMR", "GUR MARKET - GRMT", "GURNAY - GRN", "GURHANWA - GRNA", "GURRA - GRO", "GANGPUR - GRP", "GURLI RAMGARHWA - GRRG", "GURARU - GRRU", "GURUSAR SUTLANI - GRS", "GORATIYA - GRTA", "GAROPARA - GRU", "GOHLWAR VARPAL - GRV", "GHORAWADI - GRWD", "GAURA - GRX", "GORAYA - GRY", "GURTHURI - GRZ", "GODHANESHWAR - GS", "GARNA SAHIB - GSB", "GHOSUNDA - GSD", "GARSANDA HALT - GSDH", "GHAUSGANJ - GSGJ", "GHOSI - GSI", "GHASO - GSO", "GURDASPUR - GSP", "GOSALPUR - GSPR", "GUIR SARANGA - GSQ", "GARHSHANKAR - GSR", "GURSAR SHNEWALA - GSW", "GANDHISMARAK RD - GSX", "GHASHYAMGADH RD - GSY", "GHATKESAR - GT", "GOLANTHRA - GTA", "GURU T B NAGAR - GTBN", "GOURINATHDHAM - GTD", "KURWAI KETHORA - KIKA", "KANDIVLI - KILE", "KIM - KIM", "KAPASAN - KIN", "KHALILPUR - KIP", "KHAI PHEMEKI - KIQ", "KATIHAR JN - KIR", "KAPILAS ROAD - KIS", "KHALLIKOT - KIT", "KITA - KITA", "KINANA - KIU", "KIUL JN - KIUL", "KAIALSA - KIV", "KANWALPURA - KIW", "KALAYAT - KIY", "KANSUDHI - KIZ", "KAJGAON - KJ", "KHAJURHAT - KJA", "KARAJGI - KJG", "KHANALAMPURA GY - KJGY", "KAJRA - KJH", "KHAJAULI - KJI", "KODAVALURU - KJJ", "KANJIKODE - KJKD", "KHUMGAON BURTI - KJL", "KHARI JHALU - KJLU", "KRISHNARAJAPURM - KJM", "KAJORAGRAM - KJME", "KANNAUJ - KJN", "KANNAUJ CITY - KJNC", "KHOJEEPURA - KJP", "KARJANA - KJRA", "KARJANAGRAM - KJRM", "KRISHNARAJASGRA - KJS", "KARJAT - KJT", "KAJGAON TERHWAN - KJTW", "KUNTIGHAT - KJU", "KHIJADIYA JN - KJV", "KHAJWANA - KJW", "KHURJA CITY - KJY", "KARONJI - KJZ", "KHADKI - KK", "KANKI - KKA", "KAIKALA - KKAE", "KANKAHA - KKAH", "KARAK BEL - KKB", "KALKUND - KKD", "KURUKSHETRA JN - KKDE", "KARAIKKUDI JN - KKDI", "KAMRUP KHETRI - KKET", "KEKATUMAR - KKG", "KALKALIGHAT - KKGT", "KAKARGHATTI - KKHT", "KARKELI - KKI", "KAKORI - KKJ", "KHAKHARIA - KKK", "BUDHMA - BDMA", "BAIDYANATHDHAM - BDME", "BHODWAL MAJRI - BDMJ", "BHADAN - BDN", "BODINAYAKKANUR - BDNK", "BIDANPUR - BDNP", "BAHALDA ROAD - BDO", "BURHAPANKA - BDPK", "BANDARUPALLE - BDPL", "BRINDABANPUR - BDPR", "BUDORA - BDQ", "BHADRAVADI - BDRD", "BYADARAHALLI - BDRL", "BHADRAN - BDRN", "BUDHSINGHWALA - BDSW", "BORDUBI ROAD - BDT", "BADNAPUR - BDU", "BUDVEL - BDVL", "BODDAVARA - BDVR", "BHADRAVATI - BDVT", "BANDANWARA - BDW", "BADHWA BARA - BDWA", "BODWAD - BDWD", "BIRADHWAL - BDWL", "BASAI DHANKOT - BDXT", "BADE ARAPUR - BDXX", "BUDDIREDDIPPATI - BDY", "BINDAYAKA - BDYK", "BADKULLA - BDZ", "BAREILLY - BE", "BIHIYA - BEA", "BEAS - BEAS", "BELDANGA - BEB", "BASERI - BED", "BEBEJIA - BEE", "BHUPDEOPUR - BEF", "BEHTAGOKUL - BEG", "BAGDIHI - BEH", "BEOHARI - BEHR", "BIHAR SHARIF - BEHS", "SHIMOGA BIDARE - BEI", "BENIGANJ - BEJ", "BUNDKI - BEK", "BELA - BELA", "BUDAUN - BEM", "BEML NAGAR - BEML", "BENL - BENL", "BIROHE - BEO", "BHEERPUR - BEP", "BELUR - BEQ", "BEAWAR - BER", "BERO - BERO", "BARETH - BET", "BHETASI - BETI", "BISHESHWARGANJ - BEU", "BETAVAD - BEW", "BELBONI - BEX", "B CEMENT NAGAR - BEY", "BORHAT - BFD", "BAHAWAL BASI - BFE", "BARABHATI - BFF", "CHENGANNUR - CNGR", "CHAUNRAH - CNH", "CHINK HILL - CNHL", "CHANDIL JN - CNI", "CHANDOK - CNK", "CHANAKYAPURI - CNKP", "CHANDAWAL - CNL", "CHINTAMAN GANES - CNN", "CHAINPUR - CNPR", "CHANDAR - CNR", "CHUCHURA - CNS", "CONTAI ROAD - CNT", "KINATTUKKADAVU - CNV", "KOLANALLI - CNY", "KAKINADA PORT - COA", "COOCH BEHAR - COB", "CHHOTA GUDHA - COD", "CHITROD - COE", "CHEOKI - COI", "CHOMUN SAMOD - COM", "CHHOTI ODAI - COO", "CHITTAURGARH - COR", "KANPUR ANWRGANJ - CPA", "KANPUR BGE L BK - CPB", "CHINCHPADA - CPD", "CHHIPADOHAR - CPDR", "CHANDIPOSI - CPE", "CHAMPA - CPH", "KAPTANGANJ JN - CPJ", "CHAPARMUKH JN - CPK", "CHAKARLAPALLI - CPL", "CHINPAI - CPLE", "CHOLAPURAM - CPM", "CHAMPANER RD JN - CPN", "CHIPURUPALLE - CPP", "CHAPRAKATA - CPQ", "CHHAPRA - CPR", "CHAND SIAU - CPS", "KANPUR SMU CBSA - CPSM", "CHANNAPATNA - CPT", "CHOPAN - CPU", "CHERUKARA - CQA", "CHIRAKKAL - CQL", "CHAMPAPUKUR - CQR", "CAPPER QUARRY - CQS", "CHURULIA - CRA", "CHARKHARI ROAD - CRC", "BMBY CURREY RD - CRD", "CHURAMAN NAGRI - CRG", "CHITTARANJAN - CRJ", "CHARKHERA - CRK", "CHAURAKHERI - CRKR", "GOTHAJ - GTE", "GUMTHAL - GTF", "GHANTA - GTH", "GHUTAI - GTI", "GETOR JAGATPURA - GTJT", "GHUTKU - GTK", "GERITA KOLVADA - GTKD", "GUNTAKAL JN - GTL", "GOTLAM - GTLM", "GHATAMPUR - GTM", "GHATPURI - GTP", "BOMBAY GRNT RD - GTR", "GOTRA HALT - GTRA", "GHATSILA - GTS", "GOMTA - GTT", "GHAT NANDUR - GTU", "GATORA - GTW", "GHATWAD - GTWD", "GOTHANGAM - GTX", "GUA - GUA", "GULARBHOJ - GUB", "GALUDIH - GUD", "GARH JAIPUR - GUG", "GULDHAR - GUH", "GUNJA - GUJ", "GUNTAKODURU - GUK", "GUJJANGIVALASA - GUL", "GULER - GULR", "GUMA - GUMA", "GORUMAHISANI - GUMI", "GUNA - GUNA", "GHUNAS - GUNS", "GAURIPUR - GUP", "GANAGAPUR ROAD - GUR", "GURUDAS NAGAR - GURN", "GHUMASAN - GUS", "GUNDRATIMADUGU - GUU", "GURHI - GUX", "GOVANDAI - GV", "GANGUVADA - GVA", "GHOLVAD - GVD", "GOVINDGARH - GVG", "GARIVIDI - GVI", "GUDLAVALLERU - GVL", "GOVINDI MARWAR - GVMR", "GODAVARI - GVN", "GATE VANAMPALLI - GVP", "GORESWAR - GVR", "GALVAV - GVV", "GIRWAR - GW", "GANJ DUNDWARA - GWA", "GADWAL - GWD", "GWALIOR - GWL", "GANNAVARAM - GWM", "GWALIOR - GWO", "GAUSHALA - GWS", "GOWDAVALLI - GWV", "GEONG - GXG", "GOOTY - GY", "GHARYALA - GYL", "GUDIYATTAM - GYM", "GYANPUR ROAD - GYN", "KALA BAKRA - KKL", "KAIKALUR - KKLR", "KAKLUR - KKLU", "KAMALAPURAM - KKM", "KHIRKIYA - KKN", "KHUNKHUNA - KKNA", "KOT KAPURA - KKP", "KALLAKKUDI PLGH - KKPM", "KOKPARA - KKPR", "KALAIKUNDA - KKQ", "KHAKHRALA ROAD - KKR", "KIKAKUI ROAD - KKRD", "KAKRALA - KKRL", "KAIKORAM - KKRM", "KUKARVADA - KKRV", "KURASTI KALAN - KKS", "KATH KUIYAN - KKT", "KOLLIKHUTAHA - KKTA", "KUTTAKUDI - KKTI", "KANAKPURA - KKU", "KUNKAVAV JN - KKV", "KANKAVALI - KKW", "KILA KADAIYAM - KKY", "KOTTARAKARA - KKZ", "KHERLI - KL", "KULWA - KLA", "KULPAHAR - KLAR", "KIRAOLI - KLB", "KALAMBHA - KLBA", "KHALILABAD - KLD", "KALEDIYA - KLDA", "KALDHARI - KLDI", "KAITHAL - KLE", "KALUNGA - KLG", "KOLLENGODE - KLGD", "KALLAGAM - KLGM", "KHALAIGRAM - KLGR", "KHEMLI - KLH", "KAULI - KLI", "KAMALGANJ - KLJ", "KALKA - KLK", "KALIKAPUR - KLKR", "KALOL - KLL", "KADLIMATTI - KLM", "KALHE MAJRA - KLMJ", "KALAMASSERI - KLMR", "KULLANCHAVADI - KLNC", "KALANAUR KALAN - KLNK", "KALINARYNPUR JN - KLNP", "KELOD - KLOD", "KOTALPUKUR - KLP", "KAILASAPURAM - KLPM", "KILIKOLLUR - KLQ", "KALI ROAD - KLRD", "KHALARI - KLRE", "KOLATUR - KLS", "BHORAS BUDRUKH - BFJ", "BHALUI - BFM", "BUGANA - BFN", "BILOCHPURA AGRA - BFP", "BHOPATPUR - BFPA", "BENDI - BFQ", "BHABTA - BFT", "BAHELIA BUZURG - BFV", "BYATRAYANHALLI - BFW", "BAGHI GHAUSPUR - BFX", "BHESANA - BFY", "BHANDARTIKURI - BFZ", "BHONGIR - BG", "BAGALIA - BGA", "BALAGARH - BGAE", "BANGAIN - BGAN", "BANGARI - BGAR", "BAGBAHRA - BGBR", "BARA GUDAH - BGD", "BHAGWANPUR DESU - BGDS", "BAGILA - BGF", "BANTA RNATHGARH - BGG", "BAGHAULI - BGH", "BORRAGUHALLU - BGHU", "BAGHA JATIN - BGJT", "BAGALKOT - BGK", "BANGURKELA - BGKA", "BHAGAT KI KOTHI - BGKT", "BAGULA - BGL", "BARGOLAI - BGLI", "BELAGAVI - BGM", "BAGUMRA - BGMR", "BANGARMAU - BGMU", "BORGAON - BGN", "BALGONA - BGNA", "BAGINADI - BGND", "BOGRI ROAD - BGO", "BHAGALPUR - BGP", "BAGESHAPURA - BGPA", "BHAGWANPURA - BGPR", "BHONGAON - BGQ", "BHAGDARA - BGR", "BAGHNAPARA - BGRA", "BELIAGHATA ROAD - BGRD", "BEGU SARAI - BGS", "BISUGIRSHARIF - BGSF", "BAGRA TAWA - BGTA", "BHAGTANWALA - BGTN", "BAIRAGNIA - BGU", "BHIGWAN - BGVN", "BAGEWADI - BGWD", "BAGRI SAJJANPUR - BGX", "BANGRIPOSI - BGY", "BAHADURGARH - BGZ", "BHARUCH JN - BH", "BHANDAI - BHA", "BHATIEL - BHAL", "BHOYANI - BHAN", "BHOJRAS - BHAS", "CHORAL - CRL", "CHAREGAON - CRN", "CHORANDA JN - CRND", "CHAUTARA - CROA", "CHANDRAPURA JN - CRP", "CHANDRAMPALEM - CRPM", "KARAGOLA ROAD - CRR", "CHUDAWA - CRU", "CHUREB - CRV", "CHARAUD - CRW", "CHIRAWA - CRWA", "CARRON - CRX", "CHIRAYINKEEZH - CRY", "CANNANORE SOUTH - CS", "CHAUSA - CSA", "CANSAULIM - CSM", "CHANASMA JN - CSMA", "CHALISGAON JN - CSN", "CHAK SIKANDAR - CSR", "COSSIMBAZAR - CSZ", "CHITTAPUR - CT", "CHITRADURG - CTA", "CUTTACK - CTC", "CHHOTA UDEPUR - CTD", "CHITGIDDA - CTF", "BBY COTTON GREN - CTGN", "CHIKALTHAN - CTH", "CHITAHRA - CTHR", "CHATAR HALT - CTHT", "CHHATAINI - CTJ", "CHITAL - CTL", "CHATOULI - CTLI", "KATTANGULATTUR - CTM", "CHETTINAD - CTND", "CHITTOOR - CTO", "CHETAR - CTQ", "CHATRA - CTR", "CHITRAWAD - CTRD", "CHITTERI - CTRE", "CHHATRAL - CTRL", "CHITRASANI - CTT", "CHHATAPUR ROAD - CTU", "CHHINTANWALA - CTW", "CHITYALA - CTYL", "CHAUNTRA BHATER - CTZ", "CHAGALLU - CU", "CHOUPALE - CUE", "CHURK - CUK", "CHULI - CUL", "CHURU - CUR", "CHAURA - CUX", "CAUVERY - CV", "CAVALRY BARRCKS - CVB", "CHAVADIPALAIYAM - CVD", "CHAVAJ - CVJ", "KOVILPATTI - CVP", "CHORVAD ROAD - CVR", "GURUJALA - GZA", "GHAZIABAD - GZB", "GULZARBAGH - GZH", "GAZULAPALLI - GZL", "N GHAZIABAD - GZN", "GZ SANDHWAN - GZS", "GHAZIPUR GHAT - GZT", "HARGAON - HA", "HALLIGUDI - HAG", "HOSA AGRAHARA - HAH", "HADALA KHARI - HAK", "HAMIRHATI - HAM", "HINDAUN CITY - HAN", "HAPA - HAPA", "HASTAVARAMU - HAQ", "HASSAN - HAS", "HATHURAN - HAT", "HAUR - HAUR", "HABRA - HB", "HOSHANGABAD - HBD", "HABIBPUR - HBE", "HADOBHANGI - HBF", "HOWBADH JABLPUR - HBG", "HGRIBOMANAHALLI - HBI", "HABIBGANJ - HBJ", "HOMBAL - HBL", "HAIBARGAON - HBN", "HEBSUR - HBS", "HALBARGA - HBU", "HABIBWALA - HBW", "HRSCHNDRAPURAM - HCM", "HARCHANDPUR - HCP", "HARISCHANDRPUR - HCR", "HARDA - HD", "HIRNODA - HDA", "HALDIBARI - HDB", "HADDINAGUNDU - HDD", "HARDAS BIGHA - HDE", "HADGAON ROAD - HDGR", "HANDIA KHAS - HDK", "HODAL - HDL", "HIRDAMALI - HDM", "HAIDARNAGAR - HDN", "HADAPSAR - HDP", "HARIDASPUR - HDS", "HARDATTPUR - HDT", "HARDUA - HDU", "HALDWANI - HDW", "HARDORAWAL - HDWL", "HEBBAL - HEB", "HIMAYATNAGAR - HEM", "HER - HER", "HETAMPUR - HET", "HAFIZPETA - HFZ", "HOTGI - HG", "HOGLA - HGA", "HAIDERGARH - HGH", "HAGARI - HGI", "KALASAR - KLSR", "KAULSERI - KLSX", "KULITALAI - KLT", "KALLURU - KLU", "KELVA ROAD - KLV", "KALVA - KLVA", "KALAVAD - KLVD", "KALITALAVDI - KLWD", "KILANWALI PUNJB - KLWL", "KALWAN - KLWN", "KOLAKALUR - KLX", "KELAVLI - KLY", "KALLUR YEDAHLI - KLYH", "KHILERIYAN - KLYN", "KOLAYAT - KLYT", "KEOLARI - KLZ", "KALEEM - KM", "KAIMA - KMA", "KHAMARGACHHI - KMAE", "KALV AMBA - KMB", "KADAMBANKULAM - KMBK", "KHAMBHALIYA - KMBL", "KAMAREDDI - KMC", "KODUMUDI - KMD", "KARIMUDDIN PUR - KMDR", "KUMAHU - KMGE", "KALAMALLA - KMH", "KUMHARI - KMI", "KAIMGANJ - KMJ", "KOMAKHAN - KMK", "KHAMKHED - KMKD", "KAMTAUL - KML", "KAMLI - KMLI", "KELAMANGALAM - KMLM", "KAMALUR - KMLR", "KANNAMANGALAM - KMM", "KIRMITI MENDHA - KMMD", "KUMARDUBI - KMME", "KHAMGAON - KMN", "KUCHAMAN CITY - KMNC", "KUMENDI - KMND", "KISHAN MANPURA - KMNP", "KAMALNAGAR - KMNR", "KAMLAPUR - KMP", "KOMARPUR - KMPR", "KUMBLA - KMQ", "KOMALI - KMQA", "KAMNARA - KMRA", "KALAMB ROAD - KMRD", "KUMARGANJ - KMRJ", "KUMRUL - KMRL", "KARAMNASA - KMS", "KUMAR SADRA - KMSD", "KUMSI - KMSI", "KAMSHET - KMST", "KHAMMAM - KMT", "KUMARHATTI - KMTI", "KUMBAKONAM - KMU", "KARMAD - KMV", "KOMATIPALLI - KMX", "KANKRA MIRZANGR - KMZA", "KADALUNDI - KN", "KANAD - KNAD", "KHANPUR AHIR - KNAR", "BADLA GHAT - BHB", "BODHADI BUJRUG - BHBK", "BHADRAK - BHC", "BAHORA CHANDIL - BHCL", "BADLI - BHD", "BHADRI - BHDR", "BHESTAN - BHET", "BHAIRGACHHI - BHGH", "BIHARIGANJ - BHGJ", "BHILGAON - BHGN", "BHAGIRATHPUR - BHGP", "BARHARA - BHHT", "BAHERI - BHI", "BARHAJ BAZAR - BHJ", "BHEJA - BHJA", "BADHARI KALAN - BHK", "BHURKUNDA - BHKD", "BHAKRAULI - BHKL", "BHILWARA - BHL", "BEHULA - BHLA", "BARAHAT - BHLE", "BOHALI - BHLI", "BHALKI - BHLK", "BHULANPUR - BHLP", "BAHRAM - BHM", "BHANDARIDAH - BHME", "BHULI - BHN", "BHAYNA - BHNA", "BHONE - BHNE", "BHANSI - BHNS", "BHOJ PADRA - BHOJ", "BOLPUR S NIKTN - BHP", "BHADRESHWAR - BHR", "BHUYAR HALT - BHRH", "BECHARJI - BHRJ", "VIDISHA - BHS", "BHATTU - BHT", "BHATIYA - BHTA", "BHANWAR TONK - BHTK", "BHATEL - BHTL", "BHITONI - BHTN", "BHATPAR RANI - BHTR", "BHATASA - BHTS", "BHANDU MOTIDAU - BHU", "BHUA - BHUA", "BHUJ - BHUJ", "BHOMA - BHV", "BHAVPURA - BHVP", "BARHARWA JN - BHW", "BECHHIWARA - BHWA", "BULLUANA - BHX", "BHAYAVADAR - BHY", "BIHARA - BHZ", "BARI SADRI - BI", "BHILAI - BIA", "BIRPUR - BIB", "BICHIA - BIC", "BIDADI - BID", "BIDIYAD - BIDD", "BIDAR - BIDR", "BHAIRONPUR - BIF", "BELGAHNA - BIG", "BIGGA - BIGA", "BAIRAGARH - BIH", "BORIDRA - BII", "BIRNAGAR - BIJ", "CHERUVU MADHWRM - CVV", "CHAINWA - CW", "CHHINDWARA JN - CWA", "CHONDI - CWI", "CHOWRIGACHA - CWLE", "CHOVVARA - CWR", "CHOWHATTA - CWT", "CHANOL - CX", "CHANDSARA - CXA", "CHHAYAPURI - CYI", "CHERIYANAD - CYN", "BMBY CHARNI RD - CYR", "DEULA - D", "DATIA - DAA", "DHARMABAD - DAB", "DHABAN - DABN", "DAHINSARA JN - DAC", "DEVARGUDDA - DAD", "DAHEGAON - DAE", "DHANG - DAG", "DUROJI - DAJ", "DAKHINESWAR - DAKE", "DALIGANJ - DAL", "DHAMORA - DAM", "DHANETA - DAN", "DAGHORA - DAO", "DAGMAGPUR - DAP", "DAPODI - DAPD", "DAUD KHAN - DAQ", "DANWAR - DAR", "DARA - DARA", "DHARI JN - DARI", "DHASA JN - DAS", "DAGRU - DAU", "DEVALGAON AUCHR - DAV", "DAYADARA - DAY", "DELHI AZADPUR - DAZ", "DABHOI JN - DB", "DABRA - DBA", "DHUBRI - DBB", "DEOBAND - DBD", "DEVBALODA CHRDA - DBEC", "DARBHANGA JN - DBG", "DABLI RATHAN - DBI", "DARBARI - DBK", "DABKA - DBKA", "DODBELE - DBL", "DABLA - DBLA", "DABOLIM - DBM", "DHABLAN - DBN", "DERABABA NANAK - DBNK", "DIBNAPUR - DBNR", "DABHODA - DBO", "DABHAU - DBOU", "DEBIPUR - DBP", "DHULABARI - DBQ", "DABHAURA - DBR", "DIBRUGARH TOWN - DBRT", "DOBBSPET - DBS", "DAYABASTI - DBSI", "DAKSHIN BARASAT - DBT", "DODBALLAPUR - DBU", "DABILPUR - DBV", "DUBIA - DBW", "HARDUAGANJ - HGJ", "HARANGUL - HGL", "HEMAGIRI - HGR", "HINGANGHAT - HGT", "HOOGHLY - HGY", "HUNSIHADGIL - HHD", "HIREHALI - HHL", "HARISHPUR - HHP", "HRIDAYPUR - HHR", "HABANGHATA - HHT", "HAJIGARH - HIH", "HIJLI - HIJ", "HILSA - HIL", "HIND - HIND", "HALDIPADA - HIP", "HARINAGAR - HIR", "HOJAI - HJI", "HEJJALA - HJL", "HUGRAJULI - HJLI", "HARANGAJAO - HJO", "HAJIPUR JN - HJP", "HELAK - HK", "HAILAKANDI - HKD", "HIRAKUD - HKG", "HARANYA KHERI - HKH", "HARKIA KHAL - HKL", "HAKIMPUR - HKP", "HIWARKHED - HKR", "HOLE ALUR - HLAR", "HADALA BHAL - HLB", "HALUDPUKUR - HLD", "HALDAUR - HLDR", "HILLIGROVE - HLG", "HALGERI - HLGR", "HOLALKERE - HLK", "HALAKATTA - HLKT", "HOLE NARSIPUR - HLN", "HALDHARPUR - HLP", "HALISAHAR - HLR", "HALIYURU - HLV", "HIRNAWALI - HLW", "HILARA - HLX", "HALDIA - HLZ", "HADMATIYA JN - HM", "HUMMA - HMA", "HAMIRGARH - HMG", "HANUMANGARH JN - HMH", "HIMMATANA - HMI", "HINDUMALKOTE - HMK", "HELEM - HML", "HANUMANGARHTOWN - HMO", "HEMPUR - HMP", "HIMMATPURA - HMQ", "HAMIRA - HMR", "HIMMATNAGAR - HMT", "HARMUTI - HMY", "HIND MOTOR - HMZ", "HATHBANDH - HN", "HASANABAD - HNB", "HINDOL ROAD - HND", "HENDEGIR - HNDR", "HIRANGAON - HNG", "HANUMANAHALLI - HNH", "HARNAHALLI - HNHL", "HANAKERE - HNK", "HINGOLI DECCAN - HNL", "HINAUTARAMBAN - HNM", "KANIYAMBADI - KNB", "KANAIBAZAR - KNBR", "KANDRA - KND", "KANDRORI - KNDI", "KHANDEL - KNDL", "KHANDIP - KNDP", "KANDARI - KNDR", "KISHANGANJ - KNE", "KHANUDIH - KNF", "KATHUNANGAL - KNG", "KANGAM - KNGM", "KANHEGAON - KNGN", "KASHINAGAR - KNGR", "KONCH - KNH", "KANTENAHALLI - KNHL", "KANTHAN JN - KNHN", "KIRNAHAR - KNHR", "KRISHNGR CTY JN - KNJ", "KONDIKOPPA - KNKP", "KANAKOT - KNKT", "KALANWALI - KNL", "KANALE - KNLE", "KANAMALO PALLE - KNLP", "KANALAS JN - KNLS", "KHANNA - KNN", "KHINANIYAN - KNNA", "KANINA KHAS - KNNK", "KUNNATHUR - KNNT", "KUNDGOL - KNO", "KHANAPUR - KNP", "KENDRAPARA ROAD - KNPR", "KENDPOSI - KNPS", "KANKINARA - KNR", "KACHNARIA - KNRA", "KANHARGAON NAKA - KNRG", "KUNURI - KNRI", "KANAROAN - KNRN", "KUNERU - KNRT", "KANCHAUSI - KNS", "KARNA SUBARNA - KNSN", "KANASAR - KNSR", "KANTH - KNT", "KANTHARIYA - KNTR", "KANJH - KNU", "KINWAT - KNVT", "KHANDWA - KNW", "KALANOUR - KNZ", "KOSGI - KO", "KARONDA - KOA", "KHARAGHODA - KOD", "KODI - KODI", "KODUMMUNDA - KODN", "KODINAR - KODR", "MARWAR KORI - KOF", "KONNAGAR - KOG", "KOTESHWAR - KOH", "KOTTAKOTA - KOHA", "KOHLI - KOHL", "KOHIR DECCAN - KOHR", "KHODRI - KOI", "KOKRAJHAR - KOJ", "BHIRA KHERI - BIK", "BHESLANA - BILA", "BILDI - BILD", "BILKHA - BILK", "BILIMORA JN - BIM", "BHIMAL - BIML", "BINA JN - BINA", "BORDI - BIO", "BAHILPURWA - BIP", "BHEEMPURA - BIPR", "BANSI PAHARPUR - BIQ", "BIR - BIR", "BIRA - BIRA", "BHIWANDI ROAD - BIRD", "BISWA BRIDGE - BIS", "BISHENGARH - BISH", "BAMHNI BANJAR - BIV", "BISALWAS KALAN - BIWK", "BHIND - BIX", "BARDOLI - BIY", "BAIHATA - BIZ", "BAHJOI - BJ", "BAREJADI - BJD", "BHOJUDIH JN - BJE", "BIJNI - BJF", "BAJRANGARH - BJG", "BIJAULI - BJI", "BIJORA - BJK", "BAJEKAN - BJKN", "BRAHMAJAN - BJL", "BARAI JALALPUR - BJLP", "BHAGAVATHIPURAM - BJM", "BARA JAMDA - BJMD", "BAIJNATH MANDIR - BJMR", "BEJNAL - BJN", "BIJAINAGAR - BJNR", "BIJNOR - BJO", "VIJAYAPURA - BJP", "BAIJNATHPAPROLA - BJPL", "BIJAIPUR ROAD - BJPR", "BAGHORA - BJQ", "BARRAJPUR - BJR", "BHAJERA - BJRA", "BIJURI - BJRI", "BAJPATTI - BJT", "BARAUNI JN - BJU", "BAJUD - BJUD", "BIJAURIA - BJV", "BAJVA - BJW", "BOJAWAS - BJWS", "BANGALBAREE - BJY", "BAKRA ROAD - BK", "BARKHERA - BKA", "BHIKAMKOR - BKC", "BHANKODA - BKD", "BUDHAKHERA - BKDE", "BHIKHNA THORI - BKF", "BANKA GHAT - BKG", "BANKHEDI - BKH", "BHIKHAMPUR - BKHP", "BAKHRI - BKHR", "BANDIKUI JN - BKI", "BINKADAKATTI - BKIT", "BHUKARKA - BKKA", "DIGBOI - DBY", "MAGUDANCHAVADI - DC", "DAMCHERA - DCA", "DINHATTA CLGE H - DCH", "DHANDHUKA - DCK", "DAL CHAPRA - DCP", "DAMALCHERUVU - DCU", "DHANICHHA - DCX", "DAUND JN - DD", "DURAUNDHA JN - DDA", "DUM DUM CANT - DDC", "DUNDI - DDCE", "DHONDHA DIH - DDD", "DONDAICHA - DDE", "DUGDA - DDGA", "DUM DUM - DDJ", "DHINDSA - DDK", "DHANDARI KALAN - DDL", "DAM DIM - DDM", "DEHRADUN - DDN", "DUDHAUNDA - DDNA", "DAUDPUR - DDP", "DADAR - DDR", "DADHDEVI - DDV", "DUDWA - DDW", "DHAMDHAMIA - DDX", "DUDWINDI - DDY", "DADGAON - DDZ", "DEBAGRAM - DEB", "DELHI CANTT - DEC", "DELHI S ROHILLA - DEE", "DELANG - DEG", "DEHU ROAD - DEHR", "DENDULURU - DEL", "DEORAKOT - DELO", "DEMU - DEMU", "DEOKALI - DEO", "DIYODAR - DEOR", "DEORIA SADAR - DEOS", "DEPALSAR - DEP", "DEENAPATTI - DEPI", "DADRI - DER", "DESARI - DES", "DEVSANA - DEU", "DEVARAYI - DEV", "DEWALGAON - DEW", "DEWA - DEWA", "DEOGAN ROAD - DFR", "DINDIGUL JN - DG", "DIGHWARA - DGA", "DINDU G PURAM H - DGB", "DONGRI BUZURG - DGBZ", "DURGADA GATE - DGDG", "DHAGARIA - DGF", "DONGARGARH - DGG", "DUNGRI - DGI", "DUNGAR JN - DGJ", "DHULIAN GANGA - DGLE", "DONGARGAON - DGN", "DURGANAGAR - DGNR", "HARANA KALAN - HNN", "HANSARA - HNR", "HANSI - HNS", "HALDITA BIHAR - HOD", "HONAGANAHALLI - HOH", "HAMILTONGANJ - HOJ", "HOL - HOL", "HARIPUR - HP", "HAMPAPURA - HPA", "HUPPUGUDA - HPG", "HANUMAPURA - HPH", "HARIPAL - HPL", "HATPURAINI - HPLE", "HAMPAPATNAM - HPM", "HASANPUR ROAD - HPO", "HARPALPUR - HPP", "HIRAPUR - HPR", "HAPA ROAD - HPRD", "HOSAPETE JN - HPT", "HAPUR - HPU", "HIRENANDURU - HQR", "HARPALU - HR", "HARRI - HRB", "HARSAR DEHRI - HRDR", "HIRODIH - HRE", "HARHRAS QILAH - HRF", "HIRDAGARH - HRG", "HARTHALA - HRH", "HARDOI - HRI", "HADMADIYA - HRM", "HARAUNI - HRN", "HIRA NAGAR - HRNR", "HARUA ROAD - HRO", "HARPALGANJ - HRPG", "HARIHAR - HRR", "HATHRAS JN - HRS", "HARISINGA - HRSN", "HARNAUT - HRT", "HARRAD - HRV", "HARRAWALA - HRW", "HASIMARA - HSA", "HOSDURGA ROAD - HSD", "HARSAULI - HSI", "HARISHANKER RD - HSK", "HISVAHAL - HSL", "HAUSNAGAR - HSM", "HASANPARTI RD - HSP", "HUSAINPUR - HSQ", "HISAR - HSR", "HOSUR - HSRA", "HUSAINIWALA - HSW", "HANSIAWAS - HSWS", "HOSHIARPUR - HSX", "HARSINGPUR GOBA - HSY", "HOTAR - HT", "HATHRAS CITY - HTC", "HATUNDI - HTD", "HATIA - HTE", "HATHIGADH - HTGR", "HATHRAS ROAD - HTJ", "HATKANAGALE - HTK", "HATIKHALI - HTL", "HITNAL - HTNL", "HATRA ROAD - HTT", "HATHUA - HTW", "HATHIDAH JN - HTZ", "KORUKKUPET JN - KOK", "KOKA - KOKA", "KOLNUR - KOLR", "KODIKKALPALAIYM - KOM", "KONNUR - KONN", "KISONI - KONY", "KHUSROPUR - KOO", "C SHAHUMHARAJ T - KOP", "KUTHUR - KOQ", "KORA - KORA", "KHORI - KORI", "KURAL - KORL", "KOTA JN - KOTA", "KOTI - KOTI", "KORATTUR - KOTR", "KODURU - KOU", "KIRLOSKARVADI - KOV", "KACHUJOR - KOX", "KHEROL - KOY", "KOSMA - KOZ", "KAMPTEE - KP", "KANCHRAPARA - KPA", "KHARPOKHRA - KPB", "KATPADI JN - KPD", "KAPURDHA HALT - KPDH", "KAUWAPUR - KPE", "KOPARGAON - KPG", "KAMEPALLI - KPH", "KALPI - KPI", "KOPAGANJ - KPJ", "KALIPAHARI - KPK", "KHAPRI KHEDA - KPKD", "QASIMPUR KHERI - KPKI", "KANTAKAPALLE - KPL", "KOPAI - KPLE", "KOTTA PNDLPALLI - KPLL", "KOPARLAHAR - KPLR", "KUMARAPURAM - KPM", "KUPPAM - KPN", "KARANPURA - KPO", "KALAPIPAL - KPP", "KARUPPUR - KPPR", "KANNAPURAM - KPQ", "KALYANPUR ROAD - KPRD", "KOTAPAR ROAD - KPRR", "KOPA SAMHOTA - KPS", "KANJIRAMITTAM - KPTM", "KESHORAI PATAN - KPTN", "KARANPUR ATO - KPTO", "KRISHNAPURAM - KPU", "KASHIPUR - KPV", "KAIPADA ROAD - KPXR", "KARUNAGAPALLI - KPY", "KAPREN - KPZ", "KONDAGUNTA - KQA", "BAKAS - BKKS", "BONA KALU - BKL", "BAKULHA - BKLA", "BAKUDI - BKLE", "BIKANER JN - BKN", "BHAKTI NAGAR - BKNG", "BIKNA - BKNO", "BINDKI ROAD - BKO", "BAKHTIYARPUR JN - BKP", "BAKASPUR - BKPR", "BHAKARAPET - BKPT", "BHALUKA ROAD F - BKRD", "BAKROL - BKRL", "BOKARO THERMAL - BKRO", "BAKHSHA - BKSA", "BOKARO STL CITY - BKSC", "BAKSHI KA TALAB - BKT", "BINDUKURI - BKTB", "BAKTAL - BKTL", "BHIKNUR - BKU", "BAKAYANWALA - BKWA", "VALSAD - BL", "BALARAMBATI - BLAE", "BARLAI - BLAX", "BOLDA - BLC", "BHILAD - BLD", "BHILDI - BLDI", "BALAUDA TAKUN - BLDK", "BALDANA ROAD - BLDR", "BILHAR GHAT - BLG", "BELAGULA - BLGA", "BALANGIR - BLGR", "BELGHARIA - BLH", "BELAKOBA - BLK", "BANTANAHAL - BLL", "BALAMU JN - BLM", "BHALUKMARA - BLMR", "BALLYGUNGE JN - BLN", "BOLINNA DOABA - BLND", "BARLANGA - BLNG", "BHALWANI - BLNI", "BELANKI - BLNK", "BIRLANAGAR - BLNR", "BHULON - BLO", "BALRAMPUR - BLP", "BALAPALLE - BLPE", "BALEL PIPARIYA - BLPL", "BADULIPAR - BLPR", "BILPUR - BLPU", "BALGANUR - BLR", "BALA ROAD - BLRD", "BELSIRI - BLRE", "BALASIRING - BLRG", "BELANDUR ROAD - BLRR", "BALASORE - BLS", "BOLSA - BLSA", "BALSAMAND - BLSD", "BELSONDA - BLSN", "DURGAUTI - DGO", "DHENGLI PP GOAN - DGPP", "DUGDOL - DGQ", "DURGAPUR - DGR", "DAGORI - DGS", "DHULGHAT - DGT", "DIGARU - DGU", "DHIGAWARA - DGW", "DIGHORI BUZURG - DGY", "DEVIGANJ - DGZ", "DIAMOND HARBOUR - DH", "DHEENA - DHA", "DAINHAT - DHAE", "DHAT - DHAT", "DAHOD - DHD", "DOBHI - DHE", "DHRANGDHRA - DHG", "DINHATA - DHH", "DHULE - DHI", "DHINOJ - DHJ", "DHAKURIA - DHK", "DHODA KHEDI - DHKR", "DEVANAHALLI - DHL", "DETHLI - DHLI", "DADHAL INAM - DHM", "DHAMARDA - DHMA", "DHOLA MAZRA - DHMZ", "DHANBAD JN - DHN", "DHINDA - DHND", "DHANALA - DHNL", "DHANORA DECCAN - DHNR", "DHAULPUR - DHO", "DICHPALLI - DHP", "DAPPAR - DHPR", "DHARAKHOH - DHQ", "DHARNAODA - DHR", "DHIRGANJ - DHRJ", "DHURANA - DHRN", "DHIRERA - DHRR", "DHALPUKHURI - DHRY", "DHAVALAS - DHS", "DHAMARA GHAT - DHT", "DHUBULIA - DHU", "DHARIWAL - DHW", "DHARODI - DHY", "DOMBIVILI - DI", "DIDWANA - DIA", "DIBAI - DIB", "DAHISAR - DIC", "DUGGIRALA - DIG", "DHARUADIHI - DIH", "DILAWARNAGAR - DIL", "DHANSIMLA - DIM", "DING - DING", "DIPORE - DIP", "DINAGAON - DIQ", "DHANAPUR ORISSA - DIR", "DISA - DISA", "DOHRIGHAT - DIT", "DIVA - DIVA", "DHILWAN - DIW", "DARJEELING - DJ", "DAOTUHAJA - DJA", "HUDUKULA - HUD", "HOLAMBI KALAN - HUK", "HUNSENAHALLI - HUN", "HINDUPUR - HUP", "HALVAD - HVD", "HONNAVALLI RD - HVL", "HAMSAVARAM - HVM", "HAVERI - HVR", "HARIDWAR JN - HW", "HOWRAH JN - HWH", "HATWAR - HWR", "HANWANT - HWT", "HABAIPUR - HWX", "CUDDAPAH - HX", "HADIAYA - HYA", "HYDERABAD DECAN - HYB", "HOOGHLY GHAT - HYG", "HADYAL - HYL", "HAIAGHAT - HYT", "HAZARIBAGH RD - HZD", "HAZRATHPUR HLT - HZH", "HAFIZPUR - HZR", "INDARA JN - IAA", "IB - IB", "INDRABIL - IBL", "ICHAULI - ICL", "IDAR - IDAR", "INDARGARH - IDG", "IRADATGANJ - IDGJ", "IDGAH AGRA JN - IDH", "IDALHOND - IDJ", "INDALVAI - IDL", "INDEMAU - IDM", "INDUPALLI - IDP", "INDI ROAD - IDR", "ISHARDASPUR - IDS", "IRINGAL - IGL", "IGATPURI - IGP", "INGUR - IGR", "INGOHTA - IGTA", "IRUGUR - IGU", "INCHHAPURI - IHP", "ITAUNJA - IJ", "IRINJALAKUDA - IJK", "IKRAN - IK", "IKDORI - IKD", "ITIKYALA - IKI", "IKKAR - IKK", "IKLEHRA - IKR", "IKRA JN - IKRA", "SILAIMAN - ILA", "ILLOO - ILO", "ISMAILPUR - IMGE", "IMLI - IMLI", "IBRAHIMPUR - IMR", "INDORE JN BG - INDB", "INDORE JN MG - INDM", "INTEKANNE - INK", "INDAPUR - INP", "KHAIRATABAD - KQD", "KALA AKHAR - KQE", "KALACHAND - KQI", "KOTIKULAM - KQK", "KANDHLA - KQL", "KODAIKANAL ROAD - KQN", "KAUKUNTLA - KQQ", "KODERMA - KQR", "KAILARAS - KQS", "KURGUNTA - KQT", "KAMARKUNDU - KQU", "KINKHED - KQV", "KHEDULI - KQW", "KHARIKATIA - KQY", "KOLAR - KQZ", "KEVDI - KR", "KAREPALLI - KRA", "KAHET - KRAI", "KORATTI ANGADI - KRAN", "KHARIAR ROAD - KRAR", "KORBA - KRBA", "KARABOH - KRBO", "KERKHABARI - KRBR", "KIRIBURU - KRBU", "KIRODA - KRC", "KHARWA CHANDA - KRCD", "KARAD - KRD", "KORADIH - KRDH", "KIRANDUL - KRDL", "KARTARPUR - KRE", "KOREGAON - KRG", "KURANGA - KRGA", "KHAIRTHAL - KRH", "KORAHIA - KRHA", "KHARAHAT - KRHT", "KHAPTI - KRI", "KORAI HALT - KRIH", "KHURJA JN - KRJ", "KARANJA - KRJA", "KARJODA - KRJD", "KARANJA TOWN - KRJT", "KARAKAD - KRKD", "KARKEND - KRKN", "KYARKOP - KRKP", "KURKURA - KRKR", "KOTARLIA - KRL", "KURALI - KRLI", "KURLAS - KRLS", "KARAMTOLA - KRMA", "KUARMUNDA - KRMD", "KHURRAMPUR - KRMP", "KARIMNAGAR - KRMR", "KARMALIYAPURA - KRMY", "KHORASON ROAD - KRND", "KARANAHALLI - KRNH", "KRISHNARAJNAGAR - KRNR", "KURNOOL CITY - KRNT", "KURAWAN - KRO", "KRISHNAPUR - KRP", "KURUPPAN TARA - KRPP", "KAREPUR - KRPR", "KORAPUT - KRPU", "BELASAR - BLSR", "BALOTRA JN - BLT", "BELTHARA ROAD - BLTR", "BILHAUR - BLU", "BHELWA - BLV", "BALAWALI - BLW", "BOLWAD - BLWD", "BILESHWAR - BLWR", "BOLAI - BLX", "BALLY - BLY", "BALLY GHAT - BLYG", "BUDHLADA - BLZ", "BAGMAR - BMA", "BELMURI - BMAE", "BAMRA - BMB", "BIMBARI - BMBE", "BHIMALGONDI - BMC", "BISSAMCUTTACK - BMCK", "BHIMADOLU - BMD", "BRAHMANWADA - BMDI", "BARMER - BME", "BASMAT - BMF", "BAMANGACHHI - BMG", "BHIMGARA - BMGA", "BRAHMANAGUDEM - BMGM", "BAMANGRAM - BMGR", "BETAMCHERLA - BMH", "BAMANHERI - BMHR", "BAMNIA - BMI", "BRIDGMANGANJ - BMJ", "BIRANG KHERA - BMK", "BELLAMKONDA - BMKD", "BHIMKHOJ - BMKJ", "BAMLA - BMLL", "BHASKARPARA - BMM", "BHIMANA - BMN", "BAMANI - BMNI", "BOLARUM - BMO", "BRAMHAPURI - BMP", "BRAHMANPALLI - BMPL", "BADAMPAHAR - BMPR", "BHIMARLAI - BMQ", "BIKRAMPUR - BMR", "BHIMASAR BG - BMSB", "BAMSIN - BMSN", "BHIMASAR - BMSR", "BEGAMPET - BMT", "BAMHRAULI - BMU", "BAMHANI - BMW", "BAMANKUWA - BMX", "BAMIANA - BMY", "BAMOUR GAON - BMZ", "BIBINAGAR - BN", "BANNI KOPPA - BNA", "BINAUR - BNAR", "BANSTOLA - BNB", "BANI BIHAR - BNBH", "BAHANAGA BAZAR - BNBR", "BENGALURU CANT - BNC", "BENGALURU EAST - BNCE", "BHANDUP - BND", "BANDA JN - BNDA", "DIJAOBRA - DJB", "DIDARGANJ ROAD - DJD", "DULIAJAN - DJG", "DHORAJI - DJI", "DOLAJI KA KHERA - DJKR", "DODJALA H - DJL", "DAKOR - DK", "DANKUNI - DKAE", "DAHAR KA BALAJI - DKBJ", "DEVARKADRE - DKC", "DAKACHA - DKCH", "DONAKONDA - DKD", "DANKAUR - DKDE", "DAKSHIN DURGAPR - DKDP", "DIHAKHO - DKE", "DHARMKUNDI - DKI", "DORNAKAL JN - DKJ", "DHEKIAJULI ROAD - DKJR", "DOIKALLU - DKLU", "DIKOM - DKM", "DEVANGONTHI - DKN", "DAKANIYA TALAV - DKNT", "DEVAKOTTAI ROAD - DKO", "DHANI KASAR - DKQ", "DHUANKHERI - DKRA", "BBY DOCKYARD RD - DKRD", "DAREKASA - DKS", "DHULKOT - DKT", "DUMRI KHURD - DKU", "DHANAKWADA - DKW", "DOKWA - DKWA", "DUDHWAKHARA - DKX", "DHOKI - DKY", "DELHI KISHANGNJ - DKZ", "DALADI - DL", "DAULATABAD - DLB", "DALMERA - DLC", "DULLABCHERRA - DLCR", "DALAUDA - DLD", "DALAN - DLF", "DHALGAON - DLGN", "DELHI - DLI", "DHOLA JN - DLJ", "DALKOLHA - DLK", "DASKALGRAM - DLM", "DHAULIMUHAN - DLMH", "DILDARNAGAR JN - DLN", "DALGAON - DLO", "DALPATPUR - DLP", "DAYALPUR - DLPR", "DALELNAGAR - DLQ", "DULLAHAPUR - DLR", "DOLAVALI - DLV", "DILWA - DLW", "DALIMGAON - DLX", "DAMODAR JN - DMA", "DHEMAJI - DMC", "DAMARACHERLA - DMCA", "DHARMADAM - DMD", "DAMNAGAR - DME", "DUMERTA - DMF", "INDAS - INS", "ICHHAPUR - IP", "IPPAGUDA - IPG", "IDAPLLI - IPL", "ICHCHPURAM - IPM", "IPURUPALEM - IPPM", "ISLAMPUR - IPR", "IQBALPUR - IQB", "IQBAL GADH - IQG", "ISRANA - IRA", "IRGAON - IRN", "IRAVIPURAM - IRP", "ISARDA - ISA", "ISMAILA HARYANA - ISM", "ITOLA - ITA", "INTIYATHOK - ITE", "ITKY - ITKY", "ITWARI - ITR", "ILAVELANGAL - IVL", "IZZATNAGAR - IZN", "JALNA - J", "JALIYA - JA", "JHALIDA - JAA", "YAMUNA BDG AGRA - JAB", "JALSU - JAC", "JALSU NANAK - JACN", "JADAR - JADR", "JALALGARH - JAG", "JAIS - JAIS", "JHAJHA - JAJ", "JAKANUR - JAK", "JAWALI - JAL", "JALIYA DEVANI - JALD", "JAMNAGAR - JAM", "JARANGDIH - JAN", "JAORA - JAO", "JANDRAPETA - JAQ", "JARI - JARI", "JASDAN - JAS", "JAMMU TAWI - JAT", "JHAUA - JAU", "JARWA - JAW", "JAMBUR - JBB", "JALLALABD - JBD", "JUNG BAHADURGNJ - JBG", "JGMBLA KSHNPRM - JBK", "JABLI - JBL", "JOGBANI - JBN", "JAMADOBU - JBO", "JABALPUR - JBP", "JAHANGIRABAD RJ - JBR", "JAABUGAM - JBU", "JHABELWALI - JBW", "JABRI - JBX", "JETHA CHNDAN - JCH", "JADCHERLA - JCL", "JUNICHAVAND - JCN", "JHANSI C B - JCO", "JAICHOLI - JCU", "JIND CITY - JCY", "JAROD - JD", "JASODA - JDA", "JAGDALPUR - JDB", "KARARI - KRQ", "KARUR - KRR", "KARRA - KRRA", "KARISATH - KRS", "KHARSALIYA - KRSA", "KARAMGARH SDRGH - KRSH", "KOHAR SINGHWALA - KRSW", "KHURAHAT - KRT", "KIRATGARH - KRTH", "KARTAULI - KRTL", "KIRTINAGAR - KRTN", "KHERALU - KRU", "KEERANUR - KRUR", "KARAVADI - KRV", "KORAVANGALA - KRVL", "KHARWA - KRW", "KURUD - KRX", "KHARA MP - KRXA", "KADIRI - KRY", "KURRAIYA - KRYA", "KARAMSAD - KRYR", "KHARAWAR - KRZ", "KHETA SARAI - KS", "KHASA - KSA", "KOSAI - KSAE", "KUDALA SANGAM - KSAR", "KOSAMBA JN - KSB", "KHUSTA BUZURG - KSBG", "KASHI CHAK - KSC", "KESHOD - KSD", "KARSINDHU - KSDE", "KOSAD - KSE", "KHALISPUR - KSF", "KISHANGARH - KSG", "KARASANGAL - KSGL", "KALI SINDH - KSH", "KHETIA - KSHT", "KOSLI - KSI", "KHODSEONI - KSIH", "KASGANJ - KSJ", "KASIMKOTA - KSK", "KAMASAMUDRAM - KSM", "KRISHNA - KSN", "KESINGA - KSNG", "KHUSHAL NAGAR - KSNR", "KISHANPUR - KSP", "KASHIPURA SARAR - KSPR", "KANSPUR GUGAULI - KSQ", "KASTURI - KSR", "KASARA - KSRA", "KASTHA - KSTA", "KISTAMSETIPALLI - KSTE", "KASHTI - KSTH", "KRISNAMSETIPALI - KSTS", "KUSHTAUR - KSU", "KOSI KALAN - KSV", "KESAVARAM - KSVM", "KHERI SALWA - KSW", "KALMESHWAR - KSWR", "KOTSHILA - KSX", "KUSIARGAON - KSY", "KUSHTALA - KTA", "BONDAMUNDA - BNDM", "BHANDURI - BNDR", "BOHANI - BNE", "BANDHUA - BNF", "BARNAGAR - BNG", "BHANGALA - BNGL", "BONGAIGAON - BNGN", "BINGAON - BNGO", "BHIMNATH - BNH", "BELLENAHALLI - BNHL", "BANNIHATTI - BNHT", "BUDNI - BNI", "BANGAON JN - BNJ", "BINJANA - BNJN", "BANMANKHI JN - BNKI", "VINAEKMA HALT - BNKM", "BANKAT - BNKT", "BEVINAHALU - BNL", "BANGI NIHALSNGH - BNLS", "BANSTHALI NIWAI - BNLW", "BHANUPLI - BNLY", "BARAGAON - BNM", "BARNALA - BNN", "BHINDAR - BNNR", "BANAR - BNO", "BHANAPUR - BNP", "BONDAPALLE - BNPL", "BANARHAT - BNQ", "BHAGWANPUR - BNR", "BANAS - BNS", "BANBASA - BNSA", "BHARTHANA - BNT", "BANDAKPUR - BNU", "BINNAGURI - BNV", "BHANVAD - BNVD", "BHIWANI - BNW", "BHIWANI CITY - BNWC", "BHANWASA - BNWS", "BARHNI - BNY", "BADSHAHNAGAR - BNZ", "BORSAD - BO", "BAHERIYA ROAD - BOA", "BOBAS - BOBS", "BANGROD - BOD", "BARSOI JN - BOE", "BAROG - BOF", "BHAIRONGARH - BOG", "BAINCHI - BOI", "BHOJO - BOJ", "BORKHEDI - BOK", "BHOKAR - BOKR", "BOMADRA - BOM", "BHOnra - BON", "BHOGPUR - BOP", "BOISAR - BOR", "BAGHDOGRA - BORA", "BOROTI - BOT", "BAORI THIKRIA - BOTI", "BHAVDHARI - BOTR", "BHATGAON - BOV", "BORAWAR - BOW", "BHOJASAR - BOX", "BHADOHI - BOY", "BOLARUM BAZAR - BOZ", "BARRACKPORE - BP", "BELLAMPALLI - BPA", "DOMINGARH - DMG", "DAURAM MADHPURA - DMH", "DHARMAJ - DMJ", "DILMILI - DMK", "DHARAMTUL - DML", "DUMURDAHA - DMLE", "DAMLAI - DMLI", "DHARMAVARAM JN - DMM", "DHAMANGAON - DMN", "DAMOH - DMO", "DHARMPUR HMCHL - DMP", "DHARAMPUR - DMPR", "DHARMANAGAR - DMR", "DIGUVAMETTA - DMT", "DHAMUA - DMU", "DIMAPUR - DMV", "DALMAU JN - DMW", "DUMDANGI - DMZ", "DHANARI - DN", "DEGANA JN - DNA", "DANDUPUR - DND", "DHONDI - DNDI", "DHAMNI - DNE", "DANEA - DNEA", "DUNGARDA - DNGD", "DANGARI - DNGI", "DEONAGAR - DNH", "DHINDHORA HKMKD - DNHK", "DAUNDAJ - DNJ", "DHANAKYA - DNK", "DHENKANAL - DNKL", "DHANOLI - DNL", "DHANMANDAL - DNM", "DHANPURA - DNPR", "DANDKHORA - DNQ", "DANAPUR - DNR", "DHANDHERA - DNRA", "DHANAURI - DNRE", "DUNGARPUR - DNRP", "DANTAN - DNT", "DALSANUR - DNU", "DONKINAVALASA - DNV", "DANGARWA - DNW", "DHANSU - DNX", "DHANORI - DNZ", "DAUSA - DO", "DORAHA - DOA", "DUNDLOD MKDGRH - DOB", "DAUN KALAN - DOC", "DHODHAR - DOD", "DODH - DODH", "DEORI - DOE", "DHODRA MOHAR - DOH", "DEVGARH MADRIYA - DOHM", "DHOLKA - DOK", "DUKHERI - DOKY", "DHOLI - DOL", "DHOLIKUA - DOLK", "DUNDARA - DOR", "DEHRI ON SONE - DOS", "DHAKIA TIWARI - DOT", "DAVOL - DOW", "DOHNA - DOX", "DORNAHALLI - DOY", "DAURAI - DOZ", "DURGAPURA - DPA", "DARLIPUT - DPC", "JERTHI DADHIA - JDD", "JAM JODHPUR JN - JDH", "JHARRADIH - JDI", "JANDOKE - JDK", "JAGDEVWALA - JDL", "JAGUDAN - JDN", "JOGINDER NAGAR - JDNX", "JADABPUR - JDP", "JIWDHARA - JDR", "JARUDA NARAA - JDW", "NAKAHA JUNGLE - JEA", "JENAPUR - JEN", "JITODA - JEO", "JEONATHPUR - JEP", "JALESWAR - JER", "JAITSAR - JES", "SECBAD JAMES ST - JET", "JEUR - JEUR", "JAFARGANJ - JFG", "JOGIARA - JGA", "JAGADISHPUR - JGD", "JGNTH TMPL GTE - JGE", "JOGIDIH - JGF", "JANGIGANJ - JGG", "JHAGADIYA JN - JGI", "JAGESHARGANJ - JGJ", "JUGIJAN - JGJN", "JIGNI KHAS - JGKS", "JHARGRAM - JGM", "JAGRAON - JGN", "JALALPUR - JGP", "JASWANTNAGAR - JGR", "JOGIWALA - JGW", "JARIAGARH - JGX", "JAMGOAON HALT - JGZ", "JAKHAURA - JHA", "JHAR - JHAR", "JMTPUR BAHARAN - JHBN", "JEHANABAD - JHD", "JAHANBAD COURT - JHDC", "JHINGURA - JHG", "JHALRA - JHH", "JHIR - JHIR", "JETHUKE - JHK", "JAKHAL JN - JHL", "JAKHIM - JHN", "JHANSI JN - JHS", "JUNEHTA - JHT", "JHALAWAR ROAD - JHW", "JHAWAR - JHWR", "JHUSI - JI", "JIGNA - JIA", "JAGI ROAD - JID", "JALILA ROAD - JIL", "JIND JN - JIND", "JIRA ROAD - JIR", "JIRAT - JIT", "JAJAU - JJ", "JAJAN PATTI - JJA", "JIAGANJ - JJG", "JAIJON DOABA - JJJ", "JHINJHAK - JJK", "JAJPUR K ROAD - JJKR", "JHUNJHUNUN - JJN", "JHANJHARPUR - JJP", "KATHAL - KTAL", "KATOGHAN - KTCE", "KAITHALKUCHI - KTCH", "KANTADIH - KTD", "KATUDA - KTDA", "KATAIYA DANDI - KTDD", "KATNI - KTE", "KOT FATTEH - KTF", "KOTH GANGAD - KTGD", "KAYASTHAGRAM - KTGM", "KOTLA GUJRAN - KTGN", "KATRASGARH - KTH", "KHUTAHA - KTHA", "KOTHARI ROAD - KTHD", "KATAHRI - KTHE", "KATHOLA - KTHL", "KATHUA - KTHU", "KANTI - KTI", "KHALTIPUR - KTJ", "KYATANEAKERI RD - KTK", "KOTAKADRA - KTKA", "KATANGI KHURD - KTKD", "KOTLAKHERI - KTKH", "KOTLI KALAN - KTKL", "KUMTHA KHURD - KTKR", "KATKOLA JN - KTLA", "KHAT LABANA - KTLN", "KUTTALAM - KTM", "KOTMA - KTMA", "KATHANA - KTNA", "KAPUSTALNI - KTNI", "KIRTYANAND NGR - KTNR", "KATORA - KTO", "KATEPURNA - KTP", "KOTHA PAKKI - KTPK", "KATHAL PUKHURI - KTPR", "KUDRA - KTQ", "KOTHAR - KTR", "KOTRA - KTRA", "KATOSAN ROAD - KTRD", "KATHARA ROAD - KTRR", "KOTMI SONAN HLT - KTSH", "KATTUR - KTTR", "KUTTIPPURAM - KTU", "KOTTAVALASA - KTV", "KOTDWARA - KTW", "KATHUWAS - KTWS", "KATAKHAL JN - KTX", "KOTTURU - KTY", "KOTTAYAM - KTYM", "KOTTAIYUR - KTYR", "KHUTWANSA - KTZ", "KULIKARAI - KU", "KULHARIA - KUA", "KASBA - KUB", "KARUKKUTTY - KUC", "KUDACHI - KUD", "BEGUMPUR - BPAE", "BADARPUR JN - BPB", "BERHAMPORE CRT - BPC", "BAHADURPUR - BPD", "BENAPUR - BPE", "BANAPURA - BPF", "BELPAHAR - BPH", "BHILAI PWR HS - BPHB", "BHUGAON - BPK", "BHOPALKA - BPKA", "BHOPAL  JN - BPL", "BAGPAT ROAD - BPM", "BANPUR - BPN", "BARIPADA - BPO", "BAPATLA - BPP", "BALHARSHAH - BPQ", "BHOJIPURA JN - BPR", "BARIPURA - BPRA", "BARPETA ROAD - BPRD", "BALPUR HALT - BPRH", "BHOGPUR SIRWAL - BPRS", "BANPAS - BPS", "OIL DEPOT - BPTO", "WADALA - BPTW", "BHAUPUR - BPU", "BADAMPUDI - BPY", "BAZPUR - BPZ", "BANKURA - BQA", "BAKANIAN BHAUNR - BQE", "BHAGWANGOLA - BQG", "BAGRI NAGAR - BQN", "BIGHAPUR - BQP", "BAKHLETA - BQQ", "BHILAINAGAR - BQR", "BHATTIPROLU - BQU", "BARAKALAN - BQW", "BELERHAT - BQY", "BALLALPUR - BQZ", "BANDH BARETA - BR", "BIRSOLA - BRA", "BARANG - BRAG", "BALARAMAPURAM - BRAM", "BORIBIAL - BRB", "BIRAHALLI - BRBL", "BARBERA - BRBR", "VADODARA JN - BRC", "VADORA CBO - BRCE", "BARUA CHAK - BRCK", "BHANDARA ROAD - BRD", "BARADIYA - BRDA", "BARDA - BRDB", "BARDHANA HALT - BRDH", "BERIA DAULAT - BRDT", "BHARWARI - BRE", "BARGARH - BRG", "BARGARH ROAD - BRGA", "BARAIGRAM JN - BRGM", "BAJRANGPURA - BRGP", "BHERAGHAT - BRGT", "BARGAWAN - BRGW", "DOSAPADU - DPD", "DHAPDHAPI - DPDP", "DADHAPARA - DPH", "DODDAMPATTI - DPI", "DHARMAPURI - DPJ", "DHOLIPAL - DPK", "DANAULI PHLWRIA - DPL", "DIPLANA - DPLN", "DHIRPUR - DPP", "DHAMPUR - DPR", "DANGOAPOSI - DPS", "DAPSAURA - DPSR", "DALPAT SINGHPUR - DPT", "DIPHU - DPU", "DHAPEWARA - DPW", "DADPUR - DPX", "DEVPURA - DPZ", "DHUPGURI - DQG", "DHALAIBIL - DQL", "DHANERA - DQN", "DABIRPURA - DQR", "DHANSAR - DQS", "DAULA KOT BHAI - DQV", "DADAR - DR", "DULARIA - DRA", "DEBARI - DRB", "DEORAHA BABA RD - DRBR", "DAHANU ROAD - DRD", "DHOGRI - DRE", "DARSHANNAGAR - DRG", "DARAGANJ - DRGJ", "DHARHARA - DRH", "DUMRI JUARA - DRI", "DEROL - DRL", "DAURALA - DRLA", "DHRUMATH - DRMT", "DEORANIAN - DRN", "DARYAOGONJ - DRO", "DHARMINIYA - DRQ", "DHARUR - DRR", "DHARESHWAR - DRS", "DHURWASIN - DRSN", "DASHARATHPUR - DRTP", "KADUR - DRU", "DARAULI - DRV", "DHAREWADA - DRW", "DALLI RAJHARA - DRZ", "DASNA - DS", "DELHI SHAHDARA - DSA", "SADAR BAZAR - DSB", "DOSVADA - DSD", "DELHI SAFDARJNG - DSJ", "DUSKHEDA - DSK", "DESWAL - DSL", "DARASURAM - DSM", "DASARA - DSME", "DAUSNI - DSNI", "DASHNAGAR - DSNR", "DESHNOK - DSO", "DANISHPET - DSPT", "DHANSIRI - DSR", "DESAR ROAD - DSRD", "DALSINGH SARAI - DSS", "DASAMPATTI - DST", "DESANG - DSX", "DHATRIGRAM - DTAE", "DITOKCHERRA - DTC", "ATARIA - AA", "ANGAR - AAG", "ITEHAR - AAH", "AMLAI - AAL", "ANGADIPPURAM - AAM", "AMBIAPUR - AAP", "ADESAR - AAR", "ASRANADA - AAS", "ALAPADU - AAU", "AMBAV - AAV", "AMBUR - AB", "ABADA - ABB", "AMBLI ROAD - ABD", "AMBARI FALAKATA - ABFC", "AMBALGRAM - ABGM", "AMBARNATH - ABH", "AMBATURAI - ABI", "AMBIKA KALNA - ABKA", "AMBALE - ABLE", "ASTHAL BOHAR - ABO", "AKBARPUR - ABP", "ABU ROAD - ABR", "ABOHAR - ABS", "AMBATTUR - ABU", "ABUTARA - ABW", "AMBARI - ABX", "AMBIVLI - ABY", "ADGAON BUZURG - ABZ", "ACHEGAON - ACG", "ACHALGANJ - ACH", "ACHARAPAKKAM - ACK", "ANCHELI - ACL", "AZIMGANJ CITY - ACLE", "ADHICHCHANUR - ACN", "A N DEV NAGAR - ACND", "ASAKALATTUR - ACT", "ADONI - AD", "ADILABAD - ADB", "ADAS ROAD - ADD", "ADARI ROAD - ADE", "ADINA - ADF", "ANDHERI - ADH", "ADIHALLI - ADHL", "AHMEDABAD JN - ADI", "ANDUL - ADL", "ANDIPATTI - ADPT", "ADHIKARI - ADQ", "MANDI ADAMPUR - ADR", "ADRA JN - ADRA", "ADI SAPTAGRAM - ADST", "ADUTURAI - ADT", "ADAPUR - ADX", "AMRELI - AE", "AULENDA - AED", "ANANT PAITH - AEH", "ARNEJ - AEJ"];
        var r = t(0);
        var U = t.n(r);
        var N = t(68);
        var K = "";
        var o = "bhuwan";
        if (localStorage.getItem("ticketid") == null) {
            localStorage.ticketid = 0
        }
        chrome.storage.sync.get("k", function(A) {
            o = A.k
        });
        U()(".buttons").click(function() {
            var A = this.id;
            U()(".main").hide();
            U()("." + A).show()
        });
        var M = 0;
        var T;
        U()(".mainpage-button").click(function() {
            if (localStorage.privacy == 1) {
                U()("#privacy-policy").css("display", "none");
                U()("#form-start").css("display", "block");
                U()("#privacy-error").css("display", "none")
            }
            U()(".maindiv-container").hide();
            U()(".irctc-whole").css("display", "block");
            U()("#irctc-username").focus()
        });
        if (localStorage.ticket) {
            var I = JSON.parse(localStorage.ticket);
            var u = [];
            I.forEach(function(A) {
                u.push(A)
            });
            var s = JSON.parse(localStorage.login);
            var c = [];
            s.forEach(function(A) {
                c.push(A)
            });
            var H = JSON.parse(localStorage.bank);
            var S = [];
            H.forEach(function(A) {
                S.push(A)
            })
        } else {
            var u = [];
            var c = [];
            var S = []
        }
        var P = {
            tid: localStorage.ext_id,
            from: "",
            to: "",
            date: "",
            trainno: "",
            pclass: "",
            quota: "",
            boardingstation: "",
            name: "",
            age: "",
            gender: "",
            berth: "",
            meal: "",
            childname: "",
            childage: "",
            childgender: "",
            mobile: "",
            autoupgrade: "",
            confirmseats: "",
            preferredcoachno: "",
            special: "",
            pmobile: "",
            email: "",
            wallet: ""
        };
        var D = [];
        var L = [];
        var B = [];
        var G = [];
        var p = [];
        var f = [];
        var h = [];
        var d = [];
        var O = {
            username: "",
            password: ""
        };
        var E = {};
        U()(".irctc-login-button").click(function() {
            var A = U()("#irctc-username").val();
            var e = U()("#irctc-password").val();
            if (A == "" || e == "") {
                U()(".login-error").text("Fields cannot be empty!")
            } else {
                var t = l.a.encrypt(U()("#irctc-username").val(), K).toString();
                var R = l.a.encrypt(U()("#irctc-password").val(), K).toString();
                O.username = t;
                O.password = R;
                U()(".login-error").hide();
                U()(".loginpage").addClass("animated bounceOutLeft");
                setTimeout(function() {
                    U()(".loginpage").hide()
                }, 400);
                U()(".trippage").show();
                U()(".train").css("left", "45%");
                U()("#p-from").focus()
            }
        });
        var J = document.getElementById("p-date");
        var C = document.getElementById("p-train");
        C.onchange = function() {
            if (C.value == "manual") {
                document.getElementById("mTrainNumer").style.display = "block"
            } else {
                document.getElementById("mTrainNumer").style.display = "none"
            }
        };
        U()(".button-second").eq(0).click(function() {
            var A = U()("#p-from").val();
            var e = U()("#p-to").val();
            var t = U()("#p-date").val();
            var R;
            if (C.value == "manual") {
                R = U()("#mTrainNumer").val()
            } else {
                R = U()("#p-train").val()
            }
            var n = U()("#p-class").val();
            var i = U()("#p-quota").val();
            var r = U()("#p-boarding").val();
            if (A == "" || e == "" || t == "" || R == "" || n == "" || i == "") {
                U()(".login-error2").text("Fields cannot be empty")
            } else {
                P.id = parseInt(localStorage.ticketid) + 1;
                P.from = A;
                P.to = e;
                P.date = t;
                P.trainno = R;
                P.pclass = n;
                P.quota = i;
                P.boarding = r;
                U()(".login-error2").hide();
                U()(".trippage").addClass("animated bounceOutLeft");
                setTimeout(function() {
                    U()(".trippage").hide()
                }, 400);
                U()(".passengerpage").show();
                U()(".train").css("left", "65%")
            }
        });
        U()(".button-second").eq(1).click(function() {
            var A = 0;
            var e = 0;
            U()(".passenger-name").each(function() {
                A++;
                if (A == 1) {
                    if (U()(this).val() == "") {
                        U()(this).css("border", "1px solid rgb(247, 54, 11)");
                        e = 1
                    } else if (U()(".passenger-name").eq(A - 1).val().length > 16) {
                        U()(".p-error").html("Name should not be greater than 16 character");
                        e = 1
                    } else if (U()(".passenger-age").eq(0).val() == "") {
                        U()(".passenger-age").eq(0).css("border", "1px solid rgb(247, 54, 11)");
                        e = 1
                    } else if (U()(".passenger-gender").eq(0).val() == "0") {
                        U()(".passenger-gender").eq(0).css("border", "1px solid rgb(247, 54, 11)");
                        e = 1
                    }
                } else {
                    if (U()(this).val().length > 0) {
                        if (U()(".passenger-age").eq(A - 1).val() == "") {
                            U()(".passenger-age").eq(A - 1).css("border", "1px solid rgb(247, 54, 11)");
                            e = 1
                        }
                        if (U()(".passenger-gender").eq(A - 1).val() == "0") {
                            U()(".passenger-gender").eq(A - 1).css("border", "1px solid rgb(247, 54, 11)");
                            e = 1
                        }
                    }
                }
            });
            var t = 0;
            U()(".child-name").each(function() {
                t++;
                if (U()(this).val().length > 0) {
                    if (U()(".child-age").eq(t - 1).val() == "") {
                        U()(".child-age").eq(t - 1).css("border", "1px solid rgb(247, 54, 11)");
                        e = 1
                    }
                    if (U()(".child-gender").eq(t - 1).val() == "0") {
                        U()(".child-gender").eq(t - 1).css("border", "1px solid rgb(247, 54, 11)");
                        e = 1
                    }
                }
            });
            if (U()(".passenger-mobile").val().length != 10) {
                U()(".passenger-mobile").css("border", "1px solid rgb(247, 54, 11)");
                e = 1
            }
            if (U()(".passenger-rmobile").val().length > 0 && U()(".passenger-rmobile").val().length != 10) {
                U()(".passenger-rmobile").css("border", "1px solid rgb(247, 54, 11)");
                e = 1
            }
            if (U()(".passenger-dob").val().length > 0 && U()(".passenger-dob").val().length != 8) {
                U()(".passenger-dob").css("border", "1px solid rgb(247, 54, 11)");
                e = 1
            }
            if (U()("#autoupgrade").is(":checked")) {
                P.autoupgrade = 1
            }
            if (U()("#confirmseats").is(":checked")) {
                P.confirmseats = 1
            }
            if (U()("#preferedcoachno").is(":checked")) {
                P.preferedcoachno = 1
            }
            P.special = U()("input[name='special']:checked").val();
            P.wallet = U()("input[name='e-wallet']:checked").val();
            if (e == 0) {
                D = [];
                L = [];
                B = [];
                G = [];
                p = [];
                U()(".passenger-name").each(function() {
                    console.log(U()(this).val());
                    if (U()(this).val().length > 0) {
                        D.push(U()(this).val());
                        L.push(U()(this).parent().next().find("input").val());
                        B.push(U()(this).parent().next().next().find("select").val());
                        G.push(U()(this).parent().next().next().next().find("select").val());
                        p.push(U()(this).parent().next().next().next().next().find("select").val())
                    }
                });
                P.name = D;
                P.age = L;
                P.gender = B;
                P.berth = G;
                P.meal = p;
                f = [];
                h = [];
                d = [];
                U()(".child-name").each(function() {
                    if (U()(this).val().length > 0) {
                        f.push(U()(this).val());
                        h.push(U()(this).parent().next().find("select").val());
                        d.push(U()(".child-name").eq(0).parent().next().next().find("select").val())
                    }
                });
                P.childname = f;
                P.childage = h;
                P.childgender = d;
                P.mobile = l.a.encrypt(U()(".passenger-mobile").val(), K).toString();
                P.rmobile = l.a.encrypt(U()(".passenger-rmobile").val(), K).toString();
                P.dob = l.a.encrypt(U()(".passenger-dob").val(), K).toString();
                P.email = l.a.encrypt(U()(".passenger-email").val(), K).toString();
                U()(".passengerpage").addClass("animated bounceOutLeft");
                setTimeout(function() {
                    U()(".passengerpage").hide()
                }, 400);
                U()(".paymentpage").show();
                U()(".paymentpage").css("display", "flex");
                U()(".train").css("left", "85%")
            }
        });
        U()(document).ready(function() {
            U.a.typeahead({
                input: ".js-typeahead-country",
                order: "desc",
                source: {
                    data: i
                },
                callback: {
                    onInit: function A(e) {
                        console.log("Typeahead Initiated on " + e.selector)
                    }
                }
            })
        });

        function g() {
            if (localStorage.ticket) {
                var A = JSON.parse(localStorage.ticket);
                var e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                for (var t = 0; t < A.length; t++) {
                    var R = parseInt(A[t].date.split("-")[1]);
                    var n = new Date;
                    var i = n.getDate();
                    var r = n.getMonth() + 1;
                    console.log(r);
                    if (A[t].date.split("-")[2] <= i && parseInt(A[t].date.split("-")[1]) <= r) {
                        var N = '<div class="ticket-status-expired">Expired</div>'
                    } else {
                        var N = '<div class="ticket-status-active">Active</div>'
                    }
                    if (A[t].id == JSON.parse(localStorage.activeticket).id) {
                        var a = A[t].id + " (Default)";
                        localStorage.defaultticket = A[t].id
                    } else {
                        a = A[t].id
                    }
                    U()(".savedtrips").append('<div class="ticket"> <div> <div class="ticket-inline ticket-date"> <div class="ticket-day">' + A[t].date.split("-")[2] + '</div> <div class="ticket-month">' + e[R - 1] + "</div>" + N + '</div> <div class="ticket-inline" style="width:300px;"> <div> <span class="ticket-from">' + A[t].from + '</span><img src="./img/arrow.png" style="height:15px; width:15px; margin-right:10px; margin-left:10px; margin-top:3px"/><span class="ticket-to">' + A[t].to + '</span> </div> <div class="ticket-train">' + A[t].trainno + '</div> <div class="ticket-passenger">' + A[t].name.length + "adults, " + A[t].childname.length + " children | " + A[t].pclass + ' class </div> </div> <div class="ticket-inline"> <div class="remove" style="cursor:pointer;"><img src="./img/delete.png" style="height:12px; width:12px; margin-right:3px"/>Remove</div>' + '</div><div><div class="ticket-inline ticket-date ticket-id"><br><div class="ticket-id">Ticket ID:</div><div class="ticket-id-number">T' + a + '</div> </div> <div class="ticket-inline" style="width:300px; margin-top:10px"> <div class="edit" style="margin-top:10px;cursor:pointer;"><img src="./img/shape1.png" style="margin-right:3px"/>Edit</div> </div> <div class="ticket-inline"> <button class="book-now" style="cursor:pointer;">Book Now</button> </div></div></div>')
                }
            }
        }
        g();
        U()(".edit").click(function() {
            M = 1;
            U()(".maindiv-container").hide();
            U()(".irctc-whole").show();
            var A = U()(".edit").index(U()(this));
            T = A;
            var e = JSON.parse(localStorage.login)[A];
            var t = JSON.parse(localStorage.ticket)[A];
            var R = JSON.parse(localStorage.bank)[A];
            U()("#irctc-username").val(l.a.decrypt(e.username, K).toString(a.a));
            U()("#irctc-password").val(l.a.decrypt(e.password, K).toString(a.a));
            U()("#p-from").val(t.from);
            U()("#p-to").val(t.to);
            U()("#p-date").val(t.date);
            U()("#p-train").val("manual").trigger("change");
            U()("#mTrainNumer").val(t.trainno);
            U()("#p-class").val(t.pclass);
            U()("#p-quota").val(t.quota);
            var n = t.name;
            var i = 0;
            n.forEach(function(A) {
                U()(".passenger-name").eq(i).val(A);
                U()(".passenger-age").eq(i).val(t.age[i]);
                U()(".passenger-gender").eq(i).val(t.gender[i]);
                if (t.berth[i] != 0) {
                    U()(".passenger-berth").eq(i).val(t.berth[i])
                }
                if (t.meal[i] != 0) {
                    U()(".passenger-meal").eq(i).val(t.meal[i])
                }
                i++
            });
            var r = t.childname;
            var N = 0;
            r.forEach(function(A) {
                U()(".child-name").eq(N).val(A);
                U()(".child-age").eq(N).val(t.childage[N]);
                U()(".child-gender").eq(N).val(t.childgender[N]);
                N++
            });
            U()(".passenger-mobile").val(l.a.decrypt(t.mobile, K).toString(a.a));
            U()(".passenger-dob").val(l.a.decrypt(t.dob, K).toString(a.a));
            U()(".passenger-email").val(l.a.decrypt(t.email, K).toString(a.a));
            U()(".passenger-rmobile").val(l.a.decrypt(t.rmobile, K).toString(a.a));
            if (t.autoupgrade == 1) {
                U()("#autoupgrade").prop("checked", true)
            }
            if (t.confirmseats == 1) {
                U()("#confirmseats").prop("checked", true)
            }
            if (t.preferedcoachno == 1) {
                U()("#preferedcoachno").prop("checked", true)
            }
            U()('input[name="special"][value="' + t.special + '"]').prop("checked", true);
            U()('input[name="e-wallet"][value="' + t.wallet + '"]').prop("checked", true);
            if (t.paytype == "NB") {
                U()("#payment3").prop("checked", true);
                U()("#nb-username").val(l.a.decrypt(R.username, K).toString(a.a));
                U()("#nb-password").val(l.a.decrypt(R.password, K).toString(a.a));
                U()("#payment-payvalue").val(t.payvalue);
                U()(".payment-fields").hide();
                U()(".payment-netbanking").show()
            } else if (t.paytype == "DC") {
                U()("#payment1").prop("checked", true);
                U()("#payment-payvalue1").val(t.payvalue);
                U()("#dc-number").val(l.a.decrypt(R.debitnumber, K).toString(a.a));
                U()("#dc-month").val(l.a.decrypt(R.debitmonth, K).toString(a.a));
                U()("#dc-year").val(l.a.decrypt(R.debityear, K).toString(a.a));
                U()("#dc-cvv").val(l.a.decrypt(R.debitcvv, K).toString(a.a));
                U()("#dc-pin").val(l.a.decrypt(R.debitpin, K).toString(a.a));
                U()("#dc-name").val(l.a.decrypt(R.debitname, K).toString(a.a));
                U()(".payment-fields").hide();
                U()(".payment-debit").show()
            } else if (t.paytype == "W") {
                U()("#payment4").prop("checked", true);
                U()("#payment-payvalue4").val(t.payvalue);
                U()("#w-username").val(l.a.decrypt(R.wusername, K).toString(a.a));
                U()("#w-password").val(l.a.decrypt(R.wpassword, K).toString(a.a));
                U()(".payment-fields").hide();
                U()(".payment-wallet").show()
            } else if (t.paytype == "UPI") {
                U()("#payment5").prop("checked", true);
                U()("#payment-payvalue5").val(t.payvalue);
                U()("#upiadd").val(l.a.decrypt(R.upiadd, K).toString(a.a));
                U()(".payment-fields").hide();
                U()(".payment-upi").show()
            } else if (t.paytype == "QRSCAN") {
                U()("#payment8").prop("checked", true);
                U()("#payment-payvalue8").val(t.payvalue);
                U()(".payment-fields").hide();
                U()(".payment-qrscan").show()
            } else if (t.paytype == "PAYLATER") {
                U()("#payment9").prop("checked", true);
                U()("#payment-payvalue9").val(t.payvalue);
                U()(".payment-fields").hide();
                U()(".payment-paylater").show()
            } else if (t.paytype == "CC") {
                U()("#payment6").prop("checked", true);
                U()("#payment-payvalue6").val(t.payvalue);
                U()("#cc-number").val(l.a.decrypt(R.debitnumber, K).toString(a.a));
                U()("#cc-month").val(l.a.decrypt(R.debitmonth, K).toString(a.a));
                U()("#cc-year").val(l.a.decrypt(R.debityear, K).toString(a.a));
                U()("#cc-cvv").val(l.a.decrypt(R.debitcvv, K).toString(a.a));
                U()("#cc-pin").val(l.a.decrypt(R.debitpin, K).toString(a.a));
                U()("#cc-name").val(l.a.decrypt(R.debitname, K).toString(a.a));
                U()(".payment-fields").hide();
                U()(".payment-gateway").show();
                U()("#payment-payvalue6").on("change", function() {
                    if (this.value == 4 || this.value == 17 || this.value == 21) {
                        U()("#cardType").css("display", "block")
                    } else {
                        U()("#cardType").css("display", "none")
                    }
                });
                if (t.payvalue == 4 || t.payvalue == 17 || t.payvalue == 21) {
                    U()("#cardType").css("display", "block");
                    if (R.cardType == 0) {
                        U()("#cardType1").prop("checked", true)
                    } else {
                        U()("#cardType2").prop("checked", true)
                    }
                } else {
                    U()("#cardType").css("display", "none")
                }
            } else if (t.paytype == "M") {
                U()("#payment2").prop("checked", true);
                U()("#payment-payvalue2").val(t.payvalue);
                U()("#mc-number").val(l.a.decrypt(R.debitnumber, K).toString(a.a));
                U()("#mc-month").val(l.a.decrypt(R.debitmonth, K).toString(a.a));
                U()("#mc-year").val(l.a.decrypt(R.debityear, K).toString(a.a));
                U()("#mc-cvv").val(l.a.decrypt(R.debitcvv, K).toString(a.a));
                U()("#mc-pin").val(l.a.decrypt(R.debitpin, K).toString(a.a));
                U()("#mc-name").val(l.a.decrypt(R.debitname, K).toString(a.a));
                U()(".payment-fields").hide();
                U()(".payment-multiple").show()
            } else if (t.paytype == "NONE") {
                U()("#payment7").prop("checked", true);
                U()(".payment-fields").hide();
                U()(".payment-skip").show()
            } else if (t.paytype == "EW") {
                console.log(l.a.decrypt(t.ewallet, K).toString(a.a));
                console.log("here");
                U()("#irctc-wpassword").val(l.a.decrypt(t.ewallet, K).toString(a.a));
                U()("#payment10").prop("checked", true);
                U()(".payment-fields").hide();
                U()(".payment-irctcwallet").show()
            }
        });
        U()(".remove").click(function() {
            var A = U()(".remove").index(U()(this));
            var e = JSON.parse(localStorage.login);
            var t = JSON.parse(localStorage.ticket);
            var R = JSON.parse(localStorage.bank);
            e.splice(A, 1);
            t.splice(A, 1);
            R.splice(A, 1);
            c.splice(A, 1);
            u.splice(A, 1);
            S.splice(A, 1);
            localStorage.login = JSON.stringify(e);
            localStorage.ticket = JSON.stringify(t);
            localStorage.bank = JSON.stringify(R);
            U()(this).parent().parent().remove();
            if (U()(this).id == P.defaultticket && A != 0) {
                var n = JSON.parse(localStorage.ticket).length;
                var i = JSON.parse(localStorage.login)[JSON.parse(localStorage.login).length - 1];
                var r = JSON.parse(localStorage.ticket)[JSON.parse(localStorage.ticket).length - 1];
                var N = JSON.parse(localStorage.bank)[JSON.parse(localStorage.bank).length - 1];
                localStorage.activelogin = JSON.stringify(i);
                localStorage.activeticket = JSON.stringify(r);
                localStorage.activebank = JSON.stringify(N);
                localStorage.defaultticket = r.id
            } else if (A == 0 && JSON.parse(localStorage.ticket).length == 0) {
                localStorage.activelogin = "{}";
                localStorage.activeticket = "{}";
                localStorage.activebank = "{}"
            }
            window.location.reload()
        });
        U()(".book-now").click(function() {
            var A = U()(".book-now").index(U()(this));
            var e = JSON.parse(localStorage.login);
            var t = JSON.parse(localStorage.ticket);
            var R = JSON.parse(localStorage.bank);
            var n = e[A];
            var i = t[A];
            var r = R[A];
            localStorage.activelogin = JSON.stringify(n);
            localStorage.activeticket = JSON.stringify(i);
            localStorage.activebank = JSON.stringify(r);
            setTimeout(function() {
                window.location.reload();
                window.open("https://www.irctc.co.in/eticketing/loginHome.jsf", "_blank")
            }, 200)
        });
        U()(".payment-button").click(function() {
            if (U()("input[name='payment-type']:checked").attr("id") == "payment1") {
                var A = document.getElementById("payment-payvalue1").value;
                var e = document.getElementById("dc-number").value;
                var t = document.getElementById("dc-month").value;
                var R = document.getElementById("dc-year").value;
                var n = document.getElementById("dc-cvv").value;
                var i = document.getElementById("dc-pin").value;
                var r = document.getElementById("dc-name").value;
                if (A == 0) {
                    U()(".login-error-pay").text("Please Select the Bank")
                } else if (e.length == 0 || t.length == 0 || R.length == 0 || r.length == 0) {
                    U()(".login-error-pay").text("Fields cannot be empty")
                } else if (t > 12) {
                    U()(".login-error-pay").text("Enter the correct month")
                } else {
                    E.debitnumber = l.a.encrypt(e, K).toString();
                    E.debitmonth = l.a.encrypt(t, K).toString();
                    E.debityear = l.a.encrypt(R, K).toString();
                    E.debitcvv = l.a.encrypt(n, K).toString();
                    E.debitpin = l.a.encrypt(i, K).toString();
                    E.debitname = l.a.encrypt(r, K).toString();
                    E.payvalue = A;
                    E.paytype = "DC";
                    P.payvalue = A;
                    P.paytype = "DC";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment3") {
                var N = document.getElementById("nb-username").value;
                var a = document.getElementById("nb-password").value;
                var A = document.getElementById("payment-payvalue").value;
                if (A == 0) {
                    U()(".login-error-pay2").text("Select the bank")
                } else {
                    E.username = l.a.encrypt(N, K).toString();
                    E.password = l.a.encrypt(a, K).toString();
                    E.payvalue = A;
                    E.paytype = "NB";
                    P.payvalue = A;
                    P.paytype = "NB";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment4") {
                var A = document.getElementById("payment-payvalue4").value;
                var o = document.getElementById("w-username").value;
                var I = document.getElementById("w-password").value;
                if (A == 0) {
                    U()(".login-error-pay2").text("Select the bank")
                } else {
                    E.wusername = l.a.encrypt(o, K).toString();
                    E.wpassword = l.a.encrypt(I, K).toString();
                    E.payvalue = A;
                    E.paytype = "W";
                    P.payvalue = A;
                    P.paytype = "W";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment5") {
                var A = document.getElementById("payment-payvalue5").value;
                var s = document.getElementById("upiadd").value;
                if (A == 0) {
                    U()(".login-error-pay2").text("Select the UPI")
                } else {
                    E.upiadd = l.a.encrypt(s, K).toString();
                    E.payvalue = A;
                    E.paytype = "UPI";
                    P.payvalue = A;
                    P.paytype = "UPI";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment8") {
                var A = document.getElementById("payment-payvalue8").value;
                if (A == 0) {
                    U()(".login-error-pay8").text("Select an option")
                } else {
                    E.payvalue = A;
                    E.paytype = "QRSCAN";
                    P.payvalue = A;
                    P.paytype = "QRSCAN";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment9") {
                var A = document.getElementById("payment-payvalue9").value;
                if (A == 0) {
                    U()(".login-error-pay9").text("Select an option")
                } else {
                    E.payvalue = A;
                    E.paytype = "PAYLATER";
                    P.payvalue = A;
                    P.paytype = "PAYLATER";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment6") {
                var A = document.getElementById("payment-payvalue6").value;
                var e = document.getElementById("cc-number").value;
                var t = document.getElementById("cc-month").value;
                var R = document.getElementById("cc-year").value;
                var n = document.getElementById("cc-cvv").value;
                var i = document.getElementById("cc-pin").value;
                var r = document.getElementById("cc-name").value;
                var H = U()("input[name='card-type']:checked").val();
                if (A == 0) {
                    U()(".login-error-pay").text("Please Select the Payment Mode")
                } else if (e.length == 0 || t.length == 0 || R.length == 0 || r.length == 0) {
                    U()(".login-error-pay").text("Fields cannot be empty")
                } else if (t > 12) {
                    U()(".login-error-pay").text("Enter the correct month")
                } else {
                    E.debitnumber = l.a.encrypt(e, K).toString();
                    E.debitmonth = l.a.encrypt(t, K).toString();
                    E.debityear = l.a.encrypt(R, K).toString();
                    E.debitcvv = l.a.encrypt(n, K).toString();
                    E.debitpin = l.a.encrypt(i, K).toString();
                    E.debitname = l.a.encrypt(r, K).toString();
                    E.cardType = H;
                    E.payvalue = A;
                    E.paytype = "CC";
                    P.payvalue = A;
                    P.paytype = "CC";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment2") {
                var A = document.getElementById("payment-payvalue2").value;
                var e = document.getElementById("mc-number").value;
                var t = document.getElementById("mc-month").value;
                var R = document.getElementById("mc-year").value;
                var n = document.getElementById("mc-cvv").value;
                var i = document.getElementById("mc-pin").value;
                var r = document.getElementById("mc-name").value;
                if (A == 0) {} else {
                    E.debitnumber = l.a.encrypt(e, K).toString();
                    E.debitmonth = l.a.encrypt(t, K).toString();
                    E.debityear = l.a.encrypt(R, K).toString();
                    E.debitcvv = l.a.encrypt(n, K).toString();
                    E.debitpin = l.a.encrypt(i, K).toString();
                    E.debitname = l.a.encrypt(r, K).toString();
                    E.payvalue = A;
                    E.paytype = "M";
                    P.payvalue = A;
                    P.paytype = "M";
                    L()
                }
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment7") {
                E.payvalue = 1e3;
                E.paytype = "NONE";
                P.payvalue = A;
                P.paytype = "NONE";
                L()
            } else if (U()("input[name='payment-type']:checked").attr("id") == "payment10") {
                var D = document.getElementById("irctc-wpassword").value;
                E.payvalue = "EW";
                E.paytype = "EW";
                P.payvalue = "EW";
                P.paytype = "EW";
                P.ewallet = l.a.encrypt(D, K).toString();
                L()
            }

            function L() {
                c.push(O);
                u.push(P);
                S.push(E);
                localStorage.activelogin = JSON.stringify(O);
                localStorage.activeticket = JSON.stringify(P);
                localStorage.activebank = JSON.stringify(E);
                localStorage.login = JSON.stringify(c);
                localStorage.ticket = JSON.stringify(u);
                localStorage.bank = JSON.stringify(S);
                localStorage.ticketid = parseInt(localStorage.ticketid) + 1;
                if (M == 1) {
                    var A = JSON.parse(localStorage.login);
                    var e = JSON.parse(localStorage.ticket);
                    var t = JSON.parse(localStorage.bank);
                    A.splice(T, 1);
                    e.splice(T, 1);
                    t.splice(T, 1);
                    localStorage.login = JSON.stringify(A);
                    localStorage.ticket = JSON.stringify(e);
                    localStorage.bank = JSON.stringify(t)
                }
                window.location.reload()
            }
        });
        U()("#loginpage").click(function() {
            U()(".train").css("left", "25%");
            U()(".loginpage").removeClass("animated bounceOutLeft");
            U()(".loginpage").addClass("animated bounceInLeft")
        });
        U()(".goback").eq(0).click(function() {
            U()(".main").hide();
            U()(".loginpage").show();
            U()(".train").css("left", "25%");
            U()(".loginpage").removeClass("animated bounceOutLeft");
            U()(".loginpage").addClass("animated bounceInLeft")
        });
        U()("#trippage").click(function() {
            U()(".train").css("left", "45%");
            U()(".trippage").removeClass("animated bounceOutLeft");
            U()(".trippage").addClass("animated bounceInLeft");
            if (M == 1) {
                U()(".irctc-login-button").click()
            }
        });
        U()(".goback").eq(1).click(function() {
            U()(".main").hide();
            U()(".trippage").show();
            U()(".train").css("left", "45%");
            U()(".trippage").removeClass("animated bounceOutLeft");
            U()(".trippage").addClass("animated bounceInLeft")
        });
        U()("#passengerpage").click(function() {
            U()(".train").css("left", "65%");
            U()(".passengerpage").removeClass("animated bounceOutLeft");
            U()(".passengerpage").addClass("animated bounceInLeft");
            if (M == 1) {
                U()(".irctc-login-button").click();
                U()(".button-second").eq(0).click()
            }
        });
        U()(".goback").eq(2).click(function() {
            U()(".main").hide();
            U()(".passengerpage").show();
            U()(".train").css("left", "65%");
            U()(".passengerpage").removeClass("animated bounceOutLeft");
            U()(".passengerpage").addClass("animated bounceInLeft")
        });
        U()("#paymentpage").click(function() {
            U()(".paymentpage").css("display", "flex");
            U()(".train").css("left", "85%");
            U()(".paymentpage").removeClass("animated bounceOutLeft");
            U()(".paymentpage").addClass("animated bounceInLeft");
            if (M == 1) {
                U()(".irctc-login-button").click();
                U()(".button-second").eq(0).click();
                U()(".button-second").eq(1).click()
            }
        });

        function y() {
            setTimeout(function() {
                if (o == "bhuwan") {
                    y()
                } else {
                    K = o
                }
            }, 100)
        }
        y();
        U()("input[name='payment-type']").click(function() {
            var A = U()(this).attr("id");
            if (A == "payment1") {
                U()(".payment-fields").hide();
                U()(".payment-debit").show()
            } else if (A == "payment3") {
                U()(".payment-fields").hide();
                U()(".payment-netbanking").show()
            } else if (A == "payment4") {
                U()(".payment-fields").hide();
                U()(".payment-wallet").show()
            } else if (A == "payment6") {
                U()(".payment-fields").hide();
                U()(".payment-gateway").show();
                U()("#payment-payvalue6").on("change", function() {
                    if (this.value == 4 || this.value == 17 || this.value == 21) {
                        U()("#cardType").css("display", "block")
                    } else {
                        U()("#cardType").css("display", "none")
                    }
                })
            } else if (A == "payment5") {
                U()(".payment-fields").hide();
                U()(".payment-upi").show()
            } else if (A == "payment2") {
                U()(".payment-fields").hide();
                U()(".payment-multiple").show()
            } else if (A == "payment7") {
                U()(".payment-fields").hide();
                U()(".payment-skip").show()
            } else if (A == "payment8") {
                U()(".payment-fields").hide();
                U()(".payment-qrscan").show()
            } else if (A == "payment9") {
                U()(".payment-fields").hide();
                U()(".payment-paylater").show()
            } else if (A == "payment10") {
                U()(".payment-fields").hide();
                U()(".payment-irctcwallet").show()
            }
        });
        document.onkeydown = function() {
            if (window.event.keyCode == "13") {
                U()(".enter-click:visible").click()
            }
        };
        U()("#privacy-button").click(function() {
            if (document.getElementById("privacy-tick").checked) {
                U()("#privacy-policy").css("display", "none");
                U()("#form-start").css("display", "block");
                localStorage.privacy = 1;
                U()("#privacy-error").css("display", "none")
            } else {
                U()("#privacy-error").css("display", "block")
            }
        })
    },
    8: function(R, n, i) {
        (function(A, e, t) {
            if (true) {
                R.exports = n = e(i(3), i(14), i(15))
            } else {}
        })(this, function(r) {
            (function() {
                var A = r;
                var e = A.lib;
                var t = e.Base;
                var I = e.WordArray;
                var R = A.algo;
                var n = R.MD5;
                var i = R.EvpKDF = t.extend({
                    cfg: t.extend({
                        keySize: 128 / 32,
                        hasher: n,
                        iterations: 1
                    }),
                    init: function(A) {
                        this.cfg = this.cfg.extend(A)
                    },
                    compute: function(A, e) {
                        var t = this.cfg;
                        var R = t.hasher.create();
                        var n = I.create();
                        var i = n.words;
                        var r = t.keySize;
                        var N = t.iterations;
                        while (i.length < r) {
                            if (a) {
                                R.update(a)
                            }
                            var a = R.update(A).finalize(e);
                            R.reset();
                            for (var o = 1; o < N; o++) {
                                a = R.finalize(a);
                                R.reset()
                            }
                            n.concat(a)
                        }
                        n.sigBytes = r * 4;
                        return n
                    }
                });
                A.EvpKDF = function(A, e, t) {
                    return i.create(t).compute(A, e)
                }
            })();
            return r.EvpKDF
        })
    }
});