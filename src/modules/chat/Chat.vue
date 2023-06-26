<template>
    <div class="chat__container">
      <aside class="sidebar__container">
        <ul class="sidebar__list">
          <li>
            <icon icon="comments" />
          </li>
          <li>users</li>
          <li>report</li>
          <li> settings</li>
          <li>profile</li>
        </ul>
      </aside>
    <section class="messages__container">
      Messages
      <div>
        search
      </div>
      <ul>
        lista de contactos
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
        <li> chat </li>
      </ul>
    </section>
    <section class="conversation__container">
      <header>
        name 
      </header>
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
        <input type="text">
        <span>image icon</span>
        <span>emoji</span>
        <span>send</span>
      </footer>
    </section>
    </div>
  </template>
  
  <script> 
  export default {
    
  }
  </script>
  
  <style scoped>
  .chat__container{
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .sidebar__container{
      flex-flow: 1;
  }
  .messages__container{
    flex-flow: 4;
  }
  .conversation__container{
    flex-flow: 7;
  }
  .sidebar__list > li{
    height: 50px;
  }

  </style>
  