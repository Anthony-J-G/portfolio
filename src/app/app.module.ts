import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { StdoutComponent } from './terminal/stdout/stdout.component';
import { LayoutComponent } from './terminal/layout/layout.component';
import { ProjectSelectComponent } from './terminal/project-select/project-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    StdoutComponent,
    LayoutComponent,
    ProjectSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
