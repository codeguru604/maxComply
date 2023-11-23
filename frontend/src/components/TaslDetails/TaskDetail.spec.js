import { mount } from '@vue/test-utils';
import TaskDetail from './TaskDetails.vue';

describe('TaskDetails.vue', () => {
	it('renders task name when a task is selected', async () => {
		const selectedTask = {
			id: 1,
			name: 'Test Task',
			status: 'open',
			fields: [],
		};

		const wrapper = mount(TaskDetail, {
			props: {
				selectedTask: selectedTask,
			},
		});

		await wrapper.setData({
			formData: {
				someFieldId: 'someValue',
			},
		});

		expect(wrapper.text()).toContain('Test Task');
	});

	it('renders "No task selected." when no task is selected', () => {
		const wrapper = mount(TaskDetail, {
			props: {
				selectedTask: null,
			},
		});

		expect(wrapper.text()).toContain('No task selected.');
	});

	it('submits form when the submit button is clicked', async () => {
		const selectedTask = {
			id: 1,
			name: 'Test Task',
			status: 'open',
			fields: [],
		};

		const wrapper = mount(TaskDetail, {
			props: {
				selectedTask: selectedTask,
			},
		});

		await wrapper.setData({
			formData: {
				someFieldId: 'someValue',
			},
		});

    // Mock the taskStore.submitTaskForm method
		const mockSubmitTaskForm = jest.fn();
		wrapper.vm.taskStore.submitTaskForm = mockSubmitTaskForm;

    // Trigger form submission
		await wrapper.find('.form-submit').trigger('click');

    // Check if the submitTaskForm method is called with the correct arguments
		expect(mockSubmitTaskForm).toHaveBeenCalledWith(1, {
			someFieldId: 'someValue',
		});
	});
});
