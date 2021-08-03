const initial = {};

const dataReducer = (state = initial, action) => {
  switch (action.type) {
    case 'DATA_STORE':
      return action.payload
    default:
      return state;
  }
};

export default dataReducer;
