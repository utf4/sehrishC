import { Component, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Payout } from '../../interfaces/payout';

@Component({
	selector: 'app-settle-up-dialog',
	templateUrl: './settle-up-dialog.component.html',
	styleUrls: ['./settle-up-dialog.component.scss'],
})
export class SettleUpDialogComponent {
	displayedColumns: string[] = ['owes', 'owed', 'amount'];
	dataSource: MatTableDataSource<any>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Payout) {
		this.dataSource = new MatTableDataSource(this.dialogData.payouts);
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
}
