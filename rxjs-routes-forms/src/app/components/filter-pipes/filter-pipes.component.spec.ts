import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipesComponent } from './filter-pipes.component';

describe('FilterPipesComponent', () => {
  let component: FilterPipesComponent;
  let fixture: ComponentFixture<FilterPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
