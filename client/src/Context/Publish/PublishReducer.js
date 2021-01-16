export default (state , action ) => {
    switch (action.type) {
        case "GET_PUBLISH":
            return{
                ...state,
                publishes : action.payload
            }
        default:
            return state
    }
}