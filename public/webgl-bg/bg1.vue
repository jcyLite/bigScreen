<style lang="less">
        .bg1{
                width:100vw;
                height:100vh;
                position:fixed;
                z-index:0;
                canvas{
                        width:100vw;
                        height:100vh;
                        position:fixed;
                        z-index:0;
                }
        }
</style>
<template>
        <div class="bg1">
                <canvas class="scene scene--full" id="scene"></canvas>
        </div>
</template>

<script>
export default {
        mounted() {
                document.documentElement.className = "js";
                var supportsCssVars = function () {
                        var e, t = document.createElement("style");
                        return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
                };
                supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
                 this.useJs('./static/three/demo6.js')
        }
}
</script>


