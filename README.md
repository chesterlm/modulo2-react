# modulo2-react
# React + Vite
### 1. ¿Qué es ReactJS y cuáles son sus principales características?

ReactJS es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. Sus principales características incluyen el uso de un enfoque basado en componentes, el uso de JSX para la sintaxis de plantillas, y la capacidad de gestionar eficientemente el Virtual DOM para optimizar el rendimiento de las aplicaciones.

### 2. ¿Qué es un componente en ReactJS y cuáles son los tipos de componentes que existen?

Un componente en ReactJS es una unidad modular e independiente que encapsula la lógica y la interfaz de usuario de una parte específica de una aplicación. Existen dos tipos de componentes: los componentes de función (funcionales) y los componentes de clase (basados en clases).

### 3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?

El Virtual DOM es una representación virtual eficiente del DOM (Document Object Model) real de una aplicación. Su función principal en ReactJS es optimizar las actualizaciones del DOM, permitiendo comparaciones eficientes y actualizaciones mínimas, lo que mejora el rendimiento de la aplicación.

### 4. ¿Qué es JSX en ReactJS y por qué es importante?

JSX es una extensión de JavaScript que permite escribir código HTML dentro de archivos JavaScript. Es importante en ReactJS porque simplifica la creación de elementos de interfaz de usuario, haciendo que el código sea más legible y mantenible.

### 5. ¿Qué es un Hook en ReactJS y cuál es su propósito?

Un Hook en ReactJS es una función especial que permite a los componentes de función agregar estado y comportamiento de ciclo de vida a sus funciones. Su propósito es proporcionar una forma más efectiva y limpia de manejar el estado y los efectos secundarios en los componentes de función.

### 6. ¿Cuáles son al menos tres tipos de Hooks en ReactJS y para qué se utilizan?

- **useState**: Se utiliza para gestionar el estado en componentes de función.
- **useEffect**: Permite realizar efectos secundarios en componentes de función.
- **useContext**: Facilita el acceso y la suscripción al contexto en componentes de función.

### 7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?

Las reglas de uso para los Hooks en ReactJS incluyen llamar a los Hooks solo en el nivel superior de un componente de función y no dentro de bucles, condiciones o funciones anidadas. Además, deben utilizarse en el mismo orden en cada renderizado.

### 8. ¿Qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks?

React Router DOM versión 6 es una biblioteca que facilita la navegación en aplicaciones React. Se utiliza para gestionar las rutas y la navegación entre diferentes componentes. Sus principales componentes incluyen `<BrowserRouter>`, `<Route>`, y `<Link>`. Algunos de sus Hooks son `useNavigate` y `useParams`.

### 9. ¿Cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM?

La navegación entre diferentes páginas en React Router DOM se realiza mediante la definición de rutas utilizando el componente `<Route>` y la navegación a través de elementos `<Link>` o mediante el uso del Hook `useNavigate` para la navegación programática.

### 10. ¿Cómo se definen rutas en React Router DOM?

Las rutas en React Router DOM se definen utilizando el componente `<Route>` y especificando la ruta y el componente asociado. Por ejemplo:

```jsx
<Route path="/ejemplo" element={<EjemploComponente />} />
```

### 11. ¿Cómo se crea un proyecto ReactJS con Vite?

Para crear un proyecto ReactJS con Vite, puedes utilizar el siguiente comando:

```bash
npx create-vite my-react-app --template react
```

Esto creará un nuevo proyecto ReactJS utilizando Vite como herramienta de construcción.

### 12. ¿Cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección?

Para desplegar un JSON server en un hosting gratuito o servicio en la nube, puedes seguir estos pasos generales:
1. Sube tus datos JSON al servicio.
2. Configura el servidor JSON para que sirva esos datos.
3. Proporciona la URL del servidor JSON en tu aplicación ReactJS.

### 13. ¿Cómo desplegar una aplicación en cualquier Hosting de su elección?

El despliegue de una aplicación ReactJS en cualquier hosting generalmente implica construir el proyecto (`npm run build`) y luego cargar los archivos resultantes en el servidor del hosting. La configuración específica puede variar según el hosting elegido. Consulta la documentación del hosting para obtener instrucciones detalladas.


# Modúlo sobre gestión de datos
### 1. ¿Qué es React Context y para qué se utiliza en el desarrollo web con React?

React Context es una característica que proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar explícitamente las props en cada nivel. Se utiliza para gestionar el estado global y compartir datos que son necesarios en muchos componentes de una aplicación.

### 2. Describir cómo se crea un contexto en React y cómo se proporciona y consume información a través de él.

Para crear un contexto en React, se utiliza la función `createContext`. Se provee información utilizando el componente `<Context.Provider>`, y se consume usando el Hook `useContext`. Ejemplo:

```jsx
// Crear contexto
const MiContexto = React.createContext();

// Proporcionar información
<MiContexto.Provider value={informacion}>
  {/* Componentes hijos */}
</MiContexto.Provider>

// Consumir información
const valor = useContext(MiContexto);
```

### 3. ¿Cuál es la ventaja de utilizar React Context en lugar de pasar props a través de múltiples componentes?

La ventaja de utilizar React Context es evitar la "prop drilling" (pasar props a través de varios niveles de componentes). Facilita la transmisión de datos a través de la jerarquía de componentes sin necesidad de pasar manualmente las props en cada nivel.

### 4. Explicar el propósito de useReducer en React y cómo se diferencia de useState.

`useReducer` en React se utiliza para manejar estados más complejos, especialmente cuando el próximo estado depende del estado anterior. A diferencia de `useState`, que actualiza el estado directamente, `useReducer` toma un estado anterior y una acción, y devuelve el nuevo estado.

### 5. Describe los argumentos que toma la función useReducer.

La función `useReducer` toma dos argumentos: el primero es el reducer (una función que especifica cómo se actualiza el estado), y el segundo es el estado inicial. Devuelve el estado actual y la función `dispatch` para enviar acciones al reducer.

### 6. ¿Por qué es útil utilizar useReducer para gestionar el estado en aplicaciones más complejas?

`useReducer` es útil en aplicaciones más complejas porque permite manejar lógica de estado más avanzada, gestionar múltiples acciones de manera más estructurada y centralizada, y proporciona una solución más escalable para el manejo del estado en comparación con `useState`.

### 7. ¿Cómo se puede utilizar React Context junto con useReducer para gestionar el estado global en una aplicación de React?

Se puede utilizar React Context para proporcionar el estado global y `useReducer` para gestionar las acciones que afectan a ese estado. El contexto proporciona el estado y la función `dispatch` a los componentes que lo necesitan, permitiendo una gestión de estado global de manera eficiente.

### 8. ¿Por qué es importante tener un sistema de gestión de estado global en aplicaciones React más grandes?

Un sistema de gestión de estado global en aplicaciones React más grandes es importante para evitar la complejidad de pasar props a través de muchos componentes, facilitar el acceso al estado desde cualquier componente, y proporcionar una forma más organizada y eficiente de gestionar el estado de la aplicación.

### 9. Menciona al menos tres ventajas de utilizar una combinación de React Context y useReducer en comparación con el manejo de estado local en componentes.

- **Evita la prop drilling:** No es necesario pasar props a través de múltiples niveles.
- **Centraliza la lógica de estado:** `useReducer` facilita la gestión de lógica de estado compleja.
- **Acceso global al estado:** React Context proporciona acceso global al estado sin necesidad de intermediarios.

### 10. ¿En qué situaciones podría ser beneficioso migrar de un enfoque de manejo de estado local a un enfoque de estado global utilizando React Context y useReducer?

Sería beneficioso migrar a un enfoque de estado global cuando:
- La aplicación crece en complejidad y manejar el estado local se vuelve engorroso.
- Se necesitan compartir datos entre componentes distantes en el árbol de componentes.
- La lógica de estado se vuelve más avanzada y requiere una gestión más estructurada.
