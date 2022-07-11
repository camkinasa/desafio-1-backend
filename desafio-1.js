class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = [mascotas]
    }
    getFullName(){
        console.log("Nombre completo: ", `${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        console.log("Cantidad de mascotas: ", this.mascotas.length)
    }
    addBook(titulo, autor){
        this.libros.push({titulo: titulo, autor: autor})
    }
    getBookNames(){
        const arrayLibros = this.libros.map(libro => {return libro.titulo} )
        console.log(arrayLibros)
    }
}

const usuario = new Usuario("Camila", "Ramirez", [{titulo: "Coma", autor: "Robin Cook"}], ["Cobalto"])
usuario.getFullName()
usuario.addMascota("Morena")
usuario.countMascotas()
usuario.addBook("Farmacología clínica", "Goodman")
usuario.getBookNames()