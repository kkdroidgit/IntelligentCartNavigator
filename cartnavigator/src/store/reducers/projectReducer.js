const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'peach slmm as', content: 'blah blah blah'},
        {id: '3', title: 'me find peach', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            break;
        default:
            console.log('');    
    }
    return state 
}

export default projectReducer