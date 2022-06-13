import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgotpassword/forgotpassword/forgotpassword.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeFragmentComponent } from './pages/home/components/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HomeFragmentComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'collection',
    pathMatch: 'full',
    component: CollectionComponent,
  },
  {
    path: 'test',
    pathMatch: 'full',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
