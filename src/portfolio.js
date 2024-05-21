const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'My Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hi, I am Prateek Pandey',
  role: 'Full Stack Web Developer',
  description:
    'Welcome to my portfolio website! As a full-stack web developer, I specialize in crafting dynamic, interactive, and user-friendly web experiences. With expertise in both front-end and back-end technologies, I bring ideas to life through elegant design and robust functionality.',
  resume: 'https://drive.google.com/file/d/1HFmRPu3A9Awa5_C1rR9IMHgVhPR2_6Jd/view?usp=sharing',
  social: {
    linkedin: 'www.linkedin.com/in/prateek-p-0b6587137',
    github: 'https://github.com/prateekp106',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Text Utils',
    description:
      'We offer a suite of powerful tools designed to streamline your text manipulation tasks and enhance your productivity.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'News App',
    description:
      ' Designed for news enthusiasts, professionals, and casual readers alike, our app delivers the latest headlines,  and categorized updates tailored to your interests.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'INoteBook',
    description:
      'Whether youre a student, professional, or creative thinker, iNotebook empowers you to turn inspiration into action with ease and efficiency.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'React',
  'Git',
  'C#',
  'Asp.Net FrameWork',
  'Microsoft SQL Server',
  'Building API'


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Prateekp106@gmail.com',
}

export { header, about, projects, skills, contact }
