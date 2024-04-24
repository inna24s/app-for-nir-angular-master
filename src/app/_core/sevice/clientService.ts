import {Injectable} from "@angular/core";
import {PeriodicElement} from "../../../../server/mock";

@Injectable({ providedIn: "root" })
export class ClientService {
  async getBigTable(count?: number): Promise<PeriodicElement[]> {
    try {
      return await this.fetchMethod("get", "getTable", { count });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async getData(): Promise<PeriodicElement[]> {
    try {
      return await this.fetchMethod("get", "getTable");
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  fetchMethod(method: "get" | "post", path: string, options: Record<string, any> = {}) {
    const query = Object.keys(options).reduce((acc, key) => {
      acc.push(`${key}=${encodeURIComponent(options[key])}`);
      return acc;
    }, [] as string[]).join("&");
    const request: RequestInit = {
      method,
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrer: "no-referrer",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, compress, br",
      },
    };
    console.log(`http://localhost:3000/${path}?${query}`);

    try {
      return fetch(`http://localhost:3000/${path}?${query}`, request).then((response) => {
        return response.json()
      });
    } catch (e) {
      console.error(e);
      throw new Error("failed to fetch");
    }
  }
}
