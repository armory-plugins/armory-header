import { AuthenticationService } from '@spinnaker/core';

import { getFeatureSpecificContent } from './API';

declare const ChurnZero: any;

const REACT_APP_CHURN_ZERO_APP_KEY = '1!td5981gTU-miSiqY-JAL5pQPa8IgF4xieIl68AmtsYkt7CB';

const addChurnZeroScript = () => {
  const script = document.createElement('script');
  const scriptContent = `
    var ChurnZero = ChurnZero || [];
    (function() {
        var cz = document.createElement('script'); cz.type = 'text/javascript';
        cz.async = true;
        cz.src = 'https://analytics.churnzero.net/churnzero.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cz, s);
    })();
  `;
  script.type = 'text/javascript';
  script.text = scriptContent;
  document.getElementsByTagName('head')[0].appendChild(script);

  return new Promise<void>((resolve, reject) => {
    if (ChurnZero) {
      resolve();
    } else {
      reject();
    }
  });
};

const initializeChurnZero = (contactExternalId: string) => {
  if (ChurnZero) {
    getFeatureSpecificContent('churnZero').then((response) => {
      ChurnZero.push(['setAppKey', response.appKey]);
      ChurnZero.push(['setContact', response.accountExternalId, contactExternalId]);
    });
  }
};

export { addChurnZeroScript, initializeChurnZero };
