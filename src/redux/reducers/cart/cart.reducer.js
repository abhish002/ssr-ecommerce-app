const INITIAL_STATE = {
    hidden: true,
    items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
};

export default cartReducer;