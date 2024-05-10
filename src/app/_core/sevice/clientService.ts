import {Injectable} from "@angular/core";
import {PeriodicElement} from "../../../../server/mock";
import axios from "axios";

@Injectable({ providedIn: "root" })
export class ClientService {
  HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  // URL = `https://e7205ef3-4d9a-44c4-a4ae-6e73be13a39f-00-2f6q3y0g5jhhc.sisko.replit.dev/`;
URL = `http://localhost:3000/`;

  async getBigTable(count: number): Promise<PeriodicElement[]> {
    let res = await axios.get(this.URL + `getTable`, {
      params: {
        count: count,
      },
      headers: this.HEADERS
    });
    return res.data;
  };
  async addData(count: number): Promise<PeriodicElement[]> {
    let res = await axios.get(this.URL + `add`, {
      params: {
        count: count,
      },
      headers: this.HEADERS
    });
    return res.data;
  };
  async updateRow(all: string): Promise<PeriodicElement[]> {
    let res = await axios.post(this.URL + `updateRow`, {
        all: all
      },
      {
        headers: this.HEADERS
      });
    return res.data;
  };
  async addElement(
    el: {
      symbol: string,
      weight: string
    }
  ) {
    let res = await axios.post(this.URL + `createElement`, {
        symbol: el.symbol,
        weight: el.weight
      },
      {
        headers: this.HEADERS
      });
    return res.data;
  }

  async clear() {
    let res = await axios.post(this.URL + `clear`, {},
      {
        headers: this.HEADERS
      });
    return res.data;
  }
}
