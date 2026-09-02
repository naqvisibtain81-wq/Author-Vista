# Author Vista website

Static-first Astro website implementing the approved “Open Horizon” brand direction.

## Local development

```sh
npm install
npm run dev
```

## Production build

The default build is deliberately non-indexable and uses the reserved `preview.authorvista.invalid` canonical host.

Before a production build, supply the verified domain and explicitly enable indexing:

```sh
SITE_URL=https://your-verified-domain.example PUBLIC_SITE_STATUS=production npm run build
```

Do not enable production mode until business identity, contact details, legal policies, form handling and the launch proof register are approved.
