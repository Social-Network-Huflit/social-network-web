import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '';
  }
  private _name = '';

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(placeholder: string) {
    this._placeholder = (placeholder && placeholder.trim()) || '';
  }
  private _placeholder = '';

  @Input()
  public icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
