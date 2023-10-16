let arr = [{
        img_src: "https://subwaystudio.com.my/wp-content/uploads/2016/01/ecommerce-subway-studio-malaysia.gif",
        title: "Grocery",
    },
    {
        img_src: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone12Pro-back-camera-magsafe-charger_10132020_carousel.gif.large.gif",
        title: "Mobiles",
    },
    {
        img_src: "https://www.sneakermuseumoakland.org/wp-content/uploads/2021/02/Sneaker_Logos_banner_Mobile.gif",
        title: "Fashion",

    },
    {
        img_src: "https://images.thequint.com/thequint%2F2021-01%2F75a46468-75fe-4441-9d4e-b456d97e3f9c%2Fmicrosoft.gif",
        title: "Electronic",
    },
    {
        img_src: "https://i.gifer.com/HZ4J.gif",
        title: "Home And Furtinure",
    },
    {
        img_src: "https://img.global.news.samsung.com/my/wp-content/uploads/2020/01/KBIS2020-Sketch_main6.gif",
        title: "Aappliances",
    },
    {
        img_src: "https://cdn.dribbble.com/users/112518/screenshots/4612754/long-version-v4.gif",
        title: "Travel",
    },
    {
        img_src: "https://i.gifer.com/Fmyg.gif",
        title: "Beauty And Toys",
    },
    {
        img_src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf148e71918967.5bd6105168340.gif",
        title: "Bikes",
    },
];

function openNewPage(imgSrc) {
    let pageUrl = "";
    if (imgSrc.includes("https://www.sneakermuseumoakland.org/wp-content/uploads/2021/02/Sneaker_Logos_banner_Mobile.gif")) {
        pageUrl = "Product.html";
    }
    if (imgSrc.includes("Mobiles")) {
        pageUrl = "Product.html";
    }
    window.location.href = pageUrl;

}
arr.forEach((element) => {
    let image = document.createElement('img');
    image.src = element.img_src;
    image.addEventListener('click', function() {
        openNewPage(element.img_src);
    });
    let title = document.createElement('p');
    title.innerHTML = element.title;
    let box = document.createElement('div');
    box.append(image, title);
    document.getElementById("categories").append(box);



});