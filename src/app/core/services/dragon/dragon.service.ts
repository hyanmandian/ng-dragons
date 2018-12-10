import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import Dragon from '../../models/dragon.model';

const BASE_URL = "https://dragons-api.herokuapp.com/api/dragons";

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
          items
            .filter(({ slug }) => !!slug)
            .sort((a, b) => {
              if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
              }

              if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
              }

              return 0;
            })
        )
      );
  }

  show(slug: string) {
    return this.http.get<Dragon>(`${BASE_URL}/${slug}`);
  }

  store(data: Dragon) {
    return this.http.post<Dragon>(BASE_URL, data);
  }

  update(slug: string, data: Dragon) {
    return this.http.put(`${BASE_URL}/${slug}`, data);
  }

  delete(slug: string) {
    return this.http.delete(`${BASE_URL}/${slug}`);
  }
}
