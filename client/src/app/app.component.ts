import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/interfaces/users';
import { ExpenseService } from 'src/service/expense';
import { AddExpenseDialogComponent } from './add-expense-dialog/add-expense-dialog.component';
import { SettleUpDialogComponent } from './settle-up-dialog/settle-up-dialog.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
	public displayedColumns: Array<string> = ['name', 'amount', 'actions'];
	dataSource: MatTableDataSource<Users>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private dialog: MatDialog,
		private expenseService: ExpenseService
	) {
		this.dataSource = new MatTableDataSource();
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	deleteIndex(indexValue: number) {
		this.dataSource.data.splice(indexValue, 1);
		this.dataSource._updateChangeSubscription();
	}

	openExpenseModel(): void {
		const dialogRef = this.dialog.open(AddExpenseDialogComponent, {
			width: '500px',
		});

		dialogRef.afterClosed().subscribe(data => {
			if (data?.clicked === 'submit') {
				this.dataSource.data = [
					...this.dataSource.data,
					{ name: data.form.name, amount: data.form.amount },
				];
			}
		});
	}

	settleUp(): void {
		this.expenseService
			.settleUp(this.dataSource.data)
			.subscribe((result: any) => {
				const dialogRef = this.dialog.open(SettleUpDialogComponent, {
					width: '900px',
					data: result.data,
				});
			});
	}
}
