<template>
    <div class="p-8 md:max-w-2xl lg:max-w-4xl mx-auto text-2xl lg:px-16 lg:py-32 lg:text-3xl overflow-x-hidden">
        <div class="relative z-10">
            <fade-in-section>
                <p v-html="paragraph_1"></p>
            </fade-in-section>
        </div>
        <div class="relative h-48 lg:h-64 my-8 lg:my-16">
            <photo-parallax speed="0.3">
                <div class="w-64 lg:w-96 bg-gray-200 absolute top-0 right-0 mt-32 lg:mt-32 lg:-mr-16">
                    <div class="h-0 w-full" style="padding-bottom: 125%"></div>
                    <picture class="absolute top-0 left-0 opacity-75">
                        <source type="image/webp" srcset="/info/photography.webp">
                        <img src="/info/photography.jpg" alt="">
                    </picture>
                </div>
            </photo-parallax>
        </div>
        <div class="relative z-10">
            <fade-in-section>
                <p v-html="paragraph_2"></p>
            </fade-in-section>
        </div>
        <div class="relative h-48 lg:h-64 my-8">
            <photo-parallax speed="0.3">
                <div class="w-96 lg:w-120 bg-gray-200 absolute top-0 left-0 mt-32 lg:-ml-16">
                    <div class="h-0 w-full" style="padding-bottom: 75%"></div>
                    <picture class="absolute top-0 left-0 opacity-75">
                        <source type="image/webp" srcset="/info/sailing.webp">
                        <img src="/info/sailing.jpg" alt="">
                    </picture>
                </div>
            </photo-parallax>
        </div>
        <div class="relative z-10 mb-16 lg:mb-32">
            <fade-in-section>
                <p v-html="paragraph_3"></p>
            </fade-in-section>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, app }) {
        const page = await $content(`${app.i18n.locale}/contact`).fetch()
        return {
            ...page
        }
    },

    data () {
        return {
            loaded: false,
        }
    },

    head () {
        return {
            title: this.$t('contact.title'),
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.$t('contact.title') },
                { hid: 'description', name: 'description', content: this.$t('globals.description') },     
                { hid: 'og:description', name: 'og:description', content: this.$t('globals.description') },
                { hid: 'og:url', name: 'og:url', content: this.$route.path },
            ]
        }
    },

    mounted () {
        this.loaded = true
    }
}
</script>