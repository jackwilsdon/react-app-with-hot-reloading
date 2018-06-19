import { NamedCounter, Navigation } from '../components';
import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <h1>Home</h1>
    <Navigation />
    <NamedCounter name="Global Counter" />
    <NamedCounter name="First Page Counter" identifier="first" />
    <NamedCounter name="Second Page Counter" identifier="second" />
  </Fragment>
);
