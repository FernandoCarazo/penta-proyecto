import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscographyPage } from './discography.page';

describe('DiscographyPage', () => {
  let component: DiscographyPage;
  let fixture: ComponentFixture<DiscographyPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscographyPage]
    });
    fixture = TestBed.createComponent(DiscographyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
