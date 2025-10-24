import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';

import { Contacts } from './contacts/contacts';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactEdit } from './contacts/contact-edit/contact-edit';
import { ContactItem } from './contacts/contact-item/contact-item';
import { ContactList } from './contacts/contact-list/contact-list';

import { Documents } from './documents/documents';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { DocumentEdit } from './documents/document-edit/document-edit';
import { DocumentItem } from './documents/document-item/document-item';
import { DocumentList } from './documents/document-list/document-list';

import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';
import { MessageList } from './messages/message-list/message-list';

import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    App,
    Header,
    Contacts,
    ContactList,
    ContactDetail,
    ContactItem,
    Documents,
    DocumentList,
    DocumentItem,
    DocumentDetail,
    MessageItem,
    MessageEdit,
    MessageList,
    DropdownDirective,
    DocumentEdit,
    ContactEdit,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
