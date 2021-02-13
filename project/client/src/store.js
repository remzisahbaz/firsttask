import {createStore, applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {composewithDevTools} from  "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store= createStore(rootReducer,
    applyMiddleware(thunk)
)



export default store;
