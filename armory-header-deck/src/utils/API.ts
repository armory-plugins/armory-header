import { REST } from '@spinnaker/core';

const URL = '/armory/messaging/api/v1';

const getMessagingContent = () => {
  return REST(`${URL}/poll`)
    .get()
    .then((response) => response)
    .catch((error) => error);
};

const getFeatureSpecificContent = (feature: string) => {
  return REST(`${URL}/feature-specific`)
    .get()
    .then((response) => response[feature])
    .catch((error) => error);
};

export { getMessagingContent, getFeatureSpecificContent };
