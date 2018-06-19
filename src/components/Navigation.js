import React, { Fragment } from 'react';
import { firstPage, home, secondPage } from '../actions';
import Link from 'redux-first-router-link';

export default () => (
  <Fragment>
    <Link to={home()}>Home</Link>
    {' | '}
    <Link to={firstPage()}>First Page</Link>
    {' | '}
    <Link to={secondPage()}>Second Page</Link>
  </Fragment>
);
