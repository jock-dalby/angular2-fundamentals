import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from "app/mail.service";
import { ContactsService } from "app/contacts.service";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // Provide the class MailService in module and then inject service in component
  providers: [
    MailService,
    {provide: 'contacts', useClass: ContactsService},
    {provide: 'api', useValue: 'http://localhost:4200'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
