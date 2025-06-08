import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../components/community-chat/community-chat.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  jsonUrl = 'http://localhost:3000/messages';

  constructor(private http : HttpClient) { }

  getMessages() : Observable<Message[]> {
    return this.http.get<Message[]>(this.jsonUrl);
  }

  addMessage(msg : Message) : Observable<Message> {
    return this.http.post<Message>(this.jsonUrl, msg);
  }

}
