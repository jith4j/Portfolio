# Jith James Fernandez: portfolio

Live at https://jith4j.github.io/Portfolio/

A single static page: `index.html` holds the markup, styles and script. Images and the resume live in `assets/`. There is no build step; GitHub Pages serves the files on the `master` branch as they are.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Edit content

Open `index.html` on github.com, click the pencil icon, edit and commit. The page republishes in about a minute.

- **Hero text:** the `<!-- HERO -->` section.
- **Process steps:** the `<!-- 01 PROCESS -->` section. Each `<li class="step">` is one step.
- **Skills matrix:** the `SKILLS` list in the script near the bottom. Each row is a skill and five 0/1 flags for Guidehouse, Dept of Finance, MHC, CAHS and own projects.
- **Career timeline:** the `<!-- 03 PATH -->` section. Each `<li class="card">` is one stage, newest first. Copy a card to add a stage; `data-short` is the label on the year strip.
- **Selected work:** the `<!-- 04 WORK -->` section. Each `<article class="proj">` is one project.
- **Resume:** replace `assets/resume.pdf` with a file of the same name. Keep referee contact details out of it; this file is public.

## Notes

- With JavaScript off the page still reads as a plain list of sections.
- With "reduce motion" switched on, the data-point animation and autoplay are disabled.
