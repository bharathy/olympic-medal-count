import React, { Component} from 'react';
import PropTypes from 'prop-types';

const NOOP = () => {};

const TableHeader = ({ headerTitle, sortBy, sortMedals = NOOP }) => {
    const activeClass = (sortBy === headerTitle) ? 'active--sort' : '';

    return (
        <div className = { `divTableHead ${ activeClass }` } onClick = { () => sortMedals(headerTitle) }>
            <div className = { headerTitle }> { headerTitle } </div>
        </div>
    );
};

TableHeader.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    sortBy: PropTypes.string,
    sortMedals: PropTypes.func
};

export default TableHeader;