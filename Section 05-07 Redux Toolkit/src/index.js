import store from "./store/configureStore";
// import { addTask, removeTask, completeTask } from "./store/action";
import { addTask, removeTask, completeTask } from "./store/taskSlice";
import { addEmployee, removeEmployee } from "./store/employeeSlice";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(addTask({ task: "Learn Redux" }));
console.log(store.getState());

store.dispatch(completeTask({ id: 1 }));
console.log(store.getState());

store.dispatch(removeTask({ id: 1 }));
console.log(store.getState());

store.dispatch(addEmployee({ name: "John" }));
console.log(store.getState());

unsubscribe();
