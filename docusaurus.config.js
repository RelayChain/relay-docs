/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Relay Chain',
  tagline: 'Project Reference Guide',
  url: 'https://relay.masternode.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'masternodeh', 
  projectName: 'zero-docs',
  themeConfig: {
    navbar: {
      title: 'Project Reference Guide',
      logo: {
        alt: 'Relay Chain Logo',
        src: 'img/relay-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/masternodeh/relay-docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Ethereum (ETH) Guides',
              to: 'docs/eth/',
            },
            {
              label: 'Avalanche (AVAX) Guides',
              to: 'docs/avax/',
            },
            {
              label: 'Smart-Chain (BNB) Guides',
              to: 'docs/bsc/',
            },
			{
              label: 'Solana (SOL) Guides',
              to: 'docs/sol/',
            },
            {
              label: 'Mobile Guides',
              to: 'docs/mobile/',
            },
          ],
        },
		{
          title: 'Explainers',
          items: [
            {
              label: 'What is Impermanent Loss',
              to: 'docs/il/',
            },
            {
              label: 'How to Buy Zero',
              to: 'docs/howtobuyzero/',
            },
            {
              label: 'About the Zero Exchange',
              to: 'docs/whatiszeroexchange/',
            },
          ],
        },
        {
          title: 'Faq',
          items: [
           {
             label: 'Which wallet to use?',
             to: 'docs/faq/faq001',
           },
           {
             label: 'Which brower to use?',
             to: 'docs/faq/faq002',
           },
           {
             label: 'Zero contract addresses?',
             to: 'docs/faq/faq003',
           },
           {
             label: 'IDO Allocation Questions',
             to: 'docs/faq/faq007',
           },
           {
              label: 'Blog',
              to: 'blog',
           },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}@masternodeh Built with love from the community!`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/masternodeh/relay-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/masternodeh/relay-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
