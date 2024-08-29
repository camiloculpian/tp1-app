import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonRouterOutlet, IonItem, IonMenuToggle, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home , person, exit} from 'ionicons/icons';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  standalone: true,
  imports: [NgFor, IonIcon, RouterLink, IonItem, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonMenuToggle, IonLabel],
})
export class MainContentComponent{
  public activeTitle: string='Home';

  public appPages = [
    { title: 'Home', url: '/main/home', icon: 'home' },
    { title: 'Perfil', url: '/main/profile', icon: 'person' },
  ];
  public labels = [];
  constructor(private router: Router) {
    addIcons({ home, person, exit });
  }

  changeTitle(title:string){
    this.activeTitle = title;
    console.log(this.activeTitle);
  }

}


