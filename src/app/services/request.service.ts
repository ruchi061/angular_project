import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requests$: Observable<any[]> | undefined;

  constructor() { }

  subject = new ReplaySubject<string>();

  addReq(req: string) {
    // debugger;
    this.subject.next(req);
  }

  getReq(): Observable<string> {
    // debugger;
    return this.subject.asObservable();
  }

}
