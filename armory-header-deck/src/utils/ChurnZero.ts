import { getFeatureSpecificContent } from './API';

declare const ChurnZero: any;

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

  return new Promise((resolve, reject) => {
    if (ChurnZero) {
      resolve({ status: 'Success' });
    } else {
      reject({ status: 'Error' });
    }
  });
};

const initializeChurnZero = (contactExternalId: string) => {
  getFeatureSpecificContent('churnZero').then((response) => {
    if (ChurnZero && response) {
      ChurnZero.push(['setAppKey', response.appKey]);
      ChurnZero.push(['setContact', response.accountExternalId, contactExternalId]);
    }
  });
};

export { addChurnZeroScript, initializeChurnZero };
