import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoyageComponent } from './create-voyage.component';

describe('CreateVoyageComponent', () => {
  let component: CreateVoyageComponent;
  let fixture: ComponentFixture<CreateVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
