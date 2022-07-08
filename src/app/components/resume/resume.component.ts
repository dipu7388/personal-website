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
  loading: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    this.http
      .get(environment.serviceUrl, {
        params: new HttpParams()
          .set('email', environment.email)
          .set('controller', 'resume'),
      })
      .subscribe(
        (resume: Resume) => {
          this.resumeData = resume;
          this.resumeData.feSkills = resume.skills.filter((e) =>
            e.tag.includes('fe')
          );
          this.resumeData.beSkills = resume.skills.filter((e) =>
            e.tag.includes('be')
          );
        },
        (err) => void 0,
        () => (this.loading = false)
      );
  }
}
