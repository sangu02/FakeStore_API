let product_list=document.getElementById('product_list')

async function fetchData(){
    let res=await fetch('https://fakestoreapi.com/products')
    let data=await res.json()
    console.log(data);
    for(let obj of data){
        let newElement=document.createElement('section');
        newElement.setAttribute('class','product');

        let product_img=document.createElement('img');
        product_img.src=obj.image

        newElement.append(product_img)
        product_list.append(newElement)

        newElement.addEventListener('click',()=>{
            getProduct(obj)
        })
    }
    
}
fetchData()
function getProduct(obj){
    let pro_img=document.getElementById('pro_img')
    let category=document.getElementById('category')
    let title=document.getElementById('title')
    let description=document.getElementById('description')
    let price=document.getElementById('price')

    console.log(obj);
    pro_img.src=obj.image;
    category.innerText=obj.category
    title.innerText=obj.title
    description.innerText=obj.description
    price.innerText=`RS.${obj.price}/-`


    
}