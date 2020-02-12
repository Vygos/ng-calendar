import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `<p-dialog header="Title" [(visible)]="display" (onHide)="closeDialog()"></p-dialog>`,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() display: boolean;

  @Output() hide: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  closeDialog() {
    this.hide.emit(false);
  }
}
