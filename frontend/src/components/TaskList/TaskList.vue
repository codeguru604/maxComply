<template>
	<div className="list-container">
		<q-toolbar>
			<q-toolbar-title>Task List</q-toolbar-title>
		</q-toolbar>
		<q-list
			bordered
			separator
		>
			<q-item
				v-for="task in taskStore.tasks"
				:key="task.id"
				v-ripple
				outlined
				clickable
				class="list-item"
				@click="selectTask(task.id)"
			>
				<q-item-section>
					<q-item-label class="list-item-title">
						{{ task.name }}
					</q-item-label>
					<q-item-label caption>
						{{ task.subHeading }}
					</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTaskStore } from 'src/stores/taskStore';
import { Notify } from 'quasar';
const loading = ref(false);
const taskStore = useTaskStore();

const showNotify = (message, color, loading) => {
	Notify.create({
		spinner: loading,
		message: message,
		color: color,
		position: 'top',
		timeout: 2000,
	});
};

const selectTask = (taskId) => {
	loading.value = true;
	showNotify('Loading', 'blue', true);
	taskStore.fetchTaskById(taskId).then(() => {
		loading.value = false;
	});
};

onMounted(() => {
	loading.value = true;
	taskStore.fetchTasks().then(() => {
		if (taskStore.tasks.length > 0) {
			selectTask(taskStore.tasks[0].id);
		}
		loading.value = false;
	});
});
</script>

<style scope lang="scss">
@import '../../css/app.scss';
</style>