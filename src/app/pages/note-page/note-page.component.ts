import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-page',
  imports: [],
  templateUrl: './note-page.component.html',
  styleUrl: './note-page.component.css',
})
export default class NotePageComponent {
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    // Get the note ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Note ID:', id);
    } else {
      console.error('No note ID found in navigation state.');
    }
  }
}
