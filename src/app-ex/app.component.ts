// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   // styles: [
//   //   `
//   //     h3 {
//   //       color: red;
//   //     }
//   //   `,
//   // ],
// })
// export class AppComponent {
//   showSecret = false;
//   log: any = [];

//   onToggleDetail() {
//     this.showSecret = !this.showSecret;
//     this.log.push(new Date());
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe'
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

// // 5챕터
// import { Component } from '@angular/core';

// interface ServerElements {
//   type: string;
//   name: string;
//   content: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   serverElements = [
//     { type: 'server', name: 'TestServer', content: 'just a test' },
//   ];
//   // serverElements: ServerElements[] = [];

//   onServerAdded(serverData: { serverName: string; serverContent: string }) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent,
//     });
//   }

//   onBluePrintAdded(blueprintData: {
//     serverName: string;
//     serverContent: string;
//   }) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent,
//     });
//   }

//   onChangeFirst() {
//     this.serverElements[0].name = 'Changed!';
//   }

//   onDestroyFirst() {
//     this.serverElements.splice(0, 1);
//   }
// }

// 5챕터 연습
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   oddNumbers: number[] = [];
//   evenNumbers: number[] = [];
//   onIntervalFired(firedNumber: number) {
//     if (firedNumber % 2 === 0) {
//       this.evenNumbers.push(firedNumber);
//     } else {
//       this.oddNumbers.push(firedNumber);
//     }
//   }
// }
