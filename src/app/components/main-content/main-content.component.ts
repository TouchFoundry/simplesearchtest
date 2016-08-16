import {Component, OnInit} from "@angular/core";
import {WelcomeCardComponent, SearchInputCardComponent} from "./shared/index";

@Component({
    moduleId: module.id,
    selector: 'ss-app-main-content',
    templateUrl: 'main-content.component.html',
    styleUrls: ['main-content.component.css'],
    directives: [WelcomeCardComponent, SearchInputCardComponent]
})
export class MainContentComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
