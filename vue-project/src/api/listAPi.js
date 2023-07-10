import httpInstance from "../utils/http";

export function getData(data){
    return httpInstance({
        url:"https://service.test.nttcc.com.cn/api/v1/service/list",
        params:data,
        method:"GET"
    })
}