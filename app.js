// // 1. Визначаємо ціни за допомогою Enum (Перерахувань)
// enum IceCreamSize {
//     Small = 10,
//     Large = 25
// }
// enum Topping {
//     Chocolate = 5,
//     Caramel = 6,
//     Berries = 10
// }
// enum Addon {
//     Marshmallow = 5
// }
// // 2. Створюємо інтерфейс для замовлення
// interface Order {
//     size: IceCreamSize;
//     toppings: Topping[];
//     hasMarshmallow: boolean;
// }
// // 3. Функція для розрахунку вартості
// function calculateIceCreamCost(order: Order): number {
//     let totalCost = order.size; // Додаємо ціну за розмір
//     // Додаємо ціну за всі обрані начинки за допомогою reduce
//     totalCost += order.toppings.reduce((sum, toppingCost) => sum + toppingCost, 0);
//     // Додаємо ціну за маршмеллоу, якщо воно обране
//     if (order.hasMarshmallow) {
//         totalCost += Addon.Marshmallow;
//     }
//     return totalCost;
// }
// // 4. Функція для взаємодії з користувачем через prompt
// function createOrderFromPrompt(): void {
//     alert("Вітаємо у магазині морозива!");
//     // Вибір розміру
//     let sizeInput = prompt("Оберіть розмір морозива:\n1 - Маленька склянка (10 грн)\n2 - Велика склянка (25 грн)", "1");
//     let selectedSize = sizeInput === "2" ? IceCreamSize.Large : IceCreamSize.Small;
//     // Вибір начинок (мінімум одна)
//     let selectedToppings: Topping[] = [];
//     let isAddingToppings = true;
//     while (isAddingToppings) {
//         let toppingInput = prompt("Оберіть начинку (можна декілька, мінімум 1):\n1 - Шоколад (+5 грн)\n2 - Карамель (+6 грн)\n3 - Ягоди (+10 грн)\n\nАбо натисніть 'Скасувати' / введіть '0', щоб завершити вибір начинок.");
//         if (toppingInput === "1") selectedToppings.push(Topping.Chocolate);
//         else if (toppingInput === "2") selectedToppings.push(Topping.Caramel);
//         else if (toppingInput === "3") selectedToppings.push(Topping.Berries);
//         else if (toppingInput === "0" || toppingInput === null) {
//             if (selectedToppings.length === 0) {
//                 alert("Ви повинні обрати хоча б одну начинку!");
//             } else {
//                 isAddingToppings = false;
//             }
//         } else {
//             alert("Невідомий вибір, спробуйте ще раз.");
//         }
//     }
//     // Вибір додаткового посипання
//     let marshmallowInput = prompt("Бажаєте посипати маршмеллоу (+5 грн)?\n1 - Так\n2 - Ні", "2");
//     let hasMarshmallow = marshmallowInput === "1";
//     // Формуємо об'єкт замовлення
//     const myOrder: Order = {
//         size: selectedSize,
//         toppings: selectedToppings,
//         hasMarshmallow: hasMarshmallow
//     };
//     // Рахуємо та виводимо результат
//     const finalPrice = calculateIceCreamCost(myOrder);
//     alert(`Ваше морозиво готове!\nЗагальна вартість: ${finalPrice} грн.`);
//     console.log(`Загальна вартість замовлення: ${finalPrice} грн.`);
// }
// // Запускаємо програму
// createOrderFromPrompt();
// export {};
// 1. Визначаємо ціни за допомогою Enum (Перерахувань)
var IceCreamSize;
(function (IceCreamSize) {
    IceCreamSize[IceCreamSize["Small"] = 10] = "Small";
    IceCreamSize[IceCreamSize["Large"] = 25] = "Large";
})(IceCreamSize || (IceCreamSize = {}));
var Topping;
(function (Topping) {
    Topping[Topping["Chocolate"] = 5] = "Chocolate";
    Topping[Topping["Caramel"] = 6] = "Caramel";
    Topping[Topping["Berries"] = 10] = "Berries";
})(Topping || (Topping = {}));
var Addon;
(function (Addon) {
    Addon[Addon["Marshmallow"] = 5] = "Marshmallow";
})(Addon || (Addon = {}));
// 3. Функція для розрахунку вартості
function calculateIceCreamCost(order) {
    var totalCost = order.size;
    totalCost += order.toppings.reduce(function (sum, toppingCost) { return sum + toppingCost; }, 0);
    if (order.hasMarshmallow) {
        totalCost += Addon.Marshmallow;
    }
    return totalCost;
}
// ==========================================
// НОВЕ: Функції для розшифровки вибору користувача
// ==========================================
function getSizeName(size) {
    return size === IceCreamSize.Large ? "Велика склянка" : "Маленька склянка";
}
function getToppingName(topping) {
    switch (topping) {
        case Topping.Chocolate: return "Шоколад";
        case Topping.Caramel: return "Карамель";
        case Topping.Berries: return "Ягоди";
        default: return "Невідомо";
    }
}
// ==========================================
// 4. Функція для взаємодії з користувачем через prompt
function createOrderFromPrompt() {
    alert("Вітаємо у магазині морозива!");
    // Вибір розміру
    var sizeInput = prompt("Оберіть розмір морозива:\n1 - Маленька склянка (10 грн)\n2 - Велика склянка (25 грн)", "1");
    var selectedSize = sizeInput === "2" ? IceCreamSize.Large : IceCreamSize.Small;
    // Вибір начинок
    var selectedToppings = [];
    var isAddingToppings = true;
    while (isAddingToppings) {
        var toppingInput = prompt("Оберіть начинку (можна декілька, мінімум 1):\n1 - Шоколад (+5 грн)\n2 - Карамель (+6 грн)\n3 - Ягоди (+10 грн)\n\nАбо натисніть 'Скасувати' / введіть '0', щоб завершити вибір начинок.");
        if (toppingInput === "1")
            selectedToppings.push(Topping.Chocolate);
        else if (toppingInput === "2")
            selectedToppings.push(Topping.Caramel);
        else if (toppingInput === "3")
            selectedToppings.push(Topping.Berries);
        else if (toppingInput === "0" || toppingInput === null) {
            if (selectedToppings.length === 0) {
                alert("Ви повинні обрати хоча б одну начинку!");
            }
            else {
                isAddingToppings = false;
            }
        }
        else {
            alert("Невідомий вибір, спробуйте ще раз.");
        }
    }
    // Вибір маршмеллоу
    var marshmallowInput = prompt("Бажаєте посипати маршмеллоу (+5 грн)?\n1 - Так\n2 - Ні", "2");
    var hasMarshmallow = marshmallowInput === "1";
    // Формуємо об'єкт замовлення
    var myOrder = {
        size: selectedSize,
        toppings: selectedToppings,
        hasMarshmallow: hasMarshmallow
    };
    // Рахуємо фінальну ціну
    var finalPrice = calculateIceCreamCost(myOrder);
    // ==========================================
    // НОВЕ: Формуємо красивий чек для виводу
    // ==========================================
    var sizeText = getSizeName(myOrder.size);
    // Перетворюємо масив значень [5, 6] у масив слів ["Шоколад", "Карамель"] і з'єднуємо їх через кому
    var toppingsText = myOrder.toppings.map(getToppingName).join(", ");
    var marshmallowText = myOrder.hasMarshmallow ? "Так" : "Ні";
    // Створюємо текст чеку з перенесенням рядків (\n)
    var receipt = "\u0412\u0430\u0448\u0435 \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u043E \u0433\u043E\u0442\u043E\u0432\u0435! \uD83C\uDF66\n\n\u0412\u0430\u0448 \u0432\u0438\u0431\u0456\u0440:\n- \u0420\u043E\u0437\u043C\u0456\u0440: ".concat(sizeText, "\n- \u041D\u0430\u0447\u0438\u043D\u043A\u0438: ").concat(toppingsText, "\n- \u0414\u043E\u0434\u0430\u043D\u043E \u043C\u0430\u0440\u0448\u043C\u0435\u043B\u043B\u043E\u0443: ").concat(marshmallowText, "\n\n\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C: ").concat(finalPrice, " \u0433\u0440\u043D.");
    // Виводимо чек на екран
    alert(receipt);
}
// Запускаємо програму
createOrderFromPrompt();
// Вирішує проблему дублювання файлів у VS Code
//  export {};
