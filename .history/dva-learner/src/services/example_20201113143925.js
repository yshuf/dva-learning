// 数据接口
import request from '../utils/request';

export function query () {
    return request('/api/users');
}

export function gerProduct (params) {
    console.log(params)
    return request('api/product?id=' + params.id)
}
