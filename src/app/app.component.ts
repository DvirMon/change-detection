import { TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<h2>{{ title }}</h2>`,
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "change-detection";

  control = new FormControl(this.title);

  changeTitle() {
    this.title = "new title";

    this.control.setValue(this.title);
  }
}
