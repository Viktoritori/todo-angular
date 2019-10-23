import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserRole} from './shared/user.role';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      label: 'Dashboard',
      permissions: [UserRole.Admin, UserRole.User]
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      label: 'Admin',
      permissions: [UserRole.Admin]
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
