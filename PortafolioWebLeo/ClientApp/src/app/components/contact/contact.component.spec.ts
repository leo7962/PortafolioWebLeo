/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { ContactComponent } from "./contact.component";

let component: ContactComponent;
let fixture: ComponentFixture<ContactComponent>;

describe("contact component",
  () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ContactComponent],
        imports: [BrowserModule],
        providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true }
        ]
      });
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
    }));

    it("should do something",
      async(() => {
        expect(true).toEqual(true);
      }));
  });
