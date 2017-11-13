import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { githubSearchService } from "../github-search.service";

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchScreenComponent implements OnInit {
  searchString: string = '';
  userProfiles: Array<any>;

  constructor(private service: githubSearchService) { }

  search() {
    this.service.getUser(this.searchString)
      .subscribe(response => {
        this.userProfiles = [];
        this.userProfiles.push(response);
      });
  }

  ngOnInit() {
  }

}
