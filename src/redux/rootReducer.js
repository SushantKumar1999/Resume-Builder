import { combineReducers } from "redux";
import templateReducer from "../redux/reducers/templateReducer";
import userReducer from "../redux/reducers/userReducer";
import detailsReducer from "./reducers/detailsReducer";
import { saveReducer } from "./reducers/saveReducer";


 const rootReducer = combineReducers({
   saveState: saveReducer,
   template: templateReducer,
   user: userReducer,
   details: detailsReducer,
 });

export default combineReducers({template: templateReducer, user: userReducer,details:detailsReducer,saveState:saveReducer});