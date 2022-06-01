import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  students:string[]=["hamdi", "ghazi", "lilou", "bio"]
  constructor() { }

  getStudent():string[]{
    return this.students;
  }
}
