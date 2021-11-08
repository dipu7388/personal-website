import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dk-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() copyrightText
  constructor() { }

  ngOnInit() {
  }

}
