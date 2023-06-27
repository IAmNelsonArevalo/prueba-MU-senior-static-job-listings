import {createAction, props} from "@ngrx/store";
import { Offer } from "src/app/models/interfaces/Offers.interfaces";

export const setOffers = createAction('[Offers] Set Offers', props<{ offers: Offer[] }>());
export const filterOffersByRole = createAction('[Offers] Filter Offers By Role', props<{ offers: Offer[] }>());
export const toolsByRole = createAction('[Offers] Set Tool', props<{ tool: Offer[] }>());