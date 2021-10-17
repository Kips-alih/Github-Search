import { Component, OnInit } from '@angular/core';
import {User} from '../users/user';
import { SearchService} from '../services/searchService'; 

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user!: User;
  repositoryDetails:any= [];
  searchService: SearchService;

  constructor(searchGithubService: SearchService) {
    this.searchService = searchGithubService;
   }

  ngOnInit() {
    this.user = this.searchService.user;
    this.repositoryDetails = this.searchService.repositoryInfo;
  }

}
