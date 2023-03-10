export interface PayoutObj {
	owes: string;
	owed: string;
	amount: number;
}

export interface Payout {
	payouts: Array<PayoutObj>;
	equalShare: number;
	total: number;
}
