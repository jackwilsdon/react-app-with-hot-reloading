import { NamedCounter, Navigation } from '../components';
import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <h1>Second Page</h1>
    <Navigation />
    <NamedCounter name="Global Counter" />
    <NamedCounter name="Second Page Counter" identifier="second" />
  </Fragment>
);
