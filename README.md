# UTN Flowchart

Un generador de digrafos de planes de estudio de la Universidad Tecnológica Nacional.

## Especificaciones de uso

Para cada materia, es posible elegir tanto los _estados_ como la _modalidad de cursada_.

### Estados de materias

- **Falta cursada**: Todavía no cursada. El nodo asociado figura en color gris.
- **Cursando**: Cursando actualmente. El nodo asociado figura en color celeste.
- **Firmada**: "Regularizada" o bien con final pendiente. El nodo asociado figura en color naranja.
- **Aprobada**: Aprobada con final o promoción. El nodo asociado es omitido en el digrafo (aunque en el panel principal figura en color verde).

<p align="center">
  <img src="https://github.com/jlsuh/utn-flowchart/assets/38252227/953a2f6f-d743-4204-94fe-578cffee06f0">
  <img src="https://github.com/jlsuh/utn-flowchart/assets/38252227/9a4665e3-e272-4ee2-aa8d-7fd5574873d3">
</p>

### Modalidades de cursada

- **Anual**: Cursada anual. El nodo asociado posee la forma de un rectángulo.
- **Cuatrimestral**: Cursada cuatrimestral. El nodo asociado posee la forma de un óvalo.

<p align="center">
  <img src="https://github.com/jlsuh/utn-flowchart/assets/38252227/345f01a4-a159-4cbb-ad1f-f34effeef077">
</p>

### Generación del digrafo

[Viz.js](https://github.com/mdaines/viz-js) es una herramienta que permite generar grafos en el browser mediante [Graphviz](https://graphviz.org/) a partir de la especificación de una gramática abstracta en [DOT](https://graphviz.org/doc/info/lang.html), siendo en este caso empleado para generar el digrafo del plan de estudios seleccionado.

Es posible visualizar el digrafo asociado al estado de las materias haciendo click en "Ver digrafo".

### Exportar el digrafo

Es posible exportar el digrafo en formato SVG haciendo click en "Exportar".

## Contribuciones

La extensibilidad de la aplicación se prevé mediante la incorporación de nuevos planes de estudio. Cada plan de estudio debe ser agregado en el directorio `src/data/<codigoDelPlan>` como un archivo que exporte un único `object`. El mismo debe ser de la forma:

```ts
export const codigoDelPlan = {
  id: "codigoDelPlan",
  branch: "codigoDeLaRegional",
  subjects: [
    [
      // Materias del primer año
      {
        id: "idMateria1Nivel1",
        name: "Nombre completo de la materia 1 nivel 1",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
      },
      {
        id: "idMateria2Nivel1",
        name: "Nombre completo de la materia 2 nivel 1",
        modes: [modes.QUADRIMESTRAL],
      },
      /* Más materias según corresponda */
    ],
    [
      // Materias del segundo año
      {
        id: "idMateria1Nivel2",
        name: "Nombre completo de la materia 1 nivel 2",
        modes: [modes.ANNUAL],
        taken: ["idMateria1Nivel1", "idMateria2Nivel1"],
      },
      {
        id: "idMateria2Nivel2",
        name: "Nombre completo de la materia 2 nivel 2",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        taken: ["idMateria2Nivel1"],
      },
      {
        id: "idMateria3Nivel2",
        name: "Nombre completo de la materia 3 nivel 2",
        modes: [modes.QUADRIMESTRAL],
      },
      /* Más materias según corresponda */
    ],
    [
      // Materias del tercer año
      {
        id: "idMateria1Nivel3",
        name: "Nombre completo de la materia 1 nivel 3",
        modes: [modes.ANNUAL],
        taken: ["idMateria1Nivel2", "idMateria2Nivel2"],
        passed: ["idMateria3Nivel2"],
      },
      {
        id: "idMateria2Nivel3",
        name: "Nombre completo de la materia 2 nivel 3",
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        taken: ["idMateria1Nivel2"],
        passed: ["idMateria2Nivel2"],
      },
      {
        id: "idMateria3Nivel3",
        name: "Nombre completo de la materia 3 nivel 3",
        modes: [modes.QUADRIMESTRAL],
        taken: ["idMateria1Nivel2"],
      },
      /* Más materias según corresponda */
    ],
    /* Más niveles según corresponda */
  ],
};
```

**Observaciones**:

- El orden de las modalidades de cursada en el `array` `modes` debe ser según el aspecto "por defecto" bajo la cual la regional ofrece como modalidad de cursada de la materia. Por ejemplo, si la materia se ofrece principalmente en forma anual, siendo en forma secundaria cuatrimestral, el orden correcto es: `[modes.ANNUAL, modes.QUADRIMESTRAL]`.
- El `array` `taken` contiene los `id` de las materias que son requisito para poder **cursar la materia en cuestión**.
- El `array` `passed` contiene los `id` de las materias que son requisito para poder **aprobar la materia en cuestión**.

Finalmente, el objeto del plan incorporado al `array` de planes existentes en `src/data/plans.ts`:

```ts
/* ... */
import { codigoDelPlan } from "./codigoDelPlan";

export const plans = [codigoDelPlan /*, Otros planes según corresponda*/];
```

La incorporación del plan de estudio en cuestión se verá reflejada en la aplicación mediante una nueva `Route`, siendo la misma seleccionable desde el `Select` de planes de estudio:

<p align="center">
  <img src="https://github.com/jlsuh/utn-flowchart/assets/38252227/9329e986-0b66-4d95-bd14-9837aac545f0">
</p>

## Levantar la aplicación con Docker

Es posible levantar la aplicación localmente mediante Docker. La imagen del contenedor es obtenible de las siguientes formas estipuladas.

### Obtener la imagen a partir del repositorio:

Luego de clonar el repositorio, posicionarse en el directorio raíz del proyecto y ejecutar:

```bash
docker build -t utn-flowchart .
```

### Obtener la imagen de Docker Hub:

La misma es obtenible mediante:

```bash
docker pull jlsuh/utn-flowchart:latest
```

## Creación del contenedor

Una vez obtenida la imagen, es posible crear el contenedor y levantar la aplicación de la forma:

```bash
docker run --rm -dp 80:80 utn-flowchart
```

O bien, en caso de haber obtenido la imagen de Docker Hub:

```bash
docker run --rm -dp 80:80 jlsuh/utn-flowchart
```

La aplicación ejecutará en `localhost:80`.