import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonRouterOutlet, IonItem, IonMenuToggle, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home , person, exit} from 'ionicons/icons';
import { environment } from 'src/app/app.component';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  standalone: true,
  imports: [NgFor, IonIcon, RouterLink, IonItem, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonMenuToggle, IonLabel],
})
export class MainContentComponent{
  public activeTitle!: string;

  public appPages = [
    { title: 'Home', url: '/main/home', icon: 'home' },
    { title: 'Perfil', url: '/main/profile', icon: 'person' },
  ];
  public labels = [];
  constructor(public router: Router, private authService: AuthenticationService) {
    addIcons({ home, person, exit });
  }

  logOut(){
    this.authService.logOut();
    console.log('is LoggedIn?: '+environment.loggedIn)
    this.router.navigate(['']);
  }

}


