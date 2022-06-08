import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://wordpress-titre.local/wp-json',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	timeout: 9000,
});

export default {
	/**
	 * Session Storage connect()
	 */
	connect(data, callback) {
		//console.log(data) // Debug
		return apiClient.post('/jwt-auth/v1/token', data)
			.catch(
				(error) => {
					//console.log(error.response.data.message) // Debug
					//callback(error.response.data.message)
					callback({
						"type": "error",
						"message": error.response.data.message
					})
				}
			)
			.then(
				(response) => {
					console.log(response)
					//console.log(response.data.data.token) // Debug
					sessionStorage.setItem('token', response.data.data.token)
					//callback(response.data.data.message)
					callback({
						"type": "success",
						"message": response.data.message
					})
				}
			)
	},

	register(data, callback) {
		return apiClient.post('/wp/v2/users/register', data)
		.catch(
			(error) => {
				callback(error.response.data.message)
			}
		).then(
			(response) => {
				console.log(response)
			}
		) 
	}
}