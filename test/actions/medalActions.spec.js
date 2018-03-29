import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { fetchMedals, sortMedals} from '../../src/actions/medalActions';
import { FETCH_MEDALS_SUCCESS, FETCH_MEDALS_FAILURE, SORT_MEDALS } from '../../src/actions/actionConstants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const VALID_API = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json';
const INVALID_API = 'https://example.com/medals.json';

describe('Given a medalAction creator', () => {
    it('should dispatch a sort medals action', () => {
        const store = mockStore({});
        const actions = store.getActions()
        const EXPECTED_PAYLOAD = { type: SORT_MEDALS, sortBy: undefined };

        store.dispatch(sortMedals());

        expect(actions).to.deep.equal([EXPECTED_PAYLOAD]);
    });

    describe('When there is an async fetch', () => {
        afterEach(() => {
            fetchMock.reset();
            fetchMock.restore();
        });

        it('should dispatch an expected action on success', () => {
            const store = mockStore({});
            const expectedActions = [FETCH_MEDALS_SUCCESS];

            fetchMock.get(VALID_API, function getSession(url, opts) {
                if (url === VALID_API){
                    return {
                        status: 200,
                        body: JSON.stringify({
                            success: true,
                            data: 'test'
                        })
                    };
                }
            });

            return store.dispatch(fetchMedals())
                .then(() => {
                    const actualActions = store.getActions().map(action => action.type);

                    expect(actualActions).to.deep.equal(expectedActions);
                });
        });

        it('should dispatch an expected action on failure', () => {
            const store = mockStore({});
            const expectedActions = [FETCH_MEDALS_FAILURE];

            fetchMock.get(INVALID_API, function getSession(url, opts) {
                if (url === INVALID_API) {
                    return {
                        status: 404,
                        body: JSON.stringify({
                            details: 'file not found'
                        })
                    }
                }
            })
            .catch(unmatchedUrl => { return null; });

            return store.dispatch(fetchMedals())
                .then(() => {
                    const actualActions = store.getActions().map(action => action.type);

                    expect(actualActions).to.deep.equal(expectedActions);
                });
        });
    });
});
