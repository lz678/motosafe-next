import mainConstant from "../../constant/mainConstant"
let init = {
    showSuccessPanel: false,
}

const mainReducer = (state = init, action) => {
    switch (action.type) {
        case mainConstant.CHANGE_SUCCESS_PANEL_STATUS:
            return {
                ...state,
                showSuccessPanel: action.status
            }
        default:
            return state
    }
}
export default mainReducer