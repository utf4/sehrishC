import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpResponse } from 'src/interfaces/https-response';
import { BaseService } from './base-service';

@Injectable()
export class ExpenseService extends BaseService {
	constructor(readonly http: HttpClient) {
		super();
	}

	public settleUp(expenses: any) {
		return this.http.post<HttpResponse<Array<any>>>(`${this.baseUrl}/payouts`, {
			expenses,
		});
	}
}
