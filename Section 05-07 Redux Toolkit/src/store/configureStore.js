import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import taskReducer from "./taskSlice";
import employeeReducer from "./employeeSlice";
import api from "./middleware/api";
import error from "./middleware/error";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});

export default store;
