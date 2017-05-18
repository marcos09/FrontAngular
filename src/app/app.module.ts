import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from 'ng2-bootstrap';
import { ContainerComponent } from './container/container.component';
import { HomePageComponent } from './container/home-page/home-page.component';
import { CarrouselBlackComponent } from './container/home-page/carrousel-black/carrousel-black.component';
import { CarrouselWhiteComponent } from './container/home-page/carrousel-white/carrousel-white.component';
import { Cartelera} from './model/cartelera'
import { Publicacion} from './model/publicacion'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
    HomePageComponent,
    CarrouselBlackComponent,
    CarrouselWhiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
