import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePizzaComponent } from './single-pizza.component';

describe('SinglePizzaComponent', () => {
  let component: SinglePizzaComponent;
  let fixture: ComponentFixture<SinglePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
