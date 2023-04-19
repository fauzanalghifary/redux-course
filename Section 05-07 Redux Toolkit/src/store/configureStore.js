import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import taskReducer from "./taskSlice";
import employeeReducer from "./employeeSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
});

export default store;
