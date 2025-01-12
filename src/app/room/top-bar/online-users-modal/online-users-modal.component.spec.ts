import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUsersModalComponent } from './online-users-modal.component';

describe('OnlineUsersModalComponent', () => {
  let component: OnlineUsersModalComponent;
  let fixture: ComponentFixture<OnlineUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineUsersModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
