import React from 'react';

import { MedalCount } from '../../src/components/MedalCount';
import TableHeader from '../../src/components/TableHeader';
import TableRow from '../../src/components/TableRow';
import mockData from '../mock/mock-data';

const sandbox = sinon.createSandbox();
const sortMedalsSpy = sandbox.spy();

const error = 'network error';
const ERROR_MESSAGE = `Oops! Unable to load medal count. ${ error }! Please try again!`;
const EXPECTED_HEADER_PROPS = {
    'headerTitle': 'gold',
    'sortBy': '',
    'sortMedals': sortMedalsSpy,
};
const EXPECTED_ROW_PROPS = {
    'code': 'USA',
    'gold': 9,
    'silver': 7,
    'bronze': 12,
    'id': 1
};

describe('Given a MedalCount Component', () => {
    let wrapper;
    let testProps = {
        fetchMedals: sandbox.spy(),
        sortMedals: sortMedalsSpy,
        medals: mockData,
        error: '',
        sortBy: ''
    };

    describe('When it is initially rendered', () => {
        before(() => wrapper = shallow(<MedalCount { ...testProps }/>));

        it('should have a title', () => {
            expect(wrapper.find('h3')).to.have.length(1);
            expect(wrapper.find('h3').text()).to.equal('MEDAL COUNT');
        });

        it('should have 4 `TableHeader` component', () => {
            expect(wrapper.find(TableHeader)).to.have.length(4);
        });

        it('should pass expected props to `TableHeader` component', () => {
            expect(wrapper.find(TableHeader).at(0).props()).to.deep.equal(EXPECTED_HEADER_PROPS);
        });

        it('should have 10 `TableRow` component', () => {
            expect(wrapper.find(TableRow)).to.have.length(10);
        });

        it('should pass expected props to `TableRow` component', () => {
            expect(wrapper.find(TableRow).at(0).props().props).to.deep.equal(EXPECTED_ROW_PROPS);
        });

        it('should have invoked `fetchMedals` action', () => {
            expect(testProps.fetchMedals).to.be.calledOnce;
        });
    });

    describe('When there is an error while fetching', () => {
        before(() => {
            testProps.error = 'network error';
            wrapper = shallow(<MedalCount { ...testProps }/>)
        });

        it('should display the expected error message', () => {
            expect(wrapper.find('.error').text()).contains(ERROR_MESSAGE);
        });
    });
});
