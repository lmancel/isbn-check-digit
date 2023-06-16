<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{ message: string | undefined }>()
    const hidden = computed(() => !props.message)
</script>

<template>
    <div class="error-container" :hidden="hidden">
        <span>{{ props.message }}</span>
    </div>
</template>

<style scoped>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-error-background);
        color: var(--color-error);
        padding: 10px;
    }

    div[hidden] {
        visibility: hidden;
    }
</style>