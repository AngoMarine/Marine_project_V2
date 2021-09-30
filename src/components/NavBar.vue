<template>
  <div id="navbar"> <!-- dans app il y a toute la logique de l'application-->
    <nav> <!-- Navigation-->
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="../assets/img/art.png" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/user-settings">
              <i class="fas fa-user"></i> <!-- logo user-->
            </router-link>
          </li>
          <li>
            <router-link to="/wish-list">
              <i class="fas fa-heart"></i> <!-- logo like-->
              <span id="nav-not"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/shopping-cart">
              <i class="fas fa-shopping-cart"></i> <!-- logo cadi-->
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>