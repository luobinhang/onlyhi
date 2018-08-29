

/************************
 *
 * 公共API
 * @Url  cmsapi
 * @API  crmapi
 * @skip 跳转链接
 *
 * **********************/

if (location.host == "www.onlyhi.cn" || location.host == "www.haiketang.net") //正式环境
{
  var CMSAPI = 'https://cmsapi.onlyhi.cn',
      CRMAPI = 'https://crmapi.onlyhi.cn',
      CLIENTAPI = 'http://client.haiketang.net',
    CMSPCAPI='https://hkt.onlyhi.cn',
      skip = "https://www.onlyhi.cn";
}
else if (location.host == "www.onlyeduhi.cn") //测试环境
{
  var CMSAPI = 'http://cmsapi.onlyeduhi.cn',
      CRMAPI = 'https://api.onlyeduhi.cn',
      CMSPCAPI='https://getaway.onlyeduhi.cn',
    // CRMAPI = 'http://192.168.0.4:8081',//明珠测试
    //   CRMAPI = 'https://crmapi.onlyhi.cn',
      CLIENTAPI = 'http://clienttest.haiketang.net',
      skip = "http://www.onlyeduhi.cn";
}
else if (location.host == "192.168.3.82:8080") //开发环境
{
  var CMSAPI = 'http://cmsapi.onlyeduhi.cn',
      CRMAPI = 'http://api.onlyeduhi.cn',
      // CRMAPI = 'http://192.168.3.63:8080/onlyhi-admin',
      // CRMAPI = 'http://192.168.3.138:8080/onlyhi-admin',
      CLIENTAPI = 'http://clienttest.haiketang.net',
      skip = "http://192.168.3.82:8080/works/cms-onlyhi/src/main/webapp";
}
else if (location.host == "172.16.20.127:8081") //开发环境
{
    // console.log(1);
    var CMSAPI = 'http://cmsapi.onlyeduhi.cn',
      CRMAPI = 'https://api.onlyeduhi.cn',
      CLIENTAPI = 'http://clienttest.haiketang.net',
      // CRMAPI = 'http://192.168.3.138:8080/onlyhi-admin',//忠星测试
      skip = "http://192.168.3.82:8080/works/cms-onlyhi/src/main/webapp",
      CMSPCAPI='https://getaway.onlyeduhi.cn';
      // CMSPCAPI='http://172.16.20.97:8523';
}
else if (location.host == "192.168.0.20:8080") //开发环境
{
  var CMSAPI = 'http://cmsapi.onlyeduhi.cn',
      CLIENTAPI = 'http://clienttest.haiketang.net',
      CRMAPI = 'http://192.168.0.11:8080/onlyhi-admin',//忠星测试
      CRMAPI = 'http://192.168.0.4:8081',//明珠测试
      skip = "http://192.168.3.82:8080/works/cms-onlyhi/src/main/webapp";
}
else //其他默认正式
{
  var CMSAPI = 'http://cmsapi.onlyeduhi.cn',
    CRMAPI = 'https://api.onlyeduhi.cn',
    CMSPCAPI='https://getaway.onlyeduhi.cn/cms/server',
    // CRMAPI = 'http://192.168.0.4:8081',//明珠测试
    //   CRMAPI = 'https://crmapi.onlyhi.cn',
    CLIENTAPI = 'http://clienttest.haiketang.net',
    skip = "http://www.onlyeduhi.cn";
}
