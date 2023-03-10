const app = require('../server');
const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('Bunk Dev', () => {
	test('Should throw error when sending empty body', async () => {
		const response = await request(baseURL).post('/payouts');
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when sending empty object', async () => {
		const response = await request(baseURL).post('/payouts').send({});
		expect(response.statusCode).toBe(400);
		3;
	});

	test('Should throw error when sending empty object', async () => {
		const response = await request(baseURL).post('/payouts').send({});
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when body not having expense body', async () => {
		const body = { '': [{ name: 'Azeem', amount: 1 }] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when body name is missing from object Array', async () => {
		const body = { expenses: [{ '': 'Azeem', amount: 12 }] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when  amount is missing from object Array', async () => {
		const body = { expenses: [{ name: 'Azeem' }] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when  amount inside objects array is not number', async () => {
		const body = { expenses: [{ name: 'Azeem', amount: 'dddd' }] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when  amount inside objects array is empty', async () => {
		const body = { expenses: [{ name: 'Azeem', amount: 'dddd' }] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when name inside objects array is empty', async () => {
		const body = { expenses: [{ name: '', amount: 111 }] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should throw error when expenses array is empty', async () => {
		const body = { expenses: [] };
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(400);
	});

	test('Should return response is expense field have data', async () => {
		const body = {
			expenses: [
				{ name: 'Azeem', amount: 111 },
				{ name: 'Naeem', amount: 200 },
			],
		};
		const response = await request(baseURL).post('/payouts').send(body);
		expect(response.statusCode).toBe(200);
	});
});
