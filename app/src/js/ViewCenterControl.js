import L from "leaflet";

/**
 * @class ViewCenterControl
 * @aka L.Control.ViewCenterControl
 * @inherits L.Control
 *
 * @classdesc Control that allows users to reposition the map to the center while maintaining current zoom level.
 */
export default L.Control.ViewCenter = L.Control.extend({
  options: {
    position: "topleft"
  },

  /**
   * @function ViewCenterControl.prototype.onAdd
   * @description Creates new container holding the ViewCenter button
   * @param  {AstroMap} map - The map to add the control to.
   * @return {Div} Container containing the ViewCenter button.
   */
  onAdd: function(map) {
    let container = L.DomUtil.create("div", "leaflet-bar");
    let className = "leaflet-control-view-center";

    this._createButton(className, container, map);

    return container;
  },

  /**
   * @function ViewCenterControl.prototype._createButton
   * @description Creates new link element inside the ViewCenter container and provides onclick functionality to reposition the map view to the map's center based on its current projection.
   * @param  {String} className - The name of the element's class.
   * @param  {Div} container - The container object to put the element into.
   * @param  {AstroMap} map - The map to add the control to.
   * @return {Link} Element containing the ViewCenter link.
   */
  _createButton: function(className, container, map) {
    let link = L.DomUtil.create("a", className, container);
    link.href = "#";
    link.title = "Center map";
    L.DomEvent.on(
      link,
      "click",
      function() {
        map.setView(map.center(), map.getZoom());
      },
      map
    );
    return link;
  }
});
