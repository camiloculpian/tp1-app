import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {addIcons} from "ionicons";
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonText, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  showPassword = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
  ) { 
      addIcons({ eyeOutline, eyeOffOutline, });

      this.loginForm  = formBuilder.group({
        email: ['test@dominio.com', [Validators.required, Validators.email]],
        password: ['test', [Validators.required, Validators.minLength(4)]],
      });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  navigateToRegister() {
    console.log('navigateToRegister()');
    this.router.navigate(['register']);
  }

}
