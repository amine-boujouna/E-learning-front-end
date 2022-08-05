import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { TokenserviceService } from '../service/tokenservice.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-activecompte',
  templateUrl: './activecompte.component.html',
  styleUrls: ['./activecompte.component.scss']
})
export class ActivecompteComponent implements OnInit {

  constructor(private userserivce:UserserviceService,private tokenservice:TokenserviceService) { }
  userconnected:string;

  ngOnInit(): void {
    this.activecommpte()

  }
  user:User;
  data:any;
  username!:string
  enabled:boolean
activecommpte(){
  console.log("aaa")
this.userserivce.Activecompte(this.getuser.name).subscribe(res => {
  this.data=res;
  this.enabled=true;
});
console.log("bbb");
}
userconencte(){
  this.userconnected=this.tokenservice.getUserconnected();
 console.log("a+"+this.userconnected);
}
getuser() {
  let username;
  this.userserivce.getUser(username)
   
}
}
