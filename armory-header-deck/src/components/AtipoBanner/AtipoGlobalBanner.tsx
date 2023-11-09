import React, { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';

import { SETTINGS } from '@spinnaker/core';

import './AtipoGlobalBanner.css';

const atipoGlobalBanner = SETTINGS.feature.atipoGlobalBanner ? SETTINGS.feature.atipoGlobalBanner : undefined;

export const AtipoGlobalBanner = () => {
  if (!SETTINGS.feature.atipoGlobalBanner) {
    return null;
  }

  return (
    <Fragment>
      <Alert className="atipo-global-alert" variant="warning">
        <div className="announcement-container">
          <p>{atipoGlobalBanner}</p>
        </div>
      </Alert>
    </Fragment>
  );
};
