import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: [ './app.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class AppComponent {
  title = 'async-js-examples';
}
