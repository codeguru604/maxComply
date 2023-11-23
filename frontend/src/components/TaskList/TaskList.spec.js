import { mount } from '@vue/test-utils';
import TaskList from './TaskList.vue';

describe('TaskList.vue', () => {
	it('renders task names and subheadings', async () => {
		const tasks = [
			{
				id: 1,
				name: 'Task 1',
				subHeading: 'Subheading 1',
			},
			{
				id: 2,
				name: 'Task 2',
				subHeading: 'Subheading 2',
			}
		];

		const wrapper = mount(TaskList, {
			data() {
				return {
					taskStore: {
						tasks: tasks,
						fetchTasks: jest.fn(),
						fetchTaskById: jest.fn(),
					},
				};
			},
		});

    // Check if the task names and subheadings are rendered
		expect(wrapper.text()).toContain('Task 1');
		expect(wrapper.text()).toContain('Subheading 1');
		expect(wrapper.text()).toContain('Task 2');
		expect(wrapper.text()).toContain('Subheading 2');
	});

	it('selects a task when clicked', async () => {
		const tasks = [
			{
				id: 1,
				name: 'Task 1',
				subHeading: 'Subheading 1',
			}
		];

		const wrapper = mount(TaskList, {
			data() {
				return {
					taskStore: {
						tasks: tasks,
						fetchTasks: jest.fn(),
						fetchTaskById: jest.fn(),
					},
				};
			},
		});

    // Mock the fetchTaskById method
		const mockFetchTaskById = jest.fn();
		wrapper.vm.taskStore.fetchTaskById = mockFetchTaskById;

    // Trigger a task click
		await wrapper.find('.list-item').trigger('click');

    // Check if the fetchTaskById method is called with the correct argument
		expect(mockFetchTaskById).toHaveBeenCalledWith(1);
	});
});
