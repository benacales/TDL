Vue.component ("todo-form", {
    template:`<div class = "form">
    <input v-model = 'desc' type = "text" placeholder = "Enter in what you will end up procrastinating anyways">
    <button @click = "add" type = "button"> Add </button>
    </div>`,
    data(){
        return{desc:""}
    }, 
    methods:{
        add() {
            this.$emit("add", this.desc); 
            this.desc = "";
        }
    }


})
