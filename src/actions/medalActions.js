import { FETCH_MEDALS_SUCCESS, FETCH_MEDALS_FAILURE, SORT_MEDALS } from './actionConstants';

const MEDAL_DATA_API = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json';

export function fetchMedals() {
	return (dispatch) => {
		return fetch(MEDAL_DATA_API)
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			dispatch({
				type: FETCH_MEDALS_SUCCESS,
				medals: data
			});
		}).catch(function(error) {
			dispatch({
				type: FETCH_MEDALS_FAILURE,
				errorMessage: error.message
			});
		});
	}
}

export function sortMedals(sortByCriteria) {
	return (dispatch) => {
		dispatch({
			type: SORT_MEDALS,
			sortBy: sortByCriteria
		});
	}
}
