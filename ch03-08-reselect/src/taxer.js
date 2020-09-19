import {createSelector} from "reselect";
import summarizer from "./summarizer";

export default createSelector(summarizer, summary => {
    return (summary.cost * 0.25);
});