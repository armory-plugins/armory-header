import { IDeckPlugin, overrideRegistrationQueue } from '@spinnaker/core';
import { ArmoryHeader } from './header/ArmoryHeader';

export const plugin: IDeckPlugin = {
  initialize: () => {
    overrideRegistrationQueue.register(ArmoryHeader, 'spinnakerHeader');
  },
};
