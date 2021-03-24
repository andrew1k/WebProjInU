const App = {
    data() {
        return {
            placeholderString: 'Text me',
            title: 'Notes',
            inputValue: '',
            notes: [

            ]
        }
    },
    methods: {
        inputChanger(e) {
            this.inputValue = e.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    }
}

Vue.createApp(App).mount('#app')