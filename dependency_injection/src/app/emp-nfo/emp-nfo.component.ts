import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-nfo',
  templateUrl: './emp-nfo.component.html',
  styleUrls: ['./emp-nfo.component.css'],
  providers: [RecordsService]
})
export class EmpNfoComponent {
    infoReceived1: string[] = [];
    infoReceived2: string[] = [];
    infoReceived3: string[] = [];

    getInfoFromServiceClass2(){
      this.infoReceived2 = this.rservice.getinfo2()
    }

    getInfoFromServiceClass1(){
      this.infoReceived1 = this.rservice.getinfo1()
    }

    getInfoFromServiceClass3(){
      this.infoReceived3 = this.rservice.getinfo3()
    }

    constructor(private rservice: RecordsService) {}
}
