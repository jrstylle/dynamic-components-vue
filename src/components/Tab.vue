<template>
<div>
<div class="tab">
  <button class="tablinks" :class="{'active': componentId === component}" @click="changeTab" v-for="(component, index) in components" :key="index">{{component}}</button>
</div>
<div class="tab-content">
  <keep-alive>
    <component :is="componentId"></component>
  </keep-alive>
</div>
</div>
</template>

<script>
export default {
  methods: {
    changeTab ($event) {
      const target = $event.target
      this.componentId = this.requireComponent(target.innerText)
    },
    requireComponent (componentName) {
      return (resolve) => require([`@/pages/${componentName}`], resolve)
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
