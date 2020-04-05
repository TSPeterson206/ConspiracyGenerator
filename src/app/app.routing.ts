import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { AddPersonFormComponent } from './add-person-form/add-person-form.component'
import { AddVerbFormComponent } from './add-verb-form/add-verb-form.component'


export const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', component: AddPersonFormComponent },
  { path: 'test', component: AddVerbFormComponent },

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)