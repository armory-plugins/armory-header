import React, { Fragment, useEffect, useState } from 'react';

import type { BannerContent } from './Banner';
import { Banner } from './Banner';

export const BannerGroup = () => {
  const [banners, setBanners] = useState<BannerContent[] | undefined>(undefined);

  useEffect(() => {}, []);

  return <Fragment>{banners && banners.map((content, id) => <Banner key={id} {...content} />)}</Fragment>;
};
