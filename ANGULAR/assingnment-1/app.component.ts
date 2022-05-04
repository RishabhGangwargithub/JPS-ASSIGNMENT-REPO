import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';
  sideBarOpen: boolean | undefined;
 

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
