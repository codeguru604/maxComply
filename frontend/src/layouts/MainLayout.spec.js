import { mount, createLocalVue } from '@vue/test-utils';
import Layout from './MainLayout.vue';
import Quasar from 'quasar';
import VueRouter from 'vue-router';

// Create a local Vue instance
const localVue = createLocalVue();
localVue.use(Quasar, VueRouter);

describe('Layout.vue', () => {
	it('renders the logo with the correct height and width', () => {
		const wrapper = mount(Layout, {
			localVue,
			stubs: ['router-view'],
		});

    // Check if the q-img element has the correct height and width
		const logoImg = wrapper.find('q-img');
		expect(logoImg.attributes('style')).toContain('height: 70px;');
		expect(logoImg.attributes('style')).toContain('width: 120px;');
	});
});
