import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CreateComponent } from "./components/create/create.component";
import { ProjectsComponent } from "./components/projects/projects.component";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AboutComponent,
    ContactComponent,
    CreateComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "counter", component: CounterComponent },
    { path: "fetch-data", component: FetchDataComponent },
    { path: "sobre-mi", component: AboutComponent },
    { path: "contacto", component: ContactComponent },
    { path: "crear-proyecto", component: CreateComponent },
    { path: "proyectos", component: ProjectsComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
