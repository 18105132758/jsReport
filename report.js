// require("./models/test.js");

// var tableTemplate = " \
//     <table>\
//         {tr}\
//     </table>\
// "

$.fn.reportengin = function(initOption){
    let reportOpt = {
        rowTitle:null,
        colTitle:null,
        data:[]
    };
    $.extend(reportOpt, initOption); //合并配置项

    let util = new TitilUtils();
    let container = $("#rowTitle");
    return {
        drawReport: function(){
            //渲染表头：行标题
            if(reportOpt.rowTitle && reportOpt.rowTitle.length){
                //渲染行表头
                var rowTitleTable = util.rowTitleDefsToHtmlEL_TABLE(dopt.rowTitle);
                rowTitleTable && container.append(rowTitleTable, );
            }
            //渲染列标题
            //渲染数据

            //拼装
        },

    }
};

$(function(){
    var opt = {
        rowTitle : [[{
            value : "空占标题",
            rowSpan : 2,
            colSpan : 1
        },{
            value : "大标题",
            rowSpan : 1,
            colSpan : 2
        }], [{
            value : "标题1",
            rowSpan : 1,
            colSpan : 1
        },{
            value : "标题2",
            rowSpan : 1,
            colSpan : 1
        }]]
    }
    $("#reportDiv").reportengin(opt).drawReport();

})



// function drawRowTitle(){
//     var outerTable = $("#outerTable");
//     //渲染行比奥拓
// }

/**
 * 标题工具类
 * @constructor
 */
function TitilUtils(){

    /**
     * 将行标题定义转换成table
     * @param rowTitleDefs
     */
    this.rowTitleDefsToHtmlEL_TABLE = function(rowTitleDefs, reportOpt){
        var $titleTable = $("<table></table>");
        if(rowTitleDefs && rowTitleDefs.length){
            for (let i = 0; i < rowTitleDefs.length; i++){
                var tr = this.oneRowTitleDefsToHtmlEL_TR(rowTitleDefs[i]);
                tr && $titleTable.append(tr);
            }
            return $titleTable[0];
        }
        return undefined;
    }

    /**
     * 将一行标题转换成一个html元素：tr
     * @param titleDef
     * @returns {*}
     */
    this.oneRowTitleDefsToHtmlEL_TR = function(titleDefs){
        let $tr = $("<tr></tr>");
        if(titleDefs && titleDefs.length){
            for (let i = 0; i < titleDefs.length; i++){
                let titleDef = titleDefs[i];
                var thEl = this.onTitleDefToHtmlEL_TH(titleDef);
                $tr.append(thEl);
            }
            return $tr[0];
        }
        return undefined;
    }


    /**
     * 将一个标定定义转换成对应的HTML元素
     * @param titleDef
     * @returns {*}
     */
    this.onTitleDefToHtmlEL_TH = function(titleDef){
        var title = new ReportTitle(titleDef).toDocEl();
        console.log(title);
        return title;
    }
}

/**
 * 行标题定义
 * @constructor
 */
function ReportTitle(data, type){
    this.value = "默认标题";
    this.dataProperty = "数据来源属性";
    this.rowSpan = 1;
    this.colSpan = 1;
    this.isGrouped = false; //是否分组
    this.isSupportOrder = false;    //是否支持排序
    this.extend = "";    //扩展方向
    this.titleType = type || "ROW"; //标题类型： ROW-行标题、 COL-列标题. 默认为ROW
    $.extend(this, data);

    this.toDocEl = function(){
        var $titleCell = $("<th></th>");
        $titleCell.text(this.value);
        $titleCell.attr("rowSpan", this.rowSpan);
        $titleCell.attr("colSpan", this.colSpan);
        this.isGrouped && $titleCell.attr("isGrouped", this.isGrouped);
        this.isSupportOrder && $titleCell.attr("isSupportOrder", this.isSupportOrder);
        return $titleCell[0];
    }
}

/**
 * 行标题定义
 * @constructor
 */
function ReportColTitle(){
    this.value = "标题";
    this.dataProperty = "数据来源属性";
    this.rowSpan = 1;
    this.colSpan = 1;
    this.isGrouped = false; //是否分组
    // this.isSupportOrder = false;    //是否支持排序
    this.extend = "";    //扩展方向
}









