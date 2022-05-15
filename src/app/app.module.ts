import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordComponent } from './pages/forgotpassword/forgotpassword/forgotpassword.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { CodeInputModule } from 'angular-code-input';
import { HeaderComponent } from './components/header/header.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { PostCreatorComponent } from './components/post-creator/post-creator.component';

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
    HeaderComponent,
    NavbarLeftComponent,
    PostCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CodeInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
