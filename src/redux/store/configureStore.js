import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root-reducer.reducer';

export default function configureStore(preloadedState) {
    const middlewares = [
        thunkMiddleware,
    ];

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
};
