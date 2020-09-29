import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
  // count: 0,
  // userInfo: {},
  // csrfToken: '',
  // active_menu_key: '',
};

export const actionTypes = {
  // INCREMENT: 'INCREMENT',
  // DECREMENT: 'DECREMENT',
  // RESET: 'RESET',
  // MENU_SET_ACTIVE: 'MENU_SET_ACTIVE',
};

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case actionTypes.INCREMENT:
    //   return Object.assign({}, state, {
    //     count: state.count + 1
    //   })
    // case actionTypes.DECREMENT:
    //   return Object.assign({}, state, {
    //     count: state.count - 1
    //   })
    // case actionTypes.RESET:
    //   return Object.assign({}, state, {
    //     count: exampleInitialState.count
    //   })
    // case actionTypes.MENU_SET_ACTIVE:
    //   return Object.assign({}, state, {
    //     active_menu_key: action.payload,
    //   });
    default:
      return state;
  }
};

// ACTIONS

// export const setActiveMenu = payload => ({ type: actionTypes.MENU_SET_ACTIVE, payload });

export function initializeStore(initialState = defaultState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
}
