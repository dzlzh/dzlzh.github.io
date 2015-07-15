var _config = {
    blog_name       : 'DZLZH\'s Blog',                   // 博客名称
    owner           : 'lifesinger',                  // github 用户名
    //owner           : 'D-ZL',                  // github 用户名
    //repo            : 'D-ZL.github.io',        // github 中对应项目名
    repo            : 'lifesinger.github.com',        // github 中对应项目名
    duoshuo_id      : 'dzlzh',                 // 在第三方评论插件多说申请站点的子域名
    access_token    : '9959ff17e7be8021a65b'+'d5e2a5ef2f1c1a075acc',        // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉
    per_page        : '15'                     // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};
