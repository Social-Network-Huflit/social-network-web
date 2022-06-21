import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SendMailGQL } from 'src/graphql/graphql';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  private currentPage = new BehaviorSubject<
    'send-email' | 'send-code' | 'change-password' | 'success'
  >('send-email');
  public currentPage$ = this.currentPage.asObservable();
  private user_id = new BehaviorSubject<string>('')
  public user_id$ = this.user_id.asObservable();

  constructor(){}

  onChangePage() {
    switch (this.currentPage.value) {
      case 'send-email':
        this.currentPage.next('send-code');
        break;
      case 'send-code':
        this.currentPage.next('change-password');
        break;
      case 'change-password':
        this.currentPage.next('success');
        break;
      case 'success':
        this.currentPage.next('send-email');
        break;
      default:
        this.currentPage.next('send-code');
        break;
    }
  }

  setUserId(user_id: string){
    this.user_id.next(user_id)
  }
}
