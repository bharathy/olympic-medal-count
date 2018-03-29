import { expect } from 'chai';
import sinon from 'sinon';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const chai = require('chai');

configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
global.mount = mount;
global.render = render;
global.shallow = shallow;

chai.use(require('sinon-chai'));