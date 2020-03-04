import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  getClientErrorMessage(error: Error): string {
    return error.message ?
      error.message :
      error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return "Request had bad syntax or the parameters supplied were invalid.";
      
      case 401:
        return "Unauthorized. API authorization failed.";
      
      case 403:
        return "Unauthorized. You do not have permission to access this endpoint.";
      
      case 404:
        return "Server has not found a route matching the given URI.";
      
      case 500:
        return "Server encountered an unexpected condition which prevented it from fulfilling the request.";
      
      default:
        return navigator.onLine ?
        error.message :
        'No Internet Connection';
    }
    
  }
}
