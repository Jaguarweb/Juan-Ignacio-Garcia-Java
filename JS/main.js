let continuar = true
let total = 0
    
// Asignar Nombre y Precios a cada plato
const precios = {
    1: 2000, // Precio de Bondiola con pure de papa
    2: 1800,  // Precio de Merluza con Pure de batata
    3: 1500, // Precio de Sorrentinos con Estofado
    4: 900, // Precio de Papas fritas
    5: 650,  // Precio de panchos 
}




    while(continuar){
    
        let Menu = parseInt(prompt("Elije una opción: \n 1-Bondiola con pure de papa  \n 2-Merluza con Pure de batata \n 3-Sorrentinos con Estofado \n 4-Papas fritas \n 5-Pancho"));
    
        switch(Menu){
            case 1: 
                alert("Elegiste Bondiola con pure de papa")
                total += precios[1] // Sumar el precio al total
                break
            
            case 2:
                alert("Elegiste Merluza con pure de batata")
                total += precios[2] // Sumar el precio al total
                break
    
            case 3:
                alert("Elegiste Sorrentinos con Estofado")
                total += precios[3] // Sumar el precio al total
                break
    
            case 4:
                alert("Elegiste Papas Fritas")
                total += precios[4] // Sumar el precio al total
                break
    
            case 5:
                alert("Elegiste Pancho")
                total += precios[5] // Sumar el precio al total
                break
    
    
            default:
                alert("Debes elegir una opción válida")
                break
        }
    
        let confirmacion = prompt("Deseas agregar algo mas? SI - NO")
        if( confirmacion == "no"){
            continuar = false
            }

        }
        alert("El total de tu pedido es: $" + total) // Mostrar el total al usuario