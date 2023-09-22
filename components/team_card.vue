<script setup>
defineProps({
    role: String,
    name: String,
    profile_pic: String,
    mail: String,
})
</script>

<template>
    <div class="py-1 px-1 sm:w-1/3">
        <div class="rounded px-8 bg-gray-100 shadow-md text-left h-full">
            <!-- <div class="">
                <img :src="profile_pic">
            </div> -->
            <div class="min-w-min">
                <div class="py-2 text-xl font-bold">
                    {{ name }}
                </div>
                <div class="pb-2 text-sm italic">
                    {{ role }}
                </div>
                <div class="pb-2 text-sm text-blue-700">
                    <a :href="'mailto:' + mail">{{ mail }}</a>
                </div>
            </div>
        </div>
    </div>
</template>