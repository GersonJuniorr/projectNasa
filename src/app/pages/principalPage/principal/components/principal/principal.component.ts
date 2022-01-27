import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  data: any;
  date: any;

  constructor(private principalService: PrincipalService) {
    this.getData();
    this.todata();
  }

  ngOnInit(): void {
  }

  getData() {
    console.log(this.principalService.getPicture().toPromise().then(res => this.data = res));
  }

  todata() {
    console.log(this.date);
  }
}
