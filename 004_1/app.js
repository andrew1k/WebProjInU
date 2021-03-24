const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title:  'This is template'
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Changed!'
        }
    },
    // template: `
    // <div class="card center">
    //     <h1>{{title}}</h1>
    //     <button class="btn" @click="title = 'Changed!">Change</button>
    // </div>
    // `
    render() {
        return h('div', {className: 'card center'}, [
            h('h1', {}, this.title),
            h('button', {className: 'btn', onClick:this.changeTitle}, 'Change')
        ])
    }
})

app.mount('#app')