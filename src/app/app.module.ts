import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./views/screens/home/home.component";
import {CardOfferDesktopComponent} from "./views/components/card-offer-desktop/card-offer-desktop.component";
import { appReducer } from "./models/reducers";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardOfferDesktopComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({app: appReducer}),
        StoreDevtoolsModule.instrument()
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
