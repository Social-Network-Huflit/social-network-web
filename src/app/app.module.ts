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
import { CommentComponent } from './components/post-item/list-post-comment/comment/comment.component';
import { LongPressDirective } from './directives/long-press.directive';
import { FriendItemComponent } from './components/friends-list/friend-item/friend-item.component';
import { ShareDialogComponent } from './components/dialogs/share-dialog/share-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangePasswordComponent } from './components/dialogs/change-password/change-password.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CollectionNavLeftComponent } from './pages/collection/collection-nav-left/collection-nav-left.component';
import { CollectionBodyComponent } from './pages/collection/collection-body/collection-body.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { PostCreatorDialogComponent } from './components/dialogs/post-creator-dialog/post-creator-dialog.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PostSharedComponent } from './components/post-shared/post-shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ListPostCommentComponent } from './components/post-item/list-post-comment/list-post-comment.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostBodyComponent } from './components/post-item/post-body/post-body.component';
import { PostSkeletonComponent } from './components/skeletons/post-skeleton/post-skeleton.component';
import { TestComponent } from './pages/test/test.component';
import { ReplyCommentComponent } from './components/post-item/list-post-comment/comment/reply-comment/reply-comment.component';
import { ListPostShareCommentComponent } from './components/post-shared/list-post-share-comment/list-post-share-comment.component';
import { CommentItemComponent } from './components/post-shared/list-post-share-comment/comment-item/comment-item.component';
import { ReplyCommentPostShareComponent } from './components/post-shared/list-post-share-comment/comment-item/reply-comment/reply-comment.component';
import { FollowSkeletonComponent } from './components/skeletons/follow-skeleton/follow-skeleton.component';

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
    ShareDialogComponent,
    ChangePasswordComponent,
    CollectionComponent,
    CollectionNavLeftComponent,
    CollectionBodyComponent,
    DrawerComponent,
    PostCreatorDialogComponent,
    PostSharedComponent,
    ChatWindowComponent,
    ChatComponent,
    ListPostCommentComponent,
    PostBodyComponent,
    PostSkeletonComponent,
    TestComponent,
    ReplyCommentComponent,
    ListPostShareCommentComponent,
    CommentItemComponent,
    ReplyCommentPostShareComponent,
    FollowSkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    CodeInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
