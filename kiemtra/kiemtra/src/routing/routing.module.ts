import { DeteilsComponent } from './../app/pages/admin/deteils/deteils.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "src/app/pages/layout/home-page/home-page.component";
import { CommonModule } from "@angular/common";
import { HomeAdminComponent } from 'src/app/pages/layout/home-admin/home-admin.component';
import {NgModule} from '@angular/core'

const routes : Routes = [
    {path: "admin", component: HomePageComponent,children:[
    {path: "",redirectTo: "home",pathMatch:"full"},
    {path: "home",component: DeteilsComponent},
    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{

}