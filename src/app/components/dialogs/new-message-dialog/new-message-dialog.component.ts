import { User } from 'src/graphql/graphql';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/pages/chat/chat.service';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.scss'],
})
export class NewMessageDialogComponent implements OnInit {
  users?: User[];
  formGroup: FormGroup
  showInput = false;

  constructor(private appService: AppService, private chatService: ChatService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      content: new FormControl("", Validators.required)
    })

    this.appService.user$.subscribe(
      (item) => (this.users = item?.following as User[])
    );
  }

  selectUser(user: User) {
    this.users = this.users?.filter((item) => item.id === user.id);
    this.showInput = true;
  }

  onSendMsg(){
    this.chatService.onSendMgs({
      content: this.formGroup.value.content,
      to_id: this.users![0].id
    }, this.formGroup)
  }
}
