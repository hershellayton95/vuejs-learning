const app = Vue.createApp({});
app.component('login-form', {
    template: `
            <form @submit.prevent="hadleSubmit">
                <h1>{{title}}</h1>
                <custom-input v-for="(item, i) in inputs" :key="i+item" :typeInput="item.type" :label="item.label" v-model="item.value"/>
                <button>Login</button>
            </form>
        `,
    components: ["custom-input"],
    data() {
        return {
            title: "Login Form",
            inputs: [
                {
                    type: "text",
                    label: "email",
                    value: ""
                },
                {
                    type: "password",
                    label: "password",
                    value: ""
                }
            ]
        }
    },
    methods: {
        hadleSubmit() {
            console.log(this.email, this.password);
        }
    }
})
app.component('custom-input', {
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
                this.$emit('update:modelValue', value)
            }
        }
    }
})

app.mount('#app');
