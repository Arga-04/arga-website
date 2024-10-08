/*
 * Bootstrap touchspain
 *
 */
! function(a) {
    "use strict";

    function c(a, b) {
        return a + ".touchspin_" + b
    }

    function d(b, d) {
        return a.map(b, function(a) {
            return c(a, d)
        })
    }
    var b = 0;
    a.fn.TouchSpin = function(c) {
        if ("destroy" === c) return void this.each(function() {
            var b = a(this),
                c = b.data();
            a(document).off(d(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], c.spinnerid).join(" "))
        });
        var e = {
                min: 0,
                max: 100,
                initval: "",
                replacementval: "",
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: "round",
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: "glyphicon glyphicon-chevron-up",
                verticaldownclass: "glyphicon glyphicon-chevron-down",
                prefix: "",
                postfix: "",
                prefix_extraclass: "",
                postfix_extraclass: "",
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: "btn btn-default",
                buttonup_class: "btn btn-default",
                buttondown_txt: "-",
                buttonup_txt: "+"
            },
            f = {
                min: "min",
                max: "max",
                initval: "init-val",
                replacementval: "replacement-val",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt"
            };
        return this.each(function() {
            function s() {
                if (!h.data("alreadyinitialized")) {
                    if (h.data("alreadyinitialized", !0), b += 1, h.data("spinnerid", b), !h.is("input")) return void console.log("Must be an input.");
                    v(), t(), G(), y(), B(), C(), D(), E(), k.input.css("display", "block")
                }
            }

            function t() {
                "" !== g.initval && "" === h.val() && h.val(g.initval)
            }

            function u(a) {
                x(a), G();
                var b = k.input.val();
                "" !== b && (b = Number(k.input.val()), k.input.val(b.toFixed(g.decimals)))
            }

            function v() {
                g = a.extend({}, e, i, w(), c)
            }

            function w() {
                var b = {};
                return a.each(f, function(a, c) {
                    var d = "bts-" + c;
                    h.is("[data-" + d + "]") && (b[a] = h.data(d))
                }), b
            }

            function x(b) {
                g = a.extend({}, g, b)
            }

            function y() {
                var a = h.val(),
                    b = h.parent();
                "" !== a && (a = Number(a).toFixed(g.decimals)), h.data("initvalue", a).val(a), h.addClass("form-control"), b.hasClass("input-group") ? z(b) : A()
            }

            function z(b) {
                b.addClass("bootstrap-touchspin");
                var e, f, c = h.prev(),
                    d = h.next(),
                    i = '<span class="input-group-addon bootstrap-touchspin-prefix">' + g.prefix + "</span>",
                    k = '<span class="input-group-addon bootstrap-touchspin-postfix">' + g.postfix + "</span>";
                c.hasClass("input-group-btn") ? (e = '<button class="' + g.buttondown_class + ' bootstrap-touchspin-down" type="button">' + g.buttondown_txt + "</button>", c.append(e)) : (e = '<span class="input-group-btn"><button class="' + g.buttondown_class + ' bootstrap-touchspin-down" type="button">' + g.buttondown_txt + "</button></span>", a(e).insertBefore(h)), d.hasClass("input-group-btn") ? (f = '<button class="' + g.buttonup_class + ' bootstrap-touchspin-up" type="button">' + g.buttonup_txt + "</button>", d.prepend(f)) : (f = '<span class="input-group-btn"><button class="' + g.buttonup_class + ' bootstrap-touchspin-up" type="button">' + g.buttonup_txt + "</button></span>", a(f).insertAfter(h)), a(i).insertBefore(h), a(k).insertAfter(h), j = b
            }

            function A() {
                var b;
                b = g.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + g.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + g.postfix + '</span><span class="input-group-btn-vertical"><button class="' + g.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + g.verticalupclass + '"></i></button><button class="' + g.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + g.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + g.buttondown_class + ' bootstrap-touchspin-down" type="button">' + g.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + g.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + g.postfix + '</span><span class="input-group-btn"><button class="' + g.buttonup_class + ' bootstrap-touchspin-up" type="button">' + g.buttonup_txt + "</button></span></div>", j = a(b).insertBefore(h), a(".bootstrap-touchspin-prefix", j).after(h), h.hasClass("input-sm") ? j.addClass("input-group-sm") : h.hasClass("input-lg") && j.addClass("input-group-lg")
            }

            function B() {
                k = {
                    down: a(".bootstrap-touchspin-down", j),
                    up: a(".bootstrap-touchspin-up", j),
                    input: a("input", j),
                    prefix: a(".bootstrap-touchspin-prefix", j).addClass(g.prefix_extraclass),
                    postfix: a(".bootstrap-touchspin-postfix", j).addClass(g.postfix_extraclass)
                }
            }

            function C() {
                "" === g.prefix && k.prefix.hide(), "" === g.postfix && k.postfix.hide()
            }

            function D() {
                h.on("keydown", function(a) {
                    var b = a.keyCode || a.which;
                    38 === b ? ("up" !== r && (I(), L()), a.preventDefault()) : 40 === b && ("down" !== r && (J(), K()), a.preventDefault())
                }), h.on("keyup", function(a) {
                    var b = a.keyCode || a.which;
                    38 === b ? M() : 40 === b && M()
                }), h.on("blur", function() {
                    G()
                }), k.down.on("keydown", function(a) {
                    var b = a.keyCode || a.which;
                    32 !== b && 13 !== b || ("down" !== r && (J(), K()), a.preventDefault())
                }), k.down.on("keyup", function(a) {
                    var b = a.keyCode || a.which;
                    32 !== b && 13 !== b || M()
                }), k.up.on("keydown", function(a) {
                    var b = a.keyCode || a.which;
                    32 !== b && 13 !== b || ("up" !== r && (I(), L()), a.preventDefault())
                }), k.up.on("keyup", function(a) {
                    var b = a.keyCode || a.which;
                    32 !== b && 13 !== b || M()
                }), k.down.on("mousedown.touchspin", function(a) {
                    k.down.off("touchstart.touchspin"), h.is(":disabled") || (J(), K(), a.preventDefault(), a.stopPropagation())
                }), k.down.on("touchstart.touchspin", function(a) {
                    k.down.off("mousedown.touchspin"), h.is(":disabled") || (J(), K(), a.preventDefault(), a.stopPropagation())
                }), k.up.on("mousedown.touchspin", function(a) {
                    k.up.off("touchstart.touchspin"), h.is(":disabled") || (I(), L(), a.preventDefault(), a.stopPropagation())
                }), k.up.on("touchstart.touchspin", function(a) {
                    k.up.off("mousedown.touchspin"), h.is(":disabled") || (I(), L(), a.preventDefault(), a.stopPropagation())
                }), k.up.on("mouseout touchleave touchend touchcancel", function(a) {
                    r && (a.stopPropagation(), M())
                }), k.down.on("mouseout touchleave touchend touchcancel", function(a) {
                    r && (a.stopPropagation(), M())
                }), k.down.on("mousemove touchmove", function(a) {
                    r && (a.stopPropagation(), a.preventDefault())
                }), k.up.on("mousemove touchmove", function(a) {
                    r && (a.stopPropagation(), a.preventDefault())
                }), a(document).on(d(["mouseup", "touchend", "touchcancel"], b).join(" "), function(a) {
                    r && (a.preventDefault(), M())
                }), a(document).on(d(["mousemove", "touchmove", "scroll", "scrollstart"], b).join(" "), function(a) {
                    r && (a.preventDefault(), M())
                }), h.on("mousewheel DOMMouseScroll", function(a) {
                    if (g.mousewheel && h.is(":focus")) {
                        var b = a.originalEvent.wheelDelta || -a.originalEvent.deltaY || -a.originalEvent.detail;
                        a.stopPropagation(), a.preventDefault(), b < 0 ? J() : I()
                    }
                })
            }

            function E() {
                h.on("touchspin.uponce", function() {
                    M(), I()
                }), h.on("touchspin.downonce", function() {
                    M(), J()
                }), h.on("touchspin.startupspin", function() {
                    L()
                }), h.on("touchspin.startdownspin", function() {
                    K()
                }), h.on("touchspin.stopspin", function() {
                    M()
                }), h.on("touchspin.updatesettings", function(a, b) {
                    u(b)
                })
            }

            function F(a) {
                switch (g.forcestepdivisibility) {
                    case "round":
                        return (Math.round(a / g.step) * g.step).toFixed(g.decimals);
                    case "floor":
                        return (Math.floor(a / g.step) * g.step).toFixed(g.decimals);
                    case "ceil":
                        return (Math.ceil(a / g.step) * g.step).toFixed(g.decimals);
                    default:
                        return a
                }
            }

            function G() {
                var a, b, c;
                return a = h.val(), "" === a ? void("" !== g.replacementval && (h.val(g.replacementval), h.trigger("change"))) : void(g.decimals > 0 && "." === a || (b = parseFloat(a), isNaN(b) && (b = "" !== g.replacementval ? g.replacementval : 0), c = b, b.toString() !== a && (c = b), b < g.min && (c = g.min), b > g.max && (c = g.max), c = F(c), Number(a).toString() !== c.toString() && (h.val(c), h.trigger("change"))))
            }

            function H() {
                if (g.booster) {
                    var a = Math.pow(2, Math.floor(q / g.boostat)) * g.step;
                    return g.maxboostedstep && a > g.maxboostedstep && (a = g.maxboostedstep, l = Math.round(l / a) * a), Math.max(g.step, a)
                }
                return g.step
            }

            function I() {
                G(), l = parseFloat(k.input.val()), isNaN(l) && (l = 0);
                var a = l,
                    b = H();
                l += b, l > g.max && (l = g.max, h.trigger("touchspin.on.max"), M()), k.input.val(Number(l).toFixed(g.decimals)), a !== l && h.trigger("change")
            }

            function J() {
                G(), l = parseFloat(k.input.val()), isNaN(l) && (l = 0);
                var a = l,
                    b = H();
                l -= b, l < g.min && (l = g.min, h.trigger("touchspin.on.min"), M()), k.input.val(l.toFixed(g.decimals)), a !== l && h.trigger("change")
            }

            function K() {
                M(), q = 0, r = "down", h.trigger("touchspin.on.startspin"), h.trigger("touchspin.on.startdownspin"), o = setTimeout(function() {
                    m = setInterval(function() {
                        q++, J()
                    }, g.stepinterval)
                }, g.stepintervaldelay)
            }

            function L() {
                M(), q = 0, r = "up", h.trigger("touchspin.on.startspin"), h.trigger("touchspin.on.startupspin"), p = setTimeout(function() {
                    n = setInterval(function() {
                        q++, I()
                    }, g.stepinterval)
                }, g.stepintervaldelay)
            }

            function M() {
                switch (clearTimeout(o), clearTimeout(p), clearInterval(m), clearInterval(n), r) {
                    case "up":
                        h.trigger("touchspin.on.stopupspin"), h.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        h.trigger("touchspin.on.stopdownspin"), h.trigger("touchspin.on.stopspin")
                }
                q = 0, r = !1
            }
            var g, j, k, l, m, n, o, p, h = a(this),
                i = h.data(),
                q = 0,
                r = !1;
            s()
        })
    }
}(jQuery);