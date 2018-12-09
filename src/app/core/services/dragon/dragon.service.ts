import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

const BASE_URL = "https://dragons-api.herokuapp.com/api/dragons";

interface Dragon {
  _id: string;
  name: string;
  type: string;
  created_at: string;
  slug: string;
  histories: [];
}

interface Params {
  total: string;
}

interface Response {
  _metadata: {
    total_count: string;
  };
  items: Dragon[];
}

@Injectable()
export class DragonService {
  constructor(private http: HttpClient) {}

  total() {
    return this.http
      .get(BASE_URL, {
        params: new HttpParams().set("size", "1")
      })
      .pipe(map(({ _metadata: { total_count } }: Response) => total_count));
  }

  all({ total }: Params) {
    return this.http
      .get(BASE_URL, {
        params: new HttpParams().set("size", total)
      })
      .pipe(
        map(({ items }: Response) =>
          items.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        )
      );
  }
}
