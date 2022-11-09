import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
var MP4Box = require('mp4box')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'videogular-Demo';
  api!: VgApiService;
  currentTime: number = 0;
   _isBrowser: boolean = false;

  constructor(private http:HttpClient,@Inject(PLATFORM_ID)
  private platformId: any){}

  ngOnInit(){
    this._isBrowser = isPlatformBrowser(this.platformId);
    console.log(MP4Box);
    
  }

  onPlayerReady(event: VgApiService) {
    this.api = event
    console.log(this.api.getMasterMedia().textTracks);
    this.api.getDefaultMedia().subscriptions.loadedData.subscribe((res:any)=>{
      console.log('bhosdike',res,this.api.getDefaultMedia().track);
      
    })
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      (media) => {
        console.log(media);
    console.log(this.api.getDefaultMedia().track,this.api.getDefaultMedia().currentTime);
        this.currentTime = this.api.getDefaultMedia().currentTime;


      }
    );
  }


  fastBack(time: any) {
    console.log(this.currentTime);

    this.api.seekTime(this.currentTime - time, false);
  }

  fastForward(time: any) {
    this.api.seekTime(this.currentTime + time, false);
  }
}


