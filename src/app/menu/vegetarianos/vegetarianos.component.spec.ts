import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianosComponent } from './vegetarianos.component';

describe('VegetarianosComponent', () => {
  let component: VegetarianosComponent;
  let fixture: ComponentFixture<VegetarianosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetarianosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetarianosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
