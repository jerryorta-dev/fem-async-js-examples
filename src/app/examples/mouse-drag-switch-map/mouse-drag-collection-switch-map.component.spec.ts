import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDragCollectionSwitchMapComponent } from './mouse-drag-collection-switch-map.component';

describe('MouseDragCollectionSwitchMapComponent', () => {
  let component: MouseDragCollectionSwitchMapComponent;
  let fixture: ComponentFixture<MouseDragCollectionSwitchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDragCollectionSwitchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseDragCollectionSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
