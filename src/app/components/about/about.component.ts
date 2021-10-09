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
      .get(`${environment.serviceUrl}/api/about`, {
        params: new HttpParams().set('email', 'dheerendra.mcs16.du@gmail.com'),
      })
      .subscribe((about: About) => {
        console.log(about);
        this.aboutData = about;
      });
  }
}
