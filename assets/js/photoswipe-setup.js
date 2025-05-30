import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js";
import PhotoSwipe from "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js";
import PhotoSwipeVideoPlugin from "https://cdn.jsdelivr.net/npm/photoswipe-video-plugin@1.0.2/dist/photoswipe-video-plugin.esm.min.js";

const photoswipe = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  showHideAnimationType: 'fade',
  pswpModule: PhotoSwipe,
});
const videoPlugin = new PhotoSwipeVideoPlugin(photoswipe, {});
photoswipe.init();
