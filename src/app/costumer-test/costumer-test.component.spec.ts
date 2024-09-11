import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerTestComponent } from './costumer-test.component';

describe('CostumerTestComponent', () => {
  let component: CostumerTestComponent;
  let fixture: ComponentFixture<CostumerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumerTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
