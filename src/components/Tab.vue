<template>
<div>
<div class="tab">
  <router-link :to="{name: component}" tag="button" class="tablinks"  v-for="(component, index) in components" :key="index">{{component}}</router-link>
</div>
<div class="tabcontent">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</div>
</template>

<script>
export default {
  methods: {
    changeTab ($event) {
      const target = $event.target.innerText
      this.$router.push({to: {name: target}})
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

.tab-content {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}

</style>
