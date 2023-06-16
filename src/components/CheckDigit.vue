<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{ value: number | '' }>()
    const displayedValue = computed(() => props.value === '' ? '?' : props.value)
</script>

<template>
    <div class="container">
        <span class="digit">{{ displayedValue }}</span>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: var(--color-background-highlight);
        border-radius: 3px;
    }

    .digit {
        font-size: 2rem;
        color: var(--vt-c-text-light-1);
    }
</style>