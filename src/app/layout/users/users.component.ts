import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/core/interfaces/user";
import { UserService } from "src/app/core/services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    nbSelected: number = 0
    extSelected: string = ''
    extensions: string[] = ['tv', 'biz', 'io', 'me']
    users: User[] = []

    constructor(private userService: UserService) {}

    async ngOnInit() {
      /*this.userService.getAll().then((users: User[]) => {
         this.users = users
      })*/
      this.users = await this.userService.getAll()
    }

    createUser(form: NgForm) {
      if (form.invalid) {
        return
      }
      this.userService.create(form.value).subscribe((userCreated: User) => {
        this.users.push(userCreated)
      })
    }

    deleteUser(id: number) {
      // const index = this.users.findIndex(user => user.id == id)
      // this.users.splice(index, 1)
      this.users = this.users.filter(user => user.id != id)
      //this.users = [].concat(this.users)
      //this.users = [...this.users]
    }
}