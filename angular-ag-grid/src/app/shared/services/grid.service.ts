import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GridService {

    constructor(private readonly http: HttpClient) {
    }

    getGridData() {
        return this.http
            .get<
                any[]
            >("https://www.ag-grid.com/example-assets/space-mission-data.json")
    }
}
