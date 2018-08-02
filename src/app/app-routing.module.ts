import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouseDragCollectionComponent } from './examples/mouse-drag-collection/mouse-drag-collection.component';

const routes: Routes = [
  { path: 'mouse-drag-collections', component: MouseDragCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
