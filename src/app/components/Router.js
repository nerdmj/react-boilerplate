import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export default ({children})=>__CLIENT__
    ? <BrowserRouter>{children}</BrowserRouter>
    : <div>{children}</div>
