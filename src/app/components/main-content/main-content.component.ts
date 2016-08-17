import {Component, OnInit} from "@angular/core";
import {WelcomeCardComponent, SearchInputCardComponent} from "./shared/index";
import {ApiDataService} from "../../services/api-data.service";
import {SearchResult} from "../../models/search-result.model";
import {SearchResultTableComponent} from "./shared/search-result-table/search-result-table.component";

@Component({
    moduleId: module.id,
    selector: 'ss-app-main-content',
    templateUrl: 'main-content.component.html',
    styleUrls: ['main-content.component.css'],
    directives: [WelcomeCardComponent, SearchInputCardComponent, SearchResultTableComponent]
})
export class MainContentComponent implements OnInit {
    searchResults:SearchResult[] = null;

    constructor(private apiDataService:ApiDataService) {
    }

    ngOnInit() {
    }

    performSearchQuery(query:{searchTerm:string, queryType:string}) {
        this.searchResults = null;

        this.apiDataService.performSearchRequest(query.searchTerm, query.queryType).then(resultObject => {
            this.searchResults = resultObject;
            console.log(this.searchResults);
        }, error => {
            console.log(error);
            if (error == "To be completed!")
                alert("Error, not yet wired up!");
            else
                alert(error);

            //do something about this error
        });
    }

}
