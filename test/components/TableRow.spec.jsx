import React from 'react';

import TableRow from '../../src/components/TableRow';

const testProps = {
    props: {
        "id": 1,
        "code": "NOR",
        "gold": 11,
        "silver": 5,
        "bronze": 10,
        "total": 26
    }
};

describe('Given a TableRow component', () => {
    describe('when component is rendered', () => {
        let wrapper;

        beforeEach(() => wrapper = shallow(<TableRow { ...testProps } />));

		it('should render the TableRow', () => {
			expect(wrapper).to.have.length(1);
        });

        it('should render the country Id', () => {
            const { id } = testProps.props;
            const countryId = wrapper.find('.divTableCell').at(0).text();

			expect(countryId).to.equal(`${ id }`);
		});

        it('should render the country flag', () => {
            const { code } = testProps.props;
            const countryFlagElement = wrapper.find('.country-flag');

			expect(countryFlagElement.hasClass('flag-NOR')).to.equal(true);
        });

        it('should render the country code', () => {
            const { code } = testProps.props;
            const countryCode = wrapper.find('.divTableCell').at(2).text();

			expect(countryCode).to.equal(`${ code }`);
        });

        it('should render the gold medal count', () => {
            const { gold } = testProps.props;
            const medalGold = wrapper.find('.divTableCell').at(3).text();

			expect(medalGold).to.equal(`${ gold }`);
        });

        it('should render the silver medal count', () => {
            const { silver } = testProps.props;
            const medalSilver = wrapper.find('.divTableCell').at(4).text();

			expect(medalSilver).to.equal(`${ silver }`);
        });

        it('should render the medal bronz', () => {
            const { bronze } = testProps.props;
            const medalBronze = wrapper.find('.divTableCell').at(5).text();

			expect(medalBronze).to.equal(`${ bronze }`);
        });

        it('should render the country code', () => {
            const { total } = testProps.props;
            const medalTotal = wrapper.find('.divTableCell').at(6).text();

			expect(medalTotal).to.equal(`${ total }`);
		});
    });

});