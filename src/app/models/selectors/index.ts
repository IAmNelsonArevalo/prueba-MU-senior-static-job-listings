import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/models/reducers';
import { Offer } from '../interfaces/Offers.interfaces';

const selectOffersState = createFeatureSelector('offers')

// Selector para obtener la propiedad offers del estado
export const selectOffers = createSelector(
  (state: {app: AppState}) => state.app.offers,
  (offers: Array<Offer>) => offers
);

export const selectFilteredOffers = createSelector(
    (state: {app: AppState}) => state.app.filteredOffers,
    (filteredOffers: Array<Offer>) => filteredOffers
  );

  export const selectTools = createSelector(
    (state: {app: AppState}) => state.app.tools,
    (tools: Array<string>) => tools
  );