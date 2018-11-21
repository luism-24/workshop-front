import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { WorkshopService } from './services/workshop.service';
import { of } from 'rxjs';

describe('AppComponent', async() => {
    
  let fixture = TestBed.createComponent(AppComponent);
  let component = fixture.componentInstance;
  let app = fixture.debugElement.componentInstance;
  let service = fixture.debugElement.injector.get(WorkshopService); 

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        WorkshopService
      ]

    }).compileComponents();

  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const mock = {
      _id: '',
      message: 'Ajá, y tú ¿Qué?'
    }
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toContain('Espérate un momentico');

    const mockService = jasmine.createSpyObj('WorkshopService', ['getWorkshopMessage']); 
    const mensaje = mockService.getWorkshopMessage.and.returnValue(mock.message); 

    console.log(mensaje);
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toContain('Ajá, y tú ¿Qué?');

  }));

});
