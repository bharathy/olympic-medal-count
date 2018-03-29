import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ props }) =>  {
    const { id, code, gold, silver, bronze, total } = props;

    return (
        <div className="divTableRow">
            <div className="divTableCell">{ id }</div>
            <div className="divTableCell"><div className={ `country-flag flag-${code}` } ></div></div>
            <div className="divTableCell bld">{ code }</div>
            <div className="divTableCell">{ gold }</div>
            <div className="divTableCell">{ silver }</div>
            <div className="divTableCell">{ bronze }</div>
            <div className="divTableCell bld">{ total }</div>
        </div>
    );
};

TableRow.propTypes = {
	props: PropTypes.object.isRequired
};

export default TableRow;