import api from './moduleAxios';

export const authService = {
	login,
};

async function login(email: string, password: string) {
	// const formData = new FormData();
	// formData.append('email', email);
	// formData.append('password', password);
	return api.post(
		`/auth/login`,
		{email, password},
		{
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	);
}
