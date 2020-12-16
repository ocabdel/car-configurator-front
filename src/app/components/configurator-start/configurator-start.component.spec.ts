import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorStartComponent } from './configurator-start.component';

describe('ConfiguratorStartComponent', () => {
  let component: ConfiguratorStartComponent;
  let fixture: ComponentFixture<ConfiguratorStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguratorStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
