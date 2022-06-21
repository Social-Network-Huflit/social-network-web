import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from 'src/app/pages/collection/collection.service';
import { AddCollectionGQL, CreateCollectionGQL } from 'src/graphql/graphql';

@Component({
  selector: 'app-create-collection-dialog',
  templateUrl: './create-collection-dialog.component.html',
  styleUrls: ['./create-collection-dialog.component.scss'],
})
export class CreateCollectionDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private createCollectionGQL: CreateCollectionGQL,
    private collectionService: CollectionService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  onAddCollection() {
    this.createCollectionGQL
      .mutate({
        name: this.formGroup.value["name"]
      })
      .subscribe(({ data }) => {
        if (data?.createCollection.success) {
          this.collectionService.getCollectionQueryRef.refetch();
          this.dialog.closeAll()
        }
      });
  }
}
