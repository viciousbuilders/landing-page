<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## App catalog ordering

Keep the All apps catalog in `src/app/apps.ts` in its existing order. Append newly added apps to the end of the `apps` array, never prepend them. The homepage's `featuredAppNames` list is curated separately and must not reorder the full catalog.
