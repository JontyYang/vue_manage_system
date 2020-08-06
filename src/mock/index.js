import Mock from 'mockjs'
import HomeApi from './home'
import userApi from './user'
import permissionApi from './permission'

//设置200-2000延时
Mock.setup({
    timeout: '200-2000'
})

//拦截请求
Mock.mock(/\/home\/getData/, 'get', HomeApi.getStatisticalData())
// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/\/home\/getData/, 'get', HomeApi.getStatisticalData)

// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)