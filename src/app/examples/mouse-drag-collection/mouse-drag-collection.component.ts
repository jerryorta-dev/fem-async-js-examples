import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { concatAll } from 'rxjs/operators/concatAll';
import { map } from 'rxjs/operators/map';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
             selector: 'app-mouse-drag-collection',
             templateUrl: './mouse-drag-collection.component.html',
             styleUrls: [ './mouse-drag-collection.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class MouseDragCollectionComponent implements AfterContentInit {

  desc = 'https://frontendmasters.com/courses/asynchronous-javascript/implementing-mouse-move';
  results: any = null;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    this.dragObservables();
  }

  dragObservables(): void {
    const target: any = document.querySelector('.app-mouse-drag-collection .drag-target');

    const mouseDowns$: Observable<any> = fromEvent(target, 'mousedown');
    const mouseUps$: Observable<any> = fromEvent(document, 'mouseup');
    const mouseMoves$: Observable<any> = fromEvent(target, 'mousemove');

    mouseDowns$
      .pipe(
        map(mouseDown => mouseMoves$.pipe(takeUntil(mouseUps$))),
        concatAll()
        )
      .subscribe((r) => {
        this.results = { offsetX: r.offsetX, offsetY: r.offsetY};
        console.log(r);
        this.cd.markForCheck();
    });
  }
}
