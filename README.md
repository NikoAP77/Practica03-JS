OBJETIVO ALCANZADO:
•	Entender y organizar de una mejor manera los sitios de web en Internet. 
•	Diseñar adecuadamente elementos gráficos en sitios web en Internet.
•	Crear sitios web aplicando estándares actuales.
ACTIVIDADES DESARROLLADAS
1.	Crear un repositorio en GitHub con el nombre “Practica03- Javascript”

 
Una vez creado nuestro repositorio podemos realizar los commit y push por uno de los pasos.

2.	Procedemos a crear nuestra carpeta donde ubicaremos nuestros archivos

Creamos carpetas específicas para guardas nuestras páginas y así mismo para guardar todas nuestras imágenes, archivos php y js a utilizar en la página web.

3.	Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. A continuación, se muestra un ejemplo de las operaciones que debe realizar la calculadora 


 
a.	Creamos nuestra página html con nombre calculadora y hacemos el diseño de todos nuestro botones a utilizar y desde archivo llamamos a nuestros métodos de JavaScript con las diferentes etiquetas script. Para llamar nuestros métodos utilizamos el onclick en cada uno de los inputs realizados.
 



 

b.	En nuestro archivo de javascripts realizamos todas nuestras funciones de la calculadora, aquí hacemos las validaciones correctas para poder digitar los números desde 0 hasta 9.
 













c.	Creamos una función para eliminar los caracteres ya colocados en la caja de texto, cogemos el ultimo caracteres de la caja de la calculadora utilizando la palabra reservada length.

 
d.	Creamos nuestra función arit donde realizaremos la operación de suma, resta, multiplicación y división haciendo comparación del símbolo presionado.

 

 


e.	Ahora creamos la función donde nos permite hacer cualquier tipo de calculo con dos valores ingresados previamente, donde utilizamos el eval para poder concatenar nuestras dos cajas de texto para que nos realice las operaciones correspondientes. 

 

f.	Creamos nuestra función para realizar la operación de la raíz cuadrada, donde cogemos los dos valores de las cajas de texto y utilizamos el método sqrt de la clase Math para realizar esta acción. 

 

g.	Creamos el método más menos donde obtendremos el valor de la caja y procedemos a cambiar con un + o un – según corresponda haciendo las validaciones necesarias aquí utilizamos el indexOf para buscar si es que hay un más en el número, y un Split para poder quitar de una manera el menos en el número.
 
h.	Creamos por último el método que nos ayuda a sacar el unMedio donde obtenemos los calores de la caja ingresados y los pasamos a fracción.

 




























4.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además: que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones: 

Primero creamos nuestro archivo html con nombre crear_usuario, donde presentaremos nuestro formulario para poder ingresar todos los datos que pide en la practica y poder llamar las funciones de todas las validaciones correspondientes.

 









 



a.	Se debe validar que, en el campo de la cedula, se ingrese solo numero y que la misma sea correcta, en base, al último digito verificador.

Se crea esta función validarCedula donde comprobaremos si el dato ingresando en la caja de texto tiene un total de 10 caracteres, también si cumple la verificación de que sea una cedula correcta mediante el ultimo digito verificador.

 










b.	Se debe validar que en el campo de nombres y apellidos, ingrese únicamente dos nombres y que permita solo ingresar letras.

Creamos nuestra función donde vamos a verificar que los datos ingresados por el usuario sean solo letras y ningún otro tipo de carácter, gracias al código ascii de cada una de las letras que vamos ingresando se va comparando para que no sea número ni ningún otro carácter, si ingresa un numero se borra automáticamente, y por último validamos que el usuario pueda ingresar dos nombres y dos apellidos para esto se debe verificar que exista un espacio en blanco.

 

c.	Se debe validar que, en el campo de teléfono, permita solo números.

Creamos nuestra función donde vamos a validar que los datos ingresados por el usuario sean solo números y no otro tipo de carácter, aquí así mismo utilizamos el código ascii para hacer las comparaciones. 

 


d.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yy.
 


 


e.	Se debe validar que, en el campo correo electrónico, permita ingresar un correo valido. Se considera un correo valido, cuando comienza por tres o mas valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est. ups.edu.ec”

Creamos nuestra función para validar el correo donde comprobamos que termine con la extensión valida y utilizamos la palabra reservada substring y lenth para poder obtener los últimos caracteres del correo y realizar la verificación. También utilizamos Split que nos ayudara a verificar el numero de caracteres antes del @.
 

















En esta función validamos que nuestros campos no estén vacíos y así poder ingresar correctamente en el formulario los datos correspondientes sin que nos de ningún error.

 





















5.	Diseñar una interfaz en HTML que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego desde JavaScript se debe controlar para hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes. 





















a.	Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “imágenes”.


 

b.	Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostraran en la galería de imágenes.
Creamos un for donde me vaya sacando 5 números aleatorios del 1 al 10 sin repetirse y guardarlos en un nuevo arreglo.

 



c.	Al hacer clic en el botón siguiente y haber llegado a la ultima imagen disponible, el botón siguiente deberá ser deshabilitado (solo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)

 


d.	Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (solo cuando se ha llegado a la primera imagen el botón anterior deberá estar deshabilitado)

 













6.	La evidencia del correcto diseño de las paginas HTML usando CSS.

Calculadora.

 




















Validar formulario.
 

Galería.
 



7.	La evidencia del correcto funcionamiento de cada una de las funciones de JavaScript.

Calculadora.
 


























Formulario.

 











Galería.

 














8.	Información de GitHub (Usuario y repositorio)
 

URL del repositorio de la práctica 

https://github.com/NikoAP77/Practica03-JS















CONCLUSIONES:
•	Se debe realizar una correcta organización de nuestras carpetas donde va a contener nuestros archivos.
•	Verificar los campos que sean correctos al momento de ingresar datos.
•	Realizar commits para ir guardando nuestra práctica.
•	Comprobar que se este redireccionando bien a nuestras páginas.
RECOMENDACIONES:
•	Probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari
•	Llevar una estructura bien organizada de la página para evitar errores.
•	Utilizar comentarios para que otras personas puedan entender el código.  

Nombre de los estudiantes: Nicolás Augusto Añazco Pereira

Firma del estudiante jefe de grupo: 
