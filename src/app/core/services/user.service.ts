import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { User } from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly url: string = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http: HttpClient) {}

    getAll(): Promise<User[]> {
        /*return new Promise((resolve, reject) => {
            this.http
            .get<User[]>(this.url)
            .subscribe({
                next(users: User[]) {
                    resolve(users)
                },
                error(err) {
                    reject(err)
                }
            })
        })*/
        return lastValueFrom(this.http.get<User[]>(this.url))
    }

    get(id: number): Observable<User> {
        return this.http.get<User>(this.url + '/' + id)
    }

    create(payload: { name: string, email: string }): Observable<User> {
        return this.http.post<User>(this.url, payload)
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(this.url + '/' + id)
    }
}