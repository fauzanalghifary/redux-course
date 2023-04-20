import store from "./store/configureStore";
import axios from "axios";
import {
  getTasks,
  fetchTasks,
  loadTaks,
  addNewTask,
  updateCompleted,
  removeTask,
} from "./store/taskSlice";
import { apiCallBegan } from "./store/api";

// const gettingTasks = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/tasks");
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
//   }
// };

// gettingTasks();

// store.dispatch(fetchTasks());

store.dispatch(loadTaks());
// store.dispatch(addNewTask({ task: "New Task" }));
store.dispatch(updateCompleted({ id: 6, completed: true }));
store.dispatch(removeTask({ id: 6 }));
