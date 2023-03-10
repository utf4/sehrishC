import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import {
	isBlankString,
	isNumber,
} from 'src/shared/validators/custom-validator';

@Component({
	selector: 'app-add-expense-dialog',
	templateUrl: './add-expense-dialog.component.html',
	styleUrls: ['./add-expense-dialog.component.scss'],
})
export class AddExpenseDialogComponent {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<AddExpenseDialogComponent>
	) {
		this.form = this.fb.group({
			name: ['', [Validators.required, isBlankString]],
			amount: ['', [Validators.required, isNumber]],
		});
	}

	submit(form: NgForm) {
		if (this.form.valid) {
			this.dialogRef.close({
				clicked: 'submit',
				form: form,
			});
		}
	}
}
