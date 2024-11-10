<template>
  <transition
    enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="opacity-0 -translate-x-10"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-transform duration-500 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 -translate-x-10"
  >
    <slot></slot>
  </transition>
</template>
