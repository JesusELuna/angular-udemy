import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Mountain',
      url:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the snow',
      url:
        'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Mountain',
      url:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the snow',
      url:
        'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Mountain',
      url:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the snow',
      url:
        'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Mountain',
      url:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the snow',
      url:
        'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Mountain',
      url:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the snow',
      url:
        'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Mountain',
      url:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the snow',
      url:
        'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];
}
