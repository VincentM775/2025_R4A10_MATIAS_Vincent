import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListPageComponent } from './pizza-list-page.component';

describe('PizzaListPageComponent', () => {
  let component: PizzaListPageComponent;
  let fixture: ComponentFixture<PizzaListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
