<template lang="pug">
div
  app-nav
  app-overlay(v-if="$store.getters.getShow")
</template>
