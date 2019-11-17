import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { LoggingService, LoggingConfig, LOG_CONFIG } from './logging.service';
import { CommonModule } from '@angular/common';
@NgModule({
    imports:
    [CommonModule],
    declarations: [],
    exports: [],
    providers: [ LoggingService ]
})
export class LoggerModule {
    constructor( @Optional() @SkipSelf() parentModule: LoggerModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config: LoggingConfig): ModuleWithProviders {
        console.log(config);
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LOG_CONFIG, useValue: config }
            ]
        };
    }
}
