import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToDo} from '../../dashboard/dashboard-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public form: FormGroup;
  public editMode = false;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<TodoEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ToDo) {
  }

  ngOnInit() {
    this.editMode = Boolean(this.data);

    this.form = this.formBuilder.group({
      id: null,
      task: [null, Validators.required],
      urgency: [null, Validators.required]
    });

    if (this.editMode) {
      this.setInitValues();
    }

  }

  save() {
    this.dialogRef.close(this.form.getRawValue());
  }

  private setInitValues() {
    Object
      .keys(this.data)
      .forEach((key) => {
        const control = this.form.get(key);

        if (control) {
          control.setValue(this.data[key]);
        }
      });
  }
}
