import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Collection, GetCollectionsGQL } from 'src/graphql/graphql';

@Component({
  selector: 'app-choose-collection',
  templateUrl: './choose-collection.component.html',
  styleUrls: ['./choose-collection.component.scss'],
})
export class ChooseCollectionComponent implements OnInit {
  collections: Collection[];
  selectedCollection: string;

  constructor(
    public dialogRef: MatDialogRef<ChooseCollectionComponent>,
    private getCollectionsGQL: GetCollectionsGQL
  ) {}

  ngOnInit(): void {
    this.getCollectionsGQL
      .watch()
      .valueChanges.subscribe(
        ({ data }) => (this.collections = data.getMyCollection as Collection[])
      );
  }

  onChange(collection_id: string){
    this.selectedCollection = collection_id;
  }
}
