import { createReducer, on } from '@ngrx/store';
import { setOffers, filterOffersByRole, toolsByRole } from 'src/app/api/actions';
import { Offer } from 'src/app/models/interfaces/Offers.interfaces';

export interface AppState {
  offers: Offer[] | [];
  filteredOffers: Offer[];
  tools: string[];
}

export const initialState: AppState = {
  offers: [],
  filteredOffers: [],
  tools: [],
};

const _offersReducer = createReducer(initialState,
    on(setOffers, (state: any, action: any) => {
        console.log('data', action)
        return {...state, offers: action.payload, filteredOffers: action.payload}
    }),
    on(filterOffersByRole, (state: any, action: any) => {
        return {...state, filteredOffers: action.payload}
    }),
    on(toolsByRole, (state: any, action: any) => {
        return {...state, tools: action.payload}
    })
    // (builder: any) => {
    //     builder.addCase(setOffers, (state: any, action: any) => {
    //         console.log(state);
    //         return {...state, offers: action.payload};
    //     })
    // }
);

export function appReducer(state: any, action: any) {
    return _offersReducer(state, action);
}