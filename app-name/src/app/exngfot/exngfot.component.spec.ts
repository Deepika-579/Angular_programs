import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExngfotComponent } from './exngfot.component';

describe('ExngfotComponent', () => {
  let component: ExngfotComponent;
  let fixture: ComponentFixture<ExngfotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExngfotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExngfotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
