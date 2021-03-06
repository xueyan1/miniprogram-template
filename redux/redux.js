function symbolObservablePonyfill(e) {
  var t, o = e.Symbol;
  return "function" == typeof o ? o.observable ? t = o.observable : (t = o("observable"), o.observable = t) : t = "@@observable", t
}
var root, result = symbolObservablePonyfill(root = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
const randomString = () => Math.random().toString(36).substring(7).split("").join("."),
  ActionTypes = {
    INIT: `@@redux/INIT${randomString()}`,
    REPLACE: `@@redux/REPLACE${randomString()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
  };

function isPlainObject(e) {
  if ("object" != typeof e || null === e) return !1;
  let t = e;
  for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t
}

function createStore(e, t, o) {
  if ("function" == typeof t && "function" == typeof o || "function" == typeof o && "function" == typeof arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");
  if ("function" == typeof t && void 0 === o && (o = t, t = void 0), void 0 !== o) {
    if ("function" != typeof o) throw Error("Expected the enhancer to be a function.");
    return o(createStore)(e, t)
  }
  if ("function" != typeof e) throw Error("Expected the reducer to be a function.");
  let r = e,
    n = t,
    i = [],
    s = i,
    c = !1;

  function u() {
    s === i && (s = i.slice())
  }

  function a() {
    if (c) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return n
  }

  function d(e) {
    if ("function" != typeof e) throw Error("Expected the listener to be a function.");
    if (c) throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
    let t = !0;
    return u(), s.push(e),
      function () {
        if (!t) return;
        if (c) throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        t = !1, u();
        const o = s.indexOf(e);
        s.splice(o, 1)
      }
  }

  function f(e) {
    if (!isPlainObject(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
    if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    if (c) throw Error("Reducers may not dispatch actions.");
    try {
      c = !0, n = r(n, e)
    } finally {
      c = !1
    }
    const t = i = s;
    for (let e = 0; t.length > e; e++) {
      (0, t[e])()
    }
    return e
  }
  return f({
    type: ActionTypes.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: a,
    replaceReducer: function (e) {
      if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
      r = e, f({
        type: ActionTypes.REPLACE
      })
    },
    [result]: function () {
      const e = d;
      return {
        subscribe(t) {
          if ("object" != typeof t || null === t) throw new TypeError("Expected the observer to be an object.");

          function o() {
            t.next && t.next(a())
          }
          return o(), {
            unsubscribe: e(o)
          }
        },
        [result]() {
          return this
        }
      }
    }
  }
}

function getUndefinedStateErrorMessage(e, t) {
  const o = t && t.type;
  return `Given ${o&&`action "${o+""}"`||"an action"}, reducer "${e}" returned undefined. ` + "To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined."
}

function assertReducerShape(e) {
  Object.keys(e).forEach(t => {
    const o = e[t];
    if (void 0 === o(void 0, {
        type: ActionTypes.INIT
      })) throw Error(`Reducer "${t}" returned undefined during initialization. ` + "If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
    if (void 0 === o(void 0, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION()
      })) throw Error(`Reducer "${t}" returned undefined when probed with a random type. ` + `Don't try to handle ${ActionTypes.INIT} or other actions in "redux/*" ` + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")
  })
}

function combineReducers(e) {
  const t = Object.keys(e),
    o = {};
  for (let r = 0; t.length > r; r++) {
    const n = t[r];
    "function" == typeof e[n] && (o[n] = e[n])
  }
  const r = Object.keys(o);
  let n;
  try {
    assertReducerShape(o)
  } catch (e) {
    n = e
  }
  return function (e = {}, t) {
    if (n) throw n;
    let i = !1;
    const s = {};
    for (let n = 0; r.length > n; n++) {
      const c = r[n],
        u = e[c],
        a = (0, o[c])(u, t);
      if (void 0 === a) {
        const e = getUndefinedStateErrorMessage(c, t);
        throw Error(e)
      }
      s[c] = a, i = i || a !== u
    }
    return i ? s : e
  }
}

function bindActionCreator(e, t) {
  return function () {
    return t(e.apply(this, arguments))
  }
}

function bindActionCreators(e, t) {
  if ("function" == typeof e) return bindActionCreator(e, t);
  if ("object" != typeof e || null === e) throw Error(`bindActionCreators expected an object or a function, instead received ${null===e?"null":typeof e}. ` + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  const o = Object.keys(e),
    r = {};
  for (let n = 0; o.length > n; n++) {
    const i = o[n],
      s = e[i];
    "function" == typeof s && (r[i] = bindActionCreator(s, t))
  }
  return r
}

function compose(...e) {
  return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce((e, t) => (...o) => e(t(...o)))
}

function applyMiddleware(...e) {
  return t => (...o) => {
    const r = t(...o);
    let n = () => {
      throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
    };
    const i = {
        getState: r.getState,
        dispatch: (...e) => n(...e)
      },
      s = e.map(e => e(i));
    return n = compose(...s)(r.dispatch), {
      ...r,
      dispatch: n
    }
  }
}
export {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware,
  compose,
  ActionTypes as __DO_NOT_USE__ActionTypes
};