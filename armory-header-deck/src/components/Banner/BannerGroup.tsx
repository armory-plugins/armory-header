import React, { Fragment, useEffect, useState } from 'react';

import type { BannerContent } from './Banner';
import { Banner } from './Banner';
import { getMessagingContent } from '../../utils/API';

export const BannerGroup = () => {
  const [banners, setBanners] = useState<BannerContent[] | undefined>(undefined);

  useEffect(() => {
    getMessagingContent().then((response) => {
      if (response.length > 0) {
        setBanners(response);
      }
    });
  }, []);

  return <Fragment>{banners && banners.map((content, id) => <Banner key={id} {...content} />)}</Fragment>;
};
