const Counter = {
    data() {
        return {
            title: 'Счётчик',
            counter: 0
        }
    }
}

const Notes = {
    data() {
        return {
            title: 'Список заметок',
            notesPlaceholder: 'Введите название заметки',
            notesValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },

    methods: {
        addNewNote() {
            if (this.notesValue === '') {

            }
            else {
                this.notes.push(this.notesValue)
                this.notesValue = ''
            }
        },

        toUpperCase(item) {
            return item.toUpperCase()
        },

        removeNote(index) {
            this.notes.splice(index, 1)
        }
    },

    watch: {
        notesValue(value) {
            if(value.length > 20) {
                this.notesValue = ''
            }
        }
    }
}


Vue.createApp(Counter).mount('#counter');
Vue.createApp(Notes).mount('#notes');













