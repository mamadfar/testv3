const app = Vue.createApp({
    data() {
        return {
            name: "mamad",
            isMamad: true,
            books: [
                {title: "mamad1", author: "farhadi1", isFav: true},
                {title: "mamad2", author: "farhadi12", isFav: false},
                {title: "mamad3", author: "farhadi123", isFav: true},
            ]
        }
    },
    methods: {
        handleChangeName(newName) {
            this.name = newName;
            this.isMamad = !this.isMamad
        },
        // handleChangeFavorite(title) {
        //     let findBook = this.books.find(book => book.title === title);
        //     findBook.isFav = !findBook.isFav;
        // }
        handleChangeFavorite(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount("#app")