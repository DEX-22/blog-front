<template>
<div class="columns">
      <div class="column is-full">
        <Navbar />
      </div>
  </div>
  <div class="chat__container">
    <Sidebar />
    <section class="messages__container">
      Messages
      <div>search</div>
      <ul>
        lista de contactos
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
        <li>chat</li>
      </ul>
    </section>
    <section class="conversation__container">
      <header>name</header>
      <main>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
      </main>
      <footer>
        <span>linkicon</span>
        <input type="text" />
        <span>image icon</span>
        <span>emoji</span>
        <span>send</span>
      </footer>
    </section>
  </div>
</template>
  
  <script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
 import Navbar from '@/components/Navbar/Navbar.vue'
  

export default {
  components: { Sidebar,Navbar },
};
</script>
  
  <style scoped>
.chat__container {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.sidebar__container {
  flex-flow: 1;
}
.messages__container {
  flex-flow: 4;
}
.conversation__container {
  flex-flow: 7;
}
.sidebar__list > li {
  height: 50px;
}
</style>
  