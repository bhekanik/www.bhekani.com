import { config } from '$lib/app/config';
import axios from 'axios';

export const get = async () => {
	const { data } = await axios.get('https://www.getrevue.co/api/v2/issues', {
		headers: { Authorization: `Token ${config.revueApiKey}` }
	});

	return { body: data };
};
