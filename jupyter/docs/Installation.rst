.. _installation:

Using pip
=========

.. code:: bash

    pip install CartoCosmos

Using conda
===========

1. First start by downloading Anaconda. Go to `Anaconda's download <https://www.anaconda.com/distribution/>`_ page and follow the instructions for your operating system. You can either download Anaconda3, a distribution with data analysis packages preinstalled, or Miniconda, a bare-bones distribution.
2. Follow instructions on how to setup Anaconda `here <https://www.digitalocean.com/community/tutorials/how-to-install-anaconda-on-ubuntu-18-04-quickstart>`_.
3. This is an environment.yml file in the jupyter directory. From this directory, in your terminal, type:

.. code:: bash

    conda env create -f environment.yml

This will create a conda envirnment named leaflet containing the packages needed to run our jupyter notebooks.

4. Now, activate the environment:

.. code:: base

    conda activate leaflet

5. Finally, open our example notebook: 

.. code:: base

    jupyter notebook examples/Example.ipynb.

