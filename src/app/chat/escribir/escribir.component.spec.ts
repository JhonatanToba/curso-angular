import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscribirComponent } from './escribir.component';

describe('EscribirComponent', () => {
  let component: EscribirComponent;
  let fixture: ComponentFixture<EscribirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscribirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
