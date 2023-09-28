import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailPage } from './news-detail.page';

describe('NewsDetailPage', () => {
  let component: NewsDetailPage;
  let fixture: ComponentFixture<NewsDetailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDetailPage]
    });
    fixture = TestBed.createComponent(NewsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
