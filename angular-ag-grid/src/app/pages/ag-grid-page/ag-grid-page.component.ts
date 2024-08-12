import {AgGridAngular} from "ag-grid-angular";
import {ColDef, GridReadyEvent} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {Component} from "@angular/core";
import {GridService} from "../../shared/services/grid.service";

// Row Data Interface
interface IRow {
    mission: string;
    company: string;
    location: string;
    date: string;
    time: string;
    rocket: string;
    price: number;
    successful: boolean;
}

@Component({
    selector: 'app-ag-grid-page',
    standalone: true,
    imports: [AgGridAngular],
    templateUrl: './ag-grid-page.component.html',
    styleUrl: './ag-grid-page.component.scss'
})
export class AgGridPageComponent {
    rowData: IRow[] = [];

    // Column Definitions: Defines & controls grid columns.
    colDefs: ColDef[] = [
        {field: "mission", filter: true},
        {field: "company"},
        {field: "location"},
        {field: "date"},
        {field: "price"},
        {field: "successful"},
        {field: "rocket"},
    ];

    // Default Column Definitions: Apply configuration across all columns
    defaultColDef: ColDef = {
        filter: true,
    };

    // Load data into grid when ready
    themeClass = "ag-theme-quartz-dark";
    constructor(private readonly gridService: GridService) {
    }

    onGridReady(_: GridReadyEvent) {
        this.gridService.getGridData().subscribe((data) => {
            this.rowData = data;
        });
    }

}
