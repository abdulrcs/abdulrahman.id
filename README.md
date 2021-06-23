![](https://i.imgur.com/aUVHd1c.png)

---

## ⚡ abdulrahman.id

I've decided to open-source my latest portfolio website! it has dynamic content management to add projects and posts using Contentful CMS, and was built using Next.js and Chakra UI.

Refer to [Next.js](https://nextjs.org/docs/) and [Chakra UI](https://chakra-ui.com/docs) documentation to learn more.

Feel free to fork this repository to make your own portfolio, and if you liked the repo, kindly support it by giving it a star ⭐!

## 🛠 Get started
### Getting the API Keys
Create an `.env.local` and follow the variable name based on `.env.example` and get the API Keys based on the steps below  

<details>
<summary>Contentful API Keys</summary>
<p>
<br>
1. Create a <a href="https://www.contentful.com/sign-up/">Contentful</a> account <br>
2. Add a Community Space (It's free!)  <br>
3. Choose "I create content"  <br>
4. Go to content model and start to add content type  <br>

> 📌  In this portfolio website, it has 3 Content type which is:
> 1. BlogPosts
> 2. FeaturedProjects
> 3. Projects
> 
> You must add this exact name since it's the ID that's used in the code.

5. Add the content type according to these fields:  <br>
    
	![](https://i.imgur.com/PhC2Quk.png)
	![](https://i.imgur.com/OD1oWG2.png)
	![](https://i.imgur.com/nIkloDk.png)
6. Go to settings -> API Keys -> Content Delivery / Preview tokens -> "Your space name"
copy the Space ID and Content Delivery API access token  <br>
7. Put it into the environment variables according to `.env.example` and you're all set! <br>
</p>
</details>

<details>
<summary>Firebase API Keys</summary>
<p>
  <br>
  1. Create a <a href="https://console.firebase.google.com/">Firebase</a> project <br>
2. After setting things up you'll get the API keys, save those. <br>
3. Go to Firestore Database <br>
4. Add a collection named <code>views</code> <br>
  5. Then, put those API Keys before according to the <code>.env.example</code> and that's it!<br> 
</p>
</details>

<details>
<summary>Google Analytics API Keys</summary>
<p>
<br>
  1. Create a <a href="https://analytics.google.com/">Google Analytics</a> account, in the <i>property settings</i> part, don't forget to <b>turn on Universal Analytics</b><br>
  2. After that, you'll see a code starting with <code>UA-</code> <br>
  3. Copy those code and put it into environment variables according to <code>env.example</code> and done! <br>
  </p>
</details>  

### Starting the Project
Install the dependencies with `npm i` or `yarn`  
Start the project by `npm run dev` or `yarn dev`  
  
### Deployment
You can deploy easily by using [Vercel](https://vercel.com/) 🎉  
  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fabdulrcs%2Fabdulrahman.id)

## 📌 Overview
`pages/index.js` = Homepage  
`pages/projects/index.js` = Projects archive page  
`pages/blog/index.js` = Blog listings page  
`pages/blog/[slug].js` = Blog post page  
`pages/api/views` = API to fetch blog post views from Firebase  

## ⚙ Tech Stack
- Next.js
- Chakra UI
- Contentful CMS
- MDX (next-mdx-remote)
- Firebase
- Google Analytics (react-ga)
