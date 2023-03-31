export default {
    state:{
        isCollapse:false, //控制菜单收起与展开
        tabList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            }
        ],
        Active:''//要高亮显示的path
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== 'home'){
                const index = state.tabList.findIndex(item =>item.name === val.name)
                if (index===-1){
                    state.tabList.push(val)
                }
            }
            // console.log(state.tabList)
        },
        setActive(state,val){
            state.Active = val //item.path
        }
    }
}