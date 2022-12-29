

<script>
export default {
    props: ["label", "typeInput", "modelValue"],

    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            }
        }
    }
};
</script>

<template>
    <label>
        {{ label }}
        <input :type="typeInput" v-model="inputValue" />
    </label>
</template>
