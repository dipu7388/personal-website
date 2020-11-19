import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import * as cryp from 'crypto-js';

import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../common/constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class LoginService {

  currentUserDS: UserModel;
  currentUserDSBS: BehaviorSubject<UserModel>;
  currentUserDSObs: Observable<UserModel>;

  constructor(private httpServices: HttpService,
    private snackBar: MatSnackBar
    ) {
    this.currentUserDS = undefined;
    this.currentUserDS = undefined;
    this.currentUserDSBS = new BehaviorSubject(this.currentUserDS);
    this.currentUserDSObs =  this.currentUserDSBS.asObservable();
  }
  public login(user: UserModel): Promise<{
    success: boolean,
    msg: string,
    data: any
  }> {
    return new Promise((resolve, reject) => {
      this.getSalt().then(salt => {

        let tempPassword = cryp.SHA256(user.password).toString(cryp.enc.Hex);
        user.password = cryp.SHA256(tempPassword + salt).toString(cryp.enc.Hex);
        this.httpServices.post('loginUser', new Map().set('hiddenSalt', salt), user).then((response) => {
          let user = new UserModel({
            emailId:response.data['emailId'],
            userName:response.data['userName'],
          });
          console.log(user);
          this.setUser(user);
          resolve({
            success: !response.error,
            msg: response.msgList.join(' '),
            data: response.data
          });
        }, err => {
          reject(err);
        });
      });
    });
  }

  setUser(user: UserModel) {
    this.currentUserDS = user;
    this.currentUserDSBS.next(this.currentUserDS);
  }

  getSalt(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.httpServices.get('getHiddenSalt', new Map()).then((value) => {
        resolve(value.data);
      }, err => {
        reject(err);
      });
    });
  }


  changePassword(newPassword: string): Promise<String> {
    let tempPassword = cryp.SHA256(newPassword).toString(cryp.enc.Hex);
    return new Promise<string>((resolve, reject) => {
      this.httpServices.get('changepassurl', new Map().set('password', tempPassword)).then((value) => {
        if (!value.error) {
        this.snackBar.open(value.msgList.join(' '), '',{duration: Constants.SANCKBAR_DURATION});
          resolve(value.msgList.join(' '));
        } else {
          resolve(undefined);
        }
      }, err => {
        reject(err);
      });
    });
  }



}
