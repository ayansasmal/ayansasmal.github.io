const initialState = {
  details: {},
  qualification: {},
  experiences: [],
  skills: [],
};
const getDetails = (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

const selectExp = (state, action) => {
  const updatedExp = state.experiences.map((exp, index) => {
    if (index === action.payload) {
      return { ...exp, isSelected: true };
    } else {
      return { ...exp, isSelected: false };
    }
  });

  return {
    ...state,
    experiences: updatedExp,
  };
};
export const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'init':
      return getDetails(state, action);
    case 'selectExperience':
      return selectExp(state, action);
    default:
      return state;
  }
};
