import L from "leaflet";

export default L.Control.ViewCenter = L.Control.extend({
  options: {
    position: "topleft"
  },

  initialize: function(map) {
    this._centerLatLng = [0, 0];
  },

  onAdd: function(map) {
    let container = L.DomUtil.create("div", "leaflet-bar");
    let className = "leaflet-control-view-center";

    this._createButton(
      this.options,
      className,
      container,
      this.setCenterView,
      map
    );

    return container;
  },
  _createButton: function(options, className, container, fn, map) {
    let link = L.DomUtil.create("a", className, container);
    link.href = "#";
    link.title = "Center map";
    L.DomEvent //.on(link, "click", L.DomEvent.stopPropagation)
      //.on(link, "click", L.DomEvent.preventDefault)
      .on(
        link,
        "click",
        function() {
          map.flyTo([0, 0], map.getZoom());
        },
        map
      );
    return link;
  }
});
