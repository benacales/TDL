Vue.component ("todo-item", {
    template : `<div class = "item">
    <span class = "task">{{item}}</span>
    <input type = "checkbox"/>
    <i @click = "remove" class = "fa fa-times" id = "theX"></i>
    </div>`,
    props : [
        "item"
    ],

    methods:{
        remove() {
            this.$emit("remove", this.item)
        }
    }
})