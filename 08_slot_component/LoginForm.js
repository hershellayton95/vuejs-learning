import CustomInput from './CustomInput.js'
import Hello from './Hello.js'

const LoginForm = {
    template: `
            <form @submit.prevent="hadleSubmit">
                <h1>{{title}}</h1>
                <hello>Ciao</hello>
                <custom-input v-for="(item, i) in inputs" :key="i+item" :typeInput="item.type" :label="item.label" v-model="item.value"/>
                <button>Login</button>
            </form>
        `,
    components: {
        "custom-input": CustomInput,
        hello: Hello
    },
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
        };
    },
    methods: {
        hadleSubmit() {
            console.log(this.email, this.password);
        }
    }
};

export default LoginForm;
