<template>
  <f7-page>
    <f7-navbar title="Nuxt7 Project">
      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon-ios="f7:search"
          icon-aurora="f7:search"
          icon-md="material:search"
        ></f7-link>
      </f7-nav-right>
      <f7-searchbar
        placeholder="Search"
        class="searchbar-components"
        search-container=".search-list"
        search-in=".item-title"
        expandable
        :disable-button="!$theme.aurora"
      ></f7-searchbar>
    </f7-navbar>

    <f7-block-title class="searchbar-hide-on-search">About</f7-block-title>

    <f7-list class="search-list searchbar-found">
      <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
    </f7-list>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
