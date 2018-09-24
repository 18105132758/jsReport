// require("./models/test.js");
$.fn.reportengin = function(option){
    var dopt = {
        rowTitle:[],
        colTitle:[],
        data:[]
    };
    $.extend(dopt, option); //合并配置项
    alert($(this).append("你好/..............").html());
    return {
        draw: function(){
            //渲染表头：行标题、列标题
            if(dopt.rowTitle && dopt.rowTitle.length){
                //渲染行表头
                for (let i = 0; i < dopt.rowTitle.length; i++) {

                }
            }
            //渲染数据


        },

    }
};

$(function(){
    $("#reportDiv").reportengin();

})

/**
 * 行标题定义
 * @constructor
 */
function ReportRowTitle(){
    this.value = "标题";
    this.dataProperty = "数据来源属性";
    this.rowSpan = 1;
    this.colSpan = 1;
    this.isGrouped = false; //是否分组
    this.isSupportOrder = false;    //是否支持排序
    this.extend = "";    //扩展方向
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









