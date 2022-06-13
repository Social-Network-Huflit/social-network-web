import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  count: number;

  constructor() { }

  ngOnInit(): void {
    this.count = 1;
  }

  onClick(){
    this.count += 1;
  }
}
