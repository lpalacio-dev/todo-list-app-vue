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
                @change="doneTodoFun(task)"
                :checked="task.status"
                class="w-full h-full" 
            >
        </div>
        <div
            class="w-[80%] break-normal pl-2"
        >
            <template v-if="task.editing">
                <input
                type="text"
                v-model="editedText"
                @keyup.enter="finishEditing(task)"
                class="w-full bg-transparent border-none focus:ring focus:outline-none focus:border-blue-500 px-4 py-2 rounded-md"
                ref="input"
                >
            </template>
            <template v-else>
                <span>{{ task.texto }}</span>
            </template>

        </div>
        <div class="w-[15%] flex justify-center">
            <div 
            @click="startEditing(task)"
            class="w-[50%] flex justify-center items-center cursor-pointer">
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