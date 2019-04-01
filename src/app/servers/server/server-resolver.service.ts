import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersService} from '../servers.service';

interface ServerBean{
  id: number;
  name: string;
  status: string;
}


@Injectable()
export class ServerResolverService implements Resolve<ServerBean> {
  constructor(private serverservice: ServersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerBean> | Promise<ServerBean> | ServerBean {
    return this.serverservice.getServer(+route.params['id']);
  }
}
