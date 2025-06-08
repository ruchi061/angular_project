import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, scan, startWith, Subject } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { WebSocketService } from '../../services/web-socket.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-community-chat',
  imports: [CommonModule, FormsModule, DatePipe, MatCardModule, MatFormFieldModule, MatIconModule],
  templateUrl: './community-chat.component.html',
  styleUrl: './community-chat.component.css'
})

export class CommunityChatComponent {
  messages: Message[] = [
    { username: "Alice", text: "Hello, everyone!", date: new Date(), file : null , fileType : null},
    { username: "Bob", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "Harsh", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "Hello", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User1", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User2", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User3", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User4", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User5", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User6", text: "How's it going?", date: new Date(), file : null , fileType : null},
    { username: "User7", text: "How's it going?", date: new Date(), file : null , fileType : null},
];
  newMessage: string = '';
  isPostBoxOpen: boolean = false;
  selectedFile: File | null = null;
  constructor(private msgServ: MessageService, private wsServ: WebSocketService) { }

  ngOnInit() {
    this.msgServ.getMessages().subscribe({
      next: (data) => {
        console.log(data)
        this.messages = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.wsServ.getMessage().subscribe({
      next: (data) => {
        this.messages.push(data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  sendMessage(event: Event) {
    if (this.newMessage.trim() || this.selectedFile) {
      const msg: Message = {
        username: 'You',
        text: this.newMessage,
        date: new Date(),
        file: null,
        fileType: null
      };

      if (this.selectedFile) {
        console.log(this.selectedFile)
        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = () => {
          msg.file = reader.result as string;
          msg.fileType = this.selectedFile!.type;
          // console.log(reader.result)
          this.wsServ.sendMessage(msg);

          this.msgServ.addMessage(msg).subscribe({
            next: (data) => {
              console.log(data);
            },
            error: (err) => {
              console.error(err);
            }
          });
          this.resetMessage();
        }
      }
      else {
        this.wsServ.sendMessage(msg);

        this.msgServ.addMessage(msg).subscribe({
          next: (data) => {
            
            console.log(data);
          },
          error: (err) => {
            console.error(err);
          }
        });
        this.resetMessage();
      }
    }
  }

  resetMessage() {
    this.newMessage = '';
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log(this.selectedFile)
    }
  }

  togglePostBox() {
    this.isPostBoxOpen = !this.isPostBoxOpen;
  }
}

export interface Message {
  username: string,
  text: string,
  date: Date,
  file : string | null,
  fileType : string | null
}

