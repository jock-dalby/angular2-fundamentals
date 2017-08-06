import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  constructor() {
  }

  message: string = "You've got mail!";

  messages: any = [
    { id : 1, text: `Justin Gatlin tore up Usain Bolt's farewell script as he stole world 100m gold with the run of his long and controversial career.`},
    { id: 2, text: `Leigh Griffiths grabbed a double as Celtic kicked off their Premiership title defence with a rout of Hearts.`},
    { id: 3, text: `Many neighbourhoods in the Big Apple don't have access to trains or regular buses.`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m => {
      return m.id === id
        // If there is a match we want to return the id and the new message 
        ? {id, text}
        // Otherwise return the existing message
        : m 
    });
  }

}
