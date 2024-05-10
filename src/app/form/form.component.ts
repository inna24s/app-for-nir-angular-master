import {Component, EventEmitter, Output} from "@angular/core";
import {ClientService} from "../_core/sevice/clientService";

@Component({
  selector: 'app-form',
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
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
