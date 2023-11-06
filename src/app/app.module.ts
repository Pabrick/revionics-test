import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RevSelectComponent } from './components/rev-select/rev-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RevSelectComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
