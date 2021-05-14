<template>
  <tr>
    <td>{{ scriptData.id }}</td>
    <td>{{ scriptData.method }}</td>
    <td>{{ scriptData.path }}</td>
    <td>{{ scriptData.published }}</td>
  </tr>
</template>
<script>
export default {
  props: {
    scriptData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
