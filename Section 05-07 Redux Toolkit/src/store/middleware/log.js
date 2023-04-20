const log = (store) => (next) => (action) => {
  console.log("Logging", action);
  next(action);
};

export default log;
