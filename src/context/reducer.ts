const initialState = {
    test1: 'test1',
    test2: 'test2'
}

const reducer = (state:any, action: any) => {
    switch(action.type) {
        case "test1":
            console.log('test1');
            return state
        case 'test2':
            console.log('test2');
            return state;
        case 'changeTest':
            console.log('let em rip');
            return {test1: 'no', test2:'nono'}
        default:
            console.log('default');
            return state;
    }
}

export { initialState, reducer }