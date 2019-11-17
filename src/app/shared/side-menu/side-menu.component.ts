import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menuOptions: Array<{ label: string, icon: string, disabled: boolean, path: string, children: Array<{ label: string, icon: string, disabled: boolean, path: string }> }> = []
  constructor() { }

  ngOnInit() {
  }

}
