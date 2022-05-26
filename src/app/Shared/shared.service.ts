import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  username = "suresh";
  password = "123";
  usernameChild = "chanikya";
  passwordChild = "123456";
  constructor() { }
}
