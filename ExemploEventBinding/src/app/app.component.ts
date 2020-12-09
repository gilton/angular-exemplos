import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public showAlert() : void {
    console.log('You clicked on the button...');
    alert("Click Event Fired...");
  }
}