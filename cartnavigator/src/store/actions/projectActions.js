export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to DB
        dispatch({type: 'CREATE_PROJECT', project});
    }
};