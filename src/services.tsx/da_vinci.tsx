import config from '../index';

export default class DaVinci {
	async getCusomterTransactionHistory(customer_id: string) {
		return await this._getDataFromApi(
			`customers/${customer_id}/transactions`
		);
	}

	private _getDataFromApi(endpoint: string) {
		return fetch(`https://api.td-davinci.com/api/${endpoint}`, {
			method: 'GET',
			headers: {
				Authorization: config.da_vinci_api,
			},
		});
	}
}
