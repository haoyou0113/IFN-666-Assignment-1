import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Header from '../components/header';
import Footer from '../components/footer';
import DisplayContent from '../components/content/index';
import Stock from '../Screens/Stock';
import StockTableChart from '../Screens/StockTableChart';
import DateSearch from '../Screens/StockTableChart/components/DateSearch';
import DateTable from '../Screens/StockTableChart/components/StockTable';
import LineChart from '../Screens/StockTableChart/components/StockChart';
import InputSearch from '../Screens/Stock/components/InputSearch';
import TableDisplay from '../Screens/Stock/components/TableDisplay';
{
}
Enzyme.configure({ adapter: new Adapter() });

// public components
describe('src/App', () => {
  it('App including Header, Footer, Content ', () => {
    const fakeComponent = shallow(<App />);
    expect(fakeComponent.find(Header));
    expect(fakeComponent.find(DisplayContent));
    expect(fakeComponent.find(Footer));
  });
});

//Stock components
describe('src/Screens/Stock', () => {
  it('including Search and Table  ', () => {
    const fakeComponent = shallow(<Stock />);
    expect(fakeComponent.find(InputSearch));
    expect(fakeComponent.find(TableDisplay));
  });
});
//StockDetails components
describe('src/StockTableChart', () => {
  it('including DateSearching, StockChart and StockTable ', () => {
    const fakeComponent = shallow(<StockTableChart />);
    expect(fakeComponent.find(DateSearch));
    expect(fakeComponent.find(DateTable));
    expect(fakeComponent.find(LineChart));
  });
});
