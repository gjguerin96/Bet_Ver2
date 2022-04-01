// import defined actions from actions.js
import {
  BET_MONEY,
  ADD_TO_BALANCE,
  REMOVE_FROM_BALANCE,
  ADD_FRIEND,
  MAKE_PICK,
  WITHDRAW_BALANCE
} from './actions'

// **** initial state if needed ****
// const initialState = {
//   friends: [],
//   choices: [],
//   currentCategory: '',
//   accountBalance: 0,
//   money: [],
//   nominees: [],
// }

export const reducers = (state, action) => {
  switch (action.type) {
    case BET_MONEY:
      return {
        ...state,
        accountBalance: action.accountBalance
        // accountBalance: state.accountBalance.map(amount => {
        //   if (action._id === user._id) {
            
        //   }
        // })
        // cart: state.cart.map(product => {
        //   if (action._id === product._id) {
        //     product.purchaseQuantity = action.purchaseQuantity
        //   }
        //   return product
        // })
      }

    case ADD_TO_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance
      }

    case REMOVE_FROM_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance
      }

    case ADD_FRIEND:
      return {
        ...state,
        friends: action.friends
      }

    case MAKE_PICK:
      return {
        ...state,
        choices: action.choices
      }

    case WITHDRAW_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance
      }


    default:
      return state
  }
}

export default reducers;