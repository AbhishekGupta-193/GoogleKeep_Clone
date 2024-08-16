import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentStepIndex = 0;
  constructor(private location: Location) {}
  steps = [
    {
      left_title2: 'Sign in',
      left_title3: 'Use your Google Account',
      inputs: [
        {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
          value: '',
        }
      ],
      hint: 'Forgot email?',
      contents: [
        { content1: 'Not your computer? Use Guest mode to sign in privately.' },
        { content2: 'Learn more about using Guest mode' }
      ],
      button:'Create account'
    },
    {
      left_title2: 'Create a Google Account',
      left_title3: 'Enter your name',
      inputs: [
        {
          label: 'First name',
          type: 'text',
          placeholder: 'First name',
          value: ''
        },
        {
          label: 'Last name',
          type: 'text',
          placeholder: 'Last name (optional)',
          value: ''
        }
      ],
      hint: '',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button:''
    },
    {
      left_title2: 'Basic information',
      left_title3: 'Enter your birthday and gender',
      inputs: [
        {
          label: 'DOB',
          type: 'date',
          placeholder: 'Enter your DOB',
          value: '',
        },
        {
          label: 'Gender',
          type: 'text',
          placeholder: 'Gender',
          value: '',
        }
      ],
      hint: 'Why we ask for birthday and gender',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button:''
    },
    {
      left_title2: `How you'll sign in`,
      left_title3: 'Enter your birthday and gender',
      inputs: [
        {
          label: 'Username',
          type: 'text',
          placeholder: 'Choose a username',
          value: '',
        }
      ],
      hint: 'You can use letters,numbers & periods',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button:''
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
        },
        {
          label: 'Confirm',
          type: 'password',
          placeholder: 'Confirm',
          value: '',
        }
      ],

      hint: 'Show passowrd',
      contents: [
        { content1: '' },
        { content2: '' }
      ],
      button:''
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
    if(this.currentStepIndex<0)alert("Thamm Jaao Bhai ,piche kuch nahi hai");
  }


@HostListener('document:keydown.escape', ['$event'])
handleEscape(event: KeyboardEvent) {
  this.goBack();
}

}
