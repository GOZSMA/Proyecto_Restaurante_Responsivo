import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartaComponent } from './menu/carta/carta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { PlatillosComponent } from './menu/platillos/platillos.component';
import { VegetarianosComponent } from './menu/vegetarianos/vegetarianos.component';
import { BebidasComponent } from './menu/bebidas/bebidas.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contacto-reactivo', component: FormularioComponent},
  { path: 'sobre-nosotros', component: AboutComponent },
  { 
    path: 'carta', component: CartaComponent, children: [
      { path: 'platillos', component: PlatillosComponent},
      { path: 'vegetarianos', component: VegetarianosComponent },
      { path: 'bebidas', component: BebidasComponent}
    ],
  },
  { path: 'ubicacion', component: MapComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
