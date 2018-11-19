import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkshopService } from './services/workshop.service';


describe('AppComponent', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const compiled = fixture.debugElement.nativeElement;
  const component = fixture.componentInstance;
  const service = TestBed.get(WorkshopService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should create the app', () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.workshop).toEqual('Ajá, y tú ¿Qué?');
  // }); 

  it('should render title in a h1 tag', async (done) => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Espérate un momentico');
    let spy = spyOn(service, 'getWorkshopMessage');
    component.ngOnInit();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(compiled.querySelector('h1').textContent).toContain('Ajá, y tú ¿Qué?');
      done();
    })

  });

});
