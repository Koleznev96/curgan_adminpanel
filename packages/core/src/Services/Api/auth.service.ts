import api from './moduleAxios';

export const authService = {
	login,
	getStatistics,
};

async function login(email: string, password: string) {
	const formData = new FormData();
	formData.append('email', email);
	formData.append('password', password);
	return api.post(
		`/auth/login`,
		// formData,
		{email, password},
		{
			headers: {
				'Content-Type': 'application/json',
				// Accept: 'application/json',
			},
		},
	);
}

async function getStatistics() {
	return api.get(`/admin/statistics`);
}
