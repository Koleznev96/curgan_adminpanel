import api from './moduleAxios';
import axios, {AxiosError} from 'axios';

export const authService = {
	login,
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
