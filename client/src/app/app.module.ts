import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { AddExpenseDialogComponent } from './add-expense-dialog/add-expense-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseService } from 'src/service/expense';
import { HttpClientModule } from '@angular/common/http';
import { SettleUpDialogComponent } from './settle-up-dialog/settle-up-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		AddExpenseDialogComponent,
		SettleUpDialogComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatTableModule,
		MatPaginatorModule,
		MatInputModule,
		MatDialogModule,
		MatButtonModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [ExpenseService],
	bootstrap: [AppComponent],
})
export class AppModule {}
