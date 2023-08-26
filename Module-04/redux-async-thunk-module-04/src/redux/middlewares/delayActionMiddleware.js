

const delayActionMiddleware = (store) => (next) => (action) => {
    if(action.type=== 'todos/todoAdded') {
        console.log("I am delaying")
        setTimeout(()=> {
            next(action);
        },3000);

        return;
    }
        return next(action);
}

export default delayActionMiddleware;


