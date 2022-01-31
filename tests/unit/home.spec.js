import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('renders default text', () => {
    const msg = 'PKCE Flow w/ Okta Hosted Login Page'
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toContain(msg)
  })
})
