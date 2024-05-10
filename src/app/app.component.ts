import {Component} from '@angular/core';
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    TableComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {}
