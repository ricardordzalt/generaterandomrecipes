import React from 'react';
import Blog from './components/Blog';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import doblerendija from './images/doblerendija.jpg'
import cancun from './images/cancun.jpg'
import paris from './images/paris.jpg'
import egipto from './images/egipto.jpg'
import segguerra from './images/segguerra.jpg'
import revrusa from './images/revrusa.jpeg'
import muralla from './images/muralla.jpg'
import coronavirus from './images/corona.jpg'
import piramide from './images/piramid.jpg'
import sedentarismo from './images/sedent.jpg'




function App() {
  return (
    <div> 
      
      <NavBar pagUrl="./App.js" enlace="Servicios"/>
      <NavBar pagUrl="./App.js" enlace="Acerca de"/>
      <NavBar pagUrl="./App.js" enlace="Contacto"/>

      <Blog estilo="blogppal" 
      imageUrl={doblerendija} 
      titulo="Experimento de doble rendija" 
      categoria="Física cuántica"
      extracto= "El experimento de Young, más conocido como el experimento de la doble rendija, 
      fue realizado en 1801 por Thomas Young, en un intento de discernir la naturaleza corpuscular
       u ondulatoria de la luz. Young comprobó un patrón de interferencias en la luz procedente de 
       una fuente lejana al difractarse en el paso por dos rejillas, resultado que contribuyó a la 
       teoría de la naturaleza ondulatoria de la luz[...]​" 
      autor="Richie Valens" 
      dia="07" mes="02"  año="2020"/>

      <Blog estilo="blogsec" 
      imageUrl={cancun}
      titulo="Cancún" categoria="Destinos turísticos" 
      extracto= "Cancún es una ciudad de México ubicada en la península de Yucatán que limita con el mar 
      Caribe y que es conocida por sus playas, los numerosos centros turísticos y la vida nocturna. Se 
      compone de 2 áreas distintas: el área del centro más tradicional y la Zona Hotelera, la franja 
      costera con hoteles altos, clubes nocturnos, tiendas y restaurantes. Cancún también[...]" 
      autor="Freyja Hartwin" 
      dia="05" mes="02" año="2017"/>

      <Blog estilo="blogsec" 
      imageUrl={paris} 
      titulo="Paris" categoria="Destinos turísticos" 
      extracto= "París, la capital de Francia, es una importante ciudad europea y un centro mundial del 
      arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por 
      amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica 
      de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de 
      diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré[...]" 
      autor="Maks Aina" 
      dia="01" mes="12" año="2006"/>
      
      <Blog estilo="blogsec" 
      imageUrl={egipto} 
      titulo="Pirámides de Egipto" categoria="Destinos turísticos" 
      extracto= "Las pirámides de Egipto son, de todos los vestigios legados por los egipcios de la antigüedad, los más portentosos y emblemáticos reconocidos. Construidas como criptas reales para los faraones desde el año 2700 a.C, con bloques de piedra revestidos de caliza, eran a la vista, grandes construcciones de color blanco[...]" 
      autor="Eskender Evgenia" 
      dia="02" mes="05" año="2008"/>

      <Blog estilo="blogsec" 
      imageUrl={segguerra} 
      titulo="Segunda Guerra Mundial" categoria="Historia" 
      extracto= "La Segunda Guerra Mundial (1939-1945) fue uno de los acontecimientos fundamentales de la historia contemporánea tanto por sus consecuencias como por su alcance universal. Las «potencias del Eje» (los regímenes fascistas de Alemania e Italia, a los que se unió el militarista Imperio japonés) se enfrentaron en un principio a los países democráticos «aliados» (Francia e Inglaterra), a los que se sumaron tras la neutralidad inicial los Estados Unidos y, pese a las divergencias ideológicas, la Unión Soviética; sin embargo, esta lista de los principales contendientes omite multitud de países que acabarían incorporándose a uno u otra bando[...]" 
      autor="Jadran Ivo" 
      dia="12" mes="01" año="1996"/>

      <Blog estilo="blogsec" 
      imageUrl={revrusa}
      titulo="Revolución bolchevique" categoria="Historia" 
      extracto= "Se denomina a Revolución rusa al conjunto de acontecimientos sucedidos entre febrero y octubre de 1917 y que llevaron al derrocamiento del régimen zarista y la instauración del primer gobierno socialista del mundo.
      La Revolución rusa tuvo dos etapas. Una primera revolución en la que el gobierno zarista es derrocado y se impone u gobierno provisional, y una segunda revolución en la que se elimina este gobierno provisional para establecer un gobierno comunista. Para entender bien sus causas, tenemos que ver primero cuál era el contexto histórico y social previo a la Revolución rusa[...]" 
      autor="Óðinn Ermenegilda"
      dia="01" mes="09" año="2001"/>

      <Blog estilo="blogsec" 
      imageUrl={muralla}
      titulo="La muralla china" categoria="Historia" 
      extracto= "La Gran muralla China es una antigua fortificación china construida y reconstruida entre el siglo V a. C. y el siglo XVI (Edad Moderna) para proteger la frontera norte del Imperio chino durante las sucesivas dinastías imperiales de los ataques de los nómadas xiongnu de Mongolia y Manchuria[...]" 
      autor="Koralo Flora" 
      dia="24" mes="06" año="2019"/>

      <Blog estilo="blogsec" 
      imageUrl={coronavirus}
      titulo="Coronavirus" categoria="Medicina" 
      extracto= "Los coronavirus son una extensa familia de virus, algunos de los cuales puede ser causa de diversas enfermedades humanas, que van desde el resfriado común hasta el SRAS (síndrome respiratorio agudo severo). Los virus de esta familia también pueden causar varias enfermedades en los animales[...]" 
      autor="Unn Aswathi" 
      dia="30" mes="01" año="1994"/>

      <Blog estilo="blogsec" 
      imageUrl={piramide}
      titulo="Piramide alimenticia" categoria="Medicina" 
      extracto= "La pirámide alimenticia, pirámide alimentaria, o también llamada pirámide nutricional, es una referencia gráfica de la cantidad de los diferentes grupos de alimentos que debemos consumir diariamente para mantenernos saludables.En nutrición, la pirámide alimenticia es una referencia a la proporción que nuestro cuerpo necesita para mantener una dieta sana y balanceada. Se recomienda la ingesta diaria de 55% de carbohidratos, 30% de grasas y 15% de proteínas, vitaminas, minerales y fibras[...]" 
      autor="Ada Hong" 
      dia="06" mes="11" año="2011"/>

      <Blog estilo="blogsec" 
      imageUrl={sedentarismo}
      titulo="Sedentarismo" categoria="Medicina" 
      extracto= "Entendemos el sedentarismo como un estilo de vida carente de movimiento o de actividad física. Más concretamente, la Organización Mundial de la Salud define como inactivas a aquellas personas que realizan menos de 90 minutos de actividad física semanal. Este mal hábito cada vez es más habitual en la población, que reduce su ejercicio físico en el tiempo de ocio y aumenta el uso de los medios de transporte como el coche o el autobús para los desplazamientos. Tanto es así que, según señala la OMS, al menos un 60% de la población no realiza la actividad física necesaria para obtener beneficios para la salud[...]" 
      autor="Gijs Artakhshathra" 
      dia="23" mes="02" año="2013"/>

      <Footer subButton="Suscribete aquí" />
    </div>
  );
}

export default App;
