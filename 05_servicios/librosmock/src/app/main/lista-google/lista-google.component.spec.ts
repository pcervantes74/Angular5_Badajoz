import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiceComponent } from './lista-service.component';

describe('ListaComponent', () => {
  let component: ListaServiceComponent;
  let fixture: ComponentFixture<ListaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
