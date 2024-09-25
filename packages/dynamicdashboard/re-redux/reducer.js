const initialState = {
  // initial state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE_2':
      return {
        ...state,
        // update state based on action payload
      };
    default:
      return state;
  }
};

export default reducer;
