import { Injectable, EventEmitter } from '@angular/core';

import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  private documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document | null {
    // Find the document with the given id or return null if not found
    return this.documents.find((document) => document.id === id) || null;
  }
}
