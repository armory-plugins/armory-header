import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import './Banner.css';

export interface BannerContent {
  message: string;
  style: string;
}

export const Banner = ({ message, style }: BannerContent) => {
  const [show, setShow] = useState<boolean>(true);
  const setMessage = () => {
    return { __html: `${message}` };
  };

  if (show) {
    return (
      <Alert variant={style}>
        <div className="alert-container">
          <p className="alert-text" dangerouslySetInnerHTML={setMessage()} />
          <button className="alert-close" onClick={() => setShow(false)}>
            Dismiss
          </button>
        </div>
      </Alert>
    );
  }

  return null;
};
