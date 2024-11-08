<template>
  <div>
    <div class="rm-wrapper bg-black text-white">
      <Navbar @toggleMenu="toggleMenu" />
    </div>
    <div class="rm-wrapper">
      <all />
    </div>
    <div>
      <subscription />
    </div>
    <div>
      <laster />
    </div>
    <div class="bg-stone-800 rm-wrapper">
      <lasterUnderLaster />
    </div>
  </div>
</template>