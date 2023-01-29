function initMenu(){
    let str = "<div style='text-align: center'>";
//     str += "<a href='/goods-info.html'><div class='btn btn-primary'>藏品信息</div></a>";
//     str += "<a href='/add-goods.html'><div class='btn btn-primary'>增加藏品</div></a>";
//     str += "<a href='/add-relationship.html'><div class='btn btn-primary'>藏品关联</div></a>";
//     str += "<a href='/show/graph.html'><div class='btn btn-primary'>关联展示</div></a>";
    str += "<a href='/nftcn/static-js.html'><div class='btn btn-primary'>公共js</div></a>";
    str += "<a href='/nftcn/statistics-position.html'><div class='btn btn-primary'>持仓统计</div></a>";
    $("body").prepend(str+"</div>");
}
