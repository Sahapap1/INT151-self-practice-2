const thaiMenu = {
    restaurant: "อาหารไทยตำรับบ้าน",
    categories: [
        {
            name: "เมนูจานหลัก",
            items: [
                { id: 1, name: "ผัดกะเพราไก่ไข่ดาว", price: 60, spicy: true },
                { id: 2, name: "ข้าวผัดกุ้ง", price: 55, spicy: false },
                { id: 3, name: "ผัดไทยกุ้งสด", price: 70, spicy: false }
            ]
        },
        {
            name: "แกง",
            items: [
                { id: 4, name: "แกงเขียวหวานไก่", price: 80, spicy: true },
                { id: 5, name: "แกงส้มชะอมกุ้ง", price: 85, spicy: true },
                { id: 6, name: "แกงจืดเต้าหู้หมูสับ", price: 65, spicy: false }
            ]
        },
        {
            name: "ของทานเล่น",
            items: [
                { id: 7, name: "ปอเปี๊ยะทอด", price: 50, spicy: false },
                { id: 8, name: "ไก่ทอดน้ำปลา", price: 75, spicy: false },
                { id: 9, name: "ส้มตำไทย", price: 55, spicy: true }
            ]
        },
        {
            name: "ของหวาน",
            items: [
                { id: 10, name: "ข้าวเหนียวมะม่วง", price: 90, spicy: false },
                { id: 11, name: "ทับทิมกรอบ", price: 60, spicy: false },
                { id: 12, name: "ลอดช่องน้ำกะทิ", price: 50, spicy: false }
            ]
        }
    ]
}

const menuList = document.getElementById('menuList')

const restaurantName = document.getElementById('restaurantName')
restaurantName.textContent = thaiMenu.restaurant



for (item of thaiMenu.categories) {
    console.log(item);
    for (menu of item.items) {
        const liElement = document.createElement('li')
        liElement.setAttribute('style', 'padding: 16px; background-color: #fff; border: 1px solid #ddd; margin-bottom: 6px; cursor: pointer; display: flex;')
        liElement.textContent = `${menu.name} ราคา ${menu.price} ${menu.spicy ? "เผ็ด" : "ไม่เผ็ด"}`
        menuList.append(liElement)

    }

}