        //AUTOR:KEVIN PILLAJO
        // DESCRIPCION:GENERAR MATRICES DESDE UN USUARIO 

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>matrizes</title>
</head>

<body style="background-color:rgb(118, 7, 221);" >

        
        
    <CENTEr>
            <h1 style="color:#FF0000" >MATRIZ</h1>
            <H1 style="color:#FF0000">  CREAR UNA MATRIZ POR USUARIO</H1>
            <H1 style="color:#FF0000" >PROGRAMA </H1>
            <div>
            //ingreo de usuario de columnas y filas 
                <label for="Columas"></label>
                <input type="number" placeholder="INGRESAR  FILAS " name="Columas" id="Columnas">
                <br><br>
                <label for="Filas"></label>
                <input type="number" placeholder="INGRESAR COLUMNAS " name="Filas" id="Filas">
                <hr style="color:#FF0000" >
                <input type="button" value="GENERAR " id="cuadricula">
            </div>
        </body>
        <script>
            //declarar las variables  el array , contador 0 ,un boton 
            var Grid = [];
            var cont = 0;
            document.getElementById("cuadricula")
                .addEventListener("click", function () {
                    var F = parseInt(document.getElementById("Filas").value);
                    var C = document.getElementById("Columnas").value;
                    for (let i = 0; i < C; i++) {
                        Grid.push(new Array);
                        for (let j = 0; j < F; j++) {
                            cont++;
                            //alert(cont);
                            Grid[i].push(cont);
                        }
                    }
                })
                //creacion  de fucniones de impresion por consola las filas 
            function imprimirFilas() {
                for (let i = 0; i < Grid.length; i++) {
                    console.log(Grid[i]);
                }
            }
            //creacion  de fucniones de impresion por consola columnas
            function imprimirColumnas() {
                for (let i = 0; i < Grid.length; i++) {
                    for (let j = 0; j < Grid[0].length; j++) {
                        console.log(Grid[j][i]);
                    }
                }
            }
            //creacion  de fucniones de impresion por consola de todo 
            function imprimirTodo(){
                console.log(Grid);
            }
            
        </script>
    </CENTEr>
   
</html>
