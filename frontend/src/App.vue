<template>
	<router-view />
</template>

<script setup>
import { Notify } from 'quasar';

Notify.setDefaults({
	position: 'top',
	timeout: 4000, // milliseconds
	textColor: 'white',
	actions: [
		{
			icon: 'close',
			color: 'white',
		}
	],
});
</script>