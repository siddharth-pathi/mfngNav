import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfngNav';
  count = 0;

  @HostListener('document:itemCount', ['$event'])
  updateCount(event: any) {
    this.count = event.detail;
  }

}
