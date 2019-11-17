import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppStateService } from "./services/app-state.service";

@Component({
  selector: "dk-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "dheerendra";
  menuFlag$: Observable<boolean> = this.appStateService.menuObs();
  constructor(private appStateService: AppStateService) {

  }
}
