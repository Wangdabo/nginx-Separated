/**
 * Created by wangbo on 2017/7/31.
 */

MetronicApp.factory('role_service',['$http', '$q', function ($http,$q) {
    var service={};
    //��ѯ��ɫ�б�
    service.queryRoleList = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/queryRoleList",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //������ɫ
    service.createRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/createRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };


    //�޸Ľ�ɫ
    service.editRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/editRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //ɾ����ɫ
    service.deleteRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/deleteRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ��Ӧ��Ӧ�ù���
    service.appQuery = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/appQuery",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    }

    //��ɫ���ù���Ȩ��
    service.configRoleFunc = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/configRoleFunc",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ɫ�����֯Ȩ��
    service.addPartyRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/addPartyRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    // ��ѯ��ɫ�Ĺ���Ȩ��
    service.queryRoleFunc = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/queryRoleFunc",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ��ɫ��ĳ��֯���͵�Ȩ����Ϣ
    service.queryRoleInParty = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/queryRoleInParty",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //�Ƴ���ɫ�µ���֯����
    service.removePartyRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/removePartyRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ɫ��Ӳ���Ա
    service.addOperatorRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/addOperatorRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    //��ѯ��ɫ�µĲ���Ա����
    service.queryOperatorRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/queryOperatorRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };


    //�Ƴ���ɫ�µĲ���Ա
    service.removeOperatorRole = function (subFrom) {
        var res = $http.post(manurl + "/AcRoleController/removeOperatorRole",subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };

    return service;
}]);