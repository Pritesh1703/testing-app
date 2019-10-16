import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';

@NgModule({
    declarations: [AppComponent, MobileListComponent, HeaderNavbarComponent, MobileDetailsComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
