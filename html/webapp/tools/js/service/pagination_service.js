/**
 * Created by HP on 2016/10/20.
 */
MetronicApp.factory('pagination_service',['$http', '$q', function ($http,$q) {
    var service={};
    /*��ҳ����*/
    service.pagination = function(lpc){
        var queryResult = [];
        var perPageNum =  lpc.page.itemsperpage;
        var totalSize = lpc.resultList.length;
        var totalPages = Math.floor(totalSize/perPageNum);
        var lastPageNum = totalSize%perPageNum;
        if(lastPageNum!=0){
            totalPages++;
        }
        //alert(perPageNum);alert(dataSize);

        var paginationList = [];
        if(totalSize<=perPageNum){
            paginationList[0] = lpc.resultList;
            //queryResult = lpc.resultList;
        }else{
            for(var i=0;lpc.resultList.length>=perPageNum;i++){
                //��ȡ��i+1ҳ��list
                var perPageDataList = lpc.resultList.slice(0,perPageNum);
                //����i+1ҳ�����ݴ�����Ӧλ��
                paginationList[i] = perPageDataList;
                //�����н����list���Ƴ���õ�����
                lpc.resultList.splice(0,perPageNum);
            }
            if(lpc.resultList.length>0){
                paginationList[paginationList.length] = lpc.resultList;
            }
            //for(var i=0;i<perPageNum;i++){
            //    queryResult.push(lpc.resultList[i]);
            //}
        }
        //lpc.queryResult = queryResult;
        lpc.queryResult = paginationList[0];
        lpc.page.currentPage = 1;
        lpc.page.totalPages = totalPages;
        lpc.page.totalItems = totalSize;

        lpc.paginationList = paginationList;
    }

    /*��һҳ*/
    service.getPerPage = function(lpc){
        var currentPage = lpc.page.currentPage;
        if(currentPage==1){
            return;
        }
        //var perPageNum = lpc.page.itemsperpage;
        //var startIndex = (currentPage-2)*perPageNum;
        //var endIndex = startIndex + perPageNum-1;
        //
        //lpc.queryResult = lpc.differList.slice(startIndex, endIndex + 1);
        lpc.queryResult = lpc.paginationList[currentPage-2];
        //alert(JSON.stringify(biz.queryResult));
        lpc.page.currentPage = currentPage - 1;
    }

    /*��һҳ*/
    service.getPostPage = function (lpc) {
        var currentPage = lpc.page.currentPage;
        var totalPages = lpc.page.totalPages;
        if(currentPage==totalPages){
            return;
        }
        //var perPageNum = lpc.page.itemsperpage;
        //var startIndex = currentPage*perPageNum;
        //
        //if(currentPage==totalPages-1){
        //    lpc.queryResult = lpc.differList.slice(startIndex);
        //}else{
        //    var endIndex = startIndex + perPageNum-1;
        //    lpc.queryResult = lpc.differList.slice(startIndex,endIndex+1);
        //}
        lpc.queryResult = lpc.paginationList[currentPage];
        //alert(JSON.stringify(biz.queryResult));
        lpc.page.currentPage = currentPage + 1;
    }

    return service;
}]);