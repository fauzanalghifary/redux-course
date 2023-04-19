import store from "./store/store";
import { addTask, removeTask, completeTask, fetchTodo } from "./store/action";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(addTask("Learn Redux"));
console.log(store.getState());

store.dispatch(completeTask(1));
console.log(store.getState());

store.dispatch(removeTask(1));
console.log(store.getState());

store.dispatch(fetchTodo());
console.log(store.getState());

// unsubscribe();
