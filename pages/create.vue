<template>
  <form @submit="handleSubmit">

    <label class="block" for="method">
      <span class="text-gray-700 block">Method</span>
      <select name="method" id="method" required v-model="method">
        <option value="get">Get</option>
        <option value="post">Post</option>
        <option value="put">Put</option>
        <option value="delete">Delete</option>
      </select>
    </label>

    <label class="block" for="path">
      <span class="text-gray-700 block">Method</span>
      <input type="text" name="path" id="path" required v-model="path" />
    </label>

    <label class="block" for="code">
      <span class="text-gray-700 block">Method</span>
      <textarea id="code" name="code" rows="4" cols="50" required v-model="code" />

    </label>

    <button class="border-2 border-gray-800 text-gray-800 px-3 py-1 rounded hover:border-gray-300">Save</button>
  </form>

</template>

<script>
export default {
  layout:'back',
  data() {
    return {
      method: 'get',
      path: '',
      code: '',
    }
  },
methods: {
  handleSubmit(e) {
    e.preventDefault()

    console.log(this.method, this.path, this.code)
  }
}
}
</script>
