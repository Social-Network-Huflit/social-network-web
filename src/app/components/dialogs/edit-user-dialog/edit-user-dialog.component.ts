import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';
import { EditUserGQL, User } from 'src/graphql/graphql';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent implements OnInit {
  formGroup: FormGroup;
  user: User;
  image: any;
  file: any;
  background: any =
    'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg';
  file_background: any;

  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private editUserGQL: EditUserGQL
  ) {}

  ngOnInit(): void {
    this.appService.user$.subscribe((item) => {
      this.user = item as User;
      this.image = item!.avatar;

      this.formGroup = new FormGroup({
        name: new FormControl(item!.name),
        username: new FormControl(item!.username),
        email: new FormControl(item!.email),
        phoneNumber: new FormControl(item!.phoneNumber),
      });
    });
  }

  onChangeFile(event: any) {
    this.image = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(event.target.files[0])
    );
    this.file = event.target.files[0];
  }
  onChangeBackground(event: any) {
    this.background = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(event.target.files[0])
    );
    this.file_background = event.target.files[0];
  }

  onEdit() {
    console.log(this.file);
    this.editUserGQL
      .mutate({
        editUserInput: {
          name: this.formGroup.value.name,
          username: this.formGroup.value.username,
          phoneNumber: this.formGroup.value.phoneNumber,
          avatar: this.file,
          background: this.file_background,
        },
      }, {
        context: {
          useMultipart: true,
        }
      })
      .subscribe(() => {
        this.appService.userQueryRef.refetch();
      });
  }
}
