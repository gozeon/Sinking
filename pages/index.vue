<template>
  <div>
    <NuxtLink
      to="/create"
      class="border-2 border-gray-800 text-gray-800 px-3 py-1 rounded hover:border-gray-300 h-6"
      >New</NuxtLink
    >

    <template v-if="scriptsData.length">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Method</th>
            <th>Path</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          <ScriptItem
            v-for="(item, index) in scriptsData"
            :key="index"
            :scriptData="item"
          />
        </tbody>
      </table>
    </template>
    <div v-else class="text-center text-gray-300">empty</div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get('/script')

    return { scriptsData: data }
  },
}
</script>
