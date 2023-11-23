// import { createPinia, setActivePinia } from 'pinia';
// import { useTaskStore } from '@/stores/taskStore';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// const mock = new MockAdapter(axios);

// describe('TaskStore', () => {
// 	let pinia;

// 	beforeEach(() => {
// 		pinia = createPinia();
// 		setActivePinia(pinia);
// 		mock.reset();
// 	});

// 	it('fetches tasks correctly', async () => {
// 		const taskStore = useTaskStore();

//     // Mock the API response for fetching tasks
// 		mock.onGet('/tasks').reply(200, {
// 			data: [
// 				{
// 					id: 1,
// 					name: 'Task 1',
// 				}
// 			],
// 		});

// 		await taskStore.fetchTasks();

// 		expect(taskStore.tasks).toEqual([
// 			{
// 				id: 1,
// 				name: 'Task 1',
// 			}
// 		]);
// 	});

// 	it('fetches a task by ID correctly', async () => {
// 		const taskStore = useTaskStore();

//     // Mock the API response for fetching a task by ID
// 		mock.onGet('/tasks/1').reply(200, {
// 			data: [
// 				{
// 					id: 1,
// 					name: 'Task 1',
// 				}
// 			],
// 		});

// 		await taskStore.fetchTaskById(1);

// 		expect(taskStore.selectedTask).toEqual({
// 			id: 1,
// 			name: 'Task 1',
// 		});
// 	});

// 	it('submits a task form correctly', async () => {
// 		const taskStore = useTaskStore();

//     // Mock the API response for submitting a task form
// 		mock.onPost('/tasks/1').reply(201, {
// 			data: {
// 				success: true,
// 			},
// 		});

// 		await taskStore.submitTaskForm(1, {
// 			formData: 'example',
// 		});

// 		expect(mock.history.post.length).toBe(1);
// 		expect(mock.history.post[0].data).toEqual('formData=example');
// 	});
// });
