﻿import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {User, Group} from '@app/_models';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public getAllUsersInMyGroups() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/in-my-groups`);
  }

  public getAllGroups() : Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/groups`);
  }

  public getMyGroups() : Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/groups/my-groups`);
  }
}
