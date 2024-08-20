import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private formbuilder: FormBuilder, private http: HttpService, private router: Router) {
    this.loginForm = formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  };

  submitForm() {
    if (this.loginForm.valid) {
      this.email = this.loginForm.get('email')?.value;
      this.password = this.loginForm.get('password')?.value;

      // Calling LoginAccess() with email and password
      this.http.LoginAccess(this.email, this.password).subscribe({
        next: (res: any) => {
          //Set Id on LocalStorage so that we can use it again for fetching the corresponding user Notes
          const id = res.id;
          localStorage.setItem('id', id);

          // Navigating to the dashboard on successful login
          this.router.navigate(['/dash'])
        },
        error: (err: string) => {
          console.log("Failed");
          console.log(err);
        }
      })
    }
    else {
      console.log("loginForm is not valid")
    }
  }





  // isPasswordPage:boolean=false;
  // nextFunc():void{
  //   this.isPasswordPage=true;
  // }

  openNewAccount(e: Event) {
    e.preventDefault();
    //@ts-ignore
    document.getElementById('newcard').style.display = 'block';
  }

}
