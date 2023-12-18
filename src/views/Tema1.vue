<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La campaña de <em>marketing online</em>
      
    .row.mb-4
      .col-md-8
        p Para presentar la campaña de <em>marketing,</em> se reconocen tres elementos importantes: el Coste de Adquisición de un Cliente (CAC), el valor de vida de un cliente (CLV) y la tasa de conversión. Cada uno de estos elementos desempeña un papel crucial en el <em>marketing</em> digital y contribuye a mejorar la calidad del servicio a los clientes en cada una de las empresas.
        p El coste de adquisición de un cliente (CAC), representado por sus siglas, es un indicador que mide la cantidad de recursos invertidos por la organización para incorporar un cliente nuevo a su base de clientes. Este valor se calcula tomando en cuenta la inversión media realizada por la empresa en un período de tiempo determinado para adquirir un nuevo cliente. Reducir el CAC es esencial para optimizar la eficiencia de la campaña de <em>marketing,</em> ya que significa que la empresa está gastando menos para adquirir nuevos clientes. Esto puede lograrse a través de estrategias más efectivas, como publicidad segmentada, marketing de contenidos de alta calidad o campañas de referencia. Este indicador permite calcular la cantidad media apostada por la empresa para lograr esta adquisición en un factor de tiempo determinado, como se muestra a continuación:

      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img-1.png', alt='Imagen decorativa')

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nEdLPaOAs5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 El valor de vida de un cliente (CLV), en cambio, se refiere a la cantidad de ingresos que un cliente promedio genera a lo largo de su relación con la empresa. Es un indicador fundamental que ayuda a entender el valor a largo plazo que un cliente aporta a la organización. Incrementar el CLV implica fomentar la retención de clientes, mejorar la calidad de los productos o servicios ofrecidos, y establecer relaciones sólidas con la base de clientes existente. Estrategias como programas de fidelización, atención al cliente de calidad y la personalización de la experiencia del cliente pueden ser eficaces para aumentar el CLV.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFFBE5")
          p El valor de vida de un cliente (CLV), en cambio, se refiere a la cantidad de ingresos que un cliente promedio genera a lo largo de su relación con la empresa. Es un indicador fundamental que ayuda a entender el valor a largo plazo que un cliente aporta a la organización. Incrementar el CLV implica fomentar la retención de clientes, mejorar la calidad de los productos o servicios ofrecidos, y establecer relaciones sólidas con la base de clientes existente. Estrategias como programas de fidelización, atención al cliente de calidad y la personalización de la experiencia del cliente pueden ser eficaces para aumentar el CLV.

    p.mb-5 A continuación, se desarrolla un ejemplo práctico del cálculo del CAC mensual para una empresa de venta de productos de consumo:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="fade-right", alt="En la tabla 1 se desarrolla un ejemplo práctico del cálculo del CAC mensual para una empresa de venta de productos de consumo.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Ejemplo cálculo CAC mensual</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="2") Actividad de <em>marketing</em>
                th Valor unitario
                th Cantidad
                th Valor Total
            tbody
              tr
                td(colspan="2") <strong>Equipo de trabajo (salario y comisiones)</strong>
                td.text-center $1.800.000
                td.text-center 5
                td.text-center $9.000.000
              tr
                td(colspan="2") <strong>Campaña en redes sociales</strong>
                td.text-center $2.000.000
                td.text-center 3
                td.text-center $6.000.000
              tr
                td(colspan="2") <strong>Anuncios en medios físicos (periódico y revistas)</strong>
                td.text-center $1.500.000
                td.text-center 4
                td.text-center $6.000.000
              tr
                td(colspan="4") <strong>Suma de las inversiones para adquirir clientes</strong>
                td.text-center $26.000.000
              tr
                td(colspan="4") <strong>Número de clientes adquiridos en el mes</strong>
                td.text-center 100
              tr
                td(colspan="4") <strong>CAC= (suma de las inversiones para adquirir clientes) / (número de clientes en el mes)</strong>
                td.text-center $260.000
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-5(style="background-color:#FFFBE5")
          h3 ¿Cómo conocer el alcance de este indicador?
          p Teniendo en cuenta el ejemplo de esta empresa, se debe conocer cuánto está generando este nuevo cliente en utilidades para el negocio, si tiene un promedio de compra de los productos que generan utilidades por $350.000, se tiene un indicador que permite concluir que la estrategia de <em>marketing</em> y ventas es adecuada; mientras que si estos clientes generan utilidades de $150.000, pero su costo de adquisición es de $260.000, se deben tomar acciones para su ajuste, pues la organización se encuentra invirtiendo mucho más de lo que recibe para sus clientes nuevos.

        .row.mb-5
          .col-md-5.mb-3
            figure
                img(src='@/assets/curso/temas/tema1/img-2.svg', alt='')
          .col-md-7
            .row
              .col-lg-12
                .cajon-b.color-acento-contenido.p-3.mb-5
                  p.mb-3 Estas acciones de mejora se pueden direccionar bajo dos perspectivas, la optimización de las actividades y la incorporación de nuevos clientes. En la actualidad, la toma de decisiones tiene la gran ventaja de contar con unas métricas que le permiten optar por estrategias fundamentadas en los datos que arrojan, para el <em>marketing</em> digital aún más, pues todo es medible, desde la cantidad de personas que accedieron a un sitio web, hasta el momento exacto en el cual un usuario paró de visualizar un vídeo en YouTube.
                  p De esta manera, y siguiendo el ejemplo aplicado anteriormente, se deben encaminar acciones para buscar la eficiencia de las actividades, ya sea reduciendo el equipo de trabajo, o evaluando la efectividad de alguna de las redes sociales, prescindiendo de una en un periodo de tiempo, aplicar nuevamente la fórmula con la cantidad de clientes nuevos en un nuevo periodo de tiempo, de esta manera se pueden optimizar cada una de las variables y generar la mejora continua en la organización.
                  p Desde otra perspectiva, la de incorporación de nuevos clientes, que pueden encaminarse a generar un esfuerzo adicional para buscar la eficiencia de <em>marketing</em> y ventas, para lo cual se puede implementar estrategias como <em>Inbound marketing.</em>

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1. Valor de vida de un cliente

    p Para comprender este concepto, se parte del simplificado por sus siglas en inglés LTV <em>(Life Time Value),</em> es la cantidad total de dinero que el cliente ingresa a la organización durante todo el periodo de tiempo que perdura comprando sus productos y/o servicios.
    p.mb-5 Se constituye como otro indicador fundamental, y complementario con el CAC, para la toma de decisiones para las organizaciones, toda vez que generan una caracterización de los mejores clientes para la empresa, y en qué esfuerzos debe invertir el negocio para lograr la mayor generación de utilidades para cada tipo de clientes, y genera una mayor duración de su relación comercial. 

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFFBE5")
          p Según el portal especializado HubSpot Research en su informe sobre el estado de las tendencias de <em>marketing</em> 2022, anuncia que un 55 % de las empresas en crecimiento valoran las inversiones dirigidas al cliente con una gran importancia, pero tan solo el 29 % de los negocios con decrecimiento piensa que estas inversiones son muy relevantes, lo que concluye que las organizaciones que llegan a sus clientes con éxito logran mayores beneficios debido a su satisfacción.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Cálculo de la LTV

    p.mb-5 Para generar la aplicación de la fórmula para hallar el valor de la vida del cliente, se hace necesario asimilar y cuantificar algunos conceptos adicionales, que permitirán desarrollar el siguiente cálculo:

    .row.justify-content-center.align-items-center.mb-5
      .col-8(data-aos="fade-down-right")
        .cajon.color-primario.p-4
          p <strong>LTV=Utilidad promedio de compras x Tasa de recurrencia x Tiempo promedio de retención</strong>

    p.mb-5 Es importante reconocer lo que representa cada uno de estos elementos, como se muestra a continuación: 

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.colorcol1.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/img-3.png', alt='Texto que describa la imagen')

          h3.text-center Utilidad promedio de compras
          p Este resultado se obtiene al cuantificar las utilidades que percibe la empresa por las compras que hace el cliente en un periodo de tiempo estimado, para esto se divide el valor total de las utilidades efectuadas en la variable de tiempo.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.colorcol1.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/img-4.png', alt='Texto que describa la imagen')

          h3.text-center Tasa de recurrencia
          p Esta tasa se halla promediando la cantidad de compras que hace el cliente en el tiempo estimado, por ejemplo, cuántas veces compró el cliente productos en el establecimiento en la semana, en el mes o en el semestre.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.colorcol1.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/img-5.png', alt='Texto que describa la imagen')

          h3.text-center Tiempo promedio de retención
          p Este tiempo se calcula generando una división entre el número de clientes y el tiempo que permanecen como consumidores con la compañía, es un indicador estándar que presenta variaciones no muy significativas en el corto y mediano plazo.

    p.mb-5 Posteriormente del hallazgo de cada una de estas variables, se cuantifican y se proyectan para el cálculo de la LTV; siguiendo el ejemplo proyectado para la empresa utilizada para el CAC, y teniendo un horizonte de cálculo de 12 meses, se obtienen los siguientes resultados:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="fade-right", alt="En la tabla 2 se muestra el cálculo de la LTV en un horizonte de 12 meses.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Ejemplo cálculo LTV</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="2") Variable
                th Cantidad anual 
                th Meses
                th Resultado
            tbody
              tr
                td(colspan="2") <strong>Utilidad promedio de compras</strong>
                td.text-center $4.200.000
                td.text-center 12
                td.text-center $350.000
              tr
                td(colspan="2") <strong>Tasa de recurrencia</strong>
                td.text-center 15
                td.text-center 12
                td.text-center 1,25
              tr
                td(colspan="2") <strong>Tiempo promedio de retención</strong>
                td.text-center 1500
                td.text-center 60
                td.text-center 25,03
              tr
                td(colspan="4") <strong>LTV=Valor promedio de compras x Tasa de recurrencia x Tiempo promedio de retención</strong>
                td.text-center $10.950.625

    p.mb-5 Al igual que el CAC, la LTV puede mejorarse mediante diversas acciones que contribuyan a permitir al cliente acceder a mejores servicios y oportunidades de compra en relación a los productos que desea adquirir. Estas acciones pueden incluir:

    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Acciones de mejora LTV</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-6-1.svg', alt='En la figura 1 se muestran las acciones de mejora LTV, que permiten al cliente acceder a mejores servicios y posibilidades de compra.')

    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Acciones de mejora LTV</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-6-2.svg', alt='En la figura 1 se muestran las acciones de mejora LTV, que permiten al cliente acceder a mejores servicios y posibilidades de compra.') 

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="fade-down-right")
        p Asimismo, la implementación de técnicas de fidelización permitirá aumentar el tiempo promedio de retención del cliente. Por ejemplo, actualmente, se cuenta con una media de retención de 5 años, pero esta cifra puede incrementarse mediante la aplicación de este tipo de estrategias.
        p El valor de la vida del cliente se convierte en una métrica fundamental para cualquier negocio, ya que proporciona información detallada sobre si es más costoso mantener a los clientes existentes o adquirir nuevos. Además, ayuda a determinar cómo generar una conversión a partir del CAC para optimizar la rentabilidad de la organización, lo que facilita la creación de estrategias innovadoras destinadas a la retención de los consumidores.

    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2. La tasa de conversión

    p La tasa de conversión, también conocida como CR (Conversion Rate) en inglés, se define como una métrica que permite medir resultados. Representa el porcentaje de usuarios o clientes que llevan a cabo una acción específica en un período de tiempo determinado.
    p.mb-5 Estas acciones son definidas por la organización según sus necesidades de evaluación, como compras, descargas, completar cuestionarios, registros, reservas, entre otras, relacionadas con sus productos o servicios. Es esencial tener en cuenta el objetivo principal, los resultados y la empresa, como se describe a continuación: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Objetivo principal")
        .col-md-6.mb-4.mb-md-0
          p El objetivo principal del CR, es evaluar el nivel de retorno de las diferentes inversiones de la organización en factores como tiempo o financiero. Es usado para medir los resultados en el <em>marketing</em> digital, representa el grado de efectividad que ha obtenido la empresa y contrasta diferentes periodos de tiempo; identificando previamente qué estrategia se desea evaluar en un período de tiempo. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-7.png', alt='Texto que describa la imagen')

      .row(titulo="Resultados")
        .col-md-6.mb-4.mb-md-0
          p Los resultados que genera la tasa de conversión permiten identificar las actividades que conllevan a falencias dentro del proceso de ventas, dado que genera un diagnóstico completo lo que permite la toma de decisiones para corregir los cuellos de botella en el corto plazo.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-8.png', alt='Texto que describa la imagen')

      .row(titulo="Empresa")
        .col-md-6.mb-4.mb-md-0
          p La empresa, que no conlleva el ejercicio de realizar evaluaciones frecuentes a sus procesos no logra los mejores resultados, toda vez que no permite avanzar en las actividades que no se encuentran en su nivel óptimo. Además, no se logran identificar a tiempo y llegan a generar pérdidas, por sus procesos actuales o aquellos que no permiten la captación de nuevos clientes.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-9.png', alt='Texto que describa la imagen')

    .tarjeta.tarjeta.p-4.mt-4.mb-5(style="background:#FFFBE5")(data-aos="flip-up")
      .row.justify-content-center.align-items-center  
        .col-lg-10
          p El cálculo de la Tasa de Conversión se realiza teniendo en cuenta los siguientes pasos:
          ol.lista-ol
            li 
              span.text-bold a)
              | Se expresa la métrica en porcentaje.
            li 
              span.text-bold b) 
              |  Se aplica la fórmula dividiendo el numerador por el denominador, lo que produce un resultado que se multiplica por 100.
          p A continuación, se muestra cómo se aplica esta fórmula:

    .row.justify-content-center.align-items-center.mb-5
      .col-8(data-aos="fade-down-right")
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8
              div.mb-3(data-aos="fade-right")
                mfrac
                  mi.italic TC<sub></sub> =(&nbsp;
                math.text-center
                  mfrac
                    msup
                      mi.italic objetivos conseguidos
                    msup
                      mi.italic Total visitas en un periodo de tiempo
                mfrac
                  mi.italic )X<sub></sub> 100&nbsp;

    .row.mb-4
      .col-md-8
        p Los datos de los <strong>objetivos</strong> siempre deben estar disponibles en la parte superior para su evaluación. Estos objetivos pueden incluir métricas como la cantidad de clics, formularios completados, entre otros. Es fundamental el uso de herramientas como Google <em>Analytics, Adwords</em> y Mapas de calor para establecer filtros sobre estos objetivos y aplicarlos a la fórmula.
        p En la parte inferior de la fórmula, se debe ingresar la cantidad de visitas o usuarios de la página, teniendo en cuenta el período de tiempo que se desea medir, ya sea diario, semanal, mensual, según las necesidades de la dirección o la empresa.
        p Finalmente, el resultado de esta división se multiplica por 100, lo que genera un dato final expresado en porcentaje, como se muestra en la siguiente tabla:

      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img-10.svg', alt='Imagen decorativa')


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="fade-right", alt="En la tabla 3 se muestra un ejemplo del cálculo de la tasa de conversión.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 3.] <em>Ejemplo del cálculo de la TC</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="2") Variable
                th Cantidad 
                th Visitantes en el mes
                th Fórmula
                th Tasa de conversión
            tbody
              tr
                td(colspan="2") <strong>Compras</strong>
                td.text-center 155
                td.text-center 1500
                td.text-center
                  div.mb-3
                    mfrac
                      mi.italic1 <sub></sub> <strong>(</strong>&nbsp;
                    math.text-center
                      mfrac
                        msup
                          mi.italic1 155
                        msup
                          mi.italic1 1500
                    mfrac
                      mi.italic1 <strong>)</strong>X<sub></sub> 100&nbsp;
                td.text-center 10,33 %
              tr
                td(colspan="2") <strong>Diligenciamiento de formulario</strong>
                td.text-center 250
                td.text-center 1500
                td.text-center
                  div.mb-3
                    mfrac
                      mi.italic1 <sub></sub> <strong>(</strong>&nbsp;
                    math.text-center
                      mfrac
                        msup
                          mi.italic1 250
                        msup
                          mi.italic1 1500
                    mfrac
                      mi.italic1 <strong>)</strong>X<sub></sub> 100&nbsp;
                td.text-center 16,66 %
              tr
                td(colspan="2") <strong>Clic en campaña de nuevo producto</strong>
                td.text-center 320
                td.text-center 1500
                td.text-center
                  div.mb-3
                    mfrac
                      mi.italic1 <sub></sub> <strong>(</strong>&nbsp;
                    math.text-center
                      mfrac
                        msup
                          mi.italic1 320
                        msup
                          mi.italic1 1500
                    mfrac
                      mi.italic1 <strong>)</strong>X<sub></sub> 100&nbsp;
                td.text-center 21,33 %

    p Con este tipo de resultados, la empresa puede evaluar el rendimiento de cada objetivo. En el ejemplo dado, se puede observar que la estrategia implementada para la campaña del nuevo producto genera una tasa de conversión muy positiva, superando el 20 %. Esto significa que, de cada 5 personas, al menos una accede al espacio del producto en lanzamiento.
    p.mb-5 Es fundamental realizar un monitoreo frecuente para detectar variaciones en función de la consecución de los objetivos. Esto permite tomar medidas oportunas y redirigir las actividades para alcanzar los resultados deseados.

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFFBE5")
          p De hecho, la Tasa de Conversión se consolida como una herramienta indispensable en el campo del <em>marketing</em> digital. Su versatilidad y capacidad para proporcionar resultados permiten mantener un estado óptimo en relación a los diversos objetivos. Esto implica identificar oportunidades para la empresa y contribuir a un crecimiento sostenido a mediano y largo plazo.



              



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
