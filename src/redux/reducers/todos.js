// eslint-disable-next-line
import {ADD_TODO, TOGGLE_TODO} from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: {}
};
// eslint-disable-next-line
export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TODO : {
            console.log('jsdno0 debug', state, action);
            const {id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id] : {
                        content, 
                        completed: false
                    }
                }
            }
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            }
        }
        default: return state;
    }
}
