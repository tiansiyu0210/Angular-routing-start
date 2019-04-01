import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactiveGuardService} from './servers/server/can-deactive-guard.service';
import { ErrorsPageComponent } from './errors-page/errors-page.component';
import {ServerResolverService} from './servers/server/server-resolver.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers',
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {path: ':id',  component: ServerComponent, resolve: {serverData: ServerResolverService}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactiveGuardService]}
    ]},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  // {path: 'something', component: PageNotFoundComponent},
   {path: 'something', component: ErrorsPageComponent, data: {message: 'page not found'}},
  {path: '**', redirectTo: '/something', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule{

}
