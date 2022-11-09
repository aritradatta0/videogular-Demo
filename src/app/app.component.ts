import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videogular-Demo';
  api!: VgApiService;
  currentTime: number = 0;

  onPlayerReady(event: VgApiService) {
    this.api = event
    console.log(this.api.getDefaultMedia());

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      (media) => {
        console.log(media);

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


