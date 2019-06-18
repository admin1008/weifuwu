import request from '@/utils/request'
const group_name = 'gathering'
const api_name = 'gathering'
export default {
    // 获取活动列表
    getList() {
        return request({
            url: `/${group_name}/${api_name}`,
            method: 'get'
        })
    },
    // 分页查询
    search(page, size, searchMap) {
        return request({
            url: `/${group_name}/${api_name}/search/${page}/${size}`,
            method: 'post',
            data: searchMap // 查询条件
        })
    },
    // 添加
    add(pojo) {
        return request({
            url: `/${group_name}/${api_name}`,
            method: 'post',
            data: pojo
        })
    },
    // 通过编号查询
    findById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'get'
        })
    },
    // 修改
    update(id, pojo) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'put',
            data: pojo
        })
    },
    // 删除
    deleteById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'delete'
        })
    }
}