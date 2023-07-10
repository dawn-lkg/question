import httpInstance from "../utils/http";

export function getServiceType(){
    return httpInstance({
        url:"https://service.test.nttcc.com.cn/admin/api/v1/service_type/ladderlist"
    })
}
export function getDefaultType(){
    return httpInstance({
        url:"https://service.test.nttcc.com.cn/api/v1/technical/list"
    });
}