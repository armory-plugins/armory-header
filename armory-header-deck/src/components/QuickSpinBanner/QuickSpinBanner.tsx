import React, { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';

import { SETTINGS } from '@spinnaker/core';

import './QuickSpinBanner.css';

export const QuickSpinBanner = () => {
  if (!SETTINGS.feature.quickSpinEnabled) {
    return null;
  }

  return (
    <Fragment>
      <Alert className="quick-spin-alert" variant="warning">
        <div className="alert-container">
          <p>
            For testing purposes only. Please{' '}
            <a href="https://www.armory.io/contact-us/" target="_blank" rel="noopener noreferrer">
              contact
            </a>{' '}
            Armory with questions or to book a{' '}
            <a href="https://www.armory.io/demo-request/" target="_blank" rel="noopener noreferrer">
              demo.
            </a>
          </p>
        </div>
      </Alert>
    </Fragment>
  );
};
