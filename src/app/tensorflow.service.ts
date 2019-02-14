import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TensorflowService {

  constructor(private http : HttpClient) { }


  getResponse(senetnce : string) {
    return this.http.get('http://127.0.0.1:4200/api/chatbot/basic/'+senetnce);
  }
}
