export const logger = (state) => (next) => (action) => {
    console.log("Action: ", action);
    console.log("next: ", next);
    console.log("getState: ", state);
    next(action)
  }
  