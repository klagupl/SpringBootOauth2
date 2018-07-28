import { AuthService } from './../auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from 'node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  user={
    username:'',
    password:''
  }
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.user.username=this.signupForm.value.username;
    this.user.password=this.signupForm.value.password;

    this.authService.obtainAccessToken(this.user);

  }
}
