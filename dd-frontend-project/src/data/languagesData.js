const languagesData = {
  en: {
    hero: {
      header: {
        name: "didem",
      },
      buttons: {
        language_switch: "TÜRKÇE'YE GEÇ",
        dark_mode: "DARK MODE",
        light_mode: "LIGHT MODE",
      },
      content: {
        title: "I am a Frontend Developer...",
        description:
          " ...who likes to craft solid and scalable frontend products with great user experiences.",
      },
      links: {
        github: "https://github.com/didemdemir11",
        linkedin: "https://www.linkedin.com/in/didem-demir-a37917116/",
        github_text: "GitHub",
        linkedin_text: "LinkedIn",
      },
      images: {
        hero_image: "images/hero-image.png",
      },
    },
    skills: {
      title: "Skills",
      items: [
        {
          name: "JAVASCRIPT",
          image: "/logos/jslogo.jpeg",
          alt: "JavaScript Logo",
        },
        {
          name: "NODE",
          image: "/logos/node-logo.jpeg",
          alt: "Node Logo",
        },
        {
          name: "REACT",
          image: "/logos/react-logo.png",
          alt: "React Logo",
        },
        {
          name: "VS CODE",
          image: "/logos/vscode-logo.png",
          alt: "VS Code Logo",
        },
        {
          name: "REDUX",
          image: "/logos/reduxlogo.png",
          alt: "Redux Logo",
          bgColor: "#764ABC",
        },
        {
          name: "FIGMA",
          image: "/logos/figma-logo.jpeg",
          alt: "Figma Logo",
        },
      ],
    },
    profile: {
      title: "Profile",
      basic_info_title: "Basic Information",
      details: {
        birth_date: "Birth Date",
        birth_date_value: "11.09.1993",
        residence: "Residence",
        residence_value: "Ankara",
        education: "Education",
        education_value: "METU BA, Bachelor's Degree, 2017",
        roles: "Preferable Roles",
        roles_value: "Frontend,UI",
      },
      about_me: {
        title: "About Me",
        text_1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        text_2: "Minima accusamus ratione soluta aperiam sit voluptate?",
      },
      images: {
        profile_image: "/images/profile-img.png",
      },
    },
    projects: {
      title: "Projects",
      view_site_label: "View Site",
      github_label: "GitHub",
      list: [
        {
          id: 1,
          project_name: "Workintech",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          technologies: ["react", "redux", "vercel"],
          links: {
            view_site: "https://www.linkedin.com/in/didem-demir-a37917116/",
            github: "https://github.com/didemdemir11",
          },
          image: "/images/projects-img-1.png",
        },
        {
          id: 2,
          project_name: "Journey",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          technologies: ["react", "redux", "vercel"],
          links: {
            view_site: "https://www.linkedin.com/in/didem-demir-a37917116/",
            github: "https://github.com/didemdemir11",
          },
          image: "/images/projects-img-2.png",
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "kdidemdemir@gmail.com",
      icons: [
        {
          name: "twitter",
          src: "/icons/twitter.png",
          alt: "Twitter",
          link: "https://twitter.com",
        },
        {
          name: "codepen",
          src: "/icons/codepen.svg",
          alt: "Codepen",
          link: "https://codepen.io",
        },
        {
          name: "arroba",
          src: "/icons/arroba.png",
          alt: "Arroba",
          link: "mailto:kdidemdemir@gmail.com",
        },
        {
          name: "instagram",
          src: "/icons/instagram.png",
          alt: "Instagram",
          link: "https://instagram.com",
        },
      ],
    },
  },
  tr: {
    hero: {
      header: {
        name: "didem",
      },
      buttons: {
        language_switch: "SWITCH TO ENGLISH",
        dark_mode: "GECE MODU",
        light_mode: "GÜNDÜZ MODU",
      },
      content: {
        title: "Ben bir Frontend Geliştiriciyim...",
        description:
          " ...sağlam ve ölçeklenebilir frontend projeleri üretiyorum.",
      },
      links: {
        github: "https://github.com/didemdemir11",
        linkedin: "https://www.linkedin.com/in/didem-demir-a37917116/",
        github_text: "GitHub",
        linkedin_text: "LinkedIn",
      },
      images: {
        hero_image: "https://bit.ly/4dxOncn",
      },
    },
    skills: {
      title: "Yetenekler",
      items: [
        {
          name: "JAVASCRIPT",
          image: "/logos/jslogo.jpeg",
          alt: "JavaScript Logo",
        },
        {
          name: "NODE",
          image: "/logos/node-logo.jpeg",
          alt: "Node Logo",
        },
        {
          name: "REACT",
          image: "/logos/react-logo.png",
          alt: "React Logo",
        },
        {
          name: "VS CODE",
          image: "/logos/vscode-logo.png",
          alt: "VS Code Logo",
        },
        {
          name: "REDUX",
          image: "/logos/reduxlogo.png",
          alt: "Redux Logo",
          bgColor: "#764ABC",
        },
        {
          name: "FIGMA",
          image: "/logos/figma-logo.jpeg",
          alt: "Figma Logo",
        },
      ],
    },
    profile: {
      title: "Profil",
      basic_info_title: "Genel Bilgiler",
      details: {
        birth_date: "Doğum Tarihi",
        birth_date_value: "11.09.1993",
        residence: "İkamet Şehri",
        residence_value: "Ankara",
        education: "Eğitim",
        education_value: "ODTÜ İşletme, Lisans, 2017",
        roles: "Tercih Edilen Roller",
        roles_value: "Frontend,UI",
      },
      about_me: {
        title: "Hakkımda",
        text_1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        text_2: "Minima accusamus ratione soluta aperiam sit voluptate?",
      },
      images: {
        profile_image: "/images/profile-img.png",
      },
    },
    projects: {
      title: "Projeler",
      view_site_label: "Siteye git",
      github_label: "GitHub",
      list: [
        {
          id: 1,
          project_name: "Workintech",
          description:
            "Kullanıcıların hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler kullanılarak oluşturuldu ve NPM paketi olarak kullanılabilir.",
          technologies: ["react", "redux", "vercel"],
          links: {
            view_site: "https://www.linkedin.com/in/didem-demir-a37917116/",
            github: "https://github.com/didemdemir11",
          },
          image: "/images/projects-img-1.png",
        },
        {
          id: 2,
          project_name: "Journey",
          description:
            "Kullanıcıların hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler kullanılarak oluşturuldu ve NPM paketi olarak kullanılabilir.",
          technologies: ["react", "redux", "vercel"],
          links: {
            view_site: "https://www.linkedin.com/in/didem-demir-a37917116/",
            github: "https://github.com/didemdemir11",
          },
          image: "/images/projects-img-2.png",
        },
      ],
    },
    footer: {
      title: "Bana bir mesaj gönder!",
      description:
        "Bir sorunuz veya teklifiniz mi var, ya da sadece merhaba demek mi istiyorsunuz? Hadi!",
      email: "kdidemdemir@gmail.com",
      icons: [
        {
          name: "twitter",
          src: "/icons/twitter.png",
          alt: "Twitter",
          link: "https://twitter.com",
        },
        {
          name: "codepen",
          src: "/icons/codepen.svg",
          alt: "Codepen",
          link: "https://codepen.io",
        },
        {
          name: "arroba",
          src: "/icons/arroba.png",
          alt: "Arroba",
          link: "mailto:kdidemdemir@gmail.com",
        },
        {
          name: "instagram",
          src: "/icons/instagram.png",
          alt: "Instagram",
          link: "https://instagram.com",
        },
      ],
    },
  },
};
export default languagesData;
