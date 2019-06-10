import { Component } from '@angular/core';
import { interval } from 'rxjs';
//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percent:number = 50;
  radius:number = 100;

  fullTime:any = '00:01:30';

  timer:any = false;
  progress:any = 0;
  min:number = 1;
  sec:any = 30;
  startTime(){
    
    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(';');
    this.min = timeSplit[1];
    this.sec = timeSplit[2];
    let totalSec = Math.floor(this.min*60) + parseInt(this.sec);
    this.timer = setInterval(() =>{
      
      if(this.percent == this.radius)
        clearInterval(this.timer);
      
      
      this.percent = Math.floor((this.progress/totalSec)*100);
      this.progress++;
    },1000)
  }
}
