<template>
  <nav class="navbar light-blue darken-2">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons white-text">dehaze</i>
        </a>
        <span class="white-text">{{ date | date('datetime') }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            ref="dropdown"
            class="dropdown-trigger white-text"
            href="#"
            data-target="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>
                {{ 'ProfileTitle' | localize }}
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>
                {{ 'Exit' | localize }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    let element = this.$refs.dropdown
    this.dropdown = M.Dropdown.init(element, {
      constrainWidth: false,
    })
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  },
}
</script>
