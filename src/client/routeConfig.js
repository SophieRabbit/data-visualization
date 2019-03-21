import App from '';

if (typeof require.ensure !== 'function') {
    //require.ensure 方法是 webpack 提供的方法，这也是按需加载的核心方法。第一个参数是依赖，第二个是回调函数
    require.ensure = function (dependencies, callback) {
        callback(require);
    };
}

export default routeConfig = [
    { path: '/',
        component: App,
        indexRoute: {
            getComponent(nextState, callback) { //getComponent 这个方法是异步的，也就是当路由匹配时，才会调用这个方法
                require.ensure([], (require) => {
                    callback(null, require('./modules/home'));
                }, 'home');
            }
        },
        childRoutes: [
            //{ path: 'about', component: About },
            //{ path: 'inbox',
            //    component: Inbox,
            //    childRoutes: [
            //        { path: '/messages/:id', component: Message },
            //        { path: 'messages/:id',
            //            onEnter: function (nextState, replaceState) {
            //                //do something
            //            }
            //        }
            //    ]
            //}
        ]
    }
]