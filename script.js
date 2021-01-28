// 2. looping
// 4. Nested 
// HTML Fragment Bersarang
const list = [{
        kategori: 'Online Server',
        links: [{
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
                judul: 'pansol lama',
                url: 'https://ops11.000webhostapp.com/'
            },
            {
                judul: 'listpangkalan',
                url: 'https://listpangkalan.000webhostapp.com/'
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
        }]
    }
];

function cetakLink(links) {
    return `${links.map(link =>`<dd><a href="${link.url}">${link.judul}</a></dd>`).join('')}`;
}
const el = `<div class="list">${list.map(m =>`<dl><dt>${m.kategori}</dt>${cetakLink(m.links)}</dl>`).join('')}</div>`;
document.body.innerHTML = el;