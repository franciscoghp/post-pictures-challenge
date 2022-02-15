import {
  Component,
  OnInit,
} from '@angular/core';
// language list

import { SplashScreenService } from './_metronic/partials/layout/splash-screen/splash-screen.service';
import { Router, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableExtendedService } from './_metronic/shared/crud-table';
@Component({
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private splashScreenService: SplashScreenService,
    private router: Router,
    private tableService: TableExtendedService
  ) {
  }

  ngOnInit() {

  }

}
