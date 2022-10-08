# Contributing

## Project setup

If you do need to set the project up locally yourself, feel free to follow these
instructions:

### Setup steps

First, fork the repo, then do this:

```sh
git clone <your-fork>
cd ./dhafit
# copy the .env.example to .env
# fill all environment with the appropriate value.
yarn install
```

If that all worked without trouble, you should be able to start development
with:

```sh
yarn dev
```

And open up `http://localhost:3000`.

## Translation contributions

You can contribute by translating the content on my website.

### Blog translation

I would be very grateful if you translated the content on my blog. There are several things to do before translating a blog.

1. Find file on [blog directory](./posts/blog/) that contain property `isNotTranslated` like this:

```mdx
---
... other stuff ...
isNotTranslated: true
---
```

2. Change some property on frontmatter bellow.

```mdx
---
title: Translated title
subtitle: Translated subtitle goes to here.
timestamp: Saturday, July 30 2022
isNotTranslated: false // or delete this line
... other stuff ...
---
```

> Other than the properties listed above, no changes are required.

3. After that, start translating the content on the page.

## Page content translation

On most pages, there will be a string that needs to be translated. If you find wrong translation or untranslated strings, feel free to translate the strings.

To translate it, you have to change the json in the following two files.

- [Indonesian file](./lib/locales/translations.id.json)
- [English file](./lib/locales/translations.en.json)
