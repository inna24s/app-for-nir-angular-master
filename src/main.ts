import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

document.addEventListener("DOMContentLoaded", () => {platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err))});
