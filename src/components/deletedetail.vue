<template>
  <div>
    <h4>{{ $t('dic.msgdel') }}</h4>
    <p v-html="msg"></p>
  </div>
</template>

<script>
export default {
  props: {    
    msg: {
      type: String,
      default: null
    }
  }
}
</script>