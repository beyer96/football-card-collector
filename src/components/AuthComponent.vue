<template>
  <div class="wrapper">
    <h1>{{ FORM_TEXTS[type].title }}</h1>
    <form class="wrapper-form" @submit.prevent="submitCallback">
      <div class="input-group">
        <label :for="`${type}-username`">Username</label>
        <input type="text" name="username" :id="`${type}-username`" :placeholder="FORM_TEXTS[type].placeholders.username" required>
      </div>
      <div v-if="type != 'forgottenPassword'" class="input-group">
        <label :for="`${type}-password`">Password</label>
        <input type="password" name="password" :id="`${type}-password`" :placeholder="FORM_TEXTS[type].placeholders.password" minlength="8" required>
      </div>
      <div v-if="type == 'register'" class="ínput-group">
        <label for="repeat-password">Confirm your password</label>
        <input type="password" name="repeat-password" id="repeat-password" placeholder="Type your password once again" minlength="8" required>
      </div>
      <div class="actions">
        <button type="submit">{{ FORM_TEXTS[type].buttonTitle }}</button>
        <a v-if="type != 'forgottenPassword'" href="#" class="link-black">Forgot password?</a>
        <a v-else href="#" class="link-black">Create new account here</a>
        <p>
          <span>{{ FORM_TEXTS[type].ctlText }}</span>
          <a href="#" @click="$emit('ctlClick', type == 'login' ? 'register' : 'login')" class="ctl-text link-green">{{ FORM_TEXTS[type].ctlText2 }}</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: string
  submitCallback: () => void
}>()

const FORM_TEXTS = {
  login: {
    title: "Sign in",
    placeholders: {
      username: "Enter your username",
      password: "Enter your password",
    },
    buttonTitle: "Sign in",
    ctlText: "Haven't account yet?",
    ctlText2: "Sign up!"
  },
  register: {
    title: "Create your account",
    placeholders:  {
      username: "Choose your username",
      password: "At least 8 characters",
      confirmPassword: "Type your password once again",
    },
    buttonTitle: "Kick off my account!",
    ctlText: "Already have an account?",
    ctlText2: "Sign in",
  },
  forgottenPassword: {
    title: "Forgotten password",
    placeholders: {
      username: "Enter your username",
    },
    buttonTitle: "Reset password",
    ctlText: "Did you remember?",
    ctlText2: "Sign in",
  }
}
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
  padding: 25px 40px;
  background-color: #F0F0F0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  h1 {
    margin-bottom: 30px;
  }

  &-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

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

      .ctl-text{
        margin-left: 4px;
      }
    }
}
</style>