;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    131: function(e, t, i) {
      var s = i(132)
      'string' == typeof s && (s = [[e.i, s, '']])
      var a = { insert: 'head', singleton: !1 }
      i(71)(s, a)
      s.locals && (e.exports = s.locals)
    },
    132: function(e, t, i) {
      ;(e.exports = i(70)(!1)).push([
        e.i,
        '/**\n * Swiper 5.2.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://swiperjs.com\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 16, 2019\n */\n\n@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(44px/ 44 * 27);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:44px;height:var(--swiper-navigation-size);margin-top:calc(-1 * 44px/ 2);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-moz-font-feature-settings:normal, ;font-feature-settings:normal, ;font-variant:normal;font-variant:initial}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\'prev\'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\'next\'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s infinite linear;box-sizing:border-box;border:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}',
        '',
      ])
    },
    83: function(e, t, i) {
      'use strict'
      var s = i(43),
        a = i.n(s),
        n = i(84),
        r = i.n(n),
        o = i(59),
        l = i.n(o),
        d = i(85),
        h = i.n(d),
        c = i(30),
        p = i.n(c),
        u = i(42),
        v = i.n(u),
        m = i(60),
        f = i.n(m),
        g = i(22),
        w = i.n(g),
        b = i(3),
        x = i(1),
        y = {
          addClass: b.c,
          removeClass: b.F,
          hasClass: b.n,
          toggleClass: b.I,
          attr: b.e,
          removeAttr: b.E,
          data: b.i,
          transform: b.J,
          transition: b.K,
          on: b.v,
          off: b.t,
          trigger: b.M,
          transitionEnd: b.L,
          outerWidth: b.x,
          outerHeight: b.w,
          offset: b.u,
          css: b.h,
          each: b.j,
          html: b.o,
          text: b.H,
          is: b.q,
          index: b.p,
          eq: b.k,
          append: b.d,
          prepend: b.A,
          next: b.r,
          nextAll: b.s,
          prev: b.B,
          prevAll: b.C,
          parent: b.y,
          parents: b.z,
          closest: b.g,
          find: b.m,
          children: b.f,
          filter: b.l,
          remove: b.D,
          add: b.b,
          styles: b.G,
        }
      Object.keys(y).forEach(function(e) {
        b.a.fn[e] = b.a.fn[e] || y[e]
      })
      var T = {
          deleteProps: function(e) {
            var t = e
            Object.keys(t).forEach(function(e) {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            })
          },
          nextTick: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            return setTimeout(e, t)
          },
          now: function() {
            return Date.now()
          },
          getTranslate: function(e) {
            var t,
              i,
              s,
              a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x',
              n = x.b.getComputedStyle(e, null)
            return (
              x.b.WebKitCSSMatrix
                ? ((i = n.transform || n.webkitTransform).split(',').length > 6 &&
                    (i = i
                      .split(', ')
                      .map(function(e) {
                        return e.replace(',', '.')
                      })
                      .join(', ')),
                  (s = new x.b.WebKitCSSMatrix('none' === i ? '' : i)))
                : (t = (s =
                    n.MozTransform ||
                    n.OTransform ||
                    n.MsTransform ||
                    n.msTransform ||
                    n.transform ||
                    n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'))
                    .toString()
                    .split(',')),
              'x' === a && (i = x.b.WebKitCSSMatrix ? s.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
              'y' === a && (i = x.b.WebKitCSSMatrix ? s.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
              i || 0
            )
          },
          parseUrlQuery: function(e) {
            var t,
              i,
              s,
              a,
              n = {},
              r = e || x.b.location.href
            if ('string' == typeof r && r.length)
              for (
                a = (i = (r = r.indexOf('?') > -1 ? r.replace(/\S*\?/, '') : '').split('&').filter(function(e) {
                  return '' !== e
                })).length,
                  t = 0;
                t < a;
                t += 1
              )
                (s = i[t].replace(/#\S+/g, '').split('=')),
                  (n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || '')
            return n
          },
          isObject: function(e) {
            return 'object' === w()(e) && null !== e && e.constructor && e.constructor === Object
          },
          extend: function() {
            for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
              var i = t < 0 || arguments.length <= t ? void 0 : arguments[t]
              if (null != i)
                for (var s = Object.keys(Object(i)), a = 0, n = s.length; a < n; a += 1) {
                  var r = s[a],
                    o = Object.getOwnPropertyDescriptor(i, r)
                  void 0 !== o &&
                    o.enumerable &&
                    (T.isObject(e[r]) && T.isObject(i[r])
                      ? T.extend(e[r], i[r])
                      : !T.isObject(e[r]) && T.isObject(i[r])
                      ? ((e[r] = {}), T.extend(e[r], i[r]))
                      : (e[r] = i[r]))
                }
            }
            return e
          },
        },
        E = {
          touch:
            (x.b.Modernizr && !0 === x.b.Modernizr.touch) ||
            !!(
              x.b.navigator.maxTouchPoints > 0 ||
              'ontouchstart' in x.b ||
              (x.b.DocumentTouch && x.a instanceof x.b.DocumentTouch)
            ),
          pointerEvents: !!x.b.PointerEvent && 'maxTouchPoints' in x.b.navigator && x.b.navigator.maxTouchPoints > 0,
          observer: 'MutationObserver' in x.b || 'WebkitMutationObserver' in x.b,
          passiveListener: (function() {
            var e = !1
            try {
              var t = Object.defineProperty({}, 'passive', {
                get: function() {
                  e = !0
                },
              })
              x.b.addEventListener('testPassiveListener', null, t)
            } catch (e) {}
            return e
          })(),
          gestures: 'ongesturestart' in x.b,
        },
        C = (function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            v()(this, e)
            var i = this
            ;(i.params = t),
              (i.eventsListeners = {}),
              i.params &&
                i.params.on &&
                Object.keys(i.params.on).forEach(function(e) {
                  i.on(e, i.params.on[e])
                })
          }
          return (
            f()(
              e,
              [
                {
                  key: 'on',
                  value: function(e, t, i) {
                    var s = this
                    if ('function' != typeof t) return s
                    var a = i ? 'unshift' : 'push'
                    return (
                      e.split(' ').forEach(function(e) {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
                      }),
                      s
                    )
                  },
                },
                {
                  key: 'once',
                  value: function(e, t, i) {
                    var s = this
                    if ('function' != typeof t) return s
                    function a() {
                      s.off(e, a), a.f7proxy && delete a.f7proxy
                      for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
                      t.apply(s, n)
                    }
                    return (a.f7proxy = t), s.on(e, a, i)
                  },
                },
                {
                  key: 'off',
                  value: function(e, t) {
                    var i = this
                    return i.eventsListeners
                      ? (e.split(' ').forEach(function(e) {
                          void 0 === t
                            ? (i.eventsListeners[e] = [])
                            : i.eventsListeners[e] &&
                              i.eventsListeners[e].length &&
                              i.eventsListeners[e].forEach(function(s, a) {
                                ;(s === t || (s.f7proxy && s.f7proxy === t)) && i.eventsListeners[e].splice(a, 1)
                              })
                        }),
                        i)
                      : i
                  },
                },
                {
                  key: 'emit',
                  value: function() {
                    var e,
                      t,
                      i,
                      s = this
                    if (!s.eventsListeners) return s
                    for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r]
                    'string' == typeof n[0] || Array.isArray(n[0])
                      ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
                      : ((e = n[0].events), (t = n[0].data), (i = n[0].context || s))
                    var o = Array.isArray(e) ? e : e.split(' ')
                    return (
                      o.forEach(function(e) {
                        if (s.eventsListeners && s.eventsListeners[e]) {
                          var a = []
                          s.eventsListeners[e].forEach(function(e) {
                            a.push(e)
                          }),
                            a.forEach(function(e) {
                              e.apply(i, t)
                            })
                        }
                      }),
                      s
                    )
                  },
                },
                {
                  key: 'useModulesParams',
                  value: function(e) {
                    var t = this
                    t.modules &&
                      Object.keys(t.modules).forEach(function(i) {
                        var s = t.modules[i]
                        s.params && T.extend(e, s.params)
                      })
                  },
                },
                {
                  key: 'useModules',
                  value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      t = this
                    t.modules &&
                      Object.keys(t.modules).forEach(function(i) {
                        var s = t.modules[i],
                          a = e[i] || {}
                        s.instance &&
                          Object.keys(s.instance).forEach(function(e) {
                            var i = s.instance[e]
                            t[e] = 'function' == typeof i ? i.bind(t) : i
                          }),
                          s.on &&
                            t.on &&
                            Object.keys(s.on).forEach(function(e) {
                              t.on(e, s.on[e])
                            }),
                          s.create && s.create.bind(t)(a)
                      })
                  },
                },
              ],
              [
                {
                  key: 'installModule',
                  value: function(e) {
                    var t = this
                    t.prototype.modules || (t.prototype.modules = {})
                    var i = e.name || ''.concat(Object.keys(t.prototype.modules).length, '_').concat(T.now())
                    if (
                      ((t.prototype.modules[i] = e),
                      e.proto &&
                        Object.keys(e.proto).forEach(function(i) {
                          t.prototype[i] = e.proto[i]
                        }),
                      e.static &&
                        Object.keys(e.static).forEach(function(i) {
                          t[i] = e.static[i]
                        }),
                      e.install)
                    ) {
                      for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++)
                        a[n - 1] = arguments[n]
                      e.install.apply(t, a)
                    }
                    return t
                  },
                },
                {
                  key: 'use',
                  value: function(e) {
                    var t = this
                    if (Array.isArray(e))
                      return (
                        e.forEach(function(e) {
                          return t.installModule(e)
                        }),
                        t
                      )
                    for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                      s[a - 1] = arguments[a]
                    return t.installModule.apply(t, [e].concat(s))
                  },
                },
                {
                  key: 'components',
                  set: function(e) {
                    this.use && this.use(e)
                  },
                },
              ],
            ),
            e
          )
        })()
      var S = {
        updateSize: function() {
          var e,
            t,
            i = this.$el
          ;(e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
            (t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e = e - parseInt(i.css('padding-left'), 10) - parseInt(i.css('padding-right'), 10)),
              (t = t - parseInt(i.css('padding-top'), 10) - parseInt(i.css('padding-bottom'), 10)),
              T.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t }))
        },
        updateSlides: function() {
          var e = this.params,
            t = this.$wrapperEl,
            i = this.size,
            s = this.rtlTranslate,
            a = this.wrongRTL,
            n = this.virtual && e.virtual.enabled,
            r = n ? this.virtual.slides.length : this.slides.length,
            o = t.children('.'.concat(this.params.slideClass)),
            l = n ? this.virtual.slides.length : o.length,
            d = [],
            h = [],
            c = []
          function p(t) {
            return !e.cssMode || t !== o.length - 1
          }
          var u = e.slidesOffsetBefore
          'function' == typeof u && (u = e.slidesOffsetBefore.call(this))
          var v = e.slidesOffsetAfter
          'function' == typeof v && (v = e.slidesOffsetAfter.call(this))
          var m = this.snapGrid.length,
            f = this.snapGrid.length,
            g = e.spaceBetween,
            w = -u,
            b = 0,
            y = 0
          if (void 0 !== i) {
            var E, C
            'string' == typeof g && g.indexOf('%') >= 0 && (g = (parseFloat(g.replace('%', '')) / 100) * i),
              (this.virtualSize = -g),
              s ? o.css({ marginLeft: '', marginTop: '' }) : o.css({ marginRight: '', marginBottom: '' }),
              e.slidesPerColumn > 1 &&
                ((E =
                  Math.floor(l / e.slidesPerColumn) === l / this.params.slidesPerColumn
                    ? l
                    : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn),
                'auto' !== e.slidesPerView &&
                  'row' === e.slidesPerColumnFill &&
                  (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)))
            for (var S, A = e.slidesPerColumn, M = E / A, z = Math.floor(l / e.slidesPerColumn), k = 0; k < l; k += 1) {
              C = 0
              var P = o.eq(k)
              if (e.slidesPerColumn > 1) {
                var $ = void 0,
                  O = void 0,
                  I = void 0
                if ('row' === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                  var L = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                    D = k - e.slidesPerColumn * e.slidesPerGroup * L,
                    B =
                      0 === L
                        ? e.slidesPerGroup
                        : Math.min(Math.ceil((l - L * A * e.slidesPerGroup) / A), e.slidesPerGroup)
                  ;($ = (O = D - (I = Math.floor(D / B)) * B + L * e.slidesPerGroup) + (I * E) / A),
                    P.css({
                      '-webkit-box-ordinal-group': $,
                      '-moz-box-ordinal-group': $,
                      '-ms-flex-order': $,
                      '-webkit-order': $,
                      order: $,
                    })
                } else
                  'column' === e.slidesPerColumnFill
                    ? ((I = k - (O = Math.floor(k / A)) * A),
                      (O > z || (O === z && I === A - 1)) && (I += 1) >= A && ((I = 0), (O += 1)))
                    : (O = k - (I = Math.floor(k / M)) * M)
                P.css(
                  'margin-'.concat(this.isHorizontal() ? 'top' : 'left'),
                  0 !== I && e.spaceBetween && ''.concat(e.spaceBetween, 'px'),
                )
              }
              if ('none' !== P.css('display')) {
                if ('auto' === e.slidesPerView) {
                  var G = x.b.getComputedStyle(P[0], null),
                    Y = P[0].style.transform,
                    H = P[0].style.webkitTransform
                  if (
                    (Y && (P[0].style.transform = 'none'), H && (P[0].style.webkitTransform = 'none'), e.roundLengths)
                  )
                    C = this.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0)
                  else if (this.isHorizontal()) {
                    var j = parseFloat(G.getPropertyValue('width')),
                      N = parseFloat(G.getPropertyValue('padding-left')),
                      X = parseFloat(G.getPropertyValue('padding-right')),
                      V = parseFloat(G.getPropertyValue('margin-left')),
                      F = parseFloat(G.getPropertyValue('margin-right')),
                      R = G.getPropertyValue('box-sizing')
                    C = R && 'border-box' === R ? j + V + F : j + N + X + V + F
                  } else {
                    var W = parseFloat(G.getPropertyValue('height')),
                      q = parseFloat(G.getPropertyValue('padding-top')),
                      U = parseFloat(G.getPropertyValue('padding-bottom')),
                      K = parseFloat(G.getPropertyValue('margin-top')),
                      Q = parseFloat(G.getPropertyValue('margin-bottom')),
                      Z = G.getPropertyValue('box-sizing')
                    C = Z && 'border-box' === Z ? W + K + Q : W + q + U + K + Q
                  }
                  Y && (P[0].style.transform = Y),
                    H && (P[0].style.webkitTransform = H),
                    e.roundLengths && (C = Math.floor(C))
                } else
                  (C = (i - (e.slidesPerView - 1) * g) / e.slidesPerView),
                    e.roundLengths && (C = Math.floor(C)),
                    o[k] &&
                      (this.isHorizontal()
                        ? (o[k].style.width = ''.concat(C, 'px'))
                        : (o[k].style.height = ''.concat(C, 'px')))
                o[k] && (o[k].swiperSlideSize = C),
                  c.push(C),
                  e.centeredSlides
                    ? ((w = w + C / 2 + b / 2 + g),
                      0 === b && 0 !== k && (w = w - i / 2 - g),
                      0 === k && (w = w - i / 2 - g),
                      Math.abs(w) < 0.001 && (w = 0),
                      e.roundLengths && (w = Math.floor(w)),
                      y % e.slidesPerGroup == 0 && d.push(w),
                      h.push(w))
                    : (e.roundLengths && (w = Math.floor(w)),
                      y % e.slidesPerGroup == 0 && d.push(w),
                      h.push(w),
                      (w = w + C + g)),
                  (this.virtualSize += C + g),
                  (b = C),
                  (y += 1)
              }
            }
            if (
              ((this.virtualSize = Math.max(this.virtualSize, i) + v),
              s &&
                a &&
                ('slide' === e.effect || 'coverflow' === e.effect) &&
                t.css({ width: ''.concat(this.virtualSize + e.spaceBetween, 'px') }),
              e.setWrapperSize &&
                (this.isHorizontal()
                  ? t.css({ width: ''.concat(this.virtualSize + e.spaceBetween, 'px') })
                  : t.css({ height: ''.concat(this.virtualSize + e.spaceBetween, 'px') })),
              e.slidesPerColumn > 1 &&
                ((this.virtualSize = (C + e.spaceBetween) * E),
                (this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
                this.isHorizontal()
                  ? t.css({ width: ''.concat(this.virtualSize + e.spaceBetween, 'px') })
                  : t.css({ height: ''.concat(this.virtualSize + e.spaceBetween, 'px') }),
                e.centeredSlides))
            ) {
              S = []
              for (var J = 0; J < d.length; J += 1) {
                var _ = d[J]
                e.roundLengths && (_ = Math.floor(_)), d[J] < this.virtualSize + d[0] && S.push(_)
              }
              d = S
            }
            if (!e.centeredSlides) {
              S = []
              for (var ee = 0; ee < d.length; ee += 1) {
                var te = d[ee]
                e.roundLengths && (te = Math.floor(te)), d[ee] <= this.virtualSize - i && S.push(te)
              }
              ;(d = S),
                Math.floor(this.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(this.virtualSize - i)
            }
            if (
              (0 === d.length && (d = [0]),
              0 !== e.spaceBetween &&
                (this.isHorizontal()
                  ? s
                    ? o.filter(p).css({ marginLeft: ''.concat(g, 'px') })
                    : o.filter(p).css({ marginRight: ''.concat(g, 'px') })
                  : o.filter(p).css({ marginBottom: ''.concat(g, 'px') })),
              e.centeredSlides && e.centeredSlidesBounds)
            ) {
              var ie = 0
              c.forEach(function(t) {
                ie += t + (e.spaceBetween ? e.spaceBetween : 0)
              })
              var se = (ie -= e.spaceBetween) - i
              d = d.map(function(e) {
                return e < 0 ? -u : e > se ? se + v : e
              })
            }
            if (e.centerInsufficientSlides) {
              var ae = 0
              if (
                (c.forEach(function(t) {
                  ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                }),
                (ae -= e.spaceBetween) < i)
              ) {
                var ne = (i - ae) / 2
                d.forEach(function(e, t) {
                  d[t] = e - ne
                }),
                  h.forEach(function(e, t) {
                    h[t] = e + ne
                  })
              }
            }
            T.extend(this, { slides: o, snapGrid: d, slidesGrid: h, slidesSizesGrid: c }),
              l !== r && this.emit('slidesLengthChange'),
              d.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit('snapGridLengthChange')),
              h.length !== f && this.emit('slidesGridLengthChange'),
              (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
          }
        },
        updateAutoHeight: function(e) {
          var t,
            i = [],
            s = 0
          if (
            ('number' == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            'auto' !== this.params.slidesPerView && this.params.slidesPerView > 1)
          )
            for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var a = this.activeIndex + t
              if (a > this.slides.length) break
              i.push(this.slides.eq(a)[0])
            }
          else i.push(this.slides.eq(this.activeIndex)[0])
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var n = i[t].offsetHeight
              s = n > s ? n : s
            }
          s && this.$wrapperEl.css('height', ''.concat(s, 'px'))
        },
        updateSlidesOffset: function() {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (this && this.translate) || 0,
            t = this.params,
            i = this.slides,
            s = this.rtlTranslate
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset()
            var a = -e
            s && (a = e),
              i.removeClass(t.slideVisibleClass),
              (this.visibleSlidesIndexes = []),
              (this.visibleSlides = [])
            for (var n = 0; n < i.length; n += 1) {
              var r = i[n],
                o =
                  (a + (t.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) /
                  (r.swiperSlideSize + t.spaceBetween)
              if (t.watchSlidesVisibility) {
                var l = -(a - r.swiperSlideOffset),
                  d = l + this.slidesSizesGrid[n]
                ;((l >= 0 && l < this.size - 1) || (d > 1 && d <= this.size) || (l <= 0 && d >= this.size)) &&
                  (this.visibleSlides.push(r), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
              }
              r.progress = s ? -o : o
            }
            this.visibleSlides = Object(b.a)(this.visibleSlides)
          }
        },
        updateProgress: function(e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1
            e = (this && this.translate && this.translate * t) || 0
          }
          var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            n = this.isBeginning,
            r = this.isEnd,
            o = n,
            l = r
          0 === s ? ((a = 0), (n = !0), (r = !0)) : ((n = (a = (e - this.minTranslate()) / s) <= 0), (r = a >= 1)),
            T.extend(this, { progress: a, isBeginning: n, isEnd: r }),
            (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e),
            n && !o && this.emit('reachBeginning toEdge'),
            r && !l && this.emit('reachEnd toEdge'),
            ((o && !n) || (l && !r)) && this.emit('fromEdge'),
            this.emit('progress', a)
        },
        updateSlidesClasses: function() {
          var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            n = this.realIndex,
            r = this.virtual && i.virtual.enabled
          t.removeClass(
            ''
              .concat(i.slideActiveClass, ' ')
              .concat(i.slideNextClass, ' ')
              .concat(i.slidePrevClass, ' ')
              .concat(i.slideDuplicateActiveClass, ' ')
              .concat(i.slideDuplicateNextClass, ' ')
              .concat(i.slideDuplicatePrevClass),
          ),
            (e = r
              ? this.$wrapperEl.find('.'.concat(i.slideClass, '[data-swiper-slide-index="').concat(a, '"]'))
              : t.eq(a)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.'
                        .concat(i.slideClass, ':not(.')
                        .concat(i.slideDuplicateClass, ')[data-swiper-slide-index="')
                        .concat(n, '"]'),
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      '.'
                        .concat(i.slideClass, '.')
                        .concat(i.slideDuplicateClass, '[data-swiper-slide-index="')
                        .concat(n, '"]'),
                    )
                    .addClass(i.slideDuplicateActiveClass))
          var o = e
            .nextAll('.'.concat(i.slideClass))
            .eq(0)
            .addClass(i.slideNextClass)
          i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass)
          var l = e
            .prevAll('.'.concat(i.slideClass))
            .eq(0)
            .addClass(i.slidePrevClass)
          i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.'
                        .concat(i.slideClass, ':not(.')
                        .concat(i.slideDuplicateClass, ')[data-swiper-slide-index="')
                        .concat(o.attr('data-swiper-slide-index'), '"]'),
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      '.'
                        .concat(i.slideClass, '.')
                        .concat(i.slideDuplicateClass, '[data-swiper-slide-index="')
                        .concat(o.attr('data-swiper-slide-index'), '"]'),
                    )
                    .addClass(i.slideDuplicateNextClass),
              l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.'
                        .concat(i.slideClass, ':not(.')
                        .concat(i.slideDuplicateClass, ')[data-swiper-slide-index="')
                        .concat(l.attr('data-swiper-slide-index'), '"]'),
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      '.'
                        .concat(i.slideClass, '.')
                        .concat(i.slideDuplicateClass, '[data-swiper-slide-index="')
                        .concat(l.attr('data-swiper-slide-index'), '"]'),
                    )
                    .addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
          var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            n = this.params,
            r = this.activeIndex,
            o = this.realIndex,
            l = this.snapIndex,
            d = e
          if (void 0 === d) {
            for (var h = 0; h < s.length; h += 1)
              void 0 !== s[h + 1]
                ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2
                  ? (d = h)
                  : i >= s[h] && i < s[h + 1] && (d = h + 1)
                : i >= s[h] && (d = h)
            n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
          }
          if (
            ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(d / n.slidesPerGroup)) >= a.length &&
              (t = a.length - 1),
            d !== r)
          ) {
            var c = parseInt(this.slides.eq(d).attr('data-swiper-slide-index') || d, 10)
            T.extend(this, { snapIndex: t, realIndex: c, previousIndex: r, activeIndex: d }),
              this.emit('activeIndexChange'),
              this.emit('snapIndexChange'),
              o !== c && this.emit('realIndexChange'),
              (this.initialized || this.runCallbacksOnInit) && this.emit('slideChange')
          } else t !== l && ((this.snapIndex = t), this.emit('snapIndexChange'))
        },
        updateClickedSlide: function(e) {
          var t = this.params,
            i = Object(b.a)(e.target).closest('.'.concat(t.slideClass))[0],
            s = !1
          if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0)
          if (!i || !s) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
          ;(this.clickedSlide = i),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(Object(b.a)(i).attr('data-swiper-slide-index'), 10))
              : (this.clickedIndex = Object(b.a)(i).index()),
            t.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide()
        },
      }
      var A = {
        getTranslate: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? 'x' : 'y',
            t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl
          if (t.virtualTranslate) return i ? -s : s
          if (t.cssMode) return s
          var n = T.getTranslate(a[0], e)
          return i && (n = -n), n || 0
        },
        setTranslate: function(e, t) {
          var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            n = this.wrapperEl,
            r = this.progress,
            o = 0,
            l = 0
          this.isHorizontal() ? (o = i ? -e : e) : (l = e),
            s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
            s.cssMode
              ? (n[this.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = this.isHorizontal() ? -o : -l)
              : s.virtualTranslate ||
                a.transform(
                  'translate3d('
                    .concat(o, 'px, ')
                    .concat(l, 'px, ')
                    .concat(0, 'px)'),
                ),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? o : l)
          var d = this.maxTranslate() - this.minTranslate()
          ;(0 === d ? 0 : (e - this.minTranslate()) / d) !== r && this.updateProgress(e),
            this.emit('setTranslate', this.translate, t)
        },
        minTranslate: function() {
          return -this.snapGrid[0]
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 ? arguments[4] : void 0,
            n = this,
            r = n.params,
            o = n.wrapperEl
          if (n.animating && r.preventInteractionOnTransition) return !1
          var l,
            d = n.minTranslate(),
            h = n.maxTranslate()
          if (((l = s && e > d ? d : s && e < h ? h : e), n.updateProgress(l), r.cssMode)) {
            var c,
              u = n.isHorizontal()
            if (0 === t) o[u ? 'scrollLeft' : 'scrollTop'] = -l
            else if (o.scrollTo) o.scrollTo(((c = {}), p()(c, u ? 'left' : 'top', -l), p()(c, 'behavior', 'smooth'), c))
            else o[u ? 'scrollLeft' : 'scrollTop'] = -l
            return !0
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(l),
                i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionEnd')))
              : (n.setTransition(t),
                n.setTranslate(l),
                i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionStart')),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function(e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                        n.$wrapperEl[0].removeEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        i && n.emit('transitionEnd'))
                    }),
                  n.$wrapperEl[0].addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                  n.$wrapperEl[0].addEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd))),
            !0
          )
        },
      }
      var M = {
        setTransition: function(e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e), this.emit('setTransition', e, t)
        },
        transitionStart: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            i = this.activeIndex,
            s = this.params,
            a = this.previousIndex
          if (!s.cssMode) {
            s.autoHeight && this.updateAutoHeight()
            var n = t
            if ((n || (n = i > a ? 'next' : i < a ? 'prev' : 'reset'), this.emit('transitionStart'), e && i !== a)) {
              if ('reset' === n) return void this.emit('slideResetTransitionStart')
              this.emit('slideChangeTransitionStart'),
                'next' === n ? this.emit('slideNextTransitionStart') : this.emit('slidePrevTransitionStart')
            }
          }
        },
        transitionEnd: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            i = this.activeIndex,
            s = this.previousIndex,
            a = this.params
          if (((this.animating = !1), !a.cssMode)) {
            this.setTransition(0)
            var n = t
            if ((n || (n = i > s ? 'next' : i < s ? 'prev' : 'reset'), this.emit('transitionEnd'), e && i !== s)) {
              if ('reset' === n) return void this.emit('slideResetTransitionEnd')
              this.emit('slideChangeTransitionEnd'),
                'next' === n ? this.emit('slideNextTransitionEnd') : this.emit('slidePrevTransitionEnd')
            }
          }
        },
      }
      var z = {
        slideTo: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0,
            a = this,
            n = e
          n < 0 && (n = 0)
          var r = a.params,
            o = a.snapGrid,
            l = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            c = a.rtlTranslate,
            u = a.wrapperEl
          if (a.animating && r.preventInteractionOnTransition) return !1
          var v = Math.floor(n / r.slidesPerGroup)
          v >= o.length && (v = o.length - 1),
            (h || r.initialSlide || 0) === (d || 0) && i && a.emit('beforeSlideChangeStart')
          var m,
            f = -o[v]
          if ((a.updateProgress(f), r.normalizeSlideIndex))
            for (var g = 0; g < l.length; g += 1) -Math.floor(100 * f) >= Math.floor(100 * l[g]) && (n = g)
          if (a.initialized && n !== h) {
            if (!a.allowSlideNext && f < a.translate && f < a.minTranslate()) return !1
            if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (h || 0) !== n) return !1
          }
          if (((m = n > h ? 'next' : n < h ? 'prev' : 'reset'), (c && -f === a.translate) || (!c && f === a.translate)))
            return (
              a.updateActiveIndex(n),
              r.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              'slide' !== r.effect && a.setTranslate(f),
              'reset' !== m && (a.transitionStart(i, m), a.transitionEnd(i, m)),
              !1
            )
          if (r.cssMode) {
            var w,
              b = a.isHorizontal()
            if (0 === t) u[b ? 'scrollLeft' : 'scrollTop'] = -f
            else if (u.scrollTo) u.scrollTo(((w = {}), p()(w, b ? 'left' : 'top', -f), p()(w, 'behavior', 'smooth'), w))
            else u[b ? 'scrollLeft' : 'scrollTop'] = -f
            return !0
          }
          return (
            0 === t
              ? (a.setTransition(0),
                a.setTranslate(f),
                a.updateActiveIndex(n),
                a.updateSlidesClasses(),
                a.emit('beforeTransitionStart', t, s),
                a.transitionStart(i, m),
                a.transitionEnd(i, m))
              : (a.setTransition(t),
                a.setTranslate(f),
                a.updateActiveIndex(n),
                a.updateSlidesClasses(),
                a.emit('beforeTransitionStart', t, s),
                a.transitionStart(i, m),
                a.animating ||
                  ((a.animating = !0),
                  a.onSlideToWrapperTransitionEnd ||
                    (a.onSlideToWrapperTransitionEnd = function(e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.$wrapperEl[0].removeEventListener('transitionend', a.onSlideToWrapperTransitionEnd),
                        a.$wrapperEl[0].removeEventListener('webkitTransitionEnd', a.onSlideToWrapperTransitionEnd),
                        (a.onSlideToWrapperTransitionEnd = null),
                        delete a.onSlideToWrapperTransitionEnd,
                        a.transitionEnd(i, m))
                    }),
                  a.$wrapperEl[0].addEventListener('transitionend', a.onSlideToWrapperTransitionEnd),
                  a.$wrapperEl[0].addEventListener('webkitTransitionEnd', a.onSlideToWrapperTransitionEnd))),
            !0
          )
        },
        slideToLoop: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0,
            a = e
          return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        },
        slideNext: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = this.params,
            a = this.animating
          return s.loop
            ? !a &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i))
            : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        },
        slidePrev: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = this.params,
            a = this.animating,
            n = this.snapGrid,
            r = this.slidesGrid,
            o = this.rtlTranslate
          if (s.loop) {
            if (a) return !1
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft)
          }
          function l(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          var d,
            h = l(o ? this.translate : -this.translate),
            c = n.map(function(e) {
              return l(e)
            }),
            p =
              (r.map(function(e) {
                return l(e)
              }),
              n[c.indexOf(h)],
              n[c.indexOf(h) - 1])
          return (
            void 0 === p &&
              s.cssMode &&
              n.forEach(function(e) {
                !p && h >= e && (p = e)
              }),
            void 0 !== p && (d = r.indexOf(p)) < 0 && (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
          )
        },
        slideReset: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0
          return this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
            a = this.activeIndex,
            n = Math.floor(a / this.params.slidesPerGroup),
            r = this.rtlTranslate ? this.translate : -this.translate
          if (r >= this.snapGrid[n]) {
            var o = this.snapGrid[n]
            r - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup)
          } else {
            var l = this.snapGrid[n - 1]
            r - l <= (this.snapGrid[n] - l) * s && (a -= this.params.slidesPerGroup)
          }
          return (a = Math.max(a, 0)), (a = Math.min(a, this.snapGrid.length - 1)), this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
          var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a = 'auto' === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            n = t.clickedIndex
          if (i.loop) {
            if (t.animating) return
            ;(e = parseInt(Object(b.a)(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
              i.centeredSlides
                ? n < t.loopedSlides - a / 2 || n > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (n = s
                      .children(
                        '.'
                          .concat(i.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(i.slideDuplicateClass, ')'),
                      )
                      .eq(0)
                      .index()),
                    T.nextTick(function() {
                      t.slideTo(n)
                    }))
                  : t.slideTo(n)
                : n > t.slides.length - a
                ? (t.loopFix(),
                  (n = s
                    .children(
                      '.'
                        .concat(i.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(i.slideDuplicateClass, ')'),
                    )
                    .eq(0)
                    .index()),
                  T.nextTick(function() {
                    t.slideTo(n)
                  }))
                : t.slideTo(n)
          } else t.slideTo(n)
        },
      }
      var k = {
        loopCreate: function() {
          var e = this,
            t = e.params,
            i = e.$wrapperEl
          i.children('.'.concat(t.slideClass, '.').concat(t.slideDuplicateClass)).remove()
          var s = i.children('.'.concat(t.slideClass))
          if (t.loopFillGroupWithBlank) {
            var a = t.slidesPerGroup - (s.length % t.slidesPerGroup)
            if (a !== t.slidesPerGroup) {
              for (var n = 0; n < a; n += 1) {
                var r = Object(b.a)(x.a.createElement('div')).addClass(
                  ''.concat(t.slideClass, ' ').concat(t.slideBlankClass),
                )
                i.append(r)
              }
              s = i.children('.'.concat(t.slideClass))
            }
          }
          'auto' !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10))),
            (e.loopedSlides += t.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length)
          var o = [],
            l = []
          s.each(function(t, i) {
            var a = Object(b.a)(i)
            t < e.loopedSlides && l.push(i),
              t < s.length && t >= s.length - e.loopedSlides && o.push(i),
              a.attr('data-swiper-slide-index', t)
          })
          for (var d = 0; d < l.length; d += 1)
            i.append(Object(b.a)(l[d].cloneNode(!0)).addClass(t.slideDuplicateClass))
          for (var h = o.length - 1; h >= 0; h -= 1)
            i.prepend(Object(b.a)(o[h].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
          this.emit('beforeLoopFix')
          var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            n = this.allowSlideNext,
            r = this.snapGrid,
            o = this.rtlTranslate
          ;(this.allowSlidePrev = !0), (this.allowSlideNext = !0)
          var l = -r[t] - this.getTranslate()
          if (t < s)
            (e = i.length - 3 * s + t),
              (e += s),
              this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
          else if (t >= i.length - s) {
            ;(e = -i.length + t + s),
              (e += s),
              this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
          }
          ;(this.allowSlidePrev = a), (this.allowSlideNext = n), this.emit('loopFix')
        },
        loopDestroy: function() {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides
          e
            .children(
              '.'
                .concat(t.slideClass, '.')
                .concat(t.slideDuplicateClass, ',.')
                .concat(t.slideClass, '.')
                .concat(t.slideBlankClass),
            )
            .remove(),
            i.removeAttr('data-swiper-slide-index')
        },
      }
      var P = {
        setGrabCursor: function(e) {
          if (
            !(
              E.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
          ) {
            var t = this.el
            ;(t.style.cursor = 'move'),
              (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (t.style.cursor = e ? 'grabbing' : 'grab')
          }
        },
        unsetGrabCursor: function() {
          E.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = '')
        },
      }
      var $,
        O,
        I,
        L,
        D,
        B,
        G,
        Y,
        H,
        j,
        N,
        X,
        V,
        F,
        R,
        W = {
          appendSlide: function(e) {
            var t = this.$wrapperEl,
              i = this.params
            if ((i.loop && this.loopDestroy(), 'object' === w()(e) && 'length' in e))
              for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s])
            else t.append(e)
            i.loop && this.loopCreate(), (i.observer && E.observer) || this.update()
          },
          prependSlide: function(e) {
            var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex
            t.loop && this.loopDestroy()
            var a = s + 1
            if ('object' === w()(e) && 'length' in e) {
              for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n])
              a = s + e.length
            } else i.prepend(e)
            t.loop && this.loopCreate(), (t.observer && E.observer) || this.update(), this.slideTo(a, 0, !1)
          },
          addSlide: function(e, t) {
            var i = this.$wrapperEl,
              s = this.params,
              a = this.activeIndex
            s.loop &&
              ((a -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children('.'.concat(s.slideClass))))
            var n = this.slides.length
            if (e <= 0) this.prependSlide(t)
            else if (e >= n) this.appendSlide(t)
            else {
              for (var r = a > e ? a + 1 : a, o = [], l = n - 1; l >= e; l -= 1) {
                var d = this.slides.eq(l)
                d.remove(), o.unshift(d)
              }
              if ('object' === w()(t) && 'length' in t) {
                for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h])
                r = a > e ? a + t.length : a
              } else i.append(t)
              for (var c = 0; c < o.length; c += 1) i.append(o[c])
              s.loop && this.loopCreate(),
                (s.observer && E.observer) || this.update(),
                s.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            }
          },
          removeSlide: function(e) {
            var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex
            t.loop &&
              ((s -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children('.'.concat(t.slideClass))))
            var a,
              n = s
            if ('object' === w()(e) && 'length' in e) {
              for (var r = 0; r < e.length; r += 1)
                (a = e[r]), this.slides[a] && this.slides.eq(a).remove(), a < n && (n -= 1)
              n = Math.max(n, 0)
            } else (a = e), this.slides[a] && this.slides.eq(a).remove(), a < n && (n -= 1), (n = Math.max(n, 0))
            t.loop && this.loopCreate(),
              (t.observer && E.observer) || this.update(),
              t.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
          },
          removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t)
            this.removeSlide(e)
          },
        },
        q =
          (($ = x.b.navigator.platform),
          (O = x.b.navigator.userAgent),
          (I = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!x.b.cordova && !x.b.phonegap),
            phonegap: !(!x.b.cordova && !x.b.phonegap),
            electron: !1,
          }),
          (L = x.b.screen.width),
          (D = x.b.screen.height),
          (B = O.match(/(Android);?[\s\/]+([\d.]+)?/)),
          (G = O.match(/(iPad).*OS\s([\d_]+)/)),
          (Y = O.match(/(iPod)(.*OS\s([\d_]+))?/)),
          (H = !G && O.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
          (j = O.indexOf('MSIE ') >= 0 || O.indexOf('Trident/') >= 0),
          (N = O.indexOf('Edge/') >= 0),
          (X = O.indexOf('Gecko/') >= 0 && O.indexOf('Firefox/') >= 0),
          (V = 'Win32' === $),
          (F = O.toLowerCase().indexOf('electron') >= 0),
          (R = 'MacIntel' === $),
          !G &&
            R &&
            E.touch &&
            ((1024 === L && 1366 === D) ||
              (834 === L && 1194 === D) ||
              (834 === L && 1112 === D) ||
              (768 === L && 1024 === D)) &&
            ((G = O.match(/(Version)\/([\d.]+)/)), (R = !1)),
          (I.ie = j),
          (I.edge = N),
          (I.firefox = X),
          B &&
            !V &&
            ((I.os = 'android'),
            (I.osVersion = B[2]),
            (I.android = !0),
            (I.androidChrome = O.toLowerCase().indexOf('chrome') >= 0)),
          (G || H || Y) && ((I.os = 'ios'), (I.ios = !0)),
          H && !Y && ((I.osVersion = H[2].replace(/_/g, '.')), (I.iphone = !0)),
          G && ((I.osVersion = G[2].replace(/_/g, '.')), (I.ipad = !0)),
          Y && ((I.osVersion = Y[3] ? Y[3].replace(/_/g, '.') : null), (I.ipod = !0)),
          I.ios &&
            I.osVersion &&
            O.indexOf('Version/') >= 0 &&
            '10' === I.osVersion.split('.')[0] &&
            (I.osVersion = O.toLowerCase()
              .split('version/')[1]
              .split(' ')[0]),
          (I.webView =
            !(!(H || G || Y) || (!O.match(/.*AppleWebKit(?!.*Safari)/i) && !x.b.navigator.standalone)) ||
            (x.b.matchMedia && x.b.matchMedia('(display-mode: standalone)').matches)),
          (I.webview = I.webView),
          (I.standalone = I.webView),
          (I.desktop = !(I.ios || I.android) || F),
          I.desktop &&
            ((I.electron = F),
            (I.macos = R),
            (I.windows = V),
            I.macos && (I.os = 'macos'),
            I.windows && (I.os = 'windows')),
          (I.pixelRatio = x.b.devicePixelRatio || 1),
          I)
      function U(e) {
        var t = this.touchEventsData,
          i = this.params,
          s = this.touches
        if (!this.animating || !i.preventInteractionOnTransition) {
          var a = e
          a.originalEvent && (a = a.originalEvent)
          var n = Object(b.a)(a.target)
          if (
            ('wrapper' !== i.touchEventsTarget || n.closest(this.wrapperEl).length) &&
            ((t.isTouchEvent = 'touchstart' === a.type),
            (t.isTouchEvent || !('which' in a) || 3 !== a.which) &&
              !((!t.isTouchEvent && 'button' in a && a.button > 0) || (t.isTouched && t.isMoved)))
          )
            if (i.noSwiping && n.closest(i.noSwipingSelector ? i.noSwipingSelector : '.'.concat(i.noSwipingClass))[0])
              this.allowClick = !0
            else if (!i.swipeHandler || n.closest(i.swipeHandler)[0]) {
              ;(s.currentX = 'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX),
                (s.currentY = 'touchstart' === a.type ? a.targetTouches[0].pageY : a.pageY)
              var r = s.currentX,
                o = s.currentY,
                l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold
              if (!l || !(r <= d || r >= x.b.screen.width - d)) {
                if (
                  (T.extend(t, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (s.startX = r),
                  (s.startY = o),
                  (t.touchStartTime = T.now()),
                  (this.allowClick = !0),
                  this.updateSize(),
                  (this.swipeDirection = void 0),
                  i.threshold > 0 && (t.allowThresholdMove = !1),
                  'touchstart' !== a.type)
                ) {
                  var h = !0
                  n.is(t.formElements) && (h = !1),
                    x.a.activeElement &&
                      Object(b.a)(x.a.activeElement).is(t.formElements) &&
                      x.a.activeElement !== n[0] &&
                      x.a.activeElement.blur()
                  var c = h && this.allowTouchMove && i.touchStartPreventDefault
                  ;(i.touchStartForcePreventDefault || c) && a.preventDefault()
                }
                this.emit('touchStart', a)
              }
            }
        }
      }
      function K(e) {
        var t = this.touchEventsData,
          i = this.params,
          s = this.touches,
          a = this.rtlTranslate,
          n = e
        if ((n.originalEvent && (n = n.originalEvent), t.isTouched)) {
          if (!t.isTouchEvent || 'mousemove' !== n.type) {
            var r = 'touchmove' === n.type && n.targetTouches && (n.targetTouches[0] || n.changedTouches[0]),
              o = 'touchmove' === n.type ? r.pageX : n.pageX,
              l = 'touchmove' === n.type ? r.pageY : n.pageY
            if (n.preventedByNestedSwiper) return (s.startX = o), void (s.startY = l)
            if (!this.allowTouchMove)
              return (
                (this.allowClick = !1),
                void (
                  t.isTouched &&
                  (T.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), (t.touchStartTime = T.now()))
                )
              )
            if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
              if (this.isVertical()) {
                if (
                  (l < s.startY && this.translate <= this.maxTranslate()) ||
                  (l > s.startY && this.translate >= this.minTranslate())
                )
                  return (t.isTouched = !1), void (t.isMoved = !1)
              } else if (
                (o < s.startX && this.translate <= this.maxTranslate()) ||
                (o > s.startX && this.translate >= this.minTranslate())
              )
                return
            if (
              t.isTouchEvent &&
              x.a.activeElement &&
              n.target === x.a.activeElement &&
              Object(b.a)(n.target).is(t.formElements)
            )
              return (t.isMoved = !0), void (this.allowClick = !1)
            if (
              (t.allowTouchCallbacks && this.emit('touchMove', n), !(n.targetTouches && n.targetTouches.length > 1))
            ) {
              ;(s.currentX = o), (s.currentY = l)
              var d = s.currentX - s.startX,
                h = s.currentY - s.startY
              if (!(this.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(h, 2)) < this.params.threshold)) {
                var c
                if (void 0 === t.isScrolling)
                  (this.isHorizontal() && s.currentY === s.startY) || (this.isVertical() && s.currentX === s.startX)
                    ? (t.isScrolling = !1)
                    : d * d + h * h >= 25 &&
                      ((c = (180 * Math.atan2(Math.abs(h), Math.abs(d))) / Math.PI),
                      (t.isScrolling = this.isHorizontal() ? c > i.touchAngle : 90 - c > i.touchAngle))
                if (
                  (t.isScrolling && this.emit('touchMoveOpposite', n),
                  void 0 === t.startMoving &&
                    ((s.currentX === s.startX && s.currentY === s.startY) || (t.startMoving = !0)),
                  t.isScrolling)
                )
                  t.isTouched = !1
                else if (t.startMoving) {
                  ;(this.allowClick = !1),
                    i.cssMode || n.preventDefault(),
                    i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                    t.isMoved ||
                      (i.loop && this.loopFix(),
                      (t.startTranslate = this.getTranslate()),
                      this.setTransition(0),
                      this.animating && this.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                      (t.allowMomentumBounce = !1),
                      !i.grabCursor ||
                        (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) ||
                        this.setGrabCursor(!0),
                      this.emit('sliderFirstMove', n)),
                    this.emit('sliderMove', n),
                    (t.isMoved = !0)
                  var p = this.isHorizontal() ? d : h
                  ;(s.diff = p),
                    (p *= i.touchRatio),
                    a && (p = -p),
                    (this.swipeDirection = p > 0 ? 'prev' : 'next'),
                    (t.currentTranslate = p + t.startTranslate)
                  var u = !0,
                    v = i.resistanceRatio
                  if (
                    (i.touchReleaseOnEdges && (v = 0),
                    p > 0 && t.currentTranslate > this.minTranslate()
                      ? ((u = !1),
                        i.resistance &&
                          (t.currentTranslate =
                            this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + p, v)))
                      : p < 0 &&
                        t.currentTranslate < this.maxTranslate() &&
                        ((u = !1),
                        i.resistance &&
                          (t.currentTranslate =
                            this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - p, v))),
                    u && (n.preventedByNestedSwiper = !0),
                    !this.allowSlideNext &&
                      'next' === this.swipeDirection &&
                      t.currentTranslate < t.startTranslate &&
                      (t.currentTranslate = t.startTranslate),
                    !this.allowSlidePrev &&
                      'prev' === this.swipeDirection &&
                      t.currentTranslate > t.startTranslate &&
                      (t.currentTranslate = t.startTranslate),
                    i.threshold > 0)
                  ) {
                    if (!(Math.abs(p) > i.threshold || t.allowThresholdMove))
                      return void (t.currentTranslate = t.startTranslate)
                    if (!t.allowThresholdMove)
                      return (
                        (t.allowThresholdMove = !0),
                        (s.startX = s.currentX),
                        (s.startY = s.currentY),
                        (t.currentTranslate = t.startTranslate),
                        void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                      )
                  }
                  i.followFinger &&
                    !i.cssMode &&
                    ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) &&
                      (this.updateActiveIndex(), this.updateSlidesClasses()),
                    i.freeMode &&
                      (0 === t.velocities.length &&
                        t.velocities.push({
                          position: s[this.isHorizontal() ? 'startX' : 'startY'],
                          time: t.touchStartTime,
                        }),
                      t.velocities.push({ position: s[this.isHorizontal() ? 'currentX' : 'currentY'], time: T.now() })),
                    this.updateProgress(t.currentTranslate),
                    this.setTranslate(t.currentTranslate))
                }
              }
            }
          }
        } else t.startMoving && t.isScrolling && this.emit('touchMoveOpposite', n)
      }
      function Q(e) {
        var t = this,
          i = t.touchEventsData,
          s = t.params,
          a = t.touches,
          n = t.rtlTranslate,
          r = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid,
          d = e
        if (
          (d.originalEvent && (d = d.originalEvent),
          i.allowTouchCallbacks && t.emit('touchEnd', d),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1)
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1)
        var h,
          c = T.now(),
          p = c - i.touchStartTime
        if (
          (t.allowClick &&
            (t.updateClickedSlide(d),
            t.emit('tap click', d),
            p < 300 && c - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', d)),
          (i.lastClickTime = T.now()),
          T.nextTick(function() {
            t.destroyed || (t.allowClick = !0)
          }),
          !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
        )
          return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (h = s.followFinger ? (n ? t.translate : -t.translate) : -i.currentTranslate),
          !s.cssMode)
        )
          if (s.freeMode) {
            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex)
            if (h > -t.maxTranslate())
              return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1))
            if (s.freeModeMomentum) {
              if (i.velocities.length > 1) {
                var u = i.velocities.pop(),
                  v = i.velocities.pop(),
                  m = u.position - v.position,
                  f = u.time - v.time
                ;(t.velocity = m / f),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                  (f > 150 || T.now() - u.time > 300) && (t.velocity = 0)
              } else t.velocity = 0
              ;(t.velocity *= s.freeModeMomentumVelocityRatio), (i.velocities.length = 0)
              var g = 1e3 * s.freeModeMomentumRatio,
                w = t.velocity * g,
                b = t.translate + w
              n && (b = -b)
              var x,
                y,
                E = !1,
                C = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio
              if (b < t.maxTranslate())
                s.freeModeMomentumBounce
                  ? (b + t.maxTranslate() < -C && (b = t.maxTranslate() - C),
                    (x = t.maxTranslate()),
                    (E = !0),
                    (i.allowMomentumBounce = !0))
                  : (b = t.maxTranslate()),
                  s.loop && s.centeredSlides && (y = !0)
              else if (b > t.minTranslate())
                s.freeModeMomentumBounce
                  ? (b - t.minTranslate() > C && (b = t.minTranslate() + C),
                    (x = t.minTranslate()),
                    (E = !0),
                    (i.allowMomentumBounce = !0))
                  : (b = t.minTranslate()),
                  s.loop && s.centeredSlides && (y = !0)
              else if (s.freeModeSticky) {
                for (var S, A = 0; A < l.length; A += 1)
                  if (l[A] > -b) {
                    S = A
                    break
                  }
                b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || 'next' === t.swipeDirection ? l[S] : l[S - 1])
              }
              if (
                (y &&
                  t.once('transitionEnd', function() {
                    t.loopFix()
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((g = n ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity)),
                  s.freeModeSticky)
                ) {
                  var M = Math.abs((n ? -b : b) - t.translate),
                    z = t.slidesSizesGrid[t.activeIndex]
                  g = M < z ? s.speed : M < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                }
              } else if (s.freeModeSticky) return void t.slideToClosest()
              s.freeModeMomentumBounce && E
                ? (t.updateProgress(x),
                  t.setTransition(g),
                  t.setTranslate(b),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  r.transitionEnd(function() {
                    t &&
                      !t.destroyed &&
                      i.allowMomentumBounce &&
                      (t.emit('momentumBounce'),
                      t.setTransition(s.speed),
                      t.setTranslate(x),
                      r.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd()
                      }))
                  }))
                : t.velocity
                ? (t.updateProgress(b),
                  t.setTransition(g),
                  t.setTranslate(b),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    r.transitionEnd(function() {
                      t && !t.destroyed && t.transitionEnd()
                    })))
                : t.updateProgress(b),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            } else if (s.freeModeSticky) return void t.slideToClosest()
            ;(!s.freeModeMomentum || p >= s.longSwipesMs) &&
              (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          } else {
            for (var k = 0, P = t.slidesSizesGrid[0], $ = 0; $ < o.length; $ += s.slidesPerGroup)
              void 0 !== o[$ + s.slidesPerGroup]
                ? h >= o[$] && h < o[$ + s.slidesPerGroup] && ((k = $), (P = o[$ + s.slidesPerGroup] - o[$]))
                : h >= o[$] && ((k = $), (P = o[o.length - 1] - o[o.length - 2]))
            var O = (h - o[k]) / P
            if (p > s.longSwipesMs) {
              if (!s.longSwipes) return void t.slideTo(t.activeIndex)
              'next' === t.swipeDirection && (O >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)),
                'prev' === t.swipeDirection &&
                  (O > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k))
            } else {
              if (!s.shortSwipes) return void t.slideTo(t.activeIndex)
              t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
                ? d.target === t.navigation.nextEl
                  ? t.slideTo(k + s.slidesPerGroup)
                  : t.slideTo(k)
                : ('next' === t.swipeDirection && t.slideTo(k + s.slidesPerGroup),
                  'prev' === t.swipeDirection && t.slideTo(k))
            }
          }
      }
      function Z() {
        var e = this.params,
          t = this.el
        if (!t || 0 !== t.offsetWidth) {
          e.breakpoints && this.setBreakpoint()
          var i = this.allowSlideNext,
            s = this.allowSlidePrev,
            a = this.snapGrid
          ;(this.allowSlideNext = !0),
            (this.allowSlidePrev = !0),
            this.updateSize(),
            this.updateSlides(),
            this.updateSlidesClasses(),
            ('auto' === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides
              ? this.slideTo(this.slides.length - 1, 0, !1, !0)
              : this.slideTo(this.activeIndex, 0, !1, !0),
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            (this.allowSlidePrev = s),
            (this.allowSlideNext = i),
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
      }
      function J(e) {
        this.allowClick ||
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      }
      function _() {
        var e = this.wrapperEl
        ;(this.previousTranslate = this.translate),
          (this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop),
          -0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses()
        var t = this.maxTranslate() - this.minTranslate()
        ;(0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress &&
          this.updateProgress(this.translate),
          this.emit('setTranslate', this.translate, !1)
      }
      var ee = !1
      function te() {}
      var ie = {
          init: !0,
          direction: 'horizontal',
          touchEventsTarget: 'container',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'column',
          slidesPerGroup: 1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: 'swiper-container-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          runCallbacksOnInit: !0,
        },
        se = {
          update: S,
          translate: A,
          transition: M,
          slide: z,
          loop: k,
          grabCursor: P,
          manipulation: W,
          events: {
            attachEvents: function() {
              var e = this.params,
                t = this.touchEvents,
                i = this.el,
                s = this.wrapperEl
              ;(this.onTouchStart = U.bind(this)),
                (this.onTouchMove = K.bind(this)),
                (this.onTouchEnd = Q.bind(this)),
                e.cssMode && (this.onScroll = _.bind(this)),
                (this.onClick = J.bind(this))
              var a = !!e.nested
              if (!E.touch && E.pointerEvents)
                i.addEventListener(t.start, this.onTouchStart, !1),
                  x.a.addEventListener(t.move, this.onTouchMove, a),
                  x.a.addEventListener(t.end, this.onTouchEnd, !1)
              else {
                if (E.touch) {
                  var n = !('touchstart' !== t.start || !E.passiveListener || !e.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  }
                  i.addEventListener(t.start, this.onTouchStart, n),
                    i.addEventListener(t.move, this.onTouchMove, E.passiveListener ? { passive: !1, capture: a } : a),
                    i.addEventListener(t.end, this.onTouchEnd, n),
                    t.cancel && i.addEventListener(t.cancel, this.onTouchEnd, n),
                    ee || (x.a.addEventListener('touchstart', te), (ee = !0))
                }
                ;((e.simulateTouch && !q.ios && !q.android) || (e.simulateTouch && !E.touch && q.ios)) &&
                  (i.addEventListener('mousedown', this.onTouchStart, !1),
                  x.a.addEventListener('mousemove', this.onTouchMove, a),
                  x.a.addEventListener('mouseup', this.onTouchEnd, !1))
              }
              ;(e.preventClicks || e.preventClicksPropagation) && i.addEventListener('click', this.onClick, !0),
                e.cssMode && s.addEventListener('scroll', this.onScroll),
                e.updateOnWindowResize
                  ? this.on(
                      q.ios || q.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
                      Z,
                      !0,
                    )
                  : this.on('observerUpdate', Z, !0)
            },
            detachEvents: function() {
              var e = this.params,
                t = this.touchEvents,
                i = this.el,
                s = this.wrapperEl,
                a = !!e.nested
              if (!E.touch && E.pointerEvents)
                i.removeEventListener(t.start, this.onTouchStart, !1),
                  x.a.removeEventListener(t.move, this.onTouchMove, a),
                  x.a.removeEventListener(t.end, this.onTouchEnd, !1)
              else {
                if (E.touch) {
                  var n = !('onTouchStart' !== t.start || !E.passiveListener || !e.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  }
                  i.removeEventListener(t.start, this.onTouchStart, n),
                    i.removeEventListener(t.move, this.onTouchMove, a),
                    i.removeEventListener(t.end, this.onTouchEnd, n),
                    t.cancel && i.removeEventListener(t.cancel, this.onTouchEnd, n)
                }
                ;((e.simulateTouch && !q.ios && !q.android) || (e.simulateTouch && !E.touch && q.ios)) &&
                  (i.removeEventListener('mousedown', this.onTouchStart, !1),
                  x.a.removeEventListener('mousemove', this.onTouchMove, a),
                  x.a.removeEventListener('mouseup', this.onTouchEnd, !1))
              }
              ;(e.preventClicks || e.preventClicksPropagation) && i.removeEventListener('click', this.onClick, !0),
                e.cssMode && s.removeEventListener('scroll', this.onScroll),
                this.off(q.ios || q.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Z)
            },
          },
          breakpoints: {
            setBreakpoint: function() {
              var e = this.activeIndex,
                t = this.initialized,
                i = this.loopedSlides,
                s = void 0 === i ? 0 : i,
                a = this.params,
                n = this.$el,
                r = a.breakpoints
              if (r && (!r || 0 !== Object.keys(r).length)) {
                var o = this.getBreakpoint(r)
                if (o && this.currentBreakpoint !== o) {
                  var l = o in r ? r[o] : void 0
                  l &&
                    ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerColumn'].forEach(function(e) {
                      var t = l[e]
                      void 0 !== t &&
                        (l[e] =
                          'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                            ? 'slidesPerView' === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : 'auto')
                    })
                  var d = l || this.originalParams,
                    h = a.slidesPerColumn > 1,
                    c = d.slidesPerColumn > 1
                  h && !c
                    ? n.removeClass(
                        ''
                          .concat(a.containerModifierClass, 'multirow ')
                          .concat(a.containerModifierClass, 'multirow-column'),
                      )
                    : !h &&
                      c &&
                      (n.addClass(''.concat(a.containerModifierClass, 'multirow')),
                      'column' === d.slidesPerColumnFill &&
                        n.addClass(''.concat(a.containerModifierClass, 'multirow-column')))
                  var p = d.direction && d.direction !== a.direction,
                    u = a.loop && (d.slidesPerView !== a.slidesPerView || p)
                  p && t && this.changeDirection(),
                    T.extend(this.params, d),
                    T.extend(this, {
                      allowTouchMove: this.params.allowTouchMove,
                      allowSlideNext: this.params.allowSlideNext,
                      allowSlidePrev: this.params.allowSlidePrev,
                    }),
                    (this.currentBreakpoint = o),
                    u &&
                      t &&
                      (this.loopDestroy(),
                      this.loopCreate(),
                      this.updateSlides(),
                      this.slideTo(e - s + this.loopedSlides, 0, !1)),
                    this.emit('breakpoint', d)
                }
              }
            },
            getBreakpoint: function(e) {
              if (e) {
                var t = !1,
                  i = []
                Object.keys(e).forEach(function(e) {
                  i.push(e)
                }),
                  i.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                  })
                for (var s = 0; s < i.length; s += 1) {
                  var a = i[s]
                  a <= x.b.innerWidth && (t = a)
                }
                return t || 'max'
              }
            },
          },
          checkOverflow: {
            checkOverflow: function() {
              var e = this.params,
                t = this.isLocked,
                i =
                  this.slides.length > 0 &&
                  e.slidesOffsetBefore +
                    e.spaceBetween * (this.slides.length - 1) +
                    this.slides[0].offsetWidth * this.slides.length
              e.slidesOffsetBefore && e.slidesOffsetAfter && i
                ? (this.isLocked = i <= this.size)
                : (this.isLocked = 1 === this.snapGrid.length),
                (this.allowSlideNext = !this.isLocked),
                (this.allowSlidePrev = !this.isLocked),
                t !== this.isLocked && this.emit(this.isLocked ? 'lock' : 'unlock'),
                t && t !== this.isLocked && ((this.isEnd = !1), this.navigation.update())
            },
          },
          classes: {
            addClasses: function() {
              var e = this.classNames,
                t = this.params,
                i = this.rtl,
                s = this.$el,
                a = []
              a.push('initialized'),
                a.push(t.direction),
                t.freeMode && a.push('free-mode'),
                t.autoHeight && a.push('autoheight'),
                i && a.push('rtl'),
                t.slidesPerColumn > 1 &&
                  (a.push('multirow'), 'column' === t.slidesPerColumnFill && a.push('multirow-column')),
                q.android && a.push('android'),
                q.ios && a.push('ios'),
                t.cssMode && a.push('css-mode'),
                a.forEach(function(i) {
                  e.push(t.containerModifierClass + i)
                }),
                s.addClass(e.join(' '))
            },
            removeClasses: function() {
              var e = this.$el,
                t = this.classNames
              e.removeClass(t.join(' '))
            },
          },
          images: {
            loadImage: function(e, t, i, s, a, n) {
              var r
              function o() {
                n && n()
              }
              e.complete && a
                ? o()
                : t
                ? (((r = new x.b.Image()).onload = o),
                  (r.onerror = o),
                  s && (r.sizes = s),
                  i && (r.srcset = i),
                  t && (r.src = t))
                : o()
            },
            preloadImages: function() {
              var e = this
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')))
              }
              e.imagesToLoad = e.$el.find('img')
              for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                var s = e.imagesToLoad[i]
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute('src'),
                  s.srcset || s.getAttribute('srcset'),
                  s.sizes || s.getAttribute('sizes'),
                  !0,
                  t,
                )
              }
            },
          },
        },
        ae = {},
        ne = (function(e) {
          function t() {
            var e, i, s
            v()(this, t)
            for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++) o[d] = arguments[d]
            1 === o.length && o[0].constructor && o[0].constructor === Object ? (s = o[0]) : ((i = o[0]), (s = o[1])),
              s || (s = {}),
              (s = T.extend({}, s)),
              i && !s.el && (s.el = i),
              (e = a()(this, r()(t).call(this, s))),
              Object.keys(se).forEach(function(e) {
                Object.keys(se[e]).forEach(function(i) {
                  t.prototype[i] || (t.prototype[i] = se[e][i])
                })
              })
            var h = l()(e)
            void 0 === h.modules && (h.modules = {}),
              Object.keys(h.modules).forEach(function(e) {
                var t = h.modules[e]
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    a = t.params[i]
                  if ('object' !== w()(a) || null === a) return
                  if (!(i in s && 'enabled' in a)) return
                  !0 === s[i] && (s[i] = { enabled: !0 }),
                    'object' !== w()(s[i]) || 'enabled' in s[i] || (s[i].enabled = !0),
                    s[i] || (s[i] = { enabled: !1 })
                }
              })
            var c = T.extend({}, ie)
            h.useModulesParams(c),
              (h.params = T.extend({}, c, ae, s)),
              (h.originalParams = T.extend({}, h.params)),
              (h.passedParams = T.extend({}, s)),
              (h.$ = b.a)
            var p,
              u,
              m,
              f = Object(b.a)(h.params.el)
            if (!(i = f[0])) return a()(e, void 0)
            if (f.length > 1) {
              var g = []
              return (
                f.each(function(e, i) {
                  var a = T.extend({}, s, { el: i })
                  g.push(new t(a))
                }),
                a()(e, g)
              )
            }
            return (
              (i.swiper = h),
              f.data('swiper', h),
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? ((p = Object(b.a)(i.shadowRoot.querySelector('.'.concat(h.params.wrapperClass)))).children = function(
                    e,
                  ) {
                    return f.children(e)
                  })
                : (p = f.children('.'.concat(h.params.wrapperClass))),
              T.extend(h, {
                $el: f,
                el: i,
                $wrapperEl: p,
                wrapperEl: p[0],
                classNames: [],
                slides: Object(b.a)(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function() {
                  return 'horizontal' === h.params.direction
                },
                isVertical: function() {
                  return 'vertical' === h.params.direction
                },
                rtl: 'rtl' === i.dir.toLowerCase() || 'rtl' === f.css('direction'),
                rtlTranslate:
                  'horizontal' === h.params.direction &&
                  ('rtl' === i.dir.toLowerCase() || 'rtl' === f.css('direction')),
                wrongRTL: '-webkit-box' === p.css('display'),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: h.params.allowSlideNext,
                allowSlidePrev: h.params.allowSlidePrev,
                touchEvents:
                  ((u = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
                  (m = ['mousedown', 'mousemove', 'mouseup']),
                  E.pointerEvents && (m = ['pointerdown', 'pointermove', 'pointerup']),
                  (h.touchEventsTouch = { start: u[0], move: u[1], end: u[2], cancel: u[3] }),
                  (h.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }),
                  E.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements: 'input, select, option, textarea, button, video',
                  lastClickTime: T.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: h.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              h.useModules(),
              h.params.init && h.init(),
              a()(e, h)
            )
          }
          return (
            h()(t, e),
            f()(
              t,
              [
                {
                  key: 'slidesPerViewDynamic',
                  value: function() {
                    var e = this.params,
                      t = this.slides,
                      i = this.slidesGrid,
                      s = this.size,
                      a = this.activeIndex,
                      n = 1
                    if (e.centeredSlides) {
                      for (var r, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                        t[l] && !r && ((n += 1), (o += t[l].swiperSlideSize) > s && (r = !0))
                      for (var d = a - 1; d >= 0; d -= 1)
                        t[d] && !r && ((n += 1), (o += t[d].swiperSlideSize) > s && (r = !0))
                    } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (n += 1)
                    return n
                  },
                },
                {
                  key: 'update',
                  value: function() {
                    var e = this
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        i = e.params
                      i.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode
                          ? (s(), e.params.autoHeight && e.updateAutoHeight())
                          : (('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit('update')
                    }
                    function s() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
                      e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                  },
                },
                {
                  key: 'changeDirection',
                  value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                      i = this,
                      s = i.params.direction
                    return (
                      e || (e = 'horizontal' === s ? 'vertical' : 'horizontal'),
                      e === s || ('horizontal' !== e && 'vertical' !== e)
                        ? i
                        : (i.$el
                            .removeClass(''.concat(i.params.containerModifierClass).concat(s))
                            .addClass(''.concat(i.params.containerModifierClass).concat(e)),
                          (i.params.direction = e),
                          i.slides.each(function(t, i) {
                            'vertical' === e ? (i.style.width = '') : (i.style.height = '')
                          }),
                          i.emit('changeDirection'),
                          t && i.update(),
                          i)
                    )
                  },
                },
                {
                  key: 'init',
                  value: function() {
                    this.initialized ||
                      (this.emit('beforeInit'),
                      this.params.breakpoints && this.setBreakpoint(),
                      this.addClasses(),
                      this.params.loop && this.loopCreate(),
                      this.updateSize(),
                      this.updateSlides(),
                      this.params.watchOverflow && this.checkOverflow(),
                      this.params.grabCursor && this.setGrabCursor(),
                      this.params.preloadImages && this.preloadImages(),
                      this.params.loop
                        ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit)
                        : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                      this.attachEvents(),
                      (this.initialized = !0),
                      this.emit('init'))
                  },
                },
                {
                  key: 'destroy',
                  value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                      t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                      i = this,
                      s = i.params,
                      a = i.$el,
                      n = i.$wrapperEl,
                      r = i.slides
                    return void 0 === i.params || i.destroyed
                      ? null
                      : (i.emit('beforeDestroy'),
                        (i.initialized = !1),
                        i.detachEvents(),
                        s.loop && i.loopDestroy(),
                        t &&
                          (i.removeClasses(),
                          a.removeAttr('style'),
                          n.removeAttr('style'),
                          r &&
                            r.length &&
                            r
                              .removeClass(
                                [s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(' '),
                              )
                              .removeAttr('style')
                              .removeAttr('data-swiper-slide-index')),
                        i.emit('destroy'),
                        Object.keys(i.eventsListeners).forEach(function(e) {
                          i.off(e)
                        }),
                        !1 !== e && ((i.$el[0].swiper = null), i.$el.data('swiper', null), T.deleteProps(i)),
                        (i.destroyed = !0),
                        null)
                  },
                },
              ],
              [
                {
                  key: 'extendDefaults',
                  value: function(e) {
                    T.extend(ae, e)
                  },
                },
                {
                  key: 'extendedDefaults',
                  get: function() {
                    return ae
                  },
                },
                {
                  key: 'defaults',
                  get: function() {
                    return ie
                  },
                },
                {
                  key: 'Class',
                  get: function() {
                    return C
                  },
                },
                {
                  key: '$',
                  get: function() {
                    return b.a
                  },
                },
              ],
            ),
            t
          )
        })(C),
        re = { name: 'device', proto: { device: q }, static: { device: q } },
        oe = { name: 'support', proto: { support: E }, static: { support: E } },
        le = {
          isEdge: !!x.b.navigator.userAgent.match(/Edge/g),
          isSafari: (function() {
            var e = x.b.navigator.userAgent.toLowerCase()
            return e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0
          })(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(x.b.navigator.userAgent),
        },
        de = { name: 'browser', proto: { browser: le }, static: { browser: le } },
        he = {
          name: 'resize',
          create: function() {
            var e = this
            T.extend(e, {
              resize: {
                resizeHandler: function() {
                  e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'))
                },
                orientationChangeHandler: function() {
                  e && !e.destroyed && e.initialized && e.emit('orientationchange')
                },
              },
            })
          },
          on: {
            init: function() {
              x.b.addEventListener('resize', this.resize.resizeHandler),
                x.b.addEventListener('orientationchange', this.resize.orientationChangeHandler)
            },
            destroy: function() {
              x.b.removeEventListener('resize', this.resize.resizeHandler),
                x.b.removeEventListener('orientationchange', this.resize.orientationChangeHandler)
            },
          },
        },
        ce = {
          func: x.b.MutationObserver || x.b.WebkitMutationObserver,
          attach: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = this,
              s = ce.func,
              a = new s(function(e) {
                if (1 !== e.length) {
                  var t = function() {
                    i.emit('observerUpdate', e[0])
                  }
                  x.b.requestAnimationFrame ? x.b.requestAnimationFrame(t) : x.b.setTimeout(t, 0)
                } else i.emit('observerUpdate', e[0])
              })
            a.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              i.observer.observers.push(a)
          },
          init: function() {
            if (E.observer && this.params.observer) {
              if (this.params.observeParents)
                for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t])
              this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }),
                this.observer.attach(this.$wrapperEl[0], { attributes: !1 })
            }
          },
          destroy: function() {
            this.observer.observers.forEach(function(e) {
              e.disconnect()
            }),
              (this.observer.observers = [])
          },
        },
        pe = {
          name: 'observer',
          params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
          create: function() {
            T.extend(this, {
              observer: {
                init: ce.init.bind(this),
                attach: ce.attach.bind(this),
                destroy: ce.destroy.bind(this),
                observers: [],
              },
            })
          },
          on: {
            init: function() {
              this.observer.init()
            },
            destroy: function() {
              this.observer.destroy()
            },
          },
        },
        ue = {
          update: function(e) {
            var t = this,
              i = t.params,
              s = i.slidesPerView,
              a = i.slidesPerGroup,
              n = i.centeredSlides,
              r = t.params.virtual,
              o = r.addSlidesBefore,
              l = r.addSlidesAfter,
              d = t.virtual,
              h = d.from,
              c = d.to,
              p = d.slides,
              u = d.slidesGrid,
              v = d.renderSlide,
              m = d.offset
            t.updateActiveIndex()
            var f,
              g,
              w,
              b = t.activeIndex || 0
            ;(f = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
              n
                ? ((g = Math.floor(s / 2) + a + o), (w = Math.floor(s / 2) + a + l))
                : ((g = s + (a - 1) + o), (w = a + l))
            var x = Math.max((b || 0) - w, 0),
              y = Math.min((b || 0) + g, p.length - 1),
              E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0)
            function C() {
              t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (
              (T.extend(t.virtual, { from: x, to: y, offset: E, slidesGrid: t.slidesGrid }), h === x && c === y && !e)
            )
              return t.slidesGrid !== u && E !== m && t.slides.css(f, ''.concat(E, 'px')), void t.updateProgress()
            if (t.params.virtual.renderExternal)
              return (
                t.params.virtual.renderExternal.call(t, {
                  offset: E,
                  from: x,
                  to: y,
                  slides: (function() {
                    for (var e = [], t = x; t <= y; t += 1) e.push(p[t])
                    return e
                  })(),
                }),
                void C()
              )
            var S = [],
              A = []
            if (e) t.$wrapperEl.find('.'.concat(t.params.slideClass)).remove()
            else
              for (var M = h; M <= c; M += 1)
                (M < x || M > y) &&
                  t.$wrapperEl
                    .find('.'.concat(t.params.slideClass, '[data-swiper-slide-index="').concat(M, '"]'))
                    .remove()
            for (var z = 0; z < p.length; z += 1)
              z >= x && z <= y && (void 0 === c || e ? A.push(z) : (z > c && A.push(z), z < h && S.push(z)))
            A.forEach(function(e) {
              t.$wrapperEl.append(v(p[e], e))
            }),
              S.sort(function(e, t) {
                return t - e
              }).forEach(function(e) {
                t.$wrapperEl.prepend(v(p[e], e))
              }),
              t.$wrapperEl.children('.swiper-slide').css(f, ''.concat(E, 'px')),
              C()
          },
          renderSlide: function(e, t) {
            var i = this.params.virtual
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t]
            var s = i.renderSlide
              ? Object(b.a)(i.renderSlide.call(this, e, t))
              : Object(b.a)(
                  '<div class="'
                    .concat(this.params.slideClass, '" data-swiper-slide-index="')
                    .concat(t, '">')
                    .concat(e, '</div>'),
                )
            return (
              s.attr('data-swiper-slide-index') || s.attr('data-swiper-slide-index', t),
              i.cache && (this.virtual.cache[t] = s),
              s
            )
          },
          appendSlide: function(e) {
            if ('object' === w()(e) && 'length' in e)
              for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t])
            else this.virtual.slides.push(e)
            this.virtual.update(!0)
          },
          prependSlide: function(e) {
            var t = this.activeIndex,
              i = t + 1,
              s = 1
            if (Array.isArray(e)) {
              for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a])
              ;(i = t + e.length), (s = e.length)
            } else this.virtual.slides.unshift(e)
            if (this.params.virtual.cache) {
              var n = this.virtual.cache,
                r = {}
              Object.keys(n).forEach(function(e) {
                var t = n[e],
                  i = t.attr('data-swiper-slide-index')
                i && t.attr('data-swiper-slide-index', parseInt(i, 10) + 1), (r[parseInt(e, 10) + s] = t)
              }),
                (this.virtual.cache = r)
            }
            this.virtual.update(!0), this.slideTo(i, 0)
          },
          removeSlide: function(e) {
            if (null != e) {
              var t = this.activeIndex
              if (Array.isArray(e))
                for (var i = e.length - 1; i >= 0; i -= 1)
                  this.virtual.slides.splice(e[i], 1),
                    this.params.virtual.cache && delete this.virtual.cache[e[i]],
                    e[i] < t && (t -= 1),
                    (t = Math.max(t, 0))
              else
                this.virtual.slides.splice(e, 1),
                  this.params.virtual.cache && delete this.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0))
              this.virtual.update(!0), this.slideTo(t, 0)
            }
          },
          removeAllSlides: function() {
            ;(this.virtual.slides = []),
              this.params.virtual.cache && (this.virtual.cache = {}),
              this.virtual.update(!0),
              this.slideTo(0, 0)
          },
        },
        ve = {
          name: 'virtual',
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          },
          create: function() {
            T.extend(this, {
              virtual: {
                update: ue.update.bind(this),
                appendSlide: ue.appendSlide.bind(this),
                prependSlide: ue.prependSlide.bind(this),
                removeSlide: ue.removeSlide.bind(this),
                removeAllSlides: ue.removeAllSlides.bind(this),
                renderSlide: ue.renderSlide.bind(this),
                slides: this.params.virtual.slides,
                cache: {},
              },
            })
          },
          on: {
            beforeInit: function() {
              if (this.params.virtual.enabled) {
                this.classNames.push(''.concat(this.params.containerModifierClass, 'virtual'))
                var e = { watchSlidesProgress: !0 }
                T.extend(this.params, e),
                  T.extend(this.originalParams, e),
                  this.params.initialSlide || this.virtual.update()
              }
            },
            setTranslate: function() {
              this.params.virtual.enabled && this.virtual.update()
            },
          },
        },
        me = {
          handle: function(e) {
            var t = this.rtlTranslate,
              i = e
            i.originalEvent && (i = i.originalEvent)
            var s = i.keyCode || i.charCode
            if (
              !this.allowSlideNext &&
              ((this.isHorizontal() && 39 === s) || (this.isVertical() && 40 === s) || 34 === s)
            )
              return !1
            if (
              !this.allowSlidePrev &&
              ((this.isHorizontal() && 37 === s) || (this.isVertical() && 38 === s) || 33 === s)
            )
              return !1
            if (
              !(
                i.shiftKey ||
                i.altKey ||
                i.ctrlKey ||
                i.metaKey ||
                (x.a.activeElement &&
                  x.a.activeElement.nodeName &&
                  ('input' === x.a.activeElement.nodeName.toLowerCase() ||
                    'textarea' === x.a.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (
                this.params.keyboard.onlyInViewport &&
                (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)
              ) {
                var a = !1
                if (
                  this.$el.parents('.'.concat(this.params.slideClass)).length > 0 &&
                  0 === this.$el.parents('.'.concat(this.params.slideActiveClass)).length
                )
                  return
                var n = x.b.innerWidth,
                  r = x.b.innerHeight,
                  o = this.$el.offset()
                t && (o.left -= this.$el[0].scrollLeft)
                for (
                  var l = [
                      [o.left, o.top],
                      [o.left + this.width, o.top],
                      [o.left, o.top + this.height],
                      [o.left + this.width, o.top + this.height],
                    ],
                    d = 0;
                  d < l.length;
                  d += 1
                ) {
                  var h = l[d]
                  h[0] >= 0 && h[0] <= n && h[1] >= 0 && h[1] <= r && (a = !0)
                }
                if (!a) return
              }
              this.isHorizontal()
                ? ((33 !== s && 34 !== s && 37 !== s && 39 !== s) ||
                    (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                  (((34 !== s && 39 !== s) || t) && ((33 !== s && 37 !== s) || !t)) || this.slideNext(),
                  (((33 !== s && 37 !== s) || t) && ((34 !== s && 39 !== s) || !t)) || this.slidePrev())
                : ((33 !== s && 34 !== s && 38 !== s && 40 !== s) ||
                    (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                  (34 !== s && 40 !== s) || this.slideNext(),
                  (33 !== s && 38 !== s) || this.slidePrev()),
                this.emit('keyPress', s)
            }
          },
          enable: function() {
            this.keyboard.enabled ||
              (Object(b.a)(x.a).on('keydown', this.keyboard.handle), (this.keyboard.enabled = !0))
          },
          disable: function() {
            this.keyboard.enabled &&
              (Object(b.a)(x.a).off('keydown', this.keyboard.handle), (this.keyboard.enabled = !1))
          },
        },
        fe = {
          name: 'keyboard',
          params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
          create: function() {
            T.extend(this, {
              keyboard: {
                enabled: !1,
                enable: me.enable.bind(this),
                disable: me.disable.bind(this),
                handle: me.handle.bind(this),
              },
            })
          },
          on: {
            init: function() {
              this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
              this.keyboard.enabled && this.keyboard.disable()
            },
          },
        }
      var ge = {
          lastScrollTime: T.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: function() {
            return x.b.navigator.userAgent.indexOf('firefox') > -1
              ? 'DOMMouseScroll'
              : (function() {
                  var e = 'onwheel' in x.a
                  if (!e) {
                    var t = x.a.createElement('div')
                    t.setAttribute('onwheel', 'return;'), (e = 'function' == typeof t.onwheel)
                  }
                  return (
                    !e &&
                      x.a.implementation &&
                      x.a.implementation.hasFeature &&
                      !0 !== x.a.implementation.hasFeature('', '') &&
                      (e = x.a.implementation.hasFeature('Events.wheel', '3.0')),
                    e
                  )
                })()
              ? 'wheel'
              : 'mousewheel'
          },
          normalize: function(e) {
            var t = 0,
              i = 0,
              s = 0,
              a = 0
            return (
              'detail' in e && (i = e.detail),
              'wheelDelta' in e && (i = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
              (s = 10 * t),
              (a = 10 * i),
              'deltaY' in e && (a = e.deltaY),
              'deltaX' in e && (s = e.deltaX),
              e.shiftKey && !s && ((s = a), (a = 0)),
              (s || a) && e.deltaMode && (1 === e.deltaMode ? ((s *= 40), (a *= 40)) : ((s *= 800), (a *= 800))),
              s && !t && (t = s < 1 ? -1 : 1),
              a && !i && (i = a < 1 ? -1 : 1),
              { spinX: t, spinY: i, pixelX: s, pixelY: a }
            )
          },
          handleMouseEnter: function() {
            this.mouseEntered = !0
          },
          handleMouseLeave: function() {
            this.mouseEntered = !1
          },
          handle: function(e) {
            var t = e,
              i = this,
              s = i.params.mousewheel
            if ((i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges)) return !0
            t.originalEvent && (t = t.originalEvent)
            var a = 0,
              n = i.rtlTranslate ? -1 : 1,
              r = ge.normalize(t)
            if (s.forceToAxis)
              if (i.isHorizontal()) {
                if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0
                a = r.pixelX * n
              } else {
                if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0
                a = r.pixelY
              }
            else a = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY
            if (0 === a) return !0
            if ((s.invert && (a = -a), i.params.freeMode)) {
              var o = { time: T.now(), delta: Math.abs(a), direction: Math.sign(a) },
                l = i.mousewheel.lastEventBeforeSnap,
                d = l && o.time < l.time + 500 && o.delta <= l.delta && o.direction === l.direction
              if (!d) {
                ;(i.mousewheel.lastEventBeforeSnap = void 0), i.params.loop && i.loopFix()
                var h = i.getTranslate() + a * s.sensitivity,
                  c = i.isBeginning,
                  p = i.isEnd
                if (
                  (h >= i.minTranslate() && (h = i.minTranslate()),
                  h <= i.maxTranslate() && (h = i.maxTranslate()),
                  i.setTransition(0),
                  i.setTranslate(h),
                  i.updateProgress(),
                  i.updateActiveIndex(),
                  i.updateSlidesClasses(),
                  ((!c && i.isBeginning) || (!p && i.isEnd)) && i.updateSlidesClasses(),
                  i.params.freeModeSticky)
                ) {
                  clearTimeout(i.mousewheel.timeout), (i.mousewheel.timeout = void 0)
                  var u = i.mousewheel.recentWheelEvents
                  u.length >= 15 && u.shift()
                  var v = u.length ? u[u.length - 1] : void 0,
                    m = u[0]
                  if ((u.push(o), v && (o.delta > v.delta || o.direction !== v.direction))) u.splice(0)
                  else if (u.length >= 15 && o.time - m.time < 500 && m.delta - o.delta >= 1 && o.delta <= 6) {
                    var f = a > 0 ? 0.8 : 0.2
                    ;(i.mousewheel.lastEventBeforeSnap = o),
                      u.splice(0),
                      (i.mousewheel.timeout = T.nextTick(function() {
                        i.slideToClosest(i.params.speed, !0, void 0, f)
                      }, 0))
                  }
                  i.mousewheel.timeout ||
                    (i.mousewheel.timeout = T.nextTick(function() {
                      ;(i.mousewheel.lastEventBeforeSnap = o),
                        u.splice(0),
                        i.slideToClosest(i.params.speed, !0, void 0, 0.5)
                    }, 500))
                }
                if (
                  (d || i.emit('scroll', t),
                  i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                  h === i.minTranslate() || h === i.maxTranslate())
                )
                  return !0
              }
            } else {
              var g = { time: T.now(), delta: Math.abs(a), direction: Math.sign(a), raw: e },
                w = i.mousewheel.recentWheelEvents
              w.length >= 2 && w.shift()
              var b = w.length ? w[w.length - 1] : void 0
              if (
                (w.push(g),
                b
                  ? (g.direction !== b.direction || g.delta > b.delta) && i.mousewheel.animateSlider(g)
                  : i.mousewheel.animateSlider(g),
                i.mousewheel.releaseScroll(g))
              )
                return !0
            }
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          },
          animateSlider: function(e) {
            return (
              (e.delta >= 6 && T.now() - this.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0
                ? (this.isEnd && !this.params.loop) || this.animating || (this.slideNext(), this.emit('scroll', e.raw))
                : (this.isBeginning && !this.params.loop) ||
                  this.animating ||
                  (this.slidePrev(), this.emit('scroll', e.raw)),
              (this.mousewheel.lastScrollTime = new x.b.Date().getTime()),
              !1)
            )
          },
          releaseScroll: function(e) {
            var t = this.params.mousewheel
            if (e.direction < 0) {
              if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0
            return !1
          },
          enable: function() {
            var e = ge.event()
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
            if (!e) return !1
            if (this.mousewheel.enabled) return !1
            var t = this.$el
            return (
              'container' !== this.params.mousewheel.eventsTarged &&
                (t = Object(b.a)(this.params.mousewheel.eventsTarged)),
              t.on('mouseenter', this.mousewheel.handleMouseEnter),
              t.on('mouseleave', this.mousewheel.handleMouseLeave),
              t.on(e, this.mousewheel.handle),
              (this.mousewheel.enabled = !0),
              !0
            )
          },
          disable: function() {
            var e = ge.event()
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
            if (!e) return !1
            if (!this.mousewheel.enabled) return !1
            var t = this.$el
            return (
              'container' !== this.params.mousewheel.eventsTarged &&
                (t = Object(b.a)(this.params.mousewheel.eventsTarged)),
              t.off(e, this.mousewheel.handle),
              (this.mousewheel.enabled = !1),
              !0
            )
          },
        },
        we = {
          update: function() {
            var e = this.params.navigation
            if (!this.params.loop) {
              var t = this.navigation,
                i = t.$nextEl,
                s = t.$prevEl
              s &&
                s.length > 0 &&
                (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](e.lockClass)),
                i &&
                  i.length > 0 &&
                  (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                  i[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](e.lockClass))
            }
          },
          onPrevClick: function(e) {
            e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev()
          },
          onNextClick: function(e) {
            e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext()
          },
          init: function() {
            var e,
              t,
              i = this.params.navigation
            ;(i.nextEl || i.prevEl) &&
              (i.nextEl &&
                ((e = Object(b.a)(i.nextEl)),
                this.params.uniqueNavElements &&
                  'string' == typeof i.nextEl &&
                  e.length > 1 &&
                  1 === this.$el.find(i.nextEl).length &&
                  (e = this.$el.find(i.nextEl))),
              i.prevEl &&
                ((t = Object(b.a)(i.prevEl)),
                this.params.uniqueNavElements &&
                  'string' == typeof i.prevEl &&
                  t.length > 1 &&
                  1 === this.$el.find(i.prevEl).length &&
                  (t = this.$el.find(i.prevEl))),
              e && e.length > 0 && e.on('click', this.navigation.onNextClick),
              t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
              T.extend(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }))
          },
          destroy: function() {
            var e = this.navigation,
              t = e.$nextEl,
              i = e.$prevEl
            t &&
              t.length &&
              (t.off('click', this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
              i &&
                i.length &&
                (i.off('click', this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
          },
        },
        be = {
          update: function() {
            var e = this.rtl,
              t = this.params.pagination
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
              var i,
                s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                a = this.pagination.$el,
                n = this.params.loop
                  ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup)
                  : this.snapGrid.length
              if (
                (this.params.loop
                  ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) >
                      s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                    i > n - 1 && (i -= n),
                    i < 0 && 'bullets' !== this.params.paginationType && (i = n + i))
                  : (i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                'bullets' === t.type && this.pagination.bullets && this.pagination.bullets.length > 0)
              ) {
                var r,
                  o,
                  l,
                  d = this.pagination.bullets
                if (
                  (t.dynamicBullets &&
                    ((this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                    a.css(
                      this.isHorizontal() ? 'width' : 'height',
                      ''.concat(this.pagination.bulletSize * (t.dynamicMainBullets + 4), 'px'),
                    ),
                    t.dynamicMainBullets > 1 &&
                      void 0 !== this.previousIndex &&
                      ((this.pagination.dynamicBulletIndex += i - this.previousIndex),
                      this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                        ? (this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1)
                        : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    (r = i - this.pagination.dynamicBulletIndex),
                    (l = ((o = r + (Math.min(d.length, t.dynamicMainBullets) - 1)) + r) / 2)),
                  d.removeClass(
                    ''
                      .concat(t.bulletActiveClass, ' ')
                      .concat(t.bulletActiveClass, '-next ')
                      .concat(t.bulletActiveClass, '-next-next ')
                      .concat(t.bulletActiveClass, '-prev ')
                      .concat(t.bulletActiveClass, '-prev-prev ')
                      .concat(t.bulletActiveClass, '-main'),
                  ),
                  a.length > 1)
                )
                  d.each(function(e, s) {
                    var a = Object(b.a)(s),
                      n = a.index()
                    n === i && a.addClass(t.bulletActiveClass),
                      t.dynamicBullets &&
                        (n >= r && n <= o && a.addClass(''.concat(t.bulletActiveClass, '-main')),
                        n === r &&
                          a
                            .prev()
                            .addClass(''.concat(t.bulletActiveClass, '-prev'))
                            .prev()
                            .addClass(''.concat(t.bulletActiveClass, '-prev-prev')),
                        n === o &&
                          a
                            .next()
                            .addClass(''.concat(t.bulletActiveClass, '-next'))
                            .next()
                            .addClass(''.concat(t.bulletActiveClass, '-next-next')))
                  })
                else {
                  var h = d.eq(i),
                    c = h.index()
                  if ((h.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                    for (var p = d.eq(r), u = d.eq(o), v = r; v <= o; v += 1)
                      d.eq(v).addClass(''.concat(t.bulletActiveClass, '-main'))
                    if (this.params.loop)
                      if (c >= d.length - t.dynamicMainBullets) {
                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                          d.eq(d.length - m).addClass(''.concat(t.bulletActiveClass, '-main'))
                        d.eq(d.length - t.dynamicMainBullets - 1).addClass(''.concat(t.bulletActiveClass, '-prev'))
                      } else
                        p
                          .prev()
                          .addClass(''.concat(t.bulletActiveClass, '-prev'))
                          .prev()
                          .addClass(''.concat(t.bulletActiveClass, '-prev-prev')),
                          u
                            .next()
                            .addClass(''.concat(t.bulletActiveClass, '-next'))
                            .next()
                            .addClass(''.concat(t.bulletActiveClass, '-next-next'))
                    else
                      p
                        .prev()
                        .addClass(''.concat(t.bulletActiveClass, '-prev'))
                        .prev()
                        .addClass(''.concat(t.bulletActiveClass, '-prev-prev')),
                        u
                          .next()
                          .addClass(''.concat(t.bulletActiveClass, '-next'))
                          .next()
                          .addClass(''.concat(t.bulletActiveClass, '-next-next'))
                  }
                }
                if (t.dynamicBullets) {
                  var f = Math.min(d.length, t.dynamicMainBullets + 4),
                    g =
                      (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 -
                      l * this.pagination.bulletSize,
                    w = e ? 'right' : 'left'
                  d.css(this.isHorizontal() ? w : 'top', ''.concat(g, 'px'))
                }
              }
              if (
                ('fraction' === t.type &&
                  (a.find('.'.concat(t.currentClass)).text(t.formatFractionCurrent(i + 1)),
                  a.find('.'.concat(t.totalClass)).text(t.formatFractionTotal(n))),
                'progressbar' === t.type)
              ) {
                var x
                x = t.progressbarOpposite
                  ? this.isHorizontal()
                    ? 'vertical'
                    : 'horizontal'
                  : this.isHorizontal()
                  ? 'horizontal'
                  : 'vertical'
                var y = (i + 1) / n,
                  T = 1,
                  E = 1
                'horizontal' === x ? (T = y) : (E = y),
                  a
                    .find('.'.concat(t.progressbarFillClass))
                    .transform('translate3d(0,0,0) scaleX('.concat(T, ') scaleY(').concat(E, ')'))
                    .transition(this.params.speed)
              }
              'custom' === t.type && t.renderCustom
                ? (a.html(t.renderCustom(this, i + 1, n)), this.emit('paginationRender', this, a[0]))
                : this.emit('paginationUpdate', this, a[0]),
                a[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](t.lockClass)
            }
          },
          render: function() {
            var e = this.params.pagination
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
              var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                i = this.pagination.$el,
                s = ''
              if ('bullets' === e.type) {
                for (
                  var a = this.params.loop
                      ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup)
                      : this.snapGrid.length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  e.renderBullet
                    ? (s += e.renderBullet.call(this, n, e.bulletClass))
                    : (s += '<'
                        .concat(e.bulletElement, ' class="')
                        .concat(e.bulletClass, '"></')
                        .concat(e.bulletElement, '>'))
                i.html(s), (this.pagination.bullets = i.find('.'.concat(e.bulletClass)))
              }
              'fraction' === e.type &&
                ((s = e.renderFraction
                  ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                  : '<span class="'.concat(e.currentClass, '"></span>') +
                    ' / ' +
                    '<span class="'.concat(e.totalClass, '"></span>')),
                i.html(s)),
                'progressbar' === e.type &&
                  ((s = e.renderProgressbar
                    ? e.renderProgressbar.call(this, e.progressbarFillClass)
                    : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
                  i.html(s)),
                'custom' !== e.type && this.emit('paginationRender', this.pagination.$el[0])
            }
          },
          init: function() {
            var e = this,
              t = e.params.pagination
            if (t.el) {
              var i = Object(b.a)(t.el)
              0 !== i.length &&
                (e.params.uniqueNavElements &&
                  'string' == typeof t.el &&
                  i.length > 1 &&
                  1 === e.$el.find(t.el).length &&
                  (i = e.$el.find(t.el)),
                'bullets' === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                'bullets' === t.type &&
                  t.dynamicBullets &&
                  (i.addClass(''.concat(t.modifierClass).concat(t.type, '-dynamic')),
                  (e.pagination.dynamicBulletIndex = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                'progressbar' === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  i.on('click', '.'.concat(t.bulletClass), function(t) {
                    t.preventDefault()
                    var i = Object(b.a)(this).index() * e.params.slidesPerGroup
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                  }),
                T.extend(e.pagination, { $el: i, el: i[0] }))
            }
          },
          destroy: function() {
            var e = this.params.pagination
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
              var t = this.pagination.$el
              t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off('click', '.'.concat(e.bulletClass))
            }
          },
        },
        xe = {
          setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
              var e = this.scrollbar,
                t = this.rtlTranslate,
                i = this.progress,
                s = e.dragSize,
                a = e.trackSize,
                n = e.$dragEl,
                r = e.$el,
                o = this.params.scrollbar,
                l = s,
                d = (a - s) * i
              t
                ? (d = -d) > 0
                  ? ((l = s - d), (d = 0))
                  : -d + s > a && (l = a + d)
                : d < 0
                ? ((l = s + d), (d = 0))
                : d + s > a && (l = a - d),
                this.isHorizontal()
                  ? (n.transform('translate3d('.concat(d, 'px, 0, 0)')), (n[0].style.width = ''.concat(l, 'px')))
                  : (n.transform('translate3d(0px, '.concat(d, 'px, 0)')), (n[0].style.height = ''.concat(l, 'px'))),
                o.hide &&
                  (clearTimeout(this.scrollbar.timeout),
                  (r[0].style.opacity = 1),
                  (this.scrollbar.timeout = setTimeout(function() {
                    ;(r[0].style.opacity = 0), r.transition(400)
                  }, 1e3)))
            }
          },
          setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
          },
          updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
              var e = this.scrollbar,
                t = e.$dragEl,
                i = e.$el
              ;(t[0].style.width = ''), (t[0].style.height = '')
              var s,
                a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                n = this.size / this.virtualSize,
                r = n * (a / this.size)
              ;(s = 'auto' === this.params.scrollbar.dragSize ? a * n : parseInt(this.params.scrollbar.dragSize, 10)),
                this.isHorizontal()
                  ? (t[0].style.width = ''.concat(s, 'px'))
                  : (t[0].style.height = ''.concat(s, 'px')),
                (i[0].style.display = n >= 1 ? 'none' : ''),
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                T.extend(e, { trackSize: a, divider: n, moveDivider: r, dragSize: s }),
                e.$el[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](
                  this.params.scrollbar.lockClass,
                )
            }
          },
          getPointerPosition: function(e) {
            return this.isHorizontal()
              ? 'touchstart' === e.type || 'touchmove' === e.type
                ? e.targetTouches[0].clientX
                : e.clientX
              : 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientY
              : e.clientY
          },
          setDragPosition: function(e) {
            var t,
              i = this.scrollbar,
              s = this.rtlTranslate,
              a = i.$el,
              n = i.dragSize,
              r = i.trackSize,
              o = i.dragStartPos
            ;(t =
              (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? 'left' : 'top'] - (null !== o ? o : n / 2)) /
              (r - n)),
              (t = Math.max(Math.min(t, 1), 0)),
              s && (t = 1 - t)
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
          },
          onDragStart: function(e) {
            var t = this.params.scrollbar,
              i = this.scrollbar,
              s = this.$wrapperEl,
              a = i.$el,
              n = i.$dragEl
            ;(this.scrollbar.isTouched = !0),
              (this.scrollbar.dragStartPos =
                e.target === n[0] || e.target === n
                  ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? 'left' : 'top']
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              s.transition(100),
              n.transition(100),
              i.setDragPosition(e),
              clearTimeout(this.scrollbar.dragTimeout),
              a.transition(0),
              t.hide && a.css('opacity', 1),
              this.params.cssMode && this.$wrapperEl.css('scroll-snap-type', 'none'),
              this.emit('scrollbarDragStart', e)
          },
          onDragMove: function(e) {
            var t = this.scrollbar,
              i = this.$wrapperEl,
              s = t.$el,
              a = t.$dragEl
            this.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              t.setDragPosition(e),
              i.transition(0),
              s.transition(0),
              a.transition(0),
              this.emit('scrollbarDragMove', e))
          },
          onDragEnd: function(e) {
            var t = this.params.scrollbar,
              i = this.scrollbar,
              s = this.$wrapperEl,
              a = i.$el
            this.scrollbar.isTouched &&
              ((this.scrollbar.isTouched = !1),
              this.params.cssMode && (this.$wrapperEl.css('scroll-snap-type', ''), s.transition('')),
              t.hide &&
                (clearTimeout(this.scrollbar.dragTimeout),
                (this.scrollbar.dragTimeout = T.nextTick(function() {
                  a.css('opacity', 0), a.transition(400)
                }, 1e3))),
              this.emit('scrollbarDragEnd', e),
              t.snapOnRelease && this.slideToClosest())
          },
          enableDraggable: function() {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                t = this.touchEventsTouch,
                i = this.touchEventsDesktop,
                s = this.params,
                a = e.$el[0],
                n = !(!E.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                r = !(!E.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 }
              E.touch
                ? (a.addEventListener(t.start, this.scrollbar.onDragStart, n),
                  a.addEventListener(t.move, this.scrollbar.onDragMove, n),
                  a.addEventListener(t.end, this.scrollbar.onDragEnd, r))
                : (a.addEventListener(i.start, this.scrollbar.onDragStart, n),
                  x.a.addEventListener(i.move, this.scrollbar.onDragMove, n),
                  x.a.addEventListener(i.end, this.scrollbar.onDragEnd, r))
            }
          },
          disableDraggable: function() {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                t = this.touchEventsTouch,
                i = this.touchEventsDesktop,
                s = this.params,
                a = e.$el[0],
                n = !(!E.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                r = !(!E.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 }
              E.touch
                ? (a.removeEventListener(t.start, this.scrollbar.onDragStart, n),
                  a.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                  a.removeEventListener(t.end, this.scrollbar.onDragEnd, r))
                : (a.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                  x.a.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                  x.a.removeEventListener(i.end, this.scrollbar.onDragEnd, r))
            }
          },
          init: function() {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                t = this.$el,
                i = this.params.scrollbar,
                s = Object(b.a)(i.el)
              this.params.uniqueNavElements &&
                'string' == typeof i.el &&
                s.length > 1 &&
                1 === t.find(i.el).length &&
                (s = t.find(i.el))
              var a = s.find('.'.concat(this.params.scrollbar.dragClass))
              0 === a.length &&
                ((a = Object(b.a)('<div class="'.concat(this.params.scrollbar.dragClass, '"></div>'))), s.append(a)),
                T.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
                i.draggable && e.enableDraggable()
            }
          },
          destroy: function() {
            this.scrollbar.disableDraggable()
          },
        },
        ye = {
          setTransform: function(e, t) {
            var i = this.rtl,
              s = Object(b.a)(e),
              a = i ? -1 : 1,
              n = s.attr('data-swiper-parallax') || '0',
              r = s.attr('data-swiper-parallax-x'),
              o = s.attr('data-swiper-parallax-y'),
              l = s.attr('data-swiper-parallax-scale'),
              d = s.attr('data-swiper-parallax-opacity')
            if (
              (r || o
                ? ((r = r || '0'), (o = o || '0'))
                : this.isHorizontal()
                ? ((r = n), (o = '0'))
                : ((o = n), (r = '0')),
              (r = r.indexOf('%') >= 0 ? ''.concat(parseInt(r, 10) * t * a, '%') : ''.concat(r * t * a, 'px')),
              (o = o.indexOf('%') >= 0 ? ''.concat(parseInt(o, 10) * t, '%') : ''.concat(o * t, 'px')),
              null != d)
            ) {
              var h = d - (d - 1) * (1 - Math.abs(t))
              s[0].style.opacity = h
            }
            if (null == l) s.transform('translate3d('.concat(r, ', ').concat(o, ', 0px)'))
            else {
              var c = l - (l - 1) * (1 - Math.abs(t))
              s.transform(
                'translate3d('
                  .concat(r, ', ')
                  .concat(o, ', 0px) scale(')
                  .concat(c, ')'),
              )
            }
          },
          setTranslate: function() {
            var e = this,
              t = e.$el,
              i = e.slides,
              s = e.progress,
              a = e.snapGrid
            t
              .children(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
              )
              .each(function(t, i) {
                e.parallax.setTransform(i, s)
              }),
              i.each(function(t, i) {
                var n = i.progress
                e.params.slidesPerGroup > 1 &&
                  'auto' !== e.params.slidesPerView &&
                  (n += Math.ceil(t / 2) - s * (a.length - 1)),
                  (n = Math.min(Math.max(n, -1), 1)),
                  Object(b.a)(i)
                    .find(
                      '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
                    )
                    .each(function(t, i) {
                      e.parallax.setTransform(i, n)
                    })
              })
          },
          setTransition: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
              t = this,
              i = t.$el
            i.find(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
            ).each(function(t, i) {
              var s = Object(b.a)(i),
                a = parseInt(s.attr('data-swiper-parallax-duration'), 10) || e
              0 === e && (a = 0), s.transition(a)
            })
          },
        },
        Te = {
          getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1
            var t = e.targetTouches[0].pageX,
              i = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              a = e.targetTouches[1].pageY
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
          },
          onGestureStart: function(e) {
            var t = this.params.zoom,
              i = this.zoom,
              s = i.gesture
            if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !E.gestures)) {
              if ('touchstart' !== e.type || ('touchstart' === e.type && e.targetTouches.length < 2)) return
              ;(i.fakeGestureTouched = !0), (s.scaleStart = Te.getDistanceBetweenTouches(e))
            }
            ;(s.$slideEl && s.$slideEl.length) ||
            ((s.$slideEl = Object(b.a)(e.target).closest('.swiper-slide')),
            0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
            (s.$imageEl = s.$slideEl.find('img, svg, canvas')),
            (s.$imageWrapEl = s.$imageEl.parent('.'.concat(t.containerClass))),
            (s.maxRatio = s.$imageWrapEl.attr('data-swiper-zoom') || t.maxRatio),
            0 !== s.$imageWrapEl.length)
              ? (s.$imageEl.transition(0), (this.zoom.isScaling = !0))
              : (s.$imageEl = void 0)
          },
          onGestureChange: function(e) {
            var t = this.params.zoom,
              i = this.zoom,
              s = i.gesture
            if (!E.gestures) {
              if ('touchmove' !== e.type || ('touchmove' === e.type && e.targetTouches.length < 2)) return
              ;(i.fakeGestureMoved = !0), (s.scaleMove = Te.getDistanceBetweenTouches(e))
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              (E.gestures
                ? (i.scale = e.scale * i.currentScale)
                : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
              i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
              i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
              s.$imageEl.transform('translate3d(0,0,0) scale('.concat(i.scale, ')')))
          },
          onGestureEnd: function(e) {
            var t = this.params.zoom,
              i = this.zoom,
              s = i.gesture
            if (!E.gestures) {
              if (!i.fakeGestureTouched || !i.fakeGestureMoved) return
              if ('touchend' !== e.type || ('touchend' === e.type && e.changedTouches.length < 2 && !q.android)) return
              ;(i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1)
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
              s.$imageEl.transition(this.params.speed).transform('translate3d(0,0,0) scale('.concat(i.scale, ')')),
              (i.currentScale = i.scale),
              (i.isScaling = !1),
              1 === i.scale && (s.$slideEl = void 0))
          },
          onTouchStart: function(e) {
            var t = this.zoom,
              i = t.gesture,
              s = t.image
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              (s.isTouched ||
                (q.android && e.preventDefault(),
                (s.isTouched = !0),
                (s.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
                (s.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)))
          },
          onTouchMove: function(e) {
            var t = this.zoom,
              i = t.gesture,
              s = t.image,
              a = t.velocity
            if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), s.isTouched && i.$slideEl)) {
              s.isMoved ||
                ((s.width = i.$imageEl[0].offsetWidth),
                (s.height = i.$imageEl[0].offsetHeight),
                (s.startX = T.getTranslate(i.$imageWrapEl[0], 'x') || 0),
                (s.startY = T.getTranslate(i.$imageWrapEl[0], 'y') || 0),
                (i.slideWidth = i.$slideEl[0].offsetWidth),
                (i.slideHeight = i.$slideEl[0].offsetHeight),
                i.$imageWrapEl.transition(0),
                this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)))
              var n = s.width * t.scale,
                r = s.height * t.scale
              if (!(n < i.slideWidth && r < i.slideHeight)) {
                if (
                  ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                  (s.maxX = -s.minX),
                  (s.minY = Math.min(i.slideHeight / 2 - r / 2, 0)),
                  (s.maxY = -s.minY),
                  (s.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
                  (s.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
                  !s.isMoved && !t.isScaling)
                ) {
                  if (
                    this.isHorizontal() &&
                    ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) ||
                      (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                  )
                    return void (s.isTouched = !1)
                  if (
                    !this.isHorizontal() &&
                    ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) ||
                      (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                  )
                    return void (s.isTouched = !1)
                }
                e.preventDefault(),
                  e.stopPropagation(),
                  (s.isMoved = !0),
                  (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                  (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                  s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                  s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                  s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                  s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                  a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                  a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                  a.prevTime || (a.prevTime = Date.now()),
                  (a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
                  (a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
                  Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                  Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                  (a.prevPositionX = s.touchesCurrent.x),
                  (a.prevPositionY = s.touchesCurrent.y),
                  (a.prevTime = Date.now()),
                  i.$imageWrapEl.transform('translate3d('.concat(s.currentX, 'px, ').concat(s.currentY, 'px,0)'))
              }
            }
          },
          onTouchEnd: function() {
            var e = this.zoom,
              t = e.gesture,
              i = e.image,
              s = e.velocity
            if (t.$imageEl && 0 !== t.$imageEl.length) {
              if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1)
              ;(i.isTouched = !1), (i.isMoved = !1)
              var a = 300,
                n = 300,
                r = s.x * a,
                o = i.currentX + r,
                l = s.y * n,
                d = i.currentY + l
              0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (n = Math.abs((d - i.currentY) / s.y))
              var h = Math.max(a, n)
              ;(i.currentX = o), (i.currentY = d)
              var c = i.width * e.scale,
                p = i.height * e.scale
              ;(i.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                (i.maxX = -i.minX),
                (i.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
                (i.maxY = -i.minY),
                (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                t.$imageWrapEl
                  .transition(h)
                  .transform('translate3d('.concat(i.currentX, 'px, ').concat(i.currentY, 'px,0)'))
            }
          },
          onTransitionEnd: function() {
            var e = this.zoom,
              t = e.gesture
            t.$slideEl &&
              this.previousIndex !== this.activeIndex &&
              (t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
              t.$imageWrapEl.transform('translate3d(0,0,0)'),
              (e.scale = 1),
              (e.currentScale = 1),
              (t.$slideEl = void 0),
              (t.$imageEl = void 0),
              (t.$imageWrapEl = void 0))
          },
          toggle: function(e) {
            var t = this.zoom
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
          },
          in: function(e) {
            var t,
              i,
              s,
              a,
              n,
              r,
              o,
              l,
              d,
              h,
              c,
              p,
              u,
              v,
              m,
              f,
              g = this.zoom,
              w = this.params.zoom,
              x = g.gesture,
              y = g.image
            ;(x.$slideEl ||
              ((x.$slideEl = this.clickedSlide ? Object(b.a)(this.clickedSlide) : this.slides.eq(this.activeIndex)),
              (x.$imageEl = x.$slideEl.find('img, svg, canvas')),
              (x.$imageWrapEl = x.$imageEl.parent('.'.concat(w.containerClass)))),
            x.$imageEl && 0 !== x.$imageEl.length) &&
              (x.$slideEl.addClass(''.concat(w.zoomedSlideClass)),
              void 0 === y.touchesStart.x && e
                ? ((t = 'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
                  (i = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
                : ((t = y.touchesStart.x), (i = y.touchesStart.y)),
              (g.scale = x.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
              (g.currentScale = x.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
              e
                ? ((m = x.$slideEl[0].offsetWidth),
                  (f = x.$slideEl[0].offsetHeight),
                  (s = x.$slideEl.offset().left + m / 2 - t),
                  (a = x.$slideEl.offset().top + f / 2 - i),
                  (o = x.$imageEl[0].offsetWidth),
                  (l = x.$imageEl[0].offsetHeight),
                  (d = o * g.scale),
                  (h = l * g.scale),
                  (u = -(c = Math.min(m / 2 - d / 2, 0))),
                  (v = -(p = Math.min(f / 2 - h / 2, 0))),
                  (n = s * g.scale) < c && (n = c),
                  n > u && (n = u),
                  (r = a * g.scale) < p && (r = p),
                  r > v && (r = v))
                : ((n = 0), (r = 0)),
              x.$imageWrapEl.transition(300).transform('translate3d('.concat(n, 'px, ').concat(r, 'px,0)')),
              x.$imageEl.transition(300).transform('translate3d(0,0,0) scale('.concat(g.scale, ')')))
          },
          out: function() {
            var e = this.zoom,
              t = this.params.zoom,
              i = e.gesture
            i.$slideEl ||
              ((i.$slideEl = this.clickedSlide ? Object(b.a)(this.clickedSlide) : this.slides.eq(this.activeIndex)),
              (i.$imageEl = i.$slideEl.find('img, svg, canvas')),
              (i.$imageWrapEl = i.$imageEl.parent('.'.concat(t.containerClass)))),
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((e.scale = 1),
                (e.currentScale = 1),
                i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
                i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
                i.$slideEl.removeClass(''.concat(t.zoomedSlideClass)),
                (i.$slideEl = void 0))
          },
          enable: function() {
            var e = this.zoom
            if (!e.enabled) {
              e.enabled = !0
              var t = !(
                  'touchstart' !== this.touchEvents.start ||
                  !E.passiveListener ||
                  !this.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                i = !E.passiveListener || { passive: !1, capture: !0 }
              E.gestures
                ? (this.$wrapperEl.on('gesturestart', '.swiper-slide', e.onGestureStart, t),
                  this.$wrapperEl.on('gesturechange', '.swiper-slide', e.onGestureChange, t),
                  this.$wrapperEl.on('gestureend', '.swiper-slide', e.onGestureEnd, t))
                : 'touchstart' === this.touchEvents.start &&
                  (this.$wrapperEl.on(this.touchEvents.start, '.swiper-slide', e.onGestureStart, t),
                  this.$wrapperEl.on(this.touchEvents.move, '.swiper-slide', e.onGestureChange, i),
                  this.$wrapperEl.on(this.touchEvents.end, '.swiper-slide', e.onGestureEnd, t),
                  this.touchEvents.cancel &&
                    this.$wrapperEl.on(this.touchEvents.cancel, '.swiper-slide', e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, '.'.concat(this.params.zoom.containerClass), e.onTouchMove, i)
            }
          },
          disable: function() {
            var e = this.zoom
            if (e.enabled) {
              this.zoom.enabled = !1
              var t = !(
                  'touchstart' !== this.touchEvents.start ||
                  !E.passiveListener ||
                  !this.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                i = !E.passiveListener || { passive: !1, capture: !0 }
              E.gestures
                ? (this.$wrapperEl.off('gesturestart', '.swiper-slide', e.onGestureStart, t),
                  this.$wrapperEl.off('gesturechange', '.swiper-slide', e.onGestureChange, t),
                  this.$wrapperEl.off('gestureend', '.swiper-slide', e.onGestureEnd, t))
                : 'touchstart' === this.touchEvents.start &&
                  (this.$wrapperEl.off(this.touchEvents.start, '.swiper-slide', e.onGestureStart, t),
                  this.$wrapperEl.off(this.touchEvents.move, '.swiper-slide', e.onGestureChange, i),
                  this.$wrapperEl.off(this.touchEvents.end, '.swiper-slide', e.onGestureEnd, t),
                  this.touchEvents.cancel &&
                    this.$wrapperEl.off(this.touchEvents.cancel, '.swiper-slide', e.onGestureEnd, t)),
                this.$wrapperEl.off(
                  this.touchEvents.move,
                  '.'.concat(this.params.zoom.containerClass),
                  e.onTouchMove,
                  i,
                )
            }
          },
        },
        Ee = {
          loadInSlide: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              i = this,
              s = i.params.lazy
            if (void 0 !== e && 0 !== i.slides.length) {
              var a = i.virtual && i.params.virtual.enabled,
                n = a
                  ? i.$wrapperEl.children('.'.concat(i.params.slideClass, '[data-swiper-slide-index="').concat(e, '"]'))
                  : i.slides.eq(e),
                r = n.find(
                  '.'
                    .concat(s.elementClass, ':not(.')
                    .concat(s.loadedClass, '):not(.')
                    .concat(s.loadingClass, ')'),
                )
              !n.hasClass(s.elementClass) ||
                n.hasClass(s.loadedClass) ||
                n.hasClass(s.loadingClass) ||
                (r = r.add(n[0])),
                0 !== r.length &&
                  r.each(function(e, a) {
                    var r = Object(b.a)(a)
                    r.addClass(s.loadingClass)
                    var o = r.attr('data-background'),
                      l = r.attr('data-src'),
                      d = r.attr('data-srcset'),
                      h = r.attr('data-sizes')
                    i.loadImage(r[0], l || o, d, h, !1, function() {
                      if (null != i && i && (!i || i.params) && !i.destroyed) {
                        if (
                          (o
                            ? (r.css('background-image', 'url("'.concat(o, '")')), r.removeAttr('data-background'))
                            : (d && (r.attr('srcset', d), r.removeAttr('data-srcset')),
                              h && (r.attr('sizes', h), r.removeAttr('data-sizes')),
                              l && (r.attr('src', l), r.removeAttr('data-src'))),
                          r.addClass(s.loadedClass).removeClass(s.loadingClass),
                          n.find('.'.concat(s.preloaderClass)).remove(),
                          i.params.loop && t)
                        ) {
                          var e = n.attr('data-swiper-slide-index')
                          if (n.hasClass(i.params.slideDuplicateClass)) {
                            var a = i.$wrapperEl.children(
                              '[data-swiper-slide-index="'
                                .concat(e, '"]:not(.')
                                .concat(i.params.slideDuplicateClass, ')'),
                            )
                            i.lazy.loadInSlide(a.index(), !1)
                          } else {
                            var c = i.$wrapperEl.children(
                              '.'.concat(i.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(e, '"]'),
                            )
                            i.lazy.loadInSlide(c.index(), !1)
                          }
                        }
                        i.emit('lazyImageReady', n[0], r[0])
                      }
                    }),
                      i.emit('lazyImageLoad', n[0], r[0])
                  })
            }
          },
          load: function() {
            var e = this,
              t = e.$wrapperEl,
              i = e.params,
              s = e.slides,
              a = e.activeIndex,
              n = e.virtual && i.virtual.enabled,
              r = i.lazy,
              o = i.slidesPerView
            function l(e) {
              if (n) {
                if (t.children('.'.concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]')).length) return !0
              } else if (s[e]) return !0
              return !1
            }
            function d(e) {
              return n ? Object(b.a)(e).attr('data-swiper-slide-index') : Object(b.a)(e).index()
            }
            if (
              ('auto' === o && (o = 0),
              e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
              e.params.watchSlidesVisibility)
            )
              t.children('.'.concat(i.slideVisibleClass)).each(function(t, i) {
                var s = n ? Object(b.a)(i).attr('data-swiper-slide-index') : Object(b.a)(i).index()
                e.lazy.loadInSlide(s)
              })
            else if (o > 1) for (var h = a; h < a + o; h += 1) l(h) && e.lazy.loadInSlide(h)
            else e.lazy.loadInSlide(a)
            if (r.loadPrevNext)
              if (o > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
                for (
                  var c = r.loadPrevNextAmount,
                    p = o,
                    u = Math.min(a + p + Math.max(c, p), s.length),
                    v = Math.max(a - Math.max(p, c), 0),
                    m = a + o;
                  m < u;
                  m += 1
                )
                  l(m) && e.lazy.loadInSlide(m)
                for (var f = v; f < a; f += 1) l(f) && e.lazy.loadInSlide(f)
              } else {
                var g = t.children('.'.concat(i.slideNextClass))
                g.length > 0 && e.lazy.loadInSlide(d(g))
                var w = t.children('.'.concat(i.slidePrevClass))
                w.length > 0 && e.lazy.loadInSlide(d(w))
              }
          },
        },
        Ce = {
          LinearSpline: function(e, t) {
            var i,
              s,
              a,
              n,
              r,
              o = function(e, t) {
                for (s = -1, i = e.length; i - s > 1; ) e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a)
                return i
              }
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function(e) {
                return e
                  ? ((r = o(this.x, e)),
                    (n = r - 1),
                    ((e - this.x[n]) * (this.y[r] - this.y[n])) / (this.x[r] - this.x[n]) + this.y[n])
                  : 0
              }),
              this
            )
          },
          getInterpolateFunction: function(e) {
            this.controller.spline ||
              (this.controller.spline = this.params.loop
                ? new Ce.LinearSpline(this.slidesGrid, e.slidesGrid)
                : new Ce.LinearSpline(this.snapGrid, e.snapGrid))
          },
          setTranslate: function(e, t) {
            var i,
              s,
              a = this,
              n = a.controller.control
            function r(e) {
              var t = a.rtlTranslate ? -a.translate : a.translate
              'slide' === a.params.controller.by &&
                (a.controller.getInterpolateFunction(e), (s = -a.controller.spline.interpolate(-t))),
                (s && 'container' !== a.params.controller.by) ||
                  ((i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate())),
                  (s = (t - a.minTranslate()) * i + e.minTranslate())),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(n)) for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof ne && r(n[o])
            else n instanceof ne && t !== n && r(n)
          },
          setTransition: function(e, t) {
            var i,
              s = this,
              a = s.controller.control
            function n(t) {
              t.setTransition(e, s),
                0 !== e &&
                  (t.transitionStart(),
                  t.params.autoHeight &&
                    T.nextTick(function() {
                      t.updateAutoHeight()
                    }),
                  t.$wrapperEl.transitionEnd(function() {
                    a && (t.params.loop && 'slide' === s.params.controller.by && t.loopFix(), t.transitionEnd())
                  }))
            }
            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof ne && n(a[i])
            else a instanceof ne && t !== a && n(a)
          },
        },
        Se = {
          makeElFocusable: function(e) {
            return e.attr('tabIndex', '0'), e
          },
          addElRole: function(e, t) {
            return e.attr('role', t), e
          },
          addElLabel: function(e, t) {
            return e.attr('aria-label', t), e
          },
          disableEl: function(e) {
            return e.attr('aria-disabled', !0), e
          },
          enableEl: function(e) {
            return e.attr('aria-disabled', !1), e
          },
          onEnterKey: function(e) {
            var t = this.params.a11y
            if (13 === e.keyCode) {
              var i = Object(b.a)(e.target)
              this.navigation &&
                this.navigation.$nextEl &&
                i.is(this.navigation.$nextEl) &&
                ((this.isEnd && !this.params.loop) || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation &&
                  this.navigation.$prevEl &&
                  i.is(this.navigation.$prevEl) &&
                  ((this.isBeginning && !this.params.loop) || this.slidePrev(),
                  this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is('.'.concat(this.params.pagination.bulletClass)) && i[0].click()
            }
          },
          notify: function(e) {
            var t = this.a11y.liveRegion
            0 !== t.length && (t.html(''), t.html(e))
          },
          updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
              var e = this.navigation,
                t = e.$nextEl,
                i = e.$prevEl
              i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
          },
          updatePagination: function() {
            var e = this,
              t = e.params.a11y
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.bullets.each(function(i, s) {
                var a = Object(b.a)(s)
                e.a11y.makeElFocusable(a),
                  e.a11y.addElRole(a, 'button'),
                  e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
              })
          },
          init: function() {
            this.$el.append(this.a11y.liveRegion)
            var e,
              t,
              i = this.params.a11y
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
              this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
              e &&
                (this.a11y.makeElFocusable(e),
                this.a11y.addElRole(e, 'button'),
                this.a11y.addElLabel(e, i.nextSlideMessage),
                e.on('keydown', this.a11y.onEnterKey)),
              t &&
                (this.a11y.makeElFocusable(t),
                this.a11y.addElRole(t, 'button'),
                this.a11y.addElLabel(t, i.prevSlideMessage),
                t.on('keydown', this.a11y.onEnterKey)),
              this.pagination &&
                this.params.pagination.clickable &&
                this.pagination.bullets &&
                this.pagination.bullets.length &&
                this.pagination.$el.on('keydown', '.'.concat(this.params.pagination.bulletClass), this.a11y.onEnterKey)
          },
          destroy: function() {
            var e, t
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
              this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
              this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
              e && e.off('keydown', this.a11y.onEnterKey),
              t && t.off('keydown', this.a11y.onEnterKey),
              this.pagination &&
                this.params.pagination.clickable &&
                this.pagination.bullets &&
                this.pagination.bullets.length &&
                this.pagination.$el.off('keydown', '.'.concat(this.params.pagination.bulletClass), this.a11y.onEnterKey)
          },
        },
        Ae = {
          init: function() {
            if (this.params.history) {
              if (!x.b.history || !x.b.history.pushState)
                return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0)
              var e = this.history
              ;(e.initialized = !0),
                (e.paths = Ae.getPathValues()),
                (e.paths.key || e.paths.value) &&
                  (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                  this.params.history.replaceState || x.b.addEventListener('popstate', this.history.setHistoryPopState))
            }
          },
          destroy: function() {
            this.params.history.replaceState || x.b.removeEventListener('popstate', this.history.setHistoryPopState)
          },
          setHistoryPopState: function() {
            ;(this.history.paths = Ae.getPathValues()),
              this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
          },
          getPathValues: function() {
            var e = x.b.location.pathname
                .slice(1)
                .split('/')
                .filter(function(e) {
                  return '' !== e
                }),
              t = e.length
            return { key: e[t - 2], value: e[t - 1] }
          },
          setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
              var i = this.slides.eq(t),
                s = Ae.slugify(i.attr('data-history'))
              x.b.location.pathname.includes(e) || (s = ''.concat(e, '/').concat(s))
              var a = x.b.history.state
              ;(a && a.value === s) ||
                (this.params.history.replaceState
                  ? x.b.history.replaceState({ value: s }, null, s)
                  : x.b.history.pushState({ value: s }, null, s))
            }
          },
          slugify: function(e) {
            return e
              .toString()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '')
          },
          scrollToSlide: function(e, t, i) {
            if (t)
              for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var n = this.slides.eq(s)
                if (Ae.slugify(n.attr('data-history')) === t && !n.hasClass(this.params.slideDuplicateClass)) {
                  var r = n.index()
                  this.slideTo(r, e, i)
                }
              }
            else this.slideTo(0, e, i)
          },
        },
        Me = {
          onHashCange: function() {
            var e = x.a.location.hash.replace('#', '')
            if (e !== this.slides.eq(this.activeIndex).attr('data-hash')) {
              var t = this.$wrapperEl
                .children('.'.concat(this.params.slideClass, '[data-hash="').concat(e, '"]'))
                .index()
              if (void 0 === t) return
              this.slideTo(t)
            }
          },
          setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
              if (this.params.hashNavigation.replaceState && x.b.history && x.b.history.replaceState)
                x.b.history.replaceState(
                  null,
                  null,
                  '#'.concat(this.slides.eq(this.activeIndex).attr('data-hash')) || !1,
                )
              else {
                var e = this.slides.eq(this.activeIndex),
                  t = e.attr('data-hash') || e.attr('data-history')
                x.a.location.hash = t || ''
              }
          },
          init: function() {
            if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
              this.hashNavigation.initialized = !0
              var e = x.a.location.hash.replace('#', '')
              if (e)
                for (var t = 0, i = this.slides.length; t < i; t += 1) {
                  var s = this.slides.eq(t)
                  if (
                    (s.attr('data-hash') || s.attr('data-history')) === e &&
                    !s.hasClass(this.params.slideDuplicateClass)
                  ) {
                    var a = s.index()
                    this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                  }
                }
              this.params.hashNavigation.watchState &&
                Object(b.a)(x.b).on('hashchange', this.hashNavigation.onHashCange)
            }
          },
          destroy: function() {
            this.params.hashNavigation.watchState && Object(b.a)(x.b).off('hashchange', this.hashNavigation.onHashCange)
          },
        },
        ze = {
          run: function() {
            var e = this,
              t = e.slides.eq(e.activeIndex),
              i = e.params.autoplay.delay
            t.attr('data-swiper-autoplay') && (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = T.nextTick(function() {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay'))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                  : e.params.loop
                  ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                  e.params.cssMode && e.autoplay.running && e.autoplay.run()
              }, i))
          },
          start: function() {
            return (
              void 0 === this.autoplay.timeout &&
              !this.autoplay.running &&
                ((this.autoplay.running = !0), this.emit('autoplayStart'), this.autoplay.run(), !0)
            )
          },
          stop: function() {
            return (
              !!this.autoplay.running &&
              void 0 !== this.autoplay.timeout &&
                (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)),
                (this.autoplay.running = !1),
                this.emit('autoplayStop'),
                !0)
            )
          },
          pause: function(e) {
            this.autoplay.running &&
              (this.autoplay.paused ||
                (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                (this.autoplay.paused = !0),
                0 !== e && this.params.autoplay.waitForTransition
                  ? (this.$wrapperEl[0].addEventListener('transitionend', this.autoplay.onTransitionEnd),
                    this.$wrapperEl[0].addEventListener('webkitTransitionEnd', this.autoplay.onTransitionEnd))
                  : ((this.autoplay.paused = !1), this.autoplay.run())))
          },
        },
        ke = {
          setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
              var i = this.slides.eq(t),
                s = -i[0].swiperSlideOffset
              this.params.virtualTranslate || (s -= this.translate)
              var a = 0
              this.isHorizontal() || ((a = s), (s = 0))
              var n = this.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(i[0].progress), 0)
                : 1 + Math.min(Math.max(i[0].progress, -1), 0)
              i.css({ opacity: n }).transform('translate3d('.concat(s, 'px, ').concat(a, 'px, 0px)'))
            }
          },
          setTransition: function(e) {
            var t = this,
              i = t.slides,
              s = t.$wrapperEl
            if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
              var a = !1
              i.transitionEnd(function() {
                if (!a && t && !t.destroyed) {
                  ;(a = !0), (t.animating = !1)
                  for (var e = ['webkitTransitionEnd', 'transitionend'], i = 0; i < e.length; i += 1) s.trigger(e[i])
                }
              })
            }
          },
        },
        Pe = {
          setTranslate: function() {
            var e,
              t = this.$el,
              i = this.$wrapperEl,
              s = this.slides,
              a = this.width,
              n = this.height,
              r = this.rtlTranslate,
              o = this.size,
              l = this.params.cubeEffect,
              d = this.isHorizontal(),
              h = this.virtual && this.params.virtual.enabled,
              c = 0
            l.shadow &&
              (d
                ? (0 === (e = i.find('.swiper-cube-shadow')).length &&
                    ((e = Object(b.a)('<div class="swiper-cube-shadow"></div>')), i.append(e)),
                  e.css({ height: ''.concat(a, 'px') }))
                : 0 === (e = t.find('.swiper-cube-shadow')).length &&
                  ((e = Object(b.a)('<div class="swiper-cube-shadow"></div>')), t.append(e)))
            for (var p = 0; p < s.length; p += 1) {
              var u = s.eq(p),
                v = p
              h && (v = parseInt(u.attr('data-swiper-slide-index'), 10))
              var m = 90 * v,
                f = Math.floor(m / 360)
              r && ((m = -m), (f = Math.floor(-m / 360)))
              var g = Math.max(Math.min(u[0].progress, 1), -1),
                w = 0,
                x = 0,
                y = 0
              v % 4 == 0
                ? ((w = 4 * -f * o), (y = 0))
                : (v - 1) % 4 == 0
                ? ((w = 0), (y = 4 * -f * o))
                : (v - 2) % 4 == 0
                ? ((w = o + 4 * f * o), (y = o))
                : (v - 3) % 4 == 0 && ((w = -o), (y = 3 * o + 4 * o * f)),
                r && (w = -w),
                d || ((x = w), (w = 0))
              var T = 'rotateX('
                .concat(d ? 0 : -m, 'deg) rotateY(')
                .concat(d ? m : 0, 'deg) translate3d(')
                .concat(w, 'px, ')
                .concat(x, 'px, ')
                .concat(y, 'px)')
              if (
                (g <= 1 && g > -1 && ((c = 90 * v + 90 * g), r && (c = 90 * -v - 90 * g)),
                u.transform(T),
                l.slideShadows)
              ) {
                var E = d ? u.find('.swiper-slide-shadow-left') : u.find('.swiper-slide-shadow-top'),
                  C = d ? u.find('.swiper-slide-shadow-right') : u.find('.swiper-slide-shadow-bottom')
                0 === E.length &&
                  ((E = Object(b.a)('<div class="swiper-slide-shadow-'.concat(d ? 'left' : 'top', '"></div>'))),
                  u.append(E)),
                  0 === C.length &&
                    ((C = Object(b.a)('<div class="swiper-slide-shadow-'.concat(d ? 'right' : 'bottom', '"></div>'))),
                    u.append(C)),
                  E.length && (E[0].style.opacity = Math.max(-g, 0)),
                  C.length && (C[0].style.opacity = Math.max(g, 0))
              }
            }
            if (
              (i.css({
                '-webkit-transform-origin': '50% 50% -'.concat(o / 2, 'px'),
                '-moz-transform-origin': '50% 50% -'.concat(o / 2, 'px'),
                '-ms-transform-origin': '50% 50% -'.concat(o / 2, 'px'),
                'transform-origin': '50% 50% -'.concat(o / 2, 'px'),
              }),
              l.shadow)
            )
              if (d)
                e.transform(
                  'translate3d(0px, '
                    .concat(a / 2 + l.shadowOffset, 'px, ')
                    .concat(-a / 2, 'px) rotateX(90deg) rotateZ(0deg) scale(')
                    .concat(l.shadowScale, ')'),
                )
              else {
                var S = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                  A = 1.5 - (Math.sin((2 * S * Math.PI) / 360) / 2 + Math.cos((2 * S * Math.PI) / 360) / 2),
                  M = l.shadowScale,
                  z = l.shadowScale / A,
                  k = l.shadowOffset
                e.transform(
                  'scale3d('
                    .concat(M, ', 1, ')
                    .concat(z, ') translate3d(0px, ')
                    .concat(n / 2 + k, 'px, ')
                    .concat(-n / 2 / z, 'px) rotateX(-90deg)'),
                )
              }
            var P = le.isSafari || le.isUiWebView ? -o / 2 : 0
            i.transform(
              'translate3d(0px,0,'
                .concat(P, 'px) rotateX(')
                .concat(this.isHorizontal() ? 0 : c, 'deg) rotateY(')
                .concat(this.isHorizontal() ? -c : 0, 'deg)'),
            )
          },
          setTransition: function(e) {
            var t = this.$el
            this.slides
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
              )
              .transition(e),
              this.params.cubeEffect.shadow && !this.isHorizontal() && t.find('.swiper-cube-shadow').transition(e)
          },
        },
        $e = {
          setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
              var s = e.eq(i),
                a = s[0].progress
              this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1))
              var n = -180 * a,
                r = 0,
                o = -s[0].swiperSlideOffset,
                l = 0
              if (
                (this.isHorizontal() ? t && (n = -n) : ((l = o), (o = 0), (r = -n), (n = 0)),
                (s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
                this.params.flipEffect.slideShadows)
              ) {
                var d = this.isHorizontal() ? s.find('.swiper-slide-shadow-left') : s.find('.swiper-slide-shadow-top'),
                  h = this.isHorizontal() ? s.find('.swiper-slide-shadow-right') : s.find('.swiper-slide-shadow-bottom')
                0 === d.length &&
                  ((d = Object(b.a)(
                    '<div class="swiper-slide-shadow-'.concat(this.isHorizontal() ? 'left' : 'top', '"></div>'),
                  )),
                  s.append(d)),
                  0 === h.length &&
                    ((h = Object(b.a)(
                      '<div class="swiper-slide-shadow-'.concat(this.isHorizontal() ? 'right' : 'bottom', '"></div>'),
                    )),
                    s.append(h)),
                  d.length && (d[0].style.opacity = Math.max(-a, 0)),
                  h.length && (h[0].style.opacity = Math.max(a, 0))
              }
              s.transform(
                'translate3d('
                  .concat(o, 'px, ')
                  .concat(l, 'px, 0px) rotateX(')
                  .concat(r, 'deg) rotateY(')
                  .concat(n, 'deg)'),
              )
            }
          },
          setTransition: function(e) {
            var t = this,
              i = t.slides,
              s = t.activeIndex,
              a = t.$wrapperEl
            if (
              (i
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                )
                .transition(e),
              t.params.virtualTranslate && 0 !== e)
            ) {
              var n = !1
              i.eq(s).transitionEnd(function() {
                if (!n && t && !t.destroyed) {
                  ;(n = !0), (t.animating = !1)
                  for (var e = ['webkitTransitionEnd', 'transitionend'], i = 0; i < e.length; i += 1) a.trigger(e[i])
                }
              })
            }
          },
        },
        Oe = {
          setTranslate: function() {
            for (
              var e = this.width,
                t = this.height,
                i = this.slides,
                s = this.$wrapperEl,
                a = this.slidesSizesGrid,
                n = this.params.coverflowEffect,
                r = this.isHorizontal(),
                o = this.translate,
                l = r ? e / 2 - o : t / 2 - o,
                d = r ? n.rotate : -n.rotate,
                h = n.depth,
                c = 0,
                p = i.length;
              c < p;
              c += 1
            ) {
              var u = i.eq(c),
                v = a[c],
                m = ((l - u[0].swiperSlideOffset - v / 2) / v) * n.modifier,
                f = r ? d * m : 0,
                g = r ? 0 : d * m,
                w = -h * Math.abs(m),
                x = r ? 0 : n.stretch * m,
                y = r ? n.stretch * m : 0
              Math.abs(y) < 0.001 && (y = 0),
                Math.abs(x) < 0.001 && (x = 0),
                Math.abs(w) < 0.001 && (w = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(g) < 0.001 && (g = 0)
              var T = 'translate3d('
                .concat(y, 'px,')
                .concat(x, 'px,')
                .concat(w, 'px)  rotateX(')
                .concat(g, 'deg) rotateY(')
                .concat(f, 'deg)')
              if ((u.transform(T), (u[0].style.zIndex = 1 - Math.abs(Math.round(m))), n.slideShadows)) {
                var C = r ? u.find('.swiper-slide-shadow-left') : u.find('.swiper-slide-shadow-top'),
                  S = r ? u.find('.swiper-slide-shadow-right') : u.find('.swiper-slide-shadow-bottom')
                0 === C.length &&
                  ((C = Object(b.a)('<div class="swiper-slide-shadow-'.concat(r ? 'left' : 'top', '"></div>'))),
                  u.append(C)),
                  0 === S.length &&
                    ((S = Object(b.a)('<div class="swiper-slide-shadow-'.concat(r ? 'right' : 'bottom', '"></div>'))),
                    u.append(S)),
                  C.length && (C[0].style.opacity = m > 0 ? m : 0),
                  S.length && (S[0].style.opacity = -m > 0 ? -m : 0)
              }
            }
            ;(E.pointerEvents || E.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = ''.concat(l, 'px 50%'))
          },
          setTransition: function(e) {
            this.slides
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
              )
              .transition(e)
          },
        },
        Ie = {
          init: function() {
            var e = this.params.thumbs,
              t = this.constructor
            e.swiper instanceof t
              ? ((this.thumbs.swiper = e.swiper),
                T.extend(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                T.extend(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
              : T.isObject(e.swiper) &&
                ((this.thumbs.swiper = new t(
                  T.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                )),
                (this.thumbs.swiperCreated = !0)),
              this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
              this.thumbs.swiper.on('tap', this.thumbs.onThumbClick)
          },
          onThumbClick: function() {
            var e = this.thumbs.swiper
            if (e) {
              var t = e.clickedIndex,
                i = e.clickedSlide
              if (!((i && Object(b.a)(i).hasClass(this.params.thumbs.slideThumbActiveClass)) || null == t)) {
                var s
                if (
                  ((s = e.params.loop ? parseInt(Object(b.a)(e.clickedSlide).attr('data-swiper-slide-index'), 10) : t),
                  this.params.loop)
                ) {
                  var a = this.activeIndex
                  this.slides.eq(a).hasClass(this.params.slideDuplicateClass) &&
                    (this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft), (a = this.activeIndex))
                  var n = this.slides
                      .eq(a)
                      .prevAll('[data-swiper-slide-index="'.concat(s, '"]'))
                      .eq(0)
                      .index(),
                    r = this.slides
                      .eq(a)
                      .nextAll('[data-swiper-slide-index="'.concat(s, '"]'))
                      .eq(0)
                      .index()
                  s = void 0 === n ? r : void 0 === r ? n : r - a < a - n ? r : n
                }
                this.slideTo(s)
              }
            }
          },
          update: function(e) {
            var t = this.thumbs.swiper
            if (t) {
              var i = 'auto' === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView
              if (this.realIndex !== t.realIndex) {
                var s,
                  a = t.activeIndex
                if (t.params.loop) {
                  t.slides.eq(a).hasClass(t.params.slideDuplicateClass) &&
                    (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (a = t.activeIndex))
                  var n = t.slides
                      .eq(a)
                      .prevAll('[data-swiper-slide-index="'.concat(this.realIndex, '"]'))
                      .eq(0)
                      .index(),
                    r = t.slides
                      .eq(a)
                      .nextAll('[data-swiper-slide-index="'.concat(this.realIndex, '"]'))
                      .eq(0)
                      .index()
                  s = void 0 === n ? r : void 0 === r ? n : r - a == a - n ? a : r - a < a - n ? r : n
                } else s = this.realIndex
                t.visibleSlidesIndexes &&
                  t.visibleSlidesIndexes.indexOf(s) < 0 &&
                  (t.params.centeredSlides
                    ? (s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1)
                    : s > a && (s = s - i + 1),
                  t.slideTo(s, e ? 0 : void 0))
              }
              var o = 1,
                l = this.params.thumbs.slideThumbActiveClass
              if (
                (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView),
                this.params.thumbs.multipleActiveThumbs || (o = 1),
                (o = Math.floor(o)),
                t.slides.removeClass(l),
                t.params.loop || (t.params.virtual && t.params.virtual.enabled))
              )
                for (var d = 0; d < o; d += 1)
                  t.$wrapperEl.children('[data-swiper-slide-index="'.concat(this.realIndex + d, '"]')).addClass(l)
              else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
            }
          },
        },
        Le = [
          re,
          oe,
          de,
          he,
          pe,
          ve,
          fe,
          {
            name: 'mousewheel',
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: 'container',
              },
            },
            create: function() {
              T.extend(this, {
                mousewheel: {
                  enabled: !1,
                  enable: ge.enable.bind(this),
                  disable: ge.disable.bind(this),
                  handle: ge.handle.bind(this),
                  handleMouseEnter: ge.handleMouseEnter.bind(this),
                  handleMouseLeave: ge.handleMouseLeave.bind(this),
                  animateSlider: ge.animateSlider.bind(this),
                  releaseScroll: ge.releaseScroll.bind(this),
                  lastScrollTime: T.now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: [],
                },
              })
            },
            on: {
              init: function() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
                  this.params.mousewheel.enabled && this.mousewheel.enable()
              },
              destroy: function() {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
              },
            },
          },
          {
            name: 'navigation',
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
              },
            },
            create: function() {
              T.extend(this, {
                navigation: {
                  init: we.init.bind(this),
                  update: we.update.bind(this),
                  destroy: we.destroy.bind(this),
                  onNextClick: we.onNextClick.bind(this),
                  onPrevClick: we.onPrevClick.bind(this),
                },
              })
            },
            on: {
              init: function() {
                this.navigation.init(), this.navigation.update()
              },
              toEdge: function() {
                this.navigation.update()
              },
              fromEdge: function() {
                this.navigation.update()
              },
              destroy: function() {
                this.navigation.destroy()
              },
              click: function(e) {
                var t,
                  i = this.navigation,
                  s = i.$nextEl,
                  a = i.$prevEl
                !this.params.navigation.hideOnClick ||
                  Object(b.a)(e.target).is(a) ||
                  Object(b.a)(e.target).is(s) ||
                  (s
                    ? (t = s.hasClass(this.params.navigation.hiddenClass))
                    : a && (t = a.hasClass(this.params.navigation.hiddenClass)),
                  !0 === t ? this.emit('navigationShow', this) : this.emit('navigationHide', this),
                  s && s.toggleClass(this.params.navigation.hiddenClass),
                  a && a.toggleClass(this.params.navigation.hiddenClass))
              },
            },
          },
          {
            name: 'pagination',
            params: {
              pagination: {
                el: null,
                bulletElement: 'span',
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: 'bullets',
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                  return e
                },
                formatFractionTotal: function(e) {
                  return e
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                lockClass: 'swiper-pagination-lock',
              },
            },
            create: function() {
              T.extend(this, {
                pagination: {
                  init: be.init.bind(this),
                  render: be.render.bind(this),
                  update: be.update.bind(this),
                  destroy: be.destroy.bind(this),
                  dynamicBulletIndex: 0,
                },
              })
            },
            on: {
              init: function() {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
              },
              activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
              },
              snapIndexChange: function() {
                this.params.loop || this.pagination.update()
              },
              slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(), this.pagination.update())
              },
              snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(), this.pagination.update())
              },
              destroy: function() {
                this.pagination.destroy()
              },
              click: function(e) {
                this.params.pagination.el &&
                  this.params.pagination.hideOnClick &&
                  this.pagination.$el.length > 0 &&
                  !Object(b.a)(e.target).hasClass(this.params.pagination.bulletClass) &&
                  (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                    ? this.emit('paginationShow', this)
                    : this.emit('paginationHide', this),
                  this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
              },
            },
          },
          {
            name: 'scrollbar',
            params: {
              scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
              },
            },
            create: function() {
              T.extend(this, {
                scrollbar: {
                  init: xe.init.bind(this),
                  destroy: xe.destroy.bind(this),
                  updateSize: xe.updateSize.bind(this),
                  setTranslate: xe.setTranslate.bind(this),
                  setTransition: xe.setTransition.bind(this),
                  enableDraggable: xe.enableDraggable.bind(this),
                  disableDraggable: xe.disableDraggable.bind(this),
                  setDragPosition: xe.setDragPosition.bind(this),
                  getPointerPosition: xe.getPointerPosition.bind(this),
                  onDragStart: xe.onDragStart.bind(this),
                  onDragMove: xe.onDragMove.bind(this),
                  onDragEnd: xe.onDragEnd.bind(this),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null,
                },
              })
            },
            on: {
              init: function() {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
              },
              update: function() {
                this.scrollbar.updateSize()
              },
              resize: function() {
                this.scrollbar.updateSize()
              },
              observerUpdate: function() {
                this.scrollbar.updateSize()
              },
              setTranslate: function() {
                this.scrollbar.setTranslate()
              },
              setTransition: function(e) {
                this.scrollbar.setTransition(e)
              },
              destroy: function() {
                this.scrollbar.destroy()
              },
            },
          },
          {
            name: 'parallax',
            params: { parallax: { enabled: !1 } },
            create: function() {
              T.extend(this, {
                parallax: {
                  setTransform: ye.setTransform.bind(this),
                  setTranslate: ye.setTranslate.bind(this),
                  setTransition: ye.setTransition.bind(this),
                },
              })
            },
            on: {
              beforeInit: function() {
                this.params.parallax.enabled &&
                  ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0))
              },
              init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
              },
              setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
              },
              setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
              },
            },
          },
          {
            name: 'zoom',
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
              },
            },
            create: function() {
              var e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                }
              'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
                .split(' ')
                .forEach(function(i) {
                  t[i] = Te[i].bind(e)
                }),
                T.extend(e, { zoom: t })
              var i = 1
              Object.defineProperty(e.zoom, 'scale', {
                get: function() {
                  return i
                },
                set: function(t) {
                  if (i !== t) {
                    var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                      a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0
                    e.emit('zoomChange', t, s, a)
                  }
                  i = t
                },
              })
            },
            on: {
              init: function() {
                this.params.zoom.enabled && this.zoom.enable()
              },
              destroy: function() {
                this.zoom.disable()
              },
              touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
              },
              touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
              },
              doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
              },
              transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
              },
              slideChange: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
              },
            },
          },
          {
            name: 'lazy',
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
              },
            },
            create: function() {
              T.extend(this, {
                lazy: { initialImageLoaded: !1, load: Ee.load.bind(this), loadInSlide: Ee.loadInSlide.bind(this) },
              })
            },
            on: {
              beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
              },
              init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
              },
              scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
              },
              resize: function() {
                this.params.lazy.enabled && this.lazy.load()
              },
              scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
              },
              transitionStart: function() {
                this.params.lazy.enabled &&
                  (this.params.lazy.loadOnTransitionStart ||
                    (!this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded)) &&
                  this.lazy.load()
              },
              transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
              },
              slideChange: function() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
              },
            },
          },
          {
            name: 'controller',
            params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
            create: function() {
              T.extend(this, {
                controller: {
                  control: this.params.controller.control,
                  getInterpolateFunction: Ce.getInterpolateFunction.bind(this),
                  setTranslate: Ce.setTranslate.bind(this),
                  setTransition: Ce.setTransition.bind(this),
                },
              })
            },
            on: {
              update: function() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0), delete this.controller.spline)
              },
              resize: function() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0), delete this.controller.spline)
              },
              observerUpdate: function() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0), delete this.controller.spline)
              },
              setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
              },
              setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
              },
            },
          },
          {
            name: 'a11y',
            params: {
              a11y: {
                enabled: !0,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
              },
            },
            create: function() {
              var e = this
              T.extend(e, {
                a11y: {
                  liveRegion: Object(b.a)(
                    '<span class="'.concat(
                      e.params.a11y.notificationClass,
                      '" aria-live="assertive" aria-atomic="true"></span>',
                    ),
                  ),
                },
              }),
                Object.keys(Se).forEach(function(t) {
                  e.a11y[t] = Se[t].bind(e)
                })
            },
            on: {
              init: function() {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
              },
              toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
              },
              fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
              },
              paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
              },
              destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
              },
            },
          },
          {
            name: 'history',
            params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
            create: function() {
              T.extend(this, {
                history: {
                  init: Ae.init.bind(this),
                  setHistory: Ae.setHistory.bind(this),
                  setHistoryPopState: Ae.setHistoryPopState.bind(this),
                  scrollToSlide: Ae.scrollToSlide.bind(this),
                  destroy: Ae.destroy.bind(this),
                },
              })
            },
            on: {
              init: function() {
                this.params.history.enabled && this.history.init()
              },
              destroy: function() {
                this.params.history.enabled && this.history.destroy()
              },
              transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
              },
              slideChange: function() {
                this.history.initialized &&
                  this.params.cssMode &&
                  this.history.setHistory(this.params.history.key, this.activeIndex)
              },
            },
          },
          {
            name: 'hash-navigation',
            params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
            create: function() {
              T.extend(this, {
                hashNavigation: {
                  initialized: !1,
                  init: Me.init.bind(this),
                  destroy: Me.destroy.bind(this),
                  setHash: Me.setHash.bind(this),
                  onHashCange: Me.onHashCange.bind(this),
                },
              })
            },
            on: {
              init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
              },
              destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
              },
              transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
              },
              slideChange: function() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
              },
            },
          },
          {
            name: 'autoplay',
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
              },
            },
            create: function() {
              var e = this
              T.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: ze.run.bind(e),
                  start: ze.start.bind(e),
                  stop: ze.stop.bind(e),
                  pause: ze.pause.bind(e),
                  onVisibilityChange: function() {
                    'hidden' === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                      'visible' === document.visibilityState &&
                        e.autoplay.paused &&
                        (e.autoplay.run(), (e.autoplay.paused = !1))
                  },
                  onTransitionEnd: function(t) {
                    e &&
                      !e.destroyed &&
                      e.$wrapperEl &&
                      t.target === this &&
                      (e.$wrapperEl[0].removeEventListener('transitionend', e.autoplay.onTransitionEnd),
                      e.$wrapperEl[0].removeEventListener('webkitTransitionEnd', e.autoplay.onTransitionEnd),
                      (e.autoplay.paused = !1),
                      e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                  },
                },
              })
            },
            on: {
              init: function() {
                this.params.autoplay.enabled &&
                  (this.autoplay.start(),
                  document.addEventListener('visibilitychange', this.autoplay.onVisibilityChange))
              },
              beforeTransitionStart: function(e, t) {
                this.autoplay.running &&
                  (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
              },
              sliderFirstMove: function() {
                this.autoplay.running &&
                  (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
              },
              touchEnd: function() {
                this.params.cssMode &&
                  this.autoplay.paused &&
                  !this.params.autoplay.disableOnInteraction &&
                  this.autoplay.run()
              },
              destroy: function() {
                this.autoplay.running && this.autoplay.stop(),
                  document.removeEventListener('visibilitychange', this.autoplay.onVisibilityChange)
              },
            },
          },
          {
            name: 'effect-fade',
            params: { fadeEffect: { crossFade: !1 } },
            create: function() {
              T.extend(this, {
                fadeEffect: { setTranslate: ke.setTranslate.bind(this), setTransition: ke.setTransition.bind(this) },
              })
            },
            on: {
              beforeInit: function() {
                if ('fade' === this.params.effect) {
                  this.classNames.push(''.concat(this.params.containerModifierClass, 'fade'))
                  var e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  }
                  T.extend(this.params, e), T.extend(this.originalParams, e)
                }
              },
              setTranslate: function() {
                'fade' === this.params.effect && this.fadeEffect.setTranslate()
              },
              setTransition: function(e) {
                'fade' === this.params.effect && this.fadeEffect.setTransition(e)
              },
            },
          },
          {
            name: 'effect-cube',
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
            create: function() {
              T.extend(this, {
                cubeEffect: { setTranslate: Pe.setTranslate.bind(this), setTransition: Pe.setTransition.bind(this) },
              })
            },
            on: {
              beforeInit: function() {
                if ('cube' === this.params.effect) {
                  this.classNames.push(''.concat(this.params.containerModifierClass, 'cube')),
                    this.classNames.push(''.concat(this.params.containerModifierClass, '3d'))
                  var e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  }
                  T.extend(this.params, e), T.extend(this.originalParams, e)
                }
              },
              setTranslate: function() {
                'cube' === this.params.effect && this.cubeEffect.setTranslate()
              },
              setTransition: function(e) {
                'cube' === this.params.effect && this.cubeEffect.setTransition(e)
              },
            },
          },
          {
            name: 'effect-flip',
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function() {
              T.extend(this, {
                flipEffect: { setTranslate: $e.setTranslate.bind(this), setTransition: $e.setTransition.bind(this) },
              })
            },
            on: {
              beforeInit: function() {
                if ('flip' === this.params.effect) {
                  this.classNames.push(''.concat(this.params.containerModifierClass, 'flip')),
                    this.classNames.push(''.concat(this.params.containerModifierClass, '3d'))
                  var e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  }
                  T.extend(this.params, e), T.extend(this.originalParams, e)
                }
              },
              setTranslate: function() {
                'flip' === this.params.effect && this.flipEffect.setTranslate()
              },
              setTransition: function(e) {
                'flip' === this.params.effect && this.flipEffect.setTransition(e)
              },
            },
          },
          {
            name: 'effect-coverflow',
            params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
            create: function() {
              T.extend(this, {
                coverflowEffect: {
                  setTranslate: Oe.setTranslate.bind(this),
                  setTransition: Oe.setTransition.bind(this),
                },
              })
            },
            on: {
              beforeInit: function() {
                'coverflow' === this.params.effect &&
                  (this.classNames.push(''.concat(this.params.containerModifierClass, 'coverflow')),
                  this.classNames.push(''.concat(this.params.containerModifierClass, '3d')),
                  (this.params.watchSlidesProgress = !0),
                  (this.originalParams.watchSlidesProgress = !0))
              },
              setTranslate: function() {
                'coverflow' === this.params.effect && this.coverflowEffect.setTranslate()
              },
              setTransition: function(e) {
                'coverflow' === this.params.effect && this.coverflowEffect.setTransition(e)
              },
            },
          },
          {
            name: 'thumbs',
            params: {
              thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs',
              },
            },
            create: function() {
              T.extend(this, {
                thumbs: {
                  swiper: null,
                  init: Ie.init.bind(this),
                  update: Ie.update.bind(this),
                  onThumbClick: Ie.onThumbClick.bind(this),
                },
              })
            },
            on: {
              beforeInit: function() {
                var e = this.params.thumbs
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
              },
              slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
              },
              update: function() {
                this.thumbs.swiper && this.thumbs.update()
              },
              resize: function() {
                this.thumbs.swiper && this.thumbs.update()
              },
              observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
              },
              setTransition: function(e) {
                var t = this.thumbs.swiper
                t && t.setTransition(e)
              },
              beforeDestroy: function() {
                var e = this.thumbs.swiper
                e && this.thumbs.swiperCreated && e && e.destroy()
              },
            },
          },
        ]
      void 0 === ne.use && ((ne.use = ne.Class.use), (ne.installModule = ne.Class.installModule)),
        ne.use(Le),
        (t.a = ne)
    },
  },
])