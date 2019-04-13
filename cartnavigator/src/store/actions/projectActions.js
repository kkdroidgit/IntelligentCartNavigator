export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to DB
        dispatch({type: 'CREATE_PROJECT', project});
    }
};