import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'app-mouse-drag-collection',
             templateUrl: './mouse-drag-collection.component.html',
             styleUrls: [ './mouse-drag-collection.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class MouseDragCollectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
