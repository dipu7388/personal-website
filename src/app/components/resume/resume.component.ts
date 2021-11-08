import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/common/resume.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dk-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resumeData: Resume;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(`${environment.serviceUrl}/api/resume`, {
        params: new HttpParams().set('email', 'dheerendra.mcs16.du@gmail.com'),
      })
      .subscribe((resume: Resume) => {
        console.log(resume);
        this.resumeData = resume;
        this.resumeData.feSkills = resume.skills.filter((e) =>
          e.tag.includes('fe')
        );
        this.resumeData.beSkills = resume.skills.filter((e) =>
          e.tag.includes('be')
        );
      });
  }
}
