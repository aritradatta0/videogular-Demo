import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { PlayVideoComponent } from './play-video/play-video.component';

const routes: Routes = [
  {path:'',
  component:AppComponent,
  children:[
    {
      path:'',
      component:InputComponent
    },
    {
      path:'play',
      component:PlayVideoComponent
    }
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
