<script lang="ts">
  /*
   * Please set the following variables to your liking!
   * You can use Fluent UI System Icons and Simple Icons for the icons!
   * Fluent UI System Icons: https://icones.js.org/collection/fluent
   * Simple Icons: https://icones.js.org/collection/simple-icons
   */
  const name = 'Lean Evora';
  const introduction =
    'I am a recent BSIT Graduate with high foundation in Cybersecurity!';
  const avatar = 'https://i.ibb.co/GtZgt87/53-resize.png'; // Please enter the absolute path (including subpaths)
  const about =
    'I am a recent BSIT graduate with a strong focus on IT support and cybersecurity. My expertise includes troubleshooting hardware and software issues, and securing systems. I’m always eager to learn new skills and stay updated on the latest trends in technology. Outside of work, I enjoy diving deeper into cybersecurity, solving problems, and connecting with the tech community. My goal is to continue growing in the field and contribute to innovative solutions. Thanks for checking out my site!';
  const place = 'Lipa, Batangas City';
  const timezone = 'UTC8';
  const experiences = [
    {
      title: 'Learning and Certifications',
      description:
        'I am continuously improving my skills through self-study and industry certifications. I’ve completed the Google Cybersecurity Professional Certificate and am currently studying for other cybersecurity certifications, while also enhancing my programming and scripting knowledge to stay up-to-date with industry best practices.',
    },
    {
      title: 'Cybersecurity',
      description:
        'With hands-on experience from my Google Cybersecurity Professional Certificate, I have worked on incident response, vulnerability assessments, and network security. My practical knowledge includes threat detection, malware analysis, and security monitoring, with a focus on preventing and mitigating cybersecurity threats for businesses.',
    },
    {
      title: 'Hardware and Software Expertise',
      description:
        "I have extensive knowledge of hardware and software, allowing me to efficiently troubleshoot, repair, and optimize systems. My expertise includes assembling PCs, configuring servers, and managing networks across various operating systems and cloud platforms, enabling me to diagnose and resolve complex issues.",
    },
  ];
  const skills = [
    { name: 'HTML', icon: 'i-simple-icons:html5' },
    { name: 'CSS', icon: 'i-simple-icons:css3' },
    { name: 'Python', icon: 'i-simple-icons:python' },
    { name: 'GitHub', icon: 'i-simple-icons:github' },
    { name: 'VSCode', icon: 'i-simple-icons:visualstudiocode' },
    { name: 'Powershell', icon: 'i-simple-icons:powershell' },
    { name: 'Windows', icon: 'i-simple-icons:windows' },
    { name: 'SIEM', icon: 'i-simple-icons:windows' },
    { name: 'Vim', icon: 'i-simple-icons:vim' },
    { name: 'Virtual Box', icon: 'i-simple-icons:virtualbox' },
    { name: 'Vulnerability Assessment', icon: 'i-simple-icons:bookstack' },
    { name: 'Linux', icon: 'i-simple-icons:linux' },
    { name: 'etc...', icon: '' },
  ];
  const works = [
    {
      title: "Incident Response Analysis",
      description:
        'As part of my training in the Google Cybersecurity Professional Certificate, I completed an incident response analysis exercise that followed Googles best practices for handling security incident',
      url: 'https://docs.google.com/document/d/1Lg9Z8a6COhb7d-AiT73vcs7ucCLhXqj72c-txk7ESzk/edit?usp=sharing',
      linkText: 'Visit',
    },
    {
      title: "Virtual Homelab",
      description:
        'I am currently creating a Homelab. I will write my experiences about various things and compile it into a github repository. Please look forward to it!',
      url: '',
      linkText: '',
    },
    {
      title: 'School Website of Canossa Academy',
      description:
        'Project that my team made during our OJT in Canossa Academy.',
      url: 'retsunadazaie.github.io',
      linkText: 'Visit',
    },
    {
      title: 'Python Keylogger',
      description:
        'In progress.',
      url: '',
      linkText: 'Try it!',
    },
  ];


  const works1 = [
    {
      title: "Canossa Academy Lipa - IT Staff Intern",
      description:
        'February 2024 - June 2024',
      url: 'https://docs.google.com/document/d/1Lg9Z8a6COhb7d-AiT73vcs7ucCLhXqj72c-txk7ESzk/edit?usp=sharing',
      linkText: '',
    },
  ];






  const socials = [
    {
      name: 'retsunadazaie.github.io',
      url: 'https://retsunadazaie.github.io',
      icon: '', // If the icon field is empty, a link icon will be automatically assigned.
    },
    {
      name: '@Karl Lean Evora',
      url: 'www.linkedin.com/in/karl-lean-evora',
      icon: 'i-simple-icons:linkedin',
    },
    {
      name: '@retsunadazaie',
      url: 'https://github.com/retsunadazaie',
      icon: 'i-simple-icons:github',
    },
  ];
</script>

<div
  class="flex flex-col items-center justify-center w-full h-auto py-4 md:flex-row md:h-[80vh] break-words"
>
  <div class="flex flex-col items-start justify-center w-full p-2 md:w-2/3">
    <h1
      class="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-orange-6 to-red-6 dark:from-orange-4 dark:to-red-4 bg-clip-text md:text-6xl"
    >
      Hello, my name is {name}
    </h1>
    <p class="text-3xl text-gray-8 dark:text-gray-2">
      {introduction}
    </p>
  </div>
  <div
    class="w-full mt-4 overflow-hidden transition-transform transform shadow-lg md:w-1/3 rounded-3xl md:mt-0 scale-70 md:scale-100 hover:scale-90 md:hover:scale-120 rotate-5"
  >
    <img src={avatar} alt="Avatar" class="object-cover w-full h-full" />
  </div>
</div>
<section
  id="about"
  class="w-full p-4 py-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      About Me
    </h2>
    <p class="text-lg text-center text-gray-7 dark:text-gray-3">
      {about}
    </p>
    <div class="flex flex-col md:flex-row">
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:location-48-regular"></span>
        {place}
      </p>
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:clock-48-regular"></span>
        {timezone}
      </p>
    </div>
  </div>
</section>

<section
  id="skills"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Skills
    </h2>
    <ul class="grid grid-cols-2 gap-4 text-lg text-center">
      {#each skills as skill}
        <li class="flex items-center justify-center gap-x-2">
          {#if skill.icon}
            <span class={`block ${skill.icon}`} />
          {/if}
          {skill.name}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="experiences"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Experiences
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      <ul class="grid grid-cols-1 gap-4 text-lg">
        {#each experiences as experience}
          <li>
            <h3 class="mb-2 text-2xl font-bold">{experience.title}</h3>
            <p>{experience.description}</p>
          </li>
        {/each}
      </ul>
    </ul>
  </div>
</section>
<section
  id="works"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Works
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      {#each works as work}
        <li>
          <h3 class="mb-2 text-2xl font-bold">{work.title}</h3>
          <p>{work.description}</p>
          {#if work.url}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-pink-6 dark:text-pink-4 hover:underline"
            >
              {work.linkText}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<section
  id="works1"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Job Experiences
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      {#each works1 as work}
        <li>
          <h3 class="mb-2 text-2xl font-bold">{work.title}</h3>
          <p>{work.description}</p>
          {#if work.url}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-pink-6 dark:text-pink-4 hover:underline"
            >
              {work.linkText}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="socials"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Socials
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg text-center">
      {#each socials as social}
        <li>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer me"
            class="flex items-center justify-center text-pink-6 dark:text-pink-4 hover:underline gap-x-2"
          >
          {#if social.icon != ''}
            <span class={`block ${social.icon}`} />
          {:else if social.icon == ''}
            <span class='block i-fluent:link-48-regular' />
          {/if}
            {social.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
