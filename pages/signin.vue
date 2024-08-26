<template>
  <div class="container pt-[200px]">
    <form
      @submit.prevent="handleSubmit"
      class="p-4 w-[600px] mx-auto space-y-4 bg-black/30 border border-black rounded-lg"
    >
      <input
        class="w-full bg-transparent border-b border-black font-mono px-2 py-1 outline-none text-white"
        type="text"
        placeholder="Логин"
        v-model="formData.login"
      />
      <input
        class="w-full bg-transparent border-b border-black font-mono px-2 py-1 outline-none text-white"
        type="password"
        placeholder="Пароль"
        v-model="formData.password"
      />

      <p v-if="requestErrorMessage" class="text-red-500 text-sm text-center">{{ requestErrorMessage }}</p>

      <GradientButton elementsPosition="center" text-classes="text-[#DD9300]">
        <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5">Войти</span>
      </GradientButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import GradientButton from '~/components/ui/GradientButton.vue';
import { definePageMeta } from '~/utils/definePageMeta';
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  title: 'Sign In',
});

const formData = ref({
  login: '',
  password: '',
});

const requestErrorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleSubmit = async () => {
  try {
    await authStore.login(formData.value.login, formData.value.password);
    router.push('/');  // Перенаправление на главную страницу после успешной авторизации
  } catch (error) {
    console.error('Ошибка при авторизации:', error);
    requestErrorMessage.value = error.response?.data?.message || 'Ошибка при авторизации';
  }
};
</script>
