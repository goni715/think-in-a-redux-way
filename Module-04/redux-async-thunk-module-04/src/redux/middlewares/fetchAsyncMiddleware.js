const fetchAsyncMiddleware = (store) => (next) => async (action)=>{
    if(typeof action === 'function'){
        action(store.dispatch,store.getState)
        return;
    }
    return next(action);
}


export default fetchAsyncMiddleware;

