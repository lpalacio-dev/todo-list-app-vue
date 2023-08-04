<script lang="ts" src="./TodoTask.ts"></script>
<template>
    <div 
        class="w-full flex py-4 px-2 border-b-2 border-gray-300 hover:bg-gray-100"
        :class="task.status ? 'bg-green-100 hover:bg-green-100' : '' "
    >
        <div class="w-[5%] p-2">
            <input
                type="checkbox"
                id="myCheckbox"
                @change="funcion(task)"
                :checked="task.status"
                class="w-full h-full" 
            >
        </div>
        <div
            class="w-[80%] break-normal pl-2"
        >
            {{ task.texto }}
        </div>
        <div class="w-[15%] flex justify-center">
            <div class="w-[50%] flex justify-center items-center cursor-pointer">
                <i class="fa-solid fa-pencil"></i>
            </div>
            <div 
                @click="deleteTodoFun(task.id)"
                class="w-[50%] flex justify-center items-center cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
    </div>
</template>