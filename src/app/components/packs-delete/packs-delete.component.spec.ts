import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksDeleteComponent } from './packs-delete.component';

describe('PacksDeleteComponent', () => {
  let component: PacksDeleteComponent;
  let fixture: ComponentFixture<PacksDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
