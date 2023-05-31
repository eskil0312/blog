export const siteMetadata = {
    title: "Eskil's blog - Explore coding",
    author: 'Eskil Sand',
    fullName: 'Eskil Lindløv Sand',
    headerTitle: "Eskil's blog - Explore coding",
    footerTitle: "Eskil's blog - Explore coding",
    description:
      "Explore coding",
    language: 'en-us',
    siteLogo: '/static/images/logo.jpg',
    image: '/static/images/logo.jpg',
    socialBanner: '/static/images/logo.jpg',
    email: 'eskilsand@outlook.com',
    github: 'https://github.com/eskil0312',
    locale: 'en-US',
    siteRepo:"",
    siteUrl:"",
    twitter:"",
    linkedin: "eskil-sand-23300015b",
    socialAccounts: {
      github: 'eskil0312',
      twitter: 'eskil_sand',
      linkedin: 'eskil-sand-23300015b',
    },
  }
  export const commentConfig = {
    provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
    // https://giscus.app/
    giscusConfig: {
      repo: '', // process.env.GISCUS_REPO
      repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
      category: '', // process.env.GISCUS_CATEGORY
      categoryId: '', // process.env.GISCUS_CATEGORY_ID
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      lightTheme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    // https://utteranc.es/
    utterancesConfig: {
      repo: '', // process.env.UTTERANCES_REPO
      issueTerm: '',
      label: '',
      lightTheme: '',
      darkTheme: '',
    },
    // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    disqus: {
      shortname: '', // process.env.DISQUS_SHORTNAME
    },
  }