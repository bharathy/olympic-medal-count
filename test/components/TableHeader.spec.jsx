import React from 'react';

import TableHeader from '../../src/components/TableHeader';
import {sortMedals} from '../../src/actions/medalActions'

const testProps = {
    sortBy: 'gold',
    headerTitle: 'gold',
    sortMedals: sinon.spy()
};

describe('Given a TableHeader component', () => {
    describe('when component is rendered', () => {
        let wrapper;

        beforeEach(() => wrapper = shallow(<TableHeader { ...testProps } />));

		it('should render the TableHeader', () => {
			expect(wrapper).to.have.length(1);
        });

        it('should have the headerTitle as gold', () => {
            const { headerTitle } = testProps;
            const gold = wrapper.find('.gold').text();

            expect(headerTitle).to.equal(`${ headerTitle }`);
        });

        it('should have the activeClass by default', () => {
            const tableHead = wrapper.find('.divTableHead');

            expect(tableHead.hasClass('active--sort')).to.equal(true);
        });

        describe('when sortBy is NOT gold', () => {
            before(() => testProps.sortBy = 'silver');

            it('should NOT have the activeClass', () => {
                const tableHead = wrapper.find('.divTableHead');

                expect(tableHead.hasClass('active--sort')).to.equal(false);
            });
        });

        describe('when the user click gold to sortBy', () => {
            it('should trigger the `sortMedals` action with expected params', () => {
                wrapper.find('.divTableHead').simulate('click');

                expect(testProps.sortMedals).to.be.calledOnce.and
                .to.be.calledWithExactly('gold');
            });
        });
    });
});