<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{
              invalid : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)
            }"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Email is required</small>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
        >Enter correct email address</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              invalid : ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)
            }"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Password is required</small>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >Password must be not less then {{ $v.password.$params.minLength.min }} now it's - {{ password.length }} </small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{
              invalid : $v.name.$dirty && !$v.name.required
            }"
        >
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Name is required</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <a href="/">Войти!</a>
      </p>
    </div>
  </form>
</template>

<script>
import { email, minLength, required } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { minLength: minLength(6), required },
    name: { required },
    agree: { checked: v => v }
  },
  methods: {
    submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$router.push('/')
    }
  }
}
</script>
