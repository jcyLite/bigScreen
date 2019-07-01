import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [{
                path: '/',
                redirect: '/ykgk'
            }, {
                path: '/content',
                component: () =>
                    import ('../page/content.vue')
            },
            {
                path: '/content2',
                component: () =>
                    import ('../page/content2.vue')
            },
            {
                path: '/content3',
                component: () =>
                    import ('../page/content3.vue')
            },
            {
                path: '/djyl',
                component: () =>
                    import ('../page/djyl.vue')
            },
            {
                path: '/grid',
                component: () =>
                    import ('../page/grid.vue')
            },
            {
                path: '/sjfx',
                component: () =>
                    import ('../page/sjfx.vue')
            },
            {
                path: '/view',
                component: () =>
                    import ('../page/view.vue')
            },
            {
                path: '/xzsp',
                component: () =>
                    import ('../page/xzsp.vue')
            },
            {
                path: '/xzspNew',
                component: () =>
                    import ('../page/xzspNew.vue')
            },
            {
                path: '/ykgk',
                component: () =>
                    import ('../page/ykgk.vue')
            },
            {
                path: '/zhzf',
                component: () =>
                    import ('../page/zhzf.vue')
            },
            {
                path: '/zhzx',
                component: () =>
                    import ('../page/zhzx.vue')
            }
        ]
    })
}