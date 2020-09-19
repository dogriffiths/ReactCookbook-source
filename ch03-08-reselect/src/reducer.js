export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'buy': {
            const basket = state.basket ? [...state.basket] : [];
            const existing = basket.findIndex(
                item => item.productId === action.payload.productId);
            if (existing !== -1) {
                basket[existing].quantity = basket[existing].quantity + 1;
            } else {
                basket.push({quantity: 1, ...action.payload})
            }
            return {
                ...state,
                basket
            };
        }
        case 'clearBasket': {
            return {
                ...state,
                basket: []
            }
        }
        default:
            return {...state};
    }
};