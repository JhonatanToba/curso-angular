import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaTresComponent } from './ruta-tres.component';

describe('RutaTresComponent', () => {
  let component: RutaTresComponent;
  let fixture: ComponentFixture<RutaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
