import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../core/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  show = 'none';

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  toggle() {
    (this.show === 'none') ? this.show = 'block'  : this.show = 'none';
  }
}
