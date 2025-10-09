import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

  documents: Document[] = [
    new Document(
      '1',
      'Project Proposal',
      'Initial project proposal document.',
      'https://example.com/docs/proposal.pdf'
    ),
    new Document(
      '2',
      'Design Specifications',
      'Technical design specs for the project.',
      'https://example.com/docs/design-specs.pdf'
    ),
    new Document(
      '3',
      'Meeting Notes',
      'Notes from the team meeting on Oct 1st.',
      'https://example.com/docs/meeting-notes.pdf'
    ),
    new Document(
      '4',
      'Final Report',
      'Comprehensive final project report.',
      'https://example.com/docs/final-report.pdf'
    ),
    new Document(
      '5',
      'October Roadmap',
      'Project roadmap for October.',
      'https://example.com/docs/october-roadmap.pdf'
    ),
  ];

  constructor() {}
}
