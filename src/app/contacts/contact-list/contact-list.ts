import { Component, EventEmitter, Output } from '@angular/core';

import { Contact } from '../contact.model';
import { ContactsService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  contacts: Contact[] = [];

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
