import * as React from 'react';
import { Login } from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Join } from './components/Join';
export interface AppProps {}

export const App = (props: AppProps) => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
  </>
);
