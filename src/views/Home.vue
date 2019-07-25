<template>
  <div class="home">
   <mynav></mynav>
   <router-view/>
   <!-- <mybody></mybody> -->
  </div>
</template>

<script>
import mynav from "@/components/mynav"
// import mybody from "@/components/mybody"
export default {
  name: "home",
  components:{
    mynav:mynav,
    // mybody:mybody
  }
};
</script>
