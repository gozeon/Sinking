<template>
  <div class="w-1/2 mx-auto bg-gray-100 p-4">
    <h1>Hello world!</h1>
    <pre>{{mountains}}</pre>
  </div>

</template>

<script>
export default {
  async asyncData({params, $axios}) {
    const { data } = await $axios.get('/getJSON')

    return { mountains: data }
  }
}
</script>
