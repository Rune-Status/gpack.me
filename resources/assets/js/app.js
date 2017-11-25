import Vue from 'vue'
import { VueTyper } from 'vue-typer'
import VueTable from 'vuetable-2'

require('./bootstrap')

window.Vue = require('vue')

Vue.use(VueTable)

Vue.component('vue-typer', VueTyper)
// Vue.component('example-component', require('./components/ExampleComponent.vue'))

const app = new Vue({
    el: '#app'
})
