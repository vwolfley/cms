import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';
import { Contacts } from './contacts/contacts';

const appRoutes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: Documents },
  { path: 'messages', component: MessageList },
  { path: 'contacts', component: Contacts },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
