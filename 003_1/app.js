Vue.createApp({
    data() {
        return {
            title: 'I am Groot',
            person: {
                name: 'Meg',
                last: 'Rew',
                age: 24
            },
            items: [1, 2, 3, 4, 5, 6]
        }},
    methods: {
        // addItem() {
        //     this.$refs.myInput.value
        // }
    }
}).mount('#app')