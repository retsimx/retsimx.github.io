## Site conventions

This is a **public** personal engineering blog (Astro, static, deployed to GitHub Pages
via `.github/workflows/deploy.yml` on push to `main`).

### Privacy / redaction rules (hard requirements)

Content must never include identifying or sensitive information:

- No LAN IPs, MAC addresses, Wi-Fi SSIDs, or VLAN numbers — write `ws://<pi>:2026`, "the
  tablet", "a dedicated IoT VLAN", etc.
- No device/unit unique IDs (e.g. the MyAir unit id) — use `xxxxx` placeholders.
- No secrets beyond what the owner has explicitly approved for publication (currently:
  the vendor apps' hardcoded AES key and the throwaway `lobotomy` keystore credentials).
- Photos must be EXIF/GPS-stripped before committing (see photo pipeline below).

### Structure

- `src/layouts/Base.astro` — site shell (terminal-prompt header, nav, footer)
- `src/layouts/Post.astro` — series-part layout (badges, prev/next nav)
- `src/data/series.ts` — series metadata; add entries here when adding series parts
- `src/components/Mermaid.astro` — client-side mermaid via jsDelivr CDN (`is:inline`
  script; falls back to showing raw source if the CDN is unreachable). No local build
  step for diagrams — keep it that way.
- `src/styles/global.css` — hand-rolled dark theme; no CSS framework

### Photos

Pipeline: `convert IN.jpg -auto-orient -resize '1600x1600>' -strip -quality 82 OUT.jpg`
(ImageMagick). Store under `public/photos/<topic>/`, reference with `loading="lazy"`.

### Astro whitespace gotcha

Astro collapses whitespace to nothing at text↔tag line breaks (`text\n<em>` renders as
`text<em>` with no space — kerning bug). Keep the boundary word and the tag's `<` on the
same source line. Verify after building:

```sh
python3 - <<'EOF'
import re, glob
for f in glob.glob('dist/**/*.html', recursive=True):
    txt = open(f).read()
    for m in re.finditer(r'<(a|em|strong|code)\b[^>]*>[^<]*</\1>', txt):
        b = txt[m.start()-1] if m.start() > 0 else ''
        a = txt[m.end()] if m.end() < len(txt) else ''
        if b.isalpha() or a.isalpha():
            print(f, txt[max(0,m.start()-45):m.end()+45])
EOF
```

(no output = clean)

### Deployment

Push to `main` → GitHub Actions builds and deploys. Pages source is set to
"GitHub Actions" (`build_type: workflow`), not branch deploy.

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
