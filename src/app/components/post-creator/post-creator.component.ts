import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostCreatorDialogComponent } from '../dialogs/post-creator-dialog/post-creator-dialog.component';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss'],
})
export class PostCreatorComponent implements OnInit {
  formGroup: FormGroup;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      content: new FormControl("", Validators.required)
    })
  }

  openDialog(): void {
    this.dialog.open(PostCreatorDialogComponent, {
      width: '600px',
    });
  }
}
