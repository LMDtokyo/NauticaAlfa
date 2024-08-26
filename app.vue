<template>
  <div>
    <AppAlert />

    <NuxtLayout>
      <NuxtLoadingIndicator color="#a8783d" :throttle="100" />

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang='ts'>
useAuthStore().syncTokens(); // Если токены обновит при рендере на сервере, то чтобы потом в куки переписать новые токены которые в стейте
</script>
