import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket;

  setupSocketConnection() {
    this.socket = io(environment.websocketUrl);
    this.socket.emit('my message', 'WebsocketService.setupSocketConnection(): TEST ########')

    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}