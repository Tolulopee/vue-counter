
import {ref} from 'vue'

const CounterApp = () => {
  function increment() {
      this.$store.commit("increment");
    }

   function decrement() {
      this.$store.commit("decrement");
    }
   function  reset() {
      this.$store.commit("reset");
    }

	return {
		increment,
		decrement,
		reset,
	}
}

export default CounterApp;