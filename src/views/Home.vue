<template>
  <div class="home">
    {{count}}
    <button @click='increment()'>increment</button>
    <button @click="decrement()">decrement</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Home',
  components: {
    
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count)

    function increment() {
      store.commit('increment')
    }
    function decrement() {
      store.commit('decrement')
    }
    
    return { count, increment, decrement}

  }
}
</script>
