const noop = () => {},
  warn = void 0 === typeof console ? noop : console.warn,
  isObject = t => "object" == typeof t && null !== t,
  hasOwn = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  Provider = t => e => (hasOwn(e, "store") && warn("Global app object:store already exists will be covered"), Object.assign({}, e, {
    store: t
  }));

function shallowEqual(t, e) {
  if (t === e) return !0;
  if (!isObject(t) || !isObject(e)) return !1;
  const n = Object.keys(t),
    o = Object.keys(e);
  return n.length === o.length && !n.some(n => t[n] !== e[n])
}

function mergeState(t, e, n, o, s) {
  let c;
  if ("function" == typeof e) t = e(t), c = Object.keys(t);
  else {
    if (!(e instanceof Array)) return;
    c = e.filter(t => "string" == typeof t)
  }
  if (!o) {
    let e;
    return c.forEach(o => {
      shallowEqual(n[o], t[o]) || (s[`__watch_${o}`] ? s[`__watch_${o}`].call(s, t[o], n[o]) : (!e && (e = Object.create(null)), e[o] = t[o]))
    }), e
  }
  c.forEach(e => {
    hasOwn(n, e) && warn(`Merge state from store:${e} already exists will be covered`), n[e] = t[e]
  })
}

function mergeAction(t, e, n, o, s) {
  const c = o.isComponent ? n.methods || (n.methods = {}) : n;
  for (let t in s) c[`__watch_${t}`] = s[t];
  let r;
  if ("function" == typeof e) r = e(t);
  else {
    if (!isObject(e)) return;
    r = Object.create(null);
    for (let n in e) r[n] = ((...o) => t(e[n](...o)))
  }
  Object.keys(r).forEach(t => {
    hasOwn(c, t) && warn(`Merge action to methods:${t} already exists will be covered`), c[t] = r[t]
  })
}

function connect(t, e, n = {}) {
  const o = Boolean(t),
    s = Boolean(e),
    c = getApp().store;
  return function (r) {
    function i() {
      if (!this.unsubscribe) return;
      const e = mergeState(c.getState(), t, this.data, null, this);
      e && this.setData(e)
    }
    const a = {
        ONLOAD: n.isComponent ? "attached" : "onLoad",
        ONUNLOAD: n.isComponent ? "detached" : "onUnload"
      },
      {
        data: l = {},
        [a.ONLOAD]: u,
        [a.ONUNLOAD]: f,
        watch: h
      } = r;
    o && mergeState(c.getState(), t, l, !0), (s || h) && mergeAction(c.dispatch, e, r, n, h);
    const b = {
      [a.ONLOAD](t) {
        o && (this.unsubscribe = c.subscribe(i.bind(this)), i.call(this)), "function" == typeof u && u.call(this, t)
      },
      [a.ONUNLOAD]() {
        this.unsubscribe && this.unsubscribe(), "function" == typeof f && f.call(this)
      }
    };
    return Object.assign({}, r, {
      data: l,
      ...b
    })
  }
}

function connectComponent(t, e) {
  return connect(t, e, {
    isComponent: !0
  })
}
export {
  Provider,
  connect,
  connectComponent
};