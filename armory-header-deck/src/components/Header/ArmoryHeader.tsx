import { useCurrentStateAndParams, useSrefActive } from '@uirouter/react';
import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';

import {
  CollapsibleSectionStateCache,
  GlobalSearch,
  HelpMenu,
  NgReact,
  OverrideRegistry,
  SETTINGS,
  verticalNavExpandedAtom,
} from '@spinnaker/core';
import { Icon } from '@spinnaker/presentation';

import { Banner } from '../Banner/Banner';

import './ArmoryHeader.css';

export const ArmoryHeaderContent = () => {
  const { state: currentState } = useCurrentStateAndParams();
  const isApplicationView =
    currentState.name.includes('project.application.') || currentState.name.includes('applications.application.');

  const [verticalNavExpanded, setVerticalNavExpanded] = useRecoilState(verticalNavExpandedAtom);
  const toggleNav = () => {
    setVerticalNavExpanded(!verticalNavExpanded);
    CollapsibleSectionStateCache.setExpanded('verticalNav', !verticalNavExpanded);
  };

  const isDevicePhoneOrSmaller = () => {
    const bodyStyles = window.getComputedStyle(document.body);
    const isPhone = bodyStyles.getPropertyValue('--is-phone');
    return isPhone.toLowerCase() === 'true';
  };
  const [navExpanded] = React.useState(!isDevicePhoneOrSmaller());

  const { UserMenu } = NgReact;
  const searchSref = useSrefActive('home.infrastructure', null, 'active');
  const projectsSref = useSrefActive('home.projects', null, 'active');
  const appsSref = useSrefActive('home.applications', null, 'active');
  const templatesSref = useSrefActive('home.pipeline-templates', null, 'active');
  const dinghyEventsSref = useSrefActive('home.dinghy-events', null, 'active');

  const mptv2Button = (
    <li key="navPipelineTemplates">
      <a {...templatesSref}>Pipeline Templates</a>
    </li>
  );

  const dinghyEventsButton = (
    <li key="navDinghyEvents">
      <a {...dinghyEventsSref}>Dinghy Events</a>
    </li>
  );

  return (
    <Fragment>
      <nav className="container spinnaker-header" role="navigation" aria-label="Main Menu">
        <div className="navbar-header horizontal middle">
          <div onClick={toggleNav} className="sp-margin-xl-right navbar-menu-icon">
            {isApplicationView && (
              <Icon name={verticalNavExpanded ? 'menuClose' : 'menu'} size="medium" color="white" />
            )}
          </div>
          <a className="navbar-brand flex-1" href="#">
            SPINNAKER test
          </a>
        </div>
        {navExpanded && (
          <div className="nav-container nav-items">
            <ul className="nav nav-items flex-1 page-nav">
              <li key="navHome">
                <a {...searchSref}>Search</a>
              </li>
              <li key="navProjects">
                <a {...projectsSref}>Projects</a>
              </li>
              <li key="navApplications">
                <a {...appsSref}>Applications</a>
              </li>
              {SETTINGS.feature.managedPipelineTemplatesV2UI ? mptv2Button : null}
              {SETTINGS.feature.dinghyEvents ? dinghyEventsButton : null}
            </ul>
            <ul className="nav nav-items">
              <UserMenu />
              <GlobalSearch />
              <HelpMenu />
            </ul>
          </div>
        )}
      </nav>
      <Banner />
    </Fragment>
  );
};

export class ArmoryHeader extends React.Component<{}, {}> {
  public render(): React.ReactElement<ArmoryHeader> {
    return <ArmoryHeaderContent />;
  }
}
