import { Component } from '@angular/core';

@Component({
  selector:'.app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Home Page';
  getTitle(){
    return this.title;
  }
}
