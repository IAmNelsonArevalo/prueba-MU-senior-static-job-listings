import {createSelector, createFeatureSelector} from "@ngrx/store";
import {AppState} from "src/app/models/reducers";
import {Offer} from "../interfaces/Offers.interfaces";

/**
 * Selects the offers from the app state.
 * @param state The app state containing the offers.
 * @returns The array of offers.
 */
export const selectOffers = createSelector(
    (state: {app: AppState}) => state.app.offers,
    (offers: Array<Offer>) => offers,
);

/**
 * Selects the filtered offers from the app state.
 * @param state The app state containing the filtered offers.
 * @returns The array of filtered offers.
 */
export const selectFilteredOffers = createSelector(
    (state: {app: AppState}) => state.app.filteredOffers,
    (filteredOffers: Array<Offer>) => filteredOffers,
);

/**
 * Selects the tools from the app state.
 * @param state The app state containing the tools.
 * @returns The array of tools.
 */
export const selectTools = createSelector(
    (state: {app: AppState}) => state.app.tools,
    (tools: Array<string>) => tools,
);
