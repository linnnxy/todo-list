import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NoteStoreService {
  createOne(title: string): void {
    const notes = this.getAll();
    const newNote: Note = {
      id:notes.length.toString(),
      title: title,
      body: '',
    }
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  getAll(): Array<Note>{
  const rawNotes = localStorage.getItem('notes') || '[]';
    const notes = JSON.parse(rawNotes) as Array<Note>;
    return notes;
  }
  getOne(id:string): void {}
}
