import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonRouterOutlet, IonItem, IonMenuToggle, IonIcon, IonLabel, IonItemDivider } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home , person, exit} from 'ionicons/icons';
import { environment } from 'src/app/app.component';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  standalone: true,
  imports: [IonItemDivider, NgFor, IonIcon, RouterLink, IonItem, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonMenuToggle, IonLabel],
})
export class MainContentComponent{
  public activeTitle!: string;

  public appPages = [
    { title: 'Home', url: '/main/home', icon: 'home' },
    { title: 'Perfil', url: '/main/profile', icon: 'person' },
  ];
  public labels = [];
  constructor(public router: Router, private authService: AuthenticationService, public readonly route: ActivatedRoute) {
    this.route.title.subscribe(() => {
      console.log(this.route?.root?.firstChild?.snapshot.data)
    });
    addIcons({ home, person, exit });
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['login']);
  }

}


