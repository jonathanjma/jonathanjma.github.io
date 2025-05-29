// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Check out details about my personal projects below!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-experiences",
          title: "experiences",
          description: "Check out details about my current and past experience below!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experiences/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-photography",
          title: "photography",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/photography/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/resume/";
          },
        },{id: "experiences-alpha-cubesat",
          title: 'Alpha CubeSat',
          description: "A 1U cubesat deploying from the ISS which aims to release an ultralight light sail as part of NASA&#39;s CubeSat Launch Initiative",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/alpha_cubesat/";
            },},{id: "experiences-swe-intern-cognotrain",
          title: 'SWE Intern @ CognoTrain',
          description: "CognoTrain is a startup developing a personalized cognitive training app for Alzheimer&#39;s patients to help improve their memory and quality of life",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/cognotrain/";
            },},{id: "experiences-first-tech-challenge",
          title: 'FIRST Tech Challenge',
          description: "Every year, I helped to program a robot that could complete various tasks both autonomously and under human control",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/first_tech_challenge/";
            },},{id: "projects-windows-ios-clipboard",
          title: 'Windows-iOS Clipboard',
          description: "Universal clipboard that allows for easier copying and pasting across different operating systems (ex. windows-iOS, linux-iOS)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clipboard/";
            },},{id: "projects-rubik-39-s-cube-solving-robot",
          title: 'Rubik&amp;#39;s Cube Solving Robot',
          description: "Arduino powered robot optimized to solve a Rubik’s Cube faster than a human!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coob_robit/";
            },},{id: "projects-happiness-app",
          title: 'Happiness App',
          description: "A mood tracking and social journaling app which allows you to keep track of how you are feeling every day and stay connected with your friends.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/happiness_app/";
            },},{id: "projects-infinite-campus-grades",
          title: 'Infinite Campus Grades++',
          description: "Chrome extension that revamps high school grades website with a more intuitive UI, grade simulation, and other missing features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ic_extension/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%70%70%64%65%76.%6D%69%63%72%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-flickr',
        title: 'Flickr',
        section: 'Socials',
        handler: () => {
          window.open("https://www.flickr.com/196752228@N08", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jonathanjma", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jonathan-ma3", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
