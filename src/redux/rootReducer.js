import { combineReducers, createStore } from "redux";

import OanTuXiReducer from "./BaitapOanTuXi";
const rootReducer = combineReducers({
    OanTuXiReducer
});



export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
