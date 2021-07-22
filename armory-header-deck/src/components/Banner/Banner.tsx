import React, { Fragment, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { getMessagingContent } from '../../utils/API';

interface BannerContent {
  message: string;
  style: string;
}

export const Banner = () => {
  const [show, setShow] = useState<boolean>(false);
  const [contents, setContents] = useState<BannerContent[] | undefined>(undefined);
  const handleClick = () => {
    setShow(false);
  };

  useEffect(() => {
    getMessagingContent().then((response) => {
      if (response.length > 1) {
        setShow(true);
        setContents(response);
      }
    });
  }, []);

  if (show) {
    return (
      <Fragment>
        {contents.map((content, id) => (
          <Alert key={id} variant={content.style} onClose={() => setShow(false)} dismissible>
            <div className="alert-container">
              <p className="alert-text">{content.message}</p>
              <button onClick={handleClick}>Dismiss</button>
            </div>
          </Alert>
        ))}
      </Fragment>
    );
  }

  return null;
};
