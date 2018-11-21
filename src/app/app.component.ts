import { Component } from '@angular/core';
import { WorkshopService } from './services/workshop.service';
import { Workshop } from './models/workshop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  workshop: Workshop;
  response;
  constructor(private message: WorkshopService) {
    this.workshop = {
      _id: '', 
      message: 'Espérate un momentico'
    }
  }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.message.getWorkshopMessage().subscribe(result => {
      this.workshop = result[0]
    })
  }
}
