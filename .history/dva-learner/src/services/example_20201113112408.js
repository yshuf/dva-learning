// 数据接口
import request from '../utils/request';

export function query () {
    return request('/api/users');
}

export function gerProdcut () {
    return request('api/product')
}
