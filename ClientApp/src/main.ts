import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent, environment} from "./app/";
import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from "@angular/http";
import {ApiDataService} from "./app/services/api-data.service";

if (environment.production) {
    enableProdMode();
}

class MyOptions extends BaseRequestOptions {
    dev:string = 'coreTeam=true';
}


bootstrap(AppComponent, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}, ApiDataService]);
