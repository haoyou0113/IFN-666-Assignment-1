import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer';
import DisplayContent from './components/content/index';
import Home from './Screens/Home';
import Stock from './Screens/Home/Stock';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <DisplayContent>
          <Route path='/' exact component={Home}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/stock' component={Stock}></Route>
        </DisplayContent>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
