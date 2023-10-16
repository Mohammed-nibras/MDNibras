let sample_data = [{
        Brand: "U.S. POLO ASSN",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/g/h/g/l-usshtfx0027-u-s-polo-assn-original-imagkv3d9rqppkhh.jpeg?q=70",
        names: "Men Regular Fit Solid Casual Shirt",
        price: "AED 80",
        actualprice: "AED 100"
    },
    {
        Brand: "PUMA",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/6/s/z/m-67779761-puma-original-imagpz7wtghuxktv.jpeg?q=70",
        names: "Men Printed Crew Neck Pure Cotton Blue T-Shirt",
        price: "AED 120",
        actualprice: "AED 150"
    },
    {
        Brand: "PUMA",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/i/d/b/m-67332156-puma-original-imagsnykytjpm6y5.jpeg?q=70",
        names: "Men Printed Crew Neck Pure Cotton Black T-Shirt",
        price: "AED 120",
        actualprice: "AED 150"
    }, {
        Brand: "ADIDAS",
        img_src: "https://rukminim2.flixcart.com/image/832/832/l33cia80/t-shirt/x/j/k/m-hs6925-adidas-original-imageaggxzqmpfph.jpeg?q=70",
        names: "Men Solid Round Neck Polyester Black T-Shirt",
        price: "AED 110",
        actualprice: "AED 130"
    },
    {
        Brand: "PUMA",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/h/y/e/m-67810101-puma-original-imagpjyvgygfz2xx.jpeg?q=70",
        names: "Men Solid Black Track Pants",
        price: "AED 120",
        actualprice: "AED 150"
    },
    {
        Brand: "ADIDAS",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/o/l/g/m-iq1605-adidas-original-imagsjsgnusrg63k.jpeg?q=70",
        names: "Men Solid Dark Blue Track Pants",
        price: "AED 110",
        actualprice: "AED 130"
    },
    {
        Brand: "PUMA",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/b/n/z/-original-imagzry3qsukxcpb.jpeg?q=70",
        names: "Ferrari Neo Cat Mid Sneakers For Men  (Black)",
        price: "AED 850",
        actualprice: "AED 100"
    },
    {
        Brand: "NIKE",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/t/q/-original-imagnkxgbh9zemky.jpeg?q=70",
        names: "ZOOM VAPOR PRO 2 HC Sneakers For Men  (Black)",
        price: "AED 750",
        actualprice: "AED 850"
    },
    {
        Brand: "PUMA",
        img_src: "https://rukminim2.flixcart.com/image/832/832/kjkbv680-0/top/s/i/2/3xl-58686601-puma-original-imafz3z3rh7akgab.jpeg?q=70",
        names: "Casual Regular Sleeves Solid Women Black Top",
        price: "AED 120",
        actualprice: "AED 150"
    },
    {
        Brand: "Tokyo Talkies ",
        img_src: "https://rukminim2.flixcart.com/image/832/832/kz3118w0/dress/e/f/1/s-ttj6006231-tokyo-talkies-original-imagb6by6bhhhacb.jpeg?q=70",
        names: "Ms Logo Tee Men Solid Round Neck Cotton Blend Blue T-Shirt",
        price: "AED 40",
        actualprice: "AED 60"
    },
    {
        Brand: "REEBOK",
        img_src: "https://rukminim2.flixcart.com/image/832/832/kmp7ngw0/t-shirt/x/q/1/s-ft8177-reebok-original-imagfjndvmj6sjzx.jpeg?q=70",
        names: "Women Printed Round Neck Pure Cotton White T-Shirt",
        price: "AED 90",
        actualprice: "AED 110"
    },
    {
        Brand: "NIKE",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/n/x/r/s-dd1329-010-nike-original-imaggtxhhh2rzjse.jpeg?q=70",
        names: "Casual Regular Sleeves Solid Women Black Top",
        price: "AED 100",
        actualprice: "AED 120"
    },
    {
        Brand: "NIKE",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/tight/6/u/k/l-cz8529-010-nike-original-imag869qgczhh3nn-bb.jpeg?q=70",
        names: "Solid Women Black Tights",
        price: "AED 110",
        actualprice: "AED 120"
    },
    {
        Brand: "ADIDAS",
        img_src: "https://rukminim2.flixcart.com/image/832/832/k0wqwsw0/short/p/d/g/s-du3493-adidas-original-imafkhjvwrk2ryyw.jpeg?q=70",
        names: "Solid Women Black Running Shorts",
        price: "AED 90",
        actualprice: "AED 120"
    },
    {
        Brand: "PUMA",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/o/o/-original-imagfh9ugwqvcmqs-bb.jpeg?q=70",
        names: "Zod Runner V3 Wn's Sneakers For Women (Pink)",
        price: "AED 510",
        actualprice: "AED 630"
    },
    {
        Brand: "Skechers",
        img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/k/q/6-128105-9-skechers-black-original-imagtwh6h4hv6r99.jpeg?q=70",
        names: "GO RUN ELEVATE Running Shoes For Women (Purple)",
        price: "AED 410",
        actualprice: "AED 530"
    },


];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product() {

    collection.map((element) => {

        let box = document.createElement("div");


        let price1 = document.createElement("span");
        price1.innerHTML = element.price
        price1.className = "price1"
        let price2 = document.createElement("span");
        price2.innerHTML = element.actualprice
        price2.className = "price2"
        let avatar = document.createElement("img");
        avatar.src = element.img_src;
        avatar.className = "avatar"
        let brand = document.createElement("p");
        brand.innerHTML = element.Brand;
        brand.className = "brand"
        let names = document.createElement("p");
        names.innerHTML = element.names;
        names.className = "names"
        box.append(avatar, brand, names, price1, price2);
        document.getElementById("collection").append(box);

    })
}