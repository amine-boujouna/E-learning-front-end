import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { User } from 'src/app/model/User';
import { UserserviceService } from 'src/app/service/userservice.service';
import { TokenserviceService } from '../../../service/tokenservice.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements  OnInit{

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  constructor(private classToggler: ClassToggleService,private tokenservice:TokenserviceService,private router:Router) {
    super();
  }
  currentuser:any=UserserviceService.currentuser

  userconnected:string;
  ngOnInit(): void {
  this.userconencte();
  }
  logout():void{
    this.tokenservice.logout();
    this.router.navigate(['/accueil']);
  }
  userconencte(){
     this.userconnected=this.tokenservice.getUserconnected();
    console.log("a+"+this.userconnected);
  }

}
