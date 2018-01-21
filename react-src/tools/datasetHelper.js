const isDatasetChanged = (newProps, state) => {
  if (
    newProps.mandato !== state.mandato ||
    newProps.idcliente !== state.idcliente ||
    typeof newProps.start !== 'undefined' && (!state.start || newProps.start.toString() !== state.start.toString()) ||
    typeof newProps.end !== 'undefined' && (!state.end || newProps.end.toString() !== state.end.toString())
  ) {
    return true;
  }
  return false;
};

const isDatasetReady = (newProps) => {
  if (newProps.changing || !newProps.start || !newProps.end) {
    return false;
  }
  return true;
};

const datasetMapStateToProps = (state) => {
  if (state.dataset) {
    return {
      ...state.dataset
    };
  }
  return {};
};

export {
  datasetMapStateToProps,
  isDatasetChanged,
  isDatasetReady
};
