<template>
    <picture 
        class="block relative w-full my-8 mx-auto max-w-1200 lg:my-16 transform transition-all duration-500 ease-in-out"
        :class="{
            'translate-y-20 opacity-0': !shown
        }"
    >
        <div class="h-0 w-full bg-gray-200" style="padding-bottom: 56.25%"></div>
        <transition>
            <iframe
                :src="`https://www.youtube-nocookie.com/embed/${id}`" 
                frameborder="0"
                allowfullscreen
                class="w-full h-full absolute top-0 left-0"
                v-if="loaded"
            ></iframe>
        </transition>
    </picture>
</template>

<script>
export default {
    props: ['id'],

    data () {
        return {
            loaded: false,
            shown: false
        }
    },

    methods: {
        onScroll () {
            const distanceFromEdge = this.$el.getBoundingClientRect().top - window.innerHeight
            if (distanceFromEdge < 500) {
                this.loaded = true
            }
            if (distanceFromEdge < -100) {
                this.shown = true
                window.removeEventListener('scroll', this.onScroll, { passive: true })
            }
        }
    },

    mounted () {
        window.addEventListener('scroll', this.onScroll, { passive: true })
        this.onScroll()
    },

    destroyed () {
        window.removeEventListener('scroll', this.onScroll, { passive: true })
    }
}
</script>
