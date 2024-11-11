import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from '../Home.vue'

describe('Home', () => {
  it('renders default text', () => {
    const msg = 'PKCE Flow w/ Okta Hosted Login Page'
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain(msg)
  })
})
