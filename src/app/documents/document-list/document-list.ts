import { Component, OnInit } from '@angular/core';

import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList implements OnInit {
  documents: Document[] = [];
  documentId: string = '';

  constructor(private documentsService: DocumentsService) {
    this.documents = this.documentsService.getDocuments();
  }

  ngOnInit() {}
}
