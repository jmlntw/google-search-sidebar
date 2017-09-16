// ==UserScript==
// @name            Google Search Sidebar
// @namespace       jmln.tw
// @version         0.0.0
// @description     A user script and user style to move Google search tools to sidebar.
// @author          Jimmy Lin
// @license         MIT
// @homepage        https://github.com/jmlntw/google-search-sidebar
// @supportURL      https://github.com/jmlntw/google-search-sidebar/issues
// @include         https://www.google.tld/search?*
// @include         https://www.google.tld/webhp?*
// @compatible      firefox
// @compatible      chrome
// @compatible      opera
// @run-at          document-end
// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* CSS Variables */

  :root {
    --user-sidebar-width: 200px;
    --user-sidebar-spacer: 30px;
    --user-sidebar-primary-color: #dd4b39;
  }

  /* "Tools" Button */

  #hdtb-tls {
    display: none !important;
  }

  /* Search Tools Menu */

  #hdtbMenus * {
    box-sizing: border-box !important;
  }

  #hdtbMenus {
    display: block !important;
    position: static !important;
    float: left !important;
    height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    background: transparent !important;
  }

  #hdtbMenus .hdtb-mn-cont {
    height: 0 !important;
  }

  #hdtbMenus .hdtb-mn-hd,
  #hdtbMenus .hdtbU {
    display: block !important;
    position: relative !important;
    top: 0 !important;
    width: var(--user-sidebar-width) !important;
    min-width: var(--user-sidebar-width) !important;
    max-width: var(--user-sidebar-width) !important;
    white-space: normal !important;
  }

  #hdtbMenus .hdtbU {
    margin-bottom: var(--user-sidebar-spacer) !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  #hdtbMenus .hdtb-mn-hd,
  #hdtbMenus .hdtb-mn-hd .mn-dwn-arw {
    display: none !important;
  }

  #hdtbMenus .hdtb-mn-hd .mn-hd-txt {
    white-space: normal !important;
  }

  #hdtbMenus .hdtb-mn-hd.hdtb-tsel[aria-label*="×"],
  #hdtbMenus .hdtb-mn-hd.hdtb-tsel[aria-label*=" – "],
  #hdtbMenus .hdtb-mn-hd.hdtb-tsel[aria-label*='<div class="sc">'] {
    display: block !important;
    padding-right: var(--user-sidebar-spacer) !important;
    padding-left: var(--user-sidebar-spacer) !important;
    color: var(--user-sidebar-primary-color) !important;
    font-weight: bolder !important;
    pointer-events: none !important;
  }

  #hdtbMenus .hdtbItm {
    background: transparent !important;
  }

  #hdtbMenus .hdtbItm.hdtbSel {
    background: transparent !important;
    color: var(--user-sidebar-primary-color) !important;
    font-weight: bolder !important;
  }

  /* Search Tools Sub Menu */

  #hdtbMenus .tnv-lt-sm {
    height: auto !important;
    overflow: visible !important;
    font-weight: normal !important;
    white-space: nowrap !important;
  }

  /* "Custom range..." and "Exactly..." Button */

  #cdrlnk,
  .exylnk {
    background: transparent !important;
    color: inherit !important;
  }

  /* "Reset" Button */

  #hdtb-rst.hdtb-mn-hd {
    display: block !important;
    padding: 0 var(--user-sidebar-spacer) !important;
  }

  /* Color Filter in Image Search */

  #color-specific #sc-block {
    width: inherit !important;
  }

  /* Result Status "About x results (y seconds)" Text */

  #resultStats {
    top: 0 !important;
    opacity: 1 !important;
  }

  /* Main Content and Footer */

  #hdtb-msb .hdtb-mitem:first-child,
  #center_col,
  #fbar ._HR,
  #fbar ._nW {
    margin-left: var(--user-sidebar-width) !important;
  }

  #appbar {
    width: calc(100% - var(--user-sidebar-width)) !important;
    margin-left: var(--user-sidebar-width) !important;
  }

  #appbar .ab_tnav_wrp,
  #appbar #lxhdr {
    margin-left: 0 !important;
  }

  #appbar ._bfj {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  /* Top Search Form */

  #searchform .tsf-p {
    padding-left: var(--user-sidebar-width) !important;
  }

  /* Wikipedia Information Block */

  #rhs {
    transform: translateX(var(--user-sidebar-spacer)) !important;
  }

  /* Image Search Results */

  #irc_bg {
    margin-left: var(--user-sidebar-width) !important;
  }

  #irc_bg .irc_t {
    margin-right: calc(var(--user-sidebar-width) * -0.5) !important;
    margin-left: calc(var(--user-sidebar-width) * -0.5) !important;
  }

  #irc_bg .irc_t img {
    max-width: calc(100% - var(--user-sidebar-width)) !important;
  }
`)