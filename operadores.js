console.log (3 + 5);                //Suma
console.log (14 - 7);               //Resta
console.log (4 * 6);                //Multiplicacion
console.log (30 / 9);               //Division
console.log (95 % 4);               //Resto
console.log (3 + 5 * 2 - 8);        //Prueba de precedencia --->
console.log (3 + (5 * 2) - 8);      //Relevancia de los Operadores <---
console.log (3 + 5) * 2 - 8;
console.log (3 + 5) * (2 - 8);

var nombre = "Jc";
var saludo = 'Hola ' + nombre;
console.log (saludo);



/*
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador división (/)
console.log(echo("izquierdo", 6) / echo("derecho", 2));



function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador potencia (**)
console.log(echo("izquierdo", 2) ** echo("derecho", 3));

/*
Precedencia	Tipo de operador    	                        Asociatividad	    Operadores individuales
19	        Agrupamiento                                    n/a                 ( … )
18	        Acceso a propiedades (notación por punto)       a la izquierda	    … . …
        	Acceso a propiedades (notación por corchetes)	a la izquierda	    … [ … ]
	        new (con lista de argumentos)	                n/a	new             … ( … )
	        Llamada a función	                            a la izquierda	    … ( … )
	        Encadenamiento opcional	                        a la izquierda	    ?.
17	new (sin lista de argumentos)	                        a la derecha    	new …
16	Incremento sufijo	                                    n/a	                … ++
	Decremento sufijo		                                                    … --
15	NOT lógico (!)	                                        a la derecha	    ! …
	NOT a nivel de bits (~)		                                                ~ …
	Suma unaria (+)		                                                        + …
	Negación unaria (-)		                                                    - …
	Incremento prefijo		                                                    ++ …
	Decremento prefijo		                                                    -- …
	typeof				                                                        typeof …
	void				                                                        void …
	delete				                                                        delete …
	await				                                                        await …
14	Potenciación (**)		                                a la derecha	    … ** …
13	Multiplicación (*)		                                a la izquierda  	… * …
	División (/)				                                                … / …
	Resto (%)				                                                    … % …
12	Adición (+)		                                        a la izquierda	    … + …
	Sustracción (-)	                                                    		… - …
11	Desplazamiento de bits a la izquierda (<<)	            a la izquierda	    … << …
	Desplazamiento de bits a la derecha (>>)		                            … >> …
	Desplazamiento de bits a la derecha sin signo (>>>)		                    … >>> …
10	Menor a (<)                                             a la izquierda	… < …
	Menor o igual a (<=)				                                        … <= …
	Mayor a (>)				                                                    … > …
	Mayor o igual a (>=)		                                                … >= …
	in				                                                            … in …
	instanceof				                                                    … instanceof …
9	Igualdad (==)			                                a la izquierda	    … == …
	Desigualdad (!=)				                                            … != …
	Igualdad estricta (===)				                                        … === …
	Desigualdad estricta (!==)				                                    … !== …
8	AND a nivel de bits (&)		                            a la izquierda	    … & …
7	XOR a nivel de bits (^)		                            a la izquierda	    … ^ …
6	OR a nivel de bits (|)			                        a la izquierda	    … | …
5	AND lógico (&&)		                                    a la izquierda	    … && …
4	OR lógico (||)			                                a la izquierda	    … || …
	Operador de coalescencia nula (??)	                    a la izquierda	    … ?? …
3	Operador condicional (ternario)	                        a la derecha	    … ? … : …
2	Asignación	                                            a la derecha        … = …
			    	                                                            … += …
			    	                                                            … -= …
			    	                                                            … **= …
			    	                                                            … *= …
			    	                                                            … /= …
			    	                                                            … %= …
			    	                                                            … <<= …
			    	                                                            … >>= …
			    	                                                            … >>>= …
			    	                                                            … &= …
			    	                                                            … ^= …
			    	                                                            … |= …
			    	                                                            … &&= …
			    	                                                            … ||= …
			    	                                                            … ??= …
	yield			                                        a la derecha	    yield …
	yield*				                                                        yield* …
1	Operador coma			                                a la izquierda	    … , …

*/
