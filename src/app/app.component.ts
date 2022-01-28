import { Component } from '@angular/core';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  date: any;
  title = 'projectNasa';

  constructor(private principalService: PrincipalService) {
    this.getData();
  }

  getData() {
    console.log(this.principalService.getPicture(this.date).toPromise().then(res => this.data = res));
  }
}
