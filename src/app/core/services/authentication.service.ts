import { Injectable } from '@angular/core';
import { environment } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(credentials: { email: any; password: any }): boolean {
    if(credentials.email=='test@dominio.com' && credentials.password == 'test'){
      environment.loggedIn=true;
      return true;
    }else{
      return false;
    }
    
  }

}
