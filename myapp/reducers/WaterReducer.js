const waterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WATER":
      return [
        ...state,
        {
          id: Date.now(),
          time: action.payload.time,
          value: action.payload.value,
        },
      ];
    case "LOAD_WATER":
      return action.payload;
    case "DELETE_WATER":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default waterReducer;
