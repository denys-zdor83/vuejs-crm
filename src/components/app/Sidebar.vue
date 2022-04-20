<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="item in links"
      :key="item.url"
      :to="item.url"
      tag="li"
      :exact="item.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer"> {{ item.title }} </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { url: '/', title: 'Счет', exact: true },
      { url: '/history', title: 'История' },
      { url: '/planning', title: 'Планирование' },
      { url: '/record', title: 'Новая запись' },
      { url: '/categories', title: 'Категории' }
    ]
  })
}
</script>
