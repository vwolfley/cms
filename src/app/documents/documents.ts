import { Component } from '@angular/core';
import { Document } from '../documents/document.model';
@Component({
  selector: 'cms-documents',
  standalone: false,
  templateUrl: './documents.html',
  styleUrl: './documents.css'
})
export class Documents {
  selectedDocument!: Document;

}
