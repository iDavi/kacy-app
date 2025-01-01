import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteTitleComponent } from './website-title.component';

describe('WebsiteTitleComponent', () => {
  let component: WebsiteTitleComponent;
  let fixture: ComponentFixture<WebsiteTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
