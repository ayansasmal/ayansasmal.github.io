import axios from 'axios';

const fetchFeatures = features => {
  return { type: 'getFeatures', payload: features };
};

const details = content => {
  return { type: 'init', payload: content };
};

const selectExp = index => {
  return { type: 'selectExperience', payload: index };
};

export const getFeatures = () => {
  return dispatch => {
    axios
      .get('features.json')
      .then(data => {
        dispatch(fetchFeatures(data.data));
      })
      .catch(err => {
        console.log('Error in fetching details', err);
        dispatch(fetchFeatures({}));
      });
  };
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
