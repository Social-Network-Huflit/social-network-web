import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordComponent } from './pages/forgotpassword/forgotpassword/forgotpassword.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { CodeInputModule } from 'angular-code-input';
import { MatTabsModule } from '@angular/material/tabs';
import { FollowItemComponent } from './pages/home/components/profile/follow-item/follow-item.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { PostCreatorComponent } from './components/post-creator/post-creator.component';
import { SuggestionListComponent } from './components/suggestion-list/suggestion-list.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HomeFragmentComponent } from './pages/home/components/home/home.component';
import { CommentComponent } from './components/post-item/comment/comment.component';
import { LongPressDirective } from './directives/long-press.directive';
import { FriendItemComponent } from './components/friends-list/friend-item/friend-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    InputFieldComponent,
    ForgotPasswordComponent,
    CommonButtonComponent,
    FollowItemComponent,
    HeaderComponent,
    NavbarLeftComponent,
    PostCreatorComponent,
    SuggestionListComponent,
    FriendsListComponent,
    PostItemComponent,
    HomeFragmentComponent,
    CommentComponent,
    LongPressDirective,
    FriendItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    CodeInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
