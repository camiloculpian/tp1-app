import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonText, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  formGroup! :FormGroup ;
  credentials!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['test@domain.com', [Validators.required, Validators.email]],
      password: ['test', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  navigateToRegister() {
    console.log('navigateToRegister()');
    this.router.navigate(['register']);
  }

}
