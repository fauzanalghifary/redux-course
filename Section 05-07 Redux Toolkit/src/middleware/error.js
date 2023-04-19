const error = (store) => (next) => (action) => {
  if (action.type === "error") console.log("Error", action.payload);
  else next(action);
};

export default error;
