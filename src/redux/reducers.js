const initialState = {
  name: "",
  email: "",
  fruit: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        fruit: action.payload.fruit,
      };
    default:
      return state;
  }
};

export default formReducer;
