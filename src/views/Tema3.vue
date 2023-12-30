<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Inbound</em>

    .row.mb-5
      .col-md-8
        p El <em>Inbound Marketing</em> es una metodología comercial que combina técnicas de publicidad y <em>marketing</em> digital no intrusivas para atraer clientes potenciales que no están familiarizados con la empresa y sus productos o servicios. Esta metodología busca acompañar a los clientes desde el inicio del proceso de compra hasta la conversión final, facilitando la búsqueda en línea de productos y permitiendo a los clientes conocer la marca, productos y servicios a través de contenido de valor adaptado a sus preguntas, dudas y necesidades.
        p El <em>Inbound Marketing</em> se puede visualizar como un imán que atrae a los clientes a través de contenido específico. Se aprovecha el uso de <em>software</em> para integrar diversas técnicas y generar contenido valioso que persuade a los clientes para satisfacer sus necesidades con los productos y servicios ofrecidos. Se personaliza cada etapa del camino, desde la primera impresión de la marca hasta la concreción de la transacción final.

      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/img-1.png', alt='Imagen decorativa')

    p.mb-5.text-center Entre las principales características del <em>Inbound Marketing</em> se encuentran:

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-4(style="background-color:#E3ECF7")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema3/img-2.png', alt='Texto que describa la imagen')
              
            p Es una metodología de comunicación abierta, donde la marca y el cliente interactúan en discusiones abiertas en toda la red.

          .col-md.tarjeta.color-acento-botones.p-4(style="background-color:#FFFBE5")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema3/img-3.png', alt='Texto que describa la imagen')
              
            p(style="color:#000") Es una estrategia continua que presenta contenido de marca de manera constante a lo largo de la experiencia del cliente.

          .col-md.tarjeta.color-acento-contenido.p-4(style="background-color:#E4FDFB")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema3/img-4.png', alt='Texto que describa la imagen')
              
            p(style="color:#000") Genera un mayor compromiso <em>(engagement)</em> al construir una relación de confianza con el cliente a través de un acompañamiento constante.

    p.mb-5 La implementación del <em>Inbound Marketing</em> se divide en cuatro etapas: Atraer, Convertir, Cerrar y Deleitar. En cada una de estas etapas, se definen los estados del ciclo de compra y se emplean acciones específicas para alcanzar los objetivos, como se muestra a continuación:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Atraer")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-5.png', alt='Texto que describa la imagen')
              
          .col-md-6
            h4 Atraer
            p Esta etapa está relacionada con el posicionamiento de la empresa en internet y atraer a los clientes para exponer los productos y/o servicios. Genera la optimización de la infraestructura digital de la empresa, buscando un aumento del tráfico hacia la página <em>web</em> y estructurar un plan de contenidos.

      .py-3.py-md-4(titulo="Convertir")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-6.png', alt='Texto que describa la imagen')
              
          .col-md-6
            h4 Convertir
            p Para la atracción de clientes, la empresa implementa acciones para lograr su conversión en contactos, también conocidos como <em>Leads,</em> por medio de recursos enfocados en este procedimiento que ofrecen la aplicación del cliente a ofertas de contenido o promociones. 

      .py-3.py-md-4(titulo="Cerrar")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-7.png', alt='Texto que describa la imagen')
              
          .col-md-6
            h4 Cerrar
            p Se genera el cierre del proceso de compra, concretar la venta, reforzar los esfuerzos de los equipos de <em>marketing</em> y ventas para maximizar los resultados. Es aquí donde el nivel de personalización debe lograr su más alto nivel de precisión.

      .py-3.py-md-4(titulo="Deleitar")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png', alt='Texto que describa la imagen')
              
          .col-md-6
            h4 Deleitar
            p Enfocada a mantener a quienes ya adquirieron los productos y/o servicios ofrecidos, como clientes permanentes de la empresa, a generar una fidelización, por tal razón, las estrategias deben ser diferentes pero complementarias a las etapas anteriores.

    p.mb-5 Al lograr la aplicación adecuada de estos pasos, la empresa podrá lograr beneficios como

    .BGIMG02.p-4.mb-5
      LineaTiempoB.color-primario.mb-5(:datos="datosLineaTiempoB")








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Alcanzar el público correcto',
        texto:
          'Mediante la creación de contenidos altamente segmentados, la empresa capta clientes acordes a los productos y/o servicios que ofrece. Las organizaciones que involucran <em>marketing</em> de contenidos, cuentan con una tasa de conversión casi 6 veces más alta que aquellas que no lo incorporan.',
        icono: require('@/assets/curso/temas/tema3/img-9.png'),
      },
      {
        titulo: 'Estrechamiento con el cliente',
        texto:
          'Se genera una relación de confianza, pues los productos y/o servicios ofrecidos logran cumplir con la satisfacción de la necesidad del cliente, ya que no lo impulsa a comprar un producto cualquiera, sino el enfocado a sus necesidades.',
        icono: require('@/assets/curso/temas/tema3/img-10.png'),
      },
      {
        titulo: 'Persuasión del cliente',
        texto:
          'A lo largo del proceso <em>Inbound,</em> el usuario recibe puntualmente el tipo de contenido que necesita, mediante un argumento basado en informaciones sólidas, lo que genera una mayor disposición de su tiempo para lograr un convencimiento y continuar su investigación previa a la adquisición del producto. ',
        icono: require('@/assets/curso/temas/tema3/img-11.png'),
      },
      {
        titulo: 'Corto ciclo de ventas',
        texto:
          'El <em>Inbound</em> reduce el tiempo necesario para lograr el cierre de la transacción de compra, esto gracias los contenidos altamente relevantes y personalizados, que genera una aceleración en los <em>leads</em> al pasar por el embudo de ventas, y así los dispone de manera más temprana, en la fase de elección de compra.',
        icono: require('@/assets/curso/temas/tema3/img-12.png'),
      },
      {
        titulo: 'Reducción de costos',
        texto:
          'Toda vez que la aplicación de esta metodología, se disminuyen los costos de adquisición, así como un ahorro frente al mercadeo tradicional, sin generar pérdidas de calidad en productos y/o servicios, convirtiéndose en una inversión bastante eficiente.',
        icono: require('@/assets/curso/temas/tema3/img-13.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
