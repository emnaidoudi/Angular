import { Component, OnInit } from '@angular/core';
import { TensorflowService } from '../tensorflow.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  response:any;

  constructor(private tensflow: TensorflowService) { }

  ngOnInit() {
  }

  answerIrajel(sentence :string){
    this.tensflow.getResponse(sentence).subscribe(answer=>{

      this.response=answer
      console.log(this.response)});
  }


}
