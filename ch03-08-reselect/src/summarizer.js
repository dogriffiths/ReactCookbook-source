import {createSelector} from "reselect";

export default createSelector(
    state => (state.basket || []),
    basket => ({
            itemCount: basket.reduce((i, j) => i + j.quantity, 0),
            cost: basket.reduce((i, j) => i + (j.quantity * j.price), 0),
        })
);
