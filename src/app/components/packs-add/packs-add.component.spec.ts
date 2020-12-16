import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksAddComponent } from './packs-add.component';

describe('PacksAddComponent', () => {
  let component: PacksAddComponent;
  let fixture: ComponentFixture<PacksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
