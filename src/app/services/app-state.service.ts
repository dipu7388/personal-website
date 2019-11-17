import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  menuFlag:boolean=false;
  menuState: Subject<boolean>= new Subject<boolean>();
  constructor() {
    this.menuState.next(this.menuFlag);
  }

  open(){
    this.menuFlag=true;
    this.menuState.next(this.menuFlag);
  }
  close(){
    this.menuFlag=false;
    this.menuState.next(this.menuFlag);

  }
  toggle(){
    this.menuFlag=!this.menuFlag;
    this.menuState.next(this.menuFlag);
  }
 public menuObs(){
    return this.menuState
  }
}
