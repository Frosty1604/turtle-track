import {
  Aa as rl,
  Ba as ol,
  Da as il,
  Ea as Co,
  Fa as sl,
  Ga as al,
  J as Bc,
  O as Ss,
  R as Ts,
  U as Vc,
  X as Do,
  Y as Hc,
  a as mo,
  aa as Ns,
  ba as xs,
  ca as $c,
  da as wo,
  e as Qe,
  ea as As,
  f as yo,
  fa as Uc,
  g as Pc,
  ga as bo,
  h as Fc,
  ha as qc,
  ia as zc,
  j as Lc,
  ja as Io,
  k as jc,
  ka as Gc,
  la as ks,
  ma as Wc,
  na as Kc,
  o as vo,
  pa as Eo,
  qa as Zc,
  sa as Qc,
  ta as Yc,
  ua as Xc,
  va as Jc,
  wa as el,
  ya as tl,
  za as nl,
} from './chunk-N6NGTOBN.js';
import { a as Fe, b as Le, c as fg, d as hg } from './chunk-KAT7YFEL.js';
var pp = fg(($u, Uu) => {
  'use strict';
  (function (e, t) {
    typeof $u == 'object' && typeof Uu < 'u'
      ? (Uu.exports = t())
      : typeof define == 'function' && define.amd
        ? define(t)
        : ((e = typeof globalThis < 'u' ? globalThis : e || self).Dexie = t());
  })($u, function () {
    'use strict';
    var e = function (o, s) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (u, l) {
              u.__proto__ = l;
            }) ||
          function (u, l) {
            for (var d in l)
              Object.prototype.hasOwnProperty.call(l, d) && (u[d] = l[d]);
          })(o, s);
      },
      t = function () {
        return (t =
          Object.assign ||
          function (o) {
            for (var s, u = 1, l = arguments.length; u < l; u++)
              for (var d in (s = arguments[u]))
                Object.prototype.hasOwnProperty.call(s, d) && (o[d] = s[d]);
            return o;
          }).apply(this, arguments);
      };
    function n(o, s, u) {
      if (u || arguments.length === 2)
        for (var l, d = 0, p = s.length; d < p; d++)
          (!l && d in s) ||
            ((l = l || Array.prototype.slice.call(s, 0, d))[d] = s[d]);
      return o.concat(l || Array.prototype.slice.call(s));
    }
    var r =
        typeof globalThis < 'u'
          ? globalThis
          : typeof self < 'u'
            ? self
            : typeof window < 'u'
              ? window
              : global,
      i = Object.keys,
      a = Array.isArray;
    function c(o, s) {
      return (
        typeof s != 'object' ||
          i(s).forEach(function (u) {
            o[u] = s[u];
          }),
        o
      );
    }
    typeof Promise > 'u' || r.Promise || (r.Promise = Promise);
    var f = Object.getPrototypeOf,
      h = {}.hasOwnProperty;
    function v(o, s) {
      return h.call(o, s);
    }
    function _(o, s) {
      typeof s == 'function' && (s = s(f(o))),
        (typeof Reflect > 'u' ? i : Reflect.ownKeys)(s).forEach(function (u) {
          O(o, u, s[u]);
        });
    }
    var R = Object.defineProperty;
    function O(o, s, u, l) {
      R(
        o,
        s,
        c(
          u && v(u, 'get') && typeof u.get == 'function'
            ? { get: u.get, set: u.set, configurable: !0 }
            : { value: u, configurable: !0, writable: !0 },
          l,
        ),
      );
    }
    function A(o) {
      return {
        from: function (s) {
          return (
            (o.prototype = Object.create(s.prototype)),
            O(o.prototype, 'constructor', o),
            { extend: _.bind(null, o.prototype) }
          );
        },
      };
    }
    var H = Object.getOwnPropertyDescriptor,
      te = [].slice;
    function Ie(o, s, u) {
      return te.call(o, s, u);
    }
    function ye(o, s) {
      return s(o);
    }
    function He(o) {
      if (!o) throw new Error('Assertion Failed');
    }
    function jt(o) {
      r.setImmediate ? setImmediate(o) : setTimeout(o, 0);
    }
    function Ze(o, s) {
      if (typeof s == 'string' && v(o, s)) return o[s];
      if (!s) return o;
      if (typeof s != 'string') {
        for (var u = [], l = 0, d = s.length; l < d; ++l) {
          var p = Ze(o, s[l]);
          u.push(p);
        }
        return u;
      }
      var g = s.indexOf('.');
      if (g !== -1) {
        var m = o[s.substr(0, g)];
        return m == null ? void 0 : Ze(m, s.substr(g + 1));
      }
    }
    function Ee(o, s, u) {
      if (o && s !== void 0 && !('isFrozen' in Object && Object.isFrozen(o)))
        if (typeof s != 'string' && 'length' in s) {
          He(typeof u != 'string' && 'length' in u);
          for (var l = 0, d = s.length; l < d; ++l) Ee(o, s[l], u[l]);
        } else {
          var p,
            g,
            m = s.indexOf('.');
          m !== -1
            ? ((p = s.substr(0, m)),
              (g = s.substr(m + 1)) === ''
                ? u === void 0
                  ? a(o) && !isNaN(parseInt(p))
                    ? o.splice(p, 1)
                    : delete o[p]
                  : (o[p] = u)
                : Ee((m = !(m = o[p]) || !v(o, p) ? (o[p] = {}) : m), g, u))
            : u === void 0
              ? a(o) && !isNaN(parseInt(s))
                ? o.splice(s, 1)
                : delete o[s]
              : (o[s] = u);
        }
    }
    function Gn(o) {
      var s,
        u = {};
      for (s in o) v(o, s) && (u[s] = o[s]);
      return u;
    }
    var Ap = [].concat;
    function Xu(o) {
      return Ap.apply([], o);
    }
    var ft =
        'BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey'
          .split(',')
          .concat(
            Xu(
              [8, 16, 32, 64].map(function (o) {
                return ['Int', 'Uint', 'Float'].map(function (s) {
                  return s + o + 'Array';
                });
              }),
            ),
          )
          .filter(function (o) {
            return r[o];
          }),
      Ju = new Set(
        ft.map(function (o) {
          return r[o];
        }),
      ),
      Wn = null;
    function Bt(o) {
      return (
        (Wn = new WeakMap()),
        (o = (function s(u) {
          if (!u || typeof u != 'object') return u;
          var l = Wn.get(u);
          if (l) return l;
          if (a(u)) {
            (l = []), Wn.set(u, l);
            for (var d = 0, p = u.length; d < p; ++d) l.push(s(u[d]));
          } else if (Ju.has(u.constructor)) l = u;
          else {
            var g,
              m = f(u);
            for (g in ((l = m === Object.prototype ? {} : Object.create(m)),
            Wn.set(u, l),
            u))
              v(u, g) && (l[g] = s(u[g]));
          }
          return l;
        })(o)),
        (Wn = null),
        o
      );
    }
    var kp = {}.toString;
    function Hi(o) {
      return kp.call(o).slice(8, -1);
    }
    var $i = typeof Symbol < 'u' ? Symbol.iterator : '@@iterator',
      Rp =
        typeof $i == 'symbol'
          ? function (o) {
              var s;
              return o != null && (s = o[$i]) && s.apply(o);
            }
          : function () {
              return null;
            };
    function Vt(o, s) {
      return (s = o.indexOf(s)), 0 <= s && o.splice(s, 1), 0 <= s;
    }
    var gn = {};
    function lt(o) {
      var s, u, l, d;
      if (arguments.length === 1) {
        if (a(o)) return o.slice();
        if (this === gn && typeof o == 'string') return [o];
        if ((d = Rp(o))) {
          for (u = []; !(l = d.next()).done; ) u.push(l.value);
          return u;
        }
        if (o == null) return [o];
        if (typeof (s = o.length) != 'number') return [o];
        for (u = new Array(s); s--; ) u[s] = o[s];
        return u;
      }
      for (s = arguments.length, u = new Array(s); s--; ) u[s] = arguments[s];
      return u;
    }
    var Ui =
        typeof Symbol < 'u'
          ? function (o) {
              return o[Symbol.toStringTag] === 'AsyncFunction';
            }
          : function () {
              return !1;
            },
      Qn = [
        'Unknown',
        'Constraint',
        'Data',
        'TransactionInactive',
        'ReadOnly',
        'Version',
        'NotFound',
        'InvalidState',
        'InvalidAccess',
        'Abort',
        'Timeout',
        'QuotaExceeded',
        'Syntax',
        'DataClone',
      ],
      Ge = [
        'Modify',
        'Bulk',
        'OpenFailed',
        'VersionChange',
        'Schema',
        'Upgrade',
        'InvalidTable',
        'MissingAPI',
        'NoSuchDatabase',
        'InvalidArgument',
        'SubTransaction',
        'Unsupported',
        'Internal',
        'DatabaseClosed',
        'PrematureCommit',
        'ForeignAwait',
      ].concat(Qn),
      Op = {
        VersionChanged: 'Database version changed by other database connection',
        DatabaseClosed: 'Database has been closed',
        Abort: 'Transaction aborted',
        TransactionInactive: 'Transaction has already completed or failed',
        MissingAPI:
          'IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb',
      };
    function mn(o, s) {
      (this.name = o), (this.message = s);
    }
    function ec(o, s) {
      return (
        o +
        '. Errors: ' +
        Object.keys(s)
          .map(function (u) {
            return s[u].toString();
          })
          .filter(function (u, l, d) {
            return d.indexOf(u) === l;
          }).join(`
`)
      );
    }
    function Hr(o, s, u, l) {
      (this.failures = s),
        (this.failedKeys = l),
        (this.successCount = u),
        (this.message = ec(o, s));
    }
    function yn(o, s) {
      (this.name = 'BulkError'),
        (this.failures = Object.keys(s).map(function (u) {
          return s[u];
        })),
        (this.failuresByPos = s),
        (this.message = ec(o, this.failures));
    }
    A(mn)
      .from(Error)
      .extend({
        toString: function () {
          return this.name + ': ' + this.message;
        },
      }),
      A(Hr).from(mn),
      A(yn).from(mn);
    var qi = Ge.reduce(function (o, s) {
        return (o[s] = s + 'Error'), o;
      }, {}),
      Pp = mn,
      G = Ge.reduce(function (o, s) {
        var u = s + 'Error';
        function l(d, p) {
          (this.name = u),
            d
              ? typeof d == 'string'
                ? ((this.message = ''.concat(d).concat(
                    p
                      ? `
 ` + p
                      : '',
                  )),
                  (this.inner = p || null))
                : typeof d == 'object' &&
                  ((this.message = ''.concat(d.name, ' ').concat(d.message)),
                  (this.inner = d))
              : ((this.message = Op[s] || u), (this.inner = null));
        }
        return A(l).from(Pp), (o[s] = l), o;
      }, {});
    (G.Syntax = SyntaxError), (G.Type = TypeError), (G.Range = RangeError);
    var tc = Qn.reduce(function (o, s) {
        return (o[s + 'Error'] = G[s]), o;
      }, {}),
      $r = Ge.reduce(function (o, s) {
        return (
          ['Syntax', 'Type', 'Range'].indexOf(s) === -1 &&
            (o[s + 'Error'] = G[s]),
          o
        );
      }, {});
    function le() {}
    function Kn(o) {
      return o;
    }
    function Fp(o, s) {
      return o == null || o === Kn
        ? s
        : function (u) {
            return s(o(u));
          };
    }
    function Ht(o, s) {
      return function () {
        o.apply(this, arguments), s.apply(this, arguments);
      };
    }
    function Lp(o, s) {
      return o === le
        ? s
        : function () {
            var u = o.apply(this, arguments);
            u !== void 0 && (arguments[0] = u);
            var l = this.onsuccess,
              d = this.onerror;
            (this.onsuccess = null), (this.onerror = null);
            var p = s.apply(this, arguments);
            return (
              l &&
                (this.onsuccess = this.onsuccess ? Ht(l, this.onsuccess) : l),
              d && (this.onerror = this.onerror ? Ht(d, this.onerror) : d),
              p !== void 0 ? p : u
            );
          };
    }
    function jp(o, s) {
      return o === le
        ? s
        : function () {
            o.apply(this, arguments);
            var u = this.onsuccess,
              l = this.onerror;
            (this.onsuccess = this.onerror = null),
              s.apply(this, arguments),
              u &&
                (this.onsuccess = this.onsuccess ? Ht(u, this.onsuccess) : u),
              l && (this.onerror = this.onerror ? Ht(l, this.onerror) : l);
          };
    }
    function Bp(o, s) {
      return o === le
        ? s
        : function (u) {
            var l = o.apply(this, arguments);
            c(u, l);
            var d = this.onsuccess,
              p = this.onerror;
            return (
              (this.onsuccess = null),
              (this.onerror = null),
              (u = s.apply(this, arguments)),
              d &&
                (this.onsuccess = this.onsuccess ? Ht(d, this.onsuccess) : d),
              p && (this.onerror = this.onerror ? Ht(p, this.onerror) : p),
              l === void 0 ? (u === void 0 ? void 0 : u) : c(l, u)
            );
          };
    }
    function Vp(o, s) {
      return o === le
        ? s
        : function () {
            return s.apply(this, arguments) !== !1 && o.apply(this, arguments);
          };
    }
    function zi(o, s) {
      return o === le
        ? s
        : function () {
            var u = o.apply(this, arguments);
            if (u && typeof u.then == 'function') {
              for (var l = this, d = arguments.length, p = new Array(d); d--; )
                p[d] = arguments[d];
              return u.then(function () {
                return s.apply(l, p);
              });
            }
            return s.apply(this, arguments);
          };
    }
    ($r.ModifyError = Hr), ($r.DexieError = mn), ($r.BulkError = yn);
    var et =
      typeof location < 'u' &&
      /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function nc(o) {
      et = o;
    }
    var Zn = {},
      rc = 100,
      ft =
        typeof Promise > 'u'
          ? []
          : (function () {
              var o = Promise.resolve();
              if (typeof crypto > 'u' || !crypto.subtle) return [o, f(o), o];
              var s = crypto.subtle.digest('SHA-512', new Uint8Array([0]));
              return [s, f(s), o];
            })(),
      Qn = ft[0],
      Ge = ft[1],
      ft = ft[2],
      Ge = Ge && Ge.then,
      $t = Qn && Qn.constructor,
      Gi = !!ft,
      Yn = function (o, s) {
        Xn.push([o, s]), Ur && (queueMicrotask($p), (Ur = !1));
      },
      Wi = !0,
      Ur = !0,
      Ut = [],
      qr = [],
      Ki = Kn,
      It = {
        id: 'global',
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: le,
        pgp: !1,
        env: {},
        finalize: le,
      },
      q = It,
      Xn = [],
      qt = 0,
      zr = [];
    function $(o) {
      if (typeof this != 'object')
        throw new TypeError('Promises must be constructed via new');
      (this._listeners = []), (this._lib = !1);
      var s = (this._PSD = q);
      if (typeof o != 'function') {
        if (o !== Zn) throw new TypeError('Not a function');
        return (
          (this._state = arguments[1]),
          (this._value = arguments[2]),
          void (this._state === !1 && Qi(this, this._value))
        );
      }
      (this._state = null),
        (this._value = null),
        ++s.ref,
        (function u(l, d) {
          try {
            d(
              function (p) {
                if (l._state === null) {
                  if (p === l)
                    throw new TypeError(
                      'A promise cannot be resolved with itself.',
                    );
                  var g = l._lib && vn();
                  p && typeof p.then == 'function'
                    ? u(l, function (m, D) {
                        p instanceof $ ? p._then(m, D) : p.then(m, D);
                      })
                    : ((l._state = !0), (l._value = p), ic(l)),
                    g && Dn();
                }
              },
              Qi.bind(null, l),
            );
          } catch (p) {
            Qi(l, p);
          }
        })(this, o);
    }
    var Zi = {
      get: function () {
        var o = q,
          s = Zr;
        function u(l, d) {
          var p = this,
            g = !o.global && (o !== q || s !== Zr),
            m = g && !Ct(),
            D = new $(function (b, C) {
              Yi(p, new oc(ac(l, o, g, m), ac(d, o, g, m), b, C, o));
            });
          return this._consoleTask && (D._consoleTask = this._consoleTask), D;
        }
        return (u.prototype = Zn), u;
      },
      set: function (o) {
        O(
          this,
          'then',
          o && o.prototype === Zn
            ? Zi
            : {
                get: function () {
                  return o;
                },
                set: Zi.set,
              },
        );
      },
    };
    function oc(o, s, u, l, d) {
      (this.onFulfilled = typeof o == 'function' ? o : null),
        (this.onRejected = typeof s == 'function' ? s : null),
        (this.resolve = u),
        (this.reject = l),
        (this.psd = d);
    }
    function Qi(o, s) {
      var u, l;
      qr.push(s),
        o._state === null &&
          ((u = o._lib && vn()),
          (s = Ki(s)),
          (o._state = !1),
          (o._value = s),
          (l = o),
          Ut.some(function (d) {
            return d._value === l._value;
          }) || Ut.push(l),
          ic(o),
          u && Dn());
    }
    function ic(o) {
      var s = o._listeners;
      o._listeners = [];
      for (var u = 0, l = s.length; u < l; ++u) Yi(o, s[u]);
      var d = o._PSD;
      --d.ref || d.finalize(),
        qt === 0 &&
          (++qt,
          Yn(function () {
            --qt == 0 && Xi();
          }, []));
    }
    function Yi(o, s) {
      if (o._state !== null) {
        var u = o._state ? s.onFulfilled : s.onRejected;
        if (u === null) return (o._state ? s.resolve : s.reject)(o._value);
        ++s.psd.ref, ++qt, Yn(Hp, [u, o, s]);
      } else o._listeners.push(s);
    }
    function Hp(o, s, u) {
      try {
        var l,
          d = s._value;
        !s._state && qr.length && (qr = []),
          (l =
            et && s._consoleTask
              ? s._consoleTask.run(function () {
                  return o(d);
                })
              : o(d)),
          s._state ||
            qr.indexOf(d) !== -1 ||
            (function (p) {
              for (var g = Ut.length; g; )
                if (Ut[--g]._value === p._value) return Ut.splice(g, 1);
            })(s),
          u.resolve(l);
      } catch (p) {
        u.reject(p);
      } finally {
        --qt == 0 && Xi(), --u.psd.ref || u.psd.finalize();
      }
    }
    function $p() {
      zt(It, function () {
        vn() && Dn();
      });
    }
    function vn() {
      var o = Wi;
      return (Ur = Wi = !1), o;
    }
    function Dn() {
      var o, s, u;
      do
        for (; 0 < Xn.length; )
          for (o = Xn, Xn = [], u = o.length, s = 0; s < u; ++s) {
            var l = o[s];
            l[0].apply(null, l[1]);
          }
      while (0 < Xn.length);
      Ur = Wi = !0;
    }
    function Xi() {
      var o = Ut;
      (Ut = []),
        o.forEach(function (l) {
          l._PSD.onunhandled.call(null, l._value, l);
        });
      for (var s = zr.slice(0), u = s.length; u; ) s[--u]();
    }
    function Gr(o) {
      return new $(Zn, !1, o);
    }
    function pe(o, s) {
      var u = q;
      return function () {
        var l = vn(),
          d = q;
        try {
          return _t(u, !0), o.apply(this, arguments);
        } catch (p) {
          s && s(p);
        } finally {
          _t(d, !1), l && Dn();
        }
      };
    }
    _($.prototype, {
      then: Zi,
      _then: function (o, s) {
        Yi(this, new oc(null, null, o, s, q));
      },
      catch: function (o) {
        if (arguments.length === 1) return this.then(null, o);
        var s = o,
          u = arguments[1];
        return typeof s == 'function'
          ? this.then(null, function (l) {
              return (l instanceof s ? u : Gr)(l);
            })
          : this.then(null, function (l) {
              return (l && l.name === s ? u : Gr)(l);
            });
      },
      finally: function (o) {
        return this.then(
          function (s) {
            return $.resolve(o()).then(function () {
              return s;
            });
          },
          function (s) {
            return $.resolve(o()).then(function () {
              return Gr(s);
            });
          },
        );
      },
      timeout: function (o, s) {
        var u = this;
        return o < 1 / 0
          ? new $(function (l, d) {
              var p = setTimeout(function () {
                return d(new G.Timeout(s));
              }, o);
              u.then(l, d).finally(clearTimeout.bind(null, p));
            })
          : this;
      },
    }),
      typeof Symbol < 'u' &&
        Symbol.toStringTag &&
        O($.prototype, Symbol.toStringTag, 'Dexie.Promise'),
      (It.env = sc()),
      _($, {
        all: function () {
          var o = lt.apply(null, arguments).map(Qr);
          return new $(function (s, u) {
            o.length === 0 && s([]);
            var l = o.length;
            o.forEach(function (d, p) {
              return $.resolve(d).then(function (g) {
                (o[p] = g), --l || s(o);
              }, u);
            });
          });
        },
        resolve: function (o) {
          return o instanceof $
            ? o
            : o && typeof o.then == 'function'
              ? new $(function (s, u) {
                  o.then(s, u);
                })
              : new $(Zn, !0, o);
        },
        reject: Gr,
        race: function () {
          var o = lt.apply(null, arguments).map(Qr);
          return new $(function (s, u) {
            o.map(function (l) {
              return $.resolve(l).then(s, u);
            });
          });
        },
        PSD: {
          get: function () {
            return q;
          },
          set: function (o) {
            return (q = o);
          },
        },
        totalEchoes: {
          get: function () {
            return Zr;
          },
        },
        newPSD: Et,
        usePSD: zt,
        scheduler: {
          get: function () {
            return Yn;
          },
          set: function (o) {
            Yn = o;
          },
        },
        rejectionMapper: {
          get: function () {
            return Ki;
          },
          set: function (o) {
            Ki = o;
          },
        },
        follow: function (o, s) {
          return new $(function (u, l) {
            return Et(
              function (d, p) {
                var g = q;
                (g.unhandleds = []),
                  (g.onunhandled = p),
                  (g.finalize = Ht(function () {
                    var m,
                      D = this;
                    (m = function () {
                      D.unhandleds.length === 0 ? d() : p(D.unhandleds[0]);
                    }),
                      zr.push(function b() {
                        m(), zr.splice(zr.indexOf(b), 1);
                      }),
                      ++qt,
                      Yn(function () {
                        --qt == 0 && Xi();
                      }, []);
                  }, g.finalize)),
                  o();
              },
              s,
              u,
              l,
            );
          });
        },
      }),
      $t &&
        ($t.allSettled &&
          O($, 'allSettled', function () {
            var o = lt.apply(null, arguments).map(Qr);
            return new $(function (s) {
              o.length === 0 && s([]);
              var u = o.length,
                l = new Array(u);
              o.forEach(function (d, p) {
                return $.resolve(d)
                  .then(
                    function (g) {
                      return (l[p] = { status: 'fulfilled', value: g });
                    },
                    function (g) {
                      return (l[p] = { status: 'rejected', reason: g });
                    },
                  )
                  .then(function () {
                    return --u || s(l);
                  });
              });
            });
          }),
        $t.any &&
          typeof AggregateError < 'u' &&
          O($, 'any', function () {
            var o = lt.apply(null, arguments).map(Qr);
            return new $(function (s, u) {
              o.length === 0 && u(new AggregateError([]));
              var l = o.length,
                d = new Array(l);
              o.forEach(function (p, g) {
                return $.resolve(p).then(
                  function (m) {
                    return s(m);
                  },
                  function (m) {
                    (d[g] = m), --l || u(new AggregateError(d));
                  },
                );
              });
            });
          }),
        $t.withResolvers && ($.withResolvers = $t.withResolvers));
    var we = { awaits: 0, echoes: 0, id: 0 },
      Up = 0,
      Wr = [],
      Kr = 0,
      Zr = 0,
      qp = 0;
    function Et(o, s, u, l) {
      var d = q,
        p = Object.create(d);
      return (
        (p.parent = d),
        (p.ref = 0),
        (p.global = !1),
        (p.id = ++qp),
        It.env,
        (p.env = Gi
          ? {
              Promise: $,
              PromiseProp: { value: $, configurable: !0, writable: !0 },
              all: $.all,
              race: $.race,
              allSettled: $.allSettled,
              any: $.any,
              resolve: $.resolve,
              reject: $.reject,
            }
          : {}),
        s && c(p, s),
        ++d.ref,
        (p.finalize = function () {
          --this.parent.ref || this.parent.finalize();
        }),
        (l = zt(p, o, u, l)),
        p.ref === 0 && p.finalize(),
        l
      );
    }
    function wn() {
      return we.id || (we.id = ++Up), ++we.awaits, (we.echoes += rc), we.id;
    }
    function Ct() {
      return (
        !!we.awaits &&
        (--we.awaits == 0 && (we.id = 0), (we.echoes = we.awaits * rc), !0)
      );
    }
    function Qr(o) {
      return we.echoes && o && o.constructor === $t
        ? (wn(),
          o.then(
            function (s) {
              return Ct(), s;
            },
            function (s) {
              return Ct(), ge(s);
            },
          ))
        : o;
    }
    function zp() {
      var o = Wr[Wr.length - 1];
      Wr.pop(), _t(o, !1);
    }
    function _t(o, s) {
      var u,
        l = q;
      (s ? !we.echoes || (Kr++ && o === q) : !Kr || (--Kr && o === q)) ||
        queueMicrotask(
          s
            ? function (d) {
                ++Zr,
                  (we.echoes && --we.echoes != 0) ||
                    (we.echoes = we.awaits = we.id = 0),
                  Wr.push(q),
                  _t(d, !0);
              }.bind(null, o)
            : zp,
        ),
        o !== q &&
          ((q = o),
          l === It && (It.env = sc()),
          Gi &&
            ((u = It.env.Promise),
            (s = o.env),
            (l.global || o.global) &&
              (Object.defineProperty(r, 'Promise', s.PromiseProp),
              (u.all = s.all),
              (u.race = s.race),
              (u.resolve = s.resolve),
              (u.reject = s.reject),
              s.allSettled && (u.allSettled = s.allSettled),
              s.any && (u.any = s.any))));
    }
    function sc() {
      var o = r.Promise;
      return Gi
        ? {
            Promise: o,
            PromiseProp: Object.getOwnPropertyDescriptor(r, 'Promise'),
            all: o.all,
            race: o.race,
            allSettled: o.allSettled,
            any: o.any,
            resolve: o.resolve,
            reject: o.reject,
          }
        : {};
    }
    function zt(o, s, u, l, d) {
      var p = q;
      try {
        return _t(o, !0), s(u, l, d);
      } finally {
        _t(p, !1);
      }
    }
    function ac(o, s, u, l) {
      return typeof o != 'function'
        ? o
        : function () {
            var d = q;
            u && wn(), _t(s, !0);
            try {
              return o.apply(this, arguments);
            } finally {
              _t(d, !1), l && queueMicrotask(Ct);
            }
          };
    }
    function Ji(o) {
      Promise === $t && we.echoes === 0
        ? Kr === 0
          ? o()
          : enqueueNativeMicroTask(o)
        : setTimeout(o, 0);
    }
    ('' + Ge).indexOf('[native code]') === -1 && (wn = Ct = le);
    var ge = $.reject,
      Gt = '\uFFFF',
      dt =
        'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
      uc = 'String expected.',
      bn = [],
      Yr = '__dbnames',
      es = 'readonly',
      ts = 'readwrite';
    function Wt(o, s) {
      return o
        ? s
          ? function () {
              return o.apply(this, arguments) && s.apply(this, arguments);
            }
          : o
        : s;
    }
    var cc = {
      type: 3,
      lower: -1 / 0,
      lowerOpen: !1,
      upper: [[]],
      upperOpen: !1,
    };
    function Xr(o) {
      return typeof o != 'string' || /\./.test(o)
        ? function (s) {
            return s;
          }
        : function (s) {
            return s[o] === void 0 && o in s && delete (s = Bt(s))[o], s;
          };
    }
    function lc() {
      throw G.Type();
    }
    function oe(o, s) {
      try {
        var u = dc(o),
          l = dc(s);
        if (u !== l)
          return u === 'Array'
            ? 1
            : l === 'Array'
              ? -1
              : u === 'binary'
                ? 1
                : l === 'binary'
                  ? -1
                  : u === 'string'
                    ? 1
                    : l === 'string'
                      ? -1
                      : u === 'Date'
                        ? 1
                        : l !== 'Date'
                          ? NaN
                          : -1;
        switch (u) {
          case 'number':
          case 'Date':
          case 'string':
            return s < o ? 1 : o < s ? -1 : 0;
          case 'binary':
            return (function (d, p) {
              for (
                var g = d.length, m = p.length, D = g < m ? g : m, b = 0;
                b < D;
                ++b
              )
                if (d[b] !== p[b]) return d[b] < p[b] ? -1 : 1;
              return g === m ? 0 : g < m ? -1 : 1;
            })(fc(o), fc(s));
          case 'Array':
            return (function (d, p) {
              for (
                var g = d.length, m = p.length, D = g < m ? g : m, b = 0;
                b < D;
                ++b
              ) {
                var C = oe(d[b], p[b]);
                if (C !== 0) return C;
              }
              return g === m ? 0 : g < m ? -1 : 1;
            })(o, s);
        }
      } catch {}
      return NaN;
    }
    function dc(o) {
      var s = typeof o;
      return s != 'object'
        ? s
        : ArrayBuffer.isView(o)
          ? 'binary'
          : ((o = Hi(o)), o === 'ArrayBuffer' ? 'binary' : o);
    }
    function fc(o) {
      return o instanceof Uint8Array
        ? o
        : ArrayBuffer.isView(o)
          ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
          : new Uint8Array(o);
    }
    var hc =
      ((he.prototype._trans = function (o, s, u) {
        var l = this._tx || q.trans,
          d = this.name,
          p =
            et &&
            typeof console < 'u' &&
            console.createTask &&
            console.createTask(
              'Dexie: '
                .concat(o === 'readonly' ? 'read' : 'write', ' ')
                .concat(this.name),
            );
        function g(b, C, y) {
          if (!y.schema[d])
            throw new G.NotFound('Table ' + d + ' not part of transaction');
          return s(y.idbtrans, y);
        }
        var m = vn();
        try {
          var D =
            l && l.db._novip === this.db._novip
              ? l === q.trans
                ? l._promise(o, g, u)
                : Et(
                    function () {
                      return l._promise(o, g, u);
                    },
                    { trans: l, transless: q.transless || q },
                  )
              : (function b(C, y, S, w) {
                  if (
                    C.idbdb &&
                    (C._state.openComplete || q.letThrough || C._vip)
                  ) {
                    var E = C._createTransaction(y, S, C._dbSchema);
                    try {
                      E.create(), (C._state.PR1398_maxLoop = 3);
                    } catch (M) {
                      return M.name === qi.InvalidState &&
                        C.isOpen() &&
                        0 < --C._state.PR1398_maxLoop
                        ? (console.warn('Dexie: Need to reopen db'),
                          C.close({ disableAutoOpen: !1 }),
                          C.open().then(function () {
                            return b(C, y, S, w);
                          }))
                        : ge(M);
                    }
                    return E._promise(y, function (M, I) {
                      return Et(function () {
                        return (q.trans = E), w(M, I, E);
                      });
                    }).then(function (M) {
                      if (y === 'readwrite')
                        try {
                          E.idbtrans.commit();
                        } catch {}
                      return y === 'readonly'
                        ? M
                        : E._completion.then(function () {
                            return M;
                          });
                    });
                  }
                  if (C._state.openComplete)
                    return ge(new G.DatabaseClosed(C._state.dbOpenError));
                  if (!C._state.isBeingOpened) {
                    if (!C._state.autoOpen) return ge(new G.DatabaseClosed());
                    C.open().catch(le);
                  }
                  return C._state.dbReadyPromise.then(function () {
                    return b(C, y, S, w);
                  });
                })(this.db, o, [this.name], g);
          return (
            p &&
              ((D._consoleTask = p),
              (D = D.catch(function (b) {
                return console.trace(b), ge(b);
              }))),
            D
          );
        } finally {
          m && Dn();
        }
      }),
      (he.prototype.get = function (o, s) {
        var u = this;
        return o && o.constructor === Object
          ? this.where(o).first(s)
          : o == null
            ? ge(new G.Type('Invalid argument to Table.get()'))
            : this._trans('readonly', function (l) {
                return u.core.get({ trans: l, key: o }).then(function (d) {
                  return u.hook.reading.fire(d);
                });
              }).then(s);
      }),
      (he.prototype.where = function (o) {
        if (typeof o == 'string') return new this.db.WhereClause(this, o);
        if (a(o))
          return new this.db.WhereClause(this, '['.concat(o.join('+'), ']'));
        var s = i(o);
        if (s.length === 1) return this.where(s[0]).equals(o[s[0]]);
        var u = this.schema.indexes
          .concat(this.schema.primKey)
          .filter(function (m) {
            if (
              m.compound &&
              s.every(function (b) {
                return 0 <= m.keyPath.indexOf(b);
              })
            ) {
              for (var D = 0; D < s.length; ++D)
                if (s.indexOf(m.keyPath[D]) === -1) return !1;
              return !0;
            }
            return !1;
          })
          .sort(function (m, D) {
            return m.keyPath.length - D.keyPath.length;
          })[0];
        if (u && this.db._maxKey !== Gt) {
          var p = u.keyPath.slice(0, s.length);
          return this.where(p).equals(
            p.map(function (D) {
              return o[D];
            }),
          );
        }
        !u &&
          et &&
          console.warn(
            'The query '
              .concat(JSON.stringify(o), ' on ')
              .concat(this.name, ' would benefit from a ') +
              'compound index ['.concat(s.join('+'), ']'),
          );
        var l = this.schema.idxByName;
        function d(m, D) {
          return oe(m, D) === 0;
        }
        var g = s.reduce(
            function (y, D) {
              var b = y[0],
                C = y[1],
                y = l[D],
                S = o[D];
              return [
                b || y,
                b || !y
                  ? Wt(
                      C,
                      y && y.multi
                        ? function (w) {
                            return (
                              (w = Ze(w, D)),
                              a(w) &&
                                w.some(function (E) {
                                  return d(S, E);
                                })
                            );
                          }
                        : function (w) {
                            return d(S, Ze(w, D));
                          },
                    )
                  : C,
              ];
            },
            [null, null],
          ),
          p = g[0],
          g = g[1];
        return p
          ? this.where(p.name).equals(o[p.keyPath]).filter(g)
          : u
            ? this.filter(g)
            : this.where(s).equals('');
      }),
      (he.prototype.filter = function (o) {
        return this.toCollection().and(o);
      }),
      (he.prototype.count = function (o) {
        return this.toCollection().count(o);
      }),
      (he.prototype.offset = function (o) {
        return this.toCollection().offset(o);
      }),
      (he.prototype.limit = function (o) {
        return this.toCollection().limit(o);
      }),
      (he.prototype.each = function (o) {
        return this.toCollection().each(o);
      }),
      (he.prototype.toArray = function (o) {
        return this.toCollection().toArray(o);
      }),
      (he.prototype.toCollection = function () {
        return new this.db.Collection(new this.db.WhereClause(this));
      }),
      (he.prototype.orderBy = function (o) {
        return new this.db.Collection(
          new this.db.WhereClause(
            this,
            a(o) ? '['.concat(o.join('+'), ']') : o,
          ),
        );
      }),
      (he.prototype.reverse = function () {
        return this.toCollection().reverse();
      }),
      (he.prototype.mapToClass = function (o) {
        var s,
          u = this.db,
          l = this.name;
        function d() {
          return (s !== null && s.apply(this, arguments)) || this;
        }
        (this.schema.mappedClass = o).prototype instanceof lc &&
          ((function (D, b) {
            if (typeof b != 'function' && b !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(b) +
                  ' is not a constructor or null',
              );
            function C() {
              this.constructor = D;
            }
            e(D, b),
              (D.prototype =
                b === null
                  ? Object.create(b)
                  : ((C.prototype = b.prototype), new C()));
          })(d, (s = o)),
          Object.defineProperty(d.prototype, 'db', {
            get: function () {
              return u;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (d.prototype.table = function () {
            return l;
          }),
          (o = d));
        for (var p = new Set(), g = o.prototype; g; g = f(g))
          Object.getOwnPropertyNames(g).forEach(function (D) {
            return p.add(D);
          });
        function m(D) {
          if (!D) return D;
          var b,
            C = Object.create(o.prototype);
          for (b in D)
            if (!p.has(b))
              try {
                C[b] = D[b];
              } catch {}
          return C;
        }
        return (
          this.schema.readHook &&
            this.hook.reading.unsubscribe(this.schema.readHook),
          (this.schema.readHook = m),
          this.hook('reading', m),
          o
        );
      }),
      (he.prototype.defineClass = function () {
        return this.mapToClass(function (o) {
          c(this, o);
        });
      }),
      (he.prototype.add = function (o, s) {
        var u = this,
          l = this.schema.primKey,
          d = l.auto,
          p = l.keyPath,
          g = o;
        return (
          p && d && (g = Xr(p)(o)),
          this._trans('readwrite', function (m) {
            return u.core.mutate({
              trans: m,
              type: 'add',
              keys: s != null ? [s] : null,
              values: [g],
            });
          })
            .then(function (m) {
              return m.numFailures ? $.reject(m.failures[0]) : m.lastResult;
            })
            .then(function (m) {
              if (p)
                try {
                  Ee(o, p, m);
                } catch {}
              return m;
            })
        );
      }),
      (he.prototype.update = function (o, s) {
        return typeof o != 'object' || a(o)
          ? this.where(':id').equals(o).modify(s)
          : ((o = Ze(o, this.schema.primKey.keyPath)),
            o === void 0
              ? ge(
                  new G.InvalidArgument(
                    'Given object does not contain its primary key',
                  ),
                )
              : this.where(':id').equals(o).modify(s));
      }),
      (he.prototype.put = function (o, s) {
        var u = this,
          l = this.schema.primKey,
          d = l.auto,
          p = l.keyPath,
          g = o;
        return (
          p && d && (g = Xr(p)(o)),
          this._trans('readwrite', function (m) {
            return u.core.mutate({
              trans: m,
              type: 'put',
              values: [g],
              keys: s != null ? [s] : null,
            });
          })
            .then(function (m) {
              return m.numFailures ? $.reject(m.failures[0]) : m.lastResult;
            })
            .then(function (m) {
              if (p)
                try {
                  Ee(o, p, m);
                } catch {}
              return m;
            })
        );
      }),
      (he.prototype.delete = function (o) {
        var s = this;
        return this._trans('readwrite', function (u) {
          return s.core.mutate({ trans: u, type: 'delete', keys: [o] });
        }).then(function (u) {
          return u.numFailures ? $.reject(u.failures[0]) : void 0;
        });
      }),
      (he.prototype.clear = function () {
        var o = this;
        return this._trans('readwrite', function (s) {
          return o.core.mutate({ trans: s, type: 'deleteRange', range: cc });
        }).then(function (s) {
          return s.numFailures ? $.reject(s.failures[0]) : void 0;
        });
      }),
      (he.prototype.bulkGet = function (o) {
        var s = this;
        return this._trans('readonly', function (u) {
          return s.core.getMany({ keys: o, trans: u }).then(function (l) {
            return l.map(function (d) {
              return s.hook.reading.fire(d);
            });
          });
        });
      }),
      (he.prototype.bulkAdd = function (o, s, u) {
        var l = this,
          d = Array.isArray(s) ? s : void 0,
          p = (u = u || (d ? void 0 : s)) ? u.allKeys : void 0;
        return this._trans('readwrite', function (g) {
          var b = l.schema.primKey,
            m = b.auto,
            b = b.keyPath;
          if (b && d)
            throw new G.InvalidArgument(
              'bulkAdd(): keys argument invalid on tables with inbound keys',
            );
          if (d && d.length !== o.length)
            throw new G.InvalidArgument(
              'Arguments objects and keys must have the same length',
            );
          var D = o.length,
            b = b && m ? o.map(Xr(b)) : o;
          return l.core
            .mutate({
              trans: g,
              type: 'add',
              keys: d,
              values: b,
              wantResults: p,
            })
            .then(function (E) {
              var y = E.numFailures,
                S = E.results,
                w = E.lastResult,
                E = E.failures;
              if (y === 0) return p ? S : w;
              throw new yn(
                ''
                  .concat(l.name, '.bulkAdd(): ')
                  .concat(y, ' of ')
                  .concat(D, ' operations failed'),
                E,
              );
            });
        });
      }),
      (he.prototype.bulkPut = function (o, s, u) {
        var l = this,
          d = Array.isArray(s) ? s : void 0,
          p = (u = u || (d ? void 0 : s)) ? u.allKeys : void 0;
        return this._trans('readwrite', function (g) {
          var b = l.schema.primKey,
            m = b.auto,
            b = b.keyPath;
          if (b && d)
            throw new G.InvalidArgument(
              'bulkPut(): keys argument invalid on tables with inbound keys',
            );
          if (d && d.length !== o.length)
            throw new G.InvalidArgument(
              'Arguments objects and keys must have the same length',
            );
          var D = o.length,
            b = b && m ? o.map(Xr(b)) : o;
          return l.core
            .mutate({
              trans: g,
              type: 'put',
              keys: d,
              values: b,
              wantResults: p,
            })
            .then(function (E) {
              var y = E.numFailures,
                S = E.results,
                w = E.lastResult,
                E = E.failures;
              if (y === 0) return p ? S : w;
              throw new yn(
                ''
                  .concat(l.name, '.bulkPut(): ')
                  .concat(y, ' of ')
                  .concat(D, ' operations failed'),
                E,
              );
            });
        });
      }),
      (he.prototype.bulkUpdate = function (o) {
        var s = this,
          u = this.core,
          l = o.map(function (g) {
            return g.key;
          }),
          d = o.map(function (g) {
            return g.changes;
          }),
          p = [];
        return this._trans('readwrite', function (g) {
          return u
            .getMany({ trans: g, keys: l, cache: 'clone' })
            .then(function (m) {
              var D = [],
                b = [];
              o.forEach(function (y, S) {
                var w = y.key,
                  E = y.changes,
                  M = m[S];
                if (M) {
                  for (var I = 0, T = Object.keys(E); I < T.length; I++) {
                    var N = T[I],
                      x = E[N];
                    if (N === s.schema.primKey.keyPath) {
                      if (oe(x, w) !== 0)
                        throw new G.Constraint(
                          'Cannot update primary key in bulkUpdate()',
                        );
                    } else Ee(M, N, x);
                  }
                  p.push(S), D.push(w), b.push(M);
                }
              });
              var C = D.length;
              return u
                .mutate({
                  trans: g,
                  type: 'put',
                  keys: D,
                  values: b,
                  updates: { keys: l, changeSpecs: d },
                })
                .then(function (y) {
                  var S = y.numFailures,
                    w = y.failures;
                  if (S === 0) return C;
                  for (var E = 0, M = Object.keys(w); E < M.length; E++) {
                    var I,
                      T = M[E],
                      N = p[Number(T)];
                    N != null && ((I = w[T]), delete w[T], (w[N] = I));
                  }
                  throw new yn(
                    ''
                      .concat(s.name, '.bulkUpdate(): ')
                      .concat(S, ' of ')
                      .concat(C, ' operations failed'),
                    w,
                  );
                });
            });
        });
      }),
      (he.prototype.bulkDelete = function (o) {
        var s = this,
          u = o.length;
        return this._trans('readwrite', function (l) {
          return s.core.mutate({ trans: l, type: 'delete', keys: o });
        }).then(function (g) {
          var d = g.numFailures,
            p = g.lastResult,
            g = g.failures;
          if (d === 0) return p;
          throw new yn(
            ''
              .concat(s.name, '.bulkDelete(): ')
              .concat(d, ' of ')
              .concat(u, ' operations failed'),
            g,
          );
        });
      }),
      he);
    function he() {}
    function Jn(o) {
      function s(g, m) {
        if (m) {
          for (var D = arguments.length, b = new Array(D - 1); --D; )
            b[D - 1] = arguments[D];
          return u[g].subscribe.apply(null, b), o;
        }
        if (typeof g == 'string') return u[g];
      }
      var u = {};
      s.addEventType = p;
      for (var l = 1, d = arguments.length; l < d; ++l) p(arguments[l]);
      return s;
      function p(g, m, D) {
        if (typeof g != 'object') {
          var b;
          m = m || Vp;
          var C = {
            subscribers: [],
            fire: (D = D || le),
            subscribe: function (y) {
              C.subscribers.indexOf(y) === -1 &&
                (C.subscribers.push(y), (C.fire = m(C.fire, y)));
            },
            unsubscribe: function (y) {
              (C.subscribers = C.subscribers.filter(function (S) {
                return S !== y;
              })),
                (C.fire = C.subscribers.reduce(m, D));
            },
          };
          return (u[g] = s[g] = C);
        }
        i((b = g)).forEach(function (y) {
          var S = b[y];
          if (a(S)) p(y, b[y][0], b[y][1]);
          else {
            if (S !== 'asap')
              throw new G.InvalidArgument('Invalid event config');
            var w = p(y, Kn, function () {
              for (var E = arguments.length, M = new Array(E); E--; )
                M[E] = arguments[E];
              w.subscribers.forEach(function (I) {
                jt(function () {
                  I.apply(null, M);
                });
              });
            });
          }
        });
      }
    }
    function er(o, s) {
      return A(s).from({ prototype: o }), s;
    }
    function In(o, s) {
      return (
        !(o.filter || o.algorithm || o.or) &&
        (s ? o.justLimit : !o.replayFilter)
      );
    }
    function ns(o, s) {
      o.filter = Wt(o.filter, s);
    }
    function rs(o, s, u) {
      var l = o.replayFilter;
      (o.replayFilter = l
        ? function () {
            return Wt(l(), s());
          }
        : s),
        (o.justLimit = u && !l);
    }
    function Jr(o, s) {
      if (o.isPrimKey) return s.primaryKey;
      var u = s.getIndexByKeyPath(o.index);
      if (!u)
        throw new G.Schema(
          'KeyPath ' +
            o.index +
            ' on object store ' +
            s.name +
            ' is not indexed',
        );
      return u;
    }
    function pc(o, s, u) {
      var l = Jr(o, s.schema);
      return s.openCursor({
        trans: u,
        values: !o.keysOnly,
        reverse: o.dir === 'prev',
        unique: !!o.unique,
        query: { index: l, range: o.range },
      });
    }
    function eo(o, s, u, l) {
      var d = o.replayFilter ? Wt(o.filter, o.replayFilter()) : o.filter;
      if (o.or) {
        var p = {},
          g = function (m, D, b) {
            var C, y;
            (d &&
              !d(
                D,
                b,
                function (S) {
                  return D.stop(S);
                },
                function (S) {
                  return D.fail(S);
                },
              )) ||
              ((y = '' + (C = D.primaryKey)) == '[object ArrayBuffer]' &&
                (y = '' + new Uint8Array(C)),
              v(p, y) || ((p[y] = !0), s(m, D, b)));
          };
        return Promise.all([
          o.or._iterate(g, u),
          gc(pc(o, l, u), o.algorithm, g, !o.keysOnly && o.valueMapper),
        ]);
      }
      return gc(
        pc(o, l, u),
        Wt(o.algorithm, d),
        s,
        !o.keysOnly && o.valueMapper,
      );
    }
    function gc(o, s, u, l) {
      var d = pe(
        l
          ? function (p, g, m) {
              return u(l(p), g, m);
            }
          : u,
      );
      return o.then(function (p) {
        if (p)
          return p.start(function () {
            var g = function () {
              return p.continue();
            };
            (s &&
              !s(
                p,
                function (m) {
                  return (g = m);
                },
                function (m) {
                  p.stop(m), (g = le);
                },
                function (m) {
                  p.fail(m), (g = le);
                },
              )) ||
              d(p.value, p, function (m) {
                return (g = m);
              }),
              g();
          });
      });
    }
    var ft = Symbol(),
      tr =
        ((mc.prototype.execute = function (o) {
          if (this.add !== void 0) {
            var s = this.add;
            if (a(s)) return n(n([], a(o) ? o : [], !0), s, !0).sort();
            if (typeof s == 'number') return (Number(o) || 0) + s;
            if (typeof s == 'bigint')
              try {
                return BigInt(o) + s;
              } catch {
                return BigInt(0) + s;
              }
            throw new TypeError('Invalid term '.concat(s));
          }
          if (this.remove !== void 0) {
            var u = this.remove;
            if (a(u))
              return a(o)
                ? o
                    .filter(function (l) {
                      return !u.includes(l);
                    })
                    .sort()
                : [];
            if (typeof u == 'number') return Number(o) - u;
            if (typeof u == 'bigint')
              try {
                return BigInt(o) - u;
              } catch {
                return BigInt(0) - u;
              }
            throw new TypeError('Invalid subtrahend '.concat(u));
          }
          return (
            (s =
              (s = this.replacePrefix) === null || s === void 0
                ? void 0
                : s[0]),
            s && typeof o == 'string' && o.startsWith(s)
              ? this.replacePrefix[1] + o.substring(s.length)
              : o
          );
        }),
        mc);
    function mc(o) {
      Object.assign(this, o);
    }
    var Gp =
      ((ie.prototype._read = function (o, s) {
        var u = this._ctx;
        return u.error
          ? u.table._trans(null, ge.bind(null, u.error))
          : u.table._trans('readonly', o).then(s);
      }),
      (ie.prototype._write = function (o) {
        var s = this._ctx;
        return s.error
          ? s.table._trans(null, ge.bind(null, s.error))
          : s.table._trans('readwrite', o, 'locked');
      }),
      (ie.prototype._addAlgorithm = function (o) {
        var s = this._ctx;
        s.algorithm = Wt(s.algorithm, o);
      }),
      (ie.prototype._iterate = function (o, s) {
        return eo(this._ctx, o, s, this._ctx.table.core);
      }),
      (ie.prototype.clone = function (o) {
        var s = Object.create(this.constructor.prototype),
          u = Object.create(this._ctx);
        return o && c(u, o), (s._ctx = u), s;
      }),
      (ie.prototype.raw = function () {
        return (this._ctx.valueMapper = null), this;
      }),
      (ie.prototype.each = function (o) {
        var s = this._ctx;
        return this._read(function (u) {
          return eo(s, o, u, s.table.core);
        });
      }),
      (ie.prototype.count = function (o) {
        var s = this;
        return this._read(function (u) {
          var l = s._ctx,
            d = l.table.core;
          if (In(l, !0))
            return d
              .count({
                trans: u,
                query: { index: Jr(l, d.schema), range: l.range },
              })
              .then(function (g) {
                return Math.min(g, l.limit);
              });
          var p = 0;
          return eo(
            l,
            function () {
              return ++p, !1;
            },
            u,
            d,
          ).then(function () {
            return p;
          });
        }).then(o);
      }),
      (ie.prototype.sortBy = function (o, s) {
        var u = o.split('.').reverse(),
          l = u[0],
          d = u.length - 1;
        function p(D, b) {
          return b ? p(D[u[b]], b - 1) : D[l];
        }
        var g = this._ctx.dir === 'next' ? 1 : -1;
        function m(D, b) {
          return oe(p(D, d), p(b, d)) * g;
        }
        return this.toArray(function (D) {
          return D.sort(m);
        }).then(s);
      }),
      (ie.prototype.toArray = function (o) {
        var s = this;
        return this._read(function (u) {
          var l = s._ctx;
          if (l.dir === 'next' && In(l, !0) && 0 < l.limit) {
            var d = l.valueMapper,
              p = Jr(l, l.table.core.schema);
            return l.table.core
              .query({
                trans: u,
                limit: l.limit,
                values: !0,
                query: { index: p, range: l.range },
              })
              .then(function (m) {
                return (m = m.result), d ? m.map(d) : m;
              });
          }
          var g = [];
          return eo(
            l,
            function (m) {
              return g.push(m);
            },
            u,
            l.table.core,
          ).then(function () {
            return g;
          });
        }, o);
      }),
      (ie.prototype.offset = function (o) {
        var s = this._ctx;
        return (
          o <= 0 ||
            ((s.offset += o),
            In(s)
              ? rs(s, function () {
                  var u = o;
                  return function (l, d) {
                    return (
                      u === 0 ||
                      (u === 1
                        ? --u
                        : d(function () {
                            l.advance(u), (u = 0);
                          }),
                      !1)
                    );
                  };
                })
              : rs(s, function () {
                  var u = o;
                  return function () {
                    return --u < 0;
                  };
                })),
          this
        );
      }),
      (ie.prototype.limit = function (o) {
        return (
          (this._ctx.limit = Math.min(this._ctx.limit, o)),
          rs(
            this._ctx,
            function () {
              var s = o;
              return function (u, l, d) {
                return --s <= 0 && l(d), 0 <= s;
              };
            },
            !0,
          ),
          this
        );
      }),
      (ie.prototype.until = function (o, s) {
        return (
          ns(this._ctx, function (u, l, d) {
            return !o(u.value) || (l(d), s);
          }),
          this
        );
      }),
      (ie.prototype.first = function (o) {
        return this.limit(1)
          .toArray(function (s) {
            return s[0];
          })
          .then(o);
      }),
      (ie.prototype.last = function (o) {
        return this.reverse().first(o);
      }),
      (ie.prototype.filter = function (o) {
        var s;
        return (
          ns(this._ctx, function (u) {
            return o(u.value);
          }),
          ((s = this._ctx).isMatch = Wt(s.isMatch, o)),
          this
        );
      }),
      (ie.prototype.and = function (o) {
        return this.filter(o);
      }),
      (ie.prototype.or = function (o) {
        return new this.db.WhereClause(this._ctx.table, o, this);
      }),
      (ie.prototype.reverse = function () {
        return (
          (this._ctx.dir = this._ctx.dir === 'prev' ? 'next' : 'prev'),
          this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
          this
        );
      }),
      (ie.prototype.desc = function () {
        return this.reverse();
      }),
      (ie.prototype.eachKey = function (o) {
        var s = this._ctx;
        return (
          (s.keysOnly = !s.isMatch),
          this.each(function (u, l) {
            o(l.key, l);
          })
        );
      }),
      (ie.prototype.eachUniqueKey = function (o) {
        return (this._ctx.unique = 'unique'), this.eachKey(o);
      }),
      (ie.prototype.eachPrimaryKey = function (o) {
        var s = this._ctx;
        return (
          (s.keysOnly = !s.isMatch),
          this.each(function (u, l) {
            o(l.primaryKey, l);
          })
        );
      }),
      (ie.prototype.keys = function (o) {
        var s = this._ctx;
        s.keysOnly = !s.isMatch;
        var u = [];
        return this.each(function (l, d) {
          u.push(d.key);
        })
          .then(function () {
            return u;
          })
          .then(o);
      }),
      (ie.prototype.primaryKeys = function (o) {
        var s = this._ctx;
        if (s.dir === 'next' && In(s, !0) && 0 < s.limit)
          return this._read(function (l) {
            var d = Jr(s, s.table.core.schema);
            return s.table.core.query({
              trans: l,
              values: !1,
              limit: s.limit,
              query: { index: d, range: s.range },
            });
          })
            .then(function (l) {
              return l.result;
            })
            .then(o);
        s.keysOnly = !s.isMatch;
        var u = [];
        return this.each(function (l, d) {
          u.push(d.primaryKey);
        })
          .then(function () {
            return u;
          })
          .then(o);
      }),
      (ie.prototype.uniqueKeys = function (o) {
        return (this._ctx.unique = 'unique'), this.keys(o);
      }),
      (ie.prototype.firstKey = function (o) {
        return this.limit(1)
          .keys(function (s) {
            return s[0];
          })
          .then(o);
      }),
      (ie.prototype.lastKey = function (o) {
        return this.reverse().firstKey(o);
      }),
      (ie.prototype.distinct = function () {
        var o = this._ctx,
          o = o.index && o.table.schema.idxByName[o.index];
        if (!o || !o.multi) return this;
        var s = {};
        return (
          ns(this._ctx, function (d) {
            var l = d.primaryKey.toString(),
              d = v(s, l);
            return (s[l] = !0), !d;
          }),
          this
        );
      }),
      (ie.prototype.modify = function (o) {
        var s = this,
          u = this._ctx;
        return this._write(function (l) {
          var d, p, g;
          g =
            typeof o == 'function'
              ? o
              : ((d = i(o)),
                (p = d.length),
                function (I) {
                  for (var T = !1, N = 0; N < p; ++N) {
                    var x = d[N],
                      k = o[x],
                      P = Ze(I, x);
                    k instanceof tr
                      ? (Ee(I, x, k.execute(P)), (T = !0))
                      : P !== k && (Ee(I, x, k), (T = !0));
                  }
                  return T;
                });
          var m = u.table.core,
            y = m.schema.primaryKey,
            D = y.outbound,
            b = y.extractKey,
            C = 200,
            y = s.db._options.modifyChunkSize;
          y && (C = typeof y == 'object' ? y[m.name] || y['*'] || 200 : y);
          function S(I, x) {
            var N = x.failures,
              x = x.numFailures;
            E += I - x;
            for (var k = 0, P = i(N); k < P.length; k++) {
              var B = P[k];
              w.push(N[B]);
            }
          }
          var w = [],
            E = 0,
            M = [];
          return s
            .clone()
            .primaryKeys()
            .then(function (I) {
              function T(x) {
                var k = Math.min(C, I.length - x);
                return m
                  .getMany({
                    trans: l,
                    keys: I.slice(x, x + k),
                    cache: 'immutable',
                  })
                  .then(function (P) {
                    for (
                      var B = [], F = [], L = D ? [] : null, V = [], j = 0;
                      j < k;
                      ++j
                    ) {
                      var U = P[j],
                        Z = { value: Bt(U), primKey: I[x + j] };
                      g.call(Z, Z.value, Z) !== !1 &&
                        (Z.value == null
                          ? V.push(I[x + j])
                          : D || oe(b(U), b(Z.value)) === 0
                            ? (F.push(Z.value), D && L.push(I[x + j]))
                            : (V.push(I[x + j]), B.push(Z.value)));
                    }
                    return Promise.resolve(
                      0 < B.length &&
                        m
                          .mutate({ trans: l, type: 'add', values: B })
                          .then(function (X) {
                            for (var J in X.failures) V.splice(parseInt(J), 1);
                            S(B.length, X);
                          }),
                    )
                      .then(function () {
                        return (
                          (0 < F.length || (N && typeof o == 'object')) &&
                          m
                            .mutate({
                              trans: l,
                              type: 'put',
                              keys: L,
                              values: F,
                              criteria: N,
                              changeSpec: typeof o != 'function' && o,
                              isAdditionalChunk: 0 < x,
                            })
                            .then(function (X) {
                              return S(F.length, X);
                            })
                        );
                      })
                      .then(function () {
                        return (
                          (0 < V.length || (N && o === os)) &&
                          m
                            .mutate({
                              trans: l,
                              type: 'delete',
                              keys: V,
                              criteria: N,
                              isAdditionalChunk: 0 < x,
                            })
                            .then(function (X) {
                              return S(V.length, X);
                            })
                        );
                      })
                      .then(function () {
                        return I.length > x + k && T(x + C);
                      });
                  });
              }
              var N = In(u) &&
                u.limit === 1 / 0 &&
                (typeof o != 'function' || o === os) && {
                  index: u.index,
                  range: u.range,
                };
              return T(0).then(function () {
                if (0 < w.length)
                  throw new Hr('Error modifying one or more objects', w, E, M);
                return I.length;
              });
            });
        });
      }),
      (ie.prototype.delete = function () {
        var o = this._ctx,
          s = o.range;
        return In(o) && (o.isPrimKey || s.type === 3)
          ? this._write(function (u) {
              var l = o.table.core.schema.primaryKey,
                d = s;
              return o.table.core
                .count({ trans: u, query: { index: l, range: d } })
                .then(function (p) {
                  return o.table.core
                    .mutate({ trans: u, type: 'deleteRange', range: d })
                    .then(function (g) {
                      var m = g.failures;
                      if ((g.lastResult, g.results, (g = g.numFailures), g))
                        throw new Hr(
                          'Could not delete some values',
                          Object.keys(m).map(function (D) {
                            return m[D];
                          }),
                          p - g,
                        );
                      return p - g;
                    });
                });
            })
          : this.modify(os);
      }),
      ie);
    function ie() {}
    var os = function (o, s) {
      return (s.value = null);
    };
    function Wp(o, s) {
      return o < s ? -1 : o === s ? 0 : 1;
    }
    function Kp(o, s) {
      return s < o ? -1 : o === s ? 0 : 1;
    }
    function $e(o, s, u) {
      return (
        (o = o instanceof vc ? new o.Collection(o) : o),
        (o._ctx.error = new (u || TypeError)(s)),
        o
      );
    }
    function En(o) {
      return new o.Collection(o, function () {
        return yc('');
      }).limit(0);
    }
    function to(o, s, u, l) {
      var d,
        p,
        g,
        m,
        D,
        b,
        C,
        y = u.length;
      if (
        !u.every(function (E) {
          return typeof E == 'string';
        })
      )
        return $e(o, uc);
      function S(E) {
        (d =
          E === 'next'
            ? function (I) {
                return I.toUpperCase();
              }
            : function (I) {
                return I.toLowerCase();
              }),
          (p =
            E === 'next'
              ? function (I) {
                  return I.toLowerCase();
                }
              : function (I) {
                  return I.toUpperCase();
                }),
          (g = E === 'next' ? Wp : Kp);
        var M = u
          .map(function (I) {
            return { lower: p(I), upper: d(I) };
          })
          .sort(function (I, T) {
            return g(I.lower, T.lower);
          });
        (m = M.map(function (I) {
          return I.upper;
        })),
          (D = M.map(function (I) {
            return I.lower;
          })),
          (C = (b = E) === 'next' ? '' : l);
      }
      S('next'),
        (o = new o.Collection(o, function () {
          return Mt(m[0], D[y - 1] + l);
        })),
        (o._ondirectionchange = function (E) {
          S(E);
        });
      var w = 0;
      return (
        o._addAlgorithm(function (E, M, I) {
          var T = E.key;
          if (typeof T != 'string') return !1;
          var N = p(T);
          if (s(N, D, w)) return !0;
          for (var x = null, k = w; k < y; ++k) {
            var P = (function (B, F, L, V, j, U) {
              for (
                var Z = Math.min(B.length, V.length), X = -1, J = 0;
                J < Z;
                ++J
              ) {
                var Ue = F[J];
                if (Ue !== V[J])
                  return j(B[J], L[J]) < 0
                    ? B.substr(0, J) + L[J] + L.substr(J + 1)
                    : j(B[J], V[J]) < 0
                      ? B.substr(0, J) + V[J] + L.substr(J + 1)
                      : 0 <= X
                        ? B.substr(0, X) + F[X] + L.substr(X + 1)
                        : null;
                j(B[J], Ue) < 0 && (X = J);
              }
              return Z < V.length && U === 'next'
                ? B + L.substr(B.length)
                : Z < B.length && U === 'prev'
                  ? B.substr(0, L.length)
                  : X < 0
                    ? null
                    : B.substr(0, X) + V[X] + L.substr(X + 1);
            })(T, N, m[k], D[k], g, b);
            P === null && x === null
              ? (w = k + 1)
              : (x === null || 0 < g(x, P)) && (x = P);
          }
          return (
            M(
              x !== null
                ? function () {
                    E.continue(x + C);
                  }
                : I,
            ),
            !1
          );
        }),
        o
      );
    }
    function Mt(o, s, u, l) {
      return { type: 2, lower: o, upper: s, lowerOpen: u, upperOpen: l };
    }
    function yc(o) {
      return { type: 1, lower: o, upper: o };
    }
    var vc =
      (Object.defineProperty(be.prototype, 'Collection', {
        get: function () {
          return this._ctx.table.db.Collection;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (be.prototype.between = function (o, s, u, l) {
        (u = u !== !1), (l = l === !0);
        try {
          return 0 < this._cmp(o, s) ||
            (this._cmp(o, s) === 0 && (u || l) && (!u || !l))
            ? En(this)
            : new this.Collection(this, function () {
                return Mt(o, s, !u, !l);
              });
        } catch {
          return $e(this, dt);
        }
      }),
      (be.prototype.equals = function (o) {
        return o == null
          ? $e(this, dt)
          : new this.Collection(this, function () {
              return yc(o);
            });
      }),
      (be.prototype.above = function (o) {
        return o == null
          ? $e(this, dt)
          : new this.Collection(this, function () {
              return Mt(o, void 0, !0);
            });
      }),
      (be.prototype.aboveOrEqual = function (o) {
        return o == null
          ? $e(this, dt)
          : new this.Collection(this, function () {
              return Mt(o, void 0, !1);
            });
      }),
      (be.prototype.below = function (o) {
        return o == null
          ? $e(this, dt)
          : new this.Collection(this, function () {
              return Mt(void 0, o, !1, !0);
            });
      }),
      (be.prototype.belowOrEqual = function (o) {
        return o == null
          ? $e(this, dt)
          : new this.Collection(this, function () {
              return Mt(void 0, o);
            });
      }),
      (be.prototype.startsWith = function (o) {
        return typeof o != 'string'
          ? $e(this, uc)
          : this.between(o, o + Gt, !0, !0);
      }),
      (be.prototype.startsWithIgnoreCase = function (o) {
        return o === ''
          ? this.startsWith(o)
          : to(
              this,
              function (s, u) {
                return s.indexOf(u[0]) === 0;
              },
              [o],
              Gt,
            );
      }),
      (be.prototype.equalsIgnoreCase = function (o) {
        return to(
          this,
          function (s, u) {
            return s === u[0];
          },
          [o],
          '',
        );
      }),
      (be.prototype.anyOfIgnoreCase = function () {
        var o = lt.apply(gn, arguments);
        return o.length === 0
          ? En(this)
          : to(
              this,
              function (s, u) {
                return u.indexOf(s) !== -1;
              },
              o,
              '',
            );
      }),
      (be.prototype.startsWithAnyOfIgnoreCase = function () {
        var o = lt.apply(gn, arguments);
        return o.length === 0
          ? En(this)
          : to(
              this,
              function (s, u) {
                return u.some(function (l) {
                  return s.indexOf(l) === 0;
                });
              },
              o,
              Gt,
            );
      }),
      (be.prototype.anyOf = function () {
        var o = this,
          s = lt.apply(gn, arguments),
          u = this._cmp;
        try {
          s.sort(u);
        } catch {
          return $e(this, dt);
        }
        if (s.length === 0) return En(this);
        var l = new this.Collection(this, function () {
          return Mt(s[0], s[s.length - 1]);
        });
        l._ondirectionchange = function (p) {
          (u = p === 'next' ? o._ascending : o._descending), s.sort(u);
        };
        var d = 0;
        return (
          l._addAlgorithm(function (p, g, m) {
            for (var D = p.key; 0 < u(D, s[d]); )
              if (++d === s.length) return g(m), !1;
            return (
              u(D, s[d]) === 0 ||
              (g(function () {
                p.continue(s[d]);
              }),
              !1)
            );
          }),
          l
        );
      }),
      (be.prototype.notEqual = function (o) {
        return this.inAnyRange(
          [
            [-1 / 0, o],
            [o, this.db._maxKey],
          ],
          { includeLowers: !1, includeUppers: !1 },
        );
      }),
      (be.prototype.noneOf = function () {
        var o = lt.apply(gn, arguments);
        if (o.length === 0) return new this.Collection(this);
        try {
          o.sort(this._ascending);
        } catch {
          return $e(this, dt);
        }
        var s = o.reduce(function (u, l) {
          return u ? u.concat([[u[u.length - 1][1], l]]) : [[-1 / 0, l]];
        }, null);
        return (
          s.push([o[o.length - 1], this.db._maxKey]),
          this.inAnyRange(s, { includeLowers: !1, includeUppers: !1 })
        );
      }),
      (be.prototype.inAnyRange = function (T, s) {
        var u = this,
          l = this._cmp,
          d = this._ascending,
          p = this._descending,
          g = this._min,
          m = this._max;
        if (T.length === 0) return En(this);
        if (
          !T.every(function (N) {
            return N[0] !== void 0 && N[1] !== void 0 && d(N[0], N[1]) <= 0;
          })
        )
          return $e(
            this,
            'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
            G.InvalidArgument,
          );
        var D = !s || s.includeLowers !== !1,
          b = s && s.includeUppers === !0,
          C,
          y = d;
        function S(N, x) {
          return y(N[0], x[0]);
        }
        try {
          (C = T.reduce(function (N, x) {
            for (var k = 0, P = N.length; k < P; ++k) {
              var B = N[k];
              if (l(x[0], B[1]) < 0 && 0 < l(x[1], B[0])) {
                (B[0] = g(B[0], x[0])), (B[1] = m(B[1], x[1]));
                break;
              }
            }
            return k === P && N.push(x), N;
          }, [])).sort(S);
        } catch {
          return $e(this, dt);
        }
        var w = 0,
          E = b
            ? function (N) {
                return 0 < d(N, C[w][1]);
              }
            : function (N) {
                return 0 <= d(N, C[w][1]);
              },
          M = D
            ? function (N) {
                return 0 < p(N, C[w][0]);
              }
            : function (N) {
                return 0 <= p(N, C[w][0]);
              },
          I = E,
          T = new this.Collection(this, function () {
            return Mt(C[0][0], C[C.length - 1][1], !D, !b);
          });
        return (
          (T._ondirectionchange = function (N) {
            (y = N === 'next' ? ((I = E), d) : ((I = M), p)), C.sort(S);
          }),
          T._addAlgorithm(function (N, x, k) {
            for (var P, B = N.key; I(B); )
              if (++w === C.length) return x(k), !1;
            return (
              (!E((P = B)) && !M(P)) ||
              (u._cmp(B, C[w][1]) === 0 ||
                u._cmp(B, C[w][0]) === 0 ||
                x(function () {
                  y === d ? N.continue(C[w][0]) : N.continue(C[w][1]);
                }),
              !1)
            );
          }),
          T
        );
      }),
      (be.prototype.startsWithAnyOf = function () {
        var o = lt.apply(gn, arguments);
        return o.every(function (s) {
          return typeof s == 'string';
        })
          ? o.length === 0
            ? En(this)
            : this.inAnyRange(
                o.map(function (s) {
                  return [s, s + Gt];
                }),
              )
          : $e(this, 'startsWithAnyOf() only works with strings');
      }),
      be);
    function be() {}
    function tt(o) {
      return pe(function (s) {
        return nr(s), o(s.target.error), !1;
      });
    }
    function nr(o) {
      o.stopPropagation && o.stopPropagation(),
        o.preventDefault && o.preventDefault();
    }
    var rr = 'storagemutated',
      is = 'x-storagemutated-1',
      St = Jn(null, rr),
      Zp =
        ((nt.prototype._lock = function () {
          return (
            He(!q.global),
            ++this._reculock,
            this._reculock !== 1 || q.global || (q.lockOwnerFor = this),
            this
          );
        }),
        (nt.prototype._unlock = function () {
          if ((He(!q.global), --this._reculock == 0))
            for (
              q.global || (q.lockOwnerFor = null);
              0 < this._blockedFuncs.length && !this._locked();

            ) {
              var o = this._blockedFuncs.shift();
              try {
                zt(o[1], o[0]);
              } catch {}
            }
          return this;
        }),
        (nt.prototype._locked = function () {
          return this._reculock && q.lockOwnerFor !== this;
        }),
        (nt.prototype.create = function (o) {
          var s = this;
          if (!this.mode) return this;
          var u = this.db.idbdb,
            l = this.db._state.dbOpenError;
          if ((He(!this.idbtrans), !o && !u))
            switch (l && l.name) {
              case 'DatabaseClosedError':
                throw new G.DatabaseClosed(l);
              case 'MissingAPIError':
                throw new G.MissingAPI(l.message, l);
              default:
                throw new G.OpenFailed(l);
            }
          if (!this.active) throw new G.TransactionInactive();
          return (
            He(this._completion._state === null),
            ((o = this.idbtrans =
              o ||
              (this.db.core || u).transaction(this.storeNames, this.mode, {
                durability: this.chromeTransactionDurability,
              })).onerror = pe(function (d) {
              nr(d), s._reject(o.error);
            })),
            (o.onabort = pe(function (d) {
              nr(d),
                s.active && s._reject(new G.Abort(o.error)),
                (s.active = !1),
                s.on('abort').fire(d);
            })),
            (o.oncomplete = pe(function () {
              (s.active = !1),
                s._resolve(),
                'mutatedParts' in o && St.storagemutated.fire(o.mutatedParts);
            })),
            this
          );
        }),
        (nt.prototype._promise = function (o, s, u) {
          var l = this;
          if (o === 'readwrite' && this.mode !== 'readwrite')
            return ge(new G.ReadOnly('Transaction is readonly'));
          if (!this.active) return ge(new G.TransactionInactive());
          if (this._locked())
            return new $(function (p, g) {
              l._blockedFuncs.push([
                function () {
                  l._promise(o, s, u).then(p, g);
                },
                q,
              ]);
            });
          if (u)
            return Et(function () {
              var p = new $(function (g, m) {
                l._lock();
                var D = s(g, m, l);
                D && D.then && D.then(g, m);
              });
              return (
                p.finally(function () {
                  return l._unlock();
                }),
                (p._lib = !0),
                p
              );
            });
          var d = new $(function (p, g) {
            var m = s(p, g, l);
            m && m.then && m.then(p, g);
          });
          return (d._lib = !0), d;
        }),
        (nt.prototype._root = function () {
          return this.parent ? this.parent._root() : this;
        }),
        (nt.prototype.waitFor = function (o) {
          var s,
            u = this._root(),
            l = $.resolve(o);
          u._waitingFor
            ? (u._waitingFor = u._waitingFor.then(function () {
                return l;
              }))
            : ((u._waitingFor = l),
              (u._waitingQueue = []),
              (s = u.idbtrans.objectStore(u.storeNames[0])),
              (function p() {
                for (++u._spinCount; u._waitingQueue.length; )
                  u._waitingQueue.shift()();
                u._waitingFor && (s.get(-1 / 0).onsuccess = p);
              })());
          var d = u._waitingFor;
          return new $(function (p, g) {
            l.then(
              function (m) {
                return u._waitingQueue.push(pe(p.bind(null, m)));
              },
              function (m) {
                return u._waitingQueue.push(pe(g.bind(null, m)));
              },
            ).finally(function () {
              u._waitingFor === d && (u._waitingFor = null);
            });
          });
        }),
        (nt.prototype.abort = function () {
          this.active &&
            ((this.active = !1),
            this.idbtrans && this.idbtrans.abort(),
            this._reject(new G.Abort()));
        }),
        (nt.prototype.table = function (o) {
          var s = this._memoizedTables || (this._memoizedTables = {});
          if (v(s, o)) return s[o];
          var u = this.schema[o];
          if (!u)
            throw new G.NotFound('Table ' + o + ' not part of transaction');
          return (
            (u = new this.db.Table(o, u, this)),
            (u.core = this.db.core.table(o)),
            (s[o] = u)
          );
        }),
        nt);
    function nt() {}
    function ss(o, s, u, l, d, p, g) {
      return {
        name: o,
        keyPath: s,
        unique: u,
        multi: l,
        auto: d,
        compound: p,
        src: (u && !g ? '&' : '') + (l ? '*' : '') + (d ? '++' : '') + Dc(s),
      };
    }
    function Dc(o) {
      return typeof o == 'string'
        ? o
        : o
          ? '[' + [].join.call(o, '+') + ']'
          : '';
    }
    function as(o, s, u) {
      return {
        name: o,
        primKey: s,
        indexes: u,
        mappedClass: null,
        idxByName:
          ((l = function (d) {
            return [d.name, d];
          }),
          u.reduce(function (d, p, g) {
            return (g = l(p, g)), g && (d[g[0]] = g[1]), d;
          }, {})),
      };
      var l;
    }
    var or = function (o) {
      try {
        return (
          o.only([[]]),
          (or = function () {
            return [[]];
          }),
          [[]]
        );
      } catch {
        return (
          (or = function () {
            return Gt;
          }),
          Gt
        );
      }
    };
    function us(o) {
      return o == null
        ? function () {}
        : typeof o == 'string'
          ? (s = o).split('.').length === 1
            ? function (u) {
                return u[s];
              }
            : function (u) {
                return Ze(u, s);
              }
          : function (u) {
              return Ze(u, o);
            };
      var s;
    }
    function wc(o) {
      return [].slice.call(o);
    }
    var Qp = 0;
    function ir(o) {
      return o == null
        ? ':id'
        : typeof o == 'string'
          ? o
          : '['.concat(o.join('+'), ']');
    }
    function Yp(o, s, D) {
      function l(I) {
        if (I.type === 3) return null;
        if (I.type === 4)
          throw new Error('Cannot convert never type to IDBKeyRange');
        var w = I.lower,
          E = I.upper,
          M = I.lowerOpen,
          I = I.upperOpen;
        return w === void 0
          ? E === void 0
            ? null
            : s.upperBound(E, !!I)
          : E === void 0
            ? s.lowerBound(w, !!M)
            : s.bound(w, E, !!M, !!I);
      }
      function d(S) {
        var w,
          E = S.name;
        return {
          name: E,
          schema: S,
          mutate: function (M) {
            var I = M.trans,
              T = M.type,
              N = M.keys,
              x = M.values,
              k = M.range;
            return new Promise(function (P, B) {
              P = pe(P);
              var F = I.objectStore(E),
                L = F.keyPath == null,
                V = T === 'put' || T === 'add';
              if (!V && T !== 'delete' && T !== 'deleteRange')
                throw new Error('Invalid operation type: ' + T);
              var j,
                U = (N || x || { length: 1 }).length;
              if (N && x && N.length !== x.length)
                throw new Error(
                  'Given keys array must have same length as given values array.',
                );
              if (U === 0)
                return P({
                  numFailures: 0,
                  failures: {},
                  results: [],
                  lastResult: void 0,
                });
              function Z(Ae) {
                ++Ue, nr(Ae);
              }
              var X = [],
                J = [],
                Ue = 0;
              if (T === 'deleteRange') {
                if (k.type === 4)
                  return P({
                    numFailures: Ue,
                    failures: J,
                    results: [],
                    lastResult: void 0,
                  });
                k.type === 3
                  ? X.push((j = F.clear()))
                  : X.push((j = F.delete(l(k))));
              } else {
                var L = V ? (L ? [x, N] : [x, null]) : [N, null],
                  K = L[0],
                  Me = L[1];
                if (V)
                  for (var Se = 0; Se < U; ++Se)
                    X.push(
                      (j =
                        Me && Me[Se] !== void 0
                          ? F[T](K[Se], Me[Se])
                          : F[T](K[Se])),
                    ),
                      (j.onerror = Z);
                else
                  for (Se = 0; Se < U; ++Se)
                    X.push((j = F[T](K[Se]))), (j.onerror = Z);
              }
              function go(Ae) {
                (Ae = Ae.target.result),
                  X.forEach(function (Qt, Ms) {
                    return Qt.error != null && (J[Ms] = Qt.error);
                  }),
                  P({
                    numFailures: Ue,
                    failures: J,
                    results:
                      T === 'delete'
                        ? N
                        : X.map(function (Qt) {
                            return Qt.result;
                          }),
                    lastResult: Ae,
                  });
              }
              (j.onerror = function (Ae) {
                Z(Ae), go(Ae);
              }),
                (j.onsuccess = go);
            });
          },
          getMany: function (M) {
            var I = M.trans,
              T = M.keys;
            return new Promise(function (N, x) {
              N = pe(N);
              for (
                var k,
                  P = I.objectStore(E),
                  B = T.length,
                  F = new Array(B),
                  L = 0,
                  V = 0,
                  j = function (X) {
                    (X = X.target), (F[X._pos] = X.result), ++V === L && N(F);
                  },
                  U = tt(x),
                  Z = 0;
                Z < B;
                ++Z
              )
                T[Z] != null &&
                  (((k = P.get(T[Z]))._pos = Z),
                  (k.onsuccess = j),
                  (k.onerror = U),
                  ++L);
              L === 0 && N(F);
            });
          },
          get: function (M) {
            var I = M.trans,
              T = M.key;
            return new Promise(function (N, x) {
              N = pe(N);
              var k = I.objectStore(E).get(T);
              (k.onsuccess = function (P) {
                return N(P.target.result);
              }),
                (k.onerror = tt(x));
            });
          },
          query:
            ((w = b),
            function (M) {
              return new Promise(function (I, T) {
                I = pe(I);
                var N,
                  x,
                  k,
                  L = M.trans,
                  P = M.values,
                  B = M.limit,
                  j = M.query,
                  F = B === 1 / 0 ? void 0 : B,
                  V = j.index,
                  j = j.range,
                  L = L.objectStore(E),
                  V = V.isPrimaryKey ? L : L.index(V.name),
                  j = l(j);
                if (B === 0) return I({ result: [] });
                w
                  ? (((F = P ? V.getAll(j, F) : V.getAllKeys(j, F)).onsuccess =
                      function (U) {
                        return I({ result: U.target.result });
                      }),
                    (F.onerror = tt(T)))
                  : ((N = 0),
                    (x =
                      !P && 'openKeyCursor' in V
                        ? V.openKeyCursor(j)
                        : V.openCursor(j)),
                    (k = []),
                    (x.onsuccess = function (U) {
                      var Z = x.result;
                      return Z
                        ? (k.push(P ? Z.value : Z.primaryKey),
                          ++N === B ? I({ result: k }) : void Z.continue())
                        : I({ result: k });
                    }),
                    (x.onerror = tt(T)));
              });
            }),
          openCursor: function (M) {
            var I = M.trans,
              T = M.values,
              N = M.query,
              x = M.reverse,
              k = M.unique;
            return new Promise(function (P, B) {
              P = pe(P);
              var V = N.index,
                F = N.range,
                L = I.objectStore(E),
                L = V.isPrimaryKey ? L : L.index(V.name),
                V = x ? (k ? 'prevunique' : 'prev') : k ? 'nextunique' : 'next',
                j =
                  !T && 'openKeyCursor' in L
                    ? L.openKeyCursor(l(F), V)
                    : L.openCursor(l(F), V);
              (j.onerror = tt(B)),
                (j.onsuccess = pe(function (U) {
                  var Z,
                    X,
                    J,
                    Ue,
                    K = j.result;
                  K
                    ? ((K.___id = ++Qp),
                      (K.done = !1),
                      (Z = K.continue.bind(K)),
                      (X = (X = K.continuePrimaryKey) && X.bind(K)),
                      (J = K.advance.bind(K)),
                      (Ue = function () {
                        throw new Error('Cursor not stopped');
                      }),
                      (K.trans = I),
                      (K.stop =
                        K.continue =
                        K.continuePrimaryKey =
                        K.advance =
                          function () {
                            throw new Error('Cursor not started');
                          }),
                      (K.fail = pe(B)),
                      (K.next = function () {
                        var Me = this,
                          Se = 1;
                        return this.start(function () {
                          return Se-- ? Me.continue() : Me.stop();
                        }).then(function () {
                          return Me;
                        });
                      }),
                      (K.start = function (Me) {
                        function Se() {
                          if (j.result)
                            try {
                              Me();
                            } catch (Ae) {
                              K.fail(Ae);
                            }
                          else
                            (K.done = !0),
                              (K.start = function () {
                                throw new Error('Cursor behind last entry');
                              }),
                              K.stop();
                        }
                        var go = new Promise(function (Ae, Qt) {
                          (Ae = pe(Ae)),
                            (j.onerror = tt(Qt)),
                            (K.fail = Qt),
                            (K.stop = function (Ms) {
                              (K.stop =
                                K.continue =
                                K.continuePrimaryKey =
                                K.advance =
                                  Ue),
                                Ae(Ms);
                            });
                        });
                        return (
                          (j.onsuccess = pe(function (Ae) {
                            (j.onsuccess = Se), Se();
                          })),
                          (K.continue = Z),
                          (K.continuePrimaryKey = X),
                          (K.advance = J),
                          Se(),
                          go
                        );
                      }),
                      P(K))
                    : P(null);
                }, B));
            });
          },
          count: function (M) {
            var I = M.query,
              T = M.trans,
              N = I.index,
              x = I.range;
            return new Promise(function (k, P) {
              var B = T.objectStore(E),
                F = N.isPrimaryKey ? B : B.index(N.name),
                B = l(x),
                F = B ? F.count(B) : F.count();
              (F.onsuccess = pe(function (L) {
                return k(L.target.result);
              })),
                (F.onerror = tt(P));
            });
          },
        };
      }
      var p,
        g,
        m,
        C =
          ((g = D),
          (m = wc((p = o).objectStoreNames)),
          {
            schema: {
              name: p.name,
              tables: m
                .map(function (S) {
                  return g.objectStore(S);
                })
                .map(function (S) {
                  var w = S.keyPath,
                    I = S.autoIncrement,
                    E = a(w),
                    M = {},
                    I = {
                      name: S.name,
                      primaryKey: {
                        name: null,
                        isPrimaryKey: !0,
                        outbound: w == null,
                        compound: E,
                        keyPath: w,
                        autoIncrement: I,
                        unique: !0,
                        extractKey: us(w),
                      },
                      indexes: wc(S.indexNames)
                        .map(function (T) {
                          return S.index(T);
                        })
                        .map(function (k) {
                          var N = k.name,
                            x = k.unique,
                            P = k.multiEntry,
                            k = k.keyPath,
                            P = {
                              name: N,
                              compound: a(k),
                              keyPath: k,
                              unique: x,
                              multiEntry: P,
                              extractKey: us(k),
                            };
                          return (M[ir(k)] = P);
                        }),
                      getIndexByKeyPath: function (T) {
                        return M[ir(T)];
                      },
                    };
                  return (
                    (M[':id'] = I.primaryKey),
                    w != null && (M[ir(w)] = I.primaryKey),
                    I
                  );
                }),
            },
            hasGetAll:
              0 < m.length &&
              'getAll' in g.objectStore(m[0]) &&
              !(
                typeof navigator < 'u' &&
                /Safari/.test(navigator.userAgent) &&
                !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
              ),
          }),
        D = C.schema,
        b = C.hasGetAll,
        C = D.tables.map(d),
        y = {};
      return (
        C.forEach(function (S) {
          return (y[S.name] = S);
        }),
        {
          stack: 'dbcore',
          transaction: o.transaction.bind(o),
          table: function (S) {
            if (!y[S]) throw new Error("Table '".concat(S, "' not found"));
            return y[S];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: or(s),
          schema: D,
        }
      );
    }
    function Xp(o, s, u, l) {
      var d = u.IDBKeyRange;
      return (
        u.indexedDB,
        {
          dbcore:
            ((l = Yp(s, d, l)),
            o.dbcore.reduce(function (p, g) {
              return (g = g.create), t(t({}, p), g(p));
            }, l)),
        }
      );
    }
    function no(o, l) {
      var u = l.db,
        l = Xp(o._middlewares, u, o._deps, l);
      (o.core = l.dbcore),
        o.tables.forEach(function (d) {
          var p = d.name;
          o.core.schema.tables.some(function (g) {
            return g.name === p;
          }) &&
            ((d.core = o.core.table(p)),
            o[p] instanceof o.Table && (o[p].core = d.core));
        });
    }
    function ro(o, s, u, l) {
      u.forEach(function (d) {
        var p = l[d];
        s.forEach(function (g) {
          var m = (function D(b, C) {
            return H(b, C) || ((b = f(b)) && D(b, C));
          })(g, d);
          (!m || ('value' in m && m.value === void 0)) &&
            (g === o.Transaction.prototype || g instanceof o.Transaction
              ? O(g, d, {
                  get: function () {
                    return this.table(d);
                  },
                  set: function (D) {
                    R(this, d, {
                      value: D,
                      writable: !0,
                      configurable: !0,
                      enumerable: !0,
                    });
                  },
                })
              : (g[d] = new o.Table(d, p)));
        });
      });
    }
    function cs(o, s) {
      s.forEach(function (u) {
        for (var l in u) u[l] instanceof o.Table && delete u[l];
      });
    }
    function Jp(o, s) {
      return o._cfg.version - s._cfg.version;
    }
    function eg(o, s, u, l) {
      var d = o._dbSchema;
      u.objectStoreNames.contains('$meta') &&
        !d.$meta &&
        ((d.$meta = as('$meta', Ic('')[0], [])), o._storeNames.push('$meta'));
      var p = o._createTransaction('readwrite', o._storeNames, d);
      p.create(u), p._completion.catch(l);
      var g = p._reject.bind(p),
        m = q.transless || q;
      Et(function () {
        return (
          (q.trans = p),
          (q.transless = m),
          s !== 0
            ? (no(o, u),
              (b = s),
              ((D = p).storeNames.includes('$meta')
                ? D.table('$meta')
                    .get('version')
                    .then(function (C) {
                      return C ?? b;
                    })
                : $.resolve(b)
              )
                .then(function (C) {
                  return (
                    (S = C),
                    (w = p),
                    (E = u),
                    (M = []),
                    (C = (y = o)._versions),
                    (I = y._dbSchema = io(0, y.idbdb, E)),
                    (C = C.filter(function (T) {
                      return T._cfg.version >= S;
                    })).length !== 0
                      ? (C.forEach(function (T) {
                          M.push(function () {
                            var N = I,
                              x = T._cfg.dbschema;
                            so(y, N, E), so(y, x, E), (I = y._dbSchema = x);
                            var k = ls(N, x);
                            k.add.forEach(function (V) {
                              ds(E, V[0], V[1].primKey, V[1].indexes);
                            }),
                              k.change.forEach(function (V) {
                                if (V.recreate)
                                  throw new G.Upgrade(
                                    'Not yet support for changing primary key',
                                  );
                                var j = E.objectStore(V.name);
                                V.add.forEach(function (U) {
                                  return oo(j, U);
                                }),
                                  V.change.forEach(function (U) {
                                    j.deleteIndex(U.name), oo(j, U);
                                  }),
                                  V.del.forEach(function (U) {
                                    return j.deleteIndex(U);
                                  });
                              });
                            var P = T._cfg.contentUpgrade;
                            if (P && T._cfg.version > S) {
                              no(y, E), (w._memoizedTables = {});
                              var B = Gn(x);
                              k.del.forEach(function (V) {
                                B[V] = N[V];
                              }),
                                cs(y, [y.Transaction.prototype]),
                                ro(y, [y.Transaction.prototype], i(B), B),
                                (w.schema = B);
                              var F,
                                L = Ui(P);
                              return (
                                L && wn(),
                                (k = $.follow(function () {
                                  var V;
                                  (F = P(w)) &&
                                    L &&
                                    ((V = Ct.bind(null, null)), F.then(V, V));
                                })),
                                F && typeof F.then == 'function'
                                  ? $.resolve(F)
                                  : k.then(function () {
                                      return F;
                                    })
                              );
                            }
                          }),
                            M.push(function (N) {
                              var x,
                                k,
                                P = T._cfg.dbschema;
                              (x = P),
                                (k = N),
                                [].slice
                                  .call(k.db.objectStoreNames)
                                  .forEach(function (B) {
                                    return (
                                      x[B] == null && k.db.deleteObjectStore(B)
                                    );
                                  }),
                                cs(y, [y.Transaction.prototype]),
                                ro(
                                  y,
                                  [y.Transaction.prototype],
                                  y._storeNames,
                                  y._dbSchema,
                                ),
                                (w.schema = y._dbSchema);
                            }),
                            M.push(function (N) {
                              y.idbdb.objectStoreNames.contains('$meta') &&
                                (Math.ceil(y.idbdb.version / 10) ===
                                T._cfg.version
                                  ? (y.idbdb.deleteObjectStore('$meta'),
                                    delete y._dbSchema.$meta,
                                    (y._storeNames = y._storeNames.filter(
                                      function (x) {
                                        return x !== '$meta';
                                      },
                                    )))
                                  : N.objectStore('$meta').put(
                                      T._cfg.version,
                                      'version',
                                    ));
                            });
                        }),
                        (function T() {
                          return M.length
                            ? $.resolve(M.shift()(w.idbtrans)).then(T)
                            : $.resolve();
                        })().then(function () {
                          bc(I, E);
                        }))
                      : $.resolve()
                  );
                  var y, S, w, E, M, I;
                })
                .catch(g))
            : (i(d).forEach(function (C) {
                ds(u, C, d[C].primKey, d[C].indexes);
              }),
              no(o, u),
              void $.follow(function () {
                return o.on.populate.fire(p);
              }).catch(g))
        );
        var D, b;
      });
    }
    function tg(o, s) {
      bc(o._dbSchema, s),
        s.db.version % 10 != 0 ||
          s.objectStoreNames.contains('$meta') ||
          s.db
            .createObjectStore('$meta')
            .add(Math.ceil(s.db.version / 10 - 1), 'version');
      var u = io(0, o.idbdb, s);
      so(o, o._dbSchema, s);
      for (var l = 0, d = ls(u, o._dbSchema).change; l < d.length; l++) {
        var p = (function (g) {
          if (g.change.length || g.recreate)
            return (
              console.warn(
                'Unable to patch indexes of table '.concat(
                  g.name,
                  ' because it has changes on the type of index or primary key.',
                ),
              ),
              { value: void 0 }
            );
          var m = s.objectStore(g.name);
          g.add.forEach(function (D) {
            et &&
              console.debug(
                'Dexie upgrade patch: Creating missing index '
                  .concat(g.name, '.')
                  .concat(D.src),
              ),
              oo(m, D);
          });
        })(d[l]);
        if (typeof p == 'object') return p.value;
      }
    }
    function ls(o, s) {
      var u,
        l = { del: [], add: [], change: [] };
      for (u in o) s[u] || l.del.push(u);
      for (u in s) {
        var d = o[u],
          p = s[u];
        if (d) {
          var g = {
            name: u,
            def: p,
            recreate: !1,
            del: [],
            add: [],
            change: [],
          };
          if (
            '' + (d.primKey.keyPath || '') != '' + (p.primKey.keyPath || '') ||
            d.primKey.auto !== p.primKey.auto
          )
            (g.recreate = !0), l.change.push(g);
          else {
            var m = d.idxByName,
              D = p.idxByName,
              b = void 0;
            for (b in m) D[b] || g.del.push(b);
            for (b in D) {
              var C = m[b],
                y = D[b];
              C ? C.src !== y.src && g.change.push(y) : g.add.push(y);
            }
            (0 < g.del.length || 0 < g.add.length || 0 < g.change.length) &&
              l.change.push(g);
          }
        } else l.add.push([u, p]);
      }
      return l;
    }
    function ds(o, s, u, l) {
      var d = o.db.createObjectStore(
        s,
        u.keyPath
          ? { keyPath: u.keyPath, autoIncrement: u.auto }
          : { autoIncrement: u.auto },
      );
      return (
        l.forEach(function (p) {
          return oo(d, p);
        }),
        d
      );
    }
    function bc(o, s) {
      i(o).forEach(function (u) {
        s.db.objectStoreNames.contains(u) ||
          (et && console.debug('Dexie: Creating missing table', u),
          ds(s, u, o[u].primKey, o[u].indexes));
      });
    }
    function oo(o, s) {
      o.createIndex(s.name, s.keyPath, {
        unique: s.unique,
        multiEntry: s.multi,
      });
    }
    function io(o, s, u) {
      var l = {};
      return (
        Ie(s.objectStoreNames, 0).forEach(function (d) {
          for (
            var p = u.objectStore(d),
              g = ss(
                Dc((b = p.keyPath)),
                b || '',
                !0,
                !1,
                !!p.autoIncrement,
                b && typeof b != 'string',
                !0,
              ),
              m = [],
              D = 0;
            D < p.indexNames.length;
            ++D
          ) {
            var C = p.index(p.indexNames[D]),
              b = C.keyPath,
              C = ss(
                C.name,
                b,
                !!C.unique,
                !!C.multiEntry,
                !1,
                b && typeof b != 'string',
                !1,
              );
            m.push(C);
          }
          l[d] = as(d, g, m);
        }),
        l
      );
    }
    function so(o, s, u) {
      for (var l = u.db.objectStoreNames, d = 0; d < l.length; ++d) {
        var p = l[d],
          g = u.objectStore(p);
        o._hasGetAll = 'getAll' in g;
        for (var m = 0; m < g.indexNames.length; ++m) {
          var D = g.indexNames[m],
            b = g.index(D).keyPath,
            C = typeof b == 'string' ? b : '[' + Ie(b).join('+') + ']';
          !s[p] ||
            ((b = s[p].idxByName[C]) &&
              ((b.name = D),
              delete s[p].idxByName[C],
              (s[p].idxByName[D] = b)));
        }
      }
      typeof navigator < 'u' &&
        /Safari/.test(navigator.userAgent) &&
        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
        r.WorkerGlobalScope &&
        r instanceof r.WorkerGlobalScope &&
        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
        (o._hasGetAll = !1);
    }
    function Ic(o) {
      return o.split(',').map(function (s, u) {
        var l = (s = s.trim()).replace(/([&*]|\+\+)/g, ''),
          d = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split('+') : l;
        return ss(
          l,
          d || null,
          /\&/.test(s),
          /\*/.test(s),
          /\+\+/.test(s),
          a(d),
          u === 0,
        );
      });
    }
    var ng =
      ((ao.prototype._parseStoresSpec = function (o, s) {
        i(o).forEach(function (u) {
          if (o[u] !== null) {
            var l = Ic(o[u]),
              d = l.shift();
            if (((d.unique = !0), d.multi))
              throw new G.Schema('Primary key cannot be multi-valued');
            l.forEach(function (p) {
              if (p.auto)
                throw new G.Schema(
                  'Only primary key can be marked as autoIncrement (++)',
                );
              if (!p.keyPath)
                throw new G.Schema(
                  'Index must have a name and cannot be an empty string',
                );
            }),
              (s[u] = as(u, d, l));
          }
        });
      }),
      (ao.prototype.stores = function (u) {
        var s = this.db;
        this._cfg.storesSource = this._cfg.storesSource
          ? c(this._cfg.storesSource, u)
          : u;
        var u = s._versions,
          l = {},
          d = {};
        return (
          u.forEach(function (p) {
            c(l, p._cfg.storesSource),
              (d = p._cfg.dbschema = {}),
              p._parseStoresSpec(l, d);
          }),
          (s._dbSchema = d),
          cs(s, [s._allTables, s, s.Transaction.prototype]),
          ro(
            s,
            [s._allTables, s, s.Transaction.prototype, this._cfg.tables],
            i(d),
            d,
          ),
          (s._storeNames = i(d)),
          this
        );
      }),
      (ao.prototype.upgrade = function (o) {
        return (
          (this._cfg.contentUpgrade = zi(this._cfg.contentUpgrade || le, o)),
          this
        );
      }),
      ao);
    function ao() {}
    function fs(o, s) {
      var u = o._dbNamesDB;
      return (
        u ||
          (u = o._dbNamesDB =
            new ht(Yr, { addons: [], indexedDB: o, IDBKeyRange: s }))
            .version(1)
            .stores({ dbnames: 'name' }),
        u.table('dbnames')
      );
    }
    function hs(o) {
      return o && typeof o.databases == 'function';
    }
    function ps(o) {
      return Et(function () {
        return (q.letThrough = !0), o();
      });
    }
    function gs(o) {
      return !('from' in o);
    }
    var _e = function (o, s) {
      if (!this) {
        var u = new _e();
        return o && 'd' in o && c(u, o), u;
      }
      c(
        this,
        arguments.length
          ? { d: 1, from: o, to: 1 < arguments.length ? s : o }
          : { d: 0 },
      );
    };
    function sr(o, s, u) {
      var l = oe(s, u);
      if (!isNaN(l)) {
        if (0 < l) throw RangeError();
        if (gs(o)) return c(o, { from: s, to: u, d: 1 });
        var d = o.l,
          l = o.r;
        if (oe(u, o.from) < 0)
          return (
            d
              ? sr(d, s, u)
              : (o.l = { from: s, to: u, d: 1, l: null, r: null }),
            Cc(o)
          );
        if (0 < oe(s, o.to))
          return (
            l
              ? sr(l, s, u)
              : (o.r = { from: s, to: u, d: 1, l: null, r: null }),
            Cc(o)
          );
        oe(s, o.from) < 0 &&
          ((o.from = s), (o.l = null), (o.d = l ? l.d + 1 : 1)),
          0 < oe(u, o.to) &&
            ((o.to = u), (o.r = null), (o.d = o.l ? o.l.d + 1 : 1)),
          (u = !o.r),
          d && !o.l && ar(o, d),
          l && u && ar(o, l);
      }
    }
    function ar(o, s) {
      gs(s) ||
        (function u(l, D) {
          var p = D.from,
            g = D.to,
            m = D.l,
            D = D.r;
          sr(l, p, g), m && u(l, m), D && u(l, D);
        })(o, s);
    }
    function Ec(o, s) {
      var u = uo(s),
        l = u.next();
      if (l.done) return !1;
      for (
        var d = l.value, p = uo(o), g = p.next(d.from), m = g.value;
        !l.done && !g.done;

      ) {
        if (oe(m.from, d.to) <= 0 && 0 <= oe(m.to, d.from)) return !0;
        oe(d.from, m.from) < 0
          ? (d = (l = u.next(m.from)).value)
          : (m = (g = p.next(d.from)).value);
      }
      return !1;
    }
    function uo(o) {
      var s = gs(o) ? null : { s: 0, n: o };
      return {
        next: function (u) {
          for (var l = 0 < arguments.length; s; )
            switch (s.s) {
              case 0:
                if (((s.s = 1), l))
                  for (; s.n.l && oe(u, s.n.from) < 0; )
                    s = { up: s, n: s.n.l, s: 1 };
                else for (; s.n.l; ) s = { up: s, n: s.n.l, s: 1 };
              case 1:
                if (((s.s = 2), !l || oe(u, s.n.to) <= 0))
                  return { value: s.n, done: !1 };
              case 2:
                if (s.n.r) {
                  (s.s = 3), (s = { up: s, n: s.n.r, s: 0 });
                  continue;
                }
              case 3:
                s = s.up;
            }
          return { done: !0 };
        },
      };
    }
    function Cc(o) {
      var s,
        u,
        l =
          (((s = o.r) === null || s === void 0 ? void 0 : s.d) || 0) -
          (((u = o.l) === null || u === void 0 ? void 0 : u.d) || 0),
        d = 1 < l ? 'r' : l < -1 ? 'l' : '';
      d &&
        ((s = d == 'r' ? 'l' : 'r'),
        (u = t({}, o)),
        (l = o[d]),
        (o.from = l.from),
        (o.to = l.to),
        (o[d] = l[d]),
        (u[d] = l[s]),
        ((o[s] = u).d = _c(u))),
        (o.d = _c(o));
    }
    function _c(u) {
      var s = u.r,
        u = u.l;
      return (s ? (u ? Math.max(s.d, u.d) : s.d) : u ? u.d : 0) + 1;
    }
    function co(o, s) {
      return (
        i(s).forEach(function (u) {
          o[u]
            ? ar(o[u], s[u])
            : (o[u] = (function l(d) {
                var p,
                  g,
                  m = {};
                for (p in d)
                  v(d, p) &&
                    ((g = d[p]),
                    (m[p] =
                      !g || typeof g != 'object' || Ju.has(g.constructor)
                        ? g
                        : l(g)));
                return m;
              })(s[u]));
        }),
        o
      );
    }
    function ms(o, s) {
      return (
        o.all ||
        s.all ||
        Object.keys(o).some(function (u) {
          return s[u] && Ec(s[u], o[u]);
        })
      );
    }
    _(
      _e.prototype,
      (((Ge = {
        add: function (o) {
          return ar(this, o), this;
        },
        addKey: function (o) {
          return sr(this, o, o), this;
        },
        addKeys: function (o) {
          var s = this;
          return (
            o.forEach(function (u) {
              return sr(s, u, u);
            }),
            this
          );
        },
        hasKey: function (o) {
          var s = uo(this).next(o).value;
          return s && oe(s.from, o) <= 0 && 0 <= oe(s.to, o);
        },
      })[$i] = function () {
        return uo(this);
      }),
      Ge),
    );
    var Kt = {},
      ys = {},
      vs = !1;
    function lo(o) {
      co(ys, o),
        vs ||
          ((vs = !0),
          setTimeout(function () {
            (vs = !1), Ds(ys, !(ys = {}));
          }, 0));
    }
    function Ds(o, s) {
      s === void 0 && (s = !1);
      var u = new Set();
      if (o.all)
        for (var l = 0, d = Object.values(Kt); l < d.length; l++)
          Mc((g = d[l]), o, u, s);
      else
        for (var p in o) {
          var g,
            m = /^idb\:\/\/(.*)\/(.*)\//.exec(p);
          m &&
            ((p = m[1]),
            (m = m[2]),
            (g = Kt['idb://'.concat(p, '/').concat(m)]) && Mc(g, o, u, s));
        }
      u.forEach(function (D) {
        return D();
      });
    }
    function Mc(o, s, u, l) {
      for (
        var d = [], p = 0, g = Object.entries(o.queries.query);
        p < g.length;
        p++
      ) {
        for (
          var m = g[p], D = m[0], b = [], C = 0, y = m[1];
          C < y.length;
          C++
        ) {
          var S = y[C];
          ms(s, S.obsSet)
            ? S.subscribers.forEach(function (I) {
                return u.add(I);
              })
            : l && b.push(S);
        }
        l && d.push([D, b]);
      }
      if (l)
        for (var w = 0, E = d; w < E.length; w++) {
          var M = E[w],
            D = M[0],
            b = M[1];
          o.queries.query[D] = b;
        }
    }
    function rg(o) {
      var s = o._state,
        u = o._deps.indexedDB;
      if (s.isBeingOpened || o.idbdb)
        return s.dbReadyPromise.then(function () {
          return s.dbOpenError ? ge(s.dbOpenError) : o;
        });
      (s.isBeingOpened = !0), (s.dbOpenError = null), (s.openComplete = !1);
      var l = s.openCanceller,
        d = Math.round(10 * o.verno),
        p = !1;
      function g() {
        if (s.openCanceller !== l)
          throw new G.DatabaseClosed('db.open() was cancelled');
      }
      function m() {
        return new $(function (S, w) {
          if ((g(), !u)) throw new G.MissingAPI();
          var E = o.name,
            M = s.autoSchema || !d ? u.open(E) : u.open(E, d);
          if (!M) throw new G.MissingAPI();
          (M.onerror = tt(w)),
            (M.onblocked = pe(o._fireOnBlocked)),
            (M.onupgradeneeded = pe(function (I) {
              var T;
              (C = M.transaction),
                s.autoSchema && !o._options.allowEmptyDB
                  ? ((M.onerror = nr),
                    C.abort(),
                    M.result.close(),
                    ((T = u.deleteDatabase(E)).onsuccess = T.onerror =
                      pe(function () {
                        w(
                          new G.NoSuchDatabase(
                            'Database '.concat(E, ' doesnt exist'),
                          ),
                        );
                      })))
                  : ((C.onerror = tt(w)),
                    (I = I.oldVersion > Math.pow(2, 62) ? 0 : I.oldVersion),
                    (y = I < 1),
                    (o.idbdb = M.result),
                    p && tg(o, C),
                    eg(o, I / 10, C, w));
            }, w)),
            (M.onsuccess = pe(function () {
              C = null;
              var I,
                T,
                N,
                x,
                k,
                P = (o.idbdb = M.result),
                B = Ie(P.objectStoreNames);
              if (0 < B.length)
                try {
                  var F = P.transaction(
                    (x = B).length === 1 ? x[0] : x,
                    'readonly',
                  );
                  if (s.autoSchema)
                    (T = P),
                      (N = F),
                      ((I = o).verno = T.version / 10),
                      (N = I._dbSchema = io(0, T, N)),
                      (I._storeNames = Ie(T.objectStoreNames, 0)),
                      ro(I, [I._allTables], i(N), N);
                  else if (
                    (so(o, o._dbSchema, F),
                    ((k = ls(io(0, (k = o).idbdb, F), k._dbSchema)).add
                      .length ||
                      k.change.some(function (L) {
                        return L.add.length || L.change.length;
                      })) &&
                      !p)
                  )
                    return (
                      console.warn(
                        'Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.',
                      ),
                      P.close(),
                      (d = P.version + 1),
                      (p = !0),
                      S(m())
                    );
                  no(o, F);
                } catch {}
              bn.push(o),
                (P.onversionchange = pe(function (L) {
                  (s.vcFired = !0), o.on('versionchange').fire(L);
                })),
                (P.onclose = pe(function (L) {
                  o.on('close').fire(L);
                })),
                y &&
                  ((k = o._deps),
                  (F = E),
                  (P = k.indexedDB),
                  (k = k.IDBKeyRange),
                  hs(P) || F === Yr || fs(P, k).put({ name: F }).catch(le)),
                S();
            }, w));
        }).catch(function (S) {
          switch (S?.name) {
            case 'UnknownError':
              if (0 < s.PR1398_maxLoop)
                return (
                  s.PR1398_maxLoop--,
                  console.warn(
                    'Dexie: Workaround for Chrome UnknownError on open()',
                  ),
                  m()
                );
              break;
            case 'VersionError':
              if (0 < d) return (d = 0), m();
          }
          return $.reject(S);
        });
      }
      var D,
        b = s.dbReadyResolve,
        C = null,
        y = !1;
      return $.race([
        l,
        (typeof navigator > 'u'
          ? $.resolve()
          : !navigator.userAgentData &&
              /Safari\//.test(navigator.userAgent) &&
              !/Chrom(e|ium)\//.test(navigator.userAgent) &&
              indexedDB.databases
            ? new Promise(function (S) {
                function w() {
                  return indexedDB.databases().finally(S);
                }
                (D = setInterval(w, 100)), w();
              }).finally(function () {
                return clearInterval(D);
              })
            : Promise.resolve()
        ).then(m),
      ])
        .then(function () {
          return (
            g(),
            (s.onReadyBeingFired = []),
            $.resolve(
              ps(function () {
                return o.on.ready.fire(o.vip);
              }),
            ).then(function S() {
              if (0 < s.onReadyBeingFired.length) {
                var w = s.onReadyBeingFired.reduce(zi, le);
                return (
                  (s.onReadyBeingFired = []),
                  $.resolve(
                    ps(function () {
                      return w(o.vip);
                    }),
                  ).then(S)
                );
              }
            })
          );
        })
        .finally(function () {
          s.openCanceller === l &&
            ((s.onReadyBeingFired = null), (s.isBeingOpened = !1));
        })
        .catch(function (S) {
          s.dbOpenError = S;
          try {
            C && C.abort();
          } catch {}
          return l === s.openCanceller && o._close(), ge(S);
        })
        .finally(function () {
          (s.openComplete = !0), b();
        })
        .then(function () {
          var S;
          return (
            y &&
              ((S = {}),
              o.tables.forEach(function (w) {
                w.schema.indexes.forEach(function (E) {
                  E.name &&
                    (S[
                      'idb://'
                        .concat(o.name, '/')
                        .concat(w.name, '/')
                        .concat(E.name)
                    ] = new _e(-1 / 0, [[[]]]));
                }),
                  (S['idb://'.concat(o.name, '/').concat(w.name, '/')] = S[
                    'idb://'.concat(o.name, '/').concat(w.name, '/:dels')
                  ] =
                    new _e(-1 / 0, [[[]]]));
              }),
              St(rr).fire(S),
              Ds(S, !0)),
            o
          );
        });
    }
    function ws(o) {
      function s(p) {
        return o.next(p);
      }
      var u = d(s),
        l = d(function (p) {
          return o.throw(p);
        });
      function d(p) {
        return function (D) {
          var m = p(D),
            D = m.value;
          return m.done
            ? D
            : D && typeof D.then == 'function'
              ? D.then(u, l)
              : a(D)
                ? Promise.all(D).then(u, l)
                : u(D);
        };
      }
      return d(s)();
    }
    function fo(o, s, u) {
      for (var l = a(o) ? o.slice() : [o], d = 0; d < u; ++d) l.push(s);
      return l;
    }
    var og = {
      stack: 'dbcore',
      name: 'VirtualIndexMiddleware',
      level: 1,
      create: function (o) {
        return t(t({}, o), {
          table: function (s) {
            var u = o.table(s),
              l = u.schema,
              d = {},
              p = [];
            function g(y, S, w) {
              var E = ir(y),
                M = (d[E] = d[E] || []),
                I = y == null ? 0 : typeof y == 'string' ? 1 : y.length,
                T = 0 < S,
                T = t(t({}, w), {
                  name: T
                    ? ''.concat(E, '(virtual-from:').concat(w.name, ')')
                    : w.name,
                  lowLevelIndex: w,
                  isVirtual: T,
                  keyTail: S,
                  keyLength: I,
                  extractKey: us(y),
                  unique: !T && w.unique,
                });
              return (
                M.push(T),
                T.isPrimaryKey || p.push(T),
                1 < I && g(I === 2 ? y[0] : y.slice(0, I - 1), S + 1, w),
                M.sort(function (N, x) {
                  return N.keyTail - x.keyTail;
                }),
                T
              );
            }
            (s = g(l.primaryKey.keyPath, 0, l.primaryKey)), (d[':id'] = [s]);
            for (var m = 0, D = l.indexes; m < D.length; m++) {
              var b = D[m];
              g(b.keyPath, 0, b);
            }
            function C(y) {
              var S,
                w = y.query.index;
              return w.isVirtual
                ? t(t({}, y), {
                    query: {
                      index: w.lowLevelIndex,
                      range:
                        ((S = y.query.range),
                        (w = w.keyTail),
                        {
                          type: S.type === 1 ? 2 : S.type,
                          lower: fo(
                            S.lower,
                            S.lowerOpen ? o.MAX_KEY : o.MIN_KEY,
                            w,
                          ),
                          lowerOpen: !0,
                          upper: fo(
                            S.upper,
                            S.upperOpen ? o.MIN_KEY : o.MAX_KEY,
                            w,
                          ),
                          upperOpen: !0,
                        }),
                    },
                  })
                : y;
            }
            return t(t({}, u), {
              schema: t(t({}, l), {
                primaryKey: s,
                indexes: p,
                getIndexByKeyPath: function (y) {
                  return (y = d[ir(y)]) && y[0];
                },
              }),
              count: function (y) {
                return u.count(C(y));
              },
              query: function (y) {
                return u.query(C(y));
              },
              openCursor: function (y) {
                var S = y.query.index,
                  w = S.keyTail,
                  E = S.isVirtual,
                  M = S.keyLength;
                return E
                  ? u.openCursor(C(y)).then(function (T) {
                      return T && I(T);
                    })
                  : u.openCursor(y);
                function I(T) {
                  return Object.create(T, {
                    continue: {
                      value: function (N) {
                        N != null
                          ? T.continue(
                              fo(N, y.reverse ? o.MAX_KEY : o.MIN_KEY, w),
                            )
                          : y.unique
                            ? T.continue(
                                T.key
                                  .slice(0, M)
                                  .concat(y.reverse ? o.MIN_KEY : o.MAX_KEY, w),
                              )
                            : T.continue();
                      },
                    },
                    continuePrimaryKey: {
                      value: function (N, x) {
                        T.continuePrimaryKey(fo(N, o.MAX_KEY, w), x);
                      },
                    },
                    primaryKey: {
                      get: function () {
                        return T.primaryKey;
                      },
                    },
                    key: {
                      get: function () {
                        var N = T.key;
                        return M === 1 ? N[0] : N.slice(0, M);
                      },
                    },
                    value: {
                      get: function () {
                        return T.value;
                      },
                    },
                  });
                }
              },
            });
          },
        });
      },
    };
    function bs(o, s, u, l) {
      return (
        (u = u || {}),
        (l = l || ''),
        i(o).forEach(function (d) {
          var p, g, m;
          v(s, d)
            ? ((p = o[d]),
              (g = s[d]),
              typeof p == 'object' && typeof g == 'object' && p && g
                ? (m = Hi(p)) !== Hi(g)
                  ? (u[l + d] = s[d])
                  : m === 'Object'
                    ? bs(p, g, u, l + d + '.')
                    : p !== g && (u[l + d] = s[d])
                : p !== g && (u[l + d] = s[d]))
            : (u[l + d] = void 0);
        }),
        i(s).forEach(function (d) {
          v(o, d) || (u[l + d] = s[d]);
        }),
        u
      );
    }
    function Is(o, s) {
      return s.type === 'delete'
        ? s.keys
        : s.keys || s.values.map(o.extractKey);
    }
    var ig = {
      stack: 'dbcore',
      name: 'HooksMiddleware',
      level: 2,
      create: function (o) {
        return t(t({}, o), {
          table: function (s) {
            var u = o.table(s),
              l = u.schema.primaryKey;
            return t(t({}, u), {
              mutate: function (d) {
                var p = q.trans,
                  g = p.table(s).hook,
                  m = g.deleting,
                  D = g.creating,
                  b = g.updating;
                switch (d.type) {
                  case 'add':
                    if (D.fire === le) break;
                    return p._promise(
                      'readwrite',
                      function () {
                        return C(d);
                      },
                      !0,
                    );
                  case 'put':
                    if (D.fire === le && b.fire === le) break;
                    return p._promise(
                      'readwrite',
                      function () {
                        return C(d);
                      },
                      !0,
                    );
                  case 'delete':
                    if (m.fire === le) break;
                    return p._promise(
                      'readwrite',
                      function () {
                        return C(d);
                      },
                      !0,
                    );
                  case 'deleteRange':
                    if (m.fire === le) break;
                    return p._promise(
                      'readwrite',
                      function () {
                        return (function y(S, w, E) {
                          return u
                            .query({
                              trans: S,
                              values: !1,
                              query: { index: l, range: w },
                              limit: E,
                            })
                            .then(function (M) {
                              var I = M.result;
                              return C({
                                type: 'delete',
                                keys: I,
                                trans: S,
                              }).then(function (T) {
                                return 0 < T.numFailures
                                  ? Promise.reject(T.failures[0])
                                  : I.length < E
                                    ? {
                                        failures: [],
                                        numFailures: 0,
                                        lastResult: void 0,
                                      }
                                    : y(
                                        S,
                                        t(t({}, w), {
                                          lower: I[I.length - 1],
                                          lowerOpen: !0,
                                        }),
                                        E,
                                      );
                              });
                            });
                        })(d.trans, d.range, 1e4);
                      },
                      !0,
                    );
                }
                return u.mutate(d);
                function C(y) {
                  var S,
                    w,
                    E,
                    M = q.trans,
                    I = y.keys || Is(l, y);
                  if (!I) throw new Error('Keys missing');
                  return (
                    (y =
                      y.type === 'add' || y.type === 'put'
                        ? t(t({}, y), { keys: I })
                        : t({}, y)).type !== 'delete' &&
                      (y.values = n([], y.values, !0)),
                    y.keys && (y.keys = n([], y.keys, !0)),
                    (S = u),
                    (E = I),
                    ((w = y).type === 'add'
                      ? Promise.resolve([])
                      : S.getMany({
                          trans: w.trans,
                          keys: E,
                          cache: 'immutable',
                        })
                    ).then(function (T) {
                      var N = I.map(function (x, k) {
                        var P,
                          B,
                          F,
                          L = T[k],
                          V = { onerror: null, onsuccess: null };
                        return (
                          y.type === 'delete'
                            ? m.fire.call(V, x, L, M)
                            : y.type === 'add' || L === void 0
                              ? ((P = D.fire.call(V, x, y.values[k], M)),
                                x == null &&
                                  P != null &&
                                  ((y.keys[k] = x = P),
                                  l.outbound || Ee(y.values[k], l.keyPath, x)))
                              : ((P = bs(L, y.values[k])),
                                (B = b.fire.call(V, P, x, L, M)) &&
                                  ((F = y.values[k]),
                                  Object.keys(B).forEach(function (j) {
                                    v(F, j) ? (F[j] = B[j]) : Ee(F, j, B[j]);
                                  }))),
                          V
                        );
                      });
                      return u
                        .mutate(y)
                        .then(function (x) {
                          for (
                            var k = x.failures,
                              P = x.results,
                              B = x.numFailures,
                              x = x.lastResult,
                              F = 0;
                            F < I.length;
                            ++F
                          ) {
                            var L = (P || I)[F],
                              V = N[F];
                            L == null
                              ? V.onerror && V.onerror(k[F])
                              : V.onsuccess &&
                                V.onsuccess(
                                  y.type === 'put' && T[F] ? y.values[F] : L,
                                );
                          }
                          return {
                            failures: k,
                            results: P,
                            numFailures: B,
                            lastResult: x,
                          };
                        })
                        .catch(function (x) {
                          return (
                            N.forEach(function (k) {
                              return k.onerror && k.onerror(x);
                            }),
                            Promise.reject(x)
                          );
                        });
                    })
                  );
                }
              },
            });
          },
        });
      },
    };
    function Sc(o, s, u) {
      try {
        if (!s || s.keys.length < o.length) return null;
        for (var l = [], d = 0, p = 0; d < s.keys.length && p < o.length; ++d)
          oe(s.keys[d], o[p]) === 0 &&
            (l.push(u ? Bt(s.values[d]) : s.values[d]), ++p);
        return l.length === o.length ? l : null;
      } catch {
        return null;
      }
    }
    var sg = {
      stack: 'dbcore',
      level: -1,
      create: function (o) {
        return {
          table: function (s) {
            var u = o.table(s);
            return t(t({}, u), {
              getMany: function (l) {
                if (!l.cache) return u.getMany(l);
                var d = Sc(l.keys, l.trans._cache, l.cache === 'clone');
                return d
                  ? $.resolve(d)
                  : u.getMany(l).then(function (p) {
                      return (
                        (l.trans._cache = {
                          keys: l.keys,
                          values: l.cache === 'clone' ? Bt(p) : p,
                        }),
                        p
                      );
                    });
              },
              mutate: function (l) {
                return l.type !== 'add' && (l.trans._cache = null), u.mutate(l);
              },
            });
          },
        };
      },
    };
    function Tc(o, s) {
      return (
        o.trans.mode === 'readonly' &&
        !!o.subscr &&
        !o.trans.explicit &&
        o.trans.db._options.cache !== 'disabled' &&
        !s.schema.primaryKey.outbound
      );
    }
    function Nc(o, s) {
      switch (o) {
        case 'query':
          return s.values && !s.unique;
        case 'get':
        case 'getMany':
        case 'count':
        case 'openCursor':
          return !1;
      }
    }
    var ag = {
      stack: 'dbcore',
      level: 0,
      name: 'Observability',
      create: function (o) {
        var s = o.schema.name,
          u = new _e(o.MIN_KEY, o.MAX_KEY);
        return t(t({}, o), {
          transaction: function (l, d, p) {
            if (q.subscr && d !== 'readonly')
              throw new G.ReadOnly(
                'Readwrite transaction in liveQuery context. Querier source: '.concat(
                  q.querier,
                ),
              );
            return o.transaction(l, d, p);
          },
          table: function (l) {
            var d = o.table(l),
              p = d.schema,
              g = p.primaryKey,
              y = p.indexes,
              m = g.extractKey,
              D = g.outbound,
              b =
                g.autoIncrement &&
                y.filter(function (w) {
                  return w.compound && w.keyPath.includes(g.keyPath);
                }),
              C = t(t({}, d), {
                mutate: function (w) {
                  function E(j) {
                    return (
                      (j = 'idb://'.concat(s, '/').concat(l, '/').concat(j)),
                      x[j] || (x[j] = new _e())
                    );
                  }
                  var M,
                    I,
                    T,
                    N = w.trans,
                    x = w.mutatedParts || (w.mutatedParts = {}),
                    k = E(''),
                    P = E(':dels'),
                    B = w.type,
                    V =
                      w.type === 'deleteRange'
                        ? [w.range]
                        : w.type === 'delete'
                          ? [w.keys]
                          : w.values.length < 50
                            ? [
                                Is(g, w).filter(function (j) {
                                  return j;
                                }),
                                w.values,
                              ]
                            : [],
                    F = V[0],
                    L = V[1],
                    V = w.trans._cache;
                  return (
                    a(F)
                      ? (k.addKeys(F),
                        (V =
                          B === 'delete' || F.length === L.length
                            ? Sc(F, V)
                            : null) || P.addKeys(F),
                        (V || L) &&
                          ((M = E),
                          (I = V),
                          (T = L),
                          p.indexes.forEach(function (j) {
                            var U = M(j.name || '');
                            function Z(J) {
                              return J != null ? j.extractKey(J) : null;
                            }
                            function X(J) {
                              return j.multiEntry && a(J)
                                ? J.forEach(function (Ue) {
                                    return U.addKey(Ue);
                                  })
                                : U.addKey(J);
                            }
                            (I || T).forEach(function (J, Me) {
                              var K = I && Z(I[Me]),
                                Me = T && Z(T[Me]);
                              oe(K, Me) !== 0 &&
                                (K != null && X(K), Me != null && X(Me));
                            });
                          })))
                      : F
                        ? ((L = {
                            from:
                              (L = F.lower) !== null && L !== void 0
                                ? L
                                : o.MIN_KEY,
                            to:
                              (L = F.upper) !== null && L !== void 0
                                ? L
                                : o.MAX_KEY,
                          }),
                          P.add(L),
                          k.add(L))
                        : (k.add(u),
                          P.add(u),
                          p.indexes.forEach(function (j) {
                            return E(j.name).add(u);
                          })),
                    d.mutate(w).then(function (j) {
                      return (
                        !F ||
                          (w.type !== 'add' && w.type !== 'put') ||
                          (k.addKeys(j.results),
                          b &&
                            b.forEach(function (U) {
                              for (
                                var Z = w.values.map(function (K) {
                                    return U.extractKey(K);
                                  }),
                                  X = U.keyPath.findIndex(function (K) {
                                    return K === g.keyPath;
                                  }),
                                  J = 0,
                                  Ue = j.results.length;
                                J < Ue;
                                ++J
                              )
                                Z[J][X] = j.results[J];
                              E(U.name).addKeys(Z);
                            })),
                        (N.mutatedParts = co(N.mutatedParts || {}, x)),
                        j
                      );
                    })
                  );
                },
              }),
              y = function (E) {
                var M = E.query,
                  E = M.index,
                  M = M.range;
                return [
                  E,
                  new _e(
                    (E = M.lower) !== null && E !== void 0 ? E : o.MIN_KEY,
                    (M = M.upper) !== null && M !== void 0 ? M : o.MAX_KEY,
                  ),
                ];
              },
              S = {
                get: function (w) {
                  return [g, new _e(w.key)];
                },
                getMany: function (w) {
                  return [g, new _e().addKeys(w.keys)];
                },
                count: y,
                query: y,
                openCursor: y,
              };
            return (
              i(S).forEach(function (w) {
                C[w] = function (E) {
                  var M = q.subscr,
                    I = !!M,
                    T = Tc(q, d) && Nc(w, E) ? (E.obsSet = {}) : M;
                  if (I) {
                    var N = function (L) {
                        return (
                          (L = 'idb://'
                            .concat(s, '/')
                            .concat(l, '/')
                            .concat(L)),
                          T[L] || (T[L] = new _e())
                        );
                      },
                      x = N(''),
                      k = N(':dels'),
                      M = S[w](E),
                      I = M[0],
                      M = M[1];
                    if (
                      ((w === 'query' && I.isPrimaryKey && !E.values
                        ? k
                        : N(I.name || '')
                      ).add(M),
                      !I.isPrimaryKey)
                    ) {
                      if (w !== 'count') {
                        var P =
                          w === 'query' &&
                          D &&
                          E.values &&
                          d.query(t(t({}, E), { values: !1 }));
                        return d[w].apply(this, arguments).then(function (L) {
                          if (w === 'query') {
                            if (D && E.values)
                              return P.then(function (Z) {
                                return (Z = Z.result), x.addKeys(Z), L;
                              });
                            var V = E.values ? L.result.map(m) : L.result;
                            (E.values ? x : k).addKeys(V);
                          } else if (w === 'openCursor') {
                            var j = L,
                              U = E.values;
                            return (
                              j &&
                              Object.create(j, {
                                key: {
                                  get: function () {
                                    return k.addKey(j.primaryKey), j.key;
                                  },
                                },
                                primaryKey: {
                                  get: function () {
                                    var Z = j.primaryKey;
                                    return k.addKey(Z), Z;
                                  },
                                },
                                value: {
                                  get: function () {
                                    return U && x.addKey(j.primaryKey), j.value;
                                  },
                                },
                              })
                            );
                          }
                          return L;
                        });
                      }
                      k.add(u);
                    }
                  }
                  return d[w].apply(this, arguments);
                };
              }),
              C
            );
          },
        });
      },
    };
    function xc(o, s, u) {
      if (u.numFailures === 0) return s;
      if (s.type === 'deleteRange') return null;
      var l = s.keys
        ? s.keys.length
        : 'values' in s && s.values
          ? s.values.length
          : 1;
      return u.numFailures === l
        ? null
        : ((s = t({}, s)),
          a(s.keys) &&
            (s.keys = s.keys.filter(function (d, p) {
              return !(p in u.failures);
            })),
          'values' in s &&
            a(s.values) &&
            (s.values = s.values.filter(function (d, p) {
              return !(p in u.failures);
            })),
          s);
    }
    function Es(o, s) {
      return (
        (u = o),
        ((l = s).lower === void 0 ||
          (l.lowerOpen ? 0 < oe(u, l.lower) : 0 <= oe(u, l.lower))) &&
          ((o = o),
          (s = s).upper === void 0 ||
            (s.upperOpen ? oe(o, s.upper) < 0 : oe(o, s.upper) <= 0))
      );
      var u, l;
    }
    function Ac(o, s, S, l, d, p) {
      if (!S || S.length === 0) return o;
      var g = s.query.index,
        m = g.multiEntry,
        D = s.query.range,
        b = l.schema.primaryKey.extractKey,
        C = g.extractKey,
        y = (g.lowLevelIndex || g).extractKey,
        S = S.reduce(function (w, E) {
          var M = w,
            I = [];
          if (E.type === 'add' || E.type === 'put')
            for (var T = new _e(), N = E.values.length - 1; 0 <= N; --N) {
              var x,
                k = E.values[N],
                P = b(k);
              T.hasKey(P) ||
                ((x = C(k)),
                (m && a(x)
                  ? x.some(function (j) {
                      return Es(j, D);
                    })
                  : Es(x, D)) && (T.addKey(P), I.push(k)));
            }
          switch (E.type) {
            case 'add':
              var B = new _e().addKeys(
                  s.values
                    ? w.map(function (U) {
                        return b(U);
                      })
                    : w,
                ),
                M = w.concat(
                  s.values
                    ? I.filter(function (U) {
                        return (U = b(U)), !B.hasKey(U) && (B.addKey(U), !0);
                      })
                    : I.map(function (U) {
                        return b(U);
                      }).filter(function (U) {
                        return !B.hasKey(U) && (B.addKey(U), !0);
                      }),
                );
              break;
            case 'put':
              var F = new _e().addKeys(
                E.values.map(function (U) {
                  return b(U);
                }),
              );
              M = w
                .filter(function (U) {
                  return !F.hasKey(s.values ? b(U) : U);
                })
                .concat(
                  s.values
                    ? I
                    : I.map(function (U) {
                        return b(U);
                      }),
                );
              break;
            case 'delete':
              var L = new _e().addKeys(E.keys);
              M = w.filter(function (U) {
                return !L.hasKey(s.values ? b(U) : U);
              });
              break;
            case 'deleteRange':
              var V = E.range;
              M = w.filter(function (U) {
                return !Es(b(U), V);
              });
          }
          return M;
        }, o);
      return S === o
        ? o
        : (S.sort(function (w, E) {
            return oe(y(w), y(E)) || oe(b(w), b(E));
          }),
          s.limit &&
            s.limit < 1 / 0 &&
            (S.length > s.limit
              ? (S.length = s.limit)
              : o.length === s.limit && S.length < s.limit && (d.dirty = !0)),
          p ? Object.freeze(S) : S);
    }
    function kc(o, s) {
      return (
        oe(o.lower, s.lower) === 0 &&
        oe(o.upper, s.upper) === 0 &&
        !!o.lowerOpen == !!s.lowerOpen &&
        !!o.upperOpen == !!s.upperOpen
      );
    }
    function ug(o, s) {
      return (
        (function (u, l, d, p) {
          if (u === void 0) return l !== void 0 ? -1 : 0;
          if (l === void 0) return 1;
          if ((l = oe(u, l)) === 0) {
            if (d && p) return 0;
            if (d) return 1;
            if (p) return -1;
          }
          return l;
        })(o.lower, s.lower, o.lowerOpen, s.lowerOpen) <= 0 &&
        0 <=
          (function (u, l, d, p) {
            if (u === void 0) return l !== void 0 ? 1 : 0;
            if (l === void 0) return -1;
            if ((l = oe(u, l)) === 0) {
              if (d && p) return 0;
              if (d) return -1;
              if (p) return 1;
            }
            return l;
          })(o.upper, s.upper, o.upperOpen, s.upperOpen)
      );
    }
    function cg(o, s, u, l) {
      o.subscribers.add(u),
        l.addEventListener('abort', function () {
          var d, p;
          o.subscribers.delete(u),
            o.subscribers.size === 0 &&
              ((d = o),
              (p = s),
              setTimeout(function () {
                d.subscribers.size === 0 && Vt(p, d);
              }, 3e3));
        });
    }
    var lg = {
      stack: 'dbcore',
      level: 0,
      name: 'Cache',
      create: function (o) {
        var s = o.schema.name;
        return t(t({}, o), {
          transaction: function (u, l, d) {
            var p,
              g,
              m = o.transaction(u, l, d);
            return (
              l === 'readwrite' &&
                ((g = (p = new AbortController()).signal),
                (d = function (D) {
                  return function () {
                    if ((p.abort(), l === 'readwrite')) {
                      for (var b = new Set(), C = 0, y = u; C < y.length; C++) {
                        var S = y[C],
                          w = Kt['idb://'.concat(s, '/').concat(S)];
                        if (w) {
                          var E = o.table(S),
                            M = w.optimisticOps.filter(function (U) {
                              return U.trans === m;
                            });
                          if (m._explicit && D && m.mutatedParts)
                            for (
                              var I = 0, T = Object.values(w.queries.query);
                              I < T.length;
                              I++
                            )
                              for (
                                var N = 0, x = (B = T[I]).slice();
                                N < x.length;
                                N++
                              )
                                ms((F = x[N]).obsSet, m.mutatedParts) &&
                                  (Vt(B, F),
                                  F.subscribers.forEach(function (U) {
                                    return b.add(U);
                                  }));
                          else if (0 < M.length) {
                            w.optimisticOps = w.optimisticOps.filter(
                              function (U) {
                                return U.trans !== m;
                              },
                            );
                            for (
                              var k = 0, P = Object.values(w.queries.query);
                              k < P.length;
                              k++
                            )
                              for (
                                var B, F, L, V = 0, j = (B = P[k]).slice();
                                V < j.length;
                                V++
                              )
                                (F = j[V]).res != null &&
                                  m.mutatedParts &&
                                  (D && !F.dirty
                                    ? ((L = Object.isFrozen(F.res)),
                                      (L = Ac(F.res, F.req, M, E, F, L)),
                                      F.dirty
                                        ? (Vt(B, F),
                                          F.subscribers.forEach(function (U) {
                                            return b.add(U);
                                          }))
                                        : L !== F.res &&
                                          ((F.res = L),
                                          (F.promise = $.resolve({
                                            result: L,
                                          }))))
                                    : (F.dirty && Vt(B, F),
                                      F.subscribers.forEach(function (U) {
                                        return b.add(U);
                                      })));
                          }
                        }
                      }
                      b.forEach(function (U) {
                        return U();
                      });
                    }
                  };
                }),
                m.addEventListener('abort', d(!1), { signal: g }),
                m.addEventListener('error', d(!1), { signal: g }),
                m.addEventListener('complete', d(!0), { signal: g })),
              m
            );
          },
          table: function (u) {
            var l = o.table(u),
              d = l.schema.primaryKey;
            return t(t({}, l), {
              mutate: function (p) {
                var g = q.trans;
                if (
                  d.outbound ||
                  g.db._options.cache === 'disabled' ||
                  g.explicit ||
                  g.idbtrans.mode !== 'readwrite'
                )
                  return l.mutate(p);
                var m = Kt['idb://'.concat(s, '/').concat(u)];
                return m
                  ? ((g = l.mutate(p)),
                    (p.type !== 'add' && p.type !== 'put') ||
                    !(
                      50 <= p.values.length ||
                      Is(d, p).some(function (D) {
                        return D == null;
                      })
                    )
                      ? (m.optimisticOps.push(p),
                        p.mutatedParts && lo(p.mutatedParts),
                        g.then(function (D) {
                          0 < D.numFailures &&
                            (Vt(m.optimisticOps, p),
                            (D = xc(0, p, D)) && m.optimisticOps.push(D),
                            p.mutatedParts && lo(p.mutatedParts));
                        }),
                        g.catch(function () {
                          Vt(m.optimisticOps, p),
                            p.mutatedParts && lo(p.mutatedParts);
                        }))
                      : g.then(function (D) {
                          var b = xc(
                            0,
                            t(t({}, p), {
                              values: p.values.map(function (C, y) {
                                var S;
                                return D.failures[y]
                                  ? C
                                  : ((C =
                                      (S = d.keyPath) !== null &&
                                      S !== void 0 &&
                                      S.includes('.')
                                        ? Bt(C)
                                        : t({}, C)),
                                    Ee(C, d.keyPath, D.results[y]),
                                    C);
                              }),
                            }),
                            D,
                          );
                          m.optimisticOps.push(b),
                            queueMicrotask(function () {
                              return p.mutatedParts && lo(p.mutatedParts);
                            });
                        }),
                    g)
                  : l.mutate(p);
              },
              query: function (p) {
                if (!Tc(q, l) || !Nc('query', p)) return l.query(p);
                var g =
                    ((b = q.trans) === null || b === void 0
                      ? void 0
                      : b.db._options.cache) === 'immutable',
                  y = q,
                  m = y.requery,
                  D = y.signal,
                  b = (function (E, M, I, T) {
                    var N = Kt['idb://'.concat(E, '/').concat(M)];
                    if (!N) return [];
                    if (!(M = N.queries[I])) return [null, !1, N, null];
                    var x = M[(T.query ? T.query.index.name : null) || ''];
                    if (!x) return [null, !1, N, null];
                    switch (I) {
                      case 'query':
                        var k = x.find(function (P) {
                          return (
                            P.req.limit === T.limit &&
                            P.req.values === T.values &&
                            kc(P.req.query.range, T.query.range)
                          );
                        });
                        return k
                          ? [k, !0, N, x]
                          : [
                              x.find(function (P) {
                                return (
                                  ('limit' in P.req ? P.req.limit : 1 / 0) >=
                                    T.limit &&
                                  (!T.values || P.req.values) &&
                                  ug(P.req.query.range, T.query.range)
                                );
                              }),
                              !1,
                              N,
                              x,
                            ];
                      case 'count':
                        return (
                          (k = x.find(function (P) {
                            return kc(P.req.query.range, T.query.range);
                          })),
                          [k, !!k, N, x]
                        );
                    }
                  })(s, u, 'query', p),
                  C = b[0],
                  y = b[1],
                  S = b[2],
                  w = b[3];
                return (
                  C && y
                    ? (C.obsSet = p.obsSet)
                    : ((y = l
                        .query(p)
                        .then(function (E) {
                          var M = E.result;
                          if ((C && (C.res = M), g)) {
                            for (var I = 0, T = M.length; I < T; ++I)
                              Object.freeze(M[I]);
                            Object.freeze(M);
                          } else E.result = Bt(M);
                          return E;
                        })
                        .catch(function (E) {
                          return w && C && Vt(w, C), Promise.reject(E);
                        })),
                      (C = {
                        obsSet: p.obsSet,
                        promise: y,
                        subscribers: new Set(),
                        type: 'query',
                        req: p,
                        dirty: !1,
                      }),
                      w
                        ? w.push(C)
                        : ((w = [C]),
                          ((S =
                            S ||
                            (Kt['idb://'.concat(s, '/').concat(u)] = {
                              queries: { query: {}, count: {} },
                              objs: new Map(),
                              optimisticOps: [],
                              unsignaledParts: {},
                            })).queries.query[p.query.index.name || ''] = w))),
                  cg(C, w, m, D),
                  C.promise.then(function (E) {
                    return {
                      result: Ac(E.result, p, S?.optimisticOps, l, C, g),
                    };
                  })
                );
              },
            });
          },
        });
      },
    };
    function ho(o, s) {
      return new Proxy(o, {
        get: function (u, l, d) {
          return l === 'db' ? s : Reflect.get(u, l, d);
        },
      });
    }
    var ht =
      ((me.prototype.version = function (o) {
        if (isNaN(o) || o < 0.1)
          throw new G.Type('Given version is not a positive number');
        if (
          ((o = Math.round(10 * o) / 10),
          this.idbdb || this._state.isBeingOpened)
        )
          throw new G.Schema('Cannot add version when database is open');
        this.verno = Math.max(this.verno, o);
        var s = this._versions,
          u = s.filter(function (l) {
            return l._cfg.version === o;
          })[0];
        return (
          u ||
          ((u = new this.Version(o)),
          s.push(u),
          s.sort(Jp),
          u.stores({}),
          (this._state.autoSchema = !1),
          u)
        );
      }),
      (me.prototype._whenReady = function (o) {
        var s = this;
        return this.idbdb &&
          (this._state.openComplete || q.letThrough || this._vip)
          ? o()
          : new $(function (u, l) {
              if (s._state.openComplete)
                return l(new G.DatabaseClosed(s._state.dbOpenError));
              if (!s._state.isBeingOpened) {
                if (!s._state.autoOpen) return void l(new G.DatabaseClosed());
                s.open().catch(le);
              }
              s._state.dbReadyPromise.then(u, l);
            }).then(o);
      }),
      (me.prototype.use = function (o) {
        var s = o.stack,
          u = o.create,
          l = o.level,
          d = o.name;
        return (
          d && this.unuse({ stack: s, name: d }),
          (o = this._middlewares[s] || (this._middlewares[s] = [])),
          o.push({ stack: s, create: u, level: l ?? 10, name: d }),
          o.sort(function (p, g) {
            return p.level - g.level;
          }),
          this
        );
      }),
      (me.prototype.unuse = function (o) {
        var s = o.stack,
          u = o.name,
          l = o.create;
        return (
          s &&
            this._middlewares[s] &&
            (this._middlewares[s] = this._middlewares[s].filter(function (d) {
              return l ? d.create !== l : !!u && d.name !== u;
            })),
          this
        );
      }),
      (me.prototype.open = function () {
        var o = this;
        return zt(It, function () {
          return rg(o);
        });
      }),
      (me.prototype._close = function () {
        var o = this._state,
          s = bn.indexOf(this);
        if ((0 <= s && bn.splice(s, 1), this.idbdb)) {
          try {
            this.idbdb.close();
          } catch {}
          this.idbdb = null;
        }
        o.isBeingOpened ||
          ((o.dbReadyPromise = new $(function (u) {
            o.dbReadyResolve = u;
          })),
          (o.openCanceller = new $(function (u, l) {
            o.cancelOpen = l;
          })));
      }),
      (me.prototype.close = function (u) {
        var s = (u === void 0 ? { disableAutoOpen: !0 } : u).disableAutoOpen,
          u = this._state;
        s
          ? (u.isBeingOpened && u.cancelOpen(new G.DatabaseClosed()),
            this._close(),
            (u.autoOpen = !1),
            (u.dbOpenError = new G.DatabaseClosed()))
          : (this._close(),
            (u.autoOpen = this._options.autoOpen || u.isBeingOpened),
            (u.openComplete = !1),
            (u.dbOpenError = null));
      }),
      (me.prototype.delete = function (o) {
        var s = this;
        o === void 0 && (o = { disableAutoOpen: !0 });
        var u = 0 < arguments.length && typeof arguments[0] != 'object',
          l = this._state;
        return new $(function (d, p) {
          function g() {
            s.close(o);
            var m = s._deps.indexedDB.deleteDatabase(s.name);
            (m.onsuccess = pe(function () {
              var D, b, C;
              (D = s._deps),
                (b = s.name),
                (C = D.indexedDB),
                (D = D.IDBKeyRange),
                hs(C) || b === Yr || fs(C, D).delete(b).catch(le),
                d();
            })),
              (m.onerror = tt(p)),
              (m.onblocked = s._fireOnBlocked);
          }
          if (u)
            throw new G.InvalidArgument(
              'Invalid closeOptions argument to db.delete()',
            );
          l.isBeingOpened ? l.dbReadyPromise.then(g) : g();
        });
      }),
      (me.prototype.backendDB = function () {
        return this.idbdb;
      }),
      (me.prototype.isOpen = function () {
        return this.idbdb !== null;
      }),
      (me.prototype.hasBeenClosed = function () {
        var o = this._state.dbOpenError;
        return o && o.name === 'DatabaseClosed';
      }),
      (me.prototype.hasFailed = function () {
        return this._state.dbOpenError !== null;
      }),
      (me.prototype.dynamicallyOpened = function () {
        return this._state.autoSchema;
      }),
      Object.defineProperty(me.prototype, 'tables', {
        get: function () {
          var o = this;
          return i(this._allTables).map(function (s) {
            return o._allTables[s];
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (me.prototype.transaction = function () {
        var o = function (s, u, l) {
          var d = arguments.length;
          if (d < 2) throw new G.InvalidArgument('Too few arguments');
          for (var p = new Array(d - 1); --d; ) p[d - 1] = arguments[d];
          return (l = p.pop()), [s, Xu(p), l];
        }.apply(this, arguments);
        return this._transaction.apply(this, o);
      }),
      (me.prototype._transaction = function (o, s, u) {
        var l = this,
          d = q.trans;
        (d && d.db === this && o.indexOf('!') === -1) || (d = null);
        var p,
          g,
          m = o.indexOf('?') !== -1;
        o = o.replace('!', '').replace('?', '');
        try {
          if (
            ((g = s.map(function (b) {
              if (
                ((b = b instanceof l.Table ? b.name : b), typeof b != 'string')
              )
                throw new TypeError(
                  'Invalid table argument to Dexie.transaction(). Only Table or String are allowed',
                );
              return b;
            })),
            o == 'r' || o === es)
          )
            p = es;
          else {
            if (o != 'rw' && o != ts)
              throw new G.InvalidArgument('Invalid transaction mode: ' + o);
            p = ts;
          }
          if (d) {
            if (d.mode === es && p === ts) {
              if (!m)
                throw new G.SubTransaction(
                  'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY',
                );
              d = null;
            }
            d &&
              g.forEach(function (b) {
                if (d && d.storeNames.indexOf(b) === -1) {
                  if (!m)
                    throw new G.SubTransaction(
                      'Table ' + b + ' not included in parent transaction.',
                    );
                  d = null;
                }
              }),
              m && d && !d.active && (d = null);
          }
        } catch (b) {
          return d
            ? d._promise(null, function (C, y) {
                y(b);
              })
            : ge(b);
        }
        var D = function b(C, y, S, w, E) {
          return $.resolve().then(function () {
            var M = q.transless || q,
              I = C._createTransaction(y, S, C._dbSchema, w);
            if (((I.explicit = !0), (M = { trans: I, transless: M }), w))
              I.idbtrans = w.idbtrans;
            else
              try {
                I.create(),
                  (I.idbtrans._explicit = !0),
                  (C._state.PR1398_maxLoop = 3);
              } catch (x) {
                return x.name === qi.InvalidState &&
                  C.isOpen() &&
                  0 < --C._state.PR1398_maxLoop
                  ? (console.warn('Dexie: Need to reopen db'),
                    C.close({ disableAutoOpen: !1 }),
                    C.open().then(function () {
                      return b(C, y, S, null, E);
                    }))
                  : ge(x);
              }
            var T,
              N = Ui(E);
            return (
              N && wn(),
              (M = $.follow(function () {
                var x;
                (T = E.call(I, I)) &&
                  (N
                    ? ((x = Ct.bind(null, null)), T.then(x, x))
                    : typeof T.next == 'function' &&
                      typeof T.throw == 'function' &&
                      (T = ws(T)));
              }, M)),
              (T && typeof T.then == 'function'
                ? $.resolve(T).then(function (x) {
                    return I.active
                      ? x
                      : ge(
                          new G.PrematureCommit(
                            'Transaction committed too early. See http://bit.ly/2kdckMn',
                          ),
                        );
                  })
                : M.then(function () {
                    return T;
                  })
              )
                .then(function (x) {
                  return (
                    w && I._resolve(),
                    I._completion.then(function () {
                      return x;
                    })
                  );
                })
                .catch(function (x) {
                  return I._reject(x), ge(x);
                })
            );
          });
        }.bind(null, this, p, g, d, u);
        return d
          ? d._promise(p, D, 'lock')
          : q.trans
            ? zt(q.transless, function () {
                return l._whenReady(D);
              })
            : this._whenReady(D);
      }),
      (me.prototype.table = function (o) {
        if (!v(this._allTables, o))
          throw new G.InvalidTable('Table '.concat(o, ' does not exist'));
        return this._allTables[o];
      }),
      me);
    function me(o, s) {
      var u = this;
      (this._middlewares = {}), (this.verno = 0);
      var l = me.dependencies;
      (this._options = s =
        t(
          {
            addons: me.addons,
            autoOpen: !0,
            indexedDB: l.indexedDB,
            IDBKeyRange: l.IDBKeyRange,
            cache: 'cloned',
          },
          s,
        )),
        (this._deps = { indexedDB: s.indexedDB, IDBKeyRange: s.IDBKeyRange }),
        (l = s.addons),
        (this._dbSchema = {}),
        (this._versions = []),
        (this._storeNames = []),
        (this._allTables = {}),
        (this.idbdb = null),
        (this._novip = this);
      var d,
        p,
        g,
        m,
        D,
        b = {
          dbOpenError: null,
          isBeingOpened: !1,
          onReadyBeingFired: null,
          openComplete: !1,
          dbReadyResolve: le,
          dbReadyPromise: null,
          cancelOpen: le,
          openCanceller: null,
          autoSchema: !0,
          PR1398_maxLoop: 3,
          autoOpen: s.autoOpen,
        };
      (b.dbReadyPromise = new $(function (y) {
        b.dbReadyResolve = y;
      })),
        (b.openCanceller = new $(function (y, S) {
          b.cancelOpen = S;
        })),
        (this._state = b),
        (this.name = o),
        (this.on = Jn(this, 'populate', 'blocked', 'versionchange', 'close', {
          ready: [zi, le],
        })),
        (this.on.ready.subscribe = ye(this.on.ready.subscribe, function (y) {
          return function (S, w) {
            me.vip(function () {
              var E,
                M = u._state;
              M.openComplete
                ? (M.dbOpenError || $.resolve().then(S), w && y(S))
                : M.onReadyBeingFired
                  ? (M.onReadyBeingFired.push(S), w && y(S))
                  : (y(S),
                    (E = u),
                    w ||
                      y(function I() {
                        E.on.ready.unsubscribe(S), E.on.ready.unsubscribe(I);
                      }));
            });
          };
        })),
        (this.Collection =
          ((d = this),
          er(Gp.prototype, function (T, I) {
            this.db = d;
            var w = cc,
              E = null;
            if (I)
              try {
                w = I();
              } catch (N) {
                E = N;
              }
            var M = T._ctx,
              I = M.table,
              T = I.hook.reading.fire;
            this._ctx = {
              table: I,
              index: M.index,
              isPrimKey:
                !M.index ||
                (I.schema.primKey.keyPath && M.index === I.schema.primKey.name),
              range: w,
              keysOnly: !1,
              dir: 'next',
              unique: '',
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: E,
              or: M.or,
              valueMapper: T !== Kn ? T : null,
            };
          }))),
        (this.Table =
          ((p = this),
          er(hc.prototype, function (y, S, w) {
            (this.db = p),
              (this._tx = w),
              (this.name = y),
              (this.schema = S),
              (this.hook = p._allTables[y]
                ? p._allTables[y].hook
                : Jn(null, {
                    creating: [Lp, le],
                    reading: [Fp, Kn],
                    updating: [Bp, le],
                    deleting: [jp, le],
                  }));
          }))),
        (this.Transaction =
          ((g = this),
          er(Zp.prototype, function (y, S, w, E, M) {
            var I = this;
            (this.db = g),
              (this.mode = y),
              (this.storeNames = S),
              (this.schema = w),
              (this.chromeTransactionDurability = E),
              (this.idbtrans = null),
              (this.on = Jn(this, 'complete', 'error', 'abort')),
              (this.parent = M || null),
              (this.active = !0),
              (this._reculock = 0),
              (this._blockedFuncs = []),
              (this._resolve = null),
              (this._reject = null),
              (this._waitingFor = null),
              (this._waitingQueue = null),
              (this._spinCount = 0),
              (this._completion = new $(function (T, N) {
                (I._resolve = T), (I._reject = N);
              })),
              this._completion.then(
                function () {
                  (I.active = !1), I.on.complete.fire();
                },
                function (T) {
                  var N = I.active;
                  return (
                    (I.active = !1),
                    I.on.error.fire(T),
                    I.parent
                      ? I.parent._reject(T)
                      : N && I.idbtrans && I.idbtrans.abort(),
                    ge(T)
                  );
                },
              );
          }))),
        (this.Version =
          ((m = this),
          er(ng.prototype, function (y) {
            (this.db = m),
              (this._cfg = {
                version: y,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null,
              });
          }))),
        (this.WhereClause =
          ((D = this),
          er(vc.prototype, function (y, S, w) {
            if (
              ((this.db = D),
              (this._ctx = { table: y, index: S === ':id' ? null : S, or: w }),
              (this._cmp = this._ascending = oe),
              (this._descending = function (E, M) {
                return oe(M, E);
              }),
              (this._max = function (E, M) {
                return 0 < oe(E, M) ? E : M;
              }),
              (this._min = function (E, M) {
                return oe(E, M) < 0 ? E : M;
              }),
              (this._IDBKeyRange = D._deps.IDBKeyRange),
              !this._IDBKeyRange)
            )
              throw new G.MissingAPI();
          }))),
        this.on('versionchange', function (y) {
          0 < y.newVersion
            ? console.warn(
                "Another connection wants to upgrade database '".concat(
                  u.name,
                  "'. Closing db now to resume the upgrade.",
                ),
              )
            : console.warn(
                "Another connection wants to delete database '".concat(
                  u.name,
                  "'. Closing db now to resume the delete request.",
                ),
              ),
            u.close({ disableAutoOpen: !1 });
        }),
        this.on('blocked', function (y) {
          !y.newVersion || y.newVersion < y.oldVersion
            ? console.warn("Dexie.delete('".concat(u.name, "') was blocked"))
            : console.warn(
                "Upgrade '"
                  .concat(
                    u.name,
                    "' blocked by other connection holding version ",
                  )
                  .concat(y.oldVersion / 10),
              );
        }),
        (this._maxKey = or(s.IDBKeyRange)),
        (this._createTransaction = function (y, S, w, E) {
          return new u.Transaction(
            y,
            S,
            w,
            u._options.chromeTransactionDurability,
            E,
          );
        }),
        (this._fireOnBlocked = function (y) {
          u.on('blocked').fire(y),
            bn
              .filter(function (S) {
                return S.name === u.name && S !== u && !S._state.vcFired;
              })
              .map(function (S) {
                return S.on('versionchange').fire(y);
              });
        }),
        this.use(sg),
        this.use(lg),
        this.use(ag),
        this.use(og),
        this.use(ig);
      var C = new Proxy(this, {
        get: function (y, S, w) {
          if (S === '_vip') return !0;
          if (S === 'table')
            return function (M) {
              return ho(u.table(M), C);
            };
          var E = Reflect.get(y, S, w);
          return E instanceof hc
            ? ho(E, C)
            : S === 'tables'
              ? E.map(function (M) {
                  return ho(M, C);
                })
              : S === '_createTransaction'
                ? function () {
                    return ho(E.apply(this, arguments), C);
                  }
                : E;
        },
      });
      (this.vip = C),
        l.forEach(function (y) {
          return y(u);
        });
    }
    var po,
      Ge =
        typeof Symbol < 'u' && 'observable' in Symbol
          ? Symbol.observable
          : '@@observable',
      dg =
        ((Cs.prototype.subscribe = function (o, s, u) {
          return this._subscribe(
            o && typeof o != 'function'
              ? o
              : { next: o, error: s, complete: u },
          );
        }),
        (Cs.prototype[Ge] = function () {
          return this;
        }),
        Cs);
    function Cs(o) {
      this._subscribe = o;
    }
    try {
      po = {
        indexedDB:
          r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
        IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange,
      };
    } catch {
      po = { indexedDB: null, IDBKeyRange: null };
    }
    function Rc(o) {
      var s,
        u = !1,
        l = new dg(function (d) {
          var p = Ui(o),
            g,
            m = !1,
            D = {},
            b = {},
            C = {
              get closed() {
                return m;
              },
              unsubscribe: function () {
                m ||
                  ((m = !0),
                  g && g.abort(),
                  y && St.storagemutated.unsubscribe(w));
              },
            };
          d.start && d.start(C);
          var y = !1,
            S = function () {
              return Ji(E);
            },
            w = function (M) {
              co(D, M), ms(b, D) && S();
            },
            E = function () {
              var M, I, T;
              !m &&
                po.indexedDB &&
                ((D = {}),
                (M = {}),
                g && g.abort(),
                (g = new AbortController()),
                (T = (function (N) {
                  var x = vn();
                  try {
                    p && wn();
                    var k = Et(o, N);
                    return (k = p ? k.finally(Ct) : k);
                  } finally {
                    x && Dn();
                  }
                })(
                  (I = {
                    subscr: M,
                    signal: g.signal,
                    requery: S,
                    querier: o,
                    trans: null,
                  }),
                )),
                Promise.resolve(T).then(
                  function (N) {
                    (u = !0),
                      (s = N),
                      m ||
                        I.signal.aborted ||
                        ((D = {}),
                        (function (x) {
                          for (var k in x) if (v(x, k)) return;
                          return 1;
                        })((b = M)) ||
                          y ||
                          (St(rr, w), (y = !0)),
                        Ji(function () {
                          return !m && d.next && d.next(N);
                        }));
                  },
                  function (N) {
                    (u = !1),
                      ['DatabaseClosedError', 'AbortError'].includes(N?.name) ||
                        m ||
                        Ji(function () {
                          m || (d.error && d.error(N));
                        });
                  },
                ));
            };
          return setTimeout(S, 0), C;
        });
      return (
        (l.hasValue = function () {
          return u;
        }),
        (l.getValue = function () {
          return s;
        }),
        l
      );
    }
    var Zt = ht;
    function _s(o) {
      var s = Tt;
      try {
        (Tt = !0), St.storagemutated.fire(o), Ds(o, !0);
      } finally {
        Tt = s;
      }
    }
    _(
      Zt,
      t(t({}, $r), {
        delete: function (o) {
          return new Zt(o, { addons: [] }).delete();
        },
        exists: function (o) {
          return new Zt(o, { addons: [] })
            .open()
            .then(function (s) {
              return s.close(), !0;
            })
            .catch('NoSuchDatabaseError', function () {
              return !1;
            });
        },
        getDatabaseNames: function (o) {
          try {
            return (
              (s = Zt.dependencies),
              (u = s.indexedDB),
              (s = s.IDBKeyRange),
              (hs(u)
                ? Promise.resolve(u.databases()).then(function (l) {
                    return l
                      .map(function (d) {
                        return d.name;
                      })
                      .filter(function (d) {
                        return d !== Yr;
                      });
                  })
                : fs(u, s).toCollection().primaryKeys()
              ).then(o)
            );
          } catch {
            return ge(new G.MissingAPI());
          }
          var s, u;
        },
        defineClass: function () {
          return function (o) {
            c(this, o);
          };
        },
        ignoreTransaction: function (o) {
          return q.trans ? zt(q.transless, o) : o();
        },
        vip: ps,
        async: function (o) {
          return function () {
            try {
              var s = ws(o.apply(this, arguments));
              return s && typeof s.then == 'function' ? s : $.resolve(s);
            } catch (u) {
              return ge(u);
            }
          };
        },
        spawn: function (o, s, u) {
          try {
            var l = ws(o.apply(u, s || []));
            return l && typeof l.then == 'function' ? l : $.resolve(l);
          } catch (d) {
            return ge(d);
          }
        },
        currentTransaction: {
          get: function () {
            return q.trans || null;
          },
        },
        waitFor: function (o, s) {
          return (
            (s = $.resolve(
              typeof o == 'function' ? Zt.ignoreTransaction(o) : o,
            ).timeout(s || 6e4)),
            q.trans ? q.trans.waitFor(s) : s
          );
        },
        Promise: $,
        debug: {
          get: function () {
            return et;
          },
          set: function (o) {
            nc(o);
          },
        },
        derive: A,
        extend: c,
        props: _,
        override: ye,
        Events: Jn,
        on: St,
        liveQuery: Rc,
        extendObservabilitySet: co,
        getByKeyPath: Ze,
        setByKeyPath: Ee,
        delByKeyPath: function (o, s) {
          typeof s == 'string'
            ? Ee(o, s, void 0)
            : 'length' in s &&
              [].map.call(s, function (u) {
                Ee(o, u, void 0);
              });
        },
        shallowClone: Gn,
        deepClone: Bt,
        getObjectDiff: bs,
        cmp: oe,
        asap: jt,
        minKey: -1 / 0,
        addons: [],
        connections: bn,
        errnames: qi,
        dependencies: po,
        cache: Kt,
        semVer: '4.0.10',
        version: '4.0.10'
          .split('.')
          .map(function (o) {
            return parseInt(o);
          })
          .reduce(function (o, s, u) {
            return o + s / Math.pow(10, 2 * u);
          }),
      }),
    ),
      (Zt.maxKey = or(Zt.dependencies.IDBKeyRange)),
      typeof dispatchEvent < 'u' &&
        typeof addEventListener < 'u' &&
        (St(rr, function (o) {
          Tt ||
            ((o = new CustomEvent(is, { detail: o })),
            (Tt = !0),
            dispatchEvent(o),
            (Tt = !1));
        }),
        addEventListener(is, function (o) {
          (o = o.detail), Tt || _s(o);
        }));
    var Cn,
      Tt = !1,
      Oc = function () {};
    return (
      typeof BroadcastChannel < 'u' &&
        ((Oc = function () {
          (Cn = new BroadcastChannel(is)).onmessage = function (o) {
            return o.data && _s(o.data);
          };
        })(),
        typeof Cn.unref == 'function' && Cn.unref(),
        St(rr, function (o) {
          Tt || Cn.postMessage(o);
        })),
      typeof addEventListener < 'u' &&
        (addEventListener('pagehide', function (o) {
          if (!ht.disableBfCache && o.persisted) {
            et && console.debug('Dexie: handling persisted pagehide'),
              Cn?.close();
            for (var s = 0, u = bn; s < u.length; s++)
              u[s].close({ disableAutoOpen: !1 });
          }
        }),
        addEventListener('pageshow', function (o) {
          !ht.disableBfCache &&
            o.persisted &&
            (et && console.debug('Dexie: handling persisted pageshow'),
            Oc(),
            _s({ all: new _e(-1 / 0, [[]]) }));
        })),
      ($.rejectionMapper = function (o, s) {
        return !o ||
          o instanceof mn ||
          o instanceof TypeError ||
          o instanceof SyntaxError ||
          !o.name ||
          !tc[o.name]
          ? o
          : ((s = new tc[o.name](s || o.message, o)),
            'stack' in o &&
              O(s, 'stack', {
                get: function () {
                  return this.inner.stack;
                },
              }),
            s);
      }),
      nc(et),
      t(
        ht,
        Object.freeze({
          __proto__: null,
          Dexie: ht,
          liveQuery: Rc,
          Entity: lc,
          cmp: oe,
          PropModSymbol: ft,
          PropModification: tr,
          replacePrefix: function (o, s) {
            return new tr({ replacePrefix: [o, s] });
          },
          add: function (o) {
            return new tr({ add: o });
          },
          remove: function (o) {
            return new tr({ remove: o });
          },
          default: ht,
          RangeSet: _e,
          mergeRanges: ar,
          rangesOverlap: Ec,
        }),
        { default: ht },
      ),
      ht
    );
  });
});
function cl(e, t) {
  return Object.is(e, t);
}
var ve = null,
  _o = !1,
  Ps = 1,
  ke = Symbol('SIGNAL');
function ee(e) {
  let t = ve;
  return (ve = e), t;
}
function ll() {
  return ve;
}
var _n = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  kind: 'unknown',
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function So(e) {
  if (_o) throw new Error('');
  if (ve === null) return;
  ve.consumerOnSignalRead(e);
  let t = ve.nextProducerIndex++;
  if (
    (Ao(ve), t < ve.producerNode.length && ve.producerNode[t] !== e && ur(ve))
  ) {
    let n = ve.producerNode[t];
    xo(n, ve.producerIndexOfThis[t]);
  }
  ve.producerNode[t] !== e &&
    ((ve.producerNode[t] = e),
    (ve.producerIndexOfThis[t] = ur(ve) ? pl(e, ve, t) : 0)),
    (ve.producerLastReadVersion[t] = e.version);
}
function pg() {
  Ps++;
}
function dl(e) {
  if (!(ur(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Ps)) {
    if (!e.producerMustRecompute(e) && !No(e)) {
      ul(e);
      return;
    }
    e.producerRecomputeValue(e), ul(e);
  }
}
function fl(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = _o;
  _o = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || gg(n);
  } finally {
    _o = t;
  }
}
function hl() {
  return ve?.consumerAllowSignalWrites !== !1;
}
function gg(e) {
  (e.dirty = !0), fl(e), e.consumerMarkedDirty?.(e);
}
function ul(e) {
  (e.dirty = !1), (e.lastCleanEpoch = Ps);
}
function cr(e) {
  return e && (e.nextProducerIndex = 0), ee(e);
}
function To(e, t) {
  if (
    (ee(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (ur(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        xo(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function No(e) {
  Ao(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (dl(n), r !== n.version)) return !0;
  }
  return !1;
}
function lr(e) {
  if ((Ao(e), ur(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      xo(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function pl(e, t, n) {
  if ((gl(e), e.liveConsumerNode.length === 0 && ml(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = pl(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function xo(e, t) {
  if ((gl(e), e.liveConsumerNode.length === 1 && ml(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      xo(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      i = e.liveConsumerNode[t];
    Ao(i), (i.producerIndexOfThis[r] = t);
  }
}
function ur(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Ao(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function gl(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function ml(e) {
  return e.producerNode !== void 0;
}
function Fs(e) {
  let t = Object.create(mg);
  t.computation = e;
  let n = () => {
    if ((dl(t), So(t), t.value === Mo)) throw t.error;
    return t.value;
  };
  return (n[ke] = t), n;
}
var Rs = Symbol('UNSET'),
  Os = Symbol('COMPUTING'),
  Mo = Symbol('ERRORED'),
  mg = Le(Fe({}, _n), {
    value: Rs,
    dirty: !0,
    error: null,
    equal: cl,
    kind: 'computed',
    producerMustRecompute(e) {
      return e.value === Rs || e.value === Os;
    },
    producerRecomputeValue(e) {
      if (e.value === Os) throw new Error('Detected cycle in computations.');
      let t = e.value;
      e.value = Os;
      let n = cr(e),
        r,
        i = !1;
      try {
        (r = e.computation()),
          ee(null),
          (i = t !== Rs && t !== Mo && r !== Mo && e.equal(t, r));
      } catch (a) {
        (r = Mo), (e.error = a);
      } finally {
        To(e, n);
      }
      if (i) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function yg() {
  throw new Error();
}
var yl = yg;
function vl(e) {
  yl(e);
}
function Dl(e) {
  yl = e;
}
var vg = null;
function wl(e) {
  let t = Object.create(Ls);
  t.value = e;
  let n = () => (So(t), t.value);
  return (n[ke] = t), n;
}
function ko(e, t) {
  hl() || vl(e), e.equal(e.value, t) || ((e.value = t), Dg(e));
}
function bl(e, t) {
  hl() || vl(e), ko(e, t(e.value));
}
var Ls = Le(Fe({}, _n), { equal: cl, value: void 0, kind: 'signal' });
function Dg(e) {
  e.version++, pg(), fl(e), vg?.();
}
var js;
function dr() {
  return js;
}
function pt(e) {
  let t = js;
  return (js = e), t;
}
var Bs = Symbol('NotFound');
var wg =
    'https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss',
  ne = class extends Error {
    code;
    constructor(t, n) {
      super(qa(t, n)), (this.code = t);
    }
  };
function qa(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ': ' + t : ''}`;
}
var id = Symbol('InputSignalNode#UNSET'),
  bg = Le(Fe({}, Ls), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
      ko(e, t);
    },
  });
function sd(e, t) {
  let n = Object.create(bg);
  (n.value = e), (n.transformFn = t?.transform);
  function r() {
    if ((So(n), n.value === id)) throw new ne(-950, !1);
    return n.value;
  }
  return (r[ke] = n), r;
}
function pi(e) {
  return { toString: e }.toString();
}
function fe(e) {
  for (let t in e) if (e[t] === fe) return t;
  throw Error('Could not find renamed property on target object.');
}
function Ig(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function Be(e) {
  if (typeof e == 'string') return e;
  if (Array.isArray(e)) return `[${e.map(Be).join(', ')}]`;
  if (e == null) return '' + e;
  let t = e.overriddenName || e.name;
  if (t) return `${t}`;
  let n = e.toString();
  if (n == null) return '' + n;
  let r = n.indexOf(`
`);
  return r >= 0 ? n.slice(0, r) : n;
}
function Il(e, t) {
  return e ? (t ? `${e} ${t}` : e) : t || '';
}
var Eg = fe({ __forward_ref__: fe });
function ad(e) {
  return (
    (e.__forward_ref__ = ad),
    (e.toString = function () {
      return Be(this());
    }),
    e
  );
}
function Re(e) {
  return ud(e) ? e() : e;
}
function ud(e) {
  return (
    typeof e == 'function' && e.hasOwnProperty(Eg) && e.__forward_ref__ === ad
  );
}
function ue(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function gi(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function mi(e) {
  return El(e, cd) || El(e, ld);
}
function jI(e) {
  return mi(e) !== null;
}
function El(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Cg(e) {
  let t = e && (e[cd] || e[ld]);
  return t || null;
}
function Cl(e) {
  return e && (e.hasOwnProperty(_l) || e.hasOwnProperty(_g)) ? e[_l] : null;
}
var cd = fe({ ɵprov: fe }),
  _l = fe({ ɵinj: fe }),
  ld = fe({ ngInjectableDef: fe }),
  _g = fe({ ngInjectorDef: fe }),
  se = class {
    _desc;
    ngMetadataName = 'InjectionToken';
    ɵprov;
    constructor(t, n) {
      (this._desc = t),
        (this.ɵprov = void 0),
        typeof n == 'number'
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = ue({
              token: this,
              providedIn: n.providedIn || 'root',
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function dd(e) {
  return e && !!e.ɵproviders;
}
var Mg = fe({ ɵcmp: fe }),
  Sg = fe({ ɵdir: fe }),
  Tg = fe({ ɵpipe: fe }),
  Ng = fe({ ɵmod: fe }),
  Vo = fe({ ɵfac: fe }),
  gr = fe({ __NG_ELEMENT_ID__: fe }),
  Ml = fe({ __NG_ENV_ID__: fe });
function za(e) {
  return typeof e == 'string' ? e : e == null ? '' : String(e);
}
function xg(e) {
  return typeof e == 'function'
    ? e.name || e.toString()
    : typeof e == 'object' && e != null && typeof e.type == 'function'
      ? e.type.name || e.type.toString()
      : za(e);
}
function fd(e, t) {
  throw new ne(-200, e);
}
function Ga(e, t) {
  throw new ne(-201, !1);
}
var re = (function (e) {
    return (
      (e[(e.Default = 0)] = 'Default'),
      (e[(e.Host = 1)] = 'Host'),
      (e[(e.Self = 2)] = 'Self'),
      (e[(e.SkipSelf = 4)] = 'SkipSelf'),
      (e[(e.Optional = 8)] = 'Optional'),
      e
    );
  })(re || {}),
  Js;
function hd() {
  return Js;
}
function je(e) {
  let t = Js;
  return (Js = e), t;
}
function pd(e, t, n) {
  let r = mi(e);
  if (r && r.providedIn == 'root')
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & re.Optional) return null;
  if (t !== void 0) return t;
  Ga(e, 'Injector');
}
var Ag = {},
  Yt = Ag,
  kg = '__NG_DI_FLAG__',
  Ho = class {
    injector;
    constructor(t) {
      this.injector = t;
    }
    retrieve(t, n) {
      let r = n;
      return this.injector.get(t, r.optional ? Bs : Yt, r);
    }
  },
  $o = 'ngTempTokenPath',
  Rg = 'ngTokenPath',
  Og = /\n/gm,
  Pg = '\u0275',
  Sl = '__source';
function Fg(e, t = re.Default) {
  if (dr() === void 0) throw new ne(-203, !1);
  if (dr() === null) return pd(e, void 0, t);
  {
    let n = dr(),
      r;
    return (
      n instanceof Ho ? (r = n.injector) : (r = n),
      r.get(e, t & re.Optional ? null : void 0, t)
    );
  }
}
function Te(e, t = re.Default) {
  return (hd() || Fg)(Re(e), t);
}
function z(e, t = re.Default) {
  return Te(e, yi(t));
}
function yi(e) {
  return typeof e > 'u' || typeof e == 'number'
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function ea(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = Re(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new ne(900, !1);
      let i,
        a = re.Default;
      for (let c = 0; c < r.length; c++) {
        let f = r[c],
          h = Lg(f);
        typeof h == 'number' ? (h === -1 ? (i = f.token) : (a |= h)) : (i = f);
      }
      t.push(Te(i, a));
    } else t.push(Te(r));
  }
  return t;
}
function Lg(e) {
  return e[kg];
}
function jg(e, t, n, r) {
  let i = e[$o];
  throw (
    (t[Sl] && i.unshift(t[Sl]),
    (e.message = Bg(
      `
` + e.message,
      i,
      n,
      r,
    )),
    (e[Rg] = i),
    (e[$o] = null),
    e)
  );
}
function Bg(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Pg
      ? e.slice(2)
      : e;
  let i = Be(t);
  if (Array.isArray(t)) i = t.map(Be).join(' -> ');
  else if (typeof t == 'object') {
    let a = [];
    for (let c in t)
      if (t.hasOwnProperty(c)) {
        let f = t[c];
        a.push(c + ':' + (typeof f == 'string' ? JSON.stringify(f) : Be(f)));
      }
    i = `{${a.join(', ')}}`;
  }
  return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(
    Og,
    `
  `,
  )}`;
}
function Jt(e, t) {
  let n = e.hasOwnProperty(Vo);
  return n ? e[Vo] : null;
}
function Vg(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t[r];
    if ((n && ((i = n(i)), (a = n(a))), a !== i)) return !1;
  }
  return !0;
}
function Hg(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Wa(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Wa(n, t) : t(n)));
}
function gd(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function Uo(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function $g(e, t, n, r) {
  let i = e.length;
  if (i == t) e.push(n, r);
  else if (i === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (i--, e.push(e[i - 1], e[i]); i > t; ) {
      let a = i - 2;
      (e[i] = e[a]), i--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function Ug(e, t, n) {
  let r = Sr(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), $g(e, r, t, n)), r;
}
function Vs(e, t) {
  let n = Sr(e, t);
  if (n >= 0) return e[n | 1];
}
function Sr(e, t) {
  return qg(e, t, 1);
}
function qg(e, t, n) {
  let r = 0,
    i = e.length >> n;
  for (; i !== r; ) {
    let a = r + ((i - r) >> 1),
      c = e[a << n];
    if (t === c) return a << n;
    c > t ? (i = a) : (r = a + 1);
  }
  return ~(i << n);
}
var en = {},
  qe = [],
  qo = new se(''),
  md = new se('', -1),
  yd = new se(''),
  zo = class {
    get(t, n = Yt) {
      if (n === Yt) {
        let r = new Error(`NullInjectorError: No provider for ${Be(t)}!`);
        throw ((r.name = 'NullInjectorError'), r);
      }
      return n;
    }
  };
function vd(e, t) {
  let n = e[Ng] || null;
  if (!n && t === !0)
    throw new Error(`Type ${Be(e)} does not have '\u0275mod' property.`);
  return n;
}
function tn(e) {
  return e[Mg] || null;
}
function zg(e) {
  return e[Sg] || null;
}
function Gg(e) {
  return e[Tg] || null;
}
function Dd(e) {
  return { ɵproviders: e };
}
function Wg(...e) {
  return { ɵproviders: wd(!0, e), ɵfromNgModule: !0 };
}
function wd(e, ...t) {
  let n = [],
    r = new Set(),
    i,
    a = (c) => {
      n.push(c);
    };
  return (
    Wa(t, (c) => {
      let f = c;
      ta(f, a, [], r) && ((i ||= []), i.push(f));
    }),
    i !== void 0 && bd(i, a),
    n
  );
}
function bd(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: i } = e[n];
    Ka(i, (a) => {
      t(a, r);
    });
  }
}
function ta(e, t, n, r) {
  if (((e = Re(e)), !e)) return !1;
  let i = null,
    a = Cl(e),
    c = !a && tn(e);
  if (!a && !c) {
    let h = e.ngModule;
    if (((a = Cl(h)), a)) i = h;
    else return !1;
  } else {
    if (c && !c.standalone) return !1;
    i = e;
  }
  let f = r.has(i);
  if (c) {
    if (f) return !1;
    if ((r.add(i), c.dependencies)) {
      let h =
        typeof c.dependencies == 'function' ? c.dependencies() : c.dependencies;
      for (let v of h) ta(v, t, n, r);
    }
  } else if (a) {
    if (a.imports != null && !f) {
      r.add(i);
      let v;
      try {
        Wa(a.imports, (_) => {
          ta(_, t, n, r) && ((v ||= []), v.push(_));
        });
      } finally {
      }
      v !== void 0 && bd(v, t);
    }
    if (!f) {
      let v = Jt(i) || (() => new i());
      t({ provide: i, useFactory: v, deps: qe }, i),
        t({ provide: yd, useValue: i, multi: !0 }, i),
        t({ provide: qo, useValue: () => Te(i), multi: !0 }, i);
    }
    let h = a.providers;
    if (h != null && !f) {
      let v = e;
      Ka(h, (_) => {
        t(_, v);
      });
    }
  } else return !1;
  return i !== e && e.providers !== void 0;
}
function Ka(e, t) {
  for (let n of e)
    dd(n) && (n = n.ɵproviders), Array.isArray(n) ? Ka(n, t) : t(n);
}
var Kg = fe({ provide: String, useValue: fe });
function Id(e) {
  return e !== null && typeof e == 'object' && Kg in e;
}
function Zg(e) {
  return !!(e && e.useExisting);
}
function Qg(e) {
  return !!(e && e.useFactory);
}
function kn(e) {
  return typeof e == 'function';
}
function Yg(e) {
  return !!e.useClass;
}
var Ed = new se(''),
  Oo = {},
  Tl = {},
  Hs;
function Za() {
  return Hs === void 0 && (Hs = new zo()), Hs;
}
var kt = class {},
  mr = class extends kt {
    parent;
    source;
    scopes;
    records = new Map();
    _ngOnDestroyHooks = new Set();
    _onDestroyHooks = [];
    get destroyed() {
      return this._destroyed;
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, i) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = i),
        ra(t, (c) => this.processProvider(c)),
        this.records.set(md, Mn(void 0, this)),
        i.has('environment') && this.records.set(kt, Mn(void 0, this));
      let a = this.records.get(Ed);
      a != null && typeof a.value == 'string' && this.scopes.add(a.value),
        (this.injectorDefTypes = new Set(this.get(yd, qe, re.Self)));
    }
    retrieve(t, n) {
      let r = n;
      return this.get(t, r.optional ? Bs : Yt, r);
    }
    destroy() {
      hr(this), (this._destroyed = !0);
      let t = ee(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          ee(t);
      }
    }
    onDestroy(t) {
      return (
        hr(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      hr(this);
      let n = pt(this),
        r = je(void 0),
        i;
      try {
        return t();
      } finally {
        pt(n), je(r);
      }
    }
    get(t, n = Yt, r = re.Default) {
      if ((hr(this), t.hasOwnProperty(Ml))) return t[Ml](this);
      r = yi(r);
      let i,
        a = pt(this),
        c = je(void 0);
      try {
        if (!(r & re.SkipSelf)) {
          let h = this.records.get(t);
          if (h === void 0) {
            let v = nm(t) && mi(t);
            v && this.injectableDefInScope(v)
              ? (h = Mn(na(t), Oo))
              : (h = null),
              this.records.set(t, h);
          }
          if (h != null) return this.hydrate(t, h);
        }
        let f = r & re.Self ? Za() : this.parent;
        return (n = r & re.Optional && n === Yt ? null : n), f.get(t, n);
      } catch (f) {
        if (f.name === 'NullInjectorError') {
          if (((f[$o] = f[$o] || []).unshift(Be(t)), a)) throw f;
          return jg(f, t, 'R3InjectorError', this.source);
        } else throw f;
      } finally {
        je(c), pt(a);
      }
    }
    resolveInjectorInitializers() {
      let t = ee(null),
        n = pt(this),
        r = je(void 0),
        i;
      try {
        let a = this.get(qo, qe, re.Self);
        for (let c of a) c();
      } finally {
        pt(n), je(r), ee(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(Be(r));
      return `R3Injector[${t.join(', ')}]`;
    }
    processProvider(t) {
      t = Re(t);
      let n = kn(t) ? t : Re(t && t.provide),
        r = Jg(t);
      if (!kn(t) && t.multi === !0) {
        let i = this.records.get(n);
        i ||
          ((i = Mn(void 0, Oo, !0)),
          (i.factory = () => ea(i.multi)),
          this.records.set(n, i)),
          (n = t),
          i.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = ee(null);
      try {
        return (
          n.value === Tl
            ? fd(Be(t))
            : n.value === Oo && ((n.value = Tl), (n.value = n.factory())),
          typeof n.value == 'object' &&
            n.value &&
            tm(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        ee(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = Re(t.providedIn);
      return typeof n == 'string'
        ? n === 'any' || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function na(e) {
  let t = mi(e),
    n = t !== null ? t.factory : Jt(e);
  if (n !== null) return n;
  if (e instanceof se) throw new ne(204, !1);
  if (e instanceof Function) return Xg(e);
  throw new ne(204, !1);
}
function Xg(e) {
  if (e.length > 0) throw new ne(204, !1);
  let n = Cg(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function Jg(e) {
  if (Id(e)) return Mn(void 0, e.useValue);
  {
    let t = Cd(e);
    return Mn(t, Oo);
  }
}
function Cd(e, t, n) {
  let r;
  if (kn(e)) {
    let i = Re(e);
    return Jt(i) || na(i);
  } else if (Id(e)) r = () => Re(e.useValue);
  else if (Qg(e)) r = () => e.useFactory(...ea(e.deps || []));
  else if (Zg(e)) r = () => Te(Re(e.useExisting));
  else {
    let i = Re(e && (e.useClass || e.provide));
    if (em(e)) r = () => new i(...ea(e.deps));
    else return Jt(i) || na(i);
  }
  return r;
}
function hr(e) {
  if (e.destroyed) throw new ne(205, !1);
}
function Mn(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function em(e) {
  return !!e.deps;
}
function tm(e) {
  return (
    e !== null && typeof e == 'object' && typeof e.ngOnDestroy == 'function'
  );
}
function nm(e) {
  return typeof e == 'function' || (typeof e == 'object' && e instanceof se);
}
function ra(e, t) {
  for (let n of e)
    Array.isArray(n) ? ra(n, t) : n && dd(n) ? ra(n.ɵproviders, t) : t(n);
}
function _d(e, t) {
  let n;
  e instanceof mr ? (hr(e), (n = e)) : (n = new Ho(e));
  let r,
    i = pt(n),
    a = je(void 0);
  try {
    return t();
  } finally {
    pt(i), je(a);
  }
}
function Md() {
  return hd() !== void 0 || dr() != null;
}
function Tr(e) {
  if (!Md()) throw new ne(-203, !1);
}
function rm(e) {
  return typeof e == 'function';
}
var mt = 0,
  Q = 1,
  W = 2,
  Ne = 3,
  Xe = 4,
  Je = 5,
  Go = 6,
  Wo = 7,
  Pe = 8,
  yr = 9,
  Rt = 10,
  De = 11,
  vr = 12,
  Nl = 13,
  Ln = 14,
  ot = 15,
  nn = 16,
  Sn = 17,
  gt = 18,
  vi = 19,
  Sd = 20,
  xt = 21,
  $s = 22,
  rn = 23,
  We = 24,
  xn = 25,
  xe = 26,
  Td = 1;
var on = 7,
  Ko = 8,
  Rn = 9,
  Ve = 10;
function At(e) {
  return Array.isArray(e) && typeof e[Td] == 'object';
}
function yt(e) {
  return Array.isArray(e) && e[Td] === !0;
}
function Nd(e) {
  return (e.flags & 4) !== 0;
}
function jn(e) {
  return e.componentOffset > -1;
}
function Qa(e) {
  return (e.flags & 1) === 1;
}
function it(e) {
  return !!e.template;
}
function Zo(e) {
  return (e[W] & 512) !== 0;
}
function Nr(e) {
  return (e[W] & 256) === 256;
}
var oa = class {
  previousValue;
  currentValue;
  firstChange;
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function xd(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
var Ya = (() => {
  let e = () => Ad;
  return (e.ngInherit = !0), e;
})();
function Ad(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = im), om;
}
function om() {
  let e = Rd(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === en) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function im(e, t, n, r, i) {
  let a = this.declaredInputs[r],
    c = Rd(e) || sm(e, { previous: en, current: null }),
    f = c.current || (c.current = {}),
    h = c.previous,
    v = h[a];
  (f[a] = new oa(v && v.currentValue, n, h === en)), xd(e, t, i, n);
}
var kd = '__ngSimpleChanges__';
function Rd(e) {
  return e[kd] || null;
}
function sm(e, t) {
  return (e[kd] = t);
}
var xl = null;
var de = function (e, t = null, n) {
    xl?.(e, t, n);
  },
  Od = 'svg',
  am = 'math';
function st(e) {
  for (; Array.isArray(e); ) e = e[mt];
  return e;
}
function Pd(e, t) {
  return st(t[e]);
}
function ut(e, t) {
  return st(t[e.index]);
}
function Xa(e, t) {
  return e.data[t];
}
function Ja(e, t) {
  return e[t];
}
function at(e, t) {
  let n = t[e];
  return At(n) ? n : n[mt];
}
function eu(e) {
  return (e[W] & 128) === 128;
}
function um(e) {
  return yt(e[Ne]);
}
function Qo(e, t) {
  return t == null ? null : e[t];
}
function Fd(e) {
  e[Sn] = 0;
}
function Ld(e) {
  e[W] & 1024 || ((e[W] |= 1024), eu(e) && Bn(e));
}
function cm(e, t) {
  for (; e > 0; ) (t = t[Ln]), e--;
  return t;
}
function Di(e) {
  return !!(e[W] & 9216 || e[We]?.dirty);
}
function ia(e) {
  e[Rt].changeDetectionScheduler?.notify(8),
    e[W] & 64 && (e[W] |= 1024),
    Di(e) && Bn(e);
}
function Bn(e) {
  e[Rt].changeDetectionScheduler?.notify(0);
  let t = sn(e);
  for (; t !== null && !(t[W] & 8192 || ((t[W] |= 8192), !eu(t))); ) t = sn(t);
}
function jd(e, t) {
  if (Nr(e)) throw new ne(911, !1);
  e[xt] === null && (e[xt] = []), e[xt].push(t);
}
function lm(e, t) {
  if (e[xt] === null) return;
  let n = e[xt].indexOf(t);
  n !== -1 && e[xt].splice(n, 1);
}
function sn(e) {
  let t = e[Ne];
  return yt(t) ? t[Ne] : t;
}
function Bd(e) {
  return (e[Wo] ??= []);
}
function Vd(e) {
  return (e.cleanup ??= []);
}
function dm(e, t, n, r) {
  let i = Bd(t);
  i.push(n), e.firstCreatePass && Vd(e).push(r, i.length - 1);
}
var Y = { lFrame: Kd(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var sa = !1;
function fm() {
  return Y.lFrame.elementDepthCount;
}
function hm() {
  Y.lFrame.elementDepthCount++;
}
function pm() {
  Y.lFrame.elementDepthCount--;
}
function Hd() {
  return Y.bindingsEnabled;
}
function gm() {
  return Y.skipHydrationRootTNode !== null;
}
function mm(e) {
  return Y.skipHydrationRootTNode === e;
}
function ym() {
  Y.skipHydrationRootTNode = null;
}
function ae() {
  return Y.lFrame.lView;
}
function Ce() {
  return Y.lFrame.tView;
}
function BI(e) {
  return (Y.lFrame.contextLView = e), e[Pe];
}
function VI(e) {
  return (Y.lFrame.contextLView = null), e;
}
function ze() {
  let e = $d();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function $d() {
  return Y.lFrame.currentTNode;
}
function vm() {
  let e = Y.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function Vn(e, t) {
  let n = Y.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function Ud() {
  return Y.lFrame.isParent;
}
function Dm() {
  Y.lFrame.isParent = !1;
}
function qd() {
  return Y.lFrame.contextLView;
}
function zd() {
  return sa;
}
function Yo(e) {
  let t = sa;
  return (sa = e), t;
}
function wm() {
  let e = Y.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function bm(e) {
  return (Y.lFrame.bindingIndex = e);
}
function xr() {
  return Y.lFrame.bindingIndex++;
}
function Im(e) {
  let t = Y.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function Em() {
  return Y.lFrame.inI18n;
}
function Cm(e, t) {
  let n = Y.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), aa(t);
}
function _m() {
  return Y.lFrame.currentDirectiveIndex;
}
function aa(e) {
  Y.lFrame.currentDirectiveIndex = e;
}
function Mm(e) {
  let t = Y.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Sm() {
  return Y.lFrame.currentQueryIndex;
}
function tu(e) {
  Y.lFrame.currentQueryIndex = e;
}
function Tm(e) {
  let t = e[Q];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[Je] : null;
}
function Gd(e, t, n) {
  if (n & re.SkipSelf) {
    let i = t,
      a = e;
    for (; (i = i.parent), i === null && !(n & re.Host); )
      if (((i = Tm(a)), i === null || ((a = a[Ln]), i.type & 10))) break;
    if (i === null) return !1;
    (t = i), (e = a);
  }
  let r = (Y.lFrame = Wd());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function nu(e) {
  let t = Wd(),
    n = e[Q];
  (Y.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Wd() {
  let e = Y.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Kd(e) : t;
}
function Kd(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function Zd() {
  let e = Y.lFrame;
  return (Y.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var Qd = Zd;
function ru() {
  let e = Zd();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function Nm(e) {
  return (Y.lFrame.contextLView = cm(e, Y.lFrame.contextLView))[Pe];
}
function dn() {
  return Y.lFrame.selectedIndex;
}
function an(e) {
  Y.lFrame.selectedIndex = e;
}
function ou() {
  let e = Y.lFrame;
  return Xa(e.tView, e.selectedIndex);
}
function Yd() {
  Y.lFrame.currentNamespace = Od;
}
function xm() {
  return Y.lFrame.currentNamespace;
}
var Xd = !0;
function iu() {
  return Xd;
}
function su(e) {
  Xd = e;
}
function Am(e, t, n) {
  let { ngOnChanges: r, ngOnInit: i, ngDoCheck: a } = t.type.prototype;
  if (r) {
    let c = Ad(t);
    (n.preOrderHooks ??= []).push(e, c),
      (n.preOrderCheckHooks ??= []).push(e, c);
  }
  i && (n.preOrderHooks ??= []).push(0 - e, i),
    a &&
      ((n.preOrderHooks ??= []).push(e, a),
      (n.preOrderCheckHooks ??= []).push(e, a));
}
function Jd(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let a = e.data[n].type.prototype,
      {
        ngAfterContentInit: c,
        ngAfterContentChecked: f,
        ngAfterViewInit: h,
        ngAfterViewChecked: v,
        ngOnDestroy: _,
      } = a;
    c && (e.contentHooks ??= []).push(-n, c),
      f &&
        ((e.contentHooks ??= []).push(n, f),
        (e.contentCheckHooks ??= []).push(n, f)),
      h && (e.viewHooks ??= []).push(-n, h),
      v &&
        ((e.viewHooks ??= []).push(n, v), (e.viewCheckHooks ??= []).push(n, v)),
      _ != null && (e.destroyHooks ??= []).push(n, _);
  }
}
function Po(e, t, n) {
  ef(e, t, 3, n);
}
function Fo(e, t, n, r) {
  (e[W] & 3) === n && ef(e, t, n, r);
}
function Us(e, t) {
  let n = e[W];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[W] = n));
}
function ef(e, t, n, r) {
  let i = r !== void 0 ? e[Sn] & 65535 : 0,
    a = r ?? -1,
    c = t.length - 1,
    f = 0;
  for (let h = i; h < c; h++)
    if (typeof t[h + 1] == 'number') {
      if (((f = t[h]), r != null && f >= r)) break;
    } else
      t[h] < 0 && (e[Sn] += 65536),
        (f < a || a == -1) &&
          (km(e, n, t, h), (e[Sn] = (e[Sn] & 4294901760) + h + 2)),
        h++;
}
function Al(e, t) {
  de(4, e, t);
  let n = ee(null);
  try {
    t.call(e);
  } finally {
    ee(n), de(5, e, t);
  }
}
function km(e, t, n, r) {
  let i = n[r] < 0,
    a = n[r + 1],
    c = i ? -n[r] : n[r],
    f = e[c];
  i
    ? e[W] >> 14 < e[Sn] >> 16 &&
      (e[W] & 3) === t &&
      ((e[W] += 16384), Al(f, a))
    : Al(f, a);
}
var An = -1,
  un = class {
    factory;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r) {
      (this.factory = t), (this.canSeeViewProviders = n), (this.injectImpl = r);
    }
  };
function Rm(e) {
  return (e.flags & 8) !== 0;
}
function Om(e) {
  return (e.flags & 16) !== 0;
}
function Pm(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let i = n[r];
    if (typeof i == 'number') {
      if (i !== 0) break;
      r++;
      let a = n[r++],
        c = n[r++],
        f = n[r++];
      e.setAttribute(t, c, f, a);
    } else {
      let a = i,
        c = n[++r];
      Lm(a) ? e.setProperty(t, a, c) : e.setAttribute(t, a, c), r++;
    }
  }
  return r;
}
function Fm(e) {
  return e === 3 || e === 4 || e === 6;
}
function Lm(e) {
  return e.charCodeAt(0) === 64;
}
function Dr(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        typeof i == 'number'
          ? (n = i)
          : n === 0 ||
            (n === -1 || n === 2
              ? kl(e, n, i, null, t[++r])
              : kl(e, n, i, null, null));
      }
    }
  return e;
}
function kl(e, t, n, r, i) {
  let a = 0,
    c = e.length;
  if (t === -1) c = -1;
  else
    for (; a < e.length; ) {
      let f = e[a++];
      if (typeof f == 'number') {
        if (f === t) {
          c = -1;
          break;
        } else if (f > t) {
          c = a - 1;
          break;
        }
      }
    }
  for (; a < e.length; ) {
    let f = e[a];
    if (typeof f == 'number') break;
    if (f === n) {
      i !== null && (e[a + 1] = i);
      return;
    }
    a++, i !== null && a++;
  }
  c !== -1 && (e.splice(c, 0, t), (a = c + 1)),
    e.splice(a++, 0, n),
    i !== null && e.splice(a++, 0, i);
}
var qs = {},
  ua = class {
    injector;
    parentInjector;
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = yi(r);
      let i = this.injector.get(t, qs, r);
      return i !== qs || n === qs ? i : this.parentInjector.get(t, n, r);
    }
  };
function tf(e) {
  return e !== An;
}
function Xo(e) {
  return e & 32767;
}
function jm(e) {
  return e >> 16;
}
function Jo(e, t) {
  let n = jm(e),
    r = t;
  for (; n > 0; ) (r = r[Ln]), n--;
  return r;
}
var ca = !0;
function ei(e) {
  let t = ca;
  return (ca = e), t;
}
var Bm = 256,
  nf = Bm - 1,
  rf = 5,
  Vm = 0,
  rt = {};
function Hm(e, t, n) {
  let r;
  typeof n == 'string'
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(gr) && (r = n[gr]),
    r == null && (r = n[gr] = Vm++);
  let i = r & nf,
    a = 1 << i;
  t.data[e + (i >> rf)] |= a;
}
function ti(e, t) {
  let n = of(e, t);
  if (n !== -1) return n;
  let r = t[Q];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    zs(r.data, e),
    zs(t, null),
    zs(r.blueprint, null));
  let i = au(e, t),
    a = e.injectorIndex;
  if (tf(i)) {
    let c = Xo(i),
      f = Jo(i, t),
      h = f[Q].data;
    for (let v = 0; v < 8; v++) t[a + v] = f[c + v] | h[c + v];
  }
  return (t[a + 8] = i), a;
}
function zs(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function of(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function au(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    i = t;
  for (; i !== null; ) {
    if (((r = lf(i)), r === null)) return An;
    if ((n++, (i = i[Ln]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return An;
}
function la(e, t, n) {
  Hm(e, t, n);
}
function sf(e, t, n) {
  if (n & re.Optional || e !== void 0) return e;
  Ga(t, 'NodeInjector');
}
function af(e, t, n, r) {
  if (
    (n & re.Optional && r === void 0 && (r = null),
    (n & (re.Self | re.Host)) === 0)
  ) {
    let i = e[yr],
      a = je(void 0);
    try {
      return i ? i.get(t, r, n & re.Optional) : pd(t, r, n & re.Optional);
    } finally {
      je(a);
    }
  }
  return sf(r, t, n);
}
function uf(e, t, n, r = re.Default, i) {
  if (e !== null) {
    if (t[W] & 2048 && !(r & re.Self)) {
      let c = zm(e, t, n, r, rt);
      if (c !== rt) return c;
    }
    let a = cf(e, t, n, r, rt);
    if (a !== rt) return a;
  }
  return af(t, n, r, i);
}
function cf(e, t, n, r, i) {
  let a = Um(n);
  if (typeof a == 'function') {
    if (!Gd(t, e, r)) return r & re.Host ? sf(i, n, r) : af(t, n, r, i);
    try {
      let c;
      if (((c = a(r)), c == null && !(r & re.Optional))) Ga(n);
      else return c;
    } finally {
      Qd();
    }
  } else if (typeof a == 'number') {
    let c = null,
      f = of(e, t),
      h = An,
      v = r & re.Host ? t[ot][Je] : null;
    for (
      (f === -1 || r & re.SkipSelf) &&
      ((h = f === -1 ? au(e, t) : t[f + 8]),
      h === An || !Ol(r, !1)
        ? (f = -1)
        : ((c = t[Q]), (f = Xo(h)), (t = Jo(h, t))));
      f !== -1;

    ) {
      let _ = t[Q];
      if (Rl(a, f, _.data)) {
        let R = $m(f, t, n, c, r, v);
        if (R !== rt) return R;
      }
      (h = t[f + 8]),
        h !== An && Ol(r, t[Q].data[f + 8] === v) && Rl(a, f, t)
          ? ((c = _), (f = Xo(h)), (t = Jo(h, t)))
          : (f = -1);
    }
  }
  return i;
}
function $m(e, t, n, r, i, a) {
  let c = t[Q],
    f = c.data[e + 8],
    h = r == null ? jn(f) && ca : r != c && (f.type & 3) !== 0,
    v = i & re.Host && a === f,
    _ = Lo(f, c, n, h, v);
  return _ !== null ? wr(t, c, _, f) : rt;
}
function Lo(e, t, n, r, i) {
  let a = e.providerIndexes,
    c = t.data,
    f = a & 1048575,
    h = e.directiveStart,
    v = e.directiveEnd,
    _ = a >> 20,
    R = r ? f : f + _,
    O = i ? f + _ : v;
  for (let A = R; A < O; A++) {
    let H = c[A];
    if ((A < h && n === H) || (A >= h && H.type === n)) return A;
  }
  if (i) {
    let A = c[h];
    if (A && it(A) && A.type === n) return h;
  }
  return null;
}
function wr(e, t, n, r) {
  let i = e[n],
    a = t.data;
  if (i instanceof un) {
    let c = i;
    c.resolving && fd(xg(a[n]));
    let f = ei(c.canSeeViewProviders);
    c.resolving = !0;
    let h,
      v = c.injectImpl ? je(c.injectImpl) : null,
      _ = Gd(e, r, re.Default);
    try {
      (i = e[n] = c.factory(void 0, a, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Am(n, a[n], t);
    } finally {
      v !== null && je(v), ei(f), (c.resolving = !1), Qd();
    }
  }
  return i;
}
function Um(e) {
  if (typeof e == 'string') return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(gr) ? e[gr] : void 0;
  return typeof t == 'number' ? (t >= 0 ? t & nf : qm) : t;
}
function Rl(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> rf)] & r);
}
function Ol(e, t) {
  return !(e & re.Self) && !(e & re.Host && t);
}
var Xt = class {
  _tNode;
  _lView;
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return uf(this._tNode, this._lView, t, yi(r), n);
  }
};
function qm() {
  return new Xt(ze(), ae());
}
function HI(e) {
  return pi(() => {
    let t = e.prototype.constructor,
      n = t[Vo] || da(t),
      r = Object.prototype,
      i = Object.getPrototypeOf(e.prototype).constructor;
    for (; i && i !== r; ) {
      let a = i[Vo] || da(i);
      if (a && a !== n) return a;
      i = Object.getPrototypeOf(i);
    }
    return (a) => new a();
  });
}
function da(e) {
  return ud(e)
    ? () => {
        let t = da(Re(e));
        return t && t();
      }
    : Jt(e);
}
function zm(e, t, n, r, i) {
  let a = e,
    c = t;
  for (; a !== null && c !== null && c[W] & 2048 && !Zo(c); ) {
    let f = cf(a, c, n, r | re.Self, rt);
    if (f !== rt) return f;
    let h = a.parent;
    if (!h) {
      let v = c[Sd];
      if (v) {
        let _ = v.get(n, rt, r);
        if (_ !== rt) return _;
      }
      (h = lf(c)), (c = c[Ln]);
    }
    a = h;
  }
  return i;
}
function lf(e) {
  let t = e[Q],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[Je] : null;
}
function Pl(e, t = null, n = null, r) {
  let i = df(e, t, n, r);
  return i.resolveInjectorInitializers(), i;
}
function df(e, t = null, n = null, r, i = new Set()) {
  let a = [n || qe, Wg(e)];
  return (
    (r = r || (typeof e == 'object' ? void 0 : Be(e))),
    new mr(a, t || Za(), r || null, i)
  );
}
var Ke = class e {
  static THROW_IF_NOT_FOUND = Yt;
  static NULL = new zo();
  static create(t, n) {
    if (Array.isArray(t)) return Pl({ name: '' }, n, t, '');
    {
      let r = t.name ?? '';
      return Pl({ name: r }, t.parent, t.providers, r);
    }
  }
  static ɵprov = ue({ token: e, providedIn: 'any', factory: () => Te(md) });
  static __NG_ELEMENT_ID__ = -1;
};
var Gm = new se('');
Gm.__NG_ELEMENT_ID__ = (e) => {
  let t = ze();
  if (t === null) throw new ne(204, !1);
  if (t.type & 2) return t.value;
  if (e & re.Optional) return null;
  throw new ne(204, !1);
};
var ff = !1,
  vt = (() => {
    class e {
      static __NG_ELEMENT_ID__ = Wm;
      static __NG_ENV_ID__ = (n) => n;
    }
    return e;
  })(),
  ni = class extends vt {
    _lView;
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return jd(this._lView, t), () => lm(this._lView, t);
    }
  };
function Wm() {
  return new ni(ae());
}
var Ot = class {},
  uu = new se('', { providedIn: 'root', factory: () => !1 });
var hf = new se(''),
  cu = new se(''),
  wi = (() => {
    class e {
      taskId = 0;
      pendingTasks = new Set();
      get _hasPendingTasks() {
        return this.hasPendingTasks.value;
      }
      hasPendingTasks = new yo(!1);
      add() {
        this._hasPendingTasks || this.hasPendingTasks.next(!0);
        let n = this.taskId++;
        return this.pendingTasks.add(n), n;
      }
      has(n) {
        return this.pendingTasks.has(n);
      }
      remove(n) {
        this.pendingTasks.delete(n),
          this.pendingTasks.size === 0 &&
            this._hasPendingTasks &&
            this.hasPendingTasks.next(!1);
      }
      ngOnDestroy() {
        this.pendingTasks.clear(),
          this._hasPendingTasks && this.hasPendingTasks.next(!1);
      }
      static ɵprov = ue({
        token: e,
        providedIn: 'root',
        factory: () => new e(),
      });
    }
    return e;
  })();
var fa = class extends Qe {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) {
      super(),
        (this.__isAsync = t),
        Md() &&
          ((this.destroyRef = z(vt, { optional: !0 }) ?? void 0),
          (this.pendingTasks = z(wi, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = ee(null);
      try {
        super.next(t);
      } finally {
        ee(n);
      }
    }
    subscribe(t, n, r) {
      let i = t,
        a = n || (() => null),
        c = r;
      if (t && typeof t == 'object') {
        let h = t;
        (i = h.next?.bind(h)),
          (a = h.error?.bind(h)),
          (c = h.complete?.bind(h));
      }
      this.__isAsync &&
        ((a = this.wrapInTimeout(a)),
        i && (i = this.wrapInTimeout(i)),
        c && (c = this.wrapInTimeout(c)));
      let f = super.subscribe({ next: i, error: a, complete: c });
      return t instanceof mo && t.add(f), f;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  Nt = fa;
function br(...e) {}
function pf(e) {
  let t, n;
  function r() {
    e = br;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == 'function' &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == 'function' &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function Fl(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = br;
    }
  );
}
var lu = 'isAngularZone',
  ri = lu + '_ID',
  Km = 0,
  Oe = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Nt(!1);
    onMicrotaskEmpty = new Nt(!1);
    onStable = new Nt(!1);
    onError = new Nt(!1);
    constructor(t) {
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: i = !1,
        scheduleInRootZone: a = ff,
      } = t;
      if (typeof Zone > 'u') throw new ne(908, !1);
      Zone.assertZonePatched();
      let c = this;
      (c._nesting = 0),
        (c._outer = c._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (c._inner = c._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (c._inner = c._inner.fork(Zone.longStackTraceZoneSpec)),
        (c.shouldCoalesceEventChangeDetection = !i && r),
        (c.shouldCoalesceRunChangeDetection = i),
        (c.callbackScheduled = !1),
        (c.scheduleInRootZone = a),
        Ym(c);
    }
    static isInAngularZone() {
      return typeof Zone < 'u' && Zone.current.get(lu) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new ne(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new ne(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, i) {
      let a = this._inner,
        c = a.scheduleEventTask('NgZoneEvent: ' + i, t, Zm, br, br);
      try {
        return a.runTask(c, n, r);
      } finally {
        a.cancelTask(c);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  Zm = {};
function du(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function Qm(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    pf(() => {
      (e.callbackScheduled = !1),
        ha(e),
        (e.isCheckStableRunning = !0),
        du(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    ha(e);
}
function Ym(e) {
  let t = () => {
      Qm(e);
    },
    n = Km++;
  e._inner = e._inner.fork({
    name: 'angular',
    properties: { [lu]: !0, [ri]: n, [ri + n]: !0 },
    onInvokeTask: (r, i, a, c, f, h) => {
      if (Xm(h)) return r.invokeTask(a, c, f, h);
      try {
        return Ll(e), r.invokeTask(a, c, f, h);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && c.type === 'eventTask') ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          jl(e);
      }
    },
    onInvoke: (r, i, a, c, f, h, v) => {
      try {
        return Ll(e), r.invoke(a, c, f, h, v);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !Jm(h) &&
          t(),
          jl(e);
      }
    },
    onHasTask: (r, i, a, c) => {
      r.hasTask(a, c),
        i === a &&
          (c.change == 'microTask'
            ? ((e._hasPendingMicrotasks = c.microTask), ha(e), du(e))
            : c.change == 'macroTask' &&
              (e.hasPendingMacrotasks = c.macroTask));
    },
    onHandleError: (r, i, a, c) => (
      r.handleError(a, c), e.runOutsideAngular(() => e.onError.emit(c)), !1
    ),
  });
}
function ha(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Ll(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function jl(e) {
  e._nesting--, du(e);
}
var oi = class {
  hasPendingMicrotasks = !1;
  hasPendingMacrotasks = !1;
  isStable = !0;
  onUnstable = new Nt();
  onMicrotaskEmpty = new Nt();
  onStable = new Nt();
  onError = new Nt();
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, i) {
    return t.apply(n, r);
  }
};
function Xm(e) {
  return gf(e, '__ignore_ng_zone__');
}
function Jm(e) {
  return gf(e, '__scheduler_tick__');
}
function gf(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var cn = class {
    _console = console;
    handleError(t) {
      this._console.error('ERROR', t);
    }
  },
  ey = new se('', {
    providedIn: 'root',
    factory: () => {
      let e = z(Oe),
        t = z(cn);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  }),
  pa = class {
    destroyed = !1;
    listeners = null;
    errorHandler = z(cn, { optional: !0 });
    destroyRef = z(vt);
    constructor() {
      this.destroyRef.onDestroy(() => {
        (this.destroyed = !0), (this.listeners = null);
      });
    }
    subscribe(t) {
      if (this.destroyed) throw new ne(953, !1);
      return (
        (this.listeners ??= []).push(t),
        {
          unsubscribe: () => {
            let n = this.listeners?.indexOf(t);
            n !== void 0 && n !== -1 && this.listeners?.splice(n, 1);
          },
        }
      );
    }
    emit(t) {
      if (this.destroyed) {
        console.warn(qa(953, !1));
        return;
      }
      if (this.listeners === null) return;
      let n = ee(null);
      try {
        for (let r of this.listeners)
          try {
            r(t);
          } catch (i) {
            this.errorHandler?.handleError(i);
          }
      } finally {
        ee(n);
      }
    }
  };
function mf(e) {
  return new pa();
}
function Bl(e, t) {
  return sd(e, t);
}
function ty(e) {
  return sd(id, e);
}
var ce = ((Bl.required = ty), Bl);
function ny() {
  return Hn(ze(), ae());
}
function Hn(e, t) {
  return new Pt(ut(e, t));
}
var Pt = (() => {
  class e {
    nativeElement;
    constructor(n) {
      this.nativeElement = n;
    }
    static __NG_ELEMENT_ID__ = ny;
  }
  return e;
})();
function ry(e) {
  return e instanceof Pt ? e.nativeElement : e;
}
function oy(e) {
  return typeof e == 'function' && e[ke] !== void 0;
}
function $n(e, t) {
  let n = wl(e),
    r = n[ke];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (i) => ko(r, i)),
    (n.update = (i) => bl(r, i)),
    (n.asReadonly = iy.bind(n)),
    n
  );
}
function iy() {
  let e = this[ke];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[ke] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function yf(e) {
  return oy(e) && typeof e.set == 'function';
}
function sy() {
  return this._results[Symbol.iterator]();
}
var ga = class {
  _emitDistinctChangesOnly;
  dirty = !0;
  _onDirty = void 0;
  _results = [];
  _changesDetected = !1;
  _changes = void 0;
  length = 0;
  first = void 0;
  last = void 0;
  get changes() {
    return (this._changes ??= new Qe());
  }
  constructor(t = !1) {
    this._emitDistinctChangesOnly = t;
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = Hg(t);
    (this._changesDetected = !Vg(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.next(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
  [Symbol.iterator] = sy;
};
function vf(e) {
  return (e.flags & 128) === 128;
}
var Df = (function (e) {
    return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
  })(Df || {}),
  wf = new Map(),
  ay = 0;
function uy() {
  return ay++;
}
function cy(e) {
  wf.set(e[vi], e);
}
function ma(e) {
  wf.delete(e[vi]);
}
var Vl = '__ngContext__';
function Ar(e, t) {
  At(t) ? ((e[Vl] = t[vi]), cy(t)) : (e[Vl] = t);
}
function bf(e) {
  return Ef(e[vr]);
}
function If(e) {
  return Ef(e[Xe]);
}
function Ef(e) {
  for (; e !== null && !yt(e); ) e = e[Xe];
  return e;
}
var ya;
function $I(e) {
  ya = e;
}
function ly() {
  if (ya !== void 0) return ya;
  if (typeof document < 'u') return document;
  throw new ne(210, !1);
}
var UI = new se('', { providedIn: 'root', factory: () => dy }),
  dy = 'ng',
  fy = new se(''),
  kr = new se('', { providedIn: 'platform', factory: () => 'unknown' });
var qI = new se('', {
  providedIn: 'root',
  factory: () =>
    ly().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') ||
    null,
});
var hy = 'h',
  py = 'b';
var Cf = !1,
  gy = new se('', { providedIn: 'root', factory: () => Cf });
var fu = (function (e) {
    return (
      (e[(e.CHANGE_DETECTION = 0)] = 'CHANGE_DETECTION'),
      (e[(e.AFTER_NEXT_RENDER = 1)] = 'AFTER_NEXT_RENDER'),
      e
    );
  })(fu || {}),
  bi = new se(''),
  Hl = new Set();
function Un(e) {
  Hl.has(e) ||
    (Hl.add(e),
    performance?.mark?.('mark_feature_usage', { detail: { feature: e } }));
}
var hu = (() => {
  class e {
    view;
    node;
    constructor(n, r) {
      (this.view = n), (this.node = r);
    }
    static __NG_ELEMENT_ID__ = my;
  }
  return e;
})();
function my() {
  return new hu(ae(), ze());
}
var Tn = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = 'EarlyRead'),
      (e[(e.Write = 1)] = 'Write'),
      (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
      (e[(e.Read = 3)] = 'Read'),
      e
    );
  })(Tn || {}),
  _f = (() => {
    class e {
      impl = null;
      execute() {
        this.impl?.execute();
      }
      static ɵprov = ue({
        token: e,
        providedIn: 'root',
        factory: () => new e(),
      });
    }
    return e;
  })(),
  yy = [Tn.EarlyRead, Tn.Write, Tn.MixedReadWrite, Tn.Read],
  vy = (() => {
    class e {
      ngZone = z(Oe);
      scheduler = z(Ot);
      errorHandler = z(cn, { optional: !0 });
      sequences = new Set();
      deferredRegistrations = new Set();
      executing = !1;
      constructor() {
        z(bi, { optional: !0 });
      }
      execute() {
        let n = this.sequences.size > 0;
        n && de(16), (this.executing = !0);
        for (let r of yy)
          for (let i of this.sequences)
            if (!(i.erroredOrDestroyed || !i.hooks[r]))
              try {
                i.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                  this.maybeTrace(() => {
                    let a = i.hooks[r];
                    return a(i.pipelinedValue);
                  }, i.snapshot),
                );
              } catch (a) {
                (i.erroredOrDestroyed = !0), this.errorHandler?.handleError(a);
              }
        this.executing = !1;
        for (let r of this.sequences)
          r.afterRun(), r.once && (this.sequences.delete(r), r.destroy());
        for (let r of this.deferredRegistrations) this.sequences.add(r);
        this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
          this.deferredRegistrations.clear(),
          n && de(17);
      }
      register(n) {
        let { view: r } = n;
        r !== void 0
          ? ((r[xn] ??= []).push(n), Bn(r), (r[W] |= 8192))
          : this.executing
            ? this.deferredRegistrations.add(n)
            : this.addSequence(n);
      }
      addSequence(n) {
        this.sequences.add(n), this.scheduler.notify(7);
      }
      unregister(n) {
        this.executing && this.sequences.has(n)
          ? ((n.erroredOrDestroyed = !0),
            (n.pipelinedValue = void 0),
            (n.once = !0))
          : (this.sequences.delete(n), this.deferredRegistrations.delete(n));
      }
      maybeTrace(n, r) {
        return r ? r.run(fu.AFTER_NEXT_RENDER, n) : n();
      }
      static ɵprov = ue({
        token: e,
        providedIn: 'root',
        factory: () => new e(),
      });
    }
    return e;
  })(),
  va = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, i, a, c = null) {
      (this.impl = t),
        (this.hooks = n),
        (this.view = r),
        (this.once = i),
        (this.snapshot = c),
        (this.unregisterOnDestroy = a?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        this.snapshot?.dispose(),
        (this.snapshot = null);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
      let t = this.view?.[xn];
      t && (this.view[xn] = t.filter((n) => n !== this));
    }
  };
function Dy(e, t) {
  !t?.injector && Tr(Dy);
  let n = t?.injector ?? z(Ke);
  return Un('NgAfterNextRender'), by(e, n, t, !0);
}
function wy(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function by(e, t, n, r) {
  let i = t.get(_f);
  i.impl ??= t.get(vy);
  let a = t.get(bi, null, { optional: !0 }),
    c = n?.phase ?? Tn.MixedReadWrite,
    f = n?.manualCleanup !== !0 ? t.get(vt) : null,
    h = t.get(hu, null, { optional: !0 }),
    v = new va(i.impl, wy(e, c), h?.view, r, f, a?.snapshot(null));
  return i.impl.register(v), v;
}
var Iy = () => null;
function Mf(e, t, n = !1) {
  return Iy(e, t, n);
}
function Sf(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = ee(null);
    try {
      for (let i = 0; i < n.length; i += 2) {
        let a = n[i],
          c = n[i + 1];
        if (c !== -1) {
          let f = e.data[c];
          tu(a), f.contentQueries(2, t[c], c);
        }
      }
    } finally {
      ee(r);
    }
  }
}
function Da(e, t, n) {
  tu(0);
  let r = ee(null);
  try {
    t(e, n);
  } finally {
    ee(r);
  }
}
function Tf(e, t, n) {
  if (Nd(t)) {
    let r = ee(null);
    try {
      let i = t.directiveStart,
        a = t.directiveEnd;
      for (let c = i; c < a; c++) {
        let f = e.data[c];
        if (f.contentQueries) {
          let h = n[c];
          f.contentQueries(1, h, c);
        }
      }
    } finally {
      ee(r);
    }
  }
}
var Ir = (function (e) {
  return (
    (e[(e.Emulated = 0)] = 'Emulated'),
    (e[(e.None = 2)] = 'None'),
    (e[(e.ShadowDom = 3)] = 'ShadowDom'),
    e
  );
})(Ir || {});
var wa = class {
  changingThisBreaksApplicationSecurity;
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${wg})`;
  }
};
function Nf(e) {
  return e instanceof wa ? e.changingThisBreaksApplicationSecurity : e;
}
function xf(e) {
  return e instanceof Function ? e() : e;
}
function Ey(e, t, n) {
  let r = e.length;
  for (;;) {
    let i = e.indexOf(t, n);
    if (i === -1) return i;
    if (i === 0 || e.charCodeAt(i - 1) <= 32) {
      let a = t.length;
      if (i + a === r || e.charCodeAt(i + a) <= 32) return i;
    }
    n = i + 1;
  }
}
var Af = 'ng-template';
function Cy(e, t, n, r) {
  let i = 0;
  if (r) {
    for (; i < t.length && typeof t[i] == 'string'; i += 2)
      if (t[i] === 'class' && Ey(t[i + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (pu(e)) return !1;
  if (((i = t.indexOf(1, i)), i > -1)) {
    let a;
    for (; ++i < t.length && typeof (a = t[i]) == 'string'; )
      if (a.toLowerCase() === n) return !0;
  }
  return !1;
}
function pu(e) {
  return e.type === 4 && e.value !== Af;
}
function _y(e, t, n) {
  let r = e.type === 4 && !n ? Af : e.value;
  return t === r;
}
function My(e, t, n) {
  let r = 4,
    i = e.attrs,
    a = i !== null ? Ny(i) : 0,
    c = !1;
  for (let f = 0; f < t.length; f++) {
    let h = t[f];
    if (typeof h == 'number') {
      if (!c && !Ye(r) && !Ye(h)) return !1;
      if (c && Ye(h)) continue;
      (c = !1), (r = h | (r & 1));
      continue;
    }
    if (!c)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (h !== '' && !_y(e, h, n)) || (h === '' && t.length === 1))
        ) {
          if (Ye(r)) return !1;
          c = !0;
        }
      } else if (r & 8) {
        if (i === null || !Cy(e, i, h, n)) {
          if (Ye(r)) return !1;
          c = !0;
        }
      } else {
        let v = t[++f],
          _ = Sy(h, i, pu(e), n);
        if (_ === -1) {
          if (Ye(r)) return !1;
          c = !0;
          continue;
        }
        if (v !== '') {
          let R;
          if (
            (_ > a ? (R = '') : (R = i[_ + 1].toLowerCase()), r & 2 && v !== R)
          ) {
            if (Ye(r)) return !1;
            c = !0;
          }
        }
      }
  }
  return Ye(r) || c;
}
function Ye(e) {
  return (e & 1) === 0;
}
function Sy(e, t, n, r) {
  if (t === null) return -1;
  let i = 0;
  if (r || !n) {
    let a = !1;
    for (; i < t.length; ) {
      let c = t[i];
      if (c === e) return i;
      if (c === 3 || c === 6) a = !0;
      else if (c === 1 || c === 2) {
        let f = t[++i];
        for (; typeof f == 'string'; ) f = t[++i];
        continue;
      } else {
        if (c === 4) break;
        if (c === 0) {
          i += 4;
          continue;
        }
      }
      i += a ? 1 : 2;
    }
    return -1;
  } else return xy(t, e);
}
function Ty(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (My(e, t[r], n)) return !0;
  return !1;
}
function Ny(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Fm(n)) return t;
  }
  return e.length;
}
function xy(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == 'number') return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function $l(e, t) {
  return e ? ':not(' + t.trim() + ')' : t;
}
function Ay(e) {
  let t = e[0],
    n = 1,
    r = 2,
    i = '',
    a = !1;
  for (; n < e.length; ) {
    let c = e[n];
    if (typeof c == 'string')
      if (r & 2) {
        let f = e[++n];
        i += '[' + c + (f.length > 0 ? '="' + f + '"' : '') + ']';
      } else r & 8 ? (i += '.' + c) : r & 4 && (i += ' ' + c);
    else
      i !== '' && !Ye(c) && ((t += $l(a, i)), (i = '')),
        (r = c),
        (a = a || !Ye(r));
    n++;
  }
  return i !== '' && (t += $l(a, i)), t;
}
function ky(e) {
  return e.map(Ay).join(',');
}
function Ry(e) {
  let t = [],
    n = [],
    r = 1,
    i = 2;
  for (; r < e.length; ) {
    let a = e[r];
    if (typeof a == 'string')
      i === 2 ? a !== '' && t.push(a, e[++r]) : i === 8 && n.push(a);
    else {
      if (!Ye(i)) break;
      i = a;
    }
    r++;
  }
  return n.length && t.push(1, ...n), t;
}
var Ft = {};
function Oy(e, t) {
  return e.createText(t);
}
function Py(e, t, n) {
  e.setValue(t, n);
}
function kf(e, t, n) {
  return e.createElement(t, n);
}
function ii(e, t, n, r, i) {
  e.insertBefore(t, n, r, i);
}
function Rf(e, t, n) {
  e.appendChild(t, n);
}
function Ul(e, t, n, r, i) {
  r !== null ? ii(e, t, n, r, i) : Rf(e, t, n);
}
function Fy(e, t, n) {
  e.removeChild(null, t, n);
}
function Ly(e, t, n) {
  e.setAttribute(t, 'style', n);
}
function jy(e, t, n) {
  n === '' ? e.removeAttribute(t, 'class') : e.setAttribute(t, 'class', n);
}
function Of(e, t, n) {
  let { mergedAttrs: r, classes: i, styles: a } = n;
  r !== null && Pm(e, t, r),
    i !== null && jy(e, t, i),
    a !== null && Ly(e, t, a);
}
function gu(e, t, n, r, i, a, c, f, h, v, _) {
  let R = xe + r,
    O = R + i,
    A = By(R, O),
    H = typeof v == 'function' ? v() : v;
  return (A[Q] = {
    type: e,
    blueprint: A,
    template: n,
    queries: null,
    viewQuery: f,
    declTNode: t,
    data: A.slice().fill(null, R),
    bindingStartIndex: R,
    expandoStartIndex: O,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof a == 'function' ? a() : a,
    pipeRegistry: typeof c == 'function' ? c() : c,
    firstChild: null,
    schemas: h,
    consts: H,
    incompleteFirstPass: !1,
    ssrId: _,
  });
}
function By(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Ft);
  return n;
}
function Vy(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = gu(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function mu(e, t, n, r, i, a, c, f, h, v, _) {
  let R = t.blueprint.slice();
  return (
    (R[mt] = i),
    (R[W] = r | 4 | 128 | 8 | 64 | 1024),
    (v !== null || (e && e[W] & 2048)) && (R[W] |= 2048),
    Fd(R),
    (R[Ne] = R[Ln] = e),
    (R[Pe] = n),
    (R[Rt] = c || (e && e[Rt])),
    (R[De] = f || (e && e[De])),
    (R[yr] = h || (e && e[yr]) || null),
    (R[Je] = a),
    (R[vi] = uy()),
    (R[Go] = _),
    (R[Sd] = v),
    (R[ot] = t.type == 2 ? e[ot] : R),
    R
  );
}
function Hy(e, t, n) {
  let r = ut(t, e),
    i = Vy(n),
    a = e[Rt].rendererFactory,
    c = yu(
      e,
      mu(
        e,
        i,
        null,
        Pf(n),
        r,
        t,
        null,
        a.createRenderer(r, n),
        null,
        null,
        null,
      ),
    );
  return (e[t.index] = c);
}
function Pf(e) {
  let t = 16;
  return e.signals ? (t = 4096) : e.onPush && (t = 64), t;
}
function Ff(e, t, n, r) {
  if (n === 0) return -1;
  let i = t.length;
  for (let a = 0; a < n; a++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return i;
}
function yu(e, t) {
  return e[vr] ? (e[Nl][Xe] = t) : (e[vr] = t), (e[Nl] = t), t;
}
function zI(e = 1) {
  Lf(Ce(), ae(), dn() + e, !1);
}
function Lf(e, t, n, r) {
  if (!r)
    if ((t[W] & 3) === 3) {
      let a = e.preOrderCheckHooks;
      a !== null && Po(t, a, n);
    } else {
      let a = e.preOrderHooks;
      a !== null && Fo(t, a, 0, n);
    }
  an(n);
}
var Ii = (function (e) {
  return (
    (e[(e.None = 0)] = 'None'),
    (e[(e.SignalBased = 1)] = 'SignalBased'),
    (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
    e
  );
})(Ii || {});
function ba(e, t, n, r) {
  let i = ee(null);
  try {
    let [a, c, f] = e.inputs[n],
      h = null;
    (c & Ii.SignalBased) !== 0 && (h = t[a][ke]),
      h !== null && h.transformFn !== void 0
        ? (r = h.transformFn(r))
        : f !== null && (r = f.call(t, r)),
      e.setInput !== null ? e.setInput(t, h, r, n, a) : xd(t, h, a, r);
  } finally {
    ee(i);
  }
}
function jf(e, t, n, r, i) {
  let a = dn(),
    c = r & 2;
  try {
    an(-1), c && t.length > xe && Lf(e, t, xe, !1), de(c ? 2 : 0, i), n(r, i);
  } finally {
    an(a), de(c ? 3 : 1, i);
  }
}
function vu(e, t, n) {
  Wy(e, t, n), (n.flags & 64) === 64 && Ky(e, t, n);
}
function Bf(e, t, n = ut) {
  let r = t.localNames;
  if (r !== null) {
    let i = t.index + 1;
    for (let a = 0; a < r.length; a += 2) {
      let c = r[a + 1],
        f = c === -1 ? n(t, e) : e[c];
      e[i++] = f;
    }
  }
}
function $y(e, t, n, r) {
  let a = r.get(gy, Cf) || n === Ir.ShadowDom,
    c = e.selectRootElement(t, a);
  return Uy(c), c;
}
function Uy(e) {
  qy(e);
}
var qy = () => null;
function zy(e) {
  return e === 'class'
    ? 'className'
    : e === 'for'
      ? 'htmlFor'
      : e === 'formaction'
        ? 'formAction'
        : e === 'innerHtml'
          ? 'innerHTML'
          : e === 'readonly'
            ? 'readOnly'
            : e === 'tabindex'
              ? 'tabIndex'
              : e;
}
function Vf(e, t, n, r, i, a, c, f) {
  if (!f && Du(t, e, n, r, i)) {
    jn(t) && Gy(n, t.index);
    return;
  }
  if (t.type & 3) {
    let h = ut(t, n);
    (r = zy(r)),
      (i = c != null ? c(i, t.value || '', r) : i),
      a.setProperty(h, r, i);
  } else t.type & 12;
}
function Gy(e, t) {
  let n = at(t, e);
  n[W] & 16 || (n[W] |= 64);
}
function Wy(e, t, n) {
  let r = n.directiveStart,
    i = n.directiveEnd;
  jn(n) && Hy(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || ti(n, t);
  let a = n.initialInputs;
  for (let c = r; c < i; c++) {
    let f = e.data[c],
      h = wr(t, e, c, n);
    if ((Ar(h, t), a !== null && Xy(t, c - r, h, f, n, a), it(f))) {
      let v = at(n.index, t);
      v[Pe] = wr(t, e, c, n);
    }
  }
}
function Ky(e, t, n) {
  let r = n.directiveStart,
    i = n.directiveEnd,
    a = n.index,
    c = _m();
  try {
    an(a);
    for (let f = r; f < i; f++) {
      let h = e.data[f],
        v = t[f];
      aa(f),
        (h.hostBindings !== null || h.hostVars !== 0 || h.hostAttrs !== null) &&
          Zy(h, v);
    }
  } finally {
    an(-1), aa(c);
  }
}
function Zy(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function Hf(e, t) {
  let n = e.directiveRegistry,
    r = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let a = n[i];
      Ty(t, a.selectors, !1) && ((r ??= []), it(a) ? r.unshift(a) : r.push(a));
    }
  return r;
}
function Qy(e, t, n, r, i, a) {
  let c = ut(e, t);
  Yy(t[De], c, a, e.value, n, r, i);
}
function Yy(e, t, n, r, i, a, c) {
  if (a == null) e.removeAttribute(t, i, n);
  else {
    let f = c == null ? za(a) : c(a, r || '', i);
    e.setAttribute(t, i, f, n);
  }
}
function Xy(e, t, n, r, i, a) {
  let c = a[t];
  if (c !== null)
    for (let f = 0; f < c.length; f += 2) {
      let h = c[f],
        v = c[f + 1];
      ba(r, n, h, v);
    }
}
function $f(e, t) {
  let n = e[yr],
    r = n ? n.get(cn, null) : null;
  r && r.handleError(t);
}
function Du(e, t, n, r, i) {
  let a = e.inputs?.[r],
    c = e.hostDirectiveInputs?.[r],
    f = !1;
  if (c)
    for (let h = 0; h < c.length; h += 2) {
      let v = c[h],
        _ = c[h + 1],
        R = t.data[v];
      ba(R, n[v], _, i), (f = !0);
    }
  if (a)
    for (let h of a) {
      let v = n[h],
        _ = t.data[h];
      ba(_, v, r, i), (f = !0);
    }
  return f;
}
function Jy(e, t) {
  let n = at(t, e),
    r = n[Q];
  ev(r, n);
  let i = n[mt];
  i !== null && n[Go] === null && (n[Go] = Mf(i, n[yr])),
    de(18),
    wu(r, n, n[Pe]),
    de(19, n[Pe]);
}
function ev(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function wu(e, t, n) {
  nu(t);
  try {
    let r = e.viewQuery;
    r !== null && Da(1, r, n);
    let i = e.template;
    i !== null && jf(e, t, i, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[gt]?.finishViewCreation(e),
      e.staticContentQueries && Sf(e, t),
      e.staticViewQueries && Da(2, e.viewQuery, n);
    let a = e.components;
    a !== null && tv(t, a);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[W] &= -5), ru();
  }
}
function tv(e, t) {
  for (let n = 0; n < t.length; n++) Jy(e, t[n]);
}
function Uf(e, t, n, r) {
  let i = ee(null);
  try {
    let a = t.tView,
      f = e[W] & 4096 ? 4096 : 16,
      h = mu(
        e,
        a,
        n,
        f,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      v = e[t.index];
    h[nn] = v;
    let _ = e[gt];
    return _ !== null && (h[gt] = _.createEmbeddedView(a)), wu(a, h, n), h;
  } finally {
    ee(i);
  }
}
function Ia(e, t) {
  return !t || t.firstChild === null || vf(e);
}
var nv;
function bu(e, t) {
  return nv(e, t);
}
var si = (function (e) {
  return (
    (e[(e.Important = 1)] = 'Important'), (e[(e.DashCase = 2)] = 'DashCase'), e
  );
})(si || {});
function qf(e) {
  return (e.flags & 32) === 32;
}
function Nn(e, t, n, r, i) {
  if (r != null) {
    let a,
      c = !1;
    yt(r) ? (a = r) : At(r) && ((c = !0), (r = r[mt]));
    let f = st(r);
    e === 0 && n !== null
      ? i == null
        ? Rf(t, n, f)
        : ii(t, n, f, i || null, !0)
      : e === 1 && n !== null
        ? ii(t, n, f, i || null, !0)
        : e === 2
          ? Fy(t, f, c)
          : e === 3 && t.destroyNode(f),
      a != null && pv(t, e, a, n, i);
  }
}
function rv(e, t) {
  zf(e, t), (t[mt] = null), (t[Je] = null);
}
function ov(e, t, n, r, i, a) {
  (r[mt] = i), (r[Je] = t), Ei(e, r, n, 1, i, a);
}
function zf(e, t) {
  t[Rt].changeDetectionScheduler?.notify(9), Ei(e, t, t[De], 2, null, null);
}
function iv(e) {
  let t = e[vr];
  if (!t) return Gs(e[Q], e);
  for (; t; ) {
    let n = null;
    if (At(t)) n = t[vr];
    else {
      let r = t[Ve];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[Xe] && t !== e; ) At(t) && Gs(t[Q], t), (t = t[Ne]);
      t === null && (t = e), At(t) && Gs(t[Q], t), (n = t && t[Xe]);
    }
    t = n;
  }
}
function Iu(e, t) {
  let n = e[Rn],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Eu(e, t) {
  if (Nr(t)) return;
  let n = t[De];
  n.destroyNode && Ei(e, t, n, 3, null, null), iv(t);
}
function Gs(e, t) {
  if (Nr(t)) return;
  let n = ee(null);
  try {
    (t[W] &= -129),
      (t[W] |= 256),
      t[We] && lr(t[We]),
      av(e, t),
      sv(e, t),
      t[Q].type === 1 && t[De].destroy();
    let r = t[nn];
    if (r !== null && yt(t[Ne])) {
      r !== t[Ne] && Iu(r, t);
      let i = t[gt];
      i !== null && i.detachView(e);
    }
    ma(t);
  } finally {
    ee(n);
  }
}
function sv(e, t) {
  let n = e.cleanup,
    r = t[Wo];
  if (n !== null)
    for (let c = 0; c < n.length - 1; c += 2)
      if (typeof n[c] == 'string') {
        let f = n[c + 3];
        f >= 0 ? r[f]() : r[-f].unsubscribe(), (c += 2);
      } else {
        let f = r[n[c + 1]];
        n[c].call(f);
      }
  r !== null && (t[Wo] = null);
  let i = t[xt];
  if (i !== null) {
    t[xt] = null;
    for (let c = 0; c < i.length; c++) {
      let f = i[c];
      f();
    }
  }
  let a = t[rn];
  if (a !== null) {
    t[rn] = null;
    for (let c of a) c.destroy();
  }
}
function av(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let i = t[n[r]];
      if (!(i instanceof un)) {
        let a = n[r + 1];
        if (Array.isArray(a))
          for (let c = 0; c < a.length; c += 2) {
            let f = i[a[c]],
              h = a[c + 1];
            de(4, f, h);
            try {
              h.call(f);
            } finally {
              de(5, f, h);
            }
          }
        else {
          de(4, i, a);
          try {
            a.call(i);
          } finally {
            de(5, i, a);
          }
        }
      }
    }
}
function uv(e, t, n) {
  return cv(e, t.parent, n);
}
function cv(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[mt];
  if (jn(r)) {
    let { encapsulation: i } = e.data[r.directiveStart + r.componentOffset];
    if (i === Ir.None || i === Ir.Emulated) return null;
  }
  return ut(r, n);
}
function lv(e, t, n) {
  return fv(e, t, n);
}
function dv(e, t, n) {
  return e.type & 40 ? ut(e, n) : null;
}
var fv = dv,
  ql;
function Cu(e, t, n, r) {
  let i = uv(e, r, t),
    a = t[De],
    c = r.parent || t[Je],
    f = lv(c, r, t);
  if (i != null)
    if (Array.isArray(n))
      for (let h = 0; h < n.length; h++) Ul(a, i, n[h], f, !1);
    else Ul(a, i, n, f, !1);
  ql !== void 0 && ql(a, r, t, n, i);
}
function pr(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return ut(t, e);
    if (n & 4) return Ea(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return pr(e, r);
      {
        let i = e[t.index];
        return yt(i) ? Ea(-1, i) : st(i);
      }
    } else {
      if (n & 128) return pr(e, t.next);
      if (n & 32) return bu(t, e)() || st(e[t.index]);
      {
        let r = Gf(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let i = sn(e[ot]);
          return pr(i, r);
        } else return pr(e, t.next);
      }
    }
  }
  return null;
}
function Gf(e, t) {
  if (t !== null) {
    let r = e[ot][Je],
      i = t.projection;
    return r.projection[i];
  }
  return null;
}
function Ea(e, t) {
  let n = Ve + e + 1;
  if (n < t.length) {
    let r = t[n],
      i = r[Q].firstChild;
    if (i !== null) return pr(r, i);
  }
  return t[on];
}
function _u(e, t, n, r, i, a, c) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let f = r[n.index],
      h = n.type;
    if ((c && t === 0 && (f && Ar(st(f), r), (n.flags |= 2)), !qf(n)))
      if (h & 8) _u(e, t, n.child, r, i, a, !1), Nn(t, e, i, f, a);
      else if (h & 32) {
        let v = bu(n, r),
          _;
        for (; (_ = v()); ) Nn(t, e, i, _, a);
        Nn(t, e, i, f, a);
      } else h & 16 ? hv(e, t, r, n, i, a) : Nn(t, e, i, f, a);
    n = c ? n.projectionNext : n.next;
  }
}
function Ei(e, t, n, r, i, a) {
  _u(n, r, e.firstChild, t, i, a, !1);
}
function hv(e, t, n, r, i, a) {
  let c = n[ot],
    h = c[Je].projection[r.projection];
  if (Array.isArray(h))
    for (let v = 0; v < h.length; v++) {
      let _ = h[v];
      Nn(t, e, i, _, a);
    }
  else {
    let v = h,
      _ = c[Ne];
    vf(r) && (v.flags |= 128), _u(e, t, v, _, i, a, !0);
  }
}
function pv(e, t, n, r, i) {
  let a = n[on],
    c = st(n);
  a !== c && Nn(t, e, r, a, i);
  for (let f = Ve; f < n.length; f++) {
    let h = n[f];
    Ei(h[Q], h, e, t, r, a);
  }
}
function gv(e, t, n, r, i) {
  if (t) i ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let a = r.indexOf('-') === -1 ? void 0 : si.DashCase;
    i == null
      ? e.removeStyle(n, r, a)
      : (typeof i == 'string' &&
          i.endsWith('!important') &&
          ((i = i.slice(0, -10)), (a |= si.Important)),
        e.setStyle(n, r, i, a));
  }
}
function ai(e, t, n, r, i = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = i ? n.projectionNext : n.next;
      continue;
    }
    let a = t[n.index];
    a !== null && r.push(st(a)), yt(a) && mv(a, r);
    let c = n.type;
    if (c & 8) ai(e, t, n.child, r);
    else if (c & 32) {
      let f = bu(n, t),
        h;
      for (; (h = f()); ) r.push(h);
    } else if (c & 16) {
      let f = Gf(t, n);
      if (Array.isArray(f)) r.push(...f);
      else {
        let h = sn(t[ot]);
        ai(h[Q], h, f, r, !0);
      }
    }
    n = i ? n.projectionNext : n.next;
  }
  return r;
}
function mv(e, t) {
  for (let n = Ve; n < e.length; n++) {
    let r = e[n],
      i = r[Q].firstChild;
    i !== null && ai(r[Q], r, i, t);
  }
  e[on] !== e[mt] && t.push(e[on]);
}
function Wf(e) {
  if (e[xn] !== null) {
    for (let t of e[xn]) t.impl.addSequence(t);
    e[xn].length = 0;
  }
}
var Kf = [];
function yv(e) {
  return e[We] ?? vv(e);
}
function vv(e) {
  let t = Kf.pop() ?? Object.create(wv);
  return (t.lView = e), t;
}
function Dv(e) {
  e.lView[We] !== e && ((e.lView = null), Kf.push(e));
}
var wv = Le(Fe({}, _n), {
  consumerIsAlwaysLive: !0,
  kind: 'template',
  consumerMarkedDirty: (e) => {
    Bn(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[We] = this;
  },
});
function bv(e) {
  let t = e[We] ?? Object.create(Iv);
  return (t.lView = e), t;
}
var Iv = Le(Fe({}, _n), {
  consumerIsAlwaysLive: !0,
  kind: 'template',
  consumerMarkedDirty: (e) => {
    let t = sn(e.lView);
    for (; t && !Zf(t[Q]); ) t = sn(t);
    t && Ld(t);
  },
  consumerOnSignalRead() {
    this.lView[We] = this;
  },
});
function Zf(e) {
  return e.type !== 2;
}
function Qf(e) {
  if (e[rn] === null) return;
  let t = !0;
  for (; t; ) {
    let n = !1;
    for (let r of e[rn])
      r.dirty &&
        ((n = !0),
        r.zone === null || Zone.current === r.zone
          ? r.run()
          : r.zone.run(() => r.run()));
    t = n && !!(e[W] & 8192);
  }
}
var Ev = 100;
function Yf(e, t = !0, n = 0) {
  let i = e[Rt].rendererFactory,
    a = !1;
  a || i.begin?.();
  try {
    Cv(e, n);
  } catch (c) {
    throw (t && $f(e, c), c);
  } finally {
    a || i.end?.();
  }
}
function Cv(e, t) {
  let n = zd();
  try {
    Yo(!0), Ca(e, t);
    let r = 0;
    for (; Di(e); ) {
      if (r === Ev) throw new ne(103, !1);
      r++, Ca(e, 1);
    }
  } finally {
    Yo(n);
  }
}
function _v(e, t, n, r) {
  if (Nr(t)) return;
  let i = t[W],
    a = !1,
    c = !1;
  nu(t);
  let f = !0,
    h = null,
    v = null;
  a ||
    (Zf(e)
      ? ((v = yv(t)), (h = cr(v)))
      : ll() === null
        ? ((f = !1), (v = bv(t)), (h = cr(v)))
        : t[We] && (lr(t[We]), (t[We] = null)));
  try {
    Fd(t), bm(e.bindingStartIndex), n !== null && jf(e, t, n, 2, r);
    let _ = (i & 3) === 3;
    if (!a)
      if (_) {
        let A = e.preOrderCheckHooks;
        A !== null && Po(t, A, null);
      } else {
        let A = e.preOrderHooks;
        A !== null && Fo(t, A, 0, null), Us(t, 0);
      }
    if (
      (c || Mv(t), Qf(t), Xf(t, 0), e.contentQueries !== null && Sf(e, t), !a)
    )
      if (_) {
        let A = e.contentCheckHooks;
        A !== null && Po(t, A);
      } else {
        let A = e.contentHooks;
        A !== null && Fo(t, A, 1), Us(t, 1);
      }
    Tv(e, t);
    let R = e.components;
    R !== null && eh(t, R, 0);
    let O = e.viewQuery;
    if ((O !== null && Da(2, O, r), !a))
      if (_) {
        let A = e.viewCheckHooks;
        A !== null && Po(t, A);
      } else {
        let A = e.viewHooks;
        A !== null && Fo(t, A, 2), Us(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[$s])) {
      for (let A of t[$s]) A();
      t[$s] = null;
    }
    a || (Wf(t), (t[W] &= -73));
  } catch (_) {
    throw (a || Bn(t), _);
  } finally {
    v !== null && (To(v, h), f && Dv(v)), ru();
  }
}
function Xf(e, t) {
  for (let n = bf(e); n !== null; n = If(n))
    for (let r = Ve; r < n.length; r++) {
      let i = n[r];
      Jf(i, t);
    }
}
function Mv(e) {
  for (let t = bf(e); t !== null; t = If(t)) {
    if (!(t[W] & 2)) continue;
    let n = t[Rn];
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      Ld(i);
    }
  }
}
function Sv(e, t, n) {
  de(18);
  let r = at(t, e);
  Jf(r, n), de(19, r[Pe]);
}
function Jf(e, t) {
  eu(e) && Ca(e, t);
}
function Ca(e, t) {
  let r = e[Q],
    i = e[W],
    a = e[We],
    c = !!(t === 0 && i & 16);
  if (
    ((c ||= !!(i & 64 && t === 0)),
    (c ||= !!(i & 1024)),
    (c ||= !!(a?.dirty && No(a))),
    (c ||= !1),
    a && (a.dirty = !1),
    (e[W] &= -9217),
    c)
  )
    _v(r, e, r.template, e[Pe]);
  else if (i & 8192) {
    Qf(e), Xf(e, 1);
    let f = r.components;
    f !== null && eh(e, f, 1), Wf(e);
  }
}
function eh(e, t, n) {
  for (let r = 0; r < t.length; r++) Sv(e, t[r], n);
}
function Tv(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        if (i < 0) an(~i);
        else {
          let a = i,
            c = n[++r],
            f = n[++r];
          Cm(c, a);
          let h = t[a];
          de(24, h), f(2, h), de(25, h);
        }
      }
    } finally {
      an(-1);
    }
}
function Mu(e, t) {
  let n = zd() ? 64 : 1088;
  for (e[Rt].changeDetectionScheduler?.notify(t); e; ) {
    e[W] |= n;
    let r = sn(e);
    if (Zo(e) && !r) return e;
    e = r;
  }
  return null;
}
function th(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Nv(e, t) {
  let n = Ve + t;
  if (n < e.length) return e[n];
}
function nh(e, t, n, r = !0) {
  let i = t[Q];
  if ((Av(i, t, e, n), r)) {
    let c = Ea(n, e),
      f = t[De],
      h = f.parentNode(e[on]);
    h !== null && ov(i, e[Je], f, t, h, c);
  }
  let a = t[Go];
  a !== null && a.firstChild !== null && (a.firstChild = null);
}
function xv(e, t) {
  let n = ui(e, t);
  return n !== void 0 && Eu(n[Q], n), n;
}
function ui(e, t) {
  if (e.length <= Ve) return;
  let n = Ve + t,
    r = e[n];
  if (r) {
    let i = r[nn];
    i !== null && i !== e && Iu(i, r), t > 0 && (e[n - 1][Xe] = r[Xe]);
    let a = Uo(e, Ve + t);
    rv(r[Q], r);
    let c = a[gt];
    c !== null && c.detachView(a[Q]),
      (r[Ne] = null),
      (r[Xe] = null),
      (r[W] &= -129);
  }
  return r;
}
function Av(e, t, n, r) {
  let i = Ve + r,
    a = n.length;
  r > 0 && (n[i - 1][Xe] = t),
    r < a - Ve
      ? ((t[Xe] = n[i]), gd(n, Ve + r, t))
      : (n.push(t), (t[Xe] = null)),
    (t[Ne] = n);
  let c = t[nn];
  c !== null && n !== c && rh(c, t);
  let f = t[gt];
  f !== null && f.insertView(e), ia(t), (t[W] |= 128);
}
function rh(e, t) {
  let n = e[Rn],
    r = t[Ne];
  if (At(r)) e[W] |= 2;
  else {
    let i = r[Ne][ot];
    t[ot] !== i && (e[W] |= 2);
  }
  n === null ? (e[Rn] = [t]) : n.push(t);
}
var Er = class {
  _lView;
  _cdRefInjectingView;
  notifyErrorHandler;
  _appRef = null;
  _attachedToViewContainer = !1;
  get rootNodes() {
    let t = this._lView,
      n = t[Q];
    return ai(n, t, n.firstChild, []);
  }
  constructor(t, n, r = !0) {
    (this._lView = t),
      (this._cdRefInjectingView = n),
      (this.notifyErrorHandler = r);
  }
  get context() {
    return this._lView[Pe];
  }
  set context(t) {
    this._lView[Pe] = t;
  }
  get destroyed() {
    return Nr(this._lView);
  }
  destroy() {
    if (this._appRef) this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
      let t = this._lView[Ne];
      if (yt(t)) {
        let n = t[Ko],
          r = n ? n.indexOf(this) : -1;
        r > -1 && (ui(t, r), Uo(n, r));
      }
      this._attachedToViewContainer = !1;
    }
    Eu(this._lView[Q], this._lView);
  }
  onDestroy(t) {
    jd(this._lView, t);
  }
  markForCheck() {
    Mu(this._cdRefInjectingView || this._lView, 4);
  }
  detach() {
    this._lView[W] &= -129;
  }
  reattach() {
    ia(this._lView), (this._lView[W] |= 128);
  }
  detectChanges() {
    (this._lView[W] |= 1024), Yf(this._lView, this.notifyErrorHandler);
  }
  checkNoChanges() {}
  attachToViewContainerRef() {
    if (this._appRef) throw new ne(902, !1);
    this._attachedToViewContainer = !0;
  }
  detachFromAppRef() {
    this._appRef = null;
    let t = Zo(this._lView),
      n = this._lView[nn];
    n !== null && !t && Iu(n, this._lView), zf(this._lView[Q], this._lView);
  }
  attachToAppRef(t) {
    if (this._attachedToViewContainer) throw new ne(902, !1);
    this._appRef = t;
    let n = Zo(this._lView),
      r = this._lView[nn];
    r !== null && !n && rh(r, this._lView), ia(this._lView);
  }
};
var Cr = (() => {
    class e {
      static __NG_ELEMENT_ID__ = Ov;
    }
    return e;
  })(),
  kv = Cr,
  Rv = class extends kv {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let i = Uf(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new Er(i);
    }
  };
function Ov() {
  return Su(ze(), ae());
}
function Su(e, t) {
  return e.type & 4 ? new Rv(t, e, Hn(e, t)) : null;
}
function Ci(e, t, n, r, i) {
  let a = e.data[t];
  if (a === null) (a = Pv(e, t, n, r, i)), Em() && (a.flags |= 32);
  else if (a.type & 64) {
    (a.type = n), (a.value = r), (a.attrs = i);
    let c = vm();
    a.injectorIndex = c === null ? -1 : c.injectorIndex;
  }
  return Vn(a, !0), a;
}
function Pv(e, t, n, r, i) {
  let a = $d(),
    c = Ud(),
    f = c ? a : a && a.parent,
    h = (e.data[t] = Lv(e, f, n, t, r, i));
  return Fv(e, h, a, c), h;
}
function Fv(e, t, n, r) {
  e.firstChild === null && (e.firstChild = t),
    n !== null &&
      (r
        ? n.child == null && t.parent !== null && (n.child = t)
        : n.next === null && ((n.next = t), (t.prev = n)));
}
function Lv(e, t, n, r, i, a) {
  let c = t ? t.injectorIndex : -1,
    f = 0;
  return (
    gm() && (f |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: c,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: f,
      providerIndexes: 0,
      value: i,
      attrs: a,
      mergedAttrs: null,
      localNames: null,
      initialInputs: null,
      inputs: null,
      hostDirectiveInputs: null,
      outputs: null,
      hostDirectiveOutputs: null,
      directiveToIndex: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
var KI = new RegExp(`^(\\d+)*(${py}|${hy})*(.*)`);
var jv = () => null;
function _a(e, t) {
  return jv(e, t);
}
var Bv = class {},
  oh = class {},
  Ma = class {
    resolveComponentFactory(t) {
      throw Error(`No component factory found for ${Be(t)}.`);
    }
  },
  _i = class {
    static NULL = new Ma();
  },
  ci = class {},
  Mi = (() => {
    class e {
      destroyNode = null;
      static __NG_ELEMENT_ID__ = () => Vv();
    }
    return e;
  })();
function Vv() {
  let e = ae(),
    t = ze(),
    n = at(t.index, e);
  return (At(n) ? n : e)[De];
}
var Hv = (() => {
  class e {
    static ɵprov = ue({ token: e, providedIn: 'root', factory: () => null });
  }
  return e;
})();
function zl(e, t, n) {
  let r = n ? e.styles : null,
    i = n ? e.classes : null,
    a = 0;
  if (t !== null)
    for (let c = 0; c < t.length; c++) {
      let f = t[c];
      if (typeof f == 'number') a = f;
      else if (a == 1) i = Il(i, f);
      else if (a == 2) {
        let h = f,
          v = t[++c];
        r = Il(r, h + ': ' + v + ';');
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = i) : (e.classesWithoutHost = i);
}
function Rr(e, t = re.Default) {
  let n = ae();
  if (n === null) return Te(e, t);
  let r = ze();
  return uf(r, n, Re(e), t);
}
function XI() {
  let e = 'invalid';
  throw new Error(e);
}
function ih(e, t, n, r, i) {
  let a = r === null ? null : { '': -1 },
    c = i(e, n);
  if (c !== null) {
    let f,
      h = null,
      v = null,
      _ = Uv(c);
    _ === null ? (f = c) : ([f, h, v] = _), Gv(e, t, n, f, a, h, v);
  }
  a !== null && r !== null && $v(n, r, a);
}
function $v(e, t, n) {
  let r = (e.localNames = []);
  for (let i = 0; i < t.length; i += 2) {
    let a = n[t[i + 1]];
    if (a == null) throw new ne(-301, !1);
    r.push(t[i], a);
  }
}
function Uv(e) {
  let t = null,
    n = !1;
  for (let c = 0; c < e.length; c++) {
    let f = e[c];
    if ((c === 0 && it(f) && (t = f), f.findHostDirectiveDefs !== null)) {
      n = !0;
      break;
    }
  }
  if (!n) return null;
  let r = null,
    i = null,
    a = null;
  for (let c of e)
    c.findHostDirectiveDefs !== null &&
      ((r ??= []), (i ??= new Map()), (a ??= new Map()), qv(c, r, a, i)),
      c === t && ((r ??= []), r.push(c));
  return r !== null
    ? (r.push(...(t === null ? e : e.slice(1))), [r, i, a])
    : null;
}
function qv(e, t, n, r) {
  let i = t.length;
  e.findHostDirectiveDefs(e, t, r), n.set(e, [i, t.length - 1]);
}
function zv(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function Gv(e, t, n, r, i, a, c) {
  let f = r.length,
    h = !1;
  for (let O = 0; O < f; O++) {
    let A = r[O];
    !h && it(A) && ((h = !0), zv(e, n, O)), la(ti(n, t), e, A.type);
  }
  Xv(n, e.data.length, f);
  for (let O = 0; O < f; O++) {
    let A = r[O];
    A.providersResolver && A.providersResolver(A);
  }
  let v = !1,
    _ = !1,
    R = Ff(e, t, f, null);
  f > 0 && (n.directiveToIndex = new Map());
  for (let O = 0; O < f; O++) {
    let A = r[O];
    if (
      ((n.mergedAttrs = Dr(n.mergedAttrs, A.hostAttrs)),
      Kv(e, n, t, R, A),
      Yv(R, A, i),
      c !== null && c.has(A))
    ) {
      let [te, Ie] = c.get(A);
      n.directiveToIndex.set(A.type, [
        R,
        te + n.directiveStart,
        Ie + n.directiveStart,
      ]);
    } else (a === null || !a.has(A)) && n.directiveToIndex.set(A.type, R);
    A.contentQueries !== null && (n.flags |= 4),
      (A.hostBindings !== null || A.hostAttrs !== null || A.hostVars !== 0) &&
        (n.flags |= 64);
    let H = A.type.prototype;
    !v &&
      (H.ngOnChanges || H.ngOnInit || H.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (v = !0)),
      !_ &&
        (H.ngOnChanges || H.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (_ = !0)),
      R++;
  }
  Wv(e, n, a);
}
function Wv(e, t, n) {
  for (let r = t.directiveStart; r < t.directiveEnd; r++) {
    let i = e.data[r];
    if (n === null || !n.has(i)) Gl(0, t, i, r), Gl(1, t, i, r), Kl(t, r, !1);
    else {
      let a = n.get(i);
      Wl(0, t, a, r), Wl(1, t, a, r), Kl(t, r, !0);
    }
  }
}
function Gl(e, t, n, r) {
  let i = e === 0 ? n.inputs : n.outputs;
  for (let a in i)
    if (i.hasOwnProperty(a)) {
      let c;
      e === 0 ? (c = t.inputs ??= {}) : (c = t.outputs ??= {}),
        (c[a] ??= []),
        c[a].push(r),
        sh(t, a);
    }
}
function Wl(e, t, n, r) {
  let i = e === 0 ? n.inputs : n.outputs;
  for (let a in i)
    if (i.hasOwnProperty(a)) {
      let c = i[a],
        f;
      e === 0
        ? (f = t.hostDirectiveInputs ??= {})
        : (f = t.hostDirectiveOutputs ??= {}),
        (f[c] ??= []),
        f[c].push(r, a),
        sh(t, c);
    }
}
function sh(e, t) {
  t === 'class' ? (e.flags |= 8) : t === 'style' && (e.flags |= 16);
}
function Kl(e, t, n) {
  let { attrs: r, inputs: i, hostDirectiveInputs: a } = e;
  if (r === null || (!n && i === null) || (n && a === null) || pu(e)) {
    (e.initialInputs ??= []), e.initialInputs.push(null);
    return;
  }
  let c = null,
    f = 0;
  for (; f < r.length; ) {
    let h = r[f];
    if (h === 0) {
      f += 4;
      continue;
    } else if (h === 5) {
      f += 2;
      continue;
    } else if (typeof h == 'number') break;
    if (!n && i.hasOwnProperty(h)) {
      let v = i[h];
      for (let _ of v)
        if (_ === t) {
          (c ??= []), c.push(h, r[f + 1]);
          break;
        }
    } else if (n && a.hasOwnProperty(h)) {
      let v = a[h];
      for (let _ = 0; _ < v.length; _ += 2)
        if (v[_] === t) {
          (c ??= []), c.push(v[_ + 1], r[f + 1]);
          break;
        }
    }
    f += 2;
  }
  (e.initialInputs ??= []), e.initialInputs.push(c);
}
function Kv(e, t, n, r, i) {
  e.data[r] = i;
  let a = i.factory || (i.factory = Jt(i.type, !0)),
    c = new un(a, it(i), Rr);
  (e.blueprint[r] = c), (n[r] = c), Zv(e, t, r, Ff(e, n, i.hostVars, Ft), i);
}
function Zv(e, t, n, r, i) {
  let a = i.hostBindings;
  if (a) {
    let c = e.hostBindingOpCodes;
    c === null && (c = e.hostBindingOpCodes = []);
    let f = ~t.index;
    Qv(c) != f && c.push(f), c.push(n, r, a);
  }
}
function Qv(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == 'number' && n < 0) return n;
  }
  return 0;
}
function Yv(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    it(t) && (n[''] = e);
  }
}
function Xv(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function ah(e, t, n, r, i, a, c, f) {
  let h = t.consts,
    v = Qo(h, c),
    _ = Ci(t, e, 2, r, v);
  return (
    a && ih(t, n, _, Qo(h, f), i),
    (_.mergedAttrs = Dr(_.mergedAttrs, _.attrs)),
    _.attrs !== null && zl(_, _.attrs, !1),
    _.mergedAttrs !== null && zl(_, _.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, _),
    _
  );
}
function uh(e, t) {
  Jd(e, t), Nd(t) && e.queries.elementEnd(t);
}
var li = class extends _i {
  ngModule;
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = tn(t);
    return new On(n, this.ngModule);
  }
};
function Jv(e) {
  return Object.keys(e).map((t) => {
    let [n, r, i] = e[t],
      a = {
        propName: n,
        templateName: t,
        isSignal: (r & Ii.SignalBased) !== 0,
      };
    return i && (a.transform = i), a;
  });
}
function eD(e) {
  return Object.keys(e).map((t) => ({ propName: e[t], templateName: t }));
}
function tD(e, t, n) {
  let r = t instanceof kt ? t : t?.injector;
  return (
    r &&
      e.getStandaloneInjector !== null &&
      (r = e.getStandaloneInjector(r) || r),
    r ? new ua(n, r) : n
  );
}
function nD(e) {
  let t = e.get(ci, null);
  if (t === null) throw new ne(407, !1);
  let n = e.get(Hv, null),
    r = e.get(Ot, null);
  return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: r };
}
function rD(e, t) {
  let n = (e.selectors[0][0] || 'div').toLowerCase();
  return kf(t, n, n === 'svg' ? Od : n === 'math' ? am : null);
}
var On = class extends oh {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() {
      return (
        (this.cachedInputs ??= Jv(this.componentDef.inputs)), this.cachedInputs
      );
    }
    get outputs() {
      return (
        (this.cachedOutputs ??= eD(this.componentDef.outputs)),
        this.cachedOutputs
      );
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = ky(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors ?? []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, i) {
      de(22);
      let a = ee(null);
      try {
        let c = this.componentDef,
          f = r ? ['ng-version', '19.2.2'] : Ry(this.componentDef.selectors[0]),
          h = gu(0, null, null, 1, 0, null, null, null, null, [f], null),
          v = tD(c, i || this.ngModule, t),
          _ = nD(v),
          R = _.rendererFactory.createRenderer(null, c),
          O = r ? $y(R, r, c.encapsulation, v) : rD(c, R),
          A = mu(
            null,
            h,
            null,
            512 | Pf(c),
            null,
            null,
            _,
            R,
            v,
            null,
            Mf(O, v, !0),
          );
        (A[xe] = O), nu(A);
        let H = null;
        try {
          let te = ah(xe, h, A, '#host', () => [this.componentDef], !0, 0);
          O && (Of(R, O, te), Ar(O, A)),
            vu(h, A, te),
            Tf(h, te, A),
            uh(h, te),
            n !== void 0 && oD(te, this.ngContentSelectors, n),
            (H = at(te.index, A)),
            (A[Pe] = H[Pe]),
            wu(h, A, null);
        } catch (te) {
          throw (H !== null && ma(H), ma(A), te);
        } finally {
          de(23), ru();
        }
        return new Sa(this.componentType, A);
      } finally {
        ee(a);
      }
    }
  },
  Sa = class extends Bv {
    _rootLView;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n) {
      super(),
        (this._rootLView = n),
        (this._tNode = Xa(n[Q], xe)),
        (this.location = Hn(this._tNode, n)),
        (this.instance = at(this._tNode.index, n)[Pe]),
        (this.hostView = this.changeDetectorRef = new Er(n, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode;
      if (
        ((this.previousInputValues ??= new Map()),
        this.previousInputValues.has(t) &&
          Object.is(this.previousInputValues.get(t), n))
      )
        return;
      let i = this._rootLView,
        a = Du(r, i[Q], i, t, n);
      this.previousInputValues.set(t, n);
      let c = at(r.index, i);
      Mu(c, 1);
    }
    get injector() {
      return new Xt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function oD(e, t, n) {
  let r = (e.projection = []);
  for (let i = 0; i < t.length; i++) {
    let a = n[i];
    r.push(a != null && a.length ? Array.from(a) : null);
  }
}
var Si = (() => {
  class e {
    static __NG_ELEMENT_ID__ = iD;
  }
  return e;
})();
function iD() {
  let e = ze();
  return lh(e, ae());
}
var sD = Si,
  ch = class extends sD {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Hn(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Xt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = au(this._hostTNode, this._hostLView);
      if (tf(t)) {
        let n = Jo(t, this._hostLView),
          r = Xo(t),
          i = n[Q].data[r + 8];
        return new Xt(i, n);
      } else return new Xt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Zl(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - Ve;
    }
    createEmbeddedView(t, n, r) {
      let i, a;
      typeof r == 'number'
        ? (i = r)
        : r != null && ((i = r.index), (a = r.injector));
      let c = _a(this._lContainer, t.ssrId),
        f = t.createEmbeddedViewImpl(n || {}, a, c);
      return this.insertImpl(f, i, Ia(this._hostTNode, c)), f;
    }
    createComponent(t, n, r, i, a) {
      let c = t && !rm(t),
        f;
      if (c) f = n;
      else {
        let H = n || {};
        (f = H.index),
          (r = H.injector),
          (i = H.projectableNodes),
          (a = H.environmentInjector || H.ngModuleRef);
      }
      let h = c ? t : new On(tn(t)),
        v = r || this.parentInjector;
      if (!a && h.ngModule == null) {
        let te = (c ? v : this.parentInjector).get(kt, null);
        te && (a = te);
      }
      let _ = tn(h.componentType ?? {}),
        R = _a(this._lContainer, _?.id ?? null),
        O = R?.firstChild ?? null,
        A = h.create(v, i, O, a);
      return this.insertImpl(A.hostView, f, Ia(this._hostTNode, R)), A;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let i = t._lView;
      if (um(i)) {
        let f = this.indexOf(t);
        if (f !== -1) this.detach(f);
        else {
          let h = i[Ne],
            v = new ch(h, h[Je], h[Ne]);
          v.detach(v.indexOf(t));
        }
      }
      let a = this._adjustIndex(n),
        c = this._lContainer;
      return nh(c, i, a, r), t.attachToViewContainerRef(), gd(Ws(c), a, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Zl(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = ui(this._lContainer, n);
      r && (Uo(Ws(this._lContainer), n), Eu(r[Q], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = ui(this._lContainer, n);
      return r && Uo(Ws(this._lContainer), n) != null ? new Er(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Zl(e) {
  return e[Ko];
}
function Ws(e) {
  return e[Ko] || (e[Ko] = []);
}
function lh(e, t) {
  let n,
    r = t[e.index];
  return (
    yt(r) ? (n = r) : ((n = th(r, t, null, e)), (t[e.index] = n), yu(t, n)),
    uD(n, t, e, r),
    new ch(n, e, t)
  );
}
function aD(e, t) {
  let n = e[De],
    r = n.createComment(''),
    i = ut(t, e),
    a = n.parentNode(i);
  return ii(n, a, r, n.nextSibling(i), !1), r;
}
var uD = dD,
  cD = () => !1;
function lD(e, t, n) {
  return cD(e, t, n);
}
function dD(e, t, n, r) {
  if (e[on]) return;
  let i;
  n.type & 8 ? (i = st(r)) : (i = aD(t, n)), (e[on] = i);
}
var Ta = class e {
    queryList;
    matches = null;
    constructor(t) {
      this.queryList = t;
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  Na = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          i = [];
        for (let a = 0; a < r; a++) {
          let c = n.getByIndex(a),
            f = this.queries[c.indexInDeclarationView];
          i.push(f.clone());
        }
        return new e(i);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        hh(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  xa = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == 'string' ? (this.predicate = vD(t)) : (this.predicate = t);
    }
  },
  Aa = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let i = n !== null ? n.length : 0,
          a = this.getByIndex(r).embeddedTView(t, i);
        a &&
          ((a.indexInDeclarationView = r), n !== null ? n.push(a) : (n = [a]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  ka = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) {
      (this.metadata = t), (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let i = 0; i < r.length; i++) {
          let a = r[i];
          this.matchTNodeWithReadOption(t, n, fD(n, a)),
            this.matchTNodeWithReadOption(t, n, Lo(n, t, a, !1, !1));
        }
      else
        r === Cr
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Lo(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let i = this.metadata.read;
        if (i !== null)
          if (i === Pt || i === Si || (i === Cr && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let a = Lo(n, t, i, !1, !1);
            a !== null && this.addMatch(n.index, a);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function fD(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function hD(e, t) {
  return e.type & 11 ? Hn(e, t) : e.type & 4 ? Su(e, t) : null;
}
function pD(e, t, n, r) {
  return n === -1 ? hD(t, e) : n === -2 ? gD(e, t, r) : wr(e, e[Q], n, t);
}
function gD(e, t, n) {
  if (n === Pt) return Hn(t, e);
  if (n === Cr) return Su(t, e);
  if (n === Si) return lh(t, e);
}
function dh(e, t, n, r) {
  let i = t[gt].queries[r];
  if (i.matches === null) {
    let a = e.data,
      c = n.matches,
      f = [];
    for (let h = 0; c !== null && h < c.length; h += 2) {
      let v = c[h];
      if (v < 0) f.push(null);
      else {
        let _ = a[v];
        f.push(pD(t, _, c[h + 1], n.metadata.read));
      }
    }
    i.matches = f;
  }
  return i.matches;
}
function Ra(e, t, n, r) {
  let i = e.queries.getByIndex(n),
    a = i.matches;
  if (a !== null) {
    let c = dh(e, t, i, n);
    for (let f = 0; f < a.length; f += 2) {
      let h = a[f];
      if (h > 0) r.push(c[f / 2]);
      else {
        let v = a[f + 1],
          _ = t[-h];
        for (let R = Ve; R < _.length; R++) {
          let O = _[R];
          O[nn] === O[Ne] && Ra(O[Q], O, v, r);
        }
        if (_[Rn] !== null) {
          let R = _[Rn];
          for (let O = 0; O < R.length; O++) {
            let A = R[O];
            Ra(A[Q], A, v, r);
          }
        }
      }
    }
  }
  return r;
}
function fh(e, t) {
  return e[gt].queries[t].queryList;
}
function mD(e, t, n) {
  let r = new ga((n & 4) === 4);
  return (
    dm(e, t, r, r.destroy), (t[gt] ??= new Na()).queries.push(new Ta(r)) - 1
  );
}
function yD(e, t, n) {
  let r = Ce();
  return (
    r.firstCreatePass &&
      (DD(r, new xa(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    mD(r, ae(), t)
  );
}
function vD(e) {
  return e.split(',').map((t) => t.trim());
}
function DD(e, t, n) {
  e.queries === null && (e.queries = new Aa()), e.queries.track(new ka(t, n));
}
function hh(e, t) {
  return e.queries.getByIndex(t);
}
function wD(e, t) {
  let n = e[Q],
    r = hh(n, t);
  return r.crossesNgTemplate ? Ra(n, e, t, []) : dh(n, e, r, t);
}
function ph(e, t, n) {
  let r,
    i = Fs(() => {
      r._dirtyCounter();
      let a = CD(r, e);
      if (t && a === void 0) throw new ne(-951, !1);
      return a;
    });
  return (r = i[ke]), (r._dirtyCounter = $n(0)), (r._flatValue = void 0), i;
}
function bD(e) {
  return ph(!0, !1, e);
}
function ID(e) {
  return ph(!0, !0, e);
}
function ED(e, t) {
  let n = e[ke];
  (n._lView = ae()),
    (n._queryIndex = t),
    (n._queryList = fh(n._lView, t)),
    n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function CD(e, t) {
  let n = e._lView,
    r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[W] & 4) return t ? void 0 : qe;
  let i = fh(n, r),
    a = wD(n, r);
  return (
    i.reset(a, ry),
    t
      ? i.first
      : i._changesDetected || e._flatValue === void 0
        ? (e._flatValue = i.toArray())
        : e._flatValue
  );
}
function Ql(e, t) {
  return bD(t);
}
function _D(e, t) {
  return ID(t);
}
var gh = ((Ql.required = _D), Ql);
var Pn = class {},
  MD = class {};
var Oa = class extends Pn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new li(this);
    constructor(t, n, r, i = !0) {
      super(), (this.ngModuleType = t), (this._parent = n);
      let a = vd(t);
      (this._bootstrapComponents = xf(a.bootstrap)),
        (this._r3Injector = df(
          t,
          n,
          [
            { provide: Pn, useValue: this },
            { provide: _i, useValue: this.componentFactoryResolver },
            ...r,
          ],
          Be(t),
          new Set(['environment']),
        )),
        i && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Pa = class extends MD {
    moduleType;
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new Oa(this.moduleType, t, []);
    }
  };
var di = class extends Pn {
  injector;
  componentFactoryResolver = new li(this);
  instance = null;
  constructor(t) {
    super();
    let n = new mr(
      [
        ...t.providers,
        { provide: Pn, useValue: this },
        { provide: _i, useValue: this.componentFactoryResolver },
      ],
      t.parent || Za(),
      t.debugName,
      new Set(['environment']),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function SD(e, t, n = null) {
  return new di({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
var TD = (() => {
  class e {
    _injector;
    cachedInjectors = new Map();
    constructor(n) {
      this._injector = n;
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = wd(!1, n.type),
          i =
            r.length > 0
              ? SD([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, i);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static ɵprov = ue({
      token: e,
      providedIn: 'environment',
      factory: () => new e(Te(kt)),
    });
  }
  return e;
})();
function Ti(e) {
  return pi(() => {
    let t = mh(e),
      n = Le(Fe({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Df.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: t.standalone
          ? (i) => i.get(TD).getOrCreateStandaloneInjector(n)
          : null,
        getExternalStyles: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Ir.Emulated,
        styles: e.styles || qe,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: '',
      });
    t.standalone && Un('NgStandalone'), yh(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = Yl(r, !1)), (n.pipeDefs = Yl(r, !0)), (n.id = PD(n)), n
    );
  });
}
function ND(e) {
  return tn(e) || zg(e);
}
function xD(e) {
  return e !== null;
}
function Ni(e) {
  return pi(() => ({
    type: e.type,
    bootstrap: e.bootstrap || qe,
    declarations: e.declarations || qe,
    imports: e.imports || qe,
    exports: e.exports || qe,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function AD(e, t) {
  if (e == null) return en;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let i = e[r],
        a,
        c,
        f,
        h;
      Array.isArray(i)
        ? ((f = i[0]), (a = i[1]), (c = i[2] ?? a), (h = i[3] || null))
        : ((a = i), (c = i), (f = Ii.None), (h = null)),
        (n[a] = [r, f, h]),
        (t[a] = c);
    }
  return n;
}
function kD(e) {
  if (e == null) return en;
  let t = {};
  for (let n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function RD(e) {
  return pi(() => {
    let t = mh(e);
    return yh(t), t;
  });
}
function OD(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone ?? !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function mh(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputConfig: e.inputs || en,
    exportAs: e.exportAs || null,
    standalone: e.standalone ?? !0,
    signals: e.signals === !0,
    selectors: e.selectors || qe,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: AD(e.inputs, t),
    outputs: kD(e.outputs),
    debugInfo: null,
  };
}
function yh(e) {
  e.features?.forEach((t) => t(e));
}
function Yl(e, t) {
  if (!e) return null;
  let n = t ? Gg : ND;
  return () => (typeof e == 'function' ? e() : e).map((r) => n(r)).filter(xD);
}
function PD(e) {
  let t = 0,
    n = typeof e.consts == 'function' ? '' : e.consts,
    r = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      n,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ];
  for (let a of r.join('|')) t = (Math.imul(31, t) + a.charCodeAt(0)) << 0;
  return (t += 2147483648), 'c' + t;
}
function FD(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function LD(e) {
  let t = FD(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let i;
    if (it(e)) i = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new ne(903, !1);
      i = t.ɵdir;
    }
    if (i) {
      if (n) {
        r.push(i);
        let c = e;
        (c.inputs = Ks(e.inputs)),
          (c.declaredInputs = Ks(e.declaredInputs)),
          (c.outputs = Ks(e.outputs));
        let f = i.hostBindings;
        f && $D(e, f);
        let h = i.viewQuery,
          v = i.contentQueries;
        if (
          (h && VD(e, h),
          v && HD(e, v),
          jD(e, i),
          Ig(e.outputs, i.outputs),
          it(i) && i.data.animation)
        ) {
          let _ = e.data;
          _.animation = (_.animation || []).concat(i.data.animation);
        }
      }
      let a = i.features;
      if (a)
        for (let c = 0; c < a.length; c++) {
          let f = a[c];
          f && f.ngInherit && f(e), f === LD && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  BD(r);
}
function jD(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    r !== void 0 &&
      ((e.inputs[n] = r), (e.declaredInputs[n] = t.declaredInputs[n]));
  }
}
function BD(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let i = e[r];
    (i.hostVars = t += i.hostVars),
      (i.hostAttrs = Dr(i.hostAttrs, (n = Dr(n, i.hostAttrs))));
  }
}
function Ks(e) {
  return e === en ? {} : e === qe ? [] : e;
}
function VD(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, i) => {
        t(r, i), n(r, i);
      })
    : (e.viewQuery = t);
}
function HD(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, i, a) => {
        t(r, i, a), n(r, i, a);
      })
    : (e.contentQueries = t);
}
function $D(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, i) => {
        t(r, i), n(r, i);
      })
    : (e.hostBindings = t);
}
function UD(e, t, n) {
  return (e[t] = n);
}
function fn(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function qD(e, t, n, r, i, a, c, f, h) {
  let v = t.consts,
    _ = Ci(t, e, 4, c || null, f || null);
  Hd() && ih(t, n, _, Qo(v, h), Hf),
    (_.mergedAttrs = Dr(_.mergedAttrs, _.attrs)),
    Jd(t, _);
  let R = (_.tView = gu(
    2,
    _,
    r,
    i,
    a,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    v,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, _), (R.queries = t.queries.embeddedTView(_))),
    _
  );
}
function zD(e, t, n, r, i, a, c, f, h, v) {
  let _ = n + xe,
    R = t.firstCreatePass ? qD(_, t, e, r, i, a, c, f, h) : t.data[_];
  Vn(R, !1);
  let O = WD(t, e, R, n);
  iu() && Cu(t, e, O, R), Ar(O, e);
  let A = th(O, e, O, R);
  return (
    (e[_] = A),
    yu(e, A),
    lD(A, R, e),
    Qa(R) && vu(t, e, R),
    h != null && Bf(e, R, v),
    R
  );
}
function GD(e, t, n, r, i, a, c, f) {
  let h = ae(),
    v = Ce(),
    _ = Qo(v.consts, a);
  return zD(h, v, e, t, n, r, i, _, c, f), GD;
}
var WD = KD;
function KD(e, t, n, r) {
  return su(!0), t[De].createComment('');
}
var nE = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'platform' });
  }
  return e;
})();
var ZD = new se('');
var vh = (() => {
    class e {
      static ɵprov = ue({
        token: e,
        providedIn: 'root',
        factory: () => new Fa(),
      });
    }
    return e;
  })(),
  Fa = class {
    queuedEffectCount = 0;
    queues = new Map();
    schedule(t) {
      this.enqueue(t);
    }
    remove(t) {
      let n = t.zone,
        r = this.queues.get(n);
      r.has(t) && (r.delete(t), this.queuedEffectCount--);
    }
    enqueue(t) {
      let n = t.zone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || (this.queuedEffectCount++, r.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [t, n] of this.queues)
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  };
function Tu(e) {
  return !!e && typeof e.then == 'function';
}
function Dh(e) {
  return !!e && typeof e.subscribe == 'function';
}
var wh = new se('');
function rE(e) {
  return Dd([{ provide: wh, multi: !0, useValue: e }]);
}
var bh = (() => {
    class e {
      resolve;
      reject;
      initialized = !1;
      done = !1;
      donePromise = new Promise((n, r) => {
        (this.resolve = n), (this.reject = r);
      });
      appInits = z(wh, { optional: !0 }) ?? [];
      injector = z(Ke);
      constructor() {}
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let i of this.appInits) {
          let a = _d(this.injector, i);
          if (Tu(a)) n.push(a);
          else if (Dh(a)) {
            let c = new Promise((f, h) => {
              a.subscribe({ complete: f, error: h });
            });
            n.push(c);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((i) => {
            this.reject(i);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
    }
    return e;
  })(),
  QD = new se('');
function YD() {
  Dl(() => {
    throw new ne(600, !1);
  });
}
function XD(e) {
  return e.isBoundToModule;
}
var JD = 10;
var _r = (() => {
  class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = z(ey);
    afterRenderManager = z(_f);
    zonelessEnabled = z(uu);
    rootEffectScheduler = z(vh);
    dirtyFlags = 0;
    tracingSnapshot = null;
    externalTestViews = new Set();
    afterTick = new Qe();
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    componentTypes = [];
    components = [];
    isStable = z(wi).hasPendingTasks.pipe(vo((n) => !n));
    constructor() {
      z(bi, { optional: !0 });
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (i) => {
            i && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    _injector = z(kt);
    _rendererFactory = null;
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      de(10);
      let i = n instanceof oh;
      if (!this._injector.get(bh).done) {
        let O = '';
        throw new ne(405, O);
      }
      let c;
      i ? (c = n) : (c = this._injector.get(_i).resolveComponentFactory(n)),
        this.componentTypes.push(c.componentType);
      let f = XD(c) ? void 0 : this._injector.get(Pn),
        h = r || c.selector,
        v = c.create(Ke.NULL, [], h, f),
        _ = v.location.nativeElement,
        R = v.injector.get(ZD, null);
      return (
        R?.registerApplication(_),
        v.onDestroy(() => {
          this.detachView(v.hostView),
            jo(this.components, v),
            R?.unregisterApplication(_);
        }),
        this._loadComponent(v),
        de(11, v),
        v
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      de(12),
        this.tracingSnapshot !== null
          ? this.tracingSnapshot.run(fu.CHANGE_DETECTION, this.tickImpl)
          : this.tickImpl();
    }
    tickImpl = () => {
      if (this._runningTick) throw new ne(101, !1);
      let n = ee(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1),
          this.tracingSnapshot?.dispose(),
          (this.tracingSnapshot = null),
          ee(n),
          this.afterTick.next(),
          de(13);
      }
    };
    synchronize() {
      this._rendererFactory === null &&
        !this._injector.destroyed &&
        (this._rendererFactory = this._injector.get(ci, null, {
          optional: !0,
        }));
      let n = 0;
      for (; this.dirtyFlags !== 0 && n++ < JD; )
        de(14), this.synchronizeOnce(), de(15);
    }
    synchronizeOnce() {
      if (
        (this.dirtyFlags & 16 &&
          ((this.dirtyFlags &= -17), this.rootEffectScheduler.flush()),
        this.dirtyFlags & 7)
      ) {
        let n = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8), (this.dirtyFlags |= 8);
        for (let { _lView: r, notifyErrorHandler: i } of this.allViews)
          ew(r, i, n, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 23)
        )
          return;
      } else this._rendererFactory?.begin?.(), this._rendererFactory?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => Di(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      jo(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView),
        this.tick(),
        this.components.push(n),
        this._injector.get(QD, []).forEach((i) => i(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => jo(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new ne(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
  }
  return e;
})();
function jo(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function ew(e, t, n, r) {
  if (!n && !Di(e)) return;
  Yf(e, t, n && !r ? 0 : 1);
}
function tw(e, t, n, r) {
  let i = ae(),
    a = xr();
  if (fn(i, a, t)) {
    let c = Ce(),
      f = ou();
    Qy(f, i, e, t, n, r);
  }
  return tw;
}
function nw(e, t, n, r) {
  return fn(e, xr(), n) ? t + za(n) + r : Ft;
}
function Ro(e, t) {
  return (e << 17) | (t << 2);
}
function ln(e) {
  return (e >> 17) & 32767;
}
function rw(e) {
  return (e & 2) == 2;
}
function ow(e, t) {
  return (e & 131071) | (t << 17);
}
function La(e) {
  return e | 2;
}
function Fn(e) {
  return (e & 131068) >> 2;
}
function Zs(e, t) {
  return (e & -131069) | (t << 2);
}
function iw(e) {
  return (e & 1) === 1;
}
function ja(e) {
  return e | 1;
}
function sw(e, t, n, r, i, a) {
  let c = a ? t.classBindings : t.styleBindings,
    f = ln(c),
    h = Fn(c);
  e[r] = n;
  let v = !1,
    _;
  if (Array.isArray(n)) {
    let R = n;
    (_ = R[1]), (_ === null || Sr(R, _) > 0) && (v = !0);
  } else _ = n;
  if (i)
    if (h !== 0) {
      let O = ln(e[f + 1]);
      (e[r + 1] = Ro(O, f)),
        O !== 0 && (e[O + 1] = Zs(e[O + 1], r)),
        (e[f + 1] = ow(e[f + 1], r));
    } else
      (e[r + 1] = Ro(f, 0)), f !== 0 && (e[f + 1] = Zs(e[f + 1], r)), (f = r);
  else
    (e[r + 1] = Ro(h, 0)),
      f === 0 ? (f = r) : (e[h + 1] = Zs(e[h + 1], r)),
      (h = r);
  v && (e[r + 1] = La(e[r + 1])),
    Xl(e, _, r, !0),
    Xl(e, _, r, !1),
    aw(t, _, e, r, a),
    (c = Ro(f, h)),
    a ? (t.classBindings = c) : (t.styleBindings = c);
}
function aw(e, t, n, r, i) {
  let a = i ? e.residualClasses : e.residualStyles;
  a != null &&
    typeof t == 'string' &&
    Sr(a, t) >= 0 &&
    (n[r + 1] = ja(n[r + 1]));
}
function Xl(e, t, n, r) {
  let i = e[n + 1],
    a = t === null,
    c = r ? ln(i) : Fn(i),
    f = !1;
  for (; c !== 0 && (f === !1 || a); ) {
    let h = e[c],
      v = e[c + 1];
    uw(h, t) && ((f = !0), (e[c + 1] = r ? ja(v) : La(v))),
      (c = r ? ln(v) : Fn(v));
  }
  f && (e[n + 1] = r ? La(i) : ja(i));
}
function uw(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == 'string'
      ? Sr(e, t) >= 0
      : !1;
}
function cw(e, t, n) {
  let r = ae(),
    i = xr();
  if (fn(r, i, t)) {
    let a = Ce(),
      c = ou();
    Vf(a, c, r, e, t, r[De], n, !1);
  }
  return cw;
}
function Jl(e, t, n, r, i) {
  Du(t, e, n, i ? 'class' : 'style', r);
}
function lw(e, t) {
  return dw(e, t, null, !0), lw;
}
function dw(e, t, n, r) {
  let i = ae(),
    a = Ce(),
    c = Im(2);
  if ((a.firstUpdatePass && hw(a, e, c, r), t !== Ft && fn(i, c, t))) {
    let f = a.data[dn()];
    vw(a, f, i, i[De], e, (i[c + 1] = Dw(t, n)), r, c);
  }
}
function fw(e, t) {
  return t >= e.expandoStartIndex;
}
function hw(e, t, n, r) {
  let i = e.data;
  if (i[n + 1] === null) {
    let a = i[dn()],
      c = fw(e, n);
    ww(a, r) && t === null && !c && (t = !1),
      (t = pw(i, a, t, r)),
      sw(i, a, t, n, c, r);
  }
}
function pw(e, t, n, r) {
  let i = Mm(e),
    a = r ? t.residualClasses : t.residualStyles;
  if (i === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Qs(null, e, t, n, r)), (n = Mr(n, t.attrs, r)), (a = null));
  else {
    let c = t.directiveStylingLast;
    if (c === -1 || e[c] !== i)
      if (((n = Qs(i, e, t, n, r)), a === null)) {
        let h = gw(e, t, r);
        h !== void 0 &&
          Array.isArray(h) &&
          ((h = Qs(null, e, t, h[1], r)),
          (h = Mr(h, t.attrs, r)),
          mw(e, t, r, h));
      } else a = yw(e, t, r);
  }
  return (
    a !== void 0 && (r ? (t.residualClasses = a) : (t.residualStyles = a)), n
  );
}
function gw(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Fn(r) !== 0) return e[ln(r)];
}
function mw(e, t, n, r) {
  let i = n ? t.classBindings : t.styleBindings;
  e[ln(i)] = r;
}
function yw(e, t, n) {
  let r,
    i = t.directiveEnd;
  for (let a = 1 + t.directiveStylingLast; a < i; a++) {
    let c = e[a].hostAttrs;
    r = Mr(r, c, n);
  }
  return Mr(r, t.attrs, n);
}
function Qs(e, t, n, r, i) {
  let a = null,
    c = n.directiveEnd,
    f = n.directiveStylingLast;
  for (
    f === -1 ? (f = n.directiveStart) : f++;
    f < c && ((a = t[f]), (r = Mr(r, a.hostAttrs, i)), a !== e);

  )
    f++;
  return e !== null && (n.directiveStylingLast = f), r;
}
function Mr(e, t, n) {
  let r = n ? 1 : 2,
    i = -1;
  if (t !== null)
    for (let a = 0; a < t.length; a++) {
      let c = t[a];
      typeof c == 'number'
        ? (i = c)
        : i === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ['', e]),
          Ug(e, c, n ? !0 : t[++a]));
    }
  return e === void 0 ? null : e;
}
function vw(e, t, n, r, i, a, c, f) {
  if (!(t.type & 3)) return;
  let h = e.data,
    v = h[f + 1],
    _ = iw(v) ? ed(h, t, n, i, Fn(v), c) : void 0;
  if (!fi(_)) {
    fi(a) || (rw(v) && (a = ed(h, null, n, i, f, c)));
    let R = Pd(dn(), n);
    gv(r, c, R, i, a);
  }
}
function ed(e, t, n, r, i, a) {
  let c = t === null,
    f;
  for (; i > 0; ) {
    let h = e[i],
      v = Array.isArray(h),
      _ = v ? h[1] : h,
      R = _ === null,
      O = n[i + 1];
    O === Ft && (O = R ? qe : void 0);
    let A = R ? Vs(O, r) : _ === r ? O : void 0;
    if ((v && !fi(A) && (A = Vs(h, r)), fi(A) && ((f = A), c))) return f;
    let H = e[i + 1];
    i = c ? ln(H) : Fn(H);
  }
  if (t !== null) {
    let h = a ? t.residualClasses : t.residualStyles;
    h != null && (f = Vs(h, r));
  }
  return f;
}
function fi(e) {
  return e !== void 0;
}
function Dw(e, t) {
  return (
    e == null ||
      e === '' ||
      (typeof t == 'string'
        ? (e = e + t)
        : typeof e == 'object' && (e = Be(Nf(e)))),
    e
  );
}
function ww(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function oE(e, t) {
  Un('NgControlFlow');
  let n = ae(),
    r = xr(),
    i = n[r] !== Ft ? n[r] : -1,
    a = i !== -1 ? td(n, xe + i) : void 0,
    c = 0;
  if (fn(n, r, e)) {
    let f = ee(null);
    try {
      if ((a !== void 0 && xv(a, c), e !== -1)) {
        let h = xe + e,
          v = td(n, h),
          _ = bw(n[Q], h),
          R = _a(v, _.tView.ssrId),
          O = Uf(n, _, t, { dehydratedView: R });
        nh(v, O, c, Ia(_, R));
      }
    } finally {
      ee(f);
    }
  } else if (a !== void 0) {
    let f = Nv(a, c);
    f !== void 0 && (f[Pe] = t);
  }
}
function td(e, t) {
  return e[t];
}
function bw(e, t) {
  return Xa(e, t);
}
function xi(e, t, n, r) {
  let i = ae(),
    a = Ce(),
    c = xe + e,
    f = i[De],
    h = a.firstCreatePass ? ah(c, a, i, t, Hf, Hd(), n, r) : a.data[c],
    v = Iw(a, i, h, f, t, e);
  i[c] = v;
  let _ = Qa(h);
  return (
    Vn(h, !0),
    Of(f, v, h),
    !qf(h) && iu() && Cu(a, i, v, h),
    (fm() === 0 || _) && Ar(v, i),
    hm(),
    _ && (vu(a, i, h), Tf(a, h, i)),
    r !== null && Bf(i, h),
    xi
  );
}
function Ai() {
  let e = ze();
  Ud() ? Dm() : ((e = e.parent), Vn(e, !1));
  let t = e;
  mm(t) && ym(), pm();
  let n = Ce();
  return (
    n.firstCreatePass && uh(n, t),
    t.classesWithoutHost != null &&
      Rm(t) &&
      Jl(n, t, ae(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Om(t) &&
      Jl(n, t, ae(), t.stylesWithoutHost, !1),
    Ai
  );
}
function Or(e, t, n, r) {
  return xi(e, t, n, r), Ai(), Or;
}
var Iw = (e, t, n, r, i, a) => (su(!0), kf(r, i, xm()));
function iE() {
  return ae();
}
var hi = 'en-US';
var Ew = hi;
function Cw(e) {
  typeof e == 'string' && (Ew = e.toLowerCase().replace(/_/g, '-'));
}
var _w = (e, t, n) => {};
function Mw(e, t, n, r) {
  let i = ae(),
    a = Ce(),
    c = ze();
  return Ih(a, i, i[De], c, e, t, r), Mw;
}
function Sw(e, t, n, r) {
  let i = e.cleanup;
  if (i != null)
    for (let a = 0; a < i.length - 1; a += 2) {
      let c = i[a];
      if (c === n && i[a + 1] === r) {
        let f = t[Wo],
          h = i[a + 2];
        return f.length > h ? f[h] : null;
      }
      typeof c == 'string' && (a += 2);
    }
  return null;
}
function Ih(e, t, n, r, i, a, c) {
  let f = Qa(r),
    v = e.firstCreatePass ? Vd(e) : null,
    _ = t[Pe],
    R = Bd(t),
    O = !0;
  if (r.type & 3 || c) {
    let A = ut(r, t),
      H = c ? c(A) : A,
      te = R.length,
      Ie = c ? (He) => c(st(He[r.index])) : r.index,
      ye = null;
    if ((!c && f && (ye = Sw(e, t, i, r.index)), ye !== null)) {
      let He = ye.__ngLastListenerFn__ || ye;
      (He.__ngNextListenerFn__ = a), (ye.__ngLastListenerFn__ = a), (O = !1);
    } else {
      (a = od(r, t, _, a)), _w(H, i, a);
      let He = n.listen(H, i, a);
      R.push(a, He), v && v.push(i, Ie, te, te + 1);
    }
  } else a = od(r, t, _, a);
  if (O) {
    let A = r.outputs?.[i],
      H = r.hostDirectiveOutputs?.[i];
    if (H && H.length)
      for (let te = 0; te < H.length; te += 2) {
        let Ie = H[te],
          ye = H[te + 1];
        nd(r, e, t, Ie, ye, i, a, R, v);
      }
    if (A && A.length) for (let te of A) nd(r, e, t, te, i, i, a, R, v);
  }
}
function nd(e, t, n, r, i, a, c, f, h) {
  let v = n[r],
    R = t.data[r].outputs[i],
    A = v[R].subscribe(c),
    H = f.length;
  f.push(c, A), h && h.push(a, e.index, H, -(H + 1));
}
function rd(e, t, n, r) {
  let i = ee(null);
  try {
    return de(6, t, n), n(r) !== !1;
  } catch (a) {
    return $f(e, a), !1;
  } finally {
    de(7, t, n), ee(i);
  }
}
function od(e, t, n, r) {
  return function i(a) {
    if (a === Function) return r;
    let c = jn(e) ? at(e.index, t) : t;
    Mu(c, 5);
    let f = rd(t, n, r, a),
      h = i.__ngNextListenerFn__;
    for (; h; ) (f = rd(t, n, h, a) && f), (h = h.__ngNextListenerFn__);
    return f;
  };
}
function sE(e = 1) {
  return Nm(e);
}
function Eh(e, t, n, r) {
  ED(e, yD(t, n, r));
}
function Ch(e = 1) {
  tu(Sm() + e);
}
function Nu(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function aE(e) {
  let t = qd();
  return Ja(t, xe + e);
}
function uE(e, t = '') {
  let n = ae(),
    r = Ce(),
    i = e + xe,
    a = r.firstCreatePass ? Ci(r, i, 1, t, null) : r.data[i],
    c = Tw(r, n, a, t, e);
  (n[i] = c), iu() && Cu(r, n, c, a), Vn(a, !1);
}
var Tw = (e, t, n, r, i) => (su(!0), Oy(t[De], r));
function Nw(e, t, n) {
  let r = ae(),
    i = nw(r, e, t, n);
  return i !== Ft && xw(r, dn(), i), Nw;
}
function xw(e, t, n) {
  let r = Pd(t, e);
  Py(e[De], r, n);
}
function Aw(e, t, n) {
  yf(t) && (t = t());
  let r = ae(),
    i = xr();
  if (fn(r, i, t)) {
    let a = Ce(),
      c = ou();
    Vf(a, c, r, e, t, r[De], n, !1);
  }
  return Aw;
}
function cE(e, t) {
  let n = yf(e);
  return n && e.set(t), n;
}
function kw(e, t) {
  let n = ae(),
    r = Ce(),
    i = ze();
  return Ih(r, n, n[De], i, e, t), kw;
}
var _h = {};
function Rw(e) {
  let t = Ce(),
    n = ae(),
    r = e + xe,
    i = Ci(t, r, 128, null, null);
  return Vn(i, !1), Nu(t, n, r, _h), Rw;
}
function lE(e) {
  Un('NgLet');
  let t = Ce(),
    n = ae(),
    r = dn();
  return Nu(t, n, r, e), e;
}
function dE(e) {
  let t = qd(),
    n = Ja(t, xe + e);
  if (n === _h) throw new ne(314, !1);
  return n;
}
function Ow(e, t, n) {
  let r = Ce();
  if (r.firstCreatePass) {
    let i = it(e);
    Ba(n, r.data, r.blueprint, i, !0), Ba(t, r.data, r.blueprint, i, !1);
  }
}
function Ba(e, t, n, r, i) {
  if (((e = Re(e)), Array.isArray(e)))
    for (let a = 0; a < e.length; a++) Ba(e[a], t, n, r, i);
  else {
    let a = Ce(),
      c = ae(),
      f = ze(),
      h = kn(e) ? e : Re(e.provide),
      v = Cd(e),
      _ = f.providerIndexes & 1048575,
      R = f.directiveStart,
      O = f.providerIndexes >> 20;
    if (kn(e) || !e.multi) {
      let A = new un(v, i, Rr),
        H = Xs(h, t, i ? _ : _ + O, R);
      H === -1
        ? (la(ti(f, c), a, h),
          Ys(a, e, t.length),
          t.push(h),
          f.directiveStart++,
          f.directiveEnd++,
          i && (f.providerIndexes += 1048576),
          n.push(A),
          c.push(A))
        : ((n[H] = A), (c[H] = A));
    } else {
      let A = Xs(h, t, _ + O, R),
        H = Xs(h, t, _, _ + O),
        te = A >= 0 && n[A],
        Ie = H >= 0 && n[H];
      if ((i && !Ie) || (!i && !te)) {
        la(ti(f, c), a, h);
        let ye = Lw(i ? Fw : Pw, n.length, i, r, v);
        !i && Ie && (n[H].providerFactory = ye),
          Ys(a, e, t.length, 0),
          t.push(h),
          f.directiveStart++,
          f.directiveEnd++,
          i && (f.providerIndexes += 1048576),
          n.push(ye),
          c.push(ye);
      } else {
        let ye = Mh(n[i ? H : A], v, !i && r);
        Ys(a, e, A > -1 ? A : H, ye);
      }
      !i && r && Ie && n[H].componentProviders++;
    }
  }
}
function Ys(e, t, n, r) {
  let i = kn(t),
    a = Yg(t);
  if (i || a) {
    let h = (a ? Re(t.useClass) : t).prototype.ngOnDestroy;
    if (h) {
      let v = e.destroyHooks || (e.destroyHooks = []);
      if (!i && t.multi) {
        let _ = v.indexOf(n);
        _ === -1 ? v.push(n, [r, h]) : v[_ + 1].push(r, h);
      } else v.push(n, h);
    }
  }
}
function Mh(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function Xs(e, t, n, r) {
  for (let i = n; i < r; i++) if (t[i] === e) return i;
  return -1;
}
function Pw(e, t, n, r) {
  return Va(this.multi, []);
}
function Fw(e, t, n, r) {
  let i = this.multi,
    a;
  if (this.providerFactory) {
    let c = this.providerFactory.componentProviders,
      f = wr(n, n[Q], this.providerFactory.index, r);
    (a = f.slice(0, c)), Va(i, a);
    for (let h = c; h < f.length; h++) a.push(f[h]);
  } else (a = []), Va(i, a);
  return a;
}
function Va(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function Lw(e, t, n, r, i) {
  let a = new un(e, n, Rr);
  return (
    (a.multi = []),
    (a.index = t),
    (a.componentProviders = 0),
    Mh(a, i, r && !n),
    a
  );
}
function fE(e, t = []) {
  return (n) => {
    n.providersResolver = (r, i) => Ow(r, i ? i(e) : e, t);
  };
}
function jw(e, t) {
  let n = e[t];
  return n === Ft ? void 0 : n;
}
function Bw(e, t, n, r, i, a) {
  let c = t + n;
  return fn(e, c, i) ? UD(e, c + 1, a ? r.call(a, i) : r(i)) : jw(e, c + 1);
}
function hE(e, t) {
  let n = Ce(),
    r,
    i = e + xe;
  n.firstCreatePass
    ? ((r = Vw(t, n.pipeRegistry)),
      (n.data[i] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(i, r.onDestroy))
    : (r = n.data[i]);
  let a = r.factory || (r.factory = Jt(r.type, !0)),
    c,
    f = je(Rr);
  try {
    let h = ei(!1),
      v = a();
    return ei(h), Nu(n, ae(), i, v), v;
  } finally {
    je(f);
  }
}
function Vw(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function pE(e, t, n) {
  let r = e + xe,
    i = ae(),
    a = Ja(i, r);
  return Hw(i, r) ? Bw(i, wm(), t, a.transform, n, a) : a.transform(n);
}
function Hw(e, t) {
  return e[Q].data[t].pure;
}
var Ha = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  gE = (() => {
    class e {
      compileModuleSync(n) {
        return new Pa(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          i = vd(n),
          a = xf(i.declarations).reduce((c, f) => {
            let h = tn(f);
            return h && c.push(new On(h)), c;
          }, []);
        return new Ha(r, a);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
    }
    return e;
  })();
var $w = (() => {
  class e {
    zone = z(Oe);
    changeDetectionScheduler = z(Ot);
    applicationRef = z(_r);
    _onMicrotaskEmptySubscription;
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.changeDetectionScheduler.runningTick ||
                this.zone.run(() => {
                  this.applicationRef.tick();
                });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
  }
  return e;
})();
function Uw({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new Oe(Le(Fe({}, qw()), { scheduleInRootZone: n }))),
    [
      { provide: Oe, useFactory: e },
      {
        provide: qo,
        multi: !0,
        useFactory: () => {
          let r = z($w, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: qo,
        multi: !0,
        useFactory: () => {
          let r = z(zw);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: hf, useValue: !0 } : [],
      { provide: cu, useValue: n ?? ff },
    ]
  );
}
function qw(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var zw = (() => {
  class e {
    subscription = new mo();
    initialized = !1;
    zone = z(Oe);
    pendingTasks = z(wi);
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              Oe.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            Oe.assertInAngularZone(), (n ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
  }
  return e;
})();
var Sh = (() => {
  class e {
    appRef = z(_r);
    taskService = z(wi);
    ngZone = z(Oe);
    zonelessEnabled = z(uu);
    tracing = z(bi, { optional: !0 });
    disableScheduling = z(hf, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new mo();
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(ri) : null;
    scheduleInRootZone =
      !this.zonelessEnabled &&
      this.zoneIsDefined &&
      (z(cu, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() {
      this.subscriptions.add(
        this.appRef.afterTick.subscribe(() => {
          this.runningTick || this.cleanup();
        }),
      ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof oi || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      let r = !1;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 6: {
          (this.appRef.dirtyFlags |= 2), (r = !0);
          break;
        }
        case 12: {
          (this.appRef.dirtyFlags |= 16), (r = !0);
          break;
        }
        case 13: {
          (this.appRef.dirtyFlags |= 2), (r = !0);
          break;
        }
        case 11: {
          r = !0;
          break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (
        ((this.appRef.tracingSnapshot =
          this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null),
        !this.shouldScheduleTick(r))
      )
        return;
      let i = this.useMicrotaskScheduler ? Fl : pf;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              i(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              i(() => this.tick()),
            ));
    }
    shouldScheduleTick(n) {
      return !(
        (this.disableScheduling && !n) ||
        this.appRef.destroyed ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(ri + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
      }
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        Fl(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
  }
  return e;
})();
function mE() {
  return (
    Un('NgZoneless'),
    Dd([
      { provide: Ot, useExisting: Sh },
      { provide: Oe, useClass: oi },
      { provide: uu, useValue: !0 },
      { provide: cu, useValue: !1 },
      [],
    ])
  );
}
function Gw() {
  return (typeof $localize < 'u' && $localize.locale) || hi;
}
var xu = new se('', {
  providedIn: 'root',
  factory: () => z(xu, re.Optional | re.SkipSelf) || Gw(),
});
var $a = new se(''),
  Ww = new se('');
function fr(e) {
  return !e.moduleRef;
}
function Kw(e) {
  let t = fr(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(Oe);
  return n.run(() => {
    fr(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(cn, null),
      i;
    if (
      (n.runOutsideAngular(() => {
        i = n.onError.subscribe({
          next: (a) => {
            r.handleError(a);
          },
        });
      }),
      fr(e))
    ) {
      let a = () => t.destroy(),
        c = e.platformInjector.get($a);
      c.add(a),
        t.onDestroy(() => {
          i.unsubscribe(), c.delete(a);
        });
    } else {
      let a = () => e.moduleRef.destroy(),
        c = e.platformInjector.get($a);
      c.add(a),
        e.moduleRef.onDestroy(() => {
          jo(e.allPlatformModules, e.moduleRef), i.unsubscribe(), c.delete(a);
        });
    }
    return Qw(r, n, () => {
      let a = t.get(bh);
      return (
        a.runInitializers(),
        a.donePromise.then(() => {
          let c = t.get(xu, hi);
          if ((Cw(c || hi), !t.get(Ww, !0)))
            return fr(e)
              ? t.get(_r)
              : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
          if (fr(e)) {
            let h = t.get(_r);
            return (
              e.rootComponent !== void 0 && h.bootstrap(e.rootComponent), h
            );
          } else return Zw(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function Zw(e, t) {
  let n = e.injector.get(_r);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new ne(-403, !1);
  t.push(e);
}
function Qw(e, t, n) {
  try {
    let r = n();
    return Tu(r)
      ? r.catch((i) => {
          throw (t.runOutsideAngular(() => e.handleError(i)), i);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var Bo = null;
function Yw(e = [], t) {
  return Ke.create({
    name: t,
    providers: [
      { provide: Ed, useValue: 'platform' },
      { provide: $a, useValue: new Set([() => (Bo = null)]) },
      ...e,
    ],
  });
}
function Xw(e = []) {
  if (Bo) return Bo;
  let t = Yw(e);
  return (Bo = t), YD(), Jw(t), t;
}
function Jw(e) {
  let t = e.get(fy, null);
  _d(e, () => {
    t?.forEach((n) => n());
  });
}
function Th() {
  return !1;
}
var Nh = (() => {
  class e {
    static __NG_ELEMENT_ID__ = eb;
  }
  return e;
})();
function eb(e) {
  return tb(ze(), ae(), (e & 16) === 16);
}
function tb(e, t, n) {
  if (jn(e) && !n) {
    let r = at(e.index, t);
    return new Er(r, r);
  } else if (e.type & 175) {
    let r = t[ot];
    return new Er(r, t);
  }
  return null;
}
function yE(e) {
  de(8);
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      i = Xw(r),
      a = [Uw({}), { provide: Ot, useExisting: Sh }, ...(n || [])],
      c = new di({
        providers: a,
        parent: i,
        debugName: '',
        runEnvironmentInitializers: !1,
      });
    return Kw({
      r3Injector: c.injector,
      platformInjector: i,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  } finally {
    de(9);
  }
}
function nb(e) {
  return typeof e == 'boolean' ? e : e != null && e !== 'false';
}
function ki(e) {
  let t = ee(null);
  try {
    return e();
  } finally {
    ee(t);
  }
}
function xh(e, t) {
  let n = Fs(e);
  return t?.equal && (n[ke].equal = t.equal), n;
}
var Ua = class {
  [ke];
  constructor(t) {
    this[ke] = t;
  }
  destroy() {
    this[ke].destroy();
  }
};
function qn(e, t) {
  !t?.injector && Tr(qn);
  let n = t?.injector ?? z(Ke),
    r = t?.manualCleanup !== !0 ? n.get(vt) : null,
    i,
    a = n.get(hu, null, { optional: !0 }),
    c = n.get(Ot);
  return (
    a !== null && !t?.forceRoot
      ? ((i = ib(a.view, c, e)),
        r instanceof ni && r._lView === a.view && (r = null))
      : (i = sb(e, n.get(vh), c)),
    (i.injector = n),
    r !== null && (i.onDestroyFn = r.onDestroy(() => i.destroy())),
    new Ua(i)
  );
}
var Ah = Le(Fe({}, _n), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    hasRun: !1,
    cleanupFns: void 0,
    zone: null,
    kind: 'effect',
    onDestroyFn: br,
    run() {
      if (((this.dirty = !1), this.hasRun && !No(this))) return;
      this.hasRun = !0;
      let e = (r) => (this.cleanupFns ??= []).push(r),
        t = cr(this),
        n = Yo(!1);
      try {
        this.maybeCleanup(), this.fn(e);
      } finally {
        Yo(n), To(this, t);
      }
    },
    maybeCleanup() {
      if (this.cleanupFns?.length)
        try {
          for (; this.cleanupFns.length; ) this.cleanupFns.pop()();
        } finally {
          this.cleanupFns = [];
        }
    },
  }),
  rb = Le(Fe({}, Ah), {
    consumerMarkedDirty() {
      this.scheduler.schedule(this), this.notifier.notify(12);
    },
    destroy() {
      lr(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.scheduler.remove(this);
    },
  }),
  ob = Le(Fe({}, Ah), {
    consumerMarkedDirty() {
      (this.view[W] |= 8192), Bn(this.view), this.notifier.notify(13);
    },
    destroy() {
      lr(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.view[rn]?.delete(this);
    },
  });
function ib(e, t, n) {
  let r = Object.create(ob);
  return (
    (r.view = e),
    (r.zone = typeof Zone < 'u' ? Zone.current : null),
    (r.notifier = t),
    (r.fn = n),
    (e[rn] ??= new Set()),
    e[rn].add(r),
    r.consumerMarkedDirty(r),
    r
  );
}
function sb(e, t, n) {
  let r = Object.create(rb);
  return (
    (r.fn = e),
    (r.scheduler = t),
    (r.notifier = n),
    (r.zone = typeof Zone < 'u' ? Zone.current : null),
    r.scheduler.schedule(r),
    r.notifier.notify(12),
    r
  );
}
function vE(e) {
  let t = tn(e);
  if (!t) return null;
  let n = new On(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
function Au(e, t) {
  !t?.injector && Tr(Au);
  let n = t?.injector ?? z(Ke),
    r = new Pc(1),
    i = qn(
      () => {
        let a;
        try {
          a = e();
        } catch (c) {
          ki(() => r.error(c));
          return;
        }
        ki(() => r.next(a));
      },
      { injector: n, manualCleanup: !0 },
    );
  return (
    n.get(vt).onDestroy(() => {
      i.destroy(), r.complete();
    }),
    r.asObservable()
  );
}
function ku(e, t) {
  let n = !t?.manualCleanup;
  n && !t?.injector && Tr(ku);
  let r = n ? (t?.injector?.get(vt) ?? z(vt)) : null,
    i = ab(t?.equal),
    a;
  t?.requireSync
    ? (a = $n({ kind: 0 }, { equal: i }))
    : (a = $n({ kind: 1, value: t?.initialValue }, { equal: i }));
  let c = e.subscribe({
    next: (f) => a.set({ kind: 1, value: f }),
    error: (f) => {
      if (t?.rejectErrors) throw f;
      a.set({ kind: 2, error: f });
    },
  });
  if (t?.requireSync && a().kind === 0) throw new ne(601, !1);
  return (
    r?.onDestroy(c.unsubscribe.bind(c)),
    xh(
      () => {
        let f = a();
        switch (f.kind) {
          case 1:
            return f.value;
          case 2:
            throw f.error;
          case 0:
            throw new ne(601, !1);
        }
      },
      { equal: t?.equal },
    )
  );
}
function ab(e = Object.is) {
  return (t, n) => t.kind === 1 && n.kind === 1 && e(t.value, n.value);
}
var Fh = null;
function Ru() {
  return Fh;
}
function sC(e) {
  Fh ??= e;
}
var kh = class {};
var Pr = new se(''),
  Pu = (() => {
    class e {
      historyGo(n) {
        throw new Error('');
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = ue({
        token: e,
        factory: () => z(ub),
        providedIn: 'platform',
      });
    }
    return e;
  })(),
  aC = new se(''),
  ub = (() => {
    class e extends Pu {
      _location;
      _history;
      _doc = z(Pr);
      constructor() {
        super(),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return Ru().getBaseHref(this._doc);
      }
      onPopState(n) {
        let r = Ru().getGlobalEventTarget(this._doc, 'window');
        return (
          r.addEventListener('popstate', n, !1),
          () => r.removeEventListener('popstate', n)
        );
      }
      onHashChange(n) {
        let r = Ru().getGlobalEventTarget(this._doc, 'window');
        return (
          r.addEventListener('hashchange', n, !1),
          () => r.removeEventListener('hashchange', n)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(n) {
        this._location.pathname = n;
      }
      pushState(n, r, i) {
        this._history.pushState(n, r, i);
      }
      replaceState(n, r, i) {
        this._history.replaceState(n, r, i);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(n = 0) {
        this._history.go(n);
      }
      getState() {
        return this._history.state;
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = ue({
        token: e,
        factory: () => new e(),
        providedIn: 'platform',
      });
    }
    return e;
  })();
function Fu(e, t) {
  return e
    ? t
      ? e.endsWith('/')
        ? t.startsWith('/')
          ? e + t.slice(1)
          : e + t
        : t.startsWith('/')
          ? e + t
          : `${e}/${t}`
      : e
    : t;
}
function Rh(e) {
  let t = e.search(/#|\?|$/);
  return e[t - 1] === '/' ? e.slice(0, t - 1) + e.slice(t) : e;
}
function Dt(e) {
  return e && e[0] !== '?' ? `?${e}` : e;
}
var Oi = (() => {
    class e {
      historyGo(n) {
        throw new Error('');
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = ue({ token: e, factory: () => z(cb), providedIn: 'root' });
    }
    return e;
  })(),
  Lh = new se(''),
  cb = (() => {
    class e extends Oi {
      _platformLocation;
      _baseHref;
      _removeListenerFns = [];
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            z(Pr).location?.origin ??
            '');
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Fu(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + Dt(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && n ? `${r}${i}` : r;
      }
      pushState(n, r, i, a) {
        let c = this.prepareExternalUrl(i + Dt(a));
        this._platformLocation.pushState(n, r, c);
      }
      replaceState(n, r, i, a) {
        let c = this.prepareExternalUrl(i + Dt(a));
        this._platformLocation.replaceState(n, r, c);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(Te(Pu), Te(Lh, 8));
      };
      static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
    }
    return e;
  })(),
  uC = (() => {
    class e extends Oi {
      _platformLocation;
      _baseHref = '';
      _removeListenerFns = [];
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          r != null && (this._baseHref = r);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(n = !1) {
        let r = this._platformLocation.hash ?? '#';
        return r.length > 0 ? r.substring(1) : r;
      }
      prepareExternalUrl(n) {
        let r = Fu(this._baseHref, n);
        return r.length > 0 ? '#' + r : r;
      }
      pushState(n, r, i, a) {
        let c =
          this.prepareExternalUrl(i + Dt(a)) || this._platformLocation.pathname;
        this._platformLocation.pushState(n, r, c);
      }
      replaceState(n, r, i, a) {
        let c =
          this.prepareExternalUrl(i + Dt(a)) || this._platformLocation.pathname;
        this._platformLocation.replaceState(n, r, c);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(Te(Pu), Te(Lh, 8));
      };
      static ɵprov = ue({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  lb = (() => {
    class e {
      _subject = new Qe();
      _basePath;
      _locationStrategy;
      _urlChangeListeners = [];
      _urlChangeSubscription = null;
      constructor(n) {
        this._locationStrategy = n;
        let r = this._locationStrategy.getBaseHref();
        (this._basePath = hb(Rh(Oh(r)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.next({
              url: this.path(!0),
              pop: !0,
              state: i.state,
              type: i.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(n = !1) {
        return this.normalize(this._locationStrategy.path(n));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(n, r = '') {
        return this.path() == this.normalize(n + Dt(r));
      }
      normalize(n) {
        return e.stripTrailingSlash(fb(this._basePath, Oh(n)));
      }
      prepareExternalUrl(n) {
        return (
          n && n[0] !== '/' && (n = '/' + n),
          this._locationStrategy.prepareExternalUrl(n)
        );
      }
      go(n, r = '', i = null) {
        this._locationStrategy.pushState(i, '', n, r),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Dt(r)), i);
      }
      replaceState(n, r = '', i = null) {
        this._locationStrategy.replaceState(i, '', n, r),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Dt(r)), i);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(n = 0) {
        this._locationStrategy.historyGo?.(n);
      }
      onUrlChange(n) {
        return (
          this._urlChangeListeners.push(n),
          (this._urlChangeSubscription ??= this.subscribe((r) => {
            this._notifyUrlChangeListeners(r.url, r.state);
          })),
          () => {
            let r = this._urlChangeListeners.indexOf(n);
            this._urlChangeListeners.splice(r, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(n = '', r) {
        this._urlChangeListeners.forEach((i) => i(n, r));
      }
      subscribe(n, r, i) {
        return this._subject.subscribe({
          next: n,
          error: r ?? void 0,
          complete: i ?? void 0,
        });
      }
      static normalizeQueryParams = Dt;
      static joinWithSlash = Fu;
      static stripTrailingSlash = Rh;
      static ɵfac = function (r) {
        return new (r || e)(Te(Oi));
      };
      static ɵprov = ue({ token: e, factory: () => db(), providedIn: 'root' });
    }
    return e;
  })();
function db() {
  return new lb(Te(Oi));
}
function fb(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === '' || ['/', ';', '?', '#'].includes(n[0]) ? n : t;
}
function Oh(e) {
  return e.replace(/\/index.html$/, '');
}
function hb(e) {
  if (new RegExp('^(https?:)?//').test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function cC(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(';')) {
    let r = n.indexOf('='),
      [i, a] = r == -1 ? [n, ''] : [n.slice(0, r), n.slice(r + 1)];
    if (i.trim() === t) return decodeURIComponent(a);
  }
  return null;
}
var pb = 'browser',
  gb = 'server';
function jh(e) {
  return e === pb;
}
function Bh(e) {
  return e === gb;
}
var lC = (() => {
    class e {
      static ɵprov = ue({
        token: e,
        providedIn: 'root',
        factory: () => new Ou(z(Pr), window),
      });
    }
    return e;
  })(),
  Ou = class {
    document;
    window;
    offset = () => [0, 0];
    constructor(t, n) {
      (this.document = t), (this.window = n);
    }
    setOffset(t) {
      Array.isArray(t) ? (this.offset = () => t) : (this.offset = t);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(t) {
      this.window.scrollTo(t[0], t[1]);
    }
    scrollToAnchor(t) {
      let n = mb(this.document, t);
      n && (this.scrollToElement(n), n.focus());
    }
    setHistoryScrollRestoration(t) {
      this.window.history.scrollRestoration = t;
    }
    scrollToElement(t) {
      let n = t.getBoundingClientRect(),
        r = n.left + this.window.pageXOffset,
        i = n.top + this.window.pageYOffset,
        a = this.offset();
      this.window.scrollTo(r - a[0], i - a[1]);
    }
  };
function mb(e, t) {
  let n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n) return n;
  if (
    typeof e.createTreeWalker == 'function' &&
    e.body &&
    typeof e.body.attachShadow == 'function'
  ) {
    let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT),
      i = r.currentNode;
    for (; i; ) {
      let a = i.shadowRoot;
      if (a) {
        let c = a.getElementById(t) || a.querySelector(`[name="${t}"]`);
        if (c) return c;
      }
      i = r.nextNode();
    }
  }
  return null;
}
var Ph = class {};
var Vh = new se('__SvgOptionsToken__', {
    providedIn: 'root',
    factory: () => ({
      url: () => '',
      defaultSize: void 0,
      suspenseSvgString: void 0,
    }),
  }),
  Hh = (() => {
    class e {
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = ue({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })();
function $h(e, t) {
  return t['__zone_symbol__' + e] !== void 0 ? t['__zone_symbol__' + e] : t[e];
}
var yb = (() => {
    class e {
      constructor() {
        this.fetch = $h('fetch', window);
      }
      load(n) {
        return n.pipe(
          Ss((r) => Lc(fetch(r).then((i) => (i.ok ? i.text() : '')))),
        );
      }
      config(n) {
        return jc(n);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = ue({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  vb = `<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <circle cx="15.5" cy="9.5" r="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"
      />
    </svg>`;
function Db(e) {
  let t = e.createElement('DIV');
  return (n) => (t && (t.innerHTML = n), t.firstChild);
}
function wb(e) {
  return (
    e.setAttribute(
      'style',
      `
      overflow: hidden;
      width: 0px;
      height: 0px;
      position: fixed;
      bottom: -2000px;
      contain: content;
      content-visibility: auto;
    `,
    ),
    e
  );
}
var bb = (() => {
    class e {
      constructor() {
        (this.document = z(Pr)),
          (this.svgOptions = z(Vh)),
          (this.svgLoadStrategy = z(Hh, { optional: !0 }) || new yb()),
          (this.domParser = Db(this.document)),
          (this.svgDomCache = (() => {
            let r =
              this.document.getElementById('svg-cache') ||
              this.domParser('<div id="svg-cache"></div>');
            return wb(r), this.document.body.appendChild(r), r;
          })()),
          (this._svgHrefCache = new Map()),
          (this._cachedSvgs = new Set()),
          (this.defaultSize = this.svgOptions?.defaultSize || '24'),
          (this._defaultViewBox = `0 0 ${this.defaultSize} ${this.defaultSize}`),
          (this.url = (r) =>
            this.svgLoadStrategy.config(this.svgOptions.url(r))),
          (this.fetchSvg = (r) => {
            let i = this.svgId(r);
            this._cachedSvgs.has(i) ||
              (this._cachedSvgs.add(i),
              this.svgLoadStrategy
                .load(this.url(r))
                .subscribe({
                  next: (a) => this.cacheSvgInDOM(i, a),
                  error: console.error,
                }));
          });
        let n = this.svgId('suspense');
        this._cachedSvgs.has(n) ||
          this.cacheSvgInDOM(n, this.svgOptions.suspenseSvgString || vb),
          this.hydrateFromDom();
      }
      hydrateFromDom() {
        Array.from(this.svgDomCache.children).forEach((n) => {
          this._cachedSvgs.add(n.id),
            this.getSvgSubject(n.id).next({
              name: n.id,
              viewBox: n.getAttribute('viewBox') || this._defaultViewBox,
            });
        });
      }
      isSvgCached(n) {
        return this._cachedSvgs.has(this.svgId(n));
      }
      svgCache$(n) {
        return this.getSvgSubject(this.svgId(n)).pipe(
          vo((r) => ({ name: `#${r.name}`, viewBox: r.viewBox })),
        );
      }
      cacheSvgInDOM(n, r) {
        let i = this.domParser(r),
          a = r.match(/viewBox="([^"]*)"/);
        i?.setAttribute && i.setAttribute('id', n),
          this.svgDomCache.appendChild(i),
          this.getSvgSubject(n).next({
            name: n,
            viewBox: a?.[1] || this._defaultViewBox,
          });
      }
      getSvgSubject(n) {
        return (
          this._svgHrefCache.has(n) ||
            this._svgHrefCache.set(
              n,
              new yo({
                name: this.svgId('suspense'),
                viewBox: this._defaultViewBox,
              }),
            ),
          this._svgHrefCache.get(n)
        );
      }
      svgId(n) {
        return `${n}`;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
      }
    }
    return e;
  })(),
  Ib = (e, t, n) => $h('addEventListener', e).bind(e)(t, n),
  Lt;
function Eb(e) {
  return (
    Lt === void 0 &&
      ((Lt = e.createElement('img')),
      Lt.setAttribute(
        'style',
        'display: none; contain: content; content-visibility: auto;',
      ),
      Lt.setAttribute('loading', 'lazy'),
      Lt.setAttribute('alt', 'loading helper'),
      Lt.setAttribute('width', '0'),
      Lt.setAttribute('height', '0')),
    (t) => {
      let n = Lt.cloneNode(!0);
      return n.setAttribute('src', t), n;
    }
  );
}
var bC = (() => {
    class e {
      constructor() {
        (this.injector = z(Ke)),
          (this.platform = z(kr)),
          (this.renderer = z(Mi)),
          (this.registry = z(bb)),
          (this.element = z(Pt)),
          (this.getImg = Eb(this.renderer)),
          (this.name = ce('')),
          (this.size = ce(this.registry.defaultSize)),
          (this.width = ce('')),
          (this.height = ce('')),
          (this.#e = ku(Au(this.name).pipe(Ss((n) => this.registry.url(n))))),
          (this.loadedListener = () => {
            this.registry.fetchSvg(this.name());
          });
      }
      #e;
      ngAfterViewInit() {
        let n = this.element.nativeElement,
          r = n.querySelector('svg');
        qn(
          () => {
            this.size() &&
              r &&
              (r.setAttribute('width', this.width() || this.size()),
              r.setAttribute(
                'height',
                this.height() || this.width() || this.size(),
              ));
          },
          { injector: this.injector },
        ),
          qn(
            (i) => {
              let a = this.name();
              if (!a) throw new Error('svg component needs a name to operate');
              let c = null;
              if (!this.registry.isSvgCached(a)) {
                let h = this.#e();
                if (h) {
                  let v = this.getImg(h);
                  this.renderer.appendChild(this.element.nativeElement, v),
                    (c = n.querySelector('img')),
                    Ib(c, 'load', this.loadedListener);
                }
              }
              let f = this.registry.svgCache$(a).subscribe((h) => {
                r.children[0].setAttribute('href', h.name),
                  r.setAttribute('viewBox', h.viewBox),
                  c &&
                    h.name.includes(a) &&
                    (c.removeEventListener('load', this.loadedListener),
                    c.remove());
              });
              Bh(this.platform)
                ? this.registry.fetchSvg(a)
                : c && c.style.setProperty('display', 'block'),
                i(() => {
                  f.unsubscribe(),
                    c && c.removeEventListener('load', this.loadedListener);
                });
            },
            { injector: this.injector },
          );
      }
      ngOnDestroy() {
        this.element.nativeElement
          .querySelector('img')
          ?.removeEventListener('load', this.loadedListener);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵcmp = Ti({
          type: e,
          selectors: [['fast-svg']],
          inputs: {
            name: [1, 'name'],
            size: [1, 'size'],
            width: [1, 'width'],
            height: [1, 'height'],
          },
          decls: 2,
          vars: 0,
          consts: [[1, 'fast-svg']],
          template: function (r, i) {
            r & 1 && (Yd(), xi(0, 'svg', 0), Or(1, 'use'), Ai());
          },
          styles: [
            '[_nghost-%COMP%]{display:contents}.fast-svg[_ngcontent-%COMP%]{margin:3px;contain:content;content-visibility:auto}',
          ],
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  IC = (e) => {
    let t = [
      {
        provide: Vh,
        useValue: {
          url: e.url,
          suspenseSvgString: e.suspenseSvgString || void 0,
          defaultSize: e.defaultSize || void 0,
        },
      },
    ];
    return (
      e.svgLoadStrategy && t.push({ provide: Hh, useClass: e.svgLoadStrategy }),
      t
    );
  };
var Cb = {
    RxSchema: Zc.prototype,
    RxDocument: ol,
    RxQuery: el.prototype,
    RxCollection: il.prototype,
    RxDatabase: sl.prototype,
  },
  Lu = new Set(),
  Uh = new Set();
function qh(e) {
  if ((Wc('preAddRxPlugin', { plugin: e, plugins: Lu }), !Lu.has(e))) {
    {
      if (Uh.has(e.name)) throw Io('PL3', { name: e.name, plugin: e });
      Lu.add(e), Uh.add(e.name);
    }
    if (!e.rxdb) throw Gc('PL1', { plugin: e });
    e.init && e.init(),
      e.prototypes &&
        Object.entries(e.prototypes).forEach(([t, n]) => n(Cb[t])),
      e.overwritable && Object.assign(zc, e.overwritable),
      e.hooks &&
        Object.entries(e.hooks).forEach(([t, n]) => {
          n.after && ks[t].push(n.after), n.before && ks[t].unshift(n.before);
        });
  }
}
function zh(e) {
  return e && typeof e.then == 'function';
}
var _b = Promise.resolve(!1),
  RC = Promise.resolve(!0),
  ct = Promise.resolve();
function Pi(e, t) {
  return (
    e || (e = 0),
    new Promise(function (n) {
      return setTimeout(function () {
        return n(t);
      }, e);
    })
  );
}
function Gh(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function Fr() {
  return Math.random().toString(36).substring(2);
}
var ju = 0;
function wt() {
  var e = Date.now() * 1e3;
  return e <= ju && (e = ju + 1), (ju = e), e;
}
var Mb = wt,
  Sb = 'native';
function Tb(e) {
  var t = {
    time: wt(),
    messagesCallback: null,
    bc: new BroadcastChannel(e),
    subFns: [],
  };
  return (
    (t.bc.onmessage = function (n) {
      t.messagesCallback && t.messagesCallback(n.data);
    }),
    t
  );
}
function Nb(e) {
  e.bc.close(), (e.subFns = []);
}
function xb(e, t) {
  try {
    return e.bc.postMessage(t, !1), ct;
  } catch (n) {
    return Promise.reject(n);
  }
}
function Ab(e, t) {
  e.messagesCallback = t;
}
function kb() {
  if (typeof globalThis < 'u' && globalThis.Deno && globalThis.Deno.args)
    return !0;
  if (
    (typeof window < 'u' || typeof self < 'u') &&
    typeof BroadcastChannel == 'function'
  ) {
    if (BroadcastChannel._pubkey)
      throw new Error(
        'BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill',
      );
    return !0;
  } else return !1;
}
function Rb() {
  return 150;
}
var Wh = {
  create: Tb,
  close: Nb,
  onMessage: Ab,
  postMessage: xb,
  canBeUsed: kb,
  type: Sb,
  averageResponseTime: Rb,
  microSeconds: Mb,
};
function zn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = JSON.parse(JSON.stringify(e));
  return (
    typeof t.webWorkerSupport > 'u' && (t.webWorkerSupport = !0),
    t.idb || (t.idb = {}),
    t.idb.ttl || (t.idb.ttl = 1e3 * 45),
    t.idb.fallbackInterval || (t.idb.fallbackInterval = 150),
    e.idb &&
      typeof e.idb.onclose == 'function' &&
      (t.idb.onclose = e.idb.onclose),
    t.localstorage || (t.localstorage = {}),
    t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 1e3 * 60),
    e.methods && (t.methods = e.methods),
    t.node || (t.node = {}),
    t.node.ttl || (t.node.ttl = 1e3 * 60 * 2),
    t.node.maxParallelWrites || (t.node.maxParallelWrites = 2048),
    typeof t.node.useFastPath > 'u' && (t.node.useFastPath = !0),
    t
  );
}
var Ob = wt,
  Pb = 'pubkey.broadcast-channel-0-',
  bt = 'messages',
  Fi = { durability: 'relaxed' },
  Fb = 'idb';
function Kh() {
  if (typeof indexedDB < 'u') return indexedDB;
  if (typeof window < 'u') {
    if (typeof window.mozIndexedDB < 'u') return window.mozIndexedDB;
    if (typeof window.webkitIndexedDB < 'u') return window.webkitIndexedDB;
    if (typeof window.msIndexedDB < 'u') return window.msIndexedDB;
  }
  return !1;
}
function Bu(e) {
  e.commit && e.commit();
}
function Lb(e) {
  var t = Kh(),
    n = Pb + e,
    r = t.open(n);
  return (
    (r.onupgradeneeded = function (i) {
      var a = i.target.result;
      a.createObjectStore(bt, { keyPath: 'id', autoIncrement: !0 });
    }),
    new Promise(function (i, a) {
      (r.onerror = function (c) {
        return a(c);
      }),
        (r.onsuccess = function () {
          i(r.result);
        });
    })
  );
}
function jb(e, t, n) {
  var r = Date.now(),
    i = { uuid: t, time: r, data: n },
    a = e.transaction([bt], 'readwrite', Fi);
  return new Promise(function (c, f) {
    (a.oncomplete = function () {
      return c();
    }),
      (a.onerror = function (v) {
        return f(v);
      });
    var h = a.objectStore(bt);
    h.add(i), Bu(a);
  });
}
function Bb(e, t) {
  var n = e.transaction(bt, 'readonly', Fi),
    r = n.objectStore(bt),
    i = [],
    a = IDBKeyRange.bound(t + 1, 1 / 0);
  if (r.getAll) {
    var c = r.getAll(a);
    return new Promise(function (h, v) {
      (c.onerror = function (_) {
        return v(_);
      }),
        (c.onsuccess = function (_) {
          h(_.target.result);
        });
    });
  }
  function f() {
    try {
      return (a = IDBKeyRange.bound(t + 1, 1 / 0)), r.openCursor(a);
    } catch {
      return r.openCursor();
    }
  }
  return new Promise(function (h, v) {
    var _ = f();
    (_.onerror = function (R) {
      return v(R);
    }),
      (_.onsuccess = function (R) {
        var O = R.target.result;
        O
          ? O.value.id < t + 1
            ? O.continue(t + 1)
            : (i.push(O.value), O.continue())
          : (Bu(n), h(i));
      });
  });
}
function Vb(e, t) {
  if (e.closed) return Promise.resolve([]);
  var n = e.db.transaction(bt, 'readwrite', Fi),
    r = n.objectStore(bt);
  return Promise.all(
    t.map(function (i) {
      var a = r.delete(i);
      return new Promise(function (c) {
        a.onsuccess = function () {
          return c();
        };
      });
    }),
  );
}
function Hb(e, t) {
  var n = Date.now() - t,
    r = e.transaction(bt, 'readonly', Fi),
    i = r.objectStore(bt),
    a = [];
  return new Promise(function (c) {
    i.openCursor().onsuccess = function (f) {
      var h = f.target.result;
      if (h) {
        var v = h.value;
        v.time < n ? (a.push(v), h.continue()) : (Bu(r), c(a));
      } else c(a);
    };
  });
}
function $b(e) {
  return Hb(e.db, e.options.idb.ttl).then(function (t) {
    return Vb(
      e,
      t.map(function (n) {
        return n.id;
      }),
    );
  });
}
function Ub(e, t) {
  return (
    (t = zn(t)),
    Lb(e).then(function (n) {
      var r = {
        closed: !1,
        lastCursorId: 0,
        channelName: e,
        options: t,
        uuid: Fr(),
        eMIs: new Co(t.idb.ttl * 2),
        writeBlockPromise: ct,
        messagesCallback: null,
        readQueuePromises: [],
        db: n,
      };
      return (
        (n.onclose = function () {
          (r.closed = !0), t.idb.onclose && t.idb.onclose();
        }),
        Zh(r),
        r
      );
    })
  );
}
function Zh(e) {
  e.closed ||
    Qh(e)
      .then(function () {
        return Pi(e.options.idb.fallbackInterval);
      })
      .then(function () {
        return Zh(e);
      });
}
function qb(e, t) {
  return !(
    e.uuid === t.uuid ||
    t.eMIs.has(e.id) ||
    e.data.time < t.messagesCallbackTime
  );
}
function Qh(e) {
  return e.closed
    ? ct
    : e.messagesCallback
      ? Bb(e.db, e.lastCursorId).then(function (t) {
          var n = t
            .filter(function (r) {
              return !!r;
            })
            .map(function (r) {
              return r.id > e.lastCursorId && (e.lastCursorId = r.id), r;
            })
            .filter(function (r) {
              return qb(r, e);
            })
            .sort(function (r, i) {
              return r.time - i.time;
            });
          return (
            n.forEach(function (r) {
              e.messagesCallback &&
                (e.eMIs.add(r.id), e.messagesCallback(r.data));
            }),
            ct
          );
        })
      : ct;
}
function zb(e) {
  (e.closed = !0), e.db.close();
}
function Gb(e, t) {
  return (
    (e.writeBlockPromise = e.writeBlockPromise
      .then(function () {
        return jb(e.db, e.uuid, t);
      })
      .then(function () {
        Gh(0, 10) === 0 && $b(e);
      })),
    e.writeBlockPromise
  );
}
function Wb(e, t, n) {
  (e.messagesCallbackTime = n), (e.messagesCallback = t), Qh(e);
}
function Kb() {
  return !!Kh();
}
function Zb(e) {
  return e.idb.fallbackInterval * 2;
}
var Yh = {
  create: Ub,
  close: zb,
  onMessage: Wb,
  postMessage: Gb,
  canBeUsed: Kb,
  type: Fb,
  averageResponseTime: Zb,
  microSeconds: Ob,
};
var Qb = wt,
  Yb = 'pubkey.broadcastChannel-',
  Xb = 'localstorage';
function Xh() {
  var e;
  if (typeof window > 'u') return null;
  try {
    (e = window.localStorage),
      (e = window['ie8-eventlistener/storage'] || window.localStorage);
  } catch {}
  return e;
}
function Jh(e) {
  return Yb + e;
}
function Jb(e, t) {
  return new Promise(function (n) {
    Pi().then(function () {
      var r = Jh(e.channelName),
        i = { token: Fr(), time: Date.now(), data: t, uuid: e.uuid },
        a = JSON.stringify(i);
      Xh().setItem(r, a);
      var c = document.createEvent('Event');
      c.initEvent('storage', !0, !0),
        (c.key = r),
        (c.newValue = a),
        window.dispatchEvent(c),
        n();
    });
  });
}
function eI(e, t) {
  var n = Jh(e),
    r = function (a) {
      a.key === n && t(JSON.parse(a.newValue));
    };
  return window.addEventListener('storage', r), r;
}
function tI(e) {
  window.removeEventListener('storage', e);
}
function nI(e, t) {
  if (((t = zn(t)), !ep()))
    throw new Error('BroadcastChannel: localstorage cannot be used');
  var n = Fr(),
    r = new Co(t.localstorage.removeTimeout),
    i = { channelName: e, uuid: n, eMIs: r };
  return (
    (i.listener = eI(e, function (a) {
      i.messagesCallback &&
        a.uuid !== n &&
        (!a.token ||
          r.has(a.token) ||
          (a.data.time && a.data.time < i.messagesCallbackTime) ||
          (r.add(a.token), i.messagesCallback(a.data)));
    })),
    i
  );
}
function rI(e) {
  tI(e.listener);
}
function oI(e, t, n) {
  (e.messagesCallbackTime = n), (e.messagesCallback = t);
}
function ep() {
  var e = Xh();
  if (!e) return !1;
  try {
    var t = '__broadcastchannel_check';
    e.setItem(t, 'works'), e.removeItem(t);
  } catch {
    return !1;
  }
  return !0;
}
function iI() {
  var e = 120,
    t = navigator.userAgent.toLowerCase();
  return t.includes('safari') && !t.includes('chrome') ? e * 2 : e;
}
var tp = {
  create: nI,
  close: rI,
  onMessage: oI,
  postMessage: Jb,
  canBeUsed: ep,
  type: Xb,
  averageResponseTime: iI,
  microSeconds: Qb,
};
var np = wt,
  sI = 'simulate',
  Vu = new Set();
function aI(e) {
  var t = { time: np(), name: e, messagesCallback: null };
  return Vu.add(t), t;
}
function uI(e) {
  Vu.delete(e);
}
var rp = 5;
function cI(e, t) {
  return new Promise(function (n) {
    return setTimeout(function () {
      var r = Array.from(Vu);
      r.forEach(function (i) {
        i.name === e.name &&
          i !== e &&
          i.messagesCallback &&
          i.time < t.time &&
          i.messagesCallback(t);
      }),
        n();
    }, rp);
  });
}
function lI(e, t) {
  e.messagesCallback = t;
}
function dI() {
  return !0;
}
function fI() {
  return rp;
}
var op = {
  create: aI,
  close: uI,
  onMessage: lI,
  postMessage: cI,
  canBeUsed: dI,
  type: sI,
  averageResponseTime: fI,
  microSeconds: np,
};
var ip = [Wh, Yh, tp];
function sp(e) {
  var t = [].concat(e.methods, ip).filter(Boolean);
  if (e.type) {
    if (e.type === 'simulate') return op;
    var n = t.find(function (i) {
      return i.type === e.type;
    });
    if (n) return n;
    throw new Error('method-type ' + e.type + ' not found');
  }
  e.webWorkerSupport ||
    (t = t.filter(function (i) {
      return i.type !== 'idb';
    }));
  var r = t.find(function (i) {
    return i.canBeUsed();
  });
  if (r) return r;
  throw new Error(
    'No usable method found in ' +
      JSON.stringify(
        ip.map(function (i) {
          return i.type;
        }),
      ),
  );
}
var Hu = new Set(),
  hI = 0,
  Lr = function (t, n) {
    (this.id = hI++),
      Hu.add(this),
      (this.name = t),
      ap && (n = ap),
      (this.options = zn(n)),
      (this.method = sp(this.options)),
      (this._iL = !1),
      (this._onML = null),
      (this._addEL = { message: [], internal: [] }),
      (this._uMP = new Set()),
      (this._befC = []),
      (this._prepP = null),
      pI(this);
  };
Lr._pubkey = !0;
var ap;
Lr.prototype = {
  postMessage: function (t) {
    if (this.closed)
      throw new Error(
        'BroadcastChannel.postMessage(): Cannot post message after channel has closed ' +
          JSON.stringify(t),
      );
    return up(this, 'message', t);
  },
  postInternal: function (t) {
    return up(this, 'internal', t);
  },
  set onmessage(e) {
    var t = this.method.microSeconds(),
      n = { time: t, fn: e };
    lp(this, 'message', this._onML),
      e && typeof e == 'function'
        ? ((this._onML = n), cp(this, 'message', n))
        : (this._onML = null);
  },
  addEventListener: function (t, n) {
    var r = this.method.microSeconds(),
      i = { time: r, fn: n };
    cp(this, t, i);
  },
  removeEventListener: function (t, n) {
    var r = this._addEL[t].find(function (i) {
      return i.fn === n;
    });
    lp(this, t, r);
  },
  close: function () {
    var t = this;
    if (!this.closed) {
      Hu.delete(this), (this.closed = !0);
      var n = this._prepP ? this._prepP : ct;
      return (
        (this._onML = null),
        (this._addEL.message = []),
        n
          .then(function () {
            return Promise.all(Array.from(t._uMP));
          })
          .then(function () {
            return Promise.all(
              t._befC.map(function (r) {
                return r();
              }),
            );
          })
          .then(function () {
            return t.method.close(t._state);
          })
      );
    }
  },
  get type() {
    return this.method.type;
  },
  get isClosed() {
    return this.closed;
  },
};
function up(e, t, n) {
  var r = e.method.microSeconds(),
    i = { time: r, type: t, data: n },
    a = e._prepP ? e._prepP : ct;
  return a.then(function () {
    var c = e.method.postMessage(e._state, i);
    return (
      e._uMP.add(c),
      c.catch().then(function () {
        return e._uMP.delete(c);
      }),
      c
    );
  });
}
function pI(e) {
  var t = e.method.create(e.name, e.options);
  zh(t)
    ? ((e._prepP = t),
      t.then(function (n) {
        e._state = n;
      }))
    : (e._state = t);
}
function dp(e) {
  return e._addEL.message.length > 0 || e._addEL.internal.length > 0;
}
function cp(e, t, n) {
  e._addEL[t].push(n), gI(e);
}
function lp(e, t, n) {
  (e._addEL[t] = e._addEL[t].filter(function (r) {
    return r !== n;
  })),
    mI(e);
}
function gI(e) {
  if (!e._iL && dp(e)) {
    var t = function (i) {
        e._addEL[i.type].forEach(function (a) {
          i.time >= a.time && a.fn(i.data);
        });
      },
      n = e.method.microSeconds();
    e._prepP
      ? e._prepP.then(function () {
          (e._iL = !0), e.method.onMessage(e._state, t, n);
        })
      : ((e._iL = !0), e.method.onMessage(e._state, t, n));
  }
}
function mI(e) {
  if (e._iL && !dp(e)) {
    e._iL = !1;
    var t = e.method.microSeconds();
    e.method.onMessage(e._state, null, t);
  }
}
var Li = new Map();
function yI(e, t, n, r) {
  var i = Li.get(t);
  return (
    i ||
      ((i = { bc: new Lr(['RxDB:', e, n].join('|')), refs: new Set() }),
      Li.set(t, i)),
    i.refs.add(r),
    i.bc
  );
}
function fp(e, t) {
  var n = Li.get(e);
  if (n && (n.refs.delete(t), n.refs.size === 0))
    return Li.delete(e), n.bc.close();
}
function hp(e, t, n, r) {
  if (t.multiInstance) {
    var i = r || yI(e, t.databaseInstanceToken, n.databaseName, n),
      a = new Qe(),
      c = (O) => {
        O.storageName === e &&
          O.databaseName === t.databaseName &&
          O.collectionName === t.collectionName &&
          O.version === t.schema.version &&
          a.next(O.eventBulk);
      };
    i.addEventListener('message', c);
    var f = n.changeStream(),
      h = !1,
      v = f.subscribe((O) => {
        h ||
          i.postMessage({
            storageName: e,
            databaseName: t.databaseName,
            collectionName: t.collectionName,
            version: t.schema.version,
            eventBulk: O,
          });
      });
    n.changeStream = function () {
      return a.asObservable().pipe(Bc(f));
    };
    var _ = n.close.bind(n);
    n.close = async function () {
      return (
        (h = !0),
        v.unsubscribe(),
        i.removeEventListener('message', c),
        r || (await fp(t.databaseInstanceToken, n)),
        _()
      );
    };
    var R = n.remove.bind(n);
    n.remove = async function () {
      return (
        (h = !0),
        v.unsubscribe(),
        i.removeEventListener('message', c),
        r || (await fp(t.databaseInstanceToken, n)),
        R()
      );
    };
  }
}
var ji = hg(pp(), 1),
  gp = Symbol.for('Dexie'),
  jr = globalThis[gp] || (globalThis[gp] = ji.default);
if (ji.default.semVer !== jr.semVer)
  throw new Error(
    `Two different versions of Dexie loaded in the same app: ${ji.default.semVer} and ${jr.semVer}`,
  );
var {
  liveQuery: d_,
  mergeRanges: f_,
  rangesOverlap: h_,
  RangeSet: p_,
  cmp: g_,
  Entity: m_,
  PropModSymbol: y_,
  PropModification: v_,
  replacePrefix: D_,
  add: w_,
  remove: b_,
} = jr;
var Br = 'docs',
  vI = 'changes',
  mp = 'attachments',
  Vi = 'dexie',
  yp = new Map(),
  Bi = new Map();
function vp(e, t, n, r) {
  var i = 'rxdb-dexie-' + e + '--' + r.version + '--' + t,
    a = $c(yp, i, () => {
      var c = (async () => {
        var f = Do(n);
        f.autoOpen = !1;
        var h = new jr(i, f),
          v = { [Br]: DI(r), [vI]: '++sequence, id', [mp]: 'id' };
        return (
          h.version(1).stores(v),
          await h.open(),
          {
            dexieDb: h,
            dexieTable: h[Br],
            dexieAttachmentsTable: h[mp],
            booleanIndexes: wI(r),
          }
        );
      })();
      return yp.set(i, a), Bi.set(a, 0), c;
    });
  return a;
}
async function Dp(e) {
  var t = await e,
    n = Bi.get(e),
    r = n - 1;
  r === 0 ? (t.dexieDb.close(), Bi.delete(e)) : Bi.set(e, r);
}
var qu = '__';
function hn(e) {
  var t = e.split('.');
  if (t.length > 1) return t.map((r) => hn(r)).join('.');
  if (e.startsWith('|')) {
    var n = e.substring(1);
    return qu + n;
  } else return e;
}
function wp(e) {
  var t = e.split('.');
  if (t.length > 1) return t.map((r) => wp(r)).join('.');
  if (e.startsWith(qu)) {
    var n = e.substring(qu.length);
    return '|' + n;
  } else return e;
}
function bp(e, t) {
  if (!t) return t;
  var n = Do(t);
  return (
    (n = zu(n)),
    e.forEach((r) => {
      var i = Ns(t, r),
        a = i ? '1' : '0',
        c = hn(r);
      xs(n, c, a);
    }),
    n
  );
}
function Wu(e, t) {
  return (
    t &&
    ((t = Do(t)),
    (t = Gu(t)),
    e.forEach((n) => {
      var r = Ns(t, n),
        i = r === '1';
      xs(t, n, i);
    }),
    t)
  );
}
function zu(e) {
  if (
    !e ||
    typeof e == 'string' ||
    typeof e == 'number' ||
    typeof e == 'boolean'
  )
    return e;
  if (Array.isArray(e)) return e.map((n) => zu(n));
  if (typeof e == 'object') {
    var t = {};
    return (
      Object.entries(e).forEach(([n, r]) => {
        typeof r == 'object' && (r = zu(r)), (t[hn(n)] = r);
      }),
      t
    );
  }
}
function Gu(e) {
  if (
    !e ||
    typeof e == 'string' ||
    typeof e == 'number' ||
    typeof e == 'boolean'
  )
    return e;
  if (Array.isArray(e)) return e.map((n) => Gu(n));
  if (typeof e == 'object') {
    var t = {};
    return (
      Object.entries(e).forEach(([n, r]) => {
        (typeof r == 'object' || Array.isArray(e)) && (r = Gu(r)),
          (t[wp(n)] = r);
      }),
      t
    );
  }
}
function DI(e) {
  var t = [],
    n = Eo(e.primaryKey);
  t.push([n]),
    t.push(['_deleted', n]),
    e.indexes &&
      e.indexes.forEach((a) => {
        var c = Ts(a);
        t.push(c);
      }),
    t.push(['_meta.lwt', n]),
    t.push(['_meta.lwt']),
    (t = t.map((a) => a.map((c) => hn(c))));
  var r = t.map((a) => (a.length === 1 ? a[0] : '[' + a.join('+') + ']'));
  r = r.filter((a, c, f) => f.indexOf(a) === c);
  var i = r.join(', ');
  return i;
}
async function Ku(e, t) {
  var n = await e,
    r = await n.dexieTable.bulkGet(t);
  return r.map((i) => Wu(n.booleanIndexes, i));
}
function Vr(e, t) {
  return e + '||' + t;
}
function wI(e) {
  var t = new Set(),
    n = [];
  return e.indexes
    ? (e.indexes.forEach((r) => {
        var i = Ts(r);
        i.forEach((a) => {
          if (!t.has(a)) {
            t.add(a);
            var c = Kc(e, a);
            c.type === 'boolean' && n.push(a);
          }
        });
      }),
      n.push('_deleted'),
      Vc(n))
    : n;
}
function Ip(e) {
  return e === Yc ? -1 / 0 : e;
}
function Ep(e, t, n) {
  if (e.includes(t)) {
    var r = n === Qc || n === !0 ? '1' : '0';
    return r;
  } else return n;
}
function Cp(e, t, n) {
  if (!n) {
    if (typeof window > 'u') throw new Error('IDBKeyRange missing');
    n = window.IDBKeyRange;
  }
  var r = t.startKeys
      .map((c, f) => {
        var h = t.index[f];
        return Ep(e, h, c);
      })
      .map(Ip),
    i = t.endKeys
      .map((c, f) => {
        var h = t.index[f];
        return Ep(e, h, c);
      })
      .map(Ip),
    a = n.bound(r, i, !t.inclusiveStart, !t.inclusiveEnd);
  return a;
}
async function Zu(e, t) {
  var n = await e.internals,
    r = t.query,
    i = r.skip ? r.skip : 0,
    a = r.limit ? r.limit : 1 / 0,
    c = i + a,
    f = t.queryPlan,
    h = !1;
  f.selectorSatisfiedByIndex || (h = Jc(e.schema, t.query));
  var v = Cp(n.booleanIndexes, f, n.dexieDb._options.IDBKeyRange),
    _ = f.index,
    R = [];
  if (
    (await n.dexieDb.transaction('r', n.dexieTable, async (A) => {
      var H = A.idbtrans,
        te = H.objectStore(Br),
        Ie,
        ye;
      (ye = '[' + _.map((jt) => hn(jt)).join('+') + ']'), (Ie = te.index(ye));
      var He = Ie.openCursor(v);
      await new Promise((jt) => {
        He.onsuccess = function (Ze) {
          var Ee = Ze.target.result;
          if (Ee) {
            var Gn = Wu(n.booleanIndexes, Ee.value);
            (!h || h(Gn)) && R.push(Gn),
              f.sortSatisfiedByIndex && R.length === c ? jt() : Ee.continue();
          } else jt();
        };
      });
    }),
    !f.sortSatisfiedByIndex)
  ) {
    var O = Xc(e.schema, t.query);
    R = R.sort(O);
  }
  return (R = R.slice(i, c)), { documents: R };
}
async function _p(e, t) {
  var n = await e.internals,
    r = t.queryPlan,
    i = r.index,
    a = Cp(n.booleanIndexes, r, n.dexieDb._options.IDBKeyRange),
    c = -1;
  return (
    await n.dexieDb.transaction('r', n.dexieTable, async (f) => {
      var h = f.idbtrans,
        v = h.objectStore(Br),
        _,
        R;
      (R = '[' + i.map((A) => hn(A)).join('+') + ']'), (_ = v.index(R));
      var O = _.count(a);
      c = await new Promise((A, H) => {
        (O.onsuccess = function () {
          A(O.result);
        }),
          (O.onerror = (te) => H(te));
      });
    }),
    c
  );
}
var bI = wo(),
  Qu = !1,
  II = (function () {
    function e(n, r, i, a, c, f, h, v) {
      (this.changes$ = new Qe()),
        (this.instanceId = bI++),
        (this.storage = n),
        (this.databaseName = r),
        (this.collectionName = i),
        (this.schema = a),
        (this.internals = c),
        (this.options = f),
        (this.settings = h),
        (this.devMode = v),
        (this.primaryPath = Eo(this.schema.primaryKey));
    }
    var t = e.prototype;
    return (
      (t.bulkWrite = async function (r, i) {
        pn(this),
          !Qu &&
            (!bo.premium ||
              typeof bo.premium != 'string' ||
              (await Hc(bo.premium)) !== qc) &&
            console.warn(
              [
                '-------------- RxDB Open Core RxStorage -------------------------------',
                'You are using the free Dexie.js based RxStorage implementation from RxDB https://rxdb.info/rx-storage-dexie.html?console=dexie ',
                'While this is a great option, we want to let you know that there are faster storage solutions available in our premium plugins.',
                'For professional users and production environments, we highly recommend considering these premium options to enhance performance and reliability.',
                ' https://rxdb.info/premium?console=dexie ',
                'If you already purchased premium access you can disable this log by calling the setPremiumFlag() function from rxdb-premium/plugins/shared.',
                '---------------------------------------------------------------------',
              ].join(`
`),
            ),
          (Qu = !0),
          r.forEach((_) => {
            if (!_.document._rev || (_.previous && !_.previous._rev))
              throw Io('SNH', { args: { row: _ } });
          });
        var a = await this.internals,
          c = { error: [] };
        this.devMode &&
          (r = r.map((_) => {
            var R = nl(_.document);
            return { previous: _.previous, document: R };
          }));
        var f = r.map((_) => _.document[this.primaryPath]),
          h;
        if (
          (await a.dexieDb.transaction(
            'rw',
            a.dexieTable,
            a.dexieAttachmentsTable,
            async () => {
              var _ = new Map(),
                R = await Ku(this.internals, f);
              R.forEach((H) => {
                var te = H;
                return te && _.set(te[this.primaryPath], te), te;
              }),
                (h = tl(this, this.primaryPath, _, r, i)),
                (c.error = h.errors);
              var O = [];
              h.bulkInsertDocs.forEach((H) => {
                O.push(H.document);
              }),
                h.bulkUpdateDocs.forEach((H) => {
                  O.push(H.document);
                }),
                (O = O.map((H) => bp(a.booleanIndexes, H))),
                O.length > 0 && (await a.dexieTable.bulkPut(O));
              var A = [];
              h.attachmentsAdd.forEach((H) => {
                A.push({
                  id: Vr(H.documentId, H.attachmentId),
                  data: H.attachmentData.data,
                });
              }),
                h.attachmentsUpdate.forEach((H) => {
                  A.push({
                    id: Vr(H.documentId, H.attachmentId),
                    data: H.attachmentData.data,
                  });
                }),
                await a.dexieAttachmentsTable.bulkPut(A),
                await a.dexieAttachmentsTable.bulkDelete(
                  h.attachmentsRemove.map((H) =>
                    Vr(H.documentId, H.attachmentId),
                  ),
                );
            },
          ),
          (h = As(h)),
          h.eventBulk.events.length > 0)
        ) {
          var v = As(h.newestRow).document;
          (h.eventBulk.checkpoint = {
            id: v[this.primaryPath],
            lwt: v._meta.lwt,
          }),
            (h.eventBulk.endTime = wo()),
            this.changes$.next(h.eventBulk);
        }
        return c;
      }),
      (t.findDocumentsById = async function (r, i) {
        pn(this);
        var a = await this.internals,
          c = [];
        return (
          await a.dexieDb.transaction('r', a.dexieTable, async () => {
            var f = await Ku(this.internals, r);
            f.forEach((h) => {
              h && (!h._deleted || i) && c.push(h);
            });
          }),
          c
        );
      }),
      (t.query = function (r) {
        return pn(this), Zu(this, r);
      }),
      (t.count = async function (r) {
        if (r.queryPlan.selectorSatisfiedByIndex) {
          var i = await _p(this, r);
          return { count: i, mode: 'fast' };
        } else {
          var a = await Zu(this, r);
          return { count: a.documents.length, mode: 'slow' };
        }
      }),
      (t.changeStream = function () {
        return pn(this), this.changes$.asObservable();
      }),
      (t.cleanup = async function (r) {
        pn(this);
        var i = await this.internals;
        return (
          await i.dexieDb.transaction('rw', i.dexieTable, async () => {
            var a = wo() - r,
              c = await i.dexieTable.where('_meta.lwt').below(a).toArray(),
              f = [];
            c.forEach((h) => {
              h._deleted === '1' && f.push(h[this.primaryPath]);
            }),
              await i.dexieTable.bulkDelete(f);
          }),
          !0
        );
      }),
      (t.getAttachmentData = async function (r, i, a) {
        pn(this);
        var c = await this.internals,
          f = Vr(r, i);
        return await c.dexieDb.transaction(
          'r',
          c.dexieAttachmentsTable,
          async () => {
            var h = await c.dexieAttachmentsTable.get(f);
            if (h) return h.data;
            throw new Error(
              'attachment missing documentId: ' + r + ' attachmentId: ' + i,
            );
          },
        );
      }),
      (t.remove = async function () {
        pn(this);
        var r = await this.internals;
        return await r.dexieTable.clear(), this.close();
      }),
      (t.close = function () {
        return this.closed
          ? this.closed
          : ((this.closed = (async () => {
              this.changes$.complete(), await Dp(this.internals);
            })()),
            this.closed);
      }),
      (t.conflictResultionTasks = function () {
        return new Qe();
      }),
      (t.resolveConflictResultionTask = async function (r) {}),
      e
    );
  })();
async function Mp(e, t, n) {
  var r = vp(t.databaseName, t.collectionName, n, t.schema),
    i = new II(
      e,
      t.databaseName,
      t.collectionName,
      t.schema,
      r,
      t.options,
      n,
      t.devMode,
    );
  return await hp(Vi, t, i), Promise.resolve(i);
}
function pn(e) {
  if (e.closed)
    throw new Error(
      'RxStorageInstanceDexie is closed ' +
        e.databaseName +
        '-' +
        e.collectionName,
    );
}
var EI = (function () {
  function e(n) {
    (this.name = Vi), (this.rxdbVersion = Uc), (this.settings = n);
  }
  var t = e.prototype;
  return (
    (t.createStorageInstance = function (r) {
      return rl(r), Mp(this, r, this.settings);
    }),
    e
  );
})();
function Sp(e = {}) {
  var t = new EI(e);
  return t;
}
var Tp = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
      id: { type: 'string', maxLength: 100 },
      odo: { type: 'integer' },
      dateTime: { type: 'string', format: 'date-time' },
    },
    required: ['id', 'odo', 'dateTime'],
  },
  z_ = Tp,
  Np = Tp;
var Yu = null,
  xp;
async function CI() {
  Th() &&
    (await import('./chunk-SQDTL6HX.js').then((t) => qh(t.RxDBDevModePlugin)));
  let e = await al({
    name: 'turtle-track-db',
    storage: Sp({ allowEmptyDB: !0 }),
  });
  return await e.addCollections({ odo: { schema: Np } }), e;
}
async function X_() {
  Yu || (console.log('initDB()'), (Yu = CI().then((e) => (xp = e)))), await Yu;
}
var J_ = (() => {
  class e {
    get db() {
      return xp;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = ue({ token: e, factory: e.ɵfac, providedIn: 'root' });
  }
  return e;
})();
var _I = ['chart'],
  a0 = (() => {
    class e {
      constructor() {
        (this.chart = ce()),
          (this.annotations = ce()),
          (this.colors = ce()),
          (this.dataLabels = ce()),
          (this.series = ce()),
          (this.stroke = ce()),
          (this.labels = ce()),
          (this.legend = ce()),
          (this.markers = ce()),
          (this.noData = ce()),
          (this.fill = ce()),
          (this.tooltip = ce()),
          (this.plotOptions = ce()),
          (this.responsive = ce()),
          (this.xaxis = ce()),
          (this.yaxis = ce()),
          (this.forecastDataPoints = ce()),
          (this.grid = ce()),
          (this.states = ce()),
          (this.title = ce()),
          (this.subtitle = ce()),
          (this.theme = ce()),
          (this.autoUpdateSeries = ce(!0)),
          (this.chartReady = mf()),
          (this.chartInstance = $n(null)),
          (this.chartElement = gh.required('chart')),
          (this.ngZone = z(Oe)),
          (this.isBrowser = jh(z(kr)));
      }
      ngOnChanges(n) {
        this.isBrowser &&
          this.ngZone.runOutsideAngular(() => {
            Fc.schedule(() => this.hydrate(n));
          });
      }
      ngOnDestroy() {
        this.destroy();
      }
      hydrate(n) {
        if (
          this.autoUpdateSeries() &&
          Object.keys(n).filter((i) => i !== 'series').length === 0
        ) {
          this.updateSeries(this.series(), !0);
          return;
        }
        this.createElement();
      }
      async createElement() {
        let { default: n } = await import('./chunk-ER6B6KGD.js');
        window.ApexCharts ||= n;
        let r = {};
        [
          'annotations',
          'chart',
          'colors',
          'dataLabels',
          'series',
          'stroke',
          'labels',
          'legend',
          'fill',
          'tooltip',
          'plotOptions',
          'responsive',
          'markers',
          'noData',
          'xaxis',
          'yaxis',
          'forecastDataPoints',
          'grid',
          'states',
          'title',
          'subtitle',
          'theme',
        ].forEach((c) => {
          let f = this[c]();
          f && (r[c] = f);
        }),
          this.destroy();
        let a = this.ngZone.runOutsideAngular(
          () => new n(this.chartElement().nativeElement, r),
        );
        this.chartInstance.set(a),
          this.render(),
          this.chartReady.emit({ chartObj: a });
      }
      render() {
        return this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.render(),
        );
      }
      updateOptions(n, r, i, a) {
        return this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.updateOptions(n, r, i, a),
        );
      }
      updateSeries(n, r) {
        return this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.updateSeries(n, r),
        );
      }
      appendSeries(n, r) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.appendSeries(n, r),
        );
      }
      appendData(n) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.appendData(n),
        );
      }
      highlightSeries(n) {
        return this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.highlightSeries(n),
        );
      }
      toggleSeries(n) {
        return this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.toggleSeries(n),
        );
      }
      showSeries(n) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.showSeries(n),
        );
      }
      hideSeries(n) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.hideSeries(n),
        );
      }
      resetSeries() {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.resetSeries(),
        );
      }
      zoomX(n, r) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(n, r));
      }
      toggleDataPointSelection(n, r) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.toggleDataPointSelection(n, r),
        );
      }
      destroy() {
        this.chartInstance()?.destroy(), this.chartInstance.set(null);
      }
      setLocale(n) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(n));
      }
      paper() {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
      }
      addXaxisAnnotation(n, r, i) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.addXaxisAnnotation(n, r, i),
        );
      }
      addYaxisAnnotation(n, r, i) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.addYaxisAnnotation(n, r, i),
        );
      }
      addPointAnnotation(n, r, i) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.addPointAnnotation(n, r, i),
        );
      }
      removeAnnotation(n, r) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.removeAnnotation(n, r),
        );
      }
      clearAnnotations(n) {
        this.ngZone.runOutsideAngular(() =>
          this.chartInstance()?.clearAnnotations(n),
        );
      }
      dataURI(n) {
        return this.chartInstance()?.dataURI(n);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵcmp = Ti({
          type: e,
          selectors: [['apx-chart']],
          viewQuery: function (r, i) {
            r & 1 && Eh(i.chartElement, _I, 5), r & 2 && Ch();
          },
          inputs: {
            chart: [1, 'chart'],
            annotations: [1, 'annotations'],
            colors: [1, 'colors'],
            dataLabels: [1, 'dataLabels'],
            series: [1, 'series'],
            stroke: [1, 'stroke'],
            labels: [1, 'labels'],
            legend: [1, 'legend'],
            markers: [1, 'markers'],
            noData: [1, 'noData'],
            fill: [1, 'fill'],
            tooltip: [1, 'tooltip'],
            plotOptions: [1, 'plotOptions'],
            responsive: [1, 'responsive'],
            xaxis: [1, 'xaxis'],
            yaxis: [1, 'yaxis'],
            forecastDataPoints: [1, 'forecastDataPoints'],
            grid: [1, 'grid'],
            states: [1, 'states'],
            title: [1, 'title'],
            subtitle: [1, 'subtitle'],
            theme: [1, 'theme'],
            autoUpdateSeries: [1, 'autoUpdateSeries'],
          },
          outputs: { chartReady: 'chartReady' },
          features: [Ya],
          decls: 2,
          vars: 0,
          consts: [['chart', '']],
          template: function (r, i) {
            r & 1 && Or(0, 'div', null, 0);
          },
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })();
var u0 = (() => {
  class e {
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵmod = Ni({ type: e });
    }
    static {
      this.ɵinj = gi({});
    }
  }
  return e;
})();
export {
  ne as a,
  ad as b,
  ue as c,
  gi as d,
  jI as e,
  se as f,
  re as g,
  Te as h,
  z as i,
  Dd as j,
  Wg as k,
  Ed as l,
  kt as m,
  _d as n,
  Ya as o,
  BI as p,
  VI as q,
  HI as r,
  Ke as s,
  vt as t,
  wi as u,
  Nt as v,
  Oe as w,
  cn as x,
  mf as y,
  ce as z,
  Pt as A,
  $n as B,
  $I as C,
  UI as D,
  fy as E,
  kr as F,
  qI as G,
  bi as H,
  Dy as I,
  Ir as J,
  zI as K,
  si as L,
  ci as M,
  Mi as N,
  Rr as O,
  XI as P,
  Si as Q,
  gh as R,
  MD as S,
  SD as T,
  Ti as U,
  Ni as V,
  RD as W,
  OD as X,
  LD as Y,
  GD as Z,
  nE as _,
  Tu as $,
  wh as aa,
  rE as ba,
  QD as ca,
  _r as da,
  tw as ea,
  cw as fa,
  lw as ga,
  oE as ha,
  xi as ia,
  Ai as ja,
  Or as ka,
  iE as la,
  Mw as ma,
  sE as na,
  Eh as oa,
  Ch as pa,
  aE as qa,
  uE as ra,
  Nw as sa,
  Aw as ta,
  cE as ua,
  kw as va,
  Rw as wa,
  lE as xa,
  dE as ya,
  fE as za,
  hE as Aa,
  pE as Ba,
  gE as Ca,
  mE as Da,
  Th as Ea,
  Nh as Fa,
  yE as Ga,
  nb as Ha,
  ki as Ia,
  xh as Ja,
  vE as Ka,
  Ru as La,
  sC as Ma,
  kh as Na,
  Pr as Oa,
  aC as Pa,
  Oi as Qa,
  cb as Ra,
  uC as Sa,
  lb as Ta,
  cC as Ua,
  pb as Va,
  Bh as Wa,
  lC as Xa,
  Ph as Ya,
  X_ as Za,
  J_ as _a,
  Au as $a,
  ku as ab,
  bC as bb,
  IC as cb,
  a0 as db,
  u0 as eb,
};
