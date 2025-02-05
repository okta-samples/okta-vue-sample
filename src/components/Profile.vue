/*! * Copyright (c) 2018-Present, Okta, Inc. and/or its affiliates. All rights
reserved. * The Okta software accompanied by this notice is provided pursuant to
the Apache License, Version 2.0 (the "License.") * * You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0. * Unless required by
applicable law or agreed to in writing, software * distributed under the License
is distributed on an "AS IS" BASIS, WITHOUT * WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied. * * See the License for the specific language
governing permissions and limitations under the License. */

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth } from '@okta/okta-vue'

const $auth = useAuth()
let claims = ref([])

onMounted(async () => {
  const idToken = await $auth.tokenManager.get('idToken')
  claims.value = Object.entries(idToken.claims).map(entry => ({
    claim: entry[0],
    value: entry[1],
  }))
})
</script>

<template>
  <div class="profile">
    <h1 class="ui header">
      <i aria-hidden="true" class="drivers license outline icon"> </i>
      My User Profile (ID Token Claims)
    </h1>
    <p>
      Below is the information from your ID token which was obtained during the
      <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce"
        >PKCE Flow</a
      >
      and is now stored in local storage.
    </p>
    <p>
      This route is protected by Okta with the
      <code>requiresAuth: true</code> metadata in <code>router/index.js</code>.
      This ensures that this page cannot be accessed until you have
      authenticated.
    </p>
    <table class="ui table">
      <thead>
        <tr>
          <th>Claim</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(claim, index) in claims" :key="index">
          <td>{{ claim.claim }}</td>
          <td :id="'claim-' + claim.claim">{{ claim.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
