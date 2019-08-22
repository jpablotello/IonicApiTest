import { Component } from '@angular/core';
import { Provider1Service } from '../services/provider1.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarios: any;
  constructor(public proveedor: Provider1Service) {}

  ionViewDidLoad() {
      this.proveedor.getData()
      .subscribe(
        (data: any) => {
          console.log(data);
          this.usuarios = data.data;
        },
        (error) => { console.log(error); }
      );
  }

}
