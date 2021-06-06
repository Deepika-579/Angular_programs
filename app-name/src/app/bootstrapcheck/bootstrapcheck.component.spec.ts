import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapcheckComponent } from './bootstrapcheck.component';

describe('BootstrapcheckComponent', () => {
  let component: BootstrapcheckComponent;
  let fixture: ComponentFixture<BootstrapcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
