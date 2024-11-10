import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MercadoComponent } from './pages/mercado/mercado.component';
import { HerramientasDeMarketingComponent } from './pages/herramientas-de-marketing/herramientas-de-marketing.component';
import { EquipoDeInvestigacionComponent } from './pages/equipo-de-investigacion/equipo-de-investigacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'mercado', component: MercadoComponent },
  { path: 'herramientas-de-marketing', component: HerramientasDeMarketingComponent },
  { path: 'equipo-de-investigacion', component: EquipoDeInvestigacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }