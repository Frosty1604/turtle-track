import { a as U, b as J } from './chunk-KAT7YFEL.js';
function Iu(e) {
  return (
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach(function (t) {
      Object.prototype.hasOwnProperty.call(e, t) &&
        e[t] !== null &&
        (typeof e[t] == 'object' || typeof e[t] == 'function') &&
        !Object.isFrozen(e[t]) &&
        Iu(e[t]);
    }),
    e
  );
}
function li(e) {
  var t = e.split('.'),
    r = t.length;
  return r === 1
    ? (o) => o[e]
    : (o) => {
        for (var n = o, i = 0; i < r; ++i) {
          var s = t[i];
          if (((n = n[s]), typeof n > 'u')) return n;
        }
        return n;
      };
}
function Au(e) {
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r))
      if (typeof e[r] == 'object') {
        var o = Au(e[r]);
        for (var n in o)
          Object.prototype.hasOwnProperty.call(o, n) && (t[r + '.' + n] = o[n]);
      } else t[r] = e[r];
  return t;
}
function q(e) {
  return Object.assign({}, e);
}
function fi(e) {
  return Object.keys(e)[0];
}
function mt(e, t = !1) {
  if (!e) return e;
  if (!t && Array.isArray(e))
    return e
      .sort((o, n) =>
        typeof o == 'string' && typeof n == 'string'
          ? o.localeCompare(n)
          : typeof o == 'object'
            ? 1
            : -1,
      )
      .map((o) => mt(o, t));
  if (typeof e == 'object' && !Array.isArray(e)) {
    var r = {};
    return (
      Object.keys(e)
        .sort((o, n) => o.localeCompare(n))
        .forEach((o) => {
          r[o] = mt(e[o], t);
        }),
      r
    );
  }
  return e;
}
function Uo(e) {
  if (!e || e === null || typeof e != 'object') return e;
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), r = t.length; r--; ) t[r] = Uo(e[r]);
    return t;
  }
  var o = {};
  for (var n in e) o[n] = Uo(e[n]);
  return o;
}
var Ie = Uo;
function fe(e, t, r) {
  return (
    Object.defineProperty(e, t, {
      get: function () {
        return r;
      },
    }),
    r
  );
}
function Qe(e) {
  '@babel/helpers - typeof';
  return (
    (Qe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Qe(e)
  );
}
function mi(e, t) {
  if (Qe(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || 'default');
    if (Qe(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function pi(e) {
  var t = mi(e, 'string');
  return Qe(t) == 'symbol' ? t : t + '';
}
function hi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, pi(o.key), o);
  }
}
function te(e, t, r) {
  return (
    t && hi(e.prototype, t),
    r && hi(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function Be(e, t) {
  return (
    (Be = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Be(e, t)
  );
}
function jo(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Be(e, t);
}
function dr(e) {
  return (
    (dr = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    dr(e)
  );
}
function di(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  } catch {
    return typeof e == 'function';
  }
}
function Vo() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Vo = function () {
    return !!e;
  })();
}
function yi(e, t, r) {
  if (Vo()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, t);
  var n = new (e.bind.apply(e, o))();
  return r && Be(n, r.prototype), n;
}
function qt(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (qt = function (o) {
      if (o === null || !di(o)) return o;
      if (typeof o != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (t !== void 0) {
        if (t.has(o)) return t.get(o);
        t.set(o, n);
      }
      function n() {
        return yi(o, arguments, dr(this).constructor);
      }
      return (
        (n.prototype = Object.create(o.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Be(n, o)
      );
    }),
    qt(e)
  );
}
var L = {
  isDevMode() {
    return !1;
  },
  deepFreezeWhenDevMode(e) {
    return e;
  },
  tunnelErrorMessage(e) {
    return (
      'RxDB Error-Code ' +
      e +
      `.
        Error messages are not included in RxDB core to reduce build size.
        `
    );
  },
};
function Cu(e) {
  var t = '';
  return (
    Object.keys(e).length === 0 ||
      ((t += `Given parameters: {
`),
      (t += Object.keys(e).map((r) => {
        var o = '[object Object]';
        try {
          r === 'errors'
            ? (o = e[r].map((n) =>
                JSON.stringify(n, Object.getOwnPropertyNames(n)),
              ))
            : (o = JSON.stringify(
                e[r],
                function (n, i) {
                  return i === void 0 ? null : i;
                },
                2,
              ));
        } catch {}
        return r + ':' + o;
      }).join(`
`)),
      (t += '}')),
    t
  );
}
function gi(e, t, r) {
  return (
    'RxError (' +
    t +
    `):
` +
    e +
    `
` +
    Cu(r)
  );
}
var Ru = (function (e) {
    function t(o, n, i = {}) {
      var s,
        a = gi(n, o, i);
      return (
        (s = e.call(this, a) || this),
        (s.code = o),
        (s.message = a),
        (s.url = Wo(o)),
        (s.parameters = i),
        (s.rxdb = !0),
        s
      );
    }
    jo(t, e);
    var r = t.prototype;
    return (
      (r.toString = function () {
        return this.message;
      }),
      te(t, [
        {
          key: 'name',
          get: function () {
            return 'RxError (' + this.code + ')';
          },
        },
        {
          key: 'typeError',
          get: function () {
            return !1;
          },
        },
      ])
    );
  })(qt(Error)),
  Tu = (function (e) {
    function t(o, n, i = {}) {
      var s,
        a = gi(n, o, i);
      return (
        (s = e.call(this, a) || this),
        (s.code = o),
        (s.message = a),
        (s.url = Wo(o)),
        (s.parameters = i),
        (s.rxdb = !0),
        s
      );
    }
    jo(t, e);
    var r = t.prototype;
    return (
      (r.toString = function () {
        return this.message;
      }),
      te(t, [
        {
          key: 'name',
          get: function () {
            return 'RxTypeError (' + this.code + ')';
          },
        },
        {
          key: 'typeError',
          get: function () {
            return !0;
          },
        },
      ])
    );
  })(qt(TypeError));
function Wo(e) {
  return 'https://rxdb.info/errors.html?console=errors#' + e;
}
function vi(e) {
  return (
    `
 You can find out more about this error here: ` +
    Wo(e) +
    ' '
  );
}
function _(e, t) {
  return new Ru(e, L.tunnelErrorMessage(e) + vi(e), t);
}
function yr(e, t) {
  return new Tu(e, L.tunnelErrorMessage(e) + vi(e), t);
}
function gr(e) {
  return e && e.status === 409 ? e : !1;
}
var Du = {
  409: 'document write conflict',
  422: 'schema validation error',
  510: 'attachment data missing',
};
function xi(e) {
  return _('COL20', {
    name: Du[e.status],
    document: e.documentId,
    writeError: e,
  });
}
function w(e) {
  return typeof e == 'function';
}
function pt(e) {
  let r = e((o) => {
    Error.call(o), (o.stack = new Error().stack);
  });
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var vr = pt(
  (e) =>
    function (r) {
      e(this),
        (this.message = r
          ? `${r.length} errors occurred during unsubscription:
${r.map((o, n) => `${n + 1}) ${o.toString()}`).join(`
  `)}`
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = r);
    },
);
function Ye(e, t) {
  if (e) {
    let r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var ee = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: r } = this;
      if (r)
        if (((this._parentage = null), Array.isArray(r)))
          for (let i of r) i.remove(this);
        else r.remove(this);
      let { initialTeardown: o } = this;
      if (w(o))
        try {
          o();
        } catch (i) {
          t = i instanceof vr ? i.errors : [i];
        }
      let { _finalizers: n } = this;
      if (n) {
        this._finalizers = null;
        for (let i of n)
          try {
            bi(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof vr ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new vr(t);
    }
  }
  add(t) {
    var r;
    if (t && t !== this)
      if (this.closed) bi(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: r } = this;
    return r === t || (Array.isArray(r) && r.includes(t));
  }
  _addParent(t) {
    let { _parentage: r } = this;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }
  _removeParent(t) {
    let { _parentage: r } = this;
    r === t ? (this._parentage = null) : Array.isArray(r) && Ye(r, t);
  }
  remove(t) {
    let { _finalizers: r } = this;
    r && Ye(r, t), t instanceof e && t._removeParent(this);
  }
};
ee.EMPTY = (() => {
  let e = new ee();
  return (e.closed = !0), e;
})();
var qo = ee.EMPTY;
function xr(e) {
  return (
    e instanceof ee ||
    (e && 'closed' in e && w(e.remove) && w(e.add) && w(e.unsubscribe))
  );
}
function bi(e) {
  w(e) ? e() : e.unsubscribe();
}
var we = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var ht = {
  setTimeout(e, t, ...r) {
    let { delegate: o } = ht;
    return o?.setTimeout ? o.setTimeout(e, t, ...r) : setTimeout(e, t, ...r);
  },
  clearTimeout(e) {
    let { delegate: t } = ht;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function br(e) {
  ht.setTimeout(() => {
    let { onUnhandledError: t } = we;
    if (t) t(e);
    else throw e;
  });
}
function Me() {}
var _i = zo('C', void 0, void 0);
function wi(e) {
  return zo('E', void 0, e);
}
function Oi(e) {
  return zo('N', e, void 0);
}
function zo(e, t, r) {
  return { kind: e, value: t, error: r };
}
var Ge = null;
function dt(e) {
  if (we.useDeprecatedSynchronousErrorHandling) {
    let t = !Ge;
    if ((t && (Ge = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: r, error: o } = Ge;
      if (((Ge = null), r)) throw o;
    }
  } else e();
}
function Ei(e) {
  we.useDeprecatedSynchronousErrorHandling &&
    Ge &&
    ((Ge.errorThrown = !0), (Ge.error = e));
}
var Je = class extends ee {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), xr(t) && t.add(this))
          : (this.destination = ku);
    }
    static create(t, r, o) {
      return new Ne(t, r, o);
    }
    next(t) {
      this.isStopped ? Ko(Oi(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? Ko(wi(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? Ko(_i, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  Mu = Function.prototype.bind;
function Ho(e, t) {
  return Mu.call(e, t);
}
var Qo = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: r } = this;
      if (r.next)
        try {
          r.next(t);
        } catch (o) {
          _r(o);
        }
    }
    error(t) {
      let { partialObserver: r } = this;
      if (r.error)
        try {
          r.error(t);
        } catch (o) {
          _r(o);
        }
      else _r(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (r) {
          _r(r);
        }
    }
  },
  Ne = class extends Je {
    constructor(t, r, o) {
      super();
      let n;
      if (w(t) || !t)
        n = { next: t ?? void 0, error: r ?? void 0, complete: o ?? void 0 };
      else {
        let i;
        this && we.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (n = {
              next: t.next && Ho(t.next, i),
              error: t.error && Ho(t.error, i),
              complete: t.complete && Ho(t.complete, i),
            }))
          : (n = t);
      }
      this.destination = new Qo(n);
    }
  };
function _r(e) {
  we.useDeprecatedSynchronousErrorHandling ? Ei(e) : br(e);
}
function Nu(e) {
  throw e;
}
function Ko(e, t) {
  let { onStoppedNotification: r } = we;
  r && ht.setTimeout(() => r(e, t));
}
var ku = { closed: !0, next: Me, error: Nu, complete: Me };
var yt = (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
function re(e) {
  return e;
}
function Pu(...e) {
  return Yo(e);
}
function Yo(e) {
  return e.length === 0
    ? re
    : e.length === 1
      ? e[0]
      : function (r) {
          return e.reduce((o, n) => n(o), r);
        };
}
var A = (() => {
  class e {
    constructor(r) {
      r && (this._subscribe = r);
    }
    lift(r) {
      let o = new e();
      return (o.source = this), (o.operator = r), o;
    }
    subscribe(r, o, n) {
      let i = Lu(r) ? r : new Ne(r, o, n);
      return (
        dt(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(r) {
      try {
        return this._subscribe(r);
      } catch (o) {
        r.error(o);
      }
    }
    forEach(r, o) {
      return (
        (o = Si(o)),
        new o((n, i) => {
          let s = new Ne({
            next: (a) => {
              try {
                r(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: n,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(r) {
      var o;
      return (o = this.source) === null || o === void 0
        ? void 0
        : o.subscribe(r);
    }
    [yt]() {
      return this;
    }
    pipe(...r) {
      return Yo(r)(this);
    }
    toPromise(r) {
      return (
        (r = Si(r)),
        new r((o, n) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => n(s),
            () => o(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function Si(e) {
  var t;
  return (t = e ?? we.Promise) !== null && t !== void 0 ? t : Promise;
}
function Fu(e) {
  return e && w(e.next) && w(e.error) && w(e.complete);
}
function Lu(e) {
  return (e && e instanceof Je) || (Fu(e) && xr(e));
}
var $i = pt(
  (e) =>
    function () {
      e(this),
        (this.name = 'ObjectUnsubscribedError'),
        (this.message = 'object unsubscribed');
    },
);
var se = (() => {
    class e extends A {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(r) {
        let o = new wr(this, this);
        return (o.operator = r), o;
      }
      _throwIfClosed() {
        if (this.closed) throw new $i();
      }
      next(r) {
        dt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let o of this.currentObservers) o.next(r);
          }
        });
      }
      error(r) {
        dt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = r);
            let { observers: o } = this;
            for (; o.length; ) o.shift().error(r);
          }
        });
      }
      complete() {
        dt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: r } = this;
            for (; r.length; ) r.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var r;
        return (
          ((r = this.observers) === null || r === void 0 ? void 0 : r.length) >
          0
        );
      }
      _trySubscribe(r) {
        return this._throwIfClosed(), super._trySubscribe(r);
      }
      _subscribe(r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }
      _innerSubscribe(r) {
        let { hasError: o, isStopped: n, observers: i } = this;
        return o || n
          ? qo
          : ((this.currentObservers = null),
            i.push(r),
            new ee(() => {
              (this.currentObservers = null), Ye(i, r);
            }));
      }
      _checkFinalizedStatuses(r) {
        let { hasError: o, thrownError: n, isStopped: i } = this;
        o ? r.error(n) : i && r.complete();
      }
      asObservable() {
        let r = new A();
        return (r.source = this), r;
      }
    }
    return (e.create = (t, r) => new wr(t, r)), e;
  })(),
  wr = class extends se {
    constructor(t, r) {
      super(), (this.destination = t), (this.source = r);
    }
    next(t) {
      var r, o;
      (o =
        (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
        null ||
        o === void 0 ||
        o.call(r, t);
    }
    error(t) {
      var r, o;
      (o =
        (r = this.destination) === null || r === void 0 ? void 0 : r.error) ===
        null ||
        o === void 0 ||
        o.call(r, t);
    }
    complete() {
      var t, r;
      (r =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        r === void 0 ||
        r.call(t);
    }
    _subscribe(t) {
      var r, o;
      return (o =
        (r = this.source) === null || r === void 0
          ? void 0
          : r.subscribe(t)) !== null && o !== void 0
        ? o
        : qo;
    }
  };
var zt = class extends se {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let r = super._subscribe(t);
    return !r.closed && t.next(this._value), r;
  }
  getValue() {
    let { hasError: t, thrownError: r, _value: o } = this;
    if (t) throw r;
    return this._throwIfClosed(), o;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var Ht = {
  now() {
    return (Ht.delegate || Date).now();
  },
  delegate: void 0,
};
var Kt = class extends se {
  constructor(t = 1 / 0, r = 1 / 0, o = Ht) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = r),
      (this._timestampProvider = o),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = r === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, r));
  }
  next(t) {
    let {
      isStopped: r,
      _buffer: o,
      _infiniteTimeWindow: n,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    r || (o.push(t), !n && o.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let r = this._innerSubscribe(t),
      { _infiniteTimeWindow: o, _buffer: n } = this,
      i = n.slice();
    for (let s = 0; s < i.length && !t.closed; s += o ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), r;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: r,
        _buffer: o,
        _infiniteTimeWindow: n,
      } = this,
      i = (n ? 1 : 2) * t;
    if ((t < 1 / 0 && i < o.length && o.splice(0, o.length - i), !n)) {
      let s = r.now(),
        a = 0;
      for (let u = 1; u < o.length && o[u] <= s; u += 2) a = u;
      a && o.splice(0, a + 1);
    }
  }
};
function Ai(e, t, r, o) {
  function n(i) {
    return i instanceof r
      ? i
      : new r(function (s) {
          s(i);
        });
  }
  return new (r || (r = Promise))(function (i, s) {
    function a(c) {
      try {
        l(o.next(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      try {
        l(o.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      c.done ? i(c.value) : n(c.value).then(a, u);
    }
    l((o = o.apply(e, t || [])).next());
  });
}
function Ii(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    r = t && e[t],
    o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
  );
}
function Xe(e) {
  return this instanceof Xe ? ((this.v = e), this) : new Xe(e);
}
function Ci(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var o = r.apply(e, t || []),
    n,
    i = [];
  return (
    (n = Object.create(
      (typeof AsyncIterator == 'function' ? AsyncIterator : Object).prototype,
    )),
    a('next'),
    a('throw'),
    a('return', s),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function s(m) {
    return function (d) {
      return Promise.resolve(d).then(m, f);
    };
  }
  function a(m, d) {
    o[m] &&
      ((n[m] = function (y) {
        return new Promise(function (b, x) {
          i.push([m, y, b, x]) > 1 || u(m, y);
        });
      }),
      d && (n[m] = d(n[m])));
  }
  function u(m, d) {
    try {
      l(o[m](d));
    } catch (y) {
      h(i[0][3], y);
    }
  }
  function l(m) {
    m.value instanceof Xe
      ? Promise.resolve(m.value.v).then(c, f)
      : h(i[0][2], m);
  }
  function c(m) {
    u('next', m);
  }
  function f(m) {
    u('throw', m);
  }
  function h(m, d) {
    m(d), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function Ri(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Ii == 'function' ? Ii(e) : e[Symbol.iterator]()),
      (r = {}),
      o('next'),
      o('throw'),
      o('return'),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function o(i) {
    r[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), n(a, u, s.done, s.value);
        });
      };
  }
  function n(i, s, a, u) {
    Promise.resolve(u).then(function (l) {
      i({ value: l, done: a });
    }, s);
  }
}
var gt = (e) => e && typeof e.length == 'number' && typeof e != 'function';
function Or(e) {
  return w(e?.then);
}
function Er(e) {
  return w(e[yt]);
}
function Sr(e) {
  return Symbol.asyncIterator && w(e?.[Symbol.asyncIterator]);
}
function $r(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == 'object' ? 'an invalid object' : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Bu() {
  return typeof Symbol != 'function' || !Symbol.iterator
    ? '@@iterator'
    : Symbol.iterator;
}
var Ir = Bu();
function Ar(e) {
  return w(e?.[Ir]);
}
function Cr(e) {
  return Ci(this, arguments, function* () {
    let r = e.getReader();
    try {
      for (;;) {
        let { value: o, done: n } = yield Xe(r.read());
        if (n) return yield Xe(void 0);
        yield yield Xe(o);
      }
    } finally {
      r.releaseLock();
    }
  });
}
function Rr(e) {
  return w(e?.getReader);
}
function D(e) {
  if (e instanceof A) return e;
  if (e != null) {
    if (Er(e)) return Uu(e);
    if (gt(e)) return ju(e);
    if (Or(e)) return Vu(e);
    if (Sr(e)) return Ti(e);
    if (Ar(e)) return Wu(e);
    if (Rr(e)) return qu(e);
  }
  throw $r(e);
}
function Uu(e) {
  return new A((t) => {
    let r = e[yt]();
    if (w(r.subscribe)) return r.subscribe(t);
    throw new TypeError(
      'Provided object does not correctly implement Symbol.observable',
    );
  });
}
function ju(e) {
  return new A((t) => {
    for (let r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
    t.complete();
  });
}
function Vu(e) {
  return new A((t) => {
    e.then(
      (r) => {
        t.closed || (t.next(r), t.complete());
      },
      (r) => t.error(r),
    ).then(null, br);
  });
}
function Wu(e) {
  return new A((t) => {
    for (let r of e) if ((t.next(r), t.closed)) return;
    t.complete();
  });
}
function Ti(e) {
  return new A((t) => {
    zu(e, t).catch((r) => t.error(r));
  });
}
function qu(e) {
  return Ti(Cr(e));
}
function zu(e, t) {
  var r, o, n, i;
  return Ai(this, void 0, void 0, function* () {
    try {
      for (r = Ri(e); (o = yield r.next()), !o.done; ) {
        let s = o.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      n = { error: s };
    } finally {
      try {
        o && !o.done && (i = r.return) && (yield i.call(r));
      } finally {
        if (n) throw n.error;
      }
    }
    t.complete();
  });
}
function ae(e, t, r, o = 0, n = !1) {
  let i = t.schedule(function () {
    r(), n ? e.add(this.schedule(null, o)) : this.unsubscribe();
  }, o);
  if ((e.add(i), !n)) return i;
}
function Go(e) {
  return w(e?.lift);
}
function S(e) {
  return (t) => {
    if (Go(t))
      return t.lift(function (r) {
        try {
          return e(r, this);
        } catch (o) {
          this.error(o);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function I(e, t, r, o, n) {
  return new Jo(e, t, r, o, n);
}
var Jo = class extends Je {
  constructor(t, r, o, n, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = r
        ? function (a) {
            try {
              r(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = o
        ? function () {
            try {
              o();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: r } = this;
      super.unsubscribe(),
        !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Tr(e, t = 0) {
  return S((r, o) => {
    r.subscribe(
      I(
        o,
        (n) => ae(o, e, () => o.next(n), t),
        () => ae(o, e, () => o.complete(), t),
        (n) => ae(o, e, () => o.error(n), t),
      ),
    );
  });
}
function Dr(e, t = 0) {
  return S((r, o) => {
    o.add(e.schedule(() => r.subscribe(o), t));
  });
}
function Di(e, t) {
  return D(e).pipe(Dr(t), Tr(t));
}
function Mi(e, t) {
  return D(e).pipe(Dr(t), Tr(t));
}
function Ni(e, t) {
  return new A((r) => {
    let o = 0;
    return t.schedule(function () {
      o === e.length
        ? r.complete()
        : (r.next(e[o++]), r.closed || this.schedule());
    });
  });
}
function ki(e, t) {
  return new A((r) => {
    let o;
    return (
      ae(r, t, () => {
        (o = e[Ir]()),
          ae(
            r,
            t,
            () => {
              let n, i;
              try {
                ({ value: n, done: i } = o.next());
              } catch (s) {
                r.error(s);
                return;
              }
              i ? r.complete() : r.next(n);
            },
            0,
            !0,
          );
      }),
      () => w(o?.return) && o.return()
    );
  });
}
function Mr(e, t) {
  if (!e) throw new Error('Iterable cannot be null');
  return new A((r) => {
    ae(r, t, () => {
      let o = e[Symbol.asyncIterator]();
      ae(
        r,
        t,
        () => {
          o.next().then((n) => {
            n.done ? r.complete() : r.next(n.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Pi(e, t) {
  return Mr(Cr(e), t);
}
function Fi(e, t) {
  if (e != null) {
    if (Er(e)) return Di(e, t);
    if (gt(e)) return Ni(e, t);
    if (Or(e)) return Mi(e, t);
    if (Sr(e)) return Mr(e, t);
    if (Ar(e)) return ki(e, t);
    if (Rr(e)) return Pi(e, t);
  }
  throw $r(e);
}
function ge(e, t) {
  return t ? Fi(e, t) : D(e);
}
function Nr(e) {
  return e && w(e.schedule);
}
function Xo(e) {
  return e[e.length - 1];
}
function kr(e) {
  return w(Xo(e)) ? e.pop() : void 0;
}
function ve(e) {
  return Nr(Xo(e)) ? e.pop() : void 0;
}
function Pr(e, t) {
  return typeof Xo(e) == 'number' ? e.pop() : t;
}
function Hu(...e) {
  let t = ve(e);
  return ge(e, t);
}
function K(e, t) {
  return S((r, o) => {
    let n = 0;
    r.subscribe(
      I(o, (i) => {
        o.next(e.call(t, i, n++));
      }),
    );
  });
}
var { isArray: Ku } = Array,
  { getPrototypeOf: Qu, prototype: Yu, keys: Gu } = Object;
function Fr(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Ku(t)) return { args: t, keys: null };
    if (Ju(t)) {
      let r = Gu(t);
      return { args: r.map((o) => t[o]), keys: r };
    }
  }
  return { args: e, keys: null };
}
function Ju(e) {
  return e && typeof e == 'object' && Qu(e) === Yu;
}
var { isArray: Xu } = Array;
function Zu(e, t) {
  return Xu(t) ? e(...t) : e(t);
}
function vt(e) {
  return K((t) => Zu(e, t));
}
function Lr(e, t) {
  return e.reduce((r, o, n) => ((r[o] = t[n]), r), {});
}
function ec(...e) {
  let t = ve(e),
    r = kr(e),
    { args: o, keys: n } = Fr(e);
  if (o.length === 0) return ge([], t);
  let i = new A(tc(o, t, n ? (s) => Lr(n, s) : re));
  return r ? i.pipe(vt(r)) : i;
}
function tc(e, t, r = re) {
  return (o) => {
    Li(
      t,
      () => {
        let { length: n } = e,
          i = new Array(n),
          s = n,
          a = n;
        for (let u = 0; u < n; u++)
          Li(
            t,
            () => {
              let l = ge(e[u], t),
                c = !1;
              l.subscribe(
                I(
                  o,
                  (f) => {
                    (i[u] = f), c || ((c = !0), a--), a || o.next(r(i.slice()));
                  },
                  () => {
                    --s || o.complete();
                  },
                ),
              );
            },
            o,
          );
      },
      o,
    );
  };
}
function Li(e, t, r) {
  e ? ae(r, e, t) : t();
}
function Ze(e, t = re) {
  return (
    (e = e ?? rc),
    S((r, o) => {
      let n,
        i = !0;
      r.subscribe(
        I(o, (s) => {
          let a = t(s);
          (i || !e(n, a)) && ((i = !1), (n = a), o.next(s));
        }),
      );
    })
  );
}
function rc(e, t) {
  return e === t;
}
function Bi(e = {}) {
  let {
    connector: t = () => new se(),
    resetOnError: r = !0,
    resetOnComplete: o = !0,
    resetOnRefCountZero: n = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      l = 0,
      c = !1,
      f = !1,
      h = () => {
        a?.unsubscribe(), (a = void 0);
      },
      m = () => {
        h(), (s = u = void 0), (c = f = !1);
      },
      d = () => {
        let y = s;
        m(), y?.unsubscribe();
      };
    return S((y, b) => {
      l++, !f && !c && h();
      let x = (u = u ?? t());
      b.add(() => {
        l--, l === 0 && !f && !c && (a = Zo(d, n));
      }),
        x.subscribe(b),
        !s &&
          l > 0 &&
          ((s = new Ne({
            next: (O) => x.next(O),
            error: (O) => {
              (f = !0), h(), (a = Zo(m, r, O)), x.error(O);
            },
            complete: () => {
              (c = !0), h(), (a = Zo(m, o)), x.complete();
            },
          })),
          D(y).subscribe(s));
    })(i);
  };
}
function Zo(e, t, ...r) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let o = new Ne({
    next: () => {
      o.unsubscribe(), e();
    },
  });
  return D(t(...r)).subscribe(o);
}
function xt(e, t, r) {
  let o,
    n = !1;
  return (
    e && typeof e == 'object'
      ? ({
          bufferSize: o = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: n = !1,
          scheduler: r,
        } = e)
      : (o = e ?? 1 / 0),
    Bi({
      connector: () => new Kt(o, t, r),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: n,
    })
  );
}
function Ui(e, t) {
  return S((r, o) => {
    let n = null,
      i = 0,
      s = !1,
      a = () => s && !n && o.complete();
    r.subscribe(
      I(
        o,
        (u) => {
          n?.unsubscribe();
          let l = 0,
            c = i++;
          D(e(u, c)).subscribe(
            (n = I(
              o,
              (f) => o.next(t ? t(u, f, c, l++) : f),
              () => {
                (n = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function oc(e) {
  return S((t, r) => {
    D(e).subscribe(I(r, () => r.complete(), Me)), !r.closed && t.subscribe(r);
  });
}
function en() {
  return S((e, t) => {
    let r = null;
    e._refCount++;
    let o = I(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        r = null;
        return;
      }
      let n = e._connection,
        i = r;
      (r = null), n && (!i || n === i) && n.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(o), o.closed || (r = e.connect());
  });
}
var Qt = class extends A {
  constructor(t, r) {
    super(),
      (this.source = t),
      (this.subjectFactory = r),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Go(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new ee();
      let r = this.getSubject();
      t.add(
        this.source.subscribe(
          I(
            r,
            void 0,
            () => {
              this._teardown(), r.complete();
            },
            (o) => {
              this._teardown(), r.error(o);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = ee.EMPTY));
    }
    return t;
  }
  refCount() {
    return en()(this);
  }
};
var Br = class extends ee {
  constructor(t, r) {
    super();
  }
  schedule(t, r = 0) {
    return this;
  }
};
var Yt = {
  setInterval(e, t, ...r) {
    let { delegate: o } = Yt;
    return o?.setInterval ? o.setInterval(e, t, ...r) : setInterval(e, t, ...r);
  },
  clearInterval(e) {
    let { delegate: t } = Yt;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var bt = class extends Br {
  constructor(t, r) {
    super(t, r), (this.scheduler = t), (this.work = r), (this.pending = !1);
  }
  schedule(t, r = 0) {
    var o;
    if (this.closed) return this;
    this.state = t;
    let n = this.id,
      i = this.scheduler;
    return (
      n != null && (this.id = this.recycleAsyncId(i, n, r)),
      (this.pending = !0),
      (this.delay = r),
      (this.id =
        (o = this.id) !== null && o !== void 0
          ? o
          : this.requestAsyncId(i, this.id, r)),
      this
    );
  }
  requestAsyncId(t, r, o = 0) {
    return Yt.setInterval(t.flush.bind(t, this), o);
  }
  recycleAsyncId(t, r, o = 0) {
    if (o != null && this.delay === o && this.pending === !1) return r;
    r != null && Yt.clearInterval(r);
  }
  execute(t, r) {
    if (this.closed) return new Error('executing a cancelled action');
    this.pending = !1;
    let o = this._execute(t, r);
    if (o) return o;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, r) {
    let o = !1,
      n;
    try {
      this.work(t);
    } catch (i) {
      (o = !0), (n = i || new Error('Scheduled action threw falsy error'));
    }
    if (o) return this.unsubscribe(), n;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: r } = this,
        { actions: o } = r;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        Ye(o, this),
        t != null && (this.id = this.recycleAsyncId(r, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var nc = 1,
  tn,
  rn = {};
function ji(e) {
  return e in rn ? (delete rn[e], !0) : !1;
}
var Vi = {
  setImmediate(e) {
    let t = nc++;
    return (
      (rn[t] = !0),
      tn || (tn = Promise.resolve()),
      tn.then(() => ji(t) && e()),
      t
    );
  },
  clearImmediate(e) {
    ji(e);
  },
};
var { setImmediate: ic, clearImmediate: sc } = Vi,
  Gt = {
    setImmediate(...e) {
      let { delegate: t } = Gt;
      return (t?.setImmediate || ic)(...e);
    },
    clearImmediate(e) {
      let { delegate: t } = Gt;
      return (t?.clearImmediate || sc)(e);
    },
    delegate: void 0,
  };
var Ur = class extends bt {
  constructor(t, r) {
    super(t, r), (this.scheduler = t), (this.work = r);
  }
  requestAsyncId(t, r, o = 0) {
    return o !== null && o > 0
      ? super.requestAsyncId(t, r, o)
      : (t.actions.push(this),
        t._scheduled ||
          (t._scheduled = Gt.setImmediate(t.flush.bind(t, void 0))));
  }
  recycleAsyncId(t, r, o = 0) {
    var n;
    if (o != null ? o > 0 : this.delay > 0)
      return super.recycleAsyncId(t, r, o);
    let { actions: i } = t;
    r != null &&
      ((n = i[i.length - 1]) === null || n === void 0 ? void 0 : n.id) !== r &&
      (Gt.clearImmediate(r), t._scheduled === r && (t._scheduled = void 0));
  }
};
var _t = class e {
  constructor(t, r = e.now) {
    (this.schedulerActionCtor = t), (this.now = r);
  }
  schedule(t, r = 0, o) {
    return new this.schedulerActionCtor(this, t).schedule(o, r);
  }
};
_t.now = Ht.now;
var wt = class extends _t {
  constructor(t, r = _t.now) {
    super(t, r), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: r } = this;
    if (this._active) {
      r.push(t);
      return;
    }
    let o;
    this._active = !0;
    do if ((o = t.execute(t.state, t.delay))) break;
    while ((t = r.shift()));
    if (((this._active = !1), o)) {
      for (; (t = r.shift()); ) t.unsubscribe();
      throw o;
    }
  }
};
var jr = class extends wt {
  flush(t) {
    this._active = !0;
    let r = this._scheduled;
    this._scheduled = void 0;
    let { actions: o } = this,
      n;
    t = t || o.shift();
    do if ((n = t.execute(t.state, t.delay))) break;
    while ((t = o[0]) && t.id === r && o.shift());
    if (((this._active = !1), n)) {
      for (; (t = o[0]) && t.id === r && o.shift(); ) t.unsubscribe();
      throw n;
    }
  }
};
var ac = new jr(Ur);
var on = new wt(bt),
  Wi = on;
var et = new A((e) => e.complete());
function uc(e, t) {
  let r = w(e) ? e : () => e,
    o = (n) => n.error(r());
  return new A(t ? (n) => t.schedule(o, 0, n) : o);
}
function cc(e) {
  return !!e && (e instanceof A || (w(e.lift) && w(e.subscribe)));
}
var tt = pt(
  (e) =>
    function () {
      e(this),
        (this.name = 'EmptyError'),
        (this.message = 'no elements in sequence');
    },
);
function qi(e) {
  return e instanceof Date && !isNaN(e);
}
function zi(e, t, r, o, n, i, s, a) {
  let u = [],
    l = 0,
    c = 0,
    f = !1,
    h = () => {
      f && !u.length && !l && t.complete();
    },
    m = (y) => (l < o ? d(y) : u.push(y)),
    d = (y) => {
      i && t.next(y), l++;
      let b = !1;
      D(r(y, c++)).subscribe(
        I(
          t,
          (x) => {
            n?.(x), i ? m(x) : t.next(x);
          },
          () => {
            b = !0;
          },
          void 0,
          () => {
            if (b)
              try {
                for (l--; u.length && l < o; ) {
                  let x = u.shift();
                  s ? ae(t, s, () => d(x)) : d(x);
                }
                h();
              } catch (x) {
                t.error(x);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      I(t, m, () => {
        (f = !0), h();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function Q(e, t, r = 1 / 0) {
  return w(t)
    ? Q((o, n) => K((i, s) => t(o, i, n, s))(D(e(o, n))), r)
    : (typeof t == 'number' && (r = t), S((o, n) => zi(o, n, e, r)));
}
function rt(e = 1 / 0) {
  return Q(re, e);
}
function Hi() {
  return rt(1);
}
function Ot(...e) {
  return Hi()(ge(e, ve(e)));
}
function lc(e) {
  return new A((t) => {
    D(e()).subscribe(t);
  });
}
function fc(...e) {
  let t = kr(e),
    { args: r, keys: o } = Fr(e),
    n = new A((i) => {
      let { length: s } = r;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        l = s;
      for (let c = 0; c < s; c++) {
        let f = !1;
        D(r[c]).subscribe(
          I(
            i,
            (h) => {
              f || ((f = !0), l--), (a[c] = h);
            },
            () => u--,
            void 0,
            () => {
              (!u || !f) && (l || i.next(o ? Lr(o, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? n.pipe(vt(t)) : n;
}
var mc = ['addListener', 'removeListener'],
  pc = ['addEventListener', 'removeEventListener'],
  hc = ['on', 'off'];
function nn(e, t, r, o) {
  if ((w(r) && ((o = r), (r = void 0)), o)) return nn(e, t, r).pipe(vt(o));
  let [n, i] = gc(e)
    ? pc.map((s) => (a) => e[s](t, a, r))
    : dc(e)
      ? mc.map(Ki(e, t))
      : yc(e)
        ? hc.map(Ki(e, t))
        : [];
  if (!n && gt(e)) return Q((s) => nn(s, t, r))(D(e));
  if (!n) throw new TypeError('Invalid event target');
  return new A((s) => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return n(a), () => i(a);
  });
}
function Ki(e, t) {
  return (r) => (o) => e[r](t, o);
}
function dc(e) {
  return w(e.addListener) && w(e.removeListener);
}
function yc(e) {
  return w(e.on) && w(e.off);
}
function gc(e) {
  return w(e.addEventListener) && w(e.removeEventListener);
}
function Qi(e = 0, t, r = Wi) {
  let o = -1;
  return (
    t != null && (Nr(t) ? (r = t) : (o = t)),
    new A((n) => {
      let i = qi(e) ? +e - r.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return r.schedule(function () {
        n.closed ||
          (n.next(s++), 0 <= o ? this.schedule(void 0, o) : n.complete());
      }, i);
    })
  );
}
function sn(...e) {
  let t = ve(e),
    r = Pr(e, 1 / 0),
    o = e;
  return o.length ? (o.length === 1 ? D(o[0]) : rt(r)(ge(o, t))) : et;
}
var vc = new A(Me);
var { isArray: xc } = Array;
function Yi(e) {
  return e.length === 1 && xc(e[0]) ? e[0] : e;
}
function j(e, t) {
  return S((r, o) => {
    let n = 0;
    r.subscribe(I(o, (i) => e.call(t, i, n++) && o.next(i)));
  });
}
function Gi(e) {
  return S((t, r) => {
    let o = null,
      n = !1,
      i;
    (o = t.subscribe(
      I(r, void 0, void 0, (s) => {
        (i = D(e(s, Gi(e)(t)))),
          o ? (o.unsubscribe(), (o = null), i.subscribe(r)) : (n = !0);
      }),
    )),
      n && (o.unsubscribe(), (o = null), i.subscribe(r));
  });
}
function Ji(e, t, r, o, n) {
  return (i, s) => {
    let a = r,
      u = t,
      l = 0;
    i.subscribe(
      I(
        s,
        (c) => {
          let f = l++;
          (u = a ? e(u, c, f) : ((a = !0), c)), o && s.next(u);
        },
        n &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function bc(e, t) {
  return w(t) ? Q(e, t, 1) : Q(e, 1);
}
function Xi(e) {
  return new A((t) => e.subscribe(t));
}
var _c = { connector: () => new se() };
function Vr(e, t = _c) {
  let { connector: r } = t;
  return S((o, n) => {
    let i = r();
    D(e(Xi(i))).subscribe(n), n.add(o.subscribe(i));
  });
}
function Jt(e) {
  return S((t, r) => {
    let o = !1;
    t.subscribe(
      I(
        r,
        (n) => {
          (o = !0), r.next(n);
        },
        () => {
          o || r.next(e), r.complete();
        },
      ),
    );
  });
}
function Et(e) {
  return e <= 0
    ? () => et
    : S((t, r) => {
        let o = 0;
        t.subscribe(
          I(r, (n) => {
            ++o <= e && (r.next(n), e <= o && r.complete());
          }),
        );
      });
}
function Zi() {
  return S((e, t) => {
    e.subscribe(I(t, Me));
  });
}
function es(e) {
  return K(() => e);
}
function an(e, t) {
  return t
    ? (r) => Ot(t.pipe(Et(1), Zi()), r.pipe(an(e)))
    : Q((r, o) => D(e(r, o)).pipe(Et(1), es(r)));
}
function wc(e, t = on) {
  let r = Qi(e, t);
  return an(() => r);
}
function Wr(e = Oc) {
  return S((t, r) => {
    let o = !1;
    t.subscribe(
      I(
        r,
        (n) => {
          (o = !0), r.next(n);
        },
        () => (o ? r.complete() : r.error(e())),
      ),
    );
  });
}
function Oc() {
  return new tt();
}
function Ec(e) {
  return S((t, r) => {
    try {
      t.subscribe(r);
    } finally {
      r.add(e);
    }
  });
}
function Sc(e, t) {
  let r = arguments.length >= 2;
  return (o) =>
    o.pipe(
      e ? j((n, i) => e(n, i, o)) : re,
      Et(1),
      r ? Jt(t) : Wr(() => new tt()),
    );
}
function un(e) {
  return e <= 0
    ? () => et
    : S((t, r) => {
        let o = [];
        t.subscribe(
          I(
            r,
            (n) => {
              o.push(n), e < o.length && o.shift();
            },
            () => {
              for (let n of o) r.next(n);
              r.complete();
            },
            void 0,
            () => {
              o = null;
            },
          ),
        );
      });
}
function $c(e, t) {
  let r = arguments.length >= 2;
  return (o) =>
    o.pipe(
      e ? j((n, i) => e(n, i, o)) : re,
      un(1),
      r ? Jt(t) : Wr(() => new tt()),
    );
}
function ts(...e) {
  let t = ve(e),
    r = Pr(e, 1 / 0);
  return (
    (e = Yi(e)),
    S((o, n) => {
      rt(r)(ge([o, ...e], t)).subscribe(n);
    })
  );
}
function Ic(...e) {
  return ts(...e);
}
function rs(e, t) {
  let r = w(e) ? e : () => e;
  return w(t) ? Vr(t, { connector: r }) : (o) => new Qt(o, r);
}
function Ac(e) {
  return e ? (t) => Vr(e)(t) : (t) => rs(new se())(t);
}
function Cc(e, t) {
  return S(Ji(e, t, arguments.length >= 2, !0));
}
function Xt(...e) {
  let t = ve(e);
  return S((r, o) => {
    (t ? Ot(e, r, t) : Ot(e, r)).subscribe(o);
  });
}
function Rc(e, t, r) {
  let o = w(e) || t || r ? { next: e, error: t, complete: r } : e;
  return o
    ? S((n, i) => {
        var s;
        (s = o.subscribe) === null || s === void 0 || s.call(o);
        let a = !0;
        n.subscribe(
          I(
            i,
            (u) => {
              var l;
              (l = o.next) === null || l === void 0 || l.call(o, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = o.complete) === null || u === void 0 || u.call(o),
                i.complete();
            },
            (u) => {
              var l;
              (a = !1),
                (l = o.error) === null || l === void 0 || l.call(o, u),
                i.error(u);
            },
            () => {
              var u, l;
              a && ((u = o.unsubscribe) === null || u === void 0 || u.call(o)),
                (l = o.finalize) === null || l === void 0 || l.call(o);
            },
          ),
        );
      })
    : re;
}
function os(e) {
  return Array.isArray(e) ? e.slice(0) : [e];
}
function St(e) {
  return Array.isArray(e);
}
function ns(e) {
  return e != null;
}
function qr(e, t) {
  var r = 0,
    o = -1;
  for (var n of e) {
    o = o + 1;
    var i = t(n, o);
    if (i) r = r + 1;
    else break;
  }
  return r;
}
function ke(e, t) {
  var r = t.length;
  if (r !== 0) {
    var o = e.length;
    e.length = o + t.length;
    for (var n = 0; n < r; ++n) e[o + n] = t[n];
  }
}
function Yx(e) {
  return e.filter(function (t, r, o) {
    return o.indexOf(t) === r;
  });
}
var Jx = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0,
});
var Xx = Object.freeze(['prototype', '__proto__', 'constructor']);
var Tc = '[native code] }',
  Zx = Tc.length;
var Dc = Object.defineProperty,
  Mc = (e, t, r) =>
    t in e
      ? Dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  $t = (e, t, r) => (Mc(e, typeof t != 'symbol' ? t + '' : t, r), r),
  Ue = class e {
    constructor(t, r) {
      $t(this, 'words'),
        $t(this, 'sigBytes'),
        (t = this.words = t || []),
        (this.sigBytes = r === void 0 ? t.length * 4 : r);
    }
    toString(t) {
      return (t || Nc).stringify(this);
    }
    concat(t) {
      if ((this.clamp(), this.sigBytes % 4))
        for (let r = 0; r < t.sigBytes; r++) {
          let o = (t.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
          this.words[(this.sigBytes + r) >>> 2] |=
            o << (24 - ((this.sigBytes + r) % 4) * 8);
        }
      else
        for (let r = 0; r < t.sigBytes; r += 4)
          this.words[(this.sigBytes + r) >>> 2] = t.words[r >>> 2];
      return (this.sigBytes += t.sigBytes), this;
    }
    clamp() {
      (this.words[this.sigBytes >>> 2] &=
        4294967295 << (32 - (this.sigBytes % 4) * 8)),
        (this.words.length = Math.ceil(this.sigBytes / 4));
    }
    clone() {
      return new e([...this.words]);
    }
  },
  Nc = {
    stringify(e) {
      let t = [];
      for (let r = 0; r < e.sigBytes; r++) {
        let o = (e.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
        t.push((o >>> 4).toString(16), (o & 15).toString(16));
      }
      return t.join('');
    },
  };
var kc = {
    parse(e) {
      let t = e.length,
        r = [];
      for (let o = 0; o < t; o++)
        r[o >>> 2] |= (e.charCodeAt(o) & 255) << (24 - (o % 4) * 8);
      return new Ue(r, t);
    },
  },
  Pc = {
    parse(e) {
      return kc.parse(unescape(encodeURIComponent(e)));
    },
  },
  cn = class {
    constructor() {
      $t(this, '_data', new Ue()),
        $t(this, '_nDataBytes', 0),
        $t(this, '_minBufferSize', 0),
        $t(this, 'blockSize', 512 / 32);
    }
    reset() {
      (this._data = new Ue()), (this._nDataBytes = 0);
    }
    _append(t) {
      typeof t == 'string' && (t = Pc.parse(t)),
        this._data.concat(t),
        (this._nDataBytes += t.sigBytes);
    }
    _doProcessBlock(t, r) {}
    _process(t) {
      let r,
        o = this._data.sigBytes / (this.blockSize * 4);
      t ? (o = Math.ceil(o)) : (o = Math.max((o | 0) - this._minBufferSize, 0));
      let n = o * this.blockSize,
        i = Math.min(n * 4, this._data.sigBytes);
      if (n) {
        for (let s = 0; s < n; s += this.blockSize)
          this._doProcessBlock(this._data.words, s);
        (r = this._data.words.splice(0, n)), (this._data.sigBytes -= i);
      }
      return new Ue(r, i);
    }
  },
  ln = class extends cn {
    update(t) {
      return this._append(t), this._process(), this;
    }
    finalize(t) {
      t && this._append(t);
    }
  },
  Fc = Object.defineProperty,
  Lc = (e, t, r) =>
    t in e
      ? Fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Bc = (e, t, r) => (Lc(e, typeof t != 'symbol' ? t + '' : t, r), r),
  is = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  Uc = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  ot = [],
  fn = class extends ln {
    constructor() {
      super(...arguments), Bc(this, '_hash', new Ue([...is]));
    }
    reset() {
      super.reset(), (this._hash = new Ue([...is]));
    }
    _doProcessBlock(t, r) {
      let o = this._hash.words,
        n = o[0],
        i = o[1],
        s = o[2],
        a = o[3],
        u = o[4],
        l = o[5],
        c = o[6],
        f = o[7];
      for (let h = 0; h < 64; h++) {
        if (h < 16) ot[h] = t[r + h] | 0;
        else {
          let $ = ot[h - 15],
            Z = (($ << 25) | ($ >>> 7)) ^ (($ << 14) | ($ >>> 18)) ^ ($ >>> 3),
            N = ot[h - 2],
            z =
              ((N << 15) | (N >>> 17)) ^ ((N << 13) | (N >>> 19)) ^ (N >>> 10);
          ot[h] = Z + ot[h - 7] + z + ot[h - 16];
        }
        let m = (u & l) ^ (~u & c),
          d = (n & i) ^ (n & s) ^ (i & s),
          y =
            ((n << 30) | (n >>> 2)) ^
            ((n << 19) | (n >>> 13)) ^
            ((n << 10) | (n >>> 22)),
          b =
            ((u << 26) | (u >>> 6)) ^
            ((u << 21) | (u >>> 11)) ^
            ((u << 7) | (u >>> 25)),
          x = f + b + m + Uc[h] + ot[h],
          O = y + d;
        (f = c),
          (c = l),
          (l = u),
          (u = (a + x) | 0),
          (a = s),
          (s = i),
          (i = n),
          (n = (x + O) | 0);
      }
      (o[0] = (o[0] + n) | 0),
        (o[1] = (o[1] + i) | 0),
        (o[2] = (o[2] + s) | 0),
        (o[3] = (o[3] + a) | 0),
        (o[4] = (o[4] + u) | 0),
        (o[5] = (o[5] + l) | 0),
        (o[6] = (o[6] + c) | 0),
        (o[7] = (o[7] + f) | 0);
    }
    finalize(t) {
      super.finalize(t);
      let r = this._nDataBytes * 8,
        o = this._data.sigBytes * 8;
      return (
        (this._data.words[o >>> 5] |= 128 << (24 - (o % 32))),
        (this._data.words[(((o + 64) >>> 9) << 4) + 14] = Math.floor(
          r / 4294967296,
        )),
        (this._data.words[(((o + 64) >>> 9) << 4) + 15] = r),
        (this._data.sigBytes = this._data.words.length * 4),
        this._process(),
        this._hash
      );
    }
  };
function ss(e) {
  return new fn().finalize(e).toString();
}
function jc(e) {
  return Promise.resolve(ss(e));
}
async function Vc(e) {
  var t = new TextEncoder().encode(e),
    r = await crypto.subtle.digest('SHA-256', t),
    o = Array.prototype.map
      .call(new Uint8Array(r), (n) => ('00' + n.toString(16)).slice(-2))
      .join('');
  return o;
}
var Wc =
    typeof crypto < 'u' &&
    typeof crypto.subtle < 'u' &&
    typeof crypto.subtle.digest == 'function',
  as = Wc ? Vc : jc;
var us = 'abcdefghijklmnopqrstuvwxyz';
function nt(e = 10) {
  for (var t = '', r = 0; r < e; r++)
    t += us.charAt(Math.floor(Math.random() * us.length));
  return t;
}
function zr(e) {
  e += '';
  var t = e.charAt(0).toUpperCase();
  return t + e.substr(1);
}
function it(e) {
  for (; e.charAt(0) === '.'; ) e = e.substr(1);
  for (; e.slice(-1) === '.'; ) e = e.slice(0, -1);
  return e;
}
function nb(e) {
  return !!(e.includes('/') || e.includes('\\'));
}
function It(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var r, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (o = r; o-- !== 0; ) if (!It(e[o], t[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    var n = Object.keys(e);
    if (((r = n.length), r !== Object.keys(t).length)) return !1;
    for (o = r; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
    for (o = r; o-- !== 0; ) {
      var i = n[o];
      if (!It(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
var pn = (e) => {
    var t = typeof e;
    return e !== null && (t === 'object' || t === 'function');
  },
  mn = new Set(['__proto__', 'prototype', 'constructor']),
  qc = new Set('0123456789');
function cs(e) {
  var t = [],
    r = '',
    o = 'start',
    n = !1;
  for (var i of e)
    switch (i) {
      case '\\': {
        if (o === 'index') throw new Error('Invalid character in an index');
        if (o === 'indexEnd')
          throw new Error('Invalid character after an index');
        n && (r += i), (o = 'property'), (n = !n);
        break;
      }
      case '.': {
        if (o === 'index') throw new Error('Invalid character in an index');
        if (o === 'indexEnd') {
          o = 'property';
          break;
        }
        if (n) {
          (n = !1), (r += i);
          break;
        }
        if (mn.has(r)) return [];
        t.push(r), (r = ''), (o = 'property');
        break;
      }
      case '[': {
        if (o === 'index') throw new Error('Invalid character in an index');
        if (o === 'indexEnd') {
          o = 'index';
          break;
        }
        if (n) {
          (n = !1), (r += i);
          break;
        }
        if (o === 'property') {
          if (mn.has(r)) return [];
          t.push(r), (r = '');
        }
        o = 'index';
        break;
      }
      case ']': {
        if (o === 'index') {
          t.push(Number.parseInt(r, 10)), (r = ''), (o = 'indexEnd');
          break;
        }
        if (o === 'indexEnd')
          throw new Error('Invalid character after an index');
      }
      default: {
        if (o === 'index' && !qc.has(i))
          throw new Error('Invalid character in an index');
        if (o === 'indexEnd')
          throw new Error('Invalid character after an index');
        o === 'start' && (o = 'property'),
          n && ((n = !1), (r += '\\')),
          (r += i);
      }
    }
  switch ((n && (r += '\\'), o)) {
    case 'property': {
      if (mn.has(r)) return [];
      t.push(r);
      break;
    }
    case 'index':
      throw new Error('Index was not closed');
    case 'start': {
      t.push('');
      break;
    }
  }
  return t;
}
function ls(e, t) {
  if (typeof t != 'number' && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    return Number.isInteger(r) && e[r] === e[t];
  }
  return !1;
}
function zc(e, t) {
  if (ls(e, t)) throw new Error('Cannot use string index');
}
function At(e, t, r) {
  if (
    (Array.isArray(t) && (t = t.join('.')),
    !t.includes('.') && !t.includes('['))
  )
    return e[t];
  if (!pn(e) || typeof t != 'string') return r === void 0 ? e : r;
  var o = cs(t);
  if (o.length === 0) return r;
  for (var n = 0; n < o.length; n++) {
    var i = o[n];
    if (
      (ls(e, i) ? (e = n === o.length - 1 ? void 0 : null) : (e = e[i]),
      e == null)
    ) {
      if (n !== o.length - 1) return r;
      break;
    }
  }
  return e === void 0 ? r : e;
}
function ab(e, t, r) {
  if ((Array.isArray(t) && (t = t.join('.')), !pn(e) || typeof t != 'string'))
    return e;
  for (var o = e, n = cs(t), i = 0; i < n.length; i++) {
    var s = n[i];
    zc(e, s),
      i === n.length - 1
        ? (e[s] = r)
        : pn(e[s]) || (e[s] = typeof n[i + 1] == 'number' ? [] : {}),
      (e = e[s]);
  }
  return o;
}
var hn = '15.39.0';
var lb = {},
  fb = '6da4936d1425ff3a5c44c02342c6daf791d266be3ae8479b8ec59e261df41b93';
function st(e) {
  for (var t = '', r = 0; r < e.length; r++) {
    var o = e[r];
    if (o === '-') return parseInt(t, 10);
    t += o;
  }
  throw new Error('malformatted revision: ' + e);
}
function Ct(e, t) {
  var r = t ? st(t._rev) + 1 : 1;
  return r + '-' + e;
}
var Hr = 1;
function je() {
  return { lwt: Hr };
}
function Pe() {
  return '';
}
function fs(e) {
  return Object.assign({}, e, {
    _meta: void 0,
    _deleted: void 0,
    _rev: void 0,
  });
}
function ms(e, t, r) {
  if (t.length !== r.length) return !1;
  for (var o = 0, n = t.length; o < n; ) {
    var i = t[o],
      s = r[o];
    if ((o++, i._rev !== s._rev || i[e] !== s[e])) return !1;
  }
  return !0;
}
function ps() {
  return new Promise((e) => setTimeout(e, 0));
}
function hs(e = 0) {
  return new Promise((t) => setTimeout(t, e));
}
var Hc = Promise.resolve(!0),
  Ae = Promise.resolve(!1),
  ds = Promise.resolve(null),
  Rt = Promise.resolve();
function Tt(e = 1e4) {
  return typeof requestIdleCallback == 'function'
    ? new Promise((t) => {
        requestIdleCallback(() => t(), { timeout: e });
      })
    : hs(0);
}
var dn = Rt;
function ys(e = void 0) {
  return (dn = dn.then(() => Tt(e))), dn;
}
function gs(e, t) {
  return e.reduce((r, o) => r.then(o), Promise.resolve(t));
}
var vs = /\./g;
function Ve(e, t) {
  var r = e.get(t);
  if (typeof r > 'u') throw new Error('missing value from map ' + t);
  return r;
}
function Oe(e, t, r, o) {
  var n = e.get(t);
  return typeof n > 'u' ? ((n = r()), e.set(t, n)) : o && o(n), n;
}
function M(e) {
  var t = e.split('-'),
    r = 'RxDB';
  return (
    t.forEach((o) => {
      r += zr(o);
    }),
    (r += 'Plugin'),
    new Error(
      `You are using a function which must be overwritten by a plugin.
        You should either prevent the usage of this function or add the plugin via:
            import { ` +
        r +
        " } from 'rxdb/plugins/" +
        e +
        `';
            addRxPlugin(` +
        r +
        `);
        `,
    )
  );
}
var yn = 0;
function oe() {
  var e = Date.now();
  (e = e + 0.01), e <= yn && (e = yn + 0.01);
  var t = parseFloat(e.toFixed(2));
  return (yn = t), t;
}
function F(e, t) {
  if (!e) throw (t || (t = ''), new Error('ensureNotFalsy() is falsy: ' + t));
  return e;
}
var Kr = { bufferSize: 1, refCount: !0 };
function at(e, t) {
  var r = t;
  (r = r.replace(vs, '.properties.')), (r = 'properties.' + r), (r = it(r));
  var o = At(e, r);
  return o;
}
function xs(e, t, r) {
  if (typeof t.primaryKey == 'string') return r;
  var o = Zt(t, r),
    n = r[e];
  if (n && n !== o)
    throw _('DOC19', {
      args: { documentData: r, existingPrimary: n, newPrimary: o },
      schema: t,
    });
  return (r[e] = o), r;
}
function We(e) {
  return typeof e == 'string' ? e : e.key;
}
function Zt(e, t) {
  if (typeof e.primaryKey == 'string') return t[e.primaryKey];
  var r = e.primaryKey;
  return r.fields
    .map((o) => {
      var n = At(t, o);
      if (typeof n > 'u')
        throw _('DOC18', { args: { field: o, documentData: t } });
      return n;
    })
    .join(r.separator);
}
function bs(e) {
  var t = mt(e, !0);
  return t;
}
function Kc(e) {
  return ['_deleted', e];
}
function Qr(e) {
  e = q(e);
  var t = We(e.primaryKey);
  (e.properties = q(e.properties)),
    (e.additionalProperties = !1),
    Object.prototype.hasOwnProperty.call(e, 'keyCompression') ||
      (e.keyCompression = !1),
    (e.indexes = e.indexes ? e.indexes.slice(0) : []),
    (e.required = e.required ? e.required.slice(0) : []),
    (e.encrypted = e.encrypted ? e.encrypted.slice(0) : []),
    (e.properties._rev = { type: 'string', minLength: 1 }),
    (e.properties._attachments = { type: 'object' }),
    (e.properties._deleted = { type: 'boolean' }),
    (e.properties._meta = Qc),
    (e.required = e.required ? e.required.slice(0) : []),
    e.required.push('_deleted'),
    e.required.push('_rev'),
    e.required.push('_meta'),
    e.required.push('_attachments');
  var r = gn(e);
  ke(e.required, r),
    (e.required = e.required
      .filter((i) => !i.includes('.'))
      .filter((i, s, a) => a.indexOf(i) === s)),
    (e.version = e.version || 0);
  var o = e.indexes.map((i) => {
    var s = St(i) ? i.slice(0) : [i];
    return (
      s.includes(t) || s.push(t),
      s[0] !== '_deleted' && s.unshift('_deleted'),
      s
    );
  });
  o.length === 0 && o.push(Kc(t)),
    o.push(['_meta.lwt', t]),
    e.internalIndexes &&
      e.internalIndexes.map((i) => {
        o.push(i);
      });
  var n = new Set();
  return (
    o.filter((i) => {
      var s = i.join(',');
      return n.has(s) ? !1 : (n.add(s), !0);
    }),
    (e.indexes = o),
    e
  );
}
var Qc = {
  type: 'object',
  properties: {
    lwt: { type: 'number', minimum: Hr, maximum: 1e15, multipleOf: 0.01 },
  },
  additionalProperties: !0,
  required: ['lwt'],
};
function gn(e) {
  var t = Object.keys(e.properties).filter((o) => e.properties[o].final),
    r = We(e.primaryKey);
  return (
    t.push(r),
    typeof e.primaryKey != 'string' &&
      e.primaryKey.fields.forEach((o) => t.push(o)),
    t
  );
}
function _s(e, t) {
  for (var r = Object.keys(e.defaultValues), o = 0; o < r.length; ++o) {
    var n = r[o];
    (!Object.prototype.hasOwnProperty.call(t, n) || typeof t[n] > 'u') &&
      (t[n] = e.defaultValues[n]);
  }
  return t;
}
var vn = {
  preAddRxPlugin: [],
  preCreateRxDatabase: [],
  createRxDatabase: [],
  preCreateRxCollection: [],
  createRxCollection: [],
  createRxState: [],
  postDestroyRxCollection: [],
  postRemoveRxCollection: [],
  preCreateRxSchema: [],
  createRxSchema: [],
  preCreateRxQuery: [],
  prePrepareQuery: [],
  createRxDocument: [],
  postCreateRxDocument: [],
  preCreateRxStorageInstance: [],
  preStorageWrite: [],
  preMigrateDocument: [],
  postMigrateDocument: [],
  preDestroyRxDatabase: [],
  postRemoveRxDatabase: [],
  postCleanup: [],
  preReplicationMasterWrite: [],
  preReplicationMasterWriteDocumentsHandle: [],
};
function Y(e, t) {
  vn[e].length > 0 && vn[e].forEach((r) => r(t));
}
function qe(e, t) {
  return Promise.all(vn[e].map((r) => r(t)));
}
var Yc = (function () {
  function e(r, o) {
    (this.jsonSchema = r),
      (this.hashFunction = o),
      (this.indexes = Gc(this.jsonSchema)),
      (this.primaryPath = We(this.jsonSchema.primaryKey)),
      (this.finalFields = gn(this.jsonSchema));
  }
  var t = e.prototype;
  return (
    (t.validateChange = function (o, n) {
      this.finalFields.forEach((i) => {
        if (!It(o[i], n[i]))
          throw _('DOC9', {
            dataBefore: o,
            dataAfter: n,
            fieldName: i,
            schema: this.jsonSchema,
          });
      });
    }),
    (t.getDocumentPrototype = function () {
      var o = {},
        n = at(this.jsonSchema, '');
      return (
        Object.keys(n).forEach((i) => {
          var s = i;
          o.__defineGetter__(i, function () {
            if (!(!this.get || typeof this.get != 'function')) {
              var a = this.get(s);
              return a;
            }
          }),
            Object.defineProperty(o, i + '$', {
              get: function () {
                return this.get$(s);
              },
              enumerable: !1,
              configurable: !1,
            }),
            Object.defineProperty(o, i + '$$', {
              get: function () {
                return this.get$$(s);
              },
              enumerable: !1,
              configurable: !1,
            }),
            Object.defineProperty(o, i + '_', {
              get: function () {
                return this.populate(s);
              },
              enumerable: !1,
              configurable: !1,
            });
        }),
        fe(this, 'getDocumentPrototype', () => o),
        o
      );
    }),
    (t.getPrimaryOfDocumentData = function (o) {
      return Zt(this.jsonSchema, o);
    }),
    te(e, [
      {
        key: 'version',
        get: function () {
          return this.jsonSchema.version;
        },
      },
      {
        key: 'defaultValues',
        get: function () {
          var r = {};
          return (
            Object.entries(this.jsonSchema.properties)
              .filter(([, o]) =>
                Object.prototype.hasOwnProperty.call(o, 'default'),
              )
              .forEach(([o, n]) => (r[o] = n.default)),
            fe(this, 'defaultValues', r)
          );
        },
      },
      {
        key: 'hash',
        get: function () {
          return fe(
            this,
            'hash',
            this.hashFunction(JSON.stringify(this.jsonSchema)),
          );
        },
      },
    ])
  );
})();
function Gc(e) {
  return (e.indexes || []).map((t) => (St(t) ? t : [t]));
}
function Db(e) {
  var t = e.version ? e.version : 0,
    r = 0;
  return new Array(t).fill(0).map(() => r++);
}
function ws(e, t, r = !0) {
  r && Y('preCreateRxSchema', e);
  var o = Qr(e);
  (o = bs(o)), L.deepFreezeWhenDevMode(o);
  var n = new Yc(o, t);
  return Y('createRxSchema', n), n;
}
function Yr(e) {
  return e[e.length - 1];
}
function Jc(e) {
  let t = typeof e;
  return e !== null && (t === 'object' || t === 'function');
}
function xn(e, t, r) {
  if ((Array.isArray(t) && (t = t.join('.')), !Jc(e) || typeof t != 'string'))
    return r === void 0 ? e : r;
  let o = t.split('.');
  if (o.length === 0) return r;
  for (let n = 0; n < o.length; n++) {
    let i = o[n];
    if (
      (Xc(e, i) ? (e = n === o.length - 1 ? void 0 : null) : (e = e[i]),
      e == null)
    ) {
      if (n !== o.length - 1) return r;
      break;
    }
  }
  return e === void 0 ? r : e;
}
function Xc(e, t) {
  if (typeof t != 'number' && Array.isArray(e)) {
    let r = Number.parseInt(t, 10);
    return Number.isInteger(r) && e[r] === e[t];
  }
  return !1;
}
var bn = (e) => !!e.queryParams.limit,
  Os = (e) => e.queryParams.limit === 1,
  Es = (e) => !!(e.queryParams.skip && e.queryParams.skip > 0),
  Ss = (e) => e.changeEvent.operation === 'DELETE',
  $s = (e) => e.changeEvent.operation === 'INSERT',
  Is = (e) => e.changeEvent.operation === 'UPDATE',
  As = (e) => bn(e) && e.previousResults.length >= e.queryParams.limit,
  Cs = (e) => {
    let t = e.queryParams.sortFields,
      r = e.changeEvent.previous,
      o = e.changeEvent.doc;
    if (!o) return !1;
    if (!r) return !0;
    for (let n = 0; n < t.length; n++) {
      let i = t[n],
        s = xn(r, i),
        a = xn(o, i);
      if (s !== a) return !0;
    }
    return !1;
  },
  Rs = (e) => {
    let t = e.changeEvent.id;
    if (e.keyDocumentMap) return e.keyDocumentMap.has(t);
    {
      let r = e.queryParams.primaryKey,
        o = e.previousResults;
      for (let n = 0; n < o.length; n++) if (o[n][r] === t) return !0;
      return !1;
    }
  },
  Ts = (e) => {
    let t = e.previousResults[0];
    return !!(t && t[e.queryParams.primaryKey] === e.changeEvent.id);
  },
  Ds = (e) => {
    let t = Yr(e.previousResults);
    return !!(t && t[e.queryParams.primaryKey] === e.changeEvent.id);
  },
  Ms = (e) => {
    let t = e.changeEvent.previous;
    if (!t) return !1;
    let r = e.previousResults[0];
    return r
      ? r[e.queryParams.primaryKey] === e.changeEvent.id
        ? !0
        : e.queryParams.sortComparator(t, r) < 0
      : !1;
  },
  Ns = (e) => {
    let t = e.changeEvent.previous;
    if (!t) return !1;
    let r = Yr(e.previousResults);
    return r
      ? r[e.queryParams.primaryKey] === e.changeEvent.id
        ? !0
        : e.queryParams.sortComparator(t, r) > 0
      : !1;
  },
  ks = (e) => {
    let t = e.changeEvent.doc;
    if (!t) return !1;
    let r = e.previousResults[0];
    return r
      ? r[e.queryParams.primaryKey] === e.changeEvent.id
        ? !0
        : e.queryParams.sortComparator(t, r) < 0
      : !1;
  },
  Ps = (e) => {
    let t = e.changeEvent.doc;
    if (!t) return !1;
    let r = Yr(e.previousResults);
    return r
      ? r[e.queryParams.primaryKey] === e.changeEvent.id
        ? !0
        : e.queryParams.sortComparator(t, r) > 0
      : !1;
  },
  Fs = (e) => {
    let t = e.changeEvent.previous;
    return t ? e.queryParams.queryMatcher(t) : !1;
  },
  Ls = (e) => {
    let t = e.changeEvent.doc;
    return t ? e.queryParams.queryMatcher(t) : !1;
  },
  Bs = (e) => e.previousResults.length === 0;
var Us = {
  0: $s,
  1: Is,
  2: Ss,
  3: bn,
  4: Os,
  5: Es,
  6: Bs,
  7: As,
  8: Ts,
  9: Ds,
  10: Cs,
  11: Rs,
  12: Ms,
  13: Ns,
  14: ks,
  15: Ps,
  16: Fs,
  17: Ls,
};
function js(e, t, r, o) {
  var n = e.length,
    i = n - 1,
    s = 0;
  if (n === 0) return e.push(t), 0;
  for (var a; o <= i; )
    (s = o + ((i - o) >> 1)),
      (a = e[s]),
      r(a, t) <= 0 ? (o = s + 1) : (i = s - 1);
  return r(a, t) <= 0 && s++, e.splice(s, 0, t), s;
}
var Vs = (e) => {},
  Gr = (e) => {
    e.previousResults.unshift(e.changeEvent.doc),
      e.keyDocumentMap &&
        e.keyDocumentMap.set(e.changeEvent.id, e.changeEvent.doc);
  },
  Jr = (e) => {
    e.previousResults.push(e.changeEvent.doc),
      e.keyDocumentMap &&
        e.keyDocumentMap.set(e.changeEvent.id, e.changeEvent.doc);
  },
  Xr = (e) => {
    let t = e.previousResults.shift();
    e.keyDocumentMap &&
      t &&
      e.keyDocumentMap.delete(t[e.queryParams.primaryKey]);
  },
  Zr = (e) => {
    let t = e.previousResults.pop();
    e.keyDocumentMap &&
      t &&
      e.keyDocumentMap.delete(t[e.queryParams.primaryKey]);
  },
  Ws = (e) => {
    Xr(e), Jr(e);
  },
  qs = (e) => {
    Zr(e), Gr(e);
  },
  zs = (e) => {
    Xr(e), Gr(e);
  },
  Hs = (e) => {
    Zr(e), Jr(e);
  },
  _n = (e) => {
    e.keyDocumentMap && e.keyDocumentMap.delete(e.changeEvent.id);
    let t = e.queryParams.primaryKey,
      r = e.previousResults;
    for (let o = 0; o < r.length; o++)
      if (r[o][t] === e.changeEvent.id) {
        r.splice(o, 1);
        break;
      }
  },
  Ks = (e) => {
    let t = e.changeEvent.doc,
      r = e.queryParams.primaryKey,
      o = e.previousResults;
    for (let n = 0; n < o.length; n++)
      if (o[n][r] === e.changeEvent.id) {
        (o[n] = t),
          e.keyDocumentMap && e.keyDocumentMap.set(e.changeEvent.id, t);
        break;
      }
  },
  Qs = (e) => {
    let t = { _id: 'wrongHuman' + new Date().getTime() };
    (e.previousResults.length = 0),
      e.previousResults.push(t),
      e.keyDocumentMap &&
        (e.keyDocumentMap.clear(), e.keyDocumentMap.set(t._id, t));
  },
  wn = (e) => {
    let t = e.changeEvent.id,
      r = e.changeEvent.doc;
    if (e.keyDocumentMap) {
      if (e.keyDocumentMap.has(t)) return;
      e.keyDocumentMap.set(t, r);
    } else if (e.previousResults.find((n) => n[e.queryParams.primaryKey] === t))
      return;
    js(e.previousResults, r, e.queryParams.sortComparator, 0);
  },
  Ys = (e) => {
    _n(e), wn(e);
  },
  Gs = (e) => {
    throw new Error('Action runFullQueryAgain must be implemented by yourself');
  },
  Js = (e) => {
    throw new Error('Action unknownAction should never be called');
  };
var Xs = [
    'doNothing',
    'insertFirst',
    'insertLast',
    'removeFirstItem',
    'removeLastItem',
    'removeFirstInsertLast',
    'removeLastInsertFirst',
    'removeFirstInsertFirst',
    'removeLastInsertLast',
    'removeExisting',
    'replaceExisting',
    'alwaysWrong',
    'insertAtSortPosition',
    'removeExistingAndInsertAtSortPosition',
    'runFullQueryAgain',
    'unknownAction',
  ],
  Zs = {
    doNothing: Vs,
    insertFirst: Gr,
    insertLast: Jr,
    removeFirstItem: Xr,
    removeLastItem: Zr,
    removeFirstInsertLast: Ws,
    removeLastInsertFirst: qs,
    removeFirstInsertFirst: zs,
    removeLastInsertLast: Hs,
    removeExisting: _n,
    replaceExisting: Ks,
    alwaysWrong: Qs,
    insertAtSortPosition: wn,
    removeExistingAndInsertAtSortPosition: Ys,
    runFullQueryAgain: Gs,
    unknownAction: Js,
  };
function eo(e) {
  return e.charCodeAt(0) - 40;
}
function ea(e) {
  return e ? '1' : '0';
}
function Zc(e = 6) {
  let t = '',
    r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    o = r.length;
  for (let n = 0; n < e; n++) t += r.charAt(Math.floor(Math.random() * o));
  return t;
}
var Kb = Zc(4);
function On(e, t) {
  let r = [];
  for (let o = 0, n = e.length; o < n; o += t) r.push(e.substring(o, o + t));
  return r;
}
function ta(e) {
  let t = new Map(),
    o = 2 + parseInt(e.charAt(0) + e.charAt(1), 10) * 2,
    n = e.substring(2, o),
    i = On(n, 2);
  for (let y = 0; y < i.length; y++) {
    let b = i[y],
      x = b.charAt(0),
      O = eo(b.charAt(1));
    t.set(x, O);
  }
  let s = e.substring(o, e.length - 3),
    a = On(s, 4);
  for (let y = 0; y < a.length; y++) {
    let b = a[y],
      x = b.charAt(0),
      O = b.charAt(1),
      $ = b.charAt(2),
      Z = eo(b.charAt(3));
    if (!t.has(O)) throw new Error('missing node with id ' + O);
    if (!t.has($)) throw new Error('missing node with id ' + $);
    let N = t.get(O),
      z = t.get($),
      P = { l: Z, 0: N, 1: z };
    t.set(x, P);
  }
  let u = e.slice(-3),
    l = u.charAt(0),
    c = u.charAt(1),
    f = eo(u.charAt(2)),
    h = t.get(l),
    m = t.get(c);
  return { l: f, 0: h, 1: m };
}
function ra(e, t, r) {
  let o = e,
    n = e.l;
  for (;;) {
    let i = t[n](r),
      s = ea(i);
    if (((o = o[s]), typeof o == 'number' || typeof o == 'string')) return o;
    n = o.l;
  }
}
var el =
    '14a1b,c+d2e5f0g/h.i4j*k-l)m(n6oeh6pnm6qen6ril6snh6tin6ubo9vce9wmh9xns9yne9zmi9{cm9|ad9}cp9~aq9\x7Fae9\xA1bf9\xA2bq9\xA3cg9\xA4ck9\xA5cn9\xA6nd9\xA7np9\xA8nq9\xA9nf9\xAAng9\xABnm9\xACnk9\xADmr9\xAEms9\xAFmt9\xB0mj9\xB1mk9\xB2ml9\xB3mn9\xB4mc8\xB5\xB3{8\xB6\xAF}8\xB7\xB0\xA48\xB8\xB3\xA78\xB9mn8\xBA\xB3\xAB8\xBB\xB3m8\xBCm\xB44\xBDz\xB24\xBE\xB3w4\xBFz\xB54\xC0\xAF\xB64\xC1\xB0\xB74\xC2\xB3\xBA4\xC3\xB3\xB84\xC4m\xB94\xC5v\xA47\xC6yn7\xC7\xC0\xC17\xC8~\x7F7\xC9\xA5\xA47\xCA\xC3\xC47\xCB\xA8n7\xCC\xBA\xB97\xCD\xAD\xB07\xCE\xAEm7\xCF\xAF\xB07\xD0\xB1m7\xD1\xB3m7\xD2\xBCm5\xD3\xC4m5\xD4\xB9m5\xD5\xBD\xB05\xD6\xBEm5\xD7\xBF\xB05\xD8\xC7\xCF5\xD9\xC2m5\xDA\xCA\xD15\xDB\xB1m5\xDC\xBAm5\xDD\xCC\xD15\xDE\xD5\xCD2\xDF|\x7F2\xE0\xA1u2\xE1\xA3\xC52\xE2\xD6\xCE2\xE3\xA6\xC62\xE4\xA9x2\xE5\xAA\xC62\xE6\xD7\xD82\xE7|\xC82\xE8\xA1\xA22\xE9\xA3\xC92\xEA\xA4\xA52\xEB\xD9\xDA2\xEC\xA6\xCB2\xED\xA9n2\xEE\xAAn2\xEF\xDB\xD02\xF0\xDC\xDD2\xF1\xACn2\xF2\xD2\xD3/\xF3an/\xF4bn/\xF5cn/\xF6\xDE\xE2/\xF7\xDF\xE3/\xF8\xE0\xE4/\xF9\xE1\xE5/\xFA\xE6\xEB/\xFB\xE7\xEC/\xFC\xE8\xED/\xFD\xE9\xEE/\xFE\xCD\xCE/\xFF\xCF\xD1/\u0100\xF2\xD4,\u0101cn,\u0102\xF6\xEF,\u0103\xA4\xF1,\u0104\xFA\xF0,\u0105\xEA\xF1,\u0106\xFE\xD0,\u0107\xFF\xD1,\u0108ac0\u0109bc0\u010A\xF3\xF50\u010B\xF4\u01010\u010C\xDF\xE10\u010D\xE0\xA40\u010E\xE7\xE90\u010F\xE8\xEA0\u0110\xF7\xF90\u0111\xF8\u01030\u0112\xFB\xFD0\u0113\xFC\u01050\u0114m\xD2-\u0115m\u0100-\u0116\xDE\xE6-\u0117\u010C\u010E-\u0118\u010D\u010F-\u0119\u0102\u0104-\u011A\u0110\u0112-\u011B\u0111\u0113-\u011C\xB2\xBB-\u011D\xCD\xCF-\u011E\u0106\u0107-\u011F\xB2\xB3-\u0120\u0114\u01083\u0121\u0115\u010A3\u0122\u0116\u01173\u0123\u0119\u011A3\u0124\u0122\u011D(\u0125\u011C\u011F(\u0126\u0123\u011E(\u0127\u0120\u0121+\u0128\u0109\u010B+\u0129\u0124\u0126+\u012A\u0118\u011B+\u012B\u0127\u01281\u012C\u0129\u012A1\u012D\u012C\u012B*\u012E\u0125m*\u012D\u012E.',
  En;
function tl() {
  return En || (En = ta(el)), En;
}
var oa = (e) => ra(tl(), Us, e);
function na(e) {
  let t = oa(e);
  return Xs[t];
}
function ia(e, t, r, o, n) {
  let i = Zs[e];
  return (
    i({
      queryParams: t,
      changeEvent: r,
      previousResults: o,
      keyDocumentMap: n,
    }),
    o
  );
}
function sa(e) {
  return e.documentData ? e.documentData : e.previousDocumentData;
}
function aa(e) {
  switch (e.operation) {
    case 'INSERT':
      return {
        operation: e.operation,
        id: e.documentId,
        doc: e.documentData,
        previous: null,
      };
    case 'UPDATE':
      return {
        operation: e.operation,
        id: e.documentId,
        doc: L.deepFreezeWhenDevMode(e.documentData),
        previous: e.previousDocumentData ? e.previousDocumentData : 'UNKNOWN',
      };
    case 'DELETE':
      return {
        operation: e.operation,
        id: e.documentId,
        doc: null,
        previous: e.previousDocumentData,
      };
  }
}
var er = '\uFFFF',
  tr = Number.MIN_SAFE_INTEGER;
function ua(e, t) {
  var r = t.selector,
    o = e.indexes ? e.indexes.slice(0) : [];
  t.index && (o = [t.index]);
  var n = !!t.sort.find((c) => Object.values(c)[0] === 'desc'),
    i = new Set();
  Object.keys(r).forEach((c) => {
    var f = at(e, c);
    f &&
      f.type === 'boolean' &&
      Object.prototype.hasOwnProperty.call(r[c], '$eq') &&
      i.add(c);
  });
  var s = t.sort.map((c) => Object.keys(c)[0]),
    a = s.filter((c) => !i.has(c)).join(','),
    u = -1,
    l;
  if (
    (o.forEach((c) => {
      var f = !0,
        h = !0,
        m = c.map((O) => {
          var $ = r[O],
            Z = $ ? Object.keys($) : [],
            N = {};
          if (!$ || !Z.length) {
            var z = h ? tr : er;
            N = {
              startKey: z,
              endKey: f ? er : tr,
              inclusiveStart: !0,
              inclusiveEnd: !0,
            };
          } else
            Z.forEach((P) => {
              if (to.has(P)) {
                var W = $[P],
                  ie = il(P, W);
                N = Object.assign(N, ie);
              }
            });
          return (
            typeof N.startKey > 'u' && (N.startKey = tr),
            typeof N.endKey > 'u' && (N.endKey = er),
            typeof N.inclusiveStart > 'u' && (N.inclusiveStart = !0),
            typeof N.inclusiveEnd > 'u' && (N.inclusiveEnd = !0),
            h && !N.inclusiveStart && (h = !1),
            f && !N.inclusiveEnd && (f = !1),
            N
          );
        }),
        d = m.map((O) => O.startKey),
        y = m.map((O) => O.endKey),
        b = {
          index: c,
          startKeys: d,
          endKeys: y,
          inclusiveEnd: f,
          inclusiveStart: h,
          sortSatisfiedByIndex:
            !n && a === c.filter((O) => !i.has(O)).join(','),
          selectorSatisfiedByIndex: nl(c, t.selector, d, y),
        },
        x = sl(e, t, b);
      (x >= u || t.index) && ((u = x), (l = b));
    }),
    !l)
  )
    throw _('SNH', { query: t });
  return l;
}
var to = new Set(['$eq', '$gt', '$gte', '$lt', '$lte']),
  rl = new Set(['$eq', '$gt', '$gte']),
  ol = new Set(['$eq', '$lt', '$lte']);
function nl(e, t, r, o) {
  var n = Object.entries(t),
    i = n.find(([P, W]) => {
      if (!e.includes(P)) return !0;
      var ie = Object.entries(W).find(([He, Lo]) => !to.has(He));
      return ie;
    });
  if (i || t.$and || t.$or) return !1;
  var s = [],
    a = new Set();
  for (var [u, l] of Object.entries(t)) {
    if (!e.includes(u)) return !1;
    var c = Object.keys(l).filter((P) => rl.has(P));
    if (c.length > 1) return !1;
    var f = c[0];
    if ((f && a.add(u), f !== '$eq')) {
      if (s.length > 0) return !1;
      s.push(f);
    }
  }
  var h = [],
    m = new Set();
  for (var [d, y] of Object.entries(t)) {
    if (!e.includes(d)) return !1;
    var b = Object.keys(y).filter((P) => ol.has(P));
    if (b.length > 1) return !1;
    var x = b[0];
    if ((x && m.add(d), x !== '$eq')) {
      if (h.length > 0) return !1;
      h.push(x);
    }
  }
  var O = 0;
  for (var $ of e) {
    for (var Z of [a, m]) {
      if (!Z.has($) && Z.size > 0) return !1;
      Z.delete($);
    }
    var N = r[O],
      z = o[O];
    if (N !== z && a.size > 0 && m.size > 0) return !1;
    O++;
  }
  return !0;
}
function il(e, t) {
  switch (e) {
    case '$eq':
      return { startKey: t, endKey: t, inclusiveEnd: !0, inclusiveStart: !0 };
    case '$lte':
      return { endKey: t, inclusiveEnd: !0 };
    case '$gte':
      return { startKey: t, inclusiveStart: !0 };
    case '$lt':
      return { endKey: t, inclusiveEnd: !1 };
    case '$gt':
      return { startKey: t, inclusiveStart: !1 };
    default:
      throw new Error('SNH');
  }
}
function sl(e, t, r) {
  var o = 0,
    n = (c) => {
      c > 0 && (o = o + c);
    },
    i = 10,
    s = qr(r.startKeys, (c) => c !== tr && c !== er);
  n(s * i);
  var a = qr(r.startKeys, (c) => c !== er && c !== tr);
  n(a * i);
  var u = qr(r.startKeys, (c, f) => c === r.endKeys[f]);
  n(u * i * 1.5);
  var l = r.sortSatisfiedByIndex ? 5 : 0;
  return n(l), o;
}
var X = class extends Error {},
  so = 2147483647,
  ao = -2147483648,
  An = Number.MAX_SAFE_INTEGER,
  Cn = Number.MIN_SAFE_INTEGER,
  ut = Symbol('missing'),
  ma = Object.freeze(
    new Error('mingo: cycle detected while processing object/array'),
  ),
  al = '[object Object]',
  ul = /^\[object ([a-zA-Z0-9]+)\]$/,
  uo = (e) => {
    let t = pl(e),
      r = 0,
      o = t.length;
    for (; o; ) r = ((r << 5) - r) ^ t.charCodeAt(--o);
    return r >>> 0;
  },
  pa = new Set([
    'null',
    'undefined',
    'boolean',
    'number',
    'string',
    'date',
    'regexp',
  ]),
  cl = {
    null: 0,
    undefined: 0,
    number: 1,
    string: 2,
    object: 3,
    array: 4,
    boolean: 5,
    date: 6,
    regexp: 7,
    function: 8,
  },
  H = (e, t) => {
    e === ut && (e = void 0), t === ut && (t = void 0);
    let [r, o] = [e, t].map((n) => cl[ze(n).toLowerCase()]);
    return r !== o
      ? r - o
      : r === 1 || r === 2 || r === 6
        ? e < t
          ? -1
          : e > t
            ? 1
            : 0
        : pe(e, t)
          ? 0
          : e < t
            ? -1
            : e > t
              ? 1
              : 0;
  };
function g(e, t) {
  if (!e) throw new X(t);
}
var ze = (e) => ul.exec(Object.prototype.toString.call(e))[1],
  rr = (e) => typeof e == 'boolean',
  T = (e) => typeof e == 'string';
var C = (e) => !isNaN(e) && typeof e == 'number';
var E = Array.isArray,
  R = (e) => {
    if (!e) return !1;
    let t = Object.getPrototypeOf(e);
    return (
      (t === Object.prototype || t === null) &&
      al === Object.prototype.toString.call(e)
    );
  },
  or = (e) => e === Object(e),
  Mt = (e) => e instanceof Date,
  Nt = (e) => e instanceof RegExp,
  co = (e) => typeof e == 'function',
  v = (e) => e == null,
  Ce = (e, t) => e.includes(t),
  lo = (e, t) => !Ce(e, t),
  Re = (e, t = !0) => !!e || (t && e === ''),
  me = (e) =>
    v(e) ||
    (T(e) && !e) ||
    (e instanceof Array && e.length === 0) ||
    (R(e) && Object.keys(e).length === 0),
  ca = (e) => e === ut,
  Fe = (e) => (e instanceof Array ? e : [e]),
  ue = (e, t) => !!e && Object.prototype.hasOwnProperty.call(e, t),
  Rn = (e) => typeof ArrayBuffer < 'u' && ArrayBuffer.isView(e),
  ll = [Mt, Nt, Rn],
  $n = (e, t) => {
    if (v(e)) return e;
    if (t.has(e)) throw ma;
    let r = e.constructor;
    if (ll.some((o) => o(e))) return new r(e);
    try {
      if ((t.add(e), E(e))) return e.map((o) => $n(o, t));
      if (R(e)) {
        let o = {};
        for (let n in e) o[n] = $n(e[n], t);
        return o;
      }
    } finally {
      t.delete(e);
    }
    return e;
  },
  fo = (e) => $n(e, new Set()),
  fl = (e, t) => (R(e) && R(t)) || (E(e) && E(t));
function oo(e, t, r) {
  if (((r = r || { flatten: !1 }), ca(e) || v(e))) return t;
  if (ca(t) || v(t)) return e;
  if (!fl(e, t)) {
    if (r.skipValidation) return t || e;
    throw Error('mismatched types. must both be array or object');
  }
  if (((r.skipValidation = !0), E(e))) {
    let o = e,
      n = t;
    if (r.flatten) {
      let i = 0,
        s = 0;
      for (; i < o.length && s < n.length; ) o[i] = oo(o[i++], n[s++], r);
      for (; s < n.length; ) o.push(t[s++]);
    } else xe(o, n);
  } else for (let o in t) e[o] = oo(e[o], t[o], r);
  return e;
}
function la(e, t = uo) {
  let r = new Map();
  return (
    e.forEach((o, n) => {
      let i = mo(o, t);
      r.has(i)
        ? r.get(i).some((s) => pe(e[s], o)) || r.get(i).push(n)
        : r.set(i, [n]);
    }),
    r
  );
}
function ct(e, t = uo) {
  if (e.some((a) => a.length == 0)) return [];
  if (e.length === 1) return Array.from(e);
  let r = ha(
      e.map((a, u) => [u, a.length]),
      (a) => a[1],
    ),
    o = e[r[0][0]],
    n = la(o, t),
    i = new Map(),
    s = new Array();
  return (
    n.forEach((a, u) => {
      let l = a.map((m) => o[m]),
        c = l.map((m) => 0),
        f = l.map((m) => [r[0][0], 0]),
        h = !1;
      for (let m = 1; m < e.length; m++) {
        let [d, y] = r[m],
          b = e[d];
        if ((i.has(m) || i.set(m, la(b)), i.get(m).has(u))) {
          let x = i
            .get(m)
            .get(u)
            .map((O) => b[O]);
          h = l
            .map((O, $) =>
              x.some((Z, N) => {
                let z = c[$];
                return (
                  pe(O, Z) &&
                    (c[$]++, d < f[$][0] && (f[$] = [d, i.get(m).get(u)[N]])),
                  z < c[$]
                );
              }),
            )
            .some(Boolean);
        }
        if (!h) return;
      }
      h &&
        xe(
          s,
          c
            .map((m, d) => (m === e.length - 1 ? [l[d], f[d]] : ut))
            .filter((m) => m !== ut),
        );
    }),
    s
      .sort((a, u) => {
        let [l, [c, f]] = a,
          [h, [m, d]] = u,
          y = H(c, m);
        return y !== 0 ? y : H(f, d);
      })
      .map((a) => a[0])
  );
}
function Tn(e, t = 0) {
  let r = new Array();
  function o(n, i) {
    for (let s = 0, a = n.length; s < a; s++)
      E(n[s]) && (i > 0 || i < 0) ? o(n[s], Math.max(-1, i - 1)) : r.push(n[s]);
  }
  return o(e, t), r;
}
var ml = (e) => {
  let [t, r] = [Object.getPrototypeOf(e), Object.getOwnPropertyNames(e)],
    o = t;
  for (; !r.length && t !== Object.prototype && t !== Array.prototype; )
    (o = t),
      (r = Object.getOwnPropertyNames(t)),
      (t = Object.getPrototypeOf(t));
  let n = {};
  return r.forEach((i) => (n[i] = e[i])), [n, o];
};
function pe(e, t) {
  if (e === t || Object.is(e, t)) return !0;
  let r = (!!e && e.constructor) || e;
  if (
    e === null ||
    t === null ||
    e === void 0 ||
    t === void 0 ||
    r !== t.constructor ||
    r === Function
  )
    return !1;
  if (r === Array || r === Object) {
    let i = Object.keys(e),
      s = Object.keys(t);
    if (i.length !== s.length || new Set([...i, ...s]).size != i.length)
      return !1;
    for (let a of i) if (!pe(e[a], t[a])) return !1;
    return !0;
  }
  let o = Object.getPrototypeOf(e);
  return (
    (Rn(e) ||
      (o !== Object.prototype &&
        o !== Array.prototype &&
        Object.prototype.hasOwnProperty.call(o, 'toString'))) &&
    e.toString() === t.toString()
  );
}
var ro = (e, t) => {
    if (e === null) return 'null';
    if (e === void 0) return 'undefined';
    let r = e.constructor;
    switch (r) {
      case RegExp:
      case Number:
      case Boolean:
      case Function:
      case Symbol:
        return e.toString();
      case String:
        return JSON.stringify(e);
      case Date:
        return e.toISOString();
    }
    if (Rn(e)) return r.name + '[' + e.toString() + ']';
    if (t.has(e)) throw ma;
    try {
      if ((t.add(e), E(e))) return '[' + e.map((s) => ro(s, t)).join(',') + ']';
      if (r === Object)
        return (
          '{' +
          Object.keys(e)
            .sort()
            .map((s) => s + ':' + ro(e[s], t))
            .join(',') +
          '}'
        );
      let o = Object.getPrototypeOf(e);
      if (
        o !== Object.prototype &&
        o !== Array.prototype &&
        Object.prototype.hasOwnProperty.call(o, 'toString')
      )
        return r.name + '(' + JSON.stringify(e.toString()) + ')';
      let [n, i] = ml(e);
      return r.name + ro(n, t);
    } finally {
      t.delete(e);
    }
  },
  pl = (e) => ro(e, new Set());
function mo(e, t) {
  return (t = t || uo), v(e) ? null : t(e).toString();
}
function ha(e, t, r = H) {
  if (me(e)) return e;
  let o = new Array(),
    n = new Array();
  for (let i = 0; i < e.length; i++) {
    let s = e[i],
      a = t(s, i);
    v(a) ? n.push(s) : o.push([a, s]);
  }
  return (
    o.sort((i, s) => r(i[0], s[0])),
    xe(
      n,
      o.map((i) => i[1]),
    )
  );
}
function po(e, t, r = uo) {
  if (e.length < 1) return new Map();
  let o = new Map(),
    n = new Map();
  for (let i = 0; i < e.length; i++) {
    let s = e[i],
      a = t(s, i),
      u = mo(a, r);
    if (u === null) n.has(null) ? n.get(null).push(s) : n.set(null, [s]);
    else {
      let l = o.has(u) ? o.get(u).find((c) => pe(c, a)) : null;
      v(l)
        ? (n.set(a, [s]), o.has(u) ? o.get(u).push(a) : o.set(u, [a]))
        : n.get(l).push(s);
    }
  }
  return n;
}
var Sn = 5e4;
function xe(e, ...t) {
  return e instanceof Array
    ? t.reduce((r, o) => {
        let n = Math.ceil(o.length / Sn),
          i = 0;
        for (; n-- > 0; )
          Array.prototype.push.apply(r, o.slice(i, i + Sn)), (i += Sn);
        return r;
      }, e)
    : t.filter(or).reduce((r, o) => (Object.assign(r, o), r), e);
}
function In(e, t) {
  return or(e) ? e[t] : void 0;
}
function hl(e, t) {
  if (t < 1) return e;
  for (; t-- && e.length === 1; ) e = e[0];
  return e;
}
function Le(e, t, r) {
  let o = 0;
  function n(s, a) {
    let u = s;
    for (let l = 0; l < a.length; l++) {
      let c = a[l];
      if (/^\d+$/.exec(c) === null && u instanceof Array) {
        if (l === 0 && o > 0) break;
        o += 1;
        let h = a.slice(l);
        u = u.reduce((m, d) => {
          let y = n(d, h);
          return y !== void 0 && m.push(y), m;
        }, []);
        break;
      } else u = In(u, c);
      if (u === void 0) break;
    }
    return u;
  }
  let i = pa.has(ze(e).toLowerCase()) ? e : n(e, t.split('.'));
  return i instanceof Array && r?.unwrapArray ? hl(i, o) : i;
}
function Dt(e, t, r) {
  let o = t.split('.'),
    n = o[0],
    i = o.slice(1).join('.'),
    s = /^\d+$/.exec(n) !== null,
    a = o.length > 1,
    u,
    l;
  if (e instanceof Array)
    if (s) (u = In(e, Number(n))), a && (u = Dt(u, i, r)), (u = [u]);
    else {
      u = [];
      for (let c of e)
        (l = Dt(c, t, r)),
          r?.preserveMissing
            ? (l === void 0 && (l = ut), u.push(l))
            : l !== void 0 && u.push(l);
    }
  else {
    if (((l = In(e, n)), a && (l = Dt(l, i, r)), l === void 0)) return;
    (u = r?.preserveKeys ? U({}, e) : {}), (u[n] = l);
  }
  return u;
}
function no(e) {
  if (e instanceof Array)
    for (let t = e.length - 1; t >= 0; t--)
      e[t] === ut ? e.splice(t, 1) : no(e[t]);
  else if (R(e)) for (let t in e) ue(e, t) && no(e[t]);
}
var fa = /^\d+$/;
function io(e, t, r, o) {
  let n = t.split('.'),
    i = n[0],
    s = n.slice(1).join('.');
  if (n.length === 1) (R(e) || (E(e) && fa.test(i))) && r(e, i);
  else {
    o?.buildGraph && v(e[i]) && (e[i] = {});
    let a = e[i];
    if (!a) return;
    let u = !!(n.length > 1 && fa.test(n[1]));
    a instanceof Array && o?.descendArray && !u
      ? a.forEach((l) => io(l, s, r, o))
      : io(a, s, r, o);
  }
}
function ho(e, t, r) {
  io(
    e,
    t,
    (o, n) => {
      o[n] = co(r) ? r(o[n]) : r;
    },
    { buildGraph: !0 },
  );
}
function nr(e, t, r) {
  io(
    e,
    t,
    (o, n) => {
      if (o instanceof Array) {
        if (/^\d+$/.test(n)) o.splice(parseInt(n), 1);
        else if (r && r.descendArray) for (let i of o) R(i) && delete i[n];
      } else R(o) && delete o[n];
    },
    r,
  );
}
var dl = /^\$[a-zA-Z0-9_]+$/;
function Ee(e) {
  return dl.test(e);
}
function yo(e) {
  if (pa.has(ze(e).toLowerCase())) return Nt(e) ? { $regex: e } : { $eq: e };
  if (or(e)) {
    if (!Object.keys(e).some(Ee)) return { $eq: e };
    if (ue(e, '$regex')) {
      let r = U({}, e);
      return (
        (r.$regex = new RegExp(e.$regex, e.$options)), delete r.$options, r
      );
    }
  }
  return e;
}
var ft = ((e) => (
    (e.CLONE_ALL = 'CLONE_ALL'),
    (e.CLONE_INPUT = 'CLONE_INPUT'),
    (e.CLONE_OUTPUT = 'CLONE_OUTPUT'),
    (e.CLONE_OFF = 'CLONE_OFF'),
    e
  ))(ft || {}),
  V = class e {
    constructor(t, r, o, n = Date.now()) {
      (this._opts = t),
        (this._root = r),
        (this._local = o),
        (this.timestamp = n),
        this.update(r, o);
    }
    static init(t, r, o) {
      return t instanceof e
        ? new e(t._opts, v(t.root) ? r : t.root, Object.assign({}, t.local, o))
        : new e(t, r, o);
    }
    update(t, r) {
      return (
        (this._root = t),
        (this._local =
          r &&
          Object.assign({}, r, {
            variables: Object.assign({}, this._local?.variables, r?.variables),
          })),
        this
      );
    }
    getOptions() {
      return Object.freeze(
        J(U({}, this._opts), { context: kt.from(this._opts.context) }),
      );
    }
    get root() {
      return this._root;
    }
    get local() {
      return this._local;
    }
    get idKey() {
      return this._opts.idKey;
    }
    get collation() {
      return this._opts?.collation;
    }
    get processingMode() {
      return this._opts?.processingMode || 'CLONE_OFF';
    }
    get useStrictMode() {
      return this._opts?.useStrictMode;
    }
    get scriptEnabled() {
      return this._opts?.scriptEnabled;
    }
    get useGlobalContext() {
      return this._opts?.useGlobalContext;
    }
    get hashFunction() {
      return this._opts?.hashFunction;
    }
    get collectionResolver() {
      return this._opts?.collectionResolver;
    }
    get jsonSchemaValidator() {
      return this._opts?.jsonSchemaValidator;
    }
    get variables() {
      return this._opts?.variables;
    }
    get context() {
      return this._opts?.context;
    }
  };
function Pt(e) {
  return e instanceof V
    ? e.getOptions()
    : Object.freeze(
        J(
          U(
            {
              idKey: '_id',
              scriptEnabled: !0,
              useStrictMode: !0,
              useGlobalContext: !0,
              processingMode: 'CLONE_OFF',
            },
            e,
          ),
          { context: e?.context ? kt.from(e?.context) : kt.init({}) },
        ),
      );
}
var $e = ((e) => (
    (e.ACCUMULATOR = 'accumulator'),
    (e.EXPRESSION = 'expression'),
    (e.PIPELINE = 'pipeline'),
    (e.PROJECTION = 'projection'),
    (e.QUERY = 'query'),
    (e.WINDOW = 'window'),
    e
  ))($e || {}),
  kt = class e {
    constructor(t) {
      this.operators = {
        accumulator: {},
        expression: {},
        pipeline: {},
        projection: {},
        query: {},
        window: {},
      };
      for (let [r, o] of Object.entries(t)) this.addOperators(r, o);
    }
    static init(t = {}) {
      return new e(t);
    }
    static from(t) {
      return new e(t.operators);
    }
    addOperators(t, r) {
      for (let [o, n] of Object.entries(r))
        this.getOperator(t, o) || (this.operators[t][o] = n);
      return this;
    }
    addAccumulatorOps(t) {
      return this.addOperators('accumulator', t);
    }
    addExpressionOps(t) {
      return this.addOperators('expression', t);
    }
    addQueryOps(t) {
      return this.addOperators('query', t);
    }
    addPipelineOps(t) {
      return this.addOperators('pipeline', t);
    }
    addProjectionOps(t) {
      return this.addOperators('projection', t);
    }
    addWindowOps(t) {
      return this.addOperators('window', t);
    }
    getOperator(t, r) {
      return (t in this.operators && this.operators[t][r]) || null;
    }
  },
  lt = kt.init();
function Nn(e, t) {
  for (let [r, o] of Object.entries(t)) {
    g(co(o) && Ee(r), `'${r}' is not a valid operator`);
    let n = Se(e, r, null);
    g(
      !n || o === n,
      `${r} already exists for '${e}' operators. Cannot change operator function once registered.`,
    );
  }
  switch (e) {
    case 'accumulator':
      lt.addAccumulatorOps(t);
      break;
    case 'expression':
      lt.addExpressionOps(t);
      break;
    case 'pipeline':
      lt.addPipelineOps(t);
      break;
    case 'projection':
      lt.addProjectionOps(t);
      break;
    case 'query':
      lt.addQueryOps(t);
      break;
    case 'window':
      lt.addWindowOps(t);
      break;
  }
}
function Se(e, t, r) {
  let { context: o, useGlobalContext: n } = r || {},
    i = o ? o.getOperator(e, t) : null;
  return !i && n ? lt.getOperator(e, t) : i;
}
var da = {
    $$ROOT(e, t, r) {
      return r.root;
    },
    $$CURRENT(e, t, r) {
      return e;
    },
    $$REMOVE(e, t, r) {},
    $$NOW(e, t, r) {
      return new Date(r.timestamp);
    },
  },
  Dn = {
    $$KEEP(e, t, r) {
      return e;
    },
    $$PRUNE(e, t, r) {},
    $$DESCEND(e, t, r) {
      if (!ue(t, '$cond')) return e;
      let o;
      for (let [n, i] of Object.entries(e))
        if (or(i)) {
          if (i instanceof Array) {
            let s = [];
            for (let a of i)
              R(a) && (a = Mn(a, t, r.update(a))), v(a) || s.push(a);
            o = s;
          } else o = Mn(i, t, r.update(i));
          v(o) ? delete e[n] : (e[n] = o);
        }
      return e;
    },
  };
function p(e, t, r, o) {
  let n = V.init(o, e);
  if (((r = r || ''), Ee(r))) {
    let i = Se('expression', r, o);
    if (i) return i(e, t, n);
    let s = Se('accumulator', r, o);
    if (s)
      return (
        e instanceof Array || ((e = p(e, t, null, n)), (t = null)),
        g(e instanceof Array, `'${r}' target must be an array.`),
        s(e, t, n.update(null, n.local))
      );
    throw new X(`operator '${r}' is not registered`);
  }
  if (T(t) && t.length > 0 && t[0] === '$') {
    if (ue(Dn, t)) return t;
    let i = n.root,
      s = t.split('.');
    if (ue(da, s[0]))
      (i = da[s[0]](e, null, n)), (t = t.slice(s[0].length + 1));
    else if (s[0].slice(0, 2) === '$$') {
      i = Object.assign({}, n.variables, { this: e }, n.local?.variables);
      let a = s[0].slice(2);
      g(ue(i, a), `Use of undefined variable: ${a}`), (t = t.slice(2));
    } else t = t.slice(1);
    return t === '' ? i : Le(i, t);
  }
  if (E(t)) return t.map((i) => p(e, i, null, n));
  if (R(t)) {
    let i = {};
    for (let [s, a] of Object.entries(t))
      if (
        ((i[s] = p(e, a, s, n)),
        ['expression', 'accumulator'].some((u) => !!Se(u, s, o)))
      )
        return (
          g(
            Object.keys(t).length === 1,
            "Invalid aggregation expression '" + JSON.stringify(t) + "'",
          ),
          i[s]
        );
    return i;
  }
  return t;
}
function Mn(e, t, r) {
  let o = p(e, t, null, r);
  return ue(Dn, o) ? Dn[o](e, t, r) : o;
}
function he(e) {
  return e instanceof ir ? e : new ir(e);
}
function go(...e) {
  let t = 0;
  return he(() => {
    for (; t < e.length; ) {
      let r = e[t].next();
      if (!r.done) return r;
      t++;
    }
    return { done: !0 };
  });
}
function yl(e) {
  return !!e && typeof e == 'object' && e?.next instanceof Function;
}
function gl(e, t) {
  let r = e.slice(t + 1);
  e.splice(t), Array.prototype.push.apply(e, r);
}
var kn = new Error();
function vl(e, t, r) {
  let o = !1,
    n = -1,
    i = 0;
  return function (s) {
    try {
      e: for (; !o; ) {
        let a = e();
        n++;
        let u = -1,
          l = t.length,
          c = !1;
        for (; ++u < l; ) {
          let f = t[u];
          switch (f.action) {
            case 0:
              a = f.func(a, n);
              break;
            case 1:
              if (!f.func(a, n)) continue e;
              break;
            case 2:
              --f.count, f.count || (c = !0);
              break;
            case 3:
              --f.count, f.count || gl(t, u);
              continue e;
            default:
              break e;
          }
        }
        if (((o = c), s)) r[i++] = a;
        else return { value: a, done: !1 };
      }
    } catch (a) {
      if (a !== kn) throw a;
    }
    return (o = !0), { done: o };
  };
}
var ir = class {
  constructor(t) {
    (this.iteratees = []), (this.yieldedValues = []), (this.isDone = !1);
    let r;
    if ((t instanceof Function && (t = { next: t }), yl(t))) {
      let o = t;
      r = () => {
        let n = o.next();
        if (n.done) throw kn;
        return n.value;
      };
    } else if (t instanceof Array) {
      let o = t,
        n = o.length,
        i = 0;
      r = () => {
        if (i < n) return o[i++];
        throw kn;
      };
    } else if (!(t instanceof Function))
      throw new X(
        'Lazy must be initialized with an array, generator, or function.',
      );
    this.getNext = vl(r, this.iteratees, this.yieldedValues);
  }
  push(t, r) {
    return (
      typeof r == 'function'
        ? this.iteratees.push({ action: t, func: r })
        : typeof r == 'number' && this.iteratees.push({ action: t, count: r }),
      this
    );
  }
  next() {
    return this.getNext();
  }
  map(t) {
    return this.push(0, t);
  }
  filter(t) {
    return this.push(1, t);
  }
  take(t) {
    return t > 0 ? this.push(2, t) : this;
  }
  drop(t) {
    return t > 0 ? this.push(3, t) : this;
  }
  transform(t) {
    let r = this,
      o;
    return he(() => (o || (o = he(t(r.value()))), o.next()));
  }
  value() {
    return (
      this.isDone || (this.isDone = this.getNext(!0).done), this.yieldedValues
    );
  }
  each(t) {
    for (;;) {
      let r = this.next();
      if (r.done) break;
      if (t(r.value) === !1) return !1;
    }
    return !0;
  }
  reduce(t, r) {
    let o = this.next();
    for (
      r === void 0 && !o.done && ((r = o.value), (o = this.next()));
      !o.done;

    )
      (r = t(r, o.value)), (o = this.next());
    return r;
  }
  size() {
    return this.reduce((t, r) => ++t, 0);
  }
  [Symbol.iterator]() {
    return this;
  }
};
var Te = class {
  constructor(t, r) {
    (this.pipeline = t), (this.options = Pt(r));
  }
  stream(t) {
    let r = he(t),
      o = this.options.processingMode;
    (o == ft.CLONE_ALL || o == ft.CLONE_INPUT) && r.map(fo);
    let n = new Array();
    if (!me(this.pipeline))
      for (let i of this.pipeline) {
        let s = Object.keys(i),
          a = s[0],
          u = Se($e.PIPELINE, a, this.options);
        g(s.length === 1 && !!u, `invalid pipeline operator ${a}`),
          n.push(a),
          (r = u(r, i[a], this.options));
      }
    return (
      (o == ft.CLONE_OUTPUT ||
        (o == ft.CLONE_ALL && ct([['$group', '$unwind'], n]).length)) &&
        r.map(fo),
      r
    );
  }
  run(t) {
    return this.stream(t).value();
  }
};
var vo = class {
  constructor(t, r, o, n) {
    (this.source = t),
      (this.predicate = r),
      (this.projection = o),
      (this.options = n),
      (this.operators = []),
      (this.result = null),
      (this.buffer = []);
  }
  fetch() {
    return this.result
      ? this.result
      : (R(this.projection) &&
          this.operators.push({ $project: this.projection }),
        (this.result = he(this.source).filter(this.predicate)),
        this.operators.length > 0 &&
          (this.result = new Te(this.operators, this.options).stream(
            this.result,
          )),
        this.result);
  }
  fetchAll() {
    let t = he([...this.buffer]);
    return (this.buffer = []), go(t, this.fetch());
  }
  all() {
    return this.fetchAll().value();
  }
  count() {
    return this.all().length;
  }
  skip(t) {
    return this.operators.push({ $skip: t }), this;
  }
  limit(t) {
    return this.operators.push({ $limit: t }), this;
  }
  sort(t) {
    return this.operators.push({ $sort: t }), this;
  }
  collation(t) {
    return (this.options = J(U({}, this.options), { collation: t })), this;
  }
  next() {
    if (this.buffer.length > 0) return this.buffer.pop();
    let t = this.fetch().next();
    if (!t.done) return t.value;
  }
  hasNext() {
    if (this.buffer.length > 0) return !0;
    let t = this.fetch().next();
    return t.done ? !1 : (this.buffer.push(t.value), !0);
  }
  map(t) {
    return this.all().map(t);
  }
  forEach(t) {
    this.all().forEach(t);
  }
  [Symbol.iterator]() {
    return this.fetchAll();
  }
};
var de = class {
  constructor(t, r) {
    (this.condition = t),
      (this.options = Pt(r)),
      (this.compiled = []),
      this.compile();
  }
  compile() {
    g(
      R(this.condition),
      `query criteria must be an object: ${JSON.stringify(this.condition)}`,
    );
    let t = {};
    for (let [r, o] of Object.entries(this.condition)) {
      if (r === '$where') Object.assign(t, { field: r, expr: o });
      else if (Ce(['$and', '$or', '$nor', '$expr', '$jsonSchema'], r))
        this.processOperator(r, r, o);
      else {
        g(!Ee(r), `unknown top level operator: ${r}`);
        for (let [n, i] of Object.entries(yo(o))) this.processOperator(r, n, i);
      }
      t.field && this.processOperator(t.field, t.field, t.expr);
    }
  }
  processOperator(t, r, o) {
    let n = Se($e.QUERY, r, this.options);
    if (!n) throw new X(`unknown query operator ${r}`);
    let i = n(t, o, this.options);
    this.compiled.push(i);
  }
  test(t) {
    for (let r = 0, o = this.compiled.length; r < o; r++)
      if (!this.compiled[r](t)) return !1;
    return !0;
  }
  find(t, r) {
    return new vo(t, (o) => this.test(o), r || {}, this.options);
  }
  remove(t) {
    return t.reduce((r, o) => (this.test(o) || r.push(o), r), []);
  }
};
var Ft = 1e3 * 60 * 60 * 24,
  ga = {
    week: Ft * 7,
    day: Ft,
    hour: 1e3 * 60 * 60,
    minute: 1e3 * 60,
    second: 1e3,
    millisecond: 1,
  };
var fO = {
  week: Ft * 7,
  day: Ft,
  hour: Ft / 24,
  minute: 6e4,
  second: 1e3,
  millisecond: 1,
};
var bo = (e, t, r) => {
    if (me(t) || !R(t)) return e;
    let o = H,
      n = r.collation;
    return (
      R(n) && T(n.locale) && (o = Al(n)),
      e.transform((i) => {
        let s = Object.keys(t);
        for (let a of s.reverse()) {
          let u = po(i, (c) => Le(c, a), r.hashFunction),
            l = Array.from(u.keys()).sort(o);
          t[a] === -1 && l.reverse(),
            (i = []),
            l.reduce((c, f) => xe(c, u.get(f)), i);
        }
        return i;
      })
    );
  },
  Il = { 1: 'base', 2: 'accent', 3: 'variant' };
function Al(e) {
  let t = {
    sensitivity: Il[e.strength || 3],
    caseFirst: e.caseFirst === 'off' ? 'false' : e.caseFirst || 'false',
    numeric: e.numericOrdering || !1,
    ignorePunctuation: e.alternate === 'shifted',
  };
  (e.caseLevel || !1) === !0 &&
    (t.sensitivity === 'base' && (t.sensitivity = 'case'),
    t.sensitivity === 'accent' && (t.sensitivity = 'variant'));
  let r = new Intl.Collator(e.locale, t);
  return (o, n) => {
    if (!T(o) || !T(n)) return H(o, n);
    let i = r.compare(o, n);
    return i < 0 ? -1 : i > 0 ? 1 : 0;
  };
}
function k(e) {
  let t = (r, o, n) => {
    let i = { unwrapArray: !0 },
      s = Math.max(1, r.split('.').length - 1);
    return (a) => {
      let u = Le(a, r, i);
      return e(u, o, J(U({}, n), { depth: s }));
    };
  };
  return (t.op = 'query'), t;
}
function ce(e) {
  return (t, r, o) => {
    let n = p(t, r, null, o);
    return e(...n);
  };
}
function sr(e, t, r) {
  if (pe(e, t) || (v(e) && v(t))) return !0;
  if (e instanceof Array) {
    let o = pe.bind(null, t);
    return e.some(o) || Tn(e, r?.depth).some(o);
  }
  return !1;
}
function _o(e, t, r) {
  return !sr(e, t, r);
}
function Fn(e, t, r) {
  return v(e)
    ? t.some((o) => o === null)
    : ct([Fe(e), t], r?.hashFunction).length > 0;
}
function wo(e, t, r) {
  return !Fn(e, t, r);
}
function Oo(e, t, r) {
  return Io(e, t, (o, n) => H(o, n) < 0);
}
function Eo(e, t, r) {
  return Io(e, t, (o, n) => H(o, n) <= 0);
}
function So(e, t, r) {
  return Io(e, t, (o, n) => H(o, n) > 0);
}
function $o(e, t, r) {
  return Io(e, t, (o, n) => H(o, n) >= 0);
}
function Oa(e, t, r) {
  return Fe(e).some((o) => t.length === 2 && o % t[0] === t[1]);
}
function Ea(e, t, r) {
  let o = Fe(e),
    n = (i) => T(i) && Re(t.exec(i), r?.useStrictMode);
  return o.some(n) || Tn(o, 1).some(n);
}
function Sa(e, t, r) {
  return (
    ((t === !1 || t === 0) && e === void 0) ||
    ((t === !0 || t === 1) && e !== void 0)
  );
}
function $a(e, t, r) {
  if (!E(e) || !E(t) || !e.length || !t.length) return !1;
  let o = !0;
  for (let n of t) {
    if (!o) break;
    R(n) && Ce(Object.keys(n), '$elemMatch')
      ? (o = Ln(e, n.$elemMatch, r))
      : n instanceof RegExp
        ? (o = e.some((i) => typeof i == 'string' && n.test(i)))
        : (o = e.some((i) => pe(n, i)));
  }
  return o;
}
function Ia(e, t, r) {
  return Array.isArray(e) && e.length === t;
}
function Dl(e) {
  return Ee(e) && ['$and', '$or', '$nor'].indexOf(e) === -1;
}
function Ln(e, t, r) {
  if (E(e) && !me(e)) {
    let o = (s) => s,
      n = t;
    Object.keys(t).every(Dl) && ((n = { temp: t }), (o = (s) => ({ temp: s })));
    let i = new de(n, r);
    for (let s = 0, a = e.length; s < a; s++) if (i.test(o(e[s]))) return !0;
  }
  return !1;
}
var xa = (e) => e === null,
  ba = (e) => C(e) && e >= ao && e <= so && e.toString().indexOf('.') === -1,
  _a = (e) => C(e) && e >= Cn && e <= An && e.toString().indexOf('.') === -1,
  Ml = {
    array: E,
    bool: rr,
    boolean: rr,
    date: Mt,
    decimal: C,
    double: C,
    int: ba,
    long: _a,
    number: C,
    null: xa,
    object: R,
    regex: Nt,
    regexp: Nt,
    string: T,
    undefined: v,
    function: (e) => {
      throw new X('unsupported type key `function`.');
    },
    1: C,
    2: T,
    3: R,
    4: E,
    6: v,
    8: rr,
    9: Mt,
    10: xa,
    11: Nt,
    16: ba,
    18: _a,
    19: C,
  };
function wa(e, t, r) {
  let o = Ml[t];
  return o ? o(e) : !1;
}
function Aa(e, t, r) {
  return Array.isArray(t) ? t.findIndex((o) => wa(e, o, r)) >= 0 : wa(e, t, r);
}
function Io(e, t, r) {
  return Fe(e).some((o) => ze(o) === ze(t) && r(o, t));
}
var w1 = ce(wo);
var Lt = (e, t) => (r, o, n) => {
  g(E(o), `${e}: expression must be an array.`);
  let i = p(r, o, null, n);
  return i.some(v)
    ? null
    : (g(i.every(C), `${e}: expression must evalue to array of numbers.`),
      t(i));
};
var v$ = Lt('$bitAnd', (e) => e.reduce((t, r) => t & r, -1));
var E$ = Lt('$bitOr', (e) => e.reduce((t, r) => t | r, 0));
var I$ = Lt('$bitXor', (e) => e.reduce((t, r) => t ^ r, 0));
var G$ = ce(sr);
var Z$ = ce(So);
var rI = ce($o);
var iI = ce(Oo);
var uI = ce(Eo);
var fI = ce(_o);
var Ca = (e, t) => {
    let r = {};
    return e.split('').forEach((o, n) => (r[o] = t * (n + 1))), r;
  },
  HI = J(U(U({}, Ca('ABCDEFGHIKLM', 1)), Ca('NOPQRSTUVWXY', -1)), { Z: 0 });
var Ma = {
  undefined: null,
  null: null,
  NaN: NaN,
  Infinity: new Error(),
  '-Infinity': new Error(),
};
function B(e, t = Ma) {
  let r = Object.assign({}, Ma, t),
    o = new Set(Object.keys(r));
  return (n, i, s) => {
    let a = p(n, i, null, s);
    if (o.has(`${a}`)) {
      let u = r[`${a}`];
      if (u instanceof Error)
        throw new X(
          `cannot apply $${e.name} to -inf, value must in (-inf,inf)`,
        );
      return u;
    }
    return e(a);
  };
}
var eD = B(Math.acos, { Infinity: 1 / 0, 0: new Error() });
var oD = B(Math.acosh, { Infinity: 1 / 0, 0: new Error() });
var sD = B(Math.asin);
var cD = B(Math.asinh, { Infinity: 1 / 0, '-Infinity': -1 / 0 });
var mD = B(Math.atan);
var vD = B(Math.atanh, { 1: 1 / 0, '-1': -1 / 0 });
var _D = B(Math.cos);
var ED = B(Math.cosh, { '-Infinity': 1 / 0, Infinity: 1 / 0 });
var Fl = Math.PI / 180,
  ID = B((e) => e * Fl, { Infinity: 1 / 0, '-Infinity': 1 / 0 });
var Ll = 180 / Math.PI,
  RD = B((e) => e * Ll, { Infinity: 1 / 0, '-Infinity': -1 / 0 });
var MD = B(Math.sin);
var PD = B(Math.sinh, { '-Infinity': -1 / 0, Infinity: 1 / 0 });
var BD = B(Math.tan);
var Un = (e, t, r) => {
  if (me(t)) return e;
  let o = Object.keys(t),
    n = !1;
  ka(t, r);
  let i = r.idKey;
  if (Ce(o, i)) {
    let a = t[i];
    (a === 0 || a === !1) &&
      ((o = o.filter(lo.bind(null, [i]))), (n = o.length == 0));
  } else o.push(i);
  let s = V.init(r);
  return e.map((a) => Bn(a, t, s.update(a), o, n));
};
function Bn(e, t, r, o, n) {
  let i = {},
    s = !1,
    a = !1,
    u = [];
  n && u.push(r.idKey);
  for (let l of o) {
    let c,
      f = t[l];
    if ((l !== r.idKey && Ce([0, !1], f) && (a = !0), l === r.idKey && me(f)))
      c = e[l];
    else if (T(f)) c = p(e, f, l, r);
    else if (!Ce([1, !0], f))
      if (f instanceof Array)
        c = f.map((m) => {
          let d = p(e, m, null, r);
          return v(d) ? null : d;
        });
      else if (R(f)) {
        let m = f,
          d = Object.keys(f),
          y = d.length == 1 ? d[0] : '',
          b = Se($e.PROJECTION, y, r);
        if (b)
          y === '$slice'
            ? Fe(m[y]).every(C)
              ? ((c = b(e, m[y], l, r)), (s = !0))
              : (c = p(e, m, l, r))
            : (c = b(e, m[y], l, r));
        else if (Ee(y)) c = p(e, m[y], y, r);
        else if (ue(e, l)) {
          ka(m, r);
          let x = e[l];
          x instanceof Array
            ? (c = x.map((O) => Bn(O, m, r, d, !1)))
            : ((x = R(x) ? x : e), (c = Bn(x, m, r, d, !1)));
        } else c = p(e, f, null, r);
      } else {
        u.push(l);
        continue;
      }
    let h = Dt(e, l, { preserveMissing: !0 });
    h !== void 0 && oo(i, h, { flatten: !0 }),
      lo([0, 1, !1, !0], f) &&
        (c === void 0 ? nr(i, l, { descendArray: !0 }) : ho(i, l, c));
  }
  if ((no(i), (s || a || n) && ((i = xe({}, e, i)), u.length > 0)))
    for (let l of u) nr(i, l, { descendArray: !0 });
  return i;
}
function ka(e, t) {
  let r = [!1, !1];
  for (let [o, n] of Object.entries(e)) {
    if (o === t?.idKey) return;
    n === 0 || n === !1 ? (r[0] = !0) : (n === 1 || n === !0) && (r[1] = !0),
      g(
        !(r[0] && r[1]),
        'Projection cannot have a mix of inclusion and exclusion.',
      );
  }
}
var Pa = (e, t, r) => {
  g(E(t), 'Invalid expression: $and expects value to be an Array.');
  let o = t.map((n) => new de(n, r));
  return (n) => o.every((i) => i.test(n));
};
var Ao = (e, t, r) => {
  g(E(t), 'Invalid expression. $or expects value to be an Array');
  let o = t.map((n) => new de(n, r));
  return (n) => o.some((i) => i.test(n));
};
var Fa = (e, t, r) => {
  g(E(t), 'Invalid expression. $nor expects value to be an array.');
  let o = Ao('$or', t, r);
  return (n) => !o(n);
};
var La = (e, t, r) => {
  let o = {};
  o[e] = yo(t);
  let n = new de(o, r);
  return (i) => !n.test(i);
};
var jn = k(sr);
var Vn = k(So);
var Wn = k($o);
var qn = k(Fn);
var zn = k(Oo);
var Hn = k(Eo);
var Kn = k(_o);
var Qn = k(wo);
var Ba = k(Oa);
var Ua = k(Ea);
var WP = k($a);
var ja = k(Ln);
var Va = k(Ia);
var Wa = k(Sa);
var qa = k(Aa);
var za = !1;
function Ha(e) {
  return (
    za ||
      (Nn($e.PIPELINE, { $sort: bo, $project: Un }),
      Nn($e.QUERY, {
        $and: Pa,
        $eq: jn,
        $elemMatch: ja,
        $exists: Wa,
        $gt: Vn,
        $gte: Wn,
        $in: qn,
        $lt: zn,
        $lte: Hn,
        $ne: Kn,
        $nin: Qn,
        $mod: Ba,
        $nor: Fa,
        $not: La,
        $or: Ao,
        $regex: Ua,
        $size: Va,
        $type: qa,
      }),
      (za = !0)),
    new de(e)
  );
}
function ar(e, t) {
  var r = We(e.primaryKey);
  t = q(t);
  var o = Ie(t);
  if (
    (typeof o.skip != 'number' && (o.skip = 0),
    o.selector
      ? ((o.selector = o.selector),
        Object.entries(o.selector).forEach(([l, c]) => {
          (typeof c != 'object' || c === null) && (o.selector[l] = { $eq: c });
        }))
      : (o.selector = {}),
    o.index)
  ) {
    var n = os(o.index);
    n.includes(r) || n.push(r), (o.index = n);
  }
  if (o.sort) {
    var u = o.sort.find((l) => fi(l) === r);
    u || ((o.sort = o.sort.slice(0)), o.sort.push({ [r]: 'asc' }));
  } else if (o.index) o.sort = o.index.map((l) => ({ [l]: 'asc' }));
  else {
    if (e.indexes) {
      var i = new Set();
      Object.entries(o.selector).forEach(([l, c]) => {
        var f = !1;
        typeof c == 'object' && c !== null
          ? (f = !!Object.keys(c).find((h) => to.has(h)))
          : (f = !0),
          f && i.add(l);
      });
      var s = -1,
        a;
      e.indexes.forEach((l) => {
        var c = St(l) ? l : [l],
          f = c.findIndex((h) => !i.has(h));
        f > 0 && f > s && ((s = f), (a = c));
      }),
        a && (o.sort = a.map((l) => ({ [l]: 'asc' })));
    }
    o.sort || (o.sort = [{ [r]: 'asc' }]);
  }
  return o;
}
function Ka(e, t) {
  if (!t.sort) throw _('SNH', { query: t });
  var r = [];
  t.sort.forEach((n) => {
    var i = Object.keys(n)[0],
      s = Object.values(n)[0];
    r.push({ key: i, direction: s, getValueFn: li(i) });
  });
  var o = (n, i) => {
    for (var s = 0; s < r.length; ++s) {
      var a = r[s],
        u = a.getValueFn(n),
        l = a.getValueFn(i);
      if (u !== l) {
        var c = a.direction === 'asc' ? H(u, l) : H(l, u);
        return c;
      }
    }
  };
  return o;
}
function Co(e, t) {
  if (!t.sort) throw _('SNH', { query: t });
  var r = Ha(t.selector),
    o = (n) => r.test(n);
  return o;
}
async function Bt(e, t) {
  var r = await e.exec();
  if (!r) return null;
  if (Array.isArray(r)) return Promise.all(r.map((n) => t(n)));
  if (r instanceof Map) return Promise.all([...r.values()].map((n) => t(n)));
  var o = await t(r);
  return o;
}
function jl(e, t) {
  return !t.sort || t.sort.length === 0
    ? [e]
    : t.sort.map((r) => Object.keys(r)[0]);
}
var Vl = new WeakMap();
function Wl(e) {
  return Oe(Vl, e, () => {
    var t = e.collection,
      r = ar(t.storageInstance.schema, Ie(e.mangoQuery)),
      o = t.schema.primaryPath,
      n = Ka(t.schema.jsonSchema, r),
      i = (l, c) => {
        var f = { docA: l, docB: c, rxQuery: e };
        return n(f.docA, f.docB);
      },
      s = Co(t.schema.jsonSchema, r),
      a = (l) => {
        var c = { doc: l, rxQuery: e };
        return s(c.doc);
      },
      u = {
        primaryKey: e.collection.schema.primaryPath,
        skip: r.skip,
        limit: r.limit,
        sortFields: jl(o, r),
        sortComparator: i,
        queryMatcher: a,
      };
    return u;
  });
}
function Qa(e, t) {
  if (!e.collection.database.eventReduce) return { runFullQueryAgain: !0 };
  var r = Wl(e),
    o = F(e._result).docsData.slice(0),
    n = F(e._result).docsDataMap,
    i = !1,
    s = t.map((u) => aa(u)).filter(ns),
    a = s.find((u) => {
      var l = {
          queryParams: r,
          changeEvent: u,
          previousResults: o,
          keyDocumentMap: n,
        },
        c = na(l);
      if (c === 'runFullQueryAgain') return !0;
      if (c !== 'doNothing') return (i = !0), ia(c, r, u, o, n), !1;
    });
  return a
    ? { runFullQueryAgain: !0 }
    : { runFullQueryAgain: !1, changed: i, newResults: o };
}
var ql = (function () {
  function e() {
    this._map = new Map();
  }
  var t = e.prototype;
  return (
    (t.getByQuery = function (o) {
      var n = o.toString();
      return Oe(this._map, n, () => o);
    }),
    e
  );
})();
function Ga() {
  return new ql();
}
function Ya(e, t) {
  t.uncached = !0;
  var r = t.toString();
  e._map.delete(r);
}
function zl(e) {
  return e.refCount$.observers.length;
}
var Hl = 100,
  Kl = 30 * 1e3,
  Ql = (e, t) => (r, o) => {
    if (!(o._map.size < e)) {
      var n = oe() - t,
        i = [],
        s = Array.from(o._map.values());
      for (var a of s)
        if (!(zl(a) > 0)) {
          if (a._lastEnsureEqual === 0 && a._creationTime < n) {
            Ya(o, a);
            continue;
          }
          i.push(a);
        }
      var u = i.length - e;
      if (!(u <= 0)) {
        var l = i.sort((f, h) => f._lastEnsureEqual - h._lastEnsureEqual),
          c = l.slice(0, u);
        c.forEach((f) => Ya(o, f));
      }
    }
  },
  Gn = Ql(Hl, Kl),
  Yn = new WeakSet();
function Ja(e) {
  Yn.has(e) ||
    (Yn.add(e),
    ps()
      .then(() => ys(200))
      .then(() => {
        e.destroyed || e.cacheReplacementPolicy(e, e._queryCache), Yn.delete(e);
      }));
}
var Za = (function () {
  function e(r, o, n) {
    (this.cacheItemByDocId = new Map()),
      (this.tasks = new Set()),
      (this.registry =
        typeof FinalizationRegistry == 'function'
          ? new FinalizationRegistry((i) => {
              var s = i.docId,
                a = this.cacheItemByDocId.get(s);
              a &&
                (a[0].delete(i.revisionHeight),
                a[0].size === 0 && this.cacheItemByDocId.delete(s));
            })
          : void 0),
      (this.primaryPath = r),
      (this.changes$ = o),
      (this.documentCreator = n),
      o.subscribe((i) => {
        this.tasks.add(() => {
          for (var s = this.cacheItemByDocId, a = 0; a < i.length; a++) {
            var u = i[a],
              l = s.get(u.documentId);
            if (l) {
              var c = u.documentData;
              c || (c = u.previousDocumentData), (l[1] = c);
            }
          }
        }),
          this.tasks.size <= 1 &&
            Tt().then(() => {
              this.processTasks();
            });
      });
  }
  var t = e.prototype;
  return (
    (t.processTasks = function () {
      if (this.tasks.size !== 0) {
        var o = Array.from(this.tasks);
        o.forEach((n) => n()), this.tasks.clear();
      }
    }),
    (t.getLatestDocumentData = function (o) {
      this.processTasks();
      var n = Ve(this.cacheItemByDocId, o);
      return n[1];
    }),
    (t.getLatestDocumentDataIfExists = function (o) {
      this.processTasks();
      var n = this.cacheItemByDocId.get(o);
      if (n) return n[1];
    }),
    te(e, [
      {
        key: 'getCachedRxDocuments',
        get: function () {
          var r = Xa(this);
          return fe(this, 'getCachedRxDocuments', r);
        },
      },
      {
        key: 'getCachedRxDocument',
        get: function () {
          var r = Xa(this);
          return fe(this, 'getCachedRxDocument', (o) => r([o])[0]);
        },
      },
    ])
  );
})();
function Xa(e) {
  var t = e.primaryPath,
    r = e.cacheItemByDocId,
    o = e.registry,
    n = L.deepFreezeWhenDevMode,
    i = e.documentCreator,
    s = (a) => {
      for (var u = new Array(a.length), l = [], c = 0; c < a.length; c++) {
        var f = a[c],
          h = f[t],
          m = st(f._rev),
          d = void 0,
          y = void 0,
          b = r.get(h);
        b
          ? ((d = b[0]), (y = d.get(m)))
          : ((d = new Map()), (b = [d, f]), r.set(h, b));
        var x = y ? y.deref() : void 0;
        x || ((f = n(f)), (x = i(f)), d.set(m, Gl(x)), o && l.push(x)),
          (u[c] = x);
      }
      return (
        l.length > 0 &&
          o &&
          (e.tasks.add(() => {
            for (var O = 0; O < l.length; O++) {
              var $ = l[O];
              o.register($, {
                docId: $.primary,
                revisionHeight: st($.revision),
              });
            }
          }),
          e.tasks.size <= 1 &&
            Tt().then(() => {
              e.processTasks();
            })),
        u
      );
    };
  return s;
}
function Ro(e, t) {
  var r = e.getCachedRxDocuments;
  return r(t);
}
var Yl = typeof WeakRef == 'function',
  Gl = Yl ? Jl : Xl;
function Jl(e) {
  return new WeakRef(e);
}
function Xl(e) {
  return {
    deref() {
      return e;
    },
  };
}
var Jn = (function () {
  function e(r, o, n) {
    (this.time = oe()),
      (this.query = r),
      (this.count = n),
      (this.documents = Ro(this.query.collection._docCache, o));
  }
  var t = e.prototype;
  return (
    (t.getValue = function (o) {
      var n = this.query.op;
      if (n === 'count') return this.count;
      if (n === 'findOne') {
        var i = this.documents.length === 0 ? null : this.documents[0];
        if (!i && o)
          throw _('QU10', {
            collection: this.query.collection.name,
            query: this.query.mangoQuery,
            op: n,
          });
        return i;
      } else return n === 'findByIds' ? this.docsMap : this.documents.slice(0);
    }),
    te(e, [
      {
        key: 'docsData',
        get: function () {
          return fe(
            this,
            'docsData',
            this.documents.map((r) => r._data),
          );
        },
      },
      {
        key: 'docsDataMap',
        get: function () {
          var r = new Map();
          return (
            this.documents.forEach((o) => {
              r.set(o.primary, o._data);
            }),
            fe(this, 'docsDataMap', r)
          );
        },
      },
      {
        key: 'docsMap',
        get: function () {
          for (
            var r = new Map(), o = this.documents, n = 0;
            n < o.length;
            n++
          ) {
            var i = o[n];
            r.set(i.primary, i);
          }
          return fe(this, 'docsMap', r);
        },
      },
    ])
  );
})();
var Zl = 0,
  ef = function () {
    return ++Zl;
  },
  tf = (function () {
    function e(r, o, n, i = {}) {
      (this.id = ef()),
        (this._execOverDatabaseCount = 0),
        (this._creationTime = oe()),
        (this._lastEnsureEqual = 0),
        (this.uncached = !1),
        (this.refCount$ = new zt(null)),
        (this._result = null),
        (this._latestChangeEvent = -1),
        (this._lastExecStart = 0),
        (this._lastExecEnd = 0),
        (this._ensureEqualQueue = Ae),
        (this.op = r),
        (this.mangoQuery = o),
        (this.collection = n),
        (this.other = i),
        o || (this.mangoQuery = ur()),
        (this.isFindOneByIdQuery = sf(this.collection.schema.primaryPath, o));
    }
    var t = e.prototype;
    return (
      (t._setResultData = function (o) {
        if (typeof o > 'u')
          throw _('QU18', {
            database: this.collection.database.name,
            collection: this.collection.name,
          });
        if (typeof o == 'number') {
          this._result = new Jn(this, [], o);
          return;
        } else o instanceof Map && (o = Array.from(o.values()));
        var n = new Jn(this, o, o.length);
        this._result = n;
      }),
      (t._execOverDatabase = async function () {
        if (
          ((this._execOverDatabaseCount = this._execOverDatabaseCount + 1),
          (this._lastExecStart = oe()),
          this.op === 'count')
        ) {
          var o = this.getPreparedQuery(),
            n = await this.collection.storageInstance.count(o);
          if (n.mode === 'slow' && !this.collection.database.allowSlowCount)
            throw _('QU14', {
              collection: this.collection,
              queryObj: this.mangoQuery,
            });
          return n.count;
        }
        if (this.op === 'findByIds') {
          var i = F(this.mangoQuery.selector)[
              this.collection.schema.primaryPath
            ].$in,
            s = new Map(),
            a = [];
          if (
            (i.forEach((c) => {
              var f =
                this.collection._docCache.getLatestDocumentDataIfExists(c);
              if (f) {
                if (!f._deleted) {
                  var h = this.collection._docCache.getCachedRxDocument(f);
                  s.set(c, h);
                }
              } else a.push(c);
            }),
            a.length > 0)
          ) {
            var u = await this.collection.storageInstance.findDocumentsById(
              a,
              !1,
            );
            u.forEach((c) => {
              var f = this.collection._docCache.getCachedRxDocument(c);
              s.set(f.primary, f);
            });
          }
          return s;
        }
        var l = nf(this);
        return l.then((c) => ((this._lastExecEnd = oe()), c));
      }),
      (t.exec = async function (o) {
        if (o && this.op !== 'findOne')
          throw _('QU9', {
            collection: this.collection.name,
            query: this.mangoQuery,
            op: this.op,
          });
        await eu(this);
        var n = F(this._result);
        return n.getValue(o);
      }),
      (t.toString = function () {
        var o = mt(
            { op: this.op, query: this.mangoQuery, other: this.other },
            !0,
          ),
          n = JSON.stringify(o);
        return (this.toString = () => n), n;
      }),
      (t.getPreparedQuery = function () {
        var o = {
          rxQuery: this,
          mangoQuery: ar(this.collection.schema.jsonSchema, this.mangoQuery),
        };
        (o.mangoQuery.selector._deleted = { $eq: !1 }),
          o.mangoQuery.index && o.mangoQuery.index.unshift('_deleted'),
          Y('prePrepareQuery', o);
        var n = Xn(this.collection.schema.jsonSchema, o.mangoQuery);
        return (this.getPreparedQuery = () => n), n;
      }),
      (t.doesDocumentDataMatch = function (o) {
        return o._deleted ? !1 : this.queryMatcher(o);
      }),
      (t.remove = function () {
        return this.exec().then((o) =>
          Array.isArray(o) ? Promise.all(o.map((n) => n.remove())) : o.remove(),
        );
      }),
      (t.incrementalRemove = function () {
        return Bt(this.asRxQuery, (o) => o.incrementalRemove());
      }),
      (t.update = function (o) {
        throw M('update');
      }),
      (t.patch = function (o) {
        return Bt(this.asRxQuery, (n) => n.patch(o));
      }),
      (t.incrementalPatch = function (o) {
        return Bt(this.asRxQuery, (n) => n.incrementalPatch(o));
      }),
      (t.modify = function (o) {
        return Bt(this.asRxQuery, (n) => n.modify(o));
      }),
      (t.incrementalModify = function (o) {
        return Bt(this.asRxQuery, (n) => n.incrementalModify(o));
      }),
      (t.where = function (o) {
        throw M('query-builder');
      }),
      (t.sort = function (o) {
        throw M('query-builder');
      }),
      (t.skip = function (o) {
        throw M('query-builder');
      }),
      (t.limit = function (o) {
        throw M('query-builder');
      }),
      te(e, [
        {
          key: '$',
          get: function () {
            if (!this._$) {
              var r = this.collection.$.pipe(
                j((o) => !o.isLocal),
                Xt(null),
                Q(() => eu(this)),
                K(() => this._result),
                xt(Kr),
                Ze((o, n) => !!(o && o.time === F(n).time)),
                j((o) => !!o),
                K((o) => F(o).getValue()),
              );
              this._$ = sn(r, this.refCount$.pipe(j(() => !1)));
            }
            return this._$;
          },
        },
        {
          key: '$$',
          get: function () {
            var r = this.collection.database.getReactivityFactory();
            return r.fromObservable(this.$, void 0, this.collection.database);
          },
        },
        {
          key: 'queryMatcher',
          get: function () {
            var r = this.collection.schema.jsonSchema,
              o = ar(this.collection.schema.jsonSchema, this.mangoQuery);
            return fe(this, 'queryMatcher', Co(r, o));
          },
        },
        {
          key: 'asRxQuery',
          get: function () {
            return this;
          },
        },
      ])
    );
  })();
function ur() {
  return { selector: {} };
}
function rf(e) {
  return e.collection._queryCache.getByQuery(e);
}
function Ut(e, t, r, o) {
  Y('preCreateRxQuery', { op: e, queryObj: t, collection: r, other: o });
  var n = new tf(e, t, r, o);
  return (n = rf(n)), Ja(r), n;
}
function tu(e) {
  var t = e.asRxQuery.collection._changeEventBuffer.getCounter();
  return e._latestChangeEvent >= t;
}
async function eu(e) {
  return (
    e.collection.awaitBeforeReads.size > 0 &&
      (await Promise.all(
        Array.from(e.collection.awaitBeforeReads).map((t) => t()),
      )),
    e.collection.database.destroyed || tu(e)
      ? !1
      : ((e._ensureEqualQueue = e._ensureEqualQueue.then(() => of(e))),
        e._ensureEqualQueue)
  );
}
function of(e) {
  if (((e._lastEnsureEqual = oe()), e.collection.database.destroyed || tu(e)))
    return Ae;
  var t = !1,
    r = !1;
  if ((e._latestChangeEvent === -1 && (r = !0), !r)) {
    var o = e.asRxQuery.collection._changeEventBuffer.getFrom(
      e._latestChangeEvent + 1,
    );
    if (o === null) r = !0;
    else {
      e._latestChangeEvent =
        e.asRxQuery.collection._changeEventBuffer.getCounter();
      var n = e.asRxQuery.collection._changeEventBuffer.reduceByLastOfDoc(o);
      if (e.op === 'count') {
        var i = F(e._result).count,
          s = i;
        n.forEach((u) => {
          var l =
              u.previousDocumentData &&
              e.doesDocumentDataMatch(u.previousDocumentData),
            c = e.doesDocumentDataMatch(u.documentData);
          !l && c && s++, l && !c && s--;
        }),
          s !== i && ((t = !0), e._setResultData(s));
      } else {
        var a = Qa(e, n);
        a.runFullQueryAgain
          ? (r = !0)
          : a.changed && ((t = !0), e._setResultData(a.newResults));
      }
    }
  }
  return r
    ? e
        ._execOverDatabase()
        .then(
          (u) => (
            (e._latestChangeEvent =
              e.collection._changeEventBuffer.getCounter()),
            typeof u == 'number'
              ? ((!e._result || u !== e._result.count) &&
                  ((t = !0), e._setResultData(u)),
                t)
              : ((!e._result ||
                  !ms(
                    e.collection.schema.primaryPath,
                    u,
                    e._result.docsData,
                  )) &&
                  ((t = !0), e._setResultData(u)),
                t)
          ),
        )
    : Promise.resolve(t);
}
function Xn(e, t) {
  if (!t.sort) throw _('SNH', { query: t });
  var r = ua(e, t);
  return { query: t, queryPlan: r };
}
async function nf(e) {
  var t = [],
    r = e.collection;
  if (e.isFindOneByIdQuery)
    if (Array.isArray(e.isFindOneByIdQuery)) {
      var o = e.isFindOneByIdQuery;
      if (
        ((o = o.filter((c) => {
          var f = e.collection._docCache.getLatestDocumentDataIfExists(c);
          return f ? (f._deleted || t.push(f), !1) : !0;
        })),
        o.length > 0)
      ) {
        var n = await r.storageInstance.findDocumentsById(o, !1);
        ke(t, n);
      }
    } else {
      var i = e.isFindOneByIdQuery,
        s = e.collection._docCache.getLatestDocumentDataIfExists(i);
      if (!s) {
        var a = await r.storageInstance.findDocumentsById([i], !1);
        a[0] && (s = a[0]);
      }
      s && !s._deleted && t.push(s);
    }
  else {
    var u = e.getPreparedQuery(),
      l = await r.storageInstance.query(u);
    t = l.documents;
  }
  return t;
}
function sf(e, t) {
  if (
    !t.skip &&
    t.selector &&
    Object.keys(t.selector).length === 1 &&
    t.selector[e]
  ) {
    var r = t.selector[e];
    if (typeof r == 'string') return r;
    if (
      (Object.keys(r).length === 1 && typeof r.$eq == 'string') ||
      (Object.keys(r).length === 1 &&
        Array.isArray(r.$eq) &&
        !r.$eq.find((o) => typeof o != 'string'))
    )
      return r.$eq;
  }
  return !1;
}
var ru = '_rxdb_internal';
async function ei(e, t) {
  var r = await e.findDocumentsById([t], !1),
    o = r[0];
  if (o) return o;
}
function jt(e, t, r, o) {
  if (o)
    throw o.status === 409
      ? _('CONFLICT', { collection: e.name, id: t, writeError: o, data: r })
      : o.status === 422
        ? _('VD2', { collection: e.name, id: t, writeError: o, data: r })
        : o;
}
function rL(e, t, r, o, n, i, s) {
  for (
    var a = !!e.schema.attachments,
      u = [],
      l = [],
      c = [],
      f = nt(10),
      h = {
        id: f,
        events: [],
        checkpoint: null,
        context: n,
        startTime: oe(),
        endTime: 0,
      },
      m = h.events,
      d = [],
      y = [],
      b = [],
      x = r.size > 0,
      O,
      $ = o.length,
      Z = function () {
        var z = o[N],
          P = z.document,
          W = z.previous,
          ie = P[t],
          He = P._deleted,
          Lo = W && W._deleted,
          Wt = void 0;
        x && (Wt = r.get(ie));
        var Ke;
        if (Wt) {
          var Ou = Wt._rev;
          if (!W || (W && Ou !== W._rev)) {
            var Eu = {
              isError: !0,
              status: 409,
              documentId: ie,
              writeRow: z,
              documentInDb: Wt,
            };
            return c.push(Eu), 1;
          }
          var fr = a ? Zn(z) : z;
          a &&
            (He
              ? W &&
                Object.keys(W._attachments).forEach((le) => {
                  y.push({
                    documentId: ie,
                    attachmentId: le,
                    digest: F(W)._attachments[le].digest,
                  });
                })
              : (Object.entries(P._attachments).find(([le, _e]) => {
                  var hr = W ? W._attachments[le] : void 0;
                  return (
                    !hr &&
                      !_e.data &&
                      (Ke = {
                        documentId: ie,
                        documentInDb: Wt,
                        isError: !0,
                        status: 510,
                        writeRow: z,
                        attachmentId: le,
                      }),
                    !0
                  );
                }),
                Ke ||
                  Object.entries(P._attachments).forEach(([le, _e]) => {
                    var hr = W ? W._attachments[le] : void 0;
                    if (!hr)
                      d.push({
                        documentId: ie,
                        attachmentId: le,
                        attachmentData: _e,
                        digest: _e.digest,
                      });
                    else {
                      var $u = fr.document._attachments[le].digest;
                      _e.data &&
                        hr.digest !== $u &&
                        b.push({
                          documentId: ie,
                          attachmentId: le,
                          attachmentData: _e,
                          digest: _e.digest,
                        });
                    }
                  }))),
            Ke
              ? c.push(Ke)
              : (a ? (l.push(Zn(fr)), s && s(P)) : (l.push(fr), s && s(P)),
                (O = fr));
          var mr = null,
            Bo = null,
            pr = null;
          if (Lo && !He) (pr = 'INSERT'), (mr = a ? De(P) : P);
          else if (W && !Lo && !He)
            (pr = 'UPDATE'), (mr = a ? De(P) : P), (Bo = W);
          else if (He) (pr = 'DELETE'), (mr = F(P)), (Bo = W);
          else throw _('SNH', { args: { writeRow: z } });
          var Su = {
            documentId: ie,
            documentData: mr,
            previousDocumentData: Bo,
            operation: pr,
          };
          m.push(Su);
        } else {
          var _u = !!He;
          if (
            (a &&
              Object.entries(P._attachments).forEach(([le, _e]) => {
                _e.data
                  ? d.push({
                      documentId: ie,
                      attachmentId: le,
                      attachmentData: _e,
                      digest: _e.digest,
                    })
                  : ((Ke = {
                      documentId: ie,
                      isError: !0,
                      status: 510,
                      writeRow: z,
                      attachmentId: le,
                    }),
                    c.push(Ke));
              }),
            Ke ||
              (a ? (u.push(Zn(z)), i && i(P)) : (u.push(z), i && i(P)),
              (O = z)),
            !_u)
          ) {
            var wu = {
              documentId: ie,
              operation: 'INSERT',
              documentData: a ? De(P) : P,
              previousDocumentData: a && W ? De(W) : W,
            };
            m.push(wu);
          }
        }
      },
      N = 0;
    N < $;
    N++
  )
    Z();
  return {
    bulkInsertDocs: u,
    bulkUpdateDocs: l,
    newestRow: O,
    errors: c,
    eventBulk: h,
    attachmentsAdd: d,
    attachmentsRemove: y,
    attachmentsUpdate: b,
  };
}
function Zn(e) {
  return { previous: e.previous, document: De(e.document) };
}
function af(e) {
  return atob(e).length;
}
function uf(e) {
  var t = e.data;
  if (!t) return e;
  var r = { length: af(t), digest: e.digest, type: e.type };
  return r;
}
function De(e) {
  if (!e._attachments || Object.keys(e._attachments).length === 0) return e;
  var t = q(e);
  return (
    (t._attachments = {}),
    Object.entries(e._attachments).forEach(([r, o]) => {
      t._attachments[r] = uf(o);
    }),
    t
  );
}
function cr(e) {
  return Object.assign({}, e, { _meta: q(e._meta) });
}
var ou = new WeakMap();
function To(e, t, r) {
  L.deepFreezeWhenDevMode(r);
  var o = We(t.schema.primaryKey),
    n = {
      originalStorageInstance: t,
      schema: t.schema,
      internals: t.internals,
      collectionName: t.collectionName,
      databaseName: t.databaseName,
      options: t.options,
      bulkWrite(i, s) {
        for (
          var a = e.token, u = new Array(i.length), l = oe(), c = 0;
          c < i.length;
          c++
        ) {
          var f = i[c],
            h = cr(f.document);
          h._meta.lwt = l;
          var m = f.previous;
          (h._rev = Ct(a, m)), (u[c] = { document: h, previous: m });
        }
        return (
          Y('preStorageWrite', {
            storageInstance: this.originalStorageInstance,
            rows: u,
          }),
          e
            .lockedRun(() => t.bulkWrite(u, s))
            .then((d) => {
              var y = { error: [] },
                b = be(o, u, d);
              ou.set(y, b);
              var x =
                d.error.length === 0
                  ? []
                  : d.error.filter(($) =>
                      $.status === 409 &&
                      !$.writeRow.previous &&
                      !$.writeRow.document._deleted &&
                      F($.documentInDb)._deleted
                        ? !0
                        : (y.error.push($), !1),
                    );
              if (x.length > 0) {
                var O = x.map(($) => ({
                  previous: $.documentInDb,
                  document: Object.assign({}, $.writeRow.document, {
                    _rev: Ct(e.token, $.documentInDb),
                  }),
                }));
                return e
                  .lockedRun(() => t.bulkWrite(O, s))
                  .then(($) => {
                    ke(y.error, $.error);
                    var Z = be(o, O, $);
                    return ke(b, Z), y;
                  });
              }
              return y;
            })
        );
      },
      query(i) {
        return e.lockedRun(() => t.query(i));
      },
      count(i) {
        return e.lockedRun(() => t.count(i));
      },
      findDocumentsById(i, s) {
        return e.lockedRun(() => t.findDocumentsById(i, s));
      },
      getAttachmentData(i, s, a) {
        return e.lockedRun(() => t.getAttachmentData(i, s, a));
      },
      getChangedDocumentsSince: t.getChangedDocumentsSince
        ? (i, s) => e.lockedRun(() => t.getChangedDocumentsSince(F(i), s))
        : void 0,
      cleanup(i) {
        return e.lockedRun(() => t.cleanup(i));
      },
      remove() {
        return e.storageInstances.delete(n), e.lockedRun(() => t.remove());
      },
      close() {
        return e.storageInstances.delete(n), e.lockedRun(() => t.close());
      },
      changeStream() {
        return t.changeStream();
      },
      conflictResultionTasks() {
        return t.conflictResultionTasks();
      },
      resolveConflictResultionTask(i) {
        if (i.output.isEqual) return t.resolveConflictResultionTask(i);
        var s = Object.assign({}, i.output.documentData, {
            _meta: je(),
            _rev: Pe(),
            _attachments: {},
          }),
          a = q(s);
        return (
          delete a._meta,
          delete a._rev,
          delete a._attachments,
          t.resolveConflictResultionTask({
            id: i.id,
            output: { isEqual: !1, documentData: a },
          })
        );
      },
    };
  return e.storageInstances.add(n), n;
}
function oL(e) {
  if (e.schema.keyCompression) throw _('UT5', { args: { params: e } });
  if (cf(e.schema)) throw _('UT6', { args: { params: e } });
  if (e.schema.attachments && e.schema.attachments.compression)
    throw _('UT7', { args: { params: e } });
}
function cf(e) {
  return !!(
    (e.encrypted && e.encrypted.length > 0) ||
    (e.attachments && e.attachments.encrypted)
  );
}
function be(e, t, r) {
  var o = ou.get(r);
  if (o) return o;
  var n = [];
  if (r.error.length > 0) {
    for (var i = new Set(), s = 0; s < r.error.length; s++) {
      var a = r.error[s];
      i.add(a.documentId);
    }
    for (var u = 0; u < t.length; u++) {
      var l = t[u].document;
      i.has(l[e]) || n.push(De(l));
    }
  } else {
    n.length = t.length - r.error.length;
    for (var c = 0; c < t.length; c++) {
      var f = t[c].document;
      n[c] = De(f);
    }
  }
  return n;
}
var nu = (function () {
  function e(r, o, n, i) {
    (this.queueByDocId = new Map()),
      (this.isRunning = !1),
      (this.storageInstance = r),
      (this.primaryPath = o),
      (this.preWrite = n),
      (this.postWrite = i);
  }
  var t = e.prototype;
  return (
    (t.addWrite = function (o, n) {
      var i = o[this.primaryPath],
        s = Oe(this.queueByDocId, i, () => []),
        a = new Promise((u, l) => {
          var c = {
            lastKnownDocumentState: o,
            modifier: n,
            resolve: u,
            reject: l,
          };
          F(s).push(c), this.triggerRun();
        });
      return a;
    }),
    (t.triggerRun = async function () {
      if (!(this.isRunning === !0 || this.queueByDocId.size === 0)) {
        this.isRunning = !0;
        var o = [],
          n = this.queueByDocId;
        (this.queueByDocId = new Map()),
          await Promise.all(
            Array.from(n.entries()).map(async ([s, a]) => {
              var u = lf(a.map((f) => f.lastKnownDocumentState)),
                l = u;
              for (var c of a)
                try {
                  l = await c.modifier(Ie(l));
                } catch (f) {
                  c.reject(f), (c.reject = () => {}), (c.resolve = () => {});
                }
              try {
                await this.preWrite(l, u);
              } catch (f) {
                a.forEach((h) => h.reject(f));
                return;
              }
              o.push({ previous: u, document: l });
            }),
          );
        var i =
          o.length > 0
            ? await this.storageInstance.bulkWrite(o, 'incremental-write')
            : { error: [] };
        return (
          await Promise.all(
            be(this.primaryPath, o, i).map((s) => {
              var a = s[this.primaryPath];
              this.postWrite(s);
              var u = Ve(n, a);
              u.forEach((l) => l.resolve(s));
            }),
          ),
          i.error.forEach((s) => {
            var a = s.documentId,
              u = Ve(n, a),
              l = gr(s);
            if (l) {
              var c = Oe(this.queueByDocId, a, () => []);
              u.reverse().forEach((h) => {
                (h.lastKnownDocumentState = F(l.documentInDb)), F(c).unshift(h);
              });
            } else {
              var f = xi(s);
              u.forEach((h) => h.reject(f));
            }
          }),
          (this.isRunning = !1),
          this.triggerRun()
        );
      }
    }),
    e
  );
})();
function ti(e) {
  var t = async (r) => {
    var o = fs(r);
    o._deleted = r._deleted;
    var n = await e(o),
      i = Object.assign({}, n, {
        _meta: r._meta,
        _attachments: r._attachments,
        _rev: r._rev,
        _deleted: typeof n._deleted < 'u' ? n._deleted : r._deleted,
      });
    return typeof i._deleted > 'u' && (i._deleted = !1), i;
  };
  return t;
}
function lf(e) {
  var t = e[0],
    r = st(t._rev);
  return (
    e.forEach((o) => {
      var n = st(o._rev);
      n > r && ((t = o), (r = n));
    }),
    t
  );
}
var ri = {
  get primaryPath() {
    var e = this;
    if (e.isInstanceOfRxDocument) return e.collection.schema.primaryPath;
  },
  get primary() {
    var e = this;
    if (e.isInstanceOfRxDocument) return e._data[e.primaryPath];
  },
  get revision() {
    var e = this;
    if (e.isInstanceOfRxDocument) return e._data._rev;
  },
  get deleted$() {
    var e = this;
    if (e.isInstanceOfRxDocument) return e.$.pipe(K((t) => t._data._deleted));
  },
  get deleted$$() {
    var e = this,
      t = e.collection.database.getReactivityFactory();
    return t.fromObservable(
      e.deleted$,
      e.getLatest().deleted,
      e.collection.database,
    );
  },
  get deleted() {
    var e = this;
    if (e.isInstanceOfRxDocument) return e._data._deleted;
  },
  getLatest() {
    var e = this.collection._docCache.getLatestDocumentData(this.primary);
    return this.collection._docCache.getCachedRxDocument(e);
  },
  get $() {
    var e = this;
    return e.collection.$.pipe(
      j((t) => !t.isLocal),
      j((t) => t.documentId === this.primary),
      K((t) => sa(t)),
      Xt(e.collection._docCache.getLatestDocumentData(this.primary)),
      Ze((t, r) => t._rev === r._rev),
      K((t) => this.collection._docCache.getCachedRxDocument(t)),
      xt(Kr),
    );
  },
  get $$() {
    var e = this,
      t = e.collection.database.getReactivityFactory();
    return t.fromObservable(e.$, e.getLatest()._data, e.collection.database);
  },
  get$(e) {
    if (L.isDevMode()) {
      if (e.includes('.item.')) throw _('DOC1', { path: e });
      if (e === this.primaryPath) throw _('DOC2');
      if (this.collection.schema.finalFields.includes(e))
        throw _('DOC3', { path: e });
      var t = at(this.collection.schema.jsonSchema, e);
      if (!t) throw _('DOC4', { path: e });
    }
    return this.$.pipe(
      K((r) => At(r, e)),
      Ze(),
    );
  },
  get$$(e) {
    var t = this.get$(e),
      r = this.collection.database.getReactivityFactory();
    return r.fromObservable(
      t,
      this.getLatest().get(e),
      this.collection.database,
    );
  },
  populate(e) {
    var t = at(this.collection.schema.jsonSchema, e),
      r = this.get(e);
    if (!r) return ds;
    if (!t) throw _('DOC5', { path: e });
    if (!t.ref) throw _('DOC6', { path: e, schemaObj: t });
    var o = this.collection.database.collections[t.ref];
    if (!o) throw _('DOC7', { ref: t.ref, path: e, schemaObj: t });
    return t.type === 'array'
      ? o
          .findByIds(r)
          .exec()
          .then((n) => {
            var i = n.values();
            return Array.from(i);
          })
      : o.findOne(r).exec();
  },
  get(e) {
    return au(this, e);
  },
  toJSON(e = !1) {
    if (e) return L.deepFreezeWhenDevMode(this._data);
    var t = q(this._data);
    return (
      delete t._rev,
      delete t._attachments,
      delete t._deleted,
      delete t._meta,
      L.deepFreezeWhenDevMode(t)
    );
  },
  toMutableJSON(e = !1) {
    return Ie(this.toJSON(e));
  },
  update(e) {
    throw M('update');
  },
  incrementalUpdate(e) {
    throw M('update');
  },
  updateCRDT(e) {
    throw M('crdt');
  },
  putAttachment() {
    throw M('attachments');
  },
  getAttachment() {
    throw M('attachments');
  },
  allAttachments() {
    throw M('attachments');
  },
  get allAttachments$() {
    throw M('attachments');
  },
  async modify(e, t) {
    var r = this._data,
      o = await ti(e)(r);
    return this._saveData(o, r);
  },
  incrementalModify(e, t) {
    return this.collection.incrementalWriteQueue
      .addWrite(this._data, ti(e))
      .then((r) => this.collection._docCache.getCachedRxDocument(r));
  },
  patch(e) {
    var t = this._data,
      r = Ie(t);
    return (
      Object.entries(e).forEach(([o, n]) => {
        r[o] = n;
      }),
      this._saveData(r, t)
    );
  },
  incrementalPatch(e) {
    return this.incrementalModify(
      (t) => (
        Object.entries(e).forEach(([r, o]) => {
          t[r] = o;
        }),
        t
      ),
    );
  },
  async _saveData(e, t) {
    if (((e = q(e)), this._data._deleted))
      throw _('DOC11', { id: this.primary, document: this });
    await oi(this.collection, e, t);
    var r = [{ previous: t, document: e }],
      o = await this.collection.storageInstance.bulkWrite(
        r,
        'rx-document-save-data',
      ),
      n = o.error[0];
    return (
      jt(this.collection, this.primary, e, n),
      await this.collection._runHooks('post', 'save', e, this),
      this.collection._docCache.getCachedRxDocument(
        be(this.collection.schema.primaryPath, r, o)[0],
      )
    );
  },
  remove() {
    var e = this.collection;
    if (this.deleted)
      return Promise.reject(_('DOC13', { document: this, id: this.primary }));
    var t = q(this._data),
      r;
    return e
      ._runHooks('pre', 'remove', t, this)
      .then(async () => {
        t._deleted = !0;
        var o = [{ previous: this._data, document: t }],
          n = await e.storageInstance.bulkWrite(o, 'rx-document-remove'),
          i = n.error[0];
        return (
          jt(e, this.primary, t, i),
          be(this.collection.schema.primaryPath, o, n)[0]
        );
      })
      .then(
        (o) => ((r = o), this.collection._runHooks('post', 'remove', t, this)),
      )
      .then(() => this.collection._docCache.getCachedRxDocument(r));
  },
  incrementalRemove() {
    return this.incrementalModify(
      async (e) => (
        await this.collection._runHooks('pre', 'remove', e, this),
        (e._deleted = !0),
        e
      ),
    ).then(
      async (e) => (
        await this.collection._runHooks('post', 'remove', e._data, e), e
      ),
    );
  },
  destroy() {
    throw _('DOC14');
  },
};
function iu(e = ri) {
  var t = function (o, n) {
    (this.collection = o),
      (this._data = n),
      (this._propertyCache = new Map()),
      (this.isInstanceOfRxDocument = !0);
  };
  return (t.prototype = e), t;
}
function su(e, t, r) {
  var o = new e(t, r);
  return Y('createRxDocument', o), o;
}
function oi(e, t, r) {
  return (
    (t._meta = Object.assign({}, r._meta, t._meta)),
    L.isDevMode() && e.schema.validateChange(r, t),
    e._runHooks('pre', 'save', t, r)
  );
}
function au(e, t) {
  return Oe(e._propertyCache, t, () => {
    var r = At(e._data, t);
    if (typeof r != 'object' || r === null || Array.isArray(r))
      return L.deepFreezeWhenDevMode(r);
    var o = new Proxy(q(r), {
      get(n, i) {
        if (typeof i != 'string') return n[i];
        var s = i.charAt(i.length - 1);
        if (s === '$')
          if (i.endsWith('$$')) {
            var a = i.slice(0, -2);
            return e.get$$(it(t + '.' + a));
          } else {
            var u = i.slice(0, -1);
            return e.get$(it(t + '.' + u));
          }
        else if (s === '_') {
          var l = i.slice(0, -1);
          return e.populate(it(t + '.' + l));
        } else {
          var c = n[i];
          return typeof c == 'number' ||
            typeof c == 'string' ||
            typeof c == 'boolean'
            ? c
            : au(e, it(t + '.' + i));
        }
      },
    });
    return o;
  });
}
var Vt = 'collection',
  ni = 'storage-token',
  ff = 'rx-migration-status',
  mf = 'RxInternalDocument',
  Do = Qr({
    version: 0,
    title: mf,
    primaryKey: { key: 'id', fields: ['context', 'key'], separator: '|' },
    type: 'object',
    properties: {
      id: { type: 'string', maxLength: 200 },
      key: { type: 'string' },
      context: { type: 'string', enum: [Vt, ni, ff, 'OTHER'] },
      data: { type: 'object', additionalProperties: !0 },
    },
    indexes: [],
    required: ['key', 'context', 'data'],
    additionalProperties: !1,
    sharding: { shards: 1, mode: 'collection' },
  });
function Mo(e, t) {
  return Zt(Do, { key: e, context: t });
}
async function No(e) {
  var t = Xn(e.schema, {
      selector: { context: Vt, _deleted: { $eq: !1 } },
      sort: [{ id: 'asc' }],
      skip: 0,
    }),
    r = await e.query(t),
    o = r.documents;
  return o;
}
var uu = 'storageToken',
  pf = Mo(uu, ni);
async function cu(e) {
  var t = nt(10),
    r = e.password ? await e.hashFunction(JSON.stringify(e.password)) : void 0,
    o = {
      id: pf,
      context: ni,
      key: uu,
      data: {
        rxdbVersion: e.rxdbVersion,
        token: t,
        instanceToken: e.token,
        passwordHash: r,
      },
      _deleted: !1,
      _meta: je(),
      _rev: Pe(),
      _attachments: {},
    },
    n = [{ document: o }],
    i = await e.internalStore.bulkWrite(n, 'internal-add-storage-token');
  if (!i.error[0]) return be('id', n, i)[0];
  var s = F(i.error[0]);
  if (s.isError && gr(s)) {
    var a = s;
    if (!hf(a.documentInDb.data.rxdbVersion, e.rxdbVersion))
      throw _('DM5', {
        args: {
          database: e.name,
          databaseStateVersion: a.documentInDb.data.rxdbVersion,
          codeVersion: e.rxdbVersion,
        },
      });
    if (r && r !== a.documentInDb.data.passwordHash)
      throw _('DB1', {
        passwordHash: r,
        existingPasswordHash: a.documentInDb.data.passwordHash,
      });
    var u = a.documentInDb;
    return F(u);
  }
  throw s;
}
function hf(e, t) {
  if (!e || (t.includes('beta') && t !== e)) return !1;
  var r = e.split('.')[0],
    o = t.split('.')[0];
  return r === o;
}
function ii(e, t) {
  return e + '-' + t.version;
}
function lr(e, t) {
  return (
    (t = q(t)),
    (t = _s(e, t)),
    typeof e.jsonSchema.primaryKey != 'string' &&
      (t = xs(e.primaryPath, e.jsonSchema, t)),
    (t._meta = je()),
    Object.prototype.hasOwnProperty.call(t, '_deleted') || (t._deleted = !1),
    Object.prototype.hasOwnProperty.call(t, '_attachments') ||
      (t._attachments = {}),
    Object.prototype.hasOwnProperty.call(t, '_rev') || (t._rev = Pe()),
    t
  );
}
async function lu(e, t) {
  t.multiInstance = e.multiInstance;
  var r = await e.storage.createStorageInstance(t);
  return r;
}
async function ko(e, t, r, o, n, i, s) {
  var a = await No(t),
    u = a.filter((h) => h.data.name === n),
    l = [];
  u.forEach((h) => {
    l.push({
      collectionName: h.data.name,
      schema: h.data.schema,
      isCollection: !0,
    }),
      h.data.connectedStorages.forEach((m) =>
        l.push({
          collectionName: m.collectionName,
          isCollection: !1,
          schema: m.schema,
        }),
      );
  });
  var c = new Set();
  if (
    ((l = l.filter((h) => {
      var m = h.collectionName + '||' + h.schema.version;
      return c.has(m) ? !1 : (c.add(m), !0);
    })),
    await Promise.all(
      l.map(async (h) => {
        var m = await e.createStorageInstance({
          collectionName: h.collectionName,
          databaseInstanceToken: r,
          databaseName: o,
          multiInstance: !1,
          options: {},
          schema: h.schema,
          password: i,
          devMode: L.isDevMode(),
        });
        await m.remove(),
          h.isCollection &&
            (await qe('postRemoveRxCollection', {
              storage: e,
              databaseName: o,
              collectionName: n,
            }));
      }),
    ),
    s)
  ) {
    var f = u.map((h) => {
      var m = cr(h);
      return (
        (m._deleted = !0),
        (m._meta.lwt = oe()),
        (m._rev = Ct(r, h)),
        { previous: h, document: m }
      );
    });
    await t.bulkWrite(f, 'rx-database-remove-collection-all');
  }
}
function ye(e) {
  if (e.destroyed)
    throw _('COL21', { collection: e.name, version: e.schema.version });
}
var df = (function () {
  function e(r) {
    (this.subs = []),
      (this.counter = 0),
      (this.eventCounterMap = new WeakMap()),
      (this.buffer = []),
      (this.limit = 100),
      (this.tasks = new Set()),
      (this.collection = r),
      this.subs.push(
        this.collection.database.eventBulks$
          .pipe(
            j((o) => o.collectionName === this.collection.name),
            j((o) => {
              var n = o.events[0];
              return !n.isLocal;
            }),
          )
          .subscribe((o) => {
            this.tasks.add(() => this._handleChangeEvents(o.events)),
              this.tasks.size <= 1 &&
                Tt().then(() => {
                  this.processTasks();
                });
          }),
      );
  }
  var t = e.prototype;
  return (
    (t.processTasks = function () {
      if (this.tasks.size !== 0) {
        var o = Array.from(this.tasks);
        o.forEach((n) => n()), this.tasks.clear();
      }
    }),
    (t._handleChangeEvents = function (o) {
      var n = this.counter;
      (this.counter = this.counter + o.length),
        o.length > this.limit
          ? (this.buffer = o.slice(o.length * -1))
          : (ke(this.buffer, o),
            (this.buffer = this.buffer.slice(this.limit * -1)));
      for (var i = n + 1, s = this.eventCounterMap, a = 0; a < o.length; a++) {
        var u = o[a];
        s.set(u, i + a);
      }
    }),
    (t.getCounter = function () {
      return this.processTasks(), this.counter;
    }),
    (t.getBuffer = function () {
      return this.processTasks(), this.buffer;
    }),
    (t.getArrayIndexByPointer = function (o) {
      this.processTasks();
      var n = this.buffer[0],
        i = this.eventCounterMap.get(n);
      if (o < i) return null;
      var s = o - i;
      return s;
    }),
    (t.getFrom = function (o) {
      this.processTasks();
      var n = [],
        i = this.getArrayIndexByPointer(o);
      if (i === null) return null;
      for (;;) {
        var s = this.buffer[i];
        if ((i++, s)) n.push(s);
        else return n;
      }
    }),
    (t.runFrom = function (o, n) {
      this.processTasks();
      var i = this.getFrom(o);
      if (i === null) throw new Error('out of bounds');
      i.forEach((s) => n(s));
    }),
    (t.reduceByLastOfDoc = function (o) {
      return this.processTasks(), o.slice(0);
      var n = {};
      return (
        o.forEach((i) => {
          n[i.documentId] = i;
        }),
        Object.values(n)
      );
    }),
    (t.destroy = function () {
      this.tasks.clear(), this.subs.forEach((o) => o.unsubscribe());
    }),
    e
  );
})();
function fu(e) {
  return new df(e);
}
var yf = new WeakMap();
function gf(e) {
  var t = e.schema.getDocumentPrototype(),
    r = vf(e),
    o = ri,
    n = {};
  return (
    [t, r, o].forEach((i) => {
      var s = Object.getOwnPropertyNames(i);
      s.forEach((a) => {
        var u = Object.getOwnPropertyDescriptor(i, a),
          l = !0;
        (a.startsWith('_') ||
          a.endsWith('_') ||
          a.startsWith('$') ||
          a.endsWith('$')) &&
          (l = !1),
          typeof u.value == 'function'
            ? Object.defineProperty(n, a, {
                get() {
                  return u.value.bind(this);
                },
                enumerable: l,
                configurable: !1,
              })
            : ((u.enumerable = l),
              (u.configurable = !1),
              u.writable && (u.writable = !1),
              Object.defineProperty(n, a, u));
      });
    }),
    n
  );
}
function mu(e) {
  return Oe(yf, e, () => iu(gf(e)));
}
function pu(e, t, r) {
  var o = su(t, e, L.deepFreezeWhenDevMode(r));
  return (
    e._runHooksSync('post', 'create', r, o), Y('postCreateRxDocument', o), o
  );
}
function vf(e) {
  var t = {};
  return (
    Object.entries(e.methods).forEach(([r, o]) => {
      t[r] = o;
    }),
    t
  );
}
var si = function (e, t) {
  var r = De(e.newDocumentState),
    o = De(e.realMasterState);
  return It(r, o)
    ? Promise.resolve({ isEqual: !0 })
    : Promise.resolve({ isEqual: !1, documentData: e.realMasterState });
};
var du = ['pre', 'post'],
  yu = ['insert', 'save', 'remove', 'create'],
  hu = !1,
  xf = (function () {
    function e(
      r,
      o,
      n,
      i,
      s = {},
      a = {},
      u = {},
      l = {},
      c = {},
      f = Gn,
      h = {},
      m = si,
    ) {
      (this.storageInstance = {}),
        (this.timeouts = new Set()),
        (this.incrementalWriteQueue = {}),
        (this.awaitBeforeReads = new Set()),
        (this._incrementalUpsertQueues = new Map()),
        (this.synced = !1),
        (this.hooks = {}),
        (this._subs = []),
        (this._docCache = {}),
        (this._queryCache = Ga()),
        (this.$ = {}),
        (this.checkpoint$ = {}),
        (this._changeEventBuffer = {}),
        (this.onDestroy = []),
        (this.destroyed = !1),
        (this.onRemove = []),
        (this.database = r),
        (this.name = o),
        (this.schema = n),
        (this.internalStorageInstance = i),
        (this.instanceCreationOptions = s),
        (this.migrationStrategies = a),
        (this.methods = u),
        (this.attachments = l),
        (this.options = c),
        (this.cacheReplacementPolicy = f),
        (this.statics = h),
        (this.conflictHandler = m),
        bf(this.asRxCollection);
    }
    var t = e.prototype;
    return (
      (t.prepare = async function () {
        (this.storageInstance = To(
          this.database,
          this.internalStorageInstance,
          this.schema.jsonSchema,
        )),
          (this.incrementalWriteQueue = new nu(
            this.storageInstance,
            this.schema.primaryPath,
            (u, l) => oi(this, u, l),
            (u) => this._runHooks('post', 'save', u),
          ));
        var o = this.database.eventBulks$.pipe(
          j((u) => u.collectionName === this.name),
        );
        (this.$ = o.pipe(Q((u) => u.events))),
          (this.checkpoint$ = o.pipe(K((u) => u.checkpoint))),
          (this._changeEventBuffer = fu(this.asRxCollection));
        var n;
        this._docCache = new Za(
          this.schema.primaryPath,
          this.database.eventBulks$.pipe(
            j((u) => u.collectionName === this.name && !u.events[0].isLocal),
            K((u) => u.events),
          ),
          (u) => (
            n || (n = mu(this.asRxCollection)), pu(this.asRxCollection, n, u)
          ),
        );
        var i = this.database.internalStore
          .changeStream()
          .pipe(
            j((u) => {
              var l = this.name + '-' + this.schema.version,
                c = u.events.find(
                  (f) =>
                    f.documentData.context === 'collection' &&
                    f.documentData.key === l &&
                    f.operation === 'DELETE',
                );
              return !!c;
            }),
          )
          .subscribe(async () => {
            await this.destroy(),
              await Promise.all(this.onRemove.map((u) => u()));
          });
        this._subs.push(i);
        var s = await this.database.storageToken,
          a = this.storageInstance.changeStream().subscribe((u) => {
            for (
              var l = new Array(u.events.length),
                c = u.events,
                f = this.name,
                h = L.deepFreezeWhenDevMode,
                m = 0;
              m < c.length;
              m++
            ) {
              var d = c[m];
              l[m] = {
                documentId: d.documentId,
                collectionName: f,
                isLocal: !1,
                operation: d.operation,
                documentData: h(d.documentData),
                previousDocumentData: h(d.previousDocumentData),
              };
            }
            var y = {
              id: u.id,
              internal: !1,
              collectionName: this.name,
              storageToken: s,
              events: l,
              databaseToken: this.database.token,
              checkpoint: u.checkpoint,
              context: u.context,
              endTime: u.endTime,
              startTime: u.startTime,
            };
            this.database.$emit(y);
          });
        return (
          this._subs.push(a),
          this._subs.push(
            this.storageInstance.conflictResultionTasks().subscribe((u) => {
              this.conflictHandler(u.input, u.context).then((l) => {
                this.storageInstance.resolveConflictResultionTask({
                  id: u.id,
                  output: l,
                });
              });
            }),
          ),
          Rt
        );
      }),
      (t.cleanup = function (o) {
        throw (ye(this), M('cleanup'));
      }),
      (t.migrationNeeded = function () {
        throw M('migration-schema');
      }),
      (t.getMigrationState = function () {
        throw M('migration-schema');
      }),
      (t.startMigration = function (o = 10) {
        return ye(this), this.getMigrationState().startMigration(o);
      }),
      (t.migratePromise = function (o = 10) {
        return this.getMigrationState().migratePromise(o);
      }),
      (t.insert = async function (o) {
        ye(this);
        var n = await this.bulkInsert([o]),
          i = n.error[0];
        jt(this, o[this.schema.primaryPath], o, i);
        var s = F(n.success[0]);
        return s;
      }),
      (t.bulkInsert = async function (o) {
        if ((ye(this), o.length === 0)) return { success: [], error: [] };
        var n = this.schema.primaryPath,
          i = new Set(),
          s;
        if (this.hasHooks('pre', 'insert'))
          s = await Promise.all(
            o.map((b) => {
              var x = lr(this.schema, b);
              return this._runHooks('pre', 'insert', x).then(
                () => (i.add(x[n]), { document: x }),
              );
            }),
          );
        else {
          s = new Array(o.length);
          for (var a = this.schema, u = 0; u < o.length; u++) {
            var l = o[u],
              c = lr(a, l);
            i.add(c[n]), (s[u] = { document: c });
          }
        }
        if (i.size !== o.length)
          throw _('COL22', { collection: this.name, args: { documents: o } });
        var f = await this.storageInstance.bulkWrite(
            s,
            'rx-collection-bulk-insert',
          ),
          h,
          m = this,
          d = {
            get success() {
              if (!h) {
                var b = be(m.schema.primaryPath, s, f);
                h = Ro(m._docCache, b);
              }
              return h;
            },
            error: f.error,
          };
        if (this.hasHooks('post', 'insert')) {
          var y = new Map();
          s.forEach((b) => {
            var x = b.document;
            y.set(x[n], x);
          }),
            await Promise.all(
              d.success.map((b) =>
                this._runHooks('post', 'insert', y.get(b.primary), b),
              ),
            );
        }
        return d;
      }),
      (t.bulkRemove = async function (o) {
        ye(this);
        var n = this.schema.primaryPath;
        if (o.length === 0) return { success: [], error: [] };
        var i = await this.findByIds(o).exec(),
          s = [],
          a = new Map();
        Array.from(i.values()).forEach((m) => {
          var d = m.toMutableJSON(!0);
          s.push(d), a.set(m.primary, d);
        }),
          await Promise.all(
            s.map((m) => {
              var d = m[this.schema.primaryPath];
              return this._runHooks('pre', 'remove', m, i.get(d));
            }),
          );
        var u = s.map((m) => {
            var d = q(m);
            return (d._deleted = !0), { previous: m, document: d };
          }),
          l = await this.storageInstance.bulkWrite(
            u,
            'rx-collection-bulk-remove',
          ),
          c = be(this.schema.primaryPath, u, l),
          f = c.map((m) => m[n]);
        await Promise.all(
          f.map((m) => this._runHooks('post', 'remove', a.get(m), i.get(m))),
        );
        var h = f.map((m) => Ve(i, m));
        return { success: h, error: l.error };
      }),
      (t.bulkUpsert = async function (o) {
        ye(this);
        var n = [],
          i = new Map();
        o.forEach((l) => {
          var c = lr(this.schema, l),
            f = c[this.schema.primaryPath];
          if (!f)
            throw _('COL3', {
              primaryPath: this.schema.primaryPath,
              data: c,
              schema: this.schema.jsonSchema,
            });
          i.set(f, c), n.push(c);
        });
        var s = await this.bulkInsert(n),
          a = s.success.slice(0),
          u = [];
        return (
          await Promise.all(
            s.error.map(async (l) => {
              if (l.status !== 409) u.push(l);
              else {
                var c = l.documentId,
                  f = Ve(i, c),
                  h = F(l.documentInDb),
                  m = this._docCache.getCachedRxDocuments([h])[0],
                  d = await m.incrementalModify(() => f);
                a.push(d);
              }
            }),
          ),
          { error: u, success: a }
        );
      }),
      (t.upsert = async function (o) {
        ye(this);
        var n = await this.bulkUpsert([o]);
        return (
          jt(this.asRxCollection, o[this.schema.primaryPath], o, n.error[0]),
          n.success[0]
        );
      }),
      (t.incrementalUpsert = function (o) {
        ye(this);
        var n = lr(this.schema, o),
          i = n[this.schema.primaryPath];
        if (!i) throw _('COL4', { data: o });
        var s = this._incrementalUpsertQueues.get(i);
        return (
          s || (s = Rt),
          (s = s
            .then(() => wf(this, i, n))
            .then((a) => (a.inserted ? a.doc : _f(a.doc, n)))),
          this._incrementalUpsertQueues.set(i, s),
          s
        );
      }),
      (t.find = function (o) {
        if ((ye(this), typeof o == 'string')) throw _('COL5', { queryObj: o });
        o || (o = ur());
        var n = Ut('find', o, this);
        return n;
      }),
      (t.findOne = function (o) {
        if ((ye(this), typeof o == 'number' || Array.isArray(o)))
          throw yr('COL6', { queryObj: o });
        var n;
        if (typeof o == 'string')
          n = Ut(
            'findOne',
            { selector: { [this.schema.primaryPath]: o }, limit: 1 },
            this,
          );
        else {
          if ((o || (o = ur()), o.limit)) throw _('QU6');
          (o = q(o)), (o.limit = 1), (n = Ut('findOne', o, this));
        }
        return n;
      }),
      (t.count = function (o) {
        ye(this), o || (o = ur());
        var n = Ut('count', o, this);
        return n;
      }),
      (t.findByIds = function (o) {
        ye(this);
        var n = {
            selector: { [this.schema.primaryPath]: { $in: o.slice(0) } },
          },
          i = Ut('findByIds', n, this);
        return i;
      }),
      (t.exportJSON = function () {
        throw M('json-dump');
      }),
      (t.importJSON = function (o) {
        throw M('json-dump');
      }),
      (t.insertCRDT = function (o) {
        throw M('crdt');
      }),
      (t.addPipeline = function (o) {
        throw M('pipeline');
      }),
      (t.addHook = function (o, n, i, s = !1) {
        if (typeof i != 'function') throw yr('COL7', { key: n, when: o });
        if (!du.includes(o)) throw yr('COL8', { key: n, when: o });
        if (!yu.includes(n)) throw _('COL9', { key: n });
        if (o === 'post' && n === 'create' && s === !0)
          throw _('COL10', { when: o, key: n, parallel: s });
        var a = i.bind(this),
          u = s ? 'parallel' : 'series';
        (this.hooks[n] = this.hooks[n] || {}),
          (this.hooks[n][o] = this.hooks[n][o] || { series: [], parallel: [] }),
          this.hooks[n][o][u].push(a);
      }),
      (t.getHooks = function (o, n) {
        return !this.hooks[n] || !this.hooks[n][o]
          ? { series: [], parallel: [] }
          : this.hooks[n][o];
      }),
      (t.hasHooks = function (o, n) {
        if (!this.hooks[n] || !this.hooks[n][o]) return !1;
        var i = this.getHooks(o, n);
        return i ? i.series.length > 0 || i.parallel.length > 0 : !1;
      }),
      (t._runHooks = function (o, n, i, s) {
        var a = this.getHooks(o, n);
        if (!a) return Rt;
        var u = a.series.map((l) => () => l(i, s));
        return gs(u).then(() => Promise.all(a.parallel.map((l) => l(i, s))));
      }),
      (t._runHooksSync = function (o, n, i, s) {
        if (this.hasHooks(o, n)) {
          var a = this.getHooks(o, n);
          a && a.series.forEach((u) => u(i, s));
        }
      }),
      (t.promiseWait = function (o) {
        var n = new Promise((i) => {
          var s = setTimeout(() => {
            this.timeouts.delete(s), i();
          }, o);
          this.timeouts.add(s);
        });
        return n;
      }),
      (t.destroy = async function () {
        return this.destroyed
          ? Ae
          : (await Promise.all(this.onDestroy.map((o) => o())),
            (this.destroyed = !0),
            Array.from(this.timeouts).forEach((o) => clearTimeout(o)),
            this._changeEventBuffer && this._changeEventBuffer.destroy(),
            this.database
              .requestIdlePromise()
              .then(() => this.storageInstance.close())
              .then(
                () => (
                  this._subs.forEach((o) => o.unsubscribe()),
                  delete this.database.collections[this.name],
                  qe('postDestroyRxCollection', this).then(() => !0)
                ),
              ));
      }),
      (t.remove = async function () {
        await this.destroy(),
          await Promise.all(this.onRemove.map((o) => o())),
          await ko(
            this.database.storage,
            this.database.internalStore,
            this.database.token,
            this.database.name,
            this.name,
            this.database.password,
            this.database.hashFunction,
          );
      }),
      te(e, [
        {
          key: 'insert$',
          get: function () {
            return this.$.pipe(j((r) => r.operation === 'INSERT'));
          },
        },
        {
          key: 'update$',
          get: function () {
            return this.$.pipe(j((r) => r.operation === 'UPDATE'));
          },
        },
        {
          key: 'remove$',
          get: function () {
            return this.$.pipe(j((r) => r.operation === 'DELETE'));
          },
        },
        {
          key: 'asRxCollection',
          get: function () {
            return this;
          },
        },
      ])
    );
  })();
function bf(e) {
  if (!hu) {
    hu = !0;
    var t = Object.getPrototypeOf(e);
    yu.forEach((r) => {
      du.map((o) => {
        var n = o + zr(r);
        t[n] = function (i, s) {
          return this.addHook(o, r, i, s);
        };
      });
    });
  }
}
function _f(e, t) {
  return e.incrementalModify((r) => t);
}
function wf(e, t, r) {
  var o = e._docCache.getLatestDocumentDataIfExists(t);
  return o
    ? Promise.resolve({
        doc: e._docCache.getCachedRxDocuments([o])[0],
        inserted: !1,
      })
    : e
        .findOne(t)
        .exec()
        .then((n) =>
          n
            ? { doc: n, inserted: !1 }
            : e.insert(r).then((i) => ({ doc: i, inserted: !0 })),
        );
}
function gu({
  database: e,
  name: t,
  schema: r,
  instanceCreationOptions: o = {},
  migrationStrategies: n = {},
  autoMigrate: i = !0,
  statics: s = {},
  methods: a = {},
  attachments: u = {},
  options: l = {},
  localDocuments: c = !1,
  cacheReplacementPolicy: f = Gn,
  conflictHandler: h = si,
}) {
  var m = {
    databaseInstanceToken: e.token,
    databaseName: e.name,
    collectionName: t,
    schema: r.jsonSchema,
    options: o,
    multiInstance: e.multiInstance,
    password: e.password,
    devMode: L.isDevMode(),
  };
  return (
    Y('preCreateRxStorageInstance', m),
    lu(e, m).then((d) => {
      var y = new xf(e, t, r, d, o, n, a, u, l, f, s, h);
      return y
        .prepare()
        .then(() => {
          Object.entries(s).forEach(([x, O]) => {
            Object.defineProperty(y, x, { get: () => O.bind(y) });
          });
          var b = Rt;
          return i && y.schema.version !== 0 && (b = y.migratePromise()), b;
        })
        .then(
          () => (
            Y('createRxCollection', {
              collection: y,
              creator: {
                name: t,
                schema: r,
                storageInstance: d,
                instanceCreationOptions: o,
                migrationStrategies: n,
                methods: a,
                attachments: u,
                options: l,
                cacheReplacementPolicy: f,
                localDocuments: c,
                statics: s,
              },
            }),
            y
          ),
        )
        .catch((b) => d.close().then(() => Promise.reject(b)));
    })
  );
}
var ci = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
  (this._parallels = t || 1),
    (this._qC = 0),
    (this._iC = new Set()),
    (this._lHN = 0),
    (this._hPM = new Map()),
    (this._pHM = new Map());
};
ci.prototype = {
  isIdle: function () {
    return this._qC < this._parallels;
  },
  lock: function () {
    this._qC++;
  },
  unlock: function () {
    this._qC--, ui(this);
  },
  wrapCall: function (t) {
    var r = this;
    this.lock();
    var o;
    try {
      o = t();
    } catch (n) {
      throw (this.unlock(), n);
    }
    return !o.then || typeof o.then != 'function'
      ? (this.unlock(), o)
      : o
          .then(function (n) {
            return r.unlock(), n;
          })
          .catch(function (n) {
            throw (r.unlock(), n);
          });
  },
  requestIdlePromise: function (t) {
    var r = this;
    t = t || {};
    var o,
      n = new Promise(function (a) {
        return (o = a);
      }),
      i = function () {
        ai(r, n), o();
      };
    if (((n._manRes = i), t.timeout)) {
      var s = setTimeout(function () {
        n._manRes();
      }, t.timeout);
      n._timeoutObj = s;
    }
    return this._iC.add(n), ui(this), n;
  },
  cancelIdlePromise: function (t) {
    ai(this, t);
  },
  requestIdleCallback: function (t, r) {
    var o = this._lHN++,
      n = this.requestIdlePromise(r);
    return (
      this._hPM.set(o, n),
      this._pHM.set(n, o),
      n.then(function () {
        return t();
      }),
      o
    );
  },
  cancelIdleCallback: function (t) {
    var r = this._hPM.get(t);
    this.cancelIdlePromise(r);
  },
  clear: function () {
    var t = this;
    this._iC.forEach(function (r) {
      return ai(t, r);
    }),
      (this._qC = 0),
      this._iC.clear(),
      (this._hPM = new Map()),
      (this._pHM = new Map());
  },
};
function Of(e) {
  if (e._iC.size !== 0) {
    var t = e._iC.values(),
      r = t.next().value;
    r._manRes(),
      setTimeout(function () {
        return ui(e);
      }, 0);
  }
}
function ai(e, t) {
  if (t) {
    if ((t._timeoutObj && clearTimeout(t._timeoutObj), e._pHM.has(t))) {
      var r = e._pHM.get(t);
      e._hPM.delete(r), e._pHM.delete(t);
    }
    e._iC.delete(t);
  }
}
function ui(e) {
  e._tryIR ||
    e._iC.size === 0 ||
    ((e._tryIR = !0),
    setTimeout(function () {
      if (!e.isIdle()) {
        e._tryIR = !1;
        return;
      }
      setTimeout(function () {
        if (!e.isIdle()) {
          e._tryIR = !1;
          return;
        }
        Of(e), (e._tryIR = !1);
      }, 0);
    }, 0));
}
var Po = class {
  ttl;
  map = new Map();
  _to = !1;
  constructor(t) {
    this.ttl = t;
  }
  has(t) {
    return this.map.has(t);
  }
  add(t) {
    this.map.set(t, vu()),
      this._to ||
        ((this._to = !0),
        setTimeout(() => {
          (this._to = !1), Ef(this);
        }, 0));
  }
  clear() {
    this.map.clear();
  }
};
function Ef(e) {
  let t = vu() - e.ttl,
    r = e.map[Symbol.iterator]();
  for (;;) {
    let o = r.next().value;
    if (!o) return;
    let n = o[0];
    if (o[1] < t) e.map.delete(n);
    else return;
  }
}
function vu() {
  return Date.now();
}
var Fo = new Set(),
  xu = 0,
  Sf = (function () {
    function e(r, o, n, i, s, a, u = !1, l = {}, c, f, h, m, d) {
      (this.idleQueue = new ci()),
        (this.rxdbVersion = hn),
        (this.storageInstances = new Set()),
        (this._subs = []),
        (this.startupErrors = []),
        (this.onDestroy = []),
        (this.destroyed = !1),
        (this.collections = {}),
        (this.states = {}),
        (this.eventBulks$ = new se()),
        (this.observable$ = this.eventBulks$.pipe(Q((y) => y.events))),
        (this.storageToken = Ae),
        (this.storageTokenDocument = Ae),
        (this.emittedEventBulkIds = new Po(60 * 1e3)),
        (this.name = r),
        (this.token = o),
        (this.storage = n),
        (this.instanceCreationOptions = i),
        (this.password = s),
        (this.multiInstance = a),
        (this.eventReduce = u),
        (this.options = l),
        (this.internalStore = c),
        (this.hashFunction = f),
        (this.cleanupPolicy = h),
        (this.allowSlowCount = m),
        (this.reactivity = d),
        xu++,
        this.name !== 'pseudoInstance' &&
          ((this.internalStore = To(this.asRxDatabase, c, Do)),
          (this.storageTokenDocument = cu(this.asRxDatabase).catch((y) =>
            this.startupErrors.push(y),
          )),
          (this.storageToken = this.storageTokenDocument
            .then((y) => y.data.token)
            .catch((y) => this.startupErrors.push(y))));
    }
    var t = e.prototype;
    return (
      (t.getReactivityFactory = function () {
        if (!this.reactivity) throw _('DB14', { database: this.name });
        return this.reactivity;
      }),
      (t.$emit = function (o) {
        this.emittedEventBulkIds.has(o.id) ||
          (this.emittedEventBulkIds.add(o.id), this.eventBulks$.next(o));
      }),
      (t.removeCollectionDoc = async function (o, n) {
        var i = await ei(this.internalStore, Mo(ii(o, n), Vt));
        if (!i) throw _('SNH', { name: o, schema: n });
        var s = cr(i);
        (s._deleted = !0),
          await this.internalStore.bulkWrite(
            [{ document: s, previous: i }],
            'rx-database-remove-collection',
          );
      }),
      (t.addCollections = async function (o) {
        var n = {},
          i = {},
          s = [],
          a = {};
        await Promise.all(
          Object.entries(o).map(async ([c, f]) => {
            var h = c,
              m = f.schema;
            n[h] = m;
            var d = ws(m, this.hashFunction);
            if (((i[h] = d), this.collections[c])) throw _('DB3', { name: c });
            var y = ii(c, m),
              b = {
                id: Mo(y, Vt),
                key: y,
                context: Vt,
                data: {
                  name: h,
                  schemaHash: await d.hash,
                  schema: d.jsonSchema,
                  version: d.version,
                  connectedStorages: [],
                },
                _deleted: !1,
                _meta: je(),
                _rev: Pe(),
                _attachments: {},
              };
            s.push({ document: b });
            var x = Object.assign({}, f, {
                name: h,
                schema: d,
                database: this,
              }),
              O = q(f);
            (O.database = this),
              (O.name = c),
              Y('preCreateRxCollection', O),
              (x.conflictHandler = O.conflictHandler),
              (a[h] = x);
          }),
        );
        var u = await this.internalStore.bulkWrite(
          s,
          'rx-database-add-collection',
        );
        await Af(this),
          await Promise.all(
            u.error.map(async (c) => {
              if (c.status !== 409)
                throw _('DB12', { database: this.name, writeError: c });
              var f = F(c.documentInDb),
                h = f.data.name,
                m = i[h];
              if (f.data.schemaHash !== (await m.hash))
                throw _('DB6', {
                  database: this.name,
                  collection: h,
                  previousSchemaHash: f.data.schemaHash,
                  schemaHash: await m.hash,
                  previousSchema: f.data.schema,
                  schema: F(n[h]),
                });
            }),
          );
        var l = {};
        return (
          await Promise.all(
            Object.keys(o).map(async (c) => {
              var f = a[c],
                h = await gu(f);
              (l[c] = h),
                (this.collections[c] = h),
                this[c] ||
                  Object.defineProperty(this, c, {
                    get: () => this.collections[c],
                  });
            }),
          ),
          l
        );
      }),
      (t.lockedRun = function (o) {
        return this.idleQueue.wrapCall(o);
      }),
      (t.requestIdlePromise = function () {
        return this.idleQueue.requestIdlePromise();
      }),
      (t.exportJSON = function (o) {
        throw M('json-dump');
      }),
      (t.addState = function (o) {
        throw M('state');
      }),
      (t.importJSON = function (o) {
        throw M('json-dump');
      }),
      (t.backup = function (o) {
        throw M('backup');
      }),
      (t.leaderElector = function () {
        throw M('leader-election');
      }),
      (t.isLeader = function () {
        throw M('leader-election');
      }),
      (t.waitForLeadership = function () {
        throw M('leader-election');
      }),
      (t.migrationStates = function () {
        throw M('migration-schema');
      }),
      (t.destroy = async function () {
        return this.destroyed
          ? Ae
          : ((this.destroyed = !0),
            await qe('preDestroyRxDatabase', this),
            this.eventBulks$.complete(),
            xu--,
            this._subs.map((o) => o.unsubscribe()),
            this.name === 'pseudoInstance'
              ? Ae
              : this.requestIdlePromise()
                  .then(() => Promise.all(this.onDestroy.map((o) => o())))
                  .then(() =>
                    Promise.all(
                      Object.keys(this.collections)
                        .map((o) => this.collections[o])
                        .map((o) => o.destroy()),
                    ),
                  )
                  .then(() => this.internalStore.close())
                  .then(() => Fo.delete(this.storage.name + '|' + this.name))
                  .then(() => !0));
      }),
      (t.remove = function () {
        return this.destroy().then(() =>
          If(this.name, this.storage, this.password),
        );
      }),
      te(e, [
        {
          key: '$',
          get: function () {
            return this.observable$;
          },
        },
        {
          key: 'asRxDatabase',
          get: function () {
            return this;
          },
        },
      ])
    );
  })();
function $f(e, t) {
  var r = t.name + '|' + e;
  if (Fo.has(r))
    throw _('DB8', {
      name: e,
      storage: t.name,
      link: 'https://rxdb.info/rx-database.html#ignoreduplicate',
    });
}
async function bu(e, t, r, o, n, i) {
  var s = await t.createStorageInstance({
    databaseInstanceToken: e,
    databaseName: r,
    collectionName: ru,
    schema: Do,
    options: o,
    multiInstance: n,
    password: i,
    devMode: L.isDevMode(),
  });
  return s;
}
function E2({
  storage: e,
  instanceCreationOptions: t,
  name: r,
  password: o,
  multiInstance: n = !0,
  eventReduce: i = !0,
  ignoreDuplicate: s = !1,
  options: a = {},
  cleanupPolicy: u,
  allowSlowCount: l = !1,
  localDocuments: c = !1,
  hashFunction: f = as,
  reactivity: h,
}) {
  Y('preCreateRxDatabase', {
    storage: e,
    instanceCreationOptions: t,
    name: r,
    password: o,
    multiInstance: n,
    eventReduce: i,
    ignoreDuplicate: s,
    options: a,
    localDocuments: c,
  }),
    s || $f(r, e),
    Fo.add(e.name + '|' + r);
  var m = nt(10);
  return bu(m, e, r, t, n, o)
    .catch((d) => {
      throw (Fo.delete(e.name + '|' + r), d);
    })
    .then((d) => {
      var y = new Sf(r, m, e, t, o, n, i, a, d, f, u, l, h);
      return qe('createRxDatabase', {
        database: y,
        creator: {
          storage: e,
          instanceCreationOptions: t,
          name: r,
          password: o,
          multiInstance: n,
          eventReduce: i,
          ignoreDuplicate: s,
          options: a,
          localDocuments: c,
        },
      }).then(() => y);
    });
}
async function If(e, t, r) {
  var o = nt(10),
    n = await bu(o, t, e, {}, !1, r),
    i = await No(n),
    s = new Set();
  i.forEach((u) => s.add(u.data.name));
  var a = Array.from(s);
  return (
    await Promise.all(a.map((u) => ko(t, n, o, e, u, r))),
    await qe('postRemoveRxDatabase', { databaseName: e, storage: t }),
    await n.remove(),
    a
  );
}
async function Af(e) {
  if ((await e.storageToken, e.startupErrors[0])) throw e.startupErrors[0];
}
export {
  ee as a,
  Pu as b,
  en as c,
  Qt as d,
  se as e,
  zt as f,
  Kt as g,
  ac as h,
  et as i,
  ge as j,
  Hu as k,
  uc as l,
  cc as m,
  tt as n,
  K as o,
  ec as p,
  Q as q,
  rt as r,
  Ot as s,
  lc as t,
  fc as u,
  nn as v,
  sn as w,
  vc as x,
  j as y,
  Gi as z,
  bc as A,
  Jt as B,
  Et as C,
  wc as D,
  Ze as E,
  Ec as F,
  Sc as G,
  un as H,
  $c as I,
  Ic as J,
  Ac as K,
  Cc as L,
  xt as M,
  Xt as N,
  Ui as O,
  oc as P,
  Rc as Q,
  os as R,
  St as S,
  ke as T,
  Yx as U,
  Iu as V,
  Au as W,
  q as X,
  as as Y,
  it as Z,
  nb as _,
  It as $,
  At as aa,
  ab as ba,
  Oe as ca,
  oe as da,
  F as ea,
  hn as fa,
  lb as ga,
  fb as ha,
  L as ia,
  _ as ja,
  yr as ka,
  vn as la,
  Y as ma,
  at as na,
  xs as oa,
  We as pa,
  Yc as qa,
  Db as ra,
  er as sa,
  tr as ta,
  Ka as ua,
  Co as va,
  tf as wa,
  Xn as xa,
  rL as ya,
  cr as za,
  oL as Aa,
  ri as Ba,
  iu as Ca,
  xf as Da,
  Po as Ea,
  Sf as Fa,
  E2 as Ga,
};
