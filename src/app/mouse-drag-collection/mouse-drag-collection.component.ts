import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'app-mouse-drag-collection',
             templateUrl: './mouse-drag-collection.component.html',
             styleUrls: [ './mouse-drag-collection.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class MouseDragCollectionComponent implements AfterContentInit {

  @ViewChild('dragTarget') dragTarget: ElementRef;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {

  }

  getNativeElement(element) {
    return element.nativeElement;
  }

}
