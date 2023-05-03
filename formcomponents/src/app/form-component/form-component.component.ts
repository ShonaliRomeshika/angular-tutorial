import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  userLogin = {
    username: '',
    lastname: '',
    email: '',
    password: ''
  };

  submit() {
    console.log("Form Submitted", this.userLogin);
  }  
}
