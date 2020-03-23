import { GET_PRODUCTS, FETCH_PRODUCTS } from './shop.constants';

export const getProducts = () => {
    return (dispatch, getState) => {
        if (getState().shop.products.length === 0) {
            return fetch(`assets/shop.data.js`)
                .then(shopData => dispatch({
                    type: FETCH_PRODUCTS,
                    payload: shopData.products
                }));
        }
        return dispatch({
            type: GET_PRODUCTS,            
        });
    }
}