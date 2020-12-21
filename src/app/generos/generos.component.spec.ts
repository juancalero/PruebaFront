import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosComponent } from './generos.component';

describe('GenerosComponent', () => {
  let component: GenerosComponent;
  let fixture: ComponentFixture<GenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
