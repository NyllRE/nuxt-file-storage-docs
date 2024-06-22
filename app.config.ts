// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
	docus: {
		title: 'Nuxt File Storage',
		description: 'Easy solution to store files in your nuxt apps',
		image:
			'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

		socials: {
			twitter: 'nyllre',
			github: 'nyllre/nuxt-file-storage',
			nuxt: {
				label: 'Nuxt',
				icon: 'simple-icons:nuxtdotjs',
				href: 'https://nuxt.com/modules/nuxt-file-storage',
			},
		},

		github: {
			dir: '.starters/default/content',
			branch: 'master',
			repo: 'nuxt-file-storage-docs',
			owner: 'nyllre',
			edit: true,
		},

		aside: {
			level: 0,
			collapsed: false,
			exclude: [],
		},

		main: {
			padded: true,
			fluid: true,
		},

		header: {
			logo: true,
			showLinkIcon: true,
			exclude: [],
			fluid: true,
			title: 'Nuxt File Storage',
		},

		footer: {
			credits: {
				text: 'Created by Ali Sokkar with Docus',
			},
		},

		titleTemplate: '%s · Nuxt File Storage',
	},
})