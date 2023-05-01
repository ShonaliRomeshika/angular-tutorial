import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNfoComponent } from './emp-nfo.component';

describe('EmpNfoComponent', () => {
  let component: EmpNfoComponent;
  let fixture: ComponentFixture<EmpNfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpNfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpNfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
