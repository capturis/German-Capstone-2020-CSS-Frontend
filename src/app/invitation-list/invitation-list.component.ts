import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '@app/_services/websocket.service';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss']
})
export class InvitationListComponent implements OnInit {
  constructor(public websocketService: WebsocketService) {
  }

  ngOnInit(): void {
  }
}
