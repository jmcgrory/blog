import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiteventComponent } from './gitevent.component';

describe('GiteventComponent', () => {
  let component: GiteventComponent;
  let fixture: ComponentFixture<GiteventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiteventComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
