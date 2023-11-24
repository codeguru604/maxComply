import { mount } from '@vue/test-utils';
import TaskList from './TaskList.vue';
import { createPinia, setActivePinia } from 'pinia';

const mockFetchTasks = jest.fn(() => Promise.resolve([
	{
		id: 1,
		name: 'Task 1',
		subHeading: 'Subtask 1',
	}
]));
const mockFetchTaskById = jest.fn(() => Promise.resolve());

// Mock the useTaskStore function
jest.mock('../../stores/taskStore', () => ({
	useTaskStore: () => ({
		tasks: [
			{
				id: 1,
				name: 'Task 1',
				subHeading: 'Subtask 1',
			}
		],
		fetchTasks: mockFetchTasks,
		fetchTaskById: mockFetchTaskById,
	}),
}));

jest.mock('quasar', () => ({
	Notify: {
		create: jest.fn(),
		setDefaults: jest.fn(),
		registerType: jest.fn(),
	},
}));

describe('TaskList', () => {
	beforeEach(() => {
    // Set up Pinia for the component
		const pinia = createPinia();
		setActivePinia(pinia);
	});

	it('renders a task list', async () => {
    // Mount the component
		const wrapper = mount(TaskList);

    // Wait for the component to finish loading tasks
		await wrapper.vm.$nextTick();

    // Check if the task list is rendered
		expect(wrapper.find('.list-item').exists()).toBe(true);
		expect(wrapper.element).toMatchSnapshot();
	});
});
