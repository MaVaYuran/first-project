const clientName = 'Igor';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount;

if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime >= 500) {
  discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentForAllTime += clientSpentToday;

todayWithDiscount = clientSpentToday - clientSpentToday * (discount / 100);
clientSpentToday = todayWithDiscount;
alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);
//решила общую сумму считать в пользу клиента и добавить сумму счёта до скидки, а не реально оплаченных денег.
//из условия поняла, что так и имелось ввиду
