import {Component, OnInit, AfterViewInit, Output, EventEmitter} from "@angular/core";
declare var componentHandler:any;

@Component({
    moduleId: module.id,
    selector: 'ss-app-search-input-card',
    templateUrl: 'search-input-card.component.html',
    styleUrls: ['search-input-card.component.css']
})
export class SearchInputCardComponent implements OnInit,AfterViewInit {
    //bubbles the onClick up to the MainContentComponent
    @Output()
    submitCallback = new EventEmitter();

    searchTerm:string = '';
    searchQueryType:string = 'mock';

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }

    doSubmit() {
        this.submitCallback.emit({searchTerm: this.searchTerm, queryType: this.searchQueryType});
    }
}
