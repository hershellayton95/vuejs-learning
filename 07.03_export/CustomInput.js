const CustomInput = {
    template: `
        <label>
            {{ label }}
            <input :type="typeInput" v-model="inputValue"/>
        </label>
        `,
    props: ["label", "typeInput", "modelValue"],
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
};

