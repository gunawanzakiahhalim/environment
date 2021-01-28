// 2. looping
const list = [{
        judul: 'rensi',
        link: 'https://rensi135.000webhostapp.com/'
    },
    {
        judul: 'redeem',
        link: 'https://support135.000webhostapp.com/redeem/'
    },
    {
        judul: 'pulau135',
        link: 'https://pulau135.000webhostapp.com/'
    },
    {
        judul: 'nc agent',
        link: 'https://rekapnc.000webhostapp.com/'
    },
    {
        judul: 'pelayanan pds',
        link: 'https://apps1351.000webhostapp.com'
    },
    {
        judul: 'chanelsosmed',
        link: 'https://chanelsosmed.000webhostapp.com/'
    },
    {
        judul: 'file pdf it dev',
        link: 'https://pansolsosmed.000webhostapp.com/'
    },
    {
        judul: 'eca',
        link: 'https://ops4.000webhostapp.com/'
    },
    {
        judul: 'pds135',
        link: 'https://pds135.000webhostapp.com/'
    },
    {
        judul: 'spbu',
        link: 'https://ops6.000webhostapp.com/'
    },
    {
        judul: 'pansol',
        link: 'https://pansolwa.000webhostapp.com'
    },
    {
        judul: 'nc bes',
        link: 'https://ncbes.000webhostapp.com/'
    },
    {
        judul: 'arjunadigital',
        link: 'https://arjunadigital.000webhostapp.com/'
    },
    {
        judul: 'survey',
        link: 'https://ops10.000webhostapp.com/'
    },
    {
        judul: 'pansol lama',
        link: 'https://ops11.000webhostapp.com/'
    },
    {
        judul: 'listpangkalan',
        link: 'https://listpangkalan.000webhostapp.com/'
    },
    {
        judul: 'drive',
        link: 'https://drive.google.com/'
    },
    {
        judul: 'keep',
        link: 'https://keep.google.com/'
    },
    {
        judul: 'youtube',
        link: 'https://www.youtube.com/'
    },
    {
        judul: 'onedrive',
        link: 'https://onedrive.live.com/about/en-us/signin/'
    },
    {
        judul: '000webhost',
        link: 'https://www.000webhost.com/'
    },
    {
        judul: 'github',
        link: 'https://github.com/'
    },
    {
        judul: 'whatsapp',
        link: 'https://web.whatsapp.com/'
    },
    {
        judul: 're-cloud',
        link: 'https://re-cloud.id/'
    },
    {
        judul: 'alibabacloud',
        link: 'https://id.alibabacloud.com/'
    },
    {
        judul: 'javascript Visualize',
        link: 'http://pythontutor.com/javascript.html#mode=edit'
    }
];
const el = `<dl>
<dt>Links</dt>
${list.map(m => `<dd>
<a href="${m.link}">${m.judul}</a>
</dd>`).join('')}
</dl>`;
document.body.innerHTML = el;