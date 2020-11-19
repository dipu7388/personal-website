import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  public open(message: string, action: string, duration: number): any {
    return this.snackBar.open(message, action, { 'duration': duration });
  }


  public dismiss(): void {
    this.snackBar.dismiss();
  }

}
