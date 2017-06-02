import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaviewComponent } from './kafkaview.component';

describe('KafkaviewComponent', () => {
  let component: KafkaviewComponent;
  let fixture: ComponentFixture<KafkaviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
