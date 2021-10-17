import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { Repository } from '../repository/repository'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  user: User;
  repository: Repository;
  repositoryInfo:any = [];
  newUser: any = [];

  constructor(private http: HttpClient) {
    this.user = new User(0, "", "", new Date, "");
    this.repository = new Repository("", "", "", new Date)
  }

  getUser(username: string) {

    this.repositoryInfo.length = 0;

    interface ApiResponse {
      login: string,
      public_repos: number,
      avatar_url: string,
      created_at: Date,
      html_url: string,
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + username).toPromise().then(response => {
        this.user.login = response.login;
        this.user.public_repos = response.public_repos;
        this.user.avatar_url = response.avatar_url;
        this.user.created_at = response.created_at;
        this.user.html_url = response.html_url;

        resolve();
      },
        error => {
          reject();
        })
      this.http.get<any>(environment.apiUrl + username + "/repos").toPromise().then(response => {
        for (let i = 0; i < response.length; i++) {
          this.newUser = new Repository(response[i].name, response[i].description, response[i].html_url, response[i].created_at);
          this.repositoryInfo.push(this.newUser);
        }
        resolve();
      },
        error => {
          reject();
        })
    })
    return promise;
  }
}
