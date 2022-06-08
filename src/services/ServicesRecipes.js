/* eslint-disable */

import axios from 'axios'

/**
 * Look at vue.config.js for CORS problems
 */
const apiClient = axios.create({
	baseURL: 'http://localhost:8080/wp-json/wp/v2',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		//'Authorization': 'Bearer ' + sessionStorage.getItem('token')
	}, timeout: 9000
})

export default {
	findAll() {
		return apiClient.get('/recipes?_embed')
	},
	find(id) {
		//return apiClient.get(`/recipes/${id}?_embed`) // égal
		return apiClient.get("/recipes/" + id + "?_embed", {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.getItem('token')
			}			
		})
	}
}