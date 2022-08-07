import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenserviceService } from '../../service/tokenservice.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';

schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
//loginForm:FormGroup;
//username:'';

password:string;
username:string;
loginForm: FormGroup = new FormGroup({
  username: new FormControl('username'),
  password: new FormControl('password'),
});
loginform:FormGroup;
submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder,private tokenservice:TokenserviceService,private userservice:UserserviceService) {
    this.loginForm = new FormGroup({
      'password': new FormControl(),
      'username' : new FormControl(),
    })
   }

  ngOnInit(): void {
  
  }
  /* this.signup = new FormGroup({
   
    password: new FormControl(this.hero.lastname, [
      Validators.required,
      Validators.minLength(5),
    ]), 
    username: new FormControl(this.hero.username, [
      Validators.required,
      Validators.minLength(5),
    ]), 
 
        
})
}

get username() { return this.signup.get('username')!; }
get password() { return this.signup.get('password')!; }
*/
  onFormSubmit(): void {
  
    this.tokenservice.login(this.loginForm.value).subscribe({
      next:(data)=>{
      let jwtToken=data.headers.get('Authorization')!;
      let userconnected=data.headers.get('userconnected')!;
      this.tokenservice.saveToken(jwtToken);
      this.tokenservice.saveuserconnected(userconnected);
    //  this.router.navigate(['/dashboard']);
      console.log(jwtToken);
    console.log(userconnected);
    }
  })
   this.userservice.getUser(localStorage.getItem('userconnected')).subscribe(
     res=> {console.log(res)
     UserserviceService.currentuser=res
     this.router.navigate(['/dashboard']);
     })


     }

     
  
  get pwFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  get usernameFormcontrol(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
   
}