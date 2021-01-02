# next-10-ssg-markdown-blog

Next.js (v.10) project to turn a post written in markdown into a static site.

## Features

Main features

- Fewer dependencies
- High lighthouse score
  - Display images in markdown using next/image
  - Display links in markdown using next/link

Other useful features

- Generating a sitemap (`yarn prebuild`)
- Google Analytics component (`/src/components/GoogleAnalytics`)

## How to describe images in markdown

`#width:100,height:100`のように記述すると画像のサイズを指定できます。
You can specify the size of the image by using `#width:100,height:100`.

```md
![sample](/out/icon.jpg#width:100,height:100)
![sample](https://example.com/sample.png#width:100,height:100)
```

If the image size is specified and the image is provided from under `/public`, then `next/image` will be used. (recommended).

```md
![sample](/out/icon.jpg#width:100,height:100)
```

render to

```tsx
<Image alt="sample" src="/out/icon.jpg" width={100} height={100} />
```

Please see `/src/libs/parseSizedImage.ts` and `/src/components/PostDetail.tsx` for details.

**The following is the text automatically generated by `create-next-app`**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
