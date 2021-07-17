import { combineReducers, createStore } from "redux";

import OanTuXiReducer from "./BaitapOanTuXi";
const rootReducer = combineReducers({
    OanTuXiReducer
});


//Đối với state là object hoặc array
// => Redux chỉ render lại khi object hoặc array được gắn object hoặc array với imutable
/*
    Ví dụ có objectA
    objectA.thuoctinh= giá trị mới => không thay đổi (redux không biết đc giá trị đó thay đổi =>k render lại giao diên)

    objectA={} =>gán = object mới
    objectA={...objectA, thuocTinh:'giaTriMoi'} 

*/

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())