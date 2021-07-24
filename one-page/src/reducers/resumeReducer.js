const initialState = {
  details: {},
  aboutMe: [],
  achievements: [],
  qualification: {},
  experiences: [],
  softSkills: [],
  bestPracticesSkills: [],
  skills: [],
  features: {},
};
const getFeatures = (state, action) => {
  return { ...state, features: action.payload };
};
const getDetails = (state, action) => {
  return { ...state, ...action.payload };
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
    case 'getFeatures':
      return getFeatures(state, action);
    case 'init':
      return getDetails(state, action);
    case 'selectExperience':
      return selectExp(state, action);
    default:
      return state;
  }
};
