import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  show:Boolean=true;
  //let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;
  constructor(  private authService: AuthService) {
   }

  ngOnInit() {
  }

changeTab(i:any){
if(i==1)
this.show=true;
if(i==2)
this.show=false;
}

}
