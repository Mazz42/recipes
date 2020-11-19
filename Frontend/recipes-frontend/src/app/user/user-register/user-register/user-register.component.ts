import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      confirmPassword: new FormControl(null, [Validators.required])
    }, this.passwordValidator);
  }

  passwordValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

}
