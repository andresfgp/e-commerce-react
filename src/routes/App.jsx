import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/home/Home';
import Checkout from '../containers/checkout/Checkout';
import Information from '../containers/information/Information';
import Payment from '../containers/payment/Payment';
import Success from '../containers/success/Success';
import NotFound from '../containers/not-found/NotFound';
import Layout from '../components/layout/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />}/>
            <Route exact path="/checkout/information" element={<Information />} />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
