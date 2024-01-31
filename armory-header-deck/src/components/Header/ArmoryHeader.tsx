import { useCurrentStateAndParams, useSrefActive } from '@uirouter/react';
import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

import {
  AuthenticationService,
  CollapsibleSectionStateCache,
  GlobalSearch,
  HelpMenu,
  SETTINGS,
  UserMenu,
} from '@spinnaker/core';
import { Icon } from '@spinnaker/presentation';

import { AtipoGlobalBanner } from '../AtipoBanner/AtipoGlobalBanner';
import { BannerGroup } from '../Banner/BannerGroup';
import { QuickSpinBanner } from '../QuickSpinBanner/QuickSpinBanner';

import './ArmoryHeader.css';

export const ArmoryHeader = () => {
  const { state: currentState } = useCurrentStateAndParams();
  const isApplicationView =
    currentState.name.includes('project.application.') || currentState.name.includes('applications.application.');

  const [verticalNavExpanded, setVerticalNavExpanded] = useState<boolean>(
    !CollapsibleSectionStateCache.isSet('verticalNav') || CollapsibleSectionStateCache.isExpanded('verticalNav'),
  );
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
            SPINNAKER
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
              {SETTINGS.feature.managedPipelineTemplatesV2UI && mptv2Button}
              {SETTINGS.feature.dinghyEvents && dinghyEventsButton}
            </ul>
            <ul className="nav nav-items">
              <UserMenu />
              <GlobalSearch />
              <HelpMenu />
            </ul>
          </div>
        )}
      </nav>
      {<QuickSpinBanner />}
      {!SETTINGS.feature.quickSpinEnabled && !SETTINGS.feature.atipoGlobalBanner && <BannerGroup />}
      {<AtipoGlobalBanner />}
    </Fragment>
  );
};
