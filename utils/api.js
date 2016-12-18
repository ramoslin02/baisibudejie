var HOST_URL = 'http://api.budejie.com/api/api_open.php';

module.exports = {
    // 获取列表的的
    // type=29是首页的的
    // type = 10 是图片的的
    // type = 41 是视频的
    getListUrl: function(type) {
        var obj = {
            'a':'newlist',
            'type': type,
            'c':'data'
        };
       var param = Object.keys(obj).map(function(item) {
            return  decodeURIComponent(item)+'='+ obj[item]
        }).join('&');
        return HOST_URL+'?'+param;
    }
}