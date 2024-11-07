<template>
  <transition
    enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="opacity-0 scale-50"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-transform duration-500 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-50"
  >
    <slot></slot>
  </transition>
</template>
