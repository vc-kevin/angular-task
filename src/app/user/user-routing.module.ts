import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthguardGuard],
        children: [{
            path: 'user-profile',
            component: UserDashboardComponent
        },
        {
            path: 'user-listing',
            component: UserListingComponent
        },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class UserRoutingModule { }
