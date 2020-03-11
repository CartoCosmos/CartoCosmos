import "leaflet";
import "leaflet-sidebar-v2";
import "../assets/fontawesome/all.js";

var panelContent = {
  id: "home",
  tab: '<i class="fa fa-home"></i>',
  title: "Your Profile",
  position: "bottom" //
};

/**
 * @class FullScreenMenu
 * @aka L.Control
 * Class that adds menu container from L.control.
 */
export let FullScreenMenu = L.control
  .sidebar({
    container: "fs-menu-container"
  })
  .addPanel(panelContent);
