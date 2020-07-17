import {
  INITIAL_STATE
} from './store.js'
let indexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Add': {
      return Object.assign({}, state, {
        num: state.num + action.payload
      })
    }
    case 'Minus':{
        return Object.assign({}, state, {
          num: state.num - action.payload
        })
    }
    default:
      return state
  }
}

export default indexReducer