import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CaruselComponent } from './carusel/carusel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosEnIndexComponent } from './productos-en-index/productos-en-index.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { CulturalComponent } from './cultural/cultural.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { CatalogoDeEspeciesComponent } from './catalogo-de-especies/catalogo-de-especies.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

   const routes: Routes = [
                           {
                             path: 'home',
                             component: HomeComponent,
                           },
                           {
                             path: 'cultural',
                             component: CulturalComponent,
                           },
                           {
                             path: 'productos',
                             component: ProductosComponent,
                           },
                            {
                            path: '',
                            redirectTo: '/home',
                            pathMatch: 'full',
                          },
                           ];

@NgModule({
  declarations: [
    AppComponent,
    CaruselComponent,
    NavbarComponent,
    FooterComponent,
    ProductosEnIndexComponent,
    ProductosComponent,
    CulturalComponent,
    ContactoComponent,
    HomeComponent,
    AcercadeComponent,
    CatalogoDeEspeciesComponent,
    NuestrosServiciosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LazyLoadImageModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
