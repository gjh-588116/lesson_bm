var name = 'xiaoli';

function showName(){
    var name2 = 'lihua';
    console.log(name);
    function add(){
        console.log('嵌套',name2);
    }
    add();
}
showName();
{
    var name1 = 'lilei';
    name = 'lihua';
    {

    }
}
console.log(name1);