import {
  $ as vn,
  C as an,
  Ca as lt,
  D as Bt,
  Da as wn,
  E as cn,
  Ea as Rn,
  F as st,
  Fa as Zt,
  G as Vt,
  Ga as Cn,
  H as un,
  I as ln,
  J as Me,
  Ka as bn,
  L as Ie,
  La as Yt,
  M as dn,
  Ma as En,
  Na as Mn,
  Oa as j,
  P as hn,
  Pa as In,
  Q as pn,
  Qa as Kt,
  Ra as Tn,
  S as fn,
  Sa as An,
  T as qt,
  Ta as Ae,
  U as at,
  Ua as Dn,
  V as ct,
  Va as On,
  W as gn,
  Wa as Qt,
  Xa as _n,
  Ya as Un,
  Za as Pn,
  _ as Wt,
  a as R,
  aa as Te,
  ba as mn,
  c as w,
  ca as Gt,
  cb as Nn,
  d as ot,
  da as ce,
  e as Jr,
  eb as xn,
  f as b,
  g as zt,
  h as y,
  i as f,
  ia as yn,
  j as Ce,
  ja as Sn,
  k as en,
  ka as ut,
  l as tn,
  m as be,
  n as z,
  o as rn,
  r as Ft,
  s as J,
  t as nn,
  u as on,
  v as Ee,
  w as V,
  x as Ht,
  z as sn,
} from './chunk-CAPGD25R.js';
import {
  A as ae,
  B as jt,
  C as _,
  D as Gr,
  F as it,
  G as Y,
  H as $t,
  I as Zr,
  K as Yr,
  L as Kr,
  N as Qr,
  O as I,
  P as Xr,
  Q as C,
  a as Br,
  b as Vr,
  c as Pt,
  d as Nt,
  e as H,
  f as N,
  i as B,
  j as D,
  k as p,
  l as X,
  m as qr,
  n as Wr,
  o as m,
  p as rt,
  q as O,
  r as xt,
  s as nt,
  t as ie,
  v as Lt,
  w as kt,
  x as oe,
  y as x,
  z as se,
} from './chunk-N6NGTOBN.js';
import { a as d, b as A } from './chunk-KAT7YFEL.js';
var Jt = class extends Mn {
    supportsDOMEvents = !0;
  },
  er = class t extends Jt {
    static makeCurrent() {
      En(new t());
    }
    onAndCancel(r, e, n, i) {
      return (
        r.addEventListener(e, n, i),
        () => {
          r.removeEventListener(e, n, i);
        }
      );
    }
    dispatchEvent(r, e) {
      r.dispatchEvent(e);
    }
    remove(r) {
      r.remove();
    }
    createElement(r, e) {
      return (e = e || this.getDefaultDocument()), e.createElement(r);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(r) {
      return r.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(r) {
      return r instanceof DocumentFragment;
    }
    getGlobalEventTarget(r, e) {
      return e === 'window'
        ? window
        : e === 'document'
          ? r
          : e === 'body'
            ? r.body
            : null;
    }
    getBaseHref(r) {
      let e = Ki();
      return e == null ? null : Qi(e);
    }
    resetBaseElement() {
      De = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(r) {
      return Dn(document.cookie, r);
    }
  },
  De = null;
function Ki() {
  return (
    (De = De || document.querySelector('base')),
    De ? De.getAttribute('href') : null
  );
}
function Qi(t) {
  return new URL(t, document.baseURI).pathname;
}
var Xi = (() => {
    class t {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  tr = new b(''),
  Fn = (() => {
    class t {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, n) {
        (this._zone = n),
          e.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, n, i, o) {
        return this._findPluginFor(n).addEventListener(e, n, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let n = this._eventNameToPlugin.get(e);
        if (n) return n;
        if (((n = this._plugins.find((o) => o.supports(e))), !n))
          throw new R(5101, !1);
        return this._eventNameToPlugin.set(e, n), n;
      }
      static ɵfac = function (n) {
        return new (n || t)(y(tr), y(V));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  ht = class {
    _doc;
    constructor(r) {
      this._doc = r;
    }
    manager;
  },
  dt = 'ng-app-id';
function Ln(t) {
  for (let r of t) r.remove();
}
function kn(t, r) {
  let e = r.createElement('style');
  return (e.textContent = t), e;
}
function Ji(t, r, e, n) {
  let i = t.head?.querySelectorAll(`style[${dt}="${r}"],link[${dt}="${r}"]`);
  if (i)
    for (let o of i)
      o.removeAttribute(dt),
        o instanceof HTMLLinkElement
          ? n.set(o.href.slice(o.href.lastIndexOf('/') + 1), {
              usage: 0,
              elements: [o],
            })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] });
}
function rr(t, r) {
  let e = r.createElement('link');
  return e.setAttribute('rel', 'stylesheet'), e.setAttribute('href', t), e;
}
var Hn = (() => {
    class t {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      isServer;
      constructor(e, n, i, o = {}) {
        (this.doc = e),
          (this.appId = n),
          (this.nonce = i),
          (this.isServer = Qt(o)),
          Ji(e, n, this.inline, this.external),
          this.hosts.add(e.head);
      }
      addStyles(e, n) {
        for (let i of e) this.addUsage(i, this.inline, kn);
        n?.forEach((i) => this.addUsage(i, this.external, rr));
      }
      removeStyles(e, n) {
        for (let i of e) this.removeUsage(i, this.inline);
        n?.forEach((i) => this.removeUsage(i, this.external));
      }
      addUsage(e, n, i) {
        let o = n.get(e);
        o
          ? o.usage++
          : n.set(e, {
              usage: 1,
              elements: [...this.hosts].map((s) =>
                this.addElement(s, i(e, this.doc)),
              ),
            });
      }
      removeUsage(e, n) {
        let i = n.get(e);
        i && (i.usage--, i.usage <= 0 && (Ln(i.elements), n.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external])
          Ln(e);
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [n, { elements: i }] of this.inline)
          i.push(this.addElement(e, kn(n, this.doc)));
        for (let [n, { elements: i }] of this.external)
          i.push(this.addElement(e, rr(n, this.doc)));
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, n) {
        return (
          this.nonce && n.setAttribute('nonce', this.nonce),
          this.isServer && n.setAttribute(dt, this.appId),
          e.appendChild(n)
        );
      }
      static ɵfac = function (n) {
        return new (n || t)(y(j), y(Bt), y(Vt, 8), y(st));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Xt = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  or = /%COMP%/g;
var Bn = '%COMP%',
  eo = `_nghost-${Bn}`,
  to = `_ngcontent-${Bn}`,
  ro = !0,
  no = new b('', { providedIn: 'root', factory: () => ro });
function io(t) {
  return to.replace(or, t);
}
function oo(t) {
  return eo.replace(or, t);
}
function Vn(t, r) {
  return r.map((e) => e.replace(or, t));
}
var jn = (() => {
    class t {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(e, n, i, o, s, c, a, u = null, l = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = n),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = c),
          (this.ngZone = a),
          (this.nonce = u),
          (this.tracingService = l),
          (this.platformIsServer = Qt(c)),
          (this.defaultRenderer = new Oe(
            e,
            s,
            a,
            this.platformIsServer,
            this.tracingService,
          ));
      }
      createRenderer(e, n) {
        if (!e || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === Me.ShadowDom &&
          (n = A(d({}, n), { encapsulation: Me.Emulated }));
        let i = this.getOrCreateRenderer(e, n);
        return (
          i instanceof pt
            ? i.applyToHost(e)
            : i instanceof _e && i.applyStyles(),
          i
        );
      }
      getOrCreateRenderer(e, n) {
        let i = this.rendererByCompId,
          o = i.get(n.id);
        if (!o) {
          let s = this.doc,
            c = this.ngZone,
            a = this.eventManager,
            u = this.sharedStylesHost,
            l = this.removeStylesOnCompDestroy,
            h = this.platformIsServer,
            v = this.tracingService;
          switch (n.encapsulation) {
            case Me.Emulated:
              o = new pt(a, u, n, this.appId, l, s, c, h, v);
              break;
            case Me.ShadowDom:
              return new nr(a, u, e, n, s, c, this.nonce, h, v);
            default:
              o = new _e(a, u, n, l, s, c, h, v);
              break;
          }
          i.set(n.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (n) {
        return new (n || t)(
          y(Fn),
          y(Hn),
          y(Bt),
          y(no),
          y(j),
          y(st),
          y(V),
          y(Vt),
          y(un, 8),
        );
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Oe = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, n, i, o) {
      (this.eventManager = r),
        (this.doc = e),
        (this.ngZone = n),
        (this.platformIsServer = i),
        (this.tracingService = o);
    }
    destroy() {}
    destroyNode = null;
    createElement(r, e) {
      return e
        ? this.doc.createElementNS(Xt[e] || e, r)
        : this.doc.createElement(r);
    }
    createComment(r) {
      return this.doc.createComment(r);
    }
    createText(r) {
      return this.doc.createTextNode(r);
    }
    appendChild(r, e) {
      ($n(r) ? r.content : r).appendChild(e);
    }
    insertBefore(r, e, n) {
      r && ($n(r) ? r.content : r).insertBefore(e, n);
    }
    removeChild(r, e) {
      e.remove();
    }
    selectRootElement(r, e) {
      let n = typeof r == 'string' ? this.doc.querySelector(r) : r;
      if (!n) throw new R(-5104, !1);
      return e || (n.textContent = ''), n;
    }
    parentNode(r) {
      return r.parentNode;
    }
    nextSibling(r) {
      return r.nextSibling;
    }
    setAttribute(r, e, n, i) {
      if (i) {
        e = i + ':' + e;
        let o = Xt[i];
        o ? r.setAttributeNS(o, e, n) : r.setAttribute(e, n);
      } else r.setAttribute(e, n);
    }
    removeAttribute(r, e, n) {
      if (n) {
        let i = Xt[n];
        i ? r.removeAttributeNS(i, e) : r.removeAttribute(`${n}:${e}`);
      } else r.removeAttribute(e);
    }
    addClass(r, e) {
      r.classList.add(e);
    }
    removeClass(r, e) {
      r.classList.remove(e);
    }
    setStyle(r, e, n, i) {
      i & (Ie.DashCase | Ie.Important)
        ? r.style.setProperty(e, n, i & Ie.Important ? 'important' : '')
        : (r.style[e] = n);
    }
    removeStyle(r, e, n) {
      n & Ie.DashCase ? r.style.removeProperty(e) : (r.style[e] = '');
    }
    setProperty(r, e, n) {
      r != null && (r[e] = n);
    }
    setValue(r, e) {
      r.nodeValue = e;
    }
    listen(r, e, n, i) {
      if (
        typeof r == 'string' &&
        ((r = Yt().getGlobalEventTarget(this.doc, r)), !r)
      )
        throw new R(5102, !1);
      let o = this.decoratePreventDefault(n);
      return (
        this.tracingService?.wrapEventListener &&
          (o = this.tracingService.wrapEventListener(r, e, o)),
        this.eventManager.addEventListener(r, e, o, i)
      );
    }
    decoratePreventDefault(r) {
      return (e) => {
        if (e === '__ngUnwrap__') return r;
        (this.platformIsServer ? this.ngZone.runGuarded(() => r(e)) : r(e)) ===
          !1 && e.preventDefault();
      };
    }
  };
function $n(t) {
  return t.tagName === 'TEMPLATE' && t.content !== void 0;
}
var nr = class extends Oe {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(r, e, n, i, o, s, c, a, u) {
      super(r, o, s, a, u),
        (this.sharedStylesHost = e),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = i.styles;
      l = Vn(i.id, l);
      for (let v of l) {
        let M = document.createElement('style');
        c && M.setAttribute('nonce', c),
          (M.textContent = v),
          this.shadowRoot.appendChild(M);
      }
      let h = i.getExternalStyles?.();
      if (h)
        for (let v of h) {
          let M = rr(v, o);
          c && M.setAttribute('nonce', c), this.shadowRoot.appendChild(M);
        }
    }
    nodeOrShadowRoot(r) {
      return r === this.hostEl ? this.shadowRoot : r;
    }
    appendChild(r, e) {
      return super.appendChild(this.nodeOrShadowRoot(r), e);
    }
    insertBefore(r, e, n) {
      return super.insertBefore(this.nodeOrShadowRoot(r), e, n);
    }
    removeChild(r, e) {
      return super.removeChild(null, e);
    }
    parentNode(r) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  _e = class extends Oe {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, n, i, o, s, c, a, u) {
      super(r, o, s, c, a),
        (this.sharedStylesHost = e),
        (this.removeStylesOnCompDestroy = i);
      let l = n.styles;
      (this.styles = u ? Vn(u, l) : l),
        (this.styleUrls = n.getExternalStyles?.(u));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  pt = class extends _e {
    contentAttr;
    hostAttr;
    constructor(r, e, n, i, o, s, c, a, u) {
      let l = i + '-' + n.id;
      super(r, e, n, o, s, c, a, u, l),
        (this.contentAttr = io(l)),
        (this.hostAttr = oo(l));
    }
    applyToHost(r) {
      this.applyStyles(), this.setAttribute(r, this.hostAttr, '');
    }
    createElement(r, e) {
      let n = super.createElement(r, e);
      return super.setAttribute(n, this.contentAttr, ''), n;
    }
  },
  so = (() => {
    class t extends ht {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, n, i, o) {
        return (
          e.addEventListener(n, i, o),
          () => this.removeEventListener(e, n, i, o)
        );
      }
      removeEventListener(e, n, i, o) {
        return e.removeEventListener(n, i, o);
      }
      static ɵfac = function (n) {
        return new (n || t)(y(j));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  zn = ['alt', 'control', 'meta', 'shift'],
  ao = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  co = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  uo = (() => {
    class t extends ht {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, n, i, o) {
        let s = t.parseEventName(n),
          c = t.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Yt().onAndCancel(e, s.domEventName, c, o));
      }
      static parseEventName(e) {
        let n = e.toLowerCase().split('.'),
          i = n.shift();
        if (n.length === 0 || !(i === 'keydown' || i === 'keyup')) return null;
        let o = t._normalizeKey(n.pop()),
          s = '',
          c = n.indexOf('code');
        if (
          (c > -1 && (n.splice(c, 1), (s = 'code.')),
          zn.forEach((u) => {
            let l = n.indexOf(u);
            l > -1 && (n.splice(l, 1), (s += u + '.'));
          }),
          (s += o),
          n.length != 0 || o.length === 0)
        )
          return null;
        let a = {};
        return (a.domEventName = i), (a.fullKey = s), a;
      }
      static matchEventFullKeyCode(e, n) {
        let i = ao[e.key] || e.key,
          o = '';
        return (
          n.indexOf('code.') > -1 && ((i = e.code), (o = 'code.')),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === ' ' ? (i = 'space') : i === '.' && (i = 'dot'),
              zn.forEach((s) => {
                if (s !== i) {
                  let c = co[s];
                  c(e) && (o += s + '.');
                }
              }),
              (o += i),
              o === n)
        );
      }
      static eventCallback(e, n, i) {
        return (o) => {
          t.matchEventFullKeyCode(o, e) && i.runGuarded(() => n(o));
        };
      }
      static _normalizeKey(e) {
        return e === 'esc' ? 'escape' : e;
      }
      static ɵfac = function (n) {
        return new (n || t)(y(j));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function qn(t, r) {
  return Cn(d({ rootComponent: t }, lo(r)));
}
function lo(t) {
  return {
    appProviders: [...vo, ...(t?.providers ?? [])],
    platformProviders: go,
  };
}
function ho() {
  er.makeCurrent();
}
function po() {
  return new Ht();
}
function fo() {
  return an(document), document;
}
var go = [
  { provide: st, useValue: On },
  { provide: cn, useValue: ho, multi: !0 },
  { provide: j, useFactory: fo, deps: [] },
];
var vo = [
  { provide: tn, useValue: 'root' },
  { provide: Ht, useFactory: po, deps: [] },
  { provide: tr, useClass: so, multi: !0, deps: [j] },
  { provide: tr, useClass: uo, multi: !0, deps: [j] },
  jn,
  Hn,
  Fn,
  { provide: dn, useExisting: jn },
  { provide: Un, useClass: Xi, deps: [] },
  [],
];
var Wn = (() => {
  class t {
    _doc;
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || '';
    }
    static ɵfac = function (n) {
      return new (n || t)(y(j));
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var g = 'primary',
  We = Symbol('RouteTitle'),
  lr = class {
    params;
    constructor(r) {
      this.params = r || {};
    }
    has(r) {
      return Object.prototype.hasOwnProperty.call(this.params, r);
    }
    get(r) {
      if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(r) {
      if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function fe(t) {
  return new lr(t);
}
function yo(t, r, e) {
  let n = e.path.split('/');
  if (
    n.length > t.length ||
    (e.pathMatch === 'full' && (r.hasChildren() || n.length < t.length))
  )
    return null;
  let i = {};
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      c = t[o];
    if (s[0] === ':') i[s.substring(1)] = c;
    else if (s !== c.path) return null;
  }
  return { consumed: t.slice(0, n.length), posParams: i };
}
function So(t, r) {
  if (t.length !== r.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!F(t[e], r[e])) return !1;
  return !0;
}
function F(t, r) {
  let e = t ? dr(t) : void 0,
    n = r ? dr(r) : void 0;
  if (!e || !n || e.length != n.length) return !1;
  let i;
  for (let o = 0; o < e.length; o++)
    if (((i = e[o]), !ri(t[i], r[i]))) return !1;
  return !0;
}
function dr(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function ri(t, r) {
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length) return !1;
    let e = [...t].sort(),
      n = [...r].sort();
    return e.every((i, o) => n[o] === i);
  } else return t === r;
}
function ni(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function Q(t) {
  return qr(t) ? t : vn(t) ? D(Promise.resolve(t)) : p(t);
}
var wo = { exact: oi, subset: si },
  ii = { exact: Ro, subset: Co, ignored: () => !0 };
function Gn(t, r, e) {
  return (
    wo[e.paths](t.root, r.root, e.matrixParams) &&
    ii[e.queryParams](t.queryParams, r.queryParams) &&
    !(e.fragment === 'exact' && t.fragment !== r.fragment)
  );
}
function Ro(t, r) {
  return F(t, r);
}
function oi(t, r, e) {
  if (
    !te(t.segments, r.segments) ||
    !vt(t.segments, r.segments, e) ||
    t.numberOfChildren !== r.numberOfChildren
  )
    return !1;
  for (let n in r.children)
    if (!t.children[n] || !oi(t.children[n], r.children[n], e)) return !1;
  return !0;
}
function Co(t, r) {
  return (
    Object.keys(r).length <= Object.keys(t).length &&
    Object.keys(r).every((e) => ri(t[e], r[e]))
  );
}
function si(t, r, e) {
  return ai(t, r, r.segments, e);
}
function ai(t, r, e, n) {
  if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!te(i, e) || r.hasChildren() || !vt(i, e, n));
  } else if (t.segments.length === e.length) {
    if (!te(t.segments, e) || !vt(t.segments, e, n)) return !1;
    for (let i in r.children)
      if (!t.children[i] || !si(t.children[i], r.children[i], n)) return !1;
    return !0;
  } else {
    let i = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !te(t.segments, i) || !vt(t.segments, i, n) || !t.children[g]
      ? !1
      : ai(t.children[g], r, o, n);
  }
}
function vt(t, r, e) {
  return r.every((n, i) => ii[e](t[i].parameters, n.parameters));
}
var W = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(r = new S([], {}), e = {}, n = null) {
      (this.root = r), (this.queryParams = e), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= fe(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Mo.serialize(this);
    }
  },
  S = class {
    segments;
    children;
    parent = null;
    constructor(r, e) {
      (this.segments = r),
        (this.children = e),
        Object.values(e).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return mt(this);
    }
  },
  ee = class {
    path;
    parameters;
    _parameterMap;
    constructor(r, e) {
      (this.path = r), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= fe(this.parameters)), this._parameterMap;
    }
    toString() {
      return ui(this);
    }
  };
function bo(t, r) {
  return te(t, r) && t.every((e, n) => F(e.parameters, r[n].parameters));
}
function te(t, r) {
  return t.length !== r.length ? !1 : t.every((e, n) => e.path === r[n].path);
}
function Eo(t, r) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([n, i]) => {
      n === g && (e = e.concat(r(i, n)));
    }),
    Object.entries(t.children).forEach(([n, i]) => {
      n !== g && (e = e.concat(r(i, n)));
    }),
    e
  );
}
var Ge = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({
        token: t,
        factory: () => new ge(),
        providedIn: 'root',
      });
    }
    return t;
  })(),
  ge = class {
    parse(r) {
      let e = new pr(r);
      return new W(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment(),
      );
    }
    serialize(r) {
      let e = `/${Ue(r.root, !0)}`,
        n = Ao(r.queryParams),
        i = typeof r.fragment == 'string' ? `#${Io(r.fragment)}` : '';
      return `${e}${n}${i}`;
    }
  },
  Mo = new ge();
function mt(t) {
  return t.segments.map((r) => ui(r)).join('/');
}
function Ue(t, r) {
  if (!t.hasChildren()) return mt(t);
  if (r) {
    let e = t.children[g] ? Ue(t.children[g], !1) : '',
      n = [];
    return (
      Object.entries(t.children).forEach(([i, o]) => {
        i !== g && n.push(`${i}:${Ue(o, !1)}`);
      }),
      n.length > 0 ? `${e}(${n.join('//')})` : e
    );
  } else {
    let e = Eo(t, (n, i) =>
      i === g ? [Ue(t.children[g], !1)] : [`${i}:${Ue(n, !1)}`],
    );
    return Object.keys(t.children).length === 1 && t.children[g] != null
      ? `${mt(t)}/${e[0]}`
      : `${mt(t)}/(${e.join('//')})`;
  }
}
function ci(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}
function ft(t) {
  return ci(t).replace(/%3B/gi, ';');
}
function Io(t) {
  return encodeURI(t);
}
function hr(t) {
  return ci(t)
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/%26/gi, '&');
}
function yt(t) {
  return decodeURIComponent(t);
}
function Zn(t) {
  return yt(t.replace(/\+/g, '%20'));
}
function ui(t) {
  return `${hr(t.path)}${To(t.parameters)}`;
}
function To(t) {
  return Object.entries(t)
    .map(([r, e]) => `;${hr(r)}=${hr(e)}`)
    .join('');
}
function Ao(t) {
  let r = Object.entries(t)
    .map(([e, n]) =>
      Array.isArray(n)
        ? n.map((i) => `${ft(e)}=${ft(i)}`).join('&')
        : `${ft(e)}=${ft(n)}`,
    )
    .filter((e) => e);
  return r.length ? `?${r.join('&')}` : '';
}
var Do = /^[^\/()?;#]+/;
function sr(t) {
  let r = t.match(Do);
  return r ? r[0] : '';
}
var Oo = /^[^\/()?;=#]+/;
function _o(t) {
  let r = t.match(Oo);
  return r ? r[0] : '';
}
var Uo = /^[^=?&#]+/;
function Po(t) {
  let r = t.match(Uo);
  return r ? r[0] : '';
}
var No = /^[^&#]+/;
function xo(t) {
  let r = t.match(No);
  return r ? r[0] : '';
}
var pr = class {
  url;
  remaining;
  constructor(r) {
    (this.url = r), (this.remaining = r);
  }
  parseRootSegment() {
    return (
      this.consumeOptional('/'),
      this.remaining === '' ||
      this.peekStartsWith('?') ||
      this.peekStartsWith('#')
        ? new S([], {})
        : new S([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let r = {};
    if (this.consumeOptional('?'))
      do this.parseQueryParam(r);
      while (this.consumeOptional('&'));
    return r;
  }
  parseFragment() {
    return this.consumeOptional('#')
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === '') return {};
    this.consumeOptional('/');
    let r = [];
    for (
      this.peekStartsWith('(') || r.push(this.parseSegment());
      this.peekStartsWith('/') &&
      !this.peekStartsWith('//') &&
      !this.peekStartsWith('/(');

    )
      this.capture('/'), r.push(this.parseSegment());
    let e = {};
    this.peekStartsWith('/(') &&
      (this.capture('/'), (e = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith('(') && (n = this.parseParens(!1)),
      (r.length > 0 || Object.keys(e).length > 0) && (n[g] = new S(r, e)),
      n
    );
  }
  parseSegment() {
    let r = sr(this.remaining);
    if (r === '' && this.peekStartsWith(';')) throw new R(4009, !1);
    return this.capture(r), new ee(yt(r), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let r = {};
    for (; this.consumeOptional(';'); ) this.parseParam(r);
    return r;
  }
  parseParam(r) {
    let e = _o(this.remaining);
    if (!e) return;
    this.capture(e);
    let n = '';
    if (this.consumeOptional('=')) {
      let i = sr(this.remaining);
      i && ((n = i), this.capture(n));
    }
    r[yt(e)] = yt(n);
  }
  parseQueryParam(r) {
    let e = Po(this.remaining);
    if (!e) return;
    this.capture(e);
    let n = '';
    if (this.consumeOptional('=')) {
      let s = xo(this.remaining);
      s && ((n = s), this.capture(n));
    }
    let i = Zn(e),
      o = Zn(n);
    if (r.hasOwnProperty(i)) {
      let s = r[i];
      Array.isArray(s) || ((s = [s]), (r[i] = s)), s.push(o);
    } else r[i] = o;
  }
  parseParens(r) {
    let e = {};
    for (
      this.capture('(');
      !this.consumeOptional(')') && this.remaining.length > 0;

    ) {
      let n = sr(this.remaining),
        i = this.remaining[n.length];
      if (i !== '/' && i !== ')' && i !== ';') throw new R(4010, !1);
      let o;
      n.indexOf(':') > -1
        ? ((o = n.slice(0, n.indexOf(':'))), this.capture(o), this.capture(':'))
        : r && (o = g);
      let s = this.parseChildren();
      (e[o] = Object.keys(s).length === 1 ? s[g] : new S([], s)),
        this.consumeOptional('//');
    }
    return e;
  }
  peekStartsWith(r) {
    return this.remaining.startsWith(r);
  }
  consumeOptional(r) {
    return this.peekStartsWith(r)
      ? ((this.remaining = this.remaining.substring(r.length)), !0)
      : !1;
  }
  capture(r) {
    if (!this.consumeOptional(r)) throw new R(4011, !1);
  }
};
function li(t) {
  return t.segments.length > 0 ? new S([], { [g]: t }) : t;
}
function di(t) {
  let r = {};
  for (let [n, i] of Object.entries(t.children)) {
    let o = di(i);
    if (n === g && o.segments.length === 0 && o.hasChildren())
      for (let [s, c] of Object.entries(o.children)) r[s] = c;
    else (o.segments.length > 0 || o.hasChildren()) && (r[n] = o);
  }
  let e = new S(t.segments, r);
  return Lo(e);
}
function Lo(t) {
  if (t.numberOfChildren === 1 && t.children[g]) {
    let r = t.children[g];
    return new S(t.segments.concat(r.segments), r.children);
  }
  return t;
}
function ke(t) {
  return t instanceof W;
}
function ko(t, r, e = null, n = null) {
  let i = hi(t);
  return pi(i, r, e, n);
}
function hi(t) {
  let r;
  function e(o) {
    let s = {};
    for (let a of o.children) {
      let u = e(a);
      s[a.outlet] = u;
    }
    let c = new S(o.url, s);
    return o === t && (r = c), c;
  }
  let n = e(t.root),
    i = li(n);
  return r ?? i;
}
function pi(t, r, e, n) {
  let i = t;
  for (; i.parent; ) i = i.parent;
  if (r.length === 0) return ar(i, i, i, e, n);
  let o = jo(r);
  if (o.toRoot()) return ar(i, i, new S([], {}), e, n);
  let s = $o(o, i, t),
    c = s.processChildren
      ? Ne(s.segmentGroup, s.index, o.commands)
      : gi(s.segmentGroup, s.index, o.commands);
  return ar(i, s.segmentGroup, c, e, n);
}
function St(t) {
  return typeof t == 'object' && t != null && !t.outlets && !t.segmentPath;
}
function je(t) {
  return typeof t == 'object' && t != null && t.outlets;
}
function ar(t, r, e, n, i) {
  let o = {};
  n &&
    Object.entries(n).forEach(([a, u]) => {
      o[a] = Array.isArray(u) ? u.map((l) => `${l}`) : `${u}`;
    });
  let s;
  t === r ? (s = e) : (s = fi(t, r, e));
  let c = li(di(s));
  return new W(c, o, i);
}
function fi(t, r, e) {
  let n = {};
  return (
    Object.entries(t.children).forEach(([i, o]) => {
      o === r ? (n[i] = e) : (n[i] = fi(o, r, e));
    }),
    new S(t.segments, n)
  );
}
var wt = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(r, e, n) {
    if (
      ((this.isAbsolute = r),
      (this.numberOfDoubleDots = e),
      (this.commands = n),
      r && n.length > 0 && St(n[0]))
    )
      throw new R(4003, !1);
    let i = n.find(je);
    if (i && i !== ni(n)) throw new R(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/'
    );
  }
};
function jo(t) {
  if (typeof t[0] == 'string' && t.length === 1 && t[0] === '/')
    return new wt(!0, 0, t);
  let r = 0,
    e = !1,
    n = t.reduce((i, o, s) => {
      if (typeof o == 'object' && o != null) {
        if (o.outlets) {
          let c = {};
          return (
            Object.entries(o.outlets).forEach(([a, u]) => {
              c[a] = typeof u == 'string' ? u.split('/') : u;
            }),
            [...i, { outlets: c }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != 'string'
        ? [...i, o]
        : s === 0
          ? (o.split('/').forEach((c, a) => {
              (a == 0 && c === '.') ||
                (a == 0 && c === ''
                  ? (e = !0)
                  : c === '..'
                    ? r++
                    : c != '' && i.push(c));
            }),
            i)
          : [...i, o];
    }, []);
  return new wt(e, r, n);
}
var de = class {
  segmentGroup;
  processChildren;
  index;
  constructor(r, e, n) {
    (this.segmentGroup = r), (this.processChildren = e), (this.index = n);
  }
};
function $o(t, r, e) {
  if (t.isAbsolute) return new de(r, !0, 0);
  if (!e) return new de(r, !1, NaN);
  if (e.parent === null) return new de(e, !0, 0);
  let n = St(t.commands[0]) ? 0 : 1,
    i = e.segments.length - 1 + n;
  return zo(e, i, t.numberOfDoubleDots);
}
function zo(t, r, e) {
  let n = t,
    i = r,
    o = e;
  for (; o > i; ) {
    if (((o -= i), (n = n.parent), !n)) throw new R(4005, !1);
    i = n.segments.length;
  }
  return new de(n, !1, i - o);
}
function Fo(t) {
  return je(t[0]) ? t[0].outlets : { [g]: t };
}
function gi(t, r, e) {
  if (((t ??= new S([], {})), t.segments.length === 0 && t.hasChildren()))
    return Ne(t, r, e);
  let n = Ho(t, r, e),
    i = e.slice(n.commandIndex);
  if (n.match && n.pathIndex < t.segments.length) {
    let o = new S(t.segments.slice(0, n.pathIndex), {});
    return (
      (o.children[g] = new S(t.segments.slice(n.pathIndex), t.children)),
      Ne(o, 0, i)
    );
  } else
    return n.match && i.length === 0
      ? new S(t.segments, {})
      : n.match && !t.hasChildren()
        ? fr(t, r, e)
        : n.match
          ? Ne(t, 0, i)
          : fr(t, r, e);
}
function Ne(t, r, e) {
  if (e.length === 0) return new S(t.segments, {});
  {
    let n = Fo(e),
      i = {};
    if (
      Object.keys(n).some((o) => o !== g) &&
      t.children[g] &&
      t.numberOfChildren === 1 &&
      t.children[g].segments.length === 0
    ) {
      let o = Ne(t.children[g], r, e);
      return new S(t.segments, o.children);
    }
    return (
      Object.entries(n).forEach(([o, s]) => {
        typeof s == 'string' && (s = [s]),
          s !== null && (i[o] = gi(t.children[o], r, s));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        n[o] === void 0 && (i[o] = s);
      }),
      new S(t.segments, i)
    );
  }
}
function Ho(t, r, e) {
  let n = 0,
    i = r,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < t.segments.length; ) {
    if (n >= e.length) return o;
    let s = t.segments[i],
      c = e[n];
    if (je(c)) break;
    let a = `${c}`,
      u = n < e.length - 1 ? e[n + 1] : null;
    if (i > 0 && a === void 0) break;
    if (a && u && typeof u == 'object' && u.outlets === void 0) {
      if (!Kn(a, u, s)) return o;
      n += 2;
    } else {
      if (!Kn(a, {}, s)) return o;
      n++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: n };
}
function fr(t, r, e) {
  let n = t.segments.slice(0, r),
    i = 0;
  for (; i < e.length; ) {
    let o = e[i];
    if (je(o)) {
      let a = Bo(o.outlets);
      return new S(n, a);
    }
    if (i === 0 && St(e[0])) {
      let a = t.segments[r];
      n.push(new ee(a.path, Yn(e[0]))), i++;
      continue;
    }
    let s = je(o) ? o.outlets[g] : `${o}`,
      c = i < e.length - 1 ? e[i + 1] : null;
    s && c && St(c)
      ? (n.push(new ee(s, Yn(c))), (i += 2))
      : (n.push(new ee(s, {})), i++);
  }
  return new S(n, {});
}
function Bo(t) {
  let r = {};
  return (
    Object.entries(t).forEach(([e, n]) => {
      typeof n == 'string' && (n = [n]),
        n !== null && (r[e] = fr(new S([], {}), 0, n));
    }),
    r
  );
}
function Yn(t) {
  let r = {};
  return Object.entries(t).forEach(([e, n]) => (r[e] = `${n}`)), r;
}
function Kn(t, r, e) {
  return t == e.path && F(r, e.parameters);
}
var xe = 'imperative',
  E = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = 'NavigationStart'),
      (t[(t.NavigationEnd = 1)] = 'NavigationEnd'),
      (t[(t.NavigationCancel = 2)] = 'NavigationCancel'),
      (t[(t.NavigationError = 3)] = 'NavigationError'),
      (t[(t.RoutesRecognized = 4)] = 'RoutesRecognized'),
      (t[(t.ResolveStart = 5)] = 'ResolveStart'),
      (t[(t.ResolveEnd = 6)] = 'ResolveEnd'),
      (t[(t.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
      (t[(t.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
      (t[(t.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
      (t[(t.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
      (t[(t.ChildActivationStart = 11)] = 'ChildActivationStart'),
      (t[(t.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
      (t[(t.ActivationStart = 13)] = 'ActivationStart'),
      (t[(t.ActivationEnd = 14)] = 'ActivationEnd'),
      (t[(t.Scroll = 15)] = 'Scroll'),
      (t[(t.NavigationSkipped = 16)] = 'NavigationSkipped'),
      t
    );
  })(E || {}),
  L = class {
    id;
    url;
    constructor(r, e) {
      (this.id = r), (this.url = e);
    }
  },
  ve = class extends L {
    type = E.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(r, e, n = 'imperative', i = null) {
      super(r, e), (this.navigationTrigger = n), (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  G = class extends L {
    urlAfterRedirects;
    type = E.NavigationEnd;
    constructor(r, e, n) {
      super(r, e), (this.urlAfterRedirects = n);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  P = (function (t) {
    return (
      (t[(t.Redirect = 0)] = 'Redirect'),
      (t[(t.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
      (t[(t.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
      (t[(t.GuardRejected = 3)] = 'GuardRejected'),
      t
    );
  })(P || {}),
  Rt = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        'IgnoredByUrlHandlingStrategy'),
      t
    );
  })(Rt || {}),
  q = class extends L {
    reason;
    code;
    type = E.NavigationCancel;
    constructor(r, e, n, i) {
      super(r, e), (this.reason = n), (this.code = i);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  K = class extends L {
    reason;
    code;
    type = E.NavigationSkipped;
    constructor(r, e, n, i) {
      super(r, e), (this.reason = n), (this.code = i);
    }
  },
  $e = class extends L {
    error;
    target;
    type = E.NavigationError;
    constructor(r, e, n, i) {
      super(r, e), (this.error = n), (this.target = i);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Ct = class extends L {
    urlAfterRedirects;
    state;
    type = E.RoutesRecognized;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  gr = class extends L {
    urlAfterRedirects;
    state;
    type = E.GuardsCheckStart;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  vr = class extends L {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = E.GuardsCheckEnd;
    constructor(r, e, n, i, o) {
      super(r, e),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.shouldActivate = o);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  mr = class extends L {
    urlAfterRedirects;
    state;
    type = E.ResolveStart;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  yr = class extends L {
    urlAfterRedirects;
    state;
    type = E.ResolveEnd;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Sr = class {
    route;
    type = E.RouteConfigLoadStart;
    constructor(r) {
      this.route = r;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  wr = class {
    route;
    type = E.RouteConfigLoadEnd;
    constructor(r) {
      this.route = r;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Rr = class {
    snapshot;
    type = E.ChildActivationStart;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Cr = class {
    snapshot;
    type = E.ChildActivationEnd;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  br = class {
    snapshot;
    type = E.ActivationStart;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Er = class {
    snapshot;
    type = E.ActivationEnd;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  bt = class {
    routerEvent;
    position;
    anchor;
    type = E.Scroll;
    constructor(r, e, n) {
      (this.routerEvent = r), (this.position = e), (this.anchor = n);
    }
    toString() {
      let r = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${r}')`;
    }
  },
  ze = class {},
  me = class {
    url;
    navigationBehaviorOptions;
    constructor(r, e) {
      (this.url = r), (this.navigationBehaviorOptions = e);
    }
  };
function Vo(t, r) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = qt(t.providers, r, `Route: ${t.path}`)),
    t._injector ?? r
  );
}
function $(t) {
  return t.outlet || g;
}
function qo(t, r) {
  let e = t.filter((n) => $(n) === r);
  return e.push(...t.filter((n) => $(n) !== r)), e;
}
function Ze(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let r = t.parent; r; r = r.parent) {
    let e = r.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var Mr = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return Ze(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(r) {
      (this.rootInjector = r), (this.children = new Ye(this.rootInjector));
    }
  },
  Ye = (() => {
    class t {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, n) {
        let i = this.getOrCreateContext(e);
        (i.outlet = n), this.contexts.set(e, i);
      }
      onChildOutletDestroyed(e) {
        let n = this.getContext(e);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let n = this.getContext(e);
        return (
          n || ((n = new Mr(this.rootInjector)), this.contexts.set(e, n)), n
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (n) {
        return new (n || t)(y(be));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Et = class {
    _root;
    constructor(r) {
      this._root = r;
    }
    get root() {
      return this._root.value;
    }
    parent(r) {
      let e = this.pathFromRoot(r);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(r) {
      let e = Ir(r, this._root);
      return e ? e.children.map((n) => n.value) : [];
    }
    firstChild(r) {
      let e = Ir(r, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(r) {
      let e = Tr(r, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((i) => i.value).filter((i) => i !== r);
    }
    pathFromRoot(r) {
      return Tr(r, this._root).map((e) => e.value);
    }
  };
function Ir(t, r) {
  if (t === r.value) return r;
  for (let e of r.children) {
    let n = Ir(t, e);
    if (n) return n;
  }
  return null;
}
function Tr(t, r) {
  if (t === r.value) return [r];
  for (let e of r.children) {
    let n = Tr(t, e);
    if (n.length) return n.unshift(r), n;
  }
  return [];
}
var U = class {
  value;
  children;
  constructor(r, e) {
    (this.value = r), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function le(t) {
  let r = {};
  return t && t.children.forEach((e) => (r[e.value.outlet] = e)), r;
}
var Mt = class extends Et {
  snapshot;
  constructor(r, e) {
    super(r), (this.snapshot = e), Lr(this, r);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function vi(t) {
  let r = Wo(t),
    e = new N([new ee('', {})]),
    n = new N({}),
    i = new N({}),
    o = new N({}),
    s = new N(''),
    c = new re(e, n, o, s, i, g, t, r.root);
  return (c.snapshot = r.root), new Mt(new U(c, []), r);
}
function Wo(t) {
  let r = {},
    e = {},
    n = {},
    i = '',
    o = new he([], r, n, i, e, g, t, null, {});
  return new Tt('', new U(o, []));
}
var re = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(r, e, n, i, o, s, c, a) {
    (this.urlSubject = r),
      (this.paramsSubject = e),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = c),
      (this._futureSnapshot = a),
      (this.title = this.dataSubject?.pipe(m((u) => u[We])) ?? p(void 0)),
      (this.url = r),
      (this.params = e),
      (this.queryParams = n),
      (this.fragment = i),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(m((r) => fe(r)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(m((r) => fe(r)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function It(t, r, e = 'emptyOnly') {
  let n,
    { routeConfig: i } = t;
  return (
    r !== null &&
    (e === 'always' ||
      i?.path === '' ||
      (!r.component && !r.routeConfig?.loadComponent))
      ? (n = {
          params: d(d({}, r.params), t.params),
          data: d(d({}, r.data), t.data),
          resolve: d(d(d(d({}, t.data), r.data), i?.data), t._resolvedData),
        })
      : (n = {
          params: d({}, t.params),
          data: d({}, t.data),
          resolve: d(d({}, t.data), t._resolvedData ?? {}),
        }),
    i && yi(i) && (n.resolve[We] = i.title),
    n
  );
}
var he = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[We];
    }
    constructor(r, e, n, i, o, s, c, a, u) {
      (this.url = r),
        (this.params = e),
        (this.queryParams = n),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = s),
        (this.component = c),
        (this.routeConfig = a),
        (this._resolve = u);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= fe(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= fe(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let r = this.url.map((n) => n.toString()).join('/'),
        e = this.routeConfig ? this.routeConfig.path : '';
      return `Route(url:'${r}', path:'${e}')`;
    }
  },
  Tt = class extends Et {
    url;
    constructor(r, e) {
      super(e), (this.url = r), Lr(this, e);
    }
    toString() {
      return mi(this._root);
    }
  };
function Lr(t, r) {
  (r.value._routerState = t), r.children.forEach((e) => Lr(t, e));
}
function mi(t) {
  let r = t.children.length > 0 ? ` { ${t.children.map(mi).join(', ')} } ` : '';
  return `${t.value}${r}`;
}
function cr(t) {
  if (t.snapshot) {
    let r = t.snapshot,
      e = t._futureSnapshot;
    (t.snapshot = e),
      F(r.queryParams, e.queryParams) ||
        t.queryParamsSubject.next(e.queryParams),
      r.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      F(r.params, e.params) || t.paramsSubject.next(e.params),
      So(r.url, e.url) || t.urlSubject.next(e.url),
      F(r.data, e.data) || t.dataSubject.next(e.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function Ar(t, r) {
  let e = F(t.params, r.params) && bo(t.url, r.url),
    n = !t.parent != !r.parent;
  return e && !n && (!t.parent || Ar(t.parent, r.parent));
}
function yi(t) {
  return typeof t.title == 'string' || t.title === null;
}
var Go = new b(''),
  kr = (() => {
    class t {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = g;
      activateEvents = new Ee();
      deactivateEvents = new Ee();
      attachEvents = new Ee();
      detachEvents = new Ee();
      routerOutletData = sn(void 0);
      parentContexts = f(Ye);
      location = f(pn);
      changeDetector = f(Zt);
      inputBinder = f(_t, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: n, previousValue: i } = e.name;
          if (n) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new R(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new R(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new R(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, n) {
        (this.activated = e),
          (this._activatedRoute = n),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, n) {
        if (this.isActivated) throw new R(4013, !1);
        this._activatedRoute = e;
        let i = this.location,
          s = e.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          a = new Dr(e, c, i.injector, this.routerOutletData);
        (this.activated = i.createComponent(s, {
          index: i.length,
          injector: a,
          environmentInjector: n,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵdir = gn({
        type: t,
        selectors: [['router-outlet']],
        inputs: { name: 'name', routerOutletData: [1, 'routerOutletData'] },
        outputs: {
          activateEvents: 'activate',
          deactivateEvents: 'deactivate',
          attachEvents: 'attach',
          detachEvents: 'detach',
        },
        exportAs: ['outlet'],
        features: [rn],
      });
    }
    return t;
  })(),
  Dr = class t {
    route;
    childContexts;
    parent;
    outletData;
    __ngOutletInjector(r) {
      return new t(this.route, this.childContexts, r, this.outletData);
    }
    constructor(r, e, n, i) {
      (this.route = r),
        (this.childContexts = e),
        (this.parent = n),
        (this.outletData = i);
    }
    get(r, e) {
      return r === re
        ? this.route
        : r === Ye
          ? this.childContexts
          : r === Go
            ? this.outletData
            : this.parent.get(r, e);
    }
  },
  _t = new b(''),
  Qn = (() => {
    class t {
      outletDataSubscriptions = new Map();
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: n } = e,
          i = rt([n.queryParams, n.params, n.data])
            .pipe(
              I(
                ([o, s, c], a) => (
                  (c = d(d(d({}, o), s), c)),
                  a === 0 ? p(c) : Promise.resolve(c)
                ),
              ),
            )
            .subscribe((o) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== n ||
                n.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = bn(n.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: c } of s.inputs)
                e.activatedComponentRef.setInput(c, o[c]);
            });
        this.outletDataSubscriptions.set(e, i);
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function Zo(t, r, e) {
  let n = Fe(t, r._root, e ? e._root : void 0);
  return new Mt(n, r);
}
function Fe(t, r, e) {
  if (e && t.shouldReuseRoute(r.value, e.value.snapshot)) {
    let n = e.value;
    n._futureSnapshot = r.value;
    let i = Yo(t, r, e);
    return new U(n, i);
  } else {
    if (t.shouldAttach(r.value)) {
      let o = t.retrieve(r.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = r.value),
          (s.children = r.children.map((c) => Fe(t, c))),
          s
        );
      }
    }
    let n = Ko(r.value),
      i = r.children.map((o) => Fe(t, o));
    return new U(n, i);
  }
}
function Yo(t, r, e) {
  return r.children.map((n) => {
    for (let i of e.children)
      if (t.shouldReuseRoute(n.value, i.value.snapshot)) return Fe(t, n, i);
    return Fe(t, n);
  });
}
function Ko(t) {
  return new re(
    new N(t.url),
    new N(t.params),
    new N(t.queryParams),
    new N(t.fragment),
    new N(t.data),
    t.outlet,
    t.component,
    t,
  );
}
var He = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(r, e) {
      (this.redirectTo = r), (this.navigationBehaviorOptions = e);
    }
  },
  Si = 'ngNavigationCancelingError';
function At(t, r) {
  let { redirectTo: e, navigationBehaviorOptions: n } = ke(r)
      ? { redirectTo: r, navigationBehaviorOptions: void 0 }
      : r,
    i = wi(!1, P.Redirect);
  return (i.url = e), (i.navigationBehaviorOptions = n), i;
}
function wi(t, r) {
  let e = new Error(`NavigationCancelingError: ${t || ''}`);
  return (e[Si] = !0), (e.cancellationCode = r), e;
}
function Qo(t) {
  return Ri(t) && ke(t.url);
}
function Ri(t) {
  return !!t && t[Si];
}
var Xo = (t, r, e, n) =>
    m(
      (i) => (
        new Or(r, i.targetRouterState, i.currentRouterState, e, n).activate(t),
        i
      ),
    ),
  Or = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(r, e, n, i, o) {
      (this.routeReuseStrategy = r),
        (this.futureState = e),
        (this.currState = n),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o);
    }
    activate(r) {
      let e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, r),
        cr(this.futureState.root),
        this.activateChildRoutes(e, n, r);
    }
    deactivateChildRoutes(r, e, n) {
      let i = le(e);
      r.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, i[s], n), delete i[s];
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, n);
        });
    }
    deactivateRoutes(r, e, n) {
      let i = r.value,
        o = e ? e.value : null;
      if (i === o)
        if (i.component) {
          let s = n.getContext(i.outlet);
          s && this.deactivateChildRoutes(r, e, s.children);
        } else this.deactivateChildRoutes(r, e, n);
      else o && this.deactivateRouteAndItsChildren(e, n);
    }
    deactivateRouteAndItsChildren(r, e) {
      r.value.component &&
      this.routeReuseStrategy.shouldDetach(r.value.snapshot)
        ? this.detachAndStoreRouteSubtree(r, e)
        : this.deactivateRouteAndOutlet(r, e);
    }
    detachAndStoreRouteSubtree(r, e) {
      let n = e.getContext(r.value.outlet),
        i = n && r.value.component ? n.children : e,
        o = le(r);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      if (n && n.outlet) {
        let s = n.outlet.detach(),
          c = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(r.value.snapshot, {
          componentRef: s,
          route: r,
          contexts: c,
        });
      }
    }
    deactivateRouteAndOutlet(r, e) {
      let n = e.getContext(r.value.outlet),
        i = n && r.value.component ? n.children : e,
        o = le(r);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(r, e, n) {
      let i = le(e);
      r.children.forEach((o) => {
        this.activateRoutes(o, i[o.value.outlet], n),
          this.forwardEvent(new Er(o.value.snapshot));
      }),
        r.children.length && this.forwardEvent(new Cr(r.value.snapshot));
    }
    activateRoutes(r, e, n) {
      let i = r.value,
        o = e ? e.value : null;
      if ((cr(i), i === o))
        if (i.component) {
          let s = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(r, e, s.children);
        } else this.activateChildRoutes(r, e, n);
      else if (i.component) {
        let s = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let c = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            s.children.onOutletReAttached(c.contexts),
            (s.attachRef = c.componentRef),
            (s.route = c.route.value),
            s.outlet && s.outlet.attach(c.componentRef, c.route.value),
            cr(c.route.value),
            this.activateChildRoutes(r, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = i),
            s.outlet && s.outlet.activateWith(i, s.injector),
            this.activateChildRoutes(r, null, s.children);
      } else this.activateChildRoutes(r, null, n);
    }
  },
  Dt = class {
    path;
    route;
    constructor(r) {
      (this.path = r), (this.route = this.path[this.path.length - 1]);
    }
  },
  pe = class {
    component;
    route;
    constructor(r, e) {
      (this.component = r), (this.route = e);
    }
  };
function Jo(t, r, e) {
  let n = t._root,
    i = r ? r._root : null;
  return Pe(n, i, e, [n.value]);
}
function es(t) {
  let r = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !r || r.length === 0 ? null : { node: t, guards: r };
}
function Se(t, r) {
  let e = Symbol(),
    n = r.get(t, e);
  return n === e ? (typeof t == 'function' && !Jr(t) ? t : r.get(t)) : n;
}
function Pe(
  t,
  r,
  e,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = le(r);
  return (
    t.children.forEach((s) => {
      ts(s, o[s.value.outlet], e, n.concat([s.value]), i),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, c]) => Le(c, e.getContext(s), i)),
    i
  );
}
function ts(
  t,
  r,
  e,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = t.value,
    s = r ? r.value : null,
    c = e ? e.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let a = rs(s, o, o.routeConfig.runGuardsAndResolvers);
    a
      ? i.canActivateChecks.push(new Dt(n))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? Pe(t, r, c ? c.children : null, n, i) : Pe(t, r, e, n, i),
      a &&
        c &&
        c.outlet &&
        c.outlet.isActivated &&
        i.canDeactivateChecks.push(new pe(c.outlet.component, s));
  } else
    s && Le(r, c, i),
      i.canActivateChecks.push(new Dt(n)),
      o.component
        ? Pe(t, null, c ? c.children : null, n, i)
        : Pe(t, null, e, n, i);
  return i;
}
function rs(t, r, e) {
  if (typeof e == 'function') return e(t, r);
  switch (e) {
    case 'pathParamsChange':
      return !te(t.url, r.url);
    case 'pathParamsOrQueryParamsChange':
      return !te(t.url, r.url) || !F(t.queryParams, r.queryParams);
    case 'always':
      return !0;
    case 'paramsOrQueryParamsChange':
      return !Ar(t, r) || !F(t.queryParams, r.queryParams);
    case 'paramsChange':
    default:
      return !Ar(t, r);
  }
}
function Le(t, r, e) {
  let n = le(t),
    i = t.value;
  Object.entries(n).forEach(([o, s]) => {
    i.component
      ? r
        ? Le(s, r.children.getContext(o), e)
        : Le(s, null, e)
      : Le(s, r, e);
  }),
    i.component
      ? r && r.outlet && r.outlet.isActivated
        ? e.canDeactivateChecks.push(new pe(r.outlet.component, i))
        : e.canDeactivateChecks.push(new pe(null, i))
      : e.canDeactivateChecks.push(new pe(null, i));
}
function Ke(t) {
  return typeof t == 'function';
}
function ns(t) {
  return typeof t == 'boolean';
}
function is(t) {
  return t && Ke(t.canLoad);
}
function os(t) {
  return t && Ke(t.canActivate);
}
function ss(t) {
  return t && Ke(t.canActivateChild);
}
function as(t) {
  return t && Ke(t.canDeactivate);
}
function cs(t) {
  return t && Ke(t.canMatch);
}
function Ci(t) {
  return t instanceof Wr || t?.name === 'EmptyError';
}
var gt = Symbol('INITIAL_VALUE');
function ye() {
  return I((t) =>
    rt(t.map((r) => r.pipe(_(1), Qr(gt)))).pipe(
      m((r) => {
        for (let e of r)
          if (e !== !0) {
            if (e === gt) return gt;
            if (e === !1 || us(e)) return e;
          }
        return !0;
      }),
      x((r) => r !== gt),
      _(1),
    ),
  );
}
function us(t) {
  return ke(t) || t instanceof He;
}
function ls(t, r) {
  return O((e) => {
    let {
      targetSnapshot: n,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = e;
    return s.length === 0 && o.length === 0
      ? p(A(d({}, e), { guardsResult: !0 }))
      : ds(s, n, i, t).pipe(
          O((c) => (c && ns(c) ? hs(n, o, t, r) : p(c))),
          m((c) => A(d({}, e), { guardsResult: c })),
        );
  });
}
function ds(t, r, e, n) {
  return D(t).pipe(
    O((i) => ms(i.component, i.route, e, r, n)),
    Y((i) => i !== !0, !0),
  );
}
function hs(t, r, e, n) {
  return D(r).pipe(
    ae((i) =>
      nt(
        fs(i.route.parent, n),
        ps(i.route, n),
        vs(t, i.path, e),
        gs(t, i.route, e),
      ),
    ),
    Y((i) => i !== !0, !0),
  );
}
function ps(t, r) {
  return t !== null && r && r(new br(t)), p(!0);
}
function fs(t, r) {
  return t !== null && r && r(new Rr(t)), p(!0);
}
function gs(t, r, e) {
  let n = r.routeConfig ? r.routeConfig.canActivate : null;
  if (!n || n.length === 0) return p(!0);
  let i = n.map((o) =>
    ie(() => {
      let s = Ze(r) ?? e,
        c = Se(o, s),
        a = os(c) ? c.canActivate(r, t) : z(s, () => c(r, t));
      return Q(a).pipe(Y());
    }),
  );
  return p(i).pipe(ye());
}
function vs(t, r, e) {
  let n = r[r.length - 1],
    o = r
      .slice(0, r.length - 1)
      .reverse()
      .map((s) => es(s))
      .filter((s) => s !== null)
      .map((s) =>
        ie(() => {
          let c = s.guards.map((a) => {
            let u = Ze(s.node) ?? e,
              l = Se(a, u),
              h = ss(l) ? l.canActivateChild(n, t) : z(u, () => l(n, t));
            return Q(h).pipe(Y());
          });
          return p(c).pipe(ye());
        }),
      );
  return p(o).pipe(ye());
}
function ms(t, r, e, n, i) {
  let o = r && r.routeConfig ? r.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return p(!0);
  let s = o.map((c) => {
    let a = Ze(r) ?? i,
      u = Se(c, a),
      l = as(u) ? u.canDeactivate(t, r, e, n) : z(a, () => u(t, r, e, n));
    return Q(l).pipe(Y());
  });
  return p(s).pipe(ye());
}
function ys(t, r, e, n) {
  let i = r.canLoad;
  if (i === void 0 || i.length === 0) return p(!0);
  let o = i.map((s) => {
    let c = Se(s, t),
      a = is(c) ? c.canLoad(r, e) : z(t, () => c(r, e));
    return Q(a);
  });
  return p(o).pipe(ye(), bi(n));
}
function bi(t) {
  return Vr(
    C((r) => {
      if (typeof r != 'boolean') throw At(t, r);
    }),
    m((r) => r === !0),
  );
}
function Ss(t, r, e, n) {
  let i = r.canMatch;
  if (!i || i.length === 0) return p(!0);
  let o = i.map((s) => {
    let c = Se(s, t),
      a = cs(c) ? c.canMatch(r, e) : z(t, () => c(r, e));
    return Q(a);
  });
  return p(o).pipe(ye(), bi(n));
}
var Be = class {
    segmentGroup;
    constructor(r) {
      this.segmentGroup = r || null;
    }
  },
  Ve = class extends Error {
    urlTree;
    constructor(r) {
      super(), (this.urlTree = r);
    }
  };
function ue(t) {
  return X(new Be(t));
}
function ws(t) {
  return X(new R(4e3, !1));
}
function Rs(t) {
  return X(wi(!1, P.GuardRejected));
}
var _r = class {
    urlSerializer;
    urlTree;
    constructor(r, e) {
      (this.urlSerializer = r), (this.urlTree = e);
    }
    lineralizeSegments(r, e) {
      let n = [],
        i = e.root;
      for (;;) {
        if (((n = n.concat(i.segments)), i.numberOfChildren === 0)) return p(n);
        if (i.numberOfChildren > 1 || !i.children[g])
          return ws(`${r.redirectTo}`);
        i = i.children[g];
      }
    }
    applyRedirectCommands(r, e, n, i, o) {
      if (typeof e != 'string') {
        let c = e,
          {
            queryParams: a,
            fragment: u,
            routeConfig: l,
            url: h,
            outlet: v,
            params: M,
            data: T,
            title: Z,
          } = i,
          k = z(o, () =>
            c({
              params: M,
              data: T,
              queryParams: a,
              fragment: u,
              routeConfig: l,
              url: h,
              outlet: v,
              title: Z,
            }),
          );
        if (k instanceof W) throw new Ve(k);
        e = k;
      }
      let s = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        r,
        n,
      );
      if (e[0] === '/') throw new Ve(s);
      return s;
    }
    applyRedirectCreateUrlTree(r, e, n, i) {
      let o = this.createSegmentGroup(r, e.root, n, i);
      return new W(
        o,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment,
      );
    }
    createQueryParams(r, e) {
      let n = {};
      return (
        Object.entries(r).forEach(([i, o]) => {
          if (typeof o == 'string' && o[0] === ':') {
            let c = o.substring(1);
            n[i] = e[c];
          } else n[i] = o;
        }),
        n
      );
    }
    createSegmentGroup(r, e, n, i) {
      let o = this.createSegments(r, e.segments, n, i),
        s = {};
      return (
        Object.entries(e.children).forEach(([c, a]) => {
          s[c] = this.createSegmentGroup(r, a, n, i);
        }),
        new S(o, s)
      );
    }
    createSegments(r, e, n, i) {
      return e.map((o) =>
        o.path[0] === ':'
          ? this.findPosParam(r, o, i)
          : this.findOrReturn(o, n),
      );
    }
    findPosParam(r, e, n) {
      let i = n[e.path.substring(1)];
      if (!i) throw new R(4001, !1);
      return i;
    }
    findOrReturn(r, e) {
      let n = 0;
      for (let i of e) {
        if (i.path === r.path) return e.splice(n), i;
        n++;
      }
      return r;
    }
  },
  Ur = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Cs(t, r, e, n, i) {
  let o = Ei(t, r, e);
  return o.matched
    ? ((n = Vo(r, n)),
      Ss(n, r, e, i).pipe(m((s) => (s === !0 ? o : d({}, Ur)))))
    : p(o);
}
function Ei(t, r, e) {
  if (r.path === '**') return bs(e);
  if (r.path === '')
    return r.pathMatch === 'full' && (t.hasChildren() || e.length > 0)
      ? d({}, Ur)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (r.matcher || yo)(e, t, r);
  if (!i) return d({}, Ur);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([c, a]) => {
    o[c] = a.path;
  });
  let s =
    i.consumed.length > 0
      ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: e.slice(i.consumed.length),
    parameters: s,
    positionalParamSegments: i.posParams ?? {},
  };
}
function bs(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? ni(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Xn(t, r, e, n) {
  return e.length > 0 && Is(t, e, n)
    ? {
        segmentGroup: new S(r, Ms(n, new S(e, t.children))),
        slicedSegments: [],
      }
    : e.length === 0 && Ts(t, e, n)
      ? {
          segmentGroup: new S(t.segments, Es(t, e, n, t.children)),
          slicedSegments: e,
        }
      : { segmentGroup: new S(t.segments, t.children), slicedSegments: e };
}
function Es(t, r, e, n) {
  let i = {};
  for (let o of e)
    if (Ut(t, r, o) && !n[$(o)]) {
      let s = new S([], {});
      i[$(o)] = s;
    }
  return d(d({}, n), i);
}
function Ms(t, r) {
  let e = {};
  e[g] = r;
  for (let n of t)
    if (n.path === '' && $(n) !== g) {
      let i = new S([], {});
      e[$(n)] = i;
    }
  return e;
}
function Is(t, r, e) {
  return e.some((n) => Ut(t, r, n) && $(n) !== g);
}
function Ts(t, r, e) {
  return e.some((n) => Ut(t, r, n));
}
function Ut(t, r, e) {
  return (t.hasChildren() || r.length > 0) && e.pathMatch === 'full'
    ? !1
    : e.path === '';
}
function As(t, r, e) {
  return r.length === 0 && !t.children[e];
}
var Pr = class {};
function Ds(t, r, e, n, i, o, s = 'emptyOnly') {
  return new Nr(t, r, e, n, i, s, o).recognize();
}
var Os = 31,
  Nr = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(r, e, n, i, o, s, c) {
      (this.injector = r),
        (this.configLoader = e),
        (this.rootComponentType = n),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = c),
        (this.applyRedirects = new _r(this.urlSerializer, this.urlTree));
    }
    noMatchError(r) {
      return new R(4002, `'${r.segmentGroup}'`);
    }
    recognize() {
      let r = Xn(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(r).pipe(
        m(({ children: e, rootSnapshot: n }) => {
          let i = new U(n, e),
            o = new Tt('', i),
            s = ko(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        }),
      );
    }
    match(r) {
      let e = new he(
        [],
        Object.freeze({}),
        Object.freeze(d({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        g,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, r, g, e).pipe(
        m((n) => ({ children: n, rootSnapshot: e })),
        se((n) => {
          if (n instanceof Ve)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof Be ? this.noMatchError(n) : n;
        }),
      );
    }
    processSegmentGroup(r, e, n, i, o) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(r, e, n, o)
        : this.processSegment(r, e, n, n.segments, i, !0, o).pipe(
            m((s) => (s instanceof U ? [s] : [])),
          );
    }
    processChildren(r, e, n, i) {
      let o = [];
      for (let s of Object.keys(n.children))
        s === 'primary' ? o.unshift(s) : o.push(s);
      return D(o).pipe(
        ae((s) => {
          let c = n.children[s],
            a = qo(e, s);
          return this.processSegmentGroup(r, a, c, s, i);
        }),
        Kr((s, c) => (s.push(...c), s)),
        jt(null),
        Zr(),
        O((s) => {
          if (s === null) return ue(n);
          let c = Mi(s);
          return _s(c), p(c);
        }),
      );
    }
    processSegment(r, e, n, i, o, s, c) {
      return D(e).pipe(
        ae((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? r,
            e,
            a,
            n,
            i,
            o,
            s,
            c,
          ).pipe(
            se((u) => {
              if (u instanceof Be) return p(null);
              throw u;
            }),
          ),
        ),
        Y((a) => !!a),
        se((a) => {
          if (Ci(a)) return As(n, i, o) ? p(new Pr()) : ue(n);
          throw a;
        }),
      );
    }
    processSegmentAgainstRoute(r, e, n, i, o, s, c, a) {
      return $(n) !== s && (s === g || !Ut(i, o, n))
        ? ue(i)
        : n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(r, i, n, o, s, a)
          : this.allowRedirects && c
            ? this.expandSegmentAgainstRouteUsingRedirect(r, i, e, n, o, s, a)
            : ue(i);
    }
    expandSegmentAgainstRouteUsingRedirect(r, e, n, i, o, s, c) {
      let {
        matched: a,
        parameters: u,
        consumedSegments: l,
        positionalParamSegments: h,
        remainingSegments: v,
      } = Ei(e, i, o);
      if (!a) return ue(e);
      typeof i.redirectTo == 'string' &&
        i.redirectTo[0] === '/' &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > Os && (this.allowRedirects = !1));
      let M = new he(
          o,
          u,
          Object.freeze(d({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Jn(i),
          $(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          ei(i),
        ),
        T = It(M, c, this.paramsInheritanceStrategy);
      (M.params = Object.freeze(T.params)), (M.data = Object.freeze(T.data));
      let Z = this.applyRedirects.applyRedirectCommands(
        l,
        i.redirectTo,
        h,
        M,
        r,
      );
      return this.applyRedirects
        .lineralizeSegments(i, Z)
        .pipe(O((k) => this.processSegment(r, n, e, k.concat(v), s, !1, c)));
    }
    matchSegmentAgainstRoute(r, e, n, i, o, s) {
      let c = Cs(e, n, i, r, this.urlSerializer);
      return (
        n.path === '**' && (e.children = {}),
        c.pipe(
          I((a) =>
            a.matched
              ? ((r = n._injector ?? r),
                this.getChildConfig(r, n, i).pipe(
                  I(({ routes: u }) => {
                    let l = n._loadedInjector ?? r,
                      {
                        parameters: h,
                        consumedSegments: v,
                        remainingSegments: M,
                      } = a,
                      T = new he(
                        v,
                        h,
                        Object.freeze(d({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Jn(n),
                        $(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        ei(n),
                      ),
                      Z = It(T, s, this.paramsInheritanceStrategy);
                    (T.params = Object.freeze(Z.params)),
                      (T.data = Object.freeze(Z.data));
                    let { segmentGroup: k, slicedSegments: Re } = Xn(
                      e,
                      v,
                      M,
                      u,
                    );
                    if (Re.length === 0 && k.hasChildren())
                      return this.processChildren(l, u, k, T).pipe(
                        m((tt) => new U(T, tt)),
                      );
                    if (u.length === 0 && Re.length === 0)
                      return p(new U(T, []));
                    let Gi = $(n) === o;
                    return this.processSegment(
                      l,
                      u,
                      k,
                      Re,
                      Gi ? g : o,
                      !0,
                      T,
                    ).pipe(m((tt) => new U(T, tt instanceof U ? [tt] : [])));
                  }),
                ))
              : ue(e),
          ),
        )
      );
    }
    getChildConfig(r, e, n) {
      return e.children
        ? p({ routes: e.children, injector: r })
        : e.loadChildren
          ? e._loadedRoutes !== void 0
            ? p({ routes: e._loadedRoutes, injector: e._loadedInjector })
            : ys(r, e, n, this.urlSerializer).pipe(
                O((i) =>
                  i
                    ? this.configLoader.loadChildren(r, e).pipe(
                        C((o) => {
                          (e._loadedRoutes = o.routes),
                            (e._loadedInjector = o.injector);
                        }),
                      )
                    : Rs(e),
                ),
              )
          : p({ routes: [], injector: r });
    }
  };
function _s(t) {
  t.sort((r, e) =>
    r.value.outlet === g
      ? -1
      : e.value.outlet === g
        ? 1
        : r.value.outlet.localeCompare(e.value.outlet),
  );
}
function Us(t) {
  let r = t.value.routeConfig;
  return r && r.path === '';
}
function Mi(t) {
  let r = [],
    e = new Set();
  for (let n of t) {
    if (!Us(n)) {
      r.push(n);
      continue;
    }
    let i = r.find((o) => n.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...n.children), e.add(i)) : r.push(n);
  }
  for (let n of e) {
    let i = Mi(n.children);
    r.push(new U(n.value, i));
  }
  return r.filter((n) => !e.has(n));
}
function Jn(t) {
  return t.data || {};
}
function ei(t) {
  return t.resolve || {};
}
function Ps(t, r, e, n, i, o) {
  return O((s) =>
    Ds(t, r, e, n, s.extractedUrl, i, o).pipe(
      m(({ state: c, tree: a }) =>
        A(d({}, s), { targetSnapshot: c, urlAfterRedirects: a }),
      ),
    ),
  );
}
function Ns(t, r) {
  return O((e) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: i },
    } = e;
    if (!i.length) return p(e);
    let o = new Set(i.map((a) => a.route)),
      s = new Set();
    for (let a of o) if (!s.has(a)) for (let u of Ii(a)) s.add(u);
    let c = 0;
    return D(s).pipe(
      ae((a) =>
        o.has(a)
          ? xs(a, n, t, r)
          : ((a.data = It(a, a.parent, t).resolve), p(void 0)),
      ),
      C(() => c++),
      $t(1),
      O((a) => (c === s.size ? p(e) : B)),
    );
  });
}
function Ii(t) {
  let r = t.children.map((e) => Ii(e)).flat();
  return [t, ...r];
}
function xs(t, r, e, n) {
  let i = t.routeConfig,
    o = t._resolve;
  return (
    i?.title !== void 0 && !yi(i) && (o[We] = i.title),
    Ls(o, t, r, n).pipe(
      m(
        (s) => (
          (t._resolvedData = s), (t.data = It(t, t.parent, e).resolve), null
        ),
      ),
    )
  );
}
function Ls(t, r, e, n) {
  let i = dr(t);
  if (i.length === 0) return p({});
  let o = {};
  return D(i).pipe(
    O((s) =>
      ks(t[s], r, e, n).pipe(
        Y(),
        C((c) => {
          if (c instanceof He) throw At(new ge(), c);
          o[s] = c;
        }),
      ),
    ),
    $t(1),
    m(() => o),
    se((s) => (Ci(s) ? B : X(s))),
  );
}
function ks(t, r, e, n) {
  let i = Ze(r) ?? n,
    o = Se(t, i),
    s = o.resolve ? o.resolve(r, e) : z(i, () => o(r, e));
  return Q(s);
}
function ur(t) {
  return I((r) => {
    let e = t(r);
    return e ? D(e).pipe(m(() => r)) : p(r);
  });
}
var Ti = (() => {
    class t {
      buildTitle(e) {
        let n,
          i = e.root;
        for (; i !== void 0; )
          (n = this.getResolvedTitleForRoute(i) ?? n),
            (i = i.children.find((o) => o.outlet === g));
        return n;
      }
      getResolvedTitleForRoute(e) {
        return e.data[We];
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: () => f(js), providedIn: 'root' });
    }
    return t;
  })(),
  js = (() => {
    class t extends Ti {
      title;
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let n = this.buildTitle(e);
        n !== void 0 && this.title.setTitle(n);
      }
      static ɵfac = function (n) {
        return new (n || t)(y(Wn));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Qe = new b('', { providedIn: 'root', factory: () => ({}) }),
  $s = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵcmp = at({
        type: t,
        selectors: [['ng-component']],
        exportAs: ['emptyRouterOutlet'],
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && ut(0, 'router-outlet');
        },
        dependencies: [kr],
        encapsulation: 2,
      });
    }
    return t;
  })();
function jr(t) {
  let r = t.children && t.children.map(jr),
    e = r ? A(d({}, t), { children: r }) : d({}, t);
  return (
    !e.component &&
      !e.loadComponent &&
      (r || e.loadChildren) &&
      e.outlet &&
      e.outlet !== g &&
      (e.component = $s),
    e
  );
}
var qe = new b(''),
  $r = (() => {
    class t {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = f(lt);
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return p(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let n = Q(e.loadComponent()).pipe(
            m(Ai),
            C((o) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = o);
            }),
            it(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          i = new Nt(n, () => new H()).pipe(Pt());
        return this.componentLoaders.set(e, i), i;
      }
      loadChildren(e, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return p({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let o = zs(n, this.compiler, e, this.onLoadEndListener).pipe(
            it(() => {
              this.childrenLoaders.delete(n);
            }),
          ),
          s = new Nt(o, () => new H()).pipe(Pt());
        return this.childrenLoaders.set(n, s), s;
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function zs(t, r, e, n) {
  return Q(t.loadChildren()).pipe(
    m(Ai),
    O((i) =>
      i instanceof fn || Array.isArray(i) ? p(i) : D(r.compileModuleAsync(i)),
    ),
    m((i) => {
      n && n(t);
      let o,
        s,
        c = !1;
      return (
        Array.isArray(i)
          ? ((s = i), (c = !0))
          : ((o = i.create(e).injector),
            (s = o.get(qe, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(jr), injector: o }
      );
    }),
  );
}
function Fs(t) {
  return t && typeof t == 'object' && 'default' in t;
}
function Ai(t) {
  return Fs(t) ? t.default : t;
}
var zr = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: () => f(Hs), providedIn: 'root' });
    }
    return t;
  })(),
  Hs = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, n) {
        return e;
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Di = new b(''),
  Oi = new b('');
function Bs(t, r, e) {
  let n = t.get(Oi),
    i = t.get(j);
  return t.get(V).runOutsideAngular(() => {
    if (!i.startViewTransition || n.skipNextTransition)
      return (n.skipNextTransition = !1), new Promise((u) => setTimeout(u));
    let o,
      s = new Promise((u) => {
        o = u;
      }),
      c = i.startViewTransition(() => (o(), Vs(t))),
      { onViewTransitionCreated: a } = n;
    return a && z(t, () => a({ transition: c, from: r, to: e })), s;
  });
}
function Vs(t) {
  return new Promise((r) => {
    ln({ read: () => setTimeout(r) }, { injector: t });
  });
}
var _i = new b(''),
  Fr = (() => {
    class t {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new H();
      transitionAbortSubject = new H();
      configLoader = f($r);
      environmentInjector = f(be);
      destroyRef = f(nn);
      urlSerializer = f(Ge);
      rootContexts = f(Ye);
      location = f(Ae);
      inputBindingEnabled = f(_t, { optional: !0 }) !== null;
      titleStrategy = f(Ti);
      options = f(Qe, { optional: !0 }) || {};
      paramsInheritanceStrategy =
        this.options.paramsInheritanceStrategy || 'emptyOnly';
      urlHandlingStrategy = f(zr);
      createViewTransition = f(Di, { optional: !0 });
      navigationErrorHandler = f(_i, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => p(void 0);
      rootComponentType = null;
      destroyed = !1;
      constructor() {
        let e = (i) => this.events.next(new Sr(i)),
          n = (i) => this.events.next(new wr(i));
        (this.configLoader.onLoadEndListener = n),
          (this.configLoader.onLoadStartListener = e),
          this.destroyRef.onDestroy(() => {
            this.destroyed = !0;
          });
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let n = ++this.navigationId;
        this.transitions?.next(
          A(d(d({}, this.transitions.value), e), { id: n }),
        );
      }
      setupNavigations(e, n, i) {
        return (
          (this.transitions = new N({
            id: 0,
            currentUrlTree: n,
            currentRawUrl: n,
            extractedUrl: this.urlHandlingStrategy.extract(n),
            urlAfterRedirects: this.urlHandlingStrategy.extract(n),
            rawUrl: n,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: xe,
            restoredState: null,
            currentSnapshot: i.snapshot,
            targetSnapshot: null,
            currentRouterState: i,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            x((o) => o.id !== 0),
            m((o) =>
              A(d({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              }),
            ),
            I((o) => {
              let s = !1,
                c = !1;
              return p(o).pipe(
                I((a) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        '',
                        P.SupersededByNewNavigation,
                      ),
                      B
                    );
                  (this.currentTransition = o),
                    (this.currentNavigation = {
                      id: a.id,
                      initialUrl: a.rawUrl,
                      extractedUrl: a.extractedUrl,
                      targetBrowserUrl:
                        typeof a.extras.browserUrl == 'string'
                          ? this.urlSerializer.parse(a.extras.browserUrl)
                          : a.extras.browserUrl,
                      trigger: a.source,
                      extras: a.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? A(d({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let u =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    l = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!u && l !== 'reload') {
                    let h = '';
                    return (
                      this.events.next(
                        new K(
                          a.id,
                          this.urlSerializer.serialize(a.rawUrl),
                          h,
                          Rt.IgnoredSameUrlNavigation,
                        ),
                      ),
                      a.resolve(!1),
                      B
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                    return p(a).pipe(
                      I((h) => {
                        let v = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new ve(
                              h.id,
                              this.urlSerializer.serialize(h.extractedUrl),
                              h.source,
                              h.restoredState,
                            ),
                          ),
                          v !== this.transitions?.getValue()
                            ? B
                            : Promise.resolve(h)
                        );
                      }),
                      Ps(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      C((h) => {
                        (o.targetSnapshot = h.targetSnapshot),
                          (o.urlAfterRedirects = h.urlAfterRedirects),
                          (this.currentNavigation = A(
                            d({}, this.currentNavigation),
                            { finalUrl: h.urlAfterRedirects },
                          ));
                        let v = new Ct(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(v);
                      }),
                    );
                  if (
                    u &&
                    this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)
                  ) {
                    let {
                        id: h,
                        extractedUrl: v,
                        source: M,
                        restoredState: T,
                        extras: Z,
                      } = a,
                      k = new ve(h, this.urlSerializer.serialize(v), M, T);
                    this.events.next(k);
                    let Re = vi(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        A(d({}, a), {
                          targetSnapshot: Re,
                          urlAfterRedirects: v,
                          extras: A(d({}, Z), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = v),
                      p(o)
                    );
                  } else {
                    let h = '';
                    return (
                      this.events.next(
                        new K(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          h,
                          Rt.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      a.resolve(!1),
                      B
                    );
                  }
                }),
                C((a) => {
                  let u = new gr(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                  );
                  this.events.next(u);
                }),
                m(
                  (a) => (
                    (this.currentTransition = o =
                      A(d({}, a), {
                        guards: Jo(
                          a.targetSnapshot,
                          a.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    o
                  ),
                ),
                ls(this.environmentInjector, (a) => this.events.next(a)),
                C((a) => {
                  if (
                    ((o.guardsResult = a.guardsResult),
                    a.guardsResult && typeof a.guardsResult != 'boolean')
                  )
                    throw At(this.urlSerializer, a.guardsResult);
                  let u = new vr(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                    !!a.guardsResult,
                  );
                  this.events.next(u);
                }),
                x((a) =>
                  a.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(a, '', P.GuardRejected),
                      !1),
                ),
                ur((a) => {
                  if (a.guards.canActivateChecks.length)
                    return p(a).pipe(
                      C((u) => {
                        let l = new mr(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot,
                        );
                        this.events.next(l);
                      }),
                      I((u) => {
                        let l = !1;
                        return p(u).pipe(
                          Ns(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          C({
                            next: () => (l = !0),
                            complete: () => {
                              l ||
                                this.cancelNavigationTransition(
                                  u,
                                  '',
                                  P.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      C((u) => {
                        let l = new yr(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot,
                        );
                        this.events.next(l);
                      }),
                    );
                }),
                ur((a) => {
                  let u = (l) => {
                    let h = [];
                    l.routeConfig?.loadComponent &&
                      !l.routeConfig._loadedComponent &&
                      h.push(
                        this.configLoader.loadComponent(l.routeConfig).pipe(
                          C((v) => {
                            l.component = v;
                          }),
                          m(() => {}),
                        ),
                      );
                    for (let v of l.children) h.push(...u(v));
                    return h;
                  };
                  return rt(u(a.targetSnapshot.root)).pipe(jt(null), _(1));
                }),
                ur(() => this.afterPreactivation()),
                I(() => {
                  let { currentSnapshot: a, targetSnapshot: u } = o,
                    l = this.createViewTransition?.(
                      this.environmentInjector,
                      a.root,
                      u.root,
                    );
                  return l ? D(l).pipe(m(() => o)) : p(o);
                }),
                m((a) => {
                  let u = Zo(
                    e.routeReuseStrategy,
                    a.targetSnapshot,
                    a.currentRouterState,
                  );
                  return (
                    (this.currentTransition = o =
                      A(d({}, a), { targetRouterState: u })),
                    (this.currentNavigation.targetRouterState = u),
                    o
                  );
                }),
                C(() => {
                  this.events.next(new ze());
                }),
                Xo(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (a) => this.events.next(a),
                  this.inputBindingEnabled,
                ),
                _(1),
                C({
                  next: (a) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new G(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          this.urlSerializer.serialize(a.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        a.targetRouterState.snapshot,
                      ),
                      a.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                Xr(
                  this.transitionAbortSubject.pipe(
                    C((a) => {
                      throw a;
                    }),
                  ),
                ),
                it(() => {
                  !s &&
                    !c &&
                    this.cancelNavigationTransition(
                      o,
                      '',
                      P.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                se((a) => {
                  if (this.destroyed) return o.resolve(!1), B;
                  if (((c = !0), Ri(a)))
                    this.events.next(
                      new q(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        a.message,
                        a.cancellationCode,
                      ),
                    ),
                      Qo(a)
                        ? this.events.next(
                            new me(a.url, a.navigationBehaviorOptions),
                          )
                        : o.resolve(!1);
                  else {
                    let u = new $e(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      a,
                      o.targetSnapshot ?? void 0,
                    );
                    try {
                      let l = z(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(u),
                      );
                      if (l instanceof He) {
                        let { message: h, cancellationCode: v } = At(
                          this.urlSerializer,
                          l,
                        );
                        this.events.next(
                          new q(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            h,
                            v,
                          ),
                        ),
                          this.events.next(
                            new me(l.redirectTo, l.navigationBehaviorOptions),
                          );
                      } else throw (this.events.next(u), a);
                    } catch (l) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(l);
                    }
                  }
                  return B;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, n, i) {
        let o = new q(e.id, this.urlSerializer.serialize(e.extractedUrl), n, i);
        this.events.next(o), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          n =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== n?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function qs(t) {
  return t !== xe;
}
var Ws = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: () => f(Gs), providedIn: 'root' });
    }
    return t;
  })(),
  xr = class {
    shouldDetach(r) {
      return !1;
    }
    store(r, e) {}
    shouldAttach(r) {
      return !1;
    }
    retrieve(r) {
      return null;
    }
    shouldReuseRoute(r, e) {
      return r.routeConfig === e.routeConfig;
    }
  },
  Gs = (() => {
    class t extends xr {
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = Ft(t)))(i || t);
        };
      })();
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Ui = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: () => f(Zs), providedIn: 'root' });
    }
    return t;
  })(),
  Zs = (() => {
    class t extends Ui {
      location = f(Ae);
      urlSerializer = f(Ge);
      options = f(Qe, { optional: !0 }) || {};
      canceledNavigationResolution =
        this.options.canceledNavigationResolution || 'replace';
      urlHandlingStrategy = f(zr);
      urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      currentUrlTree = new W();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== 'computed'
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      routerState = vi(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((n) => {
          n.type === 'popstate' && e(n.url, n.state);
        });
      }
      handleRouterEvent(e, n) {
        if (e instanceof ve) this.stateMemento = this.createStateMemento();
        else if (e instanceof K) this.rawUrlTree = n.initialUrl;
        else if (e instanceof Ct) {
          if (
            this.urlUpdateStrategy === 'eager' &&
            !n.extras.skipLocationChange
          ) {
            let i = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(n.targetBrowserUrl ?? i, n);
          }
        } else
          e instanceof ze
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl,
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === 'deferred' &&
                !n.extras.skipLocationChange &&
                this.setBrowserUrl(n.targetBrowserUrl ?? this.rawUrlTree, n))
            : e instanceof q &&
                (e.code === P.GuardRejected || e.code === P.NoDataFromResolver)
              ? this.restoreHistory(n)
              : e instanceof $e
                ? this.restoreHistory(n, !0)
                : e instanceof G &&
                  ((this.lastSuccessfulId = e.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, n) {
        let i = e instanceof W ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(i) || n.extras.replaceUrl) {
          let o = this.browserPageId,
            s = d(d({}, n.extras.state), this.generateNgRouterState(n.id, o));
          this.location.replaceState(i, '', s);
        } else {
          let o = d(
            d({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1),
          );
          this.location.go(i, '', o);
        }
      }
      restoreHistory(e, n = !1) {
        if (this.canceledNavigationResolution === 'computed') {
          let i = this.browserPageId,
            o = this.currentPageId - i;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === e.finalUrl &&
              o === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === 'replace' &&
            (n && this.resetState(e), this.resetUrlToCurrentUrlTree());
      }
      resetState(e) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          '',
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(e, n) {
        return this.canceledNavigationResolution === 'computed'
          ? { navigationId: e, ɵrouterPageId: n }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = Ft(t)))(i || t);
        };
      })();
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Pi(t, r) {
  t.events
    .pipe(
      x(
        (e) =>
          e instanceof G || e instanceof q || e instanceof $e || e instanceof K,
      ),
      m((e) =>
        e instanceof G || e instanceof K
          ? 0
          : (
                e instanceof q
                  ? e.code === P.Redirect ||
                    e.code === P.SupersededByNewNavigation
                  : !1
              )
            ? 2
            : 1,
      ),
      x((e) => e !== 2),
      _(1),
    )
    .subscribe(() => {
      r();
    });
}
var Ys = {
    paths: 'exact',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'exact',
  },
  Ks = {
    paths: 'subset',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'subset',
  },
  ne = (() => {
    class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = f(Wt);
      stateManager = f(Ui);
      options = f(Qe, { optional: !0 }) || {};
      pendingTasks = f(on);
      urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      navigationTransitions = f(Fr);
      urlSerializer = f(Ge);
      location = f(Ae);
      urlHandlingStrategy = f(zr);
      _events = new H();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = f(Ws);
      onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore';
      config = f(qe, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!f(_t, { optional: !0 });
      constructor() {
        this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (e) => {
                this.console.warn(e);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      eventsSubscription = new Br();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((n) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (i !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, o),
                n instanceof q &&
                  n.code !== P.Redirect &&
                  n.code !== P.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof G) this.navigated = !0;
              else if (n instanceof me) {
                let s = n.navigationBehaviorOptions,
                  c = this.urlHandlingStrategy.merge(n.url, i.currentRawUrl),
                  a = d(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        i.extras.replaceUrl ||
                        this.urlUpdateStrategy === 'eager' ||
                        qs(i.source),
                    },
                    s,
                  );
                this.scheduleNavigation(c, xe, null, a, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            Xs(n) && this._events.next(n);
          } catch (i) {
            this.navigationTransitions.transitionAbortSubject.next(i);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              xe,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, 'popstate', n);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(e, n, i) {
        let o = { replaceUrl: !0 },
          s = i?.navigationId ? i : null;
        if (i) {
          let a = d({}, i);
          delete a.navigationId,
            delete a.ɵrouterPageId,
            Object.keys(a).length !== 0 && (o.state = a);
        }
        let c = this.parseUrl(e);
        this.scheduleNavigation(c, n, s, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(jr)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, n = {}) {
        let {
            relativeTo: i,
            queryParams: o,
            fragment: s,
            queryParamsHandling: c,
            preserveFragment: a,
          } = n,
          u = a ? this.currentUrlTree.fragment : s,
          l = null;
        switch (c ?? this.options.defaultQueryParamsHandling) {
          case 'merge':
            l = d(d({}, this.currentUrlTree.queryParams), o);
            break;
          case 'preserve':
            l = this.currentUrlTree.queryParams;
            break;
          default:
            l = o || null;
        }
        l !== null && (l = this.removeEmptyProps(l));
        let h;
        try {
          let v = i ? i.snapshot : this.routerState.snapshot.root;
          h = hi(v);
        } catch {
          (typeof e[0] != 'string' || e[0][0] !== '/') && (e = []),
            (h = this.currentUrlTree.root);
        }
        return pi(h, e, l, u ?? null);
      }
      navigateByUrl(e, n = { skipLocationChange: !1 }) {
        let i = ke(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(o, xe, null, n);
      }
      navigate(e, n = { skipLocationChange: !1 }) {
        return Qs(e), this.navigateByUrl(this.createUrlTree(e, n), n);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse('/');
        }
      }
      isActive(e, n) {
        let i;
        if (
          (n === !0 ? (i = d({}, Ys)) : n === !1 ? (i = d({}, Ks)) : (i = n),
          ke(e))
        )
          return Gn(this.currentUrlTree, e, i);
        let o = this.parseUrl(e);
        return Gn(this.currentUrlTree, o, i);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (n, [i, o]) => (o != null && (n[i] = o), n),
          {},
        );
      }
      scheduleNavigation(e, n, i, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let c, a, u;
        s
          ? ((c = s.resolve), (a = s.reject), (u = s.promise))
          : (u = new Promise((h, v) => {
              (c = h), (a = v);
            }));
        let l = this.pendingTasks.add();
        return (
          Pi(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(l));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: c,
            reject: a,
            promise: u,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          u.catch((h) => Promise.reject(h))
        );
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Qs(t) {
  for (let r = 0; r < t.length; r++) if (t[r] == null) throw new R(4008, !1);
}
function Xs(t) {
  return !(t instanceof ze) && !(t instanceof me);
}
var Ot = class {};
var Js = (() => {
    class t {
      router;
      injector;
      preloadingStrategy;
      loader;
      subscription;
      constructor(e, n, i, o, s) {
        (this.router = e),
          (this.injector = i),
          (this.preloadingStrategy = o),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            x((e) => e instanceof G),
            ae(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, n) {
        let i = [];
        for (let o of n) {
          o.providers &&
            !o._injector &&
            (o._injector = qt(o.providers, e, `Route: ${o.path}`));
          let s = o._injector ?? e,
            c = o._loadedInjector ?? s;
          ((o.loadChildren && !o._loadedRoutes && o.canLoad === void 0) ||
            (o.loadComponent && !o._loadedComponent)) &&
            i.push(this.preloadConfig(s, o)),
            (o.children || o._loadedRoutes) &&
              i.push(this.processRoutes(c, o.children ?? o._loadedRoutes));
        }
        return D(i).pipe(xt());
      }
      preloadConfig(e, n) {
        return this.preloadingStrategy.preload(n, () => {
          let i;
          n.loadChildren && n.canLoad === void 0
            ? (i = this.loader.loadChildren(e, n))
            : (i = p(null));
          let o = i.pipe(
            O((s) =>
              s === null
                ? p(void 0)
                : ((n._loadedRoutes = s.routes),
                  (n._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (n.loadComponent && !n._loadedComponent) {
            let s = this.loader.loadComponent(n);
            return D([o, s]).pipe(xt());
          } else return o;
        });
      }
      static ɵfac = function (n) {
        return new (n || t)(y(ne), y(lt), y(be), y(Ot), y($r));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Ni = new b(''),
  ea = (() => {
    class t {
      urlSerializer;
      transitions;
      viewportScroller;
      zone;
      options;
      routerEventsSubscription;
      scrollEventsSubscription;
      lastId = 0;
      lastSource = 'imperative';
      restoredId = 0;
      store = {};
      constructor(e, n, i, o, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = n),
          (this.viewportScroller = i),
          (this.zone = o),
          (this.options = s),
          (s.scrollPositionRestoration ||= 'disabled'),
          (s.anchorScrolling ||= 'disabled');
      }
      init() {
        this.options.scrollPositionRestoration !== 'disabled' &&
          this.viewportScroller.setHistoryScrollRestoration('manual'),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof ve
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof G
              ? ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.urlAfterRedirects).fragment,
                ))
              : e instanceof K &&
                e.code === Rt.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof bt &&
            (e.position
              ? this.options.scrollPositionRestoration === 'top'
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === 'enabled' &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === 'enabled'
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : this.options.scrollPositionRestoration !== 'disabled' &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, n) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new bt(
                  e,
                  this.lastSource === 'popstate'
                    ? this.store[this.restoredId]
                    : null,
                  n,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
      static ɵfac = function (n) {
        hn();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function xi(t, ...r) {
  return Ce([
    { provide: qe, multi: !0, useValue: t },
    [],
    { provide: re, useFactory: Li, deps: [ne] },
    { provide: Gt, multi: !0, useFactory: ki },
    r.map((e) => e.ɵproviders),
  ]);
}
function Li(t) {
  return t.routerState.root;
}
function Xe(t, r) {
  return { ɵkind: t, ɵproviders: r };
}
function ki() {
  let t = f(J);
  return (r) => {
    let e = t.get(ce);
    if (r !== e.components[0]) return;
    let n = t.get(ne),
      i = t.get(ji);
    t.get(Hr) === 1 && n.initialNavigation(),
      t.get($i, null, zt.Optional)?.setUpPreloading(),
      t.get(Ni, null, zt.Optional)?.init(),
      n.resetRootComponentType(e.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var ji = new b('', { factory: () => new H() }),
  Hr = new b('', { providedIn: 'root', factory: () => 1 });
function ta() {
  return Xe(2, [
    { provide: Hr, useValue: 0 },
    {
      provide: Te,
      multi: !0,
      deps: [J],
      useFactory: (r) => {
        let e = r.get(In, Promise.resolve());
        return () =>
          e.then(
            () =>
              new Promise((n) => {
                let i = r.get(ne),
                  o = r.get(ji);
                Pi(i, () => {
                  n(!0);
                }),
                  (r.get(Fr).afterPreactivation = () => (
                    n(!0), o.closed ? p(void 0) : o
                  )),
                  i.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function ra() {
  return Xe(3, [
    {
      provide: Te,
      multi: !0,
      useFactory: () => {
        let r = f(ne);
        return () => {
          r.setUpLocationChangeListener();
        };
      },
    },
    { provide: Hr, useValue: 2 },
  ]);
}
var $i = new b('');
function na(t) {
  return Xe(0, [
    { provide: $i, useExisting: Js },
    { provide: Ot, useExisting: t },
  ]);
}
function ia() {
  return Xe(8, [Qn, { provide: _t, useExisting: Qn }]);
}
function oa(t) {
  let r = [
    { provide: Di, useValue: Bs },
    {
      provide: Oi,
      useValue: d({ skipNextTransition: !!t?.skipInitialTransition }, t),
    },
  ];
  return Xe(9, r);
}
var sa = [
    Ae,
    { provide: Ge, useClass: ge },
    ne,
    Ye,
    { provide: re, useFactory: Li, deps: [ne] },
    $r,
    [],
  ],
  zi = (() => {
    class t {
      constructor() {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [
            sa,
            [],
            { provide: qe, multi: !0, useValue: e },
            [],
            n?.errorHandler ? { provide: _i, useValue: n.errorHandler } : [],
            { provide: Qe, useValue: n || {} },
            n?.useHash ? ca() : ua(),
            aa(),
            n?.preloadingStrategy ? na(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? la(n) : [],
            n?.bindToComponentInputs ? ia().ɵproviders : [],
            n?.enableViewTransitions ? oa().ɵproviders : [],
            da(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: qe, multi: !0, useValue: e }],
        };
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵmod = ct({ type: t });
      static ɵinj = ot({});
    }
    return t;
  })();
function aa() {
  return {
    provide: Ni,
    useFactory: () => {
      let t = f(_n),
        r = f(V),
        e = f(Qe),
        n = f(Fr),
        i = f(Ge);
      return (
        e.scrollOffset && t.setOffset(e.scrollOffset), new ea(i, n, t, r, e)
      );
    },
  };
}
function ca() {
  return { provide: Kt, useClass: An };
}
function ua() {
  return { provide: Kt, useClass: Tn };
}
function la(t) {
  return [
    t.initialNavigation === 'disabled' ? ra().ɵproviders : [],
    t.initialNavigation === 'enabledBlocking' ? ta().ɵproviders : [],
  ];
}
var ti = new b('');
function da() {
  return [
    { provide: ti, useFactory: ki },
    { provide: Gt, multi: !0, useExisting: ti },
  ];
}
var Fi = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('./chunk-MXK7QTW4.js'),
  },
];
var et = 'Service workers are disabled or not supported by this browser';
function pa(t) {
  return ie(() => X(new Error(t)));
}
var we = class {
    serviceWorker;
    worker;
    registration;
    events;
    constructor(r) {
      if (((this.serviceWorker = r), !r))
        this.worker = this.events = this.registration = pa(et);
      else {
        let n = Lt(r, 'controllerchange').pipe(m(() => r.controller)),
          i = ie(() => p(r.controller)),
          o = nt(i, n);
        (this.worker = o.pipe(x((l) => !!l))),
          (this.registration = this.worker.pipe(I(() => r.getRegistration())));
        let u = Lt(r, 'message')
          .pipe(m((l) => l.data))
          .pipe(x((l) => l && l.type))
          .pipe(Yr());
        u.connect(), (this.events = u);
      }
    }
    postMessage(r, e) {
      return this.worker
        .pipe(
          _(1),
          C((n) => {
            n.postMessage(d({ action: r }, e));
          }),
        )
        .toPromise()
        .then(() => {});
    }
    postMessageWithOperation(r, e, n) {
      let i = this.waitForOperationCompleted(n),
        o = this.postMessage(r, e);
      return Promise.all([o, i]).then(([, s]) => s);
    }
    generateNonce() {
      return Math.round(Math.random() * 1e7);
    }
    eventsOfType(r) {
      let e;
      return (
        typeof r == 'string'
          ? (e = (n) => n.type === r)
          : (e = (n) => r.includes(n.type)),
        this.events.pipe(x(e))
      );
    }
    nextEventOfType(r) {
      return this.eventsOfType(r).pipe(_(1));
    }
    waitForOperationCompleted(r) {
      return this.eventsOfType('OPERATION_COMPLETED')
        .pipe(
          x((e) => e.nonce === r),
          _(1),
          m((e) => {
            if (e.result !== void 0) return e.result;
            throw new Error(e.error);
          }),
        )
        .toPromise();
    }
    get isEnabled() {
      return !!this.serviceWorker;
    }
  },
  fa = (() => {
    class t {
      sw;
      messages;
      notificationClicks;
      subscription;
      get isEnabled() {
        return this.sw.isEnabled;
      }
      pushManager = null;
      subscriptionChanges = new H();
      constructor(e) {
        if (((this.sw = e), !e.isEnabled)) {
          (this.messages = oe),
            (this.notificationClicks = oe),
            (this.subscription = oe);
          return;
        }
        (this.messages = this.sw.eventsOfType('PUSH').pipe(m((i) => i.data))),
          (this.notificationClicks = this.sw
            .eventsOfType('NOTIFICATION_CLICK')
            .pipe(m((i) => i.data))),
          (this.pushManager = this.sw.registration.pipe(
            m((i) => i.pushManager),
          ));
        let n = this.pushManager.pipe(I((i) => i.getSubscription()));
        this.subscription = kt(n, this.subscriptionChanges);
      }
      requestSubscription(e) {
        if (!this.sw.isEnabled || this.pushManager === null)
          return Promise.reject(new Error(et));
        let n = { userVisibleOnly: !0 },
          i = this.decodeBase64(
            e.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+'),
          ),
          o = new Uint8Array(new ArrayBuffer(i.length));
        for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
        return (
          (n.applicationServerKey = o),
          this.pushManager
            .pipe(
              I((s) => s.subscribe(n)),
              _(1),
            )
            .toPromise()
            .then((s) => (this.subscriptionChanges.next(s), s))
        );
      }
      unsubscribe() {
        if (!this.sw.isEnabled) return Promise.reject(new Error(et));
        let e = (n) => {
          if (n === null)
            throw new Error('Not subscribed to push notifications.');
          return n.unsubscribe().then((i) => {
            if (!i) throw new Error('Unsubscribe failed!');
            this.subscriptionChanges.next(null);
          });
        };
        return this.subscription.pipe(_(1), I(e)).toPromise();
      }
      decodeBase64(e) {
        return atob(e);
      }
      static ɵfac = function (n) {
        return new (n || t)(y(we));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  ga = (() => {
    class t {
      sw;
      versionUpdates;
      unrecoverable;
      get isEnabled() {
        return this.sw.isEnabled;
      }
      constructor(e) {
        if (((this.sw = e), !e.isEnabled)) {
          (this.versionUpdates = oe), (this.unrecoverable = oe);
          return;
        }
        (this.versionUpdates = this.sw.eventsOfType([
          'VERSION_DETECTED',
          'VERSION_INSTALLATION_FAILED',
          'VERSION_READY',
          'NO_NEW_VERSION_DETECTED',
        ])),
          (this.unrecoverable = this.sw.eventsOfType('UNRECOVERABLE_STATE'));
      }
      checkForUpdate() {
        if (!this.sw.isEnabled) return Promise.reject(new Error(et));
        let e = this.sw.generateNonce();
        return this.sw.postMessageWithOperation(
          'CHECK_FOR_UPDATES',
          { nonce: e },
          e,
        );
      }
      activateUpdate() {
        if (!this.sw.isEnabled) return Promise.reject(new Error(et));
        let e = this.sw.generateNonce();
        return this.sw.postMessageWithOperation(
          'ACTIVATE_UPDATE',
          { nonce: e },
          e,
        );
      }
      static ɵfac = function (n) {
        return new (n || t)(y(we));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
var Hi = new b('');
function va(t, r, e) {
  return () => {
    if (!('serviceWorker' in navigator && e.enabled !== !1)) return;
    let n = t.get(V),
      i = t.get(ce);
    n.runOutsideAngular(() => {
      let s = navigator.serviceWorker,
        c = () => s.controller?.postMessage({ action: 'INITIALIZE' });
      s.addEventListener('controllerchange', c),
        i.onDestroy(() => {
          s.removeEventListener('controllerchange', c);
        });
    });
    let o;
    if (typeof e.registrationStrategy == 'function')
      o = e.registrationStrategy();
    else {
      let [s, ...c] = (
        e.registrationStrategy || 'registerWhenStable:30000'
      ).split(':');
      switch (s) {
        case 'registerImmediately':
          o = p(null);
          break;
        case 'registerWithDelay':
          o = Bi(+c[0] || 0);
          break;
        case 'registerWhenStable':
          let a = D(t.get(ce).whenStable());
          o = c[0] ? kt(a, Bi(+c[0])) : a;
          break;
        default:
          throw new Error(
            `Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`,
          );
      }
    }
    n.runOutsideAngular(() =>
      o
        .pipe(_(1))
        .subscribe(() =>
          navigator.serviceWorker
            .register(r, { scope: e.scope })
            .catch((s) =>
              console.error('Service worker registration failed with:', s),
            ),
        ),
    );
  };
}
function Bi(t) {
  return p(null).pipe(Gr(t));
}
function ma(t) {
  return new we(t.enabled !== !1 ? navigator.serviceWorker : void 0);
}
var Je = class {
  enabled;
  scope;
  registrationStrategy;
};
function Vi(t, r = {}) {
  return Ce([
    fa,
    ga,
    { provide: Hi, useValue: t },
    { provide: Je, useValue: r },
    { provide: we, useFactory: ma, deps: [Je] },
    { provide: Te, useFactory: va, deps: [J, Hi, Je], multi: !0 },
  ]);
}
var qi = {
  providers: [
    wn(),
    xi(Fi),
    Nn({ url: (t) => `/icons/${t}.svg` }),
    mn(() => Pn()),
    en(xn),
    Vi('ngsw-worker.js', {
      enabled: !Rn(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
var Wi = (() => {
  class t {
    static ɵfac = function (n) {
      return new (n || t)();
    };
    static ɵcmp = at({
      type: t,
      selectors: [['tu-root']],
      decls: 2,
      vars: 0,
      consts: [[1, 'container', 'mx-auto', 'h-full', 'relative']],
      template: function (n, i) {
        n & 1 && (yn(0, 'div', 0), ut(1, 'router-outlet'), Sn());
      },
      dependencies: [zi, kr],
      encapsulation: 2,
    });
  }
  return t;
})();
qn(Wi, qi).catch((t) => console.error(t));
