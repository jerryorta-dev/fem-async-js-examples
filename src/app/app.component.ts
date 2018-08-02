import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: [ './app.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class AppComponent {
  fixedTopGap = 64;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(( result ) => result.matches));

  isHandset: boolean;

  @ViewChild('drawer') drawer: MatSidenav;

  constructor( private breakpointObserver: BreakpointObserver,
               private _cd: ChangeDetectorRef ) {

    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(( result ) => result.matches))
      .subscribe(( r: boolean ) => {
        this.isHandset = r;
        this.fixedTopGap = r ? 56 : 64;
        this._cd.markForCheck();
      });
  }

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
