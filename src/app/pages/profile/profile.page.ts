import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonText, IonInput, IonLabel, IonItem, IonAvatar } from '@ionic/angular/standalone';
import { person} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { environment } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonItem, IonLabel, IonInput, IonText, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage implements OnInit {
  // email!: string;
  // lastName!: string;
  // name!: string;
  public userDataForm!: FormGroup;
  constructor(public formBuilder: FormBuilder,) {
    // this.email = environment.username;
    // this.lastName = environment.lastName;
    // this.name = environment.name;
    addIcons({ person });
  }

  ngOnInit() {
    this.userDataForm  = this.formBuilder.group({
      email: [environment.username, [Validators.required, Validators.email]],
      lastName: [environment.lastName, [Validators.required, Validators.email]],
      name: [environment.name, [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.userDataForm.get('email');
  }

  get lastName() {
    return this.userDataForm.get('lastName');
  }

  get name() {
    return this.userDataForm.get('name');
  }
}
