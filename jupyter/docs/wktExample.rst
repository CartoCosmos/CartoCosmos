Well Known Text Example
=====

.. jupyter-execute::

    import CartoCosmos as l
    map = l.planetary_maps('mars')
    map.add_wkt("POLYGON ((-116.946445 -12.134743, -116.946445 15.25898, -75.456603 15.25898, -75.456603 -12.134743, -116.946445 -12.134743))")
    map.display_map()



