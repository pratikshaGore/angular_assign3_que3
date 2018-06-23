import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Root';
  //d;
  public fun(d)
  {
   d="Inside Function";
   this.title="In App Root Function";
   return d;
  }
}
