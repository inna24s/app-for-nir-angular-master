import {Component, EventEmitter, Output} from "@angular/core";
import {ClientService} from "../_core/sevice/clientService";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-form',
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"],
  imports: [
    MatFormField,
    MatLabel,
    FormsModule,
    MatInput,
    MatButton,
    NgClass
  ],
  standalone: true
})
export class FormComponent {
  @Output()
  createEl = new EventEmitter<{symbol: string, weight: string}>()

  form = {
    symbol: "",
    weight: "",
  }

  constructor(private clientService: ClientService) {
  }

  async send(): Promise<void> {
    await this.clientService.addElement(this.form).then(() => {
      this.createEl.emit(this.form);
      this.form = {
        symbol: "",
        weight: ""
      }
    })
  }
}
