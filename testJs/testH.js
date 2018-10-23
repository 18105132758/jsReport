alert("横向扩展测试..........................");
$(function(){
    var opt = {
        colTitle:[[{
            value : "人员信息",
            rowSpan : 3,
            colSpan : 1
        },{
            value : "姓名",
            dataProperty:"name",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "年龄",
            dataProperty : "age",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "性别",
            dataProperty : "sex",
            rowSpan : 1,
            colSpan : 1
        }]],
        colTitleRows:2,
        colTitleCols:2,
        data:[
            {"name": "张三", "age":18, "sex":"男"},
            {"name": "李四", "age":22, "sex":"男"},
            {"name": "赵武", "age":13, "sex":"保密"}
        ],
        spreadDir:'H'
    }
    $("#reportDiv").reportengin(opt).drawReport();
});
