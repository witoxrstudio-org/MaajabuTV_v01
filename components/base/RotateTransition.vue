<template>
  <transition
    enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="opacity-0 rotate-[-45deg]"
    enter-to-class="opacity-100 rotate-0"
    leave-active-class="transition-transform duration-500 ease-in"
    leave-from-class="opacity-100 rotate-0"
    leave-to-class="opacity-0 rotate-[-45deg]"
  >
    <slot></slot>
  </transition>
</template>
