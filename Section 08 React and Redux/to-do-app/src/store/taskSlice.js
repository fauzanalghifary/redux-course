import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

// export const fetchTasks = createAsyncThunk(
//   "fetchTasks",
//   async (a, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/tasks");
//       return { tasks: response.data };
//     } catch (error) {
//       return rejectWithValue({ error: error.message });
//     }
//   }
// );

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestedFailed: (state, action) => {
      state.loading = false;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    completeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
    },
  },
  // extraReducers: {
  //   [fetchTasks.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [fetchTasks.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.tasks = action.payload.tasks;
  //   },
  //   [fetchTasks.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload.error;
  //   },
  // },
});

export const {
  apiRequested,
  apiRequestedFailed,
  getTasks,
  addTask,
  removeTask,
  completeTask,
} = taskSlice.actions;

export default taskSlice.reducer;

const url = "/tasks";

export const loadTaks = () => {
  return apiCallBegan({
    url,
    method: "get",
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestedFailed.type,
  });
};

export const addNewTask = (task) =>
  apiCallBegan({
    url,
    method: "post",
    data: task,
    onSuccess: getTasks.type,
  });

export const updateCompleted = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completeTask.type,
  });

export const deleteTask = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type,
  });
