import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element selector
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  templateUrl: './servers.component.html', // external template
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `, // inline template
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created!';
  serverName: string;
  serverCreated: boolean = false;
  server = ['testserver', 'testserver2', 'testserver3'];

  constructor() {
    console.log(this.allowNewServer);
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'New Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
