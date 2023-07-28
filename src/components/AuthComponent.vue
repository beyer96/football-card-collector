<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <form class="wrapper-form" @submit.prevent="submitCallback">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder="Enter your username">
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password">
      </div>
      <div class="actions">
        <button type="submit">Sign in</button>
        <a href="#" class="link-black">Forgot password?</a>
        <p>
          <span>Haven't account yet?</span>
          <a href="#" class="sign-up link-green">Sign up!</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    submitCallback: () => void
  }>()
</script>

<style scoped lang="scss">
@import "../stylesheets/constants.scss";

.wrapper {
  width: 430px;
  height: 525px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 40px;
  background-color: #F0F0F0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  h1 {
    margin-bottom: 40px;
  }

  &-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    input {
      width: 100%;
      height: 40px;
      padding-left: 2px;
      border-bottom: 1px solid black;
      background-color: transparent;
      font-size: 16px;

      &:focus-visible {
        border-bottom-width: 2px;
        outline: none;
      }

      &::placeholder {
        color: #828781;
      }
    }

    label {
      display: block;
      font-size: 20px;
    }
  }

  .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: auto;

      button {
        width: 100%;
        padding: 14px 16px;
        border: 3px solid $primary-green;
        border-radius: 12px;
        background: transparent;
        font-size: 24px;
        color: $primary-green;
        transition: 250ms;

        &:hover {
          cursor: pointer;
          color: $primary-green-hover;
          background: $bg-green-hover;
        }
      }

      .sign-up {
        margin-left: 4px;
      }
    }
}
</style>