
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tus ventas hoy mismo" subheadline="Para dueños de pequeños negocios, ofrecemos una web de ventas en menos de 24 horas con soporte 24/7." cta1="Comienza Ahora" />
<How step1Title="Preséntanos tu negocio" step1Desc="Envíanos tu idea a través de un formulario." step2Title="Diseño y desarrollo" step2Desc="Diseñamos una web de ventas única para ti." step3Title="Lanzamiento y soporte" step3Desc="Ponemos tu sitio en línea en menos de 24 horas." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Fácilmente" subheadline="Ayudamos a pequeños negocios a generar ventas online de forma rápida y sencilla, sin necesidad de grandes inversiones." beneficiotitulo1="Ventas 24/7" beneficio1="Vende sin parar, incluso mientras duermes" beneficiotitulo2="Gestión de Sitio Fácil" beneficio2="Diseñamos y mantenemos tu sitio" />
<Services heading="Revoluciona tus Ventas en Santiago, Aprovecha la Era Digital" description="En WebGo, simplificamos tu transición online. Ahorra tiempo y multiplica tus ventas sin esfuerzo." services={[{"name":"Creación Rápida de Web","icon":"clock","description":"Desarrollamos tu web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"help","description":"Asistencia constante para mantener tu web funcionando sin problemas."},{"name":"Diseño Optimizado","icon":"bullseye","description":"Sitios que atraen y convierten visitantes en clientes."},{"name":"Estrategia de Marketing","icon":"chart-line","description":"Dibujamos el camino hacia tu éxito en ventas online."},{"name":"Formación en Ventas Digitales","icon":"chalkboard-teacher","description":"Te enseñamos a vender más en el mundo digital."},{"name":"Gestión de Redes Sociales","icon":"users","description":"Administramos tus redes para aumentar tu alcance e interacción."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales de alta calidad" />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudar a mi pequeño negocio a vender más allá de las recomendaciones?","respuesta":"WebGo puede transformar tu negocio con su potente solución de ventas en línea. Te proporcionamos una plataforma fácil de usar donde puedes mostrar tus productos y vender a un amplio mercado. No solo podrás llegar a más personas, sino que también podrás seguir vendiendo las 24 horas del día, los 7 días de la semana, incluso cuando tu tienda física esté cerrada."},{"pregunta":"¿Tendré que administrar el sitio web por mi cuenta una vez que WebGo lo haya configurado?","respuesta":"No necesariamente. En WebGo entendemos que tu tiempo es valioso. Por eso, ofrecemos servicios de administración de sitios web para que puedas concentrarte en lo que mejor sabes hacer: gestionar tu negocio. Nuestro equipo de expertos estará a tu disposición para mantener tu sitio optimizado y actualizado."},{"pregunta":"¿Cómo puedo generar ventas online si mis clientes están acostumbrados a comprar en persona?","respuesta":"Con WebGo, te guiaremos en cada paso del camino para hacer la transición de las ventas en persona a las ventas en línea. Nuestro equipo te ayudará a configurar una tienda en línea atractiva y fácil de navegar para tus clientes. También te ayudaremos a implementar potentes estrategias de marketing digital para atraer a tu público objetivo a tu tienda en línea."},{"pregunta":"¿Qué pasa si no tengo experiencia en tecnología o ventas en línea?","respuesta":"No hay problema. Nuestros servicios están diseñados para ser fáciles de usar, incluso para aquellos que no tienen experiencia en tecnología. Además, nuestro equipo de soporte está siempre disponible para ayudarte si tienes alguna pregunta o inquietud. Nuestro objetivo es hacer que la venta en línea sea fácil y sencilla para ti."},{"pregunta":"¿Cómo puede WebGo garantizar que mi sitio web estará optimizado para SEO?","respuesta":"En WebGo, tenemos un equipo de expertos en SEO que trabajan para asegurar que tu sitio web esté optimizado para los motores de búsqueda. Esto significa que tu sitio web estará diseñado de tal manera que sea fácil de encontrar en Google y otras plataformas de búsqueda, lo cual aumentará tu visibilidad y te ayudará a atraer a más clientes."}]} />
<BookAppointment heading="Impulsa Tu Negocio en el Mundo Digital" description="En WebGo, transformamos el boca a boca en ventas digitales para que nunca te detengas. Hacemos fácil lo complejo." />
<Footer />
    </main>
  );
}
