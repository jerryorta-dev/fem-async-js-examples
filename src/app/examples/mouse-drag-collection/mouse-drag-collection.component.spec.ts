import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDragCollectionComponent } from './mouse-drag-collection.component';

describe('MouseDragCollectionComponent', () => {
  let component: MouseDragCollectionComponent;
  let fixture: ComponentFixture<MouseDragCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDragCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseDragCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
