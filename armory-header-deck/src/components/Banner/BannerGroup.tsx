import React, { Fragment, useEffect, useState } from 'react';

import { Banner, BannerContent } from './Banner';
import { getMessagingContent } from '../../utils/API';

export const BannerGroup = () => {
  const [banners, setBanners] = useState<BannerContent[] | undefined>(undefined);

  useEffect(() => {
    getMessagingContent().then((response) => {
      if (response.length > 1) {
        setBanners(response);
      }
    });
  }, []);

  return <Fragment>{banners && banners.map((content, id) => <Banner key={id} {...content} />)}</Fragment>;
};
