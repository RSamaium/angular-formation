import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    `
  ],
  // styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  propEmail: string = ''
  css: string = 'red'

  constructor() { }

  ngOnInit(): void {
  }

  login(myform: NgForm) {
    console.log(myform.value)
  }

}
