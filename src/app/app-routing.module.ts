import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouseDragCollectionComponent } from './examples/mouse-drag-collection/mouse-drag-collection.component';
import { MouseDragCollectionSwitchMapComponent } from './examples/mouse-drag-switch-map/mouse-drag-collection-switch-map.component';

const routes: Routes = [
  { path: 'mouse-drag-collections', component: MouseDragCollectionComponent},
  { path: 'mouse-drag-collections-switch-map', component: MouseDragCollectionSwitchMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
