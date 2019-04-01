import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRouteModule} from './app-route.module';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';
import {CanDeactiveGuardService} from './servers/server/can-deactive-guard.service';
import {ErrorsPageComponent} from './errors-page/errors-page.component';
import {ServerResolverService} from './servers/server/server-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  providers: [ServersService, AuthGuardService, AuthService, CanDeactiveGuardService, ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
