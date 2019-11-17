
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoggingService } from '../common/logger/logging.service'
import { environment } from '../../environments/environment'
import { SnackbarService } from './snackbar.service';
import { Constants } from '../common/constants';

export class AppConfig {
  serviceUrl: string;
  constructor(data: { serviceUrl?: string } = {}) {
    this.serviceUrl = data.serviceUrl;
  }
}

@Injectable({providedIn: 'root'})
export class InitializerService {

  constructor(private httpClient: HttpClient, private logger: LoggingService, private snackbar: SnackbarService) { }

  bootstrapAppSettings(): Promise<any> {
    this.logger.warn('Trying to read configuration from \'assets/config.json\' to initialize the app.');
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get('assets/config.json').subscribe(data => {
        const ob: AppConfig = new AppConfig(data);
        if (ob.serviceUrl) {
          environment.serviceUrl = ob.serviceUrl;
        }
        this.logger.info('Configuration read. Initialization DONE.')
        resolve()
      }, error => {
        this.logger.error('App critical task failed. Can\'t read configuration.')
      })
    })
  }

}
