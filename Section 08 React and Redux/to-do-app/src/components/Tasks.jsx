import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTaks } from "../store/taskSlice";
import AddTask from "./AddTask";
const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(loadTaks());
  }, [dispatch]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <AddTask />
      {!loading && tasks.length > 0
        ? tasks.map((task) => {
            return (
              <div key={task.id}>
                <h3>{task.task}</h3>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Tasks;
