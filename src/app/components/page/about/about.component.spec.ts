import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { Component, Input } from '@angular/core';

// Stubs

@Component({ selector: 'image-component', template: '' })
class ImageComponent { }

@Component({ selector: 'content-component', template: '' })
class ContentComponent {
  @Input() content: any;
}

@Component({ selector: 'gitevent-component', template: '' })
class GiteventComponent {
  @Input() event: any;
}

// Descriptors

xdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        ImageComponent,
        ContentComponent,
        GiteventComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
