const payout = {
	calculatePayout: async travellersArray => {
		const uniqueArray = [];
		const resObj = { payouts: [], equalShare: 0, total: 0 };
		const owes = [];
		const owed = [];

		resObj.total = travellersArray.reduce((value, travellerArr) => {
			const index = uniqueArray.findIndex(
				item => item.name === travellerArr.name
			);
			if (index === -1) {
				uniqueArray.push(travellerArr);
			} else {
				uniqueArray[index].amount =
					uniqueArray[index].amount + travellerArr.amount;
			}
			return Number(value + travellerArr.amount);
		}, 0);

		resObj.equalShare = resObj.total / uniqueArray.length;

		uniqueArray.forEach(element => {
			const diff = resObj.equalShare - element.amount;
			if (diff < 0) {
				element.amount = Math.abs(diff);
				owed.push(element);
			} else if (diff > 0) {
				element.amount = diff;
				owes.push(element);
			}
		});

		while (owes.length) {
			owes.forEach((owesElement, index) => {
				owed.forEach((owedElement, owedIndex) => {
					let amountForSave = 0;
					if (owesElement.amount) {
						let amount = Number(
							(owesElement.amount - owedElement.amount).toFixed(2)
						);
						if (amount > 0) {
							owes[index].amount = Math.abs(amount);
							owed.splice(owedIndex, 1);
							amountForSave = owedElement.amount;
						} else if (amount < 0) {
							owed[owedIndex].amount = Math.abs(amount);
							owes.splice(index, 1);
							amountForSave = owesElement.amount;
							owesElement.amount = 0;
						} else {
							owes.splice(index, 1);
							owed.splice(owedIndex, 1);
							amountForSave = owesElement.amount;
							owesElement.amount = 0;
						}

						resObj.payouts.push({
							owes: owesElement.name,
							owed: owedElement.name,
							amount: Number(amountForSave.toFixed(2)),
						});
					}
				});
			});
		}
		return resObj;
	},
};

module.exports = payout;
