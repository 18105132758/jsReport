/**
 * 标题工具类
 * @constructor
 */
function TitilUtils(){
    /**
     * 渲染行数据
     * @param reportOpt
     */
    this.drawReportDatas = function (reportOpt){
        let $dataTh = $("<th></th>");
        let $dataTable = $("<table></table>");
        let reportData = reportOpt.data;

        //纵向扩展
        if(reportOpt.spreadDir === 'Z'){
            if(reportData && reportData.length){
                for(let i = 0; i < reportData.length; i++){
                    let oneRowEL = this.oneRowDataToHtmlEL_Z(reportOpt, reportData[i]);
                    $dataTable.append(oneRowEL);
                }
                $dataTh.append($dataTable);
            }else{
                $dataTh.append("没有数据");
            }
        }

        //横向扩展
        if(reportOpt.spreadDir === 'H'){
            let colTitle =  reportOpt.effectiveColTitle ? (reportOpt.effectiveColTitle.length &&  reportOpt.effectiveColTitle) : null;
            if(reportData && reportData.length && colTitle){
                //数据和列标题同时存在，才进行渲染
                for(let i = 0; i < colTitle.length; i++){
                    let oneRowEL = this.oneRowDataToHtmlEL_H(reportOpt, colTitle[i]);
                    $dataTable.append(oneRowEL);
                }
                $dataTh.append($dataTable);
            }else{
                $dataTh.append("没有数据");
            }
        }


        return $dataTh[0];
    };


    /**
     * 将一行数据转换成HTML:适用于横向扩展
     * @param reportOpt
     */
    this.oneRowDataToHtmlEL_H = function(reportOpt, colTitle){
        let $tr = $("<tr></tr>");
        let reportData = reportOpt.data;
        for(let i = 0; i < reportData.length; i++){
            $tr.append("<td>" + reportData[i][colTitle.dataProperty] + "</td>");
        }
        return $tr[0];
    }

    /**
     * 将一行数据转换成HTML:适用于纵向扩展
     * @param reportOpt
     */
    this.oneRowDataToHtmlEL_Z = function(reportOpt, oneRowData){
        let $tr = $("<tr></tr>");
        let rowTitle = reportOpt.rowTitle;
        if(rowTitle && rowTitle.length){
            rowTitle = rowTitle[rowTitle.length - 1];
            for(let i = 0; i < rowTitle.length; i++){
                $tr.append("<td>" + oneRowData[rowTitle[i].dataProperty] + "</td>")
            }
            return $tr[0];
        }else{
            return $tr.append("<td>" + oneRowData + "</td>")[0];
        }
    }





    /**
     * 生成空表头
     * @param reportOpt
     * @returns {*}
     */
    this.emptyTitleToHtmlEL = function(reportOpt){
        if(reportOpt.rowTitleRows && reportOpt.colTitleCols){
            let $emptyTitle = $("<th></th>");
            // $emptyTitle.attr("rowspan", reportOpt.rowTitleRows);
            $emptyTitle.attr("colspan", reportOpt.colTitleCols);
            return $emptyTitle[0];
        }
        return null;
    }

    /**
     * 将列标题定义转换成table
     * @param rowTitleDefs
     */
    this.colTitleDefsToHtmlEL_TABLE = function(colTitleDefs, reportOpt){
        if(reportOpt.colTitleRows && reportOpt.colTitleCols){
            let $colTitleTh = $("<th ></th>");
            // $colTitleTh.attr("rowspan", reportOpt.colTitleRows);
            $colTitleTh.attr("colspan", reportOpt.colTitleCols);

            let tableEl =  this.commonTitleDefsToHtmlEL_TABLE(colTitleDefs)
            tableEl && $colTitleTh.append(tableEl);
            return $colTitleTh[0];
        }
        return null;
    }

    /**
     * 将行标题定义转换成table
     * @param rowTitleDefs
     */
    this.rowTitleDefsToHtmlEL_TABLE = function(rowTitleDefs, reportOpt){
        if(reportOpt.rowTitleRows && reportOpt.rowTitleCols){
            let $rowTitleTh = $("<th ></th>");
            // $rowTitleTh.attr("rowspan", reportOpt.rowTitleRows);
            $rowTitleTh.attr("colspan", reportOpt.rowTitleCols);

            let tableEl =  this.commonTitleDefsToHtmlEL_TABLE(rowTitleDefs)
            tableEl && $rowTitleTh.append(tableEl);
            return $rowTitleTh[0];
        }
        return null;
    }

    /**
     * 将标题定义转换成<table>元素
     * @returns {*}
     */
    this.commonTitleDefsToHtmlEL_TABLE = function(rowTitleDefs){
        let $titleTable = $("<table></table>");
        if(rowTitleDefs && rowTitleDefs.length){
            for (let i = 0; i < rowTitleDefs.length; i++){
                var tr = this.oneRowTitleDefsToHtmlEL_TR(rowTitleDefs[i]);
                tr && $titleTable.append(tr);
            }
            return $titleTable[0];
        }
        return null;
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



    /**
     * 提取实际匹配数据的列标题
     * @param reportOpt
     */
    this.collectEffectiveColTitle = function(reportOpt){
        let effectiveColTitle = [];
        if(reportOpt.colTitleRows && reportOpt.colTitleCols){
            for(let i = 0; i < reportOpt.colTitle.length; i++){
                let oneRowColTitle = reportOpt.colTitle[i];
                effectiveColTitle[i] = oneRowColTitle[oneRowColTitle.length - 1];
            }
        }
        return effectiveColTitle;
    }

    /**
     * 提取实际匹配数据的列标题
     * @param reportOpt
     * @returns {Array}
     */
    this.collectEffectiveRowTitle = function(reportOpt){
        let effectiveRowTitle = [];
        if(reportOpt.rowTitleRows && reportOpt.rowTitleCols){
            effectiveRowTitle = reportOpt.rowTitle[reportOpt.rowTitleRows - 1];
        }
        return effectiveRowTitle;
    }

}