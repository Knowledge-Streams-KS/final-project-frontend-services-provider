// src/redux/selectors/serviceSelectors.js
import { createSelector } from 'reselect';

const homeServiceSelector = (state) => state.homeService || {};
const cleaningServiceSelector = (state) => state.cleaningService || {};
const personalServiceSelector = (state) => state.personalService || {};
const solarServiceSelector = (state) => state.solarService || {};
const homeInspectionSelector = (state) => state.homeInspection || {};

export const getHomeServices = createSelector(
  [homeServiceSelector],
  (homeService) => homeService.services || []
);

export const getCleaningServices = createSelector(
  [cleaningServiceSelector],
  (cleaningService) => cleaningService.services || []
);

export const getPersonalServices = createSelector(
  [personalServiceSelector],
  (personalService) => personalService.services || []
);

export const getSolarServices = createSelector(
  [solarServiceSelector],
  (solarService) => solarService.services || []
);

export const getHomeInspections = createSelector(
  [homeInspectionSelector],
  (homeInspection) => homeInspection.services || []
);
