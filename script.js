// 2. looping
// 4. Nested
// HTML Fragment Bersarang
const list = [
  {
    kategori: 'Images Free',
    links: [
      {
        judul: 'unsplash',
        url: 'https://unsplash.com/',
      },
    ]
  },
  {
    kategori: 'Images Editor',
    links: [
      {
        judul: 'squoosh',
        url: 'https://squoosh.app/',
      },
    ]
  },
  {
    kategori: 'Telegram',
    links: [
      {
        judul: 'dicoffeean',
        url: 'https://dicoffeean.com/bot-telegram-webhook/',
      },
    ]
  },
  {
    kategori: 'Realme',
    links: [
      {
        judul: 'heytap',
        url: 'https://cloud.heytap.com/login.html',
      },
    ]
  },
  {
    kategori: 'Container Registry',
    links: [
      {
        judul: 'Docker Hub',
        url: 'https://hub.docker.com/',
      },
      {
        judul: 'Google Container Registry',
        url: 'https://cloud.google.com/container-registry/',
      },
      {
        judul: 'AWS Elastic Container Registry',
        url: 'https://aws.amazone.com/id/ecr/',
      },
    ]
  },
  {
    kategori: 'Container Manager',
    links: [
      {
        judul: 'docker',
        url: 'https://www.docker.com/',
      },
      {
        judul: 'docker docs',
        url: 'https://docs.docker.com/',
      },
    ]
  },
  {
    kategori: 'Wallboard Pertamina',
    links: [
      {
        judul: 'Call Monitoring',
        url: 'https://wallboard.infomedia.co.id/wb135/login.php',
      },
    ]
  },
  {
    kategori: 'Developer Roadmaps',
    links: [
      {
        judul: 'roadmap',
        url: 'https://roadmap.sh/roadmaps',
      },
      {
        judul: 'theroadmap',
        url: 'https://www.youtube.com/theroadmap',
      },
      {
        judul: 'YAML',
        url: 'https://www.youtube.com/watch?v=ImHSpwUlNVc',
      },
    ],
  },
  {
    kategori: 'CSS',
    links: [
      {
        judul: 'getwaves',
        url: 'https://getwaves.io/',
      },
    ],
  },
  {
    kategori: 'Line',
    links: [
      {
        judul: 'Line Developers',
        url: 'https://developers.line.biz/en/',
      },
    ],
  },
  {
    kategori: 'Docs Kata.AI',
    links: [
      {
        judul: 'Tutorial',
        url: 'https://docs.kata.ai/tutorial',
      },
      {
        judul: 'platform kata.ai',
        url: 'https://platform.kata.ai/login',
      },
    ],
  },
  {
    kategori: 'Local',
    links: [
      {
        judul: 'Fania Admin',
        url: 'http://172.28.154.229/aplikasi/adminfania/',
      },
      {
        judul: 'Pastel',
        url: 'http://10.194.51.116/pastel/dashboard.php',
      },
      {
        judul: 'Awfo',
        url: 'http://10.194.51.70/wfo/control/signin',
      },
      {
        judul: 'Aplikasi Echi',
        url: 'http://10.194.51.37/aplikasiechi/',
      },
    ],
  },
  {
    kategori: 'BPJSTKU',
    links: [
      {
        judul: 'Traffic Internet',
        url: 'https://sso.bpjsketenagakerjaan.go.id/',
      },
    ],
  },
  {
    kategori: 'User Guide',
    links: [
      {
        judul: 'Traffic Internet',
        url: 'http://localhost:8080/ug/traffic/',
      },
    ],
  },
  {
    kategori: 'Vaksin',
    links: [
      {
        judul: 'pedulilindungi',
        url: 'https://pedulilindungi.id/',
      },
    ],
  },
  {
    kategori: 'Open API',
    links: [
      {
        judul: 'omdbapi',
        url: 'https://www.omdbapi.com/',
      },
    ],
  },
  {
    kategori: 'Stack overflow',
    links: [
      {
        judul: 'Prettier Setup',
        url: 'https://stackoverflow.com/questions/52586965/why-does-prettier-not-format-code-in-vs-code',
      },
    ],
  },
  {
    kategori: 'Opencourse',
    links: [
      {
        judul: 'itts',
        url: 'https://opencourse.itts.ac.id/',
      },
    ],
  },
  {
    kategori: 'cisco',
    links: [
      {
        judul: 'certifications',
        url: 'https://learningnetwork.cisco.com/s/certifications',
      },
    ],
  },
  {
    kategori: 'Continuous Integration CI/CD',
    links: [
      {
        judul: 'dicoding',
        url: 'https://www.dicoding.com/blog/devops-di-google-cloud-cicd/',
      },
    ],
  },
  {
    kategori: 'Telkom',
    links: [
      {
        judul: 'TDS',
        url: 'https://www.telkomdigitalsolution.com/solution/voice-data-internet-connectivity/',
      },
    ],
  },
  {
    kategori: 'Profesional Networking',
    links: [
      {
        judul: 'gns3',
        url: 'https://gns3.com/',
      },
      {
        judul: 'ngonfig',
        url: 'https://ngonfig.net/ip-address.html',
      },
      {
        judul: 'Onno Center',
        url: 'https://lms.onnocenter.or.id/wiki/index.php/Main_Page',
      },
      {
        judul: 'Networking Fundamental',
        url: 'https://lms.onnocenter.or.id/wiki/index.php/Networking_Fundamental',
      },
    ],
  },
  {
    kategori: 'Absensi',
    links: [
      {
        judul: 'Non Voice',
        url: 'http://10.194.194.103/prehet2_report/',
      },
    ],
  },
  {
    kategori: 'omni',
    links: [
      {
        judul: 'layanan',
        url: 'https://on4pertamina.infomedia.co.id/oct_pertamina',
      },
      {
        judul: 'vcall',
        url: 'https://on4pertamina.infomedia.co.id/oct_pertaminavca',
      },
    ],
  },
  {
    kategori: 'Avaya',
    links: [
      {
        judul: 'avaya',
        url: 'https://support.avaya.com/',
      },
    ],
  },
  {
    kategori: 'Template',
    links: [
      {
        judul: 'startbootstrap',
        url: 'https://startbootstrap.com/',
      },
    ],
  },
  {
    kategori: 'Library',
    links: [
      {
        judul: 'myth-auth',
        url: 'https://github.com/lonnieezell/myth-auth',
      },
    ],
  },
  {
    kategori: 'SQL',
    links: [
      {
        judul: 'dofactory',
        url: 'https://www.dofactory.com/sql/join',
      },
    ],
  },
  {
    kategori: 'PHP',
    links: [
      {
        judul: 'Time',
        url: 'https://www.w3schools.com/php/phptryit.asp?filename=tryphp_func_time',
      },
      {
        judul: 'phpspreadsheet',
        url: 'https://phpspreadsheet.readthedocs.io/en/latest/',
      },
    ],
  },
  {
    kategori: 'Tutorial',
    links: [
      {
        judul: 'jagocoding',
        url: 'http://www.jagocoding.com/',
      },
    ],
  },
  {
    kategori: 'Convert',
    links: [
      {
        judul: 'excel array',
        url: 'https://t.yctin.com/en/excel/to-php-array/',
      },
      {
        judul: 'detik',
        url: 'https://www.google.com/search?q=1+menit+berapa+detik&oq=1+meni&aqs=chrome.0.0l2j69i57j46j0l6.3054j0j7&sourceid=chrome&ie=UTF-8',
      },
    ],
  },
  {
    kategori: 'Personal',
    links: [
      {
        judul: 'IT DEV',
        url: 'https://pansolsosmed.000webhostapp.com/',
      },
    ],
  },
  {
    kategori: 'Pertamina',
    links: [
      {
        judul: 'chatservices',
        url: 'https://chatservices.infomedia.co.id/deploy/mypertamina/index.php',
      },
    ],
  },
  {
    kategori: 'Font',
    links: [
      {
        judul: 'fontawesome',
        url: 'https://fontawesome.com/',
      },
    ],
  },
  {
    kategori: 'Icons',
    links: [
      {
        judul: 'bootstrap',
        url: 'https://icons.getbootstrap.com/',
      },
      {
        judul: 'feathericons',
        url: 'https://feathericons.com',
      },
      {
        judul: 'fontawesome',
        url: 'https://fontawesome.com/',
      },
    ],
  },
  {
    kategori: 'Programming',
    links: [
      {
        judul: 'sekolahkoding',
        url: 'https://sekolahkoding.com/forum/looping-data-besar-di-javascript-pakek-aja-interval',
      },
      {
        judul: 'freecodecamp',
        url: 'https://www.freecodecamp.org/',
      },
      {
        judul: 'bitdegree',
        url: 'https://www.bitdegree.org/courses/coding-for-beginners-space-doggos',
      },
    ],
  },
  {
    kategori: 'Framework PHP',
    links: [
      {
        judul: 'laravel',
        url: 'https://laravel.com/',
      },
      {
        judul: 'codeigniter',
        url: 'https://codeigniter.com/',
      },
    ],
  },
  {
    kategori: 'Online Server',
    links: [
      {
        judul: 'rekapnc',
        url: 'https://ops15.000webhostapp.com/',
      },
      {
        judul: 'Call 135',
        url: 'https://ops16.000webhostapp.com/login',
      },
      {
        judul: 'Brilliant',
        url: 'https://kvk17.000webhostapp.com/',
      },
      {
        judul: 'Brilliant',
        url: 'https://kvk18.000webhostapp.com/',
      },
      {
        judul: 'Kemerdekaan',
        url: 'https://kvk19.000webhostapp.com/',
      },
    ],
  },
  {
    kategori: 'Google',
    links: [
      {
        judul: 'translate',
        url: 'https://translate.google.com/?sl=en&tl=id&op=translate',
      },
      {
        judul: 'drive',
        url: 'https://drive.google.com/',
      },
      {
        judul: 'keep',
        url: 'https://keep.google.com/',
      },
      {
        judul: 'mail',
        url: 'https://mail.google.com/',
      },
      {
        judul: 'youtube',
        url: 'https://www.youtube.com/',
      },
      {
        judul: 'maps',
        url: 'https://maps.google.com/',
      },
      {
        judul: 'Google Sheets',
        url: 'https://support.google.com/docs/topic/9054603?hl=en&ref_topic=1382883',
      },
    ],
  },
  {
    kategori: 'Microsoft',
    links: [
      {
        judul: 'alphr',
        url: 'https://www.alphr.com/how-to-clear-and-turn-off-recent-files-in-windows-10/',
      },
      {
        judul: 'backup outlook mail',
        url: 'https://support.microsoft.com/en-us/office/back-up-your-email-e5845b0b-1aeb-424f-924c-aa1c33b18833',
      },
      {
        judul: 'onedrive',
        url: 'https://onedrive.live.com/about/en-us/signin/',
      },
    ],
  },
  {
    kategori: 'Web Server',
    links: [
      {
        judul: '000webhost',
        url: 'https://www.000webhost.com/',
      },
    ],
  },
  {
    kategori: 'Version Control System',
    links: [
      {
        judul: 'git-lfs',
        url: 'https://git-lfs.github.com/',
      },
      {
        judul: 'atlassian',
        url: 'https://id.atlassian.com/login',
      },
      {
        judul: 'github',
        url: 'https://github.com/',
      },
      {
        judul: 'git',
        url: 'https://git-scm.com/',
      },
    ],
  },
  {
    kategori: 'Meta',
    links: [
      {
        judul: 'whatsapp',
        url: 'https://web.whatsapp.com/',
      },
    ],
  },
  {
    kategori: 'Cloud',
    links: [
      {
        judul: 're-cloud',
        url: 'https://re-cloud.id/',
      },
      {
        judul: 'alibabacloud',
        url: 'https://id.alibabacloud.com/',
      },
    ],
  },
  {
    kategori: 'Javascript',
    links: [
      {
        judul: 'info',
        url: 'https://javascript.info/',
      },
      {
        judul: 'jquery',
        url: 'https://code.jquery.com/',
      },
      {
        judul: 'scrimba',
        url: 'https://scrimba.com/',
      },
      {
        judul: 'codepen',
        url: 'https://codepen.io/',
      },
      {
        judul: 'javascript Visualize',
        url: 'http://pythontutor.com/javascript.html#mode=edit',
      },
      {
        judul: 'eloquent javascript',
        url: 'https://eloquentjavascript.net/',
      },
      {
        judul: 'sitepoint',
        url: 'https://www.sitepoint.com/',
      },
    ],
  },
  {
    kategori: 'Infomedia',
    links: [
      {
        judul: 'siquiz',
        url: 'http://10.194.179.100/siquiz/',
      },
      {
        judul: 'nice',
        url: 'http://nice-engage/NiceApplications/Desktop/XbapApplications/NiceDesktop.xbap',
      },
      {
        judul: 'serina',
        url: 'https://serina.infomedia.co.id/',
      },
      {
        judul: 'quiz',
        url: 'https://quiz.infomedia.co.id/',
      },
    ],
  },
  {
    kategori: 'Jalur Belajar Web',
    links: [
      {
        judul: 'diagram',
        url: 'https://coggle.it/diagram/YA5j5BfeOvNuaqYu/t/jalur-belajar-web-development-2021-untuk-pemula/ed6061d5440b5a1a42737fb2f52ac42eb9c516a325ab949a57ee697eaed146c5',
      },
    ],
  },
  {
    kategori: 'Diagram',
    links: [
      {
        judul: 'coggle',
        url: 'https://coggle.it/',
      },
    ],
  },
  {
    kategori: 'Frameword CSS',
    links: [
      {
        judul: 'bootstrap',
        url: 'https://getbootstrap.com/',
      },
      {
        judul: 'metroui',
        url: 'https://metroui.org.ua/',
      },
    ],
  },
  {
    kategori: 'Application',
    links: [
      {
        judul: 'Pertamina Application',
        url: 'https://nginxdragon.github.io/application/',
      },
    ],
  },
];

function cetakLink(links) {
  return `${links.map((link) => `<dd><a href="${link.url}">${link.judul}</a></dd>`).join('')}`;
}
const el = `<div class="list">${list.map((m) => `<dl><dt>${m.kategori}</dt>${cetakLink(m.links)}</dl>`).join('')}</div>`;
document.body.innerHTML = el;