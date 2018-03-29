import medalReducer from '../../src/reducers/medalReducer'
import { FETCH_MEDALS_SUCCESS, FETCH_MEDALS_FAILURE, SORT_MEDALS } from '../../src/actions/actionConstants';

const MOCK_MEDALS = [
    { "code": "USA", "gold": 9, "silver": 7, "bronze": 12 },
    { "code": "NOR", "gold": 11, "silver": 5, "bronze": 10 }
];
const SORTED_BY_GOLD_MOCK_MEDALS = [
    { "code": "NOR", "gold": 11, "silver": 5, "bronze": 10, 'total': 26 },
    { "code": "USA", "gold": 9, "silver": 7, "bronze": 12, 'total': 28 },
];
const SORTED_BY_SILVER_MOCK_MEDALS = [
    { "code": "USA", "gold": 9, "silver": 7, "bronze": 12, 'total': 28 },
    { "code": "NOR", "gold": 11, "silver": 5, "bronze": 10, 'total': 26 }
];

const FETCH_SUCCESS_ACTION = { type: FETCH_MEDALS_SUCCESS, medals: MOCK_MEDALS };
const FETCH_FAILURE_ACTION = { type: FETCH_MEDALS_FAILURE, errorMessage: 'error msg' };
const SORT_MEDALS_ACTION = { type: SORT_MEDALS, sortBy: 'silver' }

const INITIAL_STATE = { medals: [], error: null, sortBy: 'gold' };
const FETCH_SUCCESS_STATE = {
    medals: SORTED_BY_GOLD_MOCK_MEDALS,
    error: null,
    sortBy: 'gold'
};
const FETCH_FAILURE_STATE = {
    medals: [],
    error: 'error msg',
    sortBy: 'gold'
};
const SORT_MEDAL_STATE = {
    medals: SORTED_BY_SILVER_MOCK_MEDALS,
    sortBy: 'silver',
    error: null
};

describe('Given a medal reducer', () => {
  it('should return the initial state', () => {
    const reducerState = medalReducer(undefined, {});

    expect(reducerState).to.deep.equal(INITIAL_STATE);
  });

  describe('when it recieves `FETCH_MEDALS_SUCCESS` action', () => {
    it('should return the expected state', () => {
        const reducerState = medalReducer(INITIAL_STATE, FETCH_SUCCESS_ACTION);

        expect(reducerState).to.deep.equal(FETCH_SUCCESS_STATE);
      });
  });

  describe('when it recieves `FETCH_MEDALS_FAILURE` action', () => {
    it('should return the expected state', () => {
        const reducerState = medalReducer(INITIAL_STATE, FETCH_FAILURE_ACTION);

        expect(reducerState).to.deep.equal(FETCH_FAILURE_STATE);
      });
  });

  describe('when it recieves `SORT_MEDALS` action and a new state', () => {
    it('should return the expected state', () => {
        const NEW_STATE = {...INITIAL_STATE, medals : MOCK_MEDALS }
        const reducerState = medalReducer(NEW_STATE, SORT_MEDALS_ACTION);

        expect(reducerState).to.deep.equal(SORT_MEDAL_STATE);
      });
  });
});