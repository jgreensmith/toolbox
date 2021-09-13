// eslint-disable-next-line import/no-anonymous-default-export
export default (todos = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...todos, action.payload ];
        default:
            return todos;
    }
}