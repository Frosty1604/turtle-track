import {
  $ as tt,
  $a as lt,
  A as Ie,
  Aa as rt,
  B as v,
  Ba as ot,
  Fa as st,
  Ha as Te,
  Ia as O,
  Ja as T,
  K as m,
  La as Re,
  N as xe,
  O as p,
  R as U,
  U as D,
  V as Oe,
  W as y,
  X as et,
  Y as M,
  Z as S,
  _a as at,
  a as he,
  ab as w,
  b as j,
  bb as dt,
  c as N,
  d as Se,
  db as ut,
  ea as nt,
  f as G,
  fa as P,
  ga as Ne,
  ha as F,
  i as c,
  ia as s,
  ja as a,
  ka as I,
  la as x,
  ma as _,
  na as k,
  o as Fe,
  oa as H,
  p as h,
  pa as W,
  q as f,
  qa as me,
  r as fe,
  ra as l,
  sa as pe,
  ta as $,
  ua as q,
  v as J,
  va as K,
  wa as it,
  xa as Pe,
  y as L,
  ya as ke,
  z as B,
  za as V,
} from './chunk-CAPGD25R.js';
import {
  E as Xe,
  M as Je,
  e as ze,
  g as Qe,
  j as Ze,
  o as R,
  p as ce,
  u as Ye,
} from './chunk-N6NGTOBN.js';
import { a as g, b as C } from './chunk-KAT7YFEL.js';
var A = (() => {
  class n {
    #e = c(at).db;
    insert(e) {
      return this.#e.odo.insert({
        id: crypto.randomUUID(),
        odo: e,
        dateTime: new Date().toISOString(),
      });
    }
    findAll = (e = 'asc') => this.#e.odo.find({ sort: [{ odo: e }] }).$;
    findMax = () => this.#e.odo.findOne({ sort: [{ odo: 'desc' }] }).$;
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵprov = N({ token: n, factory: n.ɵfac });
  }
  return n;
})();
var je = 'leasingInfo',
  E = (() => {
    class n {
      leasingInfoSubject = new Qe(1);
      leasingInfo$ = this.leasingInfoSubject.asObservable();
      constructor() {
        let e = this.getLeasingInfo();
        e && this.leasingInfoSubject.next(e);
      }
      saveLeasingInfo = (e) => {
        localStorage.setItem(je, JSON.stringify(e)),
          this.leasingInfoSubject.next(e);
      };
      getLeasingInfo = () =>
        localStorage.getItem(je) ? JSON.parse(localStorage.getItem(je)) : null;
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵprov = N({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
var yt = (() => {
    class n {
      _renderer;
      _elementRef;
      onChange = (e) => {};
      onTouched = () => {};
      constructor(e, i) {
        (this._renderer = e), (this._elementRef = i);
      }
      setProperty(e, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, i);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty('disabled', e);
      }
      static ɵfac = function (i) {
        return new (i || n)(p(xe), p(Ie));
      };
      static ɵdir = y({ type: n });
    }
    return n;
  })(),
  Ct = (() => {
    class n extends yt {
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = fe(n)))(r || n);
        };
      })();
      static ɵdir = y({ type: n, features: [M] });
    }
    return n;
  })(),
  Le = new G('');
var Wt = { provide: Le, useExisting: j(() => X), multi: !0 };
function $t() {
  let n = Re() ? Re().getUserAgent() : '';
  return /android (\d+)/.test(n.toLowerCase());
}
var qt = new G(''),
  X = (() => {
    class n extends yt {
      _compositionMode;
      _composing = !1;
      constructor(e, i, r) {
        super(e, i),
          (this._compositionMode = r),
          this._compositionMode == null && (this._compositionMode = !$t());
      }
      writeValue(e) {
        let i = e ?? '';
        this.setProperty('value', i);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(p(xe), p(Ie), p(qt, 8));
      };
      static ɵdir = y({
        type: n,
        selectors: [
          ['input', 'formControlName', '', 3, 'type', 'checkbox'],
          ['textarea', 'formControlName', ''],
          ['input', 'formControl', '', 3, 'type', 'checkbox'],
          ['textarea', 'formControl', ''],
          ['input', 'ngModel', '', 3, 'type', 'checkbox'],
          ['textarea', 'ngModel', ''],
          ['', 'ngDefaultControl', ''],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            _('input', function (d) {
              return r._handleInput(d.target.value);
            })('blur', function () {
              return r.onTouched();
            })('compositionstart', function () {
              return r._compositionStart();
            })('compositionend', function (d) {
              return r._compositionEnd(d.target.value);
            });
        },
        standalone: !1,
        features: [V([Wt]), M],
      });
    }
    return n;
  })();
function Kt(n) {
  return n == null || zt(n) === 0;
}
function zt(n) {
  return n == null
    ? null
    : Array.isArray(n) || typeof n == 'string'
      ? n.length
      : n instanceof Set
        ? n.size
        : null;
}
var se = new G(''),
  Dt = new G('');
function Qt(n) {
  return Kt(n.value) ? { required: !0 } : null;
}
function ct(n) {
  return null;
}
function Vt(n) {
  return n != null;
}
function bt(n) {
  return tt(n) ? Ze(n) : n;
}
function Mt(n) {
  let t = {};
  return (
    n.forEach((e) => {
      t = e != null ? g(g({}, t), e) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function wt(n, t) {
  return t.map((e) => e(n));
}
function Zt(n) {
  return !n.validate;
}
function At(n) {
  return n.map((t) => (Zt(t) ? t : (e) => t.validate(e)));
}
function Yt(n) {
  if (!n) return null;
  let t = n.filter(Vt);
  return t.length == 0
    ? null
    : function (e) {
        return Mt(wt(e, t));
      };
}
function Be(n) {
  return n != null ? Yt(At(n)) : null;
}
function Xt(n) {
  if (!n) return null;
  let t = n.filter(Vt);
  return t.length == 0
    ? null
    : function (e) {
        let i = wt(e, t).map(bt);
        return Ye(i).pipe(R(Mt));
      };
}
function Ue(n) {
  return n != null ? Xt(At(n)) : null;
}
function ht(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function Jt(n) {
  return n._rawValidators;
}
function en(n) {
  return n._rawAsyncValidators;
}
function Ge(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function _e(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function ft(n, t) {
  let e = Ge(t);
  return (
    Ge(n).forEach((r) => {
      _e(e, r) || e.push(r);
    }),
    e
  );
}
function mt(n, t) {
  return Ge(t).filter((e) => !_e(n, e));
}
var ve = class {
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = Be(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = Ue(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _onDestroyCallbacks = [];
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, e) {
      return this.control ? this.control.hasError(t, e) : !1;
    }
    getError(t, e) {
      return this.control ? this.control.getError(t, e) : null;
    }
  },
  Z = class extends ve {
    name;
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  oe = class extends ve {
    _parent = null;
    name = null;
    valueAccessor = null;
  },
  ye = class {
    _cd;
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  tn = {
    '[class.ng-untouched]': 'isUntouched',
    '[class.ng-touched]': 'isTouched',
    '[class.ng-pristine]': 'isPristine',
    '[class.ng-dirty]': 'isDirty',
    '[class.ng-valid]': 'isValid',
    '[class.ng-invalid]': 'isInvalid',
    '[class.ng-pending]': 'isPending',
  },
  ri = C(g({}, tn), { '[class.ng-submitted]': 'isSubmitted' }),
  be = (() => {
    class n extends ye {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(p(oe, 2));
      };
      static ɵdir = y({
        type: n,
        selectors: [
          ['', 'formControlName', ''],
          ['', 'ngModel', ''],
          ['', 'formControl', ''],
        ],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            Ne('ng-untouched', r.isUntouched)('ng-touched', r.isTouched)(
              'ng-pristine',
              r.isPristine,
            )('ng-dirty', r.isDirty)('ng-valid', r.isValid)(
              'ng-invalid',
              r.isInvalid,
            )('ng-pending', r.isPending);
        },
        standalone: !1,
        features: [M],
      });
    }
    return n;
  })(),
  Me = (() => {
    class n extends ye {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(p(Z, 10));
      };
      static ɵdir = y({
        type: n,
        selectors: [
          ['', 'formGroupName', ''],
          ['', 'formArrayName', ''],
          ['', 'ngModelGroup', ''],
          ['', 'formGroup', ''],
          ['form', 3, 'ngNoForm', ''],
          ['', 'ngForm', ''],
        ],
        hostVars: 16,
        hostBindings: function (i, r) {
          i & 2 &&
            Ne('ng-untouched', r.isUntouched)('ng-touched', r.isTouched)(
              'ng-pristine',
              r.isPristine,
            )('ng-dirty', r.isDirty)('ng-valid', r.isValid)(
              'ng-invalid',
              r.isInvalid,
            )('ng-pending', r.isPending)('ng-submitted', r.isSubmitted);
        },
        standalone: !1,
        features: [M],
      });
    }
    return n;
  })();
var ee = 'VALID',
  ge = 'INVALID',
  z = 'PENDING',
  te = 'DISABLED',
  Y = class {},
  Ce = class extends Y {
    value;
    source;
    constructor(t, e) {
      super(), (this.value = t), (this.source = e);
    }
  },
  ie = class extends Y {
    pristine;
    source;
    constructor(t, e) {
      super(), (this.pristine = t), (this.source = e);
    }
  },
  re = class extends Y {
    touched;
    source;
    constructor(t, e) {
      super(), (this.touched = t), (this.source = e);
    }
  },
  Q = class extends Y {
    status;
    source;
    constructor(t, e) {
      super(), (this.status = t), (this.source = e);
    }
  };
function Et(n) {
  return (we(n) ? n.validators : n) || null;
}
function nn(n) {
  return Array.isArray(n) ? Be(n) : n || null;
}
function St(n, t) {
  return (we(t) ? t.asyncValidators : n) || null;
}
function rn(n) {
  return Array.isArray(n) ? Ue(n) : n || null;
}
function we(n) {
  return n != null && !Array.isArray(n) && typeof n == 'object';
}
function on(n, t, e) {
  let i = n.controls;
  if (!(t ? Object.keys(i) : i).length) throw new he(1e3, '');
  if (!i[e]) throw new he(1001, '');
}
function sn(n, t, e) {
  n._forEachChild((i, r) => {
    if (e[r] === void 0) throw new he(1002, '');
  });
}
var De = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => {};
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(t, e) {
      this._assignValidators(t), this._assignAsyncValidators(e);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return O(this.statusReactive);
    }
    set status(t) {
      O(() => this.statusReactive.set(t));
    }
    _status = T(() => this.statusReactive());
    statusReactive = v(void 0);
    get valid() {
      return this.status === ee;
    }
    get invalid() {
      return this.status === ge;
    }
    get pending() {
      return this.status == z;
    }
    get disabled() {
      return this.status === te;
    }
    get enabled() {
      return this.status !== te;
    }
    errors;
    get pristine() {
      return O(this.pristineReactive);
    }
    set pristine(t) {
      O(() => this.pristineReactive.set(t));
    }
    _pristine = T(() => this.pristineReactive());
    pristineReactive = v(!0);
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return O(this.touchedReactive);
    }
    set touched(t) {
      O(() => this.touchedReactive.set(t));
    }
    _touched = T(() => this.touchedReactive());
    touchedReactive = v(!1);
    get untouched() {
      return !this.touched;
    }
    _events = new ze();
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : 'change';
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators(ft(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(ft(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(mt(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(mt(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return _e(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return _e(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      let e = this.touched === !1;
      this.touched = !0;
      let i = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsTouched(C(g({}, t), { sourceControl: i })),
        e && t.emitEvent !== !1 && this._events.next(new re(!0, i));
    }
    markAllAsTouched(t = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: t.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((e) => e.markAllAsTouched(t));
    }
    markAsUntouched(t = {}) {
      let e = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let i = t.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: i,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, i),
        e && t.emitEvent !== !1 && this._events.next(new re(!1, i));
    }
    markAsDirty(t = {}) {
      let e = this.pristine === !0;
      this.pristine = !1;
      let i = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(C(g({}, t), { sourceControl: i })),
        e && t.emitEvent !== !1 && this._events.next(new ie(!1, i));
    }
    markAsPristine(t = {}) {
      let e = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let i = t.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, i),
        e && t.emitEvent !== !1 && this._events.next(new ie(!0, i));
    }
    markAsPending(t = {}) {
      this.status = z;
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Q(this.status, e)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(C(g({}, t), { sourceControl: e }));
    }
    disable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = te),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(C(g({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let i = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Ce(this.value, i)),
        this._events.next(new Q(this.status, i)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(C(g({}, t), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = ee),
        this._forEachChild((i) => {
          i.enable(C(g({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(C(g({}, t), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((i) => i(!1));
    }
    _updateAncestors(t, e) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, e),
        this._parent._updateTouched({}, e));
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let i = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === ee || this.status === z) &&
            this._runAsyncValidator(i, t.emitEvent);
      }
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Ce(this.value, e)),
        this._events.next(new Q(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            C(g({}, t), { sourceControl: e }),
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((e) => e._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? te : ee;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, e) {
      if (this.asyncValidator) {
        (this.status = z),
          (this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1 });
        let i = bt(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(r, { emitEvent: e, shouldHaveEmitted: t });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), t;
      }
      return !1;
    }
    setErrors(t, e = {}) {
      (this.errors = t),
        this._updateControlsErrors(
          e.emitEvent !== !1,
          this,
          e.shouldHaveEmitted,
        );
    }
    get(t) {
      let e = t;
      return e == null ||
        (Array.isArray(e) || (e = e.split('.')), e.length === 0)
        ? null
        : e.reduce((i, r) => i && i._find(r), this);
    }
    getError(t, e) {
      let i = e ? this.get(e) : this;
      return i && i.errors ? i.errors[t] : null;
    }
    hasError(t, e) {
      return !!this.getError(t, e);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t, e, i) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        (t || i) && this._events.next(new Q(this.status, e)),
        this._parent && this._parent._updateControlsErrors(t, e, i);
    }
    _initObservables() {
      (this.valueChanges = new J()), (this.statusChanges = new J());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? te
        : this.errors
          ? ge
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(z)
            ? z
            : this._anyControlsHaveStatus(ge)
              ? ge
              : ee;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((e) => e.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t, e) {
      let i = !this._anyControlsDirty(),
        r = this.pristine !== i;
      (this.pristine = i),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        r && this._events.next(new ie(this.pristine, e));
    }
    _updateTouched(t = {}, e) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new re(this.touched, e)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e);
    }
    _onDisabledChange = [];
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      we(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let e = this._parent && this._parent.dirty;
      return !t && !!e && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = nn(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = rn(this._rawAsyncValidators));
    }
  },
  Ve = class extends De {
    constructor(t, e, i) {
      super(Et(e), St(i, e)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    controls;
    registerControl(t, e) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = e),
          e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange),
          e);
    }
    addControl(t, e, i = {}) {
      this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, e, i = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        e && this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, e = {}) {
      sn(this, !0, t),
        Object.keys(t).forEach((i) => {
          on(this, !0, i),
            this.controls[i].setValue(t[i], {
              onlySelf: !0,
              emitEvent: e.emitEvent,
            });
        }),
        this.updateValueAndValidity(e);
    }
    patchValue(t, e = {}) {
      t != null &&
        (Object.keys(t).forEach((i) => {
          let r = this.controls[i];
          r && r.patchValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
        }),
        this.updateValueAndValidity(e));
    }
    reset(t = {}, e = {}) {
      this._forEachChild((i, r) => {
        i.reset(t ? t[r] : null, { onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._updatePristine(e, this),
        this._updateTouched(e, this),
        this.updateValueAndValidity(e);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, e, i) => ((t[i] = e.getRawValue()), t),
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (e, i) =>
        i._syncPendingControls() ? !0 : e,
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((e) => {
        let i = this.controls[e];
        i && t(i, e);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [e, i] of Object.entries(this.controls))
        if (this.contains(e) && t(i)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (e, i, r) => ((i.enabled || this.disabled) && (e[r] = i.value), e),
      );
    }
    _reduceChildren(t, e) {
      let i = t;
      return (
        this._forEachChild((r, o) => {
          i = e(i, r, o);
        }),
        i
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var He = new G('', { providedIn: 'root', factory: () => We }),
  We = 'always';
function an(n, t) {
  return [...t.path, n];
}
function Ft(n, t, e = We) {
  It(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || e === 'always') &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    dn(n, t),
    cn(n, t),
    un(n, t),
    ln(n, t);
}
function pt(n, t) {
  n.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(t);
  });
}
function ln(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let e = (i) => {
      t.valueAccessor.setDisabledState(i);
    };
    n.registerOnDisabledChange(e),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(e);
      });
  }
}
function It(n, t) {
  let e = Jt(n);
  t.validator !== null
    ? n.setValidators(ht(e, t.validator))
    : typeof e == 'function' && n.setValidators([e]);
  let i = en(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(ht(i, t.asyncValidator))
    : typeof i == 'function' && n.setAsyncValidators([i]);
  let r = () => n.updateValueAndValidity();
  pt(t._rawValidators, r), pt(t._rawAsyncValidators, r);
}
function dn(n, t) {
  t.valueAccessor.registerOnChange((e) => {
    (n._pendingValue = e),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === 'change' && xt(n, t);
  });
}
function un(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === 'blur' && n._pendingChange && xt(n, t),
      n.updateOn !== 'submit' && n.markAsTouched();
  });
}
function xt(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function cn(n, t) {
  let e = (i, r) => {
    t.valueAccessor.writeValue(i), r && t.viewToModelUpdate(i);
  };
  n.registerOnChange(e),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(e);
    });
}
function hn(n, t) {
  n == null, It(n, t);
}
function fn(n, t) {
  if (!n.hasOwnProperty('model')) return !1;
  let e = n.model;
  return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue);
}
function mn(n) {
  return Object.getPrototypeOf(n.constructor) === Ct;
}
function pn(n, t) {
  n._syncPendingControls(),
    t.forEach((e) => {
      let i = e.control;
      i.updateOn === 'submit' &&
        i._pendingChange &&
        (e.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
    });
}
function gn(n, t) {
  if (!t) return null;
  Array.isArray(t);
  let e, i, r;
  return (
    t.forEach((o) => {
      o.constructor === X ? (e = o) : mn(o) ? (i = o) : (r = o);
    }),
    r || i || e || null
  );
}
var _n = { provide: Z, useExisting: j(() => ae) },
  ne = Promise.resolve(),
  ae = (() => {
    class n extends Z {
      callSetDisabledState;
      get submitted() {
        return O(this.submittedReactive);
      }
      _submitted = T(() => this.submittedReactive());
      submittedReactive = v(!1);
      _directives = new Set();
      form;
      ngSubmit = new J();
      options;
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this.form = new Ve({}, Be(e), Ue(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        ne.then(() => {
          let i = this._findContainer(e.path);
          (e.control = i.registerControl(e.name, e.control)),
            Ft(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        ne.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        ne.then(() => {
          let i = this._findContainer(e.path),
            r = new Ve({});
          hn(r, e),
            i.registerControl(e.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        ne.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        ne.then(() => {
          this.form.get(e.path).setValue(i);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          pn(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === 'dialog'
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
      static ɵfac = function (i) {
        return new (i || n)(p(se, 10), p(Dt, 10), p(He, 8));
      };
      static ɵdir = y({
        type: n,
        selectors: [
          ['form', 3, 'ngNoForm', '', 3, 'formGroup', ''],
          ['ng-form'],
          ['', 'ngForm', ''],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            _('submit', function (d) {
              return r.onSubmit(d);
            })('reset', function () {
              return r.onReset();
            });
        },
        inputs: { options: [0, 'ngFormOptions', 'options'] },
        outputs: { ngSubmit: 'ngSubmit' },
        exportAs: ['ngForm'],
        standalone: !1,
        features: [V([_n]), M],
      });
    }
    return n;
  })();
function gt(n, t) {
  let e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}
function _t(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    Object.keys(n).length === 2 &&
    'value' in n &&
    'disabled' in n
  );
}
var vn = class extends De {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = !1;
  constructor(t = null, e, i) {
    super(Et(e), St(i, e)),
      this._applyFormState(t),
      this._setUpdateStrategy(e),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      we(e) &&
        (e.nonNullable || e.initialValueIsDefault) &&
        (_t(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, e = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        e.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, e.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(e);
  }
  patchValue(t, e = {}) {
    this.setValue(t, e);
  }
  reset(t = this.defaultValue, e = {}) {
    this._applyFormState(t),
      this.markAsPristine(e),
      this.markAsUntouched(e),
      this.setValue(this.value, e),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    gt(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    gt(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === 'submit' &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    _t(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var yn = { provide: oe, useExisting: j(() => le) },
  vt = Promise.resolve(),
  le = (() => {
    class n extends oe {
      _changeDetectorRef;
      callSetDisabledState;
      control = new vn();
      static ngAcceptInputType_isDisabled;
      _registered = !1;
      viewModel;
      name = '';
      isDisabled;
      model;
      options;
      update = new J();
      constructor(e, i, r, o, d, u) {
        super(),
          (this._changeDetectorRef = d),
          (this.callSetDisabledState = u),
          (this._parent = e),
          this._setValidators(i),
          this._setAsyncValidators(r),
          (this.valueAccessor = gn(this, o));
      }
      ngOnChanges(e) {
        if ((this._checkForErrors(), !this._registered || 'name' in e)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let i = e.name.previousValue;
            this.formDirective.removeControl({
              name: i,
              path: this._getPath(i),
            });
          }
          this._setUpControl();
        }
        'isDisabled' in e && this._updateDisabled(e),
          fn(e, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        Ft(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._checkName();
      }
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(e) {
        vt.then(() => {
          this.control.setValue(e, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(e) {
        let i = e.isDisabled.currentValue,
          r = i !== 0 && Te(i);
        vt.then(() => {
          r && !this.control.disabled
            ? this.control.disable()
            : !r && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(e) {
        return this._parent ? an(e, this._parent) : [e];
      }
      static ɵfac = function (i) {
        return new (i || n)(
          p(Z, 9),
          p(se, 10),
          p(Dt, 10),
          p(Le, 10),
          p(st, 8),
          p(He, 8),
        );
      };
      static ɵdir = y({
        type: n,
        selectors: [
          ['', 'ngModel', '', 3, 'formControlName', '', 3, 'formControl', ''],
        ],
        inputs: {
          name: 'name',
          isDisabled: [0, 'disabled', 'isDisabled'],
          model: [0, 'ngModel', 'model'],
          options: [0, 'ngModelOptions', 'options'],
        },
        outputs: { update: 'ngModelChange' },
        exportAs: ['ngModel'],
        standalone: !1,
        features: [V([yn]), M, Fe],
      });
    }
    return n;
  })();
var Ae = (() => {
    class n {
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵdir = y({
        type: n,
        selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
        hostAttrs: ['novalidate', ''],
        standalone: !1,
      });
    }
    return n;
  })(),
  Cn = { provide: Le, useExisting: j(() => de), multi: !0 },
  de = (() => {
    class n extends Ct {
      writeValue(e) {
        let i = e ?? '';
        this.setProperty('value', i);
      }
      registerOnChange(e) {
        this.onChange = (i) => {
          e(i == '' ? null : parseFloat(i));
        };
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = fe(n)))(r || n);
        };
      })();
      static ɵdir = y({
        type: n,
        selectors: [
          ['input', 'type', 'number', 'formControlName', ''],
          ['input', 'type', 'number', 'formControl', ''],
          ['input', 'type', 'number', 'ngModel', ''],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            _('input', function (d) {
              return r.onChange(d.target.value);
            })('blur', function () {
              return r.onTouched();
            });
        },
        standalone: !1,
        features: [V([Cn]), M],
      });
    }
    return n;
  })();
var Dn = (() => {
  class n {
    _validator = ct;
    _onChange;
    _enabled;
    ngOnChanges(e) {
      if (this.inputName in e) {
        let i = this.normalizeInput(e[this.inputName].currentValue);
        (this._enabled = this.enabled(i)),
          (this._validator = this._enabled ? this.createValidator(i) : ct),
          this._onChange && this._onChange();
      }
    }
    validate(e) {
      return this._validator(e);
    }
    registerOnValidatorChange(e) {
      this._onChange = e;
    }
    enabled(e) {
      return e != null;
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵdir = y({ type: n, features: [Fe] });
  }
  return n;
})();
var Vn = { provide: se, useExisting: j(() => ue), multi: !0 };
var ue = (() => {
  class n extends Dn {
    required;
    inputName = 'required';
    normalizeInput = Te;
    createValidator = (e) => Qt;
    enabled(e) {
      return e;
    }
    static ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = fe(n)))(r || n);
      };
    })();
    static ɵdir = y({
      type: n,
      selectors: [
        ['', 'required', '', 'formControlName', '', 3, 'type', 'checkbox'],
        ['', 'required', '', 'formControl', '', 3, 'type', 'checkbox'],
        ['', 'required', '', 'ngModel', '', 3, 'type', 'checkbox'],
      ],
      hostVars: 1,
      hostBindings: function (i, r) {
        i & 2 && nt('required', r._enabled ? '' : null);
      },
      inputs: { required: 'required' },
      standalone: !1,
      features: [V([Vn]), M],
    });
  }
  return n;
})();
var bn = (() => {
  class n {
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = Oe({ type: n });
    static ɵinj = Se({});
  }
  return n;
})();
var Ee = (() => {
  class n {
    static withConfig(e) {
      return {
        ngModule: n,
        providers: [{ provide: He, useValue: e.callSetDisabledState ?? We }],
      };
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = Oe({ type: n });
    static ɵinj = Se({ imports: [bn] });
  }
  return n;
})();
var Mn = ['form'],
  Nt = (() => {
    class n {
      #e = c(A);
      form = U.required('form');
      latestOdoEntry = w(this.#e.findMax());
      odometer = v(null);
      submitted = L();
      canceled = L();
      cancel() {
        this.canceled.emit();
      }
      async submit() {
        if (this.form().invalid) {
          console.warn('Invalid form');
          return;
        }
        await this.#e.insert(this.odometer()), this.submitted.emit();
      }
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵcmp = D({
        type: n,
        selectors: [['tu-add-entry']],
        viewQuery: function (i, r) {
          i & 1 && H(r.form, Mn, 5), i & 2 && W();
        },
        hostAttrs: [1, 'block', 'm-4'],
        outputs: { submitted: 'submitted', canceled: 'canceled' },
        decls: 14,
        vars: 2,
        consts: [
          ['form', 'ngForm'],
          [
            1,
            'flex',
            'items-center',
            'justify-center',
            'flex-col',
            3,
            'ngSubmit',
          ],
          [1, 'form-control', 'w-full'],
          [1, 'label'],
          [1, 'label-text'],
          [
            'type',
            'number',
            'name',
            'odometer',
            'required',
            '',
            1,
            'input',
            'input-bordered',
            'w-full',
            3,
            'ngModelChange',
            'ngModel',
            'placeholder',
          ],
          [
            1,
            'mt-4',
            'flex',
            'flex-row',
            'items-center',
            'justify-end',
            'w-full',
            'gap-2',
          ],
          ['type', 'button', 1, 'btn', 'btn-ghost', 3, 'click'],
          ['type', 'submit', 1, 'btn', 'btn-primary'],
        ],
        template: function (i, r) {
          if (i & 1) {
            let o = x();
            s(0, 'form', 1, 0),
              _('ngSubmit', function () {
                return h(o), f(r.submit());
              }),
              s(2, 'label', 2)(3, 'div', 3)(4, 'span', 4),
              l(5, 'ODO'),
              a(),
              s(6, 'span', 4),
              l(7, 'km'),
              a()(),
              s(8, 'input', 5),
              K('ngModelChange', function (u) {
                return h(o), q(r.odometer, u) || (r.odometer = u), f(u);
              }),
              a()(),
              s(9, 'div', 6)(10, 'button', 7),
              _('click', function () {
                return h(o), f(r.cancel());
              }),
              l(11, ' Cancel '),
              a(),
              s(12, 'button', 8),
              l(13, 'Save'),
              a()()();
          }
          if (i & 2) {
            let o;
            m(8),
              $('ngModel', r.odometer),
              P('placeholder', (o = r.latestOdoEntry()) == null ? null : o.odo);
          }
        },
        dependencies: [Ee, Ae, X, de, be, Me, ue, le, ae],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })();
var wn = () => (n) => {
    try {
      return new Date(n.value), null;
    } catch {
      return { invalidDate: { value: n.value } };
    }
  },
  Pt = (() => {
    class n {
      validate = (e) => wn()(e);
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵdir = y({
        type: n,
        selectors: [['', 'tuDateValidator', '']],
        features: [V([{ provide: se, useExisting: n, multi: !0 }])],
      });
    }
    return n;
  })();
function kt(n = new Date()) {
  let t;
  return (
    typeof n == 'string' ? (t = new Date(n)) : (t = n),
    t.toISOString().split('T')[0]
  );
}
var An = ['form'];
function En(n, t) {
  n & 1 && (s(0, 'div', 5)(1, 'span', 13), l(2, 'Required'), a()());
}
var Tt = (() => {
  class n {
    leasingInfoService = c(E);
    form = U.required('form');
    leasingInfo = v(this.leasingInfoService.getLeasingInfo());
    yearlyKmLimit = v(this.leasingInfo()?.yearlyKmLimit);
    initialOdo = v(this.leasingInfo()?.initialOdo);
    startDate = v(kt(this.leasingInfo()?.startDate));
    submitted = L();
    canceled = L();
    submit() {
      if (this.form().invalid) {
        console.log('Invalid form'), console.log(this.form().errors);
        return;
      }
      let e = {
        yearlyKmLimit: this.yearlyKmLimit(),
        initialOdo: this.initialOdo(),
        startDate: new Date(this.startDate()).toISOString(),
      };
      this.leasingInfoService.saveLeasingInfo(e), this.submitted.emit();
    }
    cancel() {
      this.canceled.emit();
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵcmp = D({
      type: n,
      selectors: [['tu-leasing-info']],
      viewQuery: function (i, r) {
        i & 1 && H(r.form, An, 5), i & 2 && W();
      },
      outputs: { submitted: 'submitted', canceled: 'canceled' },
      decls: 31,
      vars: 4,
      consts: [
        ['form', 'ngForm'],
        ['startDateControl', 'ngModel'],
        [3, 'ngSubmit'],
        [1, 'flex', 'flex-col', 'gap-2'],
        [1, 'form-control', 'w-full'],
        [1, 'label'],
        [1, 'label-text'],
        [
          'required',
          '',
          'type',
          'number',
          'name',
          'yearly',
          1,
          'input',
          'input-bordered',
          'w-full',
          3,
          'ngModelChange',
          'ngModel',
        ],
        [
          'required',
          '',
          'type',
          'number',
          'name',
          'startingKm',
          1,
          'input',
          'input-bordered',
          'w-full',
          3,
          'ngModelChange',
          'ngModel',
        ],
        [
          'required',
          '',
          'type',
          'date',
          'tuDateValidator',
          '',
          'name',
          'startDate',
          1,
          'input',
          'input-bordered',
          'w-full',
          3,
          'ngModelChange',
          'ngModel',
        ],
        [1, 'flex', 'items-center', 'justify-end', 'mt-8', 'gap-2'],
        ['type', 'button', 1, 'btn', 'btn-ghost', 3, 'click'],
        ['type', 'submit', 1, 'btn', 'btn-primary'],
        [1, 'label-text', 'text-red-500'],
      ],
      template: function (i, r) {
        if (i & 1) {
          let o = x();
          s(0, 'form', 2, 0),
            _('ngSubmit', function () {
              return h(o), f(r.submit());
            }),
            s(2, 'div', 3)(3, 'label', 4)(4, 'div', 5)(5, 'span', 6),
            l(6, 'Per year'),
            a(),
            s(7, 'span', 6),
            l(8, 'km'),
            a()(),
            s(9, 'input', 7),
            K('ngModelChange', function (u) {
              return h(o), q(r.yearlyKmLimit, u) || (r.yearlyKmLimit = u), f(u);
            }),
            a()(),
            s(10, 'label', 4)(11, 'div', 5)(12, 'span', 6),
            l(13, 'Starting'),
            a(),
            s(14, 'span', 6),
            l(15, 'km'),
            a()(),
            s(16, 'input', 8),
            K('ngModelChange', function (u) {
              return h(o), q(r.initialOdo, u) || (r.initialOdo = u), f(u);
            }),
            a()(),
            s(17, 'label', 4)(18, 'div', 5)(19, 'span', 6),
            l(20, 'Starting'),
            a(),
            s(21, 'span', 6),
            l(22, 'Date'),
            a()(),
            s(23, 'input', 9, 1),
            K('ngModelChange', function (u) {
              return h(o), q(r.startDate, u) || (r.startDate = u), f(u);
            }),
            a(),
            S(25, En, 3, 0, 'div', 5),
            a()(),
            s(26, 'div', 10)(27, 'button', 11),
            _('click', function () {
              return h(o), f(r.cancel());
            }),
            l(28, 'Cancel'),
            a(),
            s(29, 'button', 12),
            l(30, 'Save'),
            a()()();
        }
        if (i & 2) {
          let o = me(24);
          m(9),
            $('ngModel', r.yearlyKmLimit),
            m(7),
            $('ngModel', r.initialOdo),
            m(7),
            $('ngModel', r.startDate),
            m(2),
            F(o.hasError('required') ? 25 : -1);
        }
      },
      dependencies: [Ee, Ae, X, de, be, Me, ue, le, ae, Pt],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
var $e = (() => {
  class n {
    #e = c(E);
    #t = c(A);
    analyticsData$ = ce([this.#t.findMax(), this.#e.leasingInfo$]).pipe(
      Xe(([e], [i]) => e?.odo === i?.odo),
      R(([e, i]) => this.generateAnalyticsData(e.odo, i)),
      Je({ bufferSize: 1, refCount: !0 }),
    );
    generateAnalyticsData(e, i) {
      let r = i.yearlyKmLimit / 365,
        o = Math.floor(
          (Date.now() - new Date(i.startDate).getTime()) / (1e3 * 3600 * 24),
        ),
        Lt = (e - i.initialOdo) / o > r,
        Bt = r * o,
        Ke = Math.ceil(Math.abs(e - (i.initialOdo + Bt))),
        Ut = Math.ceil(Ke / r),
        Ht = i.initialOdo + Math.ceil(r * o);
      return {
        isDistanceOverExpected: Lt,
        differenceFromExpected: Ke,
        idleDaysToReachExpectedKm: Ut,
        expectedOdo: Ht,
      };
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵprov = N({ token: n, factory: n.ɵfac });
  }
  return n;
})();
var qe = {
  chart: {
    height: 350,
    type: 'line',
    toolbar: { show: !1 },
    selection: { enabled: !1 },
    zoom: { enabled: !1 },
  },
  colors: ['oklch(var(--a))', 'oklch(var(--p))'],
  xaxis: {
    type: 'datetime',
    labels: { show: !1 },
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    crosshairs: { show: !1 },
  },
  yaxis: { show: !1 },
  dataLabels: { enabled: !1 },
  stroke: { curve: 'smooth' },
  tooltip: { enabled: !1 },
  grid: {
    xaxis: { lines: { show: !1 } },
    yaxis: { lines: { show: !1 } },
    padding: { top: 0, bottom: 0 },
  },
  legend: {
    show: !0,
    labels: { colors: 'oklch(var(--bc) / 1)' },
    position: 'top',
    itemMargin: { vertical: 15 },
    markers: { offsetX: -2.5, strokeWidth: 0 },
  },
};
function Sn(n, t) {
  if ((n & 1 && I(0, 'apx-chart', 0), n & 2)) {
    let e = t;
    P('series', e.series)('chart', e.chart)('dataLabels', e.dataLabels)(
      'stroke',
      e.stroke,
    )('xaxis', e.xaxis)('tooltip', e.tooltip)('grid', e.grid)(
      'legend',
      e.legend,
    )('yaxis', e.yaxis)('colors', e.colors);
  }
}
var Rt = (() => {
  class n {
    analyticsData = B.required();
    #e = c(A);
    #t = c(E);
    chartState = T(() => {
      let e = this.series();
      return e?.series
        ? C(g({}, qe), {
            series: e.series,
            xaxis: C(g({}, qe.xaxis), { categories: e.categories }),
          })
        : null;
    });
    series = w(
      ce([
        this.#t.leasingInfo$,
        this.#e.findMax(),
        lt(this.analyticsData),
      ]).pipe(
        R(([e, i, r]) => ({
          series: [
            { data: [e.initialOdo, i.odo], name: 'Real' },
            { data: [e.initialOdo, r.expectedOdo], name: 'Average' },
          ],
          categories: [new Date(e.startDate).toISOString(), i.dateTime],
        })),
      ),
    );
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵcmp = D({
      type: n,
      selectors: [['tu-leasing-chart']],
      hostAttrs: [1, 'block', 'shadow-xl', 'bg-base-200', 'rounded-2xl'],
      inputs: { analyticsData: [1, 'analyticsData'] },
      decls: 1,
      vars: 1,
      consts: [
        [
          3,
          'series',
          'chart',
          'dataLabels',
          'stroke',
          'xaxis',
          'tooltip',
          'grid',
          'legend',
          'yaxis',
          'colors',
        ],
      ],
      template: function (i, r) {
        if ((i & 1 && S(0, Sn, 1, 10, 'apx-chart', 0), i & 2)) {
          let o;
          F((o = r.chartState()) ? 0 : -1, o);
        }
      },
      dependencies: [ut],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
var jt = (() => {
  class n {
    transform(e, ...i) {
      if (!Number.isInteger(e)) throw new Error(`${e} is not an integer`);
      return Intl.NumberFormat('de-DE').format(e);
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵpipe = et({ name: 'number', type: n, pure: !0 });
  }
  return n;
})();
var Gt = (() => {
  class n {
    totalKm = B.required();
    difference = B.required();
    differenceInDays = B.required();
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵcmp = D({
      type: n,
      selectors: [['tu-summary']],
      hostAttrs: [1, 'w-full', 'block'],
      inputs: {
        totalKm: [1, 'totalKm'],
        difference: [1, 'difference'],
        differenceInDays: [1, 'differenceInDays'],
      },
      decls: 23,
      vars: 5,
      consts: [
        [
          1,
          'stats',
          'stats-vertical',
          'md:stats-horizontal',
          'shadow-xl',
          'bg-base-200',
          'w-full',
        ],
        [1, 'stat', 'max-md:place-items-center'],
        [1, 'stat-title'],
        [1, 'stat-value', 'text-primary'],
        [1, 'stat-desc'],
        [1, 'stat-value', 'text-accent'],
        [1, 'stat-value'],
        [1, 'stat-title', 'text-secondary'],
      ],
      template: function (i, r) {
        i & 1 &&
          (s(0, 'div', 0)(1, 'div', 1)(2, 'div', 2),
          l(3, 'Total'),
          a(),
          s(4, 'div', 3),
          l(5),
          rt(6, 'number'),
          a(),
          s(7, 'div', 4),
          l(8, '21% more than last month'),
          a()(),
          s(9, 'div', 1)(10, 'div', 2),
          l(11, 'Difference'),
          a(),
          s(12, 'div', 5),
          l(13),
          a(),
          s(14, 'div', 4),
          l(15, '21% more than last month'),
          a()(),
          s(16, 'div', 1)(17, 'div', 6),
          l(18),
          a(),
          s(19, 'div', 7),
          l(20, 'Ahead'),
          a(),
          s(21, 'div', 4),
          l(22, "You're doing great so far!"),
          a()()()),
          i & 2 &&
            (m(5),
            pe('', ot(6, 3, r.totalKm()), ' km'),
            m(8),
            pe('', r.difference(), ' km'),
            m(5),
            pe('', r.differenceInDays(), ' Days'));
      },
      dependencies: [jt],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
var Fn = ['modal'];
function In(n, t) {
  if (
    (n & 1 &&
      (s(0, 'div')(1, 'h1', 6),
      l(2, 'Stats'),
      a(),
      I(3, 'tu-summary', 13),
      a()),
    n & 2)
  ) {
    k();
    let e = ke(0),
      i = ke(1);
    m(3),
      P('totalKm', i.odo)('difference', e.differenceFromExpected)(
        'differenceInDays',
        e.idleDaysToReachExpectedKm,
      );
  }
}
function xn(n, t) {
  if (n & 1) {
    let e = x();
    s(0, 'tu-add-entry', 14),
      _('submitted', function () {
        h(e);
        let r = k(2);
        return f(r.closeModal());
      })('canceled', function () {
        h(e);
        let r = k(2);
        return f(r.closeModal());
      }),
      a();
  }
}
function On(n, t) {
  if (n & 1) {
    let e = x();
    s(0, 'tu-leasing-info', 14),
      _('submitted', function () {
        h(e);
        let r = k(2);
        return f(r.leasingInfoSaved());
      })('canceled', function () {
        h(e);
        let r = k(2);
        return f(r.closeModal());
      }),
      a();
  }
}
function Nn(n, t) {
  n & 1 && (s(0, 'p'), l(1, 'Unknown dialog component'), a());
}
function Pn(n, t) {
  if (
    (n & 1 &&
      S(0, xn, 1, 0, 'tu-add-entry')(1, On, 1, 0, 'tu-leasing-info')(
        2,
        Nn,
        2,
        0,
        'p',
      ),
    n & 2)
  ) {
    let e,
      i = k();
    F((e = i.dialogComponent()) === 'add' ? 0 : e === 'leasingInfo' ? 1 : 2);
  }
}
var ar = (() => {
  class n {
    modal = U.required('modal');
    dialogComponent = v(null);
    #e = c(E);
    #t = c(A);
    #n = c($e);
    entries = w(this.#t.findAll(), { initialValue: [] });
    leasingInfo = w(this.#e.leasingInfo$);
    latestOdoEntry = w(this.#t.findMax());
    analyticsData = w(this.#n.analyticsData$, {
      initialValue: {
        differenceFromExpected: 0,
        expectedOdo: 0,
        idleDaysToReachExpectedKm: 0,
        isDistanceOverExpected: !1,
      },
    });
    openEntryModal() {
      this.modal().nativeElement.showModal(), this.dialogComponent.set('add');
    }
    openLeasingInfoModal() {
      this.modal().nativeElement.showModal(),
        this.dialogComponent.set('leasingInfo');
    }
    leasingInfoSaved() {
      this.closeModal();
    }
    closeModal() {
      this.modal().nativeElement.close(), this.dialogComponent.set(null);
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵcmp = D({
      type: n,
      selectors: [['tu-dashboard-page']],
      viewQuery: function (i, r) {
        i & 1 && H(r.modal, Fn, 5), i & 2 && W();
      },
      features: [V([A, E, $e])],
      decls: 20,
      vars: 5,
      consts: [
        ['modal', ''],
        [1, 'navbar'],
        [1, 'flex-1'],
        [1, 'btn', 'btn-circle', 'flex-none', 3, 'click'],
        ['name', 'cog'],
        [1, 'flex', 'flex-col', 'gap-8', 'max-sm:px-4'],
        [1, 'text-2xl', 'mb-4'],
        [3, 'analyticsData'],
        [1, 'absolute', 'right-8', 'bottom-8'],
        [1, 'btn-circle', 'btn', 'btn-accent', 'btn-lg', 3, 'click'],
        ['name', 'plus', 'size', '36'],
        [1, 'modal'],
        [1, 'modal-box'],
        [3, 'totalKm', 'difference', 'differenceInDays'],
        [3, 'submitted', 'canceled'],
      ],
      template: function (i, r) {
        if (i & 1) {
          let o = x();
          it(0)(1),
            s(2, 'header')(3, 'nav', 1),
            I(4, 'div', 2),
            s(5, 'button', 3),
            _('click', function () {
              return h(o), f(r.openLeasingInfoModal());
            }),
            I(6, 'fast-svg', 4),
            a()()(),
            s(7, 'main', 5),
            S(8, In, 4, 3, 'div'),
            s(9, 'div')(10, 'h1', 6),
            l(11, 'Dashboard'),
            a(),
            I(12, 'tu-leasing-chart', 7),
            a(),
            s(13, 'div', 8)(14, 'button', 9),
            _('click', function () {
              return h(o), f(r.openEntryModal());
            }),
            I(15, 'fast-svg', 10),
            a()()(),
            s(16, 'dialog', 11, 0)(18, 'div', 12),
            S(19, Pn, 3, 1),
            a()();
        }
        if (i & 2) {
          let o = me(17),
            d = Pe(r.analyticsData());
          m();
          let u = Pe(r.latestOdoEntry());
          m(7),
            F(u != null && u.odo ? 8 : -1),
            m(4),
            P('analyticsData', d),
            m(7),
            F(o.open && r.dialogComponent() ? 19 : -1);
        }
      },
      dependencies: [dt, Nt, Tt, Rt, Gt],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
export { ar as default };
