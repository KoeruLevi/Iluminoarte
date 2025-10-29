# Fundación de Arte Inclusivo — Landing (Next.js + Tailwind)

## Requisitos
- Node 18+
- pnpm / npm / yarn

## Instalación
```bash
pnpm install
# o
npm install
```

## Desarrollo
```bash
pnpm dev
# o
npm run dev
```

## Build
```bash
pnpm build && pnpm start
# o
npm run build && npm start
```

## Despliegue en Vercel
1. Crear repo en GitHub/GitLab/Bitbucket y subir este proyecto.
2. En Vercel: **New Project** → importar el repo.
3. Framework: **Next.js**. Variables opcionales en **Environment Variables**.
4. Deploy. Verás la URL: `https://...vercel.app`.
5. Conectar dominio si aplica. Habilitar Analytics.

## Personalización rápida
- **Branding**: `public/logo.svg`, `public/og-default.png`.
- **Textos y datos**: `data/*.json`.
- **Estilos**: `tailwind.config.ts` y clases en `app/**/*.tsx`.

## Integraciones pendientes
- Pasarela de pago (Webpay/Mercado Pago) en `/donar`.
- Newsletter (Resend/Mailchimp) en `components/NewsletterForm.tsx` o `/api`.
- CMS opcional para gestionar artistas/obras/eventos.

## Licencia
Uso interno de la fundación. Ajustar según necesidad.
