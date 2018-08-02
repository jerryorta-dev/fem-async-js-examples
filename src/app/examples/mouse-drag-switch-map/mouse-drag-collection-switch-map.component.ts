import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { switchMap } from 'rxjs/operators/switchMap';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
             selector: 'app-mouse-drag-collection-switch-map',
             templateUrl: './mouse-drag-collection-switch-map.component.html',
             styleUrls: [ './mouse-drag-collection-switch-map.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class MouseDragCollectionSwitchMapComponent implements AfterContentInit {

  desc = 'https://frontendmasters.com/courses/asynchronous-javascript/implementing-mouse-move';
  results: any = null;

  constructor( private cd: ChangeDetectorRef ) {
  }

  ngAfterContentInit(): void {
    this.dragObservables();
  }

  dragObservables(): void {
    const target: any = document.querySelector('.app-mouse-drag-collection-switch-map .drag-target');

    const mouseDowns$: Observable<any> = fromEvent(target, 'mousedown');
    const mouseUps$: Observable<any> = fromEvent(document, 'mouseup');
    const mouseMoves$: Observable<any> = fromEvent(target, 'mousemove');

    mouseDowns$
      .pipe(
        switchMap(() => mouseMoves$.pipe(takeUntil(mouseUps$))),

        // does not work
        // mouseup is never caught
        // switchMap(() => mouseMoves$),
        // takeUntil(mouseUps$)
      )
      .subscribe(( r ) => {
        this.results = { offsetX: r.offsetX, offsetY: r.offsetY };
        console.log(r);
        this.cd.markForCheck();
      });
  }
}
