import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonText, IonInput } from '@ionic/angular/standalone';
import { person} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { environment } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonInput, IonText, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {
  username!: string;
  lastName!: string;
  name!: string;
  constructor() {
    this.username = environment.username;
    this.lastName = environment.lastName;
    this.name = environment.name;
    addIcons({ person });
  }

  ngOnInit() {
  }

}
