import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/common/about.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dk-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutData: About;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(environment.serviceUrl, {
        params: new HttpParams()
          .set('email', environment.email)
          .set('controller', 'about'),
      })
      .subscribe((about: About) => {
        console.log(about);
        this.aboutData = about;
      });
  }
}
