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
		const pinia = createPinia();
		setActivePinia(pinia);
	});

	it('renders a task list', async () => {
		const wrapper = mount(TaskList);
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick();
		expect(wrapper.find('.list-item').exists()).toBe(true);
		expect(wrapper.element).toMatchSnapshot();
	});
});
