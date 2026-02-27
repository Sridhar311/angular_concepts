import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
    http=inject(HttpClient);
    onLogin:Subject<boolean>=new Subject<boolean>();
    
    getUsers(){
      return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
}
