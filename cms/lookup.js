//联表查询
/* 
// https://cloud.tencent.com/developer/article/1646482

lookup({
  from: <要连接的集合名>,
  localField: <输入记录的要进行相等匹配的字段>,
  foreignField: <被连接集合的要进行相等匹配的字段>,
  as: <输出的数组字段名>
})
*/

const cloudbase = require("@cloudbase/node-sdk");
const app = cloudbase.init({
    env: "test-blog-8gna4lys4c563eac",
    secretId: "AKIDpX4PYcgBgz60iDpcZKwMcgZFj05yg9RX",
    secretKey: "2tY1IMMEuVxEIApHXGzYv65tVv9e4MXY",
});
const db = app.database();
async function main() {
    // 联表查询
    let data = await db.collection('class').aggregate().lookup({
            from: 'students', //第二张表
            localField: 'id', //class表中的关联字段
            foreignField: 'class_id', //students表中关联字段
            as: 'student' //查询后放在一块
        })
        .end();
    console.log(JSON.stringify(data));
}

main();

let s = {
    "requestId": "17b28d256cd_1",
    "data": [{
        "_id": "cd045e75611092d7044fcba84ab8383c",
        "cname": "1班",
        "id": "1",
        "teacher": "王老师",
        "_createTime": 1628476119068,
        "_updateTime": 1628477469419,
        "student": [{
            "_id": "14139e12611092f203da54e4344362e7",
            "class_id": "1",
            "score": "99",
            "sname": "马龙",
            "_createTime": 1628476146914,
            "_updateTime": 1628476146914
        }, {
            "_id": "8937eaa9611093020381f19e03bb062a",
            "class_id": "1",
            "score": "98",
            "sname": "张继科",
            "_createTime": 1628476162670,
            "_updateTime": 1628476162670
        }, {
            "_id": "2d44d6c26110930b03dfb54e18d8ff1d",
            "class_id": "1",
            "score": "98",
            "sname": "许昕",
            "_createTime": 1628476178089,
            "_updateTime": 1628476178089
        }]
    }, {
        "_id": "14139e12611092e303da4fcd6c8b6532",
        "cname": "2班",
        "id": 2,
        "teacher": "张老师",
        "_createTime": 1628476131614,
        "_updateTime": 1628477474699,
        "student": []
    }]
}