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
				return this.tasks;
			} catch (error) {
				console.error('Error fetching tasks:', error);
				throw error;
			}
		},
		async fetchTaskById(id) {
			try {
				const response = await api.get(`/tasks/${id}`);
				this.selectedTask = response.data.data[0];
				return this.selectedTask;
			} catch (error) {
				console.error('Error fetching task by ID:', error);
				throw error;
			}
		},
		async submitTaskForm(id, formData) {
			try {
				const response = await api.post(`/tasks/${id}`, formData);
				return response;
			} catch (error) {
				console.error('Error posting task by ID:', error);
				throw error;
			}
		},
	},
});
