import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class ResponseModel {
  success: boolean;
  otherInfo: any;
  code: number;
  data: any;
  msgList: string[];
  error: boolean;
  constructor(success: boolean, code: number, data?: any, msgList?: string[], error?: boolean, otherInfo?: any) {
    this.success = success;
    this.code = code;
    this.data = data;
    this.msgList = msgList || [];
    this.error = error == undefined ? false : error;
    this.otherInfo = otherInfo;
  }
}

@Injectable(
  {providedIn: 'root'}
)
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url: string, requestParams: Map<string, any>): Promise<ResponseModel> {
    if (!requestParams){
      requestParams = new Map();
    }
    requestParams = this.buildParams(requestParams, null, false);
    let params = new HttpParams();
    requestParams.forEach((value, key) => {
      params = params.append(key, value);
    });
    return new Promise<ResponseModel>((resolve, reject) => {
      this.http.get(environment.serviceUrl + '/' + url, { params: params }).subscribe(data => {
        localStorage.setItem('token', data["token"]);
        resolve(new ResponseModel(true, 200, data["data"], data["msgList"], data["error"], data['otherInfo']));
      }, err => {
        if (err instanceof HttpErrorResponse){
          reject(new ResponseModel(false, err.status));
          // resolve(new ResponseModel(false, err.status, undefined))
        }

      });
    });

  }

  public delete(url: string, requestParams: Map<string, any>): Promise<ResponseModel> {
    if (!requestParams){
      requestParams = new Map();
    }
    requestParams = this.buildParams(requestParams, null, false);
    let params = new HttpParams();
    requestParams.forEach((value, key) => {
      params = params.append(key, value);
    });
    return new Promise<ResponseModel>((resolve, reject) => {
      this.http.delete(environment.serviceUrl + '/' + url, { params: params }).subscribe(data => {
        localStorage.setItem('token', data["token"]);
        resolve(new ResponseModel(true, 200, data["data"], data["msgList"], data["error"]));
      }, err => {
        if (err instanceof HttpErrorResponse){
          reject(new ResponseModel(false, err.status));
        }

      });
    });

  }


  public post(url: string, requestParams: Map<string, any> , body : any): Promise<ResponseModel> {
    if (!requestParams){
      requestParams = new Map();
    }
    requestParams = this.buildParams(requestParams, null, false);
    let params = new HttpParams();
    requestParams.forEach((value, key) => {
      params = params.append(key, value);
    });

    return new Promise<ResponseModel>((resolve, reject) => {
      this.http.post(environment.serviceUrl + '/' + url, body, { params: params }).subscribe(data => {
        localStorage.setItem('token', data["token"]);
        resolve(new ResponseModel(true, 200, data["data"], data["msgList"], data["error"]));
      }, err => {
        if (err instanceof HttpErrorResponse){
          reject(new ResponseModel(false, err.status));
          // resolve(new ResponseModel(false, err.status, undefined))
        }

      });
    });

  }

  requiredParams = [];

  buildParams(paramMap: Map<string, any>, body: Object, hasBody: boolean): Map<string, any> {
    if (hasBody) {
      for (let param of this.requiredParams) {
        if (paramMap.has(param) && paramMap.get(param) && paramMap.get(param) != null) {
          continue;
        } else if (body) {
          let temp = body[param] ? body[param] : '';
          if (temp == null) {
            temp = '';
          }
          paramMap.set(param, (temp) + '');
        }
      }
    } else {
      for (const param of this.requiredParams) {
        if (paramMap.has(param) && paramMap.get(param) && paramMap.get(param) != null && paramMap.get(param) != 'null') {
          continue;
        } else {
          paramMap.set(param, '');
        }
      }
    }
    return paramMap;
  }



}
