import { defineStore } from 'pinia';
import { api } from '../boot/axios';
export const useTaskStore = defineStore({
	id: 'task',
	state: () => ({
		tasks: [],
		selectedTask: null,
	}),
	actions: {
		async fetchTasks() {
			try {
				const response = await api.get('/tasks');
				this.tasks = response.data.data;
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		},
		async fetchTaskById(id) {
			try {
				const response = await api.get(`/tasks/${id}`);
				this.selectedTask = response.data.data[0];
			} catch (error) {
				console.error('Error fetching task by ID:', error);
			}
		},
		async submitTaskForm(id, formData) {
			try {
				const response = await api.post(`/tasks/${id}`, formData);
				console.log(response);
			} catch (error) {
				console.error('Error posting task by ID:', error);
			}
		},
	},
});
