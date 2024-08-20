import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  currentStepIndex = 0;

  signupForm: FormGroup;
  firstName: string = '';
  lastName: string = '';
  service: string = '';
  email: string = '';
  password: string = '';


  constructor(private location: Location, private formbuilder: FormBuilder, private http: HttpService) {
    this.signupForm = formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      service: ['', Validators.required],
    })
  }

  submitForm() {
    if (this.signupForm.valid) {
      let signupdata = this.signupForm.value

      // Calling SignUp() from services with required headers
      this.http.SignUp(signupdata).subscribe(response => {
        console.log("Success");
        console.log(response);
      })
    }
    else {
      console.log("signupForm is not valid")
    }
  }


  steps = [
    {
      left_title2: 'Create a Google Account',
      left_title3: 'Enter your name',
      inputs: [
        {
          label: 'First name',
          type: 'text',
          placeholder: 'First name',
          value: '',
          parameter: 'firstName'
        },
        {
          label: 'Last name',
          type: 'text',
          placeholder: 'Last name (optional)',
          value: '',
          parameter: 'lastName'
        }
      ],
      hint: '',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button: ''
    },
    {
      left_title2: 'Basic information',
      left_title3: 'Enter your birthday and gender',
      inputs: [
        {
          label: 'DOB',
          type: 'text',
          placeholder: 'Enter your DOB',
          value: '',
          parameter: 'service'
        }
      ],
      hint: 'Why we ask for birthday and gender',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button: ''
    },
    {
      left_title2: `How you'll sign in`,
      left_title3: 'Enter your birthday and gender',
      inputs: [
        {
          label: 'Email',
          type: 'email',
          placeholder: 'Choose a username',
          value: '',
          parameter: 'email'
        }
      ],
      hint: 'You can use letters,numbers & periods',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button: ''
    },
    {
      left_title2: `Create a strong password`,
      left_title3: 'Create a strong password with a mix of letters,numbers and symbols',
      inputs: [
        {
          label: 'Password',
          type: 'password',
          placeholder: 'Create a password',
          value: '',
          parameter: 'password'
        }
      ],

      hint: 'Show passowrd',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button: 'Submit'
    }
  ];

  goToNextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }


  openNewAccount(e: Event) {
    e.preventDefault();
    //@ts-ignore
    document.getElementById('newcard').style.display = 'block';
  }

  goBack() {
    this.currentStepIndex--;
    if (this.currentStepIndex < 0) alert("Thamm Jaao Bhai ,piche kuch nahi hai");
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.goBack();
  }

}
