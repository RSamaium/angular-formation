import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  propEmail: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  login(myform: NgForm) {
    console.log(myform.value)
  }

}
