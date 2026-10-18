"use strict";
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
    let totalCost = order.size;
    totalCost += order.toppings.reduce((sum, toppingCost) => sum + toppingCost, 0);
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
    let sizeInput = prompt("Оберіть розмір морозива:\n1 - Маленька склянка (10 грн)\n2 - Велика склянка (25 грн)", "1");
    let selectedSize = sizeInput === "2" ? IceCreamSize.Large : IceCreamSize.Small;
    // Вибір начинок
    let selectedToppings = [];
    let isAddingToppings = true;
    while (isAddingToppings) {
        let toppingInput = prompt("Оберіть начинку (можна декілька, мінімум 1):\n1 - Шоколад (+5 грн)\n2 - Карамель (+6 грн)\n3 - Ягоди (+10 грн)\n\nАбо натисніть 'Скасувати' / введіть '0', щоб завершити вибір начинок.");
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
    let marshmallowInput = prompt("Бажаєте посипати маршмеллоу (+5 грн)?\n1 - Так\n2 - Ні", "2");
    let hasMarshmallow = marshmallowInput === "1";
    // Формуємо об'єкт замовлення
    const myOrder = {
        size: selectedSize,
        toppings: selectedToppings,
        hasMarshmallow: hasMarshmallow
    };
    // Рахуємо фінальну ціну
    const finalPrice = calculateIceCreamCost(myOrder);
    // ==========================================
    // НОВЕ: Формуємо красивий чек для виводу
    // ==========================================
    const sizeText = getSizeName(myOrder.size);
    // Перетворюємо масив значень [5, 6] у масив слів ["Шоколад", "Карамель"] і з'єднуємо їх через кому
    const toppingsText = myOrder.toppings.map(getToppingName).join(", ");
    const marshmallowText = myOrder.hasMarshmallow ? "Так" : "Ні";
    // Створюємо текст чеку з перенесенням рядків (\n)
    const receipt = `Ваше морозиво готове! 🍦\n
Ваш вибір:
- Розмір: ${sizeText}
- Начинки: ${toppingsText}
- Додано маршмеллоу: ${marshmallowText}

Загальна вартість: ${finalPrice} грн.`;
    // Виводимо чек на екран
    alert(receipt);
}
// Запускаємо програму
createOrderFromPrompt();
// Вирішує проблему дублювання файлів у VS Code
//  export {};
