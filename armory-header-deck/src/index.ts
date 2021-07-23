import { IDeckPlugin, overrideRegistrationQueue } from '@spinnaker/core';
import { ArmoryHeader } from './components/Header/ArmoryHeader';

export const plugin: IDeckPlugin = {
  initialize: () => {
    overrideRegistrationQueue.register(ArmoryHeader, 'armoryHeader');
  },
};
