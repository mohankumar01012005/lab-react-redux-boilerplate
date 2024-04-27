  const Redux = (state , action) => {
    switch (action.type) {
      case "INC":
        return {
          ...state,
          count: state.count + action.Data
        };
      case "DEC":
        return {
          ...state,
          count: state.count - action.Data
        };
      default:
        return state;
    }
  };
  
  export default Redux;
  