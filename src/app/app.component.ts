import { Component, Inject } from '@angular/core';
import { MailService } from "app/mail.service";

@Component({
  selector: 'app-root',
  template: `
  <div>
    Name: {{contacts.name}}
    <hr>
    Message: {{mail.message}}
    <hr>
    API: {{api}}
  </div>
  <div>
    <app-simple-form 
      *ngFor="let message of mail.messages" 
      [message]="message.text"
      (update)="onUpdate(message.id, $event.text)">
    </app-simple-form>
  </div>
  <div>
    <ul>
      <li *ngFor="let message of mail.messages">
        {{message.text}}
      </li>
    </ul>
  </div>
  `,
  styles: [`
  app-simple-form {
    margin-bottom: 10px;
  }
  `]
})
export class AppComponent {
  title = "Let's crack on!";

  constructor(
    // Inject service into constructor of component.
    // Anything on MailService is now available within this component.
    private mail: MailService,
    @Inject('contacts') private contacts,
    @Inject('api') private api
  ) { }

  onUpdate(id, text) {
    this.mail.update(id, text)
  }
}
