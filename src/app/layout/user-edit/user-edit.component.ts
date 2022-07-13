import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = {} as User
  propName: FormControl = new FormControl()
  form: FormGroup = this.builder.group({
    name: this.propName,
    username: '',
    email: ''
  })

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramsUrl: any) =>{
       const id = paramsUrl.id
       this.userService.get(id).subscribe((user: User) => {
         this.user = user
         this.form.patchValue(this.user)
       })
    })
  }

  edit() {
    this.userService
      .update(this.user.id, this.form.value)
      .subscribe((userModified: User) => {
        this.user = userModified
      })
  }

}
