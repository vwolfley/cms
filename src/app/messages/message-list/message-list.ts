import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList implements OnInit {
  messages: Message[] = [
    new Message('1', 'Welcome', 'Hello! Welcome to the CMS.', 'Frank'),
    new Message('2', 'Reminder', 'Don’t forget to submit your report.', 'Bob'),
    new Message('3', 'Meeting', 'The team meeting is at 3 PM today.', 'Karen'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
