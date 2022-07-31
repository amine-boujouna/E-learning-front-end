import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators,ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../userservice.service';



export function confirmPasswordValidator(control: FormGroup): ValidationErrors | null {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password?.value && password?.value === confirm?.value
    ? null
    : { passwordMismatch: true };
};
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [],
})
export class SignupComponent implements OnInit {
  data : any;
  simpleForm!: FormGroup;
  formErrors: any;
  submitted = false;
  singup: FormGroup = new FormGroup({
    username: new FormControl('username'),
    password: new FormControl('password'),
    confirmepassword: new FormControl('confirmepassword'),
    firstname: new FormControl('firstname'),
    lastname: new FormControl('lastname'),
    email: new FormControl('email'),
    datenaissance: new FormControl('datenaissance'),
    phone: new FormControl('phone'),
    profession: new FormControl('profession'),
    sexe: new FormControl('sexe'), 
   
  }); 

  constructor(private router:Router,private userservice:UserserviceService,private fb: FormBuilder) { 
  
  }
 
  ngOnInit(): void {
  }
  signupMethode(): void {
  
   this.userservice.signup(this.singup.value).subscribe(res => {
     this.data=res; 
   }
   )
   this.router.navigate(['/accueil']);

 alert("Bienvenu chez Education ! Vous êtes inscrit avec succès ")
 
 }
 

}
