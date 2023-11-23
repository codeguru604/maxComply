<template>
	<q-page>
		<div class="page-container">
			<task-list />
			<task-details />
		</div>
	</q-page>
</template>

<script setup>
import TaskList from 'src/components/TaskList/TaskList.vue';
import TaskDetails from 'src/components/TaslDetails/TaskDetails.vue';
</script>

<style scope lang="scss">
@import "../css/app.scss";
</style>