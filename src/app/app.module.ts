import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {TableComponent} from "./table/table.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";
import {FormComponent} from "./form/form.component";
import {MatInputModule} from "@angular/material/input";
import {provideAnimations} from "@angular/platform-browser/animations";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [MatTableModule, MatButtonModule, BrowserModule, MatInputModule, MatIcon, FormsModule],
  declarations: [AppComponent, TableComponent, FormComponent],
  bootstrap: [AppComponent],
  providers: [provideAnimations()]
})
export class AppModule {}
