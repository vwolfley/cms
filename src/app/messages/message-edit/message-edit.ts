import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css',
})
export class MessageEdit {
  @ViewChild('subject') subjectInput!: ElementRef;
  @ViewChild('msgText') msgTextInput!: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = 'Vern Wolfley';

  constructor() {}

  onSendMessage() {
    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;
    // Create a new Message object
    const newId = uuidv4();
    const newMessage = new Message(newId, subject, msgText, this.currentSender);

    // Emit the new message to parent
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    // Clear the input fields
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
