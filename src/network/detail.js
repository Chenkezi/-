import {request} from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Goods{
    constructor(i,c,s){//constructor构造函数
        this.title=i.title
        this.desc=i.desc
        this.newPrice=i.price
        this.oldPrice=i.oldPrice
        this.discount=i.discountDesc
        this.columns=c
        this.services=s
        this.realPrice=i.lowNowPrice
    }
}