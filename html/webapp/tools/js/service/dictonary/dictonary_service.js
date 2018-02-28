/**
 * Created by wangbo on 2017/7/27.
 */
MetronicApp.factory('dictonary_service',['$http', '$q', function ($http,$q) {
    var service={};
    //����ҵ���ֵ�
    service.createSysDict = function (subFrom) {
        var res = $http.post(manurl + "/DictController/createSysDict",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //ɾ��ҵ���ֵ�
    service.deleteSysDict = function (subFrom) {
        var res = $http.post(manurl + "/DictController/deleteSysDict",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //�޸�ҵ���ֵ�
    service.editSysDict = function (subFrom) {
        var res = $http.post(manurl + "/DictController/editSysDict",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ����ҵ���ֵ�
    service.querySysDict = function (subFrom) {
        var res = $http.post(manurl + "/DictController/querySysDict",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //����ҵ���ֵ���
    service.createSysDictItem = function (subFrom) {
        var res = $http.post(manurl + "/DictController/createSysDictItem",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //ɾ��ҵ���ֵ���
    service.deleteSysDictItem = function (subFrom) {
        var res = $http.post(manurl + "/DictController/deleteSysDictItem",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };


    //�޸�ҵ���ֵ���
    service.editSysDictItem = function (subFrom) {
        var res = $http.post(manurl + "/DictController/editSysDictItem",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ����ҵ���ֵ���
    service.querySysDictItem = function (subFrom) {
        var res = $http.post(manurl + "/DictController/querySysDictItem",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ����ҵ���ֵ�
    service.querySysDictList = function (subFrom) {
        var res = $http.post(manurl + "/DictController/querySysDictList",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯҵ���ֵ����б�
    service.querySysDictItemList = function (subFrom) {
        var res = $http.post(manurl + "/DictController/querySysDictItemList",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //����key��ѯҵ���ֵ����б�
    service.queryDictItemListByDictKey = function (subFrom) {
        var res = $http.post(manurl + "/DictController/queryDictItemListByDictKey",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ����ҵ���ֵ�
    service.queryAllDictItem = function (subFrom) {
        var res = $http.post(manurl + "/DictController/queryAllDictItem",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    return service;
}]);
