import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <img src="../../assets/404.gif" alt="404" />
    <br />
    <button mat-raised-button routerLink="/" style="width: 100%">
      go home
    </button>
  `,
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
