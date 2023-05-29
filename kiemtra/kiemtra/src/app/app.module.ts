import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddComponent } from './pages/admin/add/add.component';
import { DeteilsComponent } from './pages/admin/deteils/deteils.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { HomeAdminComponent } from './pages/layout/home-admin/home-admin.component';
import { HomePageComponent } from './pages/layout/home-page/home-page.component';
import{RoutingModule} from 'src/routing/routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddComponent,
    DeteilsComponent,
    EditComponent,
    HomeAdminComponent,
    HomePageComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
