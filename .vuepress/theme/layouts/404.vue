<template>
    <div class="theme-container">
        <div class="content">
            <h1>404</h1>
            <blockquote>{{ getMsg() }}</blockquote>
            <router-link to="/">Take me home.</router-link>
        </div>
    </div>
</template>

<script>
    import redirect from './redirect'

    const msgs = [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`
    ];

    export default {
        created() {
            let newUrl = redirect[this.$route.path];
            if (typeof newUrl === "string" && newUrl) {
                this.$router.push(newUrl);
            }
        },
        methods: {
            getMsg() {
                return msgs[Math.floor(Math.random() * msgs.length)]
            },
        }
    }
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
