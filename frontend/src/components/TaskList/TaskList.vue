<template>
	<div
		className="list-container"
	>
		<q-toolbar>
			<q-toolbar-title>Task List</q-toolbar-title>
		</q-toolbar>
		<q-input
			v-model="filterData"
			outlined
			label="Search List..."
			class="list-search"
			@keyup="changeFilter"
		>
			<template #prepend>
				<q-icon name="search" />
			</template>
		</q-input>
		<q-list
			bordered
			separator
		>
			<q-item
				v-for="task in listData"
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
import { useTaskStore } from '../../stores/taskStore';
import { Notify } from 'quasar';
const loading = ref(false);
const taskStore = useTaskStore();
const filterData = ref('');
const listData = ref([]);

const showNotify = (message, color, loading) => {
	Notify.create({
		spinner: loading,
		message: message,
		color: color,
		position: 'top',
		timeout: 2000,
	});
};
const changeFilter = () => {
	if (filterData.value) {
		listData.value = taskStore.tasks.filter(task => {
			return task.name.toUpperCase().includes(filterData.value.toUpperCase());
		});
	} else {
		listData.value = taskStore.tasks;
	}
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
			listData.value = taskStore.tasks;
			changeFilter();
			selectTask(taskStore.tasks[0].id);
		}
		loading.value = false;
	});
});
</script>

<style scope lang="scss">
@import '../../css/app.scss';
</style>