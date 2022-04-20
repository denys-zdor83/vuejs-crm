<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#">
          <i
            class="material-icons black-text"
            @click.prevent="$emit('toggleSidebar')"
          >dehaze</i>
        </a>
        <span class="black-text"> {{ date | filterDate }} </span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
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
    initDate: null,
    initDropdown: null
  }),
  methods: {
    logout () {
      this.$router.push('/login?message=logout')
    }
  },
  mounted () {
    this.initDate = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.initDropdown = window.M.Dropdown.init(this.$refs.dropdown)
  },
  beforeDestroy () {
    clearInterval(this.initDate)
    if (this.initDropdown && this.initDropdown.destroy) {
      this.initDropdown.destroy()
    }
  }
}
</script>
