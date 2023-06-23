/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"], 
    /* configuramos los dominios para que se cargen en las url 
      de la fuente de imagenes y reiniciar servidor, para que surta efecto
      los cambios */
  },
};

module.exports = nextConfig;
