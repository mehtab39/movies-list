import {
    DATALOADING,
    DATASUCCESS,
    DATAERROR
} from "../actionTypes";
const init_state = {
    data: [],
    loading: false,
    error: false,
}
export const dataReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {

        case DATASUCCESS:
            return {

                ...state,
                loading: false,
                    error: false,
                    data: payload

            }
       
            case DATAERROR:
                return {
                    ...state,
                    data: [],
                        loading: false,
                        error: true
                }
                case DATALOADING:
                    return {
                        ...state,
                        data: [],
                            loading: true,
                            error: false
                    }
                    
                        default:
                            return state
    }
}