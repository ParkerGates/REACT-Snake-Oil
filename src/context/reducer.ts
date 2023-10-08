import { AppContext, CartItem, StoreItem } from "../interface/interfaces";
import { testCartData } from "../data/data";

interface Action {
    type: string;
    cartItem?: CartItem;
    storeItem?: StoreItem;
    itemIndex?: Number;
    increment?: 1 | -1;
}

const initialState: AppContext = {
    cart: testCartData
}

let newState: AppContext;
let newCart: CartItem[];
let newItem: CartItem;

const reducer = (state:AppContext, action: Action) => {
    switch(action.type) {
        case "addToCart":
            //storeItem: StoreItem
            newState = {...state};
            newCart = [...state.cart];

            //Check is item exists in cart
            for (let i = 0; i < state.cart.length; i++) {
                //If item exists
                if (state.cart[i].item.alias === action.storeItem.alias) {
                    newCart.splice(i, 1,{amount: state.cart[i].amount + 1, item: action.storeItem});
                    // newState = {...state, cart:[...newCart]};
                    newState.cart = [...newCart];
                    return newState
                }
            }
            //If item is new to cart
            newState.cart = [...state.cart, {amount:1, item:action.storeItem}];
            return newState

        case "removeFromCart":
            //itemIndex: Number
            newState = {...state};
            newCart = [...state.cart];
            newCart.splice(Number(action.itemIndex), 1);
            newState.cart = [...newCart];
            console.log('heyo',state.cart.length, newState.cart.length);
            return newState;

        case "incrementCartItem":
            //itemIndex: Number, increment: -1 | 1
            newState = {...state};
            newCart = [...state.cart];
            if ((state.cart[+action.itemIndex].amount + action.increment) <= 0) {
                newCart.splice(+action.itemIndex, 1);
                newState.cart = newCart;
                return newState;
            }
            newCart.splice(+action.itemIndex, 1,{amount: state.cart[+action.itemIndex].amount + action.increment, item: state.cart[+action.itemIndex].item});
            newState.cart = newCart;
            return newState;

        default:
            console.log('default');
            return state;
    }
}

export { initialState, reducer }