import Vue from 'vue/dist/vue.js'

const inputComponent = {
  template: 
  `
    <input type="text" 
      :placeholder = "placeholder"
      v-model="input" 
      @keyup.enter="monitorEnterKey"  
      class="input is-small">
  `,
  props: ["placeholder"],
  data() {
    return {
      input: '',
    }
  },
  methods: {
    monitorEnterKey() {
      this.$emit('add-note', {
        note: this.input,
        timestamp: new Date().toLocaleString()
      });
      this.input = '';
    }
  }
}

new Vue({
  el: '#app',
  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Enter a note.'
  },
  components: {
    'input-component': inputComponent
  }, 
  methods: {
    addNote(event) {
      this.notes.push(event.note); 
      this.timestamps.push(event.timestamp);
    }    
  }
})

