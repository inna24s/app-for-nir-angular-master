import {Component, Input, OnInit} from "@angular/core";
import {PeriodicElement} from "../../../server/mock";
import {ClientService} from "../_core/sevice/clientService";

@Component({
  selector: 'app-table',
  templateUrl: "table.component.html",
  styleUrls: ["table.component.css"]
})
export class TableComponent implements OnInit {
  data: PeriodicElement[] = [];

  loading = true;

  displayedColumns: string[] = ['position', 'weight', 'symbol'];

  symbols = ['H', 'He', 'Be', 'Li', 'B', 'C', 'N', 'O', 'F', 'Ne'];
  weights = [1.0079, 4.0026, 6.941, 9.0122, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797];

  constructor(private clientService: ClientService) {}

  async ngOnInit() {
    await this.getBigTable(20);
  }

  _random(max: number) {
    return Math.round(Math.random() * 1000) % max;
  }

  async getBigTable(count?: number) {
    await this.clientService.getBigTable(count).then(res => {
      this.loading = false;
      if (res.length) this.data = res;
    });
  }

  run() {
    this.data = this.buildData();
  }

  buildData(count: number = 1000): PeriodicElement[] {
    const data: PeriodicElement[] = [];
    for (let i = 0; i < count; i++) {
      data[i]={position: i, weight: this.weights[this._random(this.weights.length)], symbol: this.symbols[this._random(this.symbols.length)] };
    }
    return data;
  }

  add() {
    this.data = this.data.concat(this.buildData(1000));
  }

  update() {
    for (let i = 0; i < this.data.length; i += 5) {
      this.data[i].symbol += ' aaa';
    }
  }

  updateAll() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].symbol += ' !!!';
    }
  }
  runLots() {
    this.data = this.buildData(10000);
  }
  clear() {
    this.data = [];
  }
  swapRows() {
    const a = [...this.data];
    if (this.data.length > 998) {
      const b = a[1];
      a[1] = a[998];
      a[998] = b;
    }
    this.data = [
      ...this.data,

    ];
  }
}
