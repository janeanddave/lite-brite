import React from 'react';

import LiteBriteHole from '../components/LiteBriteHole';

export default class LiteBriteApp extends React.Component {
  render() {
    return (
      <svg>
        <LiteBriteHole
          centerX={100}
          centerY={100}
          radius={10}
        />
        <LiteBriteHole
          centerX={80}
          centerY={80}
          radius={10}
          pegColor="red"
        />
      </svg>
    );
  }
}
