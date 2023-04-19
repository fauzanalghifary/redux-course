import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import taskReducer from "./taskSlice";
import employeeReducer from "./employeeSlice";
import log from "../middleware/log";
import logger from "redux-logger";
import error from "../middleware/error";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});

export default store;
