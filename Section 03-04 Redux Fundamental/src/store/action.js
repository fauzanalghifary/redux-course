import * as actionTypes from "./actionType";

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      task: task,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: {
      id: id,
    },
  };
};

export const completeTask = (id) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: {
      id: id,
    },
  };
};

export const fetchTodo = () => {
  return async function (dispatch, getState) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    dispatch(addTask(data.title));
  };
};
