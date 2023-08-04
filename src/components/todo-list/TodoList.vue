<script lang="ts" src="./TodoList.ts"></script>

<template>
    <div v-if="isTodoList" class="mt-4 flex justify-center w-full">
        <div class="w-[50%] shadow-md bg-white border-2 border-gray-300">
            <div v-for="todo in arrTodos" :key="todo.id">
                <TodoTask :todoTask="todo"></TodoTask>
            </div>
        </div>
    </div>
    <div v-else
        class="mt-4 flex justify-center w-full text-lg text-gray-400"
    >
        No hay tareas por hacer
    </div>
</template>