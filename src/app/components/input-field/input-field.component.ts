import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
  @Input() name: string;
  @Input() placeholder: string;
  @Input() icon?: string;
  @Input() formGroup: FormGroup;
  @Input() type?: string;

  constructor() {}

  ngOnInit(): void {}
}
