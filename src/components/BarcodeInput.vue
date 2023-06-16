<script setup lang="ts">
    import { barcodeSchema } from '@/scripts/barcode';
    import computeCheckDigit from '@/scripts/barcode/check-digit';
    import { computed, ref, watch } from 'vue';
    import { ValidationError } from 'yup';

    import ErrorMessage from './ErrorMessage.vue'
    import CheckDigit from './CheckDigit.vue'

    const isbn = ref('')
    const invalidInput = ref(false)
    const errorMessage = ref<string | undefined>()
    const result = computed(() => (invalidInput.value || !isbn.value) ? '' : computeCheckDigit(isbn.value))

    watch(isbn, async (lastValue) => {
        invalidInput.value = false
        errorMessage.value = undefined

        try {
            await barcodeSchema.validate(lastValue)
        } catch (error) {
            if (error instanceof ValidationError) {
                invalidInput.value = true
                errorMessage.value = error.message
            } else {
                console.error('An error occurred during input validation', error)
                errorMessage.value = 'An unknown error has occurred, please retry'
            }
        }
    })
</script>

<template>
    <div class="container">
        <h1>ISBN check digit</h1>

        <ErrorMessage class="error" :message="errorMessage" />
        
        <div class="input-result">
            <input type="text" v-model="isbn" placeholder="Enter ISBN code" :invalid="invalidInput">
            -
            <CheckDigit :value="result"/>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 200px;
        max-width: 800px;
    }

    .error {
        width: 80%;
    }

    .input-result {
        width: 80%;
        padding: 10px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .input-result > * {
        height: 100%;
        margin: 5px;
    }

    input[invalid="true"] {
        border: 2px solid var(--color-error);
    }

    h1 {
        color: var(--color-heading);
    }
</style>