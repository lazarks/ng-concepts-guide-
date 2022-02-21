import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutesComponent } from './nested-routes.component';

describe('NestedRoutesComponent', () => {
  let component: NestedRoutesComponent;
  let fixture: ComponentFixture<NestedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
