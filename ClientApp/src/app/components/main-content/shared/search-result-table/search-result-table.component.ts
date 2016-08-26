import {Component, OnInit, Input} from "@angular/core";
import {SearchResult} from "../../../../models/search-result.model";

@Component({
    moduleId: module.id,
    selector: 'ss-app-search-result-table',
    templateUrl: 'search-result-table.component.html',
    styleUrls: ['search-result-table.component.css']
})
export class SearchResultTableComponent implements OnInit {
    @Input()
    resultData:{[matchedTerm:string]:SearchResult};

    constructor() {
    }

    ngOnInit() {
        console.log(this.resultData);

    }


}
