<template>
<div>
<div class="tab">
  <button class="tablinks" :class="{'active': componentId === component}" @click="changeTab" v-for="(component, index) in components" :key="index">{{component}}</button>
</div>
<div class="tab-content">
  <component :is="componentId"></component>
</div>
</div>
</template>

<script>
import Home from '@/pages/Home'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
export default {
  components: {
    Home,
    Page1,
    Page2
  },
  methods: {
    changeTab ($event) {
      const target = $event.target
      this.componentId = target.innerText
    }
  },
  data () {
    return {
      componentId: ''
    }
  },
  props: {
    components: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

.tab button:hover {
    background-color: #ddd;
}

.tab button.active {
    background-color: #ccc;
}

.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}

</style>
