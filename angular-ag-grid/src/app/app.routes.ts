import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'agGridDemo',
        loadComponent: () => import('./pages/ag-grid-page/ag-grid-page.component').then(m => m.AgGridPageComponent)
    }
];
