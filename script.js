// 2. looping
// 4. Nested 
// HTML Fragment Bersarang
const list = [{
        kategori: 'Tutorial',
        links: [{
            judul: 'jagocoding',
            url: 'http://www.jagocoding.com/'
        }]
    },
    {
        kategori: 'Convert',
        links: [{
            judul: 'excel array',
            url: 'https://t.yctin.com/en/excel/to-php-array/'
        }]
    },
    {
        kategori: 'Personal',
        links: [{
            judul: 'IT DEV',
            url: 'https://pansolsosmed.000webhostapp.com/'
        }]
    },
    {
        kategori: 'Pertamina',
        links: [{
            judul: 'chatservices',
            url: 'https://chatservices.infomedia.co.id/deploy/mypertamina/index.php'
        }]
    },
    {
        kategori: 'Font',
        links: [{
            judul: 'fontawesome',
            url: 'https://fontawesome.com/'
        }]
    },
    {
        kategori: 'Icons',
        links: [{
                judul: 'bootstrap',
                url: 'https://icons.getbootstrap.com/'
            },
            {
                judul: 'feathericons',
                url: 'https://feathericons.com'
            },
            {
                judul: 'fontawesome',
                url: 'https://fontawesome.com/'
            }
        ]
    },
    {
        kategori: 'Programming',
        links: [{
            judul: 'freecodecamp',
            url: 'https://www.freecodecamp.org/'
        }]
    },
    {
        kategori: 'Framework PHP',
        links: [{
            judul: 'codeigniter',
            url: 'https://codeigniter.com/'
        }]
    },
    {
        kategori: 'Online Server',
        links: [{
                judul: 'reportaux',
                url: 'https://reportaux.000webhostapp.com/login'
            },
            {
                judul: 'rensi',
                url: 'https://rensi135.000webhostapp.com/'
            },
            {
                judul: 'redeem',
                url: 'https://support135.000webhostapp.com/redeem/'
            },
            {
                judul: 'pulau135',
                url: 'https://pulau135.000webhostapp.com/'
            },
            {
                judul: 'nc agent',
                url: 'https://rekapnc.000webhostapp.com/'
            },
            {
                judul: 'pelayanan pds',
                url: 'https://apps1351.000webhostapp.com'
            },
            {
                judul: 'chanelsosmed',
                url: 'https://chanelsosmed.000webhostapp.com/'
            },
            {
                judul: 'file pdf it dev',
                url: 'https://pansolsosmed.000webhostapp.com/'
            },
            {
                judul: 'eca',
                url: 'https://ops4.000webhostapp.com/'
            },
            {
                judul: 'pds135',
                url: 'https://pds135.000webhostapp.com/'
            },
            {
                judul: 'spbu',
                url: 'https://ops6.000webhostapp.com/'
            },
            {
                judul: 'pansol',
                url: 'https://pansolwa.000webhostapp.com'
            },
            {
                judul: 'nc bes',
                url: 'https://ncbes.000webhostapp.com/'
            },
            {
                judul: 'arjunadigital',
                url: 'https://arjunadigital.000webhostapp.com/'
            },
            {
                judul: 'survey',
                url: 'https://ops10.000webhostapp.com/'
            },
            {
                judul: 'File Img',
                url: 'https://ops11.000webhostapp.com/'
            },
            {
                judul: 'listpangkalan',
                url: 'https://listpangkalan.000webhostapp.com/'
            },
            {
                judul: 'bright store',
                url: 'https://ops13.000webhostapp.com/index.php/promo'
            },
        ],
    },
    {
        kategori: 'Google',
        links: [{
                judul: 'drive',
                url: 'https://drive.google.com/'
            },
            {
                judul: 'keep',
                url: 'https://keep.google.com/'
            },
            {
                judul: 'youtube',
                url: 'https://www.youtube.com/'
            },
            {
                judul: 'maps',
                url: 'https://maps.google.com/'
            }
        ]
    },
    {
        kategori: 'Microsoft',
        links: [{
            judul: 'onedrive',
            url: 'https://onedrive.live.com/about/en-us/signin/'
        }]
    },
    {
        kategori: 'Web Server',
        links: [{
            judul: '000webhost',
            url: 'https://www.000webhost.com/'
        }]
    },
    {
        kategori: 'Version Control System',
        links: [{
            judul: 'github',
            url: 'https://github.com/'
        }]
    },
    {
        kategori: 'Facebook',
        links: [{
            judul: 'whatsapp',
            url: 'https://web.whatsapp.com/'
        }]
    },
    {
        kategori: 'Cloud',
        links: [{
                judul: 're-cloud',
                url: 'https://re-cloud.id/'
            },
            {
                judul: 'alibabacloud',
                url: 'https://id.alibabacloud.com/'
            }
        ]
    },
    {
        kategori: 'Javascript',
        links: [{
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
            }
        ]
    },
    {
        kategori: 'Infomedia',
        links: [{
            judul: 'quiz',
            url: 'https://quiz.infomedia.co.id/',
        }]
    },
    {
        kategori: 'Jalur Belajar Web',
        links: [{
            judul: 'diagram',
            url: 'https://coggle.it/diagram/YA5j5BfeOvNuaqYu/t/jalur-belajar-web-development-2021-untuk-pemula/ed6061d5440b5a1a42737fb2f52ac42eb9c516a325ab949a57ee697eaed146c5',
        }]
    },
    {
        kategori: 'Diagram',
        links: [{
            judul: 'coggle',
            url: 'https://coggle.it/',
        }]
    },
    {
        kategori: 'Frameword CSS',
        links: [{
                judul: 'bootstrap',
                url: 'https://getbootstrap.com/',
            },
            {
                judul: 'metroui',
                url: 'https://metroui.org.ua/',
            }
        ]
    },
    {
        kategori: 'Application',
        links: [{
            judul: 'Pertamina Application',
            url: 'https://nginxdragon.github.io/application/',
        }]
    }
];

function cetakLink(links) {
    return `${links.map(link =>`<dd><a href="${link.url}">${link.judul}</a></dd>`).join('')}`;
}
const el = `<div class="list">${list.map(m =>`<dl><dt>${m.kategori}</dt>${cetakLink(m.links)}</dl>`).join('')}</div>`;
document.body.innerHTML = el;