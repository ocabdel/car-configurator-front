import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsDeleteComponent } from './configurations-delete.component';

describe('ConfigurationsDeleteComponent', () => {
  let component: ConfigurationsDeleteComponent;
  let fixture: ComponentFixture<ConfigurationsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
