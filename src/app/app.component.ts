import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from './common/contact.interface';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contactData: Contact;
  title = 'dheerendra';
  menuFlag$: Observable<boolean> = this.appStateService.menuObs();
  constructor(
    private appStateService: AppStateService,
    private http: HttpClient
  ) {
    this.http
      .get(environment.serviceUrl, {
        params: new HttpParams()
          .set('email', environment.email)
          .set('controller', 'contact'),
      })
      .subscribe((contact: Contact) => {
        this.contactData = contact;
        console.log(contact);
      });
  }
}
