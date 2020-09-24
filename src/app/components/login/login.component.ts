import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup ({
    name: new FormControl('', [Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  })
  
  onSubmit() {
    console.warn(this.profileForm.value);
    const getUsers: any [] = JSON.parse(localStorage.getItem('users'));
    for (let el of getUsers) {
      console.log(el , "el")
        if (this.profileForm.value.name === el.name || this.profileForm.value.name === el.email) {
            if (this.profileForm.value.password === el.password) {
                alert ('WELCOME');
                break;
            } else {
                alert('Incorrect password');
                break;
            }
        }      
        
    }
    alert('No such user');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
