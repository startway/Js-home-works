//   1................................

var userMoney = +prompt('Ваш бюджет','');
var userShopName = prompt('Название Вашего магазина','');


var mainList = {
	money: userMoney,
	shopName: userShopName ,
	shopGoods: [],
	employers:{},
	open:''
};

for(var i = 0; i < 3; i++){
	mainList.shopGoods[i] = prompt('Какой тип товара будем продавать?', '');
}

alert(mainList.money/30);


// УСЛОЖНЕННОЕ ЗАДАНИЕ (НЕОБЯЗАТЕЛЬНОЕ):
// Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
// 1) Создать переменную num со значением 33721
// ·        Вывести в консоль произведение (умножение) цифр этого числа.
// 2) Полученный результат возвести в степень 3, используя только 1 оператор
// ·        Вывести его на экран
// 3) Создать свой репозиторий на GitHub и поместить туда папку с усложненным заданием