import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../../services/request.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
  imports: [CommonModule],
})

export class RequestComponent {

  requests$?: Observable<string>;
  requests: string[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {

    this.requestService.getReq().subscribe((req) => {
      this.requests.push(req);
    });
  }
}
