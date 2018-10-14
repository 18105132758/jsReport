/**
 * 报表标题定义
 * @constructor
 */
function ReportTitle(data, type){
    this.value = "默认标题";
    this.dataProperty = "数据来源属性";
    this.rowSpan = 1;
    this.colSpan = 1;
    this.isGrouped = false; //是否分组
    this.isSupportOrder = false;    //是否支持排序
    // this.extend = "";    //扩展方向
    // this.titleType = type || "ROW"; //标题类型： ROW-行标题、 COL-列标题. 默认为ROW
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