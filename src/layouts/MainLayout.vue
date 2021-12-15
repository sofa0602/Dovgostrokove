<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="app-main-layout">
      <Navbar @click="isOpen = !isOpen" />

      <Sidebar v-model="isOpen" :key="locale" />

      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link
          to="/record"
          class="btn-floating btn-large blue"
          v-tooltip="{ text: `${tooltip}`, position: 'left' }"
          :key="locale"
        >
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Sidebar from '@/components/app/Sidebar.vue'
import messages from '@/utils/messages'
import localizeFilter from '@/filters/localize.filter'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
    this.loading = false
  },
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    locale() {
      return this.$store.getters.info.locale
    },
    tooltip() {
      return localizeFilter('CreateNewRecord')
    },
  },
  watch: {
    error(fbError) {
      const html = messages[fbError.code]
      this.$error(html || localizeFilter('Unknown error'))
    },
  },
}
</script>
