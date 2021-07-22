import { REST } from '@spinnaker/core';

const ENDPOINT = '/armory/messaging/api/v1/poll';

const getMessagingContent = () => {
  return REST(ENDPOINT)
    .get()
    .then((response) => response)
    .catch((error) => error);
};

export { getMessagingContent };
