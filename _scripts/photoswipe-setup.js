---
permalink: /assets/js/photoswipe-setup.js
---
import PhotoSwipeLightbox from "{{ site.third_party_libraries.photoswipe-lightbox.url.js }}";
import PhotoSwipe from "{{ site.third_party_libraries.photoswipe.url.js }}";
import PhotoSwipeVideoPlugin from "{{ site.third_party_libraries.photoswipe-video-plugin.url.js }}";

const photoswipe = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  showHideAnimationType: 'fade',
  pswpModule: PhotoSwipe,
});
const videoPlugin = new PhotoSwipeVideoPlugin(photoswipe, {});
photoswipe.init();
