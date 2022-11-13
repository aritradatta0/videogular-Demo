import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'videogular-Demo';
  api!: VgApiService;
  media!:HTMLVideoElement
  currentTime: number = 0;
   _isBrowser: boolean = false;
  constructor(private http:HttpClient,@Inject(PLATFORM_ID)
  private platformId: any){}

  ngOnInit(){
    this._isBrowser = isPlatformBrowser(this.platformId); 
  }

  onPlayerReady(event: VgApiService, ) {
    this.api = event
    console.log(this.api.getMasterMedia());
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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(this.api){
      const KEY:string = event.key
      switch(KEY){
        case  'ArrowLeft' :{
          this.fastBack(10)
          break
        }
        case  'ArrowRight' :{
          this.fastForward(10)
          break
        }
        case  'ArrowDown' :{
          
          if(this.api.volume > 0 && this.api.volume <1){
            if(this.api.volume >=0.10){
              this.api.volume = this.api.volume - 0.10
            }
            else{
              this.api.volume = 0
            }
          }
          console.log((this.api.volume));
          break
        }
        case  'ArrowUp' :{
          if(this.api.volume > 0 && this.api.volume <1){
            if(this.api.volume <=0.90){
              this.api.volume = this.api.volume + 0.10
            }
            else{
              this.api.volume = 1
            }
          }
          console.log((this.api.volume));
          break
        }
        case 'm':{
          if(this.api.volume === 0){
            this.api.volume =1
          }
          else{
            this.api.volume = 0
          }
        }
        
      }
      if(event?.code == "Space"){
        if(this.api.state === 'playing'){
          this.api.pause()
        }
        else{
          this.api.play()
        }
        
      }
    }
    // ArrowUp ArrowDown ArrowRight ArrowLeft

      console.log(event);
  }

  onMediaStateChange(state:any){
    console.log(state);
    
  }
}


