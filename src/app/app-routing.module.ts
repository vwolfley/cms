import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Documents } from './documents/documents';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { DocumentEdit } from './documents/document-edit/document-edit/document-edit';
import { MessageList } from './messages/message-list/message-list';
import { Contacts } from './contacts/contacts';

const appRoutes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: Documents, children: [
    { path: 'new', component: DocumentEdit },
     { path: ':id', component: DocumentDetail },
     { path: ':id/edit', component: DocumentEdit }
   ]},
  { path: 'messages', component: MessageList },
  { path: 'contacts', component: Contacts },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
