import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { LoggingService } from '';
import { ErrorService } from './services/error.service';
import { ToastrService } from 'ngx-toastr';

const TOASTR_CONF = {
  closeButton: true, 
  timeOut: 5000, 
  onActivateTick: true
}

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const toastr = this.injector.get(ToastrService);

    let message;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      console.log(message);
      toastr.error( message.toString(), 'ERROR', TOASTR_CONF);
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      toastr.error( message, 'ERROR', TOASTR_CONF);
    }
    console.error(error);
  }
}
