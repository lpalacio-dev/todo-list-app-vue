<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
  import Inputbar from '@/components/inputbar/Inputbar.vue'
  import TodoList from '@/components/todo-list/TodoList.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="">
      <div class="w-full p-4 text-6xl text-center">
        My Todo List
      </div>
      <Inputbar></Inputbar>
      <TodoList></TodoList>
    </div>
  </main>
</template>
