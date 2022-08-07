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
  currentuser:any=UserserviceService.currentuser

activecommpte(){
  console.log("aaa")
this.userserivce.Activecompte("amineboj").subscribe(res => {
});
console.log("bbb");
}
getuser() {
  let username;
  this.userserivce.getUser(username)
   
}
}
