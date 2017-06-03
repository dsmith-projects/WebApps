import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiModuleComponent } from './api-module.component';

describe('ApiModuleComponent', () => {
  let component: ApiModuleComponent;
  let fixture: ComponentFixture<ApiModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
