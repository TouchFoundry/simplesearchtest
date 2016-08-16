import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ss-app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "SimpleSearch Test Application";


  constructor() { }

  ngOnInit() {
  }

}
