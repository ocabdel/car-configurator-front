import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorMotorComponent } from './configurator-motor.component';

describe('ConfiguratorMotorComponent', () => {
  let component: ConfiguratorMotorComponent;
  let fixture: ComponentFixture<ConfiguratorMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguratorMotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
