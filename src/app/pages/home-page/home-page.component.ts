import { Component, inject } from '@angular/core';
import { NoteStoreService } from '../../services/note-store.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent {
  noteStoreService = inject(NoteStoreService);
}
