import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(6), Validators.required]),
    email: new FormControl('', [Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
  })

  constructor(private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    if (this.profileForm.value.password !== this.profileForm.value.confirmPassword) {
      alert('incorrectly added password');
    } else {
      let getUsers: any = JSON.parse(localStorage.getItem('users'));
      let newUsers: object[] = getUsers ? getUsers : [];
      console.log(newUsers);
      newUsers.push(this.profileForm.value);
      console.log(newUsers);
      localStorage.setItem(`users`, JSON.stringify(newUsers));
      this.router.navigate(['../login']);
    }
  }

  ngOnInit(): void {
  }

}
