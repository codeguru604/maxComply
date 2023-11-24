import { mount } from '@vue/test-utils';
import TaskDetail from './TaskDetails.vue';
import { createPinia, setActivePinia } from 'pinia';

const mockFetchTasks = jest.fn(() => Promise.resolve([
	{
		id: 1,
		name: 'Task 1',
		subHeading: 'Subtask 1',
	}
]));
const mockFetchTaskById = jest.fn(() => Promise.resolve([]));
const mockSubmitTaskForm = jest.fn(() => Promise.resolve([]));

jest.mock('quasar', () => ({
	Notify: {
		create: jest.fn(),
		setDefaults: jest.fn(),
		registerType: jest.fn(),
	},
}));
// Mock the useTaskStore function
jest.mock('../../stores/taskStore', () => ({
	useTaskStore: () => ({
		selectedTask:
			{
				id: 1,
				name: 'Test Task',
				subHeading: 'Test Subtask',
				status: 'open',
				fields: [],
			},
		fetchTasks: mockFetchTasks,
		fetchTaskById: mockFetchTaskById,
		submitTaskForm: mockSubmitTaskForm,
	}),
}));
describe('TaskDetails.vue', () => {

	beforeEach(() => {
		const pinia = createPinia();
		setActivePinia(pinia);
	});

	it('renders task name when a task is selected', async () => {
		const wrapper = mount(TaskDetail);
		await wrapper.vm.$nextTick();
		expect(wrapper.text()).toContain('Test Task');
		expect(wrapper.element).toMatchSnapshot();
	});


	it('submits form when the submit button is clicked', async () => {
		const wrapper = mount(TaskDetail);

		const taskId = 1;
		const formData = {};

		wrapper.vm.selectedTask = {
			id: taskId,
		};

		jest.spyOn(wrapper.vm, 'showNotify').mockImplementation(() => {});

		await wrapper.vm.submitForm();

		expect(wrapper.vm.taskStore.submitTaskForm).toHaveBeenCalledWith(taskId, formData);
	});
});
