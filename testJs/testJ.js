alert("交叉报表测试..........................");
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
        colTitleRows:3,
        colTitleCols:2,
        colTitle:[[{
            value : "序号",
            rowSpan : 11,
            colSpan : 1
        },{
            value : "1",
            rowSpan : 1,
            colSpan : 1
        }], [{
            value : "2",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "3",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "4",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "5",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "6",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "7",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "8",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "9",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "10",
            rowSpan : 1,
            colSpan : 1
        }],[{
            value : "11",
            rowSpan : 1,
            colSpan : 1
        }]],
        data:[
            {"name": "张三", "age":18},
            {"name": "李四", "age":22},
            {"name": "赵武", "age":13},
            {"name": "赵武1", "age":13},
            {"name": "赵武2", "age":13},
            {"name": "赵武3", "age":13},
            {"name": "赵武4", "age":13},
            {"name": "赵武5", "age":13},
            {"name": "赵武6", "age":13},
            {"name": "赵武7", "age":13},
            {"name": "赵武8", "age":13}
        ],
        spreadDir:'Z'
    }
    $("#reportDivJ").reportengin(opt).drawReport();
});