import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosEnIndexComponent } from './productos-en-index/productos-en-index.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { CulturalComponent } from './cultural/cultural.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { CardsLinksComponent } from './cards-links/cards-links.component';
import { ServiciosComponent } from './servicios/servicios.component';

   const routes: Routes = [
                           {
                             path: 'home',
                             component: HomeComponent,
                           },
                           {
                             path: 'cultural',
                             loadChildren: ()=> import('./cultural/cultural.module').then( c => c.CulturalModule)
                           },
                           {
                             path: 'productos',
                             loadChildren: () => import('./productos/productos.module').then(p =>p.ProductosModule)
                           },
                           {
                            path:'servicios',
                            loadChildren: () => import('./servicios/servicios.module').then(s => s.ServiciosModule )
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
    NavbarComponent,
    FooterComponent,
    ProductosEnIndexComponent,
    ProductosComponent,
    CulturalComponent,
    ContactoComponent,
    HomeComponent,
    AcercadeComponent,
    CardsLinksComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

