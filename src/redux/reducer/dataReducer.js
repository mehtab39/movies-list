import {
    DATALOADING,
    DATASUCCESS,
    DATAERROR,
    DATAREMOVE
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
                    data: [...state.data, ...payload]
            }
            case DATAREMOVE: 
            return {

                ...state,
                loading: false,
                    error: false,
                    data: filter(state.data, payload)
            }
       
            case DATAERROR:
                return {
                    ...state,
                        loading: false,
                        error: true
                }
                case DATALOADING:
                    return {
                        ...state,
                            loading: true,
                            error: false
                    }
                    
                        default:
                            return state
    }
}



export const filter = (data, payload) => {
      return data.filter(el => !(payload.includes(el.id)))
}