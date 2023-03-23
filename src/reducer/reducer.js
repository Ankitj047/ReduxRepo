import { GETAPI, POSTAPI } from "../constants";

const initialState = {
    dieseasget: [],
    diesasepost: []
}

const authreduce = (state = initialState, action) => {
    switch (action.type) {
        case GETAPI:
            return { ...state, dieseasget : action.payload};

        case POSTAPI: 
            return {...state, diesasepost: action?.payload};  
        default:
            return state;
    }
}

export default authreduce;