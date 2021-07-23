import React, { Fragment, useEffect, useState } from 'react';

import { Banner, BannerContent } from './Banner';
import { getMessagingContent } from '../../utils/API';

export const BannerGroup = () => {
  const [banners, setBanners] = useState<BannerContent[]>([]);

  useEffect(() => {
    getMessagingContent().then((response) => {
      setBanners(response);
    });
  }, []);

  return <Fragment>{banners && banners.map((content, id) => <Banner key={id} {...content} />)}</Fragment>;
};
