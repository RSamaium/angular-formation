import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator } from '../shared/validators/domain.validator';

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
  propEmail: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass: FormControl = new FormControl()
  myform: FormGroup = this.builder.group({
    name: this.propEmail,
    password: this.propPass
  })
  submitted: boolean = false
  
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.propEmail.setValue('test')
    }, 2000)*/
  }

  login() {
    this.submitted = true
    console.log(this.myform.value)
  }
}
