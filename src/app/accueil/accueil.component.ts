import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  emailConfirmed: boolean = false;
  urlParams: any = {};

  constructor(private router:Router,private userservice:UserserviceService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*   this.activatedRoute.params.subscribe(s => {
      
      this.userservice.Activecompte(s["username"]).subscribe
      alert("avtive");
      

    });*/
   // this.activecompte();
  }
 /* activecompte():void{
    this.userservice.Activecompte(this.urlParams).subscribe(()=>{
    this.emailConfirmed=true; 
    alert("Bienvenu chez Education ! Votre compte est active  ")
    })
  
   }*/
  

}
