<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo de Estrategias en <em>marketing online,</em> abarca aspectos relacionados con la planificación y ejecución de campañas de <em>marketing</em> en línea, la elaboración de planes de <em>marketing</em> y la aplicación de enfoques <em>Inbound</em> para atraer y retener clientes. Estas áreas de estudio son fundamentales para promover productos y servicios de manera efectiva en el entorno digital y construir relaciones sólidas con el público objetivo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Estrategias en Marketing Online, se muestran aspectos de planificación y ejecución de campañas de marketing en línea, la elaboración de planes de marketing y la aplicación de enfoques Inbound.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
