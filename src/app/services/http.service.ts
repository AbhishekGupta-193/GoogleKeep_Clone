import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  getAllNotes(){
    console.log("http is working");
    const id=localStorage.getItem('id');
    return this.http.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=${id}`)
  }

  LoginAccess(email:string,password:string){
    console.log("API for login is working");
    // console.log("email : ",email);
    // console.log("password : ",password);
    return  this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/user/login', { email, password });
  }

  SignUp(signupData: any) : Observable<any>{
    console.log("API for Signup is working");
    return this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', signupData);
  }
}
