import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'cms-document-detail',
  standalone: false,
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css',
})
export class DocumentDetail implements OnInit {
  document: Document | null = null;

  constructor(private documentsService: DocumentsService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.document = this.documentsService.getDocument(id);
    });
  }
}
