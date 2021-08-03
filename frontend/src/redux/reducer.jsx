const initial = {
  data : [],
  message : ""
};

const dataReducer = (state = initial, action) => {
  switch (action.type) {
    case 'DATA_STORE':
      return {
        ...state,
        message : "ok"
      }
    case 'DATA_STORE_FAIL' :
      return {
        ...state,
        message : action.payload
      };
    case 'DATA_GET':
      return {
        ...state,
        data : action.payload
    }
    case 'DATA_DELETED' :
      return {
      ...state,
      message : action.payload
    }
    default:
      return state;
  }
};
export default dataReducer;
