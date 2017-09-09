import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
    User = {
        name:String,
        id:Number,
        travels:Object,
    }
    users = [
        {
            name:'吕益行',
            id:1,
            travels:[
                {
                    time:'2010.03.15',
                    location :['洛阳','郑州'],
                    content:'河南省会，发展迅速。',
                    img : './img/zhenghzou.jpg',
                },
                {
                    time:'2011.08.15',
                    location :['洛阳','合肥'],
                    content:'中科大求学4年。',
                },
                {
                    time:'2012.07.01',
                    location :['合肥','昆明'],
                    content:'昆明四季如春',
                },
                {
                    time:'2012.07.15',
                    location :['昆明','西双版纳'],
                    content:'傣族民俗，热带森林',
                },
                {
                    time:'2013.10.01',
                    location :['合肥','黄山'],
                    content:'奇石怪峰，迷人日出',
                },
                {
                    time:'2014.08.15',
                    location :['合肥','绵阳'],
                    content:'蜀道难，山路险',
                },
                {
                    time:'2015.06.10',
                    location :['合肥','青岛'],
                    content:'青岛大虾，崂山道士',
                },
                {
                    time:'2015.06.14',
                    location :['青岛','大连'],
                    content:'大连‘发现王国’游乐场',
                },
                {
                    time:'2015.07.15',
                    location :['洛阳','北京'],
                    content:'国科大求学3年',
                },
                {
                    time:'2017.07.12',
                    location :['北京','银川'],
                    content:'回族羊汤美食',
                },
            ],    
        },
        {
            name:12,
            id:2,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
                {
                    time:'2015.06.14',
                    location :['青岛','大连'],
                    content:'大连‘发现王国’游乐场',
                },
                {
                    time:'2015.07.15',
                    location :['洛阳','北京'],
                    content:'国科大求学3年',
                },
                {
                    time:'2017.07.12',
                    location :['北京','银川'],
                    content:'回族羊汤美食',
                },
            ],
        },
        {
            name:13,
            id:3,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:14,
            id:4,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:15,
            id:5,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:11,
            id:1,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:12,
            id:2,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:13,
            id:3,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:14,
            id:4,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:15,
            id:5,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:11,
            id:1,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:12,
            id:2,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:13,
            id:3,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:14,
            id:4,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
        {
            name:15,
            id:5,
            travels:[
                {
                    time:'2011.01.01',
                    location :['杭州','杭州'],
                    content:'欣赏杭州西湖美景',
                },
            ],
        },
    ]
    
    
    uPage 
    selectedUsers 
    selectedUser 
    selectedTravels
    uCitys
    uProvinces
    selectedCitys
    tPage 
    tEndPage  
    selectOrNot 
    selectNone
    
    changeUser(user):void{
        var local = this
        this.selectedUser = user    
        this.tPage = 1
        this.tEndPage = Math.ceil(this.selectedUser.travels.length/7)
        this.uCitys = []
        this.selectedUser.travels.forEach(function(t){t.location.forEach(function(c){if(local.uCitys.indexOf(c)==-1){local.uCitys.push(c)}})})
        this.selectedCitys = []
        this.uProvinces = []
        this.uCitys.forEach(function(c,index){local.selectedCitys[index]=0;if(local.uProvinces.indexOf(local.coordinates[c][1])==-1){local.uProvinces.push(local.coordinates[c][1])}})
        this.selectOrNot = []
        this.selectedTravels = []
        this.selectNone = true
    }
    changeUPage(page):void{
        this.uPage =page
        this.selectedUsers = this.users.slice((this.uPage-1)*10,this.uPage*10)
        this.changeUser(this.selectedUsers[0])
    }
    // chinaProvinces = ['北京','天津','上海','重庆','黑龙江','吉林','辽宁','内蒙古','新疆','甘肃','宁夏','山西','陕西','河北','山东','河南','青海','西藏','四川','云南','贵州','广西','广东','福建','江西','浙江','湖南','湖北','安徽','江苏','海南','香港','澳门','台湾',]
    coordinates = {
        北京 : ["458,195",'北京'],
        青岛 : ["502,249",'山东'],
        杭州 : ["508,327",'浙江'],
        洛阳 : ["419,277",'河南'],
        合肥 : ["473,311",'安徽'],
        黄山 : ["491,335","安徽"],
        大连 : ["514,200",'辽宁'],
        南京 : ["120,220",'江苏'],
        银川 : ["348,221",'宁夏'],
        昆明 : ["295,408",'云南'],
        西双版纳 : ["275,450",'云南'],
        绵阳 : ["327,319","四川"],
        天津 : ["469,211",'天津'],
        郑州 : ["433,276",'河南'],
        成都 : ["319,325",'四川'],
        武汉 : ["442,223",'湖北'],
        宁波 : ["527,334",'浙江'],
        上海 : ["527,329",'上海'],
        广州 : ["432,436",'广东'],

    }
    times = [
        "2011.08.01",
        "2012.08.01",
        "2013.08.01",
        "2014.08.01",
        "2015.08.01",
        "2016.08.01",
        "2017.08.01",
        "2018.08.01",
        "2011.08.01",
        "2012.08.01",
        "2013.08.01",
        "2014.08.01",
        "2015.08.01",
        "2016.08.01",
        "2017.08.01",
        "2018.08.01",
      ]
}