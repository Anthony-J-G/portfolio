import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './terminal/projects/projects.component';
import { TerminalComponent } from './terminal/terminal.component';
import { DisplayTextComponent } from './terminal/display-text/display-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TerminalComponent,
    DisplayTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
