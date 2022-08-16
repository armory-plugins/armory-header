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
      <Alert variant="danger">
        <p className="text-center">For testing purposes only. Not for production use.</p>
      </Alert>
    </Fragment>
  );
};
