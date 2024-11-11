export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	app: {
		pageTransition: { name: "fade", mode: "out-in" },

		head: {
			title: "Maajabu Gospel",
			htmlAttrs: {
				lang: "fr"
			},
			meta: [
				{ charset: "utf-16" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content: "Let's share the dream !"
				},
				{ name: "format-detection", content: "telephone=no" },
				{ property: "og:title", content: "Maajabu Gospel" },
				{
					property: "og:description",
					content: "Let's share the dream !"
				},
				{ property: "og:url", content: "https://maajabu-gospel.vercel.app" },
				{
					property: "og:image",
					content: "https://maajabu-gospel.vercel.app/cover.jpg"
				},
				{ name: "twitter:title", content: "Maajabu Gospel" },
				{
					name: "twitter:description",
					content: "Let's share the dream !"
				},
				{
					name: "twitter:image",
					content: "https://maajabu-gospel.vercel.app/cover.jpg"
				},
				{ name: "twitter:card", content: "summary_large_image" }
			],

			link: [
				{
					rel: "me",
					href: "https://twitter.com/maajabu_gospel"
				},
				{ rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "76x76",
					href: "/favicons/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicons/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicons/favicon-16x16.png"
				},

				{
					rel: "mask-icon",
					href: "/favicons/safari-pinned-tab.svg",
					color: "#5bbad5"
				}
			],
			noscript: [{ children: "Javascript est désactivé" }]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},

	// Pour la traduction
	modules: ["@nuxt/content", "@nuxtjs/i18n"],
	i18n: {
		lazy: true,
		langDir: "locales",
		strategy: "prefix_except_default",
		locales: [
			{ code: "fr-FR", iso: "fr-FR", name: "français", file: "fr-FR.json" },
			{ code: "en-UK", iso: "en-UK", name: "English (UK)", file: "en-UK.json" },
			{
				code: "sw-CD",
				iso: "sw-CD",
				name: "Swahili (Congo)",
				file: "sw-CD.json"
			},
			{ code: "es-ES", iso: "es-ES", name: "Español", file: "es-ES.json" },
			{ code: "in-HI", iso: "in-HI", name: "हिन्दी", file: "in-HI.json" }
		],
		defaultLocale: "en-UK",
		vueI18n: "./i18n.config.js"
	}
});
