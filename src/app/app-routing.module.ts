import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgotpassword/forgotpassword/forgotpassword.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeFragmentComponent } from './pages/home/components/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserManagerComponent } from './pages/admin/user-manager/user-manager.component';
import { PostManagerComponent } from './pages/admin/post-manager/post-manager.component';

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
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile/:user_id',
        component: ProfileComponent,
        pathMatch: 'full',
      },
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
    path: 'message',
    component: ChatComponent,
    pathMatch: 'full',
  },
  // ADMIN
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'user-manager',
        component: UserManagerComponent,
        pathMatch: 'full',
      },
      {
        path: 'post-manager',
        component: PostManagerComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
