<template>
  <pre>{{scriptData}}</pre>
</template>
<script>
export default  {
  props: {
    scriptData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
