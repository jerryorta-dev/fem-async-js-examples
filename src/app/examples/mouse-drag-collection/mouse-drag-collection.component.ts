import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { concatAll } from 'rxjs/operators/concatAll';
import { map } from 'rxjs/operators/map';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { getPosition } from '../../core';

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

  constructor( private cd: ChangeDetectorRef ) {
  }

  ngAfterContentInit(): void {
    this.dragObservables();
  }

  dragObservables(): void {
    const target: any = document.querySelector('.app-mouse-drag-collection .drag-target');
    const canvas: any = document.querySelector('.app-mouse-drag-collection .drag-canvas');

    const mouseDowns$: Observable<any> = fromEvent(target, 'mousedown');
    const mouseMoves$: Observable<any> = fromEvent(canvas, 'mousemove');
    const mouseUps$: Observable<any> = fromEvent(document, 'mouseup');

    mouseDowns$
      .pipe(
        map(mouseDown => mouseMoves$.pipe(takeUntil(mouseUps$))),
        concatAll(),
      )
      .subscribe(( e ) => {
        const canvasPosition: { x: number, y: number } = getPosition(canvas);

        this.results = { x: e.clientX - canvasPosition.x, y: e.clientY - canvasPosition.y };
        target.style.position = 'absolute';
        target.style.left = `${this.results.x}px`;
        target.style.top = `${this.results.y}px`;
      });
  }
}
