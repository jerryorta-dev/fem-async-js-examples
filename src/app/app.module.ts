import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseDragCollectionComponent } from './examples/mouse-drag-collection/mouse-drag-collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MouseDragCollectionSwitchMapComponent } from './examples/mouse-drag-switch-map/mouse-drag-collection-switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseDragCollectionComponent,
    MouseDragCollectionSwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
