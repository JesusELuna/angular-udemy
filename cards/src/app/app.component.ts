import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      username: 'nature',
      content: 'I saw this neat tree today',
      imageUrl: 'assets/images/tree.jpeg'
    },
    {
      title: 'Snowy mountain',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
      imageUrl: 'assets/images/mountain.jpeg'
    },
    {
      title: 'Mountain biking',
      username: 'biking1222',
      content: 'I did some biking today',
      imageUrl: 'assets/images/biking.jpeg'
    }
  ];
}
