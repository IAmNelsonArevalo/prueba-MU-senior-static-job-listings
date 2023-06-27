import {createAction, props} from "@ngrx/store";
import { Offer } from "src/app/models/interfaces/Offers.interfaces";

/**
 * Action creator function for setting the offers in the state.
 * @param offers The array of offers to be set.
 * @returns An action object with the offers payload.
 */
export const setOffers = createAction('[Offers] Set Offers', props<{ offers: Offer[] }>());

/**
 * Action creator function for filtering the offers by role.
 * @param offers The array of filtered offers.
 * @returns An action object with the filtered offers payload.
 */
export const filterOffersByRole = createAction('[Offers] Filter Offers By Role', props<{ offers: Offer[] }>());

/**
 * Action creator function for setting the tools in the state.
 * @param tool The tool object containing the item and type.
 * @returns An action object with the tool payload.
 */
export const toolsByRole = createAction('[Offers] Set Tool', props<{ tool: {item: string, type: string}[] }>());