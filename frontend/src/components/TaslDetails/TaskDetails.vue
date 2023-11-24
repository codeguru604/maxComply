<template>
	<div
		v-if="selectedTask"
		className="task-detail"
	>
		<h4 class="task-title">
			{{ selectedTask.name }}
		</h4>
		<div v-if="selectedTask.status">
			<q-form @submit="submitForm">
				<div
					v-for="field in selectedTask.fields"
					:key="field.id"
				>
					<div>
						<div
							v-if="field.type === 'paragraph'"
							className="field-text"
						>
							<p>{{ field.content }}</p>
						</div>
						<div
							v-else-if="field.type === 'inputText'"
							className="field-input"
						>
							<q-input
								v-model="formData[field.id]"
								outlined
								:label="field.label"
								:rules="getValidationRules(field)"
								:max-length="field.validation ? field.validation.max : null"
								:counter="field.validation && field.validation.max ? true : false"
								:colspan="getColSpan(field.size)"
								:optional="field.optional"
							/>
						</div>
						<div
							v-else-if="field.type === 'inputSelect'"
							className="field-input"
						>
							<q-select
								v-model="formData[field.id]"
								outlined
								:label="field.label"
								:options="field.options"
								:rules="getValidationRules(field)"
								:colspan="getColSpan(field.size)"
								:optional="field.optional"
							/>
						</div>
						<div
							v-else-if="field.type === 'inputDocument'"
							className="field-upload"
						>
							<q-uploader
								v-model="formData[field.id]"
								outlined
								:label="field.label"
								accept=".pdf, .jpg, .png"
								:rules="getValidationRules(field)"
								:colspan="getColSpan(field.size)"
								:optional="field.optional"
								class="field-uploader"
							/>
						</div>
						<div
							v-else-if="field.type === 'inputTextArea'"
							className="field-area"
						>
							<label className="field-label">{{ field.label }}</label>
							<textarea
								v-model="formData[field.id]"
								outlined
								:label="field.label"
								:rows="3"
								:rules="getValidationRules(field)"
								:max-length="field.validation ? field.validation.max : null"
								:counter="field.validation && field.validation.max ? true : false"
								:colspan="getColSpan(field.size)"
								:optional="field.optional"
								class="field-textarea"
							/>
						</div>
					</div>
				</div>
				<q-btn
					type="submit"
					label="Submit"
					class="form-submit"
				/>
			</q-form>
		</div>
	</div>
	<div v-else>
		<p>No task selected.</p>
	</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useTaskStore } from '../../stores/taskStore';
import { Notify } from 'quasar';

const formData = ref({});
const selectedTask = ref(null);
const taskStore = useTaskStore();
const submitting = ref(true);

const showNotify = (message, color) => {
	Notify.create({
		message: message,
		color: color,
		position: 'top',
		timeout: 2000,
	});
};

const getValidationRules = (field) => {
	const rules = [];
	if (field.validation) {
		if (field.validation.min) {
			rules.push(val => val && val.length >= field.validation.min || `Min length is ${field.validation.min}`);
		}
		if (field.validation.max) {
			rules.push(val => val && val.length <= field.validation.max || `Max length is ${field.validation.max}`);
		}
	}
	return rules;
};
const getColSpan = (size) => {
	return {
		lg: size.lg || 12,
		md: size.md || 12,
		sm: size.sm || 12,
		xs: size.xs || 12,
	};
};
const submitForm = async () => {
	const taskId = selectedTask.value.id;

	try {
		await taskStore.submitTaskForm(taskId, formData.value);
		showNotify('Form submitted successfully!', 'green');
	} catch (error) {
		showNotify('Error while submitting form', 'red');
	} finally {
		submitting.value = false;
	}
};
watchEffect(() => {
	selectedTask.value = taskStore.selectedTask;
});
</script>

<style scope lang="scss">
@import '../../css/app.scss';
</style>