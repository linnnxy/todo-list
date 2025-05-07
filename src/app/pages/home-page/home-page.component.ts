import { Component, inject } from '@angular/core';
import { NoteStoreService } from '../../services/note-store.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent {
  noteStoreService = inject(NoteStoreService);
}
