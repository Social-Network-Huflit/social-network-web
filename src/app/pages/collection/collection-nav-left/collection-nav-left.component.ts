import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateCollectionDialogComponent } from 'src/app/components/dialogs/create-collection-dialog/create-collection-dialog.component';
import { Collection } from 'src/graphql/graphql';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-nav-left',
  templateUrl: './collection-nav-left.component.html',
  styleUrls: ['./collection-nav-left.component.scss'],
})
export class CollectionNavLeftComponent implements OnInit {
  showNavLeft: boolean;
  @Input() collections: Collection[];

  constructor(
    public dialog: MatDialog,
    private service: CollectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.showNavLeft.subscribe((value) => {
      this.showNavLeft = value;
    });
  }

  toggleNavLeft(value: boolean) {
    this.service.onToggleNavLeft(value);
  }

  navigate(collection_id: string) {
    this.router.navigate(['/collection', collection_id]);
  }

  openDialog(): void {
    this.dialog.open(CreateCollectionDialogComponent, {
      width: '400px',
    });
  }
}
