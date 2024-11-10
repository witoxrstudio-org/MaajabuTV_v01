<template>
  <transition
    enter-active-class="transition-opacity duration-500 ease-out transform"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-opacity duration-500 ease-in transform"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <slot></slot>
  </transition>
</template>
