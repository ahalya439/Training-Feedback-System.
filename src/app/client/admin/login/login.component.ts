import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData = {
    email: '',
    securityQuestion: '',
    securityAnswer: '',
    newPassword: '',
    confirmPassword: '',
  };

  user = {
    username: '',
    password: '',
    role: '',
    email: '',
  };
  usernameInvalid: boolean = false;
  passwordInvalid: boolean = false;
  errorMessage: string = '';
  posts: any[] = []; // Declare posts property here

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // Fetch user data from JSON server
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(
      (data) => {
        // Assign fetched data to the posts array
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  onSubmit(): void {
    console.log('Submitted:', this.user);
    this.loginService.setLoggedInUsername(this.user.username);
    this.loginService.setLoggedInUseremail(this.user.email);

    const matchedUser = this.posts.find(
      (post) => post.name === this.user.username
    );

    if (matchedUser && matchedUser.password === this.user.password) {
      console.log('Credentials Valid');

      //  if (matchedUser && matchedUser.email ==this.user.email) {
      //       console.log('Credentials Valid');
      // console.log(matchedUser.email);

      if (matchedUser.user === this.user.role) {
        console.log('Role matched');

        // this.loggedInUserName = matchedUser.username;
        // this.loggedInUserName = matchedUser.username;

        switch (this.user.role) {
          case 'Participant':
            console.log('Navigating to participant landing');
            this.router.navigate(['./landing'], {
              // queryParams: {
              //   username: this.user.username,
              //   role: this.user.role,
              // },
            });
            break;
          case 'Instructor':
            console.log('Navigating to instructor landing');
            this.router.navigate(['/land'], {
              // queryParams: {
              //   username: this.user.username,
              //   role: this.user.role,
              // },
            });
            break;
          case 'Admin':
            console.log('Navigating to admin session');
            this.router.navigate(['/session'], {
              queryParams: {
                username: this.user.username,
                role: this.user.role,
              },
            });
            break;
          default:
            console.log('Invalid role');
            this.errorMessage = 'Invalid role';
            break;
        }
      } else {
        console.log('Role does not match');
        this.errorMessage = 'Invalid role';
      }
    } else {
      console.log('Invalid credentials');
      this.errorMessage = 'Invalid username or password';
    }
  }

  togglePassword() {
    const passwordInput = document.getElementById('pswd') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  validateUsername() {
    // Validate if the username contains only alphabets
    const regex = /^[a-zA-Z ]*$/;
    this.usernameInvalid = !regex.test(this.user.username);
  }

  validatePassword() {
    // Validate if the password length is at least 6 characters
    this.passwordInvalid = this.user.password.length < 6;
  }

  //   openForgotPasswordModal() {
  //     // Implement logic to open forgot password modal
  //   }

  //   currentStep: number = 1; // Track the current step of the process

  //   submitForm(form: NgForm) {
  //     if (form.valid) {
  //       console.log('Form submitted');
  //       // Proceed with form submission
  //     }
  //   }
  //   step: number = 1;
  //   email: string = '';
  //   securityQuestion: string = '';
  //   securityAnswer: string = '';
  //   newPassword: string = '';
  //   confirmPassword: string = '';
  //   emailError: string = '';
  //   securityAnswerError: string = '';
  //   passwordError: string = '';

  //   verifyEmail() {
  //     // Simulate email verification logic
  //     if (this.email === 'ahal22@gmail.com') {
  //       // Proceed to the next step
  //       this.step = 2;
  //     } else {
  //       // Show inline error for incorrect email
  //       this.emailError = 'Email address not found.';
  //     }
  //   }

  //   backToStep1() {
  //     this.step = 1; // Go back to step 1
  //     this.securityAnswer = ''; // Clear security answer
  //     this.securityAnswerError = ''; // Clear security answer error
  //   }

  //   selectedSecurityQuestion: string = '';

  //   validateSecurityAnswer() {
  //     if (this.selectedSecurityQuestion && this.securityAnswer) {
  //       // Simulate validation logic
  //       if (
  //         this.selectedSecurityQuestion === 'bird' &&
  //         this.securityAnswer.toLowerCase() === 'sparrow'
  //       ) {
  //         // Correct answer, proceed to Step 3
  //         this.step = 3;
  //       } else if (
  //         this.selectedSecurityQuestion === 'place' &&
  //         this.securityAnswer.toLowerCase() === 'paris'
  //       ) {
  //         // Correct answer, proceed to Step 3
  //         this.step = 3;
  //       } else if (
  //         this.selectedSecurityQuestion === 'game' &&
  //         this.securityAnswer.toLowerCase() === 'football'
  //       ) {
  //         // Correct answer, proceed to Step 3
  //         this.step = 3;
  //       } else {
  //         // Incorrect answer, show error message
  //         this.securityAnswerError = 'Incorrect answer. Please try again.';
  //       }
  //     } else {
  //       // Security question and answer must be provided
  //       this.securityAnswerError =
  //         'Please select a security question and provide an answer.';
  //     }
  //   }

  //   resetPassword() {
  //     if (this.newPassword.length < 6 || this.confirmPassword.length < 6) {
  //       // Password length is less than 6 characters, display an error message
  //       this.passwordError = 'Passwords must be at least 6 characters long.';
  //     } else if (this.newPassword === this.confirmPassword) {
  //       this.step = 4;
  //       // Passwords match and meet the minimum length requirement, proceed with password reset logic
  //       console.log('Password reset successful');
  //       // Add your password reset logic here
  //     } else {
  //       // Passwords do not match, display an error message
  //       this.passwordError = 'Passwords do not match.';
  //     }
  //   }

  //   backToStep2() {
  //     this.step = 2; // Navigate back to Step 2
  //   }
  // }
}
