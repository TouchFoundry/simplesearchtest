import {Component, OnInit, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'ss-app-search-input-card',
  templateUrl: 'search-input-card.component.html',
  styleUrls: ['search-input-card.component.css']
})
export class SearchInputCardComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    componentHandler.upgradeAllRegistered();
  }

}
