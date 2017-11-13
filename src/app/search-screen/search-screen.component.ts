import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchScreenComponent implements OnInit {
  searchString: string = '';
  userProfiles: Array<any>;

  constructor() { }

  search() {
    console.log(this.searchString);
  }

  ngOnInit() {
  }

}
