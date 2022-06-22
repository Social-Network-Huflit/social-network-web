import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { PostCreatorDialogComponent } from '../dialogs/post-creator-dialog/post-creator-dialog.component';
import { GetMyUserGQL, GetMyUserQuery, User } from './../../../graphql/graphql';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss'],
})
export class PostCreatorComponent implements OnInit {
  formGroup: FormGroup;
  user?: User | undefined | null;

  constructor(public dialog: MatDialog, private appService: AppService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      content: new FormControl('', Validators.required),
    });

    this.appService.user$
      .subscribe((res) => {
        this.user = res as User;
      });
  }

  openDialog(): void {
    this.dialog.open(PostCreatorDialogComponent, {
      width: '600px',
    });
  }
}
