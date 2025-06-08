import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from '../components/community-chat/community-chat.component';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {

  private socket$!: WebSocketSubject<Message>;
  private wsURL = 'ws://localhost:8080';

  constructor() {
    this.socket$ = webSocket(this.wsURL);
  }

  sendMessage(msg: Message) {
    this.socket$.next(msg);
  }

  getMessage(): Observable<Message> {
    return this.socket$.asObservable();
  }

  closeConnection() {
    this.socket$.complete();
  }
}
