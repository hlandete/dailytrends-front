import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytrendArticleComponent } from './dailytrend-article.component';

describe('DailytrendArticleComponent', () => {
  let component: DailytrendArticleComponent;
  let fixture: ComponentFixture<DailytrendArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytrendArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytrendArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
