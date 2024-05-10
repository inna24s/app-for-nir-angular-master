import {Component, Input, OnInit} from "@angular/core";
import {PeriodicElement} from "../../../server/mock";
import {ClientService} from "../_core/sevice/clientService";
import {FormComponent} from "../form/form.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-table',
  templateUrl: "table.component.html",
  styleUrls: ["table.component.css"],
  imports: [
    FormComponent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    NgIf,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  standalone: true
})
export class TableComponent implements OnInit {
  data: PeriodicElement[] = [];

  loading = true;

  displayedColumns: string[] = ['position', 'weight', 'symbol'];

  constructor(private clientService: ClientService) {}

  async ngOnInit() {
    await this.getBigTable(20);
  }

  async getBigTable(count: number) {
    await this.clientService.getBigTable(count).then(res => {
      this.loading = false;
      if (res.length) this.data = res;
    });
  }

  async add() {
    await this.clientService.addData(1000).then(res => {
      if (res.length) this.data = res;
    });
  }

  async update(all: string) {
    await this.clientService.updateRow(all).then(res => {
      if (res.length) this.data = res;
    });
  }

  clear() {
    this.clientService.clear().then(() => {
      this.data = [];
    });
  }
  swapRows() {
    const b = this.data[1];
    this.data[1] = this.data[this.data.length - 1];
    this.data[this.data.length - 1] = b;
    this.data = [
      ...this.data,

    ];
  }

  createEl(el: {
    symbol: string,
    weight: string,
  }) {
    this.data = [...this.data, {
      position: this.data.length + 1,
      symbol: el.symbol,
      weight: el.weight
    }];
  }
}
