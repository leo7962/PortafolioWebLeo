import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
/** about component*/
export class AboutComponent {
  /** about ctor */
  title: string;
  subtitle: string;
  email: string;

  constructor() {
    this.title = "Leonardo Fabián Hernández Peña";
    this.subtitle = "Desarrollador Web y Arquitecto de software";
    this.email = "leo9622@gmail.com";
  }

  ngOnInit() {

  }
}
