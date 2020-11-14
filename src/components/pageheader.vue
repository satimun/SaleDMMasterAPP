<template>
  <div class="card-header">
    <div class="float-left">
      <h4>{{title}}</h4>
      <span
        class="text-muted"
        v-show="help"
      >{{help}}</span>
    </div>
    <div class="float-right">
      <b-breadcrumb
        v-show="breadcrumb"
        :items="breadcrumbs"
      ></b-breadcrumb>

      <b-button
        :title="$t('dic.help')"
        variant="primary"
        v-show="visible"
        @click="onClick"
        size="sm"
      >
        <i class="fa fa-question fa-lg"></i>
      </b-button>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    help: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      default: null
    },
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    visible () { return typeof this.onClick === "function"; },
    breadcrumb () { return this.breadcrumbs != null }
  },
  mounted () {

  },
  data () {
    return {
    }
  },
  methods: {
    /* Onclick(e) {
        
    } */
  }

}
</script>

<style scoped>
.btn {
  padding: 0.05rem 0.5rem 0.2rem 0.5rem;
  vertical-align: top;
}
</style>