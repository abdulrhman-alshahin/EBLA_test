import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private _snackBar: MatSnackBar) {}
  open(message: string, warn = false) {
    this._snackBar.open(message, '', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: warn ? ['toast-warn'] : ['toast-success'],
    });
  }
}
