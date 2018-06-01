import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string;
  constructor() {
    console.log(this.allowNewServer);
    setTimeout(() => {

    }

    )
  }

  ngOnInit() {
  }
  onCreateSerer() {
    this.serverCreationStatus = 'New Server was created!' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
