import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  array = [];

add() {    
    this.array.push(this.array.length + 1)
   console.log(this.array);
}

}
