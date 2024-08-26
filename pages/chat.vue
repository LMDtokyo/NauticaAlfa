<template>
  <div class="container my-auto flex flex-col bg-black/30 md:px-8 py-2 rounded-[10px] border border-black">
    <div class="relative flex-1 flex flex-col-reverse space-y-2 max-h-[800px] overflow-auto">
      <component
        v-for="(message, idx) in messages"
        :is="message.system ? systemMessage : userMessage"
        :key="idx"
        :sender="message.sender"
        :timestamp="message.timestamp"
      >
        {{ message.content }}
      </component>

      <div
        style="margin: 0"
        class="sticky left-1/2 transform -translate-x-1/2 top-0 gap-[10px] items-center p-[10px] rounded-md flex w-fit bg-gradient-to-tr border from-[#080808]/40 from-[40%] to-[#401F00] border-[#FF9900]/20"
      >
        <img src="icons/chat.png" class="h-[26px] w-8" alt="" />
        <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5 text-[#DD9300]">Мировой чат</span>
      </div>
    </div>

    <div class="relative flex bg-[#484848]/30 border border-black/80 rounded-[10px] mt-3">
      <input
        v-model="message"
        @keyup.enter="sendMessage"
        class="bg-transparent py-4 pl-5 flex-1 text-gray-300 resize-none outline-none placeholder:font-medium placeholder:text-[#8d8d8b]"
        placeholder="Написать сообщение"
      />

      <div class="flex gap-1">
        <button class="px-1">
          <svg
            class="text-[#545453] duration-200 hover:text-white cursor-pointer h-8 w-8"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <button class="px-3" @click="sendMessage">
          <svg
            class="text-[#545453] duration-200 hover:text-white cursor-pointer h-8 w-8"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L3.269 3.126A59.768 59.768 0 021.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const messages = ref(
  new Array(20).fill({
    id: 1,
    system: false,
    sender: { id: 1, login: 'letmedietokyo', lvl: 437, avatar: 'img/logo0.png' },
    content: `I'm kissin' styrofoamWho know what I be on? That's what I be onShe know what I be onWho know what I be on?That's what I be on, baby, move alongI keep movin' onI keep movin' on`,
    timestamp: Date.now()
  })
);

messages.value.unshift({ id: 2, system: true, content: 'System message' });

const systemMessage = resolveComponent('SystemChatMessage');
const userMessage = resolveComponent('UserChatMessage');

const message = ref();
const sendMessage = () => {
  if (!message.value) return;
  // Добавляем в начало массива, потому-что в диве стоит flex, flex-col-reverse ( чтобы скроллбар был снизу ), и поэтому сообщения в массиве должны идти от новых к старым
  messages.value.unshift({
    id: 1,
    sender: { id: 1, login: 'kofeek', lvl: 241, avatar: 'img/logo1.png' },
    content: message.value.trim(),
    timestamp: Date.now()
  });

  if (messages.value.length > 40) messages.value.pop();

  message.value = null;
};
</script>
