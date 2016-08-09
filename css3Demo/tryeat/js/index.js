/**
 * Created by 璐 on 2016/6/28.
 */
$(function(){
    $("#tryEatForm").submit(function(e){
        var companyName = $('#companyName').val();
        var province = $('#province option:selected').val();
        var city = $('#city option:selected').val();
        var area = $('#area option:selected').val();
        var street = $('#street option:selected').val();
        var dtailAddr =  $('#dtailAddr').val();
        var companyNum = $('#companyNum').val();
        var applyPerson = $('#applyPerson').val();
        var tel = $('#tel').val();
        var mobilePhone = $('#mobilePhone').val();
        if(!companyName){
            alert('请填写公司名称');
            return;
        }else if(province!=0){
            alert('请选择省份');
            return;
        }else if(city!=0){
            alert('请选择城市');
            return;
        }else if(area!=0){
            alert('请选择区域');
            return;
        }else if(street!=0){
            alert('请选择街道');
            return;
        }else if(!dtailAddr){
            alert('请填写街道');
            return;
        }else if(!companyNum){
            alert('请填写试吃人数');
            return;
        }else if(!applyPerson && applyPerson.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) ){
            alert('填写的手机号码格式不对');
            return;
        }else if(!tel){
            alert('请填写座机号码');
            return;
        }

    });
});
