import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpFirstComponent } from './components/cmp-first/cmp-first.component';
import { CmpSecndComponent } from './components/cmp-secnd/cmp-secnd.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpFirstComponent,
    CmpSecndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
