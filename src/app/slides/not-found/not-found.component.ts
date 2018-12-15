import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
              <mat-card>
                <mat-card-title>
                  Page not found (404).
                </mat-card-title>
                Go back to
                <a routerLink='/slides'>
                  the slides
                </a>
              </mat-card>`,
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
