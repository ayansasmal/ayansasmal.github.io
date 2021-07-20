import axios from 'axios';

const details = content => {
  return { type: 'init', payload: content };
};

const selectExp = index => {
  return { type: 'selectExperience', payload: index };
};

export const updateSelection = index => {
  return selectExp(index);
};

export const getDetails = () => {
  return dispatch => {
    axios
      .get('content.json')
      .then(data => {
        dispatch(details(data.data));
      })
      .catch(err => {
        console.log('Error in fetching details', err);
        dispatch(details({}));
      });
  };
};
