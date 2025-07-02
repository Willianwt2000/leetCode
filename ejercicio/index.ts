type EstadoLibro = 'disponible' | 'prestado';

interface Libro {
    id: string;
    titulo: string;
    autor: string;
    añoPublicacion: number;
    estado: EstadoLibro;
}

interface Usuario {
    id: string;
    nombre: string;
    email: string;
}

interface Prestamo {
    id: string;
    libro: Libro;
    usuario: Usuario;
    fechaPrestamo: Date;
    fechaDevolucion?: Date;
}

type AlmacenLibros = Map<string, Libro>;
type AlmacenUsuarios = Map<string, Usuario>;
type AlmacenPrestamos = Map<string, Prestamo>;

function generarId(): string {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function añadirLibro(libros: AlmacenLibros, titulo: string, autor: string, añoPublicacion: number): Libro {
    if (!titulo.trim() || !autor.trim()) {
        throw new Error("El título y el autor del libro no pueden estar vacíos.");
    }
    const nuevoLibro: Libro = {
        id: `LIB-${generarId()}`,
        titulo,
        autor,
        añoPublicacion,
        estado: 'disponible'
    };
    libros.set(nuevoLibro.id, nuevoLibro);
    return nuevoLibro;
}

function añadirUsuario(usuarios: AlmacenUsuarios, nombre: string, email: string): Usuario {
    if (!nombre.trim() || !email.trim()) {
        throw new Error("El nombre y el email del usuario no pueden estar vacíos.");
    }
    if (Array.from(usuarios.values()).some(u => u.email === email)) {
        throw new Error(`Ya existe un usuario con el email: ${email}`);
    }
    const nuevoUsuario: Usuario = {
        id: `USU-${generarId()}`,
        nombre,
        email
    };
    usuarios.set(nuevoUsuario.id, nuevoUsuario);
    return nuevoUsuario;
}

function buscarLibros(libros: AlmacenLibros, query: string): Libro[] {
    const q = query.toLowerCase();
    return Array.from(libros.values()).filter(libro =>
        libro.titulo.toLowerCase().includes(q) || libro.autor.toLowerCase().includes(q)
    );
}

function prestarLibro(
    libros: AlmacenLibros,
    usuarios: AlmacenUsuarios,
    prestamos: AlmacenPrestamos,
    libroId: string,
    usuarioId: string
): Prestamo {
    const libro = libros.get(libroId);
    const usuario = usuarios.get(usuarioId);

    if (!libro) {
        throw new Error(`Libro con ID '${libroId}' no encontrado.`);
    }
    if (!usuario) {
        throw new Error(`Usuario con ID '${usuarioId}' no encontrado.`);
    }
    if (libro.estado === 'prestado') {
        throw new Error(`El libro "${libro.titulo}" ya está prestado.`);
    }

    libro.estado = 'prestado';
    libros.set(libro.id, libro);

    const nuevoPrestamo: Prestamo = {
        id: `PRES-${generarId()}`,
        libro,
        usuario,
        fechaPrestamo: new Date()
    };
    prestamos.set(nuevoPrestamo.id, nuevoPrestamo);
    return nuevoPrestamo;
}

function devolverLibro(libros: AlmacenLibros, prestamos: AlmacenPrestamos, prestamoId: string): Prestamo {
    const prestamo = prestamos.get(prestamoId);

    if (!prestamo) {
        throw new Error(`Préstamo con ID '${prestamoId}' no encontrado.`);
    }
    if (prestamo.fechaDevolucion) {
        throw new Error(`El libro "${prestamo.libro.titulo}" ya fue devuelto.`);
    }

    prestamo.fechaDevolucion = new Date();
    prestamos.set(prestamo.id, prestamo);

    const libro = prestamo.libro;
    libro.estado = 'disponible';
    libros.set(libro.id, libro);

    return prestamo;
}

function obtenerLibrosPrestadosPorUsuario(prestamos: AlmacenPrestamos, usuarioId: string): Prestamo[] {
    return Array.from(prestamos.values()).filter(p =>
        p.usuario.id === usuarioId && !p.fechaDevolucion
    );
}

function obtenerResumenDisponibilidad(libros: AlmacenLibros): Record<EstadoLibro, number> {
    const resumen: Record<EstadoLibro, number> = {
        'disponible': 0,
        'prestado': 0
    };
    for (const libro of Array.from(libros.values())) {
        resumen[libro.estado]++;
    }
    return resumen;
}

function imprimirEntidades<T extends { id: string }>(titulo: string, entidades: T[]): void {
    console.log(`\n--- ${titulo} ---`);
    if (entidades.length === 0) {
        console.log("No hay entidades para mostrar.");
        return;
    }
    entidades.forEach(entidad => console.log(entidad));
}


const bibliotecaLibros: AlmacenLibros = new Map();
const bibliotecaUsuarios: AlmacenUsuarios = new Map();
const bibliotecaPrestamos: AlmacenPrestamos = new Map();

try {
    const libro1 = añadirLibro(bibliotecaLibros, "Cien años de soledad", "Gabriel García Márquez", 1967);
    const libro2 = añadirLibro(bibliotecaLibros, "Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
    const libro3 = añadirLibro(bibliotecaLibros, "1984", "George Orwell", 1949);
    const libro4 = añadirLibro(bibliotecaLibros, "El Señor de los Anillos", "J.R.R. Tolkien", 1954);

    const usuario1 = añadirUsuario(bibliotecaUsuarios, "Laura Díaz", "laura.diaz@example.com");
    const usuario2 = añadirUsuario(bibliotecaUsuarios, "Carlos Ruiz", "carlos.ruiz@example.com");
} catch (error: any) {
    console.error(`Error de inicialización: ${error.message}`);
}

imprimirEntidades("Libros en la biblioteca", Array.from(bibliotecaLibros.values()));
imprimirEntidades("Usuarios registrados", Array.from(bibliotecaUsuarios.values()));

let primerPrestamoId: string;
try {
    const prestamo1 = prestarLibro(bibliotecaLibros, bibliotecaUsuarios, bibliotecaPrestamos,
                                    Array.from(bibliotecaLibros.values())[0].id,
                                    Array.from(bibliotecaUsuarios.values())[0].id);
    primerPrestamoId = prestamo1.id;

    prestarLibro(bibliotecaLibros, bibliotecaUsuarios, bibliotecaPrestamos,
                 Array.from(bibliotecaLibros.values())[2].id,
                 Array.from(bibliotecaUsuarios.values())[1].id);
} catch (error: any) {
    console.error(`Error al prestar libro: ${error.message}`);
}

imprimirEntidades("Estado de libros después de préstamos", Array.from(bibliotecaLibros.values()));
imprimirEntidades("Préstamos activos", Array.from(bibliotecaPrestamos.values()));
console.log("\n--- Resumen de disponibilidad ---");
console.log(obtenerResumenDisponibilidad(bibliotecaLibros));

try {
    const librosPrestadosLaura = obtenerLibrosPrestadosPorUsuario(bibliotecaPrestamos, Array.from(bibliotecaUsuarios.values())[0].id);
    imprimirEntidades("Libros prestados a Laura Díaz", librosPrestadosLaura);
} catch (error: any) {
    console.error(`Error al obtener préstamos: ${error.message}`);
}

try {
    if (primerPrestamoId) {
        devolverLibro(bibliotecaLibros, bibliotecaPrestamos, primerPrestamoId);
    }
} catch (error: any) {
    console.error(`Error al devolver libro: ${error.message}`);
}

imprimirEntidades("Estado de libros después de devolución", Array.from(bibliotecaLibros.values()));
imprimirEntidades("Préstamos actualizados", Array.from(bibliotecaPrestamos.values()));
console.log("\n--- Resumen de disponibilidad final ---");
console.log(obtenerResumenDisponibilidad(bibliotecaLibros));