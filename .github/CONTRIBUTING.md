# Contribuyendo con openve-cli 

##### ¿Te animas a ayudarnos? 😎

## ¿Cómo puedo ayudar?

Pues muy sencillo, solo mira alguno de los [issues abiertos](https://github.com/villanuevand/openve-cli/issues) (en caso de haberlo), o simplemente propón uno.

Es importante que tengas en cuenta lo siguente:

Para nosotros tú contribución es muy importante, y en pro de mantener un orden en nuestros repos hemos creado este archivo `contributing.md`, para que puedas enviar todos tus aportes.
Aquí están los lineamientos para poder contribuir.


## Sobre el "branch" o "rama" a utilizar.

Este proyecto tienen 2 _branches_ o ramas por defecto:

- `master`
- `develop`

Te recomendamos nombrar las _branches_ o ramas de tus colaboraciones con el prefijo: `issue` seguido por la convención de tu preferencia. A nosotros nos agrada esta:

`<prefijo issue>-<numero de issue>-`.

Quedaría algo como esto: `issue-14-encuesta`. Pero también es válido algo como esto: `issue-20`.

El branch `master` es tratado como "producción" y `develop` como el de "ci", o "qa", por lo consiguiente, se deben crear branches o ramas individuales, a partír de `develop` para cualquier aporte, luego en el `pull request` se debe especificar que el nuevo cambio será unirá a `develop`.

### ¡IMPORTANTE!

_¡NUNCA!_ debemos hacer merge a `master` ya que estaríamos haciendo cambios a "PRODUCCION".

## Formato de Commits

Tenemos una estructura a seguir, para facilitar la validación de tus contribuciones y mantener un buen flujo de trabajo. Los mensajes de commits _deberían_ ser de la siguiente manera:

````

<Tipo>(<Ámbito>): <Mensaje Corto>


````

El Encabezado:  `tipo(ámbito): <Mensaje Corto>` **es obligatorio**. Las acciones disponibles, puedes encontarlas en [Acciones](https://github.com/Villanuevand/openve-cli/blob/develop/.github/CONTRIBUTING.md#tipos-acciones), un poco más abajo.

Cualquier línea en un mensaje de commit no de ser mayor de 50 caracteres!. Esto permite la fácil lectura de los mensajes tanto en Github como en varias herramientas de git.

### Ejemplos

##### Commit Corto:

`feat(utils): clase Utils para lectura de atributos.`

##### Commit Largo:

```
feat(utils): clase Utils para lectura de atributos.

La clase utils, esta divida en varios métodos para diferentes usos.
Para validar se usan los siguientes métodos.
ValidaPhone.
ValidaIp
ValidaNavegador
ValidaNovias
```

## Pull Requests

Por favor asegurate que tú `pull request` cumpla los siguientes lineamientos:

- Crea un `pull request` individual por cada aporte.
- Sigue las indicaciones dadas en la plantilla de `pulls requests`.
- Usa `title-casing` (AP style).
- Presta mucha atención a tu ortografía.
- Nuevos aportes o mejoras a lo que ya existe, siempre son bienvenidos.


## Tipos Acciones

Las acciones son los indicativos primordiales de los cambios que realizamos en un determinado archivo. Con éstas lo que intentamos es saber con una simple lectura que tipo de modificación fué hecha. Actualmente tenemos estás acciones disponibles:

- **feat**: Implementación de nueva funcionalidad.
- **fix**: Corrección de algún bug.
- **docs**: Cambios en documentación.
- **perf**: Cambios en rendimiento.
- **refactor**: Un cambio de código que no corrige errores ni añade características.
- **chore**: Otros cambios que no modifica codigo funcional de la aplicación.

###### NOTA: Si quieres proponer un nuevo tipo de "Accion", puedes abrir un `issue`, para ello en este [enlace](https://github.com/Villanuevand/openve-cli/issues)

##### ¿Por qué las acciones en inglés? 🤔😕

Sí, sabemos que somos un proyecto en español, pero en este caso aprovechamos lo corto de las palabras en inglés para que nuestros commits sean más explicativos.

### Ámbito

El ámbito es el lugar de la aplicación donde se realiza el cambio.

### Mensaje

El mensaje debe contener una descripción clara y concisa del cambio realizado.

- Use tiempo presente imperativo (ej: _agrega_, no agregado ni agregó).
- No capitalizar la primera letra.
- No coloque punto (.) al final

## Agradecimientos

Agradecemos a la Comunidad [ngVenezuela](https://github.com/ngVenezuela) por permitirnos usar su [CONTRIBUTING.md](https://github.com/ngVenezuela/wengy-ven/blob/develop/.github/CONTRIBUTING.md) como base para el nuestro.

¡Mil gracias! 😎

---

_**¡IMPORTANTE! Las contribuciones que no cumplan con las recomendaciones acá expuestas no serán aceptadas.**_
