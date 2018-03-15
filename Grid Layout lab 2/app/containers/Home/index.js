/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import GGrid from 'components/GGrid';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Homel" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <GGrid/>
      </div>
    );
  }
}
