import {Component, OnInit} from "@angular/core";
import {Store, select} from "@ngrx/store";
import {Observable, first} from "rxjs";
/** Local Modules */
import {AppState} from "src/app/models/reducers";

import {HomeService} from "src/app/controllers/services/home.service";
/** Interfaces & Types */
import type {Offer} from "src/app/models/interfaces/Offers.interfaces";
import {setOffers} from "src/app/api/actions";
import {
    selectFilteredOffers,
    selectOffers,
    selectTools,
} from "src/app/models/selectors";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    public offers$: Observable<Offer[]> = this.store.pipe(select(selectOffers));
    filteredOffers$: Observable<Offer[]> = this.store.pipe(
        select(selectFilteredOffers),
    );
    tools$: Observable<any> = this.store.pipe(select(selectTools));

    constructor(
        private homeService: HomeService,
        private store: Store<{app: AppState}>,
    ) {
        this.findItem = this.findItem.bind(this);
        this.deleteTool = this.deleteTool.bind(this);
    }

    ngOnInit(): void {
        this.getOffers();
        console.log(this.offers$);
    }

    public getOffers() {
        this.homeService.getOffers().subscribe((offers: Array<Offer>) => {
            this.store.dispatch({type: "[Offers] Set Offers", payload: offers});
        });
    }

    public findItem(item: string, index: number) {
        let offers: any = null;
        this.filteredOffers$.subscribe((res) => {offers = res;});

        let tools: any = null;
        this.tools$.subscribe((res) => {tools = res;});
        if (index === 0) {
            const existsTool = tools.find((tool: any) => item === tool.item);
            offers = offers.filter((offer: any) => offer.role === item);
            tools = existsTool ? tools : [...tools, {item, type: "role"}];

            this.store.dispatch({
                type: "[Offers] Filter Offers By Role",
                payload: offers,
            });
            if(!existsTool) {
                this.store.dispatch({
                    type: "[Offers] Set Tool",
                    payload: tools,
                });
            }
        } else if (index === 1) {
            const existsTool = tools.find((tool: any) => item === tool.item);
            tools = existsTool ? tools : [...tools, {item, type: "level"}];
            offers = offers.filter((offer: any) => offer.level === item);

            this.store.dispatch({
                type: "[Offers] Filter Offers By Role",
                payload: offers,
            });
            if(!existsTool) {
                this.store.dispatch({
                    type: "[Offers] Set Tool",
                    payload: tools,
                });
            }
        } else {
            const existsLanguages = offers.filter((offer: any) => {
                let language = offer.languages.find(
                    (lang: any) => lang === item,
                );
                if (language) {
                    return offer;
                } else {
                    return false;
                }
            });

            if (!existsLanguages || existsLanguages.length === 0) {
                const existsTools = offers.filter((offer: any) => {
                    let offerTool = offer.tools.find(
                        (tool: any) => tool === item,
                    );
                    if (offerTool) {
                        return offer;
                    } else {
                        return false;
                    }
                });

                if (existsTools || existsTools.length > 0) {
                    const existsTool = tools.find((tool: any) => item === tool.item);
                    tools = existsTool ? tools : [...tools, {item, type: "tools"}];
                    this.store.dispatch({
                        type: "[Offers] Filter Offers By Role",
                        payload: existsTools,
                    });
                    if(!existsTool) {
                        this.store.dispatch({
                            type: "[Offers] Set Tool",
                            payload: tools,
                        });
                    }
                }
            } else {
                const existsTool = tools.find((tool: any) => item === tool.item);
                tools = existsTool ? tools : [...tools, {item, type: "languages"}];
                this.store.dispatch({
                    type: "[Offers] Filter Offers By Role",
                    payload: existsLanguages,
                });
                if(!existsTool) {
                    this.store.dispatch({
                        type: "[Offers] Set Tool",
                        payload: tools,
                    });
                }
            }
        }
    }

    public async deleteTool(index: number) {
        let offers: any = null;
        this.offers$.subscribe((res) => {offers = res});

        let tools: any = null;
        this.tools$.subscribe((res) => {tools = res});

        tools = tools.filter((item: any, ind: any) => {
            if(ind !== index) {
                return item;
            }
        })

        this.store.dispatch({
            type: "[Offers] Set Tool",
            payload: tools,
        });

        let newArray: any = [];

        for(let i = 0; i < tools.length; i++) {
            offers.map((item: any) => {
                if(tools[i].type === "role" && item.role === tools[i].item) {
                    newArray.push(item);
                } else if(tools[i].type === "level" && item.role === tools[i].item) {
                    newArray.push(item);
                } else if (tools[i].type === "languages") {
                    let itemOffers = item.languages.find((itemOffer: any) => itemOffer === tools[i].item);

                    if(itemOffers) {
                        newArray.push(item);
                    }
                } else {
                    let itemOffers = item.tools.find((itemOffer: any) => itemOffer === tools[i].item);

                    if(itemOffers) {
                        newArray.push(item);
                    }
                }
            })
        }

        if(newArray.length > 0) {
            this.store.dispatch({
                type: "[Offers] Filter Offers By Role",
                payload: newArray,
            });
        } else {
            this.store.dispatch({
                type: "[Offers] Filter Offers By Role",
                payload: offers,
            });
        }
    }

    public clear() {
        let offers: any = null;
        this.offers$.subscribe((res) => {offers = res});

        this.store.dispatch({
            type: "[Offers] Set Tool",
            payload: [],
        });

        this.store.dispatch({
            type: "[Offers] Filter Offers By Role",
            payload: offers,
        });
    }
}
