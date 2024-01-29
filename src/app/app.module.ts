import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { StdoutComponent } from './components/stdout/stdout.component';
import { LayoutComponent } from './terminal/layout/layout.component';
import { ProjectSelectComponent } from './components/project-select/project-select.component';
import { MainPageComponent } from './pages/main/main.component';
import { TerminalWindowComponent } from './components/terminal-window/terminal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    StdoutComponent,
    LayoutComponent,
    ProjectSelectComponent,
    MainPageComponent,
    TerminalWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
