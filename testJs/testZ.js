alert("纵向扩展测试..........................");
$(function(){
    var opt = {
        rowTitle:[[{
            value : "人员信息",
            rowSpan : 1,
            colSpan : 2
        }],[{
            colSpan : 1,
            value : "年龄",
            dataProperty : "age",
            rowSpan : 1,
            colSpan : 1
        },{
            value : "姓名",
            dataProperty:"name",
            rowSpan : 1,
        }]],
        rowTitleRows:2,
        rowTitleCols:2,
        data:[
            {"name": "张三", "age":18},
            {"name": "李四", "age":22},
            {"name": "赵武", "age":13}
        ],
        spreadDir:'Z'
    }
    $("#reportDiv2").reportengin(opt).drawReport();
});