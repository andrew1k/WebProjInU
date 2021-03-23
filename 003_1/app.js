Vue.createApp({
    data: () => ({
        title: 'I am Groot',
        person: {
            name: 'Meg',
            last: 'Rew',
            age: 24
        },
        items: [1, 2, 3, 4, 5, 6]
    })
}).mount('#app')