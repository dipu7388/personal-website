import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'dk-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild("navside") navside : MatSidenav;
  @Input("mode") mode:string;
  @Input("container-class") classContainer;
  @Input("sidenav-class") classSidenav;
  @Input("sidenav-position") posSidenav;
 constructor() { }

 ngOnInit() {

 }
 ngAfterViewInit(){
 }

 toggle(){
   this.navside.toggle();
 }
 open(){
   this.navside.open();
 }
 close(){
   this.navside.close();
 }


}
