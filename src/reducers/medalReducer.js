import { FETCH_MEDALS_SUCCESS, FETCH_MEDALS_FAILURE, SORT_MEDALS } from '../actions/actionConstants';
import { sortByDesc, withTotal } from '../helper/sorter';

const initialState = {
    medals: [],
    error: null,
    sortBy: 'gold'
};

const medalReducer =(state = initialState, action) => {
    switch(action.type) {
        case FETCH_MEDALS_SUCCESS:
            return { ...state,
                medals : sortByDesc(withTotal(action.medals), state.sortBy)
            }
        case FETCH_MEDALS_FAILURE:
            return { ...state,
                error : action.errorMessage,
                medals : []
            }
        case SORT_MEDALS:
            return { ...state,
                medals : sortByDesc(withTotal(state.medals), action.sortBy),
                sortBy : action.sortBy
            }
        default:
            return state;
    }
}

export default medalReducer;