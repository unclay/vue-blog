<template>
  <div class="navbar-container container">
    <nav class="navbar navbar-transparent" role="navagation">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">UNCLAY</a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">github</a>
        </li>
      </ul>
    </nav>
  </div>
  
</template>

<style lang="less">
@navbar-transparent-bg: transparent;
@navbar-transparent-border: transparent;
@navbar-transparent-brand-color: #fff;
@navbar-transparent-brand-hover-color: #fff;
@navbar-transparent-brand-hover-bg: rgba(255,255,255,0.2);

@navbar-transperent-link-color: #fff;
@navbar-transperent-link-hover-color: #fff;
@navbar-transperent-link-hover-bg: rgba(255,255,255,0.2);
@navbar-transperent-link-active-color: #fff;
@navbar-transperent-link-active-bg: rgba(255,255,255,0.2);

.navbar-container {
  position: relative;
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.navbar-transparent {
  background-color: @navbar-transparent-bg;
  border-color: @navbar-transparent-border;

  .navbar-brand {
    color: @navbar-transparent-brand-color;
    &:hover,
    &:focus {
      color: @navbar-transparent-brand-hover-color;
      background-color: @navbar-transparent-brand-hover-bg;
    }
  }

  .navbar-nav {
    > li > a {
      color: @navbar-transperent-link-color;

      &:hover,
      &:focus {
        color: @navbar-transperent-link-hover-color;
        background-color: @navbar-transperent-link-hover-bg;
      }
    }
    > .active > a {
      &,
      &:hover,
      &:focus {
        color: @navbar-transperent-link-active-color;
        background-color: @navbar-transperent-link-active-bg;
      }
    }
  }
}
</style>