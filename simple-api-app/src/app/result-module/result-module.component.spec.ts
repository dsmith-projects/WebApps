import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultModuleComponent } from './result-module.component';

describe('ResultModuleComponent', () => {
  let component: ResultModuleComponent;
  let fixture: ComponentFixture<ResultModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
