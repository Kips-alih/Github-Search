import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/searchService';
import { User } from '../users/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username!: string;
  user!: User;
  searchService: SearchService;
  

  submitForm() {
    this.searchService.getUser(this.username)
  }

  constructor(searchGithubService: SearchService) {
    this.searchService = searchGithubService;
  }

  ngOnInit() {
    this.user = this.searchService.user;
  }
}
