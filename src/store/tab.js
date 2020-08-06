import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        currentMenu: null,
        //动态路由
        menu: [],
        tabList: [{
            id : 1,
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }]
    },
    mutations: {
        selectMenu(state, val) {
            if(val.name !== 'home') {
                state.currentMenu = val;
                // let result = state.tabList.findIndex(item => item.name === val.name);
                // result === -1 ? state.tabList.push(val) : '';
                // 判断里面tabslist里面是否有数组
                let result = state.tabList.indexOf(val);
                if(result === -1) {
                    state.tabList.push(val);
                }
            }else {
                state.currentMenu = null;
            }
            // val.name === 'home' ? state.currentMenu = null : state.currentMenu = val;
        },
        closeTab(state, val) {
            let result = state.tabList.findIndex(item => item.name === val.name);
            state.tabList.splice(result, 1);
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
            console.log(state.isCollapse);
        },
        // addMenu(state, router) {
        //     let menu = JSON.parse(Cookie.get('menu'));
        //     if(!menu) {
        //         return
        //     }
        //     state.menu = menu
        //     let currentMenu = [
        //         {
        //             path: '/',
        //             component: () => import('../views/Main'),
        //             children: [
        //             ]
        //         }
        //     ]
        //     menu.forEach(item => {
        //         if (item.children) {
        //             item.children = item.children.map(item => {
        //                 item.component = () => import(`@/views/${item.url}`)
        //                 return item
        //             })
        //             currentMenu[0].children.push(...item.children)
        //         } else {
        //             item.component = () => import(`@/views/${item.url}`)
        //             currentMenu[0].children.push(item)
        //         }
        //     })
        //     console.log(currentMenu, 'jlfkajfd')
        //     router.addRoutes(currentMenu)
        // },
        // setMenu(state, val) {
        //     state.menu = val;
        //     Cookie.set('menu', JSON.stringify((val)));
        //     console.log(val, 'vuexxx')
        // },
        // clearMenu(state) {
        //     state.menu = [];
        //     Cookie.remove('menu');
        // }
    },
    actions: {}
}
