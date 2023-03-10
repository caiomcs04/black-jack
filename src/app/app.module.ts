import { TableModule } from './components/table/table.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule, SideMenuModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
