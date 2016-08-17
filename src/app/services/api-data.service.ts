import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Config} from "../config";
import {SearchResult} from "../models/search-result.model";
import {MockSearchData} from "../mock/mock-search-results";

@Injectable()
export class ApiDataService {

    constructor(private http:Http) {
    }

    public performSearchRequest(searchTerm:string, queryType:string):Promise<SearchResult[]> {
        return new Promise<SearchResult[]>((resolve, reject) => {
            let url = Config.apiBaseUrl + Config.searchApi;
            url += "?s=" + searchTerm;

            console.log("Your query to be: " + url);

            if (queryType == 'mock') {
                //for now, fetching mock data! Not filtered by search query as that would be giving it away ;)
                resolve(MockSearchData);
            } else {
                //use reject(error) to return an error back
                reject("To be completed!");
            }
        });
    }
}
