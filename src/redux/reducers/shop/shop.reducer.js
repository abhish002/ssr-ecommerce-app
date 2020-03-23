import { FETCH_PRODUCTS, GET_PRODUCTS } from '../../actions/shop/shop.constants';

const INITIAL_STATE = {
    isFetching: false,
    products: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_PRODUCTS:
            return {
                isFetching: false,
                products: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
};

export default shopReducer;