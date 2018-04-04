import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/medalCount.css';

import { medalActions } from '../actions';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export class MedalCount extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.fetchMedals();
	}

	render() {
		const { error, medals, sortBy, actions } = this.props;
		const sortMedals = actions.sortMedals;
		const errorMesage = `Oops! Unable to load medal count. ${ error }! Please try again!`;
		const topTenCountries = medals => (medals) ? medals.slice(0, 10) : [];
		const tableRowProps = topTenCountries(medals).map((medal, i) => Object.assign({}, medal, { 'id': i + 1 }));
		const tableHeaderProps = headerTitle => {
			return { headerTitle, sortBy, sortMedals }
		};

		if (error) {
			return ( <div className="error">{ errorMesage } </div> );
		}
		else {
			return (
				<div className="container">
					<h3>MEDAL COUNT</h3>
					<div className="divTable gridTable">
						<div className="divTableHeading">
							<div className="divTableRow">
								<div className="divTableHead"></div>
								<div className="divTableHead"></div>
								<div className="divTableHead"></div>
								<TableHeader { ...tableHeaderProps('gold') } />
								<TableHeader { ...tableHeaderProps('silver') } />
								<TableHeader { ...tableHeaderProps('bronze') } />
								<TableHeader { ...tableHeaderProps('total') } />
							</div>
						</div>
						<div className="divTableBody">
							{ tableRowProps.map((medals, i) => <TableRow props={ medals } key={ i } />) }
						</div>
					</div>
				</div>
			);
		}
	}
}

MedalCount.propTypes = {
	medals: PropTypes.array,
	error: PropTypes.object,
	sortBy: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		medals: state.medals.medals,
		error: state.medals.error,
		sortBy: state.medals.sortBy
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(medalActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MedalCount);
