export function onRequest(context: any, next: any) {
  // Excluir todas las rutas de Starlight del renderizado
  const starlightRoutes = [
    '/docs',
    '/guides', 
    '/tools',
    '/construction',
    '/advanced',
    '/getting-started',
    '/fr',
    '/de', 
    '/es',
    '/fa',
    '/ja',
    '/zh-cn'
  ];
  
  const url = context.url.pathname;
  
  // Si la ruta actual comienza con alguna de las rutas de Starlight, retornar 404
  for (const route of starlightRoutes) {
    if (url.startsWith(route)) {
      return new Response('Not Found', { status: 404 });
    }
  }
  
  // Continuar con el procesamiento normal
  return next();
}