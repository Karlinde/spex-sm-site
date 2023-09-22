<script setup>
defineProps({
    origin: String,
    name: String,
})
</script>

<template>
    <div class="py-1">
        <div class="rounded bg-gray-100 shadow-md">
            <div class="py-2 px-20 text-xl font-bold text-center ">
                {{ origin }}
            </div>
            <div class="pb-2 text-center text-sm italic">
                {{ name }} 
            </div>
        </div>
    </div>
</template>