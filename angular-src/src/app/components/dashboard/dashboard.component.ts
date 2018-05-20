import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //refresh function data
  public eventone:Array<any>=[];
  public eventtwo:Array<any>=[];
  public eventthree:Array<any>=[];
  public eventfour:Array<any>=[];
  public eventfive:Array<any>=[];

  user:Object;
  logs:Object;
  public chartType:string = 'line';
  data: string;
  loading: boolean;
  value: string;
  eventval:string;
  public chartDatasets:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'},
        {data: [79, 15, 47, 11, 52, 27, 10], label: 'My Second dataset'}
    ];
    public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'];
    public chartColors:Array<any> = [
           {
               backgroundColor: 'rgba(220,220,220,0.2)',
               borderColor: 'rgba(220,220,220,1)',
               borderWidth: 2,
               pointBackgroundColor: 'rgba(220,220,220,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(220,220,220,1)'
           },
           {
               backgroundColor: 'rgba(151,187,205,0.2)',
               borderColor: 'rgba(151,187,205,1)',
               borderWidth: 2,
               pointBackgroundColor: 'rgba(151,187,205,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(151,187,205,1)'
           },
           {
               backgroundColor: 'rgba(255,127,80,0.2)',
               borderColor: 'rgba(255,127,80,1)',
               borderWidth: 2,
               pointBackgroundColor: 'rgba(255,127,80,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(255,127,80,1)'
           },
           {
               backgroundColor: 'rgba(255, 140, 0,0.2)',
               borderColor: 'rgba(255, 140, 0,1)',
               borderWidth: 2,
               pointBackgroundColor: 'rgba(255, 140, 0,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(255, 140, 0,1)'
           },
           {
               backgroundColor: 'rgba(0, 100, 0,0.2)',
               borderColor: 'rgba(0, 100, 0,1)',
               borderWidth: 2,
               pointBackgroundColor: 'rgba(0, 100, 0,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(0, 100, 0,1)'
           },
       ];

       ///circle

       public chartType1:string = 'doughnut';

       public chartData1:Array<any> = [300, 50, 100, 40];

        public chartLabels1:Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

        public chartColors1:Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
        hoverBorderWidth: 0,
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
    }];
       public chartOptions:any = {
           responsive: true
       };

       public chartClicked(e: any): void {

       }

       public chartHovered(e: any): void {

       }

    // component data

  constructor(private http: Http,private authService:AuthService) { }

  ngOnInit() {
  this.authService.getProfile().subscribe(profile => {
    this.user = profile.user;
    //console.log(profile.user);
  },
   err => {
     console.log(err);
     return false;
   });
  }

  makeRequest(): void {
   this.loading = true;
   this.http.request('https://api.mlab.com/api/1/databases/finalpoject/collections/event?q={"usid":"5aeb75a1b28e7b2737198b60"}&apiKey=PZzI-riUduHPPSHgCWDeUGk8zio_O-2y')
   .subscribe(res => {
      var obj= res['_body'];
      var data=obj['data18'];
       //console.log(obj);
       this.loading = false;
   });
   this.http.request('https://api.mlab.com/api/1/databases/finalpoject/collections/logs?q={"usid":"5aeb75a1b28e7b2737198b60"}&apiKey=PZzI-riUduHPPSHgCWDeUGk8zio_O-2y')
   .subscribe(res => {
      var obj= res['_body'];
      var data=obj['data18'];
      this.logs=data;
       console.log(obj);
       this.loading = false;
   });


 }


}
