import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer';
import DisplayContent from './components/content/index';
import Home from './Screens/Home';
import StockTableChart from './Screens/StockTableChart';
import Stock from './Screens/Stock';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <DisplayContent>
          <Route path='/' exact component={Home}></Route>
          <Route
            path='/'
            render={() => (
              <DisplayContent>
                <Route path='/home' component={Home} />
                <Route path='/stock' component={Stock} />
                <Route path='/stocktablechart' component={StockTableChart} />
              </DisplayContent>
            )}
          ></Route>
        </DisplayContent>

        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
