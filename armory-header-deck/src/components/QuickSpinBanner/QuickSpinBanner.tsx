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
      <Alert color="info">
        <p className="text-center">
          <a href="https://www.armory.io/demo-request/">Contact Armory for help or to book a demo.</a>
        </p>
      </Alert>
    </Fragment>
  );
};
