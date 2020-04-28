import L from "leaflet";

/**
 * @class AstroSidebarControl
 * @aka L.Control.AstroSidebarControl
 * @extends L.Control
 * @classdesc
 * Holds the projection and lat/lon buttons and lat/lon coordinate display when
 * the map goes fullscreen.
 */
export default L.Control.AstroSidebarControl = L.Control.extend({
  options: {
    position: "topleft"
  },

  /**
   * @function AstroSidebarControl.prototype.initialize
   * @description Constructs a sidebar control.
   * @param {DOMElement} consoleElement - GUI Console element to add to the sidebar.
   * @param {DOMElement} coordContainer - Div element containing the coordinate displays.
   */
  initialize: function(consoleElement, coordContainer) {
    this._console = consoleElement;
    this._consoleParent = consoleElement.parentNode;
    this._coordContainer = coordContainer;
    this._coordContainerParent = coordContainer.parentNode;

    this._container = L.DomUtil.create("div", "sidebar");
    L.DomUtil.addClass(this._container, "sidebar-collapsed");
    this._expandButton = L.DomUtil.create(
      "a",
      "sidebar-button",
      this._container
    );
    this._expandButton.innerHTML = ">";
    this._expandButton.title = "expand";
    this._expandButton.setAttribute("role", "button");
    L.DomEvent.on(this._expandButton, "click", this.buttonClicked, this);
  },

  /**
   * @function AstroSidebarControl.prototype.onAdd
   * @description Moves the controls onto the sidebar.
   * @param  {AstroMap} map - The AstroMap to add the control to.
   * @return {Object} The div-container the control is in.
   */
  onAdd: function(map) {
    this._container.appendChild(this._coordContainer);
    this._container.appendChild(this._expandButton);
    // container.appendChild(this._console);
    return this._container;
  },

  /**
   * @function AstroSidebarControl.prototype.onRemove
   * @description Puts the controls back onto the console.
   * @param  {AstroMap} map - The AstroMap to remove the control from.
   */
  onRemove: function(map) {
    this.collapse();
    this._coordContainerParent.appendChild(this._coordContainer);
  },

  /**
   * @function AstroSidebarControl.prototype.buttonClicked
   * @description Is called when the expand/collapse button is clicked.
   */
  buttonClicked: function() {
    if (L.DomUtil.hasClass(this._container, "sidebar-collapsed")) {
      this.expand();
    } else {
      this.collapse();
    }
  },

  /**
   * @function AstroSidebarControl.prototype.expand
   * @description Expands the sidebar by removing the lat/lon coord display,
   *              adding the console, and changing the styling of the container.
   */
  expand: function() {
    L.DomUtil.removeClass(this._container, "sidebar-collapsed");
    L.DomUtil.addClass(this._container, "sidebar-expanded");

    this._coordContainerParent.appendChild(this._coordContainer);
    this._container.insertBefore(this._console, this._expandButton);
    this._expandButton.innerHTML = "<";
    this._expandButton.title = "collapse";
  },

  /**
   * @function AstroSidebarControl.prototype.collapse
   * @description Collapses the sidebar by removing the console,
   *              adding the lat/lon coord display, and changing t
   *              he styling of the container.
   */
  collapse: function() {
    L.DomUtil.addClass(this._container, "sidebar-collapsed");
    L.DomUtil.removeClass(this._container, "sidebar-expanded");

    this._consoleParent.appendChild(this._console);
    this._container.insertBefore(this._coordContainer, this._expandButton);
    this._expandButton.innerHTML = ">";
    this._expandButton.title = "expand";
  }
});
