import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcecaDeComponent } from './aceca-de.component';

describe('AcecaDeComponent', () => {
  let component: AcecaDeComponent;
  let fixture: ComponentFixture<AcecaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcecaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcecaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
