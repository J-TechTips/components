import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .Online
    {
      color: white;
      font-size: 30px;
    }
    .standard
    {
      color: white;
      font-size: 24x;
    }
  `]
})
export class ServerComponent {
  serverId: Number = 10;
  serverStatus: String;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor () {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
