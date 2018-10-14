
// var tableTemplate = " \
//     <table>\
//         {tr}\
//     </table>\
// "


/**
 * 报表引擎插件
 * @param initOption
 * @returns {{drawReport: drawReport}}
 */
$.fn.reportengin = function(initOption){
    //ajax的连接信息？？？
    let reportOpt = {
        rowTitle:null,  //行标题
        colTitle:null,  //列标题
        spreadDir:"Z",  //扩展方向： H-横向      Z-纵向
        colTitleCols:0, //列标题列数
        colTitleRows:0, //列标题行数
        rowTitleRows:0, //行标题行数
        rowTitleCols:0, //行标题列数
        data:[],    //数据
        effectiveRowTitle:null, //数据相关的行标题
        effectiveColTitle:null  //数据相关的列标题
    };
    $.extend(reportOpt, initOption); //合并配置项
    //创建标题工具
    let titleUtil = new TitilUtils();
    //提取数据相关的标题信息
    reportOpt.effectiveRowTitle = titleUtil.collectEffectiveRowTitle(reportOpt);
    reportOpt.effectiveColTitle = titleUtil.collectEffectiveColTitle(reportOpt);

    let $reportContainer = $(this);

    return {
        drawReport: function(){

            let rowTitleContainer = $("<tr id='rowTitle'></tr>");
            let mainContainer = $("<tr id='mainReport'></tr>");

            //渲染空表头：适用于交叉报表
            let emptyTitleEl = titleUtil.emptyTitleToHtmlEL(reportOpt);
            emptyTitleEl && rowTitleContainer.append(emptyTitleEl);

            //渲染表头：行标题
            if(reportOpt.rowTitleRows && reportOpt.rowTitleCols){
                //渲染行表头
                let rowTitleTable = titleUtil.rowTitleDefsToHtmlEL_TABLE(reportOpt.rowTitle, reportOpt);
                rowTitleTable && rowTitleContainer.append(rowTitleTable);
            }
            //渲染列标题
            if(reportOpt.colTitleCols && reportOpt.colTitleRows){
                //渲染行表头
                let colTitleTable = titleUtil.colTitleDefsToHtmlEL_TABLE(reportOpt.colTitle, reportOpt);
                console.log(colTitleTable)
                colTitleTable && mainContainer.append(colTitleTable);
            }
            //渲染数据
            let dataEL = titleUtil.drawReportDatas(reportOpt);
            mainContainer.append(dataEL);
            //拼装
            let reportTable = $("<table id='reportTable'></table>");
            reportTable.append(rowTitleContainer[0]);
            reportTable.append(mainContainer);
            $reportContainer.html(reportTable[0]);
        },

    }
};

// $(function(){
//     var opt = {
//         rowTitle : [[{
//             value : "人员信息",
//             rowSpan : 1,
//             colSpan : 2
//         }], [{
//             value : "姓名",
//             rowSpan : 1,
//             colSpan : 1,
//             dataProperty:"name"
//         },{
//             value : "年龄",
//             dataProperty:"age",
//             rowSpan : 1,
//             colSpan : 1
//         }]],
//         colTitle:[[{
//             value : "列标题1",
//             rowSpan : 2,
//             colSpan : 1
//         },{
//             value : "列标题1_1",
//             rowSpan : 1,
//             colSpan : 1
//         }],[{
//             value : "列标题1_2",
//             rowSpan : 1,
//             colSpan : 1
//         }]],
//         rowTitleRows:2,
//         rowTitleCols:2,
//         colTitleRows:2,
//         colTitleCols:2,
//         data:[
//             {"name": "张三", "age":11},
//             {"name": "李四", "age":12},
//             // {"name": "赵武", "age":13}
//         ]
//     }
//     $("#reportDiv").reportengin(opt).drawReport();
// });
