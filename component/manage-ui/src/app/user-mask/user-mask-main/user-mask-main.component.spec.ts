import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMaskMainComponent } from './user-mask-main.component';

describe('UserMaskMainComponent', () => {
  let component: UserMaskMainComponent;
  let fixture: ComponentFixture<UserMaskMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMaskMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMaskMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
